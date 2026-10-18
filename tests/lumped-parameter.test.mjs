import test from 'node:test';
import assert from 'node:assert/strict';
import {
  simulateThermalRc,
  thermalTimeConstant,
} from '../docs/assets/lumped-parameter.mjs';

function approximatelyEqual(actual, expected, tolerance = 1e-10) {
  assert.ok(
    Math.abs(actual - expected) <= tolerance,
    `expected ${actual} to be within ${tolerance} of ${expected}`,
  );
}

test('reports the product of thermal resistance and capacitance as the time constant', () => {
  assert.equal(thermalTimeConstant(0.25, 2000), 500);
});

test('matches the exact first-order response to a constant heat-load step', () => {
  const samples = simulateThermalRc({
    thermalResistanceKW: 0.25,
    thermalCapacitanceJK: 2000,
    sinkTemperatureC: 25,
    initialTemperatureC: 25,
    baselineHeatLoadW: 0,
    stepHeatLoadW: 100,
    stepTimeS: 0,
    durationS: 500,
    timeStepS: 60,
  });

  const finalSample = samples.at(-1);
  assert.equal(finalSample.timeS, 500);
  approximatelyEqual(finalSample.temperatureC, 25 + 25 * (1 - Math.exp(-1)));
  assert.equal(finalSample.heatLoadW, 100);
});

test('keeps an off-grid heat-load step as an exact sample boundary', () => {
  const samples = simulateThermalRc({
    thermalResistanceKW: 0.5,
    thermalCapacitanceJK: 200,
    sinkTemperatureC: 20,
    initialTemperatureC: 20,
    baselineHeatLoadW: 0,
    stepHeatLoadW: 10,
    stepTimeS: 75,
    durationS: 100,
    timeStepS: 60,
  });

  const stepSample = samples.find((sample) => sample.timeS === 75);
  assert.deepEqual(stepSample, { timeS: 75, temperatureC: 20, heatLoadW: 10 });
});

test('rejects nonphysical and out-of-range model inputs', () => {
  assert.throws(() => thermalTimeConstant(0, 100), /positive/);
  assert.throws(() => simulateThermalRc({
    thermalResistanceKW: 0.25,
    thermalCapacitanceJK: 2000,
    sinkTemperatureC: 25,
    initialTemperatureC: 25,
    baselineHeatLoadW: 0,
    stepHeatLoadW: 100,
    stepTimeS: 601,
    durationS: 600,
    timeStepS: 10,
  }), /within the simulation duration/);
});

test('rejects a plot sample interval that would create too many samples', () => {
  assert.throws(() => simulateThermalRc({
    thermalResistanceKW: 0.25,
    thermalCapacitanceJK: 2000,
    sinkTemperatureC: 25,
    initialTemperatureC: 25,
    baselineHeatLoadW: 0,
    stepHeatLoadW: 100,
    stepTimeS: 0,
    durationS: 600,
    timeStepS: 0.1,
  }), /at most 5000 samples/);
});

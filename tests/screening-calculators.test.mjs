import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateCOP,
  calculateLiquidMassFlow,
  calculateMaximumThermalResistance,
  calculateStorageMass,
  calculateTemperatureRise,
} from '../docs/assets/screening-calculators.mjs';

test('calculates an allowable thermal resistance from a temperature limit', () => {
  assert.equal(calculateMaximumThermalResistance(60, 25, 120), 35 / 120);
});

test('calculates a resistance-network temperature rise', () => {
  assert.ok(Math.abs(calculateTemperatureRise(120, 0.27) - 32.4) < 1e-12);
});

test('calculates a first-pass single-phase liquid mass-flow rate', () => {
  assert.equal(calculateLiquidMassFlow(5000, 4000, 5), 0.25);
});

test('calculates an idealized sensible-storage mass', () => {
  assert.equal(calculateStorageMass(1.2e6, 4000, 10), 30);
});

test('uses a declared system boundary for COP', () => {
  assert.equal(calculateCOP(10, 2.5, 0.5), 10 / 3);
});

test('rejects zero or negative denominators in screening calculations', () => {
  assert.throws(() => calculateMaximumThermalResistance(60, 25, 0), /positive/);
  assert.throws(() => calculateLiquidMassFlow(5000, 4000, 0), /positive/);
  assert.throws(() => calculateCOP(10, 0, 0), /positive/);
});

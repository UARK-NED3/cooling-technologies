function finiteNumber(value, name) {
  if (typeof value === 'string' && value.trim() === '') {
    throw new Error(`${name} must be a finite number.`);
  }
  const number = Number(value);
  if (!Number.isFinite(number)) throw new Error(`${name} must be a finite number.`);
  return number;
}

function positiveNumber(value, name) {
  const number = finiteNumber(value, name);
  if (number <= 0) throw new Error(`${name} must be positive.`);
  return number;
}

function nonnegativeNumber(value, name) {
  const number = finiteNumber(value, name);
  if (number < 0) throw new Error(`${name} must be zero or positive.`);
  return number;
}

const MAXIMUM_SAMPLES = 5000;

export function thermalTimeConstant(thermalResistanceKW, thermalCapacitanceJK) {
  return positiveNumber(thermalResistanceKW, 'Thermal resistance')
    * positiveNumber(thermalCapacitanceJK, 'Thermal capacitance');
}

function simulationTimes(durationS, timeStepS, stepTimeS) {
  const times = new Set([0, durationS, stepTimeS]);
  for (let timeS = timeStepS; timeS < durationS; timeS += timeStepS) {
    times.add(timeS);
  }
  return [...times].sort((left, right) => left - right);
}

/**
 * Simulate C_th dT/dt = Q_dot - (T - T_sink) / R_th.
 *
 * The response is evaluated exactly for each interval of constant heat load;
 * timeStepS controls samples for plotting rather than numerical accuracy.
 */
export function simulateThermalRc({
  thermalResistanceKW,
  thermalCapacitanceJK,
  sinkTemperatureC,
  initialTemperatureC,
  baselineHeatLoadW = 0,
  stepHeatLoadW,
  stepTimeS = 0,
  durationS,
  timeStepS,
}) {
  const thermalResistance = positiveNumber(thermalResistanceKW, 'Thermal resistance');
  const thermalCapacitance = positiveNumber(thermalCapacitanceJK, 'Thermal capacitance');
  const sinkTemperature = finiteNumber(sinkTemperatureC, 'Sink temperature');
  const initialTemperature = finiteNumber(initialTemperatureC, 'Initial temperature');
  const baselineHeatLoad = nonnegativeNumber(baselineHeatLoadW, 'Baseline heat load');
  const stepHeatLoad = nonnegativeNumber(stepHeatLoadW, 'Step heat load');
  const stepTime = nonnegativeNumber(stepTimeS, 'Step time');
  const duration = positiveNumber(durationS, 'Duration');
  const timeStep = positiveNumber(timeStepS, 'Time step');

  if (stepTime > duration) {
    throw new Error('Step time must be within the simulation duration.');
  }
  if (Math.ceil(duration / timeStep) + 1 > MAXIMUM_SAMPLES) {
    throw new Error(`Choose a larger time step to produce at most ${MAXIMUM_SAMPLES} samples.`);
  }

  const timeConstant = thermalTimeConstant(thermalResistance, thermalCapacitance);
  const times = simulationTimes(duration, timeStep, stepTime);
  const samples = [];
  let temperature = initialTemperature;

  for (let index = 0; index < times.length; index += 1) {
    const timeS = times[index];
    const heatLoadW = timeS >= stepTime ? stepHeatLoad : baselineHeatLoad;
    samples.push({ timeS, temperatureC: temperature, heatLoadW });

    const nextTimeS = times[index + 1];
    if (nextTimeS === undefined) continue;

    const intervalHeatLoadW = timeS >= stepTime ? stepHeatLoad : baselineHeatLoad;
    const steadyTemperatureC = sinkTemperature + intervalHeatLoadW * thermalResistance;
    temperature = steadyTemperatureC
      + (temperature - steadyTemperatureC) * Math.exp(-(nextTimeS - timeS) / timeConstant);
  }

  return samples;
}

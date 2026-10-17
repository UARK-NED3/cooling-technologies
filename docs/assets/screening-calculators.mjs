function finiteNumber(value, name) {
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

export function calculateMaximumThermalResistance(limitTemperatureC, sinkTemperatureC, heatLoadW) {
  const limit = finiteNumber(limitTemperatureC, 'Temperature limit');
  const sink = finiteNumber(sinkTemperatureC, 'Sink temperature');
  const heatLoad = positiveNumber(heatLoadW, 'Heat load');
  return (limit - sink) / heatLoad;
}

export function calculateTemperatureRise(heatLoadW, thermalResistanceKW) {
  const heatLoad = positiveNumber(heatLoadW, 'Heat load');
  const thermalResistance = positiveNumber(thermalResistanceKW, 'Thermal resistance');
  return heatLoad * thermalResistance;
}

export function calculateLiquidMassFlow(heatLoadW, specificHeatJPerKgK, permittedRiseK) {
  const heatLoad = positiveNumber(heatLoadW, 'Heat load');
  const specificHeat = positiveNumber(specificHeatJPerKgK, 'Specific heat');
  const temperatureRise = positiveNumber(permittedRiseK, 'Permitted temperature rise');
  return heatLoad / (specificHeat * temperatureRise);
}

export function calculateStorageMass(energyJ, specificHeatJPerKgK, permittedRiseK) {
  const energy = positiveNumber(energyJ, 'Stored energy');
  const specificHeat = positiveNumber(specificHeatJPerKgK, 'Specific heat');
  const temperatureRise = positiveNumber(permittedRiseK, 'Permitted temperature rise');
  return energy / (specificHeat * temperatureRise);
}

export function calculateCOP(coolingDutyKW, compressorInputKW, auxiliaryInputKW = 0) {
  const coolingDuty = positiveNumber(coolingDutyKW, 'Cooling duty');
  const compressorInput = nonnegativeNumber(compressorInputKW, 'Compressor input');
  const auxiliaryInput = nonnegativeNumber(auxiliaryInputKW, 'Auxiliary input');
  const totalInput = compressorInput + auxiliaryInput;
  if (totalInput <= 0) throw new Error('Total electrical input must be positive.');
  return coolingDuty / totalInput;
}

function numberFrom(form, name) {
  return form.elements.namedItem(name).value;
}

function setResult(form, text, status = 'result') {
  const output = form.querySelector('[data-result]');
  output.textContent = text;
  output.dataset.status = status;
}

function bindCalculator(form, calculation) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    try {
      const result = calculation(form);
      setResult(form, result);
    } catch (error) {
      setResult(form, error.message, 'error');
    }
  });
  form.requestSubmit();
}

function format(value, digits = 3) {
  return Number(value).toLocaleString(undefined, { maximumFractionDigits: digits });
}

if (typeof document !== 'undefined') {
  document.querySelectorAll('[data-calculator]').forEach((form) => {
    const calculator = form.dataset.calculator;
    if (calculator === 'resistance') {
      bindCalculator(form, (currentForm) => {
        const resistance = calculateMaximumThermalResistance(
          numberFrom(currentForm, 'limit-temperature'),
          numberFrom(currentForm, 'sink-temperature'),
          numberFrom(currentForm, 'heat-load'),
        );
        if (resistance <= 0) {
          return `Result: ${format(resistance)} K/W. A passive steady-state path to this sink cannot hold the stated temperature limit; reconsider the sink or cooling mechanism.`;
        }
        return `Maximum total source-to-sink resistance: ${format(resistance)} K/W.`;
      });
    }

    if (calculator === 'rise') {
      bindCalculator(form, (currentForm) => {
        const rise = calculateTemperatureRise(
          numberFrom(currentForm, 'heat-load'),
          numberFrom(currentForm, 'thermal-resistance'),
        );
        return `Predicted source-to-sink temperature rise: ${format(rise)} K (numerically the same difference in °C).`;
      });
    }

    if (calculator === 'flow') {
      bindCalculator(form, (currentForm) => {
        const flow = calculateLiquidMassFlow(
          numberFrom(currentForm, 'heat-load'),
          numberFrom(currentForm, 'specific-heat'),
          numberFrom(currentForm, 'permitted-rise'),
        );
        return `First-pass mass-flow target: ${format(flow, 4)} kg/s (${format(flow * 60, 3)} kg/min).`;
      });
    }

    if (calculator === 'storage') {
      bindCalculator(form, (currentForm) => {
        const mass = calculateStorageMass(
          numberFrom(currentForm, 'energy'),
          numberFrom(currentForm, 'specific-heat'),
          numberFrom(currentForm, 'permitted-rise'),
        );
        return `Idealized sensible-storage mass: ${format(mass)} kg.`;
      });
    }

    if (calculator === 'cop') {
      bindCalculator(form, (currentForm) => {
        const cop = calculateCOP(
          numberFrom(currentForm, 'cooling-duty'),
          numberFrom(currentForm, 'compressor-input'),
          numberFrom(currentForm, 'auxiliary-input'),
        );
        return `COP at the declared system boundary: ${format(cop)}.`;
      });
    }
  });
}

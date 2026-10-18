# Module 5 — Performance, energy, and sustainability

## Central question

**How much useful cooling does a system provide, what resources does it require, and under which operating conditions?**

## Learning objectives

You will use basic cooling-performance metrics, distinguish component and system boundaries, and identify resource tradeoffs that must be reported with a cooling claim.

## Define the metric boundary

Metrics are meaningful only when the numerator and denominator refer to the same stated boundary and time period. For a refrigeration unit, the coefficient of performance for cooling is

$$
\mathrm{COP}_{\mathrm{R}} = \frac{\dot{Q}_{\mathrm{cooling}}}{\dot{W}_{\mathrm{input}}}
$$

The cooling duty may be measured at an evaporator or at a load. The input power may include only a compressor or also fans, pumps, controls, and heat-rejection equipment. Both choices can be useful, but they answer different questions. Always report the boundary.

For a single phase heat exchanger or loop, useful quantities may include heat duty, approach temperature, fluid temperature rise, pressure drop, pumping power, and maximum component temperature. For thermal storage, include stored energy, usable temperature range, charge/discharge power, standby loss, and recharge conditions.

## Temperature lift and irreversible losses

Moving heat across a larger temperature difference generally requires more work or more heat-exchanger area. Pressure drop, finite temperature differences, electrical resistance, fan and pump power, throttling, and nonideal compression create losses. A cooling approach should therefore be compared at the actual load, environment, and control state—not only at a rated point.

## Resource and environmental boundary

Cooling decisions can involve electricity, water, refrigerant inventory, materials, maintenance, and heat rejected to the surroundings. A responsible comparison should state, at minimum:

- the source and time basis of electricity data;
- water withdrawal and consumption definitions, if water is used;
- refrigerant identity, charge, containment, and applicable safety/environmental requirements;
- operating climate or sink condition; and
- whether embodied impacts, replacement, and end-of-life are included.

Do not infer a system-level environmental benefit solely from a favorable component COP. A system that reduces compressor power but increases water consumption, heat rejection, or material burden needs a comparison at a common boundary.

## Worked check: boundary changes the answer

Suppose a unit removes 10 kW from a load. The compressor uses 2.5 kW, while fans and pumps use 0.5 kW. Then

$$
\mathrm{COP}_{\mathrm{R,compressor}} = \frac{10\ \mathrm{kW}}{2.5\ \mathrm{kW}} = 4.0,
$$

whereas the system boundary that includes the auxiliaries gives

$$
\mathrm{COP}_{\mathrm{R,system}} = \frac{10\ \mathrm{kW}}{(2.5 + 0.5)\ \mathrm{kW}} = 3.33.
$$

Neither result is “more correct” without a stated purpose. The second is generally more suitable for comparing whole cooling systems serving the same load.

## Common failure mode

**Comparing nominal capacities or COP values at unmatched conditions.** Capacity and efficiency vary with temperature lift, flow rate, part load, humidity, fouling, and controls. Compare performance maps or measurements at matched requirements whenever possible.

## Check for understanding

Two systems each report a COP of 4. Which three boundary or operating-condition details must be checked before claiming equal energy performance? See [Learning checks](../learning-checks.md#module-5).

## Transfer task

Create a metric table for your selected concept: useful cooling duty, maximum protected temperature, sink temperature, electrical input, water use if applicable, and the measurement or data source needed for each.

Next: [Module 6 — A screening-level cooling decision](06-screening-decision.md).

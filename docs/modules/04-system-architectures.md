# Module 4 — Cooling-system architectures

## Central question

**How are heat source, transport path, heat exchanger, controls, and heat sink connected into a reliable cooling system?**

## Learning objectives

You will recognize common cooling architectures and explain how flow distribution, interfaces, control, and heat rejection affect a system beyond the component level.

## A cooling system has at least two sides

Every sustained cooling system needs a source side and a sink side. The source side collects heat from the protected object. The sink side releases that heat to air, water, ground, or another process. Between them may be a conductive spreader, a pumped fluid loop, a phase-change device, or a refrigeration cycle.

```text
heat source -> interface -> transport path -> heat exchanger -> environmental / process sink
                    ^                              |
                    |                              v
                sensing and control <---- flow, temperature, pressure
```

The chain is only as strong as its most restrictive link. A high-performance cold plate cannot compensate for a warm secondary loop; a large condenser cannot fix inadequate thermal contact at the source.

## Common architectures

| Architecture | Typical path | Appropriate when | Key design questions |
| --- | --- | --- | --- |
| Air-cooled heat sink | Source → spreader/fins → air → room/outdoors | Modest heat flux and accessible air | Airflow rate, bypass, recirculation, dust, noise |
| Single-phase liquid loop | Source → cold plate → liquid → heat exchanger → sink | Compact transport or high local heat flux | Flow distribution, pressure drop, leaks, corrosion, pump control |
| Two-phase transport device | Source → evaporator → vapor/liquid transport → condenser → sink | Small temperature difference is valuable | Charge, orientation, capillary limit, dryout, containment |
| Vapor-compression system | Cooled space → evaporator → compressor → condenser → sink | Required temperature is below available sink | Refrigerant selection, compression work, defrost, safety, controls |
| Chilled-water / secondary loop | Loads → water loop → chiller / heat rejection | Multiple distributed loads | Part-load efficiency, water treatment, isolation, redundancy |

## Flow and energy balance for a single-phase loop

For a well-mixed liquid stream that gains heat from a load,

\[
\dot Q_{load}=\dot m c_p(T_{out}-T_{in}).
\]

This relation determines the average fluid temperature rise, not the maximum component temperature. That maximum also depends on the local heat-transfer coefficient, contact resistance, flow maldistribution, and transient behavior.

### Worked check

A water-based loop removes 5 kW while allowing a 5 K mean fluid temperature rise. Using an illustrative \(c_p=4.0\ \mathrm{kJ/(kg\,K)}\),

\[
\dot m=\frac{5000}{(4000)(5)}=0.25\ \mathrm{kg/s}.
\]

The calculation establishes a first-pass mass-flow target. It does **not** provide the required pump head: that depends on pipe geometry, fittings, cold plates, flow regime, fluid properties at the operating state, and parallel-branch distribution.

## Controls are part of the thermal architecture

Sensors, actuators, and control logic influence temperatures as directly as physical components. A fan curve, pump speed, compressor capacity, valve position, or storage dispatch should be tied to the variable it is intended to regulate. Poor sensor location can yield stable control of the wrong temperature.

At minimum, specify the measured location, sampling interval, actuator limits, protective shutdown condition, and behavior if a sensor or flow path fails.

## Common failure mode

**Using average loop temperature as proof that every component is safe.** Parallel cold plates can receive unequal flow; an entrained gas pocket or partially closed valve can create a local temperature excursion with little change in the bulk return temperature.

## Check for understanding

For a distributed 5 kW load, name two conditions that can make the 0.25 kg/s flow estimate insufficient even if its energy balance is correct. See [Learning checks](../learning-checks.md#module-4).

## Transfer task

Sketch the source side, transport path, sink side, sensors, and actuators for one plausible architecture from Module 3. Mark one single-point failure and one uncertainty that requires data.

Next: [Module 5 — Performance, energy, and sustainability](05-performance-energy-sustainability.md).

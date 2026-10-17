# Module 1 — Why cooling matters

## Central question

**What must remain within what temperature limit, for how long, and under what surroundings?** Cooling is not simply making something cold. It is maintaining a required thermal state while heat is generated internally or enters from the environment.

## Learning objectives

By the end of this module, you can define a cooling problem with a system boundary, a heat load, a temperature requirement, a time basis, and a heat-rejection destination.

## Start with the energy balance

For a control volume with negligible changes in kinetic and potential energy,

\[
\frac{dU}{dt}=\dot Q_{in}-\dot Q_{out}+\dot W_{in}-\dot W_{out}.
\]

For many cooling problems, it is useful to group internal electrical, chemical, or mechanical dissipation into a heat-generation term \(\dot Q_{gen}\). At steady state, a simple statement becomes

\[
\dot Q_{removed}=\dot Q_{gen}+\dot Q_{from\ surroundings}.
\]

The equality does not say that all heat-transfer paths are equally important. It says that a sustained temperature requires heat to leave at the same average rate that it enters or is generated.

## Define the problem before naming a technology

Record these quantities:

| Item | Questions to answer | Typical unit |
| --- | --- | --- |
| System boundary | Which component or volume needs protection? | — |
| Heat load | How much heat is generated, and is it steady or transient? | W or kW |
| Temperature requirement | Maximum, minimum, and allowable nonuniformity? | °C or K |
| Environment / heat sink | Indoor air, outdoor air, water, ground, another process stream? | °C or K |
| Time basis | Seconds, duty cycle, seasonal profile, lifetime? | s, h, or profile |
| Constraints | Space, noise, water, power, mass, maintenance, cost, safety? | stated limit |

Temperature is an intensive state variable; heat is energy in transit. A system can be at a moderate average temperature while a small junction, surface, or hotspot is above its allowable limit. Therefore, specify where the temperature is measured or predicted.

## Worked check: a small enclosure

An electronic enclosure dissipates \(\dot Q_{gen}=120\ \mathrm{W}\). Its surface exchanges heat with room air at \(25\ ^\circ\mathrm{C}\). The component requirement is initially stated only as “keep it cool.” That statement is incomplete. A usable preliminary requirement might be: keep the maximum component case temperature below \(60\ ^\circ\mathrm{C}\) during continuous operation in \(25\ ^\circ\mathrm{C}\) room air.

The permitted temperature rise is \(35\ \mathrm{K}\). The next module turns that limit into an allowable total thermal resistance:

\[
R_{th,allow}=\frac{60-25}{120}=0.292\ \mathrm{K/W}.
\]

This is a **derived, screening-level** target. It is not enough to select hardware because contact resistance, airflow, radiation, and internal heat spreading have not yet been modeled.

## Common failure mode

**Using ambient temperature as the protected-component temperature.** A temperature sensor on an enclosure wall can be much cooler than a heat-generating junction. The relevant path may include a die, package, interface material, heat spreader, and air-side heat exchanger.

## Check for understanding

A battery module produces 2 kW for 10 minutes and 200 W otherwise. Name three inputs, beyond the 2 kW value, that determine whether a passive thermal mass, forced air, or liquid loop could be appropriate. Then compare your answer with [Learning checks](../learning-checks.md#module-1).

## Transfer task

Write a five-line problem statement for one system you know. Label every numerical input as measured, reported, assumed, or unknown. Do not select equipment yet.

Next: [Module 2 — Heat, temperature, and thermal resistance](02-thermal-fundamentals.md).

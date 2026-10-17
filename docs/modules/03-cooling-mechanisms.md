# Module 3 — Cooling mechanisms

## Central question

**Which physical mechanism can create an adequate heat path at the required temperature level?**

## Learning objectives

You will compare cooling mechanisms by the temperature lift, heat flux, environment, resources, and failure modes that determine their applicability.

## Mechanism-first comparison

| Approach | Dominant heat path | Strength | Important limitation |
| --- | --- | --- | --- |
| Passive conduction and radiation | Solid conduction and surface radiation | Silent, simple, low maintenance | Limited by area, conductivity, and sink temperature |
| Natural or forced air | Convection to air | Accessible and low fluid inventory | Air has low volumetric heat capacity; noise and recirculation can dominate |
| Single-phase liquid | Convection to a liquid loop | High heat capacity and compact transport | Leaks, pumping power, corrosion, and flow distribution require control |
| Two-phase / heat-pipe transport | Evaporation and condensation | High effective transport with modest temperature difference | Pressure, charge, dryout, orientation, and containment constraints |
| Vapor-compression refrigeration | Refrigeration cycle rejects heat above sink temperature | Can maintain a volume below ambient | Compressor power, refrigerant safety, and heat rejection are required |
| Evaporative cooling | Water evaporation to air | Can reduce temperature toward ambient wet-bulb conditions | Performance depends on humidity; water and hygiene management matter |
| Thermal energy storage | Sensible or latent stored energy | Shifts heat in time and reduces peaks | Storage is finite; recharge and losses matter |

No row is universally “best.” For example, a cold plate can remove heat from a small high-flux component effectively, while a building may favor a chilled-water distribution system because distance, aggregation, maintenance, and seasonal conditions dominate.

## Temperature lift defines feasibility

The temperature lift is the difference between the controlled temperature and the available heat-rejection temperature. If the object must stay below the available sink temperature, passive heat rejection alone cannot hold steady state; a refrigeration, evaporative, ground-coupled, or other process that accesses a lower effective temperature may be necessary.

Evaporative cooling does not cool air below its thermodynamic wet-bulb limit for the specified air state. Likewise, a vapor-compression system does not create “free” cooling: the cycle rejects the heat removed from the cooled space plus compressor and auxiliary work.

## Worked check: storage for a short duty cycle

Consider the 2 kW battery-module heat pulse in Module 1. Over 10 minutes, the heat generated during the pulse is

\[
Q=\dot Q\,t=(2000\ \mathrm{W})(600\ \mathrm{s})=1.2\ \mathrm{MJ}.
\]

If a thermal mass is allowed to rise by 10 K and has a representative specific heat of \(4\ \mathrm{kJ/(kg\,K)}\), the idealized mass required is

\[
m=\frac{1.2\times10^6}{(4000)(10)}=30\ \mathrm{kg}.
\]

This result is illustrative: it ignores heat transfer into the mass, packaging, nonuniform temperature, heat loss, and the need to reject stored heat after the pulse. It nevertheless shows why transient duty cycle can change the feasible mechanism.

## Common failure mode

**Comparing mechanisms by heat load alone.** A 1 kW load at 80 °C with dry outdoor air is not the same problem as a 1 kW load held at 5 °C in humid indoor air. The required temperature, transient profile, and sink condition are equally important.

## Check for understanding

Name one condition that would rule out (a) passive air cooling, (b) direct evaporative cooling, and (c) a liquid loop. Compare your reasoning with [Learning checks](../learning-checks.md#module-3).

## Transfer task

For your Module 1 system, create a three-column table: plausible mechanisms, required conditions, and the first uncertainty to resolve.

Next: [Module 4 — Cooling-system architectures](04-system-architectures.md).


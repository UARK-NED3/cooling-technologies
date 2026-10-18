# Cooling technology atlas

## Purpose and boundary

This atlas is a mechanism-first orientation aid for engineers who have no single application in mind. It is **not** a universal performance ranking, a sizing guide, a procurement list, or a substitute for current standards, manufacturer data, and qualified review. A technology can be appropriate only after the protected location, heat load and time basis, source/sink temperatures, resource limits, and failure consequences are stated.

The categories overlap: a real system commonly combines several of them. For example, a liquid loop can transport heat to a vapor-compression chiller, use thermal storage to shift time, and recover useful heat at another boundary.

## Technology families at the system level

| Family | Physical function in the heat path | First model to build | Resource or boundary to declare | First limit to investigate |
| --- | --- | --- | --- | --- |
| Conduction and thermal spreading | Moves heat through solids and interfaces | Resistance network; add spatial conduction if gradients matter | Contact pressure, area, materials, geometry | Contact resistance, anisotropy, local hot spot |
| Radiation | Exchanges heat between surfaces | Radiative exchange with absolute temperatures and view geometry | Surface temperature, emissivity, view, surroundings | Small temperature difference, blocked view, uncertain surface condition |
| Natural or forced air | Conveys heat to air and an air-side exchanger | Energy balance plus convection/pressure-drop model | Inlet temperature, humidity, recirculation, fan boundary | Air-side resistance, flow distribution, noise, fouling |
| Single-phase liquid loop | Conveys heat in a liquid to a heat exchanger or sink | Loop energy balance, then hydraulic/thermal network | Fluid, state, flow, pump, sink, material compatibility | Pressure drop, branch distribution, leak consequence, local convection |
| Passive two-phase transport (for example, heat pipes) | Uses phase change to move heat with little pumping work | Regime-appropriate thermal-resistance/transport-limit model | Orientation, fill, geometry, condenser sink | Capillary, sonic, boiling, or condenser limits; orientation |
| Pumped two-phase cooling | Uses circulation and phase change for heat transport | Regime-specific mass/energy/momentum model | Fluid, pressure, quality, distribution, containment | Stability, dryout, distribution, pressure relief, safety |
| Vapor-compression or heat-pump system | Upgrades/rejects heat across a temperature lift | Refrigeration-cycle model with a declared power boundary | Source/sink states, part-load condition, auxiliaries, refrigerant | Capacity at condition, controls, defrost, safety and regulatory requirements |
| Evaporative, indirect evaporative, or desiccant systems | Uses air/water psychrometrics or sorption to condition a sink | Psychrometric/energy/water balance | Dry-bulb, wet-bulb, humidity, water quality, air path | Climate envelope, water use, hygiene, scaling, drift |
| Thermal energy storage | Shifts thermal energy across time | Storage energy balance plus charge/discharge rate model | Duty cycle, initial state, loss, recharge path | Rate limit, cycling, volume/mass, recovery time |
| Ground, water, or ambient-side heat exchange | Uses an environmental sink or source | Heat-exchanger and seasonal/environmental model | Sink temperature history, water/land constraints, system boundary | Seasonal availability, fouling, permitting, environmental impact |
| Absorption or adsorption cooling | Uses thermal or chemical potential to provide cooling | Cycle model with source/sink temperatures and heat inputs | Heat-source quality, cooling water/sink, part-load state | Source-temperature lift, size, transient response, auxiliary loads |
| Thermoelectric cooling | Uses electrical work for solid-state heat pumping | Coupled electrical/thermal model | Current, hot-side sink, contact resistance, power boundary | Heat rejection at hot side, efficiency, maximum temperature lift |

## How to compare candidates without a false ranking

Use a common system boundary and complete this short comparison before assigning a preferred option:

1. **Temperature feasibility:** What protected temperature and sink state are required? A method cannot provide steady cooling below the relevant available sink without work or another driving potential.
2. **Time behavior:** Is the load steady, pulsed, seasonal, or rapidly varying? Include thermal mass and control response rather than comparing steady ratings alone.
3. **Heat path:** What interfaces, transport steps, exchangers, and rejection devices are included? Mark the dominant resistance or unknown.
4. **Resource boundary:** Which electrical input, water, heat source, refrigerant, space, maintenance, and noise terms are inside the comparison?
5. **Failure mode:** What happens if flow, fan speed, sink condition, power, containment, or control is lost? The answer can select the necessary evidence even before a technology is chosen.

The [engineering screening tools](engineering-tools.html) and [lumped-parameter simulator](lumped-parameter-model.html) can support only the first bounded calculations. Use the [validation ladder](validation-ladder.md) to select the next analysis, experiment, or measurement.

## State of practice

For a dated, maintainable map of cross-cutting practice and emerging directions, see [Cooling technology state of practice](state-of-practice.md). It links authoritative source families rather than freezing a literature review or an equipment-performance claim into this course.

Return to [Module 3](modules/03-cooling-mechanisms.md) for the foundational mechanisms, [Module 4](modules/04-system-architectures.md) for system architecture, or the [course home](index.md).

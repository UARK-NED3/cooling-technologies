# Workshop assessment and cases

## Use and scoring boundary

These activities assess workshop learning at a screening level. They are not a secure examination, certification assessment, or design qualification. Participants may use the course equations, units, and stated assumptions. The [facilitator guide](facilitator-guide.md) gives expected reasoning and a rubric.

## Pre/post diagnostic

Use the same six prompts before and after the workshop. The pre-assessment identifies starting points; the post-assessment documents individual learning. A suggested passing evidence threshold for a completion record, if a host elects to use one, is 70% of the 12 available points plus participation in both cases. The host remains responsible for any attendance or credential policy.

1. A 120 W device must remain below 60 °C in 25 °C air. Calculate its allowable total source-to-air thermal resistance in K/W. **(2 points)**
2. State one condition under which `dU/dt = Q̇_in − Q̇_out + Ẇ_in − Ẇ_out` is appropriate, and one condition that requires mass-flow terms. **(2 points)**
3. Name two assumptions required for the simplified radiation relation used in Module 2. **(2 points)**
4. A liquid-water loop removes 6 kW with an allowed mean fluid rise of 4 K. Use the stated illustrative `c_p = 4.0 kJ/(kg K)` to estimate mass flow in kg/s. **(2 points)**
5. Give one reason that a correct bulk-fluid energy balance cannot prove that a component junction is below its limit. **(2 points)**
6. Label these inputs as measured, reported, assumed, derived, or unknown: a data-sheet dissipation value, a calculated flow rate, a not-yet-measured interface resistance, and a thermocouple reading. **(2 points)**

## Case A — Enclosure concept with limited temperature margin

**Scenario.** A power-electronics enclosure operates continuously in 35 °C room air. The protected location is the component case, with a maximum permitted case temperature of 85 °C. Dissipation at the stated duty is reported as 140 W. A proposed source-to-air path is modeled as three series resistances: `R_case–interface = 0.08 K/W`, `R_interface–spreader = 0.06 K/W`, and `R_air-side = 0.18 K/W`.

**Evidence status.** The 35 °C environment, 85 °C limit, 140 W dissipation, and resistance values are illustrative workshop inputs. The series-network model is a derived screening model. No component, material, or flow configuration is implied.

1. State the system boundary, protected temperature location, heat sink, and time basis. **(4 points)**
2. Calculate the allowable total resistance and the predicted case temperature. **(4 points)**
3. Identify the dominant series resistance and one uncertainty that could reverse the screening conclusion. **(2 points)**
4. Recommend one next measurement or model, with its required location or boundary condition. **(2 points)**

## Case B — Liquid-loop flow is not a cold-plate design

**Scenario.** A distributed electronics load rejects 8 kW to a single-phase liquid-water loop. The team allows a 7 K mean fluid temperature rise across the load. For an illustrative first-pass calculation only, use `c_p = 4.0 kJ/(kg K)` for liquid water near ambient conditions.

**Evidence status.** All numerical inputs and the constant property are illustrative assumptions. The energy balance estimates an average loop-flow target only; it does not define pump head, pressure rating, cold-plate thermal resistance, or the maximum component temperature.

1. Calculate the screening mass-flow target in kg/s. **(3 points)**
2. List three inputs or analyses required before selecting a pump. **(3 points)**
3. List two reasons a component can exceed its temperature limit even if the average fluid rise equals 7 K. **(2 points)**
4. Write a one-sentence bounded recommendation that states both the estimated flow and its limitation. **(2 points)**

# Facilitator guide

## Purpose and boundaries

This guide supports a four-hour instructor-led workshop using the [professional workshop track](professional-workshop.md). It provides expected reasoning, not a script or a substitute for subject-matter judgment. Adapt examples only when their property source, configuration, safety review, and rights to use the material are documented. Do not upload participant work, proprietary specifications, or controlled test data to the public repository.

## Before the session

- Review the current [evidence map](evidence-map.md) and [references](references-and-tools.md); identify any host-specific standards or safety requirements separately.
- Give participants the prework and specify that examples are illustrative screening exercises.
- Prepare accessible worksheets with equations in both symbolic and plain-language form; provide units in every numerical prompt.
- Decide in advance whether attendance, participation, or assessment evidence will be retained. If records are retained, state the purpose, access, retention period, and responsible host organization.

## Facilitation sequence

Use the agenda in [Professional workshop track](professional-workshop.md#four-hour-agenda). Before every calculation, ask: “What is our boundary, what is the protected location, and what inputs are assumed?” When a participant proposes an equipment selection, redirect to the evidence needed to support it. Keep calculations in SI units unless a comparison requires another unit system, and show the conversion explicitly.

## Expected diagnostic responses

| Prompt | Expected reasoning | Points |
| --- | --- | --- |
| 1 | `(60 − 25) / 120 = 0.292 K/W` | 2 |
| 2 | Closed, lumped, no-mass-transfer system for the stated relation; a flowing loop or ventilation stream needs enthalpy-flow terms | 2 |
| 3 | Any two: absolute temperature in kelvin; small isothermal gray surface; large isothermal enclosure; effective view factor of one | 2 |
| 4 | `ṁ = 6000 / (4000 × 4) = 0.375 kg/s` | 2 |
| 5 | Any one: local interface or spreading resistance, unequal flow, local heat-transfer coefficient, sensor location, transient behavior | 2 |
| 6 | Data sheet = reported; calculated flow = derived; unmeasured interface resistance = unknown; thermocouple reading = measured | 2 |

Accept equivalent terminology if the participant preserves the distinction between evidence categories.

## Case scoring notes

### Case A

- Allowable resistance: `(85 − 35) / 140 = 0.357 K/W`.
- Proposed series resistance: `0.08 + 0.06 + 0.18 = 0.32 K/W`.
- Predicted screening case temperature: `35 + 140 × 0.32 = 79.8 °C`.
- Screening margin: `85 − 79.8 = 5.2 K`.
- The air-side resistance is the largest stated series term. Accept interface resistance, airflow/recirculation, contact pressure, or reported dissipation as a consequential uncertainty if the learner explains how it affects the result.
- Strong next steps name both a method and a location or boundary condition: for example, measure case and inlet-air temperature at the stated duty, characterize interface resistance under mounting load, or model airflow with stated inlet temperature and flow boundary.

### Case B

- Flow target: `ṁ = 8000 / (4000 × 7) = 0.286 kg/s` (three significant figures).
- Pump-selection inputs can include pipe and fitting geometry, cold-plate pressure-drop data, flow regime and fluid property state, branch distribution, pump curve, control range, elevation/static head, and allowable pressure/leak constraints.
- Component-limit risks can include local interface resistance, nonuniform heat flux, maldistribution, entrained gas, a local flow restriction, inaccurate sensor placement, transient load, or a rise in coolant inlet temperature.
- A bounded recommendation states the calculation and limitation, for example: “Use 0.286 kg/s as a water-loop screening target at the stated 8 kW and 7 K assumptions; complete hydraulic and local thermal analyses before selecting a pump or claiming component-temperature compliance.”

## Completion evidence

For a host-managed completion record, retain only the minimum necessary evidence: date, version of course material, attendee identity if required by the host, attendance basis, and aggregate or individual assessment result under the host policy. This public repository does not collect attendance data or issue a completion record.

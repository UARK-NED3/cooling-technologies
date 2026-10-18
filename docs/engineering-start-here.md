# Start by engineering problem

This page is for an engineer arriving with a cooling question rather than a desire to complete a course. Start with the closest physical problem, make one bounded calculation, and record what would have to be true before a design claim is justified.

## Choose a starting path

| If your problem is primarily about… | Begin here | First useful output | Do not conclude yet |
| --- | --- | --- | --- |
| A component, package, or enclosure temperature | [Thermal path and resistance](modules/02-thermal-fundamentals.md), the [resistance tools](engineering-tools.html), and [Module 7](modules/07-lumped-parameter-models.md) for transient loads | Allowable total resistance, a source-to-sink path, and a bounded first-order transient response | Junction or local case temperature compliance without interface, geometry, and local-flow evidence |
| Cold plates, coolant loops, or distributed liquid loads | [System architectures](modules/04-system-architectures.md) and the [liquid-flow tool](engineering-tools.html) | Average fluid-rise flow target and a loop boundary | Pump selection, pressure-drop compliance, branch balance, or local component temperature |
| Immersion, boiling, or two-phase transport | [Cooling mechanisms](modules/03-cooling-mechanisms.md) and [BoilingBench activity](ned3-applied-examples.md) | Boundary statement and a measurement/data interpretation plan | Dryout margin, containment, or safe operating envelope |
| Rack, CDU, or facility-level heat rejection | [Performance and energy](modules/05-performance-energy-sustainability.md) and the [Data Center Explorer activity](ned3-applied-examples.md) | Common-boundary metric definition and conservation check | Calibrated facility energy or cooling performance |
| Below-ambient control or refrigeration | [Cooling mechanisms](modules/03-cooling-mechanisms.md) and the [COP tool](engineering-tools.html) | Required temperature lift and declared power boundary | Refrigerant selection, safety/compliance, or rated performance |
| A test, dataset, CFD result, or surrogate model | [Validation ladder](validation-ladder.md) and [NED3 examples](ned3-applied-examples.md) | Claim-evidence map and next verification action | Generalized performance or validation outside the stated regime |

## Fifteen-minute engineering triage

1. **Locate the protected variable.** Write the exact temperature location, limit, and time basis. “The enclosure” or “the rack” is not yet a protected location.
2. **Locate the heat and sink.** Record heat-load magnitude, duty cycle, spatial distribution if known, and sink temperature or state.
3. **Draw the boundary.** Mark the source, interfaces, transport path, heat exchanger, and sink. Write what is outside the drawing.
4. **Run one suitable screening relation.** Use [engineering screening tools](engineering-tools.html) only after writing the inputs and units.
5. **Name the result’s limit.** Identify the first unavailable input that could overturn it—often contact resistance, sink temperature, pressure drop, flow distribution, a property state, or a transient duty cycle.
6. **Select the next evidence step.** Use the [validation ladder](validation-ladder.md) and record it in the [assumption and evidence register](templates/assumption-evidence-register.md).

## Practical workspaces

Use these repository materials as a small engineering workspace:

- [Engineering screening tools](engineering-tools.html): transparent local calculations; input values stay in your browser.
- [Lumped-parameter thermal simulator](lumped-parameter-model.html): a local one-node transient screen; inputs stay in your browser.
- [Technology atlas](technology-atlas.md): system-level comparison prompts without a technology ranking.
- [Cooling problem definition](templates/cooling-problem-definition.md): start a traceable problem statement.
- [Assumption and evidence register](templates/assumption-evidence-register.md): distinguish measured, reported, simulated, derived, and assumed inputs.
- [Design-review checklist](templates/design-review-checklist.md): challenge a screening conclusion before sharing it.
- [Validation-plan template](templates/validation-plan.md): define the observation or model that could change a decision.
- [Cold-plate CFD screening case](case-studies/cold-plate-cfd-screening.md): see a worked public-data example.

## Boundary for industrial use

The materials are designed to help an engineer frame a problem, communicate assumptions, and identify the correct next analysis or measurement. They are not a substitute for confidential product requirements, in-house methods, manufacturer data, qualified review, or governing standards. Do not enter confidential dimensions, operating conditions, or restricted data into public issue trackers or submissions.

For the full learning sequence, return to the [self-paced study manual](self-paced-study-manual.md).

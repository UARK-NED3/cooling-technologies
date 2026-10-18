# Case study: public cold-plate CFD as screening evidence

## Engineering question

How can an engineer use a public CFD dataset to reason about a liquid-cooled cold plate without treating a simulation result as an equipment qualification?

This case uses the public [NED3 ColdPlate-CFD-2000sims dataset](https://huggingface.co/datasets/UARK-NED3/ColdPlate-CFD-2000sims). The source documentation describes 2,000 steady-state simulations of a liquid-cooled, dual-chip pin-fin cold plate and a geometry-specific POD-NN surrogate. Read the dataset card, license, DOI links, and limitations before using any file.

## System and evidence boundary

| Item | Case boundary |
| --- | --- |
| Evidence class | Public simulated CFD data and surrogate artifact |
| Modeled system | The declared dual-chip pin-fin cold-plate domain and its documented boundary conditions |
| Varied inputs | Two chip heat fluxes, two inlet mass-flow rates, and two inlet total temperatures |
| Useful outputs | Stated temperature fields and scalar temperature/flow results documented by the source |
| Excluded unless explicitly modeled elsewhere | Package junction/interface stack, external pump and loop, controls, facility heat sink, transients, manufacturing variation |

The dataset is useful because it fixes a geometry and samples a defined operating envelope. That is also its central limit: predictions are not a generic cold-plate rule.

## Screening workflow

### 1. State the protected output

Choose one output location or field statistic from the source documentation, such as a chip maximum temperature, an outlet temperature, or a stated field location. Do not replace it with “device temperature” unless the package/interface path is included in the evidence boundary.

### 2. Record the declared inputs

For the selected case, record both heat fluxes, both inlet mass-flow rates, and both inlet total temperatures, including their units. Mark them as **simulated boundary conditions**, not measured operating data. Record the dataset version and file identity in the [assumption and evidence register](../templates/assumption-evidence-register.md).

### 3. Perform an independent conservation check

Use a liquid-loop balance only when the fluid identity, property state, total heat load, and temperature locations are documented:

$$
\dot{Q}_{\mathrm{load}} = \dot{m}c_p(T_{\mathrm{out}} - T_{\mathrm{in}})
$$

This relation gives a bulk-fluid energy check. It does not reproduce a local chip temperature, establish convergence, or validate the CFD result. A disagreement can indicate a boundary mismatch, property-state mismatch, incomplete heat accounting, or a different output definition.

### 4. Read the pressure-drop limitation correctly

The dataset documentation notes that the released `pdrop_*` field suffix is misleading and that a pressure unit was not recorded in the deposit. Treat those values as relative until the original case setup supplies a unit. They must not be inserted into a pump-head calculation.

### 5. Write a bounded conclusion

An appropriate conclusion is: “Within the documented dual-chip pin-fin geometry, steady-state CFD model, and sampled boundary-condition envelope, the dataset supports comparison of its stated temperature outputs. It does not establish experimental performance, pump selection, transient response, or behavior of a different cold-plate geometry.”

## Transfer task: what would make the result design-ready?

Use the [validation ladder](../validation-ladder.md) to prepare a next-step table.

| Evidence gap | Needed addition | Example observation or check |
| --- | --- | --- |
| Package-to-cold-plate path | Interface and package model or measurement | Junction/case/interface locations, contact condition, and heat-load method |
| Actual loop delivery | Hydraulic network and pump evidence | Fluid state, tubing/fittings, cold-plate pressure drop with units, pump curve, branch balance |
| Transient duty | Time-resolved model or test | Load waveform, thermal mass, control response, sensor time base |
| Geometry/manufacturing difference | New simulation and/or relevant test | Revised geometry, tolerance, material, and boundary conditions |
| Model credibility | Verification and comparison to measurement | Mesh/convergence record and a configuration-matched temperature/flow comparison |

## What this case teaches

The dataset is valuable not because it removes engineering judgment, but because it makes the geometry, inputs, outputs, and model class inspectable. That visibility lets an engineer use it for a traceable screening comparison and identify the exact evidence needed for a higher-consequence conclusion.

Return to [Start by engineering problem](../engineering-start-here.md) or the [NED3 applied examples](../ned3-applied-examples.md).

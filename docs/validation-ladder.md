# Validation ladder: from screening calculation to qualified decision

## Purpose

Cooling conclusions should be matched to their evidence. This ladder is not a universal pass/fail sequence and does not replace a project-specific qualification plan. It makes clear what a calculation, model, dataset, or test can support—and what it cannot.

| Evidence level | Typical output | Minimum traceability | Still cannot establish | Appropriate next step |
| --- | --- | --- | --- | --- |
| 1. Problem definition | Protected location, heat-load and sink statement | Units, time basis, source, unknowns | Feasibility or performance | Measure/confirm inputs and draw boundary |
| 2. Analytical screening | Energy balance, resistance estimate, storage bound | Governing relation, assumptions, property state, units, limiting-case check | Detailed geometry, local peak temperature, hydraulic performance, safety | Sensitivity check, geometry model, or targeted measurement |
| 3. Detailed model | CFD, network model, cycle model, or reduced-order model | Geometry/configuration, boundary/initial conditions, solver/version, convergence, outputs | Experimental validation outside the modeled regime | Verification and comparison with relevant measurements |
| 4. Controlled test | Measured response in a defined configuration | Instrument calibration, locations, sampling/time basis, uncertainty, repeatability, configuration revision | Performance in untested conditions or product qualification | Operating-envelope tests and fault/variation assessment |
| 5. Operating-envelope evidence | Performance across stated load, sink, and control states | Test matrix, acceptance criteria, traceable configuration, uncertainty, failures | Compliance or readiness beyond the stated requirements | Independent review and project-specific qualification |
| 6. Qualified decision | Decision under an approved requirement set | Applicable standards, requirements traceability, reviewed evidence, change control | Future performance after uncontrolled changes | Sustainment, monitoring, and controlled revalidation |

## How to use the ladder

1. Mark the current evidence level for each material input and output. A test result may be Level 4 while a pump selection based on it remains only Level 2 if the hydraulic network is unknown.
2. State the intended claim. For example, “average coolant rise is consistent with the stated energy balance” is narrower than “the component will remain below its temperature limit.”
3. Identify the evidence gap between the current level and the intended claim.
4. Choose the smallest next action that resolves the highest-consequence gap.

## Common evidence mismatches

| Observation | Unsupported leap | Better statement |
| --- | --- | --- |
| A resistance calculation predicts 3 K margin | The product meets temperature requirements | The nominal model retains 3 K margin; characterize interface, sink, and local-flow uncertainty before a compliance claim. |
| CFD predicts low pressure drop | A specific pump will work | The modeled geometry has the stated pressure response; combine it with the actual fluid state, loop network, pump curve, and uncertainty. |
| A two-phase image stream looks stable | The system has dryout margin | The observed record is stable under its documented condition; define pressure, heat flux, geometry, and transient envelope before extending the claim. |
| A favorable COP is reported | The system is more efficient | The reported COP is favorable at its declared boundary and operating condition; compare matched system boundaries and states. |

## Minimum review questions

- What location, operating state, and time basis does the output represent?
- Which inputs are measured, reported, simulated, assumed, derived, or unknown?
- What is the dominant uncertainty or failure mode?
- Does the claim extend beyond the geometry, duty cycle, property state, or control boundary of the evidence?
- What next observation or model result would change the decision?

Use the [design-review checklist](templates/design-review-checklist.md) to document the review, or apply the ladder to the [cold-plate CFD screening case](case-studies/cold-plate-cfd-screening.md).

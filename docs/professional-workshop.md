# Professional workshop track: Thermal design for electronics

## Course profile

| Item | Workshop configuration |
| --- | --- |
| Title | Thermal Design for Electronics: From Junction Heat Paths to Cooling-System Decisions |
| Format | Four-hour, instructor-led workshop with individual calculations and small-group case discussion |
| Intended participants | Practicing engineers, graduate students, and technical leads who specify, analyze, test, or integrate electronics cooling systems |
| Prerequisites | Algebra, dimensional analysis, and familiarity with temperature and electrical power; prior heat-transfer coursework is helpful, not required |
| Prework | Modules [1](modules/01-why-cooling-matters.md), [2](modules/02-thermal-fundamentals.md), and [4](modules/04-system-architectures.md), plus the [evidence map](evidence-map.md) |
| Participant output | A traceable first-pass thermal problem statement, resistance model, liquid-loop estimate, and decision memo |
| Credential boundary | This repository does not award CEUs, PDHs, academic credit, or certification. Any credentialing must be independently arranged by the hosting organization. |

## Description

Electronics cooling decisions often begin with a local temperature requirement but must be made across a chain that includes the die or package, interface materials, heat spreaders, heat exchangers, coolant distribution, controls, and the final heat sink. This workshop teaches participants to turn that chain into a transparent screening model without mistaking a first-pass calculation for a validated design. Participants define a system boundary and protected temperature location; use stored-energy and flowing control-volume balances appropriately; construct a thermal-resistance network; compare air, liquid, and two-phase transport options; estimate liquid-loop flow from an energy balance; and identify the evidence needed before selecting hardware. Two illustrative electronics cases are used to expose common failure modes: unrecognized interface resistance and treating bulk coolant temperature as a component-temperature limit. The emphasis is on physical meaning, assumptions, units, validity limits, uncertainty, and decision traceability. The workshop is suitable for professionals who need to communicate thermal risk across design, test, packaging, and system-integration teams.

## Measurable learning outcomes

By the end of the workshop, a participant can:

1. write a thermal problem statement that identifies the protected location, thermal limit, heat load, boundary, time basis, and heat-rejection destination;
2. select a closed-system or flowing control-volume energy balance consistent with the stated boundary and sign convention;
3. calculate an allowable total thermal resistance and identify the series or parallel path most worth improving;
4. state the assumptions behind simplified conduction, convection, radiation, and phase-change relations;
5. estimate a single-phase liquid-loop mass-flow rate with units and identify why that estimate does not establish pump head or component safety; and
6. produce a screening-level recommendation that separates measured, reported, assumed, derived, and unknown inputs.

## Four-hour agenda

| Elapsed time | Activity | Participant evidence |
| --- | --- | --- |
| 0:00–0:15 | Framing, scope, diagnostic | Individual baseline response |
| 0:15–0:50 | Thermal problem definition and energy-balance boundaries | Annotated boundary diagram |
| 0:50–1:30 | Resistance networks and heat-transfer-model limits | Allowable-resistance calculation |
| 1:30–1:40 | Break | — |
| 1:40–2:15 | Case A: electronics enclosure and interface-resistance risk | Short written decision |
| 2:15–2:55 | Liquid loops, distribution, and Case B | Mass-flow calculation and risk list |
| 2:55–3:05 | Break | — |
| 3:05–3:35 | Cooling architecture, controls, performance, and evidence | Architecture sketch |
| 3:35–3:55 | Case synthesis and peer critique | Traceability table and recommendation |
| 3:55–4:00 | Post-assessment and close | Individual post-assessment |

## NED3 applied examples

Use the [NED3 applied examples](ned3-applied-examples.md) to replace or extend an illustrative calculation with source-aware activities. The recommended sequence is: start with the public dual-chip cold-plate CFD case, use the Data Center Cooling Explorer for a synthetic conservation exercise, and discuss the local hybrid-cooler inventory only in an instructor-led setting. The examples deliberately distinguish simulated, measured, local-inventory, and synthetic evidence.

## PDC-style outline (16 topics)

1. Define the protected temperature location and decision consequence.
2. Set the system boundary and time basis.
3. Distinguish stored energy from enthalpy transported by mass flow.
4. Establish the heat load and environmental heat gain.
5. Calculate an allowable total thermal resistance.
6. Map source-to-sink series and parallel resistance paths.
7. Apply simplified conduction and convection relations with matching areas.
8. State the radiation-model enclosure and temperature assumptions.
9. State the pressure and quality assumptions for phase-change heat transfer.
10. Compare air, liquid, two-phase, and refrigeration-enabled architectures.
11. Estimate liquid-loop flow from $\dot{Q}_{\mathrm{load}} = \dot{m}c_p\Delta T_{\mathrm{fluid}}$.
12. Separate energy-balance flow sizing from hydraulic and local thermal design.
13. Identify maldistribution, contact, recirculation, and control failure modes.
14. Define performance metrics with an explicit system boundary.
15. Build a source-and-assumption record for a screening decision.
16. Present a bounded recommendation and the next validation step.

## Delivery requirements

The instructor should use the [facilitator guide](facilitator-guide.md), [assessment and cases](assessment.md), [evidence map](evidence-map.md), and the current source links in [References and tools](references-and-tools.md). The host should provide a calculator, printed or accessible digital worksheets, and a way for participants to annotate a simple thermal-path diagram. Do not present the illustrative values or workshop calculations as component qualification, safety approval, or compliance evidence.

This format is informed by the four-hour professional-development-course structure publicly described by ECTC. It is independent material and is not an ECTC, ITherm, IEEE, ASHRAE, or University of Arkansas offering.

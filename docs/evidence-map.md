# Evidence map and model boundaries

## Purpose

This page distinguishes course teaching models from design-ready evidence. The course uses first-principles relations for screening and communication. It does not provide validated component ratings, a complete standards basis, or a substitute for a qualified design review.

| Course material | Evidence status in this course | Material assumptions and boundary | What must be added for design use |
| --- | --- | --- | --- |
| Module 1 stored-energy balance | Derived teaching relation | Closed, lumped system; no mass transfer; kinetic and potential energy neglected | A boundary diagram, time history, thermal masses, and enthalpy-flow terms whenever mass crosses the boundary |
| Module 1 flowing control-volume balance | Derived teaching relation | One-inlet/one-outlet notation shown generically; sign convention stated in the module | Measured or specified flow rates, thermodynamic states, shaft work, heat-transfer locations, and transient storage as applicable |
| Module 2 conduction and convection relations | Derived screening relations | One-dimensional or lumped paths; stated area must match the coefficient or geometry | Geometry, contact condition, temperature-dependent properties, flow regime, correlation validity, and uncertainty |
| Module 2 radiation relation | Derived screening relation | Small isothermal gray surface to a large isothermal enclosure, effective view factor of one | Surface properties, temperatures in kelvin, view factors, enclosure geometry, and a radiation-network model when needed |
| Module 2 phase-change relation | Derived screening relation | Complete phase change, or explicitly stated vapor-quality change, at a stated saturation pressure | Working-fluid identity, mixture composition, pressure, quality, heat losses, dryout/flooding margin, and current safety requirements |
| Module 4 liquid-loop example | Illustrative calculation | Liquid water near ambient conditions; constant `c_p = 4.0 kJ/(kg K)`; 5 kW load and 5 K mean rise are assumed | Property data at the actual state, hydraulic network, pump curve, local heat-transfer model, materials compatibility, controls, and fault analysis |
| Module 5 performance metrics | Derived accounting definitions | The system boundary is defined before input power and useful cooling are compared | Meter locations, time basis, parasitic loads, uncertainty, operating envelope, and the applicable rating method |
| All numerical examples | Illustrative unless explicitly cited otherwise | Values support reasoning practice, not procurement or safety decisions | Traceable source, version/date, units, applicability range, and independent review appropriate to the consequence |

## Authoritative source classes

- **Heat-transfer theory:** use an established heat-transfer text or a peer-reviewed source whose geometry and regime match the problem.
- **Fluid and material properties:** use a documented property source at the stated fluid composition, temperature, and pressure. The course links to [NIST REFPROP](https://www.nist.gov/srd/refprop) and the [NIST Chemistry WebBook](https://webbook.nist.gov/chemistry/) as starting points; select and record the actual model used.
- **Equipment performance:** use the manufacturer data sheet, test report, or a validated in-house measurement for the exact configuration and operating conditions.
- **Electronics thermal work:** identify the relevant current device/package characterization method and the required junction, case, board, or coolant reference location. Verify the current edition and applicability of any standard before relying on it.
- **Safety and compliance:** identify the governing jurisdiction, equipment category, and current codes, standards, and site procedures. For stationary refrigeration and air-conditioning in the United States, see the [EPA Section 608 resource](https://www.epa.gov/section608).

## Minimum traceability record

For each calculation that moves beyond a learning exercise, record the objective; decision consequence; system boundary; input source and version; units; property-evaluation state; geometry; assumptions; method or software version; output location and time basis; uncertainty or sensitivity; and reviewer or approval status. Mark every input as measured, reported, simulated, assumed, derived, or unknown.

# References and tools

These resources support further study and detailed analysis. They do not replace checking the current edition, license, applicability, and governing requirements for a specific project.

## Core references

- **Çengel, Boles, and Kanoglu, _Thermodynamics: An Engineering Approach_, 10th ed.** Use for energy-balance conventions and thermodynamic-property concepts. [Publisher record](https://www.mheducation.com/highered/product/thermodynamics-an-engineering-approach-cengel.html).
- **Bergman, Lavine, Incropera, and DeWitt, _Fundamentals of Heat and Mass Transfer_, 8th ed.** Use for the heat-transfer rate relations, resistance networks, and validity assumptions developed in Modules 2–5. [Publisher record](https://www.wiley.com/en-us/fundamentals-of-heat-and-mass-transfer-8th-edition-p-9781119353881).
- **ASHRAE Handbook.** A regularly updated professional reference for HVAC&R fundamentals, systems, equipment, and applications. See the [ASHRAE Handbook overview](https://www.ashrae.org/technical-resources/ashrae-handbook) for edition and access details.
- **NIST REFPROP.** Reference Fluid Thermodynamic and Transport Properties Database. Use the current fluid model, mixture definition, and property state when high-accuracy refrigerant or working-fluid properties matter. [NIST REFPROP](https://www.nist.gov/srd/refprop).
- **NIST Chemistry WebBook.** Public thermochemical and thermophysical data for many species; applicability and data source should be checked for each calculation. [NIST Chemistry WebBook](https://webbook.nist.gov/chemistry/).
- **U.S. EPA Section 608.** U.S. requirements and information for stationary refrigeration and air-conditioning refrigerant management. [Stationary Refrigeration and Air Conditioning](https://www.epa.gov/section608).

## Evidence map and electronics context

The [evidence map](evidence-map.md) identifies which relations in this course are derived teaching models, which values are illustrative, and what source class is needed before a result is used in a design decision. For electronics-focused work, consult the current applicable component, package, test-method, reliability, electrical-safety, and environmental requirements. This course does not reproduce or substitute for proprietary standards.

The [NED3 applied examples](ned3-applied-examples.md) provide source-bounded activities based on NED3 public datasets and software, alongside an instructor-only local inventory case. They are organized by evidence class rather than by laboratory branding.

The local [engineering screening tools](engineering-tools.html) provide transparent first-pass calculations. Record their inputs and limits with the [assumption and evidence register](templates/assumption-evidence-register.md), then use the [validation ladder](validation-ladder.md) before extending a result into a design claim.

| Course material | Primary teaching reference | Design-use source still required |
| --- | --- | --- |
| Module 1 energy balances | Thermodynamics text above | Actual boundary, flow states, measurements, and duty cycle |
| Module 2 heat-transfer relations and resistance networks | Heat-transfer text above | Geometry- and regime-matched property data or correlation |
| Modules 3–5 architectures and performance | Heat-transfer text and current ASHRAE Handbook as applicable | Current equipment data, test method, control boundary, and governing requirements |
| Module 4 fluid-loop example | Energy balance plus NIST property tools | Actual fluid composition, temperature, pressure, hydraulic network, and local thermal model |
| Professional workshop cases | Course evidence map and facilitator guide | A host-approved configuration and independently reviewed inputs before any design or training claim |

## Computational practice

For a calculation or model, record the tool and version; the fluid identity or mixture composition; property model; all input states and units; geometry; boundary and initial conditions; solver and convergence settings; and the output quantity/location/time basis. Treat a software result as simulated evidence unless it has been independently validated for the stated regime.

## Citation practice

When using reported properties, correlations, standards, rated equipment data, or measured results in a module addition, cite the primary or authoritative source next to the claim. A search result or an AI summary can help discover a source but is not sufficient evidence for a technical value.

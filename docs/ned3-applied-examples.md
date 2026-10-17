# NED3 applied examples and evidence boundaries

## Purpose

These examples connect the course's screening models to research artifacts maintained by the NED3 Laboratory. They are not interchangeable: a simulation dataset, a measured laboratory record, a reproducible protocol, and a synthetic teaching model support different claims. Read the linked source, version, license, and limitations before reuse.

| Example | Evidence class | Appropriate learning use | Do not use it to claim |
| --- | --- | --- | --- |
| Dual-chip pin-fin cold-plate CFD | Public simulated data and published surrogate artifact | Boundary-condition reasoning, temperature-field outputs, interpolation limits, and reproducible analysis | Experimental validation, a different cold-plate geometry, transient behavior, or a pressure-drop unit not recorded in the release |
| Hybrid liquid cooler for a 10 kV power module | Local laboratory inventory and work files; not copied into this course | Instructor-led thermal-path, measurement-plan, and evidence-gap exercise | Public-data availability, a general manifold-performance result, or a qualified product decision |
| BoilingBench-Multimodal immersion records | Public measured/reconstructed multimodal benchmark | Two-phase boundary definition, sensor synchronization, and evidence interpretation | General two-phase cooler sizing, dryout margin, or an equipment-safety decision |
| Data Center Cooling Explorer | Public synthetic teaching model | Conservation checks, first-order coolant-rise predictions, and model-boundary critique | Calibrated rack, cold-plate, CDU, pump, or facility performance |

## Example 1 - dual-chip liquid cold plate: simulation inputs are not a design specification

The public [ColdPlate-CFD-2000sims dataset](https://huggingface.co/datasets/UARK-NED3/ColdPlate-CFD-2000sims) contains 2,000 steady-state CFD simulations of a liquid-cooled dual-chip pin-fin cold plate. The released model varies two chip heat-flux inputs, two inlet mass-flow rates, and two inlet total temperatures. It stores temperature fields, selected scalar outputs, source code, and a POD-NN surrogate. The dataset is CC0 1.0 and links its Dryad DOI and primary article on the dataset card.

**System boundary.** Treat the CFD cold-plate domain, its six declared boundary conditions, and its steady-state temperature field as the modeled system. The result is simulated evidence. It does not include package-level junction resistance, external pump behavior, controls, or a facility heat sink unless those boundaries are explicitly modeled elsewhere.

**Workshop activity.** Open one dataset record or its documentation and create a one-page evidence sheet:

1. List the six inputs with units and classify them as boundary conditions rather than measured operating data.
2. Identify a protected output location: chip maximum temperature, outlet temperature, or a stated field location.
3. State one conclusion supported by the dataset and one conclusion that is blocked by its scope.
4. Locate the pressure-drop fields and explain why their unit must be recovered before they are used in a hydraulic calculation.

**Technical check.** The source documentation identifies the `pdrop_*` export suffix as misleading and reports that the pressure unit was not recorded in the deposit. Therefore, treat those values as relative data until the original case setup supplies their unit. The released surrogate is geometry-specific, interpolative within its sampled envelope, and steady-state only.

## Example 2 - hybrid liquid cooler: measurement plan before performance comparison

The local NED3 inventory describes a 150 W, 10 kV SiC MOSFET-module hybrid liquid-cooler study with 3D-printed nylon and aluminum manifold variants. The inventory records thermal resistance, pressure drop, and IR thermography, with liquid-flow cases from 100 to 550 mL/min. These are **reported local-inventory descriptors**, not values re-published in this course. The underlying work files remain outside this repository.

**Workshop activity.** Given the reported configuration, draw the path `module -> interface -> cold plate/manifold -> liquid -> heat exchanger -> sink`. Then create a measurement plan that separates:

- a component or case temperature measurement from a bulk-fluid temperature;
- a flow-rate measurement from a pump operating point;
- pressure drop across the cooler from pressure loss across the full loop; and
- a material/manifold comparison from a conclusion about all operating conditions.

**Evidence gap.** Before a quantitative comparison, obtain the coolant identity and property state, inlet temperature, heat-load method and uncertainty, sensor locations, flow-meter uncertainty, pressure-tap locations, geometry revision, and repeatability plan. Use the public [FlowLab toolkit](https://github.com/UARK-NED3/FlowLab) for an example of how a liquid-cooling experiment can document thermal-hydraulic signals, heater power, sensors, synchronization, and data analysis. The toolkit is a protocol resource; it is not evidence that this specific cooler has been validated under another condition.

## Example 3 - two-phase and immersion cooling: synchronize the physical record

The public [BoilingBench-Multimodal source repository](https://github.com/UARK-NED3/BoilingBench-Multimodal) and its associated benchmark include pool-boiling experiments as well as two closed-loop immersion-cooling runs. The public description identifies infrared records with HFE-7100 and water for the immersion runs, while the broader benchmark aligns derived thermal, image, and acoustic streams to a published time base.

**Workshop activity.** Choose an immersion or boiling record and write a boundary statement before interpreting any image or sensor trace. Identify the working fluid, pressure state, heated surface or device location, inlet/outlet or enclosure boundary, measurement time base, and a failure mode that a bulk energy balance cannot reveal. Then explain why `Q̇ = ṁ h_fg` alone does not establish local temperature, dryout margin, containment, or safe operating conditions.

For experimental setup, synchronization, and analysis conventions, see [BoilingLab](https://github.com/UARK-NED3/BoilingLab) and [AELab](https://github.com/UARK-NED3/AELab). Follow each repository's license and data-access instructions; do not copy large data files or raw laboratory records into course submissions.

## Example 4 - rack coolant rise: use a synthetic model to expose assumptions

The [Data Center Cooling Explorer](https://github.com/UARK-NED3/Data-Center-Cooling-Explorer) is an interactive MATLAB lesson built around the steady energy balance, thermal resistance, and thermal storage in a liquid-cooled rack. Its inputs are deliberately synthetic teaching assumptions. That makes it useful for a prediction-first activity: calculate the direction and approximate size of a coolant-temperature change, then identify the boundary and missing physics that prevent a hardware claim.

**Transfer task.** Use the Explorer to produce a short model-boundary critique. State which quantities are assumed, which are derived, what physical path is lumped into the thermal resistance, and what measured data would be required to turn the lesson into a calibrated rack or CDU model. The [Data Center Cooling Research Tools hub](https://github.com/UARK-NED3/Data-Center-Cooling-Research-Tools) can then help learners locate research tools across chip, rack, loop, and facility scales. Its synthetic benchmark cases are conservation checks, not empirical validation records.

## Use, attribution, and data handling

- Cite the canonical dataset, software, paper, and version specified by each source; the NED3 [Hugging Face organization page](https://huggingface.co/UARK-NED3) is a discovery layer, not a replacement for source-specific documentation.
- Do not load serialized model artifacts from an untrusted source. In particular, Python pickle files can execute code when loaded.
- Do not publish, attach, or commit raw local laboratory data, proprietary geometry, participant work, or credentials to this course repository.
- Use the examples to practice model boundaries, units, evidence status, and next-step validation—not to certify a component, cooling system, or safety condition.

For a complete public-data example, use the [cold-plate CFD screening case](case-studies/cold-plate-cfd-screening.md). It shows how to convert a dataset card into a bounded engineering conclusion and validation plan.

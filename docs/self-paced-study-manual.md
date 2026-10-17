# Self-paced study manual

## What this manual is for

This manual turns the six course modules into a deliberate independent-study pathway. Its goal is a defensible **screening-level** cooling concept: not a component selection, qualified design, safety approval, or credential. Work through the sequence in order because the design decision at the end depends on the heat source, temperature boundary, and model limitations established at the beginning.

The pathway is designed for approximately 10–11 hours of focused study. It assumes algebra, unit conversion, and energy conservation; it does not assume prior heat-transfer coursework. If you are new to thermal systems, use the longer end of each time range and write out every unit conversion.

## Before you begin

Choose a system that is real enough to make the questions meaningful, but non-confidential and low consequence. Suitable examples include a small electronics enclosure, a laboratory instrument, a refrigerated cabinet, a battery module, or a room-level heat source. Do not construct, modify, or operate cooling equipment from this material. Refrigerants, pressurized loops, electrical systems, rotating machinery, and water systems require qualified supervision and applicable procedures.

Create a study record with the following fields. Keep each value with its unit, source, date, and evidence status.

| Field | What to record | Evidence status options |
| --- | --- | --- |
| Protected variable | Temperature or other thermal quantity, exact location, allowable range | Measured, reported, assumed |
| Heat load | Magnitude, spatial location, duty cycle, and time basis | Measured, reported, derived, assumed |
| Heat sink | Temperature, flow or environmental condition, and variability | Measured, reported, assumed |
| Constraints | Geometry, mass, noise, water, power, maintenance, safety, cost | Reported, assumed, proposed |
| Model output | Temperature rise, flow estimate, stored energy, or metric | Derived, screening-level |
| Decision and gap | Current concept and the observation most likely to change it | Proposed, blocked, next evidence |

When a value is unavailable, write “unavailable”; do not replace it with an unstated estimate. That practice makes the next measurement or source check visible.

For a concise problem-first route, use [Start by engineering problem](engineering-start-here.md). The [engineering screening tools](engineering-tools.html) provide local, unit-explicit calculations that you can record in this study log.

## Ten- to eleven-hour study plan

| Session | Time | Study work | Tangible output |
| --- | ---: | --- | --- |
| 1. Define the problem | 75 min | Read [Module 1](modules/01-why-cooling-matters.md); set the protected location, heat load, time basis, and sink | One-paragraph problem statement |
| 2. Build the heat path | 105 min | Read [Module 2](modules/02-thermal-fundamentals.md); draw the thermal path and calculate a resistance-based temperature rise | Resistance network with units |
| 3. Screen mechanisms | 90 min | Read [Module 3](modules/03-cooling-mechanisms.md); compare at least three mechanisms at the required temperature level | Feasibility table |
| 4. Sketch the system | 105 min | Read [Module 4](modules/04-system-architectures.md); define source, transport, sink, sensing, and control | Architecture sketch and loop balance |
| 5. Compare on a common boundary | 75 min | Read [Module 5](modules/05-performance-energy-sustainability.md); state performance metrics and their boundaries | Metric table |
| 6. Study an applied example | 90 min | Use one [NED3 applied example](ned3-applied-examples.md); distinguish data from claims | One-page evidence sheet |
| 7. Make and audit the decision | 90 min | Read [Module 6](modules/06-screening-decision.md); write and challenge the concept memo | One-page screening memo |
| 8. Consolidate | 30 min | Revisit every “assumed” or “blocked” entry and set one next action | Completion checklist |

The total is about 11 hours including the final review. It is appropriate to split a session over several days; preserve the time basis of the problem when you return.

## Study routine for every session

1. **Predict before reading.** Write a qualitative prediction and the unit you expect the result to have.
2. **Define the boundary.** Mark what is inside the model, what is outside it, and where heat crosses the boundary.
3. **Calculate with units.** Carry units through each line. For example, `W × K/W = K`, which checks a resistance-network temperature rise.
4. **Sanity-check the result.** Compare with a limiting case: no heat load should give no heat-flow temperature rise; lower resistance or larger flow should not increase the predicted rise in the same model.
5. **Record the limitation.** Name the model assumption most likely to invalidate the estimate.
6. **Attempt the check before viewing guidance.** Use [Learning checks](learning-checks.md) only after writing your reasoning.

## Session guide

### 1. Define the cooling problem

**Engineering question:** What location must be kept within what temperature range, while rejecting what heat to what sink?

Read [Module 1](modules/01-why-cooling-matters.md). Draw a box around the protected object and arrows for heat generation and heat rejection. Then write a problem statement using this form:

> Keep **[protected location]** at or below **[limit and unit]** while rejecting **[heat load and time basis]** to **[sink condition]** under **[important constraint]**.

**Worked reasoning check.** A 2 kW heat pulse lasting 10 minutes is an energy of `(2,000 W)(600 s) = 1.2 MJ`. It does not, by itself, choose forced air, liquid cooling, or storage. The missing distinction is whether the system must survive a single pulse, repeated pulses, or a continuous 2 kW load, and what temperature margin is permitted.

**Ready to continue when:** you can identify a protected *location*, not merely an average system temperature, and you have marked at least one missing input.

### 2. Build the heat-flow model

**Engineering question:** Which source-to-sink resistance dominates the protected temperature?

Read [Module 2](modules/02-thermal-fundamentals.md). Draw each series path from source through interface, spreader, heat exchanger, transport fluid or air, and sink. Use `R_th = ΔT / Q̇` only where a linear resistance approximation is defensible.

**Worked reasoning check.** For a 120 W source and a series path of `0.05 + 0.04 + 0.18 = 0.27 K/W`, the predicted rise is `(120 W)(0.27 K/W) = 32.4 K`. At a 25 °C sink, the source estimate is 57.4 °C. This is a derived screening result, not a measured temperature. Halving the air-side resistance produces a larger change than halving the smaller spreader resistance, so the air side is the first improvement target in this stated model.

**Common trap:** adding a fin area to a convection coefficient measured using a different reference area. The `A` in `hA` must match the area convention of `h`.

**Ready to continue when:** your network labels the units of every resistance and identifies the dominant resistance or the reason it cannot yet be identified.

### 3. Screen physical mechanisms

**Engineering question:** Which heat-transfer mechanisms remain feasible at the required temperature lift and resource constraints?

Read [Module 3](modules/03-cooling-mechanisms.md). Compare at least three candidates—such as forced air, single-phase liquid, and thermal storage—using the following table.

| Mechanism | Required condition | Evidence you have | First condition that could rule it out |
| --- | --- | --- | --- |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

**Worked reasoning check.** If a 1.2 MJ pulse is stored in a material allowed to warm by 10 K with an illustrative `c_p = 4 kJ/(kg K)`, the idealized mass is `1.2 × 10⁶ J / [(4,000 J/(kg K))(10 K)] = 30 kg`. This bounds only the energy-storage requirement; it does not prove that heat can enter the storage material quickly enough or that the material can recharge between pulses.

**Ready to continue when:** you have ruled out at least one option with a stated physical condition, rather than a preference label.

### 4. Connect the architecture

**Engineering question:** Can the source side, transport path, heat exchanger, controls, and sink operate together?

Read [Module 4](modules/04-system-architectures.md). Sketch the chain `source → interface → transport → heat exchanger → sink`, then add sensors, actuators, and one failure path. For a single-phase loop, distinguish average fluid rise from maximum component temperature.

**Worked reasoning check.** A 5 kW water loop allowed to rise by 5 K gives a first-pass flow target of `ṁ = 5,000 W / [(4,000 J/(kg K))(5 K)] = 0.25 kg/s`. The result cannot choose a pump because pressure drop, fluid state, pipe and cold-plate geometry, fittings, and branch distribution are outside this balance.

**Common trap:** treating a well-mixed return temperature as evidence that every parallel branch is adequately cooled.

**Ready to continue when:** your diagram names a measured location for each temperature, pressure, and flow signal you intend to use.

### 5. Compare performance and resources

**Engineering question:** What does useful cooling require when every relevant input is included at the same boundary?

Read [Module 5](modules/05-performance-energy-sustainability.md). Choose metrics appropriate to your concept: useful heat duty, maximum protected temperature, inlet and sink conditions, electrical input, pressure drop, water use, refrigerant inventory, or storage loss. For every metric, declare the numerator, denominator, system boundary, and time basis.

**Worked reasoning check.** A unit removing 10 kW with a 2.5 kW compressor input has `COP = 4.0` at a compressor-only boundary. If fans and pumps add 0.5 kW, the system-level result is `10 / 3.0 = 3.33`. Neither number is transferable to another condition without matching the source/sink temperatures, humidity or flow state, part-load condition, and measurement boundary.

**Ready to continue when:** you can say which reported metric would be misleading if its auxiliary loads or operating state were omitted.

### 6. Practice with applied evidence

Choose one activity from [NED3 applied examples](ned3-applied-examples.md). The examples intentionally cover distinct evidence classes:

- The dual-chip cold-plate case is public, **simulated** CFD evidence with a geometry- and envelope-specific surrogate.
- The hybrid liquid-cooler case uses local inventory descriptors for an **instructor-led** evidence-gap exercise; it does not publish the underlying laboratory files.
- BoilingBench records are public **measured/reconstructed** multimodal evidence; they do not establish a general two-phase safety or sizing rule.
- The Data Center Cooling Explorer is a public **synthetic** teaching model, useful for conservation checks rather than equipment validation.

Create a one-page evidence sheet: source and version; what was measured, simulated, or assumed; inputs and outputs; the system boundary; the claim supported; the claim blocked; and the next evidence needed. Use the source-specific license and documentation rather than treating a discovery page as the canonical record.

**Ready to continue when:** your sheet includes one claim you explicitly refuse to make because the evidence does not support it.

### 7. Write the screening memo

Read [Module 6](modules/06-screening-decision.md). Use the following one-page structure; keep calculation sheets and source records as appendices rather than compressing them into unsupported conclusions.

1. **Problem and boundary:** protected location, limit, heat load, sink, time basis, and evidence status.
2. **First-pass model:** governing energy balance and thermal path, with assumptions and units.
3. **Feasible concepts:** two or three options at a common boundary, including why each is feasible or excluded.
4. **Proposed selection:** the preferred concept and the precise scope of the recommendation.
5. **Verification plan:** the variable most likely to overturn the selection, how it will be measured or modeled, a success criterion, and an expected failure mode.

Use the [Module 6 learning check](learning-checks.md#module-6) as an audit, then revise the memo once. A sound final sentence often reads: “This is a screening selection under the stated load, sink, and resistance assumptions; measure **[specific quantity]** before design or procurement.”

## Completion checklist

You have completed the self-paced manual when your study record includes all of the following:

- a problem statement with a protected location, a temperature requirement, a heat load, a sink condition, and a time basis;
- a source-to-sink heat-flow or resistance model with units and one limiting-case check;
- a mechanism comparison with at least one physically justified exclusion;
- an architecture sketch showing sensing, actuation, and one local failure mode;
- a performance table with explicit measurement boundaries and operating conditions;
- one evidence sheet that distinguishes measured, simulated, synthetic, and assumed information as applicable; and
- a one-page proposed concept memo with a next validation action.

This completion demonstrates engagement with open educational material only. It does not issue CEUs, PDHs, academic credit, certification, or an engineering-design approval. Organizations that need attendance or professional-development records should apply their own documented assessment and recordkeeping policies.

## Next paths

- Use the [professional workshop track](professional-workshop.md) when an instructor-led, electronics-focused four-hour session is appropriate.
- Use the [assessment and cases](assessment.md) and [facilitator guide](facilitator-guide.md) when a host needs an instructor-managed check of understanding.
- Use [references and tools](references-and-tools.md) to find primary sources and property information for a design-relevant follow-up.
- Return to the [course home](index.md) for the full module sequence.

# Module 6 — A screening-level cooling decision

## Central question

**Which concept deserves detailed analysis, testing, or design—and what evidence is still missing?**

## Learning objectives

You will turn a cooling problem statement into a traceable screening decision without overstating its readiness for implementation.

## The decision sequence

1. **State the protected variable.** Identify the location and allowable range of the temperature or other thermal quantity.
2. **Quantify the heat load and time basis.** Separate measured, reported, and assumed inputs.
3. **Characterize the heat sink.** Include seasonal or transient conditions when relevant.
4. **Build the simplest credible model.** Use an energy balance and a resistance network or loop balance.
5. **Screen mechanisms.** Rule out options that violate temperature, resource, geometry, safety, or maintenance constraints.
6. **Compare feasible architectures.** Use a common system boundary and a small set of matched metrics.
7. **Identify the dominant uncertainty and failure mode.** Define the next measurement, simulation, or experiment that could change the decision.

## Concept-memo template

Use this one-page structure for an initial concept.

### 1. Problem and boundary

State the system, protected location, heat load, temperature limit, environment, and time basis. Label the evidence status of each input.

### 2. First-pass physical model

Show the governing energy balance and thermal path. List the quantities that are calculated, assumed, or unavailable. Include units.

### 3. Candidate concepts

Compare two or three architectures. State why each is feasible or infeasible at the defined temperature lift and constraints.

### 4. Preliminary selection

Select the concept that best meets the stated requirements. This is a **proposed screening decision**, not a validated design or procurement recommendation.

### 5. Verification plan

Identify the highest-impact uncertainty, an appropriate measurement/model/experiment, success criteria, and an expected failure mode. Examples include contact resistance measurement, airflow mapping, pump-curve testing, load transient measurement, refrigerant-cycle simulation, or environmental-condition logging.

## Worked comparison: revisit the enclosure

The 120 W enclosure has a 60 °C source limit in 25 °C room air. Its allowable total resistance is 0.292 K/W. A proposed forced-air heat-sink path estimated at 0.27 K/W is therefore feasible in the nominal model, but its 2.6 K margin is small. A first-pass selection could retain forced air as the baseline while prioritizing measurement or modeling of air-side resistance, inlet-air recirculation, and interface resistance.

A liquid loop might reduce the source-to-sink resistance, but it adds pump power, tubing, leak risk, and maintenance. Without a more restrictive temperature limit, a compact-space constraint, or a measured air-side shortfall, the additional system complexity is not yet justified by the evidence available.

## Common failure mode

**Treating a screening calculation as a final design.** A simple model is useful precisely because it makes its assumptions visible. It cannot replace detailed geometry, operating-envelope, safety, reliability, manufacturability, cost, and validation work.

## Final check for understanding

Write a concept memo for your chosen application. Highlight one input that could overturn your selection. Then use [Learning checks](../learning-checks.md#module-6) to audit the decision boundary.

## Where to go next

The appropriate next step depends on the consequence of failure. For a low-risk educational project, a documented calculation and simple measurement may be sufficient. For equipment or facility decisions, build a traceable validation plan using current property data, manufacturer information, applicable standards, and qualified review.

Return to the [course home](../index.md).

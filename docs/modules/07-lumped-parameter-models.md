# Module 7 — Lumped-parameter models and simulation

## Central question

**When is a temperature transient important, and what can a one-node thermal model establish before a higher-fidelity analysis?**

This extension turns the steady resistance model into a first-order dynamic model. It is intentionally generic: the protected node can represent an enclosure, a thermal mass, a component-scale assembly, or another object only when its temperature can reasonably be approximated by one state.

## Learning objectives

After this module, you should be able to:

- define a thermal capacitance, resistance, sink temperature, load history, and initial condition for a one-node model;
- calculate the thermal time constant and interpret a step response;
- distinguish an exact solution of the stated first-order model from evidence that the model represents a physical system; and
- identify when spatial gradients, variable properties, fluid transport, or phase change require a model with more states or a different method.

## Model boundary and governing equation

Place the model boundary around a body with one uniform temperature $T$. Let it exchange heat through an equivalent resistance $R_{\mathrm{th}}$ with a constant-temperature sink $T_{\mathrm{sink}}$. With $\dot{Q}_{\mathrm{load}}(t)$ positive into the body, the balance is

$$
\begin{aligned}
C_{\mathrm{th}}\frac{\mathrm{d}T}{\mathrm{d}t}
&= \dot{Q}_{\mathrm{load}}(t) \\
&\quad- \frac{T-T_{\mathrm{sink}}}{R_{\mathrm{th}}}.
\end{aligned}
$$

Here $C_{\mathrm{th}}$ is thermal capacitance in $\mathrm{J\,K^{-1}}$, $R_{\mathrm{th}}$ is the declared source-to-sink resistance in $\mathrm{K\,W^{-1}}$, and $t$ is time in $\mathrm{s}$. The units are consistent because each term on the right side has units of watts.

For a constant load after a step, the time constant is

$$
\tau = R_{\mathrm{th}}C_{\mathrm{th}},
$$

and the exact response is

$$
\begin{aligned}
T(t)&=T_{\mathrm{sink}}+\dot{Q}_{\mathrm{load}}R_{\mathrm{th}} \\
&\quad+\left[T(0)-T_{\mathrm{sink}}-\dot{Q}_{\mathrm{load}}R_{\mathrm{th}}\right]
\exp\!\left(-\frac{t}{\tau}\right).
\end{aligned}
$$

The steady-state rise remains $\dot{Q}_{\mathrm{load}}R_{\mathrm{th}}$. Thermal capacitance does not remove that steady rise; it delays the approach to it. At $t=\tau$, a step response has completed about 63% of its total change. This is a property of this model, not a universal equipment rule.

## Worked screening example

Consider an illustrative protected body connected to a $25\ ^\circ\mathrm{C}$ sink by $R_{\mathrm{th}}=0.25\ \mathrm{K\,W^{-1}}$. Let $C_{\mathrm{th}}=2000\ \mathrm{J\,K^{-1}}$, $T(0)=25\ ^\circ\mathrm{C}$, and a $100\ \mathrm{W}$ load begin at $t=0$.

$$
\tau=(0.25\ \mathrm{K\,W^{-1}})(2000\ \mathrm{J\,K^{-1}})=500\ \mathrm{s}.
$$

The eventual temperature is $50\ ^\circ\mathrm{C}$, while the one-time-constant prediction is about $40.8\ ^\circ\mathrm{C}$. Both values are **derived, screening-level outputs**. They depend on the stated resistance, capacitance, sink condition, and uniform-temperature assumption.

Use the local [lumped-parameter simulator](../lumped-parameter-model.html) to reproduce this case, change one input at a time, and record the effect on the protected-temperature history.

## When one temperature is credible

A lumped model is most plausible when internal conduction or mixing is rapid relative to heat rejection at the boundary. A Biot-number screening check,

$$
\mathrm{Bi}=\frac{hL_c}{k},
$$

is commonly used for a solid with an approximately convective boundary; $\mathrm{Bi}\lesssim0.1$ is a conventional screening guideline for a spatially uniform solid temperature. It is not a substitute for checking geometry, contact resistances, anisotropy, internal generation, transient boundary conditions, or multiple materials. See the heat-transfer reference in [References and tools](../references-and-tools.md) before applying the criterion.

## Model-fidelity ladder

| If the physical question is about… | First credible model | What the one-node model does not establish |
| --- | --- | --- |
| Energy absorbed during a load transient | One thermal capacitance with a stated resistance | Local hot spots or internal gradients |
| Two regions with visibly different temperatures | Two or more $R_{\mathrm{th}}$–$C_{\mathrm{th}}$ nodes | A unique resistance/capacitance without identification data |
| Heat propagation through a solid | One-dimensional or multidimensional conduction | A spatial temperature field |
| Flow distribution or exchanger performance | Control-volume or network model with pressure drop and heat transfer | Branch balance, pump operating point, or local convection |
| Boiling, condensation, or nonlinear material behavior | Validated regime-specific model and properties | Stability, dryout, distribution, or safety margin |

## Calibration and uncertainty

An RC model can be calibrated from a measured transient, but fitted parameters are not automatically physical constants. A change in airflow, mounting pressure, sink temperature, or load distribution can change the apparent resistance or capacitance. Keep the input record, observation location, time synchronization, fit residual, and test envelope with every reported parameter.

Useful limiting-case checks are:

- as $\dot{Q}_{\mathrm{load}}\rightarrow0$, the node tends toward $T_{\mathrm{sink}}$;
- decreasing $R_{\mathrm{th}}$ lowers the constant-load temperature rise and shortens $\tau$ when $C_{\mathrm{th}}$ is fixed;
- increasing $C_{\mathrm{th}}$ slows the response but leaves the constant-load temperature rise unchanged; and
- when a simulated temperature violates a limit, verify the load history and sink history before treating the result as a hardware conclusion.

## Transfer task

Use the simulator or your own calculation to evaluate one non-confidential transient. State the node, source, sink, $R_{\mathrm{th}}$, $C_{\mathrm{th}}$, initial condition, and load history. Then name the first observation that would test whether a one-node model is adequate. Compare your reasoning with [Learning checks](../learning-checks.md#module-7).

Next, use the [technology atlas](../technology-atlas.md) to compare technology families without treating a qualitative table as a sizing rule, or return to the [course home](../index.md).

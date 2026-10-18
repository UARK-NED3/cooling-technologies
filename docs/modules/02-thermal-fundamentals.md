# Module 2 — Heat, temperature, and thermal resistance

## Central question

**What heat-flow path connects the source to the sink, and which resistance controls the temperature rise?**

## Learning objectives

You will distinguish sensible and latent heat, use simple heat-transfer relations with units, and build a screening-level thermal-resistance network.

## The four basic heat-transfer mechanisms

| Mechanism | Governing idea |
| --- | --- |
| Conduction | Energy diffuses through a material. |
| Convection | A fluid transports heat from a surface. |
| Radiation | Surfaces exchange thermal radiation. |
| Phase change | Energy is absorbed or released at nearly constant temperature for a specified pressure. |

For the screening conditions stated below, the corresponding relations are

$$
\begin{aligned}
\text{Conduction:}\quad & \dot{Q} = \frac{kA\Delta T}{L} \\
\text{Convection:}\quad & \dot{Q} = hA(T_{\mathrm{s}} - T_{\infty}) \\
\text{Radiation:}\quad & \dot{Q} = \varepsilon\sigma A(T_{\mathrm{s}}^4 - T_{\mathrm{sur}}^4) \\
\text{Phase change:}\quad & \dot{Q} = \dot{m}h_{fg}
\end{aligned}
$$

Here $k$ is thermal conductivity, $h$ is convective heat-transfer coefficient, $A$ is the relevant area, $L$ is a conduction length, $\varepsilon$ is emissivity, $\sigma$ is the Stefan–Boltzmann constant, and $h_{fg}$ is latent enthalpy. Temperatures in the radiation relation must be absolute temperatures in kelvin. See the [nomenclature](../nomenclature.md) for standard symbols, units, and subscripts.

The radiation relation is a screening form for a small, isothermal gray surface exchanging with a large, isothermal enclosure whose effective view factor is one. For multiple finite surfaces, partial view, or strong reflections, use view factors and a radiation-network or radiosity model. The phase-change relation assumes the stream completely evaporates or condenses at the stated saturation pressure. If vapor quality changes from $x_{\mathrm{in}}$ to $x_{\mathrm{out}}$, use the more general screening relation $\dot{Q} = \dot{m}(x_{\mathrm{out}} - x_{\mathrm{in}})h_{fg}$, with $h_{fg}$ evaluated at the applicable pressure.

## Thermal resistance

When a heat-flow path is approximately linear over the operating range,

$$
R_{\mathrm{th}} = \frac{\Delta T}{\dot{Q}}
\qquad [\mathrm{K\,W^{-1}}]
$$

Useful forms are $R_{\mathrm{cond}} = L/(kA)$ and $R_{\mathrm{conv}} = 1/(hA)$. Resistances in series add. Parallel paths must be combined by conductance:

$$
\frac{1}{R_{\mathrm{eq}}} = \sum_i \frac{1}{R_i}
$$

This analogy is useful, but it has limits. Material properties, flow behavior, contact pressure, and radiation can change with temperature. Use a resistance network to identify dominant paths, then improve the model when its assumptions no longer hold.

## Worked check: back to the enclosure

Suppose the 120 W enclosure in Module 1 has these proposed series resistances:

$$
R_{\mathrm{source-interface}} = 0.05\ \mathrm{K\,W^{-1}},\quad
R_{\mathrm{spreader}} = 0.04\ \mathrm{K\,W^{-1}},\quad
R_{\mathrm{air-side}} = 0.18\ \mathrm{K\,W^{-1}}
$$

The series total is `0.27 K/W`, giving an estimated source-to-room rise of

$$
\Delta T = \dot{Q}R_{\mathrm{th}} = (120\ \mathrm{W})(0.27\ \mathrm{K\,W^{-1}}) = 32.4\ \mathrm{K}
$$

At a room-air temperature of `25 °C`, the estimated source temperature is `57.4 °C`. The concept meets the earlier 60 °C limit by only 2.6 K. That small margin is a warning, not a validation: uncertainty in the air-side coefficient or interface resistance could reverse the conclusion.

## Sensible versus latent cooling

Sensible cooling changes temperature without a phase change. For a fluid stream,

$$
\dot{Q} = \dot{m}c_p(T_{\mathrm{out}} - T_{\mathrm{in}})
$$

Latent cooling uses a phase change. It can transport substantial energy with a small temperature difference, but it introduces pressure, inventory, control, orientation, safety, and dryout or flooding constraints depending on the system.

## Common failure mode

**Adding areas or heat-transfer coefficients without defining the surface.** The area in `h A` must match the surface over which the coefficient was obtained. Fins, wetted channels, and projected frontal area are not interchangeable.

## Check for understanding

Which is more effective at reducing the 32.4 K estimated rise: halving the 0.04 K/W spreader resistance or halving the 0.18 K/W air-side resistance? Calculate both. See [Learning checks](../learning-checks.md#module-2).

## Transfer task

Draw a source-to-sink thermal-resistance network for a laptop, a building room, or a refrigerated cabinet. Mark which resistance you would measure or model first.

Next: [Module 3 — Cooling mechanisms](03-cooling-mechanisms.md).

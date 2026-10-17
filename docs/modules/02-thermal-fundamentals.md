# Module 2 — Heat, temperature, and thermal resistance

## Central question

**What heat-flow path connects the source to the sink, and which resistance controls the temperature rise?**

## Learning objectives

You will distinguish sensible and latent heat, use simple heat-transfer relations with units, and build a screening-level thermal-resistance network.

## The four basic heat-transfer mechanisms

| Mechanism | Simplified relation | Governing idea |
| --- | --- | --- |
| Conduction | `Q̇ = k A ΔT / L` | Energy diffuses through a material. |
| Convection | `Q̇ = h A (T_s − T_∞)` | A fluid transports heat from a surface. |
| Radiation | `Q̇ = ε σ A (T_s⁴ − T_sur⁴)` | Surfaces exchange thermal radiation. |
| Phase change | `Q̇ = ṁ h_fg` | Energy is absorbed or released at nearly constant temperature for a specified pressure. |

Here `k` is thermal conductivity, `h` is convective heat-transfer coefficient, `A` is the relevant area, `L` is a conduction length, `ε` is emissivity, `σ` is the Stefan–Boltzmann constant, and `h_fg` is latent enthalpy. Temperatures in the radiation relation must be absolute temperatures in kelvin.

The radiation relation is a screening form for a small, isothermal gray surface exchanging with a large, isothermal enclosure whose effective view factor is one. For multiple finite surfaces, partial view, or strong reflections, use view factors and a radiation-network or radiosity model. The phase-change relation assumes the stream completely evaporates or condenses at the stated saturation pressure. If vapor quality changes from `x_in` to `x_out`, use the more general screening relation `Q̇ = ṁ (x_out − x_in) h_fg`, with `h_fg` evaluated at the applicable pressure.

## Thermal resistance

When a heat-flow path is approximately linear over the operating range,

`R_th = ΔT / Q̇  [K/W]`

Useful forms are `R_cond = L / (k A)` and `R_conv = 1 / (h A)`. Resistances in series add. Parallel paths must be combined by conductance:

`1 / R_eq = Σᵢ (1 / Rᵢ)`

This analogy is useful, but it has limits. Material properties, flow behavior, contact pressure, and radiation can change with temperature. Use a resistance network to identify dominant paths, then improve the model when its assumptions no longer hold.

## Worked check: back to the enclosure

Suppose the 120 W enclosure in Module 1 has these proposed series resistances:

`R_source–interface = 0.05 K/W; R_spreader = 0.04 K/W; R_air-side = 0.18 K/W`

The series total is `0.27 K/W`, giving an estimated source-to-room rise of

`ΔT = 120 × 0.27 = 32.4 K`

At a room-air temperature of `25 °C`, the estimated source temperature is `57.4 °C`. The concept meets the earlier 60 °C limit by only 2.6 K. That small margin is a warning, not a validation: uncertainty in the air-side coefficient or interface resistance could reverse the conclusion.

## Sensible versus latent cooling

Sensible cooling changes temperature without a phase change. For a fluid stream,

`Q̇ = ṁ c_p (T_out − T_in)`

Latent cooling uses a phase change. It can transport substantial energy with a small temperature difference, but it introduces pressure, inventory, control, orientation, safety, and dryout or flooding constraints depending on the system.

## Common failure mode

**Adding areas or heat-transfer coefficients without defining the surface.** The area in `h A` must match the surface over which the coefficient was obtained. Fins, wetted channels, and projected frontal area are not interchangeable.

## Check for understanding

Which is more effective at reducing the 32.4 K estimated rise: halving the 0.04 K/W spreader resistance or halving the 0.18 K/W air-side resistance? Calculate both. See [Learning checks](../learning-checks.md#module-2).

## Transfer task

Draw a source-to-sink thermal-resistance network for a laptop, a building room, or a refrigerated cabinet. Mark which resistance you would measure or model first.

Next: [Module 3 — Cooling mechanisms](03-cooling-mechanisms.md).

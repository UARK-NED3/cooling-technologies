# Nomenclature and notation

This course uses the symbols below in its equations, examples, screening tools, and templates. The intent is to keep every calculation traceable from source to sink. A named temperature must always include its physical location; a reported value must also state its evidence status and applicable operating condition.

## Conventions

- Use SI units unless a conversion is shown explicitly. Use kelvin (K) for absolute temperature in radiation and property relations. A temperature difference may be reported in K or °C; the numerical difference is the same.
- A superposed dot denotes a time rate: $\dot{Q}$ is heat-transfer rate, $\dot{W}$ is work rate, and $\dot{m}$ is mass-flow rate.
- Use $\Delta T = T_2 - T_1$ only after stating the two locations. For a loop, $\Delta T_{\mathrm{fluid}} = T_{\mathrm{out}} - T_{\mathrm{in}}$ is positive when the fluid gains heat from the load.
- Roman subscripts identify a physical label or condition, for example $R_{\mathrm{th}}$, $T_{\mathrm{sink}}$, and $\mathrm{COP}_{\mathrm{R}}$. Subscripts that count components or states use italic symbols, for example $T_i$ and $R_i$.

## Sign convention

Unless an equation explicitly says otherwise, heat transfer $\dot{Q}$ is positive **into** the stated system or control volume and work $\dot{W}$ is positive **out of** it. Use directional subscripts such as $\dot{Q}_{\mathrm{in}}$ and $\dot{Q}_{\mathrm{out}}$ when a balance includes both directions. This convention is used in the closed-system and control-volume balances in Module 1.

## Primary symbols

| Symbol | Meaning | SI unit | Notes |
| --- | --- | --- | --- |
| $A$ | Heat-transfer area | $\mathrm{m^2}$ | State whether the area is wetted, fin, projected, or another defined surface. |
| $\mathrm{Bi}$ | Biot number, $hL_c/k$ | — | A screening dimensionless group for the stated solid geometry and boundary. |
| $c_p$ | Specific heat at constant pressure | $\mathrm{J\,kg^{-1}\,K^{-1}}$ | Evaluate for the stated fluid, composition, pressure, and temperature. |
| $C_{\mathrm{th}}$ | Thermal capacitance | $\mathrm{J\,K^{-1}}$ | A declared lumped storage term; it is not necessarily a material property by itself. |
| $E$ | Energy | $\mathrm{J}$ | Use $E_{\mathrm{th}}$ for stored thermal energy when clarification is needed. |
| $h$ | Convective heat-transfer coefficient | $\mathrm{W\,m^{-2}\,K^{-1}}$ | Do not confuse with specific enthalpy $h_{\mathrm{spec}}$. |
| $h_{fg}$ | Latent enthalpy of vaporization or condensation | $\mathrm{J\,kg^{-1}}$ | Evaluate at the stated saturation pressure. |
| $h_{\mathrm{spec}}$ | Specific enthalpy | $\mathrm{J\,kg^{-1}}$ | Used in the flowing-control-volume energy balance. |
| $k$ | Thermal conductivity | $\mathrm{W\,m^{-1}\,K^{-1}}$ | Evaluate for material, direction, and temperature when consequential. |
| $L$ | Conduction length | $\mathrm{m}$ | Defined along the heat-flow direction. |
| $L_c$ | Characteristic length for a Biot-number screen | $\mathrm{m}$ | Define it for the stated geometry and boundary. |
| $m$ | Mass | $\mathrm{kg}$ | |
| $\dot{m}$ | Mass-flow rate | $\mathrm{kg\,s^{-1}}$ | Positive in the declared flow direction. |
| $p$ | Pressure | $\mathrm{Pa}$ | State whether absolute or gauge pressure is used. |
| $\dot{Q}$ | Heat-transfer rate | $\mathrm{W}$ | Positive into the stated system unless a directional subscript is used. |
| $\dot{Q}_{\mathrm{gen}}$ | Internal heat-generation rate | $\mathrm{W}$ | Includes electrical, chemical, or mechanical dissipation within the boundary. |
| $R_{\mathrm{th}}$ | Thermal resistance | $\mathrm{K\,W^{-1}}$ | Valid only for the declared path and operating range. |
| $t$ | Time | $\mathrm{s}$ | |
| $T$ | Temperature | $\mathrm{K}$ or $^\circ\mathrm{C}$ | State the measurement or model location. |
| $\Delta T$ | Temperature difference | $\mathrm{K}$ | Define the two locations and sign. |
| $\dot{W}$ | Work or power rate | $\mathrm{W}$ | Positive out of the stated system unless a directional subscript is used. |
| $x$ | Vapor quality | — | Mass fraction of vapor for an equilibrium two-phase mixture. |
| $\varepsilon$ | Emissivity | — | Surface property appropriate to the stated spectral/thermal model. |
| $\tau$ | Thermal time constant | $\mathrm{s}$ | For the one-node model, $\tau=R_{\mathrm{th}}C_{\mathrm{th}}$. |
| $\rho$ | Density | $\mathrm{kg\,m^{-3}}$ | Evaluate at the stated fluid state. |
| $\sigma$ | Stefan–Boltzmann constant | $\mathrm{W\,m^{-2}\,K^{-4}}$ | Use with absolute temperature. |

## Standard subscripts and superscripts

| Notation | Meaning |
| --- | --- |
| $\mathrm{allow}$ or $\mathrm{max}$ | Allowable or maximum value under the stated requirement. |
| $\mathrm{amb}$ | Ambient condition; do not substitute for a local sink without establishing that equivalence. |
| $\mathrm{cond}$, $\mathrm{conv}$, $\mathrm{rad}$ | Conduction, convection, and radiation contribution. |
| $\mathrm{cooling}$ | Cooling duty at the explicitly stated boundary. |
| $\mathrm{eq}$ | Equivalent value, such as an equivalent parallel thermal resistance. |
| $\mathrm{in}$, $\mathrm{out}$ | Inlet and outlet of the declared component or control volume. |
| $\mathrm{lim}$ | Temperature or other protected-variable limit. |
| $\mathrm{R}$ | Refrigeration cooling convention in $\mathrm{COP}_{\mathrm{R}}$. |
| $\mathrm{s}$, $\mathrm{sur}$, $\mathrm{sink}$ | Surface, radiative surroundings, and designated heat sink. |
| $\mathrm{sur}$ on $\dot{Q}_{\mathrm{sur}}$ | Heat entering from the surroundings. |
| $\mathrm{th}$ | Thermal quantity or path. |

## Equation-writing guidance

Write inline quantities such as $R_{\mathrm{th}}$ in a sentence and use a display equation for a governing relation, derivation, or worked calculation. Show units beside numerical substitutions rather than treating the symbols themselves as unit-bearing. In every applied example, report the system boundary, source/sink locations, time basis, and whether each numerical input is measured, reported, assumed, or derived.

Return to the [course home](index.md) or begin [Module 1](modules/01-why-cooling-matters.md).

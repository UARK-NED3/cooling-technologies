# Cooling technology state of practice and emerging directions

## Scope, date, and evidence status

**Reviewed 2026-10-17.** This page is a dated orientation map, not a comprehensive literature review, technology forecast, product comparison, or regulatory interpretation. It summarizes recurring system-level directions found in current authoritative source families and identifies the evidence required before applying them. Check the current edition, jurisdiction, operating envelope, and applicable standards before making an engineering, procurement, safety, or environmental claim.

## Cross-cutting directions to evaluate

| Direction | Physical or system question | Evidence needed before use |
| --- | --- | --- |
| Variable-speed equipment and supervisory controls | How do fan, pump, compressor, valve, and storage controls affect the protected variable and total boundary power over the load profile? | Measured or simulated load/sink histories, control sequence, auxiliary-power boundary, and stability/failure behavior |
| Heat recovery and heat pumps | Is there a useful heat sink at the required temperature, at the same time that cooling is needed? | Matched source/sink temperature histories, delivery demand, piping losses, controls, and annual time basis |
| Air, liquid, and phase-change heat paths | Does the local heat path meet its temperature and spatial-uniformity requirement before the facility or ambient-side sink is considered? | Local temperatures, interfaces, flow distribution, pressure drop, regime limits, and containment/safety review |
| Indirect evaporative, desiccant, and water-aware approaches | Does climate and water quality support the required air state without unacceptable water, hygiene, or treatment burden? | Local psychrometric data, water-quality/treatment plan, seasonal model, and applicable requirements |
| Thermal energy storage | Does shifting heat or cooling across time reduce a stated constraint without creating an unmanageable recharge or capacity problem? | Load and tariff/availability time series, storage state, cycling losses, charge/discharge limits, and control boundary |
| Refrigerant and working-fluid transition | Does the selected fluid and system architecture meet current safety, environmental, service, and jurisdictional requirements? | Current manufacturer documentation, safety standard, applicable code, and regulatory source—not a historical course note |

These directions interact. A lower local thermal resistance may change the useful temperature of rejected heat; storage may alter control and equipment sizing; a new fluid can change pressure, heat-transfer, materials, and safety requirements. Evaluate the coupled boundary rather than adding isolated features.

## Authoritative source map

| Source family | Use it for | Do not infer from it alone |
| --- | --- | --- |
| [ASHRAE Handbook Online](https://www.ashrae.org/technical-resources/ashrae-handbook/ashrae-handbook-online) | Current fundamentals, system/equipment and applications references; check the applicable volume and revision | A product ranking, site-specific compliance conclusion, or an unverified performance prediction |
| [ASHRAE HVAC Systems and Equipment table of contents](https://www.ashrae.org/technical-resources/publications-library/ashrae-handbook/table-of-contents-ashrae-handbook-hvac-systems-and-equipment) | Locating the relevant technology chapter, including heat pumps, evaporative air cooling, thermal storage, pumps, cooling towers, and chiller systems | That a listed technology suits a given load, climate, or control boundary |
| [U.S. Department of Energy Building Technologies—Emerging Technologies](https://www.energy.gov/cmei/buildings/emerging-technologies) | Public program context for HVAC&R, controls, thermal storage, and building-energy modeling | A current standard, rating condition, or field-performance guarantee |
| [NIST REFPROP](https://www.nist.gov/srd/refprop) and [NIST Chemistry WebBook](https://webbook.nist.gov/chemistry/) | Traceable property work at a declared composition and thermodynamic state | Whole-system performance, component geometry effects, or safety approval |
| [U.S. EPA Section 608](https://www.epa.gov/section608) | U.S. stationary refrigeration and air-conditioning refrigerant-management information | A complete determination of all federal, state, local, safety, or building-code obligations |

## Maintenance rule

Review this page at least annually and whenever a module adds an equipment, refrigerant, control, or climate-specific claim. For each update, record: source title and revision/date; access date; technology and system boundary; the exact claim supported; operating conditions; and what remains unverified. Replace a stale statement with a source link and a bounded question when the evidence cannot be refreshed.

## How to turn a trend into an engineering question

Instead of writing “technology X is state of the art,” write a testable question such as: “At the stated load and sink histories, can an indirect evaporative stage hold the required supply condition while meeting the declared water and maintenance constraints?” Then select the model, measurement, or current primary source needed to answer it.

Use the [technology atlas](technology-atlas.md) for a first comparison, [Module 7](modules/07-lumped-parameter-models.md) for transient screening, or the [validation ladder](validation-ladder.md) to plan credible next evidence.

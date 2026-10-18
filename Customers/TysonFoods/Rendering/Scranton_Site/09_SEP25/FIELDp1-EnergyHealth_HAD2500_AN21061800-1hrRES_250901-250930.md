# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 48,355,265.1 kWh (Usage per period)
- **Consumption Cost per unit:** $0.110/kWh (Cost per kWh)
- **Consumption Total Cost:** $5,319,079.17 (Cost per period)
- **Consumption Total Cost:** $150.61 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** HAD2500  
**Generated:** 2026-09-12 17:53:52  
**Data Source:** AN21061800-V-1minRES_43200CLP_250901-250930c.csv  

## Time Period

- **Period:** September 01, 2025 thru September 30, 2025
- **Number of Days:** 30 Days
- **Data Resolution:** hourly
- **Total Data Points:** 35,316

- **Dataset Coverage:** Complete month (100.0% of 30-day month)
- **Billing Scale Factor:** 1.000x (no normalization needed)

## Facility Information

- **Facility:** Tyson Foods
- **Location:** Scranton Facility
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** HAD2500
- **Power Factor:** 0.978
- **Total Energy (Actual):** 48,355,265.14 kWh (per period), 1369.22 kW (per hour)
- **Total Waste (Actual):** 1,098,282.68 kWh (per period), 31.10 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_HAD2500_AN21061800-1hrRES_250901-250930.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_HAD2500_AN21061800-1hrRES_250901-250930.md


## UNITY MANAGEMENT HAD2500 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 31.10 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 13.60 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1100/kWh (all-inclusive)
- **HAD2500 Utility Cost Offset:** $3.42/hour
- **Annual Offset Savings:** $29967/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 49,629 BTU/hr
- **Total Cooling kW No Longer Needed:** 4.65 kW
- **Cooling Energy Cost Avoided:** $0.51/hour
- **Annual Cooling Savings:** $4482/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 35.75 kW
- **CO2e Emissions Avoided:** 116.91 metric tons/year
- **Monthly CO2e Reduction:** 9.74 metric tons/month
- **Hourly CO2e Reduction:** 0.0133 metric tons/hour
- **CO2e Value Rate:** $10/metric ton
- **Annual CO2e Value:** $1169/year

### Total HAD2500 Unity Savings

- **Per Hour:** $4.07
- **Per Day:** $97.58
- **Per Month:** $2927.50
- **Per Year:** $35618

### HAD2500 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 964.9 kVAR Max (Avg: 293.5 kVAR/hr ; 211,304 kVAR/mo)
- **Max Harmonic Distortion:** 32.9% Max (range: 3.5% - 32.9%)
- **Max Amperage:** 2,167A Max (range: 761A - 2167A)

---

# HAD2500 DETAILED PERFORMANCE ANALYSIS

## Unity Technology Status

- **Unity Technology Configuration:** 0.0% reactive energy target
- **Unity Applied:** No (measuring current problem state)
- **Analysis Mode:** Pre-Unity baseline analysis

## Transformer Specifications

- **Capacity:** 2,500 kVA
- **Voltage:** 480V, 3-Phase

## Fundamental Energy Values

| Metric | Average | MIN | MAX |
| ------ | ------- | --- | --- |
| Line to Neutral Voltage (277v) |   279.37 |   274.38 |   287.20 |
| Line to Line Voltage (480v) |   483.88 |   475.24 |   497.45 |
| Current (AMPS) |  1671.80 |   760.98 |  2167.09 |
| Phase Angle (degrees) |    11.33 |     2.54 |    41.86 |
| Total Harmonic Distortion (PCT) |    16.92 |     3.47 |    32.87 |

## 🔀 Total Harmonic Distortion — Unity Translation

In traditional electrical engineering, Total Harmonic Distortion (THD) is calculated per phase, based on the sum of non-fundamental frequency components divided by the fundamental:

```
THD_A = √(V₂² + V₃² + ...) / V₁
```

This results in a percentage value for each phase (A, B, and C), and by standard IEEE practice, these percentages are not directly additive because they are non-linear and phase-relative.

However, at Unity, we take a **field-level view of harmonic behavior** — aligning with Maxwell's electromagnetic theory rather than purely scalar wave math.

We define:

```
THD_Field_Composite = THD_A + THD_B + THD_C
```

This is not a textbook THD, but a **Unity Composite Index** — a metric designed to:
• Reflect total harmonic stress on the energy field,
• Enable fast field diagnostics,
• Map distortion across the 3-phase envelope as a combined entity.

Think of it as a **harmonic heat index**, not a scalar voltage quantity.

| Metric | Value | Notes |
| ------ | ----- | ----- |
| THD Phase A (%) | 5.6% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.6% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.6% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 16.9% | Field-level stress indicator |
| Max Phase THD | 5.6% | Highest THD among all three phases |
| Min Phase THD | 5.6% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,670.58 kW
  - **Maximum Load:** 1,773.41 kVA
  - **Percentage of Capacity (MAX):** 70.9%
- **Average Load:** 1,400.32 kVA
  - **Percentage of Capacity (Avg):** 56.0%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,400.32 kVA
- **Average Power Factor (PF):** 0.978

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,401.13 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 483.88 V
- Average Current (Iavg_A): 1671.80 A
- Average kW (Psum_kW): 1369.22 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.82 kVA (0.1%)
- **Calculated PF (kW/kVA from averages):** 0.977
- **Power Factor Difference:** 0.001 (0.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1400.32) and measured PF (0.978) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,400.32 |        56.0% | 49,453,547.82 kVA | 4,671,962.60 TOTAL-HEAT |
| kW | 1,369.22 |        54.8% | 48,355,265.14 kWh | 103,756.67 Load-Heat |
| kVAR |   293.48 |        11.7% | 10,364,445.23 kVARh | - |
| WASTE |    31.10 |         1.2% | 1,098,282.68 WASTE | 2,356.60 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 4,671,962.60
- **Load-Heat (BTU/hr):** 103,756.67
- **Field-Heat (BTU/hr):** 2,356.60
- **Load-Heat (BTU, period total):** 3,664,270,665.13
- **Field-Heat (BTU, period total):** 83,225,787.01

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 9 | 1,400.32 | 1,369.22 |   278.96 |     0.98 |   56.0% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,440.97 | 1,411.14 |   282.44 |     0.98 |   57.6% |
| 01 | 1,440.81 | 1,409.43 |   290.10 |     0.98 |   57.6% |
| 02 | 1,445.80 | 1,415.16 |   287.01 |     0.98 |   57.8% |
| 03 | 1,420.96 | 1,386.70 |   293.04 |     0.98 |   56.8% |
| 04 | 1,406.10 | 1,370.95 |   292.00 |     0.98 |   56.2% |
| 05 | 1,384.46 | 1,350.53 |   281.42 |     0.98 |   55.4% |
| 06 | 1,339.41 | 1,306.66 |   261.30 |     0.98 |   53.6% |
| 07 | 1,366.13 | 1,332.62 |   272.26 |     0.98 |   54.6% |
| 08 | 1,388.02 | 1,360.88 |   261.28 |     0.98 |   55.5% |
| 09 | 1,381.02 | 1,354.08 |   258.64 |     0.98 |   55.2% |
| 10 | 1,360.65 | 1,332.10 |   259.93 |     0.98 |   54.4% |
| 11 | 1,350.37 | 1,318.98 |   269.33 |     0.98 |   54.0% |
| 12 | 1,329.37 | 1,299.27 |   268.89 |     0.98 |   53.2% |
| 13 | 1,369.49 | 1,337.92 |   279.33 |     0.98 |   54.8% |
| 14 | 1,341.22 | 1,311.38 |   267.44 |     0.98 |   53.6% |
| 15 | 1,375.59 | 1,346.39 |   271.12 |     0.98 |   55.0% |
| 16 | 1,384.12 | 1,353.08 |   279.49 |     0.98 |   55.4% |
| 17 | 1,409.26 | 1,377.96 |   281.48 |     0.98 |   56.4% |
| 18 | 1,413.16 | 1,383.06 |   278.22 |     0.98 |   56.5% |
| 19 | 1,437.81 | 1,405.49 |   292.22 |     0.98 |   57.5% |
| 20 | 1,446.95 | 1,415.12 |   292.15 |     0.98 |   57.9% |
| 21 | 1,444.48 | 1,412.57 |   292.26 |     0.98 |   57.8% |
| 22 | 1,451.56 | 1,420.70 |   288.99 |     0.98 |   58.1% |
| 23 | 1,451.71 | 1,421.51 |   284.67 |     0.98 |   58.1% |

---

# END OF REPORT

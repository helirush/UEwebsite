# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 578,857.3 kWh (Usage per period)
- **Consumption Cost per unit:** $0.350/kWh (Cost per kWh)
- **Consumption Total Cost:** $202,600.04 (Cost per period)
- **Consumption Total Cost:** $272.31 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T15 Fillet  
**Generated:** 2026-08-04 12:54:41  
**Data Source:** AN53110845-V-1minRES_44640CLP_260701-260731c.csv  

## Time Period

- **Period:** July 01, 2026 thru July 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,640

- **Dataset Coverage:** Complete month (100.0% of 31-day month)
- **Billing Scale Factor:** 1.000x (no normalization needed)

## Facility Information

- **Facility:** Foster Farms
- **Location:** Cherry Ave Facility
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** T15 Fillet
- **Power Factor:** 0.809
- **Total Energy (Actual):** 578,857.26 kWh (per period), 778.03 kW (per hour)
- **Total Waste (Actual):** 117,152.71 kWh (per period), 157.46 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T15-Fillet_AN53110845-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T15-Fillet_AN53110845-1minRES_260701-260731.md


## UNITY MANAGEMENT T15 Fillet SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 157.46 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 103.80 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.3500/kWh (all-inclusive)
- **T15 Fillet Utility Cost Offset:** $55.11/hour
- **Annual Offset Savings:** $482783/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 370,226 BTU/hr
- **Total Cooling kW No Longer Needed:** 33.34 kW
- **Cooling Energy Cost Avoided:** $11.67/hour
- **Annual Cooling Savings:** $102220/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 190.80 kW
- **CO2e Emissions Avoided:** 623.96 metric tons/year
- **Monthly CO2e Reduction:** 52.00 metric tons/month
- **Hourly CO2e Reduction:** 0.0712 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $24022/year

### Total T15 Fillet Unity Savings

- **Per Hour:** $69.52
- **Per Day:** $1668.56
- **Per Month:** $50056.88
- **Per Year:** $609025

### T15 Fillet Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 824.4 kVAR Max (Avg: 519.4 kVAR/hr ; 373,997 kVAR/mo)
- **Max Harmonic Distortion:** 88.2% Max (range: 0.0% - 88.2%)
- **Max Amperage:** 1,944A Max (range: 251A - 1944A)

---

# T15 Fillet DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   276.92 |   235.02 |   291.62 |
| Line to Line Voltage (480v) |   479.64 |   407.06 |   505.10 |
| Current (AMPS) |  1133.07 |   251.28 |  1944.02 |
| Phase Angle (degrees) |    35.56 |    22.91 |    53.42 |
| Total Harmonic Distortion (PCT) |    12.23 |     0.00 |    88.22 |

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
| THD Phase A (%) | 4.2% | IEEE standard per-phase calculation |
| THD Phase B (%) | 4.1% | IEEE standard per-phase calculation |
| THD Phase C (%) | 3.9% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 12.2% | Field-level stress indicator |
| Max Phase THD | 4.2% | Highest THD among all three phases |
| Min Phase THD | 3.9% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,386.18 kW
  - **Maximum Load:** 1,607.03 kVA
  - **Percentage of Capacity (MAX):** 64.3%
- **Average Load:** 935.50 kVA
  - **Percentage of Capacity (Avg):** 37.4%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 935.50 kVA
- **Average Power Factor (PF):** 0.809

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 941.31 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 479.64 V
- Average Current (Iavg_A): 1133.07 A
- Average kW (Psum_kW): 778.03 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 5.81 kVA (0.6%)
- **Calculated PF (kW/kVA from averages):** 0.827
- **Power Factor Difference:** 0.018 (2.2%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (935.50) and measured PF (0.809) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   935.50 |        37.4% | 696,009.97 kVA | 2,654,762.35 TOTAL-HEAT |
| kW |   778.03 |        31.1% | 578,857.26 kWh | 446,850.78 Load-Heat |
| kVAR |   519.44 |        20.8% | 386,463.65 kVARh | - |
| WASTE |   157.46 |         6.3% | 117,152.71 WASTE | 90,436.42 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,654,762.35
- **Load-Heat (BTU/hr):** 446,850.78
- **Field-Heat (BTU/hr):** 90,436.42
- **Load-Heat (BTU, period total):** 332,456,980.11
- **Field-Heat (BTU, period total):** 67,284,697.00

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 |   935.50 |   778.03 |   512.18 |     0.83 |   37.4% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,028.92 |   868.54 |   547.85 |     0.84 |   41.2% |
| 01 | 1,006.57 |   845.13 |   543.55 |     0.84 |   40.3% |
| 02 | 1,045.19 |   883.14 |   555.69 |     0.84 |   41.8% |
| 03 | 1,018.93 |   857.89 |   546.34 |     0.84 |   40.8% |
| 04 | 1,011.45 |   850.92 |   543.41 |     0.84 |   40.5% |
| 05 | 1,046.71 |   879.87 |   563.52 |     0.84 |   41.9% |
| 06 | 1,019.50 |   854.45 |   552.79 |     0.84 |   40.8% |
| 07 | 1,047.42 |   882.31 |   560.76 |     0.84 |   41.9% |
| 08 |   993.17 |   842.45 |   521.57 |     0.85 |   39.7% |
| 09 | 1,016.98 |   869.13 |   523.31 |     0.85 |   40.7% |
| 10 | 1,067.29 |   924.17 |   528.38 |     0.87 |   42.7% |
| 11 | 1,030.09 |   887.08 |   518.47 |     0.86 |   41.2% |
| 12 | 1,032.77 |   886.76 |   524.28 |     0.86 |   41.3% |
| 13 | 1,071.44 |   917.36 |   548.14 |     0.86 |   42.9% |
| 14 | 1,069.16 |   911.24 |   554.34 |     0.85 |   42.8% |
| 15 | 1,081.69 |   919.61 |   564.08 |     0.85 |   43.3% |
| 16 | 1,004.69 |   838.47 |   547.35 |     0.83 |   40.2% |
| 17 |   786.58 |   630.60 |   464.30 |     0.80 |   31.5% |
| 18 |   752.12 |   568.63 |   487.01 |     0.76 |   30.1% |
| 19 |   712.94 |   517.47 |   487.96 |     0.73 |   28.5% |
| 20 |   702.85 |   512.20 |   480.22 |     0.73 |   28.1% |
| 21 |   631.87 |   482.33 |   406.64 |     0.76 |   25.3% |
| 22 |   562.86 |   447.41 |   339.06 |     0.79 |   22.5% |
| 23 |   710.74 |   595.66 |   383.38 |     0.84 |   28.4% |

---

# END OF REPORT

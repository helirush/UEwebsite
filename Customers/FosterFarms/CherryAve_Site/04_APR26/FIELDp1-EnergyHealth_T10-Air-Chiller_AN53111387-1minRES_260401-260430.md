# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 481,016.7 kWh (Usage per period)
- **Consumption Cost per unit:** $0.350/kWh (Cost per kWh)
- **Consumption Total Cost:** $168,355.86 (Cost per period)
- **Consumption Total Cost:** $234.00 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T10 Air Chiller  
**Generated:** 2026-09-10 22:41:49  
**Data Source:** AN53111387-V-1minRES_43200CLP_260401-260430c.csv  

## Time Period

- **Period:** April 01, 2026 thru April 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,168

- **Dataset Coverage:** Complete month (100.0% of 30-day month)
- **Billing Scale Factor:** 1.000x (no normalization needed)

## Facility Information

- **Facility:** Foster Farms
- **Location:** Cherry Ave Facility
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** T10 Air Chiller
- **Power Factor:** 0.890
- **Total Energy (Actual):** 481,016.74 kWh (per period), 668.57 kW (per hour)
- **Total Waste (Actual):** 65,600.66 kWh (per period), 91.18 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T10-Air-Chiller_AN53111387-1minRES_260401-260430.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T10-Air-Chiller_AN53111387-1minRES_260401-260430.md


## UNITY MANAGEMENT T10 Air Chiller SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 91.18 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 55.63 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.3500/kWh (all-inclusive)
- **T10 Air Chiller Utility Cost Offset:** $31.91/hour
- **Annual Offset Savings:** $279557/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 230,996 BTU/hr
- **Total Cooling kW No Longer Needed:** 20.21 kW
- **Cooling Energy Cost Avoided:** $7.08/hour
- **Annual Cooling Savings:** $61977/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 111.39 kW
- **CO2e Emissions Avoided:** 364.28 metric tons/year
- **Monthly CO2e Reduction:** 30.36 metric tons/month
- **Hourly CO2e Reduction:** 0.0416 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $14025/year

### Total T10 Air Chiller Unity Savings

- **Per Hour:** $40.59
- **Per Day:** $974.13
- **Per Month:** $29223.97
- **Per Year:** $355558

### T10 Air Chiller Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 817.8 kVAR Max (Avg: 360.9 kVAR/hr ; 259,834 kVAR/mo)
- **Max Harmonic Distortion:** 29.5% Max (range: 3.0% - 29.5%)
- **Max Amperage:** 2,014A Max (range: 40A - 2014A)

---

# T10 Air Chiller DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   264.07 |   253.38 |   280.26 |
| Line to Line Voltage (480v) |   457.38 |   438.87 |   485.42 |
| Current (AMPS) |   973.84 |    40.20 |  2014.31 |
| Phase Angle (degrees) |    26.94 |    12.21 |    41.65 |
| Total Harmonic Distortion (PCT) |    14.89 |     3.00 |    29.46 |

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
| THD Phase A (%) | 5.0% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.0% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.0% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 14.9% | Field-level stress indicator |
| Max Phase THD | 5.0% | Highest THD among all three phases |
| Min Phase THD | 5.0% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,387.39 kW
  - **Maximum Load:** 1,561.96 kVA
  - **Percentage of Capacity (MAX):** 62.5%
- **Average Load:** 759.75 kVA
  - **Percentage of Capacity (Avg):** 30.4%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 759.75 kVA
- **Average Power Factor (PF):** 0.890

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 771.47 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 457.38 V
- Average Current (Iavg_A): 973.84 A
- Average kW (Psum_kW): 668.57 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 11.72 kVA (1.5%)
- **Calculated PF (kW/kVA from averages):** 0.867
- **Power Factor Difference:** 0.023 (2.6%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (759.75) and measured PF (0.890) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   759.75 |        30.4% | 546,617.40 kVA | 2,281,269.59 TOTAL-HEAT |
| kW |   668.57 |        26.7% | 481,016.74 kWh | 273,779.79 Load-Heat |
| kVAR |   360.88 |        14.4% | 259,641.06 kVARh | - |
| WASTE |    91.18 |         3.6% | 65,600.66 WASTE | 37,337.86 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,281,269.59
- **Load-Heat (BTU/hr):** 273,779.79
- **Field-Heat (BTU/hr):** 37,337.86
- **Load-Heat (BTU, period total):** 196,975,431.04
- **Field-Heat (BTU, period total):** 26,863,345.21

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 4 |   759.75 |   668.57 |   360.27 |     0.88 |   30.4% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   858.26 |   755.34 |   407.07 |     0.88 |   34.3% |
| 01 |   847.12 |   745.89 |   401.05 |     0.88 |   33.9% |
| 02 |   858.61 |   755.52 |   407.41 |     0.88 |   34.3% |
| 03 |   862.83 |   759.88 |   408.28 |     0.88 |   34.5% |
| 04 |   866.68 |   762.54 |   411.42 |     0.88 |   34.7% |
| 05 |   883.14 |   776.14 |   420.64 |     0.88 |   35.3% |
| 06 |   848.05 |   746.75 |   401.55 |     0.88 |   33.9% |
| 07 |   866.67 |   763.15 |   410.39 |     0.88 |   34.7% |
| 08 |   872.35 |   767.97 |   413.37 |     0.88 |   34.9% |
| 09 |   889.95 |   784.16 |   420.44 |     0.88 |   35.6% |
| 10 |   882.41 |   778.52 |   415.10 |     0.88 |   35.3% |
| 11 |   861.33 |   759.31 |   406.33 |     0.88 |   34.5% |
| 12 |   835.44 |   737.12 |   392.96 |     0.88 |   33.4% |
| 13 |   836.34 |   736.64 |   395.70 |     0.88 |   33.5% |
| 14 |   833.08 |   732.80 |   395.91 |     0.88 |   33.3% |
| 15 |   773.09 |   678.40 |   370.40 |     0.88 |   30.9% |
| 16 |   647.48 |   563.39 |   318.67 |     0.87 |   25.9% |
| 17 |   433.17 |   378.68 |   209.30 |     0.87 |   17.3% |
| 18 |   292.28 |   256.66 |   138.71 |     0.88 |   11.7% |
| 19 |   265.04 |   232.99 |   125.26 |     0.88 |   10.6% |
| 20 |   425.88 |   377.91 |   194.05 |     0.89 |   17.0% |
| 21 |   783.82 |   690.91 |   369.35 |     0.88 |   31.4% |
| 22 |   855.54 |   752.93 |   405.82 |     0.88 |   34.2% |
| 23 |   848.36 |   745.86 |   403.85 |     0.88 |   33.9% |

---

# END OF REPORT

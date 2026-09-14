# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 492,159.6 kWh (Usage per period)
- **Consumption Cost per unit:** $0.318/kWh (Cost per kWh)
- **Consumption Total Cost:** $156,596.22 (Cost per period)
- **Consumption Total Cost:** $210.48 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T10 Air Chiller  
**Generated:** 2026-09-10 23:16:36  
**Data Source:** AN53111387-V-1minRES_44640CLP_260101-260131c.csv  

## Time Period

- **Period:** January 01, 2026 thru January 31, 2026
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

- **Transformer:** T10 Air Chiller
- **Power Factor:** 0.890
- **Total Energy (Actual):** 492,159.56 kWh (per period), 661.50 kW (per hour)
- **Total Waste (Actual):** 68,577.70 kWh (per period), 92.17 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T10-Air-Chiller_AN53111387-1minRES_260101-260131.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T10-Air-Chiller_AN53111387-1minRES_260101-260131.md


## UNITY MANAGEMENT T10 Air Chiller SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 92.17 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 55.81 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.3182/kWh (all-inclusive)
- **T10 Air Chiller Utility Cost Offset:** $29.33/hour
- **Annual Offset Savings:** $256915/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 229,183 BTU/hr
- **Total Cooling kW No Longer Needed:** 20.10 kW
- **Cooling Energy Cost Avoided:** $6.40/hour
- **Annual Cooling Savings:** $56031/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 112.28 kW
- **CO2e Emissions Avoided:** 367.16 metric tons/year
- **Monthly CO2e Reduction:** 30.60 metric tons/month
- **Hourly CO2e Reduction:** 0.0419 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $14136/year

### Total T10 Air Chiller Unity Savings

- **Per Hour:** $37.34
- **Per Day:** $896.11
- **Per Month:** $26883.40
- **Per Year:** $327081

### T10 Air Chiller Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 760.2 kVAR Max (Avg: 361.2 kVAR/hr ; 260,042 kVAR/mo)
- **Max Harmonic Distortion:** 30.2% Max (range: 3.0% - 30.2%)
- **Max Amperage:** 2,004A Max (range: 71A - 2004A)

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
| Line to Neutral Voltage (277v) |   265.17 |   255.50 |   279.80 |
| Line to Line Voltage (480v) |   459.29 |   442.55 |   484.62 |
| Current (AMPS) |   959.29 |    70.66 |  2003.82 |
| Phase Angle (degrees) |    26.94 |    17.35 |    39.45 |
| Total Harmonic Distortion (PCT) |    14.88 |     3.00 |    30.24 |

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

- **Maximum UtilityDemand:** 1,382.08 kW
  - **Maximum Load:** 1,577.08 kVA
  - **Percentage of Capacity (MAX):** 63.1%
- **Average Load:** 753.68 kVA
  - **Percentage of Capacity (Avg):** 30.1%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 753.68 kVA
- **Average Power Factor (PF):** 0.890

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 763.13 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 459.29 V
- Average Current (Iavg_A): 959.29 A
- Average kW (Psum_kW): 661.50 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 9.45 kVA (1.3%)
- **Calculated PF (kW/kVA from averages):** 0.867
- **Power Factor Difference:** 0.023 (2.6%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (753.68) and measured PF (0.890) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   753.68 |        30.1% | 560,737.26 kVA | 2,257,148.25 TOTAL-HEAT |
| kW |   661.50 |        26.5% | 492,159.56 kWh | 276,047.37 Load-Heat |
| kVAR |   361.17 |        14.4% | 268,710.34 kVARh | - |
| WASTE |    92.17 |         3.7% | 68,577.70 WASTE | 38,464.55 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,257,148.25
- **Load-Heat (BTU/hr):** 276,047.37
- **Field-Heat (BTU/hr):** 38,464.55
- **Load-Heat (BTU, period total):** 205,379,242.27
- **Field-Heat (BTU, period total):** 28,617,623.58

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 1 |   753.68 |   661.50 |   360.31 |     0.88 |   30.1% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   843.26 |   739.28 |   404.88 |     0.88 |   33.7% |
| 01 |   827.64 |   725.77 |   397.05 |     0.88 |   33.1% |
| 02 |   864.86 |   757.86 |   416.30 |     0.88 |   34.6% |
| 03 |   864.21 |   757.35 |   415.89 |     0.88 |   34.6% |
| 04 |   870.44 |   762.94 |   418.59 |     0.88 |   34.8% |
| 05 |   890.42 |   779.57 |   429.61 |     0.88 |   35.6% |
| 06 |   885.15 |   775.38 |   426.33 |     0.88 |   35.4% |
| 07 |   859.13 |   753.14 |   412.92 |     0.88 |   34.4% |
| 08 |   860.49 |   754.71 |   412.84 |     0.88 |   34.4% |
| 09 |   857.86 |   752.49 |   411.41 |     0.88 |   34.3% |
| 10 |   847.80 |   743.92 |   406.08 |     0.88 |   33.9% |
| 11 |   835.95 |   733.85 |   399.82 |     0.88 |   33.4% |
| 12 |   795.02 |   699.07 |   378.12 |     0.88 |   31.8% |
| 13 |   797.08 |   700.40 |   379.87 |     0.88 |   31.9% |
| 14 |   748.00 |   658.34 |   354.40 |     0.88 |   29.9% |
| 15 |   693.93 |   609.90 |   329.97 |     0.88 |   27.8% |
| 16 |   564.79 |   494.04 |   272.45 |     0.87 |   22.6% |
| 17 |   461.21 |   402.53 |   223.71 |     0.87 |   18.4% |
| 18 |   326.12 |   286.80 |   153.47 |     0.88 |   13.0% |
| 19 |   339.69 |   298.71 |   160.20 |     0.88 |   13.6% |
| 20 |   504.45 |   448.85 |   227.68 |     0.89 |   20.2% |
| 21 |   817.64 |   720.90 |   384.90 |     0.88 |   32.7% |
| 22 |   885.49 |   778.10 |   422.11 |     0.88 |   35.4% |
| 23 |   847.67 |   742.23 |   408.77 |     0.88 |   33.9% |

---

# END OF REPORT

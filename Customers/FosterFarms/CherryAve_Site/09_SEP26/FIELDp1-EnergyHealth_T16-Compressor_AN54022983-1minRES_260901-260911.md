# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 251,825.9 kWh (Usage per period)
- **Consumption Cost per unit:** $0.350/kWh (Cost per kWh)
- **Consumption Total Cost:** $88,139.05 (Cost per period)
- **Consumption Total Cost:** $351.15 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T16 Compressor  
**Generated:** 2026-10-03 12:31:41  
**Data Source:** AN54022983-V-1minRES_15060CLP_260901-260911c.csv  

## Time Period

- **Period:** September 01, 2026 thru September 11, 2026
- **Number of Days:** 11 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 15,060

- **Dataset Coverage:** Partial month (36.7% of 30-day month)
- **Billing Scale Factor:** 2.727x (normalization applied for monthly comparison)

## Facility Information

- **Facility:** Foster Farms
- **Location:** Cherry Ave Facility
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** T16 Compressor
- **Power Factor:** 0.873
- **Total Energy (Actual):** 251,825.87 kWh (11 days), 1003.29 kW (per hour)
- **Total Energy (Monthly Equivalent):** 686,797.82 kWh
- **Total Waste (Actual):** 32,004.57 kWh (11 days), 127.51 kW (per hour)
- **Total Waste (Monthly Equivalent):** 87,285.19 kWh

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T16-Compressor_AN54022983-1minRES_260901-260911.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T16-Compressor_AN54022983-1minRES_260901-260911.md


## UNITY MANAGEMENT T16 Compressor SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 127.51 kW/hr (actual)
- **Heat-Coupled Burden Used in Thermal Model:** 73.25 kW/hr (modeled_non_active_field_burden)
- **Monthly Equivalent Waste:** 347.75 kW/hr
- **Blended Electricity Rate:** $0.3500/kWh (all-inclusive)
- **T16 Compressor Utility Cost Offset (Monthly Equivalent):** $121.71/hour
- **Annual Offset Savings:** $390940/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 268,297 BTU/hr
- **Total Cooling kW No Longer Needed:** 23.71 kW
- **Cooling Energy Cost Avoided:** $8.30/hour
- **Annual Cooling Savings:** $72682/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 151.21 kW
- **CO2e Emissions Avoided:** 494.50 metric tons/year
- **Monthly CO2e Reduction:** 41.21 metric tons/month
- **Hourly CO2e Reduction:** 0.0564 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $19038/year

### Total T16 Compressor Unity Savings

- **Per Hour:** $55.10
- **Per Day:** $1322.36
- **Per Month:** $39670.74
- **Per Year:** $482661

### T16 Compressor Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 797.6 kVAR Max (Avg: 521.6 kVAR/hr ; 375,585 kVAR/mo)
- **Max Harmonic Distortion:** 78.2% Max (range: 0.0% - 78.2%)
- **Max Amperage:** 1,897A Max (range: 54A - 1897A)

---

# T16 Compressor DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   273.19 |   263.78 |   291.12 |
| Line to Line Voltage (480v) |   473.17 |   456.87 |   504.24 |
| Current (AMPS) |  1391.81 |    54.00 |  1897.06 |
| Phase Angle (degrees) |    28.85 |    24.46 |    47.32 |
| Total Harmonic Distortion (PCT) |     8.94 |     0.00 |    78.23 |

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
| THD Phase A (%) | 2.9% | IEEE standard per-phase calculation |
| THD Phase B (%) | 3.1% | IEEE standard per-phase calculation |
| THD Phase C (%) | 3.0% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 8.9% | Field-level stress indicator |
| Max Phase THD | 3.1% | Highest THD among all three phases |
| Min Phase THD | 2.9% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,366.18 kW
  - **Maximum Load:** 1,530.47 kVA
  - **Percentage of Capacity (MAX):** 61.2%
- **Average Load:** 1,130.80 kVA
  - **Percentage of Capacity (Avg):** 45.2%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,130.80 kVA
- **Average Power Factor (PF):** 0.873

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,140.66 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 473.17 V
- Average Current (Iavg_A): 1391.81 A
- Average kW (Psum_kW): 1003.29 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 9.86 kVA (0.9%)
- **Calculated PF (kW/kVA from averages):** 0.880
- **Power Factor Difference:** 0.006 (0.7%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1130.80) and measured PF (0.873) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,130.80 |        45.2% | 283,830.44 kVA | 3,423,368.98 TOTAL-HEAT |
| kW | 1,003.29 |        40.1% | 251,825.87 kWh | 386,017.28 Load-Heat |
| kVAR |   521.65 |        20.9% | 130,933.00 kVARh | - |
| WASTE |   127.51 |         5.1% | 32,004.57 WASTE | 49,058.97 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,423,368.98
- **Load-Heat (BTU/hr):** 386,017.28
- **Field-Heat (BTU/hr):** 49,058.97
- **Load-Heat (BTU, period total):** 96,890,337.85
- **Field-Heat (BTU, period total):** 12,313,801.17

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 9 | 1,130.80 | 1,003.29 |   519.78 |     0.89 |   45.2% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,180.75 | 1,050.63 |   537.10 |     0.89 |   47.2% |
| 01 | 1,157.19 | 1,029.40 |   526.57 |     0.89 |   46.3% |
| 02 | 1,143.85 | 1,017.64 |   520.49 |     0.89 |   45.8% |
| 03 | 1,139.88 | 1,015.34 |   516.35 |     0.89 |   45.6% |
| 04 | 1,150.51 | 1,024.68 |   521.43 |     0.89 |   46.0% |
| 05 | 1,168.49 | 1,042.18 |   526.72 |     0.89 |   46.7% |
| 06 | 1,164.27 | 1,036.87 |   527.71 |     0.89 |   46.6% |
| 07 | 1,155.59 | 1,028.96 |   524.08 |     0.89 |   46.2% |
| 08 | 1,149.57 | 1,024.13 |   520.82 |     0.89 |   46.0% |
| 09 | 1,139.05 | 1,015.98 |   514.39 |     0.89 |   45.6% |
| 10 | 1,141.28 | 1,017.29 |   516.67 |     0.89 |   45.7% |
| 11 | 1,137.16 | 1,013.42 |   515.22 |     0.89 |   45.5% |
| 12 | 1,148.19 | 1,023.21 |   520.12 |     0.89 |   45.9% |
| 13 | 1,044.22 |   933.68 |   466.62 |     0.89 |   41.8% |
| 14 | 1,074.09 |   957.74 |   484.44 |     0.89 |   43.0% |
| 15 | 1,064.29 |   946.21 |   485.28 |     0.89 |   42.6% |
| 16 | 1,062.59 |   941.46 |   490.63 |     0.89 |   42.5% |
| 17 | 1,091.73 |   960.69 |   515.87 |     0.88 |   43.7% |
| 18 | 1,132.37 |   990.37 |   546.89 |     0.87 |   45.3% |
| 19 | 1,090.21 |   946.00 |   540.16 |     0.87 |   43.6% |
| 20 | 1,091.38 |   949.47 |   536.64 |     0.87 |   43.7% |
| 21 | 1,185.25 | 1,047.31 |   553.20 |     0.88 |   47.4% |
| 22 | 1,153.56 | 1,020.47 |   536.08 |     0.88 |   46.1% |
| 23 | 1,148.52 | 1,019.15 |   527.79 |     0.89 |   45.9% |

---

# END OF REPORT

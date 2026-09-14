# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 711,406.7 kWh (Usage per period)
- **Consumption Cost per unit:** $0.350/kWh (Cost per kWh)
- **Consumption Total Cost:** $248,992.34 (Cost per period)
- **Consumption Total Cost:** $334.67 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T16 Compressor  
**Generated:** 2026-09-10 23:18:21  
**Data Source:** AN54022983-V-1minRES_44640CLP_260801-260831c.csv  

## Time Period

- **Period:** August 01, 2026 thru August 31, 2026
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

- **Transformer:** T16 Compressor
- **Power Factor:** 0.882
- **Total Energy (Actual):** 711,406.69 kWh (per period), 956.19 kW (per hour)
- **Total Waste (Actual):** 88,912.08 kWh (per period), 119.51 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T16-Compressor_AN54022983-1minRES_260801-260831.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T16-Compressor_AN54022983-1minRES_260801-260831.md


## UNITY MANAGEMENT T16 Compressor SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 119.51 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 67.48 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.3500/kWh (all-inclusive)
- **T16 Compressor Utility Cost Offset:** $41.83/hour
- **Annual Offset Savings:** $366404/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 246,406 BTU/hr
- **Total Cooling kW No Longer Needed:** 22.22 kW
- **Cooling Energy Cost Avoided:** $7.78/hour
- **Annual Cooling Savings:** $68120/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 141.72 kW
- **CO2e Emissions Avoided:** 463.46 metric tons/year
- **Monthly CO2e Reduction:** 38.62 metric tons/month
- **Hourly CO2e Reduction:** 0.0529 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $17843/year

### Total T16 Compressor Unity Savings

- **Per Hour:** $51.64
- **Per Day:** $1239.36
- **Per Month:** $37180.85
- **Per Year:** $452367

### T16 Compressor Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,245.4 kVAR Max (Avg: 492.8 kVAR/hr ; 354,794 kVAR/mo)
- **Max Harmonic Distortion:** 92.9% Max (range: 0.0% - 92.9%)
- **Max Amperage:** 2,193A Max (range: 132A - 2193A)

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
| Line to Neutral Voltage (277v) |   274.45 |   258.30 |   292.95 |
| Line to Line Voltage (480v) |   475.36 |   447.39 |   507.40 |
| Current (AMPS) |  1321.85 |   131.66 |  2192.53 |
| Phase Angle (degrees) |    28.02 |    19.24 |    47.21 |
| Total Harmonic Distortion (PCT) |    11.31 |     0.00 |    92.89 |

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
| THD Phase A (%) | 3.9% | IEEE standard per-phase calculation |
| THD Phase B (%) | 3.8% | IEEE standard per-phase calculation |
| THD Phase C (%) | 3.7% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 11.3% | Field-level stress indicator |
| Max Phase THD | 3.9% | Highest THD among all three phases |
| Min Phase THD | 3.7% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,390.78 kW
  - **Maximum Load:** 1,702.35 kVA
  - **Percentage of Capacity (MAX):** 68.1%
- **Average Load:** 1,075.70 kVA
  - **Percentage of Capacity (Avg):** 43.0%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,075.70 kVA
- **Average Power Factor (PF):** 0.882

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,088.35 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 475.36 V
- Average Current (Iavg_A): 1321.85 A
- Average kW (Psum_kW): 956.19 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 12.65 kVA (1.2%)
- **Calculated PF (kW/kVA from averages):** 0.879
- **Power Factor Difference:** 0.003 (0.4%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1075.70) and measured PF (0.882) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,075.70 |        43.0% | 800,318.77 kVA | 3,262,662.17 TOTAL-HEAT |
| kW |   956.19 |        38.2% | 711,406.69 kWh | 362,468.16 Load-Heat |
| kVAR |   492.77 |        19.7% | 366,620.58 kVARh | - |
| WASTE |   119.51 |         4.8% | 88,912.08 WASTE | 45,301.51 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,262,662.17
- **Load-Heat (BTU/hr):** 362,468.16
- **Field-Heat (BTU/hr):** 45,301.51
- **Load-Heat (BTU, period total):** 269,676,307.74
- **Field-Heat (BTU, period total):** 33,704,322.33

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 8 | 1,075.70 |   956.19 |   491.70 |     0.89 |   43.0% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,123.31 |   999.88 |   510.92 |     0.89 |   44.9% |
| 01 | 1,126.89 | 1,003.13 |   512.26 |     0.89 |   45.1% |
| 02 | 1,137.93 | 1,013.34 |   516.58 |     0.89 |   45.5% |
| 03 | 1,127.26 | 1,004.75 |   510.06 |     0.89 |   45.1% |
| 04 | 1,098.49 |   978.72 |   497.80 |     0.89 |   43.9% |
| 05 | 1,126.70 | 1,004.57 |   509.20 |     0.89 |   45.1% |
| 06 | 1,127.46 | 1,004.99 |   509.91 |     0.89 |   45.1% |
| 07 | 1,105.81 |   985.50 |   500.49 |     0.89 |   44.2% |
| 08 | 1,107.81 |   987.59 |   501.08 |     0.89 |   44.3% |
| 09 | 1,098.98 |   980.21 |   496.18 |     0.89 |   44.0% |
| 10 | 1,071.37 |   955.02 |   484.79 |     0.89 |   42.9% |
| 11 | 1,063.46 |   947.51 |   482.13 |     0.89 |   42.5% |
| 12 | 1,055.35 |   939.63 |   479.69 |     0.89 |   42.2% |
| 13 | 1,019.37 |   908.62 |   461.19 |     0.89 |   40.8% |
| 14 | 1,020.80 |   908.66 |   464.13 |     0.89 |   40.8% |
| 15 | 1,008.51 |   897.08 |   459.92 |     0.89 |   40.3% |
| 16 |   986.98 |   875.49 |   454.72 |     0.89 |   39.5% |
| 17 | 1,021.33 |   902.40 |   476.90 |     0.88 |   40.9% |
| 18 | 1,032.68 |   910.60 |   486.20 |     0.88 |   41.3% |
| 19 | 1,033.80 |   905.90 |   497.24 |     0.88 |   41.4% |
| 20 | 1,012.20 |   887.48 |   485.87 |     0.88 |   40.5% |
| 21 | 1,063.89 |   946.01 |   485.87 |     0.89 |   42.6% |
| 22 | 1,092.40 |   972.57 |   496.50 |     0.89 |   43.7% |
| 23 | 1,153.96 | 1,028.96 |   521.27 |     0.89 |   46.2% |

---

# END OF REPORT

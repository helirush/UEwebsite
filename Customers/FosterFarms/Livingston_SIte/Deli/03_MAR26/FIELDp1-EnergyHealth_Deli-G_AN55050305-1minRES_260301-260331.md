# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 467,827.1 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $91,226.29 (Cost per period)
- **Consumption Total Cost:** $122.89 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Deli G  
**Generated:** 2026-04-19 22:03:30  
**Data Source:** AN55050305-V-1minRES_44550CLP_260301-260331c.csv  

## Time Period

- **Period:** March 01, 2026 thru March 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,540

- **Dataset Coverage:** Complete month (100.0% of 31-day month)
- **Billing Scale Factor:** 1.000x (no normalization needed)

## Facility Information

- **Facility:** Foster Farms
- **Location:** Livingston HQ Facility
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** Deli G
- **Power Factor:** 0.872
- **Total Energy (Actual):** 467,827.13 kWh (per period), 630.21 kW (per hour)
- **Total Waste (Actual):** 52,023.12 kWh (per period), 70.08 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Deli-G_AN55050305-1minRES_260301-260331.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Deli-G_AN55050305-1minRES_260301-260331.md


## UNITY MANAGEMENT Deli G SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 70.08 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Deli G Utility Cost Offset:** $13.67/hour
- **Annual Offset Savings:** $119712/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 252,413 BTU/hr
- **Total Cooling kW No Longer Needed:** 22.11 kW
- **Cooling Energy Cost Avoided:** $4.31/hour
- **Annual Cooling Savings:** $37775/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 92.19 kW
- **CO2e Emissions Avoided:** 301.49 metric tons/year
- **Monthly CO2e Reduction:** 25.12 metric tons/month
- **Hourly CO2e Reduction:** 0.0344 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $11607/year

### Total Deli G Unity Savings

- **Per Hour:** $19.30
- **Per Day:** $463.27
- **Per Month:** $13898.14
- **Per Year:** $169094

### Deli G Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,538.4 kVAR Max (Avg: 305.4 kVAR/hr ; 219,856 kVAR/mo)
- **Max Harmonic Distortion:** 28.0% Max (range: 3.0% - 28.0%)
- **Max Amperage:** 2,268A Max (range: 119A - 2268A)

---

# Deli G DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   276.96 |   264.13 |   289.69 |
| Line to Line Voltage (480v) |   479.71 |   457.49 |   501.76 |
| Current (AMPS) |   845.12 |   118.97 |  2267.60 |
| Phase Angle (degrees) |    27.95 |     2.56 |    68.53 |
| Total Harmonic Distortion (PCT) |    14.20 |     3.00 |    27.99 |

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
| THD Phase A (%) | 4.7% | IEEE standard per-phase calculation |
| THD Phase B (%) | 4.7% | IEEE standard per-phase calculation |
| THD Phase C (%) | 4.7% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 14.2% | Field-level stress indicator |
| Max Phase THD | 4.7% | Highest THD among all three phases |
| Min Phase THD | 4.7% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,746.09 kW
  - **Maximum Load:** 1,843.55 kVA
  - **Percentage of Capacity (MAX):** 73.7%
- **Average Load:** 700.29 kVA
  - **Percentage of Capacity (Avg):** 28.0%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 700.29 kVA
- **Average Power Factor (PF):** 0.872

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 702.19 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 479.71 V
- Average Current (Iavg_A): 845.12 A
- Average kW (Psum_kW): 630.21 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 1.90 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.897
- **Power Factor Difference:** 0.025 (2.9%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (700.29) and measured PF (0.872) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   700.29 |        28.0% | 519,850.26 kVA | 2,150,371.72 TOTAL-HEAT |
| kW |   630.21 |        25.2% | 467,827.13 kWh | 215,194.76 Load-Heat |
| kVAR |   305.36 |        12.2% | 226,676.12 kVARh | - |
| WASTE |    70.08 |         2.8% | 52,023.12 WASTE | 23,930.00 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,150,371.72
- **Load-Heat (BTU/hr):** 215,194.76
- **Field-Heat (BTU/hr):** 23,930.00
- **Load-Heat (BTU, period total):** 159,746,246.39
- **Field-Heat (BTU, period total):** 17,764,037.37

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 3 |   700.29 |   630.21 |   289.50 |     0.90 |   28.0% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   491.60 |   423.39 |   236.49 |     0.86 |   19.7% |
| 01 |   307.74 |   238.56 |   193.48 |     0.78 |   12.3% |
| 02 |   293.88 |   221.16 |   192.52 |     0.75 |   11.8% |
| 03 |   301.59 |   226.71 |   196.12 |     0.75 |   12.1% |
| 04 |   317.95 |   237.59 |   206.66 |     0.75 |   12.7% |
| 05 |   392.20 |   298.75 |   250.99 |     0.76 |   15.7% |
| 06 | 1,012.27 |   894.01 |   458.64 |     0.88 |   40.5% |
| 07 | 1,021.92 |   924.11 |   425.88 |     0.90 |   40.9% |
| 08 |   960.17 |   864.12 |   407.98 |     0.90 |   38.4% |
| 09 |   915.26 |   838.72 |   360.08 |     0.92 |   36.6% |
| 10 |   845.90 |   769.24 |   343.25 |     0.91 |   33.8% |
| 11 |   759.13 |   694.76 |   296.89 |     0.92 |   30.4% |
| 12 |   860.88 |   800.67 |   309.86 |     0.93 |   34.4% |
| 13 |   786.22 |   710.39 |   325.69 |     0.90 |   31.4% |
| 14 |   848.62 |   788.96 |   306.06 |     0.93 |   33.9% |
| 15 |   682.74 |   601.50 |   310.67 |     0.88 |   27.3% |
| 16 |   837.80 |   782.82 |   292.56 |     0.93 |   33.5% |
| 17 |   815.22 |   752.87 |   303.50 |     0.92 |   32.6% |
| 18 |   777.85 |   720.22 |   285.36 |     0.93 |   31.1% |
| 19 |   784.21 |   732.31 |   273.52 |     0.93 |   31.4% |
| 20 |   641.73 |   587.15 |   246.71 |     0.91 |   25.7% |
| 21 |   760.24 |   718.46 |   243.78 |     0.95 |   30.4% |
| 22 |   657.68 |   609.86 |   236.06 |     0.93 |   26.3% |
| 23 |   721.02 |   675.88 |   241.12 |     0.94 |   28.8% |

---

# END OF REPORT

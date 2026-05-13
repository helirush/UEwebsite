# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 779,707.5 kWh (Usage per period)
- **Consumption Cost per unit:** $0.350/kWh (Cost per kWh)
- **Consumption Total Cost:** $272,897.63 (Cost per period)
- **Consumption Total Cost:** $367.29 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T12 Main  
**Generated:** 2026-04-17 11:16:50  
**Data Source:** AN54021613-V-1minRES_44580CLP_260301-260331c.csv  

## Time Period

- **Period:** March 01, 2026 thru March 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,580

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

- **Transformer:** T12 Main
- **Power Factor:** 0.836
- **Total Energy (Actual):** 779,707.52 kWh (per period), 1049.40 kW (per hour)
- **Total Waste (Actual):** 145,641.86 kWh (per period), 196.02 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T12-Main_AN54021613-1minRES_260301-260331.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T12-Main_AN54021613-1minRES_260301-260331.md


## UNITY MANAGEMENT T12 Main SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 196.02 kW/hr
- **Blended Electricity Rate:** $0.3500/kWh (all-inclusive)
- **T12 Main Utility Cost Offset:** $68.61/hour
- **Annual Offset Savings:** $600993/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 774,483 BTU/hr
- **Total Cooling kW No Longer Needed:** 67.82 kW
- **Cooling Energy Cost Avoided:** $23.74/hour
- **Annual Cooling Savings:** $207945/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 263.84 kW
- **CO2e Emissions Avoided:** 862.81 metric tons/year
- **Monthly CO2e Reduction:** 71.90 metric tons/month
- **Hourly CO2e Reduction:** 0.0985 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $33218/year

### Total T12 Main Unity Savings

- **Per Hour:** $96.14
- **Per Day:** $2307.28
- **Per Month:** $69218.33
- **Per Year:** $842156

### T12 Main Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,077.3 kVAR Max (Avg: 670.7 kVAR/hr ; 482,899 kVAR/mo)
- **Max Harmonic Distortion:** 32.4% Max (range: 3.0% - 32.4%)
- **Max Amperage:** 2,640A Max (range: 434A - 2640A)

---

# T12 Main DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   269.48 |   255.11 |   285.23 |
| Line to Line Voltage (480v) |   466.75 |   441.87 |   494.04 |
| Current (AMPS) |  1553.37 |   433.67 |  2639.56 |
| Phase Angle (degrees) |    33.14 |    25.84 |    43.70 |
| Total Harmonic Distortion (PCT) |    15.99 |     3.00 |    32.38 |

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
| THD Phase A (%) | 5.3% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.3% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.3% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 16.0% | Field-level stress indicator |
| Max Phase THD | 5.3% | Highest THD among all three phases |
| Min Phase THD | 5.3% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,577.21 kW
  - **Maximum Load:** 1,870.47 kVA
  - **Percentage of Capacity (MAX):** 74.8%
- **Average Load:** 1,245.42 kVA
  - **Percentage of Capacity (Avg):** 49.8%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,245.42 kVA
- **Average Power Factor (PF):** 0.836

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,255.80 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 466.75 V
- Average Current (Iavg_A): 1553.37 A
- Average kW (Psum_kW): 1049.40 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 10.37 kVA (0.8%)
- **Calculated PF (kW/kVA from averages):** 0.836
- **Power Factor Difference:** 0.001 (0.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1245.42) and measured PF (0.836) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,245.42 |        49.8% | 925,349.38 kVA | 3,580,717.07 TOTAL-HEAT |
| kW | 1,049.40 |        42.0% | 779,707.52 kWh | 563,573.39 Load-Heat |
| kVAR |   670.69 |        26.8% | 498,324.85 kVARh | - |
| WASTE |   196.02 |         7.8% | 145,641.86 WASTE | 105,270.08 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,580,717.07
- **Load-Heat (BTU/hr):** 563,573.39
- **Field-Heat (BTU/hr):** 105,270.08
- **Load-Heat (BTU, period total):** 418,735,030.64
- **Field-Heat (BTU, period total):** 78,215,672.38

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 3 | 1,245.42 | 1,049.40 |   668.78 |     0.84 |   49.8% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,320.69 | 1,103.35 |   724.80 |     0.84 |   52.8% |
| 01 | 1,342.38 | 1,121.18 |   736.96 |     0.84 |   53.7% |
| 02 | 1,418.04 | 1,193.24 |   764.85 |     0.84 |   56.7% |
| 03 | 1,362.75 | 1,142.37 |   741.70 |     0.84 |   54.5% |
| 04 | 1,361.68 | 1,146.85 |   732.93 |     0.84 |   54.5% |
| 05 | 1,338.88 | 1,130.32 |   716.55 |     0.84 |   53.6% |
| 06 | 1,354.26 | 1,146.94 |   719.23 |     0.85 |   54.2% |
| 07 | 1,326.93 | 1,121.19 |   708.79 |     0.84 |   53.1% |
| 08 | 1,316.49 | 1,112.89 |   702.38 |     0.85 |   52.7% |
| 09 | 1,264.22 | 1,072.87 |   667.21 |     0.85 |   50.6% |
| 10 | 1,323.59 | 1,120.06 |   704.07 |     0.85 |   52.9% |
| 11 | 1,313.38 | 1,107.80 |   704.15 |     0.84 |   52.5% |
| 12 | 1,301.09 | 1,098.03 |   696.71 |     0.84 |   52.0% |
| 13 | 1,243.55 | 1,051.16 |   663.11 |     0.85 |   49.7% |
| 14 | 1,055.64 |   901.40 |   547.02 |     0.85 |   42.2% |
| 15 | 1,102.44 |   953.48 |   550.14 |     0.86 |   44.1% |
| 16 | 1,164.88 | 1,006.25 |   583.86 |     0.86 |   46.6% |
| 17 | 1,068.08 |   914.92 |   548.33 |     0.86 |   42.7% |
| 18 |   957.12 |   808.14 |   511.12 |     0.84 |   38.3% |
| 19 |   922.51 |   774.60 |   499.47 |     0.84 |   36.9% |
| 20 | 1,182.38 |   973.79 |   669.16 |     0.82 |   47.3% |
| 21 | 1,288.67 | 1,067.03 |   721.29 |     0.83 |   51.5% |
| 22 | 1,253.78 | 1,030.70 |   712.95 |     0.82 |   50.2% |
| 23 | 1,312.30 | 1,091.81 |   727.02 |     0.83 |   52.5% |

---

# END OF REPORT

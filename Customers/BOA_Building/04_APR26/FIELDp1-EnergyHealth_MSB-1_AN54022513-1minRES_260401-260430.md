# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 192,292.9 kWh (Usage per period)
- **Consumption Cost per unit:** $0.080/kWh (Cost per kWh)
- **Consumption Total Cost:** $15,383.43 (Cost per period)
- **Consumption Total Cost:** $21.37 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** MSB-1  
**Generated:** 2026-05-19 15:11:10  
**Data Source:** AN54022513-V-1minRES_43200CLP_260401-260430c.csv  

## Time Period

- **Period:** April 01, 2026 thru April 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,200

- **Dataset Coverage:** Complete month (100.0% of 30-day month)
- **Billing Scale Factor:** 1.000x (no normalization needed)

## Facility Information

- **Facility:** Bank of America
- **Location:** Tower Complex
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** MSB-1
- **Power Factor:** 0.988
- **Total Energy (Actual):** 192,292.89 kWh (per period), 267.07 kW (per hour)
- **Total Waste (Actual):** 1,945.39 kWh (per period), 2.70 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_MSB-1_AN54022513-1minRES_260401-260430.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_MSB-1_AN54022513-1minRES_260401-260430.md


## UNITY MANAGEMENT MSB-1 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 2.70 kW/hr
- **Blended Electricity Rate:** $0.0800/kWh (all-inclusive)
- **MSB-1 Utility Cost Offset:** $0.22/hour
- **Annual Offset Savings:** $1894/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 9,700 BTU/hr
- **Total Cooling kW No Longer Needed:** 0.85 kW
- **Cooling Energy Cost Avoided:** $0.07/hour
- **Annual Cooling Savings:** $595/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 3.55 kW
- **CO2e Emissions Avoided:** 11.61 metric tons/year
- **Monthly CO2e Reduction:** 0.97 metric tons/month
- **Hourly CO2e Reduction:** 0.0013 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $447/year

### Total MSB-1 Unity Savings

- **Per Hour:** $0.34
- **Per Day:** $8.04
- **Per Month:** $241.31
- **Per Year:** $2936

### MSB-1 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 195.5 kVAR Max (Avg: 38.1 kVAR/hr ; 27,422 kVAR/mo)
- **Max Harmonic Distortion:** 28.3% Max (range: 3.0% - 28.3%)
- **Max Amperage:** 1,003A Max (range: 100A - 1003A)

---

# MSB-1 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   277.70 |   275.31 |   279.93 |
| Line to Line Voltage (480v) |   480.99 |   476.85 |   484.85 |
| Current (AMPS) |   323.19 |   100.22 |  1003.35 |
| Phase Angle (degrees) |     8.45 |     3.38 |    24.50 |
| Total Harmonic Distortion (PCT) |    13.96 |     3.00 |    28.26 |

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
| THD Phase B (%) | 4.6% | IEEE standard per-phase calculation |
| THD Phase C (%) | 4.7% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 14.0% | Field-level stress indicator |
| Max Phase THD | 4.7% | Highest THD among all three phases |
| Min Phase THD | 4.6% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 810.71 kW
  - **Maximum Load:** 833.18 kVA
  - **Percentage of Capacity (MAX):** 33.3%
- **Average Load:** 269.78 kVA
  - **Percentage of Capacity (Avg):** 10.8%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 269.78 kVA
- **Average Power Factor (PF):** 0.988

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 269.25 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 480.99 V
- Average Current (Iavg_A): 323.19 A
- Average kW (Psum_kW): 267.07 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.53 kVA (0.2%)
- **Calculated PF (kW/kVA from averages):** 0.992
- **Power Factor Difference:** 0.004 (0.4%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (269.78) and measured PF (0.988) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   269.78 |        10.8% | 194,238.28 kVA | 911,292.56 TOTAL-HEAT |
| kW |   267.07 |        10.7% | 192,292.89 kWh | 9,127.05 Load-Heat |
| kVAR |    38.09 |         1.5% | 27,421.80 kVARh | - |
| WASTE |     2.70 |         0.1% | 1,945.39 WASTE | 92.34 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 911,292.56
- **Load-Heat (BTU/hr):** 9,127.05
- **Field-Heat (BTU/hr):** 92.34
- **Load-Heat (BTU, period total):** 6,571,476.96
- **Field-Heat (BTU, period total):** 66,482.49

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 4 |   269.78 |   267.07 |    36.53 |     0.99 |   10.8% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   130.87 |   129.34 |    19.67 |     0.99 |    5.2% |
| 01 |   131.80 |   130.27 |    19.61 |     0.99 |    5.3% |
| 02 |   137.42 |   135.97 |    19.58 |     0.99 |    5.5% |
| 03 |   166.11 |   164.73 |    20.88 |     0.99 |    6.6% |
| 04 |   243.30 |   241.93 |    25.08 |     0.99 |    9.7% |
| 05 |   368.19 |   366.46 |    34.97 |     1.00 |   14.7% |
| 06 |   402.80 |   400.78 |    39.74 |     0.99 |   16.1% |
| 07 |   395.86 |   393.65 |    41.09 |     0.99 |   15.8% |
| 08 |   358.76 |   356.53 |    39.45 |     0.99 |   14.4% |
| 09 |   349.33 |   346.78 |    41.48 |     0.99 |   14.0% |
| 10 |   350.06 |   346.90 |    45.60 |     0.99 |   14.0% |
| 11 |   366.64 |   362.96 |    50.42 |     0.99 |   14.7% |
| 12 |   356.59 |   353.06 |    48.90 |     0.99 |   14.3% |
| 13 |   345.39 |   341.39 |    50.51 |     0.99 |   13.8% |
| 14 |   334.71 |   330.98 |    48.25 |     0.99 |   13.4% |
| 15 |   328.92 |   325.24 |    47.62 |     0.99 |   13.2% |
| 16 |   325.62 |   322.22 |    45.81 |     0.99 |   13.0% |
| 17 |   327.61 |   323.52 |    49.62 |     0.99 |   13.1% |
| 18 |   194.41 |   190.84 |    36.39 |     0.98 |    7.8% |
| 19 |   192.18 |   188.51 |    36.41 |     0.98 |    7.7% |
| 20 |   177.25 |   174.27 |    31.93 |     0.98 |    7.1% |
| 21 |   173.57 |   170.86 |    30.16 |     0.98 |    6.9% |
| 22 |   170.25 |   167.65 |    29.15 |     0.98 |    6.8% |
| 23 |   146.99 |   144.93 |    24.29 |     0.99 |    5.9% |

---

# END OF REPORT

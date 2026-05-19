# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 209,165.1 kWh (Usage per period)
- **Consumption Cost per unit:** $0.080/kWh (Cost per kWh)
- **Consumption Total Cost:** $16,733.21 (Cost per period)
- **Consumption Total Cost:** $22.52 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** MSB-2  
**Generated:** 2026-05-19 15:09:03  
**Data Source:** AN54022491-V-1minRES_46335CLP_260301-260331c.csv  

## Time Period

- **Period:** March 01, 2026 thru March 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,580

- **Dataset Coverage:** Complete month (100.0% of 31-day month)
- **Billing Scale Factor:** 1.000x (no normalization needed)

## Facility Information

- **Facility:** Bank of America
- **Location:** Tower Complex
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** MSB-2
- **Power Factor:** 0.914
- **Total Energy (Actual):** 209,165.10 kWh (per period), 281.51 kW (per hour)
- **Total Waste (Actual):** 15,543.49 kWh (per period), 20.92 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_MSB-2_AN54022491-1minRES_260301-260331.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_MSB-2_AN54022491-1minRES_260301-260331.md


## UNITY MANAGEMENT MSB-2 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 20.92 kW/hr
- **Blended Electricity Rate:** $0.0800/kWh (all-inclusive)
- **MSB-2 Utility Cost Offset:** $1.67/hour
- **Annual Offset Savings:** $14661/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 75,131 BTU/hr
- **Total Cooling kW No Longer Needed:** 6.58 kW
- **Cooling Energy Cost Avoided:** $0.53/hour
- **Annual Cooling Savings:** $4612/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 27.50 kW
- **CO2e Emissions Avoided:** 89.93 metric tons/year
- **Monthly CO2e Reduction:** 7.49 metric tons/month
- **Hourly CO2e Reduction:** 0.0103 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $3462/year

### Total MSB-2 Unity Savings

- **Per Hour:** $2.60
- **Per Day:** $62.29
- **Per Month:** $1868.62
- **Per Year:** $22735

### MSB-2 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 175.1 kVAR Max (Avg: 110.5 kVAR/hr ; 79,579 kVAR/mo)
- **Max Harmonic Distortion:** 29.2% Max (range: 3.0% - 29.2%)
- **Max Amperage:** 810A Max (range: 175A - 810A)

---

# MSB-2 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   277.98 |   275.29 |   279.88 |
| Line to Line Voltage (480v) |   481.47 |   476.81 |   484.77 |
| Current (AMPS) |   364.79 |   174.66 |   810.20 |
| Phase Angle (degrees) |    22.92 |     8.50 |    41.38 |
| Total Harmonic Distortion (PCT) |    14.02 |     3.00 |    29.17 |

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
| Unity THD Composite (%) | 14.0% | Field-level stress indicator |
| Max Phase THD | 4.7% | Highest THD among all three phases |
| Min Phase THD | 4.7% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 661.92 kW
  - **Maximum Load:** 669.68 kVA
  - **Percentage of Capacity (MAX):** 26.8%
- **Average Load:** 302.43 kVA
  - **Percentage of Capacity (Avg):** 12.1%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 302.43 kVA
- **Average Power Factor (PF):** 0.914

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 304.21 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 481.47 V
- Average Current (Iavg_A): 364.79 A
- Average kW (Psum_kW): 281.51 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 1.78 kVA (0.6%)
- **Calculated PF (kW/kVA from averages):** 0.925
- **Power Factor Difference:** 0.011 (1.2%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (302.43) and measured PF (0.914) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   302.43 |        12.1% | 224,708.60 kVA | 960,566.68 TOTAL-HEAT |
| kW |   281.51 |        11.3% | 209,165.10 kWh | 66,444.10 Load-Heat |
| kVAR |   110.53 |         4.4% | 82,121.33 kVARh | - |
| WASTE |    20.92 |         0.8% | 15,543.49 WASTE | 4,937.60 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 960,566.68
- **Load-Heat (BTU/hr):** 66,444.10
- **Field-Heat (BTU/hr):** 4,937.60
- **Load-Heat (BTU, period total):** 49,367,966.07
- **Field-Heat (BTU, period total):** 3,668,635.77

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 3 |   302.43 |   281.51 |   104.91 |     0.93 |   12.1% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   191.53 |   166.88 |    92.77 |     0.87 |    7.7% |
| 01 |   194.33 |   169.57 |    93.61 |     0.87 |    7.8% |
| 02 |   204.16 |   181.05 |    92.41 |     0.89 |    8.2% |
| 03 |   237.17 |   216.49 |    93.34 |     0.91 |    9.5% |
| 04 |   342.13 |   326.85 |    95.14 |     0.96 |   13.7% |
| 05 |   424.19 |   411.59 |    97.80 |     0.97 |   17.0% |
| 06 |   429.17 |   415.58 |   103.67 |     0.97 |   17.2% |
| 07 |   434.54 |   417.97 |   115.61 |     0.96 |   17.4% |
| 08 |   417.06 |   397.88 |   122.06 |     0.95 |   16.7% |
| 09 |   392.91 |   374.34 |   116.50 |     0.95 |   15.7% |
| 10 |   380.85 |   362.35 |   114.47 |     0.95 |   15.2% |
| 11 |   371.37 |   351.74 |   116.69 |     0.95 |   14.9% |
| 12 |   365.43 |   343.74 |   121.48 |     0.94 |   14.6% |
| 13 |   342.87 |   320.53 |   118.54 |     0.93 |   13.7% |
| 14 |   334.60 |   313.11 |   114.61 |     0.94 |   13.4% |
| 15 |   335.58 |   313.45 |   116.30 |     0.93 |   13.4% |
| 16 |   337.73 |   315.40 |   117.25 |     0.93 |   13.5% |
| 17 |   328.69 |   307.06 |   113.92 |     0.93 |   13.1% |
| 18 |   207.18 |   182.29 |    97.56 |     0.88 |    8.3% |
| 19 |   195.75 |   171.74 |    93.22 |     0.88 |    7.8% |
| 20 |   194.67 |   170.77 |    92.69 |     0.88 |    7.8% |
| 21 |   195.63 |   171.68 |    92.98 |     0.88 |    7.8% |
| 22 |   199.15 |   175.87 |    92.46 |     0.88 |    8.0% |
| 23 |   198.55 |   175.19 |    92.40 |     0.88 |    7.9% |

---

# END OF REPORT

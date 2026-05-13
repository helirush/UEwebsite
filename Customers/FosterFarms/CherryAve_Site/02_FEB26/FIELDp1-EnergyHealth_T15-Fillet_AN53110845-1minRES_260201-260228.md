# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 601,509.9 kWh (Usage per period)
- **Consumption Cost per unit:** $0.333/kWh (Cost per kWh)
- **Consumption Total Cost:** $200,503.31 (Cost per period)
- **Consumption Total Cost:** $298.38 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T15 Fillet  
**Generated:** 2026-03-14 12:39:31  
**Data Source:** AN53110845-V-1minRES_40320CLP_260201-260228c.csv  

## Time Period

- **Period:** February 01, 2026 thru February 28, 2026
- **Number of Days:** 28 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 40,319

- **Dataset Coverage:** Complete month (100.0% of 28-day month)
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
- **Power Factor:** 0.842
- **Total Energy (Actual):** 601,509.94 kWh (per period), 895.13 kW (per hour)
- **Total Waste (Actual):** 99,290.52 kWh (per period), 147.76 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T15-Fillet_AN53110845-1minRES_260201-260228.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T15-Fillet_AN53110845-1minRES_260201-260228.md


## UNITY MANAGEMENT T15 Fillet SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 147.76 kW/hr
- **Blended Electricity Rate:** $0.3333/kWh (all-inclusive)
- **T15 Fillet Utility Cost Offset:** $49.25/hour
- **Annual Offset Savings:** $431452/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 575,327 BTU/hr
- **Total Cooling kW No Longer Needed:** 50.44 kW
- **Cooling Energy Cost Avoided:** $16.81/hour
- **Annual Cooling Savings:** $147287/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 198.20 kW
- **CO2e Emissions Avoided:** 648.14 metric tons/year
- **Monthly CO2e Reduction:** 54.01 metric tons/month
- **Hourly CO2e Reduction:** 0.0740 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $24953/year

### Total T15 Fillet Unity Savings

- **Per Hour:** $68.91
- **Per Day:** $1653.95
- **Per Month:** $49618.49
- **Per Year:** $603692

### T15 Fillet Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 830.5 kVAR Max (Avg: 535.1 kVAR/hr ; 385,288 kVAR/mo)
- **Max Harmonic Distortion:** 94.9% Max (range: 0.0% - 94.9%)
- **Max Amperage:** 2,290A Max (range: 250A - 2290A)

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
| Line to Neutral Voltage (277v) |   277.26 |   225.48 |   290.86 |
| Line to Line Voltage (480v) |   480.24 |   390.54 |   503.78 |
| Current (AMPS) |  1260.59 |   249.76 |  2290.16 |
| Phase Angle (degrees) |    32.20 |    23.51 |    53.34 |
| Total Harmonic Distortion (PCT) |    22.58 |     0.00 |    94.89 |

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
| THD Phase A (%) | 7.6% | IEEE standard per-phase calculation |
| THD Phase B (%) | 7.6% | IEEE standard per-phase calculation |
| THD Phase C (%) | 7.4% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 22.6% | Field-level stress indicator |
| Max Phase THD | 7.6% | Highest THD among all three phases |
| Min Phase THD | 7.4% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,677.22 kW
  - **Maximum Load:** 1,871.03 kVA
  - **Percentage of Capacity (MAX):** 74.8%
- **Average Load:** 1,042.88 kVA
  - **Percentage of Capacity (Avg):** 41.7%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,042.88 kVA
- **Average Power Factor (PF):** 0.842

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,048.55 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 480.24 V
- Average Current (Iavg_A): 1260.59 A
- Average kW (Psum_kW): 895.13 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 5.66 kVA (0.5%)
- **Calculated PF (kW/kVA from averages):** 0.854
- **Power Factor Difference:** 0.011 (1.3%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1042.88) and measured PF (0.842) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,042.88 |        41.7% | 700,800.46 kVA | 3,054,297.96 TOTAL-HEAT |
| kW |   895.13 |        35.8% | 601,509.94 kWh | 432,737.79 Load-Heat |
| kVAR |   535.12 |        21.4% | 359,592.94 kVARh | - |
| WASTE |   147.76 |         5.9% | 99,290.52 WASTE | 71,431.51 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,054,297.96
- **Load-Heat (BTU/hr):** 432,737.79
- **Field-Heat (BTU/hr):** 71,431.51
- **Load-Heat (BTU, period total):** 290,792,582.45
- **Field-Heat (BTU, period total):** 48,000,782.49

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 2 | 1,042.88 |   895.13 |   528.53 |     0.86 |   41.7% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,178.14 | 1,023.50 |   580.49 |     0.87 |   47.1% |
| 01 | 1,156.60 | 1,001.06 |   576.23 |     0.87 |   46.3% |
| 02 | 1,238.75 | 1,082.43 |   599.25 |     0.87 |   49.5% |
| 03 | 1,127.74 |   975.81 |   562.52 |     0.87 |   45.1% |
| 04 | 1,172.89 | 1,020.24 |   576.43 |     0.87 |   46.9% |
| 05 | 1,196.77 | 1,043.57 |   583.54 |     0.87 |   47.9% |
| 06 | 1,177.76 | 1,026.28 |   576.09 |     0.87 |   47.1% |
| 07 | 1,178.65 | 1,031.78 |   568.11 |     0.88 |   47.1% |
| 08 | 1,169.06 | 1,025.19 |   559.59 |     0.88 |   46.8% |
| 09 | 1,177.87 | 1,032.38 |   564.26 |     0.88 |   47.1% |
| 10 | 1,153.08 | 1,010.72 |   552.47 |     0.88 |   46.1% |
| 11 | 1,097.90 |   957.44 |   533.61 |     0.87 |   43.9% |
| 12 | 1,120.47 |   980.64 |   538.23 |     0.88 |   44.8% |
| 13 | 1,102.93 |   965.86 |   528.70 |     0.88 |   44.1% |
| 14 | 1,097.26 |   956.74 |   533.48 |     0.87 |   43.9% |
| 15 | 1,078.74 |   938.18 |   527.62 |     0.87 |   43.1% |
| 16 | 1,064.57 |   920.86 |   529.99 |     0.87 |   42.6% |
| 17 |   978.52 |   835.26 |   505.43 |     0.85 |   39.1% |
| 18 |   875.07 |   705.28 |   510.32 |     0.81 |   35.0% |
| 19 |   784.97 |   597.02 |   506.84 |     0.76 |   31.4% |
| 20 |   760.19 |   574.69 |   495.32 |     0.76 |   30.4% |
| 21 |   693.59 |   547.95 |   422.13 |     0.79 |   27.7% |
| 22 |   624.29 |   517.04 |   347.02 |     0.83 |   25.0% |
| 23 |   823.49 |   713.18 |   407.12 |     0.87 |   32.9% |

---

# END OF REPORT

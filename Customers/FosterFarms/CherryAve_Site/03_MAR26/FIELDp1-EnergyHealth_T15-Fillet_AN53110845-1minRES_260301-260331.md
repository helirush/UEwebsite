# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 588,714.3 kWh (Usage per period)
- **Consumption Cost per unit:** $0.350/kWh (Cost per kWh)
- **Consumption Total Cost:** $206,050.01 (Cost per period)
- **Consumption Total Cost:** $277.32 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T15 Fillet  
**Generated:** 2026-04-17 11:15:54  
**Data Source:** AN53110845-V-1minRES_44580CLP_260301-260331c.csv  

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

- **Transformer:** T15 Fillet
- **Power Factor:** 0.820
- **Total Energy (Actual):** 588,714.31 kWh (per period), 792.35 kW (per hour)
- **Total Waste (Actual):** 108,541.61 kWh (per period), 146.09 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T15-Fillet_AN53110845-1minRES_260301-260331.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T15-Fillet_AN53110845-1minRES_260301-260331.md


## UNITY MANAGEMENT T15 Fillet SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 146.09 kW/hr
- **Blended Electricity Rate:** $0.3500/kWh (all-inclusive)
- **T15 Fillet Utility Cost Offset:** $51.13/hour
- **Annual Offset Savings:** $447898/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 587,161 BTU/hr
- **Total Cooling kW No Longer Needed:** 51.42 kW
- **Cooling Energy Cost Avoided:** $18.00/hour
- **Annual Cooling Savings:** $157650/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 197.50 kW
- **CO2e Emissions Avoided:** 645.87 metric tons/year
- **Monthly CO2e Reduction:** 53.82 metric tons/month
- **Hourly CO2e Reduction:** 0.0737 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $24866/year

### Total T15 Fillet Unity Savings

- **Per Hour:** $71.97
- **Per Day:** $1727.16
- **Per Month:** $51814.90
- **Per Year:** $630415

### T15 Fillet Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 858.0 kVAR Max (Avg: 502.8 kVAR/hr ; 362,041 kVAR/mo)
- **Max Harmonic Distortion:** 134.1% Max (range: 0.0% - 134.1%)
- **Max Amperage:** 2,243A Max (range: 190A - 2243A)

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
| Line to Neutral Voltage (277v) |   276.86 |   228.48 |   290.24 |
| Line to Line Voltage (480v) |   479.54 |   395.74 |   502.72 |
| Current (AMPS) |  1139.56 |   189.97 |  2243.41 |
| Phase Angle (degrees) |    34.35 |    20.90 |    56.60 |
| Total Harmonic Distortion (PCT) |    26.30 |     0.00 |   134.09 |

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
| THD Phase A (%) | 9.0% | IEEE standard per-phase calculation |
| THD Phase B (%) | 9.1% | IEEE standard per-phase calculation |
| THD Phase C (%) | 8.2% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 26.3% | Field-level stress indicator |
| Max Phase THD | 9.1% | Highest THD among all three phases |
| Min Phase THD | 8.2% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,655.11 kW
  - **Maximum Load:** 1,834.47 kVA
  - **Percentage of Capacity (MAX):** 73.4%
- **Average Load:** 938.43 kVA
  - **Percentage of Capacity (Avg):** 37.5%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 938.43 kVA
- **Average Power Factor (PF):** 0.820

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 946.50 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 479.54 V
- Average Current (Iavg_A): 1139.56 A
- Average kW (Psum_kW): 792.35 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 8.07 kVA (0.9%)
- **Calculated PF (kW/kVA from averages):** 0.837
- **Power Factor Difference:** 0.017 (2.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (938.43) and measured PF (0.820) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   938.43 |        37.5% | 697,255.92 kVA | 2,703,602.73 TOTAL-HEAT |
| kW |   792.35 |        31.7% | 588,714.31 kWh | 420,868.98 Load-Heat |
| kVAR |   502.83 |        20.1% | 373,605.77 kVARh | - |
| WASTE |   146.09 |         5.8% | 108,541.61 WASTE | 77,595.86 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,703,602.73
- **Load-Heat (BTU/hr):** 420,868.98
- **Field-Heat (BTU/hr):** 77,595.86
- **Load-Heat (BTU, period total):** 312,705,648.82
- **Field-Heat (BTU, period total):** 57,653,725.87

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 3 |   938.43 |   792.35 |   495.58 |     0.84 |   37.5% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,042.43 |   893.51 |   532.13 |     0.86 |   41.7% |
| 01 | 1,026.39 |   871.96 |   537.77 |     0.85 |   41.1% |
| 02 | 1,125.97 |   970.34 |   567.80 |     0.86 |   45.0% |
| 03 | 1,034.06 |   880.75 |   539.04 |     0.85 |   41.4% |
| 04 | 1,059.20 |   905.35 |   546.68 |     0.85 |   42.4% |
| 05 | 1,080.18 |   928.48 |   548.91 |     0.86 |   43.2% |
| 06 | 1,047.55 |   902.33 |   529.00 |     0.86 |   41.9% |
| 07 | 1,064.00 |   917.13 |   536.32 |     0.86 |   42.6% |
| 08 | 1,076.19 |   932.81 |   532.69 |     0.87 |   43.0% |
| 09 | 1,094.88 |   947.70 |   543.45 |     0.87 |   43.8% |
| 10 | 1,058.59 |   917.77 |   522.98 |     0.87 |   42.3% |
| 11 |   994.89 |   858.55 |   497.87 |     0.86 |   39.8% |
| 12 |   981.22 |   845.95 |   492.47 |     0.86 |   39.2% |
| 13 | 1,008.65 |   868.01 |   508.65 |     0.86 |   40.3% |
| 14 | 1,005.86 |   862.73 |   512.09 |     0.86 |   40.2% |
| 15 | 1,004.49 |   859.80 |   513.51 |     0.86 |   40.2% |
| 16 |   935.39 |   797.45 |   483.31 |     0.85 |   37.4% |
| 17 |   833.48 |   697.42 |   451.68 |     0.84 |   33.3% |
| 18 |   749.81 |   576.28 |   474.48 |     0.77 |   30.0% |
| 19 |   708.58 |   520.01 |   479.00 |     0.73 |   28.3% |
| 20 |   699.90 |   517.69 |   469.05 |     0.74 |   28.0% |
| 21 |   605.38 |   467.61 |   382.10 |     0.77 |   24.2% |
| 22 |   545.97 |   443.22 |   316.17 |     0.81 |   21.8% |
| 23 |   745.37 |   639.21 |   379.13 |     0.86 |   29.8% |

---

# END OF REPORT

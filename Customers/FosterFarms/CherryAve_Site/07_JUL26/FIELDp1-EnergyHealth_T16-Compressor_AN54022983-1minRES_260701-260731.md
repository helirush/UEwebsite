# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 716,711.7 kWh (Usage per period)
- **Consumption Cost per unit:** $0.350/kWh (Cost per kWh)
- **Consumption Total Cost:** $250,849.09 (Cost per period)
- **Consumption Total Cost:** $337.16 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T16 Compressor  
**Generated:** 2026-08-04 12:54:58  
**Data Source:** AN54022983-V-1minRES_44640CLP_260701-260731c.csv  

## Time Period

- **Period:** July 01, 2026 thru July 31, 2026
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
- **Power Factor:** 0.868
- **Total Energy (Actual):** 716,711.68 kWh (per period), 963.32 kW (per hour)
- **Total Waste (Actual):** 93,530.45 kWh (per period), 125.71 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T16-Compressor_AN54022983-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T16-Compressor_AN54022983-1minRES_260701-260731.md


## UNITY MANAGEMENT T16 Compressor SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 125.71 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 72.88 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.3500/kWh (all-inclusive)
- **T16 Compressor Utility Cost Offset:** $44.00/hour
- **Annual Offset Savings:** $385436/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 264,287 BTU/hr
- **Total Cooling kW No Longer Needed:** 23.80 kW
- **Cooling Energy Cost Avoided:** $8.33/hour
- **Annual Cooling Savings:** $72970/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 149.51 kW
- **CO2e Emissions Avoided:** 488.93 metric tons/year
- **Monthly CO2e Reduction:** 40.74 metric tons/month
- **Hourly CO2e Reduction:** 0.0558 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $18824/year

### Total T16 Compressor Unity Savings

- **Per Hour:** $54.48
- **Per Day:** $1307.48
- **Per Month:** $39224.41
- **Per Year:** $477230

### T16 Compressor Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,084.8 kVAR Max (Avg: 507.9 kVAR/hr ; 365,720 kVAR/mo)
- **Max Harmonic Distortion:** 80.5% Max (range: 0.0% - 80.5%)
- **Max Amperage:** 2,052A Max (range: 88A - 2052A)

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
| Line to Neutral Voltage (277v) |   274.44 |   262.62 |   291.10 |
| Line to Line Voltage (480v) |   475.34 |   454.87 |   504.20 |
| Current (AMPS) |  1338.06 |    87.83 |  2052.04 |
| Phase Angle (degrees) |    29.50 |    24.69 |    55.71 |
| Total Harmonic Distortion (PCT) |     9.82 |     0.00 |    80.53 |

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
| THD Phase A (%) | 3.3% | IEEE standard per-phase calculation |
| THD Phase B (%) | 3.3% | IEEE standard per-phase calculation |
| THD Phase C (%) | 3.2% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 9.8% | Field-level stress indicator |
| Max Phase THD | 3.3% | Highest THD among all three phases |
| Min Phase THD | 3.2% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,397.34 kW
  - **Maximum Load:** 1,600.78 kVA
  - **Percentage of Capacity (MAX):** 64.0%
- **Average Load:** 1,089.04 kVA
  - **Percentage of Capacity (Avg):** 43.6%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,089.04 kVA
- **Average Power Factor (PF):** 0.868

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,101.63 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 475.34 V
- Average Current (Iavg_A): 1338.06 A
- Average kW (Psum_kW): 963.32 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 12.60 kVA (1.2%)
- **Calculated PF (kW/kVA from averages):** 0.874
- **Power Factor Difference:** 0.007 (0.8%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1089.04) and measured PF (0.868) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,089.04 |        43.6% | 810,242.13 kVA | 3,286,991.97 TOTAL-HEAT |
| kW |   963.32 |        38.5% | 716,711.68 kWh | 379,434.51 Load-Heat |
| kVAR |   507.94 |        20.3% | 377,910.93 kVARh | - |
| WASTE |   125.71 |         5.0% | 93,530.45 WASTE | 49,515.98 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,286,991.97
- **Load-Heat (BTU/hr):** 379,434.51
- **Field-Heat (BTU/hr):** 49,515.98
- **Load-Heat (BTU, period total):** 282,299,276.29
- **Field-Heat (BTU, period total):** 36,839,886.85

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 | 1,089.04 |   963.32 |   506.13 |     0.88 |   43.6% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,133.17 | 1,002.80 |   525.86 |     0.88 |   45.3% |
| 01 | 1,134.33 | 1,005.36 |   523.50 |     0.89 |   45.4% |
| 02 | 1,126.12 |   997.87 |   520.20 |     0.89 |   45.0% |
| 03 | 1,128.06 |   999.64 |   521.07 |     0.89 |   45.1% |
| 04 | 1,120.12 |   992.48 |   517.55 |     0.89 |   44.8% |
| 05 | 1,121.98 |   994.00 |   518.66 |     0.89 |   44.9% |
| 06 | 1,122.71 |   995.76 |   516.89 |     0.89 |   44.9% |
| 07 | 1,114.99 |   988.84 |   513.49 |     0.89 |   44.6% |
| 08 | 1,115.06 |   989.11 |   512.90 |     0.89 |   44.6% |
| 09 | 1,125.85 |   999.13 |   517.18 |     0.89 |   45.0% |
| 10 | 1,112.68 |   987.32 |   511.43 |     0.89 |   44.5% |
| 11 | 1,109.83 |   985.50 |   508.76 |     0.89 |   44.4% |
| 12 | 1,088.64 |   967.08 |   498.29 |     0.89 |   43.5% |
| 13 | 1,073.98 |   954.82 |   490.16 |     0.89 |   43.0% |
| 14 | 1,052.59 |   934.55 |   482.72 |     0.89 |   42.1% |
| 15 | 1,037.26 |   919.58 |   478.20 |     0.89 |   41.5% |
| 16 | 1,001.04 |   884.14 |   467.82 |     0.88 |   40.0% |
| 17 | 1,005.05 |   884.10 |   476.30 |     0.88 |   40.2% |
| 18 | 1,056.85 |   925.10 |   508.91 |     0.88 |   42.3% |
| 19 | 1,086.93 |   948.48 |   529.07 |     0.87 |   43.5% |
| 20 | 1,053.99 |   921.46 |   510.18 |     0.87 |   42.2% |
| 21 | 1,097.31 |   968.83 |   513.53 |     0.88 |   43.9% |
| 22 | 1,055.09 |   932.35 |   492.11 |     0.88 |   42.2% |
| 23 | 1,063.21 |   941.43 |   492.22 |     0.89 |   42.5% |

---

# END OF REPORT

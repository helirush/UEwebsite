# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 612,417.3 kWh (Usage per period)
- **Consumption Cost per unit:** $0.333/kWh (Cost per kWh)
- **Consumption Total Cost:** $204,139.11 (Cost per period)
- **Consumption Total Cost:** $303.78 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T16 Compressor  
**Generated:** 2026-03-14 12:39:52  
**Data Source:** AN54022983-V-1minRES_40320CLP_260201-260228c.csv  

## Time Period

- **Period:** February 01, 2026 thru February 28, 2026
- **Number of Days:** 28 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 40,320

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

- **Transformer:** T16 Compressor
- **Power Factor:** 0.883
- **Total Energy (Actual):** 612,417.34 kWh (per period), 911.34 kW (per hour)
- **Total Waste (Actual):** 77,606.44 kWh (per period), 115.49 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T16-Compressor_AN54022983-1minRES_260201-260228.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T16-Compressor_AN54022983-1minRES_260201-260228.md


## UNITY MANAGEMENT T16 Compressor SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 115.49 kW/hr
- **Blended Electricity Rate:** $0.3333/kWh (all-inclusive)
- **T16 Compressor Utility Cost Offset:** $38.50/hour
- **Annual Offset Savings:** $337218/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 435,109 BTU/hr
- **Total Cooling kW No Longer Needed:** 38.15 kW
- **Cooling Energy Cost Avoided:** $12.72/hour
- **Annual Cooling Savings:** $111390/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 153.63 kW
- **CO2e Emissions Avoided:** 502.41 metric tons/year
- **Monthly CO2e Reduction:** 41.87 metric tons/month
- **Hourly CO2e Reduction:** 0.0574 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $19343/year

### Total T16 Compressor Unity Savings

- **Per Hour:** $53.42
- **Per Day:** $1282.06
- **Per Month:** $38461.74
- **Per Year:** $467951

### T16 Compressor Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,092.8 kVAR Max (Avg: 473.1 kVAR/hr ; 340,636 kVAR/mo)
- **Max Harmonic Distortion:** 89.7% Max (range: 0.0% - 89.7%)
- **Max Amperage:** 2,010A Max (range: 131A - 2010A)

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
| Line to Neutral Voltage (277v) |   275.22 |   264.51 |   290.95 |
| Line to Line Voltage (480v) |   476.70 |   458.15 |   503.93 |
| Current (AMPS) |  1255.37 |   131.42 |  2010.17 |
| Phase Angle (degrees) |    27.87 |    21.68 |    49.00 |
| Total Harmonic Distortion (PCT) |    18.63 |     0.00 |    89.65 |

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
| THD Phase A (%) | 6.2% | IEEE standard per-phase calculation |
| THD Phase B (%) | 6.2% | IEEE standard per-phase calculation |
| THD Phase C (%) | 6.3% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 18.6% | Field-level stress indicator |
| Max Phase THD | 6.3% | Highest THD among all three phases |
| Min Phase THD | 6.2% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,455.42 kW
  - **Maximum Load:** 1,614.02 kVA
  - **Percentage of Capacity (MAX):** 64.6%
- **Average Load:** 1,026.82 kVA
  - **Percentage of Capacity (Avg):** 41.1%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,026.82 kVA
- **Average Power Factor (PF):** 0.883

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,036.51 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 476.70 V
- Average Current (Iavg_A): 1255.37 A
- Average kW (Psum_kW): 911.34 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 9.69 kVA (0.9%)
- **Calculated PF (kW/kVA from averages):** 0.879
- **Power Factor Difference:** 0.004 (0.5%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1026.82) and measured PF (0.883) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,026.82 |        41.1% | 690,023.78 kVA | 3,109,605.57 TOTAL-HEAT |
| kW |   911.34 |        36.5% | 612,417.34 kWh | 349,734.93 Load-Heat |
| kVAR |   473.11 |        18.9% | 317,927.38 kVARh | - |
| WASTE |   115.49 |         4.6% | 77,606.44 WASTE | 44,318.93 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,109,605.57
- **Load-Heat (BTU/hr):** 349,734.93
- **Field-Heat (BTU/hr):** 44,318.93
- **Load-Heat (BTU, period total):** 235,021,874.09
- **Field-Heat (BTU, period total):** 29,782,323.15

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 2 | 1,026.82 |   911.34 |   472.10 |     0.89 |   41.1% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,080.75 |   963.12 |   489.77 |     0.89 |   43.2% |
| 01 | 1,075.84 |   959.19 |   486.73 |     0.89 |   43.0% |
| 02 | 1,076.09 |   960.24 |   485.26 |     0.89 |   43.0% |
| 03 | 1,082.49 |   966.18 |   487.70 |     0.89 |   43.3% |
| 04 | 1,101.84 |   983.46 |   496.41 |     0.89 |   44.1% |
| 05 | 1,080.18 |   963.81 |   487.19 |     0.89 |   43.2% |
| 06 | 1,084.65 |   968.61 |   487.46 |     0.89 |   43.4% |
| 07 | 1,079.04 |   963.00 |   486.00 |     0.89 |   43.2% |
| 08 | 1,084.39 |   968.52 |   487.04 |     0.89 |   43.4% |
| 09 | 1,066.95 |   953.31 |   478.53 |     0.89 |   42.7% |
| 10 | 1,075.48 |   960.59 |   482.91 |     0.89 |   43.0% |
| 11 | 1,054.91 |   941.58 |   474.82 |     0.89 |   42.2% |
| 12 | 1,068.33 |   953.26 |   481.38 |     0.89 |   42.7% |
| 13 | 1,064.16 |   949.40 |   479.91 |     0.89 |   42.6% |
| 14 | 1,039.05 |   924.76 |   473.06 |     0.89 |   41.6% |
| 15 | 1,012.13 |   897.30 |   467.47 |     0.89 |   40.5% |
| 16 |   967.47 |   854.50 |   452.96 |     0.88 |   38.7% |
| 17 |   963.53 |   845.91 |   460.22 |     0.88 |   38.5% |
| 18 |   923.91 |   806.06 |   450.51 |     0.87 |   37.0% |
| 19 |   877.84 |   760.26 |   437.84 |     0.87 |   35.1% |
| 20 |   865.16 |   753.43 |   424.64 |     0.87 |   34.6% |
| 21 |   958.88 |   845.13 |   451.98 |     0.88 |   38.4% |
| 22 |   957.69 |   842.74 |   454.26 |     0.88 |   38.3% |
| 23 | 1,002.98 |   887.67 |   466.34 |     0.89 |   40.1% |

---

# END OF REPORT

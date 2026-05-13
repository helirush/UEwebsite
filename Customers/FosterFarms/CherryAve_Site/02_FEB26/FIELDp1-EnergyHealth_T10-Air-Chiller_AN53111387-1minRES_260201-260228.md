# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 440,370.7 kWh (Usage per period)
- **Consumption Cost per unit:** $0.333/kWh (Cost per kWh)
- **Consumption Total Cost:** $146,790.24 (Cost per period)
- **Consumption Total Cost:** $218.44 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T10 Air Chiller  
**Generated:** 2026-03-14 12:40:02  
**Data Source:** AN53111387-V-1minRES_40320CLP_260201-260228c.csv  

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

- **Transformer:** T10 Air Chiller
- **Power Factor:** 0.888
- **Total Energy (Actual):** 440,370.71 kWh (per period), 655.31 kW (per hour)
- **Total Waste (Actual):** 62,500.57 kWh (per period), 93.01 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T10-Air-Chiller_AN53111387-1minRES_260201-260228.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T10-Air-Chiller_AN53111387-1minRES_260201-260228.md


## UNITY MANAGEMENT T10 Air Chiller SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 93.01 kW/hr
- **Blended Electricity Rate:** $0.3333/kWh (all-inclusive)
- **T10 Air Chiller Utility Cost Offset:** $31.00/hour
- **Annual Offset Savings:** $271580/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 380,486 BTU/hr
- **Total Cooling kW No Longer Needed:** 33.36 kW
- **Cooling Energy Cost Avoided:** $11.12/hour
- **Annual Cooling Savings:** $97406/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 126.37 kW
- **CO2e Emissions Avoided:** 413.24 metric tons/year
- **Monthly CO2e Reduction:** 34.44 metric tons/month
- **Hourly CO2e Reduction:** 0.0472 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $15910/year

### Total T10 Air Chiller Unity Savings

- **Per Hour:** $43.94
- **Per Day:** $1054.51
- **Per Month:** $31635.27
- **Per Year:** $384896

### T10 Air Chiller Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 831.1 kVAR Max (Avg: 361.3 kVAR/hr ; 260,146 kVAR/mo)
- **Max Harmonic Distortion:** 30.1% Max (range: 3.1% - 30.1%)
- **Max Amperage:** 2,076A Max (range: 52A - 2076A)

---

# T10 Air Chiller DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   265.47 |   254.17 |   280.18 |
| Line to Line Voltage (480v) |   459.80 |   440.24 |   485.28 |
| Current (AMPS) |   953.62 |    52.00 |  2075.86 |
| Phase Angle (degrees) |    27.16 |    17.93 |    36.88 |
| Total Harmonic Distortion (PCT) |    14.75 |     3.09 |    30.14 |

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
| THD Phase A (%) | 4.9% | IEEE standard per-phase calculation |
| THD Phase B (%) | 4.9% | IEEE standard per-phase calculation |
| THD Phase C (%) | 4.9% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 14.7% | Field-level stress indicator |
| Max Phase THD | 4.9% | Highest THD among all three phases |
| Min Phase THD | 4.9% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,425.42 kW
  - **Maximum Load:** 1,611.77 kVA
  - **Percentage of Capacity (MAX):** 64.5%
- **Average Load:** 748.32 kVA
  - **Percentage of Capacity (Avg):** 29.9%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 748.32 kVA
- **Average Power Factor (PF):** 0.888

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 759.46 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 459.80 V
- Average Current (Iavg_A): 953.62 A
- Average kW (Psum_kW): 655.31 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 11.14 kVA (1.5%)
- **Calculated PF (kW/kVA from averages):** 0.863
- **Power Factor Difference:** 0.025 (2.9%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (748.32) and measured PF (0.888) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   748.32 |        29.9% | 502,871.28 kVA | 2,236,022.91 TOTAL-HEAT |
| kW |   655.31 |        26.2% | 440,370.71 kWh | 277,909.50 Load-Heat |
| kVAR |   361.31 |        14.5% | 242,802.72 kVARh | - |
| WASTE |    93.01 |         3.7% | 62,500.57 WASTE | 39,442.91 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,236,022.91
- **Load-Heat (BTU/hr):** 277,909.50
- **Field-Heat (BTU/hr):** 39,442.91
- **Load-Heat (BTU, period total):** 186,755,181.83
- **Field-Heat (BTU, period total):** 26,505,634.61

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 2 |   748.32 |   655.31 |   360.50 |     0.88 |   29.9% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   877.02 |   767.07 |   424.69 |     0.87 |   35.1% |
| 01 |   872.45 |   762.87 |   422.83 |     0.87 |   34.9% |
| 02 |   877.12 |   767.81 |   423.69 |     0.88 |   35.1% |
| 03 |   875.75 |   766.44 |   423.32 |     0.88 |   35.0% |
| 04 |   872.46 |   763.67 |   421.47 |     0.88 |   34.9% |
| 05 |   889.64 |   776.92 |   432.76 |     0.87 |   35.6% |
| 06 |   880.73 |   768.90 |   428.87 |     0.87 |   35.2% |
| 07 |   877.39 |   766.10 |   427.23 |     0.87 |   35.1% |
| 08 |   857.91 |   750.78 |   414.58 |     0.88 |   34.3% |
| 09 |   863.41 |   755.00 |   418.37 |     0.87 |   34.5% |
| 10 |   871.45 |   761.83 |   422.67 |     0.87 |   34.9% |
| 11 |   855.65 |   749.37 |   412.56 |     0.88 |   34.2% |
| 12 |   842.51 |   737.82 |   406.28 |     0.88 |   33.7% |
| 13 |   841.95 |   737.46 |   405.74 |     0.88 |   33.7% |
| 14 |   770.34 |   674.37 |   371.69 |     0.88 |   30.8% |
| 15 |   616.65 |   540.44 |   295.93 |     0.88 |   24.7% |
| 16 |   448.58 |   391.96 |   216.76 |     0.87 |   17.9% |
| 17 |   280.58 |   247.46 |   130.45 |     0.88 |   11.2% |
| 18 |   253.90 |   224.44 |   116.93 |     0.88 |   10.2% |
| 19 |   310.75 |   273.68 |   145.45 |     0.88 |   12.4% |
| 20 |   506.80 |   449.63 |   231.63 |     0.89 |   20.3% |
| 21 |   860.27 |   756.61 |   408.79 |     0.88 |   34.4% |
| 22 |   890.33 |   780.46 |   428.07 |     0.88 |   35.6% |
| 23 |   866.05 |   756.44 |   421.18 |     0.87 |   34.6% |

---

# END OF REPORT

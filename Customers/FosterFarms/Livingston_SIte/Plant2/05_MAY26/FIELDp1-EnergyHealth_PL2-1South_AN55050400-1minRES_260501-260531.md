# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 691,070.2 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $134,758.68 (Cost per period)
- **Consumption Total Cost:** $181.64 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL2-1South  
**Generated:** 2026-06-18 23:49:44  
**Data Source:** AN55050400-V-1minRES_44640CLP_260501-260531c.csv  

## Time Period

- **Period:** May 01, 2026 thru May 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,513

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

- **Transformer:** PL2-1South
- **Power Factor:** 0.860
- **Total Energy (Actual):** 691,070.15 kWh (per period), 931.51 kW (per hour)
- **Total Waste (Actual):** 107,376.04 kWh (per period), 144.73 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL2-1South_AN55050400-1minRES_260501-260531.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL2-1South_AN55050400-1minRES_260501-260531.md


## UNITY MANAGEMENT PL2-1South SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 144.73 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL2-1South Utility Cost Offset:** $28.22/hour
- **Annual Offset Savings:** $247235/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 523,989 BTU/hr
- **Total Cooling kW No Longer Needed:** 45.85 kW
- **Cooling Energy Cost Avoided:** $8.94/hour
- **Annual Cooling Savings:** $78319/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 190.58 kW
- **CO2e Emissions Avoided:** 623.24 metric tons/year
- **Monthly CO2e Reduction:** 51.94 metric tons/month
- **Hourly CO2e Reduction:** 0.0711 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $23995/year

### Total PL2-1South Unity Savings

- **Per Hour:** $39.90
- **Per Day:** $957.67
- **Per Month:** $28730.08
- **Per Year:** $349549

### PL2-1South Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,594.1 kVAR Max (Avg: 539.1 kVAR/hr ; 388,126 kVAR/mo)
- **Max Harmonic Distortion:** 31.8% Max (range: 3.0% - 31.8%)
- **Max Amperage:** 2,520A Max (range: 550A - 2520A)

---

# PL2-1South DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   279.00 |   265.84 |   290.31 |
| Line to Line Voltage (480v) |   483.25 |   460.45 |   502.83 |
| Current (AMPS) |  1289.19 |   549.75 |  2519.96 |
| Phase Angle (degrees) |    30.63 |    24.63 |    52.77 |
| Total Harmonic Distortion (PCT) |    15.50 |     3.00 |    31.76 |

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
| THD Phase A (%) | 5.2% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.2% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.2% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 15.5% | Field-level stress indicator |
| Max Phase THD | 5.2% | Highest THD among all three phases |
| Min Phase THD | 5.2% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,593.33 kW
  - **Maximum Load:** 2,001.16 kVA
  - **Percentage of Capacity (MAX):** 80.0%
- **Average Load:** 1,076.24 kVA
  - **Percentage of Capacity (Avg):** 43.0%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,076.24 kVA
- **Average Power Factor (PF):** 0.860

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,079.06 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 483.25 V
- Average Current (Iavg_A): 1289.19 A
- Average kW (Psum_kW): 931.51 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 2.82 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.863
- **Power Factor Difference:** 0.004 (0.4%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1076.24) and measured PF (0.860) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,076.24 |        43.0% | 798,446.19 kVA | 3,178,437.07 TOTAL-HEAT |
| kW |   931.51 |        37.3% | 691,070.15 kWh | 427,440.18 Load-Heat |
| kVAR |   539.06 |        21.6% | 399,922.95 kVARh | - |
| WASTE |   144.73 |         5.8% | 107,376.04 WASTE | 66,414.15 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,178,437.07
- **Load-Heat (BTU/hr):** 427,440.18
- **Field-Heat (BTU/hr):** 66,414.15
- **Load-Heat (BTU, period total):** 317,110,745.77
- **Field-Heat (BTU, period total):** 49,271,547.70

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 5 | 1,076.24 |   931.51 |   537.29 |     0.87 |   43.0% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,167.65 | 1,017.09 |   572.38 |     0.87 |   46.7% |
| 01 | 1,137.71 |   988.76 |   561.81 |     0.87 |   45.5% |
| 02 | 1,157.63 | 1,010.37 |   563.84 |     0.87 |   46.3% |
| 03 | 1,141.42 |   994.74 |   558.64 |     0.87 |   45.7% |
| 04 | 1,156.45 | 1,009.61 |   562.73 |     0.87 |   46.3% |
| 05 | 1,119.71 |   975.63 |   548.16 |     0.87 |   44.8% |
| 06 | 1,099.07 |   955.89 |   541.04 |     0.87 |   44.0% |
| 07 | 1,100.17 |   957.96 |   539.68 |     0.87 |   44.0% |
| 08 | 1,108.95 |   965.05 |   544.71 |     0.87 |   44.4% |
| 09 | 1,135.41 |   985.80 |   561.68 |     0.87 |   45.4% |
| 10 | 1,099.39 |   949.70 |   552.30 |     0.86 |   44.0% |
| 11 | 1,118.17 |   968.30 |   557.16 |     0.87 |   44.7% |
| 12 | 1,109.21 |   960.32 |   552.49 |     0.87 |   44.4% |
| 13 | 1,068.51 |   925.68 |   531.24 |     0.87 |   42.7% |
| 14 | 1,013.63 |   872.77 |   513.59 |     0.86 |   40.5% |
| 15 |   957.88 |   822.43 |   489.73 |     0.86 |   38.3% |
| 16 |   932.29 |   791.45 |   491.78 |     0.85 |   37.3% |
| 17 |   929.65 |   788.51 |   491.18 |     0.85 |   37.2% |
| 18 |   851.02 |   720.04 |   452.36 |     0.85 |   34.0% |
| 19 |   891.77 |   752.85 |   476.79 |     0.84 |   35.7% |
| 20 | 1,076.73 |   931.64 |   537.85 |     0.87 |   43.1% |
| 21 | 1,146.18 |   997.30 |   563.20 |     0.87 |   45.8% |
| 22 | 1,154.32 | 1,005.55 |   565.63 |     0.87 |   46.2% |
| 23 | 1,161.10 | 1,012.87 |   566.37 |     0.87 |   46.4% |

---

# END OF REPORT

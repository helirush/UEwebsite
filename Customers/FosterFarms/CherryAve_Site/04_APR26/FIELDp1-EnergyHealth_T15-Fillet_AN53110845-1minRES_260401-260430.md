# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 566,857.0 kWh (Usage per period)
- **Consumption Cost per unit:** $0.350/kWh (Cost per kWh)
- **Consumption Total Cost:** $198,399.96 (Cost per period)
- **Consumption Total Cost:** $275.56 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T15 Fillet  
**Generated:** 2026-05-08 17:40:10  
**Data Source:** AN53110845-V-1minRES_43200CLP_260401-260430c.csv  

## Time Period

- **Period:** April 01, 2026 thru April 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,200

- **Dataset Coverage:** Complete month (100.0% of 30-day month)
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
- **Power Factor:** 0.819
- **Total Energy (Actual):** 566,857.02 kWh (per period), 787.30 kW (per hour)
- **Total Waste (Actual):** 104,835.51 kWh (per period), 145.60 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T15-Fillet_AN53110845-1minRES_260401-260430.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T15-Fillet_AN53110845-1minRES_260401-260430.md


## UNITY MANAGEMENT T15 Fillet SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 145.60 kW/hr
- **Blended Electricity Rate:** $0.3500/kWh (all-inclusive)
- **T15 Fillet Utility Cost Offset:** $50.96/hour
- **Annual Offset Savings:** $446425/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 593,689 BTU/hr
- **Total Cooling kW No Longer Needed:** 51.95 kW
- **Cooling Energy Cost Avoided:** $18.18/hour
- **Annual Cooling Savings:** $159289/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 197.56 kW
- **CO2e Emissions Avoided:** 646.05 metric tons/year
- **Monthly CO2e Reduction:** 53.84 metric tons/month
- **Hourly CO2e Reduction:** 0.0737 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $24873/year

### Total T15 Fillet Unity Savings

- **Per Hour:** $71.98
- **Per Day:** $1727.63
- **Per Month:** $51829.00
- **Per Year:** $630586

### T15 Fillet Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 876.0 kVAR Max (Avg: 500.5 kVAR/hr ; 360,339 kVAR/mo)
- **Max Harmonic Distortion:** 134.0% Max (range: 0.0% - 134.0%)
- **Max Amperage:** 2,045A Max (range: 0A - 2045A)

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
| Line to Neutral Voltage (277v) |   275.80 |     0.00 |   290.94 |
| Line to Line Voltage (480v) |   477.71 |     0.00 |   503.92 |
| Current (AMPS) |  1134.89 |     0.00 |  2045.47 |
| Phase Angle (degrees) |    34.46 |    20.78 |    90.00 |
| Total Harmonic Distortion (PCT) |    26.59 |     0.00 |   133.97 |

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
| THD Phase B (%) | 9.6% | IEEE standard per-phase calculation |
| THD Phase C (%) | 8.1% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 26.6% | Field-level stress indicator |
| Max Phase THD | 9.6% | Highest THD among all three phases |
| Min Phase THD | 8.1% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,481.28 kW
  - **Maximum Load:** 1,666.77 kVA
  - **Percentage of Capacity (MAX):** 66.7%
- **Average Load:** 932.91 kVA
  - **Percentage of Capacity (Avg):** 37.3%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 932.91 kVA
- **Average Power Factor (PF):** 0.819

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 939.02 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 477.71 V
- Average Current (Iavg_A): 1134.89 A
- Average kW (Psum_kW): 787.30 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 6.12 kVA (0.7%)
- **Calculated PF (kW/kVA from averages):** 0.838
- **Power Factor Difference:** 0.019 (2.4%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (932.91) and measured PF (0.819) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   932.91 |        37.3% | 671,692.52 kVA | 2,686,384.21 TOTAL-HEAT |
| kW |   787.30 |        31.5% | 566,857.02 kWh | 419,281.79 Load-Heat |
| kVAR |   500.47 |        20.0% | 360,338.68 kVARh | - |
| WASTE |   145.60 |         5.8% | 104,835.51 WASTE | 77,542.69 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,686,384.21
- **Load-Heat (BTU/hr):** 419,281.79
- **Field-Heat (BTU/hr):** 77,542.69
- **Load-Heat (BTU, period total):** 301,882,891.96
- **Field-Heat (BTU, period total):** 55,830,737.79

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 4 |   932.91 |   787.30 |   493.51 |     0.84 |   37.3% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,025.93 |   878.32 |   525.42 |     0.86 |   41.0% |
| 01 | 1,002.25 |   848.03 |   529.80 |     0.85 |   40.1% |
| 02 | 1,074.07 |   921.26 |   548.34 |     0.86 |   43.0% |
| 03 | 1,014.09 |   861.47 |   532.06 |     0.85 |   40.6% |
| 04 | 1,025.96 |   874.32 |   533.94 |     0.85 |   41.0% |
| 05 | 1,051.09 |   901.40 |   537.53 |     0.86 |   42.0% |
| 06 | 1,041.20 |   893.24 |   532.85 |     0.86 |   41.6% |
| 07 | 1,061.84 |   914.94 |   536.78 |     0.86 |   42.5% |
| 08 | 1,070.79 |   926.16 |   534.87 |     0.86 |   42.8% |
| 09 | 1,079.45 |   933.28 |   539.73 |     0.86 |   43.2% |
| 10 | 1,052.24 |   911.78 |   522.05 |     0.87 |   42.1% |
| 11 |   998.52 |   860.68 |   502.30 |     0.86 |   39.9% |
| 12 | 1,020.30 |   884.48 |   504.82 |     0.87 |   40.8% |
| 13 | 1,019.74 |   879.36 |   511.92 |     0.86 |   40.8% |
| 14 | 1,017.58 |   876.45 |   512.99 |     0.86 |   40.7% |
| 15 | 1,025.62 |   879.85 |   521.10 |     0.86 |   41.0% |
| 16 |   959.22 |   817.32 |   494.27 |     0.85 |   38.4% |
| 17 |   793.84 |   658.08 |   437.11 |     0.83 |   31.8% |
| 18 |   741.26 |   572.81 |   466.18 |     0.77 |   29.7% |
| 19 |   699.25 |   512.96 |   472.92 |     0.73 |   28.0% |
| 20 |   690.83 |   510.86 |   463.14 |     0.74 |   27.6% |
| 21 |   615.69 |   478.99 |   383.95 |     0.78 |   24.6% |
| 22 |   563.68 |   460.08 |   322.07 |     0.82 |   22.5% |
| 23 |   745.30 |   639.11 |   378.00 |     0.86 |   29.8% |

---

# END OF REPORT

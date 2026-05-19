# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 188,400.5 kWh (Usage per period)
- **Consumption Cost per unit:** $0.080/kWh (Cost per kWh)
- **Consumption Total Cost:** $15,072.04 (Cost per period)
- **Consumption Total Cost:** $20.93 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** MSB-2  
**Generated:** 2026-05-19 15:11:04  
**Data Source:** AN54022491-V-1minRES_43200CLP_260401-260430c.csv  

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

- **Transformer:** MSB-2
- **Power Factor:** 0.903
- **Total Energy (Actual):** 188,400.48 kWh (per period), 261.67 kW (per hour)
- **Total Waste (Actual):** 16,016.77 kWh (per period), 22.25 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_MSB-2_AN54022491-1minRES_260401-260430.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_MSB-2_AN54022491-1minRES_260401-260430.md


## UNITY MANAGEMENT MSB-2 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 22.25 kW/hr
- **Blended Electricity Rate:** $0.0800/kWh (all-inclusive)
- **MSB-2 Utility Cost Offset:** $1.78/hour
- **Annual Offset Savings:** $15590/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 79,723 BTU/hr
- **Total Cooling kW No Longer Needed:** 6.98 kW
- **Cooling Energy Cost Avoided:** $0.56/hour
- **Annual Cooling Savings:** $4893/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 29.23 kW
- **CO2e Emissions Avoided:** 95.58 metric tons/year
- **Monthly CO2e Reduction:** 7.96 metric tons/month
- **Hourly CO2e Reduction:** 0.0109 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $3680/year

### Total MSB-2 Unity Savings

- **Per Hour:** $2.76
- **Per Day:** $66.20
- **Per Month:** $1985.91
- **Per Year:** $24162

### MSB-2 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 204.7 kVAR Max (Avg: 110.2 kVAR/hr ; 79,320 kVAR/mo)
- **Max Harmonic Distortion:** 28.8% Max (range: 3.0% - 28.8%)
- **Max Amperage:** 925A Max (range: 174A - 925A)

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
| Line to Neutral Voltage (277v) |   277.72 |   275.32 |   279.95 |
| Line to Line Voltage (480v) |   481.03 |   476.87 |   484.89 |
| Current (AMPS) |   343.84 |   173.76 |   924.94 |
| Phase Angle (degrees) |    24.43 |     9.41 |    40.83 |
| Total Harmonic Distortion (PCT) |    13.63 |     3.00 |    28.83 |

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
| THD Phase A (%) | 4.5% | IEEE standard per-phase calculation |
| THD Phase B (%) | 4.5% | IEEE standard per-phase calculation |
| THD Phase C (%) | 4.5% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 13.6% | Field-level stress indicator |
| Max Phase THD | 4.5% | Highest THD among all three phases |
| Min Phase THD | 4.5% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 722.70 kW
  - **Maximum Load:** 746.42 kVA
  - **Percentage of Capacity (MAX):** 29.9%
- **Average Load:** 283.91 kVA
  - **Percentage of Capacity (Avg):** 11.4%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 283.91 kVA
- **Average Power Factor (PF):** 0.903

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 286.48 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 481.03 V
- Average Current (Iavg_A): 343.84 A
- Average kW (Psum_kW): 261.67 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 2.57 kVA (0.9%)
- **Calculated PF (kW/kVA from averages):** 0.913
- **Power Factor Difference:** 0.010 (1.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (283.91) and measured PF (0.903) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   283.91 |        11.4% | 204,417.25 kVA | 892,846.08 TOTAL-HEAT |
| kW |   261.67 |        10.5% | 188,400.48 kWh | 69,957.46 Load-Heat |
| kVAR |   110.17 |         4.4% | 79,320.06 kVARh | - |
| WASTE |    22.25 |         0.9% | 16,016.77 WASTE | 5,947.40 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 892,846.08
- **Load-Heat (BTU/hr):** 69,957.46
- **Field-Heat (BTU/hr):** 5,947.40
- **Load-Heat (BTU, period total):** 50,369,368.15
- **Field-Heat (BTU, period total):** 4,282,126.07

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 4 |   283.91 |   261.67 |   105.02 |     0.92 |   11.4% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   172.65 |   146.17 |    91.25 |     0.85 |    6.9% |
| 01 |   173.18 |   146.34 |    91.86 |     0.85 |    6.9% |
| 02 |   180.20 |   154.63 |    91.31 |     0.86 |    7.2% |
| 03 |   202.48 |   179.58 |    91.61 |     0.89 |    8.1% |
| 04 |   276.94 |   259.31 |    92.51 |     0.94 |   11.1% |
| 05 |   357.16 |   342.60 |    96.32 |     0.96 |   14.3% |
| 06 |   384.31 |   369.45 |   101.99 |     0.96 |   15.4% |
| 07 |   384.10 |   365.51 |   114.11 |     0.95 |   15.4% |
| 08 |   372.31 |   351.20 |   120.64 |     0.94 |   14.9% |
| 09 |   357.70 |   337.38 |   115.87 |     0.94 |   14.3% |
| 10 |   356.40 |   336.28 |   115.28 |     0.94 |   14.3% |
| 11 |   371.40 |   350.08 |   121.21 |     0.94 |   14.9% |
| 12 |   369.81 |   346.97 |   125.38 |     0.94 |   14.8% |
| 13 |   346.35 |   323.66 |   119.89 |     0.93 |   13.9% |
| 14 |   348.46 |   326.61 |   118.01 |     0.94 |   13.9% |
| 15 |   351.00 |   328.33 |   120.57 |     0.94 |   14.0% |
| 16 |   351.61 |   328.68 |   121.67 |     0.93 |   14.1% |
| 17 |   326.77 |   304.12 |   116.19 |     0.93 |   13.1% |
| 18 |   199.90 |   174.70 |    96.35 |     0.87 |    8.0% |
| 19 |   188.62 |   164.19 |    92.21 |     0.87 |    7.5% |
| 20 |   187.01 |   162.57 |    91.64 |     0.87 |    7.5% |
| 21 |   188.64 |   164.37 |    91.84 |     0.87 |    7.5% |
| 22 |   187.43 |   163.26 |    91.41 |     0.87 |    7.5% |
| 23 |   179.48 |   154.02 |    91.46 |     0.86 |    7.2% |

---

# END OF REPORT

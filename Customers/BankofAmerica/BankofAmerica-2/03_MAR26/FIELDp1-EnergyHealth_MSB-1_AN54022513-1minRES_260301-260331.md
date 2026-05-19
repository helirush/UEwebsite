# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 230,944.7 kWh (Usage per period)
- **Consumption Cost per unit:** $0.080/kWh (Cost per kWh)
- **Consumption Total Cost:** $18,475.57 (Cost per period)
- **Consumption Total Cost:** $24.87 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** MSB-1  
**Generated:** 2026-05-19 15:08:56  
**Data Source:** AN54022513-V-1minRES_45330CLP_260301-260331c.csv  

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

- **Transformer:** MSB-1
- **Power Factor:** 0.992
- **Total Energy (Actual):** 230,944.67 kWh (per period), 310.83 kW (per hour)
- **Total Waste (Actual):** 1,560.36 kWh (per period), 2.10 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_MSB-1_AN54022513-1minRES_260301-260331.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_MSB-1_AN54022513-1minRES_260301-260331.md


## UNITY MANAGEMENT MSB-1 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 2.10 kW/hr
- **Blended Electricity Rate:** $0.0800/kWh (all-inclusive)
- **MSB-1 Utility Cost Offset:** $0.17/hour
- **Annual Offset Savings:** $1472/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 7,561 BTU/hr
- **Total Cooling kW No Longer Needed:** 0.66 kW
- **Cooling Energy Cost Avoided:** $0.05/hour
- **Annual Cooling Savings:** $464/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 2.76 kW
- **CO2e Emissions Avoided:** 9.03 metric tons/year
- **Monthly CO2e Reduction:** 0.75 metric tons/month
- **Hourly CO2e Reduction:** 0.0010 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $348/year

### Total MSB-1 Unity Savings

- **Per Hour:** $0.26
- **Per Day:** $6.26
- **Per Month:** $187.69
- **Per Year:** $2284

### MSB-1 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 70.8 kVAR Max (Avg: 36.2 kVAR/hr ; 26,059 kVAR/mo)
- **Max Harmonic Distortion:** 28.6% Max (range: 3.0% - 28.6%)
- **Max Amperage:** 912A Max (range: 109A - 912A)

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
| Line to Neutral Voltage (277v) |   277.96 |   275.25 |   279.85 |
| Line to Line Voltage (480v) |   481.43 |   476.74 |   484.71 |
| Current (AMPS) |   374.57 |   108.66 |   912.34 |
| Phase Angle (degrees) |     7.06 |     0.00 |    20.60 |
| Total Harmonic Distortion (PCT) |    14.48 |     3.00 |    28.58 |

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
| THD Phase A (%) | 4.8% | IEEE standard per-phase calculation |
| THD Phase B (%) | 4.8% | IEEE standard per-phase calculation |
| THD Phase C (%) | 4.8% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 14.5% | Field-level stress indicator |
| Max Phase THD | 4.8% | Highest THD among all three phases |
| Min Phase THD | 4.8% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 752.79 kW
  - **Maximum Load:** 754.50 kVA
  - **Percentage of Capacity (MAX):** 30.2%
- **Average Load:** 312.93 kVA
  - **Percentage of Capacity (Avg):** 12.5%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 312.93 kVA
- **Average Power Factor (PF):** 0.992

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 312.34 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 481.43 V
- Average Current (Iavg_A): 374.57 A
- Average kW (Psum_kW): 310.83 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.59 kVA (0.2%)
- **Calculated PF (kW/kVA from averages):** 0.995
- **Power Factor Difference:** 0.003 (0.3%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (312.93) and measured PF (0.992) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   312.93 |        12.5% | 232,505.03 kVA | 1,060,586.83 TOTAL-HEAT |
| kW |   310.83 |        12.4% | 230,944.67 kWh | 7,117.67 Load-Heat |
| kVAR |    36.19 |         1.4% | 26,891.39 kVARh | - |
| WASTE |     2.10 |         0.1% | 1,560.36 WASTE | 48.09 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,060,586.83
- **Load-Heat (BTU/hr):** 7,117.67
- **Field-Heat (BTU/hr):** 48.09
- **Load-Heat (BTU, period total):** 5,288,426.53
- **Field-Heat (BTU, period total):** 35,730.76

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 3 |   312.93 |   310.83 |    34.86 |     0.99 |   12.5% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   162.39 |   161.14 |    19.90 |     0.99 |    6.5% |
| 01 |   166.00 |   164.68 |    20.50 |     0.99 |    6.6% |
| 02 |   180.16 |   178.90 |    20.81 |     0.99 |    7.2% |
| 03 |   213.19 |   212.02 |    21.81 |     0.99 |    8.5% |
| 04 |   291.41 |   290.20 |    25.92 |     1.00 |   11.7% |
| 05 |   436.80 |   435.13 |    37.61 |     1.00 |   17.5% |
| 06 |   501.99 |   500.16 |    41.98 |     1.00 |   20.1% |
| 07 |   487.36 |   485.50 |    41.94 |     1.00 |   19.5% |
| 08 |   447.66 |   445.70 |    41.33 |     1.00 |   17.9% |
| 09 |   423.60 |   421.55 |    41.19 |     1.00 |   16.9% |
| 10 |   403.52 |   401.32 |    41.45 |     0.99 |   16.1% |
| 11 |   408.59 |   405.93 |    45.76 |     0.99 |   16.3% |
| 12 |   393.73 |   390.99 |    45.46 |     0.99 |   15.7% |
| 13 |   369.62 |   366.83 |    44.05 |     0.99 |   14.8% |
| 14 |   364.44 |   361.64 |    43.82 |     0.99 |   14.6% |
| 15 |   360.21 |   357.40 |    43.62 |     0.99 |   14.4% |
| 16 |   362.05 |   359.27 |    43.47 |     0.99 |   14.5% |
| 17 |   358.32 |   355.55 |    43.16 |     0.99 |   14.3% |
| 18 |   205.17 |   202.50 |    32.38 |     0.99 |    8.2% |
| 19 |   205.29 |   202.70 |    31.84 |     0.99 |    8.2% |
| 20 |   197.45 |   195.19 |    29.37 |     0.99 |    7.9% |
| 21 |   194.66 |   192.58 |    27.92 |     0.99 |    7.8% |
| 22 |   195.19 |   193.29 |    26.74 |     0.99 |    7.8% |
| 23 |   177.14 |   175.43 |    24.14 |     0.99 |    7.1% |

---

# END OF REPORT

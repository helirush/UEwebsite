# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 533,242.2 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $103,982.23 (Cost per period)
- **Consumption Total Cost:** $145.17 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** NCDC2 South D  
**Generated:** 2026-07-07 01:39:21  
**Data Source:** AN55050318-V-1minRES_43200CLP_260601-260630c.csv  

## Time Period

- **Period:** June 01, 2026 thru June 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 42,976

- **Dataset Coverage:** Complete month (100.0% of 30-day month)
- **Billing Scale Factor:** 1.000x (no normalization needed)

## Facility Information

- **Facility:** Foster Farms
- **Location:** Livingston HQ Facility
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** NCDC2 South D
- **Power Factor:** 0.927
- **Total Energy (Actual):** 533,242.18 kWh (per period), 744.47 kW (per hour)
- **Total Waste (Actual):** 42,037.93 kWh (per period), 58.69 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_NCDC2-South-D_AN55050318-1minRES_260601-260630.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_NCDC2-South-D_AN55050318-1minRES_260601-260630.md


## UNITY MANAGEMENT NCDC2 South D SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 58.69 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **NCDC2 South D Utility Cost Offset:** $11.44/hour
- **Annual Offset Savings:** $100255/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 213,151 BTU/hr
- **Total Cooling kW No Longer Needed:** 18.74 kW
- **Cooling Energy Cost Avoided:** $3.66/hour
- **Annual Cooling Savings:** $32020/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 77.44 kW
- **CO2e Emissions Avoided:** 253.23 metric tons/year
- **Monthly CO2e Reduction:** 21.10 metric tons/month
- **Hourly CO2e Reduction:** 0.0289 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $9623/year

### Total NCDC2 South D Unity Savings

- **Per Hour:** $16.20
- **Per Day:** $388.76
- **Per Month:** $11662.77
- **Per Year:** $141897

### NCDC2 South D Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 442.3 kVAR Max (Avg: 301.4 kVAR/hr ; 216,995 kVAR/mo)
- **Max Harmonic Distortion:** 31.2% Max (range: 3.1% - 31.2%)
- **Max Amperage:** 1,381A Max (range: 595A - 1381A)

---

# NCDC2 South D DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   277.01 |   269.83 |   285.68 |
| Line to Line Voltage (480v) |   479.80 |   467.36 |   494.81 |
| Current (AMPS) |   966.72 |   594.71 |  1381.19 |
| Phase Angle (degrees) |    21.92 |    15.63 |    31.57 |
| Total Harmonic Distortion (PCT) |    15.83 |     3.14 |    31.21 |

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
| THD Phase A (%) | 5.3% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.3% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.3% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 15.8% | Field-level stress indicator |
| Max Phase THD | 5.3% | Highest THD among all three phases |
| Min Phase THD | 5.3% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,065.74 kW
  - **Maximum Load:** 1,140.90 kVA
  - **Percentage of Capacity (MAX):** 45.6%
- **Average Load:** 803.16 kVA
  - **Percentage of Capacity (Avg):** 32.1%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 803.16 kVA
- **Average Power Factor (PF):** 0.927

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 803.38 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 479.80 V
- Average Current (Iavg_A): 966.72 A
- Average kW (Psum_kW): 744.47 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.21 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.927
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (803.16) and measured PF (0.927) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   803.16 |        32.1% | 575,280.11 kVA | 2,540,252.31 TOTAL-HEAT |
| kW |   744.47 |        29.8% | 533,242.18 kWh | 185,626.00 Load-Heat |
| kVAR |   301.38 |        12.1% | 215,870.29 kVARh | - |
| WASTE |    58.69 |         2.3% | 42,037.93 WASTE | 14,633.75 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,540,252.31
- **Load-Heat (BTU/hr):** 185,626.00
- **Field-Heat (BTU/hr):** 14,633.75
- **Load-Heat (BTU, period total):** 132,957,712.76
- **Field-Heat (BTU, period total):** 10,481,666.51

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 6 |   803.16 |   744.47 |   298.97 |     0.93 |   32.1% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   760.81 |   701.78 |   291.34 |     0.92 |   30.4% |
| 01 |   766.27 |   707.59 |   291.89 |     0.92 |   30.7% |
| 02 |   778.66 |   719.87 |   294.59 |     0.92 |   31.1% |
| 03 |   734.61 |   675.99 |   285.11 |     0.92 |   29.4% |
| 04 |   763.01 |   704.79 |   290.17 |     0.92 |   30.5% |
| 05 |   714.98 |   657.28 |   279.03 |     0.92 |   28.6% |
| 06 |   725.30 |   667.50 |   281.41 |     0.92 |   29.0% |
| 07 |   744.01 |   686.25 |   285.13 |     0.92 |   29.8% |
| 08 |   718.09 |   661.36 |   277.58 |     0.92 |   28.7% |
| 09 |   742.51 |   685.33 |   283.46 |     0.92 |   29.7% |
| 10 |   790.26 |   732.45 |   294.63 |     0.93 |   31.6% |
| 11 |   777.34 |   719.44 |   292.24 |     0.93 |   31.1% |
| 12 |   838.11 |   779.07 |   306.61 |     0.93 |   33.5% |
| 13 |   810.42 |   752.36 |   299.11 |     0.93 |   32.4% |
| 14 |   853.08 |   794.76 |   307.98 |     0.93 |   34.1% |
| 15 |   853.08 |   793.44 |   310.80 |     0.93 |   34.1% |
| 16 |   838.23 |   779.05 |   307.07 |     0.93 |   33.5% |
| 17 |   898.41 |   838.26 |   321.13 |     0.93 |   35.9% |
| 18 |   903.37 |   843.91 |   320.25 |     0.93 |   36.1% |
| 19 |   872.96 |   813.89 |   313.46 |     0.93 |   34.9% |
| 20 |   909.36 |   849.53 |   322.26 |     0.93 |   36.4% |
| 21 |   838.75 |   778.83 |   308.84 |     0.93 |   33.6% |
| 22 |   840.86 |   780.63 |   310.22 |     0.93 |   33.6% |
| 23 |   814.05 |   754.49 |   303.31 |     0.93 |   32.6% |

---

# END OF REPORT

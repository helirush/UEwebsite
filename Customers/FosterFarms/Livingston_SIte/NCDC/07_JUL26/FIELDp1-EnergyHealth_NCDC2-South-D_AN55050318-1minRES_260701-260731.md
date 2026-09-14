# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 532,841.6 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $103,904.11 (Cost per period)
- **Consumption Total Cost:** $141.54 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** NCDC2 South D  
**Generated:** 2026-09-10 19:29:12  
**Data Source:** AN55050318-V-1minRES_44640CLP_260701-260731c.csv  

## Time Period

- **Period:** July 01, 2026 thru July 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,047

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

- **Transformer:** NCDC2 South D
- **Power Factor:** 0.933
- **Total Energy (Actual):** 532,841.61 kWh (per period), 725.83 kW (per hour)
- **Total Waste (Actual):** 38,259.91 kWh (per period), 52.12 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_NCDC2-South-D_AN55050318-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_NCDC2-South-D_AN55050318-1minRES_260701-260731.md


## UNITY MANAGEMENT NCDC2 South D SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 52.12 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 25.89 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **NCDC2 South D Utility Cost Offset:** $10.16/hour
- **Annual Offset Savings:** $89026/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 93,907 BTU/hr
- **Total Cooling kW No Longer Needed:** 8.37 kW
- **Cooling Energy Cost Avoided:** $1.63/hour
- **Annual Cooling Savings:** $14295/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 60.49 kW
- **CO2e Emissions Avoided:** 197.80 metric tons/year
- **Monthly CO2e Reduction:** 16.48 metric tons/month
- **Hourly CO2e Reduction:** 0.0226 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $7516/year

### Total NCDC2 South D Unity Savings

- **Per Hour:** $12.65
- **Per Day:** $303.66
- **Per Month:** $9109.94
- **Per Year:** $110838

### NCDC2 South D Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 412.3 kVAR Max (Avg: 279.9 kVAR/hr ; 201,564 kVAR/mo)
- **Max Harmonic Distortion:** 29.9% Max (range: 3.0% - 29.9%)
- **Max Amperage:** 1,271A Max (range: 617A - 1271A)

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
| Line to Neutral Voltage (277v) |   277.22 |   268.19 |   286.47 |
| Line to Line Voltage (480v) |   480.16 |   464.53 |   496.18 |
| Current (AMPS) |   935.51 |   616.98 |  1271.36 |
| Phase Angle (degrees) |    21.07 |    15.42 |    30.80 |
| Total Harmonic Distortion (PCT) |    15.80 |     3.00 |    29.90 |

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

- **Maximum UtilityDemand:** 981.63 kW
  - **Maximum Load:** 1,045.75 kVA
  - **Percentage of Capacity (MAX):** 41.8%
- **Average Load:** 777.94 kVA
  - **Percentage of Capacity (Avg):** 31.1%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 777.94 kVA
- **Average Power Factor (PF):** 0.933

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 778.03 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 480.16 V
- Average Current (Iavg_A): 935.51 A
- Average kW (Psum_kW): 725.83 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.08 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.933
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (777.94) and measured PF (0.933) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   777.94 |        31.1% | 571,101.52 kVA | 2,476,624.38 TOTAL-HEAT |
| kW |   725.83 |        29.0% | 532,841.61 kWh | 165,916.96 Load-Heat |
| kVAR |   279.95 |        11.2% | 205,515.85 kVARh | - |
| WASTE |    52.12 |         2.1% | 38,259.91 WASTE | 11,913.42 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,476,624.38
- **Load-Heat (BTU/hr):** 165,916.96
- **Field-Heat (BTU/hr):** 11,913.42
- **Load-Heat (BTU, period total):** 121,802,406.62
- **Field-Heat (BTU, period total):** 8,745,843.38

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 |   777.94 |   725.83 |   278.87 |     0.93 |   31.1% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   739.55 |   688.26 |   269.54 |     0.93 |   29.6% |
| 01 |   752.66 |   701.41 |   272.00 |     0.93 |   30.1% |
| 02 |   751.95 |   700.64 |   272.02 |     0.93 |   30.1% |
| 03 |   711.07 |   660.52 |   262.24 |     0.93 |   28.4% |
| 04 |   755.98 |   704.37 |   273.59 |     0.93 |   30.2% |
| 05 |   704.88 |   653.86 |   262.31 |     0.93 |   28.2% |
| 06 |   697.84 |   646.74 |   260.98 |     0.93 |   27.9% |
| 07 |   716.68 |   665.50 |   264.83 |     0.93 |   28.7% |
| 08 |   703.62 |   652.50 |   262.05 |     0.93 |   28.1% |
| 09 |   729.74 |   677.92 |   268.73 |     0.93 |   29.2% |
| 10 |   778.26 |   725.96 |   279.60 |     0.93 |   31.1% |
| 11 |   768.58 |   716.62 |   276.85 |     0.93 |   30.7% |
| 12 |   811.02 |   758.71 |   285.80 |     0.94 |   32.4% |
| 13 |   792.76 |   740.30 |   282.69 |     0.93 |   31.7% |
| 14 |   814.23 |   761.63 |   287.08 |     0.94 |   32.6% |
| 15 |   814.70 |   762.08 |   287.17 |     0.94 |   32.6% |
| 16 |   822.93 |   770.29 |   288.78 |     0.94 |   32.9% |
| 17 |   875.86 |   822.08 |   301.35 |     0.94 |   35.0% |
| 18 |   875.72 |   821.40 |   302.72 |     0.94 |   35.0% |
| 19 |   839.09 |   786.07 |   292.65 |     0.94 |   33.6% |
| 20 |   861.11 |   807.58 |   298.06 |     0.94 |   34.4% |
| 21 |   796.53 |   744.01 |   283.45 |     0.93 |   31.9% |
| 22 |   796.85 |   744.13 |   283.98 |     0.93 |   31.9% |
| 23 |   781.34 |   729.14 |   279.76 |     0.93 |   31.3% |

---

# END OF REPORT

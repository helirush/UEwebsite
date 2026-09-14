# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 346,113.5 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $67,492.14 (Cost per period)
- **Consumption Total Cost:** $96.21 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** FSO-3  
**Generated:** 2026-09-12 13:38:15  
**Data Source:** AN55050439-V-1minRES_44640CLP_260801-260831c.csv  

## Time Period

- **Period:** August 01, 2026 thru August 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 42,092

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

- **Transformer:** FSO-3
- **Power Factor:** 0.922
- **Total Energy (Actual):** 346,113.53 kWh (per period), 493.37 kW (per hour)
- **Total Waste (Actual):** 28,815.68 kWh (per period), 41.08 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_FSO-3_AN55050439-1minRES_260801-260831.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_FSO-3_AN55050439-1minRES_260801-260831.md


## UNITY MANAGEMENT FSO-3 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 41.08 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 20.98 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **FSO-3 Utility Cost Offset:** $8.01/hour
- **Annual Offset Savings:** $70165/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 75,901 BTU/hr
- **Total Cooling kW No Longer Needed:** 6.79 kW
- **Cooling Energy Cost Avoided:** $1.32/hour
- **Annual Cooling Savings:** $11592/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 47.86 kW
- **CO2e Emissions Avoided:** 156.52 metric tons/year
- **Monthly CO2e Reduction:** 13.04 metric tons/month
- **Hourly CO2e Reduction:** 0.0179 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $5948/year

### Total FSO-3 Unity Savings

- **Per Hour:** $10.01
- **Per Day:** $240.29
- **Per Month:** $7208.61
- **Per Year:** $87705

### FSO-3 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 368.2 kVAR Max (Avg: 205.5 kVAR/hr ; 147,938 kVAR/mo)
- **Max Harmonic Distortion:** 29.3% Max (range: 3.0% - 29.3%)
- **Max Amperage:** 1,046A Max (range: 271A - 1046A)

---

# FSO-3 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   277.83 |   269.42 |   286.58 |
| Line to Line Voltage (480v) |   481.21 |   466.65 |   496.38 |
| Current (AMPS) |   641.21 |   270.79 |  1045.81 |
| Phase Angle (degrees) |    22.78 |    20.28 |    31.02 |
| Total Harmonic Distortion (PCT) |    15.37 |     3.00 |    29.29 |

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
| THD Phase A (%) | 5.1% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.1% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.1% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 15.4% | Field-level stress indicator |
| Max Phase THD | 5.1% | Highest THD among all three phases |
| Min Phase THD | 5.1% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 789.36 kW
  - **Maximum Load:** 859.03 kVA
  - **Percentage of Capacity (MAX):** 34.4%
- **Average Load:** 534.44 kVA
  - **Percentage of Capacity (Avg):** 21.4%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 534.44 kVA
- **Average Power Factor (PF):** 0.922

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 534.43 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 481.21 V
- Average Current (Iavg_A): 641.21 A
- Average kW (Psum_kW): 493.37 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.01 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.923
- **Power Factor Difference:** 0.001 (0.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (534.44) and measured PF (0.922) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   534.44 |        21.4% | 374,929.21 kVA | 1,683,438.90 TOTAL-HEAT |
| kW |   493.37 |        19.7% | 346,113.53 kWh | 129,382.92 Load-Heat |
| kVAR |   205.47 |         8.2% | 144,143.46 kVARh | - |
| WASTE |    41.08 |         1.6% | 28,815.68 WASTE | 10,771.77 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,683,438.90
- **Load-Heat (BTU/hr):** 129,382.92
- **Field-Heat (BTU/hr):** 10,771.77
- **Load-Heat (BTU, period total):** 90,766,432.19
- **Field-Heat (BTU, period total):** 7,556,758.77

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 8 |   534.44 |   493.37 |   205.20 |     0.92 |   21.4% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   572.45 |   529.70 |   216.85 |     0.93 |   22.9% |
| 01 |   547.18 |   506.48 |   206.76 |     0.93 |   21.9% |
| 02 |   554.29 |   513.57 |   208.28 |     0.93 |   22.2% |
| 03 |   549.42 |   509.03 |   206.48 |     0.93 |   22.0% |
| 04 |   545.05 |   505.35 |   204.00 |     0.93 |   21.8% |
| 05 |   525.84 |   487.50 |   196.86 |     0.93 |   21.0% |
| 06 |   524.09 |   485.41 |   197.34 |     0.93 |   21.0% |
| 07 |   512.66 |   474.30 |   194.34 |     0.93 |   20.5% |
| 08 |   519.15 |   480.22 |   197.05 |     0.93 |   20.8% |
| 09 |   528.66 |   488.67 |   201.50 |     0.92 |   21.1% |
| 10 |   546.24 |   504.49 |   209.25 |     0.92 |   21.8% |
| 11 |   538.54 |   496.81 |   207.65 |     0.92 |   21.5% |
| 12 |   541.80 |   498.99 |   210.82 |     0.92 |   21.7% |
| 13 |   529.53 |   486.74 |   208.17 |     0.92 |   21.2% |
| 14 |   567.31 |   522.42 |   220.85 |     0.92 |   22.7% |
| 15 |   558.55 |   514.36 |   217.51 |     0.92 |   22.3% |
| 16 |   533.63 |   490.97 |   208.85 |     0.92 |   21.3% |
| 17 |   512.71 |   471.13 |   201.99 |     0.92 |   20.5% |
| 18 |   515.15 |   473.83 |   201.93 |     0.92 |   20.6% |
| 19 |   493.67 |   454.26 |   193.05 |     0.92 |   19.7% |
| 20 |   504.57 |   465.08 |   195.50 |     0.92 |   20.2% |
| 21 |   472.94 |   434.94 |   185.56 |     0.92 |   18.9% |
| 22 |   547.13 |   504.82 |   210.74 |     0.92 |   21.9% |
| 23 |   591.22 |   546.81 |   224.68 |     0.92 |   23.6% |

---

# END OF REPORT

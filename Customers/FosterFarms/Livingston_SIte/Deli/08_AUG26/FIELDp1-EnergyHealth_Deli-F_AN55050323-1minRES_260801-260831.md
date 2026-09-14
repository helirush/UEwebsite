# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 505,274.2 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $98,528.46 (Cost per period)
- **Consumption Total Cost:** $132.46 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Deli F  
**Generated:** 2026-09-12 13:37:47  
**Data Source:** AN55050323-V-1minRES_44640CLP_260801-260831c.csv  

## Time Period

- **Period:** August 01, 2026 thru August 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,630

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

- **Transformer:** Deli F
- **Power Factor:** 0.861
- **Total Energy (Actual):** 505,274.18 kWh (per period), 679.28 kW (per hour)
- **Total Waste (Actual):** 60,075.92 kWh (per period), 80.77 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Deli-F_AN55050323-1minRES_260801-260831.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Deli-F_AN55050323-1minRES_260801-260831.md


## UNITY MANAGEMENT Deli F SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 80.77 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 47.86 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Deli F Utility Cost Offset:** $15.75/hour
- **Annual Offset Savings:** $137963/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 172,221 BTU/hr
- **Total Cooling kW No Longer Needed:** 15.38 kW
- **Cooling Energy Cost Avoided:** $3.00/hour
- **Annual Cooling Savings:** $26272/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 96.15 kW
- **CO2e Emissions Avoided:** 314.41 metric tons/year
- **Monthly CO2e Reduction:** 26.20 metric tons/month
- **Hourly CO2e Reduction:** 0.0359 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $11948/year

### Total Deli F Unity Savings

- **Per Hour:** $20.11
- **Per Day:** $482.69
- **Per Month:** $14480.79
- **Per Year:** $176183

### Deli F Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,350.3 kVAR Max (Avg: 341.0 kVAR/hr ; 245,485 kVAR/mo)
- **Max Harmonic Distortion:** 29.0% Max (range: 3.0% - 29.0%)
- **Max Amperage:** 2,240A Max (range: 13A - 2240A)

---

# Deli F DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   277.40 |   261.71 |   288.16 |
| Line to Line Voltage (480v) |   480.46 |   453.29 |   499.11 |
| Current (AMPS) |   916.75 |    12.82 |  2239.54 |
| Phase Angle (degrees) |    30.04 |     0.00 |    82.65 |
| Total Harmonic Distortion (PCT) |    14.38 |     3.00 |    29.04 |

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
| Unity THD Composite (%) | 14.4% | Field-level stress indicator |
| Max Phase THD | 4.8% | Highest THD among all three phases |
| Min Phase THD | 4.8% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,713.06 kW
  - **Maximum Load:** 1,861.08 kVA
  - **Percentage of Capacity (MAX):** 74.4%
- **Average Load:** 760.05 kVA
  - **Percentage of Capacity (Avg):** 30.4%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 760.05 kVA
- **Average Power Factor (PF):** 0.861

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 762.91 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 480.46 V
- Average Current (Iavg_A): 916.75 A
- Average kW (Psum_kW): 679.28 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 2.86 kVA (0.4%)
- **Calculated PF (kW/kVA from averages):** 0.890
- **Power Factor Difference:** 0.029 (3.4%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (760.05) and measured PF (0.861) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   760.05 |        30.4% | 565,350.10 kVA | 2,317,813.91 TOTAL-HEAT |
| kW |   679.28 |        27.2% | 505,274.18 kWh | 246,298.37 Load-Heat |
| kVAR |   340.95 |        13.6% | 253,611.40 kVARh | - |
| WASTE |    80.77 |         3.2% | 60,075.92 WASTE | 29,284.30 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,317,813.91
- **Load-Heat (BTU/hr):** 246,298.37
- **Field-Heat (BTU/hr):** 29,284.30
- **Load-Heat (BTU, period total):** 183,204,937.20
- **Field-Heat (BTU, period total):** 21,782,640.02

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 8 |   760.05 |   679.28 |   336.99 |     0.89 |   30.4% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   649.81 |   538.92 |   361.37 |     0.83 |   26.0% |
| 01 |   264.30 |   214.62 |   153.41 |     0.81 |   10.6% |
| 02 |    67.91 |    54.67 |    39.31 |     0.81 |    2.7% |
| 03 |    66.55 |    54.27 |    37.88 |     0.82 |    2.7% |
| 04 |    44.99 |    37.37 |    24.59 |     0.83 |    1.8% |
| 05 |   197.88 |   157.95 |   117.72 |     0.80 |    7.9% |
| 06 |   933.25 |   843.45 |   394.59 |     0.90 |   37.3% |
| 07 |   966.44 |   870.05 |   418.48 |     0.90 |   38.7% |
| 08 |   949.38 |   847.90 |   424.02 |     0.89 |   38.0% |
| 09 |   968.04 |   873.20 |   415.31 |     0.90 |   38.7% |
| 10 |   870.15 |   767.77 |   405.06 |     0.88 |   34.8% |
| 11 |   941.22 |   850.59 |   400.87 |     0.90 |   37.6% |
| 12 |   989.52 |   893.70 |   422.59 |     0.90 |   39.6% |
| 13 |   962.02 |   865.98 |   416.85 |     0.90 |   38.5% |
| 14 | 1,003.88 |   908.69 |   424.69 |     0.91 |   40.2% |
| 15 |   903.52 |   803.55 |   409.49 |     0.89 |   36.1% |
| 16 |   953.25 |   862.28 |   403.96 |     0.90 |   38.1% |
| 17 |   956.33 |   861.74 |   412.08 |     0.90 |   38.3% |
| 18 |   949.30 |   859.48 |   401.25 |     0.91 |   38.0% |
| 19 |   909.04 |   811.29 |   406.13 |     0.89 |   36.4% |
| 20 |   913.65 |   822.05 |   396.07 |     0.90 |   36.5% |
| 21 |   943.24 |   851.99 |   402.47 |     0.90 |   37.7% |
| 22 |   923.58 |   830.25 |   401.66 |     0.90 |   36.9% |
| 23 |   913.78 |   820.92 |   397.91 |     0.90 |   36.6% |

---

# END OF REPORT

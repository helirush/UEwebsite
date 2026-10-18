# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 617,783.7 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $120,467.82 (Cost per period)
- **Consumption Total Cost:** $205.28 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Rendering-1  
**Generated:** 2026-10-08 00:56:05  
**Data Source:** AN55050434-V-260930.2359c.csv  

## Time Period

- **Period:** September 01, 2026 thru September 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 35,210

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

- **Transformer:** Rendering-1
- **Power Factor:** 0.804
- **Total Energy (Actual):** 617,783.67 kWh (per period), 1052.74 kW (per hour)
- **Total Waste (Actual):** 149,994.22 kWh (per period), 255.60 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Rendering-1_AN55050434-1minRES_260901-260930.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Rendering-1_AN55050434-1minRES_260901-260930.md


## UNITY MANAGEMENT Rendering-1 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 255.60 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 178.89 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Rendering-1 Utility Cost Offset:** $49.84/hour
- **Annual Offset Savings:** $436615/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 687,320 BTU/hr
- **Total Cooling kW No Longer Needed:** 60.14 kW
- **Cooling Energy Cost Avoided:** $11.73/hour
- **Annual Cooling Savings:** $102732/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 315.74 kW
- **CO2e Emissions Avoided:** 1032.52 metric tons/year
- **Monthly CO2e Reduction:** 86.04 metric tons/month
- **Hourly CO2e Reduction:** 0.1179 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $39236/year

### Total Rendering-1 Unity Savings

- **Per Hour:** $66.05
- **Per Day:** $1585.16
- **Per Month:** $47554.74
- **Per Year:** $578583

### Rendering-1 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,121.6 kVAR Max (Avg: 776.8 kVAR/hr ; 559,330 kVAR/mo)
- **Max Harmonic Distortion:** 30.6% Max (range: 3.0% - 30.6%)
- **Max Amperage:** 1,962A Max (range: 1235A - 1962A)

---

# Rendering-1 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   272.39 |   263.20 |   282.48 |
| Line to Line Voltage (480v) |   471.78 |   455.88 |   489.27 |
| Current (AMPS) |  1601.34 |  1234.72 |  1961.82 |
| Phase Angle (degrees) |    36.44 |    28.48 |    46.29 |
| Total Harmonic Distortion (PCT) |    16.59 |     3.00 |    30.55 |

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
| THD Phase A (%) | 5.5% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.5% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.5% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 16.6% | Field-level stress indicator |
| Max Phase THD | 5.5% | Highest THD among all three phases |
| Min Phase THD | 5.5% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,304.16 kW
  - **Maximum Load:** 1,583.91 kVA
  - **Percentage of Capacity (MAX):** 63.4%
- **Average Load:** 1,308.34 kVA
  - **Percentage of Capacity (Avg):** 52.3%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,308.34 kVA
- **Average Power Factor (PF):** 0.804

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,308.54 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 471.78 V
- Average Current (Iavg_A): 1601.34 A
- Average kW (Psum_kW): 1052.74 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.20 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.805
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1308.34) and measured PF (0.804) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,308.34 |        52.3% | 767,777.90 kVA | 3,592,102.73 TOTAL-HEAT |
| kW | 1,052.74 |        42.1% | 617,783.67 kWh | 701,758.49 Load-Heat |
| kVAR |   776.85 |        31.1% | 455,879.63 kVARh | - |
| WASTE |   255.60 |        10.2% | 149,994.22 WASTE | 170,382.81 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,592,102.73
- **Load-Heat (BTU/hr):** 701,758.49
- **Field-Heat (BTU/hr):** 170,382.81
- **Load-Heat (BTU, period total):** 411,815,276.70
- **Field-Heat (BTU, period total):** 99,986,314.88

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 9 | 1,308.34 | 1,052.74 |   776.22 |     0.80 |   52.3% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,329.33 | 1,068.12 |   790.88 |     0.80 |   53.2% |
| 01 | 1,340.61 | 1,078.05 |   796.42 |     0.80 |   53.6% |
| 02 | 1,323.93 | 1,060.94 |   791.36 |     0.80 |   53.0% |
| 03 | 1,333.56 | 1,068.20 |   797.85 |     0.80 |   53.3% |
| 04 | 1,327.32 | 1,060.49 |   797.68 |     0.80 |   53.1% |
| 05 | 1,311.99 | 1,053.07 |   781.93 |     0.80 |   52.5% |
| 06 | 1,323.86 | 1,063.18 |   788.26 |     0.80 |   53.0% |
| 07 | 1,334.82 | 1,072.73 |   793.82 |     0.80 |   53.4% |
| 08 | 1,333.01 | 1,073.47 |   789.80 |     0.81 |   53.3% |
| 09 | 1,339.47 | 1,077.62 |   795.00 |     0.80 |   53.6% |
| 10 | 1,341.90 | 1,079.31 |   796.75 |     0.80 |   53.7% |
| 11 | 1,318.97 | 1,061.21 |   782.68 |     0.80 |   52.8% |
| 12 | 1,308.36 | 1,049.02 |   781.24 |     0.80 |   52.3% |
| 13 | 1,292.19 | 1,032.32 |   776.71 |     0.80 |   51.7% |
| 14 | 1,300.31 | 1,042.73 |   776.43 |     0.80 |   52.0% |
| 15 | 1,301.64 | 1,050.65 |   768.02 |     0.81 |   52.1% |
| 16 | 1,293.13 | 1,047.86 |   757.42 |     0.81 |   51.7% |
| 17 | 1,264.44 | 1,017.84 |   749.67 |     0.80 |   50.6% |
| 18 | 1,231.02 |   985.17 |   737.62 |     0.80 |   49.2% |
| 19 | 1,249.77 | 1,008.15 |   737.82 |     0.81 |   50.0% |
| 20 | 1,273.27 | 1,036.36 |   738.78 |     0.81 |   50.9% |
| 21 | 1,286.45 | 1,047.87 |   745.48 |     0.81 |   51.5% |
| 22 | 1,299.26 | 1,049.88 |   764.60 |     0.81 |   52.0% |
| 23 | 1,337.13 | 1,077.71 |   790.92 |     0.81 |   53.5% |

---

# END OF REPORT

# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 780,477.8 kWh (Usage per period)
- **Consumption Cost per unit:** $0.350/kWh (Cost per kWh)
- **Consumption Total Cost:** $273,167.24 (Cost per period)
- **Consumption Total Cost:** $367.16 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T12 Main  
**Generated:** 2026-09-10 23:18:29  
**Data Source:** AN54021613-V-1minRES_44640CLP_260801-260831c.csv  

## Time Period

- **Period:** August 01, 2026 thru August 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,640

- **Dataset Coverage:** Complete month (100.0% of 31-day month)
- **Billing Scale Factor:** 1.000x (no normalization needed)

## Facility Information

- **Facility:** Foster Farms
- **Location:** Cherry Ave Facility
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** T12 Main
- **Power Factor:** 0.832
- **Total Energy (Actual):** 780,477.82 kWh (per period), 1049.03 kW (per hour)
- **Total Waste (Actual):** 147,928.49 kWh (per period), 198.83 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T12-Main_AN54021613-1minRES_260801-260831.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T12-Main_AN54021613-1minRES_260801-260831.md


## UNITY MANAGEMENT T12 Main SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 198.83 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 133.42 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.3500/kWh (all-inclusive)
- **T12 Main Utility Cost Offset:** $69.59/hour
- **Annual Offset Savings:** $609609/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 527,274 BTU/hr
- **Total Cooling kW No Longer Needed:** 47.54 kW
- **Cooling Energy Cost Avoided:** $16.64/hour
- **Annual Cooling Savings:** $145768/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 246.37 kW
- **CO2e Emissions Avoided:** 805.68 metric tons/year
- **Monthly CO2e Reduction:** 67.14 metric tons/month
- **Hourly CO2e Reduction:** 0.0920 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $31019/year

### Total T12 Main Unity Savings

- **Per Hour:** $89.77
- **Per Day:** $2154.51
- **Per Month:** $64635.18
- **Per Year:** $786395

### T12 Main Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,061.5 kVAR Max (Avg: 675.8 kVAR/hr ; 486,566 kVAR/mo)
- **Max Harmonic Distortion:** 30.6% Max (range: 3.1% - 30.6%)
- **Max Amperage:** 2,499A Max (range: 513A - 2499A)

---

# T12 Main DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   269.44 |   253.79 |   287.87 |
| Line to Line Voltage (480v) |   466.68 |   439.58 |   498.60 |
| Current (AMPS) |  1558.92 |   512.76 |  2499.32 |
| Phase Angle (degrees) |    33.51 |    26.10 |    44.03 |
| Total Harmonic Distortion (PCT) |    15.96 |     3.11 |    30.63 |

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
| Unity THD Composite (%) | 16.0% | Field-level stress indicator |
| Max Phase THD | 5.3% | Highest THD among all three phases |
| Min Phase THD | 5.3% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,589.96 kW
  - **Maximum Load:** 1,901.30 kVA
  - **Percentage of Capacity (MAX):** 76.1%
- **Average Load:** 1,247.86 kVA
  - **Percentage of Capacity (Avg):** 49.9%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,247.86 kVA
- **Average Power Factor (PF):** 0.832

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,260.10 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 466.68 V
- Average Current (Iavg_A): 1558.92 A
- Average kW (Psum_kW): 1049.03 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 12.25 kVA (1.0%)
- **Calculated PF (kW/kVA from averages):** 0.832
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1247.86) and measured PF (0.832) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,247.86 |        49.9% | 928,406.31 kVA | 3,579,437.02 TOTAL-HEAT |
| kW | 1,049.03 |        42.0% | 780,477.82 kWh | 570,332.96 Load-Heat |
| kVAR |   675.79 |        27.0% | 502,784.89 kVARh | - |
| WASTE |   198.83 |         8.0% | 147,928.49 WASTE | 108,098.52 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,579,437.02
- **Load-Heat (BTU/hr):** 570,332.96
- **Field-Heat (BTU/hr):** 108,098.52
- **Load-Heat (BTU, period total):** 424,327,721.43
- **Field-Heat (BTU, period total):** 80,425,296.16

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 8 | 1,247.86 | 1,049.03 |   673.39 |     0.84 |   49.9% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,349.82 | 1,131.13 |   735.24 |     0.84 |   54.0% |
| 01 | 1,372.50 | 1,153.77 |   742.00 |     0.84 |   54.9% |
| 02 | 1,388.26 | 1,171.86 |   743.02 |     0.84 |   55.5% |
| 03 | 1,338.34 | 1,124.45 |   723.92 |     0.84 |   53.5% |
| 04 | 1,333.19 | 1,122.11 |   717.96 |     0.84 |   53.3% |
| 05 | 1,316.52 | 1,109.30 |   707.19 |     0.84 |   52.7% |
| 06 | 1,325.80 | 1,118.04 |   710.79 |     0.84 |   53.0% |
| 07 | 1,301.50 | 1,095.79 |   700.50 |     0.84 |   52.1% |
| 08 | 1,314.59 | 1,106.36 |   708.44 |     0.84 |   52.6% |
| 09 | 1,272.36 | 1,077.00 |   675.74 |     0.85 |   50.9% |
| 10 | 1,320.16 | 1,116.73 |   702.66 |     0.85 |   52.8% |
| 11 | 1,313.91 | 1,109.46 |   702.24 |     0.84 |   52.6% |
| 12 | 1,286.21 | 1,084.94 |   689.03 |     0.84 |   51.4% |
| 13 | 1,176.03 |   993.35 |   627.29 |     0.84 |   47.0% |
| 14 | 1,059.53 |   902.36 |   552.11 |     0.85 |   42.4% |
| 15 | 1,141.93 |   981.09 |   580.35 |     0.86 |   45.7% |
| 16 | 1,190.37 | 1,022.60 |   605.47 |     0.86 |   47.6% |
| 17 | 1,083.82 |   917.14 |   574.17 |     0.85 |   43.4% |
| 18 |   977.30 |   819.58 |   529.93 |     0.84 |   39.1% |
| 19 |   946.09 |   782.01 |   530.64 |     0.83 |   37.8% |
| 20 | 1,188.62 |   966.76 |   689.87 |     0.81 |   47.5% |
| 21 | 1,294.92 | 1,064.38 |   735.99 |     0.82 |   51.8% |
| 22 | 1,299.67 | 1,071.41 |   734.32 |     0.82 |   52.0% |
| 23 | 1,357.15 | 1,135.07 |   742.54 |     0.84 |   54.3% |

---

# END OF REPORT

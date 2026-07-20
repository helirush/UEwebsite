# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 783,957.3 kWh (Usage per period)
- **Consumption Cost per unit:** $0.350/kWh (Cost per kWh)
- **Consumption Total Cost:** $274,385.06 (Cost per period)
- **Consumption Total Cost:** $381.25 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T12 Main  
**Generated:** 2026-07-18 11:54:12  
**Data Source:** AN54021613-V-1minRES_43200CLP_260601-260630c.csv  

## Time Period

- **Period:** June 01, 2026 thru June 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,182

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

- **Transformer:** T12 Main
- **Power Factor:** 0.837
- **Total Energy (Actual):** 783,957.31 kWh (per period), 1089.28 kW (per hour)
- **Total Waste (Actual):** 145,575.84 kWh (per period), 202.27 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T12-Main_AN54021613-1minRES_260601-260630.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T12-Main_AN54021613-1minRES_260601-260630.md


## UNITY MANAGEMENT T12 Main SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 202.27 kW/hr
- **Blended Electricity Rate:** $0.3500/kWh (all-inclusive)
- **T12 Main Utility Cost Offset:** $70.80/hour
- **Annual Offset Savings:** $620169/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 806,628 BTU/hr
- **Total Cooling kW No Longer Needed:** 71.83 kW
- **Cooling Energy Cost Avoided:** $25.14/hour
- **Annual Cooling Savings:** $220220/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 274.10 kW
- **CO2e Emissions Avoided:** 896.35 metric tons/year
- **Monthly CO2e Reduction:** 74.70 metric tons/month
- **Hourly CO2e Reduction:** 0.1023 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $34510/year

### Total T12 Main Unity Savings

- **Per Hour:** $99.87
- **Per Day:** $2396.98
- **Per Month:** $71909.45
- **Per Year:** $874898

### T12 Main Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,136.4 kVAR Max (Avg: 694.0 kVAR/hr ; 499,651 kVAR/mo)
- **Max Harmonic Distortion:** 30.2% Max (range: 3.1% - 30.2%)
- **Max Amperage:** 2,583A Max (range: 501A - 2583A)

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
| Line to Neutral Voltage (277v) |   268.60 |   251.61 |   288.47 |
| Line to Line Voltage (480v) |   465.23 |   435.81 |   499.65 |
| Current (AMPS) |  1616.43 |   501.36 |  2583.44 |
| Phase Angle (degrees) |    33.09 |    25.97 |    43.61 |
| Total Harmonic Distortion (PCT) |    15.99 |     3.07 |    30.21 |

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

- **Maximum UtilityDemand:** 1,631.10 kW
  - **Maximum Load:** 1,936.31 kVA
  - **Percentage of Capacity (MAX):** 77.5%
- **Average Load:** 1,291.56 kVA
  - **Percentage of Capacity (Avg):** 51.7%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,291.56 kVA
- **Average Power Factor (PF):** 0.837

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,302.52 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 465.23 V
- Average Current (Iavg_A): 1616.43 A
- Average kW (Psum_kW): 1089.28 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 10.96 kVA (0.8%)
- **Calculated PF (kW/kVA from averages):** 0.836
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1291.56) and measured PF (0.837) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,291.56 |        51.7% | 929,533.15 kVA | 3,716,789.84 TOTAL-HEAT |
| kW | 1,089.28 |        43.6% | 783,957.31 kWh | 582,093.08 Load-Heat |
| kVAR |   693.96 |        27.8% | 499,442.51 kVARh | - |
| WASTE |   202.27 |         8.1% | 145,575.84 WASTE | 108,090.95 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,716,789.84
- **Load-Heat (BTU/hr):** 582,093.08
- **Field-Heat (BTU/hr):** 108,090.95
- **Load-Heat (BTU, period total):** 418,932,392.44
- **Field-Heat (BTU, period total):** 77,793,058.49

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 6 | 1,291.56 | 1,089.28 |   691.57 |     0.84 |   51.7% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,379.25 | 1,157.22 |   749.02 |     0.84 |   55.2% |
| 01 | 1,421.20 | 1,195.74 |   766.65 |     0.84 |   56.8% |
| 02 | 1,445.66 | 1,222.47 |   770.42 |     0.85 |   57.8% |
| 03 | 1,424.39 | 1,202.05 |   762.93 |     0.84 |   57.0% |
| 04 | 1,425.16 | 1,204.36 |   760.77 |     0.85 |   57.0% |
| 05 | 1,385.01 | 1,173.06 |   734.98 |     0.85 |   55.4% |
| 06 | 1,382.01 | 1,168.81 |   735.79 |     0.85 |   55.3% |
| 07 | 1,363.52 | 1,152.49 |   726.98 |     0.85 |   54.5% |
| 08 | 1,382.07 | 1,167.17 |   738.54 |     0.84 |   55.3% |
| 09 | 1,340.40 | 1,140.26 |   702.69 |     0.85 |   53.6% |
| 10 | 1,392.56 | 1,181.54 |   735.66 |     0.85 |   55.7% |
| 11 | 1,383.43 | 1,173.50 |   731.00 |     0.85 |   55.3% |
| 12 | 1,370.67 | 1,164.03 |   722.25 |     0.85 |   54.8% |
| 13 | 1,287.23 | 1,095.50 |   674.37 |     0.85 |   51.5% |
| 14 | 1,126.13 |   965.40 |   577.32 |     0.86 |   45.0% |
| 15 | 1,166.77 | 1,010.45 |   579.90 |     0.87 |   46.7% |
| 16 | 1,209.10 | 1,044.31 |   605.47 |     0.86 |   48.4% |
| 17 | 1,093.88 |   930.78 |   571.49 |     0.85 |   43.8% |
| 18 |   967.93 |   808.21 |   530.77 |     0.83 |   38.7% |
| 19 |   937.73 |   779.09 |   520.43 |     0.83 |   37.5% |
| 20 | 1,181.50 |   961.98 |   684.30 |     0.81 |   47.3% |
| 21 | 1,281.66 | 1,049.73 |   733.94 |     0.82 |   51.3% |
| 22 | 1,283.52 | 1,052.82 |   732.84 |     0.82 |   51.3% |
| 23 | 1,367.58 | 1,142.76 |   749.67 |     0.84 |   54.7% |

---

# END OF REPORT

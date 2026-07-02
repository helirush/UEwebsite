# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 508,552.1 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $99,167.66 (Cost per period)
- **Consumption Total Cost:** $133.31 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Deli F  
**Generated:** 2026-06-19 18:05:55  
**Data Source:** AN55050323-V-1minRES_44640CLP_260501-260531c.csv  

## Time Period

- **Period:** May 01, 2026 thru May 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,634

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
- **Power Factor:** 0.853
- **Total Energy (Actual):** 508,552.10 kWh (per period), 683.63 kW (per hour)
- **Total Waste (Actual):** 64,503.55 kWh (per period), 86.71 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Deli-F_AN55050323-1minRES_260501-260531.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Deli-F_AN55050323-1minRES_260501-260531.md


## UNITY MANAGEMENT Deli F SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 86.71 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Deli F Utility Cost Offset:** $16.91/hour
- **Annual Offset Savings:** $148118/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 311,945 BTU/hr
- **Total Cooling kW No Longer Needed:** 27.30 kW
- **Cooling Energy Cost Avoided:** $5.32/hour
- **Annual Cooling Savings:** $46626/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 114.01 kW
- **CO2e Emissions Avoided:** 372.82 metric tons/year
- **Monthly CO2e Reduction:** 31.07 metric tons/month
- **Hourly CO2e Reduction:** 0.0426 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $14167/year

### Total Deli F Unity Savings

- **Per Hour:** $23.85
- **Per Day:** $572.36
- **Per Month:** $17170.74
- **Per Year:** $208911

### Deli F Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,549.5 kVAR Max (Avg: 355.1 kVAR/hr ; 255,649 kVAR/mo)
- **Max Harmonic Distortion:** 29.1% Max (range: 3.0% - 29.1%)
- **Max Amperage:** 2,530A Max (range: 14A - 2530A)

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
| Line to Neutral Voltage (277v) |   277.81 |   263.82 |   287.33 |
| Line to Line Voltage (480v) |   481.18 |   456.95 |   497.67 |
| Current (AMPS) |   928.25 |    13.54 |  2529.90 |
| Phase Angle (degrees) |    31.00 |     0.00 |    82.13 |
| Total Harmonic Distortion (PCT) |    14.35 |     3.00 |    29.08 |

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
| Unity THD Composite (%) | 14.3% | Field-level stress indicator |
| Max Phase THD | 4.8% | Highest THD among all three phases |
| Min Phase THD | 4.8% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,739.84 kW
  - **Maximum Load:** 2,085.58 kVA
  - **Percentage of Capacity (MAX):** 83.4%
- **Average Load:** 770.34 kVA
  - **Percentage of Capacity (Avg):** 30.8%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 770.34 kVA
- **Average Power Factor (PF):** 0.853

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 773.63 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 481.18 V
- Average Current (Iavg_A): 928.25 A
- Average kW (Psum_kW): 683.63 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 3.29 kVA (0.4%)
- **Calculated PF (kW/kVA from averages):** 0.884
- **Power Factor Difference:** 0.031 (3.6%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (770.34) and measured PF (0.853) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   770.34 |        30.8% | 573,055.65 kVA | 2,332,641.46 TOTAL-HEAT |
| kW |   683.63 |        27.3% | 508,552.10 kWh | 262,563.77 Load-Heat |
| kVAR |   355.07 |        14.2% | 264,135.46 kVARh | - |
| WASTE |    86.71 |         3.5% | 64,503.55 WASTE | 33,302.97 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,332,641.46
- **Load-Heat (BTU/hr):** 262,563.77
- **Field-Heat (BTU/hr):** 33,302.97
- **Load-Heat (BTU, period total):** 195,321,190.55
- **Field-Heat (BTU, period total):** 24,774,079.25

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 5 |   770.34 |   683.63 |   351.38 |     0.89 |   30.8% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   690.69 |   569.55 |   390.03 |     0.82 |   27.6% |
| 01 |   278.19 |   225.05 |   162.12 |     0.81 |   11.1% |
| 02 |    51.53 |    41.47 |    29.30 |     0.80 |    2.1% |
| 03 |    61.12 |    50.41 |    33.94 |     0.82 |    2.4% |
| 04 |    53.40 |    43.75 |    30.19 |     0.82 |    2.1% |
| 05 |   208.94 |   162.09 |   129.90 |     0.78 |    8.4% |
| 06 |   966.80 |   870.67 |   415.13 |     0.90 |   38.7% |
| 07 |   930.65 |   834.82 |   409.33 |     0.90 |   37.2% |
| 08 |   934.25 |   831.34 |   423.71 |     0.89 |   37.4% |
| 09 |   967.84 |   870.30 |   422.09 |     0.90 |   38.7% |
| 10 |   884.75 |   774.76 |   423.70 |     0.88 |   35.4% |
| 11 |   953.17 |   854.68 |   420.56 |     0.90 |   38.1% |
| 12 |   986.57 |   884.77 |   434.44 |     0.90 |   39.5% |
| 13 |   966.38 |   864.16 |   430.69 |     0.89 |   38.7% |
| 14 | 1,010.50 |   910.24 |   437.39 |     0.90 |   40.4% |
| 15 |   927.35 |   819.93 |   429.99 |     0.88 |   37.1% |
| 16 |   960.11 |   861.90 |   421.53 |     0.90 |   38.4% |
| 17 |   967.71 |   863.02 |   434.46 |     0.89 |   38.7% |
| 18 |   974.39 |   875.00 |   427.24 |     0.90 |   39.0% |
| 19 |   921.78 |   813.40 |   429.91 |     0.88 |   36.9% |
| 20 |   935.36 |   836.35 |   416.92 |     0.89 |   37.4% |
| 21 |   979.09 |   879.38 |   428.89 |     0.90 |   39.2% |
| 22 |   945.52 |   842.01 |   427.78 |     0.89 |   37.8% |
| 23 |   932.70 |   828.66 |   424.22 |     0.89 |   37.3% |

---

# END OF REPORT

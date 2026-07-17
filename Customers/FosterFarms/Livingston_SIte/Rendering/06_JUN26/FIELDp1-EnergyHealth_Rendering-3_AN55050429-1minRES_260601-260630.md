# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 391,493.7 kWh (Usage per period)
- **Consumption Cost per unit:** $0.120/kWh (Cost per kWh)
- **Consumption Total Cost:** $46,979.24 (Cost per period)
- **Consumption Total Cost:** $74.86 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Rendering-3  
**Generated:** 2026-07-06 12:42:07  
**Data Source:** AN55050429-V-1minRES_43200CLP_260601-260630c.csv  

## Time Period

- **Period:** June 01, 2026 thru June 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 37,653

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

- **Transformer:** Rendering-3
- **Power Factor:** 0.778
- **Total Energy (Actual):** 391,493.69 kWh (per period), 623.84 kW (per hour)
- **Total Waste (Actual):** 111,645.33 kWh (per period), 177.91 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Rendering-3_AN55050429-1minRES_260601-260630.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Rendering-3_AN55050429-1minRES_260601-260630.md


## UNITY MANAGEMENT Rendering-3 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 177.91 kW/hr
- **Blended Electricity Rate:** $0.1200/kWh (all-inclusive)
- **Rendering-3 Utility Cost Offset:** $21.35/hour
- **Annual Offset Savings:** $187015/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 665,579 BTU/hr
- **Total Cooling kW No Longer Needed:** 58.52 kW
- **Cooling Energy Cost Avoided:** $7.02/hour
- **Annual Cooling Savings:** $61512/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 236.42 kW
- **CO2e Emissions Avoided:** 773.14 metric tons/year
- **Monthly CO2e Reduction:** 64.43 metric tons/month
- **Hourly CO2e Reduction:** 0.0883 metric tons/hour
- **CO2e Value Rate:** $35/metric ton
- **Annual CO2e Value:** $27060/year

### Total Rendering-3 Unity Savings

- **Per Hour:** $31.46
- **Per Day:** $755.04
- **Per Month:** $22651.06
- **Per Year:** $275588

### Rendering-3 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 655.8 kVAR Max (Avg: 503.6 kVAR/hr ; 362,599 kVAR/mo)
- **Max Harmonic Distortion:** 30.4% Max (range: 3.0% - 30.4%)
- **Max Amperage:** 1,143A Max (range: 797A - 1143A)

---

# Rendering-3 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   274.84 |   268.42 |   284.60 |
| Line to Line Voltage (480v) |   476.04 |   464.92 |   492.93 |
| Current (AMPS) |   972.32 |   797.43 |  1143.00 |
| Phase Angle (degrees) |    38.89 |    33.49 |    49.68 |
| Total Harmonic Distortion (PCT) |    16.70 |     3.00 |    30.38 |

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
| THD Phase A (%) | 5.6% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.6% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.6% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 16.7% | Field-level stress indicator |
| Max Phase THD | 5.6% | Highest THD among all three phases |
| Min Phase THD | 5.6% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 735.33 kW
  - **Maximum Load:** 930.19 kVA
  - **Percentage of Capacity (MAX):** 37.2%
- **Average Load:** 801.75 kVA
  - **Percentage of Capacity (Avg):** 32.1%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 801.75 kVA
- **Average Power Factor (PF):** 0.778

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 801.71 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 476.04 V
- Average Current (Iavg_A): 972.32 A
- Average kW (Psum_kW): 623.84 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.05 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.778
- **Power Factor Difference:** 0.000 (0.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (801.75) and measured PF (0.778) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   801.75 |        32.1% | 503,139.02 kVA | 2,128,646.44 TOTAL-HEAT |
| kW |   623.84 |        25.0% | 391,493.69 kWh | 472,341.48 Load-Heat |
| kVAR |   503.61 |        20.1% | 316,040.44 kVARh | - |
| WASTE |   177.91 |         7.1% | 111,645.33 WASTE | 134,701.32 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,128,646.44
- **Load-Heat (BTU/hr):** 472,341.48
- **Field-Heat (BTU/hr):** 134,701.32
- **Load-Heat (BTU, period total):** 296,417,894.50
- **Field-Heat (BTU, period total):** 84,531,816.00

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 6 |   801.75 |   623.84 |   502.62 |     0.78 |   32.1% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   798.46 |   626.15 |   494.62 |     0.78 |   31.9% |
| 01 |   800.93 |   630.64 |   492.98 |     0.79 |   32.0% |
| 02 |   800.55 |   630.46 |   492.63 |     0.79 |   32.0% |
| 03 |   793.32 |   628.90 |   482.78 |     0.79 |   31.7% |
| 04 |   811.73 |   639.94 |   498.79 |     0.79 |   32.5% |
| 05 |   822.14 |   641.47 |   513.34 |     0.78 |   32.9% |
| 06 |   841.67 |   646.45 |   538.08 |     0.77 |   33.7% |
| 07 |   813.10 |   629.19 |   514.00 |     0.77 |   32.5% |
| 08 |   811.18 |   627.47 |   513.08 |     0.77 |   32.4% |
| 09 |   806.64 |   620.83 |   513.75 |     0.77 |   32.3% |
| 10 |   801.75 |   617.44 |   509.85 |     0.77 |   32.1% |
| 11 |   796.17 |   615.39 |   503.55 |     0.77 |   31.8% |
| 12 |   793.91 |   616.59 |   498.82 |     0.78 |   31.8% |
| 13 |   791.40 |   615.63 |   496.36 |     0.78 |   31.7% |
| 14 |   802.23 |   614.21 |   515.38 |     0.77 |   32.1% |
| 15 |   793.09 |   613.62 |   501.72 |     0.77 |   31.7% |
| 16 |   798.46 |   619.11 |   503.24 |     0.78 |   31.9% |
| 17 |   787.88 |   613.62 |   493.25 |     0.78 |   31.5% |
| 18 |   793.45 |   615.10 |   500.67 |     0.78 |   31.7% |
| 19 |   780.31 |   602.61 |   495.06 |     0.77 |   31.2% |
| 20 |   803.25 |   623.98 |   505.04 |     0.78 |   32.1% |
| 21 |   798.38 |   623.10 |   498.30 |     0.78 |   31.9% |
| 22 |   800.79 |   625.99 |   498.67 |     0.78 |   32.0% |
| 23 |   797.70 |   628.42 |   490.61 |     0.79 |   31.9% |

---

# END OF REPORT

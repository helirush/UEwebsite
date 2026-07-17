# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 535,697.2 kWh (Usage per period)
- **Consumption Cost per unit:** $0.350/kWh (Cost per kWh)
- **Consumption Total Cost:** $187,494.02 (Cost per period)
- **Consumption Total Cost:** $252.01 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T10 Air Chiller  
**Generated:** 2026-07-10 12:10:38  
**Data Source:** AN53111387-V-1minRES_44640CLP_260501-260531c.csv  

## Time Period

- **Period:** May 01, 2026 thru May 31, 2026
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

- **Transformer:** T10 Air Chiller
- **Power Factor:** 0.897
- **Total Energy (Actual):** 535,697.20 kWh (per period), 720.02 kW (per hour)
- **Total Waste (Actual):** 71,884.50 kWh (per period), 96.62 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T10-Air-Chiller_AN53111387-1minRES_260501-260531.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T10-Air-Chiller_AN53111387-1minRES_260501-260531.md


## UNITY MANAGEMENT T10 Air Chiller SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 96.62 kW/hr
- **Blended Electricity Rate:** $0.3500/kWh (all-inclusive)
- **T10 Air Chiller Utility Cost Offset:** $33.82/hour
- **Annual Offset Savings:** $296234/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 401,288 BTU/hr
- **Total Cooling kW No Longer Needed:** 35.11 kW
- **Cooling Energy Cost Avoided:** $12.29/hour
- **Annual Cooling Savings:** $107656/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 131.73 kW
- **CO2e Emissions Avoided:** 430.78 metric tons/year
- **Monthly CO2e Reduction:** 35.90 metric tons/month
- **Hourly CO2e Reduction:** 0.0492 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $16585/year

### Total T10 Air Chiller Unity Savings

- **Per Hour:** $48.00
- **Per Day:** $1151.98
- **Per Month:** $34559.55
- **Per Year:** $420474

### T10 Air Chiller Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 792.2 kVAR Max (Avg: 385.3 kVAR/hr ; 277,430 kVAR/mo)
- **Max Harmonic Distortion:** 31.5% Max (range: 3.0% - 31.5%)
- **Max Amperage:** 2,126A Max (range: 66A - 2126A)

---

# T10 Air Chiller DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   264.10 |   249.50 |   280.67 |
| Line to Line Voltage (480v) |   457.44 |   432.14 |   486.13 |
| Current (AMPS) |  1052.44 |    66.20 |  2126.30 |
| Phase Angle (degrees) |    25.95 |    15.85 |    35.54 |
| Total Harmonic Distortion (PCT) |    14.99 |     3.00 |    31.46 |

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
| THD Phase A (%) | 5.0% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.0% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.0% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 15.0% | Field-level stress indicator |
| Max Phase THD | 5.0% | Highest THD among all three phases |
| Min Phase THD | 5.0% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,438.27 kW
  - **Maximum Load:** 1,626.95 kVA
  - **Percentage of Capacity (MAX):** 65.1%
- **Average Load:** 816.64 kVA
  - **Percentage of Capacity (Avg):** 32.7%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 816.64 kVA
- **Average Power Factor (PF):** 0.897

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 833.86 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 457.44 V
- Average Current (Iavg_A): 1052.44 A
- Average kW (Psum_kW): 720.02 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 17.21 kVA (2.1%)
- **Calculated PF (kW/kVA from averages):** 0.863
- **Power Factor Difference:** 0.034 (3.7%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (816.64) and measured PF (0.897) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   816.64 |        32.7% | 607,581.69 kVA | 2,456,821.10 TOTAL-HEAT |
| kW |   720.02 |        28.8% | 535,697.20 kWh | 290,672.60 Load-Heat |
| kVAR |   385.32 |        15.4% | 286,677.57 kVARh | - |
| WASTE |    96.62 |         3.9% | 71,884.50 WASTE | 39,004.97 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,456,821.10
- **Load-Heat (BTU/hr):** 290,672.60
- **Field-Heat (BTU/hr):** 39,004.97
- **Load-Heat (BTU, period total):** 216,260,410.97
- **Field-Heat (BTU, period total):** 29,019,697.75

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 5 |   816.64 |   720.02 |   384.51 |     0.88 |   32.7% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   949.06 |   837.17 |   446.49 |     0.88 |   38.0% |
| 01 |   939.35 |   828.84 |   441.48 |     0.88 |   37.6% |
| 02 |   932.25 |   822.35 |   438.63 |     0.88 |   37.3% |
| 03 |   934.60 |   824.92 |   438.82 |     0.88 |   37.4% |
| 04 |   935.84 |   826.28 |   438.96 |     0.88 |   37.4% |
| 05 |   941.43 |   830.50 |   442.89 |     0.88 |   37.7% |
| 06 |   943.06 |   831.56 |   444.37 |     0.88 |   37.7% |
| 07 |   943.72 |   831.59 |   445.67 |     0.88 |   37.7% |
| 08 |   946.45 |   834.70 |   445.64 |     0.88 |   37.9% |
| 09 |   954.79 |   842.44 |   448.80 |     0.88 |   38.2% |
| 10 |   950.43 |   839.41 |   445.19 |     0.88 |   38.0% |
| 11 |   945.06 |   834.73 |   442.54 |     0.88 |   37.8% |
| 12 |   955.50 |   844.31 |   446.83 |     0.88 |   38.2% |
| 13 |   905.06 |   798.29 |   425.74 |     0.88 |   36.2% |
| 14 |   862.88 |   761.01 |   405.99 |     0.88 |   34.5% |
| 15 |   735.34 |   648.90 |   345.29 |     0.88 |   29.4% |
| 16 |   548.74 |   483.65 |   258.12 |     0.88 |   21.9% |
| 17 |   332.25 |   294.63 |   152.37 |     0.89 |   13.3% |
| 18 |   309.16 |   270.86 |   147.46 |     0.88 |   12.4% |
| 19 |   302.86 |   263.45 |   147.71 |     0.87 |   12.1% |
| 20 |   501.27 |   437.85 |   241.97 |     0.87 |   20.1% |
| 21 |   886.13 |   779.54 |   420.27 |     0.88 |   35.4% |
| 22 |   966.29 |   850.75 |   457.48 |     0.88 |   38.7% |
| 23 |   977.88 |   862.83 |   459.54 |     0.88 |   39.1% |

---

# END OF REPORT

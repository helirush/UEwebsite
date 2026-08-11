# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 575,718.7 kWh (Usage per period)
- **Consumption Cost per unit:** $0.350/kWh (Cost per kWh)
- **Consumption Total Cost:** $201,501.53 (Cost per period)
- **Consumption Total Cost:** $270.84 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T10 Air Chiller  
**Generated:** 2026-08-04 12:55:05  
**Data Source:** AN53111387-V-1minRES_44640CLP_260701-260731c.csv  

## Time Period

- **Period:** July 01, 2026 thru July 31, 2026
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
- **Power Factor:** 0.894
- **Total Energy (Actual):** 575,718.66 kWh (per period), 773.82 kW (per hour)
- **Total Waste (Actual):** 77,325.28 kWh (per period), 103.93 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T10-Air-Chiller_AN53111387-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T10-Air-Chiller_AN53111387-1minRES_260701-260731.md


## UNITY MANAGEMENT T10 Air Chiller SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 103.93 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 62.76 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.3500/kWh (all-inclusive)
- **T10 Air Chiller Utility Cost Offset:** $36.38/hour
- **Annual Offset Savings:** $318655/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 259,828 BTU/hr
- **Total Cooling kW No Longer Needed:** 23.40 kW
- **Cooling Energy Cost Avoided:** $8.19/hour
- **Annual Cooling Savings:** $71739/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 127.33 kW
- **CO2e Emissions Avoided:** 416.39 metric tons/year
- **Monthly CO2e Reduction:** 34.70 metric tons/month
- **Hourly CO2e Reduction:** 0.0475 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $16031/year

### Total T10 Air Chiller Unity Savings

- **Per Hour:** $46.40
- **Per Day:** $1113.49
- **Per Month:** $33404.83
- **Per Year:** $406425

### T10 Air Chiller Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 781.1 kVAR Max (Avg: 414.3 kVAR/hr ; 298,301 kVAR/mo)
- **Max Harmonic Distortion:** 33.2% Max (range: 3.0% - 33.2%)
- **Max Amperage:** 2,164A Max (range: 64A - 2164A)

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
| Line to Neutral Voltage (277v) |   264.51 |   250.85 |   280.78 |
| Line to Line Voltage (480v) |   458.15 |   434.48 |   486.32 |
| Current (AMPS) |  1127.98 |    64.16 |  2164.40 |
| Phase Angle (degrees) |    26.43 |    16.68 |    37.12 |
| Total Harmonic Distortion (PCT) |    15.16 |     3.00 |    33.19 |

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
| Unity THD Composite (%) | 15.2% | Field-level stress indicator |
| Max Phase THD | 5.1% | Highest THD among all three phases |
| Min Phase THD | 5.1% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,461.15 kW
  - **Maximum Load:** 1,652.94 kVA
  - **Percentage of Capacity (MAX):** 66.1%
- **Average Load:** 877.75 kVA
  - **Percentage of Capacity (Avg):** 35.1%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 877.75 kVA
- **Average Power Factor (PF):** 0.894

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 895.10 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 458.15 V
- Average Current (Iavg_A): 1127.98 A
- Average kW (Psum_kW): 773.82 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 17.35 kVA (2.0%)
- **Calculated PF (kW/kVA from averages):** 0.865
- **Power Factor Difference:** 0.029 (3.3%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (877.75) and measured PF (0.894) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   877.75 |        35.1% | 653,043.94 kVA | 2,640,368.05 TOTAL-HEAT |
| kW |   773.82 |        31.0% | 575,718.66 kWh | 312,639.28 Load-Heat |
| kVAR |   414.31 |        16.6% | 308,244.07 kVARh | - |
| WASTE |   103.93 |         4.2% | 77,325.28 WASTE | 41,990.85 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,640,368.05
- **Load-Heat (BTU/hr):** 312,639.28
- **Field-Heat (BTU/hr):** 41,990.85
- **Load-Heat (BTU, period total):** 232,603,625.30
- **Field-Heat (BTU, period total):** 31,241,195.86

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 |   877.75 |   773.82 |   413.58 |     0.88 |   35.1% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,041.79 |   918.03 |   492.16 |     0.88 |   41.7% |
| 01 | 1,030.72 |   909.02 |   485.53 |     0.88 |   41.2% |
| 02 | 1,012.47 |   892.52 |   477.72 |     0.88 |   40.5% |
| 03 | 1,007.12 |   888.52 |   473.90 |     0.88 |   40.3% |
| 04 | 1,002.37 |   884.56 |   471.24 |     0.88 |   40.1% |
| 05 |   991.59 |   875.02 |   466.21 |     0.88 |   39.7% |
| 06 | 1,030.67 |   909.53 |   484.47 |     0.88 |   41.2% |
| 07 | 1,046.53 |   924.09 |   490.94 |     0.88 |   41.9% |
| 08 | 1,034.56 |   913.45 |   485.35 |     0.88 |   41.4% |
| 09 | 1,060.00 |   936.70 |   495.89 |     0.88 |   42.4% |
| 10 | 1,052.21 |   929.97 |   491.93 |     0.88 |   42.1% |
| 11 | 1,029.85 |   909.39 |   483.00 |     0.88 |   41.2% |
| 12 | 1,032.92 |   910.93 |   486.47 |     0.88 |   41.3% |
| 13 | 1,007.26 |   887.01 |   476.72 |     0.88 |   40.3% |
| 14 |   965.82 |   851.43 |   455.30 |     0.88 |   38.6% |
| 15 |   765.58 |   677.36 |   355.43 |     0.88 |   30.6% |
| 16 |   555.44 |   489.50 |   260.95 |     0.88 |   22.2% |
| 17 |   404.25 |   355.82 |   190.15 |     0.88 |   16.2% |
| 18 |   330.70 |   290.35 |   156.84 |     0.88 |   13.2% |
| 19 |   309.32 |   271.04 |   147.49 |     0.88 |   12.4% |
| 20 |   525.48 |   462.36 |   247.69 |     0.88 |   21.0% |
| 21 |   873.88 |   766.22 |   419.20 |     0.88 |   35.0% |
| 22 |   960.16 |   843.23 |   458.61 |     0.88 |   38.4% |
| 23 |   995.22 |   875.51 |   472.71 |     0.88 |   39.8% |

---

# END OF REPORT

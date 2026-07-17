# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 545,341.4 kWh (Usage per period)
- **Consumption Cost per unit:** $0.350/kWh (Cost per kWh)
- **Consumption Total Cost:** $190,869.50 (Cost per period)
- **Consumption Total Cost:** $256.55 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T15 Fillet  
**Generated:** 2026-07-10 12:10:53  
**Data Source:** AN53110845-V-1minRES_44640CLP_260501-260531c.csv  

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

- **Transformer:** T15 Fillet
- **Power Factor:** 0.808
- **Total Energy (Actual):** 545,341.43 kWh (per period), 732.99 kW (per hour)
- **Total Waste (Actual):** 106,216.66 kWh (per period), 142.76 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T15-Fillet_AN53110845-1minRES_260501-260531.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T15-Fillet_AN53110845-1minRES_260501-260531.md


## UNITY MANAGEMENT T15 Fillet SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 142.76 kW/hr
- **Blended Electricity Rate:** $0.3500/kWh (all-inclusive)
- **T15 Fillet Utility Cost Offset:** $49.97/hour
- **Annual Offset Savings:** $437715/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 515,148 BTU/hr
- **Total Cooling kW No Longer Needed:** 45.08 kW
- **Cooling Energy Cost Avoided:** $15.78/hour
- **Annual Cooling Savings:** $138201/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 187.84 kW
- **CO2e Emissions Avoided:** 614.27 metric tons/year
- **Monthly CO2e Reduction:** 51.19 metric tons/month
- **Hourly CO2e Reduction:** 0.0701 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $23649/year

### Total T15 Fillet Unity Savings

- **Per Hour:** $68.44
- **Per Day:** $1642.65
- **Per Month:** $49279.40
- **Per Year:** $599566

### T15 Fillet Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 808.4 kVAR Max (Avg: 479.2 kVAR/hr ; 345,052 kVAR/mo)
- **Max Harmonic Distortion:** 108.7% Max (range: 0.0% - 108.7%)
- **Max Amperage:** 1,961A Max (range: 199A - 1961A)

---

# T15 Fillet DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   276.37 |   234.39 |   291.45 |
| Line to Line Voltage (480v) |   478.68 |   405.97 |   504.80 |
| Current (AMPS) |  1065.47 |   198.86 |  1960.70 |
| Phase Angle (degrees) |    35.60 |    24.27 |    53.65 |
| Total Harmonic Distortion (PCT) |    13.27 |     0.00 |   108.73 |

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
| THD Phase A (%) | 4.4% | IEEE standard per-phase calculation |
| THD Phase B (%) | 4.6% | IEEE standard per-phase calculation |
| THD Phase C (%) | 4.2% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 13.3% | Field-level stress indicator |
| Max Phase THD | 4.6% | Highest THD among all three phases |
| Min Phase THD | 4.2% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,420.33 kW
  - **Maximum Load:** 1,587.25 kVA
  - **Percentage of Capacity (MAX):** 63.5%
- **Average Load:** 875.75 kVA
  - **Percentage of Capacity (Avg):** 35.0%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 875.75 kVA
- **Average Power Factor (PF):** 0.808

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 883.39 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 478.68 V
- Average Current (Iavg_A): 1065.47 A
- Average kW (Psum_kW): 732.99 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 7.64 kVA (0.9%)
- **Calculated PF (kW/kVA from averages):** 0.830
- **Power Factor Difference:** 0.022 (2.8%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (875.75) and measured PF (0.808) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   875.75 |        35.0% | 651,558.08 kVA | 2,501,051.59 TOTAL-HEAT |
| kW |   732.99 |        29.3% | 545,341.43 kWh | 407,720.12 Load-Heat |
| kVAR |   479.24 |        19.2% | 356,553.87 kVARh | - |
| WASTE |   142.76 |         5.7% | 106,216.66 WASTE | 79,412.03 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,501,051.59
- **Load-Heat (BTU/hr):** 407,720.12
- **Field-Heat (BTU/hr):** 79,412.03
- **Load-Heat (BTU, period total):** 303,343,767.43
- **Field-Heat (BTU, period total):** 59,082,547.70

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 5 |   875.75 |   732.99 |   471.69 |     0.84 |   35.0% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   966.83 |   818.69 |   508.65 |     0.85 |   38.7% |
| 01 |   935.79 |   781.50 |   509.60 |     0.84 |   37.4% |
| 02 |   984.20 |   835.32 |   515.71 |     0.85 |   39.4% |
| 03 |   945.34 |   796.39 |   505.17 |     0.84 |   37.8% |
| 04 |   959.08 |   810.08 |   509.09 |     0.84 |   38.4% |
| 05 |   981.38 |   833.38 |   513.22 |     0.85 |   39.3% |
| 06 |   959.40 |   813.55 |   503.40 |     0.85 |   38.4% |
| 07 |   982.49 |   837.04 |   509.37 |     0.85 |   39.3% |
| 08 |   979.82 |   841.01 |   498.08 |     0.86 |   39.2% |
| 09 |   994.63 |   857.81 |   498.18 |     0.86 |   39.8% |
| 10 | 1,008.25 |   877.48 |   491.97 |     0.87 |   40.3% |
| 11 |   956.92 |   826.13 |   478.56 |     0.86 |   38.3% |
| 12 |   967.74 |   837.42 |   480.52 |     0.87 |   38.7% |
| 13 |   983.41 |   846.96 |   494.13 |     0.86 |   39.3% |
| 14 |   971.97 |   832.63 |   496.52 |     0.86 |   38.9% |
| 15 |   955.12 |   814.79 |   492.50 |     0.85 |   38.2% |
| 16 |   866.81 |   731.63 |   458.54 |     0.84 |   34.7% |
| 17 |   722.45 |   584.82 |   419.09 |     0.81 |   28.9% |
| 18 |   696.85 |   521.46 |   458.84 |     0.75 |   27.9% |
| 19 |   678.13 |   497.78 |   459.03 |     0.73 |   27.1% |
| 20 |   668.61 |   494.93 |   448.51 |     0.74 |   26.7% |
| 21 |   588.70 |   453.83 |   373.02 |     0.77 |   23.5% |
| 22 |   538.47 |   432.02 |   319.03 |     0.80 |   21.5% |
| 23 |   725.64 |   615.00 |   379.78 |     0.85 |   29.0% |

---

# END OF REPORT

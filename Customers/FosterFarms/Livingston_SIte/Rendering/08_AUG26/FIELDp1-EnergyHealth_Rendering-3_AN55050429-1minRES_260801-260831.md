# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 430,748.5 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $83,995.96 (Cost per period)
- **Consumption Total Cost:** $115.42 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Rendering-3  
**Generated:** 2026-09-12 13:40:15  
**Data Source:** AN55050429-V-1minRES_44640CLP_260801-260831c.csv  

## Time Period

- **Period:** August 01, 2026 thru August 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,664

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

- **Transformer:** Rendering-3
- **Power Factor:** 0.771
- **Total Energy (Actual):** 430,748.54 kWh (per period), 591.90 kW (per hour)
- **Total Waste (Actual):** 126,494.13 kWh (per period), 173.82 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Rendering-3_AN55050429-1minRES_260801-260831.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Rendering-3_AN55050429-1minRES_260801-260831.md


## UNITY MANAGEMENT Rendering-3 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 173.82 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 127.43 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Rendering-3 Utility Cost Offset:** $33.89/hour
- **Annual Offset Savings:** $296918/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 474,119 BTU/hr
- **Total Cooling kW No Longer Needed:** 42.32 kW
- **Cooling Energy Cost Avoided:** $8.25/hour
- **Annual Cooling Savings:** $72292/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 216.14 kW
- **CO2e Emissions Avoided:** 706.81 metric tons/year
- **Monthly CO2e Reduction:** 58.90 metric tons/month
- **Hourly CO2e Reduction:** 0.0807 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $26859/year

### Total Rendering-3 Unity Savings

- **Per Hour:** $45.21
- **Per Day:** $1085.12
- **Per Month:** $32553.59
- **Per Year:** $396069

### Rendering-3 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 752.8 kVAR Max (Avg: 485.8 kVAR/hr ; 349,761 kVAR/mo)
- **Max Harmonic Distortion:** 32.0% Max (range: 3.0% - 32.0%)
- **Max Amperage:** 1,199A Max (range: 666A - 1199A)

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
| Line to Neutral Voltage (277v) |   275.06 |   266.85 |   287.45 |
| Line to Line Voltage (480v) |   476.42 |   462.20 |   497.89 |
| Current (AMPS) |   927.93 |   666.09 |  1198.51 |
| Phase Angle (degrees) |    39.44 |    31.35 |    52.84 |
| Total Harmonic Distortion (PCT) |    16.17 |     3.00 |    32.00 |

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
| THD Phase A (%) | 5.4% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.4% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.4% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 16.2% | Field-level stress indicator |
| Max Phase THD | 5.4% | Highest THD among all three phases |
| Min Phase THD | 5.4% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 780.60 kW
  - **Maximum Load:** 980.98 kVA
  - **Percentage of Capacity (MAX):** 39.2%
- **Average Load:** 765.72 kVA
  - **Percentage of Capacity (Avg):** 30.6%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 765.72 kVA
- **Average Power Factor (PF):** 0.771

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 765.72 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 476.42 V
- Average Current (Iavg_A): 927.93 A
- Average kW (Psum_kW): 591.90 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.01 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.773
- **Power Factor Difference:** 0.002 (0.2%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (765.72) and measured PF (0.771) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   765.72 |        30.6% | 557,242.66 kVA | 2,019,661.74 TOTAL-HEAT |
| kW |   591.90 |        23.7% | 430,748.54 kWh | 458,463.38 Load-Heat |
| kVAR |   485.78 |        19.4% | 353,518.16 kVARh | - |
| WASTE |   173.82 |         7.0% | 126,494.13 WASTE | 134,632.90 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,019,661.74
- **Load-Heat (BTU/hr):** 458,463.38
- **Field-Heat (BTU/hr):** 134,632.90
- **Load-Heat (BTU, period total):** 333,639,080.37
- **Field-Heat (BTU, period total):** 97,976,850.72

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 8 |   765.72 |   591.90 |   484.24 |     0.77 |   30.6% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   763.73 |   596.40 |   475.78 |     0.78 |   30.5% |
| 01 |   768.71 |   600.97 |   477.66 |     0.78 |   30.7% |
| 02 |   769.41 |   599.96 |   479.62 |     0.78 |   30.8% |
| 03 |   768.30 |   601.43 |   476.35 |     0.78 |   30.7% |
| 04 |   769.22 |   603.90 |   475.22 |     0.79 |   30.8% |
| 05 |   781.42 |   608.61 |   488.78 |     0.78 |   31.3% |
| 06 |   804.29 |   616.34 |   515.48 |     0.77 |   32.2% |
| 07 |   779.79 |   602.60 |   493.30 |     0.77 |   31.2% |
| 08 |   784.07 |   605.97 |   495.96 |     0.77 |   31.4% |
| 09 |   779.40 |   599.66 |   496.00 |     0.77 |   31.2% |
| 10 |   783.98 |   601.17 |   501.51 |     0.77 |   31.4% |
| 11 |   761.05 |   587.64 |   481.83 |     0.77 |   30.4% |
| 12 |   767.03 |   585.76 |   493.32 |     0.76 |   30.7% |
| 13 |   744.83 |   571.28 |   476.50 |     0.77 |   29.8% |
| 14 |   754.61 |   572.00 |   490.94 |     0.76 |   30.2% |
| 15 |   747.96 |   574.43 |   477.57 |     0.77 |   29.9% |
| 16 |   752.57 |   577.39 |   481.30 |     0.77 |   30.1% |
| 17 |   738.84 |   569.46 |   469.73 |     0.77 |   29.6% |
| 18 |   743.75 |   569.75 |   476.98 |     0.77 |   29.8% |
| 19 |   739.71 |   569.55 |   470.78 |     0.77 |   29.6% |
| 20 |   767.18 |   596.17 |   481.78 |     0.78 |   30.7% |
| 21 |   761.89 |   592.76 |   476.97 |     0.78 |   30.5% |
| 22 |   769.52 |   595.68 |   485.77 |     0.77 |   30.8% |
| 23 |   773.73 |   603.31 |   483.14 |     0.78 |   30.9% |

---

# END OF REPORT

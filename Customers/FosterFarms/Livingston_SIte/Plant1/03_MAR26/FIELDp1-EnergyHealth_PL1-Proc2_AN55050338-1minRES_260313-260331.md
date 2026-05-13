# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 200,904.2 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $39,176.32 (Cost per period)
- **Consumption Total Cost:** $88.84 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL1-Proc2  
**Generated:** 2026-04-25 17:56:54  
**Data Source:** AN55050338-V-1minRES_26460CLP_260313-260331c.csv  

## Time Period

- **Period:** March 13, 2026 thru March 31, 2026
- **Number of Days:** 19 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 26,460

- **Dataset Coverage:** Partial month (61.3% of 31-day month)
- **Billing Scale Factor:** 1.632x (normalization applied for monthly comparison)

## Facility Information

- **Facility:** Foster Farms
- **Location:** Livingston HQ Facility
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** PL1-Proc2
- **Power Factor:** 0.849
- **Total Energy (Actual):** 200,904.19 kWh (19 days), 455.57 kW (per hour)
- **Total Energy (Monthly Equivalent):** 327,791.04 kWh
- **Total Waste (Actual):** 31,770.79 kWh (19 days), 72.04 kW (per hour)
- **Total Waste (Monthly Equivalent):** 51,836.56 kWh

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL1-Proc2_AN55050338-1minRES_260313-260331.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL1-Proc2_AN55050338-1minRES_260313-260331.md


## UNITY MANAGEMENT PL1-Proc2 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 72.04 kW/hr (actual)
- **Monthly Equivalent Waste:** 117.54 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL1-Proc2 Utility Cost Offset (Monthly Equivalent):** $22.92/hour
- **Annual Offset Savings:** $123063/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 390,270 BTU/hr
- **Total Cooling kW No Longer Needed:** 34.19 kW
- **Cooling Energy Cost Avoided:** $6.67/hour
- **Annual Cooling Savings:** $58398/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 106.23 kW
- **CO2e Emissions Avoided:** 347.39 metric tons/year
- **Monthly CO2e Reduction:** 28.95 metric tons/month
- **Hourly CO2e Reduction:** 0.0397 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $13374/year

### Total PL1-Proc2 Unity Savings

- **Per Hour:** $22.24
- **Per Day:** $533.80
- **Per Month:** $16013.86
- **Per Year:** $194835

### PL1-Proc2 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 929.4 kVAR Max (Avg: 266.1 kVAR/hr ; 191,621 kVAR/mo)
- **Max Harmonic Distortion:** 30.6% Max (range: 3.0% - 30.6%)
- **Max Amperage:** 1,603A Max (range: 0A - 1603A)

---

# PL1-Proc2 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   184.60 |     0.00 |   192.37 |
| Line to Line Voltage (480v) |   319.73 |     0.00 |   333.20 |
| Current (AMPS) |   766.20 |     0.00 |  1603.07 |
| Phase Angle (degrees) |    31.70 |    26.36 |    90.00 |
| Total Harmonic Distortion (PCT) |    15.06 |     3.00 |    30.57 |

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
| Unity THD Composite (%) | 15.1% | Field-level stress indicator |
| Max Phase THD | 5.0% | Highest THD among all three phases |
| Min Phase THD | 5.0% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 895.88 kW
  - **Maximum Load:** 1,065.34 kVA
  - **Percentage of Capacity (MAX):** 42.6%
- **Average Load:** 527.61 kVA
  - **Percentage of Capacity (Avg):** 21.1%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 527.61 kVA
- **Average Power Factor (PF):** 0.849

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 424.32 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 319.73 V
- Average Current (Iavg_A): 766.20 A
- Average kW (Psum_kW): 455.57 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 103.29 kVA (19.6%)
- **Calculated PF (kW/kVA from averages):** 1.074
- **Power Factor Difference:** 0.224 (26.4%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (527.61) and measured PF (0.849) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   527.61 |        21.1% | 232,674.98 kVA | 1,554,452.65 TOTAL-HEAT |
| kW |   455.57 |        18.2% | 200,904.19 kWh | 212,254.00 Load-Heat |
| kVAR |   266.14 |        10.6% | 117,367.61 kVARh | - |
| WASTE |    72.04 |         2.9% | 31,770.79 WASTE | 33,565.64 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,554,452.65
- **Load-Heat (BTU/hr):** 212,254.00
- **Field-Heat (BTU/hr):** 33,565.64
- **Load-Heat (BTU, period total):** 93,604,014.36
- **Field-Heat (BTU, period total):** 14,802,448.58

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 3 |   527.61 |   455.57 |   265.08 |     0.86 |   21.1% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   580.95 |   504.10 |   287.87 |     0.87 |   23.2% |
| 01 |   566.50 |   489.87 |   283.56 |     0.86 |   22.7% |
| 02 |   562.85 |   486.72 |   281.73 |     0.86 |   22.5% |
| 03 |   560.26 |   483.86 |   281.48 |     0.86 |   22.4% |
| 04 |   571.38 |   494.23 |   285.65 |     0.86 |   22.9% |
| 05 |   565.33 |   488.63 |   283.22 |     0.86 |   22.6% |
| 06 |   564.53 |   487.75 |   283.16 |     0.86 |   22.6% |
| 07 |   560.43 |   483.94 |   281.32 |     0.86 |   22.4% |
| 08 |   587.45 |   508.57 |   292.71 |     0.87 |   23.5% |
| 09 |   577.53 |   500.13 |   287.63 |     0.87 |   23.1% |
| 10 |   583.37 |   506.23 |   288.76 |     0.87 |   23.3% |
| 11 |   587.79 |   509.96 |   290.71 |     0.87 |   23.5% |
| 12 |   575.70 |   500.06 |   284.19 |     0.87 |   23.0% |
| 13 |   575.81 |   499.38 |   285.57 |     0.87 |   23.0% |
| 14 |   549.52 |   475.68 |   274.23 |     0.87 |   22.0% |
| 15 |   465.43 |   399.92 |   237.18 |     0.86 |   18.6% |
| 16 |   422.86 |   361.32 |   219.05 |     0.85 |   16.9% |
| 17 |   341.87 |   289.47 |   181.37 |     0.85 |   13.7% |
| 18 |   294.60 |   247.11 |   159.82 |     0.84 |   11.8% |
| 19 |   383.48 |   327.09 |   198.98 |     0.85 |   15.3% |
| 20 |   506.30 |   436.06 |   256.39 |     0.86 |   20.3% |
| 21 |   542.28 |   468.21 |   272.86 |     0.86 |   21.7% |
| 22 |   574.94 |   498.45 |   285.61 |     0.87 |   23.0% |
| 23 |   595.93 |   517.65 |   294.32 |     0.87 |   23.8% |

---

# END OF REPORT

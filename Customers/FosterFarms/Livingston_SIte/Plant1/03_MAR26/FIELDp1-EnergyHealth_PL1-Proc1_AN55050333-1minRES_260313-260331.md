# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 66,647.1 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $12,996.18 (Cost per period)
- **Consumption Total Cost:** $29.49 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL1-Proc1  
**Generated:** 2026-09-10 22:48:16  
**Data Source:** AN55050333-V-1minRES_26490CLP_260313-260331c.csv  

## Time Period

- **Period:** March 13, 2026 thru March 31, 2026
- **Number of Days:** 19 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 26,441

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

- **Transformer:** PL1-Proc1
- **Power Factor:** 0.850
- **Total Energy (Actual):** 66,647.06 kWh (19 days), 151.24 kW (per hour)
- **Total Energy (Monthly Equivalent):** 108,739.94 kWh
- **Total Waste (Actual):** 12,080.92 kWh (19 days), 27.41 kW (per hour)
- **Total Waste (Monthly Equivalent):** 19,710.97 kWh

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL1-Proc1_AN55050333-1minRES_260313-260331.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL1-Proc1_AN55050333-1minRES_260313-260331.md


## UNITY MANAGEMENT PL1-Proc1 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 27.41 kW/hr (actual)
- **Heat-Coupled Burden Used in Thermal Model:** 16.74 kW/hr (modeled_non_active_field_burden)
- **Monthly Equivalent Waste:** 44.73 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL1-Proc1 Utility Cost Offset (Monthly Equivalent):** $8.72/hour
- **Annual Offset Savings:** $46829/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 60,483 BTU/hr
- **Total Cooling kW No Longer Needed:** 5.30 kW
- **Cooling Energy Cost Avoided:** $1.03/hour
- **Annual Cooling Savings:** $9050/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 32.71 kW
- **CO2e Emissions Avoided:** 106.97 metric tons/year
- **Monthly CO2e Reduction:** 8.91 metric tons/month
- **Hourly CO2e Reduction:** 0.0122 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $4119/year

### Total PL1-Proc1 Unity Savings

- **Per Hour:** $6.85
- **Per Day:** $164.38
- **Per Month:** $4931.30
- **Per Year:** $59998

### PL1-Proc1 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 160.1 kVAR Max (Avg: 95.1 kVAR/hr ; 68,470 kVAR/mo)
- **Max Harmonic Distortion:** 28.4% Max (range: 3.0% - 28.4%)
- **Max Amperage:** 380A Max (range: 95A - 380A)

---

# PL1-Proc1 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   279.08 |   267.34 |   291.48 |
| Line to Line Voltage (480v) |   483.38 |   463.04 |   504.85 |
| Current (AMPS) |   213.85 |    94.50 |   380.27 |
| Phase Angle (degrees) |    31.67 |    22.48 |    62.81 |
| Total Harmonic Distortion (PCT) |    15.14 |     3.00 |    28.41 |

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

- **Maximum UtilityDemand:** 270.60 kW
  - **Maximum Load:** 313.54 kVA
  - **Percentage of Capacity (MAX):** 12.5%
- **Average Load:** 178.65 kVA
  - **Percentage of Capacity (Avg):** 7.1%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 178.65 kVA
- **Average Power Factor (PF):** 0.850

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 179.04 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 483.38 V
- Average Current (Iavg_A): 213.85 A
- Average kW (Psum_kW): 151.24 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.39 kVA (0.2%)
- **Calculated PF (kW/kVA from averages):** 0.845
- **Power Factor Difference:** 0.005 (0.6%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (178.65) and measured PF (0.850) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   178.65 |         7.1% | 78,727.98 kVA | 516,037.75 TOTAL-HEAT |
| kW |   151.24 |         6.0% | 66,647.06 kWh | 79,186.70 Load-Heat |
| kVAR |    95.10 |         3.8% | 41,907.80 kVARh | - |
| WASTE |    27.41 |         1.1% | 12,080.92 WASTE | 14,353.94 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 516,037.75
- **Load-Heat (BTU/hr):** 79,186.70
- **Field-Heat (BTU/hr):** 14,353.94
- **Load-Heat (BTU, period total):** 34,896,258.66
- **Field-Heat (BTU, period total):** 6,325,541.65

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 3 |   178.65 |   151.24 |    94.65 |     0.85 |    7.1% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   180.09 |   150.41 |    98.69 |     0.84 |    7.2% |
| 01 |   184.78 |   154.36 |   101.27 |     0.84 |    7.4% |
| 02 |   183.82 |   153.16 |   101.28 |     0.83 |    7.4% |
| 03 |   183.40 |   152.50 |   101.53 |     0.83 |    7.3% |
| 04 |   185.26 |   155.20 |   100.79 |     0.84 |    7.4% |
| 05 |   183.62 |   154.00 |    99.65 |     0.84 |    7.3% |
| 06 |   180.23 |   151.74 |    96.84 |     0.84 |    7.2% |
| 07 |   177.73 |   149.62 |    95.59 |     0.84 |    7.1% |
| 08 |   180.44 |   152.27 |    96.43 |     0.84 |    7.2% |
| 09 |   177.86 |   150.12 |    94.96 |     0.84 |    7.1% |
| 10 |   182.96 |   154.14 |    98.20 |     0.84 |    7.3% |
| 11 |   177.37 |   149.40 |    95.21 |     0.84 |    7.1% |
| 12 |   175.71 |   147.60 |    94.98 |     0.84 |    7.0% |
| 13 |   170.53 |   143.92 |    91.17 |     0.84 |    6.8% |
| 14 |   163.19 |   139.79 |    83.61 |     0.86 |    6.5% |
| 15 |   176.62 |   154.50 |    85.38 |     0.87 |    7.1% |
| 16 |   172.90 |   150.66 |    84.68 |     0.87 |    6.9% |
| 17 |   165.83 |   144.13 |    81.86 |     0.87 |    6.6% |
| 18 |   162.38 |   140.84 |    80.58 |     0.87 |    6.5% |
| 19 |   172.70 |   149.11 |    86.56 |     0.86 |    6.9% |
| 20 |   188.96 |   160.55 |    99.22 |     0.85 |    7.6% |
| 21 |   187.79 |   157.68 |   101.57 |     0.84 |    7.5% |
| 22 |   186.67 |   156.46 |   101.47 |     0.84 |    7.5% |
| 23 |   187.44 |   157.20 |   101.81 |     0.84 |    7.5% |

---

# END OF REPORT

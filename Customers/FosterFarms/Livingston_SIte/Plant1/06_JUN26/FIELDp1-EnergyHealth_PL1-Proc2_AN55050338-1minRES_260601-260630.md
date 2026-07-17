# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 400,020.8 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $78,004.07 (Cost per period)
- **Consumption Total Cost:** $108.34 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL1-Proc2  
**Generated:** 2026-07-07 04:14:41  
**Data Source:** AN55050338-V-260630.2359c.csv  

## Time Period

- **Period:** June 01, 2026 thru June 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,200

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

- **Transformer:** PL1-Proc2
- **Power Factor:** 0.861
- **Total Energy (Actual):** 400,020.85 kWh (per period), 555.58 kW (per hour)
- **Total Waste (Actual):** 58,640.40 kWh (per period), 81.45 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL1-Proc2_AN55050338-1minRES_260601-260630.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL1-Proc2_AN55050338-1minRES_260601-260630.md


## UNITY MANAGEMENT PL1-Proc2 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 81.45 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL1-Proc2 Utility Cost Offset:** $15.88/hour
- **Annual Offset Savings:** $139124/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 442,675 BTU/hr
- **Total Cooling kW No Longer Needed:** 38.93 kW
- **Cooling Energy Cost Avoided:** $7.59/hour
- **Annual Cooling Savings:** $66508/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 120.38 kW
- **CO2e Emissions Avoided:** 393.66 metric tons/year
- **Monthly CO2e Reduction:** 32.81 metric tons/month
- **Hourly CO2e Reduction:** 0.0449 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $14959/year

### Total PL1-Proc2 Unity Savings

- **Per Hour:** $25.18
- **Per Day:** $604.36
- **Per Month:** $18130.78
- **Per Year:** $220591

### PL1-Proc2 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 889.9 kVAR Max (Avg: 311.7 kVAR/hr ; 224,396 kVAR/mo)
- **Max Harmonic Distortion:** 33.5% Max (range: 3.0% - 33.5%)
- **Max Amperage:** 1,806A Max (range: 0A - 1806A)

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
| Line to Neutral Voltage (277v) |   184.26 |     0.00 |   192.04 |
| Line to Line Voltage (480v) |   319.15 |     0.00 |   332.62 |
| Current (AMPS) |   927.03 |     0.00 |  1805.92 |
| Phase Angle (degrees) |    30.42 |    26.75 |    90.00 |
| Total Harmonic Distortion (PCT) |    15.66 |     3.00 |    33.49 |

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
| THD Phase A (%) | 5.2% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.2% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.2% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 15.7% | Field-level stress indicator |
| Max Phase THD | 5.2% | Highest THD among all three phases |
| Min Phase THD | 5.2% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 911.25 kW
  - **Maximum Load:** 1,195.20 kVA
  - **Percentage of Capacity (MAX):** 47.8%
- **Average Load:** 637.03 kVA
  - **Percentage of Capacity (Avg):** 25.5%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 637.03 kVA
- **Average Power Factor (PF):** 0.861

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 512.44 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 319.15 V
- Average Current (Iavg_A): 927.03 A
- Average kW (Psum_kW): 555.58 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 124.59 kVA (19.6%)
- **Calculated PF (kW/kVA from averages):** 1.084
- **Power Factor Difference:** 0.223 (25.9%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (637.03) and measured PF (0.861) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   637.03 |        25.5% | 458,661.25 kVA | 1,895,733.25 TOTAL-HEAT |
| kW |   555.58 |        22.2% | 400,020.85 kWh | 242,371.81 Load-Heat |
| kVAR |   311.66 |        12.5% | 224,395.77 kVARh | - |
| WASTE |    81.45 |         3.3% | 58,640.40 WASTE | 35,530.10 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,895,733.25
- **Load-Heat (BTU/hr):** 242,371.81
- **Field-Heat (BTU/hr):** 35,530.10
- **Load-Heat (BTU, period total):** 174,507,704.19
- **Field-Heat (BTU, period total):** 25,581,671.01

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 6 |   637.03 |   555.58 |   310.96 |     0.87 |   25.5% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   687.44 |   602.07 |   331.05 |     0.88 |   27.5% |
| 01 |   674.49 |   589.96 |   326.16 |     0.87 |   27.0% |
| 02 |   684.12 |   598.46 |   330.87 |     0.87 |   27.4% |
| 03 |   679.80 |   594.13 |   329.58 |     0.87 |   27.2% |
| 04 |   680.48 |   594.53 |   330.32 |     0.87 |   27.2% |
| 05 |   679.52 |   593.71 |   329.61 |     0.87 |   27.2% |
| 06 |   678.12 |   592.78 |   328.72 |     0.87 |   27.1% |
| 07 |   667.32 |   583.17 |   323.58 |     0.87 |   26.7% |
| 08 |   677.18 |   592.59 |   327.06 |     0.88 |   27.1% |
| 09 |   685.61 |   600.32 |   330.71 |     0.88 |   27.4% |
| 10 |   678.09 |   593.63 |   327.32 |     0.88 |   27.1% |
| 11 |   695.25 |   609.23 |   334.59 |     0.88 |   27.8% |
| 12 |   693.50 |   608.25 |   332.77 |     0.88 |   27.7% |
| 13 |   678.19 |   595.35 |   324.44 |     0.88 |   27.1% |
| 14 |   651.13 |   569.84 |   314.44 |     0.88 |   26.0% |
| 15 |   613.29 |   535.45 |   298.52 |     0.87 |   24.5% |
| 16 |   556.02 |   481.73 |   277.16 |     0.87 |   22.2% |
| 17 |   455.05 |   388.85 |   235.94 |     0.85 |   18.2% |
| 18 |   446.48 |   381.01 |   232.20 |     0.85 |   17.9% |
| 19 |   539.36 |   465.00 |   272.67 |     0.86 |   21.6% |
| 20 |   620.34 |   538.30 |   307.71 |     0.87 |   24.8% |
| 21 |   588.08 |   509.39 |   293.26 |     0.87 |   23.5% |
| 22 |   604.72 |   525.64 |   298.07 |     0.87 |   24.2% |
| 23 |   675.14 |   590.66 |   326.30 |     0.87 |   27.0% |

---

# END OF REPORT

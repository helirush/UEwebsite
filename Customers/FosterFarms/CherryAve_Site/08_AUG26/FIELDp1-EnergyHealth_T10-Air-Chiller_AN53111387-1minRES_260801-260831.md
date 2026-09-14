# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 602,760.2 kWh (Usage per period)
- **Consumption Cost per unit:** $0.350/kWh (Cost per kWh)
- **Consumption Total Cost:** $210,966.06 (Cost per period)
- **Consumption Total Cost:** $283.56 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T10 Air Chiller  
**Generated:** 2026-09-10 23:18:15  
**Data Source:** AN53111387-V-1minRES_44640CLP_260801-260831c.csv  

## Time Period

- **Period:** August 01, 2026 thru August 31, 2026
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
- **Power Factor:** 0.895
- **Total Energy (Actual):** 602,760.16 kWh (per period), 810.16 kW (per hour)
- **Total Waste (Actual):** 80,303.73 kWh (per period), 107.94 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T10-Air-Chiller_AN53111387-1minRES_260801-260831.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T10-Air-Chiller_AN53111387-1minRES_260801-260831.md


## UNITY MANAGEMENT T10 Air Chiller SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 107.94 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 65.15 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.3500/kWh (all-inclusive)
- **T10 Air Chiller Utility Cost Offset:** $37.78/hour
- **Annual Offset Savings:** $330929/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 270,453 BTU/hr
- **Total Cooling kW No Longer Needed:** 24.39 kW
- **Cooling Energy Cost Avoided:** $8.54/hour
- **Annual Cooling Savings:** $74768/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 132.32 kW
- **CO2e Emissions Avoided:** 432.71 metric tons/year
- **Monthly CO2e Reduction:** 36.06 metric tons/month
- **Hourly CO2e Reduction:** 0.0494 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $16659/year

### Total T10 Air Chiller Unity Savings

- **Per Hour:** $48.21
- **Per Day:** $1157.14
- **Per Month:** $34714.25
- **Per Year:** $422357

### T10 Air Chiller Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 811.3 kVAR Max (Avg: 431.9 kVAR/hr ; 310,970 kVAR/mo)
- **Max Harmonic Distortion:** 30.7% Max (range: 3.0% - 30.7%)
- **Max Amperage:** 2,205A Max (range: 69A - 2205A)

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
| Line to Neutral Voltage (277v) |   264.28 |   251.23 |   282.13 |
| Line to Line Voltage (480v) |   457.74 |   435.14 |   488.66 |
| Current (AMPS) |  1182.11 |    69.14 |  2204.71 |
| Phase Angle (degrees) |    26.27 |    15.93 |    43.28 |
| Total Harmonic Distortion (PCT) |    15.22 |     3.00 |    30.71 |

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

- **Maximum UtilityDemand:** 1,512.61 kW
  - **Maximum Load:** 1,709.28 kVA
  - **Percentage of Capacity (MAX):** 68.4%
- **Average Load:** 918.10 kVA
  - **Percentage of Capacity (Avg):** 36.7%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 918.10 kVA
- **Average Power Factor (PF):** 0.895

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 937.21 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 457.74 V
- Average Current (Iavg_A): 1182.11 A
- Average kW (Psum_kW): 810.16 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 19.11 kVA (2.1%)
- **Calculated PF (kW/kVA from averages):** 0.864
- **Power Factor Difference:** 0.030 (3.4%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (918.10) and measured PF (0.895) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   918.10 |        36.7% | 683,063.89 kVA | 2,764,386.12 TOTAL-HEAT |
| kW |   810.16 |        32.4% | 602,760.16 kWh | 324,992.32 Load-Heat |
| kVAR |   431.90 |        17.3% | 321,335.45 kVARh | - |
| WASTE |   107.94 |         4.3% | 80,303.73 WASTE | 43,297.64 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,764,386.12
- **Load-Heat (BTU/hr):** 324,992.32
- **Field-Heat (BTU/hr):** 43,297.64
- **Load-Heat (BTU, period total):** 241,794,283.64
- **Field-Heat (BTU, period total):** 32,213,447.64

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 8 |   918.10 |   810.16 |   430.91 |     0.88 |   36.7% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,085.81 |   958.01 |   510.28 |     0.88 |   43.4% |
| 01 | 1,085.20 |   958.69 |   507.81 |     0.88 |   43.4% |
| 02 | 1,078.34 |   952.61 |   504.84 |     0.88 |   43.1% |
| 03 | 1,071.50 |   946.65 |   501.45 |     0.88 |   42.9% |
| 04 | 1,075.27 |   949.92 |   503.36 |     0.88 |   43.0% |
| 05 | 1,074.38 |   949.53 |   502.31 |     0.88 |   43.0% |
| 06 | 1,072.23 |   947.18 |   502.13 |     0.88 |   42.9% |
| 07 | 1,071.98 |   947.15 |   501.69 |     0.88 |   42.9% |
| 08 | 1,078.23 |   953.08 |   503.76 |     0.88 |   43.1% |
| 09 | 1,082.32 |   956.39 |   506.18 |     0.88 |   43.3% |
| 10 | 1,088.99 |   963.08 |   507.58 |     0.88 |   43.6% |
| 11 | 1,055.06 |   931.56 |   494.66 |     0.88 |   42.2% |
| 12 | 1,038.15 |   916.85 |   486.30 |     0.88 |   41.5% |
| 13 | 1,048.57 |   924.59 |   493.90 |     0.88 |   41.9% |
| 14 |   962.78 |   850.16 |   450.93 |     0.88 |   38.5% |
| 15 |   797.76 |   707.83 |   366.97 |     0.89 |   31.9% |
| 16 |   536.71 |   476.29 |   245.92 |     0.89 |   21.5% |
| 17 |   319.50 |   286.46 |   140.25 |     0.90 |   12.8% |
| 18 |   404.44 |   349.47 |   201.71 |     0.86 |   16.2% |
| 19 |   413.21 |   357.96 |   204.19 |     0.87 |   16.5% |
| 20 |   518.52 |   455.36 |   245.42 |     0.88 |   20.7% |
| 21 |   906.44 |   796.86 |   430.85 |     0.88 |   36.3% |
| 22 | 1,074.37 |   944.45 |   511.33 |     0.88 |   43.0% |
| 23 | 1,094.55 |   963.73 |   518.14 |     0.88 |   43.8% |

---

# END OF REPORT

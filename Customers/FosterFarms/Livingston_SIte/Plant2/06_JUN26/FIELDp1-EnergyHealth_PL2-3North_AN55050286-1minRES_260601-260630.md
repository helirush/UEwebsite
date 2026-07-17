# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 91,570.0 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $17,856.15 (Cost per period)
- **Consumption Total Cost:** $24.80 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL2-3North  
**Generated:** 2026-07-07 05:23:35  
**Data Source:** AN55050286-V-260630.2359c.csv  

## Time Period

- **Period:** June 01, 2026 thru June 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,192

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

- **Transformer:** PL2-3North
- **Power Factor:** 0.613
- **Total Energy (Actual):** 91,570.00 kWh (per period), 127.20 kW (per hour)
- **Total Waste (Actual):** 52,703.44 kWh (per period), 73.21 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL2-3North_AN55050286-1minRES_260601-260630.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL2-3North_AN55050286-1minRES_260601-260630.md


## UNITY MANAGEMENT PL2-3North SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 73.21 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL2-3North Utility Cost Offset:** $14.28/hour
- **Annual Offset Savings:** $125062/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 263,055 BTU/hr
- **Total Cooling kW No Longer Needed:** 23.14 kW
- **Cooling Energy Cost Avoided:** $4.51/hour
- **Annual Cooling Savings:** $39521/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 96.35 kW
- **CO2e Emissions Avoided:** 315.08 metric tons/year
- **Monthly CO2e Reduction:** 26.26 metric tons/month
- **Hourly CO2e Reduction:** 0.0360 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $11973/year

### Total PL2-3North Unity Savings

- **Per Hour:** $20.15
- **Per Day:** $483.72
- **Per Month:** $14511.48
- **Per Year:** $176556

### PL2-3North Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 380.2 kVAR Max (Avg: 154.9 kVAR/hr ; 111,509 kVAR/mo)
- **Max Harmonic Distortion:** 27.9% Max (range: 3.1% - 27.9%)
- **Max Amperage:** 630A Max (range: 19A - 630A)

---

# PL2-3North DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   282.00 |   272.14 |   292.84 |
| Line to Line Voltage (480v) |   488.43 |   471.36 |   507.21 |
| Current (AMPS) |   237.45 |    19.13 |   629.50 |
| Phase Angle (degrees) |    52.08 |    45.41 |    92.24 |
| Total Harmonic Distortion (PCT) |    14.11 |     3.07 |    27.95 |

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
| THD Phase A (%) | 4.7% | IEEE standard per-phase calculation |
| THD Phase B (%) | 4.7% | IEEE standard per-phase calculation |
| THD Phase C (%) | 4.7% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 14.1% | Field-level stress indicator |
| Max Phase THD | 4.7% | Highest THD among all three phases |
| Min Phase THD | 4.7% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 359.10 kW
  - **Maximum Load:** 522.95 kVA
  - **Percentage of Capacity (MAX):** 20.9%
- **Average Load:** 200.42 kVA
  - **Percentage of Capacity (Avg):** 8.0%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 200.42 kVA
- **Average Power Factor (PF):** 0.613

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 200.88 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 488.43 V
- Average Current (Iavg_A): 237.45 A
- Average kW (Psum_kW): 127.20 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.47 kVA (0.2%)
- **Calculated PF (kW/kVA from averages):** 0.633
- **Power Factor Difference:** 0.020 (3.2%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (200.42) and measured PF (0.613) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   200.42 |         8.0% | 144,273.44 kVA | 434,038.49 TOTAL-HEAT |
| kW |   127.20 |         5.1% | 91,570.00 kWh | 158,555.31 Load-Heat |
| kVAR |   154.87 |         6.2% | 111,488.83 kVARh | - |
| WASTE |    73.21 |         2.9% | 52,703.44 WASTE | 91,257.07 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 434,038.49
- **Load-Heat (BTU/hr):** 158,555.31
- **Field-Heat (BTU/hr):** 91,257.07
- **Load-Heat (BTU, period total):** 114,138,685.38
- **Field-Heat (BTU, period total):** 65,692,923.02

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 6 |   200.42 |   127.20 |   154.49 |     0.63 |    8.0% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   206.90 |   133.43 |   157.80 |     0.64 |    8.3% |
| 01 |   203.20 |   130.15 |   155.80 |     0.64 |    8.1% |
| 02 |   197.60 |   126.71 |   151.40 |     0.64 |    7.9% |
| 03 |   196.49 |   126.07 |   150.47 |     0.64 |    7.9% |
| 04 |   199.60 |   128.82 |   152.17 |     0.65 |    8.0% |
| 05 |   200.61 |   129.51 |   152.89 |     0.65 |    8.0% |
| 06 |   208.89 |   136.41 |   157.92 |     0.65 |    8.4% |
| 07 |   220.07 |   143.45 |   166.60 |     0.65 |    8.8% |
| 08 |   220.13 |   142.94 |   167.12 |     0.65 |    8.8% |
| 09 |   221.13 |   143.93 |   167.57 |     0.65 |    8.8% |
| 10 |   215.80 |   139.26 |   164.50 |     0.65 |    8.6% |
| 11 |   215.49 |   139.54 |   163.82 |     0.65 |    8.6% |
| 12 |   209.57 |   135.20 |   159.78 |     0.65 |    8.4% |
| 13 |   199.98 |   129.02 |   152.47 |     0.65 |    8.0% |
| 14 |   195.42 |   124.41 |   150.38 |     0.64 |    7.8% |
| 15 |   183.55 |   112.67 |   144.69 |     0.61 |    7.3% |
| 16 |   186.34 |   113.91 |   147.25 |     0.61 |    7.5% |
| 17 |   184.49 |   110.46 |   147.57 |     0.60 |    7.4% |
| 18 |   175.98 |   101.67 |   143.41 |     0.58 |    7.0% |
| 19 |   171.17 |    99.39 |   139.02 |     0.58 |    6.8% |
| 20 |   180.50 |   110.33 |   142.51 |     0.61 |    7.2% |
| 21 |   202.09 |   128.37 |   155.76 |     0.64 |    8.1% |
| 22 |   208.76 |   134.32 |   159.41 |     0.64 |    8.4% |
| 23 |   206.24 |   132.91 |   157.34 |     0.64 |    8.2% |

---

# END OF REPORT

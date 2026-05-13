# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 59,851.9 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $11,671.11 (Cost per period)
- **Consumption Total Cost:** $26.47 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL2-3North  
**Generated:** 2026-04-25 17:57:28  
**Data Source:** AN55050286-V-1minRES_26460CLP_260313-260331c.csv  

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

- **Transformer:** PL2-3North
- **Power Factor:** 0.607
- **Total Energy (Actual):** 59,851.86 kWh (19 days), 135.72 kW (per hour)
- **Total Energy (Monthly Equivalent):** 97,653.04 kWh
- **Total Waste (Actual):** 33,768.19 kWh (19 days), 76.57 kW (per hour)
- **Total Waste (Monthly Equivalent):** 55,095.48 kWh

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL2-3North_AN55050286-1minRES_260313-260331.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL2-3North_AN55050286-1minRES_260313-260331.md


## UNITY MANAGEMENT PL2-3North SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 76.57 kW/hr (actual)
- **Monthly Equivalent Waste:** 124.93 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL2-3North Utility Cost Offset (Monthly Equivalent):** $24.36/hour
- **Annual Offset Savings:** $130800/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 275,434 BTU/hr
- **Total Cooling kW No Longer Needed:** 24.13 kW
- **Cooling Energy Cost Avoided:** $4.70/hour
- **Annual Cooling Savings:** $41214/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 100.70 kW
- **CO2e Emissions Avoided:** 329.30 metric tons/year
- **Monthly CO2e Reduction:** 27.44 metric tons/month
- **Hourly CO2e Reduction:** 0.0376 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $12678/year

### Total PL2-3North Unity Savings

- **Per Hour:** $21.08
- **Per Day:** $506.01
- **Per Month:** $15180.21
- **Per Year:** $184693

### PL2-3North Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 374.4 kVAR Max (Avg: 163.2 kVAR/hr ; 117,534 kVAR/mo)
- **Max Harmonic Distortion:** 30.8% Max (range: 3.0% - 30.8%)
- **Max Amperage:** 609A Max (range: 0A - 609A)

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
| Line to Neutral Voltage (277v) |   282.04 |     0.00 |   290.26 |
| Line to Line Voltage (480v) |   488.50 |     0.00 |   502.74 |
| Current (AMPS) |   251.64 |     0.00 |   609.06 |
| Phase Angle (degrees) |    52.49 |    46.45 |    90.00 |
| Total Harmonic Distortion (PCT) |    14.32 |     3.01 |    30.81 |

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
| THD Phase A (%) | 4.8% | IEEE standard per-phase calculation |
| THD Phase B (%) | 4.8% | IEEE standard per-phase calculation |
| THD Phase C (%) | 4.8% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 14.3% | Field-level stress indicator |
| Max Phase THD | 4.8% | Highest THD among all three phases |
| Min Phase THD | 4.8% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 349.23 kW
  - **Maximum Load:** 510.96 kVA
  - **Percentage of Capacity (MAX):** 20.4%
- **Average Load:** 212.29 kVA
  - **Percentage of Capacity (Avg):** 8.5%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 212.29 kVA
- **Average Power Factor (PF):** 0.607

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 212.92 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 488.50 V
- Average Current (Iavg_A): 251.64 A
- Average kW (Psum_kW): 135.72 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.63 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.637
- **Power Factor Difference:** 0.030 (4.9%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (212.29) and measured PF (0.607) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   212.29 |         8.5% | 93,620.06 kVA | 463,090.84 TOTAL-HEAT |
| kW |   135.72 |         5.4% | 59,851.86 kWh | 167,034.09 Load-Heat |
| kVAR |   163.24 |         6.5% | 71,989.37 kVARh | - |
| WASTE |    76.57 |         3.1% | 33,768.19 WASTE | 94,240.00 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 463,090.84
- **Load-Heat (BTU/hr):** 167,034.09
- **Field-Heat (BTU/hr):** 94,240.00
- **Load-Heat (BTU, period total):** 73,662,035.16
- **Field-Heat (BTU, period total):** 41,559,840.58

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 3 |   212.29 |   135.72 |   163.00 |     0.64 |    8.5% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   219.63 |   142.07 |   167.34 |     0.65 |    8.8% |
| 01 |   213.39 |   137.55 |   163.04 |     0.64 |    8.5% |
| 02 |   213.49 |   137.88 |   162.88 |     0.65 |    8.5% |
| 03 |   211.68 |   136.19 |   161.92 |     0.64 |    8.5% |
| 04 |   214.24 |   138.54 |   163.28 |     0.65 |    8.6% |
| 05 |   221.48 |   143.80 |   168.31 |     0.65 |    8.9% |
| 06 |   215.68 |   139.89 |   164.01 |     0.65 |    8.6% |
| 07 |   213.91 |   138.17 |   163.16 |     0.65 |    8.6% |
| 08 |   222.23 |   144.58 |   168.62 |     0.65 |    8.9% |
| 09 |   230.44 |   149.77 |   174.96 |     0.65 |    9.2% |
| 10 |   227.48 |   147.92 |   172.64 |     0.65 |    9.1% |
| 11 |   232.57 |   150.67 |   176.95 |     0.65 |    9.3% |
| 12 |   232.85 |   150.76 |   177.25 |     0.65 |    9.3% |
| 13 |   224.79 |   145.84 |   170.91 |     0.65 |    9.0% |
| 14 |   223.27 |   143.18 |   171.15 |     0.64 |    8.9% |
| 15 |   216.96 |   136.97 |   168.11 |     0.63 |    8.7% |
| 16 |   211.44 |   132.07 |   164.90 |     0.62 |    8.5% |
| 17 |   192.44 |   117.73 |   152.02 |     0.61 |    7.7% |
| 18 |   147.59 |    86.00 |   119.72 |     0.58 |    5.9% |
| 19 |   143.72 |    83.99 |   116.31 |     0.58 |    5.7% |
| 20 |   196.74 |   123.62 |   152.80 |     0.63 |    7.9% |
| 21 |   223.93 |   143.84 |   171.38 |     0.64 |    9.0% |
| 22 |   228.64 |   147.63 |   174.36 |     0.65 |    9.1% |
| 23 |   223.36 |   144.47 |   170.16 |     0.65 |    8.9% |

---

# END OF REPORT

# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 166,747.8 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $32,515.82 (Cost per period)
- **Consumption Total Cost:** $43.70 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL2-2Center  
**Generated:** 2026-08-02 22:16:37  
**Data Source:** AN55050368-V-1minRES_44640CLP_260701-260731c.csv  

## Time Period

- **Period:** July 01, 2026 thru July 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,640

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

- **Transformer:** PL2-2Center
- **Power Factor:** 0.866
- **Total Energy (Actual):** 166,747.79 kWh (per period), 224.12 kW (per hour)
- **Total Waste (Actual):** 26,389.80 kWh (per period), 35.47 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL2-2Center_AN55050368-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL2-2Center_AN55050368-1minRES_260701-260731.md


## UNITY MANAGEMENT PL2-2Center SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 35.47 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 20.93 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL2-2Center Utility Cost Offset:** $6.92/hour
- **Annual Offset Savings:** $60590/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 75,798 BTU/hr
- **Total Cooling kW No Longer Needed:** 6.76 kW
- **Cooling Energy Cost Avoided:** $1.32/hour
- **Annual Cooling Savings:** $11542/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 42.23 kW
- **CO2e Emissions Avoided:** 138.09 metric tons/year
- **Monthly CO2e Reduction:** 11.51 metric tons/month
- **Hourly CO2e Reduction:** 0.0158 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $5247/year

### Total PL2-2Center Unity Savings

- **Per Hour:** $8.83
- **Per Day:** $212.00
- **Per Month:** $6359.92
- **Per Year:** $77379

### PL2-2Center Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 235.7 kVAR Max (Avg: 131.0 kVAR/hr ; 94,310 kVAR/mo)
- **Max Harmonic Distortion:** 32.7% Max (range: 3.0% - 32.7%)
- **Max Amperage:** 546A Max (range: 0A - 546A)

---

# PL2-2Center DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   280.36 |     0.00 |   290.93 |
| Line to Line Voltage (480v) |   485.60 |     0.00 |   503.91 |
| Current (AMPS) |   309.26 |     0.00 |   546.14 |
| Phase Angle (degrees) |    29.94 |    22.93 |    90.00 |
| Total Harmonic Distortion (PCT) |    15.58 |     3.00 |    32.74 |

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
| Unity THD Composite (%) | 15.6% | Field-level stress indicator |
| Max Phase THD | 5.2% | Highest THD among all three phases |
| Min Phase THD | 5.2% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 375.90 kW
  - **Maximum Load:** 439.70 kVA
  - **Percentage of Capacity (MAX):** 17.6%
- **Average Load:** 259.59 kVA
  - **Percentage of Capacity (Avg):** 10.4%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 259.59 kVA
- **Average Power Factor (PF):** 0.866

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 260.12 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 485.60 V
- Average Current (Iavg_A): 309.26 A
- Average kW (Psum_kW): 224.12 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.52 kVA (0.2%)
- **Calculated PF (kW/kVA from averages):** 0.862
- **Power Factor Difference:** 0.004 (0.5%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (259.59) and measured PF (0.866) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   259.59 |        10.4% | 193,137.60 kVA | 764,740.80 TOTAL-HEAT |
| kW |   224.12 |         9.0% | 166,747.79 kWh | 104,492.13 Load-Heat |
| kVAR |   130.99 |         5.2% | 97,454.12 kVARh | - |
| WASTE |    35.47 |         1.4% | 26,389.80 WASTE | 16,537.11 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 764,740.80
- **Load-Heat (BTU/hr):** 104,492.13
- **Field-Heat (BTU/hr):** 16,537.11
- **Load-Heat (BTU, period total):** 77,742,146.61
- **Field-Heat (BTU, period total):** 12,303,610.90

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 |   259.59 |   224.12 |   130.65 |     0.86 |   10.4% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   265.49 |   229.73 |   132.72 |     0.87 |   10.6% |
| 01 |   292.06 |   252.82 |   146.08 |     0.87 |   11.7% |
| 02 |   287.01 |   247.99 |   144.32 |     0.86 |   11.5% |
| 03 |   290.39 |   250.84 |   146.16 |     0.86 |   11.6% |
| 04 |   292.63 |   253.24 |   146.50 |     0.87 |   11.7% |
| 05 |   288.07 |   250.09 |   142.79 |     0.87 |   11.5% |
| 06 |   284.88 |   247.25 |   141.29 |     0.87 |   11.4% |
| 07 |   286.03 |   248.11 |   142.11 |     0.87 |   11.4% |
| 08 |   291.13 |   250.49 |   148.06 |     0.86 |   11.6% |
| 09 |   288.19 |   243.27 |   154.16 |     0.84 |   11.5% |
| 10 |   295.76 |   252.41 |   153.98 |     0.85 |   11.8% |
| 11 |   285.26 |   243.57 |   148.23 |     0.85 |   11.4% |
| 12 |   267.38 |   229.19 |   137.48 |     0.86 |   10.7% |
| 13 |   243.88 |   210.64 |   122.61 |     0.86 |    9.8% |
| 14 |   221.51 |   193.27 |   108.00 |     0.87 |    8.9% |
| 15 |   206.83 |   181.38 |    99.10 |     0.88 |    8.3% |
| 16 |   206.98 |   182.17 |    98.08 |     0.88 |    8.3% |
| 17 |   195.09 |   172.31 |    91.30 |     0.88 |    7.8% |
| 18 |   168.59 |   147.40 |    81.52 |     0.87 |    6.7% |
| 19 |   191.81 |   163.41 |    99.71 |     0.85 |    7.7% |
| 20 |   259.86 |   221.41 |   135.50 |     0.85 |   10.4% |
| 21 |   264.73 |   227.19 |   135.64 |     0.86 |   10.6% |
| 22 |   272.88 |   234.94 |   138.53 |     0.86 |   10.9% |
| 23 |   283.81 |   245.86 |   141.65 |     0.87 |   11.4% |

---

# END OF REPORT

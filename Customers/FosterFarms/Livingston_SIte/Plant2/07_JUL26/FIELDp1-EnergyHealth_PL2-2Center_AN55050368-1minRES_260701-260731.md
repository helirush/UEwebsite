# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 166,747.8 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $32,515.82 (Cost per period)
- **Consumption Total Cost:** $43.73 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL2-2Center  
**Generated:** 2026-09-10 19:31:27  
**Data Source:** AN55050368-V-1minRES_44640CLP_260701-260731c.csv  

## Time Period

- **Period:** July 01, 2026 thru July 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,610

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
- **Total Energy (Actual):** 166,747.79 kWh (per period), 224.27 kW (per hour)
- **Total Waste (Actual):** 26,389.80 kWh (per period), 35.49 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL2-2Center_AN55050368-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL2-2Center_AN55050368-1minRES_260701-260731.md


## UNITY MANAGEMENT PL2-2Center SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 35.49 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 20.91 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL2-2Center Utility Cost Offset:** $6.92/hour
- **Annual Offset Savings:** $60631/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 75,747 BTU/hr
- **Total Cooling kW No Longer Needed:** 6.75 kW
- **Cooling Energy Cost Avoided:** $1.32/hour
- **Annual Cooling Savings:** $11534/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 42.25 kW
- **CO2e Emissions Avoided:** 138.15 metric tons/year
- **Monthly CO2e Reduction:** 11.51 metric tons/month
- **Hourly CO2e Reduction:** 0.0158 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $5250/year

### Total PL2-2Center Unity Savings

- **Per Hour:** $8.84
- **Per Day:** $212.09
- **Per Month:** $6362.81
- **Per Year:** $77414

### PL2-2Center Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 235.7 kVAR Max (Avg: 131.1 kVAR/hr ; 94,374 kVAR/mo)
- **Max Harmonic Distortion:** 32.7% Max (range: 3.0% - 32.7%)
- **Max Amperage:** 546A Max (range: 72A - 546A)

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
| Line to Neutral Voltage (277v) |   280.55 |   270.79 |   290.93 |
| Line to Line Voltage (480v) |   485.93 |   469.02 |   503.91 |
| Current (AMPS) |   309.47 |    72.13 |   546.14 |
| Phase Angle (degrees) |    29.90 |    22.93 |    43.28 |
| Total Harmonic Distortion (PCT) |    15.59 |     3.00 |    32.74 |

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
- **Average Load:** 259.77 kVA
  - **Percentage of Capacity (Avg):** 10.4%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 259.77 kVA
- **Average Power Factor (PF):** 0.866

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 260.47 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 485.93 V
- Average Current (Iavg_A): 309.47 A
- Average kW (Psum_kW): 224.27 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.70 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.861
- **Power Factor Difference:** 0.005 (0.6%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (259.77) and measured PF (0.866) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   259.77 |        10.4% | 193,137.60 kVA | 765,255.08 TOTAL-HEAT |
| kW |   224.27 |         9.0% | 166,747.79 kWh | 104,562.40 Load-Heat |
| kVAR |   131.07 |         5.2% | 97,454.12 kVARh | - |
| WASTE |    35.49 |         1.4% | 26,389.80 WASTE | 16,548.23 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 765,255.08
- **Load-Heat (BTU/hr):** 104,562.40
- **Field-Heat (BTU/hr):** 16,548.23
- **Load-Heat (BTU, period total):** 77,742,146.61
- **Field-Heat (BTU, period total):** 12,303,610.90

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 |   259.77 |   224.27 |   130.74 |     0.86 |   10.4% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   265.92 |   230.10 |   132.93 |     0.87 |   10.6% |
| 01 |   292.22 |   252.95 |   146.16 |     0.87 |   11.7% |
| 02 |   287.01 |   247.99 |   144.32 |     0.86 |   11.5% |
| 03 |   290.39 |   250.84 |   146.16 |     0.86 |   11.6% |
| 04 |   292.79 |   253.38 |   146.58 |     0.87 |   11.7% |
| 05 |   288.23 |   250.22 |   142.87 |     0.87 |   11.5% |
| 06 |   285.03 |   247.38 |   141.36 |     0.87 |   11.4% |
| 07 |   286.03 |   248.11 |   142.11 |     0.87 |   11.4% |
| 08 |   291.28 |   250.63 |   148.14 |     0.86 |   11.7% |
| 09 |   288.19 |   243.27 |   154.16 |     0.84 |   11.5% |
| 10 |   295.76 |   252.41 |   153.98 |     0.85 |   11.8% |
| 11 |   285.41 |   243.70 |   148.31 |     0.85 |   11.4% |
| 12 |   267.81 |   229.56 |   137.70 |     0.86 |   10.7% |
| 13 |   244.01 |   210.75 |   122.67 |     0.86 |    9.8% |
| 14 |   221.51 |   193.27 |   108.00 |     0.87 |    8.9% |
| 15 |   206.94 |   181.48 |    99.16 |     0.88 |    8.3% |
| 16 |   207.09 |   182.26 |    98.13 |     0.88 |    8.3% |
| 17 |   195.30 |   172.50 |    91.40 |     0.88 |    7.8% |
| 18 |   168.77 |   147.55 |    81.61 |     0.87 |    6.8% |
| 19 |   191.91 |   163.50 |    99.76 |     0.85 |    7.7% |
| 20 |   259.86 |   221.41 |   135.50 |     0.85 |   10.4% |
| 21 |   265.30 |   227.68 |   135.94 |     0.86 |   10.6% |
| 22 |   273.02 |   235.07 |   138.61 |     0.86 |   10.9% |
| 23 |   284.57 |   246.52 |   142.04 |     0.87 |   11.4% |

---

# END OF REPORT

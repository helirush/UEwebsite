# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 246,056.0 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $47,980.91 (Cost per period)
- **Consumption Total Cost:** $66.65 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL2-2Center  
**Generated:** 2026-10-08 00:53:51  
**Data Source:** AN55050368-V-260930.2359c.csv  

## Time Period

- **Period:** September 01, 2026 thru September 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,194

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

- **Transformer:** PL2-2Center
- **Power Factor:** 0.875
- **Total Energy (Actual):** 246,055.96 kWh (per period), 341.79 kW (per hour)
- **Total Waste (Actual):** 34,044.81 kWh (per period), 47.29 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL2-2Center_AN55050368-1minRES_260901-260930.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL2-2Center_AN55050368-1minRES_260901-260930.md


## UNITY MANAGEMENT PL2-2Center SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 47.29 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 27.29 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL2-2Center Utility Cost Offset:** $9.22/hour
- **Annual Offset Savings:** $80783/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 98,915 BTU/hr
- **Total Cooling kW No Longer Needed:** 8.66 kW
- **Cooling Energy Cost Avoided:** $1.69/hour
- **Annual Cooling Savings:** $14785/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 55.95 kW
- **CO2e Emissions Avoided:** 182.95 metric tons/year
- **Monthly CO2e Reduction:** 15.25 metric tons/month
- **Hourly CO2e Reduction:** 0.0209 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $6952/year

### Total PL2-2Center Unity Savings

- **Per Hour:** $11.70
- **Per Day:** $280.87
- **Per Month:** $8426.24
- **Per Year:** $102519

### PL2-2Center Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 302.5 kVAR Max (Avg: 185.9 kVAR/hr ; 133,858 kVAR/mo)
- **Max Harmonic Distortion:** 32.7% Max (range: 3.0% - 32.7%)
- **Max Amperage:** 767A Max (range: 92A - 767A)

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
| Line to Neutral Voltage (277v) |   278.93 |   268.34 |   291.01 |
| Line to Line Voltage (480v) |   483.12 |   464.79 |   504.04 |
| Current (AMPS) |   466.50 |    91.79 |   766.62 |
| Phase Angle (degrees) |    28.84 |    22.63 |    42.78 |
| Total Harmonic Distortion (PCT) |    15.74 |     3.01 |    32.73 |

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

- **Maximum UtilityDemand:** 547.81 kW
  - **Maximum Load:** 617.71 kVA
  - **Percentage of Capacity (MAX):** 24.7%
- **Average Load:** 389.08 kVA
  - **Percentage of Capacity (Avg):** 15.6%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 389.08 kVA
- **Average Power Factor (PF):** 0.875

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 390.36 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 483.12 V
- Average Current (Iavg_A): 466.50 A
- Average kW (Psum_kW): 341.79 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 1.28 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.876
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (389.08) and measured PF (0.875) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   389.08 |        15.6% | 280,100.77 kVA | 1,166,242.36 TOTAL-HEAT |
| kW |   341.79 |        13.7% | 246,055.96 kWh | 141,750.77 Load-Heat |
| kVAR |   185.91 |         7.4% | 133,839.10 kVARh | - |
| WASTE |    47.29 |         1.9% | 34,044.81 WASTE | 19,612.93 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,166,242.36
- **Load-Heat (BTU/hr):** 141,750.77
- **Field-Heat (BTU/hr):** 19,612.93
- **Load-Heat (BTU, period total):** 102,046,378.02
- **Field-Heat (BTU, period total):** 14,119,347.24

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 9 |   389.08 |   341.79 |   185.41 |     0.88 |   15.6% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   384.27 |   338.98 |   180.47 |     0.88 |   15.4% |
| 01 |   422.75 |   369.58 |   204.98 |     0.87 |   16.9% |
| 02 |   417.90 |   364.98 |   203.22 |     0.87 |   16.7% |
| 03 |   419.54 |   366.08 |   204.64 |     0.87 |   16.8% |
| 04 |   416.44 |   364.74 |   200.59 |     0.88 |   16.7% |
| 05 |   415.57 |   364.81 |   198.63 |     0.88 |   16.6% |
| 06 |   415.86 |   364.88 |   199.16 |     0.88 |   16.6% |
| 07 |   416.38 |   365.43 |   199.30 |     0.88 |   16.7% |
| 08 |   424.79 |   371.31 |   206.02 |     0.87 |   17.0% |
| 09 |   420.27 |   363.69 |   210.26 |     0.87 |   16.8% |
| 10 |   426.04 |   371.24 |   208.67 |     0.87 |   17.0% |
| 11 |   407.37 |   357.17 |   195.32 |     0.88 |   16.3% |
| 12 |   384.72 |   338.34 |   182.55 |     0.88 |   15.4% |
| 13 |   352.84 |   313.32 |   161.75 |     0.89 |   14.1% |
| 14 |   345.95 |   307.47 |   158.11 |     0.89 |   13.8% |
| 15 |   333.46 |   297.42 |   150.05 |     0.89 |   13.3% |
| 16 |   327.75 |   292.08 |   148.25 |     0.89 |   13.1% |
| 17 |   316.65 |   282.61 |   142.32 |     0.89 |   12.7% |
| 18 |   284.12 |   250.74 |   133.09 |     0.88 |   11.4% |
| 19 |   324.24 |   284.31 |   155.10 |     0.88 |   13.0% |
| 20 |   407.06 |   355.16 |   198.51 |     0.87 |   16.3% |
| 21 |   417.82 |   366.38 |   200.57 |     0.88 |   16.7% |
| 22 |   422.93 |   371.18 |   202.41 |     0.88 |   16.9% |
| 23 |   433.19 |   381.03 |   205.80 |     0.88 |   17.3% |

---

# END OF REPORT

# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 65,987.6 kWh (Usage per period)
- **Consumption Cost per unit:** $0.120/kWh (Cost per kWh)
- **Consumption Total Cost:** $7,918.51 (Cost per period)
- **Consumption Total Cost:** $11.00 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Site Transformer  
**Generated:** 2026-10-11 02:04:48  
**Data Source:** AN21113351-V-1minRES_43200CLP_260901-260930c.csv  

## Time Period

- **Period:** September 01, 2026 thru September 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,200

- **Dataset Coverage:** Complete month (100.0% of 30-day month)
- **Billing Scale Factor:** 1.000x (no normalization needed)

## Facility Information

- **Facility:** ARMI Manufacturing
- **Location:** Fayetteville Facility
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** Site Transformer
- **Power Factor:** 0.892
- **Total Energy (Actual):** 65,987.62 kWh (per period), 91.65 kW (per hour)
- **Total Waste (Actual):** 2,897.28 kWh (per period), 4.02 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Site-Transformer_AN21113351-1minRES_260901-260930.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Site-Transformer_AN21113351-1minRES_260901-260930.md


## UNITY MANAGEMENT Site Transformer SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 4.02 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 2.08 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1200/kWh (all-inclusive)
- **Site Transformer Utility Cost Offset:** $0.48/hour
- **Annual Offset Savings:** $4230/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 7,156 BTU/hr
- **Total Cooling kW No Longer Needed:** 0.66 kW
- **Cooling Energy Cost Avoided:** $0.08/hour
- **Annual Cooling Savings:** $693/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 4.68 kW
- **CO2e Emissions Avoided:** 15.32 metric tons/year
- **Monthly CO2e Reduction:** 1.28 metric tons/month
- **Hourly CO2e Reduction:** 0.0017 metric tons/hour
- **CO2e Value Rate:** $0/metric ton
- **Annual CO2e Value:** $0/year

### Total Site Transformer Unity Savings

- **Per Hour:** $0.56
- **Per Day:** $13.49
- **Per Month:** $404.67
- **Per Year:** $4923

### Site Transformer Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 65.1 kVAR Max (Avg: 27.5 kVAR/hr ; 19,768 kVAR/mo)
- **Max Harmonic Distortion:** 60.5% Max (range: 0.0% - 60.5%)
- **Max Amperage:** 363A Max (range: 22A - 363A)

---

# Site Transformer DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   284.71 |   279.41 |   289.84 |
| Line to Line Voltage (480v) |   493.13 |   483.95 |   502.01 |
| Current (AMPS) |   112.63 |    22.49 |   362.78 |
| Phase Angle (degrees) |    22.83 |     3.28 |    61.14 |
| Total Harmonic Distortion (PCT) |     4.38 |     0.00 |    60.53 |

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
| THD Phase A (%) | 1.4% | IEEE standard per-phase calculation |
| THD Phase B (%) | 1.7% | IEEE standard per-phase calculation |
| THD Phase C (%) | 1.3% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 4.4% | Field-level stress indicator |
| Max Phase THD | 1.7% | Highest THD among all three phases |
| Min Phase THD | 1.3% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 301.95 kW
  - **Maximum Load:** 307.48 kVA
  - **Percentage of Capacity (MAX):** 12.3%
- **Average Load:** 95.67 kVA
  - **Percentage of Capacity (Avg):** 3.8%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 95.67 kVA
- **Average Power Factor (PF):** 0.892

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 96.20 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 493.13 V
- Average Current (Iavg_A): 112.63 A
- Average kW (Psum_kW): 91.65 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.53 kVA (0.6%)
- **Calculated PF (kW/kVA from averages):** 0.953
- **Power Factor Difference:** 0.061 (6.9%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (95.67) and measured PF (0.892) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |    95.67 |         3.8% | 68,884.90 kVA | 312,721.01 TOTAL-HEAT |
| kW |    91.65 |         3.7% | 65,987.62 kWh | 13,152.98 Load-Heat |
| kVAR |    27.46 |         1.1% | 19,767.75 kVARh | - |
| WASTE |     4.02 |         0.2% | 2,897.28 WASTE | 577.50 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 312,721.01
- **Load-Heat (BTU/hr):** 13,152.98
- **Field-Heat (BTU/hr):** 577.50
- **Load-Heat (BTU, period total):** 9,470,146.86
- **Field-Heat (BTU, period total):** 415,800.95

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 9 |    95.67 |    91.65 |    20.65 |     0.96 |    3.8% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |    32.74 |    27.27 |    17.25 |     0.83 |    1.3% |
| 01 |    32.31 |    26.63 |    17.45 |     0.82 |    1.3% |
| 02 |    31.66 |    25.89 |    17.37 |     0.82 |    1.3% |
| 03 |    31.17 |    25.45 |    17.20 |     0.82 |    1.2% |
| 04 |    34.79 |    29.19 |    17.29 |     0.84 |    1.4% |
| 05 |    89.62 |    86.50 |    17.06 |     0.97 |    3.6% |
| 06 |   148.52 |   146.19 |    20.49 |     0.98 |    5.9% |
| 07 |   157.09 |   154.71 |    21.34 |     0.98 |    6.3% |
| 08 |   163.75 |   161.51 |    21.97 |     0.99 |    6.6% |
| 09 |   167.43 |   165.18 |    23.53 |     0.99 |    6.7% |
| 10 |   175.14 |   172.68 |    25.53 |     0.99 |    7.0% |
| 11 |   174.53 |   172.15 |    25.38 |     0.99 |    7.0% |
| 12 |   174.00 |   171.54 |    25.17 |     0.99 |    7.0% |
| 13 |   177.91 |   175.21 |    27.04 |     0.98 |    7.1% |
| 14 |   162.16 |   159.27 |    26.29 |     0.98 |    6.5% |
| 15 |   141.02 |   138.57 |    21.72 |     0.98 |    5.6% |
| 16 |   120.18 |   117.70 |    19.36 |     0.98 |    4.8% |
| 17 |    48.37 |    43.88 |    19.41 |     0.91 |    1.9% |
| 18 |    45.22 |    40.22 |    19.65 |     0.89 |    1.8% |
| 19 |    42.64 |    36.87 |    20.33 |     0.86 |    1.7% |
| 20 |    40.24 |    34.00 |    20.51 |     0.84 |    1.6% |
| 21 |    37.32 |    31.30 |    19.29 |     0.84 |    1.5% |
| 22 |    34.89 |    29.52 |    17.72 |     0.85 |    1.4% |
| 23 |    33.48 |    28.14 |    17.30 |     0.84 |    1.3% |

---

# END OF REPORT

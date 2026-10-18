# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 74,339.2 kWh (Usage per period)
- **Consumption Cost per unit:** $0.120/kWh (Cost per kWh)
- **Consumption Total Cost:** $8,920.71 (Cost per period)
- **Consumption Total Cost:** $11.99 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Site Transformer  
**Generated:** 2026-10-11 02:04:39  
**Data Source:** AN21113351-V-1minRES_44640CLP_260701-260731c.csv  

## Time Period

- **Period:** July 01, 2026 thru July 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,640

- **Dataset Coverage:** Complete month (100.0% of 31-day month)
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
- **Power Factor:** 0.907
- **Total Energy (Actual):** 74,339.23 kWh (per period), 99.92 kW (per hour)
- **Total Waste (Actual):** 3,066.19 kWh (per period), 4.12 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Site-Transformer_AN21113351-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Site-Transformer_AN21113351-1minRES_260701-260731.md


## UNITY MANAGEMENT Site Transformer SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 4.12 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 2.04 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1200/kWh (all-inclusive)
- **Site Transformer Utility Cost Offset:** $0.49/hour
- **Annual Offset Savings:** $4332/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 7,021 BTU/hr
- **Total Cooling kW No Longer Needed:** 0.68 kW
- **Cooling Energy Cost Avoided:** $0.08/hour
- **Annual Cooling Savings:** $714/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 4.80 kW
- **CO2e Emissions Avoided:** 15.70 metric tons/year
- **Monthly CO2e Reduction:** 1.31 metric tons/month
- **Hourly CO2e Reduction:** 0.0018 metric tons/hour
- **CO2e Value Rate:** $0/metric ton
- **Annual CO2e Value:** $0/year

### Total Site Transformer Unity Savings

- **Per Hour:** $0.58
- **Per Day:** $13.83
- **Per Month:** $414.79
- **Per Year:** $5047

### Site Transformer Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 102.8 kVAR Max (Avg: 29.0 kVAR/hr ; 20,874 kVAR/mo)
- **Max Harmonic Distortion:** 101.2% Max (range: 0.0% - 101.2%)
- **Max Amperage:** 357A Max (range: 23A - 357A)

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
| Line to Neutral Voltage (277v) |   284.55 |   279.59 |   289.05 |
| Line to Line Voltage (480v) |   492.85 |   484.26 |   500.65 |
| Current (AMPS) |   122.56 |    22.95 |   357.48 |
| Phase Angle (degrees) |    21.54 |     3.62 |    68.00 |
| Total Harmonic Distortion (PCT) |     4.32 |     0.00 |   101.25 |

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
| THD Phase B (%) | 1.6% | IEEE standard per-phase calculation |
| THD Phase C (%) | 1.3% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 4.3% | Field-level stress indicator |
| Max Phase THD | 1.6% | Highest THD among all three phases |
| Min Phase THD | 1.3% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 296.25 kW
  - **Maximum Load:** 300.05 kVA
  - **Percentage of Capacity (MAX):** 12.0%
- **Average Load:** 104.04 kVA
  - **Percentage of Capacity (Avg):** 4.2%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 104.04 kVA
- **Average Power Factor (PF):** 0.907

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 104.62 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 492.85 V
- Average Current (Iavg_A): 122.56 A
- Average kW (Psum_kW): 99.92 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.58 kVA (0.6%)
- **Calculated PF (kW/kVA from averages):** 0.955
- **Power Factor Difference:** 0.048 (5.3%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (104.04) and measured PF (0.907) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   104.04 |         4.2% | 77,405.42 kVA | 340,935.48 TOTAL-HEAT |
| kW |    99.92 |         4.0% | 74,339.23 kWh | 13,505.18 Load-Heat |
| kVAR |    28.99 |         1.2% | 21,570.31 kVARh | - |
| WASTE |     4.12 |         0.2% | 3,066.19 WASTE | 557.03 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 340,935.48
- **Load-Heat (BTU/hr):** 13,505.18
- **Field-Heat (BTU/hr):** 557.03
- **Load-Heat (BTU, period total):** 10,047,851.10
- **Field-Heat (BTU, period total):** 414,433.24

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 |   104.04 |    99.92 |    22.93 |     0.96 |    4.2% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |    37.52 |    32.03 |    18.42 |     0.85 |    1.5% |
| 01 |    36.01 |    30.74 |    17.67 |     0.85 |    1.4% |
| 02 |    35.26 |    30.16 |    17.20 |     0.86 |    1.4% |
| 03 |    35.55 |    30.36 |    17.28 |     0.85 |    1.4% |
| 04 |    54.87 |    49.96 |    18.08 |     0.91 |    2.2% |
| 05 |   117.14 |   113.56 |    20.12 |     0.97 |    4.7% |
| 06 |   157.51 |   153.91 |    24.96 |     0.98 |    6.3% |
| 07 |   166.17 |   163.10 |    25.54 |     0.98 |    6.6% |
| 08 |   168.62 |   165.74 |    26.47 |     0.98 |    6.7% |
| 09 |   170.51 |   167.65 |    27.70 |     0.98 |    6.8% |
| 10 |   178.31 |   175.26 |    30.28 |     0.98 |    7.1% |
| 11 |   172.84 |   169.99 |    28.20 |     0.98 |    6.9% |
| 12 |   175.40 |   172.49 |    28.24 |     0.98 |    7.0% |
| 13 |   180.56 |   177.46 |    30.38 |     0.98 |    7.2% |
| 14 |   176.80 |   173.65 |    30.35 |     0.98 |    7.1% |
| 15 |   150.23 |   147.30 |    26.01 |     0.98 |    6.0% |
| 16 |   123.41 |   120.76 |    21.32 |     0.98 |    4.9% |
| 17 |    81.08 |    77.75 |    19.65 |     0.96 |    3.2% |
| 18 |    62.32 |    58.00 |    20.31 |     0.93 |    2.5% |
| 19 |    48.13 |    42.90 |    20.77 |     0.89 |    1.9% |
| 20 |    45.69 |    39.85 |    21.28 |     0.87 |    1.8% |
| 21 |    42.99 |    37.09 |    20.64 |     0.86 |    1.7% |
| 22 |    40.79 |    34.96 |    19.86 |     0.86 |    1.6% |
| 23 |    39.24 |    33.36 |    19.47 |     0.85 |    1.6% |

---

# END OF REPORT

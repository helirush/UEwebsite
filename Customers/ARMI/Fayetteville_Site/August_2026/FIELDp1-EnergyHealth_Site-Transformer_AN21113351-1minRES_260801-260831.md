# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 74,608.4 kWh (Usage per period)
- **Consumption Cost per unit:** $0.120/kWh (Cost per kWh)
- **Consumption Total Cost:** $8,953.01 (Cost per period)
- **Consumption Total Cost:** $12.03 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Site Transformer  
**Generated:** 2026-10-11 02:04:44  
**Data Source:** AN21113351-V-1minRES_44640CLP_260801-260831c.csv  

## Time Period

- **Period:** August 01, 2026 thru August 31, 2026
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
- **Power Factor:** 0.915
- **Total Energy (Actual):** 74,608.40 kWh (per period), 100.28 kW (per hour)
- **Total Waste (Actual):** 2,840.62 kWh (per period), 3.82 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Site-Transformer_AN21113351-1minRES_260801-260831.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Site-Transformer_AN21113351-1minRES_260801-260831.md


## UNITY MANAGEMENT Site Transformer SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 3.82 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 1.84 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1200/kWh (all-inclusive)
- **Site Transformer Utility Cost Offset:** $0.46/hour
- **Annual Offset Savings:** $4014/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 6,346 BTU/hr
- **Total Cooling kW No Longer Needed:** 0.59 kW
- **Cooling Energy Cost Avoided:** $0.07/hour
- **Annual Cooling Savings:** $618/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 4.41 kW
- **CO2e Emissions Avoided:** 14.41 metric tons/year
- **Monthly CO2e Reduction:** 1.20 metric tons/month
- **Hourly CO2e Reduction:** 0.0016 metric tons/hour
- **CO2e Value Rate:** $0/metric ton
- **Annual CO2e Value:** $0/year

### Total Site Transformer Unity Savings

- **Per Hour:** $0.53
- **Per Day:** $12.69
- **Per Month:** $380.71
- **Per Year:** $4632

### Site Transformer Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 72.7 kVAR Max (Avg: 27.9 kVAR/hr ; 20,113 kVAR/mo)
- **Max Harmonic Distortion:** 69.6% Max (range: 0.0% - 69.6%)
- **Max Amperage:** 364A Max (range: 24A - 364A)

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
| Line to Neutral Voltage (277v) |   284.48 |   279.53 |   289.03 |
| Line to Line Voltage (480v) |   492.74 |   484.16 |   500.62 |
| Current (AMPS) |   122.61 |    24.07 |   364.16 |
| Phase Angle (degrees) |    20.79 |     3.62 |    56.71 |
| Total Harmonic Distortion (PCT) |     4.23 |     0.00 |    69.61 |

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
| THD Phase B (%) | 1.5% | IEEE standard per-phase calculation |
| THD Phase C (%) | 1.3% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 4.2% | Field-level stress indicator |
| Max Phase THD | 1.5% | Highest THD among all three phases |
| Min Phase THD | 1.3% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 300.35 kW
  - **Maximum Load:** 305.59 kVA
  - **Percentage of Capacity (MAX):** 12.2%
- **Average Load:** 104.10 kVA
  - **Percentage of Capacity (Avg):** 4.2%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 104.10 kVA
- **Average Power Factor (PF):** 0.915

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 104.64 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 492.74 V
- Average Current (Iavg_A): 122.61 A
- Average kW (Psum_kW): 100.28 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.54 kVA (0.5%)
- **Calculated PF (kW/kVA from averages):** 0.958
- **Power Factor Difference:** 0.043 (4.7%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (104.10) and measured PF (0.915) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   104.10 |         4.2% | 77,449.02 kVA | 342,169.97 TOTAL-HEAT |
| kW |   100.28 |         4.0% | 74,608.40 kWh | 12,549.89 Load-Heat |
| kVAR |    27.93 |         1.1% | 20,783.12 kVARh | - |
| WASTE |     3.82 |         0.2% | 2,840.62 WASTE | 477.82 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 342,169.97
- **Load-Heat (BTU/hr):** 12,549.89
- **Field-Heat (BTU/hr):** 477.82
- **Load-Heat (BTU, period total):** 9,337,116.21
- **Field-Heat (BTU, period total):** 355,499.45

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 8 |   104.10 |   100.28 |    22.64 |     0.96 |    4.2% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |    38.61 |    33.96 |    17.51 |     0.88 |    1.5% |
| 01 |    37.12 |    32.78 |    16.62 |     0.88 |    1.5% |
| 02 |    36.17 |    31.56 |    16.78 |     0.87 |    1.4% |
| 03 |    35.15 |    30.58 |    16.55 |     0.87 |    1.4% |
| 04 |    39.51 |    34.99 |    16.80 |     0.89 |    1.6% |
| 05 |   107.02 |   104.12 |    18.09 |     0.97 |    4.3% |
| 06 |   157.93 |   154.96 |    23.87 |     0.98 |    6.3% |
| 07 |   165.90 |   162.79 |    25.71 |     0.98 |    6.6% |
| 08 |   172.60 |   169.78 |    26.70 |     0.98 |    6.9% |
| 09 |   176.63 |   173.73 |    28.74 |     0.98 |    7.1% |
| 10 |   181.08 |   178.05 |    30.39 |     0.98 |    7.2% |
| 11 |   177.96 |   174.77 |    30.64 |     0.98 |    7.1% |
| 12 |   180.17 |   177.10 |    30.05 |     0.98 |    7.2% |
| 13 |   187.89 |   184.50 |    32.87 |     0.98 |    7.5% |
| 14 |   175.80 |   172.70 |    29.31 |     0.98 |    7.0% |
| 15 |   148.72 |   146.35 |    22.59 |     0.98 |    5.9% |
| 16 |   120.26 |   117.73 |    21.10 |     0.98 |    4.8% |
| 17 |    71.74 |    68.30 |    19.61 |     0.95 |    2.9% |
| 18 |    64.21 |    60.65 |    19.09 |     0.94 |    2.6% |
| 19 |    50.46 |    45.85 |    20.13 |     0.91 |    2.0% |
| 20 |    46.65 |    41.21 |    20.88 |     0.88 |    1.9% |
| 21 |    44.11 |    38.43 |    20.56 |     0.87 |    1.8% |
| 22 |    42.28 |    36.62 |    20.01 |     0.87 |    1.7% |
| 23 |    40.38 |    35.21 |    18.76 |     0.87 |    1.6% |

---

# END OF REPORT

# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 38,897.9 kWh (Usage per period)
- **Consumption Cost per unit:** $0.120/kWh (Cost per kWh)
- **Consumption Total Cost:** $4,667.75 (Cost per period)
- **Consumption Total Cost:** $6.31 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Site Transformer  
**Generated:** 2026-10-11 02:04:11  
**Data Source:** AN21113351-V-1minRES_44640CLP_260101-260131c.csv  

## Time Period

- **Period:** January 01, 2026 thru January 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,410

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
- **Power Factor:** 0.815
- **Total Energy (Actual):** 38,897.88 kWh (per period), 52.55 kW (per hour)
- **Total Waste (Actual):** 4,612.15 kWh (per period), 6.23 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Site-Transformer_AN21113351-1minRES_260101-260131.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Site-Transformer_AN21113351-1minRES_260101-260131.md


## UNITY MANAGEMENT Site Transformer SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 6.23 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 3.90 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1200/kWh (all-inclusive)
- **Site Transformer Utility Cost Offset:** $0.75/hour
- **Annual Offset Savings:** $6550/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 13,442 BTU/hr
- **Total Cooling kW No Longer Needed:** 1.24 kW
- **Cooling Energy Cost Avoided:** $0.15/hour
- **Annual Cooling Savings:** $1300/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 7.47 kW
- **CO2e Emissions Avoided:** 24.42 metric tons/year
- **Monthly CO2e Reduction:** 2.03 metric tons/month
- **Hourly CO2e Reduction:** 0.0028 metric tons/hour
- **CO2e Value Rate:** $0/metric ton
- **Annual CO2e Value:** $0/year

### Total Site Transformer Unity Savings

- **Per Hour:** $0.90
- **Per Day:** $21.51
- **Per Month:** $645.19
- **Per Year:** $7850

### Site Transformer Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 56.1 kVAR Max (Avg: 26.3 kVAR/hr ; 18,964 kVAR/mo)
- **Max Harmonic Distortion:** 110.1% Max (range: 0.0% - 110.1%)
- **Max Amperage:** 191A Max (range: 20A - 191A)

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
| Line to Neutral Voltage (277v) |   284.79 |   280.69 |   288.73 |
| Line to Line Voltage (480v) |   493.27 |   486.17 |   500.10 |
| Current (AMPS) |    69.00 |    20.13 |   191.18 |
| Phase Angle (degrees) |    31.60 |     5.02 |    69.18 |
| Total Harmonic Distortion (PCT) |     4.98 |     0.00 |   110.06 |

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
| THD Phase A (%) | 1.6% | IEEE standard per-phase calculation |
| THD Phase B (%) | 1.8% | IEEE standard per-phase calculation |
| THD Phase C (%) | 1.6% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 5.0% | Field-level stress indicator |
| Max Phase THD | 1.8% | Highest THD among all three phases |
| Min Phase THD | 1.6% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 159.38 kW
  - **Maximum Load:** 160.65 kVA
  - **Percentage of Capacity (MAX):** 6.4%
- **Average Load:** 58.78 kVA
  - **Percentage of Capacity (Avg):** 2.4%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 58.78 kVA
- **Average Power Factor (PF):** 0.815

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 58.95 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 493.27 V
- Average Current (Iavg_A): 69.00 A
- Average kW (Psum_kW): 52.55 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.17 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.891
- **Power Factor Difference:** 0.076 (9.3%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (58.78) and measured PF (0.815) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |    58.78 |         2.4% | 43,510.03 kVA | 179,317.85 TOTAL-HEAT |
| kW |    52.55 |         2.1% | 38,897.88 kWh | 19,008.04 Load-Heat |
| kVAR |    26.34 |         1.1% | 19,495.58 kVARh | - |
| WASTE |     6.23 |         0.2% | 4,612.15 WASTE | 2,253.80 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 179,317.85
- **Load-Heat (BTU/hr):** 19,008.04
- **Field-Heat (BTU/hr):** 2,253.80
- **Load-Heat (BTU, period total):** 14,069,118.23
- **Field-Heat (BTU, period total):** 1,668,184.71

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 1 |    58.78 |    52.55 |    20.77 |     0.89 |    2.4% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |    31.76 |    21.84 |    22.40 |     0.69 |    1.3% |
| 01 |    31.51 |    21.54 |    22.26 |     0.68 |    1.3% |
| 02 |    31.37 |    21.75 |    21.91 |     0.69 |    1.3% |
| 03 |    31.69 |    22.60 |    21.49 |     0.71 |    1.3% |
| 04 |    35.22 |    27.20 |    21.42 |     0.77 |    1.4% |
| 05 |    56.88 |    51.75 |    20.58 |     0.91 |    2.3% |
| 06 |    94.32 |    90.63 |    22.53 |     0.96 |    3.8% |
| 07 |    99.78 |    96.20 |    22.24 |     0.96 |    4.0% |
| 08 |    98.77 |    95.51 |    20.94 |     0.97 |    4.0% |
| 09 |    96.15 |    93.00 |    20.02 |     0.97 |    3.8% |
| 10 |    98.69 |    95.38 |    20.57 |     0.97 |    3.9% |
| 11 |    93.63 |    90.30 |    20.35 |     0.96 |    3.7% |
| 12 |    96.15 |    92.80 |    19.85 |     0.97 |    3.8% |
| 13 |    97.99 |    94.21 |    20.64 |     0.96 |    3.9% |
| 14 |    85.80 |    81.51 |    20.76 |     0.95 |    3.4% |
| 15 |    56.83 |    51.56 |    20.93 |     0.91 |    2.3% |
| 16 |    52.72 |    47.40 |    20.07 |     0.90 |    2.1% |
| 17 |    38.64 |    31.76 |    19.62 |     0.82 |    1.5% |
| 18 |    36.03 |    29.62 |    18.37 |     0.82 |    1.4% |
| 19 |    29.68 |    22.14 |    19.05 |     0.75 |    1.2% |
| 20 |    29.88 |    22.14 |    19.46 |     0.74 |    1.2% |
| 21 |    29.85 |    22.15 |    19.54 |     0.74 |    1.2% |
| 22 |    30.43 |    21.50 |    21.04 |     0.71 |    1.2% |
| 23 |    31.80 |    21.85 |    22.55 |     0.69 |    1.3% |

---

# END OF REPORT

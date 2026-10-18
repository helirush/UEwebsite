# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 44,415.6 kWh (Usage per period)
- **Consumption Cost per unit:** $0.120/kWh (Cost per kWh)
- **Consumption Total Cost:** $5,329.88 (Cost per period)
- **Consumption Total Cost:** $7.21 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Site Transformer  
**Generated:** 2026-10-11 02:04:21  
**Data Source:** AN21113351-V-1minRES_44580CLP_260301-260331c.csv  

## Time Period

- **Period:** March 01, 2026 thru March 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,373

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
- **Power Factor:** 0.809
- **Total Energy (Actual):** 44,415.64 kWh (per period), 60.06 kW (per hour)
- **Total Waste (Actual):** 4,172.10 kWh (per period), 5.64 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Site-Transformer_AN21113351-1minRES_260301-260331.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Site-Transformer_AN21113351-1minRES_260301-260331.md


## UNITY MANAGEMENT Site Transformer SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 5.64 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 3.60 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1200/kWh (all-inclusive)
- **Site Transformer Utility Cost Offset:** $0.68/hour
- **Annual Offset Savings:** $5930/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 12,473 BTU/hr
- **Total Cooling kW No Longer Needed:** 1.14 kW
- **Cooling Energy Cost Avoided:** $0.14/hour
- **Annual Cooling Savings:** $1199/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 6.78 kW
- **CO2e Emissions Avoided:** 22.18 metric tons/year
- **Monthly CO2e Reduction:** 1.85 metric tons/month
- **Hourly CO2e Reduction:** 0.0025 metric tons/hour
- **CO2e Value Rate:** $0/metric ton
- **Annual CO2e Value:** $0/year

### Total Site Transformer Unity Savings

- **Per Hour:** $0.81
- **Per Day:** $19.53
- **Per Month:** $585.94
- **Per Year:** $7129

### Site Transformer Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 55.0 kVAR Max (Avg: 26.6 kVAR/hr ; 19,177 kVAR/mo)
- **Max Harmonic Distortion:** 112.3% Max (range: 0.0% - 112.3%)
- **Max Amperage:** 292A Max (range: 21A - 292A)

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
| Line to Neutral Voltage (277v) |   284.42 |   279.60 |   288.29 |
| Line to Line Voltage (480v) |   492.63 |   484.28 |   499.33 |
| Current (AMPS) |    77.31 |    20.88 |   291.99 |
| Phase Angle (degrees) |    31.62 |     4.55 |    63.67 |
| Total Harmonic Distortion (PCT) |     6.28 |     0.00 |   112.35 |

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
| THD Phase A (%) | 2.1% | IEEE standard per-phase calculation |
| THD Phase B (%) | 2.1% | IEEE standard per-phase calculation |
| THD Phase C (%) | 2.0% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 6.3% | Field-level stress indicator |
| Max Phase THD | 2.1% | Highest THD among all three phases |
| Min Phase THD | 2.0% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 242.68 kW
  - **Maximum Load:** 245.16 kVA
  - **Percentage of Capacity (MAX):** 9.8%
- **Average Load:** 65.70 kVA
  - **Percentage of Capacity (Avg):** 2.6%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 65.70 kVA
- **Average Power Factor (PF):** 0.809

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 65.97 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 492.63 V
- Average Current (Iavg_A): 77.31 A
- Average kW (Psum_kW): 60.06 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.27 kVA (0.4%)
- **Calculated PF (kW/kVA from averages):** 0.910
- **Power Factor Difference:** 0.101 (12.5%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (65.70) and measured PF (0.809) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |    65.70 |         2.6% | 48,587.74 kVA | 204,925.24 TOTAL-HEAT |
| kW |    60.06 |         2.4% | 44,415.64 kWh | 17,596.38 Load-Heat |
| kVAR |    26.64 |         1.1% | 19,698.20 kVARh | - |
| WASTE |     5.64 |         0.2% | 4,172.10 WASTE | 1,652.88 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 204,925.24
- **Load-Heat (BTU/hr):** 17,596.38
- **Field-Heat (BTU/hr):** 1,652.88
- **Load-Heat (BTU, period total):** 13,013,400.01
- **Field-Heat (BTU, period total):** 1,222,388.65

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 3 |    65.70 |    60.06 |    19.93 |     0.91 |    2.6% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |    28.21 |    19.64 |    19.58 |     0.70 |    1.1% |
| 01 |    28.06 |    19.41 |    19.60 |     0.69 |    1.1% |
| 02 |    27.71 |    19.51 |    19.05 |     0.70 |    1.1% |
| 03 |    27.45 |    19.23 |    19.01 |     0.70 |    1.1% |
| 04 |    34.78 |    27.81 |    18.75 |     0.80 |    1.4% |
| 05 |    69.16 |    64.56 |    19.83 |     0.93 |    2.8% |
| 06 |    96.84 |    92.85 |    21.67 |     0.96 |    3.9% |
| 07 |   104.43 |   100.22 |    22.59 |     0.96 |    4.2% |
| 08 |   111.98 |   107.89 |    22.55 |     0.96 |    4.5% |
| 09 |   111.55 |   107.66 |    21.85 |     0.97 |    4.5% |
| 10 |   116.90 |   113.15 |    22.58 |     0.97 |    4.7% |
| 11 |   118.12 |   114.61 |    21.66 |     0.97 |    4.7% |
| 12 |   123.30 |   119.82 |    22.21 |     0.97 |    4.9% |
| 13 |   127.69 |   124.06 |    23.32 |     0.97 |    5.1% |
| 14 |   115.43 |   111.88 |    21.79 |     0.97 |    4.6% |
| 15 |    70.00 |    66.04 |    18.89 |     0.94 |    2.8% |
| 16 |    48.01 |    43.46 |    17.22 |     0.91 |    1.9% |
| 17 |    40.35 |    35.01 |    17.63 |     0.87 |    1.6% |
| 18 |    37.31 |    31.81 |    17.30 |     0.85 |    1.5% |
| 19 |    30.07 |    23.79 |    17.25 |     0.79 |    1.2% |
| 20 |    29.25 |    22.35 |    17.87 |     0.76 |    1.2% |
| 21 |    28.40 |    21.20 |    18.08 |     0.75 |    1.1% |
| 22 |    28.33 |    20.53 |    18.79 |     0.72 |    1.1% |
| 23 |    28.46 |    20.05 |    19.46 |     0.70 |    1.1% |

---

# END OF REPORT

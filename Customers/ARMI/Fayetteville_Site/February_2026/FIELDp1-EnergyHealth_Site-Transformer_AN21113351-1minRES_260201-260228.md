# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 39,190.3 kWh (Usage per period)
- **Consumption Cost per unit:** $0.120/kWh (Cost per kWh)
- **Consumption Total Cost:** $4,702.84 (Cost per period)
- **Consumption Total Cost:** $7.00 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Site Transformer  
**Generated:** 2026-10-11 02:04:17  
**Data Source:** AN21113351-V-1minRES_40320CLP_260201-260228c.csv  

## Time Period

- **Period:** February 01, 2026 thru February 28, 2026
- **Number of Days:** 28 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 40,320

- **Dataset Coverage:** Complete month (100.0% of 28-day month)
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
- **Power Factor:** 0.821
- **Total Energy (Actual):** 39,190.31 kWh (per period), 58.32 kW (per hour)
- **Total Waste (Actual):** 3,493.46 kWh (per period), 5.20 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Site-Transformer_AN21113351-1minRES_260201-260228.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Site-Transformer_AN21113351-1minRES_260201-260228.md


## UNITY MANAGEMENT Site Transformer SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 5.20 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 3.25 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1200/kWh (all-inclusive)
- **Site Transformer Utility Cost Offset:** $0.62/hour
- **Annual Offset Savings:** $5465/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 11,309 BTU/hr
- **Total Cooling kW No Longer Needed:** 1.01 kW
- **Cooling Energy Cost Avoided:** $0.12/hour
- **Annual Cooling Savings:** $1066/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 6.21 kW
- **CO2e Emissions Avoided:** 20.32 metric tons/year
- **Monthly CO2e Reduction:** 1.69 metric tons/month
- **Hourly CO2e Reduction:** 0.0023 metric tons/hour
- **CO2e Value Rate:** $0/metric ton
- **Annual CO2e Value:** $0/year

### Total Site Transformer Unity Savings

- **Per Hour:** $0.75
- **Per Day:** $17.89
- **Per Month:** $536.80
- **Per Year:** $6531

### Site Transformer Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 43.8 kVAR Max (Avg: 25.2 kVAR/hr ; 18,120 kVAR/mo)
- **Max Harmonic Distortion:** 94.4% Max (range: 0.0% - 94.4%)
- **Max Amperage:** 280A Max (range: 22A - 280A)

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
| Line to Neutral Voltage (277v) |   285.01 |   280.60 |   288.32 |
| Line to Line Voltage (480v) |   493.65 |   486.01 |   499.39 |
| Current (AMPS) |    74.54 |    22.15 |   279.57 |
| Phase Angle (degrees) |    30.79 |     4.99 |    66.80 |
| Total Harmonic Distortion (PCT) |     7.27 |     0.00 |    94.43 |

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
| THD Phase A (%) | 2.4% | IEEE standard per-phase calculation |
| THD Phase B (%) | 2.5% | IEEE standard per-phase calculation |
| THD Phase C (%) | 2.4% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 7.3% | Field-level stress indicator |
| Max Phase THD | 2.5% | Highest THD among all three phases |
| Min Phase THD | 2.4% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 235.87 kW
  - **Maximum Load:** 237.89 kVA
  - **Percentage of Capacity (MAX):** 9.5%
- **Average Load:** 63.52 kVA
  - **Percentage of Capacity (Avg):** 2.5%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 63.52 kVA
- **Average Power Factor (PF):** 0.821

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 63.74 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 493.65 V
- Average Current (Iavg_A): 74.54 A
- Average kW (Psum_kW): 58.32 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.22 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.915
- **Power Factor Difference:** 0.094 (11.5%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (63.52) and measured PF (0.821) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |    63.52 |         2.5% | 42,683.78 kVA | 198,992.43 TOTAL-HEAT |
| kW |    58.32 |         2.3% | 39,190.31 kWh | 16,286.59 Load-Heat |
| kVAR |    25.17 |         1.0% | 16,912.25 kVARh | - |
| WASTE |     5.20 |         0.2% | 3,493.46 WASTE | 1,451.80 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 198,992.43
- **Load-Heat (BTU/hr):** 16,286.59
- **Field-Heat (BTU/hr):** 1,451.80
- **Load-Heat (BTU, period total):** 10,944,585.34
- **Field-Heat (BTU, period total):** 975,611.49

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 2 |    63.52 |    58.32 |    19.31 |     0.92 |    2.5% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |    26.27 |    18.16 |    18.73 |     0.69 |    1.1% |
| 01 |    26.06 |    18.21 |    18.35 |     0.70 |    1.0% |
| 02 |    26.22 |    18.35 |    18.46 |     0.70 |    1.0% |
| 03 |    25.92 |    18.17 |    18.20 |     0.70 |    1.0% |
| 04 |    34.72 |    28.26 |    18.22 |     0.81 |    1.4% |
| 05 |    75.87 |    72.17 |    19.85 |     0.95 |    3.0% |
| 06 |    95.74 |    92.19 |    21.83 |     0.96 |    3.8% |
| 07 |    99.94 |    96.29 |    22.15 |     0.96 |    4.0% |
| 08 |   103.44 |    99.97 |    21.78 |     0.97 |    4.1% |
| 09 |    99.60 |    96.08 |    21.68 |     0.96 |    4.0% |
| 10 |   108.46 |   105.11 |    21.71 |     0.97 |    4.3% |
| 11 |   108.32 |   105.00 |    21.50 |     0.97 |    4.3% |
| 12 |   109.62 |   106.33 |    21.22 |     0.97 |    4.4% |
| 13 |   110.97 |   107.66 |    21.36 |     0.97 |    4.4% |
| 14 |   104.00 |   100.70 |    20.81 |     0.97 |    4.2% |
| 15 |    86.54 |    82.88 |    19.92 |     0.96 |    3.5% |
| 16 |    76.05 |    72.30 |    18.87 |     0.95 |    3.0% |
| 17 |    47.56 |    42.57 |    17.15 |     0.90 |    1.9% |
| 18 |    31.30 |    25.61 |    16.22 |     0.82 |    1.3% |
| 19 |    25.67 |    19.39 |    16.35 |     0.76 |    1.0% |
| 20 |    25.12 |    18.73 |    16.42 |     0.75 |    1.0% |
| 21 |    25.18 |    18.64 |    16.67 |     0.74 |    1.0% |
| 22 |    25.68 |    18.66 |    17.41 |     0.73 |    1.0% |
| 23 |    26.16 |    18.23 |    18.57 |     0.70 |    1.0% |

---

# END OF REPORT

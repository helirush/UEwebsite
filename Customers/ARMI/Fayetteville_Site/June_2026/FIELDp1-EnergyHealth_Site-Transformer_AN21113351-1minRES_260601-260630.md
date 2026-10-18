# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 65,555.4 kWh (Usage per period)
- **Consumption Cost per unit:** $0.120/kWh (Cost per kWh)
- **Consumption Total Cost:** $7,866.65 (Cost per period)
- **Consumption Total Cost:** $10.93 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Site Transformer  
**Generated:** 2026-10-11 02:04:35  
**Data Source:** AN21113351-V-1minRES_43200CLP_260601-260630c.csv  

## Time Period

- **Period:** June 01, 2026 thru June 30, 2026
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
- **Power Factor:** 0.846
- **Total Energy (Actual):** 65,555.44 kWh (per period), 91.05 kW (per hour)
- **Total Waste (Actual):** 4,341.26 kWh (per period), 6.03 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Site-Transformer_AN21113351-1minRES_260601-260630.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Site-Transformer_AN21113351-1minRES_260601-260630.md


## UNITY MANAGEMENT Site Transformer SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 6.03 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 3.51 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1200/kWh (all-inclusive)
- **Site Transformer Utility Cost Offset:** $0.72/hour
- **Annual Offset Savings:** $6338/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 12,106 BTU/hr
- **Total Cooling kW No Longer Needed:** 1.19 kW
- **Cooling Energy Cost Avoided:** $0.14/hour
- **Annual Cooling Savings:** $1250/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 7.22 kW
- **CO2e Emissions Avoided:** 23.61 metric tons/year
- **Monthly CO2e Reduction:** 1.97 metric tons/month
- **Hourly CO2e Reduction:** 0.0027 metric tons/hour
- **CO2e Value Rate:** $0/metric ton
- **Annual CO2e Value:** $0/year

### Total Site Transformer Unity Savings

- **Per Hour:** $0.87
- **Per Day:** $20.79
- **Per Month:** $623.70
- **Per Year:** $7588

### Site Transformer Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 103.9 kVAR Max (Avg: 33.7 kVAR/hr ; 24,249 kVAR/mo)
- **Max Harmonic Distortion:** 110.9% Max (range: 0.0% - 110.9%)
- **Max Amperage:** 365A Max (range: 24A - 365A)

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
| Line to Neutral Voltage (277v) |   284.76 |   279.23 |   291.44 |
| Line to Line Voltage (480v) |   493.23 |   483.64 |   504.80 |
| Current (AMPS) |   114.23 |    23.66 |   365.34 |
| Phase Angle (degrees) |    27.38 |     3.61 |    70.35 |
| Total Harmonic Distortion (PCT) |     4.97 |     0.00 |   110.88 |

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
| THD Phase C (%) | 1.5% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 5.0% | Field-level stress indicator |
| Max Phase THD | 1.8% | Highest THD among all three phases |
| Min Phase THD | 1.5% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 302.09 kW
  - **Maximum Load:** 307.46 kVA
  - **Percentage of Capacity (MAX):** 12.3%
- **Average Load:** 97.08 kVA
  - **Percentage of Capacity (Avg):** 3.9%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 97.08 kVA
- **Average Power Factor (PF):** 0.846

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 97.59 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 493.23 V
- Average Current (Iavg_A): 114.23 A
- Average kW (Psum_kW): 91.05 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.51 kVA (0.5%)
- **Calculated PF (kW/kVA from averages):** 0.933
- **Power Factor Difference:** 0.087 (10.3%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (97.08) and measured PF (0.846) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |    97.08 |         3.9% | 69,896.70 kVA | 310,672.88 TOTAL-HEAT |
| kW |    91.05 |         3.6% | 65,555.44 kWh | 19,295.80 Load-Heat |
| kVAR |    33.68 |         1.3% | 24,249.40 kVARh | - |
| WASTE |     6.03 |         0.2% | 4,341.26 WASTE | 1,277.82 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 310,672.88
- **Load-Heat (BTU/hr):** 19,295.80
- **Field-Heat (BTU/hr):** 1,277.82
- **Load-Heat (BTU, period total):** 13,892,978.32
- **Field-Heat (BTU, period total):** 920,031.80

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 6 |    97.08 |    91.05 |    23.92 |     0.94 |    3.9% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |    35.38 |    24.93 |    23.93 |     0.70 |    1.4% |
| 01 |    33.96 |    23.94 |    23.11 |     0.70 |    1.4% |
| 02 |    33.28 |    23.69 |    22.44 |     0.71 |    1.3% |
| 03 |    33.02 |    23.08 |    22.72 |     0.70 |    1.3% |
| 04 |    32.61 |    23.29 |    21.95 |     0.71 |    1.3% |
| 05 |    87.93 |    82.82 |    20.56 |     0.94 |    3.5% |
| 06 |   158.93 |   155.01 |    25.35 |     0.98 |    6.4% |
| 07 |   165.33 |   161.46 |    26.65 |     0.98 |    6.6% |
| 08 |   170.03 |   166.57 |    27.14 |     0.98 |    6.8% |
| 09 |   166.41 |   162.95 |    26.99 |     0.98 |    6.7% |
| 10 |   171.98 |   168.36 |    27.96 |     0.98 |    6.9% |
| 11 |   174.42 |   171.10 |    27.53 |     0.98 |    7.0% |
| 12 |   174.75 |   171.62 |    26.33 |     0.98 |    7.0% |
| 13 |   178.00 |   174.50 |    29.17 |     0.98 |    7.1% |
| 14 |   167.73 |   164.57 |    26.37 |     0.98 |    6.7% |
| 15 |   126.55 |   123.46 |    21.23 |     0.98 |    5.1% |
| 16 |   109.52 |   106.01 |    20.72 |     0.97 |    4.4% |
| 17 |    64.19 |    58.86 |    21.08 |     0.92 |    2.6% |
| 18 |    53.87 |    48.17 |    20.84 |     0.89 |    2.2% |
| 19 |    42.32 |    35.47 |    21.66 |     0.84 |    1.7% |
| 20 |    39.14 |    31.27 |    22.52 |     0.80 |    1.6% |
| 21 |    38.06 |    29.35 |    23.06 |     0.77 |    1.5% |
| 22 |    36.54 |    28.01 |    22.10 |     0.77 |    1.5% |
| 23 |    35.93 |    26.70 |    22.68 |     0.74 |    1.4% |

---

# END OF REPORT

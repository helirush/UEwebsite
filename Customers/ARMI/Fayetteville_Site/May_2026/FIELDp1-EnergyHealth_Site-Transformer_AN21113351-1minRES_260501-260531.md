# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 47,242.6 kWh (Usage per period)
- **Consumption Cost per unit:** $0.120/kWh (Cost per kWh)
- **Consumption Total Cost:** $5,669.11 (Cost per period)
- **Consumption Total Cost:** $7.63 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Site Transformer  
**Generated:** 2026-10-11 02:04:30  
**Data Source:** AN21113351-V-1minRES_44640CLP_260501-260531c.csv  

## Time Period

- **Period:** May 01, 2026 thru May 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,566

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
- **Power Factor:** 0.767
- **Total Energy (Actual):** 47,242.56 kWh (per period), 63.60 kW (per hour)
- **Total Waste (Actual):** 6,341.37 kWh (per period), 8.54 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Site-Transformer_AN21113351-1minRES_260501-260531.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Site-Transformer_AN21113351-1minRES_260501-260531.md


## UNITY MANAGEMENT Site Transformer SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 8.54 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 5.93 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1200/kWh (all-inclusive)
- **Site Transformer Utility Cost Offset:** $1.02/hour
- **Annual Offset Savings:** $8975/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 20,523 BTU/hr
- **Total Cooling kW No Longer Needed:** 1.96 kW
- **Cooling Energy Cost Avoided:** $0.24/hour
- **Annual Cooling Savings:** $2063/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 10.50 kW
- **CO2e Emissions Avoided:** 34.34 metric tons/year
- **Monthly CO2e Reduction:** 2.86 metric tons/month
- **Hourly CO2e Reduction:** 0.0039 metric tons/hour
- **CO2e Value Rate:** $0/metric ton
- **Annual CO2e Value:** $0/year

### Total Site Transformer Unity Savings

- **Per Hour:** $1.26
- **Per Day:** $30.24
- **Per Month:** $907.23
- **Per Year:** $11038

### Site Transformer Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 64.8 kVAR Max (Avg: 34.0 kVAR/hr ; 24,511 kVAR/mo)
- **Max Harmonic Distortion:** 230.2% Max (range: 0.0% - 230.2%)
- **Max Amperage:** 300A Max (range: 21A - 300A)

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
| Line to Neutral Voltage (277v) |   285.13 |   279.51 |   290.08 |
| Line to Line Voltage (480v) |   493.87 |   484.13 |   502.44 |
| Current (AMPS) |    84.75 |    21.29 |   300.44 |
| Phase Angle (degrees) |    35.46 |     3.62 |    72.89 |
| Total Harmonic Distortion (PCT) |     5.78 |     0.00 |   230.23 |

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
| THD Phase A (%) | 1.9% | IEEE standard per-phase calculation |
| THD Phase B (%) | 2.0% | IEEE standard per-phase calculation |
| THD Phase C (%) | 1.8% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 5.8% | Field-level stress indicator |
| Max Phase THD | 2.0% | Highest THD among all three phases |
| Min Phase THD | 1.8% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 249.99 kW
  - **Maximum Load:** 253.19 kVA
  - **Percentage of Capacity (MAX):** 10.1%
- **Average Load:** 72.14 kVA
  - **Percentage of Capacity (Avg):** 2.9%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 72.14 kVA
- **Average Power Factor (PF):** 0.767

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 72.50 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 493.87 V
- Average Current (Iavg_A): 84.75 A
- Average kW (Psum_kW): 63.60 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.36 kVA (0.5%)
- **Calculated PF (kW/kVA from averages):** 0.877
- **Power Factor Difference:** 0.110 (14.3%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (72.14) and measured PF (0.767) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |    72.14 |         2.9% | 53,583.93 kVA | 217,024.19 TOTAL-HEAT |
| kW |    63.60 |         2.5% | 47,242.56 kWh | 25,683.63 Load-Heat |
| kVAR |    34.04 |         1.4% | 25,285.92 kVARh | - |
| WASTE |     8.54 |         0.3% | 6,341.37 WASTE | 3,447.51 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 217,024.19
- **Load-Heat (BTU/hr):** 25,683.63
- **Field-Heat (BTU/hr):** 3,447.51
- **Load-Heat (BTU, period total):** 19,076,946.84
- **Field-Heat (BTU, period total):** 2,560,697.70

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 5 |    72.14 |    63.60 |    24.84 |     0.88 |    2.9% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |    33.50 |    20.55 |    25.65 |     0.61 |    1.3% |
| 01 |    33.17 |    20.09 |    25.42 |     0.61 |    1.3% |
| 02 |    32.51 |    19.94 |    24.76 |     0.61 |    1.3% |
| 03 |    32.18 |    19.92 |    24.50 |     0.62 |    1.3% |
| 04 |    36.05 |    25.22 |    23.60 |     0.70 |    1.4% |
| 05 |    71.86 |    64.88 |    23.46 |     0.90 |    2.9% |
| 06 |   101.20 |    95.16 |    24.17 |     0.94 |    4.0% |
| 07 |   108.01 |   102.35 |    24.48 |     0.95 |    4.3% |
| 08 |   113.20 |   108.08 |    24.33 |     0.95 |    4.5% |
| 09 |   116.16 |   110.94 |    25.11 |     0.96 |    4.6% |
| 10 |   125.33 |   119.77 |    26.77 |     0.96 |    5.0% |
| 11 |   125.08 |   119.70 |    26.85 |     0.96 |    5.0% |
| 12 |   132.76 |   127.81 |    26.64 |     0.96 |    5.3% |
| 13 |   142.33 |   137.19 |    28.37 |     0.96 |    5.7% |
| 14 |   123.86 |   118.58 |    26.14 |     0.96 |    5.0% |
| 15 |    87.04 |    81.14 |    23.55 |     0.93 |    3.5% |
| 16 |    70.14 |    63.07 |    23.74 |     0.90 |    2.8% |
| 17 |    44.15 |    34.78 |    24.46 |     0.79 |    1.8% |
| 18 |    37.88 |    27.35 |    24.85 |     0.72 |    1.5% |
| 19 |    36.47 |    25.17 |    25.13 |     0.69 |    1.5% |
| 20 |    34.47 |    23.69 |    23.96 |     0.69 |    1.4% |
| 21 |    32.48 |    22.02 |    23.03 |     0.68 |    1.3% |
| 22 |    31.85 |    21.24 |    23.08 |     0.67 |    1.3% |
| 23 |    31.84 |    20.11 |    24.09 |     0.63 |    1.3% |

---

# END OF REPORT

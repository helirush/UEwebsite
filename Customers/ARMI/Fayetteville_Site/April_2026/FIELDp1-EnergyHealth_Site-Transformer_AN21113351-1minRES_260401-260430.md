# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 51,814.1 kWh (Usage per period)
- **Consumption Cost per unit:** $0.120/kWh (Cost per kWh)
- **Consumption Total Cost:** $6,217.70 (Cost per period)
- **Consumption Total Cost:** $8.64 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Site Transformer  
**Generated:** 2026-10-11 02:04:26  
**Data Source:** AN21113351-V-1minRES_43200CLP_260401-260430c.csv  

## Time Period

- **Period:** April 01, 2026 thru April 30, 2026
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
- **Power Factor:** 0.839
- **Total Energy (Actual):** 51,814.14 kWh (per period), 71.96 kW (per hour)
- **Total Waste (Actual):** 3,435.92 kWh (per period), 4.77 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Site-Transformer_AN21113351-1minRES_260401-260430.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Site-Transformer_AN21113351-1minRES_260401-260430.md


## UNITY MANAGEMENT Site Transformer SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 4.77 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 2.85 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1200/kWh (all-inclusive)
- **Site Transformer Utility Cost Offset:** $0.57/hour
- **Annual Offset Savings:** $5016/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 9,900 BTU/hr
- **Total Cooling kW No Longer Needed:** 0.94 kW
- **Cooling Energy Cost Avoided:** $0.11/hour
- **Annual Cooling Savings:** $990/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 5.71 kW
- **CO2e Emissions Avoided:** 18.69 metric tons/year
- **Monthly CO2e Reduction:** 1.56 metric tons/month
- **Hourly CO2e Reduction:** 0.0021 metric tons/hour
- **CO2e Value Rate:** $0/metric ton
- **Annual CO2e Value:** $0/year

### Total Site Transformer Unity Savings

- **Per Hour:** $0.69
- **Per Day:** $16.46
- **Per Month:** $493.68
- **Per Year:** $6006

### Site Transformer Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 66.0 kVAR Max (Avg: 26.6 kVAR/hr ; 19,180 kVAR/mo)
- **Max Harmonic Distortion:** 103.0% Max (range: 0.0% - 103.0%)
- **Max Amperage:** 323A Max (range: 23A - 323A)

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
| Line to Neutral Voltage (277v) |   284.07 |   279.80 |   287.98 |
| Line to Line Voltage (480v) |   492.02 |   484.62 |   498.79 |
| Current (AMPS) |    90.56 |    22.99 |   322.77 |
| Phase Angle (degrees) |    28.35 |     4.34 |    62.13 |
| Total Harmonic Distortion (PCT) |     6.61 |     0.00 |   103.01 |

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
| THD Phase A (%) | 2.2% | IEEE standard per-phase calculation |
| THD Phase B (%) | 2.3% | IEEE standard per-phase calculation |
| THD Phase C (%) | 2.1% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 6.6% | Field-level stress indicator |
| Max Phase THD | 2.3% | Highest THD among all three phases |
| Min Phase THD | 2.1% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 268.11 kW
  - **Maximum Load:** 272.45 kVA
  - **Percentage of Capacity (MAX):** 10.9%
- **Average Load:** 76.74 kVA
  - **Percentage of Capacity (Avg):** 3.1%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 76.74 kVA
- **Average Power Factor (PF):** 0.839

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 77.18 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 492.02 V
- Average Current (Iavg_A): 90.56 A
- Average kW (Psum_kW): 71.96 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.44 kVA (0.6%)
- **Calculated PF (kW/kVA from averages):** 0.932
- **Power Factor Difference:** 0.094 (11.2%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (76.74) and measured PF (0.839) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |    76.74 |         3.1% | 55,250.06 kVA | 245,551.69 TOTAL-HEAT |
| kW |    71.96 |         2.9% | 51,814.14 kWh | 15,270.49 Load-Heat |
| kVAR |    26.64 |         1.1% | 19,179.78 kVARh | - |
| WASTE |     4.77 |         0.2% | 3,435.92 WASTE | 1,012.62 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 245,551.69
- **Load-Heat (BTU/hr):** 15,270.49
- **Field-Heat (BTU/hr):** 1,012.62
- **Load-Heat (BTU, period total):** 10,994,750.81
- **Field-Heat (BTU, period total):** 729,087.75

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 4 |    76.74 |    71.96 |    19.29 |     0.94 |    3.1% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |    26.32 |    18.40 |    18.54 |     0.70 |    1.1% |
| 01 |    26.19 |    18.07 |    18.68 |     0.69 |    1.0% |
| 02 |    25.88 |    18.03 |    18.30 |     0.70 |    1.0% |
| 03 |    26.09 |    18.21 |    18.42 |     0.70 |    1.0% |
| 04 |    45.02 |    38.73 |    18.31 |     0.86 |    1.8% |
| 05 |    82.57 |    78.91 |    18.81 |     0.96 |    3.3% |
| 06 |   103.81 |   100.56 |    20.57 |     0.97 |    4.2% |
| 07 |   117.71 |   114.31 |    21.36 |     0.97 |    4.7% |
| 08 |   122.53 |   119.18 |    21.84 |     0.97 |    4.9% |
| 09 |   126.12 |   123.13 |    21.72 |     0.98 |    5.0% |
| 10 |   143.11 |   140.56 |    22.08 |     0.98 |    5.7% |
| 11 |   137.29 |   134.79 |    20.89 |     0.98 |    5.5% |
| 12 |   145.60 |   143.02 |    21.91 |     0.98 |    5.8% |
| 13 |   154.57 |   151.82 |    23.33 |     0.98 |    6.2% |
| 14 |   144.09 |   141.55 |    21.38 |     0.98 |    5.8% |
| 15 |   111.12 |   108.49 |    19.27 |     0.98 |    4.4% |
| 16 |    77.53 |    74.08 |    17.95 |     0.96 |    3.1% |
| 17 |    45.17 |    40.43 |    17.23 |     0.90 |    1.8% |
| 18 |    35.09 |    29.99 |    16.72 |     0.85 |    1.4% |
| 19 |    32.87 |    27.40 |    16.79 |     0.83 |    1.3% |
| 20 |    30.48 |    24.80 |    16.80 |     0.81 |    1.2% |
| 21 |    28.95 |    22.98 |    16.89 |     0.79 |    1.2% |
| 22 |    27.09 |    20.48 |    17.26 |     0.76 |    1.1% |
| 23 |    26.49 |    19.21 |    17.89 |     0.73 |    1.1% |

---

# END OF REPORT

# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 41,033.8 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $8,001.60 (Cost per period)
- **Consumption Total Cost:** $12.43 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL2-3North  
**Generated:** 2026-06-18 23:49:27  
**Data Source:** AN55050286-V-1minRES_44640CLP_260501-260531c.csv  

## Time Period

- **Period:** May 01, 2026 thru May 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 38,619

- **Dataset Coverage:** Complete month (100.0% of 31-day month)
- **Billing Scale Factor:** 1.000x (no normalization needed)

## Facility Information

- **Facility:** Foster Farms
- **Location:** Livingston HQ Facility
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** PL2-3North
- **Power Factor:** 0.590
- **Total Energy (Actual):** 41,033.85 kWh (per period), 63.75 kW (per hour)
- **Total Waste (Actual):** 26,615.59 kWh (per period), 41.35 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL2-3North_AN55050286-1minRES_260501-260531.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL2-3North_AN55050286-1minRES_260501-260531.md


## UNITY MANAGEMENT PL2-3North SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 41.35 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL2-3North Utility Cost Offset:** $8.06/hour
- **Annual Offset Savings:** $70636/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 147,919 BTU/hr
- **Total Cooling kW No Longer Needed:** 12.94 kW
- **Cooling Energy Cost Avoided:** $2.52/hour
- **Annual Cooling Savings:** $22109/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 54.29 kW
- **CO2e Emissions Avoided:** 177.55 metric tons/year
- **Monthly CO2e Reduction:** 14.80 metric tons/month
- **Hourly CO2e Reduction:** 0.0203 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $6836/year

### Total PL2-3North Unity Savings

- **Per Hour:** $11.37
- **Per Day:** $272.82
- **Per Month:** $8184.71
- **Per Year:** $99581

### PL2-3North Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 215.6 kVAR Max (Avg: 83.6 kVAR/hr ; 60,163 kVAR/mo)
- **Max Harmonic Distortion:** 27.1% Max (range: 3.0% - 27.1%)
- **Max Amperage:** 319A Max (range: 15A - 319A)

---

# PL2-3North DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   283.08 |   271.90 |   293.90 |
| Line to Line Voltage (480v) |   490.30 |   470.95 |   509.04 |
| Current (AMPS) |   123.96 |    15.49 |   318.92 |
| Phase Angle (degrees) |    53.77 |    46.05 |    65.10 |
| Total Harmonic Distortion (PCT) |    13.27 |     3.00 |    27.07 |

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
| THD Phase A (%) | 4.4% | IEEE standard per-phase calculation |
| THD Phase B (%) | 4.4% | IEEE standard per-phase calculation |
| THD Phase C (%) | 4.4% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 13.3% | Field-level stress indicator |
| Max Phase THD | 4.4% | Highest THD among all three phases |
| Min Phase THD | 4.4% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 177.59 kW
  - **Maximum Load:** 271.93 kVA
  - **Percentage of Capacity (MAX):** 10.9%
- **Average Load:** 105.10 kVA
  - **Percentage of Capacity (Avg):** 4.2%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 105.10 kVA
- **Average Power Factor (PF):** 0.590

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 105.27 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 490.30 V
- Average Current (Iavg_A): 123.96 A
- Average kW (Psum_kW): 63.75 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.17 kVA (0.2%)
- **Calculated PF (kW/kVA from averages):** 0.606
- **Power Factor Difference:** 0.016 (2.6%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (105.10) and measured PF (0.590) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   105.10 |         4.2% | 67,649.44 kVA | 217,530.21 TOTAL-HEAT |
| kW |    63.75 |         2.6% | 41,033.85 kWh | 85,583.78 Load-Heat |
| kVAR |    83.56 |         3.3% | 53,783.54 kVARh | - |
| WASTE |    41.35 |         1.7% | 26,615.59 WASTE | 55,511.80 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 217,530.21
- **Load-Heat (BTU/hr):** 85,583.78
- **Field-Heat (BTU/hr):** 55,511.80
- **Load-Heat (BTU, period total):** 55,086,000.43
- **Field-Heat (BTU, period total):** 35,730,168.98

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 5 |   105.10 |    63.75 |    83.39 |     0.61 |    4.2% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   101.75 |    62.52 |    80.14 |     0.61 |    4.1% |
| 01 |   102.61 |    63.05 |    80.82 |     0.61 |    4.1% |
| 02 |   100.67 |    61.91 |    79.26 |     0.61 |    4.0% |
| 03 |   100.45 |    61.39 |    79.39 |     0.61 |    4.0% |
| 04 |    99.39 |    61.20 |    78.16 |     0.62 |    4.0% |
| 05 |   100.27 |    61.59 |    78.97 |     0.61 |    4.0% |
| 06 |    97.94 |    60.20 |    77.09 |     0.61 |    3.9% |
| 07 |    98.52 |    60.68 |    77.46 |     0.62 |    3.9% |
| 08 |   102.34 |    63.43 |    80.18 |     0.62 |    4.1% |
| 09 |   106.73 |    66.42 |    83.40 |     0.62 |    4.3% |
| 10 |   105.41 |    65.09 |    82.79 |     0.62 |    4.2% |
| 11 |   106.73 |    66.24 |    83.56 |     0.62 |    4.3% |
| 12 |   103.82 |    63.74 |    81.83 |     0.61 |    4.2% |
| 13 |   102.51 |    63.15 |    80.64 |     0.62 |    4.1% |
| 14 |   105.11 |    64.81 |    82.63 |     0.62 |    4.2% |
| 15 |   103.71 |    63.28 |    82.06 |     0.61 |    4.1% |
| 16 |   104.31 |    62.60 |    83.33 |     0.60 |    4.2% |
| 17 |   109.22 |    63.89 |    88.48 |     0.58 |    4.4% |
| 18 |   114.17 |    63.65 |    94.66 |     0.56 |    4.6% |
| 19 |   116.12 |    64.88 |    96.10 |     0.56 |    4.6% |
| 20 |   119.31 |    70.17 |    96.35 |     0.59 |    4.8% |
| 21 |   113.29 |    69.79 |    89.10 |     0.62 |    4.5% |
| 22 |   102.97 |    63.59 |    80.88 |     0.62 |    4.1% |
| 23 |    99.71 |    61.46 |    78.39 |     0.62 |    4.0% |

---

# END OF REPORT

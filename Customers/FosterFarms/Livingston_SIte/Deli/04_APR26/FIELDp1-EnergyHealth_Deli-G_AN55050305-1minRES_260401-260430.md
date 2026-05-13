# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 434,042.0 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $84,638.18 (Cost per period)
- **Consumption Total Cost:** $117.59 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Deli G  
**Generated:** 2026-05-08 12:04:37  
**Data Source:** AN55050305-V-1minRES_43200CLP_260401-260430c.csv  

## Time Period

- **Period:** April 01, 2026 thru April 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,185

- **Dataset Coverage:** Complete month (100.0% of 30-day month)
- **Billing Scale Factor:** 1.000x (no normalization needed)

## Facility Information

- **Facility:** Foster Farms
- **Location:** Livingston HQ Facility
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** Deli G
- **Power Factor:** 0.867
- **Total Energy (Actual):** 434,041.97 kWh (per period), 603.05 kW (per hour)
- **Total Waste (Actual):** 48,904.33 kWh (per period), 67.95 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Deli-G_AN55050305-1minRES_260401-260430.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Deli-G_AN55050305-1minRES_260401-260430.md


## UNITY MANAGEMENT Deli G SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 67.95 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Deli G Utility Cost Offset:** $13.25/hour
- **Annual Offset Savings:** $116066/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 244,095 BTU/hr
- **Total Cooling kW No Longer Needed:** 21.37 kW
- **Cooling Energy Cost Avoided:** $4.17/hour
- **Annual Cooling Savings:** $36512/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 89.32 kW
- **CO2e Emissions Avoided:** 292.09 metric tons/year
- **Monthly CO2e Reduction:** 24.34 metric tons/month
- **Hourly CO2e Reduction:** 0.0333 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $11246/year

### Total Deli G Unity Savings

- **Per Hour:** $18.70
- **Per Day:** $448.83
- **Per Month:** $13464.92
- **Per Year:** $163823

### Deli G Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,457.0 kVAR Max (Avg: 294.2 kVAR/hr ; 211,839 kVAR/mo)
- **Max Harmonic Distortion:** 29.7% Max (range: 3.0% - 29.7%)
- **Max Amperage:** 2,519A Max (range: 66A - 2519A)

---

# Deli G DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   277.28 |   264.55 |   287.71 |
| Line to Line Voltage (480v) |   480.26 |   458.21 |   498.33 |
| Current (AMPS) |   809.34 |    66.35 |  2519.17 |
| Phase Angle (degrees) |    28.69 |     0.00 |    69.88 |
| Total Harmonic Distortion (PCT) |    14.08 |     3.00 |    29.68 |

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
| THD Phase A (%) | 4.7% | IEEE standard per-phase calculation |
| THD Phase B (%) | 4.7% | IEEE standard per-phase calculation |
| THD Phase C (%) | 4.7% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 14.1% | Field-level stress indicator |
| Max Phase THD | 4.7% | Highest THD among all three phases |
| Min Phase THD | 4.7% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,752.49 kW
  - **Maximum Load:** 1,919.44 kVA
  - **Percentage of Capacity (MAX):** 76.8%
- **Average Load:** 670.99 kVA
  - **Percentage of Capacity (Avg):** 26.8%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 670.99 kVA
- **Average Power Factor (PF):** 0.867

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 673.23 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 480.26 V
- Average Current (Iavg_A): 809.34 A
- Average kW (Psum_kW): 603.05 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 2.24 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.896
- **Power Factor Difference:** 0.029 (3.3%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (670.99) and measured PF (0.867) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   670.99 |        26.8% | 482,946.30 kVA | 2,057,676.73 TOTAL-HEAT |
| kW |   603.05 |        24.1% | 434,041.97 kWh | 208,365.41 Load-Heat |
| kVAR |   294.22 |        11.8% | 211,765.67 kVARh | - |
| WASTE |    67.95 |         2.7% | 48,904.33 WASTE | 23,476.93 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,057,676.73
- **Load-Heat (BTU/hr):** 208,365.41
- **Field-Heat (BTU/hr):** 23,476.93
- **Load-Heat (BTU, period total):** 149,971,003.41
- **Field-Heat (BTU, period total):** 16,897,516.98

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 4 |   670.99 |   603.05 |   280.28 |     0.90 |   26.8% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   471.77 |   406.39 |   227.71 |     0.86 |   18.9% |
| 01 |   275.42 |   213.72 |   172.89 |     0.78 |   11.0% |
| 02 |   249.70 |   193.03 |   157.47 |     0.77 |   10.0% |
| 03 |   265.57 |   203.94 |   167.14 |     0.77 |   10.6% |
| 04 |   289.76 |   221.94 |   182.50 |     0.77 |   11.6% |
| 05 |   368.71 |   278.40 |   238.79 |     0.76 |   14.7% |
| 06 |   947.59 |   838.64 |   425.13 |     0.89 |   37.9% |
| 07 |   933.34 |   845.25 |   388.84 |     0.91 |   37.3% |
| 08 |   905.09 |   813.93 |   386.31 |     0.90 |   36.2% |
| 09 |   885.81 |   810.02 |   353.09 |     0.91 |   35.4% |
| 10 |   825.25 |   746.35 |   342.80 |     0.90 |   33.0% |
| 11 |   748.20 |   680.71 |   300.74 |     0.91 |   29.9% |
| 12 |   820.57 |   760.55 |   302.13 |     0.93 |   32.8% |
| 13 |   764.54 |   688.26 |   322.60 |     0.90 |   30.6% |
| 14 |   840.80 |   776.96 |   315.31 |     0.92 |   33.6% |
| 15 |   662.26 |   574.42 |   316.95 |     0.87 |   26.5% |
| 16 |   813.78 |   756.09 |   294.12 |     0.93 |   32.6% |
| 17 |   810.52 |   744.93 |   310.53 |     0.92 |   32.4% |
| 18 |   741.03 |   684.01 |   276.08 |     0.92 |   29.6% |
| 19 |   767.84 |   713.13 |   277.18 |     0.93 |   30.7% |
| 20 |   624.15 |   569.45 |   243.83 |     0.91 |   25.0% |
| 21 |   745.66 |   702.02 |   245.94 |     0.94 |   29.8% |
| 22 |   643.62 |   594.44 |   236.78 |     0.92 |   25.7% |
| 23 |   702.88 |   656.58 |   241.91 |     0.93 |   28.1% |

---

# END OF REPORT

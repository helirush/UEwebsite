# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 317,366.5 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $61,886.48 (Cost per period)
- **Consumption Total Cost:** $91.94 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** NCDC1 West11c  
**Generated:** 2026-09-10 19:29:21  
**Data Source:** AN55031702-V-1minRES_44640CLP_260701-260731c.csv  

## Time Period

- **Period:** July 01, 2026 thru July 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 40,386

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

- **Transformer:** NCDC1 West11c
- **Power Factor:** 0.855
- **Total Energy (Actual):** 317,366.54 kWh (per period), 471.50 kW (per hour)
- **Total Waste (Actual):** 53,616.91 kWh (per period), 79.66 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_NCDC1-West11c_AN55031702-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_NCDC1-West11c_AN55031702-1minRES_260701-260731.md


## UNITY MANAGEMENT NCDC1 West11c SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 79.66 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 48.50 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **NCDC1 West11c Utility Cost Offset:** $15.53/hour
- **Annual Offset Savings:** $136070/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 176,969 BTU/hr
- **Total Cooling kW No Longer Needed:** 15.76 kW
- **Cooling Energy Cost Avoided:** $3.07/hour
- **Annual Cooling Savings:** $26923/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 95.42 kW
- **CO2e Emissions Avoided:** 312.03 metric tons/year
- **Monthly CO2e Reduction:** 26.00 metric tons/month
- **Hourly CO2e Reduction:** 0.0356 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $11857/year

### Total NCDC1 West11c Unity Savings

- **Per Hour:** $19.96
- **Per Day:** $479.04
- **Per Month:** $14371.23
- **Per Year:** $174850

### NCDC1 West11c Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 344.4 kVAR Max (Avg: 285.4 kVAR/hr ; 205,498 kVAR/mo)
- **Max Harmonic Distortion:** 33.9% Max (range: 3.0% - 33.9%)
- **Max Amperage:** 770A Max (range: 548A - 770A)

---

# NCDC1 West11c DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   278.39 |   268.72 |   290.43 |
| Line to Line Voltage (480v) |   482.18 |   465.43 |   503.04 |
| Current (AMPS) |   659.96 |   548.19 |   770.33 |
| Phase Angle (degrees) |    31.20 |    28.48 |    35.02 |
| Total Harmonic Distortion (PCT) |    16.89 |     3.00 |    33.86 |

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
| THD Phase A (%) | 5.6% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.6% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.6% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 16.9% | Field-level stress indicator |
| Max Phase THD | 5.6% | Highest THD among all three phases |
| Min Phase THD | 5.6% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 552.03 kW
  - **Maximum Load:** 638.40 kVA
  - **Percentage of Capacity (MAX):** 25.5%
- **Average Load:** 551.16 kVA
  - **Percentage of Capacity (Avg):** 22.0%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 551.16 kVA
- **Average Power Factor (PF):** 0.855

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 551.17 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 482.18 V
- Average Current (Iavg_A): 659.96 A
- Average kW (Psum_kW): 471.50 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.01 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.855
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (551.16) and measured PF (0.855) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   551.16 |        22.0% | 370,983.46 kVA | 1,608,824.41 TOTAL-HEAT |
| kW |   471.50 |        18.9% | 317,366.54 kWh | 232,517.65 Load-Heat |
| kVAR |   285.41 |        11.4% | 192,112.47 kVARh | - |
| WASTE |    79.66 |         3.2% | 53,616.91 WASTE | 39,282.27 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,608,824.41
- **Load-Heat (BTU/hr):** 232,517.65
- **Field-Heat (BTU/hr):** 39,282.27
- **Load-Heat (BTU, period total):** 156,507,627.95
- **Field-Heat (BTU, period total):** 26,440,897.02

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 |   551.16 |   471.50 |   285.33 |     0.86 |   22.0% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   534.41 |   456.07 |   278.53 |     0.85 |   21.4% |
| 01 |   530.50 |   452.24 |   277.29 |     0.85 |   21.2% |
| 02 |   531.85 |   453.26 |   278.21 |     0.85 |   21.3% |
| 03 |   530.50 |   452.29 |   277.20 |     0.85 |   21.2% |
| 04 |   525.75 |   447.42 |   276.06 |     0.85 |   21.0% |
| 05 |   543.30 |   465.81 |   279.53 |     0.86 |   21.7% |
| 06 |   545.08 |   466.92 |   281.15 |     0.86 |   21.8% |
| 07 |   541.63 |   462.99 |   280.99 |     0.85 |   21.7% |
| 08 |   543.82 |   464.96 |   282.00 |     0.85 |   21.8% |
| 09 |   543.06 |   464.34 |   281.56 |     0.86 |   21.7% |
| 10 |   545.62 |   466.67 |   282.64 |     0.86 |   21.8% |
| 11 |   555.66 |   476.29 |   286.12 |     0.86 |   22.2% |
| 12 |   559.75 |   480.10 |   287.74 |     0.86 |   22.4% |
| 13 |   561.62 |   482.30 |   287.70 |     0.86 |   22.5% |
| 14 |   570.62 |   490.83 |   290.97 |     0.86 |   22.8% |
| 15 |   572.47 |   492.56 |   291.68 |     0.86 |   22.9% |
| 16 |   567.41 |   487.81 |   289.76 |     0.86 |   22.7% |
| 17 |   567.35 |   486.79 |   291.35 |     0.86 |   22.7% |
| 18 |   569.92 |   487.40 |   295.27 |     0.86 |   22.8% |
| 19 |   571.83 |   488.84 |   296.55 |     0.85 |   22.9% |
| 20 |   569.25 |   485.67 |   296.82 |     0.85 |   22.8% |
| 21 |   562.40 |   479.97 |   293.03 |     0.85 |   22.5% |
| 22 |   552.28 |   471.23 |   287.95 |     0.85 |   22.1% |
| 23 |   544.66 |   465.44 |   282.87 |     0.85 |   21.8% |

---

# END OF REPORT

# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 473,335.1 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $92,300.35 (Cost per period)
- **Consumption Total Cost:** $128.20 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Deli G  
**Generated:** 2026-10-08 00:57:01  
**Data Source:** AN55050305-V-260930.2359c.csv  

## Time Period

- **Period:** September 01, 2026 thru September 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,199

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
- **Power Factor:** 0.858
- **Total Energy (Actual):** 473,335.14 kWh (per period), 657.43 kW (per hour)
- **Total Waste (Actual):** 54,776.96 kWh (per period), 76.08 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Deli-G_AN55050305-1minRES_260901-260930.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Deli-G_AN55050305-1minRES_260901-260930.md


## UNITY MANAGEMENT Deli G SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 76.08 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 45.33 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Deli G Utility Cost Offset:** $14.84/hour
- **Annual Offset Savings:** $129961/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 162,805 BTU/hr
- **Total Cooling kW No Longer Needed:** 14.25 kW
- **Cooling Energy Cost Avoided:** $2.78/hour
- **Annual Cooling Savings:** $24334/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 90.33 kW
- **CO2e Emissions Avoided:** 295.38 metric tons/year
- **Monthly CO2e Reduction:** 24.62 metric tons/month
- **Hourly CO2e Reduction:** 0.0337 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $11225/year

### Total Deli G Unity Savings

- **Per Hour:** $18.89
- **Per Day:** $453.48
- **Per Month:** $13604.38
- **Per Year:** $165520

### Deli G Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,971.8 kVAR Max (Avg: 325.3 kVAR/hr ; 234,220 kVAR/mo)
- **Max Harmonic Distortion:** 27.1% Max (range: 3.1% - 27.1%)
- **Max Amperage:** 2,560A Max (range: 84A - 2560A)

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
| Line to Neutral Voltage (277v) |   277.69 |   266.28 |   290.06 |
| Line to Line Voltage (480v) |   480.97 |   461.21 |   502.40 |
| Current (AMPS) |   883.60 |    83.90 |  2560.02 |
| Phase Angle (degrees) |    29.63 |     0.00 |    71.22 |
| Total Harmonic Distortion (PCT) |    14.04 |     3.07 |    27.09 |

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
| Unity THD Composite (%) | 14.0% | Field-level stress indicator |
| Max Phase THD | 4.7% | Highest THD among all three phases |
| Min Phase THD | 4.7% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,929.56 kW
  - **Maximum Load:** 2,135.25 kVA
  - **Percentage of Capacity (MAX):** 85.4%
- **Average Load:** 733.51 kVA
  - **Percentage of Capacity (Avg):** 29.3%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 733.51 kVA
- **Average Power Factor (PF):** 0.858

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 736.10 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 480.97 V
- Average Current (Iavg_A): 883.60 A
- Average kW (Psum_kW): 657.43 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 2.59 kVA (0.4%)
- **Calculated PF (kW/kVA from averages):** 0.893
- **Power Factor Difference:** 0.035 (4.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (733.51) and measured PF (0.858) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   733.51 |        29.3% | 528,112.10 kVA | 2,243,227.90 TOTAL-HEAT |
| kW |   657.43 |        26.3% | 473,335.14 kWh | 232,672.59 Load-Heat |
| kVAR |   325.30 |        13.0% | 234,214.08 kVARh | - |
| WASTE |    76.08 |         3.0% | 54,776.96 WASTE | 26,926.16 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,243,227.90
- **Load-Heat (BTU/hr):** 232,672.59
- **Field-Heat (BTU/hr):** 26,926.16
- **Load-Heat (BTU, period total):** 167,520,383.48
- **Field-Heat (BTU, period total):** 19,386,385.61

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 9 |   733.51 |   657.43 |   308.87 |     0.90 |   29.3% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   548.50 |   468.52 |   274.78 |     0.85 |   21.9% |
| 01 |   317.03 |   246.33 |   198.88 |     0.78 |   12.7% |
| 02 |   282.95 |   213.79 |   184.27 |     0.76 |   11.3% |
| 03 |   297.89 |   223.60 |   193.84 |     0.75 |   11.9% |
| 04 |   313.40 |   233.74 |   204.59 |     0.75 |   12.5% |
| 05 |   356.23 |   272.49 |   226.48 |     0.76 |   14.2% |
| 06 |   844.93 |   744.34 |   384.48 |     0.88 |   33.8% |
| 07 |   847.87 |   770.07 |   342.09 |     0.91 |   33.9% |
| 08 |   908.42 |   816.31 |   385.39 |     0.90 |   36.3% |
| 09 |   877.45 |   803.00 |   342.32 |     0.92 |   35.1% |
| 10 |   845.25 |   766.27 |   343.71 |     0.91 |   33.8% |
| 11 |   785.94 |   709.87 |   325.50 |     0.90 |   31.4% |
| 12 |   921.24 |   845.23 |   355.00 |     0.92 |   36.8% |
| 13 |   852.42 |   764.58 |   363.84 |     0.90 |   34.1% |
| 14 |   935.27 |   859.64 |   357.16 |     0.92 |   37.4% |
| 15 |   779.79 |   691.59 |   347.46 |     0.89 |   31.2% |
| 16 |   924.76 |   854.13 |   344.88 |     0.92 |   37.0% |
| 17 |   909.29 |   832.85 |   353.16 |     0.92 |   36.4% |
| 18 |   883.66 |   814.22 |   331.66 |     0.92 |   35.3% |
| 19 |   888.39 |   818.29 |   335.58 |     0.92 |   35.5% |
| 20 |   768.93 |   701.73 |   302.30 |     0.91 |   30.8% |
| 21 |   880.67 |   820.75 |   309.78 |     0.93 |   35.2% |
| 22 |   797.88 |   734.98 |   299.13 |     0.92 |   31.9% |
| 23 |   836.04 |   771.92 |   306.71 |     0.92 |   33.4% |

---

# END OF REPORT

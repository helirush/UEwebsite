# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 214,796.6 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $41,885.34 (Cost per period)
- **Consumption Total Cost:** $60.62 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL1-MShop  
**Generated:** 2026-10-08 00:53:17  
**Data Source:** AN55050287-V-260930.2359c.csv  

## Time Period

- **Period:** September 01, 2026 thru September 29, 2026
- **Number of Days:** 29 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 41,459

- **Dataset Coverage:** Complete month (96.7% of 30-day month)
- **Billing Scale Factor:** 1.000x (no normalization needed)

## Facility Information

- **Facility:** Foster Farms
- **Location:** Livingston HQ Facility
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** PL1-MShop
- **Power Factor:** 0.866
- **Total Energy (Actual):** 214,796.62 kWh (per period), 310.86 kW (per hour)
- **Total Waste (Actual):** 32,640.35 kWh (per period), 47.24 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL1-MShop_AN55050287-1minRES_260901-260929.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL1-MShop_AN55050287-1minRES_260901-260929.md


## UNITY MANAGEMENT PL1-MShop SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 47.24 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 27.59 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL1-MShop Utility Cost Offset:** $9.21/hour
- **Annual Offset Savings:** $80691/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 99,017 BTU/hr
- **Total Cooling kW No Longer Needed:** 8.66 kW
- **Cooling Energy Cost Avoided:** $1.69/hour
- **Annual Cooling Savings:** $14800/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 55.90 kW
- **CO2e Emissions Avoided:** 182.81 metric tons/year
- **Monthly CO2e Reduction:** 15.23 metric tons/month
- **Hourly CO2e Reduction:** 0.0209 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $6947/year

### Total PL1-MShop Unity Savings

- **Per Hour:** $11.69
- **Per Day:** $280.65
- **Per Month:** $8419.53
- **Per Year:** $102438

### PL1-MShop Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 669.2 kVAR Max (Avg: 177.8 kVAR/hr ; 127,989 kVAR/mo)
- **Max Harmonic Distortion:** 27.8% Max (range: 3.0% - 27.8%)
- **Max Amperage:** 1,197A Max (range: 77A - 1197A)

---

# PL1-MShop DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   282.63 |   273.29 |   293.54 |
| Line to Line Voltage (480v) |   489.54 |   473.35 |   508.43 |
| Current (AMPS) |   423.45 |    76.62 |  1197.11 |
| Phase Angle (degrees) |    29.85 |    18.38 |    46.37 |
| Total Harmonic Distortion (PCT) |    13.87 |     3.03 |    27.77 |

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
| THD Phase A (%) | 4.6% | IEEE standard per-phase calculation |
| THD Phase B (%) | 4.6% | IEEE standard per-phase calculation |
| THD Phase C (%) | 4.6% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 13.9% | Field-level stress indicator |
| Max Phase THD | 4.6% | Highest THD among all three phases |
| Min Phase THD | 4.6% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 892.80 kW
  - **Maximum Load:** 1,008.63 kVA
  - **Percentage of Capacity (MAX):** 40.3%
- **Average Load:** 358.09 kVA
  - **Percentage of Capacity (Avg):** 14.3%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 358.09 kVA
- **Average Power Factor (PF):** 0.866

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 359.05 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 489.54 V
- Average Current (Iavg_A): 423.45 A
- Average kW (Psum_kW): 310.86 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.95 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.866
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (358.09) and measured PF (0.866) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   358.09 |        14.3% | 247,436.97 kVA | 1,060,686.30 TOTAL-HEAT |
| kW |   310.86 |        12.4% | 214,796.62 kWh | 139,919.17 Load-Heat |
| kVAR |   177.76 |         7.1% | 122,831.05 kVARh | - |
| WASTE |    47.24 |         1.9% | 32,640.35 WASTE | 21,262.03 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,060,686.30
- **Load-Heat (BTU/hr):** 139,919.17
- **Field-Heat (BTU/hr):** 21,262.03
- **Load-Heat (BTU, period total):** 96,681,816.14
- **Field-Heat (BTU, period total):** 14,691,705.79

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 9 |   358.09 |   310.86 |   176.70 |     0.87 |   14.3% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   428.47 |   373.59 |   209.08 |     0.87 |   17.1% |
| 01 |   414.93 |   358.69 |   207.87 |     0.86 |   16.6% |
| 02 |   428.63 |   374.43 |   207.92 |     0.87 |   17.1% |
| 03 |   410.13 |   356.16 |   202.67 |     0.87 |   16.4% |
| 04 |   422.79 |   368.64 |   206.24 |     0.87 |   16.9% |
| 05 |   405.37 |   354.37 |   196.05 |     0.87 |   16.2% |
| 06 |   417.24 |   363.73 |   203.62 |     0.87 |   16.7% |
| 07 |   430.05 |   373.34 |   212.69 |     0.87 |   17.2% |
| 08 |   463.66 |   402.42 |   229.60 |     0.87 |   18.5% |
| 09 |   451.61 |   392.38 |   222.77 |     0.87 |   18.1% |
| 10 |   440.98 |   381.15 |   220.84 |     0.86 |   17.6% |
| 11 |   438.23 |   381.43 |   214.66 |     0.87 |   17.5% |
| 12 |   394.83 |   340.99 |   197.99 |     0.86 |   15.8% |
| 13 |   322.20 |   276.70 |   163.43 |     0.86 |   12.9% |
| 14 |   250.83 |   216.78 |   124.74 |     0.86 |   10.0% |
| 15 |   217.98 |   189.37 |   106.71 |     0.87 |    8.7% |
| 16 |   200.93 |   173.07 |   100.90 |     0.86 |    8.0% |
| 17 |   183.15 |   153.90 |    97.99 |     0.84 |    7.3% |
| 18 |   180.65 |   150.96 |    97.96 |     0.84 |    7.2% |
| 19 |   284.48 |   245.31 |   142.66 |     0.86 |   11.4% |
| 20 |   317.95 |   276.86 |   155.50 |     0.87 |   12.7% |
| 21 |   330.92 |   290.90 |   156.82 |     0.88 |   13.2% |
| 22 |   356.88 |   313.76 |   169.25 |     0.88 |   14.3% |
| 23 |   399.64 |   350.47 |   191.27 |     0.88 |   16.0% |

---

# END OF REPORT

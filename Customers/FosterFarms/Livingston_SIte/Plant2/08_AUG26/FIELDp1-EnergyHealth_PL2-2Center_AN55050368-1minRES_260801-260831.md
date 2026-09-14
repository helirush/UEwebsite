# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 225,123.8 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $43,899.14 (Cost per period)
- **Consumption Total Cost:** $59.07 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL2-2Center  
**Generated:** 2026-09-12 13:39:51  
**Data Source:** AN55050368-V-1minRES_44640CLP_260801-260831c.csv  

## Time Period

- **Period:** August 01, 2026 thru August 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,588

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

- **Transformer:** PL2-2Center
- **Power Factor:** 0.878
- **Total Energy (Actual):** 225,123.78 kWh (per period), 302.94 kW (per hour)
- **Total Waste (Actual):** 30,757.90 kWh (per period), 41.39 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL2-2Center_AN55050368-1minRES_260801-260831.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL2-2Center_AN55050368-1minRES_260801-260831.md


## UNITY MANAGEMENT PL2-2Center SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 41.39 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 23.65 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL2-2Center Utility Cost Offset:** $8.07/hour
- **Annual Offset Savings:** $70702/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 85,563 BTU/hr
- **Total Cooling kW No Longer Needed:** 7.64 kW
- **Cooling Energy Cost Avoided:** $1.49/hour
- **Annual Cooling Savings:** $13052/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 49.03 kW
- **CO2e Emissions Avoided:** 160.34 metric tons/year
- **Monthly CO2e Reduction:** 13.36 metric tons/month
- **Hourly CO2e Reduction:** 0.0183 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $6093/year

### Total PL2-2Center Unity Savings

- **Per Hour:** $10.26
- **Per Day:** $246.16
- **Per Month:** $7384.66
- **Per Year:** $89847

### PL2-2Center Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 306.0 kVAR Max (Avg: 163.7 kVAR/hr ; 117,847 kVAR/mo)
- **Max Harmonic Distortion:** 31.7% Max (range: 3.0% - 31.7%)
- **Max Amperage:** 735A Max (range: 77A - 735A)

---

# PL2-2Center DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   279.44 |   269.01 |   291.85 |
| Line to Line Voltage (480v) |   484.01 |   465.94 |   505.50 |
| Current (AMPS) |   412.44 |    77.01 |   735.46 |
| Phase Angle (degrees) |    28.46 |    20.12 |    39.56 |
| Total Harmonic Distortion (PCT) |    15.34 |     3.00 |    31.73 |

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
| THD Phase A (%) | 5.1% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.1% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.1% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 15.3% | Field-level stress indicator |
| Max Phase THD | 5.1% | Highest THD among all three phases |
| Min Phase THD | 5.1% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 538.79 kW
  - **Maximum Load:** 619.64 kVA
  - **Percentage of Capacity (MAX):** 24.8%
- **Average Load:** 344.33 kVA
  - **Percentage of Capacity (Avg):** 13.8%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 344.33 kVA
- **Average Power Factor (PF):** 0.878

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 345.76 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 484.01 V
- Average Current (Iavg_A): 412.44 A
- Average kW (Psum_kW): 302.94 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 1.43 kVA (0.4%)
- **Calculated PF (kW/kVA from averages):** 0.876
- **Power Factor Difference:** 0.002 (0.2%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (344.33) and measured PF (0.878) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   344.33 |        13.8% | 255,881.69 kVA | 1,033,669.58 TOTAL-HEAT |
| kW |   302.94 |        12.1% | 225,123.78 kWh | 124,250.82 Load-Heat |
| kVAR |   163.68 |         6.5% | 121,633.55 kVARh | - |
| WASTE |    41.39 |         1.7% | 30,757.90 WASTE | 16,975.97 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,033,669.58
- **Load-Heat (BTU/hr):** 124,250.82
- **Field-Heat (BTU/hr):** 16,975.97
- **Load-Heat (BTU, period total):** 92,334,927.02
- **Field-Heat (BTU, period total):** 12,615,410.05

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 8 |   344.33 |   302.94 |   163.13 |     0.88 |   13.8% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   351.57 |   309.74 |   165.76 |     0.88 |   14.1% |
| 01 |   383.16 |   336.21 |   183.34 |     0.88 |   15.3% |
| 02 |   377.41 |   331.14 |   180.64 |     0.88 |   15.1% |
| 03 |   375.52 |   330.44 |   177.91 |     0.88 |   15.0% |
| 04 |   372.01 |   328.23 |   174.62 |     0.88 |   14.9% |
| 05 |   370.96 |   327.50 |   173.88 |     0.88 |   14.8% |
| 06 |   370.48 |   326.44 |   174.84 |     0.88 |   14.8% |
| 07 |   371.06 |   327.10 |   174.79 |     0.88 |   14.8% |
| 08 |   382.27 |   335.24 |   183.20 |     0.88 |   15.3% |
| 09 |   379.76 |   329.19 |   188.80 |     0.87 |   15.2% |
| 10 |   389.73 |   340.10 |   189.87 |     0.87 |   15.6% |
| 11 |   382.20 |   334.31 |   184.64 |     0.87 |   15.3% |
| 12 |   367.75 |   323.51 |   174.22 |     0.88 |   14.7% |
| 13 |   322.48 |   287.32 |   145.87 |     0.89 |   12.9% |
| 14 |   303.67 |   269.94 |   138.70 |     0.89 |   12.1% |
| 15 |   282.93 |   252.51 |   127.11 |     0.89 |   11.3% |
| 16 |   273.63 |   243.87 |   123.68 |     0.89 |   10.9% |
| 17 |   258.92 |   230.92 |   116.71 |     0.89 |   10.4% |
| 18 |   222.98 |   196.76 |   104.48 |     0.88 |    8.9% |
| 19 |   263.98 |   231.04 |   126.93 |     0.88 |   10.6% |
| 20 |   338.89 |   294.93 |   166.29 |     0.87 |   13.6% |
| 21 |   363.34 |   317.95 |   175.45 |     0.88 |   14.5% |
| 22 |   370.76 |   324.61 |   178.73 |     0.88 |   14.8% |
| 23 |   388.23 |   341.34 |   184.56 |     0.88 |   15.5% |

---

# END OF REPORT

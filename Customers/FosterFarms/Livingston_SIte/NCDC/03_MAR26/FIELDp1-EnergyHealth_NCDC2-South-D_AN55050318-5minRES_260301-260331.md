# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 2,511,648.5 kWh (Usage per period)
- **Consumption Cost per unit:** $0.175/kWh (Cost per kWh)
- **Consumption Total Cost:** $438,784.99 (Cost per period)
- **Consumption Total Cost:** $126.43 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** NCDC2 South D  
**Generated:** 2026-09-10 22:47:49  
**Data Source:** AN55050318-V-1minRES_44550CLP_260301-260331c.csv  

## Time Period

- **Period:** March 01, 2026 thru March 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 5-minute
- **Total Data Points:** 41,648

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

- **Transformer:** NCDC2 South D
- **Power Factor:** 0.908
- **Total Energy (Actual):** 2,511,648.48 kWh (per period), 723.68 kW (per hour)
- **Total Waste (Actual):** 256,702.77 kWh (per period), 73.96 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_NCDC2-South-D_AN55050318-5minRES_260301-260331.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_NCDC2-South-D_AN55050318-5minRES_260301-260331.md


## UNITY MANAGEMENT NCDC2 South D SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 73.96 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 39.27 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1747/kWh (all-inclusive)
- **NCDC2 South D Utility Cost Offset:** $12.92/hour
- **Annual Offset Savings:** $113192/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 142,192 BTU/hr
- **Total Cooling kW No Longer Needed:** 12.46 kW
- **Cooling Energy Cost Avoided:** $2.18/hour
- **Annual Cooling Savings:** $19064/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 86.42 kW
- **CO2e Emissions Avoided:** 282.61 metric tons/year
- **Monthly CO2e Reduction:** 23.55 metric tons/month
- **Hourly CO2e Reduction:** 0.0323 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $10880/year

### Total NCDC2 South D Unity Savings

- **Per Hour:** $16.34
- **Per Day:** $392.15
- **Per Month:** $11764.63
- **Per Year:** $143136

### NCDC2 South D Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 421.4 kVAR Max (Avg: 335.4 kVAR/hr ; 241,519 kVAR/mo)
- **Max Harmonic Distortion:** 28.4% Max (range: 3.2% - 28.4%)
- **Max Amperage:** 1,306A Max (range: 622A - 1306A)

---

# NCDC2 South D DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   277.15 |   267.58 |   286.97 |
| Line to Line Voltage (480v) |   480.03 |   463.45 |   497.05 |
| Current (AMPS) |   959.49 |   622.06 |  1305.54 |
| Phase Angle (degrees) |    24.74 |    15.20 |    30.46 |
| Total Harmonic Distortion (PCT) |    15.52 |     3.15 |    28.37 |

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
| THD Phase A (%) | 5.2% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.2% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.2% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 15.5% | Field-level stress indicator |
| Max Phase THD | 5.2% | Highest THD among all three phases |
| Min Phase THD | 5.2% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 978.11 kW
  - **Maximum Load:** 1,063.97 kVA
  - **Percentage of Capacity (MAX):** 42.6%
- **Average Load:** 797.64 kVA
  - **Percentage of Capacity (Avg):** 31.9%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 797.64 kVA
- **Average Power Factor (PF):** 0.908

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 797.76 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 480.03 V
- Average Current (Iavg_A): 959.49 A
- Average kW (Psum_kW): 723.68 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.12 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.907
- **Power Factor Difference:** 0.001 (0.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (797.64) and measured PF (0.908) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   797.64 |        31.9% | 2,768,351.25 kVA | 2,469,295.41 TOTAL-HEAT |
| kW |   723.68 |        28.9% | 2,511,648.48 kWh | 228,972.02 Load-Heat |
| kVAR |   335.44 |        13.4% | 1,164,212.42 kVARh | - |
| WASTE |    73.96 |         3.0% | 256,702.77 WASTE | 23,402.06 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,469,295.41
- **Load-Heat (BTU/hr):** 228,972.02
- **Field-Heat (BTU/hr):** 23,402.06
- **Load-Heat (BTU, period total):** 794,685,545.61
- **Field-Heat (BTU, period total):** 81,220,752.59

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 3 |   797.64 |   723.68 |   334.52 |     0.91 |   31.9% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   798.54 |   723.78 |   336.57 |     0.91 |   31.9% |
| 01 |   792.52 |   717.59 |   335.55 |     0.91 |   31.7% |
| 02 |   804.50 |   728.28 |   341.05 |     0.91 |   32.2% |
| 03 |   777.26 |   702.48 |   331.54 |     0.90 |   31.1% |
| 04 |   786.67 |   712.96 |   331.49 |     0.91 |   31.5% |
| 05 |   766.13 |   692.93 |   325.69 |     0.90 |   30.6% |
| 06 |   780.30 |   706.42 |   330.54 |     0.91 |   31.2% |
| 07 |   770.71 |   695.49 |   331.24 |     0.90 |   30.8% |
| 08 |   769.25 |   692.09 |   335.23 |     0.90 |   30.8% |
| 09 |   772.60 |   698.30 |   329.67 |     0.90 |   30.9% |
| 10 |   790.14 |   717.36 |   330.34 |     0.91 |   31.6% |
| 11 |   787.46 |   713.96 |   331.36 |     0.91 |   31.5% |
| 12 |   820.20 |   746.28 |   339.51 |     0.91 |   32.8% |
| 13 |   800.42 |   725.70 |   336.84 |     0.91 |   32.0% |
| 14 |   827.83 |   751.78 |   345.93 |     0.91 |   33.1% |
| 15 |   791.91 |   719.97 |   328.79 |     0.91 |   31.7% |
| 16 |   790.91 |   720.66 |   324.98 |     0.91 |   31.6% |
| 17 |   804.70 |   735.83 |   324.77 |     0.91 |   32.2% |
| 18 |   845.88 |   773.71 |   341.13 |     0.91 |   33.8% |
| 19 |   823.58 |   748.82 |   342.07 |     0.91 |   32.9% |
| 20 |   845.27 |   770.19 |   347.58 |     0.91 |   33.8% |
| 21 |   800.96 |   726.96 |   335.27 |     0.91 |   32.0% |
| 22 |   801.39 |   726.90 |   336.48 |     0.91 |   32.1% |
| 23 |   796.81 |   722.26 |   335.65 |     0.91 |   31.9% |

---

# END OF REPORT

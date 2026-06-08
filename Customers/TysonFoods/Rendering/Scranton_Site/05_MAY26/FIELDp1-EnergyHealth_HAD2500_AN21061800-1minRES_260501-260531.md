# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 929,912.7 kWh (Usage per period)
- **Consumption Cost per unit:** $0.110/kWh (Cost per kWh)
- **Consumption Total Cost:** $102,290.40 (Cost per period)
- **Consumption Total Cost:** $137.51 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** HAD2500  
**Generated:** 2026-06-03 16:34:56  
**Data Source:** AN21061800-V-1minRES_44640CLP_260501-260531c.csv  

## Time Period

- **Period:** May 01, 2026 thru May 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,633

- **Dataset Coverage:** Complete month (100.0% of 31-day month)
- **Billing Scale Factor:** 1.000x (no normalization needed)

## Facility Information

- **Facility:** Tyson Foods
- **Location:** Scranton Facility
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** HAD2500
- **Power Factor:** 0.954
- **Total Energy (Actual):** 929,912.72 kWh (per period), 1250.08 kW (per hour)
- **Total Waste (Actual):** 47,606.30 kWh (per period), 64.00 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_HAD2500_AN21061800-1minRES_260501-260531.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_HAD2500_AN21061800-1minRES_260501-260531.md


## UNITY MANAGEMENT HAD2500 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 64.00 kW/hr
- **Blended Electricity Rate:** $0.1100/kWh (all-inclusive)
- **HAD2500 Utility Cost Offset:** $7.04/hour
- **Annual Offset Savings:** $61668/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 238,773 BTU/hr
- **Total Cooling kW No Longer Needed:** 20.93 kW
- **Cooling Energy Cost Avoided:** $2.30/hour
- **Annual Cooling Savings:** $20164/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 84.92 kW
- **CO2e Emissions Avoided:** 277.71 metric tons/year
- **Monthly CO2e Reduction:** 23.14 metric tons/month
- **Hourly CO2e Reduction:** 0.0317 metric tons/hour
- **CO2e Value Rate:** $10/metric ton
- **Annual CO2e Value:** $2777/year

### Total HAD2500 Unity Savings

- **Per Hour:** $9.66
- **Per Day:** $231.80
- **Per Month:** $6954.12
- **Per Year:** $84608

### HAD2500 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 905.4 kVAR Max (Avg: 405.1 kVAR/hr ; 291,665 kVAR/mo)
- **Max Harmonic Distortion:** 31.3% Max (range: 3.4% - 31.3%)
- **Max Amperage:** 2,254A Max (range: 328A - 2254A)

---

# HAD2500 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   274.99 |   268.34 |   284.61 |
| Line to Line Voltage (480v) |   476.30 |   464.78 |   492.97 |
| Current (AMPS) |  1597.20 |   328.49 |  2254.01 |
| Phase Angle (degrees) |    16.89 |     2.56 |    38.56 |
| Total Harmonic Distortion (PCT) |    16.52 |     3.39 |    31.33 |

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
| THD Phase A (%) | 5.5% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.5% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.5% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 16.5% | Field-level stress indicator |
| Max Phase THD | 5.5% | Highest THD among all three phases |
| Min Phase THD | 5.5% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,666.12 kW
  - **Maximum Load:** 1,811.18 kVA
  - **Percentage of Capacity (MAX):** 72.4%
- **Average Load:** 1,314.08 kVA
  - **Percentage of Capacity (Avg):** 52.6%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,314.08 kVA
- **Average Power Factor (PF):** 0.954

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,317.67 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 476.30 V
- Average Current (Iavg_A): 1597.20 A
- Average kW (Psum_kW): 1250.08 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 3.59 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.949
- **Power Factor Difference:** 0.006 (0.6%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1314.08) and measured PF (0.954) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,314.08 |        52.6% | 977,519.02 kVA | 4,265,446.08 TOTAL-HEAT |
| kW | 1,250.08 |        50.0% | 929,912.72 kWh | 207,732.11 Load-Heat |
| kVAR |   405.09 |        16.2% | 301,339.94 kVARh | - |
| WASTE |    64.00 |         2.6% | 47,606.30 WASTE | 10,634.71 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 4,265,446.08
- **Load-Heat (BTU/hr):** 207,732.11
- **Field-Heat (BTU/hr):** 10,634.71
- **Load-Heat (BTU, period total):** 154,528,454.73
- **Field-Heat (BTU, period total):** 7,910,986.90

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 5 | 1,314.08 | 1,250.08 |   397.24 |     0.95 |   52.6% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,345.70 | 1,278.51 |   416.17 |     0.95 |   53.8% |
| 01 | 1,346.26 | 1,277.20 |   421.85 |     0.95 |   53.9% |
| 02 | 1,341.47 | 1,272.72 |   419.80 |     0.95 |   53.7% |
| 03 | 1,326.70 | 1,259.44 |   412.84 |     0.95 |   53.1% |
| 04 | 1,315.39 | 1,250.66 |   400.80 |     0.95 |   52.6% |
| 05 | 1,299.18 | 1,237.88 |   385.11 |     0.95 |   52.0% |
| 06 | 1,283.40 | 1,223.48 |   376.16 |     0.95 |   51.3% |
| 07 | 1,286.69 | 1,226.49 |   377.73 |     0.95 |   51.5% |
| 08 | 1,274.67 | 1,214.84 |   375.41 |     0.95 |   51.0% |
| 09 | 1,291.83 | 1,227.07 |   394.81 |     0.95 |   51.7% |
| 10 | 1,271.89 | 1,211.24 |   379.33 |     0.95 |   50.9% |
| 11 | 1,278.49 | 1,219.36 |   375.03 |     0.95 |   51.1% |
| 12 | 1,270.22 | 1,211.73 |   372.13 |     0.95 |   50.8% |
| 13 | 1,309.12 | 1,249.02 |   384.17 |     0.95 |   52.4% |
| 14 | 1,309.73 | 1,247.57 |   390.95 |     0.95 |   52.4% |
| 15 | 1,315.32 | 1,252.12 |   394.73 |     0.95 |   52.6% |
| 16 | 1,326.34 | 1,261.69 |   401.38 |     0.95 |   53.1% |
| 17 | 1,350.91 | 1,286.20 |   403.75 |     0.95 |   54.0% |
| 18 | 1,345.07 | 1,280.85 |   400.05 |     0.95 |   53.8% |
| 19 | 1,349.59 | 1,282.90 |   408.17 |     0.95 |   54.0% |
| 20 | 1,335.87 | 1,268.98 |   408.76 |     0.95 |   53.4% |
| 21 | 1,322.10 | 1,255.08 |   410.23 |     0.95 |   52.9% |
| 22 | 1,317.12 | 1,249.79 |   410.11 |     0.95 |   52.7% |
| 23 | 1,324.79 | 1,257.07 |   414.33 |     0.95 |   53.0% |

---

# END OF REPORT

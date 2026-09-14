# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 778,982.2 kWh (Usage per period)
- **Consumption Cost per unit:** $0.318/kWh (Cost per kWh)
- **Consumption Total Cost:** $247,857.96 (Cost per period)
- **Consumption Total Cost:** $333.14 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T12 Main  
**Generated:** 2026-09-10 23:16:21  
**Data Source:** AN54021613-V-1minRES_44640CLP_260101-260131c.csv  

## Time Period

- **Period:** January 01, 2026 thru January 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,640

- **Dataset Coverage:** Complete month (100.0% of 31-day month)
- **Billing Scale Factor:** 1.000x (no normalization needed)

## Facility Information

- **Facility:** Foster Farms
- **Location:** Cherry Ave Facility
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** T12 Main
- **Power Factor:** 0.837
- **Total Energy (Actual):** 778,982.15 kWh (per period), 1047.02 kW (per hour)
- **Total Waste (Actual):** 151,101.22 kWh (per period), 203.09 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T12-Main_AN54021613-1minRES_260101-260131.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T12-Main_AN54021613-1minRES_260101-260131.md


## UNITY MANAGEMENT T12 Main SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 203.09 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 135.09 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.3182/kWh (all-inclusive)
- **T12 Main Utility Cost Offset:** $64.62/hour
- **Annual Offset Savings:** $566076/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 534,246 BTU/hr
- **Total Cooling kW No Longer Needed:** 46.86 kW
- **Cooling Energy Cost Avoided:** $14.91/hour
- **Annual Cooling Savings:** $130612/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 249.95 kW
- **CO2e Emissions Avoided:** 817.39 metric tons/year
- **Monthly CO2e Reduction:** 68.12 metric tons/month
- **Hourly CO2e Reduction:** 0.0933 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $31469/year

### Total T12 Main Unity Savings

- **Per Hour:** $83.12
- **Per Day:** $1994.95
- **Per Month:** $59848.53
- **Per Year:** $728157

### T12 Main Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,088.7 kVAR Max (Avg: 683.0 kVAR/hr ; 491,782 kVAR/mo)
- **Max Harmonic Distortion:** 30.9% Max (range: 3.0% - 30.9%)
- **Max Amperage:** 2,576A Max (range: 526A - 2576A)

---

# T12 Main DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   269.58 |   259.02 |   284.58 |
| Line to Line Voltage (480v) |   466.93 |   448.63 |   492.90 |
| Current (AMPS) |  1554.28 |   526.25 |  2576.14 |
| Phase Angle (degrees) |    33.12 |    27.25 |    41.84 |
| Total Harmonic Distortion (PCT) |    16.35 |     3.00 |    30.88 |

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
| THD Phase C (%) | 5.4% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 16.4% | Field-level stress indicator |
| Max Phase THD | 5.5% | Highest THD among all three phases |
| Min Phase THD | 5.4% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,447.52 kW
  - **Maximum Load:** 1,765.91 kVA
  - **Percentage of Capacity (MAX):** 70.6%
- **Average Load:** 1,250.11 kVA
  - **Percentage of Capacity (Avg):** 50.0%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,250.11 kVA
- **Average Power Factor (PF):** 0.837

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,257.02 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 466.93 V
- Average Current (Iavg_A): 1554.28 A
- Average kW (Psum_kW): 1047.02 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 6.90 kVA (0.6%)
- **Calculated PF (kW/kVA from averages):** 0.833
- **Power Factor Difference:** 0.004 (0.5%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1250.11) and measured PF (0.837) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,250.11 |        50.0% | 930,083.37 kVA | 3,572,577.57 TOTAL-HEAT |
| kW | 1,047.02 |        41.9% | 778,982.15 kWh | 580,400.48 Load-Heat |
| kVAR |   683.03 |        27.3% | 508,175.06 kVARh | - |
| WASTE |   203.09 |         8.1% | 151,101.22 WASTE | 112,581.81 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,572,577.57
- **Load-Heat (BTU/hr):** 580,400.48
- **Field-Heat (BTU/hr):** 112,581.81
- **Load-Heat (BTU, period total):** 431,817,958.90
- **Field-Heat (BTU, period total):** 83,760,868.53

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 1 | 1,250.11 | 1,047.02 |   682.13 |     0.84 |   50.0% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,316.80 | 1,094.57 |   731.20 |     0.83 |   52.7% |
| 01 | 1,357.76 | 1,130.07 |   752.06 |     0.83 |   54.3% |
| 02 | 1,370.42 | 1,143.75 |   754.35 |     0.83 |   54.8% |
| 03 | 1,346.30 | 1,120.76 |   745.41 |     0.83 |   53.9% |
| 04 | 1,325.51 | 1,107.40 |   727.97 |     0.84 |   53.0% |
| 05 | 1,353.97 | 1,130.33 |   744.84 |     0.83 |   54.2% |
| 06 | 1,358.04 | 1,136.57 |   742.90 |     0.84 |   54.3% |
| 07 | 1,318.59 | 1,100.33 |   726.25 |     0.83 |   52.7% |
| 08 | 1,297.91 | 1,083.15 |   714.63 |     0.83 |   51.9% |
| 09 | 1,250.92 | 1,050.73 |   678.17 |     0.84 |   50.0% |
| 10 | 1,323.29 | 1,109.88 |   720.19 |     0.84 |   52.9% |
| 11 | 1,306.35 | 1,095.64 |   711.03 |     0.84 |   52.3% |
| 12 | 1,268.62 | 1,063.99 |   690.51 |     0.84 |   50.7% |
| 13 | 1,227.34 | 1,028.21 |   669.79 |     0.84 |   49.1% |
| 14 | 1,148.30 |   965.01 |   621.72 |     0.84 |   45.9% |
| 15 | 1,144.25 |   972.11 |   602.64 |     0.85 |   45.8% |
| 16 | 1,140.54 |   976.84 |   587.82 |     0.86 |   45.6% |
| 17 | 1,116.20 |   958.81 |   570.99 |     0.86 |   44.6% |
| 18 | 1,058.93 |   903.11 |   552.23 |     0.85 |   42.4% |
| 19 |   988.00 |   835.49 |   526.84 |     0.85 |   39.5% |
| 20 | 1,196.22 |   991.79 |   667.61 |     0.83 |   47.8% |
| 21 | 1,273.40 | 1,051.42 |   717.51 |     0.83 |   50.9% |
| 22 | 1,229.05 | 1,011.18 |   697.93 |     0.82 |   49.2% |
| 23 | 1,285.98 | 1,067.30 |   716.58 |     0.83 |   51.4% |

---

# END OF REPORT

# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 1,006,294.9 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $196,227.51 (Cost per period)
- **Consumption Total Cost:** $271.71 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** BNR-1  
**Generated:** 2026-09-12 13:37:17  
**Data Source:** AN55050325-V-1minRES_44640CLP_260801-260831c.csv  

## Time Period

- **Period:** August 01, 2026 thru August 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,331

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

- **Transformer:** BNR-1
- **Power Factor:** 0.893
- **Total Energy (Actual):** 1,006,294.94 kWh (per period), 1393.41 kW (per hour)
- **Total Waste (Actual):** 121,040.85 kWh (per period), 167.60 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_BNR-1_AN55050325-1minRES_260801-260831.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_BNR-1_AN55050325-1minRES_260801-260831.md


## UNITY MANAGEMENT BNR-1 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 167.60 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 96.57 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **BNR-1 Utility Cost Offset:** $32.68/hour
- **Annual Offset Savings:** $286301/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 370,204 BTU/hr
- **Total Cooling kW No Longer Needed:** 33.07 kW
- **Cooling Energy Cost Avoided:** $6.45/hour
- **Annual Cooling Savings:** $56482/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 200.67 kW
- **CO2e Emissions Avoided:** 656.22 metric tons/year
- **Monthly CO2e Reduction:** 54.69 metric tons/month
- **Hourly CO2e Reduction:** 0.0749 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $24936/year

### Total BNR-1 Unity Savings

- **Per Hour:** $41.98
- **Per Day:** $1007.45
- **Per Month:** $30223.54
- **Per Year:** $367720

### BNR-1 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 784.2 kVAR Max (Avg: 703.7 kVAR/hr ; 506,653 kVAR/mo)
- **Max Harmonic Distortion:** 33.3% Max (range: 3.3% - 33.3%)
- **Max Amperage:** 2,061A Max (range: 1740A - 2061A)

---

# BNR-1 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   273.10 |   265.30 |   284.58 |
| Line to Line Voltage (480v) |   473.02 |   459.51 |   492.90 |
| Current (AMPS) |  1905.31 |  1739.89 |  2060.80 |
| Phase Angle (degrees) |    26.79 |    25.31 |    28.84 |
| Total Harmonic Distortion (PCT) |    17.55 |     3.33 |    33.31 |

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
| THD Phase A (%) | 5.8% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.8% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.8% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 17.5% | Field-level stress indicator |
| Max Phase THD | 5.8% | Highest THD among all three phases |
| Min Phase THD | 5.8% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,501.48 kW
  - **Maximum Load:** 1,681.84 kVA
  - **Percentage of Capacity (MAX):** 67.3%
- **Average Load:** 1,561.01 kVA
  - **Percentage of Capacity (Avg):** 62.4%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,561.01 kVA
- **Average Power Factor (PF):** 0.893

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,561.01 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 473.02 V
- Average Current (Iavg_A): 1905.31 A
- Average kW (Psum_kW): 1393.41 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.00 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.893
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1561.01) and measured PF (0.893) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,561.01 |        62.4% | 1,127,335.78 kVA | 4,754,500.77 TOTAL-HEAT |
| kW | 1,393.41 |        55.7% | 1,006,294.94 kWh | 510,485.70 Load-Heat |
| kVAR |   703.68 |        28.1% | 508,189.40 kVARh | - |
| WASTE |   167.60 |         6.7% | 121,040.85 WASTE | 61,403.09 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 4,754,500.77
- **Load-Heat (BTU/hr):** 510,485.70
- **Field-Heat (BTU/hr):** 61,403.09
- **Load-Heat (BTU, period total):** 368,664,263.13
- **Field-Heat (BTU, period total):** 44,344,289.69

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 8 | 1,561.01 | 1,393.41 |   703.59 |     0.89 |   62.4% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,564.15 | 1,396.91 |   703.64 |     0.89 |   62.6% |
| 01 | 1,565.48 | 1,397.95 |   704.54 |     0.89 |   62.6% |
| 02 | 1,566.33 | 1,398.44 |   705.46 |     0.89 |   62.7% |
| 03 | 1,565.46 | 1,398.05 |   704.30 |     0.89 |   62.6% |
| 04 | 1,564.51 | 1,397.49 |   703.29 |     0.89 |   62.6% |
| 05 | 1,561.91 | 1,396.11 |   700.25 |     0.89 |   62.5% |
| 06 | 1,560.72 | 1,394.47 |   700.87 |     0.89 |   62.4% |
| 07 | 1,556.84 | 1,390.18 |   700.76 |     0.89 |   62.3% |
| 08 | 1,557.08 | 1,390.41 |   700.81 |     0.89 |   62.3% |
| 09 | 1,558.45 | 1,391.17 |   702.34 |     0.89 |   62.3% |
| 10 | 1,556.98 | 1,388.83 |   703.71 |     0.89 |   62.3% |
| 11 | 1,560.03 | 1,391.39 |   705.42 |     0.89 |   62.4% |
| 12 | 1,563.52 | 1,394.51 |   706.97 |     0.89 |   62.5% |
| 13 | 1,564.04 | 1,395.32 |   706.51 |     0.89 |   62.6% |
| 14 | 1,560.78 | 1,392.67 |   704.51 |     0.89 |   62.4% |
| 15 | 1,560.63 | 1,392.91 |   703.71 |     0.89 |   62.4% |
| 16 | 1,559.62 | 1,392.01 |   703.23 |     0.89 |   62.4% |
| 17 | 1,561.65 | 1,393.25 |   705.26 |     0.89 |   62.5% |
| 18 | 1,559.78 | 1,391.01 |   705.57 |     0.89 |   62.4% |
| 19 | 1,557.09 | 1,389.45 |   702.70 |     0.89 |   62.3% |
| 20 | 1,556.43 | 1,390.19 |   699.78 |     0.89 |   62.3% |
| 21 | 1,559.38 | 1,391.66 |   703.42 |     0.89 |   62.4% |
| 22 | 1,558.84 | 1,390.78 |   703.97 |     0.89 |   62.4% |
| 23 | 1,563.93 | 1,395.66 |   705.61 |     0.89 |   62.6% |

---

# END OF REPORT

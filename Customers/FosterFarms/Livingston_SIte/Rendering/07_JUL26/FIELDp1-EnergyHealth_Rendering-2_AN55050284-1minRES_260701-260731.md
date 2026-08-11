# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 671,175.3 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $130,879.18 (Cost per period)
- **Consumption Total Cost:** $175.91 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Rendering-2  
**Generated:** 2026-08-02 22:17:29  
**Data Source:** AN55050284-V-1minRES_44640CLP_260701-260731c.csv  

## Time Period

- **Period:** July 01, 2026 thru July 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,640

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

- **Transformer:** Rendering-2
- **Power Factor:** 0.732
- **Total Energy (Actual):** 671,175.29 kWh (per period), 902.12 kW (per hour)
- **Total Waste (Actual):** 252,343.11 kWh (per period), 339.17 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Rendering-2_AN55050284-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Rendering-2_AN55050284-1minRES_260701-260731.md


## UNITY MANAGEMENT Rendering-2 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 339.17 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 262.13 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Rendering-2 Utility Cost Offset:** $66.14/hour
- **Annual Offset Savings:** $579372/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 1,001,105 BTU/hr
- **Total Cooling kW No Longer Needed:** 89.24 kW
- **Cooling Energy Cost Avoided:** $17.40/hour
- **Annual Cooling Savings:** $152434/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 428.41 kW
- **CO2e Emissions Avoided:** 1400.96 metric tons/year
- **Monthly CO2e Reduction:** 116.75 metric tons/month
- **Hourly CO2e Reduction:** 0.1599 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $53237/year

### Total Rendering-2 Unity Savings

- **Per Hour:** $89.62
- **Per Day:** $2150.80
- **Per Month:** $64524.03
- **Per Year:** $785042

### Rendering-2 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,377.8 kVAR Max (Avg: 852.6 kVAR/hr ; 613,895 kVAR/mo)
- **Max Harmonic Distortion:** 34.1% Max (range: 3.0% - 34.1%)
- **Max Amperage:** 2,498A Max (range: 0A - 2498A)

---

# Rendering-2 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   272.64 |     0.00 |   287.27 |
| Line to Line Voltage (480v) |   472.23 |     0.00 |   497.57 |
| Current (AMPS) |  1520.87 |     0.00 |  2498.19 |
| Phase Angle (degrees) |    42.69 |    22.03 |    90.00 |
| Total Harmonic Distortion (PCT) |    16.02 |     3.00 |    34.06 |

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
| THD Phase A (%) | 5.3% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.3% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.3% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 16.0% | Field-level stress indicator |
| Max Phase THD | 5.3% | Highest THD among all three phases |
| Min Phase THD | 5.3% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,346.19 kW
  - **Maximum Load:** 1,848.12 kVA
  - **Percentage of Capacity (MAX):** 73.9%
- **Average Load:** 1,241.29 kVA
  - **Percentage of Capacity (Avg):** 49.7%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,241.29 kVA
- **Average Power Factor (PF):** 0.732

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,243.95 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 472.23 V
- Average Current (Iavg_A): 1520.87 A
- Average kW (Psum_kW): 902.12 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 2.66 kVA (0.2%)
- **Calculated PF (kW/kVA from averages):** 0.725
- **Power Factor Difference:** 0.007 (0.9%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1241.29) and measured PF (0.732) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,241.29 |        49.7% | 923,518.40 kVA | 3,078,152.43 TOTAL-HEAT |
| kW |   902.12 |        36.1% | 671,175.29 kWh | 841,077.50 Load-Heat |
| kVAR |   852.63 |        34.1% | 634,357.91 kVARh | - |
| WASTE |   339.17 |        13.6% | 252,343.11 WASTE | 316,221.57 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,078,152.43
- **Load-Heat (BTU/hr):** 841,077.50
- **Field-Heat (BTU/hr):** 316,221.57
- **Load-Heat (BTU, period total):** 625,761,658.24
- **Field-Heat (BTU, period total):** 235,268,850.99

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 | 1,241.29 |   902.12 |   848.75 |     0.73 |   49.7% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,257.98 |   907.29 |   867.91 |     0.72 |   50.3% |
| 01 | 1,272.62 |   919.08 |   876.76 |     0.72 |   50.9% |
| 02 | 1,261.23 |   919.68 |   859.90 |     0.73 |   50.4% |
| 03 | 1,247.72 |   908.09 |   852.11 |     0.73 |   49.9% |
| 04 | 1,272.32 |   924.15 |   870.54 |     0.73 |   50.9% |
| 05 | 1,253.30 |   913.23 |   854.17 |     0.73 |   50.1% |
| 06 | 1,255.38 |   914.55 |   856.06 |     0.73 |   50.2% |
| 07 | 1,237.89 |   903.64 |   841.99 |     0.73 |   49.5% |
| 08 | 1,248.29 |   911.36 |   847.98 |     0.73 |   49.9% |
| 09 | 1,235.22 |   898.52 |   843.31 |     0.73 |   49.4% |
| 10 | 1,240.05 |   906.11 |   842.24 |     0.73 |   49.6% |
| 11 | 1,229.91 |   894.04 |   839.91 |     0.73 |   49.2% |
| 12 | 1,200.14 |   868.65 |   823.24 |     0.72 |   48.0% |
| 13 | 1,169.98 |   844.41 |   804.98 |     0.72 |   46.8% |
| 14 | 1,201.64 |   877.42 |   816.91 |     0.73 |   48.1% |
| 15 | 1,229.13 |   899.33 |   833.19 |     0.73 |   49.2% |
| 16 | 1,229.57 |   903.72 |   828.86 |     0.73 |   49.2% |
| 17 | 1,227.56 |   898.27 |   832.63 |     0.73 |   49.1% |
| 18 | 1,205.49 |   868.98 |   832.93 |     0.72 |   48.2% |
| 19 | 1,202.44 |   868.77 |   828.91 |     0.72 |   48.1% |
| 20 | 1,282.35 |   934.95 |   874.86 |     0.73 |   51.3% |
| 21 | 1,288.47 |   934.43 |   884.39 |     0.73 |   51.5% |
| 22 | 1,275.59 |   920.06 |   880.56 |     0.72 |   51.0% |
| 23 | 1,266.66 |   912.09 |   875.56 |     0.72 |   50.7% |

---

# END OF REPORT

# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 609,018.1 kWh (Usage per period)
- **Consumption Cost per unit:** $0.120/kWh (Cost per kWh)
- **Consumption Total Cost:** $73,082.17 (Cost per period)
- **Consumption Total Cost:** $115.41 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Rendering-1  
**Generated:** 2026-07-06 12:41:54  
**Data Source:** AN55050434-V-1minRES_43200CLP_260601-260630c.csv  

## Time Period

- **Period:** June 01, 2026 thru June 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 37,995

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

- **Transformer:** Rendering-1
- **Power Factor:** 0.787
- **Total Energy (Actual):** 609,018.09 kWh (per period), 961.73 kW (per hour)
- **Total Waste (Actual):** 164,060.64 kWh (per period), 259.08 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Rendering-1_AN55050434-1minRES_260601-260630.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Rendering-1_AN55050434-1minRES_260601-260630.md


## UNITY MANAGEMENT Rendering-1 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 259.08 kW/hr
- **Blended Electricity Rate:** $0.1200/kWh (all-inclusive)
- **Rendering-1 Utility Cost Offset:** $31.09/hour
- **Annual Offset Savings:** $272342/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 991,662 BTU/hr
- **Total Cooling kW No Longer Needed:** 87.13 kW
- **Cooling Energy Cost Avoided:** $10.46/hour
- **Annual Cooling Savings:** $91587/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 346.20 kW
- **CO2e Emissions Avoided:** 1132.14 metric tons/year
- **Monthly CO2e Reduction:** 94.35 metric tons/month
- **Hourly CO2e Reduction:** 0.1292 metric tons/hour
- **CO2e Value Rate:** $35/metric ton
- **Annual CO2e Value:** $39625/year

### Total Rendering-1 Unity Savings

- **Per Hour:** $46.07
- **Per Day:** $1105.63
- **Per Month:** $33168.80
- **Per Year:** $403554

### Rendering-1 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,122.4 kVAR Max (Avg: 752.0 kVAR/hr ; 541,413 kVAR/mo)
- **Max Harmonic Distortion:** 31.0% Max (range: 3.0% - 31.0%)
- **Max Amperage:** 1,940A Max (range: 969A - 1940A)

---

# Rendering-1 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   272.66 |   262.54 |   283.16 |
| Line to Line Voltage (480v) |   472.25 |   454.73 |   490.45 |
| Current (AMPS) |  1492.89 |   968.59 |  1939.62 |
| Phase Angle (degrees) |    37.97 |    28.12 |    50.95 |
| Total Harmonic Distortion (PCT) |    16.45 |     3.00 |    31.04 |

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
| Unity THD Composite (%) | 16.4% | Field-level stress indicator |
| Max Phase THD | 5.5% | Highest THD among all three phases |
| Min Phase THD | 5.5% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,222.90 kW
  - **Maximum Load:** 1,561.05 kVA
  - **Percentage of Capacity (MAX):** 62.4%
- **Average Load:** 1,220.81 kVA
  - **Percentage of Capacity (Avg):** 48.8%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,220.81 kVA
- **Average Power Factor (PF):** 0.787

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,221.13 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 472.25 V
- Average Current (Iavg_A): 1492.89 A
- Average kW (Psum_kW): 961.73 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.32 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.788
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1220.81) and measured PF (0.787) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,220.81 |        48.8% | 773,078.73 kVA | 3,281,573.19 TOTAL-HEAT |
| kW |   961.73 |        38.5% | 609,018.09 kWh | 696,406.41 Load-Heat |
| kVAR |   751.96 |        30.1% | 476,180.31 kVARh | - |
| WASTE |   259.08 |        10.4% | 164,060.64 WASTE | 187,601.78 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,281,573.19
- **Load-Heat (BTU/hr):** 696,406.41
- **Field-Heat (BTU/hr):** 187,601.78
- **Load-Heat (BTU, period total):** 440,999,359.63
- **Field-Heat (BTU, period total):** 118,798,827.29

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 6 | 1,220.81 |   961.73 |   749.71 |     0.79 |   48.8% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,228.36 |   967.34 |   754.47 |     0.79 |   49.1% |
| 01 | 1,227.51 |   964.18 |   757.04 |     0.79 |   49.1% |
| 02 | 1,218.35 |   957.09 |   751.52 |     0.79 |   48.7% |
| 03 | 1,228.19 |   964.68 |   757.67 |     0.79 |   49.1% |
| 04 | 1,221.67 |   964.18 |   747.89 |     0.79 |   48.9% |
| 05 | 1,226.01 |   970.00 |   747.67 |     0.79 |   49.0% |
| 06 | 1,234.08 |   975.15 |   754.35 |     0.79 |   49.4% |
| 07 | 1,227.01 |   969.94 |   749.59 |     0.79 |   49.1% |
| 08 | 1,251.03 |   992.20 |   760.31 |     0.79 |   50.0% |
| 09 | 1,251.99 |   990.37 |   764.27 |     0.79 |   50.1% |
| 10 | 1,251.46 |   990.76 |   762.92 |     0.79 |   50.1% |
| 11 | 1,247.76 |   983.18 |   766.56 |     0.79 |   49.9% |
| 12 | 1,259.05 |   992.55 |   772.88 |     0.79 |   50.4% |
| 13 | 1,257.38 |   989.23 |   774.40 |     0.79 |   50.3% |
| 14 | 1,242.85 |   968.09 |   778.04 |     0.78 |   49.7% |
| 15 | 1,242.20 |   965.99 |   779.77 |     0.78 |   49.7% |
| 16 | 1,227.30 |   959.46 |   763.57 |     0.78 |   49.1% |
| 17 | 1,180.82 |   924.19 |   732.91 |     0.78 |   47.2% |
| 18 | 1,159.86 |   904.79 |   723.63 |     0.78 |   46.4% |
| 19 | 1,174.03 |   918.82 |   728.50 |     0.78 |   47.0% |
| 20 | 1,184.13 |   937.85 |   720.03 |     0.79 |   47.4% |
| 21 | 1,171.20 |   934.49 |   702.65 |     0.80 |   46.8% |
| 22 | 1,176.94 |   936.60 |   709.36 |     0.80 |   47.1% |
| 23 | 1,223.65 |   966.63 |   747.52 |     0.79 |   48.9% |

---

# END OF REPORT

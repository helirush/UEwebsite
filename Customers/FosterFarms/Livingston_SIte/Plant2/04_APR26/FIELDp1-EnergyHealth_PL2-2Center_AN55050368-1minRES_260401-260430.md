# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 210,846.3 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $41,115.02 (Cost per period)
- **Consumption Total Cost:** $57.11 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL2-2Center  
**Generated:** 2026-05-09 20:15:53  
**Data Source:** AN55050368-V-1minRES_43200CLP_260401-260430c.csv  

## Time Period

- **Period:** April 01, 2026 thru April 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,193

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

- **Transformer:** PL2-2Center
- **Power Factor:** 0.863
- **Total Energy (Actual):** 210,846.27 kWh (per period), 292.89 kW (per hour)
- **Total Waste (Actual):** 32,040.71 kWh (per period), 44.51 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL2-2Center_AN55050368-1minRES_260401-260430.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL2-2Center_AN55050368-1minRES_260401-260430.md


## UNITY MANAGEMENT PL2-2Center SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 44.51 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL2-2Center Utility Cost Offset:** $8.68/hour
- **Annual Offset Savings:** $76029/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 160,929 BTU/hr
- **Total Cooling kW No Longer Needed:** 14.09 kW
- **Cooling Energy Cost Avoided:** $2.75/hour
- **Annual Cooling Savings:** $24072/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 58.60 kW
- **CO2e Emissions Avoided:** 191.63 metric tons/year
- **Monthly CO2e Reduction:** 15.97 metric tons/month
- **Hourly CO2e Reduction:** 0.0219 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $7378/year

### Total PL2-2Center Unity Savings

- **Per Hour:** $12.27
- **Per Day:** $294.46
- **Per Month:** $8833.85
- **Per Year:** $107479

### PL2-2Center Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 340.7 kVAR Max (Avg: 167.5 kVAR/hr ; 120,593 kVAR/mo)
- **Max Harmonic Distortion:** 30.6% Max (range: 3.5% - 30.6%)
- **Max Amperage:** 764A Max (range: 70A - 764A)

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
| Line to Neutral Voltage (277v) |   279.64 |   267.77 |   291.45 |
| Line to Line Voltage (480v) |   484.35 |   463.80 |   504.81 |
| Current (AMPS) |   404.01 |    70.18 |   764.38 |
| Phase Angle (degrees) |    30.31 |    23.36 |    42.27 |
| Total Harmonic Distortion (PCT) |    15.27 |     3.49 |    30.58 |

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

- **Maximum UtilityDemand:** 544.31 kW
  - **Maximum Load:** 624.57 kVA
  - **Percentage of Capacity (MAX):** 25.0%
- **Average Load:** 337.40 kVA
  - **Percentage of Capacity (Avg):** 13.5%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 337.40 kVA
- **Average Power Factor (PF):** 0.863

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 338.93 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 484.35 V
- Average Current (Iavg_A): 404.01 A
- Average kW (Psum_kW): 292.89 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 1.53 kVA (0.5%)
- **Calculated PF (kW/kVA from averages):** 0.864
- **Power Factor Difference:** 0.002 (0.2%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (337.40) and measured PF (0.863) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   337.40 |        13.5% | 242,886.98 kVA | 999,380.58 TOTAL-HEAT |
| kW |   292.89 |        11.7% | 210,846.27 kWh | 131,834.42 Load-Heat |
| kVAR |   167.49 |         6.7% | 120,573.36 kVARh | - |
| WASTE |    44.51 |         1.8% | 32,040.71 WASTE | 20,033.88 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 999,380.58
- **Load-Heat (BTU/hr):** 131,834.42
- **Field-Heat (BTU/hr):** 20,033.88
- **Load-Heat (BTU, period total):** 94,905,400.89
- **Field-Heat (BTU, period total):** 14,422,054.85

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 4 |   337.40 |   292.89 |   166.96 |     0.87 |   13.5% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   345.93 |   301.14 |   169.78 |     0.87 |   13.8% |
| 01 |   372.25 |   324.21 |   182.57 |     0.87 |   14.9% |
| 02 |   367.95 |   320.61 |   180.21 |     0.87 |   14.7% |
| 03 |   368.25 |   320.71 |   180.63 |     0.87 |   14.7% |
| 04 |   364.16 |   317.45 |   178.03 |     0.87 |   14.6% |
| 05 |   358.89 |   313.21 |   174.77 |     0.87 |   14.4% |
| 06 |   354.33 |   309.02 |   173.02 |     0.87 |   14.2% |
| 07 |   352.58 |   307.65 |   171.90 |     0.87 |   14.1% |
| 08 |   352.83 |   306.01 |   175.15 |     0.87 |   14.1% |
| 09 |   353.17 |   300.76 |   184.53 |     0.85 |   14.1% |
| 10 |   364.74 |   312.62 |   187.36 |     0.86 |   14.6% |
| 11 |   357.40 |   306.71 |   182.98 |     0.86 |   14.3% |
| 12 |   355.85 |   306.40 |   180.54 |     0.86 |   14.2% |
| 13 |   329.20 |   285.17 |   163.85 |     0.87 |   13.2% |
| 14 |   302.35 |   263.76 |   147.13 |     0.87 |   12.1% |
| 15 |   294.89 |   257.87 |   142.56 |     0.87 |   11.8% |
| 16 |   292.93 |   256.81 |   140.41 |     0.88 |   11.7% |
| 17 |   268.31 |   234.05 |   130.53 |     0.87 |   10.7% |
| 18 |   221.24 |   192.08 |   109.40 |     0.87 |    8.8% |
| 19 |   255.57 |   218.84 |   131.31 |     0.86 |   10.2% |
| 20 |   343.97 |   296.59 |   173.42 |     0.86 |   13.8% |
| 21 |   363.31 |   316.34 |   178.32 |     0.87 |   14.5% |
| 22 |   373.95 |   326.13 |   182.67 |     0.87 |   15.0% |
| 23 |   383.55 |   335.24 |   186.06 |     0.87 |   15.3% |

---

# END OF REPORT

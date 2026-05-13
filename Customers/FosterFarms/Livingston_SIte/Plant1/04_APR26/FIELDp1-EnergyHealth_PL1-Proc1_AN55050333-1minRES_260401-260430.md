# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 122,513.4 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $23,890.11 (Cost per period)
- **Consumption Total Cost:** $33.25 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL1-Proc1  
**Generated:** 2026-05-10 11:11:30  
**Data Source:** AN55050333-V-1minRES_43200CLP_260401-260430c.csv  

## Time Period

- **Period:** April 01, 2026 thru April 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,115

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

- **Transformer:** PL1-Proc1
- **Power Factor:** 0.863
- **Total Energy (Actual):** 122,513.38 kWh (per period), 170.49 kW (per hour)
- **Total Waste (Actual):** 20,080.99 kWh (per period), 27.95 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL1-Proc1_AN55050333-1minRES_260401-260430.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL1-Proc1_AN55050333-1minRES_260401-260430.md


## UNITY MANAGEMENT PL1-Proc1 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 27.95 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL1-Proc1 Utility Cost Offset:** $5.45/hour
- **Annual Offset Savings:** $47736/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 101,047 BTU/hr
- **Total Cooling kW No Longer Needed:** 8.85 kW
- **Cooling Energy Cost Avoided:** $1.73/hour
- **Annual Cooling Savings:** $15115/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 36.79 kW
- **CO2e Emissions Avoided:** 120.32 metric tons/year
- **Monthly CO2e Reduction:** 10.03 metric tons/month
- **Hourly CO2e Reduction:** 0.0137 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $4632/year

### Total PL1-Proc1 Unity Savings

- **Per Hour:** $7.70
- **Per Day:** $184.88
- **Per Month:** $5546.54
- **Per Year:** $67483

### PL1-Proc1 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 196.2 kVAR Max (Avg: 101.5 kVAR/hr ; 73,107 kVAR/mo)
- **Max Harmonic Distortion:** 28.9% Max (range: 3.0% - 28.9%)
- **Max Amperage:** 370A Max (range: 98A - 370A)

---

# PL1-Proc1 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   279.30 |   267.23 |   291.03 |
| Line to Line Voltage (480v) |   483.77 |   462.86 |   504.08 |
| Current (AMPS) |   237.19 |    98.21 |   370.14 |
| Phase Angle (degrees) |    30.17 |    19.44 |    64.21 |
| Total Harmonic Distortion (PCT) |    15.28 |     3.00 |    28.95 |

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

- **Maximum UtilityDemand:** 270.17 kW
  - **Maximum Load:** 309.89 kVA
  - **Percentage of Capacity (MAX):** 12.4%
- **Average Load:** 198.44 kVA
  - **Percentage of Capacity (Avg):** 7.9%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 198.44 kVA
- **Average Power Factor (PF):** 0.863

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 198.75 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 483.77 V
- Average Current (Iavg_A): 237.19 A
- Average kW (Psum_kW): 170.49 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.31 kVA (0.2%)
- **Calculated PF (kW/kVA from averages):** 0.858
- **Power Factor Difference:** 0.005 (0.6%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (198.44) and measured PF (0.863) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   198.44 |         7.9% | 142,594.37 kVA | 581,746.11 TOTAL-HEAT |
| kW |   170.49 |         6.8% | 122,513.38 kWh | 81,924.95 Load-Heat |
| kVAR |   101.54 |         4.1% | 72,963.18 kVARh | - |
| WASTE |    27.95 |         1.1% | 20,080.99 WASTE | 13,428.20 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 581,746.11
- **Load-Heat (BTU/hr):** 81,924.95
- **Field-Heat (BTU/hr):** 13,428.20
- **Load-Heat (BTU, period total):** 58,869,900.68
- **Field-Heat (BTU, period total):** 9,649,278.10

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 4 |   198.44 |   170.49 |   100.82 |     0.86 |    7.9% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   204.69 |   173.52 |   108.10 |     0.85 |    8.2% |
| 01 |   209.15 |   176.89 |   111.12 |     0.85 |    8.4% |
| 02 |   208.71 |   176.71 |   110.55 |     0.85 |    8.3% |
| 03 |   205.88 |   174.64 |   108.45 |     0.85 |    8.2% |
| 04 |   204.75 |   174.25 |   106.91 |     0.85 |    8.2% |
| 05 |   203.21 |   173.44 |   105.22 |     0.85 |    8.1% |
| 06 |   201.28 |   171.99 |   103.88 |     0.85 |    8.1% |
| 07 |   200.80 |   171.91 |   103.06 |     0.86 |    8.0% |
| 08 |   201.11 |   171.81 |   103.82 |     0.85 |    8.0% |
| 09 |   196.41 |   167.88 |   101.29 |     0.85 |    7.9% |
| 10 |   199.10 |   169.86 |   103.26 |     0.85 |    8.0% |
| 11 |   195.34 |   166.83 |   101.01 |     0.85 |    7.8% |
| 12 |   192.73 |   164.44 |    99.88 |     0.85 |    7.7% |
| 13 |   184.99 |   158.44 |    94.90 |     0.86 |    7.4% |
| 14 |   187.64 |   164.66 |    89.53 |     0.88 |    7.5% |
| 15 |   190.60 |   168.25 |    89.17 |     0.88 |    7.6% |
| 16 |   189.24 |   167.59 |    87.55 |     0.89 |    7.6% |
| 17 |   182.70 |   162.34 |    83.56 |     0.89 |    7.3% |
| 18 |   180.51 |   159.92 |    83.41 |     0.89 |    7.2% |
| 19 |   190.21 |   166.70 |    91.14 |     0.88 |    7.6% |
| 20 |   207.90 |   178.73 |   105.50 |     0.86 |    8.3% |
| 21 |   209.08 |   178.00 |   108.89 |     0.85 |    8.4% |
| 22 |   208.41 |   176.82 |   109.54 |     0.85 |    8.3% |
| 23 |   207.82 |   176.09 |   109.69 |     0.85 |    8.3% |

---

# END OF REPORT

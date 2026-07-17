# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 102,852.5 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $20,056.24 (Cost per period)
- **Consumption Total Cost:** $27.86 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL1-Proc1  
**Generated:** 2026-07-07 04:14:28  
**Data Source:** AN55050333-V-260630.2359c.csv  

## Time Period

- **Period:** June 01, 2026 thru June 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,200

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
- **Power Factor:** 0.815
- **Total Energy (Actual):** 102,852.51 kWh (per period), 142.85 kW (per hour)
- **Total Waste (Actual):** 21,568.28 kWh (per period), 29.96 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL1-Proc1_AN55050333-1minRES_260601-260630.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL1-Proc1_AN55050333-1minRES_260601-260630.md


## UNITY MANAGEMENT PL1-Proc1 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 29.96 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL1-Proc1 Utility Cost Offset:** $5.84/hour
- **Annual Offset Savings:** $51171/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 107,987 BTU/hr
- **Total Cooling kW No Longer Needed:** 9.50 kW
- **Cooling Energy Cost Avoided:** $1.85/hour
- **Annual Cooling Savings:** $16224/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 39.45 kW
- **CO2e Emissions Avoided:** 129.02 metric tons/year
- **Monthly CO2e Reduction:** 10.75 metric tons/month
- **Hourly CO2e Reduction:** 0.0147 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $4903/year

### Total PL1-Proc1 Unity Savings

- **Per Hour:** $8.25
- **Per Day:** $198.08
- **Per Month:** $5942.27
- **Per Year:** $72298

### PL1-Proc1 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 269.1 kVAR Max (Avg: 97.2 kVAR/hr ; 70,014 kVAR/mo)
- **Max Harmonic Distortion:** 27.7% Max (range: 3.0% - 27.7%)
- **Max Amperage:** 438A Max (range: 0A - 438A)

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
| Line to Neutral Voltage (277v) |   278.38 |     0.00 |   290.81 |
| Line to Line Voltage (480v) |   482.16 |     0.00 |   503.69 |
| Current (AMPS) |   207.41 |     0.00 |   437.82 |
| Phase Angle (degrees) |    34.96 |    23.22 |    90.00 |
| Total Harmonic Distortion (PCT) |    14.72 |     3.00 |    27.67 |

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
| THD Phase A (%) | 4.9% | IEEE standard per-phase calculation |
| THD Phase B (%) | 4.9% | IEEE standard per-phase calculation |
| THD Phase C (%) | 4.9% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 14.7% | Field-level stress indicator |
| Max Phase THD | 4.9% | Highest THD among all three phases |
| Min Phase THD | 4.9% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 315.95 kW
  - **Maximum Load:** 374.39 kVA
  - **Percentage of Capacity (MAX):** 15.0%
- **Average Load:** 172.81 kVA
  - **Percentage of Capacity (Avg):** 6.9%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 172.81 kVA
- **Average Power Factor (PF):** 0.815

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 173.21 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 482.16 V
- Average Current (Iavg_A): 207.41 A
- Average kW (Psum_kW): 142.85 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.41 kVA (0.2%)
- **Calculated PF (kW/kVA from averages):** 0.825
- **Power Factor Difference:** 0.010 (1.2%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (172.81) and measured PF (0.815) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   172.81 |         6.9% | 124,420.79 kVA | 487,426.92 TOTAL-HEAT |
| kW |   142.85 |         5.7% | 102,852.51 kWh | 84,495.20 Load-Heat |
| kVAR |    97.24 |         3.9% | 70,013.53 kVARh | - |
| WASTE |    29.96 |         1.2% | 21,568.28 WASTE | 17,718.73 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 487,426.92
- **Load-Heat (BTU/hr):** 84,495.20
- **Field-Heat (BTU/hr):** 17,718.73
- **Load-Heat (BTU, period total):** 60,836,543.44
- **Field-Heat (BTU, period total):** 12,757,486.12

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 6 |   172.81 |   142.85 |    95.90 |     0.83 |    6.9% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   175.56 |   143.96 |    99.02 |     0.82 |    7.0% |
| 01 |   176.90 |   144.59 |   100.58 |     0.82 |    7.1% |
| 02 |   176.53 |   144.12 |   100.58 |     0.82 |    7.1% |
| 03 |   173.55 |   141.82 |    98.80 |     0.82 |    6.9% |
| 04 |   173.83 |   142.37 |    98.53 |     0.82 |    7.0% |
| 05 |   175.09 |   142.85 |    99.93 |     0.82 |    7.0% |
| 06 |   174.15 |   142.10 |    99.38 |     0.82 |    7.0% |
| 07 |   173.20 |   141.77 |    98.29 |     0.82 |    6.9% |
| 08 |   173.26 |   141.42 |    98.90 |     0.82 |    6.9% |
| 09 |   166.13 |   135.30 |    95.27 |     0.81 |    6.6% |
| 10 |   169.39 |   137.90 |    97.32 |     0.81 |    6.8% |
| 11 |   168.58 |   137.39 |    96.55 |     0.81 |    6.7% |
| 12 |   167.22 |   135.80 |    96.47 |     0.81 |    6.7% |
| 13 |   160.84 |   130.81 |    92.44 |     0.81 |    6.4% |
| 14 |   158.15 |   131.48 |    86.54 |     0.83 |    6.3% |
| 15 |   169.67 |   144.44 |    88.11 |     0.85 |    6.8% |
| 16 |   165.99 |   142.47 |    84.19 |     0.86 |    6.6% |
| 17 |   160.56 |   137.79 |    81.48 |     0.86 |    6.4% |
| 18 |   161.82 |   138.53 |    82.65 |     0.86 |    6.5% |
| 19 |   177.36 |   150.14 |    93.03 |     0.85 |    7.1% |
| 20 |   190.63 |   159.66 |   102.78 |     0.84 |    7.6% |
| 21 |   191.51 |   159.42 |   104.72 |     0.83 |    7.7% |
| 22 |   184.79 |   152.11 |   103.52 |     0.82 |    7.4% |
| 23 |   182.66 |   150.17 |   102.56 |     0.82 |    7.3% |

---

# END OF REPORT

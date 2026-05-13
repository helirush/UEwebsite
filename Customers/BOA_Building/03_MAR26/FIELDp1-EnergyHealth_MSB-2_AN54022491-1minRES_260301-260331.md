# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 97,761.5 kWh (Usage per period)
- **Consumption Cost per unit:** $0.080/kWh (Cost per kWh)
- **Consumption Total Cost:** $7,820.92 (Cost per period)
- **Consumption Total Cost:** $10.53 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** MSB-2  
**Generated:** 2026-04-24 12:47:41  
**Data Source:** AN54022491-V-1minRES_44580CLP_260301-260331c.csv  

## Time Period

- **Period:** March 01, 2026 thru March 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,580

- **Dataset Coverage:** Complete month (100.0% of 31-day month)
- **Billing Scale Factor:** 1.000x (no normalization needed)

## Facility Information

- **Facility:** Bank of America
- **Location:** Tower Complex
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** MSB-2
- **Power Factor:** 0.386
- **Total Energy (Actual):** 97,761.51 kWh (per period), 131.58 kW (per hour)
- **Total Waste (Actual):** 128,233.17 kWh (per period), 172.59 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_MSB-2_AN54022491-1minRES_260301-260331.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_MSB-2_AN54022491-1minRES_260301-260331.md


## UNITY MANAGEMENT MSB-2 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 172.59 kW/hr
- **Blended Electricity Rate:** $0.0800/kWh (all-inclusive)
- **MSB-2 Utility Cost Offset:** $13.81/hour
- **Annual Offset Savings:** $120950/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 619,732 BTU/hr
- **Total Cooling kW No Longer Needed:** 54.28 kW
- **Cooling Energy Cost Avoided:** $4.34/hour
- **Annual Cooling Savings:** $38041/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 226.87 kW
- **CO2e Emissions Avoided:** 741.91 metric tons/year
- **Monthly CO2e Reduction:** 61.83 metric tons/month
- **Hourly CO2e Reduction:** 0.0847 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $28563/year

### Total MSB-2 Unity Savings

- **Per Hour:** $21.41
- **Per Day:** $513.85
- **Per Month:** $15415.45
- **Per Year:** $187555

### MSB-2 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 540.4 kVAR Max (Avg: 274.2 kVAR/hr ; 197,448 kVAR/mo)
- **Max Harmonic Distortion:** 29.0% Max (range: 3.6% - 29.0%)
- **Max Amperage:** 810A Max (range: 175A - 810A)

---

# MSB-2 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   277.98 |   275.29 |   279.88 |
| Line to Line Voltage (480v) |   481.47 |   476.81 |   484.77 |
| Current (AMPS) |   364.79 |   174.66 |   810.20 |
| Phase Angle (degrees) |    67.09 |    53.17 |    83.80 |
| Total Harmonic Distortion (PCT) |    14.00 |     3.60 |    28.96 |

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
| THD Phase A (%) | 4.7% | IEEE standard per-phase calculation |
| THD Phase B (%) | 4.7% | IEEE standard per-phase calculation |
| THD Phase C (%) | 4.7% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 14.0% | Field-level stress indicator |
| Max Phase THD | 4.7% | Highest THD among all three phases |
| Min Phase THD | 4.7% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 396.29 kW
  - **Maximum Load:** 670.13 kVA
  - **Percentage of Capacity (MAX):** 26.8%
- **Average Load:** 304.17 kVA
  - **Percentage of Capacity (Avg):** 12.2%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 304.17 kVA
- **Average Power Factor (PF):** 0.386

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 304.21 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 481.47 V
- Average Current (Iavg_A): 364.79 A
- Average kW (Psum_kW): 131.58 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.05 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.433
- **Power Factor Difference:** 0.047 (12.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (304.17) and measured PF (0.386) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   304.17 |        12.2% | 225,994.68 kVA | 448,958.50 TOTAL-HEAT |
| kW |   131.58 |         5.3% | 97,761.51 kWh | 254,746.57 Load-Heat |
| kVAR |   274.23 |        11.0% | 203,755.45 kVARh | - |
| WASTE |   172.59 |         6.9% | 128,233.17 WASTE | 334,149.49 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 448,958.50
- **Load-Heat (BTU/hr):** 254,746.57
- **Field-Heat (BTU/hr):** 334,149.49
- **Load-Heat (BTU, period total):** 189,276,703.77
- **Field-Heat (BTU, period total):** 248,273,070.90

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 3 |   304.17 |   131.58 |   271.61 |     0.43 |   12.2% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   193.00 |    52.18 |   185.34 |     0.27 |    7.7% |
| 01 |   195.87 |    53.49 |   187.94 |     0.27 |    7.8% |
| 02 |   205.45 |    60.34 |   195.68 |     0.29 |    8.2% |
| 03 |   238.36 |    84.94 |   221.24 |     0.36 |    9.5% |
| 04 |   343.10 |   163.28 |   299.67 |     0.48 |   13.7% |
| 05 |   425.08 |   222.29 |   360.85 |     0.52 |   17.0% |
| 06 |   430.31 |   224.55 |   366.01 |     0.52 |   17.2% |
| 07 |   436.06 |   226.26 |   371.65 |     0.52 |   17.4% |
| 08 |   418.79 |   210.93 |   360.66 |     0.50 |   16.8% |
| 09 |   394.73 |   194.38 |   342.44 |     0.49 |   15.8% |
| 10 |   382.78 |   186.72 |   333.05 |     0.49 |   15.3% |
| 11 |   373.51 |   179.76 |   326.37 |     0.48 |   14.9% |
| 12 |   367.80 |   174.14 |   322.82 |     0.47 |   14.7% |
| 13 |   345.27 |   158.49 |   305.16 |     0.46 |   13.8% |
| 14 |   337.00 |   153.94 |   298.16 |     0.46 |   13.5% |
| 15 |   338.08 |   154.25 |   299.05 |     0.46 |   13.5% |
| 16 |   340.19 |   155.70 |   300.70 |     0.46 |   13.6% |
| 17 |   331.05 |   150.27 |   293.29 |     0.45 |   13.2% |
| 18 |   209.08 |    63.61 |   198.80 |     0.30 |    8.4% |
| 19 |   197.37 |    56.66 |   188.77 |     0.29 |    7.9% |
| 20 |   196.18 |    55.72 |   187.79 |     0.28 |    7.8% |
| 21 |   197.16 |    56.26 |   188.64 |     0.29 |    7.9% |
| 22 |   200.60 |    59.06 |   191.33 |     0.29 |    8.0% |
| 23 |   199.96 |    58.33 |   190.86 |     0.29 |    8.0% |

---

# END OF REPORT

# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 560,676.1 kWh (Usage per period)
- **Consumption Cost per unit:** $0.350/kWh (Cost per kWh)
- **Consumption Total Cost:** $196,236.64 (Cost per period)
- **Consumption Total Cost:** $272.59 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T15 Fillet  
**Generated:** 2026-07-18 11:53:58  
**Data Source:** AN53110845-V-1minRES_43200CLP_260601-260630c.csv  

## Time Period

- **Period:** June 01, 2026 thru June 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,194

- **Dataset Coverage:** Complete month (100.0% of 30-day month)
- **Billing Scale Factor:** 1.000x (no normalization needed)

## Facility Information

- **Facility:** Foster Farms
- **Location:** Cherry Ave Facility
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** T15 Fillet
- **Power Factor:** 0.811
- **Total Energy (Actual):** 560,676.12 kWh (per period), 778.82 kW (per hour)
- **Total Waste (Actual):** 110,871.95 kWh (per period), 154.01 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T15-Fillet_AN53110845-1minRES_260601-260630.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T15-Fillet_AN53110845-1minRES_260601-260630.md


## UNITY MANAGEMENT T15 Fillet SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 154.01 kW/hr
- **Blended Electricity Rate:** $0.3500/kWh (all-inclusive)
- **T15 Fillet Utility Cost Offset:** $53.90/hour
- **Annual Offset Savings:** $472195/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 558,250 BTU/hr
- **Total Cooling kW No Longer Needed:** 49.71 kW
- **Cooling Energy Cost Avoided:** $17.40/hour
- **Annual Cooling Savings:** $152410/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 203.72 kW
- **CO2e Emissions Avoided:** 666.20 metric tons/year
- **Monthly CO2e Reduction:** 55.52 metric tons/month
- **Hourly CO2e Reduction:** 0.0761 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $25649/year

### Total T15 Fillet Unity Savings

- **Per Hour:** $74.23
- **Per Day:** $1781.52
- **Per Month:** $53445.50
- **Per Year:** $650254

### T15 Fillet Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 773.2 kVAR Max (Avg: 513.4 kVAR/hr ; 369,672 kVAR/mo)
- **Max Harmonic Distortion:** 121.4% Max (range: 0.0% - 121.4%)
- **Max Amperage:** 1,904A Max (range: 205A - 1904A)

---

# T15 Fillet DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   276.14 |   233.80 |   294.59 |
| Line to Line Voltage (480v) |   478.30 |   404.95 |   510.25 |
| Current (AMPS) |  1135.84 |   205.40 |  1903.65 |
| Phase Angle (degrees) |    35.32 |    24.80 |    52.87 |
| Total Harmonic Distortion (PCT) |    13.64 |     0.00 |   121.38 |

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
| THD Phase B (%) | 4.5% | IEEE standard per-phase calculation |
| THD Phase C (%) | 4.5% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 13.6% | Field-level stress indicator |
| Max Phase THD | 4.7% | Highest THD among all three phases |
| Min Phase THD | 4.5% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,366.75 kW
  - **Maximum Load:** 1,546.43 kVA
  - **Percentage of Capacity (MAX):** 61.9%
- **Average Load:** 932.84 kVA
  - **Percentage of Capacity (Avg):** 37.3%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 932.84 kVA
- **Average Power Factor (PF):** 0.811

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 940.96 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 478.30 V
- Average Current (Iavg_A): 1135.84 A
- Average kW (Psum_kW): 778.82 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 8.13 kVA (0.9%)
- **Calculated PF (kW/kVA from averages):** 0.828
- **Power Factor Difference:** 0.017 (2.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (932.84) and measured PF (0.811) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   932.84 |        37.3% | 671,548.07 kVA | 2,657,461.49 TOTAL-HEAT |
| kW |   778.82 |        31.2% | 560,676.12 kWh | 438,744.38 Load-Heat |
| kVAR |   513.43 |        20.5% | 369,620.21 kVARh | - |
| WASTE |   154.01 |         6.2% | 110,871.95 WASTE | 86,760.33 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,657,461.49
- **Load-Heat (BTU/hr):** 438,744.38
- **Field-Heat (BTU/hr):** 86,760.33
- **Load-Heat (BTU, period total):** 315,852,076.15
- **Field-Heat (BTU, period total):** 62,458,761.15

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 6 |   932.84 |   778.82 |   506.47 |     0.83 |   37.3% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,045.64 |   886.15 |   551.19 |     0.85 |   41.8% |
| 01 | 1,057.27 |   889.44 |   568.14 |     0.84 |   42.3% |
| 02 | 1,081.12 |   917.24 |   569.18 |     0.85 |   43.2% |
| 03 | 1,029.15 |   863.59 |   556.44 |     0.84 |   41.2% |
| 04 | 1,036.99 |   873.82 |   555.47 |     0.84 |   41.5% |
| 05 | 1,048.17 |   887.49 |   554.05 |     0.85 |   41.9% |
| 06 | 1,024.64 |   866.00 |   544.42 |     0.85 |   41.0% |
| 07 | 1,039.97 |   881.21 |   548.98 |     0.85 |   41.6% |
| 08 | 1,039.19 |   889.06 |   534.76 |     0.86 |   41.6% |
| 09 | 1,054.87 |   908.17 |   532.55 |     0.86 |   42.2% |
| 10 | 1,051.45 |   911.04 |   520.93 |     0.87 |   42.1% |
| 11 | 1,007.91 |   867.88 |   508.58 |     0.86 |   40.3% |
| 12 | 1,017.58 |   876.46 |   512.96 |     0.86 |   40.7% |
| 13 | 1,043.41 |   899.49 |   524.46 |     0.86 |   41.7% |
| 14 | 1,014.41 |   867.63 |   521.72 |     0.86 |   40.6% |
| 15 | 1,014.22 |   862.82 |   528.61 |     0.85 |   40.6% |
| 16 |   967.64 |   818.43 |   511.68 |     0.85 |   38.7% |
| 17 |   795.05 |   644.22 |   460.97 |     0.81 |   31.8% |
| 18 |   734.02 |   538.51 |   496.37 |     0.73 |   29.4% |
| 19 |   706.32 |   509.48 |   487.34 |     0.72 |   28.3% |
| 20 |   703.38 |   518.67 |   473.75 |     0.74 |   28.1% |
| 21 |   612.51 |   469.06 |   392.19 |     0.77 |   24.5% |
| 22 |   528.95 |   423.53 |   315.04 |     0.80 |   21.2% |
| 23 |   734.60 |   622.86 |   385.51 |     0.85 |   29.4% |

---

# END OF REPORT

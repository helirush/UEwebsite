# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 639,840.8 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $124,768.95 (Cost per period)
- **Consumption Total Cost:** $186.05 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Rendering-1  
**Generated:** 2026-06-18 16:10:24  
**Data Source:** AN55050434-V-1minRES_44640CLP_260501-260531c.csv  

## Time Period

- **Period:** May 01, 2026 thru May 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 40,237

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

- **Transformer:** Rendering-1
- **Power Factor:** 0.788
- **Total Energy (Actual):** 639,840.75 kWh (per period), 954.11 kW (per hour)
- **Total Waste (Actual):** 170,776.93 kWh (per period), 254.66 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Rendering-1_AN55050434-1minRES_260501-260531.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Rendering-1_AN55050434-1minRES_260501-260531.md


## UNITY MANAGEMENT Rendering-1 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 254.66 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Rendering-1 Utility Cost Offset:** $49.66/hour
- **Annual Offset Savings:** $435004/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 971,460 BTU/hr
- **Total Cooling kW No Longer Needed:** 85.00 kW
- **Cooling Energy Cost Avoided:** $16.58/hour
- **Annual Cooling Savings:** $145202/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 339.66 kW
- **CO2e Emissions Avoided:** 1110.74 metric tons/year
- **Monthly CO2e Reduction:** 92.56 metric tons/month
- **Hourly CO2e Reduction:** 0.1268 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $42764/year

### Total Rendering-1 Unity Savings

- **Per Hour:** $71.12
- **Per Day:** $1706.77
- **Per Month:** $51202.99
- **Per Year:** $622970

### Rendering-1 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,181.5 kVAR Max (Avg: 742.2 kVAR/hr ; 534,349 kVAR/mo)
- **Max Harmonic Distortion:** 31.0% Max (range: 3.0% - 31.0%)
- **Max Amperage:** 2,087A Max (range: 831A - 2087A)

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
| Line to Neutral Voltage (277v) |   272.90 |   262.64 |   282.66 |
| Line to Line Voltage (480v) |   472.68 |   454.91 |   489.59 |
| Current (AMPS) |  1477.19 |   830.75 |  2086.63 |
| Phase Angle (degrees) |    37.91 |    25.18 |    50.95 |
| Total Harmonic Distortion (PCT) |    16.33 |     3.00 |    30.97 |

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
| THD Phase A (%) | 5.4% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.4% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.4% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 16.3% | Field-level stress indicator |
| Max Phase THD | 5.4% | Highest THD among all three phases |
| Min Phase THD | 5.4% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,288.81 kW
  - **Maximum Load:** 1,693.93 kVA
  - **Percentage of Capacity (MAX):** 67.8%
- **Average Load:** 1,208.76 kVA
  - **Percentage of Capacity (Avg):** 48.4%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,208.76 kVA
- **Average Power Factor (PF):** 0.788

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,209.39 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 472.68 V
- Average Current (Iavg_A): 1477.19 A
- Average kW (Psum_kW): 954.11 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.63 kVA (0.1%)
- **Calculated PF (kW/kVA from averages):** 0.789
- **Power Factor Difference:** 0.001 (0.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1208.76) and measured PF (0.788) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,208.76 |        48.4% | 810,617.68 kVA | 3,255,552.12 TOTAL-HEAT |
| kW |   954.11 |        38.2% | 639,840.75 kWh | 685,863.64 Load-Heat |
| kVAR |   742.15 |        29.7% | 497,699.55 kVARh | - |
| WASTE |   254.66 |        10.2% | 170,776.93 WASTE | 183,060.69 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,255,552.12
- **Load-Heat (BTU/hr):** 685,863.64
- **Field-Heat (BTU/hr):** 183,060.69
- **Load-Heat (BTU, period total):** 459,951,588.89
- **Field-Heat (BTU, period total):** 122,763,546.58

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 5 | 1,208.76 |   954.11 |   739.46 |     0.79 |   48.4% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,205.98 |   952.29 |   737.18 |     0.79 |   48.2% |
| 01 | 1,214.08 |   956.95 |   744.61 |     0.79 |   48.6% |
| 02 | 1,204.14 |   944.55 |   744.48 |     0.78 |   48.2% |
| 03 | 1,212.08 |   951.88 |   748.12 |     0.79 |   48.5% |
| 04 | 1,223.24 |   963.02 |   751.84 |     0.79 |   48.9% |
| 05 | 1,220.27 |   960.96 |   749.38 |     0.79 |   48.8% |
| 06 | 1,220.74 |   961.41 |   749.70 |     0.79 |   48.8% |
| 07 | 1,227.21 |   968.48 |   750.89 |     0.79 |   49.1% |
| 08 | 1,238.04 |   978.76 |   755.67 |     0.79 |   49.5% |
| 09 | 1,233.45 |   974.58 |   753.43 |     0.79 |   49.3% |
| 10 | 1,238.06 |   979.28 |   754.96 |     0.79 |   49.5% |
| 11 | 1,221.55 |   962.77 |   749.25 |     0.79 |   48.9% |
| 12 | 1,233.84 |   973.21 |   756.14 |     0.79 |   49.4% |
| 13 | 1,249.67 |   982.81 |   769.60 |     0.79 |   50.0% |
| 14 | 1,243.06 |   977.39 |   765.89 |     0.79 |   49.7% |
| 15 | 1,251.16 |   986.84 |   766.78 |     0.79 |   50.0% |
| 16 | 1,238.20 |   978.61 |   756.00 |     0.79 |   49.5% |
| 17 | 1,179.33 |   933.22 |   717.80 |     0.79 |   47.2% |
| 18 | 1,150.57 |   907.63 |   704.25 |     0.79 |   46.0% |
| 19 | 1,142.99 |   900.88 |   700.61 |     0.79 |   45.7% |
| 20 | 1,161.67 |   923.71 |   700.93 |     0.80 |   46.5% |
| 21 | 1,163.83 |   930.29 |   695.93 |     0.80 |   46.6% |
| 22 | 1,177.54 |   933.56 |   714.82 |     0.79 |   47.1% |
| 23 | 1,192.62 |   939.79 |   731.64 |     0.79 |   47.7% |

---

# END OF REPORT

# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 480,825.7 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $93,761.02 (Cost per period)
- **Consumption Total Cost:** $130.37 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** NCDC2 South D  
**Generated:** 2026-05-08 12:06:17  
**Data Source:** AN55050318-V-1minRES_43200CLP_260401-260430c.csv  

## Time Period

- **Period:** April 01, 2026 thru April 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,153

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

- **Transformer:** NCDC2 South D
- **Power Factor:** 0.910
- **Total Energy (Actual):** 480,825.75 kWh (per period), 668.54 kW (per hour)
- **Total Waste (Actual):** 48,501.04 kWh (per period), 67.44 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_NCDC2-South-D_AN55050318-1minRES_260401-260430.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_NCDC2-South-D_AN55050318-1minRES_260401-260430.md


## UNITY MANAGEMENT NCDC2 South D SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 67.44 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **NCDC2 South D Utility Cost Offset:** $13.15/hour
- **Annual Offset Savings:** $115194/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 244,787 BTU/hr
- **Total Cooling kW No Longer Needed:** 21.44 kW
- **Cooling Energy Cost Avoided:** $4.18/hour
- **Annual Cooling Savings:** $36615/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 88.87 kW
- **CO2e Emissions Avoided:** 290.62 metric tons/year
- **Monthly CO2e Reduction:** 24.22 metric tons/month
- **Hourly CO2e Reduction:** 0.0332 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $11189/year

### Total NCDC2 South D Unity Savings

- **Per Hour:** $18.61
- **Per Day:** $446.57
- **Per Month:** $13397.13
- **Per Year:** $162998

### NCDC2 South D Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 411.0 kVAR Max (Avg: 307.8 kVAR/hr ; 221,586 kVAR/mo)
- **Max Harmonic Distortion:** 29.9% Max (range: 3.0% - 29.9%)
- **Max Amperage:** 1,278A Max (range: 497A - 1278A)

---

# NCDC2 South D DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   277.48 |   268.73 |   287.89 |
| Line to Line Voltage (480v) |   480.62 |   465.45 |   498.64 |
| Current (AMPS) |   884.34 |   497.47 |  1277.94 |
| Phase Angle (degrees) |    24.44 |    16.05 |    31.02 |
| Total Harmonic Distortion (PCT) |    15.97 |     3.00 |    29.92 |

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

- **Maximum UtilityDemand:** 970.66 kW
  - **Maximum Load:** 1,054.07 kVA
  - **Percentage of Capacity (MAX):** 42.2%
- **Average Load:** 735.98 kVA
  - **Percentage of Capacity (Avg):** 29.4%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 735.98 kVA
- **Average Power Factor (PF):** 0.910

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 736.17 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 480.62 V
- Average Current (Iavg_A): 884.34 A
- Average kW (Psum_kW): 668.54 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.19 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.908
- **Power Factor Difference:** 0.002 (0.2%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (735.98) and measured PF (0.910) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   735.98 |        29.4% | 529,326.79 kVA | 2,281,156.44 TOTAL-HEAT |
| kW |   668.54 |        26.7% | 480,825.75 kWh | 209,017.32 Load-Heat |
| kVAR |   307.76 |        12.3% | 221,344.64 kVARh | - |
| WASTE |    67.44 |         2.7% | 48,501.04 WASTE | 21,083.64 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,281,156.44
- **Load-Heat (BTU/hr):** 209,017.32
- **Field-Heat (BTU/hr):** 21,083.64
- **Load-Heat (BTU, period total):** 150,328,736.91
- **Field-Heat (BTU, period total):** 15,163,706.25

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 4 |   735.98 |   668.54 |   306.44 |     0.91 |   29.4% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   728.85 |   660.57 |   306.90 |     0.91 |   29.2% |
| 01 |   735.96 |   667.53 |   308.74 |     0.91 |   29.4% |
| 02 |   739.07 |   670.31 |   310.05 |     0.91 |   29.6% |
| 03 |   723.99 |   655.21 |   306.70 |     0.90 |   29.0% |
| 04 |   728.13 |   659.62 |   307.07 |     0.91 |   29.1% |
| 05 |   700.13 |   631.80 |   300.44 |     0.90 |   28.0% |
| 06 |   699.04 |   631.96 |   297.61 |     0.90 |   28.0% |
| 07 |   694.83 |   628.37 |   295.35 |     0.90 |   27.8% |
| 08 |   694.61 |   627.35 |   296.93 |     0.90 |   27.8% |
| 09 |   716.11 |   648.87 |   301.70 |     0.91 |   28.6% |
| 10 |   728.33 |   661.15 |   304.30 |     0.91 |   29.1% |
| 11 |   725.26 |   657.89 |   303.97 |     0.91 |   29.0% |
| 12 |   748.60 |   681.54 |   308.44 |     0.91 |   29.9% |
| 13 |   737.89 |   670.48 |   306.97 |     0.91 |   29.5% |
| 14 |   747.95 |   680.29 |   309.62 |     0.91 |   29.9% |
| 15 |   751.59 |   684.03 |   310.07 |     0.91 |   30.1% |
| 16 |   757.26 |   689.89 |   311.02 |     0.91 |   30.3% |
| 17 |   787.09 |   720.04 |   316.58 |     0.91 |   31.5% |
| 18 |   783.32 |   716.18 |   315.91 |     0.91 |   31.3% |
| 19 |   757.62 |   690.65 |   310.20 |     0.91 |   30.3% |
| 20 |   767.09 |   700.89 |   310.43 |     0.91 |   30.7% |
| 21 |   738.03 |   671.36 |   305.15 |     0.91 |   29.5% |
| 22 |   742.47 |   675.69 |   306.42 |     0.91 |   29.7% |
| 23 |   731.14 |   664.26 |   304.16 |     0.91 |   29.2% |

---

# END OF REPORT

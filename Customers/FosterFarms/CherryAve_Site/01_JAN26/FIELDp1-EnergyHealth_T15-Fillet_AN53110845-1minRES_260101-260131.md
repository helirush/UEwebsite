# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 655,175.2 kWh (Usage per period)
- **Consumption Cost per unit:** $0.318/kWh (Cost per kWh)
- **Consumption Total Cost:** $208,464.83 (Cost per period)
- **Consumption Total Cost:** $280.19 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T15 Fillet  
**Generated:** 2026-09-10 23:16:44  
**Data Source:** AN53110845-V-1minRES_44640CLP_260101-260131c.csv  

## Time Period

- **Period:** January 01, 2026 thru January 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,640

- **Dataset Coverage:** Complete month (100.0% of 31-day month)
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
- **Power Factor:** 0.851
- **Total Energy (Actual):** 655,175.17 kWh (per period), 880.61 kW (per hour)
- **Total Waste (Actual):** 108,326.11 kWh (per period), 145.60 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T15-Fillet_AN53110845-1minRES_260101-260131.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T15-Fillet_AN53110845-1minRES_260101-260131.md


## UNITY MANAGEMENT T15 Fillet SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 145.60 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 92.63 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.3182/kWh (all-inclusive)
- **T15 Fillet Utility Cost Offset:** $46.33/hour
- **Annual Offset Savings:** $405826/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 362,196 BTU/hr
- **Total Cooling kW No Longer Needed:** 31.77 kW
- **Cooling Energy Cost Avoided:** $10.11/hour
- **Annual Cooling Savings:** $88549/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 177.37 kW
- **CO2e Emissions Avoided:** 580.03 metric tons/year
- **Monthly CO2e Reduction:** 48.34 metric tons/month
- **Hourly CO2e Reduction:** 0.0662 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $22331/year

### Total T15 Fillet Unity Savings

- **Per Hour:** $58.98
- **Per Day:** $1415.63
- **Per Month:** $42469.01
- **Per Year:** $516706

### T15 Fillet Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 876.2 kVAR Max (Avg: 526.9 kVAR/hr ; 379,374 kVAR/mo)
- **Max Harmonic Distortion:** 74.6% Max (range: 0.0% - 74.6%)
- **Max Amperage:** 2,288A Max (range: 0A - 2288A)

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
| Line to Neutral Voltage (277v) |   276.97 |   231.62 |   290.27 |
| Line to Line Voltage (480v) |   479.72 |   401.18 |   502.76 |
| Current (AMPS) |  1243.44 |     0.00 |  2287.74 |
| Phase Angle (degrees) |    31.41 |     0.00 |    54.47 |
| Total Harmonic Distortion (PCT) |    22.89 |     0.00 |    74.58 |

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
| THD Phase A (%) | 7.8% | IEEE standard per-phase calculation |
| THD Phase B (%) | 7.6% | IEEE standard per-phase calculation |
| THD Phase C (%) | 7.4% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 22.9% | Field-level stress indicator |
| Max Phase THD | 7.8% | Highest THD among all three phases |
| Min Phase THD | 7.4% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,656.31 kW
  - **Maximum Load:** 1,851.57 kVA
  - **Percentage of Capacity (MAX):** 74.1%
- **Average Load:** 1,026.21 kVA
  - **Percentage of Capacity (Avg):** 41.0%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,026.21 kVA
- **Average Power Factor (PF):** 0.851

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,033.18 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 479.72 V
- Average Current (Iavg_A): 1243.44 A
- Average kW (Psum_kW): 880.61 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 6.97 kVA (0.7%)
- **Calculated PF (kW/kVA from averages):** 0.852
- **Power Factor Difference:** 0.002 (0.2%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1026.21) and measured PF (0.851) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,026.21 |        41.0% | 763,501.28 kVA | 3,004,772.48 TOTAL-HEAT |
| kW |   880.61 |        35.2% | 655,175.17 kWh | 426,319.28 Load-Heat |
| kVAR |   526.91 |        21.1% | 392,020.03 kVARh | - |
| WASTE |   145.60 |         5.8% | 108,326.11 WASTE | 70,487.27 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,004,772.48
- **Load-Heat (BTU/hr):** 426,319.28
- **Field-Heat (BTU/hr):** 70,487.27
- **Load-Heat (BTU, period total):** 317,181,541.01
- **Field-Heat (BTU, period total):** 52,442,528.17

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 1 | 1,026.21 |   880.61 |   521.53 |     0.86 |   41.0% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,093.12 |   941.99 |   551.42 |     0.86 |   43.7% |
| 01 | 1,113.56 |   955.91 |   568.61 |     0.86 |   44.5% |
| 02 | 1,247.64 | 1,087.63 |   609.66 |     0.87 |   49.9% |
| 03 | 1,127.83 |   970.04 |   573.52 |     0.86 |   45.1% |
| 04 | 1,143.99 |   986.45 |   577.67 |     0.86 |   45.8% |
| 05 | 1,148.41 |   993.52 |   574.59 |     0.87 |   45.9% |
| 06 | 1,124.75 |   968.13 |   570.52 |     0.86 |   45.0% |
| 07 | 1,159.46 | 1,008.47 |   570.38 |     0.87 |   46.4% |
| 08 | 1,134.24 |   989.08 |   552.42 |     0.87 |   45.4% |
| 09 | 1,152.84 | 1,004.84 |   562.39 |     0.87 |   46.1% |
| 10 | 1,134.46 |   989.80 |   551.70 |     0.87 |   45.4% |
| 11 | 1,052.02 |   911.37 |   522.37 |     0.87 |   42.1% |
| 12 | 1,103.44 |   965.60 |   530.89 |     0.88 |   44.1% |
| 13 | 1,090.78 |   954.74 |   525.14 |     0.88 |   43.6% |
| 14 | 1,054.77 |   917.83 |   517.16 |     0.87 |   42.2% |
| 15 | 1,079.80 |   945.54 |   518.86 |     0.88 |   43.2% |
| 16 | 1,037.57 |   906.05 |   502.89 |     0.87 |   41.5% |
| 17 | 1,020.97 |   885.09 |   505.87 |     0.87 |   40.8% |
| 18 |   965.35 |   815.76 |   511.35 |     0.85 |   38.6% |
| 19 |   815.80 |   634.67 |   504.75 |     0.78 |   32.6% |
| 20 |   786.21 |   603.55 |   498.38 |     0.77 |   31.4% |
| 21 |   692.06 |   546.97 |   418.78 |     0.79 |   27.7% |
| 22 |   600.34 |   503.20 |   324.52 |     0.84 |   24.0% |
| 23 |   749.68 |   648.45 |   372.95 |     0.86 |   30.0% |

---

# END OF REPORT

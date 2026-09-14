# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 709,042.1 kWh (Usage per period)
- **Consumption Cost per unit:** $0.350/kWh (Cost per kWh)
- **Consumption Total Cost:** $248,164.74 (Cost per period)
- **Consumption Total Cost:** $344.88 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T16 Compressor  
**Generated:** 2026-09-10 22:41:56  
**Data Source:** AN54022983-V-1minRES_43200CLP_260401-260430c.csv  

## Time Period

- **Period:** April 01, 2026 thru April 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,174

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

- **Transformer:** T16 Compressor
- **Power Factor:** 0.886
- **Total Energy (Actual):** 709,042.11 kWh (per period), 985.37 kW (per hour)
- **Total Waste (Actual):** 90,869.73 kWh (per period), 126.28 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T16-Compressor_AN54022983-1minRES_260401-260430.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T16-Compressor_AN54022983-1minRES_260401-260430.md


## UNITY MANAGEMENT T16 Compressor SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 126.28 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 74.58 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.3500/kWh (all-inclusive)
- **T16 Compressor Utility Cost Offset:** $44.20/hour
- **Annual Offset Savings:** $387187/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 288,196 BTU/hr
- **Total Cooling kW No Longer Needed:** 25.22 kW
- **Cooling Energy Cost Avoided:** $8.83/hour
- **Annual Cooling Savings:** $77324/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 151.50 kW
- **CO2e Emissions Avoided:** 495.44 metric tons/year
- **Monthly CO2e Reduction:** 41.29 metric tons/month
- **Hourly CO2e Reduction:** 0.0566 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $19075/year

### Total T16 Compressor Unity Savings

- **Per Hour:** $55.20
- **Per Day:** $1324.89
- **Per Month:** $39746.73
- **Per Year:** $483585

### T16 Compressor Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,095.8 kVAR Max (Avg: 514.6 kVAR/hr ; 370,518 kVAR/mo)
- **Max Harmonic Distortion:** 85.6% Max (range: 0.0% - 85.6%)
- **Max Amperage:** 1,960A Max (range: 39A - 1960A)

---

# T16 Compressor DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   273.43 |   263.10 |   291.08 |
| Line to Line Voltage (480v) |   473.60 |   455.71 |   504.16 |
| Current (AMPS) |  1367.39 |    38.67 |  1959.61 |
| Phase Angle (degrees) |    27.56 |    20.52 |    50.49 |
| Total Harmonic Distortion (PCT) |    19.50 |     0.00 |    85.65 |

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
| THD Phase A (%) | 6.4% | IEEE standard per-phase calculation |
| THD Phase B (%) | 6.6% | IEEE standard per-phase calculation |
| THD Phase C (%) | 6.6% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 19.5% | Field-level stress indicator |
| Max Phase THD | 6.6% | Highest THD among all three phases |
| Min Phase THD | 6.4% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,394.27 kW
  - **Maximum Load:** 1,558.91 kVA
  - **Percentage of Capacity (MAX):** 62.4%
- **Average Load:** 1,111.66 kVA
  - **Percentage of Capacity (Avg):** 44.5%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,111.66 kVA
- **Average Power Factor (PF):** 0.886

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,121.67 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 473.60 V
- Average Current (Iavg_A): 1367.39 A
- Average kW (Psum_kW): 985.37 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 10.01 kVA (0.9%)
- **Calculated PF (kW/kVA from averages):** 0.878
- **Power Factor Difference:** 0.008 (0.8%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1111.66) and measured PF (0.886) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,111.66 |        44.5% | 799,911.83 kVA | 3,362,235.18 TOTAL-HEAT |
| kW |   985.37 |        39.4% | 709,042.11 kWh | 381,948.83 Load-Heat |
| kVAR |   514.61 |        20.6% | 370,294.79 kVARh | - |
| WASTE |   126.28 |         5.1% | 90,869.73 WASTE | 48,949.96 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,362,235.18
- **Load-Heat (BTU/hr):** 381,948.83
- **Field-Heat (BTU/hr):** 48,949.96
- **Load-Heat (BTU, period total):** 274,837,644.90
- **Field-Heat (BTU, period total):** 35,222,761.81

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 4 | 1,111.66 |   985.37 |   513.97 |     0.89 |   44.5% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,154.10 | 1,024.11 |   531.72 |     0.89 |   46.2% |
| 01 | 1,150.89 | 1,022.40 |   528.06 |     0.89 |   46.0% |
| 02 | 1,138.20 | 1,010.94 |   522.58 |     0.89 |   45.5% |
| 03 | 1,131.83 | 1,006.77 |   516.82 |     0.89 |   45.3% |
| 04 | 1,115.55 |   992.19 |   509.59 |     0.89 |   44.6% |
| 05 | 1,117.45 |   993.91 |   510.42 |     0.89 |   44.7% |
| 06 | 1,119.51 |   996.32 |   510.18 |     0.89 |   44.8% |
| 07 | 1,114.75 |   992.21 |   507.83 |     0.89 |   44.6% |
| 08 | 1,133.16 | 1,007.35 |   518.58 |     0.89 |   45.3% |
| 09 | 1,155.76 | 1,026.25 |   531.07 |     0.89 |   46.2% |
| 10 | 1,166.24 | 1,036.23 |   534.62 |     0.89 |   46.6% |
| 11 | 1,159.14 | 1,030.17 |   531.01 |     0.89 |   46.4% |
| 12 | 1,157.16 | 1,028.65 |   529.50 |     0.89 |   46.3% |
| 13 | 1,128.50 | 1,005.07 |   512.74 |     0.89 |   45.1% |
| 14 | 1,099.74 |   980.22 |   498.12 |     0.89 |   44.0% |
| 15 | 1,063.94 |   947.42 |   483.73 |     0.89 |   42.6% |
| 16 | 1,042.41 |   926.26 |   477.71 |     0.89 |   41.7% |
| 17 | 1,057.72 |   934.88 |   493.72 |     0.88 |   42.3% |
| 18 | 1,053.49 |   924.63 |   504.07 |     0.88 |   42.1% |
| 19 | 1,025.23 |   893.58 |   501.87 |     0.87 |   41.0% |
| 20 | 1,018.42 |   886.68 |   500.24 |     0.87 |   40.7% |
| 21 | 1,137.99 | 1,004.48 |   534.27 |     0.88 |   45.5% |
| 22 | 1,098.70 |   968.85 |   517.77 |     0.88 |   43.9% |
| 23 | 1,138.58 | 1,008.00 |   529.01 |     0.89 |   45.5% |

---

# END OF REPORT

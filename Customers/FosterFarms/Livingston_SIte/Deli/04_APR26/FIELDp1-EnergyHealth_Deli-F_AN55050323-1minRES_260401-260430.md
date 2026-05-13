# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 560,700.4 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $109,336.58 (Cost per period)
- **Consumption Total Cost:** $151.88 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Deli F  
**Generated:** 2026-05-08 12:04:58  
**Data Source:** AN55050323-V-1minRES_43200CLP_260401-260430c.csv  

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

- **Transformer:** Deli F
- **Power Factor:** 0.853
- **Total Energy (Actual):** 560,700.39 kWh (per period), 778.88 kW (per hour)
- **Total Waste (Actual):** 70,344.51 kWh (per period), 97.72 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Deli-F_AN55050323-1minRES_260401-260430.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Deli-F_AN55050323-1minRES_260401-260430.md


## UNITY MANAGEMENT Deli F SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 97.72 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Deli F Utility Cost Offset:** $19.05/hour
- **Annual Offset Savings:** $166919/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 352,411 BTU/hr
- **Total Cooling kW No Longer Needed:** 30.86 kW
- **Cooling Energy Cost Avoided:** $6.02/hour
- **Annual Cooling Savings:** $52714/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 128.58 kW
- **CO2e Emissions Avoided:** 420.46 metric tons/year
- **Monthly CO2e Reduction:** 35.04 metric tons/month
- **Hourly CO2e Reduction:** 0.0480 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $16188/year

### Total Deli F Unity Savings

- **Per Hour:** $26.92
- **Per Day:** $646.08
- **Per Month:** $19382.54
- **Per Year:** $235821

### Deli F Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,406.1 kVAR Max (Avg: 402.2 kVAR/hr ; 289,586 kVAR/mo)
- **Max Harmonic Distortion:** 29.1% Max (range: 3.0% - 29.1%)
- **Max Amperage:** 2,195A Max (range: 14A - 2195A)

---

# Deli F DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   277.98 |   265.73 |   289.63 |
| Line to Line Voltage (480v) |   481.48 |   460.26 |   501.66 |
| Current (AMPS) |  1054.22 |    13.54 |  2195.32 |
| Phase Angle (degrees) |    30.86 |     0.00 |    82.70 |
| Total Harmonic Distortion (PCT) |    14.80 |     3.00 |    29.05 |

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
| Unity THD Composite (%) | 14.8% | Field-level stress indicator |
| Max Phase THD | 4.9% | Highest THD among all three phases |
| Min Phase THD | 4.9% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,668.34 kW
  - **Maximum Load:** 1,819.74 kVA
  - **Percentage of Capacity (MAX):** 72.8%
- **Average Load:** 876.59 kVA
  - **Percentage of Capacity (Avg):** 35.1%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 876.59 kVA
- **Average Power Factor (PF):** 0.853

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 879.15 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 481.48 V
- Average Current (Iavg_A): 1054.22 A
- Average kW (Psum_kW): 778.88 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 2.56 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.886
- **Power Factor Difference:** 0.033 (3.9%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (876.59) and measured PF (0.853) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   876.59 |        35.1% | 631,044.90 kVA | 2,657,638.05 TOTAL-HEAT |
| kW |   778.88 |        31.2% | 560,700.39 kWh | 296,255.07 Load-Heat |
| kVAR |   402.20 |        16.1% | 289,538.84 kVARh | - |
| WASTE |    97.72 |         3.9% | 70,344.51 WASTE | 37,167.65 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,657,638.05
- **Load-Heat (BTU/hr):** 296,255.07
- **Field-Heat (BTU/hr):** 37,167.65
- **Load-Heat (BTU, period total):** 213,269,085.24
- **Field-Heat (BTU, period total):** 26,756,374.44

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 4 |   876.59 |   778.88 |   398.20 |     0.89 |   35.1% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   765.02 |   634.55 |   426.24 |     0.83 |   30.6% |
| 01 |   289.68 |   233.95 |   169.89 |     0.81 |   11.6% |
| 02 |    51.64 |    41.51 |    29.41 |     0.80 |    2.1% |
| 03 |    51.05 |    42.56 |    27.95 |     0.83 |    2.0% |
| 04 |    68.85 |    54.55 |    41.48 |     0.79 |    2.8% |
| 05 |   287.82 |   225.22 |   176.01 |     0.78 |   11.5% |
| 06 | 1,093.57 |   985.68 |   470.09 |     0.90 |   43.7% |
| 07 | 1,061.25 |   953.39 |   464.10 |     0.90 |   42.4% |
| 08 | 1,088.22 |   970.24 |   489.82 |     0.89 |   43.5% |
| 09 | 1,116.50 | 1,005.65 |   483.52 |     0.90 |   44.7% |
| 10 | 1,032.79 |   910.43 |   484.12 |     0.88 |   41.3% |
| 11 | 1,087.68 |   977.09 |   476.39 |     0.90 |   43.5% |
| 12 | 1,129.08 | 1,013.66 |   495.47 |     0.90 |   45.2% |
| 13 | 1,103.31 |   988.53 |   488.38 |     0.90 |   44.1% |
| 14 | 1,125.13 | 1,010.91 |   492.04 |     0.90 |   45.0% |
| 15 | 1,036.53 |   915.68 |   481.85 |     0.88 |   41.5% |
| 16 | 1,097.29 |   987.59 |   476.76 |     0.90 |   43.9% |
| 17 | 1,101.80 |   983.36 |   494.21 |     0.89 |   44.1% |
| 18 | 1,114.76 | 1,002.66 |   485.65 |     0.90 |   44.6% |
| 19 | 1,023.64 |   900.53 |   482.65 |     0.88 |   40.9% |
| 20 | 1,042.67 |   930.61 |   467.10 |     0.89 |   41.7% |
| 21 | 1,109.18 |   996.30 |   485.36 |     0.90 |   44.4% |
| 22 | 1,069.67 |   952.32 |   483.78 |     0.89 |   42.8% |
| 23 | 1,091.52 |   976.43 |   484.70 |     0.89 |   43.7% |

---

# END OF REPORT

# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 664,158.0 kWh (Usage per period)
- **Consumption Cost per unit:** $0.350/kWh (Cost per kWh)
- **Consumption Total Cost:** $232,455.29 (Cost per period)
- **Consumption Total Cost:** $312.44 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T16 Compressor  
**Generated:** 2026-07-10 12:10:32  
**Data Source:** AN54022983-V-1minRES_44640CLP_260501-260531c.csv  

## Time Period

- **Period:** May 01, 2026 thru May 31, 2026
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

- **Transformer:** T16 Compressor
- **Power Factor:** 0.873
- **Total Energy (Actual):** 664,157.96 kWh (per period), 892.69 kW (per hour)
- **Total Waste (Actual):** 85,853.16 kWh (per period), 115.39 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T16-Compressor_AN54022983-1minRES_260501-260531.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T16-Compressor_AN54022983-1minRES_260501-260531.md


## UNITY MANAGEMENT T16 Compressor SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 115.39 kW/hr
- **Blended Electricity Rate:** $0.3500/kWh (all-inclusive)
- **T16 Compressor Utility Cost Offset:** $40.39/hour
- **Annual Offset Savings:** $353798/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 419,575 BTU/hr
- **Total Cooling kW No Longer Needed:** 36.71 kW
- **Cooling Energy Cost Avoided:** $12.85/hour
- **Annual Cooling Savings:** $112561/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 152.11 kW
- **CO2e Emissions Avoided:** 497.41 metric tons/year
- **Monthly CO2e Reduction:** 41.45 metric tons/month
- **Hourly CO2e Reduction:** 0.0568 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $19150/year

### Total T16 Compressor Unity Savings

- **Per Hour:** $55.42
- **Per Day:** $1330.16
- **Per Month:** $39904.93
- **Per Year:** $485510

### T16 Compressor Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,010.9 kVAR Max (Avg: 468.3 kVAR/hr ; 337,201 kVAR/mo)
- **Max Harmonic Distortion:** 138.7% Max (range: 0.0% - 138.7%)
- **Max Amperage:** 1,958A Max (range: 31A - 1958A)

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
| Line to Neutral Voltage (277v) |   274.10 |   260.30 |   291.45 |
| Line to Line Voltage (480v) |   474.76 |   450.85 |   504.80 |
| Current (AMPS) |  1240.87 |    31.07 |  1958.15 |
| Phase Angle (degrees) |    28.85 |    23.52 |    62.85 |
| Total Harmonic Distortion (PCT) |     9.57 |     0.00 |   138.66 |

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
| THD Phase A (%) | 3.2% | IEEE standard per-phase calculation |
| THD Phase B (%) | 3.2% | IEEE standard per-phase calculation |
| THD Phase C (%) | 3.2% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 9.6% | Field-level stress indicator |
| Max Phase THD | 3.2% | Highest THD among all three phases |
| Min Phase THD | 3.2% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,414.84 kW
  - **Maximum Load:** 1,586.93 kVA
  - **Percentage of Capacity (MAX):** 63.5%
- **Average Load:** 1,008.08 kVA
  - **Percentage of Capacity (Avg):** 40.3%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,008.08 kVA
- **Average Power Factor (PF):** 0.873

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,020.37 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 474.76 V
- Average Current (Iavg_A): 1240.87 A
- Average kW (Psum_kW): 892.69 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 12.29 kVA (1.2%)
- **Calculated PF (kW/kVA from averages):** 0.875
- **Power Factor Difference:** 0.001 (0.2%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1008.08) and measured PF (0.873) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,008.08 |        40.3% | 750,011.13 kVA | 3,045,969.47 TOTAL-HEAT |
| kW |   892.69 |        35.7% | 664,157.96 kWh | 348,669.64 Load-Heat |
| kVAR |   468.33 |        18.7% | 348,440.65 kVARh | - |
| WASTE |   115.39 |         4.6% | 85,853.16 WASTE | 45,071.19 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,045,969.47
- **Load-Heat (BTU/hr):** 348,669.64
- **Field-Heat (BTU/hr):** 45,071.19
- **Load-Heat (BTU, period total):** 259,410,214.46
- **Field-Heat (BTU, period total):** 33,532,967.32

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 5 | 1,008.08 |   892.69 |   467.13 |     0.89 |   40.3% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,048.03 |   929.36 |   483.42 |     0.89 |   41.9% |
| 01 | 1,055.91 |   936.44 |   487.05 |     0.89 |   42.2% |
| 02 | 1,048.73 |   929.94 |   483.78 |     0.89 |   41.9% |
| 03 | 1,079.82 |   958.79 |   495.83 |     0.89 |   43.2% |
| 04 | 1,040.81 |   924.16 |   477.70 |     0.89 |   41.6% |
| 05 | 1,027.62 |   912.49 |   471.55 |     0.89 |   41.1% |
| 06 | 1,021.37 |   907.56 |   467.33 |     0.89 |   40.9% |
| 07 | 1,021.65 |   907.03 |   469.07 |     0.89 |   40.9% |
| 08 | 1,036.08 |   920.91 |   473.76 |     0.89 |   41.4% |
| 09 | 1,023.70 |   910.25 |   467.43 |     0.89 |   40.9% |
| 10 | 1,037.48 |   922.47 |   473.59 |     0.89 |   41.5% |
| 11 | 1,045.05 |   928.69 |   477.82 |     0.89 |   41.8% |
| 12 | 1,036.43 |   923.00 |   470.05 |     0.89 |   41.5% |
| 13 | 1,008.87 |   899.62 |   455.69 |     0.89 |   40.4% |
| 14 |   970.41 |   864.64 |   439.27 |     0.89 |   38.8% |
| 15 |   943.03 |   837.68 |   431.91 |     0.89 |   37.7% |
| 16 |   936.08 |   828.32 |   434.82 |     0.88 |   37.4% |
| 17 |   957.61 |   842.07 |   454.31 |     0.88 |   38.3% |
| 18 |   959.48 |   838.98 |   464.56 |     0.87 |   38.4% |
| 19 |   950.46 |   827.55 |   466.60 |     0.87 |   38.0% |
| 20 |   935.32 |   816.00 |   456.50 |     0.87 |   37.4% |
| 21 | 1,006.50 |   888.31 |   472.26 |     0.88 |   40.3% |
| 22 |   978.27 |   861.57 |   462.84 |     0.88 |   39.1% |
| 23 | 1,025.21 |   908.63 |   474.03 |     0.89 |   41.0% |

---

# END OF REPORT

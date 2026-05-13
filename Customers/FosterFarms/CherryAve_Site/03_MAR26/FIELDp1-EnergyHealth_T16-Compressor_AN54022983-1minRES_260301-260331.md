# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 749,744.8 kWh (Usage per period)
- **Consumption Cost per unit:** $0.350/kWh (Cost per kWh)
- **Consumption Total Cost:** $262,410.69 (Cost per period)
- **Consumption Total Cost:** $353.18 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T16 Compressor  
**Generated:** 2026-04-17 11:16:28  
**Data Source:** AN54022983-V-1minRES_44580CLP_260301-260331c.csv  

## Time Period

- **Period:** March 01, 2026 thru March 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,580

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
- **Power Factor:** 0.885
- **Total Energy (Actual):** 749,744.83 kWh (per period), 1009.08 kW (per hour)
- **Total Waste (Actual):** 96,291.96 kWh (per period), 129.60 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T16-Compressor_AN54022983-1minRES_260301-260331.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T16-Compressor_AN54022983-1minRES_260301-260331.md


## UNITY MANAGEMENT T16 Compressor SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 129.60 kW/hr
- **Blended Electricity Rate:** $0.3500/kWh (all-inclusive)
- **T16 Compressor Utility Cost Offset:** $45.36/hour
- **Annual Offset Savings:** $397350/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 490,606 BTU/hr
- **Total Cooling kW No Longer Needed:** 42.96 kW
- **Cooling Energy Cost Avoided:** $15.04/hour
- **Annual Cooling Savings:** $131725/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 172.56 kW
- **CO2e Emissions Avoided:** 564.31 metric tons/year
- **Monthly CO2e Reduction:** 47.03 metric tons/month
- **Hourly CO2e Reduction:** 0.0644 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $21726/year

### Total T16 Compressor Unity Savings

- **Per Hour:** $62.88
- **Per Day:** $1509.04
- **Per Month:** $45271.34
- **Per Year:** $550801

### T16 Compressor Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,305.3 kVAR Max (Avg: 527.6 kVAR/hr ; 379,862 kVAR/mo)
- **Max Harmonic Distortion:** 72.3% Max (range: 7.2% - 72.3%)
- **Max Amperage:** 2,183A Max (range: 142A - 2183A)

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
| Line to Neutral Voltage (277v) |   274.22 |   263.21 |   289.68 |
| Line to Line Voltage (480v) |   474.96 |   455.89 |   501.73 |
| Current (AMPS) |  1395.27 |   141.80 |  2183.34 |
| Phase Angle (degrees) |    27.77 |    21.12 |    46.99 |
| Total Harmonic Distortion (PCT) |    17.53 |     7.20 |    72.26 |

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
| THD Phase A (%) | 5.7% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.9% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.9% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 17.5% | Field-level stress indicator |
| Max Phase THD | 5.9% | Highest THD among all three phases |
| Min Phase THD | 5.7% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,401.37 kW
  - **Maximum Load:** 1,737.94 kVA
  - **Percentage of Capacity (MAX):** 69.5%
- **Average Load:** 1,138.68 kVA
  - **Percentage of Capacity (Avg):** 45.5%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,138.68 kVA
- **Average Power Factor (PF):** 0.885

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,147.83 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 474.96 V
- Average Current (Iavg_A): 1395.27 A
- Average kW (Psum_kW): 1009.08 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 9.15 kVA (0.8%)
- **Calculated PF (kW/kVA from averages):** 0.879
- **Power Factor Difference:** 0.005 (0.6%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1138.68) and measured PF (0.885) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,138.68 |        45.5% | 846,036.79 kVA | 3,443,116.85 TOTAL-HEAT |
| kW | 1,009.08 |        40.4% | 749,744.83 kWh | 391,879.49 Load-Heat |
| kVAR |   527.59 |        21.1% | 391,996.09 kVARh | - |
| WASTE |   129.60 |         5.2% | 96,291.96 WASTE | 50,330.25 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,443,116.85
- **Load-Heat (BTU/hr):** 391,879.49
- **Field-Heat (BTU/hr):** 50,330.25
- **Load-Heat (BTU, period total):** 291,166,463.13
- **Field-Heat (BTU, period total):** 37,395,375.26

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 3 | 1,138.68 | 1,009.08 |   527.01 |     0.89 |   45.5% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,172.07 | 1,039.53 |   541.22 |     0.89 |   46.9% |
| 01 | 1,169.33 | 1,037.58 |   538.99 |     0.89 |   46.8% |
| 02 | 1,169.67 | 1,037.57 |   539.64 |     0.89 |   46.8% |
| 03 | 1,154.60 | 1,024.40 |   532.22 |     0.89 |   46.2% |
| 04 | 1,122.84 |   997.56 |   515.15 |     0.89 |   44.9% |
| 05 | 1,107.20 |   983.90 |   507.44 |     0.89 |   44.3% |
| 06 | 1,123.04 |   999.40 |   512.07 |     0.89 |   44.9% |
| 07 | 1,123.92 |   999.99 |   512.85 |     0.89 |   45.0% |
| 08 | 1,141.09 | 1,014.93 |   521.27 |     0.89 |   45.6% |
| 09 | 1,151.70 | 1,024.20 |   526.47 |     0.89 |   46.1% |
| 10 | 1,161.33 | 1,033.44 |   529.57 |     0.89 |   46.5% |
| 11 | 1,157.08 | 1,030.05 |   526.84 |     0.89 |   46.3% |
| 12 | 1,160.37 | 1,033.48 |   527.31 |     0.89 |   46.4% |
| 13 | 1,131.34 | 1,009.59 |   510.02 |     0.89 |   45.3% |
| 14 | 1,115.82 |   995.73 |   503.20 |     0.89 |   44.6% |
| 15 | 1,095.64 |   975.22 |   498.91 |     0.89 |   43.8% |
| 16 | 1,084.31 |   961.83 |   500.09 |     0.89 |   43.4% |
| 17 | 1,098.72 |   967.65 |   519.24 |     0.88 |   43.9% |
| 18 | 1,122.84 |   983.01 |   541.51 |     0.88 |   44.9% |
| 19 | 1,102.05 |   959.10 |   541.95 |     0.87 |   44.1% |
| 20 | 1,104.19 |   965.17 |   536.00 |     0.87 |   44.2% |
| 21 | 1,197.44 | 1,057.25 |   561.88 |     0.88 |   47.9% |
| 22 | 1,166.58 | 1,028.99 |   549.39 |     0.88 |   46.7% |
| 23 | 1,196.07 | 1,059.20 |   555.37 |     0.89 |   47.8% |

---

# END OF REPORT

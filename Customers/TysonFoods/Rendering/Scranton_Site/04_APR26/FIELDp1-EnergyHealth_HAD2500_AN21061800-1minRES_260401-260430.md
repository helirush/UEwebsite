# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 901,049.1 kWh (Usage per period)
- **Consumption Cost per unit:** $0.110/kWh (Cost per kWh)
- **Consumption Total Cost:** $99,115.40 (Cost per period)
- **Consumption Total Cost:** $137.66 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** HAD2500  
**Generated:** 2026-05-25 08:28:17  
**Data Source:** AN21061800-V-1minRES_43200CLP_260401-260430c.csv  

## Time Period

- **Period:** April 01, 2026 thru April 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,200

- **Dataset Coverage:** Complete month (100.0% of 30-day month)
- **Billing Scale Factor:** 1.000x (no normalization needed)

## Facility Information

- **Facility:** Tyson Foods
- **Location:** Scranton Facility
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** HAD2500
- **Power Factor:** 0.963
- **Total Energy (Actual):** 901,049.10 kWh (per period), 1251.46 kW (per hour)
- **Total Waste (Actual):** 33,888.11 kWh (per period), 47.07 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_HAD2500_AN21061800-1minRES_260401-260430.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_HAD2500_AN21061800-1minRES_260401-260430.md


## UNITY MANAGEMENT HAD2500 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 47.07 kW/hr
- **Blended Electricity Rate:** $0.1100/kWh (all-inclusive)
- **HAD2500 Utility Cost Offset:** $5.18/hour
- **Annual Offset Savings:** $45354/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 176,393 BTU/hr
- **Total Cooling kW No Longer Needed:** 15.46 kW
- **Cooling Energy Cost Avoided:** $1.70/hour
- **Annual Cooling Savings:** $14895/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 62.52 kW
- **CO2e Emissions Avoided:** 204.47 metric tons/year
- **Monthly CO2e Reduction:** 17.04 metric tons/month
- **Hourly CO2e Reduction:** 0.0233 metric tons/hour
- **CO2e Value Rate:** $10/metric ton
- **Annual CO2e Value:** $2045/year

### Total HAD2500 Unity Savings

- **Per Hour:** $7.11
- **Per Day:** $170.67
- **Per Month:** $5119.98
- **Per Year:** $62293

### HAD2500 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 908.6 kVAR Max (Avg: 346.4 kVAR/hr ; 249,436 kVAR/mo)
- **Max Harmonic Distortion:** 36.1% Max (range: 3.0% - 36.1%)
- **Max Amperage:** 2,211A Max (range: 0A - 2211A)

---

# HAD2500 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   274.64 |     0.00 |   284.31 |
| Line to Line Voltage (480v) |   475.69 |     0.00 |   492.45 |
| Current (AMPS) |  1577.11 |     0.00 |  2211.05 |
| Phase Angle (degrees) |    14.99 |     3.29 |    90.00 |
| Total Harmonic Distortion (PCT) |    16.60 |     3.00 |    36.07 |

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
| THD Phase A (%) | 5.5% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.5% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.5% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 16.6% | Field-level stress indicator |
| Max Phase THD | 5.5% | Highest THD among all three phases |
| Min Phase THD | 5.5% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,632.33 kW
  - **Maximum Load:** 1,793.14 kVA
  - **Percentage of Capacity (MAX):** 71.7%
- **Average Load:** 1,298.52 kVA
  - **Percentage of Capacity (Avg):** 51.9%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,298.52 kVA
- **Average Power Factor (PF):** 0.963

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,299.40 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 475.69 V
- Average Current (Iavg_A): 1577.11 A
- Average kW (Psum_kW): 1251.46 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.88 kVA (0.1%)
- **Calculated PF (kW/kVA from averages):** 0.963
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1298.52) and measured PF (0.963) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,298.52 |        51.9% | 934,937.21 kVA | 4,270,149.27 TOTAL-HEAT |
| kW | 1,251.46 |        50.1% | 901,049.10 kWh | 154,777.53 Load-Heat |
| kVAR |   346.44 |        13.9% | 249,435.56 kVARh | - |
| WASTE |    47.07 |         1.9% | 33,888.11 WASTE | 5,821.12 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 4,270,149.27
- **Load-Heat (BTU/hr):** 154,777.53
- **Field-Heat (BTU/hr):** 5,821.12
- **Load-Heat (BTU, period total):** 111,439,824.12
- **Field-Heat (BTU, period total):** 4,191,208.52

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 4 | 1,298.52 | 1,251.46 |   340.64 |     0.96 |   51.9% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,293.98 | 1,246.44 |   343.07 |     0.96 |   51.8% |
| 01 | 1,303.17 | 1,254.82 |   346.87 |     0.96 |   52.1% |
| 02 | 1,286.93 | 1,240.29 |   337.25 |     0.96 |   51.5% |
| 03 | 1,300.37 | 1,253.44 |   341.01 |     0.96 |   52.0% |
| 04 | 1,282.19 | 1,235.51 |   338.14 |     0.96 |   51.3% |
| 05 | 1,288.99 | 1,240.63 |   346.94 |     0.96 |   51.6% |
| 06 | 1,261.81 | 1,215.48 |   333.33 |     0.96 |   50.5% |
| 07 | 1,270.74 | 1,225.32 |   331.67 |     0.96 |   50.8% |
| 08 | 1,272.72 | 1,227.19 |   331.18 |     0.96 |   50.9% |
| 09 | 1,283.75 | 1,239.35 |   329.20 |     0.97 |   51.3% |
| 10 | 1,288.39 | 1,242.85 |   332.98 |     0.96 |   51.5% |
| 11 | 1,287.42 | 1,242.27 |   330.74 |     0.96 |   51.5% |
| 12 | 1,300.51 | 1,255.71 |   329.93 |     0.97 |   52.0% |
| 13 | 1,317.18 | 1,271.20 |   335.61 |     0.97 |   52.7% |
| 14 | 1,310.24 | 1,264.44 |   335.47 |     0.97 |   52.4% |
| 15 | 1,324.11 | 1,275.68 |   346.95 |     0.96 |   53.0% |
| 16 | 1,317.96 | 1,268.86 |   349.31 |     0.96 |   52.7% |
| 17 | 1,316.06 | 1,267.63 |   346.78 |     0.96 |   52.6% |
| 18 | 1,317.70 | 1,270.42 |   344.28 |     0.96 |   52.7% |
| 19 | 1,306.71 | 1,257.91 |   348.66 |     0.96 |   52.3% |
| 20 | 1,312.83 | 1,263.55 |   351.82 |     0.96 |   52.5% |
| 21 | 1,314.20 | 1,265.58 |   349.84 |     0.96 |   52.6% |
| 22 | 1,301.96 | 1,253.45 |   347.94 |     0.96 |   52.1% |
| 23 | 1,304.67 | 1,256.95 |   346.44 |     0.96 |   52.2% |

---

# END OF REPORT

# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 5,938.1 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $1,157.93 (Cost per period)
- **Consumption Total Cost:** $3.13 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** BNR-2  
**Generated:** 2026-04-23 13:44:43  
**Data Source:** AN55050299-V-1minRES_25410CLP_260314-260331c.csv  

## Time Period

- **Period:** March 14, 2026 thru March 31, 2026
- **Number of Days:** 18 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 22,198

- **Dataset Coverage:** Partial month (58.1% of 31-day month)
- **Billing Scale Factor:** 1.722x (normalization applied for monthly comparison)

## Facility Information

- **Facility:** Foster Farms
- **Location:** Livingston HQ Facility
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** BNR-2
- **Power Factor:** 0.964
- **Total Energy (Actual):** 5,938.10 kWh (18 days), 16.05 kW (per hour)
- **Total Energy (Monthly Equivalent):** 10,226.73 kWh
- **Total Waste (Actual):** 223.68 kWh (18 days), 0.60 kW (per hour)
- **Total Waste (Monthly Equivalent):** 385.23 kWh

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_BNR-2_AN55050299-1minRES_260314-260331.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_BNR-2_AN55050299-1minRES_260314-260331.md


## UNITY MANAGEMENT BNR-2 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 0.60 kW/hr (actual)
- **Monthly Equivalent Waste:** 1.04 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **BNR-2 Utility Cost Offset (Monthly Equivalent):** $0.20/hour
- **Annual Offset Savings:** $1033/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 2,214 BTU/hr
- **Total Cooling kW No Longer Needed:** 0.19 kW
- **Cooling Energy Cost Avoided:** $0.04/hour
- **Annual Cooling Savings:** $331/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 0.80 kW
- **CO2e Emissions Avoided:** 2.61 metric tons/year
- **Monthly CO2e Reduction:** 0.22 metric tons/month
- **Hourly CO2e Reduction:** 0.0003 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $101/year

### Total BNR-2 Unity Savings

- **Per Hour:** $0.17
- **Per Day:** $4.01
- **Per Month:** $120.37
- **Per Year:** $1465

### BNR-2 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 4.8 kVAR Max (Avg: 4.4 kVAR/hr ; 3,202 kVAR/mo)
- **Max Harmonic Distortion:** 31.6% Max (range: 4.9% - 31.6%)
- **Max Amperage:** 21A Max (range: 19A - 21A)

---

# BNR-2 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   279.46 |   270.16 |   289.53 |
| Line to Line Voltage (480v) |   484.05 |   467.93 |   501.48 |
| Current (AMPS) |    19.87 |    18.79 |    20.92 |
| Phase Angle (degrees) |    15.48 |    13.59 |    17.06 |
| Total Harmonic Distortion (PCT) |    17.49 |     4.86 |    31.62 |

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
| THD Phase A (%) | 5.8% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.8% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.8% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 17.5% | Field-level stress indicator |
| Max Phase THD | 5.8% | Highest THD among all three phases |
| Min Phase THD | 5.8% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 16.81 kW
  - **Maximum Load:** 17.40 kVA
  - **Percentage of Capacity (MAX):** 0.7%
- **Average Load:** 16.65 kVA
  - **Percentage of Capacity (Avg):** 0.7%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 16.65 kVA
- **Average Power Factor (PF):** 0.964

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 16.66 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 484.05 V
- Average Current (Iavg_A): 19.87 A
- Average kW (Psum_kW): 16.05 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.01 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.963
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (16.65) and measured PF (0.964) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |    16.65 |         0.7% | 6,161.78 kVA | 54,766.14 TOTAL-HEAT |
| kW |    16.05 |         0.6% | 5,938.10 kWh | 1,988.09 Load-Heat |
| kVAR |     4.45 |         0.2% | 1,645.15 kVARh | - |
| WASTE |     0.60 |         0.0% | 223.68 WASTE | 74.89 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 54,766.14
- **Load-Heat (BTU/hr):** 1,988.09
- **Field-Heat (BTU/hr):** 74.89
- **Load-Heat (BTU, period total):** 735,525.96
- **Field-Heat (BTU, period total):** 27,706.40

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 3 |    16.65 |    16.05 |     4.45 |     0.96 |    0.7% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |    16.71 |    16.09 |     4.50 |     0.96 |    0.7% |
| 01 |    16.69 |    16.07 |     4.50 |     0.96 |    0.7% |
| 02 |    16.67 |    16.05 |     4.50 |     0.96 |    0.7% |
| 03 |    16.70 |    16.09 |     4.49 |     0.96 |    0.7% |
| 04 |    16.70 |    16.09 |     4.47 |     0.96 |    0.7% |
| 05 |    16.70 |    16.09 |     4.46 |     0.96 |    0.7% |
| 06 |    16.61 |    16.01 |     4.42 |     0.96 |    0.7% |
| 07 |    16.54 |    15.94 |     4.42 |     0.96 |    0.7% |
| 08 |    16.55 |    15.95 |     4.40 |     0.96 |    0.7% |
| 09 |    16.59 |    16.00 |     4.38 |     0.96 |    0.7% |
| 10 |    16.58 |    16.00 |     4.36 |     0.97 |    0.7% |
| 11 |    16.67 |    16.09 |     4.37 |     0.97 |    0.7% |
| 12 |    16.70 |    16.12 |     4.37 |     0.97 |    0.7% |
| 13 |    16.70 |    16.12 |     4.38 |     0.97 |    0.7% |
| 14 |    16.69 |    16.11 |     4.38 |     0.97 |    0.7% |
| 15 |    16.66 |    16.06 |     4.40 |     0.96 |    0.7% |
| 16 |    16.65 |    16.05 |     4.43 |     0.96 |    0.7% |
| 17 |    16.65 |    16.04 |     4.48 |     0.96 |    0.7% |
| 18 |    16.64 |    16.02 |     4.51 |     0.96 |    0.7% |
| 19 |    16.66 |    16.04 |     4.49 |     0.96 |    0.7% |
| 20 |    16.64 |    16.03 |     4.48 |     0.96 |    0.7% |
| 21 |    16.62 |    16.00 |     4.50 |     0.96 |    0.7% |
| 22 |    16.65 |    16.03 |     4.49 |     0.96 |    0.7% |
| 23 |    16.75 |    16.13 |     4.51 |     0.96 |    0.7% |

---

# END OF REPORT

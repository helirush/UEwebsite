# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 495,853.5 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $96,691.43 (Cost per period)
- **Consumption Total Cost:** $264.00 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** BNR-1  
**Generated:** 2026-04-23 13:44:26  
**Data Source:** AN55050325-V-1minRES_25410CLP_260314-260331c.csv  

## Time Period

- **Period:** March 14, 2026 thru March 31, 2026
- **Number of Days:** 18 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 21,975

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

- **Transformer:** BNR-1
- **Power Factor:** 0.897
- **Total Energy (Actual):** 495,853.49 kWh (18 days), 1353.87 kW (per hour)
- **Total Energy (Monthly Equivalent):** 853,969.89 kWh
- **Total Waste (Actual):** 57,181.46 kWh (18 days), 156.13 kW (per hour)
- **Total Waste (Monthly Equivalent):** 98,479.19 kWh

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_BNR-1_AN55050325-1minRES_260314-260331.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_BNR-1_AN55050325-1minRES_260314-260331.md


## UNITY MANAGEMENT BNR-1 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 156.13 kW/hr (actual)
- **Monthly Equivalent Waste:** 268.89 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **BNR-1 Utility Cost Offset (Monthly Equivalent):** $52.43/hour
- **Annual Offset Savings:** $266696/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 594,389 BTU/hr
- **Total Cooling kW No Longer Needed:** 52.06 kW
- **Cooling Energy Cost Avoided:** $10.15/hour
- **Annual Cooling Savings:** $88936/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 208.19 kW
- **CO2e Emissions Avoided:** 680.82 metric tons/year
- **Monthly CO2e Reduction:** 56.74 metric tons/month
- **Hourly CO2e Reduction:** 0.0777 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $26212/year

### Total BNR-1 Unity Savings

- **Per Hour:** $43.59
- **Per Day:** $1046.15
- **Per Month:** $31384.42
- **Per Year:** $381844

### BNR-1 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 707.1 kVAR Max (Avg: 668.7 kVAR/hr ; 481,446 kVAR/mo)
- **Max Harmonic Distortion:** 31.8% Max (range: 3.3% - 31.8%)
- **Max Amperage:** 1,932A Max (range: 1742A - 1932A)

---

# BNR-1 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   273.71 |   264.37 |   283.87 |
| Line to Line Voltage (480v) |   474.08 |   457.90 |   491.68 |
| Current (AMPS) |  1838.85 |  1741.59 |  1932.15 |
| Phase Angle (degrees) |    26.29 |    24.77 |    27.38 |
| Total Harmonic Distortion (PCT) |    17.53 |     3.34 |    31.84 |

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

- **Maximum UtilityDemand:** 1,417.49 kW
  - **Maximum Load:** 1,576.30 kVA
  - **Percentage of Capacity (MAX):** 63.1%
- **Average Load:** 1,509.99 kVA
  - **Percentage of Capacity (Avg):** 60.4%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,509.99 kVA
- **Average Power Factor (PF):** 0.897

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,509.94 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 474.08 V
- Average Current (Iavg_A): 1838.85 A
- Average kW (Psum_kW): 1353.87 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.05 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.897
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1509.99) and measured PF (0.897) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,509.99 |        60.4% | 553,034.95 kVA | 4,619,583.63 TOTAL-HEAT |
| kW | 1,353.87 |        54.2% | 495,853.49 kWh | 477,645.31 Load-Heat |
| kVAR |   668.67 |        26.7% | 244,901.97 kVARh | - |
| WASTE |   156.13 |         6.2% | 57,181.46 WASTE | 55,081.71 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 4,619,583.63
- **Load-Heat (BTU/hr):** 477,645.31
- **Field-Heat (BTU/hr):** 55,081.71
- **Load-Heat (BTU, period total):** 174,937,593.57
- **Field-Heat (BTU, period total):** 20,173,675.71

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 3 | 1,509.99 | 1,353.87 |   668.64 |     0.90 |   60.4% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,511.36 | 1,355.21 |   669.01 |     0.90 |   60.5% |
| 01 | 1,509.03 | 1,352.50 |   669.23 |     0.90 |   60.4% |
| 02 | 1,507.13 | 1,350.17 |   669.65 |     0.90 |   60.3% |
| 03 | 1,508.45 | 1,351.96 |   669.01 |     0.90 |   60.3% |
| 04 | 1,507.58 | 1,351.49 |   668.01 |     0.90 |   60.3% |
| 05 | 1,509.09 | 1,353.37 |   667.59 |     0.90 |   60.4% |
| 06 | 1,503.66 | 1,348.84 |   664.53 |     0.90 |   60.1% |
| 07 | 1,498.49 | 1,344.22 |   662.19 |     0.90 |   59.9% |
| 08 | 1,499.90 | 1,345.00 |   663.82 |     0.90 |   60.0% |
| 09 | 1,503.07 | 1,347.58 |   665.73 |     0.90 |   60.1% |
| 10 | 1,502.40 | 1,346.49 |   666.44 |     0.90 |   60.1% |
| 11 | 1,510.67 | 1,354.20 |   669.51 |     0.90 |   60.4% |
| 12 | 1,513.73 | 1,356.70 |   671.33 |     0.90 |   60.5% |
| 13 | 1,515.91 | 1,358.68 |   672.27 |     0.90 |   60.6% |
| 14 | 1,516.53 | 1,359.65 |   671.69 |     0.90 |   60.7% |
| 15 | 1,515.17 | 1,357.81 |   672.34 |     0.90 |   60.6% |
| 16 | 1,513.48 | 1,356.20 |   671.80 |     0.90 |   60.5% |
| 17 | 1,513.86 | 1,356.72 |   671.59 |     0.90 |   60.6% |
| 18 | 1,514.27 | 1,357.44 |   671.08 |     0.90 |   60.6% |
| 19 | 1,514.11 | 1,358.64 |   668.26 |     0.90 |   60.6% |
| 20 | 1,511.88 | 1,357.05 |   666.43 |     0.90 |   60.5% |
| 21 | 1,510.76 | 1,355.14 |   667.77 |     0.90 |   60.4% |
| 22 | 1,510.71 | 1,355.34 |   667.27 |     0.90 |   60.4% |
| 23 | 1,516.98 | 1,360.97 |   670.02 |     0.90 |   60.7% |

---

# END OF REPORT

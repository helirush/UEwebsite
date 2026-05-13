# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 968,163.9 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $188,791.95 (Cost per period)
- **Consumption Total Cost:** $270.56 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** BNR-1  
**Generated:** 2026-05-06 11:08:26  
**Data Source:** AN55050325-V-1minRES_43200CLP_260401-260430c.csv  

## Time Period

- **Period:** April 01, 2026 thru April 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 41,867

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

- **Transformer:** BNR-1
- **Power Factor:** 0.897
- **Total Energy (Actual):** 968,163.86 kWh (per period), 1387.48 kW (per hour)
- **Total Waste (Actual):** 110,619.79 kWh (per period), 158.53 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_BNR-1_AN55050325-1minRES_260401-260430.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_BNR-1_AN55050325-1minRES_260401-260430.md


## UNITY MANAGEMENT BNR-1 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 158.53 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **BNR-1 Utility Cost Offset:** $30.91/hour
- **Annual Offset Savings:** $270801/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 603,041 BTU/hr
- **Total Cooling kW No Longer Needed:** 52.80 kW
- **Cooling Energy Cost Avoided:** $10.30/hour
- **Annual Cooling Savings:** $90201/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 211.34 kW
- **CO2e Emissions Avoided:** 691.10 metric tons/year
- **Monthly CO2e Reduction:** 57.59 metric tons/month
- **Hourly CO2e Reduction:** 0.0789 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $26607/year

### Total BNR-1 Unity Savings

- **Per Hour:** $44.25
- **Per Day:** $1061.95
- **Per Month:** $31858.38
- **Per Year:** $387610

### BNR-1 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 723.5 kVAR Max (Avg: 681.9 kVAR/hr ; 491,000 kVAR/mo)
- **Max Harmonic Distortion:** 34.0% Max (range: 3.1% - 34.0%)
- **Max Amperage:** 1,960A Max (range: 1803A - 1960A)

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
| Line to Neutral Voltage (277v) |   273.81 |   264.80 |   283.64 |
| Line to Line Voltage (480v) |   474.26 |   458.64 |   491.28 |
| Current (AMPS) |  1882.05 |  1802.55 |  1959.75 |
| Phase Angle (degrees) |    26.17 |    25.04 |    27.38 |
| Total Harmonic Distortion (PCT) |    17.58 |     3.08 |    34.04 |

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
| THD Phase A (%) | 5.9% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.9% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.9% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 17.6% | Field-level stress indicator |
| Max Phase THD | 5.9% | Highest THD among all three phases |
| Min Phase THD | 5.9% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,443.36 kW
  - **Maximum Load:** 1,602.88 kVA
  - **Percentage of Capacity (MAX):** 64.1%
- **Average Load:** 1,546.02 kVA
  - **Percentage of Capacity (Avg):** 61.8%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,546.02 kVA
- **Average Power Factor (PF):** 0.897

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,545.99 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 474.26 V
- Average Current (Iavg_A): 1882.05 A
- Average kW (Psum_kW): 1387.48 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.03 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.897
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1546.02) and measured PF (0.897) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,546.02 |        61.8% | 1,078,783.64 kVA | 4,734,295.60 TOTAL-HEAT |
| kW | 1,387.48 |        55.5% | 968,163.86 kWh | 485,460.43 Load-Heat |
| kVAR |   681.94 |        27.3% | 475,849.66 kVARh | - |
| WASTE |   158.53 |         6.3% | 110,619.79 WASTE | 55,467.40 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 4,734,295.60
- **Load-Heat (BTU/hr):** 485,460.43
- **Field-Heat (BTU/hr):** 55,467.40
- **Load-Heat (BTU, period total):** 338,746,195.84
- **Field-Heat (BTU, period total):** 38,704,225.24

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 4 | 1,546.02 | 1,387.48 |   681.91 |     0.90 |   61.8% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,545.27 | 1,387.52 |   680.14 |     0.90 |   61.8% |
| 01 | 1,544.28 | 1,385.86 |   681.28 |     0.90 |   61.8% |
| 02 | 1,546.49 | 1,387.44 |   683.07 |     0.90 |   61.9% |
| 03 | 1,548.39 | 1,389.57 |   683.04 |     0.90 |   61.9% |
| 04 | 1,548.38 | 1,390.10 |   681.94 |     0.90 |   61.9% |
| 05 | 1,546.88 | 1,389.56 |   679.65 |     0.90 |   61.9% |
| 06 | 1,541.87 | 1,385.02 |   677.50 |     0.90 |   61.7% |
| 07 | 1,538.95 | 1,382.22 |   676.58 |     0.90 |   61.6% |
| 08 | 1,542.08 | 1,384.00 |   680.07 |     0.90 |   61.7% |
| 09 | 1,544.83 | 1,386.19 |   681.86 |     0.90 |   61.8% |
| 10 | 1,547.25 | 1,388.21 |   683.22 |     0.90 |   61.9% |
| 11 | 1,550.57 | 1,391.11 |   684.87 |     0.90 |   62.0% |
| 12 | 1,551.02 | 1,391.26 |   685.58 |     0.90 |   62.0% |
| 13 | 1,549.95 | 1,390.04 |   685.65 |     0.90 |   62.0% |
| 14 | 1,548.03 | 1,387.81 |   685.80 |     0.90 |   61.9% |
| 15 | 1,548.03 | 1,387.77 |   685.90 |     0.90 |   61.9% |
| 16 | 1,547.52 | 1,387.54 |   685.21 |     0.90 |   61.9% |
| 17 | 1,546.62 | 1,387.40 |   683.46 |     0.90 |   61.9% |
| 18 | 1,545.94 | 1,386.52 |   683.71 |     0.90 |   61.8% |
| 19 | 1,545.81 | 1,387.76 |   680.86 |     0.90 |   61.8% |
| 20 | 1,543.95 | 1,386.83 |   678.53 |     0.90 |   61.8% |
| 21 | 1,543.04 | 1,385.90 |   678.38 |     0.90 |   61.7% |
| 22 | 1,544.93 | 1,387.38 |   679.68 |     0.90 |   61.8% |
| 23 | 1,544.01 | 1,386.46 |   679.45 |     0.90 |   61.8% |

---

# END OF REPORT

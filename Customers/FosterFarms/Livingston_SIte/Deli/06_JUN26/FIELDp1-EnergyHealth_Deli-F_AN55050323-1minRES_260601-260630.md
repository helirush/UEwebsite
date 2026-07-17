# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 554,138.5 kWh (Usage per period)
- **Consumption Cost per unit:** $0.120/kWh (Cost per kWh)
- **Consumption Total Cost:** $66,496.62 (Cost per period)
- **Consumption Total Cost:** $92.37 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Deli F  
**Generated:** 2026-07-04 14:56:42  
**Data Source:** AN55050323-V-1minRES_43200CLP_260601-260630c.csv  

## Time Period

- **Period:** June 01, 2026 thru June 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,195

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
- **Power Factor:** 0.861
- **Total Energy (Actual):** 554,138.53 kWh (per period), 769.73 kW (per hour)
- **Total Waste (Actual):** 70,709.04 kWh (per period), 98.22 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Deli-F_AN55050323-1minRES_260601-260630.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Deli-F_AN55050323-1minRES_260601-260630.md


## UNITY MANAGEMENT Deli F SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 98.22 kW/hr
- **Blended Electricity Rate:** $0.1200/kWh (all-inclusive)
- **Deli F Utility Cost Offset:** $11.79/hour
- **Annual Offset Savings:** $103247/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 354,088 BTU/hr
- **Total Cooling kW No Longer Needed:** 31.14 kW
- **Cooling Energy Cost Avoided:** $3.74/hour
- **Annual Cooling Savings:** $32737/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 129.36 kW
- **CO2e Emissions Avoided:** 423.03 metric tons/year
- **Monthly CO2e Reduction:** 35.25 metric tons/month
- **Hourly CO2e Reduction:** 0.0483 metric tons/hour
- **CO2e Value Rate:** $35/metric ton
- **Annual CO2e Value:** $14806/year

### Total Deli F Unity Savings

- **Per Hour:** $17.21
- **Per Day:** $413.13
- **Per Month:** $12393.75
- **Per Year:** $150791

### Deli F Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,775.9 kVAR Max (Avg: 401.1 kVAR/hr ; 288,763 kVAR/mo)
- **Max Harmonic Distortion:** 29.1% Max (range: 3.0% - 29.1%)
- **Max Amperage:** 2,259A Max (range: 16A - 2259A)

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
| Line to Neutral Voltage (277v) |   277.58 |   266.32 |   288.96 |
| Line to Line Voltage (480v) |   480.77 |   461.28 |   500.49 |
| Current (AMPS) |  1045.82 |    16.30 |  2259.28 |
| Phase Angle (degrees) |    30.14 |     0.00 |    82.36 |
| Total Harmonic Distortion (PCT) |    14.73 |     3.00 |    29.14 |

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
| Unity THD Composite (%) | 14.7% | Field-level stress indicator |
| Max Phase THD | 4.9% | Highest THD among all three phases |
| Min Phase THD | 4.9% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,699.38 kW
  - **Maximum Load:** 1,857.80 kVA
  - **Percentage of Capacity (MAX):** 74.3%
- **Average Load:** 867.94 kVA
  - **Percentage of Capacity (Avg):** 34.7%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 867.94 kVA
- **Average Power Factor (PF):** 0.861

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 870.88 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 480.77 V
- Average Current (Iavg_A): 1045.82 A
- Average kW (Psum_kW): 769.73 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 2.94 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.884
- **Power Factor Difference:** 0.023 (2.7%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (867.94) and measured PF (0.861) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   867.94 |        34.7% | 624,847.57 kVA | 2,626,414.18 TOTAL-HEAT |
| kW |   769.73 |        30.8% | 554,138.53 kWh | 297,210.45 Load-Heat |
| kVAR |   401.06 |        16.0% | 288,729.94 kVARh | - |
| WASTE |    98.22 |         3.9% | 70,709.04 WASTE | 37,924.57 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,626,414.18
- **Load-Heat (BTU/hr):** 297,210.45
- **Field-Heat (BTU/hr):** 37,924.57
- **Load-Heat (BTU, period total):** 213,966,759.65
- **Field-Heat (BTU, period total):** 27,302,531.37

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 6 |   867.94 |   769.73 |   397.16 |     0.89 |   34.7% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   752.34 |   617.44 |   428.79 |     0.82 |   30.1% |
| 01 |   315.13 |   255.57 |   182.97 |     0.81 |   12.6% |
| 02 |    51.85 |    43.14 |    28.23 |     0.83 |    2.1% |
| 03 |    57.87 |    48.19 |    31.18 |     0.83 |    2.3% |
| 04 |    40.59 |    33.81 |    21.72 |     0.83 |    1.6% |
| 05 |   196.40 |   149.82 |   125.07 |     0.76 |    7.9% |
| 06 | 1,030.02 |   927.58 |   440.92 |     0.90 |   41.2% |
| 07 | 1,038.33 |   930.09 |   459.69 |     0.90 |   41.5% |
| 08 | 1,042.58 |   925.57 |   477.05 |     0.89 |   41.7% |
| 09 | 1,072.10 |   961.00 |   473.53 |     0.90 |   42.9% |
| 10 |   989.60 |   865.63 |   476.05 |     0.87 |   39.6% |
| 11 | 1,066.68 |   954.04 |   475.42 |     0.89 |   42.7% |
| 12 | 1,112.06 |   996.08 |   492.42 |     0.90 |   44.5% |
| 13 | 1,084.37 |   968.19 |   486.47 |     0.89 |   43.4% |
| 14 | 1,127.62 | 1,012.92 |   494.08 |     0.90 |   45.1% |
| 15 | 1,062.04 |   938.79 |   493.49 |     0.88 |   42.5% |
| 16 | 1,117.23 | 1,003.03 |   490.32 |     0.90 |   44.7% |
| 17 | 1,114.26 |   993.45 |   501.80 |     0.89 |   44.6% |
| 18 | 1,127.68 | 1,012.12 |   495.18 |     0.90 |   45.1% |
| 19 | 1,062.49 |   937.01 |   496.84 |     0.88 |   42.5% |
| 20 | 1,075.54 |   960.00 |   482.79 |     0.89 |   43.0% |
| 21 | 1,129.11 | 1,013.56 |   496.10 |     0.90 |   45.2% |
| 22 | 1,076.99 |   956.74 |   491.80 |     0.89 |   43.1% |
| 23 | 1,088.43 |   970.25 |   490.27 |     0.89 |   43.5% |

---

# END OF REPORT

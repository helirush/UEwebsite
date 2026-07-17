# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 632,205.7 kWh (Usage per period)
- **Consumption Cost per unit:** $0.120/kWh (Cost per kWh)
- **Consumption Total Cost:** $75,864.69 (Cost per period)
- **Consumption Total Cost:** $125.42 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Rendering-2  
**Generated:** 2026-07-06 12:41:44  
**Data Source:** AN55050284-V-1minRES_43200CLP_260601-260630c.csv  

## Time Period

- **Period:** June 01, 2026 thru June 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 36,293

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

- **Transformer:** Rendering-2
- **Power Factor:** 0.719
- **Total Energy (Actual):** 632,205.72 kWh (per period), 1045.17 kW (per hour)
- **Total Waste (Actual):** 244,433.67 kWh (per period), 404.10 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Rendering-2_AN55050284-1minRES_260601-260630.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Rendering-2_AN55050284-1minRES_260601-260630.md


## UNITY MANAGEMENT Rendering-2 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 404.10 kW/hr
- **Blended Electricity Rate:** $0.1200/kWh (all-inclusive)
- **Rendering-2 Utility Cost Offset:** $48.49/hour
- **Annual Offset Savings:** $424790/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 1,569,140 BTU/hr
- **Total Cooling kW No Longer Needed:** 138.02 kW
- **Cooling Energy Cost Avoided:** $16.56/hour
- **Annual Cooling Savings:** $145085/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 542.12 kW
- **CO2e Emissions Avoided:** 1772.82 metric tons/year
- **Monthly CO2e Reduction:** 147.73 metric tons/month
- **Hourly CO2e Reduction:** 0.2024 metric tons/hour
- **CO2e Value Rate:** $35/metric ton
- **Annual CO2e Value:** $62049/year

### Total Rendering-2 Unity Savings

- **Per Hour:** $72.14
- **Per Day:** $1731.30
- **Per Month:** $51938.94
- **Per Year:** $631924

### Rendering-2 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,520.7 kVAR Max (Avg: 1,004.0 kVAR/hr ; 722,876 kVAR/mo)
- **Max Harmonic Distortion:** 30.2% Max (range: 3.3% - 30.2%)
- **Max Amperage:** 2,469A Max (range: 856A - 2469A)

---

# Rendering-2 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   271.33 |   260.07 |   283.76 |
| Line to Line Voltage (480v) |   469.96 |   450.45 |   491.49 |
| Current (AMPS) |  1781.58 |   856.39 |  2469.33 |
| Phase Angle (degrees) |    43.94 |    34.61 |    56.01 |
| Total Harmonic Distortion (PCT) |    16.44 |     3.34 |    30.18 |

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
| Unity THD Composite (%) | 16.4% | Field-level stress indicator |
| Max Phase THD | 5.5% | Highest THD among all three phases |
| Min Phase THD | 5.5% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,406.12 kW
  - **Maximum Load:** 2,007.48 kVA
  - **Percentage of Capacity (MAX):** 80.3%
- **Average Load:** 1,449.27 kVA
  - **Percentage of Capacity (Avg):** 58.0%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,449.27 kVA
- **Average Power Factor (PF):** 0.719

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,450.21 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 469.96 V
- Average Current (Iavg_A): 1781.58 A
- Average kW (Psum_kW): 1045.17 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.93 kVA (0.1%)
- **Calculated PF (kW/kVA from averages):** 0.721
- **Power Factor Difference:** 0.001 (0.2%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1449.27) and measured PF (0.719) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,449.27 |        58.0% | 876,639.39 kVA | 3,566,267.37 TOTAL-HEAT |
| kW | 1,045.17 |        41.8% | 632,205.72 kWh | 994,383.59 Load-Heat |
| kVAR | 1,003.99 |        40.2% | 607,299.39 kVARh | - |
| WASTE |   404.10 |        16.2% | 244,433.67 WASTE | 384,464.78 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,566,267.37
- **Load-Heat (BTU/hr):** 994,383.59
- **Field-Heat (BTU/hr):** 384,464.78
- **Load-Heat (BTU, period total):** 601,486,062.69
- **Field-Heat (BTU, period total):** 232,556,337.80

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 6 | 1,449.27 | 1,045.17 | 1,002.15 |     0.72 |   58.0% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,408.55 | 1,005.44 |   984.54 |     0.71 |   56.3% |
| 01 | 1,420.66 | 1,015.33 |   991.53 |     0.71 |   56.8% |
| 02 | 1,432.53 | 1,025.20 |   998.58 |     0.72 |   57.3% |
| 03 | 1,428.85 | 1,021.74 |   997.01 |     0.72 |   57.2% |
| 04 | 1,433.92 | 1,030.98 |   995.23 |     0.72 |   57.4% |
| 05 | 1,437.68 | 1,041.53 |   989.56 |     0.72 |   57.5% |
| 06 | 1,465.63 | 1,060.36 | 1,010.30 |     0.72 |   58.6% |
| 07 | 1,482.92 | 1,075.19 | 1,019.69 |     0.73 |   59.3% |
| 08 | 1,484.77 | 1,077.69 | 1,019.85 |     0.73 |   59.4% |
| 09 | 1,479.95 | 1,071.64 | 1,019.45 |     0.72 |   59.2% |
| 10 | 1,502.59 | 1,088.42 | 1,034.39 |     0.72 |   60.1% |
| 11 | 1,491.45 | 1,072.99 | 1,034.13 |     0.72 |   59.7% |
| 12 | 1,470.75 | 1,052.24 | 1,026.16 |     0.72 |   58.8% |
| 13 | 1,448.74 | 1,039.43 | 1,007.81 |     0.72 |   57.9% |
| 14 | 1,454.35 | 1,047.76 | 1,007.36 |     0.72 |   58.2% |
| 15 | 1,469.09 | 1,062.07 | 1,013.51 |     0.72 |   58.8% |
| 16 | 1,486.73 | 1,079.33 | 1,021.34 |     0.73 |   59.5% |
| 17 | 1,474.96 | 1,064.44 | 1,019.13 |     0.72 |   59.0% |
| 18 | 1,425.82 | 1,021.99 |   992.48 |     0.72 |   57.0% |
| 19 | 1,371.32 |   988.20 |   947.75 |     0.72 |   54.9% |
| 20 | 1,424.03 | 1,042.86 |   967.28 |     0.73 |   57.0% |
| 21 | 1,432.32 | 1,040.80 |   981.59 |     0.73 |   57.3% |
| 22 | 1,435.83 | 1,036.36 |   991.03 |     0.72 |   57.4% |
| 23 | 1,451.09 | 1,045.83 | 1,003.88 |     0.72 |   58.0% |

---

# END OF REPORT

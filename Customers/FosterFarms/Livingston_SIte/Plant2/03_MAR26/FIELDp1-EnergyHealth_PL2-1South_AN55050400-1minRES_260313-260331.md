# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 421,489.3 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $82,190.40 (Cost per period)
- **Consumption Total Cost:** $185.74 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL2-1South  
**Generated:** 2026-04-25 17:57:32  
**Data Source:** AN55050400-V-1minRES_26550CLP_260313-260331c.csv  

## Time Period

- **Period:** March 13, 2026 thru March 31, 2026
- **Number of Days:** 19 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 26,550

- **Dataset Coverage:** Partial month (61.3% of 31-day month)
- **Billing Scale Factor:** 1.632x (normalization applied for monthly comparison)

## Facility Information

- **Facility:** Foster Farms
- **Location:** Livingston HQ Facility
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** PL2-1South
- **Power Factor:** 0.857
- **Total Energy (Actual):** 421,489.25 kWh (19 days), 952.52 kW (per hour)
- **Total Energy (Monthly Equivalent):** 687,692.99 kWh
- **Total Waste (Actual):** 66,961.19 kWh (19 days), 151.32 kW (per hour)
- **Total Waste (Monthly Equivalent):** 109,252.46 kWh

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL2-1South_AN55050400-1minRES_260313-260331.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL2-1South_AN55050400-1minRES_260313-260331.md


## UNITY MANAGEMENT PL2-1South SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 151.32 kW/hr (actual)
- **Monthly Equivalent Waste:** 246.90 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL2-1South Utility Cost Offset (Monthly Equivalent):** $48.15/hour
- **Annual Offset Savings:** $258493/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 548,292 BTU/hr
- **Total Cooling kW No Longer Needed:** 48.03 kW
- **Cooling Energy Cost Avoided:** $9.37/hour
- **Annual Cooling Savings:** $82043/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 199.35 kW
- **CO2e Emissions Avoided:** 651.92 metric tons/year
- **Monthly CO2e Reduction:** 54.33 metric tons/month
- **Hourly CO2e Reduction:** 0.0744 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $25099/year

### Total PL2-1South Unity Savings

- **Per Hour:** $41.74
- **Per Day:** $1001.74
- **Per Month:** $30052.17
- **Per Year:** $365635

### PL2-1South Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,556.0 kVAR Max (Avg: 557.8 kVAR/hr ; 401,640 kVAR/mo)
- **Max Harmonic Distortion:** 32.1% Max (range: 3.0% - 32.1%)
- **Max Amperage:** 2,261A Max (range: 0A - 2261A)

---

# PL2-1South DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   278.79 |     0.00 |   285.84 |
| Line to Line Voltage (480v) |   482.88 |     0.00 |   495.08 |
| Current (AMPS) |  1322.62 |     0.00 |  2260.92 |
| Phase Angle (degrees) |    30.96 |    25.31 |    90.00 |
| Total Harmonic Distortion (PCT) |    15.64 |     3.00 |    32.14 |

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
| THD Phase A (%) | 5.2% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.2% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.2% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 15.6% | Field-level stress indicator |
| Max Phase THD | 5.2% | Highest THD among all three phases |
| Min Phase THD | 5.2% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,557.64 kW
  - **Maximum Load:** 1,813.08 kVA
  - **Percentage of Capacity (MAX):** 72.5%
- **Average Load:** 1,103.84 kVA
  - **Percentage of Capacity (Avg):** 44.2%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,103.84 kVA
- **Average Power Factor (PF):** 0.857

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,106.20 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 482.88 V
- Average Current (Iavg_A): 1322.62 A
- Average kW (Psum_kW): 952.52 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 2.35 kVA (0.2%)
- **Calculated PF (kW/kVA from averages):** 0.861
- **Power Factor Difference:** 0.005 (0.5%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1103.84) and measured PF (0.857) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,103.84 |        44.2% | 488,450.44 kVA | 3,250,126.96 TOTAL-HEAT |
| kW |   952.52 |        38.1% | 421,489.25 kWh | 445,556.68 Load-Heat |
| kVAR |   557.83 |        22.3% | 246,841.33 kVARh | - |
| WASTE |   151.32 |         6.1% | 66,961.19 WASTE | 70,784.73 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,250,126.96
- **Load-Heat (BTU/hr):** 445,556.68
- **Field-Heat (BTU/hr):** 70,784.73
- **Load-Heat (BTU, period total):** 197,158,832.30
- **Field-Heat (BTU, period total):** 31,322,244.36

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 3 | 1,103.84 |   952.52 |   555.89 |     0.86 |   44.2% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,206.84 | 1,047.55 |   597.57 |     0.87 |   48.3% |
| 01 | 1,154.06 |   998.32 |   577.56 |     0.87 |   46.2% |
| 02 | 1,184.28 | 1,030.62 |   581.78 |     0.87 |   47.4% |
| 03 | 1,161.73 | 1,006.93 |   577.60 |     0.87 |   46.5% |
| 04 | 1,170.03 | 1,018.72 |   573.67 |     0.87 |   46.8% |
| 05 | 1,147.33 |   997.49 |   565.30 |     0.87 |   45.9% |
| 06 | 1,142.39 |   993.49 |   562.16 |     0.87 |   45.7% |
| 07 | 1,110.17 |   963.23 |   550.56 |     0.87 |   44.4% |
| 08 | 1,138.99 |   991.13 |   559.61 |     0.87 |   45.6% |
| 09 | 1,146.54 |   991.97 |   573.33 |     0.87 |   45.9% |
| 10 | 1,146.96 |   992.10 |   573.90 |     0.86 |   45.9% |
| 11 | 1,147.64 |   993.32 |   572.98 |     0.87 |   45.9% |
| 12 | 1,128.14 |   974.14 |   566.96 |     0.86 |   45.1% |
| 13 | 1,111.32 |   960.85 |   555.85 |     0.86 |   44.5% |
| 14 | 1,043.62 |   893.66 |   536.93 |     0.86 |   41.7% |
| 15 |   983.63 |   837.39 |   514.86 |     0.85 |   39.3% |
| 16 |   969.18 |   814.36 |   524.49 |     0.84 |   38.8% |
| 17 |   945.49 |   795.58 |   509.76 |     0.84 |   37.8% |
| 18 |   833.36 |   704.96 |   443.28 |     0.85 |   33.3% |
| 19 |   890.92 |   754.91 |   471.73 |     0.85 |   35.6% |
| 20 | 1,104.54 |   950.10 |   561.85 |     0.86 |   44.2% |
| 21 | 1,181.41 | 1,025.02 |   586.05 |     0.87 |   47.3% |
| 22 | 1,224.62 | 1,064.80 |   603.13 |     0.87 |   49.0% |
| 23 | 1,252.66 | 1,092.44 |   611.19 |     0.87 |   50.1% |

---

# END OF REPORT

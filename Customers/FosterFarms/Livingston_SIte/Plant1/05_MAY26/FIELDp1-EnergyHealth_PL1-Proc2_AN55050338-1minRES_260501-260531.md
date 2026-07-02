# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 365,852.6 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $71,341.26 (Cost per period)
- **Consumption Total Cost:** $95.92 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL1-Proc2  
**Generated:** 2026-06-18 23:48:07  
**Data Source:** AN55050338-V-1minRES_44640CLP_260501-260531c.csv  

## Time Period

- **Period:** May 01, 2026 thru May 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,626

- **Dataset Coverage:** Complete month (100.0% of 31-day month)
- **Billing Scale Factor:** 1.000x (no normalization needed)

## Facility Information

- **Facility:** Foster Farms
- **Location:** Livingston HQ Facility
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** PL1-Proc2
- **Power Factor:** 0.848
- **Total Energy (Actual):** 365,852.63 kWh (per period), 491.89 kW (per hour)
- **Total Waste (Actual):** 58,266.42 kWh (per period), 78.34 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL1-Proc2_AN55050338-1minRES_260501-260531.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL1-Proc2_AN55050338-1minRES_260501-260531.md


## UNITY MANAGEMENT PL1-Proc2 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 78.34 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL1-Proc2 Utility Cost Offset:** $15.28/hour
- **Annual Offset Savings:** $133820/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 424,889 BTU/hr
- **Total Cooling kW No Longer Needed:** 37.18 kW
- **Cooling Energy Cost Avoided:** $7.25/hour
- **Annual Cooling Savings:** $63507/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 115.52 kW
- **CO2e Emissions Avoided:** 377.76 metric tons/year
- **Monthly CO2e Reduction:** 31.48 metric tons/month
- **Hourly CO2e Reduction:** 0.0431 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $14544/year

### Total PL1-Proc2 Unity Savings

- **Per Hour:** $24.19
- **Per Day:** $580.47
- **Per Month:** $17414.03
- **Per Year:** $211871

### PL1-Proc2 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 741.5 kVAR Max (Avg: 288.5 kVAR/hr ; 207,688 kVAR/mo)
- **Max Harmonic Distortion:** 29.8% Max (range: 3.0% - 29.8%)
- **Max Amperage:** 1,615A Max (range: 218A - 1615A)

---

# PL1-Proc2 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   184.59 |   180.71 |   192.21 |
| Line to Line Voltage (480v) |   319.72 |   313.00 |   332.91 |
| Current (AMPS) |   828.48 |   217.72 |  1614.64 |
| Phase Angle (degrees) |    31.80 |    27.38 |    62.03 |
| Total Harmonic Distortion (PCT) |    15.27 |     3.00 |    29.84 |

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
| THD Phase A (%) | 5.1% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.1% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.1% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 15.3% | Field-level stress indicator |
| Max Phase THD | 5.1% | Highest THD among all three phases |
| Min Phase THD | 5.1% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 902.01 kW
  - **Maximum Load:** 1,080.69 kVA
  - **Percentage of Capacity (MAX):** 43.2%
- **Average Load:** 570.23 kVA
  - **Percentage of Capacity (Avg):** 22.8%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 570.23 kVA
- **Average Power Factor (PF):** 0.848

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 458.79 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 319.72 V
- Average Current (Iavg_A): 828.48 A
- Average kW (Psum_kW): 491.89 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 111.45 kVA (19.5%)
- **Calculated PF (kW/kVA from averages):** 1.072
- **Power Factor Difference:** 0.224 (26.4%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (570.23) and measured PF (0.848) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   570.23 |        22.8% | 424,119.05 kVA | 1,678,404.24 TOTAL-HEAT |
| kW |   491.89 |        19.7% | 365,852.63 kWh | 230,582.91 Load-Heat |
| kVAR |   288.46 |        11.5% | 214,543.29 kVARh | - |
| WASTE |    78.34 |         3.1% | 58,266.42 WASTE | 36,723.09 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,678,404.24
- **Load-Heat (BTU/hr):** 230,582.91
- **Field-Heat (BTU/hr):** 36,723.09
- **Load-Heat (BTU, period total):** 171,499,885.01
- **Field-Heat (BTU, period total):** 27,313,413.86

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 5 |   570.23 |   491.89 |   287.36 |     0.86 |   22.8% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   624.54 |   540.72 |   311.38 |     0.87 |   25.0% |
| 01 |   598.83 |   516.73 |   301.51 |     0.86 |   24.0% |
| 02 |   610.63 |   527.52 |   306.47 |     0.86 |   24.4% |
| 03 |   610.76 |   527.56 |   306.66 |     0.86 |   24.4% |
| 04 |   622.68 |   539.06 |   310.54 |     0.87 |   24.9% |
| 05 |   594.79 |   513.85 |   298.30 |     0.86 |   23.8% |
| 06 |   585.46 |   505.65 |   293.75 |     0.86 |   23.4% |
| 07 |   602.77 |   521.73 |   300.51 |     0.87 |   24.1% |
| 08 |   619.96 |   537.52 |   307.71 |     0.87 |   24.8% |
| 09 |   638.55 |   554.85 |   315.01 |     0.87 |   25.5% |
| 10 |   637.92 |   553.97 |   315.23 |     0.87 |   25.5% |
| 11 |   645.43 |   560.69 |   318.68 |     0.87 |   25.8% |
| 12 |   645.19 |   560.91 |   318.02 |     0.87 |   25.8% |
| 13 |   640.41 |   556.55 |   315.96 |     0.87 |   25.6% |
| 14 |   595.68 |   515.23 |   298.12 |     0.86 |   23.8% |
| 15 |   536.81 |   461.56 |   273.39 |     0.86 |   21.5% |
| 16 |   508.07 |   435.32 |   261.01 |     0.86 |   20.3% |
| 17 |   426.61 |   361.32 |   226.33 |     0.85 |   17.1% |
| 18 |   338.23 |   283.66 |   183.80 |     0.84 |   13.5% |
| 19 |   397.50 |   336.08 |   211.36 |     0.85 |   15.9% |
| 20 |   483.15 |   411.49 |   252.37 |     0.85 |   19.3% |
| 21 |   531.43 |   455.45 |   272.88 |     0.86 |   21.3% |
| 22 |   574.94 |   495.61 |   290.37 |     0.86 |   23.0% |
| 23 |   615.18 |   532.34 |   307.23 |     0.87 |   24.6% |

---

# END OF REPORT

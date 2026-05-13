# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 103,740.5 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $20,229.40 (Cost per period)
- **Consumption Total Cost:** $45.77 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL2-2Center  
**Generated:** 2026-04-25 17:57:25  
**Data Source:** AN55050368-V-1minRES_26520CLP_260313-260331c.csv  

## Time Period

- **Period:** March 13, 2026 thru March 31, 2026
- **Number of Days:** 19 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 26,520

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

- **Transformer:** PL2-2Center
- **Power Factor:** 0.839
- **Total Energy (Actual):** 103,740.52 kWh (19 days), 234.71 kW (per hour)
- **Total Energy (Monthly Equivalent):** 169,260.85 kWh
- **Total Waste (Actual):** 19,158.23 kWh (19 days), 43.34 kW (per hour)
- **Total Waste (Monthly Equivalent):** 31,258.17 kWh

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL2-2Center_AN55050368-1minRES_260313-260331.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL2-2Center_AN55050368-1minRES_260313-260331.md


## UNITY MANAGEMENT PL2-2Center SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 43.34 kW/hr (actual)
- **Monthly Equivalent Waste:** 70.72 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL2-2Center Utility Cost Offset (Monthly Equivalent):** $13.79/hour
- **Annual Offset Savings:** $74041/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 156,117 BTU/hr
- **Total Cooling kW No Longer Needed:** 13.68 kW
- **Cooling Energy Cost Avoided:** $2.67/hour
- **Annual Cooling Savings:** $23360/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 57.02 kW
- **CO2e Emissions Avoided:** 186.46 metric tons/year
- **Monthly CO2e Reduction:** 15.54 metric tons/month
- **Hourly CO2e Reduction:** 0.0213 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $7179/year

### Total PL2-2Center Unity Savings

- **Per Hour:** $11.94
- **Per Day:** $286.52
- **Per Month:** $8595.63
- **Per Year:** $104580

### PL2-2Center Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 320.4 kVAR Max (Avg: 149.1 kVAR/hr ; 107,338 kVAR/mo)
- **Max Harmonic Distortion:** 30.2% Max (range: 3.0% - 30.2%)
- **Max Amperage:** 764A Max (range: 0A - 764A)

---

# PL2-2Center DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   280.23 |     0.00 |   287.57 |
| Line to Line Voltage (480v) |   485.37 |     0.00 |   498.08 |
| Current (AMPS) |   331.66 |     0.00 |   763.71 |
| Phase Angle (degrees) |    32.90 |    24.63 |    90.00 |
| Total Harmonic Distortion (PCT) |    14.56 |     3.00 |    30.17 |

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
| Unity THD Composite (%) | 14.6% | Field-level stress indicator |
| Max Phase THD | 4.9% | Highest THD among all three phases |
| Min Phase THD | 4.9% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 551.31 kW
  - **Maximum Load:** 632.98 kVA
  - **Percentage of Capacity (MAX):** 25.3%
- **Average Load:** 278.05 kVA
  - **Percentage of Capacity (Avg):** 11.1%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 278.05 kVA
- **Average Power Factor (PF):** 0.839

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 278.82 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 485.37 V
- Average Current (Iavg_A): 331.66 A
- Average kW (Psum_kW): 234.71 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.77 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.842
- **Power Factor Difference:** 0.003 (0.4%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (278.05) and measured PF (0.839) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   278.05 |        11.1% | 122,898.75 kVA | 800,853.83 TOTAL-HEAT |
| kW |   234.71 |         9.4% | 103,740.52 kWh | 124,842.13 Load-Heat |
| kVAR |   149.08 |         6.0% | 65,893.91 kVARh | - |
| WASTE |    43.34 |         1.7% | 19,158.23 WASTE | 23,055.16 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 800,853.83
- **Load-Heat (BTU/hr):** 124,842.13
- **Field-Heat (BTU/hr):** 23,055.16
- **Load-Heat (BTU, period total):** 55,180,221.73
- **Field-Heat (BTU, period total):** 10,190,380.52

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 3 |   278.05 |   234.71 |   148.71 |     0.84 |   11.1% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   290.74 |   242.33 |   160.42 |     0.83 |   11.6% |
| 01 |   307.02 |   259.83 |   163.28 |     0.85 |   12.3% |
| 02 |   304.59 |   258.21 |   161.29 |     0.85 |   12.2% |
| 03 |   305.06 |   258.25 |   162.08 |     0.85 |   12.2% |
| 04 |   299.19 |   254.02 |   157.78 |     0.85 |   12.0% |
| 05 |   294.11 |   250.28 |   154.13 |     0.85 |   11.8% |
| 06 |   291.51 |   246.61 |   155.09 |     0.85 |   11.7% |
| 07 |   298.21 |   252.79 |   157.96 |     0.85 |   11.9% |
| 08 |   307.30 |   259.70 |   163.98 |     0.85 |   12.3% |
| 09 |   303.66 |   250.70 |   171.05 |     0.83 |   12.1% |
| 10 |   318.15 |   266.64 |   173.31 |     0.84 |   12.7% |
| 11 |   303.64 |   253.41 |   166.95 |     0.83 |   12.1% |
| 12 |   304.16 |   254.36 |   166.46 |     0.84 |   12.2% |
| 13 |   285.02 |   239.80 |   153.54 |     0.84 |   11.4% |
| 14 |   249.00 |   210.07 |   133.08 |     0.84 |   10.0% |
| 15 |   235.40 |   199.55 |   124.50 |     0.85 |    9.4% |
| 16 |   229.38 |   196.32 |   118.30 |     0.86 |    9.2% |
| 17 |   205.26 |   175.20 |   106.62 |     0.85 |    8.2% |
| 18 |   170.36 |   145.90 |    87.52 |     0.86 |    6.8% |
| 19 |   194.92 |   162.33 |   107.42 |     0.83 |    7.8% |
| 20 |   281.68 |   236.70 |   152.34 |     0.84 |   11.3% |
| 21 |   292.00 |   247.43 |   154.88 |     0.85 |   11.7% |
| 22 |   305.81 |   259.42 |   161.69 |     0.85 |   12.2% |
| 23 |   313.89 |   266.83 |   165.11 |     0.85 |   12.6% |

---

# END OF REPORT

# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 331,315.8 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $64,606.59 (Cost per period)
- **Consumption Total Cost:** $89.57 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** NCDC1 West11c  
**Generated:** 2026-09-14 03:16:47  
**Data Source:** AN55031702-V-1minRES_44640CLP_260801-260831c.csv  

## Time Period

- **Period:** August 01, 2026 thru August 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,277

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

- **Transformer:** NCDC1 West11c
- **Power Factor:** 0.854
- **Total Energy (Actual):** 331,315.83 kWh (per period), 459.34 kW (per hour)
- **Total Waste (Actual):** 56,509.07 kWh (per period), 78.35 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_NCDC1-West11c_AN55031702-1minRES_260801-260831.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_NCDC1-West11c_AN55031702-1minRES_260801-260831.md


## UNITY MANAGEMENT NCDC1 West11c SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 78.35 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 47.80 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **NCDC1 West11c Utility Cost Offset:** $15.28/hour
- **Annual Offset Savings:** $133829/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 174,246 BTU/hr
- **Total Cooling kW No Longer Needed:** 15.55 kW
- **Cooling Energy Cost Avoided:** $3.03/hour
- **Annual Cooling Savings:** $26568/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 93.90 kW
- **CO2e Emissions Avoided:** 307.06 metric tons/year
- **Monthly CO2e Reduction:** 25.59 metric tons/month
- **Hourly CO2e Reduction:** 0.0351 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $11668/year

### Total NCDC1 West11c Unity Savings

- **Per Hour:** $19.64
- **Per Day:** $471.41
- **Per Month:** $14142.39
- **Per Year:** $172066

### NCDC1 West11c Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 339.4 kVAR Max (Avg: 279.5 kVAR/hr ; 201,230 kVAR/mo)
- **Max Harmonic Distortion:** 33.2% Max (range: 3.0% - 33.2%)
- **Max Amperage:** 756A Max (range: 535A - 756A)

---

# NCDC1 West11c DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   278.40 |   268.46 |   288.81 |
| Line to Line Voltage (480v) |   482.21 |   464.98 |   500.23 |
| Current (AMPS) |   643.79 |   534.66 |   755.86 |
| Phase Angle (degrees) |    31.34 |    28.96 |    35.61 |
| Total Harmonic Distortion (PCT) |    16.73 |     3.00 |    33.24 |

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
| THD Phase A (%) | 5.6% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.6% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.6% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 16.7% | Field-level stress indicator |
| Max Phase THD | 5.6% | Highest THD among all three phases |
| Min Phase THD | 5.6% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 542.02 kW
  - **Maximum Load:** 626.93 kVA
  - **Percentage of Capacity (MAX):** 25.1%
- **Average Load:** 537.69 kVA
  - **Percentage of Capacity (Avg):** 21.5%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 537.69 kVA
- **Average Power Factor (PF):** 0.854

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 537.70 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 482.21 V
- Average Current (Iavg_A): 643.79 A
- Average kW (Psum_kW): 459.34 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.02 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.854
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (537.69) and measured PF (0.854) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   537.69 |        21.5% | 387,824.90 kVA | 1,567,340.62 TOTAL-HEAT |
| kW |   459.34 |        18.4% | 331,315.83 kWh | 228,373.58 Load-Heat |
| kVAR |   279.49 |        11.2% | 201,588.62 kVARh | - |
| WASTE |    78.35 |         3.1% | 56,509.07 WASTE | 38,951.29 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,567,340.62
- **Load-Heat (BTU/hr):** 228,373.58
- **Field-Heat (BTU/hr):** 38,951.29
- **Load-Heat (BTU, period total):** 164,722,054.37
- **Field-Heat (BTU, period total):** 28,094,914.60

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 8 |   537.69 |   459.34 |   279.39 |     0.85 |   21.5% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   526.94 |   448.48 |   276.57 |     0.85 |   21.1% |
| 01 |   523.87 |   445.84 |   275.01 |     0.85 |   21.0% |
| 02 |   522.48 |   444.95 |   273.81 |     0.85 |   20.9% |
| 03 |   519.14 |   441.68 |   272.73 |     0.85 |   20.8% |
| 04 |   516.59 |   439.39 |   271.60 |     0.85 |   20.7% |
| 05 |   530.67 |   454.37 |   274.07 |     0.86 |   21.2% |
| 06 |   535.34 |   458.96 |   275.47 |     0.86 |   21.4% |
| 07 |   532.40 |   455.24 |   275.97 |     0.86 |   21.3% |
| 08 |   531.15 |   453.72 |   276.08 |     0.85 |   21.2% |
| 09 |   533.19 |   455.30 |   277.40 |     0.85 |   21.3% |
| 10 |   534.56 |   456.40 |   278.25 |     0.85 |   21.4% |
| 11 |   533.86 |   455.88 |   277.75 |     0.85 |   21.4% |
| 12 |   540.66 |   462.09 |   280.60 |     0.85 |   21.6% |
| 13 |   548.40 |   470.41 |   281.79 |     0.86 |   21.9% |
| 14 |   551.63 |   473.87 |   282.30 |     0.86 |   22.1% |
| 15 |   550.89 |   472.46 |   283.19 |     0.86 |   22.0% |
| 16 |   555.08 |   475.83 |   285.70 |     0.86 |   22.2% |
| 17 |   555.27 |   474.90 |   287.64 |     0.86 |   22.2% |
| 18 |   553.24 |   471.98 |   288.52 |     0.85 |   22.1% |
| 19 |   552.30 |   471.58 |   287.40 |     0.85 |   22.1% |
| 20 |   544.10 |   464.36 |   283.48 |     0.85 |   21.8% |
| 21 |   542.15 |   462.92 |   282.12 |     0.85 |   21.7% |
| 22 |   538.08 |   459.08 |   280.58 |     0.85 |   21.5% |
| 23 |   535.58 |   457.22 |   278.88 |     0.85 |   21.4% |

---

# END OF REPORT

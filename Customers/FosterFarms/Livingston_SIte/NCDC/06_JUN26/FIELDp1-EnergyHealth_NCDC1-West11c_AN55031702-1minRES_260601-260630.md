# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 293,588.7 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $57,249.80 (Cost per period)
- **Consumption Total Cost:** $89.64 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** NCDC1 West11c  
**Generated:** 2026-07-07 01:38:59  
**Data Source:** AN55031702-V-1minRES_43200CLP_260601-260630c.csv  

## Time Period

- **Period:** June 01, 2026 thru June 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 38,318

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

- **Transformer:** NCDC1 West11c
- **Power Factor:** 0.855
- **Total Energy (Actual):** 293,588.70 kWh (per period), 459.71 kW (per hour)
- **Total Waste (Actual):** 49,769.90 kWh (per period), 77.93 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_NCDC1-West11c_AN55031702-1minRES_260601-260630.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_NCDC1-West11c_AN55031702-1minRES_260601-260630.md


## UNITY MANAGEMENT NCDC1 West11c SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 77.93 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **NCDC1 West11c Utility Cost Offset:** $15.20/hour
- **Annual Offset Savings:** $133123/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 284,289 BTU/hr
- **Total Cooling kW No Longer Needed:** 25.03 kW
- **Cooling Energy Cost Avoided:** $4.88/hour
- **Annual Cooling Savings:** $42760/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 102.96 kW
- **CO2e Emissions Avoided:** 336.71 metric tons/year
- **Monthly CO2e Reduction:** 28.06 metric tons/month
- **Hourly CO2e Reduction:** 0.0384 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $12795/year

### Total NCDC1 West11c Unity Savings

- **Per Hour:** $21.54
- **Per Day:** $516.93
- **Per Month:** $15507.80
- **Per Year:** $188678

### NCDC1 West11c Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 335.4 kVAR Max (Avg: 278.8 kVAR/hr ; 200,732 kVAR/mo)
- **Max Harmonic Distortion:** 31.6% Max (range: 3.1% - 31.6%)
- **Max Amperage:** 756A Max (range: 531A - 756A)

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
| Line to Neutral Voltage (277v) |   278.53 |   268.30 |   289.38 |
| Line to Line Voltage (480v) |   482.43 |   464.72 |   501.21 |
| Current (AMPS) |   643.47 |   530.65 |   755.54 |
| Phase Angle (degrees) |    31.25 |    28.96 |    34.71 |
| Total Harmonic Distortion (PCT) |    16.84 |     3.12 |    31.55 |

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
| Unity THD Composite (%) | 16.8% | Field-level stress indicator |
| Max Phase THD | 5.6% | Highest THD among all three phases |
| Min Phase THD | 5.6% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 540.19 kW
  - **Maximum Load:** 623.57 kVA
  - **Percentage of Capacity (MAX):** 24.9%
- **Average Load:** 537.65 kVA
  - **Percentage of Capacity (Avg):** 21.5%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 537.65 kVA
- **Average Power Factor (PF):** 0.855

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 537.68 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 482.43 V
- Average Current (Iavg_A): 643.47 A
- Average kW (Psum_kW): 459.71 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.03 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.855
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (537.65) and measured PF (0.855) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   537.65 |        21.5% | 343,358.60 kVA | 1,568,609.54 TOTAL-HEAT |
| kW |   459.71 |        18.4% | 293,588.70 kWh | 227,370.28 Load-Heat |
| kVAR |   278.79 |        11.2% | 178,047.20 kVARh | - |
| WASTE |    77.93 |         3.1% | 49,769.90 WASTE | 38,544.39 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,568,609.54
- **Load-Heat (BTU/hr):** 227,370.28
- **Field-Heat (BTU/hr):** 38,544.39
- **Load-Heat (BTU, period total):** 145,206,239.61
- **Field-Heat (BTU, period total):** 24,615,729.78

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 6 |   537.65 |   459.71 |   278.72 |     0.86 |   21.5% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   525.38 |   447.99 |   274.42 |     0.85 |   21.0% |
| 01 |   519.20 |   442.34 |   271.82 |     0.85 |   20.8% |
| 02 |   516.45 |   439.64 |   270.94 |     0.85 |   20.7% |
| 03 |   512.97 |   436.37 |   269.62 |     0.85 |   20.5% |
| 04 |   512.80 |   436.31 |   269.39 |     0.85 |   20.5% |
| 05 |   522.22 |   447.23 |   269.56 |     0.86 |   20.9% |
| 06 |   537.55 |   460.18 |   277.78 |     0.86 |   21.5% |
| 07 |   529.98 |   452.52 |   275.81 |     0.85 |   21.2% |
| 08 |   535.98 |   457.17 |   279.69 |     0.85 |   21.4% |
| 09 |   537.04 |   458.36 |   279.77 |     0.85 |   21.5% |
| 10 |   537.87 |   459.49 |   279.51 |     0.85 |   21.5% |
| 11 |   541.51 |   462.87 |   280.98 |     0.85 |   21.7% |
| 12 |   543.20 |   464.87 |   280.94 |     0.86 |   21.7% |
| 13 |   546.75 |   468.26 |   282.19 |     0.86 |   21.9% |
| 14 |   555.67 |   477.21 |   284.60 |     0.86 |   22.2% |
| 15 |   557.37 |   478.53 |   285.69 |     0.86 |   22.3% |
| 16 |   554.45 |   476.01 |   284.22 |     0.86 |   22.2% |
| 17 |   553.27 |   474.55 |   284.38 |     0.86 |   22.1% |
| 18 |   551.20 |   472.04 |   284.51 |     0.86 |   22.0% |
| 19 |   549.07 |   470.32 |   283.25 |     0.86 |   22.0% |
| 20 |   545.33 |   466.71 |   282.00 |     0.86 |   21.8% |
| 21 |   537.27 |   459.70 |   278.04 |     0.86 |   21.5% |
| 22 |   532.32 |   454.42 |   277.19 |     0.85 |   21.3% |
| 23 |   529.56 |   451.91 |   276.02 |     0.85 |   21.2% |

---

# END OF REPORT

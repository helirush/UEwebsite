# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 309,943.5 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $60,438.99 (Cost per period)
- **Consumption Total Cost:** $90.15 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** NCDC1 West11c  
**Generated:** 2026-10-08 00:54:40  
**Data Source:** AN55031702-V-260930.2359c.csv  

## Time Period

- **Period:** September 01, 2026 thru September 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 40,227

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
- **Power Factor:** 0.856
- **Total Energy (Actual):** 309,943.53 kWh (per period), 462.29 kW (per hour)
- **Total Waste (Actual):** 52,136.07 kWh (per period), 77.76 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_NCDC1-West11c_AN55031702-1minRES_260901-260930.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_NCDC1-West11c_AN55031702-1minRES_260901-260930.md


## UNITY MANAGEMENT NCDC1 West11c SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 77.76 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 47.21 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **NCDC1 West11c Utility Cost Offset:** $15.16/hour
- **Annual Offset Savings:** $132834/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 171,982 BTU/hr
- **Total Cooling kW No Longer Needed:** 15.05 kW
- **Cooling Energy Cost Avoided:** $2.93/hour
- **Annual Cooling Savings:** $25706/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 92.81 kW
- **CO2e Emissions Avoided:** 303.51 metric tons/year
- **Monthly CO2e Reduction:** 25.29 metric tons/month
- **Hourly CO2e Reduction:** 0.0346 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $11533/year

### Total NCDC1 West11c Unity Savings

- **Per Hour:** $19.41
- **Per Day:** $465.95
- **Per Month:** $13978.64
- **Per Year:** $170073

### NCDC1 West11c Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 342.4 kVAR Max (Avg: 279.2 kVAR/hr ; 201,014 kVAR/mo)
- **Max Harmonic Distortion:** 31.1% Max (range: 3.0% - 31.1%)
- **Max Amperage:** 754A Max (range: 541A - 754A)

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
| Line to Neutral Voltage (277v) |   278.57 |   269.16 |   289.95 |
| Line to Line Voltage (480v) |   482.51 |   466.20 |   502.22 |
| Current (AMPS) |   646.24 |   540.75 |   753.77 |
| Phase Angle (degrees) |    31.14 |    28.96 |    34.41 |
| Total Harmonic Distortion (PCT) |    16.59 |     3.00 |    31.15 |

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
| Unity THD Composite (%) | 16.6% | Field-level stress indicator |
| Max Phase THD | 5.5% | Highest THD among all three phases |
| Min Phase THD | 5.5% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 541.54 kW
  - **Maximum Load:** 624.22 kVA
  - **Percentage of Capacity (MAX):** 25.0%
- **Average Load:** 540.05 kVA
  - **Percentage of Capacity (Avg):** 21.6%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 540.05 kVA
- **Average Power Factor (PF):** 0.856

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 540.08 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 482.51 V
- Average Current (Iavg_A): 646.24 A
- Average kW (Psum_kW): 462.29 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.02 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.856
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (540.05) and measured PF (0.856) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   540.05 |        21.6% | 362,079.59 kVA | 1,577,405.21 TOTAL-HEAT |
| kW |   462.29 |        18.5% | 309,943.53 kWh | 227,131.56 Load-Heat |
| kVAR |   279.19 |        11.2% | 187,180.77 kVARh | - |
| WASTE |    77.76 |         3.1% | 52,136.07 WASTE | 38,206.14 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,577,405.21
- **Load-Heat (BTU/hr):** 227,131.56
- **Field-Heat (BTU/hr):** 38,206.14
- **Load-Heat (BTU, period total):** 152,280,352.15
- **Field-Heat (BTU, period total):** 25,615,306.43

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 9 |   540.05 |   462.29 |   279.09 |     0.86 |   21.6% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   523.96 |   447.09 |   273.16 |     0.85 |   21.0% |
| 01 |   515.45 |   439.11 |   269.90 |     0.85 |   20.6% |
| 02 |   520.37 |   443.76 |   271.73 |     0.85 |   20.8% |
| 03 |   517.97 |   441.51 |   270.80 |     0.85 |   20.7% |
| 04 |   514.94 |   438.70 |   269.58 |     0.85 |   20.6% |
| 05 |   528.86 |   453.97 |   271.22 |     0.86 |   21.2% |
| 06 |   537.97 |   461.78 |   275.88 |     0.86 |   21.5% |
| 07 |   531.08 |   454.63 |   274.42 |     0.86 |   21.2% |
| 08 |   533.23 |   456.25 |   275.91 |     0.86 |   21.3% |
| 09 |   539.78 |   461.48 |   279.95 |     0.85 |   21.6% |
| 10 |   542.51 |   464.14 |   280.82 |     0.86 |   21.7% |
| 11 |   548.25 |   469.73 |   282.65 |     0.86 |   21.9% |
| 12 |   552.76 |   474.10 |   284.10 |     0.86 |   22.1% |
| 13 |   554.22 |   475.73 |   284.24 |     0.86 |   22.2% |
| 14 |   563.68 |   485.50 |   286.29 |     0.86 |   22.5% |
| 15 |   563.54 |   484.83 |   287.15 |     0.86 |   22.5% |
| 16 |   561.77 |   482.15 |   288.17 |     0.86 |   22.5% |
| 17 |   557.78 |   477.08 |   288.88 |     0.86 |   22.3% |
| 18 |   552.78 |   472.65 |   286.56 |     0.86 |   22.1% |
| 19 |   546.39 |   468.20 |   281.54 |     0.86 |   21.9% |
| 20 |   543.45 |   465.49 |   280.35 |     0.86 |   21.7% |
| 21 |   545.22 |   466.78 |   281.65 |     0.86 |   21.8% |
| 22 |   537.88 |   459.73 |   279.14 |     0.85 |   21.5% |
| 23 |   531.66 |   454.17 |   276.32 |     0.85 |   21.3% |

---

# END OF REPORT

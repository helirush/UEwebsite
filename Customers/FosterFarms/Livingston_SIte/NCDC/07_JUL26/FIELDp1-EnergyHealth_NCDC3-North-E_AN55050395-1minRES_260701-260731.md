# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 352,194.3 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $68,677.89 (Cost per period)
- **Consumption Total Cost:** $92.31 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** NCDC3 North E  
**Generated:** 2026-08-02 22:15:13  
**Data Source:** AN55050395-V-1minRES_44640CLP_260701-260731c.csv  

## Time Period

- **Period:** July 01, 2026 thru July 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,640

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

- **Transformer:** NCDC3 North E
- **Power Factor:** 0.844
- **Total Energy (Actual):** 352,194.30 kWh (per period), 473.38 kW (per hour)
- **Total Waste (Actual):** 64,691.25 kWh (per period), 86.95 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_NCDC3-North-E_AN55050395-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_NCDC3-North-E_AN55050395-1minRES_260701-260731.md


## UNITY MANAGEMENT NCDC3 North E SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 86.95 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 54.09 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **NCDC3 North E Utility Cost Offset:** $16.96/hour
- **Annual Offset Savings:** $148529/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 196,803 BTU/hr
- **Total Cooling kW No Longer Needed:** 17.54 kW
- **Cooling Energy Cost Avoided:** $3.42/hour
- **Annual Cooling Savings:** $29966/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 104.49 kW
- **CO2e Emissions Avoided:** 341.71 metric tons/year
- **Monthly CO2e Reduction:** 28.48 metric tons/month
- **Hourly CO2e Reduction:** 0.0390 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $12985/year

### Total NCDC3 North E Unity Savings

- **Per Hour:** $21.86
- **Per Day:** $524.60
- **Per Month:** $15738.12
- **Per Year:** $191480

### NCDC3 North E Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 445.8 kVAR Max (Avg: 299.8 kVAR/hr ; 215,858 kVAR/mo)
- **Max Harmonic Distortion:** 29.4% Max (range: 3.0% - 29.4%)
- **Max Amperage:** 1,062A Max (range: 0A - 1062A)

---

# NCDC3 North E DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   276.79 |     0.00 |   285.95 |
| Line to Line Voltage (480v) |   479.42 |     0.00 |   495.28 |
| Current (AMPS) |   674.67 |     0.00 |  1061.77 |
| Phase Angle (degrees) |    32.38 |    24.22 |    90.00 |
| Total Harmonic Distortion (PCT) |    15.70 |     3.00 |    29.44 |

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
| Unity THD Composite (%) | 15.7% | Field-level stress indicator |
| Max Phase THD | 5.2% | Highest THD among all three phases |
| Min Phase THD | 5.2% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 769.17 kW
  - **Maximum Load:** 874.05 kVA
  - **Percentage of Capacity (MAX):** 35.0%
- **Average Load:** 560.33 kVA
  - **Percentage of Capacity (Avg):** 22.4%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 560.33 kVA
- **Average Power Factor (PF):** 0.844

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 560.22 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 479.42 V
- Average Current (Iavg_A): 674.67 A
- Average kW (Psum_kW): 473.38 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.11 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.845
- **Power Factor Difference:** 0.001 (0.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (560.33) and measured PF (0.844) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   560.33 |        22.4% | 416,885.54 kVA | 1,615,237.83 TOTAL-HEAT |
| kW |   473.38 |        18.9% | 352,194.30 kWh | 250,648.53 Load-Heat |
| kVAR |   299.80 |        12.0% | 223,053.21 kVARh | - |
| WASTE |    86.95 |         3.5% | 64,691.25 WASTE | 46,039.26 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,615,237.83
- **Load-Heat (BTU/hr):** 250,648.53
- **Field-Heat (BTU/hr):** 46,039.26
- **Load-Heat (BTU, period total):** 186,482,508.47
- **Field-Heat (BTU, period total):** 34,253,212.46

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 |   560.33 |   473.38 |   299.29 |     0.84 |   22.4% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   532.26 |   451.04 |   282.25 |     0.85 |   21.3% |
| 01 |   535.26 |   449.62 |   290.17 |     0.84 |   21.4% |
| 02 |   524.29 |   439.09 |   286.15 |     0.84 |   21.0% |
| 03 |   508.99 |   426.91 |   276.82 |     0.84 |   20.4% |
| 04 |   511.86 |   426.46 |   282.73 |     0.83 |   20.5% |
| 05 |   506.69 |   427.49 |   271.60 |     0.84 |   20.3% |
| 06 |   511.45 |   424.68 |   284.69 |     0.83 |   20.5% |
| 07 |   534.12 |   444.15 |   296.23 |     0.83 |   21.4% |
| 08 |   517.84 |   433.26 |   283.16 |     0.84 |   20.7% |
| 09 |   537.88 |   452.67 |   290.08 |     0.84 |   21.5% |
| 10 |   563.72 |   475.98 |   301.62 |     0.84 |   22.5% |
| 11 |   568.51 |   481.21 |   302.16 |     0.85 |   22.7% |
| 12 |   563.40 |   475.35 |   302.05 |     0.84 |   22.5% |
| 13 |   597.83 |   508.87 |   313.38 |     0.85 |   23.9% |
| 14 |   610.24 |   513.58 |   329.18 |     0.84 |   24.4% |
| 15 |   607.40 |   515.56 |   320.55 |     0.85 |   24.3% |
| 16 |   595.98 |   502.95 |   319.37 |     0.84 |   23.8% |
| 17 |   602.98 |   510.75 |   320.05 |     0.85 |   24.1% |
| 18 |   598.12 |   511.02 |   310.32 |     0.85 |   23.9% |
| 19 |   593.08 |   508.22 |   305.29 |     0.86 |   23.7% |
| 20 |   581.21 |   497.27 |   300.58 |     0.86 |   23.2% |
| 21 |   571.13 |   491.82 |   289.91 |     0.86 |   22.8% |
| 22 |   592.92 |   502.03 |   315.06 |     0.85 |   23.7% |
| 23 |   580.78 |   491.12 |   309.58 |     0.85 |   23.2% |

---

# END OF REPORT

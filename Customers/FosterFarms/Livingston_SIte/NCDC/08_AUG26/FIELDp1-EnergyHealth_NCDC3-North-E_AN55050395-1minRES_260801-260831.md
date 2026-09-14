# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 353,997.3 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $69,029.48 (Cost per period)
- **Consumption Total Cost:** $93.10 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** NCDC3 North E  
**Generated:** 2026-09-14 03:16:36  
**Data Source:** AN55050395-V-1minRES_44640CLP_260801-260831c.csv  

## Time Period

- **Period:** August 01, 2026 thru August 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,486

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
- **Power Factor:** 0.848
- **Total Energy (Actual):** 353,997.31 kWh (per period), 477.45 kW (per hour)
- **Total Waste (Actual):** 63,082.55 kWh (per period), 85.08 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_NCDC3-North-E_AN55050395-1minRES_260801-260831.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_NCDC3-North-E_AN55050395-1minRES_260801-260831.md


## UNITY MANAGEMENT NCDC3 North E SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 85.08 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 52.50 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **NCDC3 North E Utility Cost Offset:** $16.59/hour
- **Annual Offset Savings:** $145337/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 191,190 BTU/hr
- **Total Cooling kW No Longer Needed:** 17.07 kW
- **Cooling Energy Cost Avoided:** $3.33/hour
- **Annual Cooling Savings:** $29162/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 102.15 kW
- **CO2e Emissions Avoided:** 334.06 metric tons/year
- **Monthly CO2e Reduction:** 27.84 metric tons/month
- **Hourly CO2e Reduction:** 0.0381 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $12694/year

### Total NCDC3 North E Unity Savings

- **Per Hour:** $21.37
- **Per Day:** $512.86
- **Per Month:** $15385.78
- **Per Year:** $187194

### NCDC3 North E Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 400.6 kVAR Max (Avg: 297.5 kVAR/hr ; 214,173 kVAR/mo)
- **Max Harmonic Distortion:** 29.7% Max (range: 3.1% - 29.7%)
- **Max Amperage:** 874A Max (range: 481A - 874A)

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
| Line to Neutral Voltage (277v) |   276.90 |   268.72 |   288.66 |
| Line to Line Voltage (480v) |   479.61 |   465.44 |   499.97 |
| Current (AMPS) |   677.14 |   481.25 |   873.94 |
| Phase Angle (degrees) |    31.94 |    23.94 |    38.92 |
| Total Harmonic Distortion (PCT) |    16.09 |     3.09 |    29.67 |

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
| THD Phase A (%) | 5.4% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.4% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.4% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 16.1% | Field-level stress indicator |
| Max Phase THD | 5.4% | Highest THD among all three phases |
| Min Phase THD | 5.4% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 623.96 kW
  - **Maximum Load:** 722.71 kVA
  - **Percentage of Capacity (MAX):** 28.9%
- **Average Load:** 562.53 kVA
  - **Percentage of Capacity (Avg):** 22.5%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 562.53 kVA
- **Average Power Factor (PF):** 0.848

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 562.51 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 479.61 V
- Average Current (Iavg_A): 677.14 A
- Average kW (Psum_kW): 477.45 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.02 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.849
- **Power Factor Difference:** 0.001 (0.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (562.53) and measured PF (0.848) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   562.53 |        22.5% | 417,079.86 kVA | 1,629,127.05 TOTAL-HEAT |
| kW |   477.45 |        19.1% | 353,997.31 kWh | 246,402.42 Load-Heat |
| kVAR |   297.46 |        11.9% | 220,548.21 kVARh | - |
| WASTE |    85.08 |         3.4% | 63,082.55 WASTE | 43,909.07 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,629,127.05
- **Load-Heat (BTU/hr):** 246,402.42
- **Field-Heat (BTU/hr):** 43,909.07
- **Load-Heat (BTU, period total):** 182,690,970.44
- **Field-Heat (BTU, period total):** 32,555,649.36

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 8 |   562.53 |   477.45 |   297.03 |     0.85 |   22.5% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   542.46 |   459.29 |   288.34 |     0.85 |   21.7% |
| 01 |   549.22 |   464.34 |   293.03 |     0.85 |   22.0% |
| 02 |   538.56 |   454.17 |   289.18 |     0.84 |   21.5% |
| 03 |   521.46 |   440.36 |   279.02 |     0.84 |   20.9% |
| 04 |   518.25 |   433.88 |   283.20 |     0.84 |   20.7% |
| 05 |   520.30 |   440.93 |   275.81 |     0.85 |   20.8% |
| 06 |   527.14 |   440.63 |   289.07 |     0.84 |   21.1% |
| 07 |   535.97 |   446.09 |   296.75 |     0.83 |   21.4% |
| 08 |   535.04 |   446.99 |   293.71 |     0.84 |   21.4% |
| 09 |   535.51 |   450.87 |   288.58 |     0.84 |   21.4% |
| 10 |   569.27 |   482.52 |   301.77 |     0.85 |   22.8% |
| 11 |   574.88 |   489.56 |   301.01 |     0.85 |   23.0% |
| 12 |   565.90 |   480.31 |   299.00 |     0.85 |   22.6% |
| 13 |   589.79 |   503.67 |   306.62 |     0.85 |   23.6% |
| 14 |   607.48 |   514.72 |   322.43 |     0.85 |   24.3% |
| 15 |   605.00 |   517.34 |   313.29 |     0.86 |   24.2% |
| 16 |   615.41 |   524.77 |   321.24 |     0.85 |   24.6% |
| 17 |   593.31 |   506.61 |   308.51 |     0.85 |   23.7% |
| 18 |   582.03 |   500.03 |   297.58 |     0.86 |   23.3% |
| 19 |   587.41 |   506.18 |   297.79 |     0.86 |   23.5% |
| 20 |   573.70 |   493.12 |   292.93 |     0.86 |   22.9% |
| 21 |   562.11 |   486.03 |   281.98 |     0.86 |   22.5% |
| 22 |   579.06 |   491.54 |   305.77 |     0.85 |   23.2% |
| 23 |   573.37 |   486.77 |   302.66 |     0.85 |   22.9% |

---

# END OF REPORT

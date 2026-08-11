# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 542,523.7 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $105,792.12 (Cost per period)
- **Consumption Total Cost:** $142.19 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** NCDC2 South D  
**Generated:** 2026-08-02 22:15:04  
**Data Source:** AN55050318-V-1minRES_44640CLP_260701-260731c.csv  

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

- **Transformer:** NCDC2 South D
- **Power Factor:** 0.933
- **Total Energy (Actual):** 542,523.71 kWh (per period), 729.20 kW (per hour)
- **Total Waste (Actual):** 38,860.15 kWh (per period), 52.23 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_NCDC2-South-D_AN55050318-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_NCDC2-South-D_AN55050318-1minRES_260701-260731.md


## UNITY MANAGEMENT NCDC2 South D SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 52.23 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 25.96 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **NCDC2 South D Utility Cost Offset:** $10.19/hour
- **Annual Offset Savings:** $89222/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 94,152 BTU/hr
- **Total Cooling kW No Longer Needed:** 8.39 kW
- **Cooling Energy Cost Avoided:** $1.64/hour
- **Annual Cooling Savings:** $14336/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 60.62 kW
- **CO2e Emissions Avoided:** 198.25 metric tons/year
- **Monthly CO2e Reduction:** 16.52 metric tons/month
- **Hourly CO2e Reduction:** 0.0226 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $7534/year

### Total NCDC2 South D Unity Savings

- **Per Hour:** $12.68
- **Per Day:** $304.36
- **Per Month:** $9130.79
- **Per Year:** $111091

### NCDC2 South D Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 442.9 kVAR Max (Avg: 280.9 kVAR/hr ; 202,245 kVAR/mo)
- **Max Harmonic Distortion:** 29.9% Max (range: 3.0% - 29.9%)
- **Max Amperage:** 1,454A Max (range: 0A - 1454A)

---

# NCDC2 South D DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   277.15 |     0.00 |   286.47 |
| Line to Line Voltage (480v) |   480.04 |     0.00 |   496.18 |
| Current (AMPS) |   939.77 |     0.00 |  1453.72 |
| Phase Angle (degrees) |    21.06 |    15.42 |    90.00 |
| Total Harmonic Distortion (PCT) |    15.82 |     3.00 |    29.90 |

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
| THD Phase A (%) | 5.3% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.3% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.3% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 15.8% | Field-level stress indicator |
| Max Phase THD | 5.3% | Highest THD among all three phases |
| Min Phase THD | 5.3% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,141.42 kW
  - **Maximum Load:** 1,224.35 kVA
  - **Percentage of Capacity (MAX):** 49.0%
- **Average Load:** 781.43 kVA
  - **Percentage of Capacity (Avg):** 31.3%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 781.43 kVA
- **Average Power Factor (PF):** 0.933

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 781.38 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 480.04 V
- Average Current (Iavg_A): 939.77 A
- Average kW (Psum_kW): 729.20 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.05 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.933
- **Power Factor Difference:** 0.001 (0.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (781.43) and measured PF (0.933) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   781.43 |        31.3% | 581,383.86 kVA | 2,488,128.94 TOTAL-HEAT |
| kW |   729.20 |        29.2% | 542,523.71 kWh | 166,308.48 Load-Heat |
| kVAR |   280.90 |        11.2% | 208,986.17 kVARh | - |
| WASTE |    52.23 |         2.1% | 38,860.15 WASTE | 11,912.42 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,488,128.94
- **Load-Heat (BTU/hr):** 166,308.48
- **Field-Heat (BTU/hr):** 11,912.42
- **Load-Heat (BTU, period total):** 123,733,511.25
- **Field-Heat (BTU, period total):** 8,862,844.01

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 |   781.43 |   729.20 |   279.81 |     0.93 |   31.3% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   739.55 |   688.26 |   269.54 |     0.93 |   29.6% |
| 01 |   752.66 |   701.41 |   272.00 |     0.93 |   30.1% |
| 02 |   751.95 |   700.64 |   272.02 |     0.93 |   30.1% |
| 03 |   710.69 |   660.16 |   262.10 |     0.93 |   28.4% |
| 04 |   756.91 |   705.23 |   273.94 |     0.93 |   30.3% |
| 05 |   704.55 |   653.55 |   262.22 |     0.93 |   28.2% |
| 06 |   697.16 |   646.09 |   260.76 |     0.93 |   27.9% |
| 07 |   716.29 |   665.15 |   264.69 |     0.93 |   28.7% |
| 08 |   703.30 |   652.19 |   261.97 |     0.93 |   28.1% |
| 09 |   729.62 |   677.80 |   268.70 |     0.93 |   29.2% |
| 10 |   778.55 |   726.23 |   279.66 |     0.93 |   31.1% |
| 11 |   768.24 |   716.29 |   276.76 |     0.93 |   30.7% |
| 12 |   811.15 |   758.82 |   285.87 |     0.94 |   32.4% |
| 13 |   792.47 |   740.03 |   282.57 |     0.93 |   31.7% |
| 14 |   813.60 |   761.02 |   286.89 |     0.94 |   32.5% |
| 15 |   817.47 |   764.77 |   287.87 |     0.94 |   32.7% |
| 16 |   825.30 |   772.40 |   289.89 |     0.94 |   33.0% |
| 17 |   887.01 |   832.51 |   305.27 |     0.94 |   35.5% |
| 18 |   892.92 |   838.09 |   307.16 |     0.94 |   35.7% |
| 19 |   848.64 |   795.23 |   295.42 |     0.94 |   33.9% |
| 20 |   871.40 |   817.58 |   300.69 |     0.94 |   34.9% |
| 21 |   796.10 |   743.61 |   283.30 |     0.93 |   31.8% |
| 22 |   803.49 |   750.65 |   285.50 |     0.93 |   32.1% |
| 23 |   785.30 |   733.05 |   280.62 |     0.93 |   31.4% |

---

# END OF REPORT

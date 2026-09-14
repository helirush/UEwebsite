# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 549,273.6 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $107,108.36 (Cost per period)
- **Consumption Total Cost:** $144.41 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** NCDC2 South D  
**Generated:** 2026-09-14 03:16:41  
**Data Source:** AN55050318-V-1minRES_44640CLP_260801-260831c.csv  

## Time Period

- **Period:** August 01, 2026 thru August 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,501

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
- **Power Factor:** 0.927
- **Total Energy (Actual):** 549,273.65 kWh (per period), 740.58 kW (per hour)
- **Total Waste (Actual):** 43,219.30 kWh (per period), 58.27 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_NCDC2-South-D_AN55050318-1minRES_260801-260831.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_NCDC2-South-D_AN55050318-1minRES_260801-260831.md


## UNITY MANAGEMENT NCDC2 South D SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 58.27 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 29.45 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **NCDC2 South D Utility Cost Offset:** $11.36/hour
- **Annual Offset Savings:** $99540/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 106,778 BTU/hr
- **Total Cooling kW No Longer Needed:** 9.54 kW
- **Cooling Energy Cost Avoided:** $1.86/hour
- **Annual Cooling Savings:** $16289/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 67.81 kW
- **CO2e Emissions Avoided:** 221.74 metric tons/year
- **Monthly CO2e Reduction:** 18.48 metric tons/month
- **Hourly CO2e Reduction:** 0.0253 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $8426/year

### Total NCDC2 South D Unity Savings

- **Per Hour:** $14.18
- **Per Day:** $340.43
- **Per Month:** $10212.79
- **Per Year:** $124256

### NCDC2 South D Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 421.5 kVAR Max (Avg: 299.5 kVAR/hr ; 215,646 kVAR/mo)
- **Max Harmonic Distortion:** 29.7% Max (range: 3.3% - 29.7%)
- **Max Amperage:** 1,287A Max (range: 634A - 1287A)

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
| Line to Neutral Voltage (277v) |   277.14 |   269.13 |   289.01 |
| Line to Line Voltage (480v) |   480.03 |   466.14 |   500.59 |
| Current (AMPS) |   960.81 |   633.71 |  1287.37 |
| Phase Angle (degrees) |    21.92 |    16.86 |    32.65 |
| Total Harmonic Distortion (PCT) |    15.79 |     3.33 |    29.72 |

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

- **Maximum UtilityDemand:** 981.24 kW
  - **Maximum Load:** 1,066.49 kVA
  - **Percentage of Capacity (MAX):** 42.7%
- **Average Load:** 798.85 kVA
  - **Percentage of Capacity (Avg):** 32.0%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 798.85 kVA
- **Average Power Factor (PF):** 0.927

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 798.85 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 480.03 V
- Average Current (Iavg_A): 960.81 A
- Average kW (Psum_kW): 740.58 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.00 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.927
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (798.85) and measured PF (0.927) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   798.85 |        32.0% | 592,492.94 kVA | 2,526,954.02 TOTAL-HEAT |
| kW |   740.58 |        29.6% | 549,273.65 kWh | 184,328.23 Load-Heat |
| kVAR |   299.51 |        12.0% | 222,140.38 kVARh | - |
| WASTE |    58.27 |         2.3% | 43,219.30 WASTE | 14,503.77 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,526,954.02
- **Load-Heat (BTU/hr):** 184,328.23
- **Field-Heat (BTU/hr):** 14,503.77
- **Load-Heat (BTU, period total):** 136,713,175.72
- **Field-Heat (BTU, period total):** 10,757,201.50

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 8 |   798.85 |   740.58 |   297.06 |     0.93 |   32.0% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   767.46 |   710.52 |   287.79 |     0.93 |   30.7% |
| 01 |   795.89 |   736.42 |   298.99 |     0.93 |   31.8% |
| 02 |   810.69 |   750.45 |   303.68 |     0.93 |   32.4% |
| 03 |   763.07 |   703.26 |   292.55 |     0.92 |   30.5% |
| 04 |   794.42 |   734.77 |   298.91 |     0.92 |   31.8% |
| 05 |   752.74 |   695.46 |   285.15 |     0.92 |   30.1% |
| 06 |   757.36 |   702.49 |   281.13 |     0.93 |   30.3% |
| 07 |   757.78 |   700.40 |   286.68 |     0.92 |   30.3% |
| 08 |   737.38 |   680.41 |   281.80 |     0.92 |   29.5% |
| 09 |   744.01 |   686.24 |   284.49 |     0.92 |   29.8% |
| 10 |   805.20 |   746.78 |   298.85 |     0.93 |   32.2% |
| 11 |   781.53 |   723.36 |   293.67 |     0.93 |   31.3% |
| 12 |   814.56 |   756.97 |   298.50 |     0.93 |   32.6% |
| 13 |   793.66 |   736.15 |   294.43 |     0.93 |   31.7% |
| 14 |   796.74 |   739.70 |   294.13 |     0.93 |   31.9% |
| 15 |   804.71 |   747.44 |   296.15 |     0.93 |   32.2% |
| 16 |   811.89 |   754.30 |   298.27 |     0.93 |   32.5% |
| 17 |   858.13 |   798.58 |   312.04 |     0.93 |   34.3% |
| 18 |   882.75 |   822.91 |   317.51 |     0.93 |   35.3% |
| 19 |   848.49 |   789.46 |   309.09 |     0.93 |   33.9% |
| 20 |   874.14 |   814.53 |   315.14 |     0.93 |   35.0% |
| 21 |   806.60 |   747.49 |   300.56 |     0.93 |   32.3% |
| 22 |   814.09 |   755.18 |   301.87 |     0.93 |   32.6% |
| 23 |   798.75 |   740.31 |   297.91 |     0.93 |   31.9% |

---

# END OF REPORT

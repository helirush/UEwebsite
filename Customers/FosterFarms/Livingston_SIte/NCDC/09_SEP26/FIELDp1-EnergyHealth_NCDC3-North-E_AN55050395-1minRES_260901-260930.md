# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 306,690.3 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $59,804.61 (Cost per period)
- **Consumption Total Cost:** $83.33 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** NCDC3 North E  
**Generated:** 2026-10-08 00:54:49  
**Data Source:** AN55050395-V-260930.2359c.csv  

## Time Period

- **Period:** September 01, 2026 thru September 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,062

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

- **Transformer:** NCDC3 North E
- **Power Factor:** 0.852
- **Total Energy (Actual):** 306,690.30 kWh (per period), 427.32 kW (per hour)
- **Total Waste (Actual):** 52,953.81 kWh (per period), 73.78 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_NCDC3-North-E_AN55050395-1minRES_260901-260930.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_NCDC3-North-E_AN55050395-1minRES_260901-260930.md


## UNITY MANAGEMENT NCDC3 North E SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 73.78 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 44.99 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **NCDC3 North E Utility Cost Offset:** $14.39/hour
- **Annual Offset Savings:** $126036/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 163,230 BTU/hr
- **Total Cooling kW No Longer Needed:** 14.28 kW
- **Cooling Energy Cost Avoided:** $2.79/hour
- **Annual Cooling Savings:** $24398/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 88.07 kW
- **CO2e Emissions Avoided:** 287.99 metric tons/year
- **Monthly CO2e Reduction:** 24.00 metric tons/month
- **Hourly CO2e Reduction:** 0.0329 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $10944/year

### Total NCDC3 North E Unity Savings

- **Per Hour:** $18.42
- **Per Day:** $442.13
- **Per Month:** $13263.84
- **Per Year:** $161377

### NCDC3 North E Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 398.3 kVAR Max (Avg: 261.7 kVAR/hr ; 188,445 kVAR/mo)
- **Max Harmonic Distortion:** 30.1% Max (range: 3.4% - 30.1%)
- **Max Amperage:** 800A Max (range: 417A - 800A)

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
| Line to Neutral Voltage (277v) |   277.50 |   269.12 |   287.74 |
| Line to Line Voltage (480v) |   480.65 |   466.14 |   498.38 |
| Current (AMPS) |   601.92 |   416.94 |   800.39 |
| Phase Angle (degrees) |    31.49 |    25.71 |    39.74 |
| Total Harmonic Distortion (PCT) |    15.90 |     3.43 |    30.14 |

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
| Unity THD Composite (%) | 15.9% | Field-level stress indicator |
| Max Phase THD | 5.3% | Highest THD among all three phases |
| Min Phase THD | 5.3% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 572.94 kW
  - **Maximum Load:** 663.97 kVA
  - **Percentage of Capacity (MAX):** 26.6%
- **Average Load:** 501.11 kVA
  - **Percentage of Capacity (Avg):** 20.0%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 501.11 kVA
- **Average Power Factor (PF):** 0.852

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 501.10 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 480.65 V
- Average Current (Iavg_A): 601.92 A
- Average kW (Psum_kW): 427.32 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.00 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.853
- **Power Factor Difference:** 0.000 (0.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (501.11) and measured PF (0.852) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   501.11 |        20.0% | 359,644.11 kVA | 1,458,089.52 TOTAL-HEAT |
| kW |   427.32 |        17.1% | 306,690.30 kWh | 214,688.35 Load-Heat |
| kVAR |   261.73 |        10.5% | 187,842.88 kVARh | - |
| WASTE |    73.78 |         3.0% | 52,953.81 WASTE | 37,068.56 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,458,089.52
- **Load-Heat (BTU/hr):** 214,688.35
- **Field-Heat (BTU/hr):** 37,068.56
- **Load-Heat (BTU, period total):** 154,081,830.60
- **Field-Heat (BTU, period total):** 26,604,104.30

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 9 |   501.11 |   427.32 |   261.32 |     0.85 |   20.0% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   493.36 |   421.81 |   255.60 |     0.85 |   19.7% |
| 01 |   480.66 |   409.01 |   252.22 |     0.85 |   19.2% |
| 02 |   497.74 |   422.35 |   263.16 |     0.85 |   19.9% |
| 03 |   466.81 |   398.83 |   242.30 |     0.85 |   18.7% |
| 04 |   460.54 |   390.88 |   243.26 |     0.85 |   18.4% |
| 05 |   453.85 |   389.62 |   232.40 |     0.86 |   18.2% |
| 06 |   467.93 |   396.56 |   248.12 |     0.85 |   18.7% |
| 07 |   473.71 |   397.77 |   256.93 |     0.84 |   18.9% |
| 08 |   466.71 |   390.14 |   255.87 |     0.84 |   18.7% |
| 09 |   471.78 |   400.37 |   249.13 |     0.85 |   18.9% |
| 10 |   517.55 |   438.84 |   274.01 |     0.85 |   20.7% |
| 11 |   508.67 |   435.51 |   262.29 |     0.86 |   20.3% |
| 12 |   490.19 |   417.56 |   256.52 |     0.85 |   19.6% |
| 13 |   530.75 |   456.97 |   269.59 |     0.86 |   21.2% |
| 14 |   539.81 |   457.29 |   286.63 |     0.85 |   21.6% |
| 15 |   534.29 |   455.97 |   278.10 |     0.85 |   21.4% |
| 16 |   544.20 |   460.68 |   289.47 |     0.85 |   21.8% |
| 17 |   517.64 |   440.37 |   271.79 |     0.85 |   20.7% |
| 18 |   527.41 |   449.03 |   276.42 |     0.85 |   21.1% |
| 19 |   531.68 |   458.93 |   268.16 |     0.86 |   21.3% |
| 20 |   518.80 |   448.70 |   260.05 |     0.86 |   20.8% |
| 21 |   495.74 |   430.72 |   245.09 |     0.87 |   19.8% |
| 22 |   528.14 |   453.05 |   271.05 |     0.86 |   21.1% |
| 23 |   509.77 |   436.05 |   263.73 |     0.86 |   20.4% |

---

# END OF REPORT

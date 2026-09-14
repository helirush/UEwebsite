# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 281,423.4 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $54,877.56 (Cost per period)
- **Consumption Total Cost:** $85.61 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL1-MShop  
**Generated:** 2026-09-12 13:39:27  
**Data Source:** AN55050287-V-1minRES_44640CLP_260801-260831c.csv  

## Time Period

- **Period:** August 01, 2026 thru August 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 38,463

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

- **Transformer:** PL1-MShop
- **Power Factor:** 0.867
- **Total Energy (Actual):** 281,423.39 kWh (per period), 439.00 kW (per hour)
- **Total Waste (Actual):** 39,502.70 kWh (per period), 61.62 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL1-MShop_AN55050287-1minRES_260801-260831.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL1-MShop_AN55050287-1minRES_260801-260831.md


## UNITY MANAGEMENT PL1-MShop SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 61.62 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 36.03 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL1-MShop Utility Cost Offset:** $12.02/hour
- **Annual Offset Savings:** $105262/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 129,869 BTU/hr
- **Total Cooling kW No Longer Needed:** 11.60 kW
- **Cooling Energy Cost Avoided:** $2.26/hour
- **Annual Cooling Savings:** $19808/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 73.22 kW
- **CO2e Emissions Avoided:** 239.43 metric tons/year
- **Monthly CO2e Reduction:** 19.95 metric tons/month
- **Hourly CO2e Reduction:** 0.0273 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $9098/year

### Total PL1-MShop Unity Savings

- **Per Hour:** $15.32
- **Per Day:** $367.58
- **Per Month:** $11027.55
- **Per Year:** $134168

### PL1-MShop Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,298.2 kVAR Max (Avg: 240.6 kVAR/hr ; 173,252 kVAR/mo)
- **Max Harmonic Distortion:** 29.6% Max (range: 3.2% - 29.6%)
- **Max Amperage:** 1,497A Max (range: 99A - 1497A)

---

# PL1-MShop DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   281.87 |   269.71 |   292.23 |
| Line to Line Voltage (480v) |   488.21 |   467.15 |   506.16 |
| Current (AMPS) |   593.57 |    99.26 |  1497.29 |
| Phase Angle (degrees) |    29.63 |    20.93 |    66.23 |
| Total Harmonic Distortion (PCT) |    14.72 |     3.24 |    29.64 |

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
| Unity THD Composite (%) | 14.7% | Field-level stress indicator |
| Max Phase THD | 4.9% | Highest THD among all three phases |
| Min Phase THD | 4.9% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 971.59 kW
  - **Maximum Load:** 1,418.23 kVA
  - **Percentage of Capacity (MAX):** 56.7%
- **Average Load:** 500.63 kVA
  - **Percentage of Capacity (Avg):** 20.0%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 500.63 kVA
- **Average Power Factor (PF):** 0.867

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 501.92 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 488.21 V
- Average Current (Iavg_A): 593.57 A
- Average kW (Psum_kW): 439.00 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 1.30 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.875
- **Power Factor Difference:** 0.007 (0.8%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (500.63) and measured PF (0.867) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   500.63 |        20.0% | 320,926.10 kVA | 1,497,943.35 TOTAL-HEAT |
| kW |   439.00 |        17.6% | 281,423.39 kWh | 184,381.42 Load-Heat |
| kVAR |   240.63 |         9.6% | 154,254.44 kVARh | - |
| WASTE |    61.62 |         2.5% | 39,502.70 WASTE | 25,881.16 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,497,943.35
- **Load-Heat (BTU/hr):** 184,381.42
- **Field-Heat (BTU/hr):** 25,881.16
- **Load-Heat (BTU, period total):** 118,197,711.37
- **Field-Heat (BTU, period total):** 16,591,119.00

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 8 |   500.63 |   439.00 |   238.88 |     0.88 |   20.0% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   549.46 |   484.00 |   258.32 |     0.88 |   22.0% |
| 01 |   534.16 |   471.97 |   248.66 |     0.88 |   21.4% |
| 02 |   552.79 |   490.87 |   252.72 |     0.89 |   22.1% |
| 03 |   550.68 |   485.86 |   257.82 |     0.88 |   22.0% |
| 04 |   563.94 |   498.24 |   262.81 |     0.88 |   22.6% |
| 05 |   563.81 |   498.27 |   262.51 |     0.88 |   22.6% |
| 06 |   571.28 |   504.34 |   266.95 |     0.88 |   22.9% |
| 07 |   567.37 |   499.23 |   268.25 |     0.88 |   22.7% |
| 08 |   602.84 |   531.14 |   283.83 |     0.88 |   24.1% |
| 09 |   616.53 |   542.42 |   291.81 |     0.88 |   24.7% |
| 10 |   575.59 |   503.48 |   277.24 |     0.87 |   23.0% |
| 11 |   568.73 |   498.93 |   271.07 |     0.88 |   22.7% |
| 12 |   474.47 |   409.92 |   237.09 |     0.86 |   19.0% |
| 13 |   391.77 |   335.77 |   200.02 |     0.86 |   15.7% |
| 14 |   381.80 |   329.59 |   191.23 |     0.86 |   15.3% |
| 15 |   394.43 |   342.86 |   194.08 |     0.87 |   15.8% |
| 16 |   350.91 |   301.57 |   178.50 |     0.86 |   14.0% |
| 17 |   328.37 |   278.76 |   172.52 |     0.85 |   13.1% |
| 18 |   329.84 |   279.81 |   173.65 |     0.85 |   13.2% |
| 19 |   462.72 |   404.26 |   223.62 |     0.87 |   18.5% |
| 20 |   493.93 |   433.45 |   235.19 |     0.88 |   19.8% |
| 21 |   508.51 |   452.40 |   230.10 |     0.89 |   20.3% |
| 22 |   529.83 |   470.58 |   241.35 |     0.89 |   21.2% |
| 23 |   564.04 |   499.43 |   260.26 |     0.89 |   22.6% |

---

# END OF REPORT

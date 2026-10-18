# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 474,271.0 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $92,482.84 (Cost per period)
- **Consumption Total Cost:** $128.51 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** NCDC2 South D  
**Generated:** 2026-10-08 00:54:32  
**Data Source:** AN55050318-V-260930.2359c.csv  

## Time Period

- **Period:** September 01, 2026 thru September 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,178

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

- **Transformer:** NCDC2 South D
- **Power Factor:** 0.929
- **Total Energy (Actual):** 474,270.99 kWh (per period), 659.05 kW (per hour)
- **Total Waste (Actual):** 36,334.08 kWh (per period), 50.49 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_NCDC2-South-D_AN55050318-1minRES_260901-260930.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_NCDC2-South-D_AN55050318-1minRES_260901-260930.md


## UNITY MANAGEMENT NCDC2 South D SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 50.49 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 25.35 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **NCDC2 South D Utility Cost Offset:** $9.85/hour
- **Annual Offset Savings:** $86247/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 91,822 BTU/hr
- **Total Cooling kW No Longer Needed:** 8.03 kW
- **Cooling Energy Cost Avoided:** $1.57/hour
- **Annual Cooling Savings:** $13724/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 58.52 kW
- **CO2e Emissions Avoided:** 191.38 metric tons/year
- **Monthly CO2e Reduction:** 15.95 metric tons/month
- **Hourly CO2e Reduction:** 0.0218 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $7273/year

### Total NCDC2 South D Unity Savings

- **Per Hour:** $12.24
- **Per Day:** $293.82
- **Per Month:** $8814.54
- **Per Year:** $107244

### NCDC2 South D Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 401.1 kVAR Max (Avg: 262.9 kVAR/hr ; 189,264 kVAR/mo)
- **Max Harmonic Distortion:** 31.1% Max (range: 3.0% - 31.1%)
- **Max Amperage:** 1,244A Max (range: 457A - 1244A)

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
| Line to Neutral Voltage (277v) |   277.79 |   269.31 |   289.02 |
| Line to Line Voltage (480v) |   481.15 |   466.46 |   500.60 |
| Current (AMPS) |   851.42 |   456.70 |  1244.36 |
| Phase Angle (degrees) |    21.67 |    12.84 |    35.02 |
| Total Harmonic Distortion (PCT) |    15.61 |     3.05 |    31.14 |

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
| Unity THD Composite (%) | 15.6% | Field-level stress indicator |
| Max Phase THD | 5.2% | Highest THD among all three phases |
| Min Phase THD | 5.2% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 971.75 kW
  - **Maximum Load:** 1,040.88 kVA
  - **Percentage of Capacity (MAX):** 41.6%
- **Average Load:** 709.54 kVA
  - **Percentage of Capacity (Avg):** 28.4%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 709.54 kVA
- **Average Power Factor (PF):** 0.929

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 709.56 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 481.15 V
- Average Current (Iavg_A): 851.42 A
- Average kW (Psum_kW): 659.05 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.03 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.929
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (709.54) and measured PF (0.929) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   709.54 |        28.4% | 510,605.08 kVA | 2,248,756.28 TOTAL-HEAT |
| kW |   659.05 |        26.4% | 474,270.99 kWh | 160,018.97 Load-Heat |
| kVAR |   262.87 |        10.5% | 189,168.10 kVARh | - |
| WASTE |    50.49 |         2.0% | 36,334.08 WASTE | 12,259.12 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,248,756.28
- **Load-Heat (BTU/hr):** 160,018.97
- **Field-Heat (BTU/hr):** 12,259.12
- **Load-Heat (BTU, period total):** 115,154,985.09
- **Field-Heat (BTU, period total):** 8,822,067.80

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 9 |   709.54 |   659.05 |   261.35 |     0.93 |   28.4% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   677.62 |   627.79 |   253.50 |     0.93 |   27.1% |
| 01 |   707.81 |   657.54 |   260.61 |     0.93 |   28.3% |
| 02 |   738.75 |   687.90 |   268.01 |     0.93 |   29.5% |
| 03 |   674.48 |   624.17 |   253.64 |     0.93 |   27.0% |
| 04 |   704.61 |   654.18 |   260.07 |     0.93 |   28.2% |
| 05 |   669.37 |   619.85 |   251.04 |     0.93 |   26.8% |
| 06 |   658.52 |   610.60 |   245.14 |     0.93 |   26.3% |
| 07 |   675.54 |   625.74 |   252.53 |     0.93 |   27.0% |
| 08 |   660.27 |   610.50 |   249.60 |     0.92 |   26.4% |
| 09 |   654.22 |   604.01 |   249.22 |     0.92 |   26.2% |
| 10 |   704.05 |   653.68 |   260.12 |     0.93 |   28.2% |
| 11 |   687.29 |   636.84 |   257.02 |     0.93 |   27.5% |
| 12 |   716.09 |   665.74 |   262.16 |     0.93 |   28.6% |
| 13 |   715.32 |   664.57 |   263.16 |     0.93 |   28.6% |
| 14 |   731.89 |   680.81 |   267.25 |     0.93 |   29.3% |
| 15 |   706.16 |   655.43 |   261.33 |     0.93 |   28.2% |
| 16 |   726.14 |   674.93 |   266.48 |     0.93 |   29.0% |
| 17 |   759.03 |   706.84 |   275.05 |     0.93 |   30.4% |
| 18 |   766.43 |   714.47 |   276.16 |     0.93 |   30.7% |
| 19 |   758.83 |   707.22 |   273.86 |     0.93 |   30.4% |
| 20 |   786.80 |   734.37 |   281.39 |     0.93 |   31.5% |
| 21 |   707.78 |   657.56 |   260.77 |     0.93 |   28.3% |
| 22 |   724.95 |   675.08 |   263.26 |     0.93 |   29.0% |
| 23 |   717.11 |   667.51 |   261.00 |     0.93 |   28.7% |

---

# END OF REPORT

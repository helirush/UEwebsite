# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 536,671.3 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $104,650.91 (Cost per period)
- **Consumption Total Cost:** $145.38 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL2-1South  
**Generated:** 2026-10-08 00:53:57  
**Data Source:** AN55050400-V-260930.2359c.csv  

## Time Period

- **Period:** September 01, 2026 thru September 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,192

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

- **Transformer:** PL2-1South
- **Power Factor:** 0.862
- **Total Energy (Actual):** 536,671.33 kWh (per period), 745.51 kW (per hour)
- **Total Waste (Actual):** 86,083.59 kWh (per period), 119.58 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL2-1South_AN55050400-1minRES_260901-260930.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL2-1South_AN55050400-1minRES_260901-260930.md


## UNITY MANAGEMENT PL2-1South SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 119.58 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 70.98 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL2-1South Utility Cost Offset:** $23.32/hour
- **Annual Offset Savings:** $204271/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 256,382 BTU/hr
- **Total Cooling kW No Longer Needed:** 22.43 kW
- **Cooling Energy Cost Avoided:** $4.37/hour
- **Annual Cooling Savings:** $38321/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 142.02 kW
- **CO2e Emissions Avoided:** 464.42 metric tons/year
- **Monthly CO2e Reduction:** 38.70 metric tons/month
- **Hourly CO2e Reduction:** 0.0530 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $17648/year

### Total PL2-1South Unity Savings

- **Per Hour:** $29.71
- **Per Day:** $712.99
- **Per Month:** $21389.57
- **Per Year:** $260240

### PL2-1South Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,511.4 kVAR Max (Avg: 438.9 kVAR/hr ; 315,982 kVAR/mo)
- **Max Harmonic Distortion:** 27.8% Max (range: 3.0% - 27.8%)
- **Max Amperage:** 2,021A Max (range: 217A - 2021A)

---

# PL2-1South DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   279.99 |   269.12 |   290.80 |
| Line to Line Voltage (480v) |   484.95 |   466.13 |   503.68 |
| Current (AMPS) |  1032.14 |   216.76 |  2021.18 |
| Phase Angle (degrees) |    30.35 |    19.95 |    67.67 |
| Total Harmonic Distortion (PCT) |    15.09 |     3.02 |    27.77 |

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
| THD Phase A (%) | 5.0% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.0% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.0% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 15.1% | Field-level stress indicator |
| Max Phase THD | 5.0% | Highest THD among all three phases |
| Min Phase THD | 5.0% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,433.26 kW
  - **Maximum Load:** 1,664.45 kVA
  - **Percentage of Capacity (MAX):** 66.6%
- **Average Load:** 865.10 kVA
  - **Percentage of Capacity (Avg):** 34.6%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 865.10 kVA
- **Average Power Factor (PF):** 0.862

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 866.96 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 484.95 V
- Average Current (Iavg_A): 1032.14 A
- Average kW (Psum_kW): 745.51 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 1.86 kVA (0.2%)
- **Calculated PF (kW/kVA from averages):** 0.860
- **Power Factor Difference:** 0.002 (0.2%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (865.10) and measured PF (0.862) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   865.10 |        34.6% | 622,754.92 kVA | 2,543,802.74 TOTAL-HEAT |
| kW |   745.51 |        29.8% | 536,671.33 kWh | 351,630.57 Load-Heat |
| kVAR |   438.86 |        17.6% | 315,923.36 kVARh | - |
| WASTE |   119.58 |         4.8% | 86,083.59 WASTE | 56,402.53 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,543,802.74
- **Load-Heat (BTU/hr):** 351,630.57
- **Field-Heat (BTU/hr):** 56,402.53
- **Load-Heat (BTU, period total):** 253,127,123.08
- **Field-Heat (BTU, period total):** 40,602,300.54

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 9 |   865.10 |   745.51 |   437.58 |     0.86 |   34.6% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   952.61 |   821.02 |   482.29 |     0.86 |   38.1% |
| 01 |   929.88 |   799.16 |   474.58 |     0.86 |   37.2% |
| 02 |   938.82 |   810.41 |   473.16 |     0.86 |   37.6% |
| 03 |   921.05 |   793.76 |   466.34 |     0.86 |   36.8% |
| 04 |   916.97 |   790.60 |   463.66 |     0.86 |   36.7% |
| 05 |   911.69 |   787.94 |   457.81 |     0.86 |   36.5% |
| 06 |   898.28 |   774.23 |   454.63 |     0.86 |   35.9% |
| 07 |   895.88 |   773.93 |   450.33 |     0.86 |   35.8% |
| 08 |   903.86 |   784.34 |   448.04 |     0.87 |   36.2% |
| 09 |   917.96 |   794.19 |   459.21 |     0.87 |   36.7% |
| 10 |   899.66 |   779.35 |   448.44 |     0.87 |   36.0% |
| 11 |   904.82 |   788.32 |   442.98 |     0.87 |   36.2% |
| 12 |   884.20 |   766.83 |   438.84 |     0.87 |   35.4% |
| 13 |   837.89 |   725.70 |   417.32 |     0.87 |   33.5% |
| 14 |   763.94 |   659.90 |   383.57 |     0.86 |   30.6% |
| 15 |   729.68 |   628.39 |   369.40 |     0.86 |   29.2% |
| 16 |   704.48 |   603.32 |   361.91 |     0.86 |   28.2% |
| 17 |   684.29 |   579.50 |   362.25 |     0.85 |   27.4% |
| 18 |   655.29 |   551.04 |   353.44 |     0.84 |   26.2% |
| 19 |   768.94 |   649.54 |   409.57 |     0.84 |   30.8% |
| 20 |   906.22 |   779.46 |   460.99 |     0.86 |   36.2% |
| 21 |   934.75 |   807.69 |   469.42 |     0.86 |   37.4% |
| 22 |   940.28 |   810.75 |   475.39 |     0.86 |   37.6% |
| 23 |   960.73 |   832.83 |   478.21 |     0.87 |   38.4% |

---

# END OF REPORT

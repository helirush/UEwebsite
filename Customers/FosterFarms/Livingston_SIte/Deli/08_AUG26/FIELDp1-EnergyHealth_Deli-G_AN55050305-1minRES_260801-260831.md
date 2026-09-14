# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 512,995.5 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $100,034.13 (Cost per period)
- **Consumption Total Cost:** $134.49 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Deli G  
**Generated:** 2026-09-12 13:37:35  
**Data Source:** AN55050305-V-1minRES_44640CLP_260801-260831c.csv  

## Time Period

- **Period:** August 01, 2026 thru August 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,629

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

- **Transformer:** Deli G
- **Power Factor:** 0.864
- **Total Energy (Actual):** 512,995.52 kWh (per period), 689.68 kW (per hour)
- **Total Waste (Actual):** 58,667.16 kWh (per period), 78.87 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Deli-G_AN55050305-1minRES_260801-260831.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Deli-G_AN55050305-1minRES_260801-260831.md


## UNITY MANAGEMENT Deli G SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 78.87 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 46.37 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Deli G Utility Cost Offset:** $15.38/hour
- **Annual Offset Savings:** $134731/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 166,690 BTU/hr
- **Total Cooling kW No Longer Needed:** 14.89 kW
- **Cooling Energy Cost Avoided:** $2.90/hour
- **Annual Cooling Savings:** $25428/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 93.76 kW
- **CO2e Emissions Avoided:** 306.61 metric tons/year
- **Monthly CO2e Reduction:** 25.55 metric tons/month
- **Hourly CO2e Reduction:** 0.0350 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $11651/year

### Total Deli G Unity Savings

- **Per Hour:** $19.61
- **Per Day:** $470.71
- **Per Month:** $14121.42
- **Per Year:** $171811

### Deli G Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,887.4 kVAR Max (Avg: 339.1 kVAR/hr ; 244,180 kVAR/mo)
- **Max Harmonic Distortion:** 30.1% Max (range: 3.0% - 30.1%)
- **Max Amperage:** 2,884A Max (range: 96A - 2884A)

---

# Deli G DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   277.49 |   266.26 |   289.39 |
| Line to Line Voltage (480v) |   480.62 |   461.17 |   501.24 |
| Current (AMPS) |   926.66 |    96.24 |  2884.08 |
| Phase Angle (degrees) |    29.02 |     0.00 |    71.88 |
| Total Harmonic Distortion (PCT) |    14.19 |     3.00 |    30.14 |

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
| THD Phase A (%) | 4.7% | IEEE standard per-phase calculation |
| THD Phase B (%) | 4.7% | IEEE standard per-phase calculation |
| THD Phase C (%) | 4.7% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 14.2% | Field-level stress indicator |
| Max Phase THD | 4.7% | Highest THD among all three phases |
| Min Phase THD | 4.7% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,880.91 kW
  - **Maximum Load:** 2,090.17 kVA
  - **Percentage of Capacity (MAX):** 83.6%
- **Average Load:** 768.55 kVA
  - **Percentage of Capacity (Avg):** 30.7%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 768.55 kVA
- **Average Power Factor (PF):** 0.864

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 771.41 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 480.62 V
- Average Current (Iavg_A): 926.66 A
- Average kW (Psum_kW): 689.68 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 2.85 kVA (0.4%)
- **Calculated PF (kW/kVA from averages):** 0.894
- **Power Factor Difference:** 0.030 (3.5%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (768.55) and measured PF (0.864) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   768.55 |        30.7% | 571,662.68 kVA | 2,353,286.27 TOTAL-HEAT |
| kW |   689.68 |        27.6% | 512,995.52 kWh | 241,507.14 Load-Heat |
| kVAR |   339.14 |        13.6% | 252,257.44 kVARh | - |
| WASTE |    78.87 |         3.2% | 58,667.16 WASTE | 27,619.22 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,353,286.27
- **Load-Heat (BTU/hr):** 241,507.14
- **Field-Heat (BTU/hr):** 27,619.22
- **Load-Heat (BTU, period total):** 179,637,039.23
- **Field-Heat (BTU, period total):** 20,543,639.15

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 8 |   768.55 |   689.68 |   322.83 |     0.90 |   30.7% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   614.41 |   529.39 |   300.03 |     0.86 |   24.6% |
| 01 |   354.66 |   277.23 |   220.29 |     0.78 |   14.2% |
| 02 |   309.77 |   236.48 |   198.95 |     0.76 |   12.4% |
| 03 |   316.08 |   240.58 |   202.69 |     0.76 |   12.6% |
| 04 |   330.58 |   250.51 |   211.71 |     0.76 |   13.2% |
| 05 |   393.50 |   305.71 |   244.56 |     0.78 |   15.7% |
| 06 |   901.22 |   797.50 |   405.13 |     0.88 |   36.0% |
| 07 |   889.59 |   813.33 |   346.89 |     0.91 |   35.6% |
| 08 |   910.13 |   818.69 |   382.84 |     0.90 |   36.4% |
| 09 |   925.16 |   848.23 |   356.30 |     0.92 |   37.0% |
| 10 |   908.38 |   823.49 |   370.40 |     0.91 |   36.3% |
| 11 |   852.38 |   773.56 |   345.25 |     0.91 |   34.1% |
| 12 |   977.92 |   901.58 |   368.84 |     0.92 |   39.1% |
| 13 |   920.00 |   830.87 |   383.75 |     0.90 |   36.8% |
| 14 |   982.66 |   904.06 |   375.70 |     0.92 |   39.3% |
| 15 |   823.74 |   729.77 |   370.32 |     0.89 |   32.9% |
| 16 |   927.83 |   857.15 |   345.07 |     0.92 |   37.1% |
| 17 |   914.60 |   833.89 |   364.17 |     0.91 |   36.6% |
| 18 |   917.88 |   842.60 |   353.20 |     0.92 |   36.7% |
| 19 |   886.73 |   813.99 |   339.70 |     0.92 |   35.5% |
| 20 |   804.16 |   733.77 |   317.33 |     0.91 |   32.2% |
| 21 |   911.40 |   847.95 |   323.63 |     0.93 |   36.5% |
| 22 |   803.21 |   735.30 |   311.21 |     0.92 |   32.1% |
| 23 |   869.33 |   806.70 |   310.02 |     0.93 |   34.8% |

---

# END OF REPORT

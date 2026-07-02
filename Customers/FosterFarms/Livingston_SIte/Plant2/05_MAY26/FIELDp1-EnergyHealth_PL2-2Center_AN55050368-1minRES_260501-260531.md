# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 230,504.4 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $44,948.35 (Cost per period)
- **Consumption Total Cost:** $60.55 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL2-2Center  
**Generated:** 2026-06-18 23:49:19  
**Data Source:** AN55050368-V-1minRES_44640CLP_260501-260531c.csv  

## Time Period

- **Period:** May 01, 2026 thru May 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,542

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

- **Transformer:** PL2-2Center
- **Power Factor:** 0.864
- **Total Energy (Actual):** 230,504.37 kWh (per period), 310.50 kW (per hour)
- **Total Waste (Actual):** 34,223.73 kWh (per period), 46.10 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL2-2Center_AN55050368-1minRES_260501-260531.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL2-2Center_AN55050368-1minRES_260501-260531.md


## UNITY MANAGEMENT PL2-2Center SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 46.10 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL2-2Center Utility Cost Offset:** $8.99/hour
- **Annual Offset Savings:** $78749/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 166,804 BTU/hr
- **Total Cooling kW No Longer Needed:** 14.60 kW
- **Cooling Energy Cost Avoided:** $2.85/hour
- **Annual Cooling Savings:** $24932/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 60.70 kW
- **CO2e Emissions Avoided:** 198.49 metric tons/year
- **Monthly CO2e Reduction:** 16.54 metric tons/month
- **Hourly CO2e Reduction:** 0.0227 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $7642/year

### Total PL2-2Center Unity Savings

- **Per Hour:** $12.71
- **Per Day:** $304.99
- **Per Month:** $9149.83
- **Per Year:** $111323

### PL2-2Center Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 329.5 kVAR Max (Avg: 175.4 kVAR/hr ; 126,265 kVAR/mo)
- **Max Harmonic Distortion:** 32.5% Max (range: 3.0% - 32.5%)
- **Max Amperage:** 779A Max (range: 79A - 779A)

---

# PL2-2Center DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   279.33 |   267.95 |   291.74 |
| Line to Line Voltage (480v) |   483.82 |   464.10 |   505.30 |
| Current (AMPS) |   427.40 |    78.67 |   778.69 |
| Phase Angle (degrees) |    30.16 |    23.36 |    41.32 |
| Total Harmonic Distortion (PCT) |    15.39 |     3.00 |    32.53 |

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
| THD Phase A (%) | 5.1% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.1% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.1% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 15.4% | Field-level stress indicator |
| Max Phase THD | 5.1% | Highest THD among all three phases |
| Min Phase THD | 5.1% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 554.10 kW
  - **Maximum Load:** 638.89 kVA
  - **Percentage of Capacity (MAX):** 25.6%
- **Average Load:** 356.60 kVA
  - **Percentage of Capacity (Avg):** 14.3%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 356.60 kVA
- **Average Power Factor (PF):** 0.864

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 358.16 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 483.82 V
- Average Current (Iavg_A): 427.40 A
- Average kW (Psum_kW): 310.50 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 1.56 kVA (0.4%)
- **Calculated PF (kW/kVA from averages):** 0.867
- **Power Factor Difference:** 0.003 (0.4%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (356.60) and measured PF (0.864) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   356.60 |        14.3% | 264,728.10 kVA | 1,059,467.89 TOTAL-HEAT |
| kW |   310.50 |        12.4% | 230,504.37 kWh | 136,966.72 Load-Heat |
| kVAR |   175.37 |         7.0% | 130,187.18 kVARh | - |
| WASTE |    46.10 |         1.8% | 34,223.73 WASTE | 20,335.89 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,059,467.89
- **Load-Heat (BTU/hr):** 136,966.72
- **Field-Heat (BTU/hr):** 20,335.89
- **Load-Heat (BTU, period total):** 101,679,530.19
- **Field-Heat (BTU, period total):** 15,096,687.83

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 5 |   356.60 |   310.50 |   174.84 |     0.87 |   14.3% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   372.18 |   323.86 |   183.03 |     0.87 |   14.9% |
| 01 |   389.76 |   340.04 |   190.23 |     0.87 |   15.6% |
| 02 |   386.08 |   337.59 |   187.05 |     0.87 |   15.4% |
| 03 |   381.70 |   333.78 |   184.82 |     0.87 |   15.3% |
| 04 |   377.60 |   331.02 |   181.30 |     0.88 |   15.1% |
| 05 |   372.00 |   326.40 |   178.05 |     0.88 |   14.9% |
| 06 |   363.44 |   317.94 |   175.69 |     0.87 |   14.5% |
| 07 |   366.19 |   320.68 |   176.30 |     0.88 |   14.6% |
| 08 |   372.58 |   324.10 |   183.23 |     0.87 |   14.9% |
| 09 |   376.00 |   322.63 |   192.63 |     0.86 |   15.0% |
| 10 |   383.50 |   330.39 |   194.30 |     0.86 |   15.3% |
| 11 |   375.40 |   323.51 |   190.02 |     0.86 |   15.0% |
| 12 |   376.16 |   324.70 |   189.42 |     0.86 |   15.0% |
| 13 |   356.20 |   308.45 |   177.62 |     0.87 |   14.2% |
| 14 |   324.67 |   282.65 |   159.09 |     0.87 |   13.0% |
| 15 |   314.08 |   273.76 |   153.35 |     0.87 |   12.6% |
| 16 |   314.53 |   275.65 |   150.99 |     0.88 |   12.6% |
| 17 |   298.84 |   262.41 |   142.40 |     0.88 |   12.0% |
| 18 |   265.40 |   231.93 |   128.32 |     0.87 |   10.6% |
| 19 |   291.11 |   250.38 |   147.55 |     0.86 |   11.6% |
| 20 |   365.54 |   317.67 |   180.13 |     0.87 |   14.6% |
| 21 |   373.64 |   327.03 |   180.39 |     0.88 |   14.9% |
| 22 |   377.39 |   329.50 |   183.65 |     0.87 |   15.1% |
| 23 |   383.89 |   335.43 |   186.41 |     0.87 |   15.4% |

---

# END OF REPORT

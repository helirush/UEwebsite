# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 417,606.3 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $81,433.23 (Cost per period)
- **Consumption Total Cost:** $115.88 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Rendering-3  
**Generated:** 2026-06-18 16:10:33  
**Data Source:** AN55050429-V-1minRES_44640CLP_260501-260531c.csv  

## Time Period

- **Period:** May 01, 2026 thru May 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 42,163

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

- **Transformer:** Rendering-3
- **Power Factor:** 0.771
- **Total Energy (Actual):** 417,606.29 kWh (per period), 594.27 kW (per hour)
- **Total Waste (Actual):** 123,310.85 kWh (per period), 175.48 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Rendering-3_AN55050429-1minRES_260501-260531.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Rendering-3_AN55050429-1minRES_260501-260531.md


## UNITY MANAGEMENT Rendering-3 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 175.48 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Rendering-3 Utility Cost Offset:** $34.22/hour
- **Annual Offset Savings:** $299750/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 650,558 BTU/hr
- **Total Cooling kW No Longer Needed:** 56.92 kW
- **Cooling Energy Cost Avoided:** $11.10/hour
- **Annual Cooling Savings:** $97237/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 232.40 kW
- **CO2e Emissions Avoided:** 759.99 metric tons/year
- **Monthly CO2e Reduction:** 63.33 metric tons/month
- **Hourly CO2e Reduction:** 0.0868 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $29260/year

### Total Rendering-3 Unity Savings

- **Per Hour:** $48.66
- **Per Day:** $1167.80
- **Per Month:** $35034.03
- **Per Year:** $426247

### Rendering-3 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 677.9 kVAR Max (Avg: 489.2 kVAR/hr ; 352,253 kVAR/mo)
- **Max Harmonic Distortion:** 30.7% Max (range: 3.5% - 30.7%)
- **Max Amperage:** 1,190A Max (range: 686A - 1190A)

---

# Rendering-3 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   275.37 |   266.04 |   284.75 |
| Line to Line Voltage (480v) |   476.96 |   460.79 |   493.21 |
| Current (AMPS) |   931.83 |   685.89 |  1189.81 |
| Phase Angle (degrees) |    39.52 |    32.86 |    54.83 |
| Total Harmonic Distortion (PCT) |    16.15 |     3.48 |    30.68 |

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
| Unity THD Composite (%) | 16.2% | Field-level stress indicator |
| Max Phase THD | 5.4% | Highest THD among all three phases |
| Min Phase THD | 5.4% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 760.96 kW
  - **Maximum Load:** 964.38 kVA
  - **Percentage of Capacity (MAX):** 38.6%
- **Average Load:** 769.75 kVA
  - **Percentage of Capacity (Avg):** 30.8%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 769.75 kVA
- **Average Power Factor (PF):** 0.771

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 769.79 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 476.96 V
- Average Current (Iavg_A): 931.83 A
- Average kW (Psum_kW): 594.27 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.04 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.772
- **Power Factor Difference:** 0.001 (0.2%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (769.75) and measured PF (0.771) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   769.75 |        30.8% | 540,917.14 kVA | 2,027,747.50 TOTAL-HEAT |
| kW |   594.27 |        23.8% | 417,606.29 kWh | 462,257.98 Load-Heat |
| kVAR |   489.24 |        19.6% | 343,796.94 kVARh | - |
| WASTE |   175.48 |         7.0% | 123,310.85 WASTE | 136,495.61 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,027,747.50
- **Load-Heat (BTU/hr):** 462,257.98
- **Field-Heat (BTU/hr):** 136,495.61
- **Load-Heat (BTU, period total):** 324,836,388.68
- **Field-Heat (BTU, period total):** 95,917,738.13

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 5 |   769.75 |   594.27 |   488.25 |     0.77 |   30.8% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   772.33 |   600.99 |   484.23 |     0.78 |   30.9% |
| 01 |   775.79 |   605.50 |   484.04 |     0.78 |   31.0% |
| 02 |   776.74 |   606.94 |   483.78 |     0.78 |   31.1% |
| 03 |   771.09 |   605.81 |   476.26 |     0.79 |   30.8% |
| 04 |   777.69 |   608.35 |   483.80 |     0.78 |   31.1% |
| 05 |   772.49 |   601.28 |   483.99 |     0.78 |   30.9% |
| 06 |   778.42 |   599.71 |   495.38 |     0.77 |   31.1% |
| 07 |   761.49 |   587.62 |   483.22 |     0.77 |   30.5% |
| 08 |   772.94 |   592.73 |   494.86 |     0.77 |   30.9% |
| 09 |   759.37 |   583.97 |   484.50 |     0.77 |   30.4% |
| 10 |   769.30 |   590.68 |   491.71 |     0.77 |   30.8% |
| 11 |   762.59 |   582.76 |   490.61 |     0.76 |   30.5% |
| 12 |   758.79 |   580.19 |   487.60 |     0.76 |   30.4% |
| 13 |   760.67 |   579.18 |   491.75 |     0.76 |   30.4% |
| 14 |   776.15 |   584.10 |   509.97 |     0.75 |   31.0% |
| 15 |   766.38 |   583.10 |   496.48 |     0.76 |   30.7% |
| 16 |   762.21 |   586.33 |   486.22 |     0.77 |   30.5% |
| 17 |   761.13 |   585.80 |   485.13 |     0.77 |   30.4% |
| 18 |   763.44 |   589.26 |   484.89 |     0.77 |   30.5% |
| 19 |   766.55 |   591.09 |   487.62 |     0.77 |   30.7% |
| 20 |   782.99 |   604.16 |   497.42 |     0.77 |   31.3% |
| 21 |   782.17 |   607.79 |   491.65 |     0.78 |   31.3% |
| 22 |   780.28 |   605.75 |   491.19 |     0.78 |   31.2% |
| 23 |   760.89 |   594.49 |   474.15 |     0.78 |   30.4% |

---

# END OF REPORT

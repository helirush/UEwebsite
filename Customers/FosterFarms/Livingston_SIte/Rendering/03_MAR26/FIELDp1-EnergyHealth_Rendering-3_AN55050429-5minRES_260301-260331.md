# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 1,961,260.6 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $382,445.82 (Cost per period)
- **Consumption Total Cost:** $115.50 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Rendering-3  
**Generated:** 2026-09-10 22:49:37  
**Data Source:** AN55050429-V-1minRES_44550CLP_260301-260331c.csv  

## Time Period

- **Period:** March 01, 2026 thru March 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 5-minute
- **Total Data Points:** 39,735

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
- **Power Factor:** 0.775
- **Total Energy (Actual):** 1,961,260.62 kWh (per period), 592.30 kW (per hour)
- **Total Waste (Actual):** 568,904.77 kWh (per period), 171.81 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Rendering-3_AN55050429-5minRES_260301-260331.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Rendering-3_AN55050429-5minRES_260301-260331.md


## UNITY MANAGEMENT Rendering-3 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 171.81 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 125.01 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Rendering-3 Utility Cost Offset:** $33.50/hour
- **Annual Offset Savings:** $293485/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 463,908 BTU/hr
- **Total Cooling kW No Longer Needed:** 40.64 kW
- **Cooling Energy Cost Avoided:** $7.93/hour
- **Annual Cooling Savings:** $69428/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 212.45 kW
- **CO2e Emissions Avoided:** 694.76 metric tons/year
- **Monthly CO2e Reduction:** 57.90 metric tons/month
- **Hourly CO2e Reduction:** 0.0793 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $26401/year

### Total Rendering-3 Unity Savings

- **Per Hour:** $44.44
- **Per Day:** $1066.62
- **Per Month:** $31998.45
- **Per Year:** $389315

### Rendering-3 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 613.3 kVAR Max (Avg: 482.7 kVAR/hr ; 347,578 kVAR/mo)
- **Max Harmonic Distortion:** 29.9% Max (range: 3.5% - 29.9%)
- **Max Amperage:** 1,114A Max (range: 735A - 1114A)

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
| Line to Neutral Voltage (277v) |   275.44 |   266.65 |   285.40 |
| Line to Line Voltage (480v) |   477.07 |   461.85 |   494.33 |
| Current (AMPS) |   924.79 |   734.87 |  1114.35 |
| Phase Angle (degrees) |    39.18 |    32.11 |    47.93 |
| Total Harmonic Distortion (PCT) |    16.46 |     3.50 |    29.92 |

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
| THD Phase A (%) | 5.5% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.5% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.5% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 16.5% | Field-level stress indicator |
| Max Phase THD | 5.5% | Highest THD among all three phases |
| Min Phase THD | 5.5% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 726.25 kW
  - **Maximum Load:** 904.22 kVA
  - **Percentage of Capacity (MAX):** 36.2%
- **Average Load:** 764.11 kVA
  - **Percentage of Capacity (Avg):** 30.6%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 764.11 kVA
- **Average Power Factor (PF):** 0.775

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 764.17 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 477.07 V
- Average Current (Iavg_A): 924.79 A
- Average kW (Psum_kW): 592.30 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.06 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.775
- **Power Factor Difference:** 0.000 (0.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (764.11) and measured PF (0.775) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   764.11 |        30.6% | 2,530,165.38 kVA | 2,021,019.17 TOTAL-HEAT |
| kW |   592.30 |        23.7% | 1,961,260.62 kWh | 454,423.83 Load-Heat |
| kVAR |   482.75 |        19.3% | 1,598,497.31 kVARh | - |
| WASTE |   171.81 |         6.9% | 568,904.77 WASTE | 131,815.16 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,021,019.17
- **Load-Heat (BTU/hr):** 454,423.83
- **Field-Heat (BTU/hr):** 131,815.16
- **Load-Heat (BTU, period total):** 1,504,710,900.38
- **Field-Heat (BTU, period total):** 436,472,948.53

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 3 |   764.11 |   592.30 |   482.02 |     0.78 |   30.6% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   756.91 |   589.83 |   473.66 |     0.78 |   30.3% |
| 01 |   763.79 |   596.34 |   476.42 |     0.78 |   30.6% |
| 02 |   775.08 |   605.23 |   483.36 |     0.78 |   31.0% |
| 03 |   774.77 |   603.83 |   484.61 |     0.78 |   31.0% |
| 04 |   790.73 |   613.67 |   497.70 |     0.78 |   31.6% |
| 05 |   782.16 |   609.08 |   489.60 |     0.78 |   31.3% |
| 06 |   779.47 |   608.01 |   487.18 |     0.78 |   31.2% |
| 07 |   770.84 |   601.77 |   480.83 |     0.78 |   30.8% |
| 08 |   773.47 |   601.31 |   485.58 |     0.78 |   30.9% |
| 09 |   751.37 |   586.16 |   469.69 |     0.78 |   30.1% |
| 10 |   765.71 |   594.26 |   482.31 |     0.78 |   30.6% |
| 11 |   757.59 |   586.77 |   478.57 |     0.77 |   30.3% |
| 12 |   745.04 |   581.53 |   465.29 |     0.78 |   29.8% |
| 13 |   743.90 |   575.01 |   471.26 |     0.77 |   29.8% |
| 14 |   749.39 |   575.31 |   479.64 |     0.77 |   30.0% |
| 15 |   764.10 |   583.84 |   492.21 |     0.76 |   30.6% |
| 16 |   754.71 |   583.31 |   478.30 |     0.77 |   30.2% |
| 17 |   749.35 |   581.54 |   472.14 |     0.78 |   30.0% |
| 18 |   740.90 |   573.08 |   469.21 |     0.77 |   29.6% |
| 19 |   748.31 |   576.43 |   476.61 |     0.77 |   29.9% |
| 20 |   770.95 |   594.90 |   489.85 |     0.77 |   30.8% |
| 21 |   768.42 |   593.27 |   487.65 |     0.77 |   30.7% |
| 22 |   786.25 |   601.10 |   506.05 |     0.76 |   31.4% |
| 23 |   771.44 |   596.46 |   488.25 |     0.77 |   30.9% |

---

# END OF REPORT

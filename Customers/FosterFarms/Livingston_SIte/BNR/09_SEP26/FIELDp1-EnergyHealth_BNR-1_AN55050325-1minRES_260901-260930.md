# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 968,597.3 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $188,876.47 (Cost per period)
- **Consumption Total Cost:** $274.25 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** BNR-1  
**Generated:** 2026-10-08 00:55:35  
**Data Source:** AN55050325-V-260930.2359c.csv  

## Time Period

- **Period:** September 01, 2026 thru September 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 41,322

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

- **Transformer:** BNR-1
- **Power Factor:** 0.889
- **Total Energy (Actual):** 968,597.27 kWh (per period), 1406.41 kW (per hour)
- **Total Waste (Actual):** 121,518.93 kWh (per period), 176.45 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_BNR-1_AN55050325-1minRES_260901-260930.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_BNR-1_AN55050325-1minRES_260901-260930.md


## UNITY MANAGEMENT BNR-1 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 176.45 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 102.62 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **BNR-1 Utility Cost Offset:** $34.41/hour
- **Annual Offset Savings:** $301406/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 392,955 BTU/hr
- **Total Cooling kW No Longer Needed:** 34.38 kW
- **Cooling Energy Cost Avoided:** $6.70/hour
- **Annual Cooling Savings:** $58734/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 210.83 kW
- **CO2e Emissions Avoided:** 689.45 metric tons/year
- **Monthly CO2e Reduction:** 57.45 metric tons/month
- **Hourly CO2e Reduction:** 0.0787 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $26199/year

### Total BNR-1 Unity Savings

- **Per Hour:** $44.10
- **Per Day:** $1058.46
- **Per Month:** $31753.94
- **Per Year:** $386340

### BNR-1 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 772.6 kVAR Max (Avg: 726.3 kVAR/hr ; 522,904 kVAR/mo)
- **Max Harmonic Distortion:** 33.0% Max (range: 3.7% - 33.0%)
- **Max Amperage:** 2,048A Max (range: 1810A - 2048A)

---

# BNR-1 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   273.22 |   264.70 |   283.39 |
| Line to Line Voltage (480v) |   473.22 |   458.47 |   490.85 |
| Current (AMPS) |  1931.19 |  1810.04 |  2047.58 |
| Phase Angle (degrees) |    27.31 |    25.71 |    28.72 |
| Total Harmonic Distortion (PCT) |    17.58 |     3.72 |    32.98 |

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
| THD Phase A (%) | 5.9% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.9% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.9% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 17.6% | Field-level stress indicator |
| Max Phase THD | 5.9% | Highest THD among all three phases |
| Min Phase THD | 5.9% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,481.99 kW
  - **Maximum Load:** 1,666.61 kVA
  - **Percentage of Capacity (MAX):** 66.7%
- **Average Load:** 1,582.86 kVA
  - **Percentage of Capacity (Avg):** 63.3%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,582.86 kVA
- **Average Power Factor (PF):** 0.889

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,582.89 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 473.22 V
- Average Current (Iavg_A): 1931.19 A
- Average kW (Psum_kW): 1406.41 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.03 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.889
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1582.86) and measured PF (0.889) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,582.86 |        63.3% | 1,090,116.21 kVA | 4,798,884.05 TOTAL-HEAT |
| kW | 1,406.41 |        56.3% | 968,597.27 kWh | 534,947.81 Load-Heat |
| kVAR |   726.26 |        29.1% | 500,172.64 kVARh | - |
| WASTE |   176.45 |         7.1% | 121,518.93 WASTE | 67,113.85 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 4,798,884.05
- **Load-Heat (BTU/hr):** 534,947.81
- **Field-Heat (BTU/hr):** 67,113.85
- **Load-Heat (BTU, period total):** 368,418,556.03
- **Field-Heat (BTU, period total):** 46,221,305.48

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 9 | 1,582.86 | 1,406.41 |   726.19 |     0.89 |   63.3% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,584.60 | 1,408.52 |   725.90 |     0.89 |   63.4% |
| 01 | 1,582.64 | 1,406.41 |   725.71 |     0.89 |   63.3% |
| 02 | 1,580.02 | 1,403.55 |   725.54 |     0.89 |   63.2% |
| 03 | 1,579.64 | 1,403.42 |   724.96 |     0.89 |   63.2% |
| 04 | 1,580.81 | 1,404.70 |   725.02 |     0.89 |   63.2% |
| 05 | 1,582.78 | 1,407.61 |   723.68 |     0.89 |   63.3% |
| 06 | 1,581.94 | 1,406.90 |   723.22 |     0.89 |   63.3% |
| 07 | 1,580.46 | 1,404.57 |   724.51 |     0.89 |   63.2% |
| 08 | 1,581.50 | 1,404.97 |   726.00 |     0.89 |   63.3% |
| 09 | 1,583.75 | 1,406.22 |   728.49 |     0.89 |   63.3% |
| 10 | 1,585.82 | 1,408.05 |   729.45 |     0.89 |   63.4% |
| 11 | 1,585.43 | 1,407.69 |   729.29 |     0.89 |   63.4% |
| 12 | 1,584.30 | 1,407.11 |   727.96 |     0.89 |   63.4% |
| 13 | 1,583.52 | 1,406.58 |   727.31 |     0.89 |   63.3% |
| 14 | 1,586.06 | 1,408.93 |   728.31 |     0.89 |   63.4% |
| 15 | 1,582.11 | 1,405.22 |   726.88 |     0.89 |   63.3% |
| 16 | 1,584.40 | 1,407.66 |   727.15 |     0.89 |   63.4% |
| 17 | 1,585.17 | 1,408.20 |   727.78 |     0.89 |   63.4% |
| 18 | 1,586.32 | 1,409.19 |   728.37 |     0.89 |   63.5% |
| 19 | 1,582.62 | 1,406.97 |   724.59 |     0.89 |   63.3% |
| 20 | 1,582.28 | 1,406.58 |   724.61 |     0.89 |   63.3% |
| 21 | 1,581.18 | 1,405.29 |   724.71 |     0.89 |   63.2% |
| 22 | 1,580.14 | 1,404.07 |   724.81 |     0.89 |   63.2% |
| 23 | 1,581.49 | 1,405.51 |   724.97 |     0.89 |   63.3% |

---

# END OF REPORT

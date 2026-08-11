# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 793,133.9 kWh (Usage per period)
- **Consumption Cost per unit:** $0.350/kWh (Cost per kWh)
- **Consumption Total Cost:** $277,596.85 (Cost per period)
- **Consumption Total Cost:** $373.11 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T12 Main  
**Generated:** 2026-08-04 12:54:50  
**Data Source:** AN54021613-V-1minRES_44640CLP_260701-260731c.csv  

## Time Period

- **Period:** July 01, 2026 thru July 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,640

- **Dataset Coverage:** Complete month (100.0% of 31-day month)
- **Billing Scale Factor:** 1.000x (no normalization needed)

## Facility Information

- **Facility:** Foster Farms
- **Location:** Cherry Ave Facility
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** T12 Main
- **Power Factor:** 0.832
- **Total Energy (Actual):** 793,133.87 kWh (per period), 1066.04 kW (per hour)
- **Total Waste (Actual):** 150,440.03 kWh (per period), 202.20 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T12-Main_AN54021613-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T12-Main_AN54021613-1minRES_260701-260731.md


## UNITY MANAGEMENT T12 Main SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 202.20 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 135.75 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.3500/kWh (all-inclusive)
- **T12 Main Utility Cost Offset:** $70.77/hour
- **Annual Offset Savings:** $619959/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 536,492 BTU/hr
- **Total Cooling kW No Longer Needed:** 48.31 kW
- **Cooling Energy Cost Avoided:** $16.91/hour
- **Annual Cooling Savings:** $148127/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 250.52 kW
- **CO2e Emissions Avoided:** 819.23 metric tons/year
- **Monthly CO2e Reduction:** 68.27 metric tons/month
- **Hourly CO2e Reduction:** 0.0935 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $31540/year

### Total T12 Main Unity Savings

- **Per Hour:** $91.28
- **Per Day:** $2190.76
- **Per Month:** $65722.69
- **Per Year:** $799626

### T12 Main Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,116.3 kVAR Max (Avg: 687.0 kVAR/hr ; 494,658 kVAR/mo)
- **Max Harmonic Distortion:** 32.7% Max (range: 3.0% - 32.7%)
- **Max Amperage:** 2,699A Max (range: 511A - 2699A)

---

# T12 Main DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   269.45 |   248.42 |   286.29 |
| Line to Line Voltage (480v) |   466.70 |   430.27 |   495.87 |
| Current (AMPS) |  1583.01 |   511.24 |  2699.45 |
| Phase Angle (degrees) |    33.53 |    25.44 |    45.33 |
| Total Harmonic Distortion (PCT) |    15.99 |     3.00 |    32.67 |

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
| Unity THD Composite (%) | 16.0% | Field-level stress indicator |
| Max Phase THD | 5.3% | Highest THD among all three phases |
| Min Phase THD | 5.3% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,590.31 kW
  - **Maximum Load:** 1,873.70 kVA
  - **Percentage of Capacity (MAX):** 74.9%
- **Average Load:** 1,268.24 kVA
  - **Percentage of Capacity (Avg):** 50.7%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,268.24 kVA
- **Average Power Factor (PF):** 0.832

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,279.63 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 466.70 V
- Average Current (Iavg_A): 1583.01 A
- Average kW (Psum_kW): 1066.04 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 11.39 kVA (0.9%)
- **Calculated PF (kW/kVA from averages):** 0.833
- **Power Factor Difference:** 0.001 (0.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1268.24) and measured PF (0.832) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,268.24 |        50.7% | 943,573.90 kVA | 3,637,480.35 TOTAL-HEAT |
| kW | 1,066.04 |        42.6% | 793,133.87 kWh | 579,946.80 Load-Heat |
| kVAR |   687.02 |        27.5% | 511,146.14 kVARh | - |
| WASTE |   202.20 |         8.1% | 150,440.03 WASTE | 110,003.14 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,637,480.35
- **Load-Heat (BTU/hr):** 579,946.80
- **Field-Heat (BTU/hr):** 110,003.14
- **Load-Heat (BTU, period total):** 431,480,417.23
- **Field-Heat (BTU, period total):** 81,842,335.30

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 | 1,268.24 | 1,066.04 |   684.62 |     0.84 |   50.7% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,353.29 | 1,129.21 |   744.22 |     0.83 |   54.1% |
| 01 | 1,376.43 | 1,151.13 |   752.74 |     0.84 |   55.1% |
| 02 | 1,398.40 | 1,173.51 |   758.84 |     0.84 |   55.9% |
| 03 | 1,368.22 | 1,147.08 |   743.93 |     0.84 |   54.7% |
| 04 | 1,377.97 | 1,157.66 |   745.66 |     0.84 |   55.1% |
| 05 | 1,341.31 | 1,129.90 |   721.08 |     0.84 |   53.7% |
| 06 | 1,351.04 | 1,136.67 |   728.42 |     0.84 |   54.0% |
| 07 | 1,331.35 | 1,120.39 |   717.45 |     0.84 |   53.3% |
| 08 | 1,351.00 | 1,139.11 |   724.75 |     0.84 |   54.0% |
| 09 | 1,300.22 | 1,102.45 |   687.47 |     0.85 |   52.0% |
| 10 | 1,375.90 | 1,165.13 |   730.59 |     0.85 |   55.0% |
| 11 | 1,377.20 | 1,164.31 |   734.35 |     0.85 |   55.1% |
| 12 | 1,290.92 | 1,092.94 |   685.31 |     0.85 |   51.6% |
| 13 | 1,190.78 | 1,010.02 |   628.60 |     0.85 |   47.6% |
| 14 | 1,119.91 |   954.41 |   582.95 |     0.85 |   44.8% |
| 15 | 1,151.89 |   987.50 |   589.09 |     0.86 |   46.1% |
| 16 | 1,184.25 | 1,011.86 |   611.48 |     0.85 |   47.4% |
| 17 | 1,102.39 |   931.98 |   585.63 |     0.85 |   44.1% |
| 18 | 1,007.66 |   850.24 |   538.01 |     0.84 |   40.3% |
| 19 |   974.62 |   814.46 |   532.88 |     0.84 |   39.0% |
| 20 | 1,218.88 |   998.70 |   696.58 |     0.82 |   48.8% |
| 21 | 1,274.44 | 1,047.26 |   724.54 |     0.82 |   51.0% |
| 22 | 1,284.07 | 1,056.85 |   727.97 |     0.82 |   51.4% |
| 23 | 1,335.75 | 1,112.17 |   738.33 |     0.83 |   53.4% |

---

# END OF REPORT

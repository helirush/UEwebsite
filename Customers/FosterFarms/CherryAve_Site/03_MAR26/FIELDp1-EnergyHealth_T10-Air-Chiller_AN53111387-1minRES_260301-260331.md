# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 508,012.3 kWh (Usage per period)
- **Consumption Cost per unit:** $0.350/kWh (Cost per kWh)
- **Consumption Total Cost:** $177,804.31 (Cost per period)
- **Consumption Total Cost:** $239.31 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T10 Air Chiller  
**Generated:** 2026-04-17 11:16:11  
**Data Source:** AN53111387-V-1minRES_44580CLP_260301-260331c.csv  

## Time Period

- **Period:** March 01, 2026 thru March 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,580

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

- **Transformer:** T10 Air Chiller
- **Power Factor:** 0.893
- **Total Energy (Actual):** 508,012.31 kWh (per period), 683.73 kW (per hour)
- **Total Waste (Actual):** 69,753.05 kWh (per period), 93.88 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T10-Air-Chiller_AN53111387-1minRES_260301-260331.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T10-Air-Chiller_AN53111387-1minRES_260301-260331.md


## UNITY MANAGEMENT T10 Air Chiller SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 93.88 kW/hr
- **Blended Electricity Rate:** $0.3500/kWh (all-inclusive)
- **T10 Air Chiller Utility Cost Offset:** $32.86/hour
- **Annual Offset Savings:** $287837/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 386,747 BTU/hr
- **Total Cooling kW No Longer Needed:** 33.87 kW
- **Cooling Energy Cost Avoided:** $11.85/hour
- **Annual Cooling Savings:** $103840/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 127.75 kW
- **CO2e Emissions Avoided:** 417.76 metric tons/year
- **Monthly CO2e Reduction:** 34.81 metric tons/month
- **Hourly CO2e Reduction:** 0.0477 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $16084/year

### Total T10 Air Chiller Unity Savings

- **Per Hour:** $46.55
- **Per Day:** $1117.15
- **Per Month:** $33514.55
- **Per Year:** $407760

### T10 Air Chiller Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 877.0 kVAR Max (Avg: 370.4 kVAR/hr ; 266,683 kVAR/mo)
- **Max Harmonic Distortion:** 33.2% Max (range: 3.1% - 33.2%)
- **Max Amperage:** 2,090A Max (range: 71A - 2090A)

---

# T10 Air Chiller DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   264.84 |   252.10 |   279.30 |
| Line to Line Voltage (480v) |   458.72 |   436.65 |   483.77 |
| Current (AMPS) |   995.60 |    70.52 |  2090.50 |
| Phase Angle (degrees) |    26.60 |    17.96 |    38.37 |
| Total Harmonic Distortion (PCT) |    14.87 |     3.11 |    33.23 |

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
| Unity THD Composite (%) | 14.9% | Field-level stress indicator |
| Max Phase THD | 5.0% | Highest THD among all three phases |
| Min Phase THD | 5.0% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,432.95 kW
  - **Maximum Load:** 1,619.09 kVA
  - **Percentage of Capacity (MAX):** 64.8%
- **Average Load:** 777.61 kVA
  - **Percentage of Capacity (Avg):** 31.1%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 777.61 kVA
- **Average Power Factor (PF):** 0.893

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 791.04 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 458.72 V
- Average Current (Iavg_A): 995.60 A
- Average kW (Psum_kW): 683.73 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 13.43 kVA (1.7%)
- **Calculated PF (kW/kVA from averages):** 0.864
- **Power Factor Difference:** 0.028 (3.2%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (777.61) and measured PF (0.893) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   777.61 |        31.1% | 577,765.36 kVA | 2,332,988.10 TOTAL-HEAT |
| kW |   683.73 |        27.3% | 508,012.31 kWh | 281,659.38 Load-Heat |
| kVAR |   370.39 |        14.8% | 275,202.30 kVARh | - |
| WASTE |    93.88 |         3.8% | 69,753.05 WASTE | 38,673.47 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,332,988.10
- **Load-Heat (BTU/hr):** 281,659.38
- **Field-Heat (BTU/hr):** 38,673.47
- **Load-Heat (BTU, period total):** 209,272,917.23
- **Field-Heat (BTU, period total):** 28,734,390.04

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 3 |   777.61 |   683.73 |   369.70 |     0.88 |   31.1% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   887.26 |   779.33 |   423.65 |     0.88 |   35.5% |
| 01 |   876.66 |   769.61 |   419.33 |     0.88 |   35.1% |
| 02 |   902.72 |   792.27 |   432.19 |     0.88 |   36.1% |
| 03 |   877.01 |   770.24 |   418.96 |     0.88 |   35.1% |
| 04 |   879.02 |   772.17 |   419.59 |     0.88 |   35.2% |
| 05 |   890.83 |   782.94 |   424.53 |     0.88 |   35.6% |
| 06 |   909.04 |   800.01 |   431.26 |     0.88 |   36.4% |
| 07 |   902.28 |   793.43 |   429.22 |     0.88 |   36.1% |
| 08 |   911.45 |   801.33 |   433.86 |     0.88 |   36.5% |
| 09 |   916.13 |   805.90 |   435.20 |     0.88 |   36.6% |
| 10 |   913.62 |   803.43 |   434.42 |     0.88 |   36.5% |
| 11 |   897.76 |   790.23 |   425.64 |     0.88 |   35.9% |
| 12 |   901.98 |   795.36 |   425.02 |     0.88 |   36.1% |
| 13 |   874.86 |   770.47 |   414.04 |     0.88 |   35.0% |
| 14 |   842.93 |   740.16 |   402.80 |     0.88 |   33.7% |
| 15 |   696.94 |   611.82 |   333.16 |     0.88 |   27.9% |
| 16 |   540.59 |   472.28 |   261.99 |     0.87 |   21.6% |
| 17 |   308.83 |   272.45 |   144.05 |     0.88 |   12.4% |
| 18 |   280.03 |   246.95 |   131.11 |     0.88 |   11.2% |
| 19 |   253.49 |   224.98 |   115.41 |     0.89 |   10.1% |
| 20 |   492.89 |   437.37 |   224.89 |     0.89 |   19.7% |
| 21 |   858.77 |   756.05 |   406.51 |     0.88 |   34.4% |
| 22 |   920.23 |   807.45 |   440.96 |     0.88 |   36.8% |
| 23 |   931.42 |   816.85 |   447.06 |     0.88 |   37.3% |

---

# END OF REPORT

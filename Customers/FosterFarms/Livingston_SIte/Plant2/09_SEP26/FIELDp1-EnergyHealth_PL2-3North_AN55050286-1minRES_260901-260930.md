# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 133,401.0 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $26,013.20 (Cost per period)
- **Consumption Total Cost:** $36.14 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL2-3North  
**Generated:** 2026-10-08 00:53:44  
**Data Source:** AN55050286-V-260930.2359c.csv  

## Time Period

- **Period:** September 01, 2026 thru September 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,193

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

- **Transformer:** PL2-3North
- **Power Factor:** 0.582
- **Total Energy (Actual):** 133,401.04 kWh (per period), 185.31 kW (per hour)
- **Total Waste (Actual):** 86,718.40 kWh (per period), 120.46 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL2-3North_AN55050286-1minRES_260901-260930.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL2-3North_AN55050286-1minRES_260901-260930.md


## UNITY MANAGEMENT PL2-3North SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 120.46 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 90.16 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL2-3North Utility Cost Offset:** $23.49/hour
- **Annual Offset Savings:** $205773/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 324,714 BTU/hr
- **Total Cooling kW No Longer Needed:** 28.41 kW
- **Cooling Energy Cost Avoided:** $5.54/hour
- **Annual Cooling Savings:** $48534/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 148.87 kW
- **CO2e Emissions Avoided:** 486.84 metric tons/year
- **Monthly CO2e Reduction:** 40.57 metric tons/month
- **Hourly CO2e Reduction:** 0.0556 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $18500/year

### Total PL2-3North Unity Savings

- **Per Hour:** $31.14
- **Per Day:** $747.42
- **Per Month:** $22422.49
- **Per Year:** $272807

### PL2-3North Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 524.8 kVAR Max (Avg: 243.2 kVAR/hr ; 175,119 kVAR/mo)
- **Max Harmonic Distortion:** 29.7% Max (range: 3.0% - 29.7%)
- **Max Amperage:** 773A Max (range: 17A - 773A)

---

# PL2-3North DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   280.92 |   271.31 |   293.19 |
| Line to Line Voltage (480v) |   486.57 |   469.93 |   507.82 |
| Current (AMPS) |   363.77 |    17.17 |   773.25 |
| Phase Angle (degrees) |    54.26 |    46.92 |    76.23 |
| Total Harmonic Distortion (PCT) |    14.54 |     3.00 |    29.72 |

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
| THD Phase A (%) | 4.8% | IEEE standard per-phase calculation |
| THD Phase B (%) | 4.8% | IEEE standard per-phase calculation |
| THD Phase C (%) | 4.8% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 14.5% | Field-level stress indicator |
| Max Phase THD | 4.8% | Highest THD among all three phases |
| Min Phase THD | 4.8% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 437.65 kW
  - **Maximum Load:** 641.94 kVA
  - **Percentage of Capacity (MAX):** 25.7%
- **Average Load:** 305.77 kVA
  - **Percentage of Capacity (Avg):** 12.2%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 305.77 kVA
- **Average Power Factor (PF):** 0.582

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 306.57 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 486.57 V
- Average Current (Iavg_A): 363.77 A
- Average kW (Psum_kW): 185.31 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.80 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.604
- **Power Factor Difference:** 0.022 (3.8%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (305.77) and measured PF (0.582) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   305.77 |        12.2% | 220,119.44 kVA | 632,301.49 TOTAL-HEAT |
| kW |   185.31 |         7.4% | 133,401.04 kWh | 249,101.90 Load-Heat |
| kVAR |   243.22 |         9.7% | 175,090.63 kVARh | - |
| WASTE |   120.46 |         4.8% | 86,718.40 WASTE | 161,930.65 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 632,301.49
- **Load-Heat (BTU/hr):** 249,101.90
- **Field-Heat (BTU/hr):** 161,930.65
- **Load-Heat (BTU, period total):** 179,324,307.51
- **Field-Heat (BTU, period total):** 116,571,175.34

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 9 |   305.77 |   185.31 |   242.49 |     0.61 |   12.2% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   342.03 |   210.23 |   269.18 |     0.61 |   13.7% |
| 01 |   331.69 |   200.08 |   263.90 |     0.60 |   13.3% |
| 02 |   338.54 |   207.05 |   267.24 |     0.61 |   13.5% |
| 03 |   330.78 |   201.90 |   261.37 |     0.61 |   13.2% |
| 04 |   331.22 |   205.11 |   259.39 |     0.62 |   13.2% |
| 05 |   327.04 |   202.29 |   256.21 |     0.62 |   13.1% |
| 06 |   327.64 |   201.44 |   257.65 |     0.61 |   13.1% |
| 07 |   330.03 |   203.27 |   259.20 |     0.62 |   13.2% |
| 08 |   332.45 |   204.87 |   261.05 |     0.62 |   13.3% |
| 09 |   340.21 |   211.14 |   266.02 |     0.62 |   13.6% |
| 10 |   328.61 |   202.67 |   258.01 |     0.62 |   13.1% |
| 11 |   331.77 |   206.46 |   258.98 |     0.62 |   13.3% |
| 12 |   322.26 |   198.24 |   253.32 |     0.62 |   12.9% |
| 13 |   318.72 |   194.60 |   251.70 |     0.61 |   12.7% |
| 14 |   284.75 |   169.14 |   228.55 |     0.59 |   11.4% |
| 15 |   274.36 |   160.89 |   221.77 |     0.59 |   11.0% |
| 16 |   253.52 |   146.12 |   206.71 |     0.58 |   10.1% |
| 17 |   231.82 |   130.66 |   191.11 |     0.56 |    9.3% |
| 18 |   198.65 |   109.52 |   165.39 |     0.55 |    7.9% |
| 19 |   212.53 |   121.09 |   174.10 |     0.57 |    8.5% |
| 20 |   260.39 |   155.62 |   208.05 |     0.60 |   10.4% |
| 21 |   312.37 |   189.70 |   247.38 |     0.61 |   12.5% |
| 22 |   328.81 |   200.17 |   260.23 |     0.61 |   13.2% |
| 23 |   348.28 |   215.14 |   273.33 |     0.62 |   13.9% |

---

# END OF REPORT

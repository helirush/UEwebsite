# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 435,859.5 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $84,992.61 (Cost per period)
- **Consumption Total Cost:** $116.47 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Rendering-3  
**Generated:** 2026-09-10 19:33:19  
**Data Source:** AN55050429-V-1minRES_44640CLP_260701-260731c.csv  

## Time Period

- **Period:** July 01, 2026 thru July 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,783

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
- **Power Factor:** 0.766
- **Total Energy (Actual):** 435,859.54 kWh (per period), 597.30 kW (per hour)
- **Total Waste (Actual):** 132,308.27 kWh (per period), 181.31 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Rendering-3_AN55050429-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Rendering-3_AN55050429-1minRES_260701-260731.md


## UNITY MANAGEMENT Rendering-3 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 181.31 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 134.40 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Rendering-3 Utility Cost Offset:** $35.36/hour
- **Annual Offset Savings:** $309722/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 501,188 BTU/hr
- **Total Cooling kW No Longer Needed:** 44.68 kW
- **Cooling Energy Cost Avoided:** $8.71/hour
- **Annual Cooling Savings:** $76314/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 225.99 kW
- **CO2e Emissions Avoided:** 739.03 metric tons/year
- **Monthly CO2e Reduction:** 61.59 metric tons/month
- **Hourly CO2e Reduction:** 0.0844 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $28083/year

### Total Rendering-3 Unity Savings

- **Per Hour:** $47.27
- **Per Day:** $1134.57
- **Per Month:** $34037.18
- **Per Year:** $414119

### Rendering-3 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 712.0 kVAR Max (Avg: 499.5 kVAR/hr ; 359,621 kVAR/mo)
- **Max Harmonic Distortion:** 29.3% Max (range: 3.2% - 29.3%)
- **Max Amperage:** 1,190A Max (range: 691A - 1190A)

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
| Line to Neutral Voltage (277v) |   274.87 |   266.33 |   284.28 |
| Line to Line Voltage (480v) |   476.09 |   461.30 |   492.38 |
| Current (AMPS) |   944.33 |   690.60 |  1189.88 |
| Phase Angle (degrees) |    39.93 |    34.71 |    51.39 |
| Total Harmonic Distortion (PCT) |    16.19 |     3.25 |    29.29 |

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

- **Maximum UtilityDemand:** 743.60 kW
  - **Maximum Load:** 978.43 kVA
  - **Percentage of Capacity (MAX):** 39.1%
- **Average Load:** 778.61 kVA
  - **Percentage of Capacity (Avg):** 31.1%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 778.61 kVA
- **Average Power Factor (PF):** 0.766

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 778.70 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 476.09 V
- Average Current (Iavg_A): 944.33 A
- Average kW (Psum_kW): 597.30 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.09 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.767
- **Power Factor Difference:** 0.001 (0.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (778.61) and measured PF (0.766) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   778.61 |        31.1% | 568,167.81 kVA | 2,038,071.35 TOTAL-HEAT |
| kW |   597.30 |        23.9% | 435,859.54 kWh | 474,602.20 Load-Heat |
| kVAR |   499.47 |        20.0% | 364,473.76 kVARh | - |
| WASTE |   181.31 |         7.3% | 132,308.27 WASTE | 144,068.88 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,038,071.35
- **Load-Heat (BTU/hr):** 474,602.20
- **Field-Heat (BTU/hr):** 144,068.88
- **Load-Heat (BTU, period total):** 346,325,137.94
- **Field-Heat (BTU, period total):** 105,129,463.84

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 |   778.61 |   597.30 |   498.34 |     0.77 |   31.1% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   786.32 |   608.68 |   496.94 |     0.77 |   31.5% |
| 01 |   784.40 |   608.27 |   494.04 |     0.78 |   31.4% |
| 02 |   795.62 |   616.69 |   501.89 |     0.78 |   31.8% |
| 03 |   783.55 |   609.02 |   492.07 |     0.78 |   31.3% |
| 04 |   799.43 |   617.51 |   506.81 |     0.77 |   32.0% |
| 05 |   794.12 |   610.72 |   506.43 |     0.77 |   31.8% |
| 06 |   803.15 |   615.58 |   514.83 |     0.77 |   32.1% |
| 07 |   798.09 |   610.71 |   512.45 |     0.77 |   31.9% |
| 08 |   799.80 |   607.58 |   518.59 |     0.76 |   32.0% |
| 09 |   782.37 |   599.02 |   502.27 |     0.77 |   31.3% |
| 10 |   785.24 |   597.58 |   508.03 |     0.76 |   31.4% |
| 11 |   769.77 |   587.36 |   496.14 |     0.76 |   30.8% |
| 12 |   768.98 |   584.38 |   498.21 |     0.76 |   30.8% |
| 13 |   759.68 |   575.80 |   494.22 |     0.76 |   30.4% |
| 14 |   761.33 |   573.74 |   499.31 |     0.75 |   30.5% |
| 15 |   757.32 |   577.95 |   488.46 |     0.76 |   30.3% |
| 16 |   764.22 |   584.42 |   491.49 |     0.76 |   30.6% |
| 17 |   757.08 |   579.78 |   485.68 |     0.77 |   30.3% |
| 18 |   756.99 |   580.37 |   485.17 |     0.77 |   30.3% |
| 19 |   756.05 |   577.13 |   487.77 |     0.76 |   30.2% |
| 20 |   783.22 |   603.59 |   498.47 |     0.77 |   31.3% |
| 21 |   778.41 |   603.36 |   490.93 |     0.78 |   31.1% |
| 22 |   787.53 |   604.76 |   503.23 |     0.77 |   31.5% |
| 23 |   775.85 |   601.15 |   489.57 |     0.77 |   31.0% |

---

# END OF REPORT

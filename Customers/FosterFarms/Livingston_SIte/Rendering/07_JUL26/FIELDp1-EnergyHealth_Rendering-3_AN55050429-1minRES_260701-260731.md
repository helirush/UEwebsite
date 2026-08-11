# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 439,935.7 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $85,787.46 (Cost per period)
- **Consumption Total Cost:** $115.31 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Rendering-3  
**Generated:** 2026-08-02 22:17:10  
**Data Source:** AN55050429-V-1minRES_44640CLP_260701-260731c.csv  

## Time Period

- **Period:** July 01, 2026 thru July 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,640

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
- **Power Factor:** 0.765
- **Total Energy (Actual):** 439,935.67 kWh (per period), 591.31 kW (per hour)
- **Total Waste (Actual):** 134,212.24 kWh (per period), 180.39 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Rendering-3_AN55050429-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Rendering-3_AN55050429-1minRES_260701-260731.md


## UNITY MANAGEMENT Rendering-3 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 180.39 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 133.98 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Rendering-3 Utility Cost Offset:** $35.18/hour
- **Annual Offset Savings:** $308147/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 499,440 BTU/hr
- **Total Cooling kW No Longer Needed:** 44.52 kW
- **Cooling Energy Cost Avoided:** $8.68/hour
- **Annual Cooling Savings:** $76048/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 224.91 kW
- **CO2e Emissions Avoided:** 735.50 metric tons/year
- **Monthly CO2e Reduction:** 61.29 metric tons/month
- **Hourly CO2e Reduction:** 0.0840 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $27949/year

### Total Rendering-3 Unity Savings

- **Per Hour:** $47.05
- **Per Day:** $1129.16
- **Per Month:** $33874.82
- **Per Year:** $412144

### Rendering-3 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,002.1 kVAR Max (Avg: 495.9 kVAR/hr ; 357,020 kVAR/mo)
- **Max Harmonic Distortion:** 29.3% Max (range: 3.2% - 29.3%)
- **Max Amperage:** 1,616A Max (range: 0A - 1616A)

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
| Line to Neutral Voltage (277v) |   274.88 |     0.00 |   284.28 |
| Line to Line Voltage (480v) |   476.11 |     0.00 |   492.38 |
| Current (AMPS) |   935.92 |     0.00 |  1616.22 |
| Phase Angle (degrees) |    40.02 |    30.00 |    90.00 |
| Total Harmonic Distortion (PCT) |    16.14 |     3.25 |    29.29 |

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
| Unity THD Composite (%) | 16.1% | Field-level stress indicator |
| Max Phase THD | 5.4% | Highest THD among all three phases |
| Min Phase THD | 5.4% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 857.12 kW
  - **Maximum Load:** 1,318.68 kVA
  - **Percentage of Capacity (MAX):** 52.7%
- **Average Load:** 771.70 kVA
  - **Percentage of Capacity (Avg):** 30.9%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 771.70 kVA
- **Average Power Factor (PF):** 0.765

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 771.80 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 476.11 V
- Average Current (Iavg_A): 935.92 A
- Average kW (Psum_kW): 591.31 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.09 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.766
- **Power Factor Difference:** 0.001 (0.2%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (771.70) and measured PF (0.765) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   771.70 |        30.9% | 574,147.91 kVA | 2,017,638.43 TOTAL-HEAT |
| kW |   591.31 |        23.7% | 439,935.67 kWh | 471,641.14 Load-Heat |
| kVAR |   495.86 |        19.8% | 368,920.63 kVARh | - |
| WASTE |   180.39 |         7.2% | 134,212.24 WASTE | 143,884.70 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,017,638.43
- **Load-Heat (BTU/hr):** 471,641.14
- **Field-Heat (BTU/hr):** 143,884.70
- **Load-Heat (BTU, period total):** 350,901,005.04
- **Field-Heat (BTU, period total):** 107,050,218.94

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 |   771.70 |   591.31 |   494.57 |     0.77 |   30.9% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   786.79 |   608.91 |   497.39 |     0.77 |   31.5% |
| 01 |   783.66 |   607.70 |   493.58 |     0.78 |   31.3% |
| 02 |   795.55 |   616.52 |   501.96 |     0.77 |   31.8% |
| 03 |   781.34 |   606.60 |   491.43 |     0.78 |   31.3% |
| 04 |   798.87 |   616.68 |   506.87 |     0.77 |   32.0% |
| 05 |   791.95 |   608.19 |   505.87 |     0.77 |   31.7% |
| 06 |   779.88 |   596.10 |   501.61 |     0.76 |   31.2% |
| 07 |   766.77 |   584.57 |   494.52 |     0.76 |   30.7% |
| 08 |   781.58 |   594.08 |   506.31 |     0.76 |   31.3% |
| 09 |   764.65 |   585.67 |   490.59 |     0.77 |   30.6% |
| 10 |   766.52 |   583.89 |   495.17 |     0.76 |   30.7% |
| 11 |   753.58 |   575.45 |   485.11 |     0.76 |   30.1% |
| 12 |   761.13 |   576.16 |   495.34 |     0.76 |   30.4% |
| 13 |   750.62 |   566.51 |   490.65 |     0.75 |   30.0% |
| 14 |   751.82 |   563.62 |   495.67 |     0.75 |   30.1% |
| 15 |   748.52 |   568.23 |   485.58 |     0.76 |   29.9% |
| 16 |   761.78 |   582.07 |   490.42 |     0.76 |   30.5% |
| 17 |   757.24 |   579.86 |   485.82 |     0.77 |   30.3% |
| 18 |   757.17 |   580.43 |   485.35 |     0.77 |   30.3% |
| 19 |   756.47 |   577.36 |   488.14 |     0.76 |   30.3% |
| 20 |   783.22 |   603.59 |   498.47 |     0.77 |   31.3% |
| 21 |   778.41 |   603.36 |   490.93 |     0.78 |   31.1% |
| 22 |   787.53 |   604.76 |   503.23 |     0.77 |   31.5% |
| 23 |   775.85 |   601.15 |   489.57 |     0.77 |   31.0% |

---

# END OF REPORT

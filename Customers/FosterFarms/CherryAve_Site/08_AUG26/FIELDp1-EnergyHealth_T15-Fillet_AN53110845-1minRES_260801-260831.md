# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 560,394.0 kWh (Usage per period)
- **Consumption Cost per unit:** $0.350/kWh (Cost per kWh)
- **Consumption Total Cost:** $196,137.91 (Cost per period)
- **Consumption Total Cost:** $263.63 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T15 Fillet  
**Generated:** 2026-09-10 23:18:08  
**Data Source:** AN53110845-V-1minRES_44640CLP_260801-260831c.csv  

## Time Period

- **Period:** August 01, 2026 thru August 31, 2026
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

- **Transformer:** T15 Fillet
- **Power Factor:** 0.815
- **Total Energy (Actual):** 560,394.01 kWh (per period), 753.22 kW (per hour)
- **Total Waste (Actual):** 110,239.25 kWh (per period), 148.17 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T15-Fillet_AN53110845-1minRES_260801-260831.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T15-Fillet_AN53110845-1minRES_260801-260831.md


## UNITY MANAGEMENT T15 Fillet SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 148.17 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 96.61 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.3500/kWh (all-inclusive)
- **T15 Fillet Utility Cost Offset:** $51.86/hour
- **Annual Offset Savings:** $454292/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 345,428 BTU/hr
- **Total Cooling kW No Longer Needed:** 31.15 kW
- **Cooling Energy Cost Avoided:** $10.90/hour
- **Annual Cooling Savings:** $95495/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 179.32 kW
- **CO2e Emissions Avoided:** 586.40 metric tons/year
- **Monthly CO2e Reduction:** 48.87 metric tons/month
- **Hourly CO2e Reduction:** 0.0669 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $22576/year

### Total T15 Fillet Unity Savings

- **Per Hour:** $65.34
- **Per Day:** $1568.12
- **Per Month:** $47043.62
- **Per Year:** $572364

### T15 Fillet Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 763.1 kVAR Max (Avg: 495.1 kVAR/hr ; 356,502 kVAR/mo)
- **Max Harmonic Distortion:** 130.4% Max (range: 0.0% - 130.4%)
- **Max Amperage:** 1,892A Max (range: 192A - 1892A)

---

# T15 Fillet DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   276.90 |   234.60 |   292.96 |
| Line to Line Voltage (480v) |   479.60 |   406.33 |   507.43 |
| Current (AMPS) |  1096.51 |   192.42 |  1891.96 |
| Phase Angle (degrees) |    34.98 |    24.57 |    50.20 |
| Total Harmonic Distortion (PCT) |    12.68 |     0.00 |   130.45 |

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
| THD Phase A (%) | 4.4% | IEEE standard per-phase calculation |
| THD Phase B (%) | 4.2% | IEEE standard per-phase calculation |
| THD Phase C (%) | 4.1% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 12.7% | Field-level stress indicator |
| Max Phase THD | 4.4% | Highest THD among all three phases |
| Min Phase THD | 4.1% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,351.76 kW
  - **Maximum Load:** 1,544.25 kVA
  - **Percentage of Capacity (MAX):** 61.8%
- **Average Load:** 901.39 kVA
  - **Percentage of Capacity (Avg):** 36.1%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 901.39 kVA
- **Average Power Factor (PF):** 0.815

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 910.87 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 479.60 V
- Average Current (Iavg_A): 1096.51 A
- Average kW (Psum_kW): 753.22 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 9.48 kVA (1.1%)
- **Calculated PF (kW/kVA from averages):** 0.827
- **Power Factor Difference:** 0.012 (1.4%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (901.39) and measured PF (0.815) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   901.39 |        36.1% | 670,633.27 kVA | 2,570,085.96 TOTAL-HEAT |
| kW |   753.22 |        30.1% | 560,394.01 kWh | 422,472.86 Load-Heat |
| kVAR |   495.14 |        19.8% | 368,385.03 kVARh | - |
| WASTE |   148.17 |         5.9% | 110,239.25 WASTE | 83,107.76 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,570,085.96
- **Load-Heat (BTU/hr):** 422,472.86
- **Field-Heat (BTU/hr):** 83,107.76
- **Load-Heat (BTU, period total):** 314,319,808.27
- **Field-Heat (BTU, period total):** 61,832,174.81

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 8 |   901.39 |   753.22 |   488.39 |     0.84 |   36.1% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,010.23 |   856.22 |   532.86 |     0.85 |   40.4% |
| 01 | 1,023.43 |   861.53 |   549.49 |     0.84 |   40.9% |
| 02 | 1,041.20 |   884.04 |   547.28 |     0.85 |   41.6% |
| 03 | 1,008.83 |   850.12 |   540.44 |     0.84 |   40.4% |
| 04 | 1,006.48 |   849.22 |   537.43 |     0.84 |   40.3% |
| 05 | 1,037.24 |   877.79 |   549.91 |     0.85 |   41.5% |
| 06 | 1,012.49 |   858.88 |   533.57 |     0.85 |   40.5% |
| 07 | 1,007.61 |   852.74 |   534.03 |     0.85 |   40.3% |
| 08 |   966.06 |   824.63 |   499.95 |     0.85 |   38.6% |
| 09 |   982.17 |   844.13 |   497.73 |     0.86 |   39.3% |
| 10 | 1,020.19 |   884.63 |   503.12 |     0.87 |   40.8% |
| 11 |   971.86 |   836.12 |   490.74 |     0.86 |   38.9% |
| 12 |   991.72 |   854.84 |   497.85 |     0.86 |   39.7% |
| 13 | 1,017.25 |   873.71 |   515.42 |     0.86 |   40.7% |
| 14 |   995.97 |   847.11 |   518.78 |     0.85 |   39.8% |
| 15 | 1,025.80 |   875.28 |   529.46 |     0.85 |   41.0% |
| 16 |   957.63 |   804.77 |   513.73 |     0.84 |   38.3% |
| 17 |   738.16 |   593.13 |   434.39 |     0.80 |   29.5% |
| 18 |   683.73 |   505.53 |   456.84 |     0.74 |   27.3% |
| 19 |   660.37 |   480.18 |   450.80 |     0.73 |   26.4% |
| 20 |   658.02 |   483.13 |   444.96 |     0.73 |   26.3% |
| 21 |   594.14 |   460.05 |   374.45 |     0.77 |   23.8% |
| 22 |   522.55 |   423.75 |   303.58 |     0.81 |   20.9% |
| 23 |   700.19 |   595.69 |   364.50 |     0.85 |   28.0% |

---

# END OF REPORT

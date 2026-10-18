# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 898,662.1 kWh (Usage per period)
- **Consumption Cost per unit:** $0.110/kWh (Cost per kWh)
- **Consumption Total Cost:** $98,852.83 (Cost per period)
- **Consumption Total Cost:** $137.31 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** HAD2500  
**Generated:** 2026-09-12 17:51:57  
**Data Source:** AN21061800-V-1minRES_43200CLP_260601-260630c.csv  

## Time Period

- **Period:** June 01, 2026 thru June 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,195

- **Dataset Coverage:** Complete month (100.0% of 30-day month)
- **Billing Scale Factor:** 1.000x (no normalization needed)

## Facility Information

- **Facility:** Tyson Foods
- **Location:** Scranton Facility
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** HAD2500
- **Power Factor:** 0.956
- **Total Energy (Actual):** 898,662.06 kWh (per period), 1248.29 kW (per hour)
- **Total Waste (Actual):** 45,451.55 kWh (per period), 63.13 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_HAD2500_AN21061800-1minRES_260601-260630.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_HAD2500_AN21061800-1minRES_260601-260630.md


## UNITY MANAGEMENT HAD2500 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 63.13 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 29.51 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1100/kWh (all-inclusive)
- **HAD2500 Utility Cost Offset:** $6.94/hour
- **Annual Offset Savings:** $60836/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 107,863 BTU/hr
- **Total Cooling kW No Longer Needed:** 10.62 kW
- **Cooling Energy Cost Avoided:** $1.17/hour
- **Annual Cooling Savings:** $10233/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 73.75 kW
- **CO2e Emissions Avoided:** 241.19 metric tons/year
- **Monthly CO2e Reduction:** 20.10 metric tons/month
- **Hourly CO2e Reduction:** 0.0275 metric tons/hour
- **CO2e Value Rate:** $10/metric ton
- **Annual CO2e Value:** $2412/year

### Total HAD2500 Unity Savings

- **Per Hour:** $8.39
- **Per Day:** $201.32
- **Per Month:** $6039.56
- **Per Year:** $73481

### HAD2500 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 912.0 kVAR Max (Avg: 402.0 kVAR/hr ; 289,442 kVAR/mo)
- **Max Harmonic Distortion:** 34.6% Max (range: 3.0% - 34.6%)
- **Max Amperage:** 2,274A Max (range: 360A - 2274A)

---

# HAD2500 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   276.86 |   268.75 |   287.75 |
| Line to Line Voltage (480v) |   479.54 |   465.48 |   498.39 |
| Current (AMPS) |  1583.65 |   359.68 |  2273.98 |
| Phase Angle (degrees) |    16.36 |     3.17 |    38.83 |
| Total Harmonic Distortion (PCT) |    16.62 |     3.00 |    34.58 |

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
| Unity THD Composite (%) | 16.6% | Field-level stress indicator |
| Max Phase THD | 5.5% | Highest THD among all three phases |
| Min Phase THD | 5.5% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,620.73 kW
  - **Maximum Load:** 1,828.95 kVA
  - **Percentage of Capacity (MAX):** 73.2%
- **Average Load:** 1,311.42 kVA
  - **Percentage of Capacity (Avg):** 52.5%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,311.42 kVA
- **Average Power Factor (PF):** 0.956

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,315.36 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 479.54 V
- Average Current (Iavg_A): 1583.65 A
- Average kW (Psum_kW): 1248.29 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 3.93 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.949
- **Power Factor Difference:** 0.007 (0.8%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1311.42) and measured PF (0.956) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,311.42 |        52.5% | 944,113.61 kVA | 4,259,329.85 TOTAL-HEAT |
| kW | 1,248.29 |        49.9% | 898,662.06 kWh | 205,052.80 Load-Heat |
| kVAR |   402.00 |        16.1% | 289,408.03 kVARh | - |
| WASTE |    63.13 |         2.5% | 45,451.55 WASTE | 10,370.94 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 4,259,329.85
- **Load-Heat (BTU/hr):** 205,052.80
- **Field-Heat (BTU/hr):** 10,370.94
- **Load-Heat (BTU, period total):** 147,620,928.05
- **Field-Heat (BTU, period total):** 7,466,210.18

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 6 | 1,311.42 | 1,248.29 |   392.66 |     0.95 |   52.5% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,296.56 | 1,233.19 |   393.27 |     0.95 |   51.9% |
| 01 | 1,297.72 | 1,233.55 |   396.00 |     0.95 |   51.9% |
| 02 | 1,288.51 | 1,225.32 |   391.37 |     0.95 |   51.5% |
| 03 | 1,280.28 | 1,218.42 |   385.64 |     0.95 |   51.2% |
| 04 | 1,282.68 | 1,220.94 |   386.02 |     0.95 |   51.3% |
| 05 | 1,268.25 | 1,207.73 |   379.31 |     0.95 |   50.7% |
| 06 | 1,247.16 | 1,189.38 |   366.28 |     0.95 |   49.9% |
| 07 | 1,256.16 | 1,197.53 |   371.07 |     0.95 |   50.2% |
| 08 | 1,264.05 | 1,205.01 |   373.16 |     0.95 |   50.6% |
| 09 | 1,260.76 | 1,202.59 |   369.71 |     0.95 |   50.4% |
| 10 | 1,268.26 | 1,209.44 |   371.36 |     0.95 |   50.7% |
| 11 | 1,289.32 | 1,229.84 |   375.74 |     0.95 |   51.6% |
| 12 | 1,288.78 | 1,231.05 |   370.14 |     0.96 |   51.6% |
| 13 | 1,290.94 | 1,234.25 |   364.09 |     0.96 |   51.6% |
| 14 | 1,323.82 | 1,263.40 |   381.13 |     0.95 |   53.0% |
| 15 | 1,360.82 | 1,294.94 |   408.48 |     0.95 |   54.4% |
| 16 | 1,387.62 | 1,316.85 |   429.10 |     0.95 |   55.5% |
| 17 | 1,373.44 | 1,304.42 |   421.08 |     0.95 |   54.9% |
| 18 | 1,358.78 | 1,291.01 |   414.55 |     0.95 |   54.4% |
| 19 | 1,362.95 | 1,294.10 |   418.44 |     0.95 |   54.5% |
| 20 | 1,376.15 | 1,307.56 |   419.98 |     0.95 |   55.0% |
| 21 | 1,372.52 | 1,303.21 |   419.63 |     0.95 |   54.9% |
| 22 | 1,339.57 | 1,272.27 |   411.21 |     0.95 |   53.6% |
| 23 | 1,339.08 | 1,272.94 |   407.11 |     0.95 |   53.6% |

---

# END OF REPORT

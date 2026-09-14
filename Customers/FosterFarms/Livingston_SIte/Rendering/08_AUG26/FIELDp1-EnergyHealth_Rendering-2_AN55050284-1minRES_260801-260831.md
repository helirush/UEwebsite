# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 635,303.6 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $123,884.21 (Cost per period)
- **Consumption Total Cost:** $166.69 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Rendering-2  
**Generated:** 2026-09-12 13:40:33  
**Data Source:** AN55050284-V-1minRES_44640CLP_260801-260831c.csv  

## Time Period

- **Period:** August 01, 2026 thru August 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,592

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

- **Transformer:** Rendering-2
- **Power Factor:** 0.740
- **Total Energy (Actual):** 635,303.63 kWh (per period), 854.82 kW (per hour)
- **Total Waste (Actual):** 240,223.96 kWh (per period), 323.23 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Rendering-2_AN55050284-1minRES_260801-260831.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Rendering-2_AN55050284-1minRES_260801-260831.md


## UNITY MANAGEMENT Rendering-2 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 323.23 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 248.82 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Rendering-2 Utility Cost Offset:** $63.03/hour
- **Annual Offset Savings:** $552140/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 943,581 BTU/hr
- **Total Cooling kW No Longer Needed:** 84.26 kW
- **Cooling Energy Cost Avoided:** $16.43/hour
- **Annual Cooling Savings:** $143940/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 407.49 kW
- **CO2e Emissions Avoided:** 1332.57 metric tons/year
- **Monthly CO2e Reduction:** 111.05 metric tons/month
- **Hourly CO2e Reduction:** 0.1521 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $50638/year

### Total Rendering-2 Unity Savings

- **Per Hour:** $85.24
- **Per Day:** $2045.80
- **Per Month:** $61374.11
- **Per Year:** $746718

### Rendering-2 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,735.6 kVAR Max (Avg: 810.6 kVAR/hr ; 583,637 kVAR/mo)
- **Max Harmonic Distortion:** 30.6% Max (range: 3.1% - 30.6%)
- **Max Amperage:** 2,585A Max (range: 252A - 2585A)

---

# Rendering-2 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   273.17 |   261.15 |   282.83 |
| Line to Line Voltage (480v) |   473.14 |   452.33 |   489.88 |
| Current (AMPS) |  1442.88 |   251.83 |  2584.85 |
| Phase Angle (degrees) |    41.96 |    21.72 |    58.26 |
| Total Harmonic Distortion (PCT) |    15.80 |     3.11 |    30.64 |

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
| Unity THD Composite (%) | 15.8% | Field-level stress indicator |
| Max Phase THD | 5.3% | Highest THD among all three phases |
| Min Phase THD | 5.3% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,347.33 kW
  - **Maximum Load:** 2,040.69 kVA
  - **Percentage of Capacity (MAX):** 81.6%
- **Average Load:** 1,178.05 kVA
  - **Percentage of Capacity (Avg):** 47.1%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,178.05 kVA
- **Average Power Factor (PF):** 0.740

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,182.45 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 473.14 V
- Average Current (Iavg_A): 1442.88 A
- Average kW (Psum_kW): 854.82 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 4.40 kVA (0.4%)
- **Calculated PF (kW/kVA from averages):** 0.723
- **Power Factor Difference:** 0.017 (2.3%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1178.05) and measured PF (0.740) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,178.05 |        47.1% | 875,527.58 kVA | 2,916,773.67 TOTAL-HEAT |
| kW |   854.82 |        34.2% | 635,303.63 kWh | 800,293.36 Load-Heat |
| kVAR |   810.61 |        32.4% | 602,443.23 kVARh | - |
| WASTE |   323.23 |        12.9% | 240,223.96 WASTE | 302,610.64 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,916,773.67
- **Load-Heat (BTU/hr):** 800,293.36
- **Field-Heat (BTU/hr):** 302,610.64
- **Load-Heat (BTU, period total):** 594,778,021.89
- **Field-Heat (BTU, period total):** 224,900,225.11

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 8 | 1,178.05 |   854.82 |   807.10 |     0.73 |   47.1% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,132.52 |   812.26 |   785.56 |     0.72 |   45.3% |
| 01 | 1,157.81 |   839.43 |   794.14 |     0.73 |   46.3% |
| 02 | 1,162.92 |   839.32 |   801.65 |     0.72 |   46.5% |
| 03 | 1,167.11 |   839.05 |   807.87 |     0.72 |   46.7% |
| 04 | 1,184.21 |   851.77 |   819.37 |     0.72 |   47.4% |
| 05 | 1,181.67 |   855.81 |   811.67 |     0.72 |   47.3% |
| 06 | 1,190.15 |   862.72 |   816.79 |     0.72 |   47.6% |
| 07 | 1,199.68 |   870.86 |   822.23 |     0.73 |   48.0% |
| 08 | 1,205.80 |   876.69 |   824.97 |     0.73 |   48.2% |
| 09 | 1,196.54 |   867.39 |   821.15 |     0.72 |   47.9% |
| 10 | 1,187.46 |   862.36 |   813.11 |     0.73 |   47.5% |
| 11 | 1,182.20 |   859.23 |   808.97 |     0.73 |   47.3% |
| 12 | 1,159.53 |   836.64 |   799.40 |     0.72 |   46.4% |
| 13 | 1,095.39 |   784.68 |   760.55 |     0.72 |   43.8% |
| 14 | 1,156.05 |   843.44 |   786.54 |     0.73 |   46.2% |
| 15 | 1,191.90 |   874.92 |   803.88 |     0.73 |   47.7% |
| 16 | 1,191.27 |   877.29 |   800.20 |     0.74 |   47.7% |
| 17 | 1,186.08 |   874.36 |   797.24 |     0.74 |   47.4% |
| 18 | 1,146.51 |   828.82 |   788.69 |     0.72 |   45.9% |
| 19 | 1,182.67 |   858.94 |   810.18 |     0.73 |   47.3% |
| 20 | 1,215.64 |   888.60 |   826.79 |     0.73 |   48.6% |
| 21 | 1,203.16 |   873.99 |   824.15 |     0.73 |   48.1% |
| 22 | 1,194.38 |   865.87 |   819.85 |     0.72 |   47.8% |
| 23 | 1,202.61 |   871.34 |   825.50 |     0.72 |   48.1% |

---

# END OF REPORT

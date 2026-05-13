# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 595,046.7 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $116,034.10 (Cost per period)
- **Consumption Total Cost:** $201.38 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Rendering-2  
**Generated:** 2026-05-09 20:16:43  
**Data Source:** AN55050284-V-1minRES_43200CLP_260401-260430c.csv  

## Time Period

- **Period:** April 01, 2026 thru April 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 34,571

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

- **Transformer:** Rendering-2
- **Power Factor:** 0.707
- **Total Energy (Actual):** 595,046.68 kWh (per period), 1032.74 kW (per hour)
- **Total Waste (Actual):** 244,131.33 kWh (per period), 423.70 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Rendering-2_AN55050284-1minRES_260401-260430.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Rendering-2_AN55050284-1minRES_260401-260430.md


## UNITY MANAGEMENT Rendering-2 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 423.70 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Rendering-2 Utility Cost Offset:** $82.62/hour
- **Annual Offset Savings:** $723772/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 1,647,117 BTU/hr
- **Total Cooling kW No Longer Needed:** 144.24 kW
- **Cooling Energy Cost Avoided:** $28.13/hour
- **Annual Cooling Savings:** $246388/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 567.94 kW
- **CO2e Emissions Avoided:** 1857.27 metric tons/year
- **Monthly CO2e Reduction:** 154.77 metric tons/month
- **Hourly CO2e Reduction:** 0.2120 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $71505/year

### Total Rendering-2 Unity Savings

- **Per Hour:** $118.91
- **Per Day:** $2853.88
- **Per Month:** $85616.27
- **Per Year:** $1041665

### Rendering-2 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,491.2 kVAR Max (Avg: 1,027.0 kVAR/hr ; 739,422 kVAR/mo)
- **Max Harmonic Distortion:** 30.7% Max (range: 3.0% - 30.7%)
- **Max Amperage:** 2,472A Max (range: 1118A - 2472A)

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
| Line to Neutral Voltage (277v) |   271.34 |   261.62 |   282.63 |
| Line to Line Voltage (480v) |   469.98 |   453.13 |   489.52 |
| Current (AMPS) |  1789.83 |  1117.51 |  2471.88 |
| Phase Angle (degrees) |    44.95 |    29.31 |    59.07 |
| Total Harmonic Distortion (PCT) |    16.65 |     3.00 |    30.70 |

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
| THD Phase B (%) | 5.6% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.6% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 16.7% | Field-level stress indicator |
| Max Phase THD | 5.6% | Highest THD among all three phases |
| Min Phase THD | 5.5% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,337.69 kW
  - **Maximum Load:** 1,934.70 kVA
  - **Percentage of Capacity (MAX):** 77.4%
- **Average Load:** 1,456.44 kVA
  - **Percentage of Capacity (Avg):** 58.3%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,456.44 kVA
- **Average Power Factor (PF):** 0.707

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,456.97 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 469.98 V
- Average Current (Iavg_A): 1789.83 A
- Average kW (Psum_kW): 1032.74 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.53 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.709
- **Power Factor Difference:** 0.002 (0.2%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1456.44) and measured PF (0.707) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,456.44 |        58.3% | 839,178.01 kVA | 3,523,850.24 TOTAL-HEAT |
| kW | 1,032.74 |        41.3% | 595,046.68 kWh | 1,025,148.69 Load-Heat |
| kVAR | 1,026.97 |        41.1% | 591,725.59 kVARh | - |
| WASTE |   423.70 |        16.9% | 244,131.33 WASTE | 420,590.38 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,523,850.24
- **Load-Heat (BTU/hr):** 1,025,148.69
- **Field-Heat (BTU/hr):** 420,590.38
- **Load-Heat (BTU, period total):** 590,673,589.45
- **Field-Heat (BTU, period total):** 242,337,167.34

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 4 | 1,456.44 | 1,032.74 | 1,025.39 |     0.71 |   58.3% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,426.45 | 1,007.05 | 1,009.21 |     0.71 |   57.1% |
| 01 | 1,441.10 | 1,016.81 | 1,020.23 |     0.71 |   57.6% |
| 02 | 1,451.32 | 1,022.26 | 1,029.37 |     0.70 |   58.1% |
| 03 | 1,467.43 | 1,035.42 | 1,038.84 |     0.71 |   58.7% |
| 04 | 1,472.90 | 1,044.19 | 1,037.58 |     0.71 |   58.9% |
| 05 | 1,448.67 | 1,023.64 | 1,023.34 |     0.71 |   57.9% |
| 06 | 1,437.41 | 1,020.26 | 1,010.75 |     0.71 |   57.5% |
| 07 | 1,451.02 | 1,029.65 | 1,020.51 |     0.71 |   58.0% |
| 08 | 1,481.79 | 1,052.87 | 1,040.98 |     0.71 |   59.3% |
| 09 | 1,446.49 | 1,019.05 | 1,024.75 |     0.70 |   57.9% |
| 10 | 1,448.34 | 1,022.68 | 1,023.53 |     0.71 |   57.9% |
| 11 | 1,442.65 | 1,019.55 | 1,018.87 |     0.71 |   57.7% |
| 12 | 1,454.99 | 1,024.81 | 1,031.37 |     0.70 |   58.2% |
| 13 | 1,440.50 | 1,010.40 | 1,024.71 |     0.70 |   57.6% |
| 14 | 1,460.01 | 1,028.81 | 1,033.86 |     0.70 |   58.4% |
| 15 | 1,504.30 | 1,078.26 | 1,047.22 |     0.72 |   60.2% |
| 16 | 1,508.31 | 1,082.22 | 1,049.12 |     0.72 |   60.3% |
| 17 | 1,511.24 | 1,085.84 | 1,049.52 |     0.72 |   60.4% |
| 18 | 1,408.05 |   991.06 |   999.01 |     0.70 |   56.3% |
| 19 | 1,416.11 | 1,007.50 |   993.03 |     0.71 |   56.6% |
| 20 | 1,450.43 | 1,045.59 | 1,003.20 |     0.72 |   58.0% |
| 21 | 1,459.80 | 1,042.18 | 1,021.04 |     0.71 |   58.4% |
| 22 | 1,471.99 | 1,046.67 | 1,033.89 |     0.71 |   58.9% |
| 23 | 1,462.78 | 1,038.02 | 1,029.50 |     0.71 |   58.5% |

---

# END OF REPORT

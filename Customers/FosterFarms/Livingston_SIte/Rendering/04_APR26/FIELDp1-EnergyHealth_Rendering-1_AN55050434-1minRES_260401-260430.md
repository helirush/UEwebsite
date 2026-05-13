# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 589,078.6 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $114,870.34 (Cost per period)
- **Consumption Total Cost:** $202.92 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Rendering-1  
**Generated:** 2026-05-09 20:16:32  
**Data Source:** AN55050434-V-1minRES_43200CLP_260401-260430c.csv  

## Time Period

- **Period:** April 01, 2026 thru April 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 33,966

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

- **Transformer:** Rendering-1
- **Power Factor:** 0.823
- **Total Energy (Actual):** 589,078.65 kWh (per period), 1040.59 kW (per hour)
- **Total Waste (Actual):** 126,623.26 kWh (per period), 223.68 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Rendering-1_AN55050434-1minRES_260401-260430.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Rendering-1_AN55050434-1minRES_260401-260430.md


## UNITY MANAGEMENT Rendering-1 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 223.68 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Rendering-1 Utility Cost Offset:** $43.62/hour
- **Annual Offset Savings:** $382084/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 853,750 BTU/hr
- **Total Cooling kW No Longer Needed:** 74.76 kW
- **Cooling Energy Cost Avoided:** $14.58/hour
- **Annual Cooling Savings:** $127710/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 298.44 kW
- **CO2e Emissions Avoided:** 975.95 metric tons/year
- **Monthly CO2e Reduction:** 81.33 metric tons/month
- **Hourly CO2e Reduction:** 0.1114 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $37574/year

### Total Rendering-1 Unity Savings

- **Per Hour:** $62.48
- **Per Day:** $1499.64
- **Per Month:** $44989.14
- **Per Year:** $547368

### Rendering-1 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,054.3 kVAR Max (Avg: 718.0 kVAR/hr ; 516,969 kVAR/mo)
- **Max Harmonic Distortion:** 30.5% Max (range: 3.7% - 30.5%)
- **Max Amperage:** 1,998A Max (range: 1226A - 1998A)

---

# Rendering-1 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   273.01 |   262.89 |   284.73 |
| Line to Line Voltage (480v) |   472.87 |   455.33 |   493.17 |
| Current (AMPS) |  1543.62 |  1225.88 |  1997.99 |
| Phase Angle (degrees) |    34.62 |    27.75 |    46.69 |
| Total Harmonic Distortion (PCT) |    16.63 |     3.66 |    30.48 |

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
| THD Phase C (%) | 5.6% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 16.6% | Field-level stress indicator |
| Max Phase THD | 5.6% | Highest THD among all three phases |
| Min Phase THD | 5.5% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,268.24 kW
  - **Maximum Load:** 1,498.47 kVA
  - **Percentage of Capacity (MAX):** 59.9%
- **Average Load:** 1,264.27 kVA
  - **Percentage of Capacity (Avg):** 50.6%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,264.27 kVA
- **Average Power Factor (PF):** 0.823

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,264.27 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 472.87 V
- Average Current (Iavg_A): 1543.62 A
- Average kW (Psum_kW): 1040.59 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.00 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.823
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1264.27) and measured PF (0.823) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,264.27 |        50.6% | 715,701.91 kVA | 3,550,644.75 TOTAL-HEAT |
| kW | 1,040.59 |        41.6% | 589,078.65 kWh | 628,186.42 Load-Heat |
| kVAR |   718.01 |        28.7% | 406,467.18 kVARh | - |
| WASTE |   223.68 |         8.9% | 126,623.26 WASTE | 135,029.53 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,550,644.75
- **Load-Heat (BTU/hr):** 628,186.42
- **Field-Heat (BTU/hr):** 135,029.53
- **Load-Heat (BTU, period total):** 355,616,334.40
- **Field-Heat (BTU, period total):** 76,440,218.63

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 4 | 1,264.27 | 1,040.59 |   717.37 |     0.82 |   50.6% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,268.34 | 1,041.61 |   723.02 |     0.82 |   50.7% |
| 01 | 1,283.38 | 1,053.12 |   733.02 |     0.82 |   51.3% |
| 02 | 1,276.39 | 1,049.76 |   725.53 |     0.82 |   51.1% |
| 03 | 1,283.96 | 1,055.35 |   730.82 |     0.82 |   51.4% |
| 04 | 1,277.02 | 1,049.30 |   727.19 |     0.82 |   51.1% |
| 05 | 1,255.02 | 1,028.72 |   718.40 |     0.82 |   50.2% |
| 06 | 1,273.45 | 1,047.90 |   723.13 |     0.82 |   50.9% |
| 07 | 1,266.89 | 1,041.64 |   720.70 |     0.82 |   50.7% |
| 08 | 1,261.12 | 1,033.50 |   722.23 |     0.82 |   50.4% |
| 09 | 1,262.39 | 1,037.29 |   719.05 |     0.82 |   50.5% |
| 10 | 1,277.21 | 1,050.67 |   725.84 |     0.82 |   51.1% |
| 11 | 1,287.13 | 1,057.47 |   733.38 |     0.82 |   51.5% |
| 12 | 1,292.43 | 1,061.91 |   736.26 |     0.82 |   51.7% |
| 13 | 1,275.45 | 1,047.35 |   727.24 |     0.82 |   51.0% |
| 14 | 1,278.53 | 1,050.72 |   727.66 |     0.82 |   51.1% |
| 15 | 1,288.28 | 1,059.15 |   732.76 |     0.82 |   51.5% |
| 16 | 1,270.02 | 1,047.29 |   717.99 |     0.82 |   50.8% |
| 17 | 1,266.12 | 1,049.08 |   708.48 |     0.83 |   50.6% |
| 18 | 1,223.23 | 1,003.45 |   698.80 |     0.82 |   48.9% |
| 19 | 1,228.58 | 1,011.98 |   696.08 |     0.82 |   49.1% |
| 20 | 1,232.18 | 1,021.22 |   688.59 |     0.83 |   49.3% |
| 21 | 1,209.54 | 1,006.81 |   669.30 |     0.83 |   48.4% |
| 22 | 1,241.78 | 1,029.45 |   693.30 |     0.83 |   49.7% |
| 23 | 1,262.61 | 1,038.68 |   716.95 |     0.82 |   50.5% |

---

# END OF REPORT

# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 12,311.4 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $2,400.73 (Cost per period)
- **Consumption Total Cost:** $3.23 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** BNR-2  
**Generated:** 2026-08-02 19:06:19  
**Data Source:** AN55050299-V-1minRES_44640CLP_260701-260731c.csv  

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

- **Transformer:** BNR-2
- **Power Factor:** 0.964
- **Total Energy (Actual):** 12,311.45 kWh (per period), 16.55 kW (per hour)
- **Total Waste (Actual):** 459.66 kWh (per period), 0.62 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_BNR-2_AN55050299-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_BNR-2_AN55050299-1minRES_260701-260731.md


## UNITY MANAGEMENT BNR-2 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 0.62 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 0.28 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **BNR-2 Utility Cost Offset:** $0.12/hour
- **Annual Offset Savings:** $1055/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 1,041 BTU/hr
- **Total Cooling kW No Longer Needed:** 0.09 kW
- **Cooling Energy Cost Avoided:** $0.02/hour
- **Annual Cooling Savings:** $158/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 0.71 kW
- **CO2e Emissions Avoided:** 2.32 metric tons/year
- **Monthly CO2e Reduction:** 0.19 metric tons/month
- **Hourly CO2e Reduction:** 0.0003 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $88/year

### Total BNR-2 Unity Savings

- **Per Hour:** $0.15
- **Per Day:** $3.57
- **Per Month:** $107.02
- **Per Year:** $1302

### BNR-2 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 4.9 kVAR Max (Avg: 4.6 kVAR/hr ; 3,286 kVAR/mo)
- **Max Harmonic Distortion:** 32.8% Max (range: 3.8% - 32.8%)
- **Max Amperage:** 22A Max (range: 18A - 22A)

---

# BNR-2 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   279.12 |   269.44 |   288.38 |
| Line to Line Voltage (480v) |   483.44 |   466.68 |   499.49 |
| Current (AMPS) |    20.51 |    18.35 |    21.70 |
| Phase Angle (degrees) |    15.42 |    12.84 |    16.46 |
| Total Harmonic Distortion (PCT) |    17.70 |     3.76 |    32.76 |

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
| THD Phase A (%) | 5.9% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.9% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.9% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 17.7% | Field-level stress indicator |
| Max Phase THD | 5.9% | Highest THD among all three phases |
| Min Phase THD | 5.9% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 17.46 kW
  - **Maximum Load:** 18.07 kVA
  - **Percentage of Capacity (MAX):** 0.7%
- **Average Load:** 17.17 kVA
  - **Percentage of Capacity (Avg):** 0.7%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 17.17 kVA
- **Average Power Factor (PF):** 0.964

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 17.17 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 483.44 V
- Average Current (Iavg_A): 20.51 A
- Average kW (Psum_kW): 16.55 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.01 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.964
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (17.17) and measured PF (0.964) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |    17.17 |         0.7% | 12,771.10 kVA | 56,462.91 TOTAL-HEAT |
| kW |    16.55 |         0.7% | 12,311.45 kWh | 2,032.21 Load-Heat |
| kVAR |     4.56 |         0.2% | 3,395.49 kVARh | - |
| WASTE |     0.62 |         0.0% | 459.66 WASTE | 75.87 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 56,462.91
- **Load-Heat (BTU/hr):** 2,032.21
- **Field-Heat (BTU/hr):** 75.87
- **Load-Heat (BTU, period total):** 1,511,963.73
- **Field-Heat (BTU, period total):** 56,450.25

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 |    17.17 |    16.55 |     4.56 |     0.96 |    0.7% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |    17.25 |    16.61 |     4.63 |     0.96 |    0.7% |
| 01 |    17.27 |    16.64 |     4.63 |     0.96 |    0.7% |
| 02 |    17.29 |    16.66 |     4.63 |     0.96 |    0.7% |
| 03 |    17.30 |    16.67 |     4.62 |     0.96 |    0.7% |
| 04 |    17.31 |    16.68 |     4.61 |     0.96 |    0.7% |
| 05 |    17.31 |    16.69 |     4.60 |     0.96 |    0.7% |
| 06 |    17.28 |    16.66 |     4.60 |     0.96 |    0.7% |
| 07 |    17.25 |    16.64 |     4.57 |     0.96 |    0.7% |
| 08 |    17.21 |    16.61 |     4.53 |     0.97 |    0.7% |
| 09 |    17.19 |    16.59 |     4.51 |     0.97 |    0.7% |
| 10 |    17.11 |    16.51 |     4.49 |     0.96 |    0.7% |
| 11 |    17.12 |    16.52 |     4.49 |     0.96 |    0.7% |
| 12 |    17.10 |    16.50 |     4.48 |     0.96 |    0.7% |
| 13 |    17.15 |    16.55 |     4.49 |     0.97 |    0.7% |
| 14 |    17.14 |    16.54 |     4.50 |     0.96 |    0.7% |
| 15 |    17.09 |    16.49 |     4.50 |     0.96 |    0.7% |
| 16 |    17.04 |    16.42 |     4.52 |     0.96 |    0.7% |
| 17 |    17.02 |    16.40 |     4.56 |     0.96 |    0.7% |
| 18 |    17.03 |    16.40 |     4.59 |     0.96 |    0.7% |
| 19 |    17.04 |    16.41 |     4.58 |     0.96 |    0.7% |
| 20 |    17.06 |    16.43 |     4.57 |     0.96 |    0.7% |
| 21 |    17.09 |    16.46 |     4.58 |     0.96 |    0.7% |
| 22 |    17.15 |    16.52 |     4.61 |     0.96 |    0.7% |
| 23 |    17.18 |    16.55 |     4.62 |     0.96 |    0.7% |

---

# END OF REPORT

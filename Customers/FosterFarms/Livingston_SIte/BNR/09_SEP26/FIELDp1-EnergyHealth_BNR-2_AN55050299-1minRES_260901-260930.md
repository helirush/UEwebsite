# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 11,640.0 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $2,269.79 (Cost per period)
- **Consumption Total Cost:** $3.28 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** BNR-2  
**Generated:** 2026-10-08 00:55:43  
**Data Source:** AN55050299-V-260930.2359c.csv  

## Time Period

- **Period:** September 01, 2026 thru September 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 41,513

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

- **Transformer:** BNR-2
- **Power Factor:** 0.960
- **Total Energy (Actual):** 11,639.96 kWh (per period), 16.82 kW (per hour)
- **Total Waste (Actual):** 483.69 kWh (per period), 0.70 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_BNR-2_AN55050299-1minRES_260901-260930.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_BNR-2_AN55050299-1minRES_260901-260930.md


## UNITY MANAGEMENT BNR-2 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 0.70 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 0.32 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **BNR-2 Utility Cost Offset:** $0.14/hour
- **Annual Offset Savings:** $1194/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 1,190 BTU/hr
- **Total Cooling kW No Longer Needed:** 0.10 kW
- **Cooling Energy Cost Avoided:** $0.02/hour
- **Annual Cooling Savings:** $178/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 0.80 kW
- **CO2e Emissions Avoided:** 2.63 metric tons/year
- **Monthly CO2e Reduction:** 0.22 metric tons/month
- **Hourly CO2e Reduction:** 0.0003 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $100/year

### Total BNR-2 Unity Savings

- **Per Hour:** $0.17
- **Per Day:** $4.03
- **Per Month:** $120.98
- **Per Year:** $1472

### BNR-2 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 5.4 kVAR Max (Avg: 4.9 kVAR/hr ; 3,528 kVAR/mo)
- **Max Harmonic Distortion:** 32.4% Max (range: 3.0% - 32.4%)
- **Max Amperage:** 22A Max (range: 20A - 22A)

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
| Line to Neutral Voltage (277v) |   279.49 |   271.03 |   289.44 |
| Line to Line Voltage (480v) |   484.09 |   469.44 |   501.32 |
| Current (AMPS) |    20.91 |    19.64 |    22.15 |
| Phase Angle (degrees) |    16.23 |    13.34 |    17.82 |
| Total Harmonic Distortion (PCT) |    17.60 |     3.00 |    32.41 |

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
| Unity THD Composite (%) | 17.6% | Field-level stress indicator |
| Max Phase THD | 5.9% | Highest THD among all three phases |
| Min Phase THD | 5.9% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 17.74 kW
  - **Maximum Load:** 18.48 kVA
  - **Percentage of Capacity (MAX):** 0.7%
- **Average Load:** 17.52 kVA
  - **Percentage of Capacity (Avg):** 0.7%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 17.52 kVA
- **Average Power Factor (PF):** 0.960

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 17.53 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 484.09 V
- Average Current (Iavg_A): 20.91 A
- Average kW (Psum_kW): 16.82 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.01 kVA (0.1%)
- **Calculated PF (kW/kVA from averages):** 0.959
- **Power Factor Difference:** 0.001 (0.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (17.52) and measured PF (0.960) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |    17.52 |         0.7% | 12,123.66 kVA | 57,404.49 TOTAL-HEAT |
| kW |    16.82 |         0.7% | 11,639.96 kWh | 2,290.25 Load-Heat |
| kVAR |     4.90 |         0.2% | 3,390.33 kVARh | - |
| WASTE |     0.70 |         0.0% | 483.69 WASTE | 95.17 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 57,404.49
- **Load-Heat (BTU/hr):** 2,290.25
- **Field-Heat (BTU/hr):** 95.17
- **Load-Heat (BTU, period total):** 1,584,585.43
- **Field-Heat (BTU, period total):** 65,846.79

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 9 |    17.52 |    16.82 |     4.90 |     0.96 |    0.7% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |    17.59 |    16.88 |     4.94 |     0.96 |    0.7% |
| 01 |    17.58 |    16.87 |     4.94 |     0.96 |    0.7% |
| 02 |    17.56 |    16.85 |     4.93 |     0.96 |    0.7% |
| 03 |    17.56 |    16.86 |     4.91 |     0.96 |    0.7% |
| 04 |    17.57 |    16.87 |     4.91 |     0.96 |    0.7% |
| 05 |    17.58 |    16.89 |     4.89 |     0.96 |    0.7% |
| 06 |    17.57 |    16.88 |     4.89 |     0.96 |    0.7% |
| 07 |    17.55 |    16.85 |     4.90 |     0.96 |    0.7% |
| 08 |    17.56 |    16.86 |     4.89 |     0.96 |    0.7% |
| 09 |    17.58 |    16.88 |     4.88 |     0.96 |    0.7% |
| 10 |    17.59 |    16.90 |     4.87 |     0.96 |    0.7% |
| 11 |    17.57 |    16.88 |     4.86 |     0.96 |    0.7% |
| 12 |    17.55 |    16.87 |     4.84 |     0.96 |    0.7% |
| 13 |    17.51 |    16.83 |     4.83 |     0.96 |    0.7% |
| 14 |    17.51 |    16.83 |     4.85 |     0.96 |    0.7% |
| 15 |    17.44 |    16.75 |     4.85 |     0.96 |    0.7% |
| 16 |    17.44 |    16.75 |     4.86 |     0.96 |    0.7% |
| 17 |    17.44 |    16.73 |     4.91 |     0.96 |    0.7% |
| 18 |    17.45 |    16.73 |     4.95 |     0.96 |    0.7% |
| 19 |    17.43 |    16.72 |     4.92 |     0.96 |    0.7% |
| 20 |    17.44 |    16.73 |     4.92 |     0.96 |    0.7% |
| 21 |    17.46 |    16.75 |     4.92 |     0.96 |    0.7% |
| 22 |    17.49 |    16.78 |     4.94 |     0.96 |    0.7% |
| 23 |    17.54 |    16.83 |     4.94 |     0.96 |    0.7% |

---

# END OF REPORT

# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 11,903.0 kWh (Usage per period)
- **Consumption Cost per unit:** $0.120/kWh (Cost per kWh)
- **Consumption Total Cost:** $1,428.36 (Cost per period)
- **Consumption Total Cost:** $2.00 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** BNR-2  
**Generated:** 2026-07-06 11:07:58  
**Data Source:** AN55050299-V-1minRES_43200CLP_260601-260630c.csv  

## Time Period

- **Period:** June 01, 2026 thru June 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 42,757

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
- **Power Factor:** 0.965
- **Total Energy (Actual):** 11,903.01 kWh (per period), 16.70 kW (per hour)
- **Total Waste (Actual):** 437.08 kWh (per period), 0.61 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_BNR-2_AN55050299-1minRES_260601-260630.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_BNR-2_AN55050299-1minRES_260601-260630.md


## UNITY MANAGEMENT BNR-2 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 0.61 kW/hr
- **Blended Electricity Rate:** $0.1200/kWh (all-inclusive)
- **BNR-2 Utility Cost Offset:** $0.07/hour
- **Annual Offset Savings:** $645/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 2,247 BTU/hr
- **Total Cooling kW No Longer Needed:** 0.20 kW
- **Cooling Energy Cost Avoided:** $0.02/hour
- **Annual Cooling Savings:** $208/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 0.81 kW
- **CO2e Emissions Avoided:** 2.65 metric tons/year
- **Monthly CO2e Reduction:** 0.22 metric tons/month
- **Hourly CO2e Reduction:** 0.0003 metric tons/hour
- **CO2e Value Rate:** $35/metric ton
- **Annual CO2e Value:** $93/year

### Total BNR-2 Unity Savings

- **Per Hour:** $0.11
- **Per Day:** $2.59
- **Per Month:** $77.70
- **Per Year:** $945

### BNR-2 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 5.2 kVAR Max (Avg: 4.6 kVAR/hr ; 3,289 kVAR/mo)
- **Max Harmonic Distortion:** 32.7% Max (range: 3.4% - 32.7%)
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
| Line to Neutral Voltage (277v) |   279.12 |   272.23 |   288.44 |
| Line to Line Voltage (480v) |   483.44 |   471.52 |   499.59 |
| Current (AMPS) |    20.68 |    19.82 |    21.54 |
| Phase Angle (degrees) |    15.29 |    13.34 |    17.45 |
| Total Harmonic Distortion (PCT) |    17.60 |     3.43 |    32.65 |

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

- **Maximum UtilityDemand:** 17.33 kW
  - **Maximum Load:** 18.04 kVA
  - **Percentage of Capacity (MAX):** 0.7%
- **Average Load:** 17.32 kVA
  - **Percentage of Capacity (Avg):** 0.7%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 17.32 kVA
- **Average Power Factor (PF):** 0.965

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 17.32 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 483.44 V
- Average Current (Iavg_A): 20.68 A
- Average kW (Psum_kW): 16.70 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.00 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.965
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (17.32) and measured PF (0.965) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |    17.32 |         0.7% | 12,340.09 kVA | 56,993.85 TOTAL-HEAT |
| kW |    16.70 |         0.7% | 11,903.01 kWh | 2,018.71 Load-Heat |
| kVAR |     4.57 |         0.2% | 3,255.19 kVARh | - |
| WASTE |     0.61 |         0.0% | 437.08 WASTE | 74.13 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 56,993.85
- **Load-Heat (BTU/hr):** 2,018.71
- **Field-Heat (BTU/hr):** 74.13
- **Load-Heat (BTU, period total):** 1,438,563.10
- **Field-Heat (BTU, period total):** 52,824.51

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 6 |    17.32 |    16.70 |     4.57 |     0.96 |    0.7% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |    17.38 |    16.76 |     4.62 |     0.96 |    0.7% |
| 01 |    17.39 |    16.77 |     4.62 |     0.96 |    0.7% |
| 02 |    17.38 |    16.76 |     4.61 |     0.96 |    0.7% |
| 03 |    17.38 |    16.76 |     4.59 |     0.96 |    0.7% |
| 04 |    17.39 |    16.77 |     4.58 |     0.96 |    0.7% |
| 05 |    17.36 |    16.75 |     4.56 |     0.96 |    0.7% |
| 06 |    17.32 |    16.71 |     4.55 |     0.96 |    0.7% |
| 07 |    17.29 |    16.69 |     4.52 |     0.97 |    0.7% |
| 08 |    17.28 |    16.69 |     4.50 |     0.97 |    0.7% |
| 09 |    17.35 |    16.75 |     4.50 |     0.97 |    0.7% |
| 10 |    17.35 |    16.76 |     4.49 |     0.97 |    0.7% |
| 11 |    17.34 |    16.75 |     4.50 |     0.97 |    0.7% |
| 12 |    17.34 |    16.75 |     4.49 |     0.97 |    0.7% |
| 13 |    17.34 |    16.75 |     4.50 |     0.97 |    0.7% |
| 14 |    17.32 |    16.72 |     4.52 |     0.97 |    0.7% |
| 15 |    17.29 |    16.69 |     4.53 |     0.97 |    0.7% |
| 16 |    17.26 |    16.65 |     4.54 |     0.96 |    0.7% |
| 17 |    17.24 |    16.62 |     4.60 |     0.96 |    0.7% |
| 18 |    17.23 |    16.59 |     4.64 |     0.96 |    0.7% |
| 19 |    17.20 |    16.56 |     4.64 |     0.96 |    0.7% |
| 20 |    17.21 |    16.58 |     4.63 |     0.96 |    0.7% |
| 21 |    17.25 |    16.62 |     4.61 |     0.96 |    0.7% |
| 22 |    17.31 |    16.68 |     4.62 |     0.96 |    0.7% |
| 23 |    17.38 |    16.75 |     4.63 |     0.96 |    0.7% |

---

# END OF REPORT

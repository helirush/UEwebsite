# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 625,942.5 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $122,058.78 (Cost per period)
- **Consumption Total Cost:** $164.54 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Deli F  
**Generated:** 2026-04-19 22:03:56  
**Data Source:** AN55050323-V-1minRES_44550CLP_260301-260331c.csv  

## Time Period

- **Period:** March 01, 2026 thru March 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,510

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

- **Transformer:** Deli F
- **Power Factor:** 0.866
- **Total Energy (Actual):** 625,942.47 kWh (per period), 843.78 kW (per hour)
- **Total Waste (Actual):** 78,408.26 kWh (per period), 105.70 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Deli-F_AN55050323-1minRES_260301-260331.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Deli-F_AN55050323-1minRES_260301-260331.md


## UNITY MANAGEMENT Deli F SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 105.70 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Deli F Utility Cost Offset:** $20.61/hour
- **Annual Offset Savings:** $180549/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 381,427 BTU/hr
- **Total Cooling kW No Longer Needed:** 33.42 kW
- **Cooling Energy Cost Avoided:** $6.52/hour
- **Annual Cooling Savings:** $57083/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 139.11 kW
- **CO2e Emissions Avoided:** 454.92 metric tons/year
- **Monthly CO2e Reduction:** 37.91 metric tons/month
- **Hourly CO2e Reduction:** 0.0519 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $17514/year

### Total Deli F Unity Savings

- **Per Hour:** $29.13
- **Per Day:** $699.03
- **Per Month:** $20970.90
- **Per Year:** $255146

### Deli F Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,578.0 kVAR Max (Avg: 435.4 kVAR/hr ; 313,459 kVAR/mo)
- **Max Harmonic Distortion:** 31.6% Max (range: 3.0% - 31.6%)
- **Max Amperage:** 2,449A Max (range: 14A - 2449A)

---

# Deli F DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   277.85 |   260.20 |   288.91 |
| Line to Line Voltage (480v) |   481.25 |   450.68 |   500.41 |
| Current (AMPS) |  1141.66 |    14.30 |  2448.82 |
| Phase Angle (degrees) |    29.64 |     0.00 |    80.56 |
| Total Harmonic Distortion (PCT) |    14.92 |     3.00 |    31.62 |

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
| THD Phase A (%) | 5.0% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.0% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.0% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 14.9% | Field-level stress indicator |
| Max Phase THD | 5.0% | Highest THD among all three phases |
| Min Phase THD | 5.0% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,727.02 kW
  - **Maximum Load:** 1,990.95 kVA
  - **Percentage of Capacity (MAX):** 79.6%
- **Average Load:** 949.47 kVA
  - **Percentage of Capacity (Avg):** 38.0%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 949.47 kVA
- **Average Power Factor (PF):** 0.866

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 951.63 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 481.25 V
- Average Current (Iavg_A): 1141.66 A
- Average kW (Psum_kW): 843.78 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 2.15 kVA (0.2%)
- **Calculated PF (kW/kVA from averages):** 0.887
- **Power Factor Difference:** 0.021 (2.4%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (949.47) and measured PF (0.866) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   949.47 |        38.0% | 704,350.73 kVA | 2,879,089.53 TOTAL-HEAT |
| kW |   843.78 |        33.8% | 625,942.47 kWh | 320,499.99 Load-Heat |
| kVAR |   435.36 |        17.4% | 322,964.36 kVARh | - |
| WASTE |   105.70 |         4.2% | 78,408.26 WASTE | 40,147.22 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,879,089.53
- **Load-Heat (BTU/hr):** 320,499.99
- **Field-Heat (BTU/hr):** 40,147.22
- **Load-Heat (BTU, period total):** 237,757,578.46
- **Field-Heat (BTU, period total):** 29,782,542.73

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 3 |   949.47 |   843.78 |   431.48 |     0.89 |   38.0% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   790.29 |   656.97 |   438.30 |     0.83 |   31.6% |
| 01 |   308.28 |   247.94 |   182.08 |     0.80 |   12.3% |
| 02 |    55.26 |    45.61 |    30.19 |     0.83 |    2.2% |
| 03 |    52.11 |    43.74 |    27.79 |     0.84 |    2.1% |
| 04 |    79.44 |    63.68 |    46.96 |     0.80 |    3.2% |
| 05 |   297.65 |   233.39 |   180.82 |     0.78 |   11.9% |
| 06 | 1,160.36 | 1,043.98 |   502.45 |     0.90 |   46.4% |
| 07 | 1,147.41 | 1,031.89 |   500.24 |     0.90 |   45.9% |
| 08 | 1,176.49 | 1,051.14 |   526.28 |     0.89 |   47.1% |
| 09 | 1,204.43 | 1,084.58 |   522.60 |     0.90 |   48.2% |
| 10 | 1,118.45 |   987.05 |   522.63 |     0.88 |   44.7% |
| 11 | 1,178.63 | 1,057.68 |   518.68 |     0.90 |   47.1% |
| 12 | 1,220.05 | 1,095.77 |   534.88 |     0.90 |   48.8% |
| 13 | 1,197.74 | 1,072.43 |   531.59 |     0.90 |   47.9% |
| 14 | 1,229.32 | 1,105.56 |   536.00 |     0.90 |   49.2% |
| 15 | 1,143.88 | 1,012.24 |   529.68 |     0.88 |   45.8% |
| 16 | 1,194.32 | 1,074.10 |   520.86 |     0.90 |   47.8% |
| 17 | 1,196.55 | 1,066.24 |   540.31 |     0.89 |   47.9% |
| 18 | 1,209.80 | 1,087.92 |   527.77 |     0.90 |   48.4% |
| 19 | 1,136.42 | 1,002.00 |   532.05 |     0.88 |   45.5% |
| 20 | 1,144.54 | 1,022.32 |   512.48 |     0.89 |   45.8% |
| 21 | 1,225.80 | 1,102.21 |   534.91 |     0.90 |   49.0% |
| 22 | 1,155.67 | 1,025.89 |   528.94 |     0.89 |   46.2% |
| 23 | 1,143.36 | 1,017.66 |   517.18 |     0.89 |   45.7% |

---

# END OF REPORT

# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 683,911.7 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $133,362.78 (Cost per period)
- **Consumption Total Cost:** $185.26 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL2-1South  
**Generated:** 2026-05-09 20:15:48  
**Data Source:** AN55050400-V-1minRES_43200CLP_260401-260430c.csv  

## Time Period

- **Period:** April 01, 2026 thru April 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,192

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

- **Transformer:** PL2-1South
- **Power Factor:** 0.864
- **Total Energy (Actual):** 683,911.69 kWh (per period), 950.05 kW (per hour)
- **Total Waste (Actual):** 103,161.80 kWh (per period), 143.31 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL2-1South_AN55050400-1minRES_260401-260430.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL2-1South_AN55050400-1minRES_260401-260430.md


## UNITY MANAGEMENT PL2-1South SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 143.31 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL2-1South Utility Cost Offset:** $27.94/hour
- **Annual Offset Savings:** $244797/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 519,295 BTU/hr
- **Total Cooling kW No Longer Needed:** 45.47 kW
- **Cooling Energy Cost Avoided:** $8.87/hour
- **Annual Cooling Savings:** $77676/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 188.78 kW
- **CO2e Emissions Avoided:** 617.34 metric tons/year
- **Monthly CO2e Reduction:** 51.45 metric tons/month
- **Hourly CO2e Reduction:** 0.0705 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $23768/year

### Total PL2-1South Unity Savings

- **Per Hour:** $39.53
- **Per Day:** $948.60
- **Per Month:** $28458.12
- **Per Year:** $346241

### PL2-1South Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,597.2 kVAR Max (Avg: 541.1 kVAR/hr ; 389,623 kVAR/mo)
- **Max Harmonic Distortion:** 31.5% Max (range: 3.1% - 31.5%)
- **Max Amperage:** 2,307A Max (range: 518A - 2307A)

---

# PL2-1South DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   279.00 |   268.50 |   289.44 |
| Line to Line Voltage (480v) |   483.25 |   465.05 |   501.33 |
| Current (AMPS) |  1309.36 |   518.18 |  2307.35 |
| Phase Angle (degrees) |    30.10 |    24.91 |    59.74 |
| Total Harmonic Distortion (PCT) |    15.66 |     3.07 |    31.50 |

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
| THD Phase A (%) | 5.2% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.2% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.2% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 15.7% | Field-level stress indicator |
| Max Phase THD | 5.2% | Highest THD among all three phases |
| Min Phase THD | 5.2% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,565.56 kW
  - **Maximum Load:** 1,849.59 kVA
  - **Percentage of Capacity (MAX):** 74.0%
- **Average Load:** 1,093.36 kVA
  - **Percentage of Capacity (Avg):** 43.7%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,093.36 kVA
- **Average Power Factor (PF):** 0.864

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,095.95 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 483.25 V
- Average Current (Iavg_A): 1309.36 A
- Average kW (Psum_kW): 950.05 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 2.59 kVA (0.2%)
- **Calculated PF (kW/kVA from averages):** 0.867
- **Power Factor Difference:** 0.002 (0.3%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1093.36) and measured PF (0.864) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,093.36 |        43.7% | 787,073.49 kVA | 3,241,716.69 TOTAL-HEAT |
| kW |   950.05 |        38.0% | 683,911.69 kWh | 424,892.15 Load-Heat |
| kVAR |   541.14 |        21.6% | 389,550.36 kVARh | - |
| WASTE |   143.31 |         5.7% | 103,161.80 WASTE | 64,091.08 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,241,716.69
- **Load-Heat (BTU/hr):** 424,892.15
- **Field-Heat (BTU/hr):** 64,091.08
- **Load-Heat (BTU, period total):** 305,865,692.13
- **Field-Heat (BTU, period total):** 46,137,034.11

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 4 | 1,093.36 |   950.05 |   539.43 |     0.87 |   43.7% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,180.85 | 1,031.50 |   573.60 |     0.87 |   47.2% |
| 01 | 1,142.42 |   994.30 |   561.48 |     0.87 |   45.7% |
| 02 | 1,165.43 | 1,018.36 |   565.36 |     0.87 |   46.6% |
| 03 | 1,145.35 |   998.22 |   560.21 |     0.87 |   45.8% |
| 04 | 1,160.02 | 1,014.71 |   560.75 |     0.87 |   46.4% |
| 05 | 1,142.05 | 1,000.24 |   550.03 |     0.88 |   45.7% |
| 06 | 1,130.11 |   989.13 |   545.36 |     0.88 |   45.2% |
| 07 | 1,143.00 | 1,001.89 |   548.83 |     0.88 |   45.7% |
| 08 | 1,161.58 | 1,021.50 |   551.59 |     0.88 |   46.5% |
| 09 | 1,178.30 | 1,033.88 |   563.93 |     0.88 |   47.1% |
| 10 | 1,141.17 |   995.81 |   556.41 |     0.87 |   45.6% |
| 11 | 1,166.05 | 1,020.24 |   563.52 |     0.87 |   46.6% |
| 12 | 1,147.20 | 1,004.12 |   553.50 |     0.88 |   45.9% |
| 13 | 1,101.62 |   961.65 |   535.84 |     0.87 |   44.1% |
| 14 | 1,014.33 |   875.55 |   510.70 |     0.86 |   40.6% |
| 15 |   952.95 |   815.61 |   492.04 |     0.86 |   38.1% |
| 16 |   956.66 |   812.99 |   503.17 |     0.85 |   38.3% |
| 17 |   944.62 |   802.62 |   496.94 |     0.85 |   37.8% |
| 18 |   839.77 |   710.20 |   447.08 |     0.85 |   33.6% |
| 19 |   876.21 |   739.50 |   468.31 |     0.84 |   35.0% |
| 20 | 1,048.16 |   903.01 |   530.48 |     0.86 |   41.9% |
| 21 | 1,134.13 |   985.64 |   559.58 |     0.87 |   45.4% |
| 22 | 1,165.32 | 1,014.62 |   571.85 |     0.87 |   46.6% |
| 23 | 1,203.48 | 1,056.12 |   575.71 |     0.88 |   48.1% |

---

# END OF REPORT

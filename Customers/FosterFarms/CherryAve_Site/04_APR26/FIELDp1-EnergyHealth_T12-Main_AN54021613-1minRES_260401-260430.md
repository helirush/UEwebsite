# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 774,709.4 kWh (Usage per period)
- **Consumption Cost per unit:** $0.350/kWh (Cost per kWh)
- **Consumption Total Cost:** $271,148.29 (Cost per period)
- **Consumption Total Cost:** $376.59 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T12 Main  
**Generated:** 2026-05-08 17:40:34  
**Data Source:** AN54021613-V-1minRES_43200CLP_260401-260430c.csv  

## Time Period

- **Period:** April 01, 2026 thru April 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,200

- **Dataset Coverage:** Complete month (100.0% of 30-day month)
- **Billing Scale Factor:** 1.000x (no normalization needed)

## Facility Information

- **Facility:** Foster Farms
- **Location:** Cherry Ave Facility
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** T12 Main
- **Power Factor:** 0.843
- **Total Energy (Actual):** 774,709.40 kWh (per period), 1075.99 kW (per hour)
- **Total Waste (Actual):** 138,275.66 kWh (per period), 192.05 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T12-Main_AN54021613-1minRES_260401-260430.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T12-Main_AN54021613-1minRES_260401-260430.md


## UNITY MANAGEMENT T12 Main SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 192.05 kW/hr
- **Blended Electricity Rate:** $0.3500/kWh (all-inclusive)
- **T12 Main Utility Cost Offset:** $67.22/hour
- **Annual Offset Savings:** $588824/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 768,202 BTU/hr
- **Total Cooling kW No Longer Needed:** 67.22 kW
- **Cooling Energy Cost Avoided:** $23.53/hour
- **Annual Cooling Savings:** $206111/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 259.27 kW
- **CO2e Emissions Avoided:** 847.87 metric tons/year
- **Monthly CO2e Reduction:** 70.66 metric tons/month
- **Hourly CO2e Reduction:** 0.0968 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $32643/year

### Total T12 Main Unity Savings

- **Per Hour:** $94.47
- **Per Day:** $2267.34
- **Per Month:** $68020.12
- **Per Year:** $827578

### T12 Main Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,080.4 kVAR Max (Avg: 670.9 kVAR/hr ; 483,081 kVAR/mo)
- **Max Harmonic Distortion:** 32.4% Max (range: 3.0% - 32.4%)
- **Max Amperage:** 2,973A Max (range: 0A - 2973A)

---

# T12 Main DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   268.35 |     0.00 |   285.87 |
| Line to Line Voltage (480v) |   464.80 |     0.00 |   495.15 |
| Current (AMPS) |  1587.34 |     0.00 |  2972.74 |
| Phase Angle (degrees) |    32.45 |    24.49 |    90.00 |
| Total Harmonic Distortion (PCT) |    16.07 |     3.00 |    32.39 |

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
| THD Phase A (%) | 5.4% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.4% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.4% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 16.1% | Field-level stress indicator |
| Max Phase THD | 5.4% | Highest THD among all three phases |
| Min Phase THD | 5.4% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,578.57 kW
  - **Maximum Load:** 1,862.42 kVA
  - **Percentage of Capacity (MAX):** 74.5%
- **Average Load:** 1,268.03 kVA
  - **Percentage of Capacity (Avg):** 50.7%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,268.03 kVA
- **Average Power Factor (PF):** 0.843

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,277.89 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 464.80 V
- Average Current (Iavg_A): 1587.34 A
- Average kW (Psum_kW): 1075.99 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 9.86 kVA (0.8%)
- **Calculated PF (kW/kVA from averages):** 0.842
- **Power Factor Difference:** 0.001 (0.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1268.03) and measured PF (0.843) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,268.03 |        50.7% | 912,985.06 kVA | 3,671,414.54 TOTAL-HEAT |
| kW | 1,075.99 |        43.0% | 774,709.40 kWh | 556,052.13 Load-Heat |
| kVAR |   670.95 |        26.8% | 483,080.81 kVARh | - |
| WASTE |   192.05 |         7.7% | 138,275.66 WASTE | 99,248.15 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,671,414.54
- **Load-Heat (BTU/hr):** 556,052.13
- **Field-Heat (BTU/hr):** 99,248.15
- **Load-Heat (BTU, period total):** 400,357,531.86
- **Field-Heat (BTU, period total):** 71,458,670.96

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 4 | 1,268.03 | 1,075.99 |   669.36 |     0.85 |   50.7% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,348.84 | 1,138.03 |   723.13 |     0.84 |   54.0% |
| 01 | 1,380.38 | 1,164.44 |   740.28 |     0.84 |   55.2% |
| 02 | 1,402.27 | 1,187.92 |   743.72 |     0.85 |   56.1% |
| 03 | 1,378.71 | 1,166.92 |   733.21 |     0.85 |   55.1% |
| 04 | 1,379.27 | 1,170.97 |   728.01 |     0.85 |   55.2% |
| 05 | 1,348.46 | 1,146.32 |   709.27 |     0.85 |   53.9% |
| 06 | 1,356.13 | 1,153.09 |   713.01 |     0.85 |   54.2% |
| 07 | 1,337.54 | 1,134.41 |   707.77 |     0.85 |   53.5% |
| 08 | 1,333.21 | 1,132.24 |   703.13 |     0.85 |   53.3% |
| 09 | 1,294.65 | 1,102.61 |   677.49 |     0.85 |   51.8% |
| 10 | 1,348.36 | 1,147.95 |   706.47 |     0.85 |   53.9% |
| 11 | 1,344.29 | 1,142.88 |   707.01 |     0.85 |   53.8% |
| 12 | 1,317.77 | 1,121.05 |   691.95 |     0.85 |   52.7% |
| 13 | 1,296.77 | 1,103.94 |   679.72 |     0.85 |   51.9% |
| 14 | 1,168.04 |   998.24 |   605.10 |     0.85 |   46.7% |
| 15 | 1,159.75 | 1,006.79 |   573.20 |     0.87 |   46.4% |
| 16 | 1,188.33 | 1,035.23 |   580.95 |     0.87 |   47.5% |
| 17 | 1,092.08 |   943.88 |   546.82 |     0.86 |   43.7% |
| 18 |   988.48 |   842.60 |   515.02 |     0.85 |   39.5% |
| 19 |   923.91 |   781.12 |   492.04 |     0.85 |   37.0% |
| 20 | 1,165.07 |   963.82 |   653.18 |     0.83 |   46.6% |
| 21 | 1,279.15 | 1,066.08 |   705.95 |     0.83 |   51.2% |
| 22 | 1,279.33 | 1,064.94 |   708.12 |     0.83 |   51.2% |
| 23 | 1,322.03 | 1,108.17 |   720.09 |     0.84 |   52.9% |

---

# END OF REPORT

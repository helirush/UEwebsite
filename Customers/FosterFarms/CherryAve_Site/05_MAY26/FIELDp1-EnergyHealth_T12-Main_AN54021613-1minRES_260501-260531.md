# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 765,079.1 kWh (Usage per period)
- **Consumption Cost per unit:** $0.350/kWh (Cost per kWh)
- **Consumption Total Cost:** $267,777.67 (Cost per period)
- **Consumption Total Cost:** $359.92 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T12 Main  
**Generated:** 2026-07-10 12:10:46  
**Data Source:** AN54021613-V-1minRES_44640CLP_260501-260531c.csv  

## Time Period

- **Period:** May 01, 2026 thru May 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,640

- **Dataset Coverage:** Complete month (100.0% of 31-day month)
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
- **Power Factor:** 0.839
- **Total Energy (Actual):** 765,079.06 kWh (per period), 1028.33 kW (per hour)
- **Total Waste (Actual):** 138,629.64 kWh (per period), 186.33 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T12-Main_AN54021613-1minRES_260501-260531.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T12-Main_AN54021613-1minRES_260501-260531.md


## UNITY MANAGEMENT T12 Main SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 186.33 kW/hr
- **Blended Electricity Rate:** $0.3500/kWh (all-inclusive)
- **T12 Main Utility Cost Offset:** $65.22/hour
- **Annual Offset Savings:** $571288/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 738,614 BTU/hr
- **Total Cooling kW No Longer Needed:** 64.63 kW
- **Cooling Energy Cost Avoided:** $22.62/hour
- **Annual Cooling Savings:** $198152/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 250.96 kW
- **CO2e Emissions Avoided:** 820.68 metric tons/year
- **Monthly CO2e Reduction:** 68.39 metric tons/month
- **Hourly CO2e Reduction:** 0.0937 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $31596/year

### Total T12 Main Unity Savings

- **Per Hour:** $91.44
- **Per Day:** $2194.62
- **Per Month:** $65838.59
- **Per Year:** $801036

### T12 Main Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,085.2 kVAR Max (Avg: 646.5 kVAR/hr ; 465,466 kVAR/mo)
- **Max Harmonic Distortion:** 30.5% Max (range: 3.0% - 30.5%)
- **Max Amperage:** 2,562A Max (range: 439A - 2562A)

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
| Line to Neutral Voltage (277v) |   269.06 |   255.18 |   285.98 |
| Line to Line Voltage (480v) |   466.02 |   441.99 |   495.33 |
| Current (AMPS) |  1520.49 |   439.22 |  2561.54 |
| Phase Angle (degrees) |    32.80 |    25.31 |    46.69 |
| Total Harmonic Distortion (PCT) |    15.78 |     3.00 |    30.47 |

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

- **Maximum UtilityDemand:** 1,635.39 kW
  - **Maximum Load:** 1,903.16 kVA
  - **Percentage of Capacity (MAX):** 76.1%
- **Average Load:** 1,214.66 kVA
  - **Percentage of Capacity (Avg):** 48.6%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,214.66 kVA
- **Average Power Factor (PF):** 0.839

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,227.29 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 466.02 V
- Average Current (Iavg_A): 1520.49 A
- Average kW (Psum_kW): 1028.33 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 12.63 kVA (1.0%)
- **Calculated PF (kW/kVA from averages):** 0.838
- **Power Factor Difference:** 0.001 (0.2%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1214.66) and measured PF (0.839) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,214.66 |        48.6% | 903,708.71 kVA | 3,508,815.06 TOTAL-HEAT |
| kW | 1,028.33 |        41.1% | 765,079.06 kWh | 538,255.06 Load-Heat |
| kVAR |   646.48 |        25.9% | 480,981.76 kVARh | - |
| WASTE |   186.33 |         7.5% | 138,629.64 WASTE | 97,529.93 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,508,815.06
- **Load-Heat (BTU/hr):** 538,255.06
- **Field-Heat (BTU/hr):** 97,529.93
- **Load-Heat (BTU, period total):** 400,461,761.25
- **Field-Heat (BTU, period total):** 72,562,266.81

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 5 | 1,214.66 | 1,028.33 |   644.40 |     0.85 |   48.6% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,307.53 | 1,099.25 |   706.61 |     0.84 |   52.3% |
| 01 | 1,331.84 | 1,119.88 |   719.24 |     0.84 |   53.3% |
| 02 | 1,354.00 | 1,145.91 |   719.75 |     0.85 |   54.2% |
| 03 | 1,333.87 | 1,127.24 |   711.73 |     0.85 |   53.4% |
| 04 | 1,329.89 | 1,125.05 |   707.71 |     0.85 |   53.2% |
| 05 | 1,303.85 | 1,105.67 |   689.82 |     0.85 |   52.2% |
| 06 | 1,307.20 | 1,107.81 |   692.35 |     0.85 |   52.3% |
| 07 | 1,284.20 | 1,086.44 |   683.67 |     0.85 |   51.4% |
| 08 | 1,303.06 | 1,105.76 |   688.35 |     0.85 |   52.1% |
| 09 | 1,256.38 | 1,070.35 |   656.37 |     0.85 |   50.3% |
| 10 | 1,306.45 | 1,111.50 |   685.45 |     0.85 |   52.3% |
| 11 | 1,297.88 | 1,103.68 |   681.75 |     0.85 |   51.9% |
| 12 | 1,271.55 | 1,082.01 |   666.77 |     0.85 |   50.9% |
| 13 | 1,158.30 |   988.37 |   602.50 |     0.85 |   46.3% |
| 14 | 1,016.95 |   874.10 |   517.33 |     0.86 |   40.7% |
| 15 | 1,093.34 |   949.17 |   539.49 |     0.87 |   43.7% |
| 16 | 1,132.63 |   980.27 |   564.08 |     0.87 |   45.3% |
| 17 | 1,020.48 |   873.30 |   524.99 |     0.86 |   40.8% |
| 18 |   931.03 |   787.18 |   494.96 |     0.85 |   37.2% |
| 19 |   901.38 |   755.25 |   489.97 |     0.84 |   36.1% |
| 20 | 1,133.04 |   930.94 |   644.02 |     0.82 |   45.3% |
| 21 | 1,234.60 | 1,025.59 |   685.58 |     0.83 |   49.4% |
| 22 | 1,245.29 | 1,035.58 |   690.54 |     0.83 |   49.8% |
| 23 | 1,297.16 | 1,089.68 |   702.50 |     0.84 |   51.9% |

---

# END OF REPORT

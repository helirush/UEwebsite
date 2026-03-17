# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 689,210.6 kWh (Usage per period)
- **Consumption Cost per unit:** $0.333/kWh (Cost per kWh)
- **Consumption Total Cost:** $229,736.88 (Cost per period)
- **Consumption Total Cost:** $341.87 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T12 Main  
**Generated:** 2026-03-14 12:39:42  
**Data Source:** AN54021613-V-1minRES_40320CLP_260201-260228c.csv  

## Time Period

- **Period:** February 01, 2026 thru February 28, 2026
- **Number of Days:** 28 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 40,320

- **Dataset Coverage:** Complete month (100.0% of 28-day month)
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
- **Total Energy (Actual):** 689,210.64 kWh (per period), 1025.61 kW (per hour)
- **Total Waste (Actual):** 128,771.08 kWh (per period), 191.62 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T12-Main_AN54021613-1minRES_260201-260228.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T12-Main_AN54021613-1minRES_260201-260228.md


## UNITY MANAGEMENT T12 Main SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 191.62 kW/hr
- **Blended Electricity Rate:** $0.3333/kWh (all-inclusive)
- **T12 Main Utility Cost Offset:** $63.87/hour
- **Annual Offset Savings:** $559541/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 752,606 BTU/hr
- **Total Cooling kW No Longer Needed:** 65.98 kW
- **Cooling Energy Cost Avoided:** $21.99/hour
- **Annual Cooling Savings:** $192671/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 257.61 kW
- **CO2e Emissions Avoided:** 842.42 metric tons/year
- **Monthly CO2e Reduction:** 70.20 metric tons/month
- **Hourly CO2e Reduction:** 0.0962 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $32433/year

### Total T12 Main Unity Savings

- **Per Hour:** $89.57
- **Per Day:** $2149.71
- **Per Month:** $64491.39
- **Per Year:** $784645

### T12 Main Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,102.6 kVAR Max (Avg: 655.6 kVAR/hr ; 472,016 kVAR/mo)
- **Max Harmonic Distortion:** 30.6% Max (range: 3.6% - 30.6%)
- **Max Amperage:** 2,357A Max (range: 444A - 2357A)

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
| Line to Neutral Voltage (277v) |   270.11 |   253.33 |   285.35 |
| Line to Line Voltage (480v) |   467.85 |   438.78 |   494.24 |
| Current (AMPS) |  1513.42 |   444.08 |  2356.64 |
| Phase Angle (degrees) |    32.92 |    25.31 |    42.69 |
| Total Harmonic Distortion (PCT) |    16.14 |     3.64 |    30.63 |

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

- **Maximum UtilityDemand:** 1,500.08 kW
  - **Maximum Load:** 1,807.77 kVA
  - **Percentage of Capacity (MAX):** 72.3%
- **Average Load:** 1,217.23 kVA
  - **Percentage of Capacity (Avg):** 48.7%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,217.23 kVA
- **Average Power Factor (PF):** 0.839

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,226.39 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 467.85 V
- Average Current (Iavg_A): 1513.42 A
- Average kW (Psum_kW): 1025.61 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 9.16 kVA (0.8%)
- **Calculated PF (kW/kVA from averages):** 0.836
- **Power Factor Difference:** 0.002 (0.3%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1217.23) and measured PF (0.839) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,217.23 |        48.7% | 817,981.72 kVA | 3,499,530.59 TOTAL-HEAT |
| kW | 1,025.61 |        41.0% | 689,210.64 kWh | 550,914.94 Load-Heat |
| kVAR |   655.58 |        26.2% | 440,548.29 kVARh | - |
| WASTE |   191.62 |         7.7% | 128,771.08 WASTE | 102,932.12 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,499,530.59
- **Load-Heat (BTU/hr):** 550,914.94
- **Field-Heat (BTU/hr):** 102,932.12
- **Load-Heat (BTU, period total):** 370,214,839.91
- **Field-Heat (BTU, period total):** 69,170,387.21

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 2 | 1,217.23 | 1,025.61 |   654.06 |     0.84 |   48.7% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,308.83 | 1,091.79 |   720.86 |     0.83 |   52.4% |
| 01 | 1,344.68 | 1,124.52 |   736.21 |     0.84 |   53.8% |
| 02 | 1,363.94 | 1,145.77 |   739.10 |     0.84 |   54.6% |
| 03 | 1,346.70 | 1,128.08 |   734.94 |     0.84 |   53.9% |
| 04 | 1,325.32 | 1,113.16 |   718.61 |     0.84 |   53.0% |
| 05 | 1,313.74 | 1,104.02 |   711.45 |     0.84 |   52.5% |
| 06 | 1,315.59 | 1,107.78 |   708.97 |     0.84 |   52.6% |
| 07 | 1,284.55 | 1,079.96 |   694.81 |     0.84 |   51.4% |
| 08 | 1,279.02 | 1,075.96 |   690.66 |     0.84 |   51.2% |
| 09 | 1,231.63 | 1,044.22 |   651.90 |     0.85 |   49.3% |
| 10 | 1,308.99 | 1,106.46 |   698.62 |     0.85 |   52.4% |
| 11 | 1,268.03 | 1,071.25 |   677.65 |     0.84 |   50.7% |
| 12 | 1,224.04 | 1,036.27 |   650.60 |     0.85 |   49.0% |
| 13 | 1,127.92 |   954.57 |   599.78 |     0.85 |   45.1% |
| 14 | 1,050.42 |   894.78 |   548.34 |     0.85 |   42.0% |
| 15 | 1,125.76 |   968.91 |   570.98 |     0.86 |   45.0% |
| 16 | 1,126.10 |   972.86 |   564.84 |     0.86 |   45.0% |
| 17 | 1,074.31 |   927.76 |   539.91 |     0.86 |   43.0% |
| 18 |   976.85 |   832.41 |   509.64 |     0.85 |   39.1% |
| 19 |   911.78 |   770.11 |   486.79 |     0.84 |   36.5% |
| 20 | 1,167.17 |   966.77 |   652.37 |     0.83 |   46.7% |
| 21 | 1,257.78 | 1,042.30 |   703.00 |     0.83 |   50.3% |
| 22 | 1,214.88 | 1,001.44 |   687.07 |     0.82 |   48.6% |
| 23 | 1,265.60 | 1,053.53 |   700.33 |     0.83 |   50.6% |

---

# END OF REPORT

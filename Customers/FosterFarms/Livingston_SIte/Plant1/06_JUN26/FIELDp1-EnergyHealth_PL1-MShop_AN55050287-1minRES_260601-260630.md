# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 245,715.4 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $47,914.51 (Cost per period)
- **Consumption Total Cost:** $66.55 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL1-MShop  
**Generated:** 2026-07-07 04:14:59  
**Data Source:** AN55050287-V-260630.2359c.csv  

## Time Period

- **Period:** June 01, 2026 thru June 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,200

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

- **Transformer:** PL1-MShop
- **Power Factor:** 0.866
- **Total Energy (Actual):** 245,715.43 kWh (per period), 341.27 kW (per hour)
- **Total Waste (Actual):** 36,355.18 kWh (per period), 50.49 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL1-MShop_AN55050287-1minRES_260601-260630.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL1-MShop_AN55050287-1minRES_260601-260630.md


## UNITY MANAGEMENT PL1-MShop SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 50.49 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL1-MShop Utility Cost Offset:** $9.85/hour
- **Annual Offset Savings:** $86253/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 181,279 BTU/hr
- **Total Cooling kW No Longer Needed:** 15.94 kW
- **Cooling Energy Cost Avoided:** $3.11/hour
- **Annual Cooling Savings:** $27235/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 66.44 kW
- **CO2e Emissions Avoided:** 217.26 metric tons/year
- **Monthly CO2e Reduction:** 18.11 metric tons/month
- **Hourly CO2e Reduction:** 0.0248 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $8256/year

### Total PL1-MShop Unity Savings

- **Per Hour:** $13.90
- **Per Day:** $333.55
- **Per Month:** $10006.36
- **Per Year:** $121744

### PL1-MShop Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 2,265.0 kVAR Max (Avg: 192.4 kVAR/hr ; 138,520 kVAR/mo)
- **Max Harmonic Distortion:** 28.5% Max (range: 3.2% - 28.5%)
- **Max Amperage:** 3,227A Max (range: 0A - 3227A)

---

# PL1-MShop DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   282.36 |     0.00 |   293.89 |
| Line to Line Voltage (480v) |   489.06 |     0.00 |   509.03 |
| Current (AMPS) |   463.46 |     0.00 |  3227.16 |
| Phase Angle (degrees) |    29.85 |    19.95 |    90.00 |
| Total Harmonic Distortion (PCT) |    13.96 |     3.16 |    28.52 |

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
| THD Phase A (%) | 4.7% | IEEE standard per-phase calculation |
| THD Phase B (%) | 4.7% | IEEE standard per-phase calculation |
| THD Phase C (%) | 4.7% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 14.0% | Field-level stress indicator |
| Max Phase THD | 4.7% | Highest THD among all three phases |
| Min Phase THD | 4.7% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,044.01 kW
  - **Maximum Load:** 2,494.02 kVA
  - **Percentage of Capacity (MAX):** 99.8%
- **Average Load:** 391.76 kVA
  - **Percentage of Capacity (Avg):** 15.7%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 391.76 kVA
- **Average Power Factor (PF):** 0.866

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 392.59 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 489.06 V
- Average Current (Iavg_A): 463.46 A
- Average kW (Psum_kW): 341.27 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.82 kVA (0.2%)
- **Calculated PF (kW/kVA from averages):** 0.869
- **Power Factor Difference:** 0.004 (0.4%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (391.76) and measured PF (0.866) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   391.76 |        15.7% | 282,070.61 kVA | 1,164,466.56 TOTAL-HEAT |
| kW |   341.27 |        13.7% | 245,715.43 kWh | 150,084.39 Load-Heat |
| kVAR |   192.39 |         7.7% | 138,519.88 kVARh | - |
| WASTE |    50.49 |         2.0% | 36,355.18 WASTE | 22,205.95 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,164,466.56
- **Load-Heat (BTU/hr):** 150,084.39
- **Field-Heat (BTU/hr):** 22,205.95
- **Load-Heat (BTU, period total):** 108,060,760.20
- **Field-Heat (BTU, period total):** 15,988,286.89

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 6 |   391.76 |   341.27 |   191.05 |     0.87 |   15.7% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   408.56 |   359.90 |   192.36 |     0.88 |   16.3% |
| 01 |   406.61 |   354.94 |   197.08 |     0.87 |   16.3% |
| 02 |   433.06 |   379.73 |   206.83 |     0.88 |   17.3% |
| 03 |   423.75 |   369.63 |   205.86 |     0.87 |   17.0% |
| 04 |   422.85 |   371.79 |   200.43 |     0.88 |   16.9% |
| 05 |   421.69 |   370.21 |   200.93 |     0.88 |   16.9% |
| 06 |   416.61 |   364.73 |   200.35 |     0.88 |   16.7% |
| 07 |   436.14 |   380.13 |   212.49 |     0.87 |   17.4% |
| 08 |   447.58 |   389.84 |   218.11 |     0.87 |   17.9% |
| 09 |   433.77 |   376.92 |   213.66 |     0.87 |   17.4% |
| 10 |   426.17 |   370.14 |   210.17 |     0.87 |   17.0% |
| 11 |   462.09 |   402.55 |   225.18 |     0.87 |   18.5% |
| 12 |   453.44 |   395.32 |   220.97 |     0.87 |   18.1% |
| 13 |   445.59 |   389.00 |   215.93 |     0.87 |   17.8% |
| 14 |   406.22 |   352.46 |   201.02 |     0.87 |   16.2% |
| 15 |   360.43 |   310.04 |   182.77 |     0.86 |   14.4% |
| 16 |   323.64 |   276.15 |   167.66 |     0.85 |   12.9% |
| 17 |   276.94 |   236.23 |   143.62 |     0.85 |   11.1% |
| 18 |   244.33 |   206.61 |   129.74 |     0.85 |    9.8% |
| 19 |   272.09 |   234.09 |   137.16 |     0.86 |   10.9% |
| 20 |   351.30 |   308.21 |   167.19 |     0.88 |   14.1% |
| 21 |   355.93 |   311.45 |   170.49 |     0.88 |   14.2% |
| 22 |   371.50 |   326.19 |   176.21 |     0.88 |   14.9% |
| 23 |   402.07 |   354.27 |   188.97 |     0.88 |   16.1% |

---

# END OF REPORT

# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 662,769.3 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $129,240.01 (Cost per period)
- **Consumption Total Cost:** $173.77 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Rendering-2  
**Generated:** 2026-06-18 16:10:15  
**Data Source:** AN55050284-V-1minRES_44640CLP_260501-260531c.csv  

## Time Period

- **Period:** May 01, 2026 thru May 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,625

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

- **Transformer:** Rendering-2
- **Power Factor:** 0.734
- **Total Energy (Actual):** 662,769.30 kWh (per period), 890.80 kW (per hour)
- **Total Waste (Actual):** 251,844.00 kWh (per period), 338.50 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Rendering-2_AN55050284-1minRES_260501-260531.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Rendering-2_AN55050284-1minRES_260501-260531.md


## UNITY MANAGEMENT Rendering-2 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 338.50 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Rendering-2 Utility Cost Offset:** $66.01/hour
- **Annual Offset Savings:** $578293/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 1,269,011 BTU/hr
- **Total Cooling kW No Longer Needed:** 111.04 kW
- **Cooling Energy Cost Avoided:** $21.65/hour
- **Annual Cooling Savings:** $189676/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 445.48 kW
- **CO2e Emissions Avoided:** 1456.81 metric tons/year
- **Monthly CO2e Reduction:** 121.40 metric tons/month
- **Hourly CO2e Reduction:** 0.1663 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $56087/year

### Total Rendering-2 Unity Savings

- **Per Hour:** $93.27
- **Per Day:** $2238.52
- **Per Month:** $67155.73
- **Per Year:** $817061

### Rendering-2 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,608.2 kVAR Max (Avg: 841.4 kVAR/hr ; 605,790 kVAR/mo)
- **Max Harmonic Distortion:** 31.0% Max (range: 3.0% - 31.0%)
- **Max Amperage:** 2,596A Max (range: 355A - 2596A)

---

# Rendering-2 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   273.07 |   260.47 |   283.02 |
| Line to Line Voltage (480v) |   472.96 |   451.14 |   490.20 |
| Current (AMPS) |  1501.45 |   355.04 |  2596.13 |
| Phase Angle (degrees) |    42.41 |    22.18 |    64.28 |
| Total Harmonic Distortion (PCT) |    15.70 |     3.00 |    31.05 |

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

- **Maximum UtilityDemand:** 1,446.20 kW
  - **Maximum Load:** 2,162.86 kVA
  - **Percentage of Capacity (MAX):** 88.7%
- **Average Load:** 1,229.40 kVA
  - **Percentage of Capacity (Avg):** 49.2%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,229.40 kVA
- **Average Power Factor (PF):** 0.734

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,229.98 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 472.96 V
- Average Current (Iavg_A): 1501.45 A
- Average kW (Psum_kW): 891.12 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.58 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.724
- **Power Factor Difference:** 0.010 (1.3%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1229.40) and measured PF (0.734) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,229.40 |        49.2% | 914,673.60 kVA | 3,040,622.47 TOTAL-HEAT |
| kW |   891.12 |        35.6% | 662,769.30 kWh | 829,757.43 Load-Heat |
| kVAR |   841.38 |        33.7% | 625,773.10 kVARh | - |
| WASTE |   338.50 |        13.5% | 251,844.00 WASTE | 311,415.38 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,040,622.47
- **Load-Heat (BTU/hr):** 829,757.43
- **Field-Heat (BTU/hr):** 311,415.38
- **Load-Heat (BTU, period total):** 617,132,085.60
- **Field-Heat (BTU, period total):** 231,615,191.32

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 5 | 1,229.40 |   890.80 |   836.47 |     0.73 |   49.2% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,250.83 |   904.59 |   861.40 |     0.72 |   50.0% |
| 01 | 1,253.01 |   909.30 |   859.28 |     0.73 |   50.1% |
| 02 | 1,269.12 |   922.46 |   868.65 |     0.73 |   50.8% |
| 03 | 1,247.85 |   908.43 |   852.18 |     0.73 |   49.9% |
| 04 | 1,248.17 |   913.30 |   846.51 |     0.73 |   49.9% |
| 05 | 1,227.81 |   894.07 |   836.81 |     0.73 |   49.1% |
| 06 | 1,233.80 |   899.60 |   839.93 |     0.73 |   49.4% |
| 07 | 1,222.20 |   893.49 |   828.73 |     0.73 |   48.9% |
| 08 | 1,236.67 |   905.67 |   836.40 |     0.73 |   49.5% |
| 09 | 1,218.05 |   886.57 |   828.82 |     0.73 |   48.7% |
| 10 | 1,208.29 |   881.01 |   821.05 |     0.73 |   48.3% |
| 11 | 1,198.61 |   870.35 |   818.38 |     0.73 |   47.9% |
| 12 | 1,194.89 |   868.86 |   814.57 |     0.73 |   47.8% |
| 13 | 1,170.82 |   846.69 |   803.48 |     0.72 |   46.8% |
| 14 | 1,175.47 |   854.55 |   801.66 |     0.73 |   47.0% |
| 15 | 1,187.67 |   865.30 |   806.76 |     0.73 |   47.5% |
| 16 | 1,196.75 |   875.41 |   808.97 |     0.73 |   47.9% |
| 17 | 1,212.92 |   883.06 |   824.22 |     0.73 |   48.5% |
| 18 | 1,179.47 |   851.52 |   809.86 |     0.72 |   47.2% |
| 19 | 1,232.17 |   886.25 |   850.64 |     0.72 |   49.3% |
| 20 | 1,266.66 |   922.47 |   864.11 |     0.73 |   50.7% |
| 21 | 1,264.84 |   920.20 |   864.36 |     0.73 |   50.6% |
| 22 | 1,264.95 |   917.73 |   867.11 |     0.73 |   50.6% |
| 23 | 1,252.46 |   905.96 |   861.39 |     0.72 |   50.1% |

---

# END OF REPORT

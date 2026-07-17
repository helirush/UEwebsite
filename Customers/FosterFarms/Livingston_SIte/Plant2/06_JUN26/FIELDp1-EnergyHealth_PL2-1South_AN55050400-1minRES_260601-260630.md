# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 712,489.5 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $138,935.46 (Cost per period)
- **Consumption Total Cost:** $193.02 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL2-1South  
**Generated:** 2026-07-07 05:23:51  
**Data Source:** AN55050400-V-260630.2359c.csv  

## Time Period

- **Period:** June 01, 2026 thru June 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,188

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
- **Power Factor:** 0.863
- **Total Energy (Actual):** 712,489.55 kWh (per period), 989.84 kW (per hour)
- **Total Waste (Actual):** 107,655.10 kWh (per period), 149.56 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL2-1South_AN55050400-1minRES_260601-260630.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL2-1South_AN55050400-1minRES_260601-260630.md


## UNITY MANAGEMENT PL2-1South SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 149.56 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL2-1South Utility Cost Offset:** $29.16/hour
- **Annual Offset Savings:** $255483/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 541,780 BTU/hr
- **Total Cooling kW No Longer Needed:** 47.65 kW
- **Cooling Energy Cost Avoided:** $9.29/hour
- **Annual Cooling Savings:** $81398/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 197.21 kW
- **CO2e Emissions Avoided:** 644.92 metric tons/year
- **Monthly CO2e Reduction:** 53.74 metric tons/month
- **Hourly CO2e Reduction:** 0.0736 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $24507/year

### Total PL2-1South Unity Savings

- **Per Hour:** $41.25
- **Per Day:** $990.10
- **Per Month:** $29703.06
- **Per Year:** $361387

### PL2-1South Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 2,037.3 kVAR Max (Avg: 564.3 kVAR/hr ; 406,310 kVAR/mo)
- **Max Harmonic Distortion:** 32.7% Max (range: 3.1% - 32.7%)
- **Max Amperage:** 3,163A Max (range: 293A - 3163A)

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
| Line to Neutral Voltage (277v) |   278.52 |   261.91 |   288.98 |
| Line to Line Voltage (480v) |   482.41 |   453.63 |   500.52 |
| Current (AMPS) |  1368.24 |   292.69 |  3163.01 |
| Phase Angle (degrees) |    30.27 |    22.48 |    65.86 |
| Total Harmonic Distortion (PCT) |    15.60 |     3.14 |    32.71 |

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
| Unity THD Composite (%) | 15.6% | Field-level stress indicator |
| Max Phase THD | 5.2% | Highest THD among all three phases |
| Min Phase THD | 5.2% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,657.06 kW
  - **Maximum Load:** 2,479.04 kVA
  - **Percentage of Capacity (MAX):** 99.2%
- **Average Load:** 1,139.41 kVA
  - **Percentage of Capacity (Avg):** 45.6%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,139.41 kVA
- **Average Power Factor (PF):** 0.863

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,143.26 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 482.41 V
- Average Current (Iavg_A): 1368.24 A
- Average kW (Psum_kW): 989.84 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 3.85 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.866
- **Power Factor Difference:** 0.003 (0.4%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1139.41) and measured PF (0.863) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,139.41 |        45.6% | 820,144.65 kVA | 3,377,487.51 TOTAL-HEAT |
| kW |   989.84 |        39.6% | 712,489.55 kWh | 443,341.00 Load-Heat |
| kVAR |   564.32 |        22.6% | 406,196.85 kVARh | - |
| WASTE |   149.56 |         6.0% | 107,655.10 WASTE | 66,987.54 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,377,487.51
- **Load-Heat (BTU/hr):** 443,341.00
- **Field-Heat (BTU/hr):** 66,987.54
- **Load-Heat (BTU, period total):** 319,116,853.85
- **Field-Heat (BTU, period total):** 48,217,628.41

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 6 | 1,139.41 |   989.84 |   562.37 |     0.87 |   45.6% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,203.67 | 1,048.41 |   589.61 |     0.87 |   48.1% |
| 01 | 1,186.24 | 1,031.57 |   583.98 |     0.87 |   47.4% |
| 02 | 1,184.88 | 1,032.96 |   578.58 |     0.87 |   47.4% |
| 03 | 1,179.17 | 1,027.41 |   576.89 |     0.87 |   47.2% |
| 04 | 1,179.33 | 1,028.24 |   575.56 |     0.87 |   47.2% |
| 05 | 1,167.55 | 1,018.30 |   569.32 |     0.87 |   46.7% |
| 06 | 1,161.61 | 1,014.14 |   564.71 |     0.87 |   46.5% |
| 07 | 1,174.81 | 1,027.69 |   567.67 |     0.87 |   47.0% |
| 08 | 1,185.53 | 1,038.26 |   570.80 |     0.88 |   47.4% |
| 09 | 1,194.91 | 1,043.62 |   580.52 |     0.87 |   47.8% |
| 10 | 1,156.98 | 1,006.56 |   569.30 |     0.87 |   46.3% |
| 11 | 1,163.49 | 1,012.84 |   570.99 |     0.87 |   46.5% |
| 12 | 1,171.20 | 1,021.82 |   570.53 |     0.87 |   46.8% |
| 13 | 1,162.18 | 1,017.04 |   560.31 |     0.88 |   46.5% |
| 14 | 1,103.88 |   961.68 |   540.23 |     0.87 |   44.2% |
| 15 | 1,027.25 |   887.14 |   516.69 |     0.86 |   41.1% |
| 16 | 1,029.81 |   879.15 |   534.89 |     0.85 |   41.2% |
| 17 |   987.86 |   841.38 |   516.10 |     0.85 |   39.5% |
| 18 |   902.22 |   764.77 |   476.94 |     0.85 |   36.1% |
| 19 |   952.99 |   807.64 |   504.02 |     0.85 |   38.1% |
| 20 | 1,164.23 | 1,012.81 |   572.54 |     0.87 |   46.6% |
| 21 | 1,218.53 | 1,062.53 |   594.43 |     0.87 |   48.7% |
| 22 | 1,231.66 | 1,072.57 |   603.97 |     0.87 |   49.3% |
| 23 | 1,255.75 | 1,097.75 |   608.24 |     0.87 |   50.2% |

---

# END OF REPORT

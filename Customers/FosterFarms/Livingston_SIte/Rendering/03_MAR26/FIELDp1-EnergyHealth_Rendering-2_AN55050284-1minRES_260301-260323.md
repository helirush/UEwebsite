# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 498,810.0 kWh (Usage per period)
- **Consumption Cost per unit:** $0.175/kWh (Cost per kWh)
- **Consumption Total Cost:** $87,142.10 (Cost per period)
- **Consumption Total Cost:** $159.75 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Rendering-2  
**Generated:** 2026-04-25 17:51:25  
**Data Source:** AN55050284-V-1minRES_32730CLP_260301-260323c.csv  

## Time Period

- **Period:** March 01, 2026 thru March 23, 2026
- **Number of Days:** 23 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 32,730

- **Dataset Coverage:** Partial month (74.2% of 31-day month)
- **Billing Scale Factor:** 1.348x (normalization applied for monthly comparison)

## Facility Information

- **Facility:** Foster Farms
- **Location:** Livingston HQ Facility
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** Rendering-2
- **Power Factor:** 0.742
- **Total Energy (Actual):** 498,809.96 kWh (23 days), 914.41 kW (per hour)
- **Total Energy (Monthly Equivalent):** 672,309.08 kWh
- **Total Waste (Actual):** 192,137.59 kWh (23 days), 352.22 kW (per hour)
- **Total Waste (Monthly Equivalent):** 258,968.05 kWh

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Rendering-2_AN55050284-1minRES_260301-260323.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Rendering-2_AN55050284-1minRES_260301-260323.md


## UNITY MANAGEMENT Rendering-2 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 352.22 kW/hr (actual)
- **Monthly Equivalent Waste:** 474.74 kW/hr
- **Blended Electricity Rate:** $0.1747/kWh (all-inclusive)
- **Rendering-2 Utility Cost Offset (Monthly Equivalent):** $82.94/hour
- **Annual Offset Savings:** $539032/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 1,342,194 BTU/hr
- **Total Cooling kW No Longer Needed:** 117.62 kW
- **Cooling Energy Cost Avoided:** $20.55/hour
- **Annual Cooling Savings:** $180000/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 469.84 kW
- **CO2e Emissions Avoided:** 1536.46 metric tons/year
- **Monthly CO2e Reduction:** 128.04 metric tons/month
- **Hourly CO2e Reduction:** 0.1754 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $59154/year

### Total Rendering-2 Unity Savings

- **Per Hour:** $88.83
- **Per Day:** $2132.01
- **Per Month:** $63960.44
- **Per Year:** $778185

### Rendering-2 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,521.3 kVAR Max (Avg: 876.5 kVAR/hr ; 631,064 kVAR/mo)
- **Max Harmonic Distortion:** 31.2% Max (range: 3.0% - 31.2%)
- **Max Amperage:** 2,505A Max (range: 0A - 2505A)

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
| Line to Neutral Voltage (277v) |   272.71 |     0.00 |   283.40 |
| Line to Line Voltage (480v) |   472.34 |     0.00 |   490.86 |
| Current (AMPS) |  1554.88 |     0.00 |  2505.19 |
| Phase Angle (degrees) |    41.61 |    21.25 |    90.00 |
| Total Harmonic Distortion (PCT) |    15.75 |     3.00 |    31.16 |

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
| THD Phase B (%) | 5.3% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.3% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 15.8% | Field-level stress indicator |
| Max Phase THD | 5.3% | Highest THD among all three phases |
| Min Phase THD | 5.2% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,461.21 kW
  - **Maximum Load:** 2,002.99 kVA
  - **Percentage of Capacity (MAX):** 80.1%
- **Average Load:** 1,266.63 kVA
  - **Percentage of Capacity (Avg):** 50.7%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,266.63 kVA
- **Average Power Factor (PF):** 0.742

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,272.08 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 472.34 V
- Average Current (Iavg_A): 1554.88 A
- Average kW (Psum_kW): 914.41 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 5.45 kVA (0.4%)
- **Calculated PF (kW/kVA from averages):** 0.719
- **Power Factor Difference:** 0.024 (3.2%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1266.63) and measured PF (0.742) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,266.63 |        50.7% | 690,947.55 kVA | 3,120,092.42 TOTAL-HEAT |
| kW |   914.41 |        36.6% | 498,809.96 kWh | 867,630.30 Load-Heat |
| kVAR |   876.48 |        35.1% | 478,118.33 kVARh | - |
| WASTE |   352.22 |        14.1% | 192,137.59 WASTE | 334,204.22 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,120,092.42
- **Load-Heat (BTU/hr):** 867,630.30
- **Field-Heat (BTU/hr):** 334,204.22
- **Load-Heat (BTU, period total):** 473,292,329.13
- **Field-Heat (BTU, period total):** 182,308,400.71

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 3 | 1,266.63 |   914.41 |   870.78 |     0.72 |   50.7% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,269.31 |   907.88 |   881.67 |     0.72 |   50.8% |
| 01 | 1,264.09 |   907.28 |   875.35 |     0.72 |   50.6% |
| 02 | 1,305.93 |   941.33 |   901.08 |     0.72 |   52.2% |
| 03 | 1,270.51 |   911.21 |   879.99 |     0.72 |   50.8% |
| 04 | 1,284.52 |   919.89 |   891.30 |     0.72 |   51.4% |
| 05 | 1,257.43 |   900.78 |   871.21 |     0.72 |   50.3% |
| 06 | 1,263.27 |   910.29 |   869.44 |     0.72 |   50.5% |
| 07 | 1,274.65 |   919.20 |   876.97 |     0.72 |   51.0% |
| 08 | 1,297.01 |   935.84 |   891.99 |     0.72 |   51.9% |
| 09 | 1,251.17 |   897.71 |   865.70 |     0.72 |   50.0% |
| 10 | 1,248.39 |   892.79 |   867.06 |     0.72 |   49.9% |
| 11 | 1,230.57 |   881.28 |   852.48 |     0.72 |   49.2% |
| 12 | 1,238.68 |   887.02 |   858.51 |     0.72 |   49.5% |
| 13 | 1,222.70 |   870.74 |   851.52 |     0.71 |   48.9% |
| 14 | 1,245.64 |   897.22 |   857.63 |     0.72 |   49.8% |
| 15 | 1,244.35 |   909.39 |   843.16 |     0.73 |   49.8% |
| 16 | 1,243.84 |   913.23 |   837.86 |     0.73 |   49.8% |
| 17 | 1,249.83 |   919.33 |   840.19 |     0.74 |   50.0% |
| 18 | 1,189.24 |   863.01 |   812.68 |     0.73 |   47.6% |
| 19 | 1,219.38 |   887.48 |   830.52 |     0.73 |   48.8% |
| 20 | 1,315.89 |   970.25 |   884.38 |     0.74 |   52.6% |
| 21 | 1,337.92 |   975.83 |   911.41 |     0.73 |   53.5% |
| 22 | 1,345.93 |   975.18 |   923.58 |     0.72 |   53.8% |
| 23 | 1,338.69 |   960.28 |   928.54 |     0.72 |   53.5% |

---

# END OF REPORT

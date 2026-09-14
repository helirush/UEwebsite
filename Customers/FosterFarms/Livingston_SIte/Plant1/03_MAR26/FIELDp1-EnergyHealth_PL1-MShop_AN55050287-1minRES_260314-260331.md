# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 102,035.5 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $19,896.92 (Cost per period)
- **Consumption Total Cost:** $46.93 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL1-MShop  
**Generated:** 2026-09-10 22:48:18  
**Data Source:** AN55050287-V-1minRES_25440CLP_260314-260331c.csv  

## Time Period

- **Period:** March 14, 2026 thru March 31, 2026
- **Number of Days:** 18 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 25,438

- **Dataset Coverage:** Partial month (58.1% of 31-day month)
- **Billing Scale Factor:** 1.722x (normalization applied for monthly comparison)

## Facility Information

- **Facility:** Foster Farms
- **Location:** Livingston HQ Facility
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** PL1-MShop
- **Power Factor:** 0.874
- **Total Energy (Actual):** 102,035.50 kWh (18 days), 240.67 kW (per hour)
- **Total Energy (Monthly Equivalent):** 175,727.80 kWh
- **Total Waste (Actual):** 15,319.11 kWh (18 days), 36.13 kW (per hour)
- **Total Waste (Monthly Equivalent):** 26,382.91 kWh

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL1-MShop_AN55050287-1minRES_260314-260331.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL1-MShop_AN55050287-1minRES_260314-260331.md


## UNITY MANAGEMENT PL1-MShop SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 36.13 kW/hr (actual)
- **Heat-Coupled Burden Used in Thermal Model:** 20.67 kW/hr (modeled_non_active_field_burden)
- **Monthly Equivalent Waste:** 62.23 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL1-MShop Utility Cost Offset (Monthly Equivalent):** $12.13/hour
- **Annual Offset Savings:** $61722/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 74,137 BTU/hr
- **Total Cooling kW No Longer Needed:** 6.49 kW
- **Cooling Energy Cost Avoided:** $1.27/hour
- **Annual Cooling Savings:** $11093/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 42.63 kW
- **CO2e Emissions Avoided:** 139.40 metric tons/year
- **Monthly CO2e Reduction:** 11.62 metric tons/month
- **Hourly CO2e Reduction:** 0.0159 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $5367/year

### Total PL1-MShop Unity Savings

- **Per Hour:** $8.92
- **Per Day:** $214.20
- **Per Month:** $6425.91
- **Per Year:** $78182

### PL1-MShop Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 419.0 kVAR Max (Avg: 136.7 kVAR/hr ; 98,452 kVAR/mo)
- **Max Harmonic Distortion:** 28.4% Max (range: 3.3% - 28.4%)
- **Max Amperage:** 1,036A Max (range: 102A - 1036A)

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
| Line to Neutral Voltage (277v) |   283.08 |   272.72 |   292.10 |
| Line to Line Voltage (480v) |   490.30 |   472.36 |   505.93 |
| Current (AMPS) |   326.78 |   102.19 |  1036.15 |
| Phase Angle (degrees) |    28.76 |    19.61 |    42.44 |
| Total Harmonic Distortion (PCT) |    13.82 |     3.25 |    28.36 |

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
| THD Phase A (%) | 4.6% | IEEE standard per-phase calculation |
| THD Phase B (%) | 4.6% | IEEE standard per-phase calculation |
| THD Phase C (%) | 4.6% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 13.8% | Field-level stress indicator |
| Max Phase THD | 4.6% | Highest THD among all three phases |
| Min Phase THD | 4.6% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 756.53 kW
  - **Maximum Load:** 861.12 kVA
  - **Percentage of Capacity (MAX):** 34.4%
- **Average Load:** 276.80 kVA
  - **Percentage of Capacity (Avg):** 11.1%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 276.80 kVA
- **Average Power Factor (PF):** 0.874

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 277.51 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 490.30 V
- Average Current (Iavg_A): 326.78 A
- Average kW (Psum_kW): 240.67 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.71 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.867
- **Power Factor Difference:** 0.007 (0.8%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (276.80) and measured PF (0.874) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   276.80 |        11.1% | 117,354.60 kVA | 821,195.71 TOTAL-HEAT |
| kW |   240.67 |         9.6% | 102,035.50 kWh | 107,196.34 Load-Heat |
| kVAR |   136.74 |         5.5% | 57,972.93 kVARh | - |
| WASTE |    36.13 |         1.4% | 15,319.11 WASTE | 16,093.93 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 821,195.71
- **Load-Heat (BTU/hr):** 107,196.34
- **Field-Heat (BTU/hr):** 16,093.93
- **Load-Heat (BTU, period total):** 45,447,675.84
- **Field-Heat (BTU, period total):** 6,823,289.83

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 3 |   276.80 |   240.67 |   135.14 |     0.87 |   11.1% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   291.74 |   255.71 |   138.69 |     0.88 |   11.7% |
| 01 |   290.51 |   254.80 |   137.84 |     0.88 |   11.6% |
| 02 |   292.42 |   257.11 |   137.59 |     0.88 |   11.7% |
| 03 |   298.42 |   260.47 |   144.05 |     0.87 |   11.9% |
| 04 |   321.83 |   279.66 |   158.04 |     0.87 |   12.9% |
| 05 |   319.87 |   278.12 |   156.72 |     0.87 |   12.8% |
| 06 |   316.19 |   274.34 |   155.92 |     0.87 |   12.6% |
| 07 |   305.55 |   265.19 |   150.37 |     0.87 |   12.2% |
| 08 |   304.12 |   264.13 |   149.41 |     0.87 |   12.2% |
| 09 |   297.12 |   257.39 |   146.85 |     0.87 |   11.9% |
| 10 |   296.26 |   258.93 |   142.48 |     0.87 |   11.9% |
| 11 |   296.41 |   258.81 |   142.99 |     0.87 |   11.9% |
| 12 |   295.25 |   257.59 |   142.71 |     0.87 |   11.8% |
| 13 |   283.84 |   247.97 |   136.61 |     0.87 |   11.4% |
| 14 |   269.66 |   233.69 |   133.10 |     0.87 |   10.8% |
| 15 |   237.93 |   207.60 |   114.93 |     0.87 |    9.5% |
| 16 |   225.26 |   194.99 |   111.52 |     0.87 |    9.0% |
| 17 |   199.54 |   171.82 |   100.51 |     0.86 |    8.0% |
| 18 |   188.90 |   160.05 |    99.18 |     0.85 |    7.6% |
| 19 |   202.48 |   170.55 |   107.17 |     0.84 |    8.1% |
| 20 |   269.87 |   232.69 |   134.53 |     0.86 |   10.8% |
| 21 |   279.49 |   243.33 |   135.60 |     0.87 |   11.2% |
| 22 |   281.18 |   246.46 |   133.54 |     0.88 |   11.2% |
| 23 |   291.80 |   255.82 |   138.57 |     0.88 |   11.7% |

---

# END OF REPORT

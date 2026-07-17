# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 174,015.4 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $33,933.00 (Cost per period)
- **Consumption Total Cost:** $47.14 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL2-2Center  
**Generated:** 2026-07-07 05:23:22  
**Data Source:** AN55050368-V-260630.2359c.csv  

## Time Period

- **Period:** June 01, 2026 thru June 30, 2026
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

- **Transformer:** PL2-2Center
- **Power Factor:** 0.865
- **Total Energy (Actual):** 174,015.39 kWh (per period), 241.73 kW (per hour)
- **Total Waste (Actual):** 27,128.29 kWh (per period), 37.69 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL2-2Center_AN55050368-1minRES_260601-260630.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL2-2Center_AN55050368-1minRES_260601-260630.md


## UNITY MANAGEMENT PL2-2Center SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 37.69 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL2-2Center Utility Cost Offset:** $7.35/hour
- **Annual Offset Savings:** $64374/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 135,891 BTU/hr
- **Total Cooling kW No Longer Needed:** 11.95 kW
- **Cooling Energy Cost Avoided:** $2.33/hour
- **Annual Cooling Savings:** $20416/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 49.64 kW
- **CO2e Emissions Avoided:** 162.32 metric tons/year
- **Monthly CO2e Reduction:** 13.53 metric tons/month
- **Hourly CO2e Reduction:** 0.0185 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $6168/year

### Total PL2-2Center Unity Savings

- **Per Hour:** $10.38
- **Per Day:** $249.20
- **Per Month:** $7476.02
- **Per Year:** $90958

### PL2-2Center Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 285.0 kVAR Max (Avg: 140.1 kVAR/hr ; 100,902 kVAR/mo)
- **Max Harmonic Distortion:** 29.4% Max (range: 3.0% - 29.4%)
- **Max Amperage:** 717A Max (range: 81A - 717A)

---

# PL2-2Center DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   280.25 |   270.94 |   290.12 |
| Line to Line Voltage (480v) |   485.41 |   469.29 |   502.50 |
| Current (AMPS) |   333.45 |    81.05 |   716.53 |
| Phase Angle (degrees) |    30.05 |    20.12 |    46.61 |
| Total Harmonic Distortion (PCT) |    14.78 |     3.00 |    29.38 |

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
| THD Phase A (%) | 4.9% | IEEE standard per-phase calculation |
| THD Phase B (%) | 4.9% | IEEE standard per-phase calculation |
| THD Phase C (%) | 4.9% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 14.8% | Field-level stress indicator |
| Max Phase THD | 4.9% | Highest THD among all three phases |
| Min Phase THD | 4.9% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 526.28 kW
  - **Maximum Load:** 594.62 kVA
  - **Percentage of Capacity (MAX):** 23.8%
- **Average Load:** 279.42 kVA
  - **Percentage of Capacity (Avg):** 11.2%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 279.42 kVA
- **Average Power Factor (PF):** 0.865

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 280.36 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 485.41 V
- Average Current (Iavg_A): 333.45 A
- Average kW (Psum_kW): 241.73 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.94 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.862
- **Power Factor Difference:** 0.003 (0.3%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (279.42) and measured PF (0.865) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   279.42 |        11.2% | 201,143.68 kVA | 824,826.64 TOTAL-HEAT |
| kW |   241.73 |         9.7% | 174,015.39 kWh | 111,244.56 Load-Heat |
| kVAR |   140.14 |         5.6% | 100,883.23 kVARh | - |
| WASTE |    37.69 |         1.5% | 27,128.29 WASTE | 17,342.58 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 824,826.64
- **Load-Heat (BTU/hr):** 111,244.56
- **Field-Heat (BTU/hr):** 17,342.58
- **Load-Heat (BTU, period total):** 80,081,249.07
- **Field-Heat (BTU, period total):** 12,484,342.53

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 6 |   279.42 |   241.73 |   139.67 |     0.87 |   11.2% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   282.20 |   245.08 |   139.32 |     0.87 |   11.3% |
| 01 |   309.99 |   268.19 |   154.91 |     0.87 |   12.4% |
| 02 |   304.46 |   263.89 |   151.49 |     0.87 |   12.2% |
| 03 |   304.80 |   265.20 |   149.86 |     0.87 |   12.2% |
| 04 |   302.99 |   263.51 |   149.21 |     0.87 |   12.1% |
| 05 |   296.16 |   257.46 |   146.11 |     0.87 |   11.8% |
| 06 |   291.15 |   252.84 |   144.10 |     0.87 |   11.6% |
| 07 |   291.13 |   252.85 |   144.05 |     0.87 |   11.6% |
| 08 |   299.92 |   258.68 |   151.46 |     0.86 |   12.0% |
| 09 |   296.16 |   250.55 |   157.44 |     0.85 |   11.8% |
| 10 |   307.37 |   262.73 |   159.13 |     0.85 |   12.3% |
| 11 |   297.58 |   254.78 |   153.31 |     0.86 |   11.9% |
| 12 |   300.64 |   256.89 |   155.88 |     0.85 |   12.0% |
| 13 |   282.82 |   242.70 |   144.79 |     0.86 |   11.3% |
| 14 |   242.17 |   210.79 |   118.86 |     0.87 |    9.7% |
| 15 |   233.01 |   204.15 |   111.89 |     0.88 |    9.3% |
| 16 |   233.78 |   204.11 |   113.57 |     0.87 |    9.4% |
| 17 |   224.99 |   197.32 |   107.71 |     0.88 |    9.0% |
| 18 |   195.82 |   171.13 |    94.79 |     0.87 |    7.8% |
| 19 |   219.33 |   187.32 |   113.07 |     0.85 |    8.8% |
| 20 |   284.51 |   244.66 |   144.51 |     0.86 |   11.4% |
| 21 |   295.39 |   256.60 |   146.01 |     0.87 |   11.8% |
| 22 |   299.65 |   260.09 |   148.57 |     0.87 |   12.0% |
| 23 |   309.97 |   270.05 |   151.95 |     0.87 |   12.4% |

---

# END OF REPORT

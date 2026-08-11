# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 88,254.9 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $17,209.71 (Cost per period)
- **Consumption Total Cost:** $23.13 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL2-3North  
**Generated:** 2026-08-02 22:16:44  
**Data Source:** AN55050286-V-1minRES_44640CLP_260701-260731c.csv  

## Time Period

- **Period:** July 01, 2026 thru July 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,640

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

- **Transformer:** PL2-3North
- **Power Factor:** 0.604
- **Total Energy (Actual):** 88,254.90 kWh (per period), 118.62 kW (per hour)
- **Total Waste (Actual):** 51,689.72 kWh (per period), 69.48 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL2-3North_AN55050286-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL2-3North_AN55050286-1minRES_260701-260731.md


## UNITY MANAGEMENT PL2-3North SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 69.48 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 51.85 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL2-3North Utility Cost Offset:** $13.55/hour
- **Annual Offset Savings:** $118678/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 186,080 BTU/hr
- **Total Cooling kW No Longer Needed:** 16.59 kW
- **Cooling Energy Cost Avoided:** $3.23/hour
- **Annual Cooling Savings:** $28334/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 86.06 kW
- **CO2e Emissions Avoided:** 281.44 metric tons/year
- **Monthly CO2e Reduction:** 23.45 metric tons/month
- **Hourly CO2e Reduction:** 0.0321 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $10695/year

### Total PL2-3North Unity Savings

- **Per Hour:** $18.00
- **Per Day:** $432.07
- **Per Month:** $12962.15
- **Per Year:** $157706

### PL2-3North Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,155.5 kVAR Max (Avg: 146.0 kVAR/hr ; 105,104 kVAR/mo)
- **Max Harmonic Distortion:** 29.6% Max (range: 3.0% - 29.6%)
- **Max Amperage:** 1,484A Max (range: 0A - 1484A)

---

# PL2-3North DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   282.00 |     0.00 |   292.29 |
| Line to Line Voltage (480v) |   488.44 |     0.00 |   506.26 |
| Current (AMPS) |   223.04 |     0.00 |  1483.61 |
| Phase Angle (degrees) |    52.75 |    46.45 |    90.00 |
| Total Harmonic Distortion (PCT) |    13.89 |     3.00 |    29.59 |

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
| Unity THD Composite (%) | 13.9% | Field-level stress indicator |
| Max Phase THD | 4.6% | Highest THD among all three phases |
| Min Phase THD | 4.6% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 377.16 kW
  - **Maximum Load:** 1,156.85 kVA
  - **Percentage of Capacity (MAX):** 46.3%
- **Average Load:** 188.10 kVA
  - **Percentage of Capacity (Avg):** 7.5%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 188.10 kVA
- **Average Power Factor (PF):** 0.604

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 188.70 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 488.44 V
- Average Current (Iavg_A): 223.04 A
- Average kW (Psum_kW): 118.62 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.60 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.629
- **Power Factor Difference:** 0.025 (4.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (188.10) and measured PF (0.604) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   188.10 |         7.5% | 139,944.62 kVA | 404,755.72 TOTAL-HEAT |
| kW |   118.62 |         4.7% | 88,254.90 kWh | 149,499.92 Load-Heat |
| kVAR |   145.98 |         5.8% | 108,607.41 kVARh | - |
| WASTE |    69.48 |         2.8% | 51,689.72 WASTE | 87,560.12 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 404,755.72
- **Load-Heat (BTU/hr):** 149,499.92
- **Field-Heat (BTU/hr):** 87,560.12
- **Load-Heat (BTU, period total):** 111,227,942.81
- **Field-Heat (BTU, period total):** 65,144,727.09

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 |   188.10 |   118.62 |   145.70 |     0.63 |    7.5% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   222.85 |   143.33 |   170.47 |     0.64 |    8.9% |
| 01 |   217.40 |   138.88 |   167.11 |     0.64 |    8.7% |
| 02 |   219.82 |   140.94 |   168.56 |     0.64 |    8.8% |
| 03 |   214.69 |   136.90 |   165.24 |     0.64 |    8.6% |
| 04 |   216.05 |   138.41 |   165.74 |     0.64 |    8.6% |
| 05 |   215.08 |   138.34 |   164.55 |     0.64 |    8.6% |
| 06 |   205.37 |   132.19 |   157.07 |     0.64 |    8.2% |
| 07 |   208.23 |   134.39 |   158.94 |     0.65 |    8.3% |
| 08 |   214.30 |   138.41 |   163.48 |     0.65 |    8.6% |
| 09 |   214.47 |   138.54 |   163.59 |     0.65 |    8.6% |
| 10 |   203.57 |   129.81 |   156.64 |     0.64 |    8.1% |
| 11 |   202.64 |   129.25 |   155.71 |     0.64 |    8.1% |
| 12 |   198.90 |   126.04 |   153.50 |     0.63 |    8.0% |
| 13 |   177.82 |   111.97 |   137.99 |     0.63 |    7.1% |
| 14 |   160.33 |   100.00 |   125.13 |     0.62 |    6.4% |
| 15 |   144.80 |    89.14 |   114.00 |     0.62 |    5.8% |
| 16 |   128.80 |    77.20 |   103.01 |     0.60 |    5.2% |
| 17 |   116.14 |    66.56 |    95.04 |     0.57 |    4.6% |
| 18 |   108.91 |    60.30 |    90.58 |     0.55 |    4.4% |
| 19 |   126.81 |    73.38 |   103.20 |     0.58 |    5.1% |
| 20 |   174.54 |   107.02 |   137.36 |     0.61 |    7.0% |
| 21 |   201.50 |   127.70 |   155.45 |     0.63 |    8.1% |
| 22 |   207.81 |   131.92 |   160.32 |     0.63 |    8.3% |
| 23 |   213.51 |   136.33 |   164.08 |     0.64 |    8.5% |

---

# END OF REPORT

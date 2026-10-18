# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 155,255.4 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $30,274.81 (Cost per period)
- **Consumption Total Cost:** $43.20 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** FSO-2  
**Generated:** 2026-10-13 14:47:38  
**Data Source:** AN55050316-V-1minRES_43200CLP_260901-260930c.csv  

## Time Period

- **Period:** September 01, 2026 thru September 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 42,045

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

- **Transformer:** FSO-2
- **Power Factor:** 0.925
- **Total Energy (Actual):** 155,255.44 kWh (per period), 221.56 kW (per hour)
- **Total Waste (Actual):** 12,610.53 kWh (per period), 18.00 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_FSO-2_AN55050316-1minRES_260901-260930.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_FSO-2_AN55050316-1minRES_260901-260930.md


## UNITY MANAGEMENT FSO-2 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 18.00 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 9.13 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **FSO-2 Utility Cost Offset:** $3.51/hour
- **Annual Offset Savings:** $30740/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 33,070 BTU/hr
- **Total Cooling kW No Longer Needed:** 2.89 kW
- **Cooling Energy Cost Avoided:** $0.56/hour
- **Annual Cooling Savings:** $4943/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 20.89 kW
- **CO2e Emissions Avoided:** 68.31 metric tons/year
- **Monthly CO2e Reduction:** 5.69 metric tons/month
- **Hourly CO2e Reduction:** 0.0078 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $2596/year

### Total FSO-2 Unity Savings

- **Per Hour:** $4.37
- **Per Day:** $104.87
- **Per Month:** $3146.22
- **Per Year:** $38279

### FSO-2 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 158.6 kVAR Max (Avg: 91.1 kVAR/hr ; 65,587 kVAR/mo)
- **Max Harmonic Distortion:** 31.6% Max (range: 3.0% - 31.6%)
- **Max Amperage:** 437A Max (range: 146A - 437A)

---

# FSO-2 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   277.72 |   270.27 |   287.06 |
| Line to Line Voltage (480v) |   481.02 |   468.12 |   497.20 |
| Current (AMPS) |   287.53 |   146.39 |   436.87 |
| Phase Angle (degrees) |    22.25 |     8.89 |    38.19 |
| Total Harmonic Distortion (PCT) |    15.64 |     3.04 |    31.62 |

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

- **Maximum UtilityDemand:** 330.47 kW
  - **Maximum Load:** 359.35 kVA
  - **Percentage of Capacity (MAX):** 14.4%
- **Average Load:** 239.55 kVA
  - **Percentage of Capacity (Avg):** 9.6%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 239.55 kVA
- **Average Power Factor (PF):** 0.925

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 239.56 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 481.02 V
- Average Current (Iavg_A): 287.53 A
- Average kW (Psum_kW): 221.56 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.01 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.925
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (239.55) and measured PF (0.925) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   239.55 |         9.6% | 167,865.97 kVA | 755,980.91 TOTAL-HEAT |
| kW |   221.56 |         8.9% | 155,255.44 kWh | 56,791.24 Load-Heat |
| kVAR |    91.09 |         3.6% | 63,833.62 kVARh | - |
| WASTE |    18.00 |         0.7% | 12,610.53 WASTE | 4,612.83 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 755,980.91
- **Load-Heat (BTU/hr):** 56,791.24
- **Field-Heat (BTU/hr):** 4,612.83
- **Load-Heat (BTU, period total):** 39,796,460.41
- **Field-Heat (BTU, period total):** 3,232,442.30

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 9 |   239.55 |   221.56 |    90.74 |     0.92 |    9.6% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   234.08 |   216.46 |    88.75 |     0.92 |    9.4% |
| 01 |   232.64 |   215.61 |    87.07 |     0.93 |    9.3% |
| 02 |   221.87 |   205.93 |    82.19 |     0.93 |    8.9% |
| 03 |   226.96 |   210.36 |    84.92 |     0.93 |    9.1% |
| 04 |   221.90 |   206.14 |    81.84 |     0.93 |    8.9% |
| 05 |   222.74 |   207.31 |    81.24 |     0.93 |    8.9% |
| 06 |   221.65 |   206.54 |    80.16 |     0.93 |    8.9% |
| 07 |   213.44 |   198.11 |    79.08 |     0.93 |    8.5% |
| 08 |   230.76 |   213.39 |    87.46 |     0.92 |    9.2% |
| 09 |   233.25 |   214.95 |    90.13 |     0.92 |    9.3% |
| 10 |   232.44 |   213.60 |    91.20 |     0.92 |    9.3% |
| 11 |   229.23 |   210.88 |    89.36 |     0.92 |    9.2% |
| 12 |   227.18 |   208.77 |    89.14 |     0.92 |    9.1% |
| 13 |   227.64 |   208.63 |    90.52 |     0.92 |    9.1% |
| 14 |   233.10 |   214.26 |    91.37 |     0.92 |    9.3% |
| 15 |   234.37 |   215.02 |    92.89 |     0.92 |    9.4% |
| 16 |   262.92 |   243.00 |   100.18 |     0.92 |   10.5% |
| 17 |   279.12 |   258.27 |   105.72 |     0.93 |   11.2% |
| 18 |   288.09 |   266.16 |   110.14 |     0.92 |   11.5% |
| 19 |   288.10 |   267.13 |   107.81 |     0.93 |   11.5% |
| 20 |   270.56 |   251.66 |    99.27 |     0.93 |   10.8% |
| 21 |   244.09 |   226.93 |    89.76 |     0.93 |    9.8% |
| 22 |   232.21 |   215.33 |    86.67 |     0.93 |    9.3% |
| 23 |   245.58 |   227.04 |    93.28 |     0.92 |    9.8% |

---

# END OF REPORT

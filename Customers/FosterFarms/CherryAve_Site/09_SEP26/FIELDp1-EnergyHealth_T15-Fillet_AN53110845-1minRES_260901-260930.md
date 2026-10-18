# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 540,064.3 kWh (Usage per period)
- **Consumption Cost per unit:** $0.350/kWh (Cost per kWh)
- **Consumption Total Cost:** $189,022.51 (Cost per period)
- **Consumption Total Cost:** $262.53 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T15 Fillet  
**Generated:** 2026-10-03 12:32:07  
**Data Source:** AN53110845-V-1minRES_43200CLP_260901-260930c.csv  

## Time Period

- **Period:** September 01, 2026 thru September 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,200

- **Dataset Coverage:** Complete month (100.0% of 30-day month)
- **Billing Scale Factor:** 1.000x (no normalization needed)

## Facility Information

- **Facility:** Foster Farms
- **Location:** Cherry Ave Facility
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** T15 Fillet
- **Power Factor:** 0.807
- **Total Energy (Actual):** 540,064.33 kWh (per period), 750.09 kW (per hour)
- **Total Waste (Actual):** 106,007.41 kWh (per period), 147.23 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T15-Fillet_AN53110845-1minRES_260901-260930.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T15-Fillet_AN53110845-1minRES_260901-260930.md


## UNITY MANAGEMENT T15 Fillet SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 147.23 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 98.06 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.3500/kWh (all-inclusive)
- **T15 Fillet Utility Cost Offset:** $51.53/hour
- **Annual Offset Savings:** $451415/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 352,819 BTU/hr
- **Total Cooling kW No Longer Needed:** 31.03 kW
- **Cooling Energy Cost Avoided:** $10.86/hour
- **Annual Cooling Savings:** $95145/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 178.26 kW
- **CO2e Emissions Avoided:** 582.96 metric tons/year
- **Monthly CO2e Reduction:** 48.58 metric tons/month
- **Hourly CO2e Reduction:** 0.0665 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $22444/year

### Total T15 Fillet Unity Savings

- **Per Hour:** $64.95
- **Per Day:** $1558.91
- **Per Month:** $46767.39
- **Per Year:** $569003

### T15 Fillet Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 770.2 kVAR Max (Avg: 492.5 kVAR/hr ; 354,597 kVAR/mo)
- **Max Harmonic Distortion:** 111.7% Max (range: 0.0% - 111.7%)
- **Max Amperage:** 1,952A Max (range: 0A - 1952A)

---

# T15 Fillet DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   276.41 |     0.00 |   291.59 |
| Line to Line Voltage (480v) |   478.75 |     0.00 |   505.05 |
| Current (AMPS) |  1092.26 |     0.00 |  1952.32 |
| Phase Angle (degrees) |    35.62 |    22.22 |    90.00 |
| Total Harmonic Distortion (PCT) |    12.80 |     0.00 |   111.73 |

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
| THD Phase A (%) | 4.4% | IEEE standard per-phase calculation |
| THD Phase B (%) | 4.4% | IEEE standard per-phase calculation |
| THD Phase C (%) | 4.0% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 12.8% | Field-level stress indicator |
| Max Phase THD | 4.4% | Highest THD among all three phases |
| Min Phase THD | 4.0% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,385.49 kW
  - **Maximum Load:** 1,584.48 kVA
  - **Percentage of Capacity (MAX):** 63.4%
- **Average Load:** 897.32 kVA
  - **Percentage of Capacity (Avg):** 35.9%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 897.32 kVA
- **Average Power Factor (PF):** 0.807

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 905.72 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 478.75 V
- Average Current (Iavg_A): 1092.26 A
- Average kW (Psum_kW): 750.09 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 8.40 kVA (0.9%)
- **Calculated PF (kW/kVA from averages):** 0.828
- **Power Factor Difference:** 0.021 (2.6%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (897.32) and measured PF (0.807) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   897.32 |        35.9% | 646,071.73 kVA | 2,559,411.35 TOTAL-HEAT |
| kW |   750.09 |        30.0% | 540,064.33 kWh | 419,948.05 Load-Heat |
| kVAR |   492.50 |        19.7% | 354,597.25 kVARh | - |
| WASTE |   147.23 |         5.9% | 106,007.41 WASTE | 82,430.19 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,559,411.35
- **Load-Heat (BTU/hr):** 419,948.05
- **Field-Heat (BTU/hr):** 82,430.19
- **Load-Heat (BTU, period total):** 302,362,593.32
- **Field-Heat (BTU, period total):** 59,349,735.14

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 9 |   897.32 |   750.09 |   484.31 |     0.84 |   35.9% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   964.74 |   815.53 |   510.46 |     0.85 |   38.6% |
| 01 | 1,007.72 |   847.54 |   540.95 |     0.84 |   40.3% |
| 02 | 1,024.21 |   868.63 |   538.89 |     0.85 |   41.0% |
| 03 | 1,010.15 |   854.64 |   534.63 |     0.85 |   40.4% |
| 04 | 1,020.60 |   867.84 |   533.37 |     0.85 |   40.8% |
| 05 | 1,058.46 |   901.04 |   551.24 |     0.85 |   42.3% |
| 06 | 1,039.27 |   884.41 |   541.41 |     0.85 |   41.6% |
| 07 | 1,043.42 |   886.58 |   545.53 |     0.85 |   41.7% |
| 08 | 1,011.94 |   867.64 |   515.84 |     0.86 |   40.5% |
| 09 |   995.09 |   855.38 |   503.16 |     0.86 |   39.8% |
| 10 | 1,022.78 |   887.48 |   503.50 |     0.87 |   40.9% |
| 11 |   920.53 |   788.46 |   470.52 |     0.86 |   36.8% |
| 12 |   958.52 |   827.98 |   478.03 |     0.86 |   38.3% |
| 13 | 1,017.05 |   877.88 |   508.32 |     0.86 |   40.7% |
| 14 |   989.25 |   843.96 |   510.94 |     0.85 |   39.6% |
| 15 | 1,035.47 |   888.67 |   525.36 |     0.86 |   41.4% |
| 16 |   951.80 |   805.01 |   501.90 |     0.85 |   38.1% |
| 17 |   750.38 |   599.00 |   446.35 |     0.80 |   30.0% |
| 18 |   640.69 |   461.35 |   442.35 |     0.72 |   25.6% |
| 19 |   634.08 |   447.09 |   448.52 |     0.71 |   25.4% |
| 20 |   641.55 |   464.19 |   441.47 |     0.72 |   25.7% |
| 21 |   574.34 |   440.66 |   366.84 |     0.77 |   23.0% |
| 22 |   519.70 |   422.39 |   299.36 |     0.81 |   20.8% |
| 23 |   703.99 |   598.79 |   364.57 |     0.85 |   28.2% |

---

# END OF REPORT

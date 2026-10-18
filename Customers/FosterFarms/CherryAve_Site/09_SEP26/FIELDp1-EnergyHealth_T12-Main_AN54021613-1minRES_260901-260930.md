# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 763,231.1 kWh (Usage per period)
- **Consumption Cost per unit:** $0.350/kWh (Cost per kWh)
- **Consumption Total Cost:** $267,130.89 (Cost per period)
- **Consumption Total Cost:** $371.02 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T12 Main  
**Generated:** 2026-10-03 12:31:49  
**Data Source:** AN54021613-V-1minRES_43200CLP_260901-260930c.csv  

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

- **Transformer:** T12 Main
- **Power Factor:** 0.834
- **Total Energy (Actual):** 763,231.11 kWh (per period), 1060.04 kW (per hour)
- **Total Waste (Actual):** 143,015.35 kWh (per period), 198.63 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T12-Main_AN54021613-1minRES_260901-260930.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T12-Main_AN54021613-1minRES_260901-260930.md


## UNITY MANAGEMENT T12 Main SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 198.63 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 133.48 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.3500/kWh (all-inclusive)
- **T12 Main Utility Cost Offset:** $69.52/hour
- **Annual Offset Savings:** $609007/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 530,852 BTU/hr
- **Total Cooling kW No Longer Needed:** 46.69 kW
- **Cooling Energy Cost Avoided:** $16.34/hour
- **Annual Cooling Savings:** $143155/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 245.32 kW
- **CO2e Emissions Avoided:** 802.25 metric tons/year
- **Monthly CO2e Reduction:** 66.85 metric tons/month
- **Hourly CO2e Reduction:** 0.0916 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $30887/year

### Total T12 Main Unity Savings

- **Per Hour:** $89.39
- **Per Day:** $2145.34
- **Per Month:** $64360.15
- **Per Year:** $783048

### T12 Main Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,054.0 kVAR Max (Avg: 678.7 kVAR/hr ; 488,632 kVAR/mo)
- **Max Harmonic Distortion:** 30.9% Max (range: 3.0% - 30.9%)
- **Max Amperage:** 2,520A Max (range: 443A - 2520A)

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
| Line to Neutral Voltage (277v) |   268.94 |   250.74 |   286.10 |
| Line to Line Voltage (480v) |   465.82 |   434.29 |   495.54 |
| Current (AMPS) |  1574.29 |   443.44 |  2520.00 |
| Phase Angle (degrees) |    33.37 |    25.97 |    49.68 |
| Total Harmonic Distortion (PCT) |    16.15 |     3.01 |    30.94 |

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

- **Maximum UtilityDemand:** 1,533.93 kW
  - **Maximum Load:** 1,829.21 kVA
  - **Percentage of Capacity (MAX):** 73.2%
- **Average Load:** 1,258.68 kVA
  - **Percentage of Capacity (Avg):** 50.3%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,258.68 kVA
- **Average Power Factor (PF):** 0.834

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,270.18 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 465.82 V
- Average Current (Iavg_A): 1574.29 A
- Average kW (Psum_kW): 1060.04 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 11.51 kVA (0.9%)
- **Calculated PF (kW/kVA from averages):** 0.835
- **Power Factor Difference:** 0.001 (0.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1258.68) and measured PF (0.834) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,258.68 |        50.3% | 906,246.46 kVA | 3,617,017.96 TOTAL-HEAT |
| kW | 1,060.04 |        42.4% | 763,231.11 kWh | 570,803.97 Load-Heat |
| kVAR |   678.66 |        27.1% | 488,631.67 kVARh | - |
| WASTE |   198.63 |         7.9% | 143,015.35 WASTE | 106,958.07 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,617,017.96
- **Load-Heat (BTU/hr):** 570,803.97
- **Field-Heat (BTU/hr):** 106,958.07
- **Load-Heat (BTU, period total):** 410,978,855.63
- **Field-Heat (BTU, period total):** 77,009,810.09

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 9 | 1,258.68 | 1,060.04 |   676.35 |     0.84 |   50.3% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,342.71 | 1,121.70 |   736.30 |     0.84 |   53.7% |
| 01 | 1,368.32 | 1,144.50 |   748.39 |     0.84 |   54.7% |
| 02 | 1,386.43 | 1,166.86 |   747.50 |     0.84 |   55.5% |
| 03 | 1,366.45 | 1,149.40 |   737.92 |     0.84 |   54.7% |
| 04 | 1,372.16 | 1,155.47 |   738.80 |     0.84 |   54.9% |
| 05 | 1,339.88 | 1,129.24 |   719.50 |     0.84 |   53.6% |
| 06 | 1,335.03 | 1,123.20 |   719.84 |     0.84 |   53.4% |
| 07 | 1,314.30 | 1,105.82 |   708.63 |     0.84 |   52.6% |
| 08 | 1,331.17 | 1,122.27 |   714.22 |     0.84 |   53.2% |
| 09 | 1,279.65 | 1,082.13 |   681.46 |     0.85 |   51.2% |
| 10 | 1,338.11 | 1,131.25 |   713.35 |     0.85 |   53.5% |
| 11 | 1,333.96 | 1,128.17 |   710.36 |     0.85 |   53.4% |
| 12 | 1,316.29 | 1,110.74 |   704.82 |     0.84 |   52.7% |
| 13 | 1,202.09 | 1,019.93 |   634.27 |     0.85 |   48.1% |
| 14 | 1,045.15 |   893.50 |   539.20 |     0.85 |   41.8% |
| 15 | 1,129.07 |   972.80 |   568.62 |     0.86 |   45.2% |
| 16 | 1,199.82 | 1,034.42 |   604.04 |     0.86 |   48.0% |
| 17 | 1,099.92 |   938.97 |   569.35 |     0.85 |   44.0% |
| 18 |   993.31 |   838.45 |   530.05 |     0.84 |   39.7% |
| 19 |   960.71 |   801.06 |   528.36 |     0.83 |   38.4% |
| 20 | 1,214.16 |   998.26 |   689.15 |     0.82 |   48.6% |
| 21 | 1,311.15 | 1,086.74 |   731.79 |     0.83 |   52.4% |
| 22 | 1,293.47 | 1,070.42 |   724.84 |     0.83 |   51.7% |
| 23 | 1,334.91 | 1,115.73 |   731.54 |     0.84 |   53.4% |

---

# END OF REPORT

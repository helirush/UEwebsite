# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 550,385.4 kWh (Usage per period)
- **Consumption Cost per unit:** $0.350/kWh (Cost per kWh)
- **Consumption Total Cost:** $192,634.90 (Cost per period)
- **Consumption Total Cost:** $267.65 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T10 Air Chiller  
**Generated:** 2026-07-18 11:54:05  
**Data Source:** AN53111387-V-1minRES_43200CLP_260601-260630c.csv  

## Time Period

- **Period:** June 01, 2026 thru June 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,184

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

- **Transformer:** T10 Air Chiller
- **Power Factor:** 0.889
- **Total Energy (Actual):** 550,385.43 kWh (per period), 764.71 kW (per hour)
- **Total Waste (Actual):** 74,749.63 kWh (per period), 103.86 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T10-Air-Chiller_AN53111387-1minRES_260601-260630.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T10-Air-Chiller_AN53111387-1minRES_260601-260630.md


## UNITY MANAGEMENT T10 Air Chiller SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 103.86 kW/hr
- **Blended Electricity Rate:** $0.3500/kWh (all-inclusive)
- **T10 Air Chiller Utility Cost Offset:** $36.35/hour
- **Annual Offset Savings:** $318427/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 433,105 BTU/hr
- **Total Cooling kW No Longer Needed:** 38.57 kW
- **Cooling Energy Cost Avoided:** $13.50/hour
- **Annual Cooling Savings:** $118243/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 142.42 kW
- **CO2e Emissions Avoided:** 465.75 metric tons/year
- **Monthly CO2e Reduction:** 38.81 metric tons/month
- **Hourly CO2e Reduction:** 0.0532 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $17931/year

### Total T10 Air Chiller Unity Savings

- **Per Hour:** $51.90
- **Per Day:** $1245.48
- **Per Month:** $37364.51
- **Per Year:** $454602

### T10 Air Chiller Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 794.0 kVAR Max (Avg: 411.9 kVAR/hr ; 296,538 kVAR/mo)
- **Max Harmonic Distortion:** 29.5% Max (range: 3.0% - 29.5%)
- **Max Amperage:** 2,151A Max (range: 52A - 2151A)

---

# T10 Air Chiller DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   263.78 |   250.53 |   283.87 |
| Line to Line Voltage (480v) |   456.89 |   433.93 |   491.67 |
| Current (AMPS) |  1115.88 |    51.95 |  2151.49 |
| Phase Angle (degrees) |    27.16 |    13.86 |    39.07 |
| Total Harmonic Distortion (PCT) |    15.15 |     3.00 |    29.47 |

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
| THD Phase A (%) | 5.0% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.1% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.1% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 15.2% | Field-level stress indicator |
| Max Phase THD | 5.1% | Highest THD among all three phases |
| Min Phase THD | 5.0% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,454.96 kW
  - **Maximum Load:** 1,648.96 kVA
  - **Percentage of Capacity (MAX):** 66.0%
- **Average Load:** 868.56 kVA
  - **Percentage of Capacity (Avg):** 34.7%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 868.56 kVA
- **Average Power Factor (PF):** 0.889

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 883.06 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 456.89 V
- Average Current (Iavg_A): 1115.88 A
- Average kW (Psum_kW): 764.71 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 14.49 kVA (1.7%)
- **Calculated PF (kW/kVA from averages):** 0.866
- **Power Factor Difference:** 0.023 (2.5%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (868.56) and measured PF (0.889) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   868.56 |        34.7% | 625,135.06 kVA | 2,609,290.35 TOTAL-HEAT |
| kW |   764.71 |        30.6% | 550,385.43 kWh | 312,002.16 Load-Heat |
| kVAR |   411.86 |        16.5% | 296,428.28 kVARh | - |
| WASTE |   103.86 |         4.2% | 74,749.63 WASTE | 42,374.03 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,609,290.35
- **Load-Heat (BTU/hr):** 312,002.16
- **Field-Heat (BTU/hr):** 42,374.03
- **Load-Heat (BTU, period total):** 224,558,357.63
- **Field-Heat (BTU, period total):** 30,497,999.30

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 6 |   868.56 |   764.71 |   411.29 |     0.88 |   34.7% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,057.43 |   931.65 |   499.86 |     0.88 |   42.3% |
| 01 | 1,027.75 |   905.39 |   486.08 |     0.88 |   41.1% |
| 02 | 1,015.31 |   894.47 |   480.18 |     0.88 |   40.6% |
| 03 | 1,010.33 |   890.39 |   477.30 |     0.88 |   40.4% |
| 04 | 1,003.60 |   884.41 |   474.21 |     0.88 |   40.1% |
| 05 |   984.02 |   867.32 |   464.66 |     0.88 |   39.4% |
| 06 |   976.95 |   860.46 |   462.47 |     0.88 |   39.1% |
| 07 |   982.07 |   865.63 |   463.65 |     0.88 |   39.3% |
| 08 |   969.28 |   854.39 |   457.53 |     0.88 |   38.8% |
| 09 |   969.14 |   854.43 |   457.10 |     0.88 |   38.8% |
| 10 |   962.10 |   848.30 |   453.42 |     0.88 |   38.5% |
| 11 |   977.16 |   861.95 |   460.05 |     0.88 |   39.1% |
| 12 |   978.47 |   863.19 |   460.53 |     0.88 |   39.1% |
| 13 |   930.62 |   819.22 |   441.26 |     0.88 |   37.2% |
| 14 |   906.84 |   797.47 |   431.25 |     0.88 |   36.3% |
| 15 |   788.27 |   695.76 |   369.77 |     0.88 |   31.5% |
| 16 |   626.69 |   552.57 |   294.39 |     0.88 |   25.1% |
| 17 |   363.46 |   322.56 |   166.14 |     0.89 |   14.5% |
| 18 |   350.40 |   307.38 |   166.99 |     0.88 |   14.0% |
| 19 |   370.19 |   319.76 |   185.23 |     0.86 |   14.8% |
| 20 |   570.68 |   500.14 |   272.96 |     0.88 |   22.8% |
| 21 |   975.37 |   856.14 |   466.77 |     0.88 |   39.0% |
| 22 | 1,015.69 |   891.05 |   487.10 |     0.88 |   40.6% |
| 23 | 1,034.58 |   909.66 |   492.49 |     0.88 |   41.4% |

---

# END OF REPORT

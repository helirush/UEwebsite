# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 338,556.6 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $66,018.54 (Cost per period)
- **Consumption Total Cost:** $92.16 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** NCDC3 North E  
**Generated:** 2026-07-07 01:39:10  
**Data Source:** AN55050395-V-1minRES_43200CLP_260601-260630c.csv  

## Time Period

- **Period:** June 01, 2026 thru June 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 42,982

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

- **Transformer:** NCDC3 North E
- **Power Factor:** 0.837
- **Total Energy (Actual):** 338,556.62 kWh (per period), 472.60 kW (per hour)
- **Total Waste (Actual):** 65,779.14 kWh (per period), 91.82 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_NCDC3-North-E_AN55050395-1minRES_260601-260630.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_NCDC3-North-E_AN55050395-1minRES_260601-260630.md


## UNITY MANAGEMENT NCDC3 North E SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 91.82 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **NCDC3 North E Utility Cost Offset:** $17.91/hour
- **Annual Offset Savings:** $156853/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 335,264 BTU/hr
- **Total Cooling kW No Longer Needed:** 29.49 kW
- **Cooling Energy Cost Avoided:** $5.75/hour
- **Annual Cooling Savings:** $50370/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 121.31 kW
- **CO2e Emissions Avoided:** 396.71 metric tons/year
- **Monthly CO2e Reduction:** 33.06 metric tons/month
- **Hourly CO2e Reduction:** 0.0453 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $15075/year

### Total NCDC3 North E Unity Savings

- **Per Hour:** $25.38
- **Per Day:** $609.03
- **Per Month:** $18270.99
- **Per Year:** $222297

### NCDC3 North E Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 462.1 kVAR Max (Avg: 308.6 kVAR/hr ; 222,180 kVAR/mo)
- **Max Harmonic Distortion:** 32.5% Max (range: 3.5% - 32.5%)
- **Max Amperage:** 865A Max (range: 496A - 865A)

---

# NCDC3 North E DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   276.77 |   270.08 |   285.87 |
| Line to Line Voltage (480v) |   479.38 |   467.79 |   495.14 |
| Current (AMPS) |   679.72 |   495.62 |   865.10 |
| Phase Angle (degrees) |    33.12 |    25.97 |    40.71 |
| Total Harmonic Distortion (PCT) |    16.27 |     3.48 |    32.52 |

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
| Unity THD Composite (%) | 16.3% | Field-level stress indicator |
| Max Phase THD | 5.4% | Highest THD among all three phases |
| Min Phase THD | 5.4% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 603.74 kW
  - **Maximum Load:** 714.79 kVA
  - **Percentage of Capacity (MAX):** 28.6%
- **Average Load:** 564.43 kVA
  - **Percentage of Capacity (Avg):** 22.6%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 564.43 kVA
- **Average Power Factor (PF):** 0.837

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 564.38 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 479.38 V
- Average Current (Iavg_A): 679.72 A
- Average kW (Psum_kW): 472.60 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.05 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.837
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (564.43) and measured PF (0.837) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   564.43 |        22.6% | 404,335.76 kVA | 1,612,586.56 TOTAL-HEAT |
| kW |   472.60 |        18.9% | 338,556.62 kWh | 262,342.76 Load-Heat |
| kVAR |   308.58 |        12.3% | 221,058.41 kVARh | - |
| WASTE |    91.82 |         3.7% | 65,779.14 WASTE | 50,971.33 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,612,586.56
- **Load-Heat (BTU/hr):** 262,342.76
- **Field-Heat (BTU/hr):** 50,971.33
- **Load-Heat (BTU, period total):** 187,933,606.58
- **Field-Heat (BTU, period total):** 36,514,161.56

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 6 |   564.43 |   472.60 |   308.22 |     0.84 |   22.6% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   547.08 |   462.54 |   291.84 |     0.85 |   21.9% |
| 01 |   555.59 |   467.32 |   300.20 |     0.84 |   22.2% |
| 02 |   545.73 |   458.35 |   295.85 |     0.84 |   21.8% |
| 03 |   530.78 |   445.32 |   288.52 |     0.84 |   21.2% |
| 04 |   533.75 |   445.62 |   293.46 |     0.83 |   21.3% |
| 05 |   516.23 |   432.49 |   281.52 |     0.84 |   20.6% |
| 06 |   531.57 |   440.95 |   296.51 |     0.83 |   21.3% |
| 07 |   548.60 |   456.01 |   304.57 |     0.83 |   21.9% |
| 08 |   536.91 |   449.79 |   292.72 |     0.84 |   21.5% |
| 09 |   546.84 |   456.36 |   301.04 |     0.83 |   21.9% |
| 10 |   568.95 |   474.46 |   313.80 |     0.83 |   22.8% |
| 11 |   571.47 |   478.20 |   312.42 |     0.84 |   22.9% |
| 12 |   564.67 |   469.60 |   313.34 |     0.83 |   22.6% |
| 13 |   588.75 |   494.12 |   319.83 |     0.84 |   23.5% |
| 14 |   603.07 |   498.08 |   339.84 |     0.83 |   24.1% |
| 15 |   601.96 |   502.45 |   331.11 |     0.83 |   24.1% |
| 16 |   581.26 |   483.55 |   322.31 |     0.83 |   23.3% |
| 17 |   585.16 |   488.81 |   321.40 |     0.84 |   23.4% |
| 18 |   581.47 |   487.19 |   317.15 |     0.84 |   23.3% |
| 19 |   580.41 |   488.15 |   313.69 |     0.84 |   23.2% |
| 20 |   576.57 |   486.72 |   308.82 |     0.84 |   23.1% |
| 21 |   570.02 |   484.59 |   299.78 |     0.85 |   22.8% |
| 22 |   599.03 |   504.92 |   322.05 |     0.84 |   24.0% |
| 23 |   580.59 |   487.16 |   315.56 |     0.84 |   23.2% |

---

# END OF REPORT

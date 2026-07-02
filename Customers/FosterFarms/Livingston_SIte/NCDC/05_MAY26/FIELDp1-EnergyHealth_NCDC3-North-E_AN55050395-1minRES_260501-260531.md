# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 347,975.6 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $67,855.24 (Cost per period)
- **Consumption Total Cost:** $91.97 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** NCDC3 North E  
**Generated:** 2026-06-18 23:51:11  
**Data Source:** AN55050395-V-1minRES_44640CLP_260501-260531c.csv  

## Time Period

- **Period:** May 01, 2026 thru May 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,267

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

- **Transformer:** NCDC3 North E
- **Power Factor:** 0.846
- **Total Energy (Actual):** 347,975.59 kWh (per period), 471.65 kW (per hour)
- **Total Waste (Actual):** 63,079.27 kWh (per period), 85.50 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_NCDC3-North-E_AN55050395-1minRES_260501-260531.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_NCDC3-North-E_AN55050395-1minRES_260501-260531.md


## UNITY MANAGEMENT NCDC3 North E SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 85.50 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **NCDC3 North E Utility Cost Offset:** $16.67/hour
- **Annual Offset Savings:** $146048/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 310,123 BTU/hr
- **Total Cooling kW No Longer Needed:** 27.14 kW
- **Cooling Energy Cost Avoided:** $5.29/hour
- **Annual Cooling Savings:** $46353/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 112.63 kW
- **CO2e Emissions Avoided:** 368.33 metric tons/year
- **Monthly CO2e Reduction:** 30.69 metric tons/month
- **Hourly CO2e Reduction:** 0.0420 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $14181/year

### Total NCDC3 North E Unity Savings

- **Per Hour:** $23.58
- **Per Day:** $565.98
- **Per Month:** $16979.37
- **Per Year:** $206582

### NCDC3 North E Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 444.5 kVAR Max (Avg: 296.6 kVAR/hr ; 213,539 kVAR/mo)
- **Max Harmonic Distortion:** 31.4% Max (range: 3.0% - 31.4%)
- **Max Amperage:** 872A Max (range: 476A - 872A)

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
| Line to Neutral Voltage (277v) |   277.23 |   267.75 |   287.04 |
| Line to Line Voltage (480v) |   480.17 |   463.75 |   497.16 |
| Current (AMPS) |   669.80 |   475.61 |   872.32 |
| Phase Angle (degrees) |    32.16 |    24.22 |    40.62 |
| Total Harmonic Distortion (PCT) |    15.84 |     3.00 |    31.41 |

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
| THD Phase A (%) | 5.3% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.3% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.3% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 15.8% | Field-level stress indicator |
| Max Phase THD | 5.3% | Highest THD among all three phases |
| Min Phase THD | 5.3% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 617.85 kW
  - **Maximum Load:** 722.22 kVA
  - **Percentage of Capacity (MAX):** 28.9%
- **Average Load:** 557.15 kVA
  - **Percentage of Capacity (Avg):** 22.3%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 557.15 kVA
- **Average Power Factor (PF):** 0.846

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 557.06 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 480.17 V
- Average Current (Iavg_A): 669.80 A
- Average kW (Psum_kW): 471.65 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.09 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.847
- **Power Factor Difference:** 0.000 (0.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (557.15) and measured PF (0.846) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   557.15 |        22.3% | 411,054.86 kVA | 1,609,337.16 TOTAL-HEAT |
| kW |   471.65 |        18.9% | 347,975.59 kWh | 246,964.14 Load-Heat |
| kVAR |   296.58 |        11.9% | 218,812.90 kVARh | - |
| WASTE |    85.50 |         3.4% | 63,079.27 WASTE | 44,768.42 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,609,337.16
- **Load-Heat (BTU/hr):** 246,964.14
- **Field-Heat (BTU/hr):** 44,768.42
- **Load-Heat (BTU, period total):** 182,206,026.50
- **Field-Heat (BTU, period total):** 33,029,393.54

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 5 |   557.15 |   471.65 |   296.15 |     0.85 |   22.3% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   529.43 |   448.60 |   280.79 |     0.85 |   21.2% |
| 01 |   552.16 |   465.83 |   296.05 |     0.84 |   22.1% |
| 02 |   550.42 |   468.36 |   288.60 |     0.85 |   22.0% |
| 03 |   517.91 |   438.81 |   274.86 |     0.85 |   20.7% |
| 04 |   536.41 |   457.46 |   279.45 |     0.85 |   21.5% |
| 05 |   494.58 |   418.62 |   263.05 |     0.85 |   19.8% |
| 06 |   528.77 |   447.85 |   280.59 |     0.85 |   21.2% |
| 07 |   531.24 |   445.48 |   289.12 |     0.84 |   21.2% |
| 08 |   519.78 |   440.62 |   275.15 |     0.85 |   20.8% |
| 09 |   532.09 |   450.51 |   282.75 |     0.85 |   21.3% |
| 10 |   563.38 |   476.51 |   300.17 |     0.85 |   22.5% |
| 11 |   571.56 |   484.28 |   302.96 |     0.85 |   22.9% |
| 12 |   551.31 |   465.15 |   295.63 |     0.84 |   22.1% |
| 13 |   584.90 |   498.90 |   304.80 |     0.85 |   23.4% |
| 14 |   598.57 |   501.23 |   326.97 |     0.84 |   23.9% |
| 15 |   606.54 |   512.65 |   323.72 |     0.85 |   24.3% |
| 16 |   585.35 |   491.41 |   317.77 |     0.84 |   23.4% |
| 17 |   588.99 |   496.97 |   315.81 |     0.84 |   23.6% |
| 18 |   561.84 |   476.00 |   298.25 |     0.85 |   22.5% |
| 19 |   571.84 |   483.92 |   304.37 |     0.85 |   22.9% |
| 20 |   575.61 |   492.23 |   297.89 |     0.86 |   23.0% |
| 21 |   543.44 |   462.64 |   284.88 |     0.85 |   21.7% |
| 22 |   609.80 |   520.61 |   317.04 |     0.85 |   24.4% |
| 23 |   572.06 |   480.81 |   309.60 |     0.84 |   22.9% |

---

# END OF REPORT

# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 341,897.5 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $66,670.02 (Cost per period)
- **Consumption Total Cost:** $92.60 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** FSO-3  
**Generated:** 2026-07-11 12:28:15  
**Data Source:** AN55050439-V-1minRES_43200CLP_260601-260630c.csv  

## Time Period

- **Period:** June 01, 2026 thru June 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,200

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

- **Transformer:** FSO-3
- **Power Factor:** 0.915
- **Total Energy (Actual):** 341,897.55 kWh (per period), 474.86 kW (per hour)
- **Total Waste (Actual):** 29,769.18 kWh (per period), 41.35 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_FSO-3_AN55050439-1minRES_260601-260630.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_FSO-3_AN55050439-1minRES_260601-260630.md


## UNITY MANAGEMENT FSO-3 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 41.35 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **FSO-3 Utility Cost Offset:** $8.06/hour
- **Annual Offset Savings:** $70627/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 149,612 BTU/hr
- **Total Cooling kW No Longer Needed:** 13.16 kW
- **Cooling Energy Cost Avoided:** $2.57/hour
- **Annual Cooling Savings:** $22478/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 54.50 kW
- **CO2e Emissions Avoided:** 178.24 metric tons/year
- **Monthly CO2e Reduction:** 14.85 metric tons/month
- **Hourly CO2e Reduction:** 0.0203 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $6773/year

### Total FSO-3 Unity Savings

- **Per Hour:** $11.40
- **Per Day:** $273.64
- **Per Month:** $8209.18
- **Per Year:** $99878

### FSO-3 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 344.7 kVAR Max (Avg: 202.4 kVAR/hr ; 145,747 kVAR/mo)
- **Max Harmonic Distortion:** 28.4% Max (range: 3.3% - 28.4%)
- **Max Amperage:** 1,100A Max (range: 0A - 1100A)

---

# FSO-3 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   277.75 |     0.00 |   287.35 |
| Line to Line Voltage (480v) |   481.08 |     0.00 |   497.71 |
| Current (AMPS) |   619.47 |     0.00 |  1100.14 |
| Phase Angle (degrees) |    23.57 |    19.95 |    90.00 |
| Total Harmonic Distortion (PCT) |    15.41 |     3.28 |    28.43 |

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
| THD Phase A (%) | 5.1% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.1% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.1% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 15.4% | Field-level stress indicator |
| Max Phase THD | 5.1% | Highest THD among all three phases |
| Min Phase THD | 5.1% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 840.68 kW
  - **Maximum Load:** 904.67 kVA
  - **Percentage of Capacity (MAX):** 36.2%
- **Average Load:** 516.20 kVA
  - **Percentage of Capacity (Avg):** 20.6%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 516.20 kVA
- **Average Power Factor (PF):** 0.915

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 516.18 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 481.08 V
- Average Current (Iavg_A): 619.47 A
- Average kW (Psum_kW): 474.86 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.03 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.920
- **Power Factor Difference:** 0.005 (0.5%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (516.20) and measured PF (0.915) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   516.20 |        20.6% | 371,666.72 kVA | 1,620,281.91 TOTAL-HEAT |
| kW |   474.86 |        19.0% | 341,897.55 kWh | 129,778.80 Load-Heat |
| kVAR |   202.43 |         8.1% | 145,747.12 kVARh | - |
| WASTE |    41.35 |         1.7% | 29,769.18 WASTE | 11,299.90 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,620,281.91
- **Load-Heat (BTU/hr):** 129,778.80
- **Field-Heat (BTU/hr):** 11,299.90
- **Load-Heat (BTU, period total):** 93,440,734.61
- **Field-Heat (BTU, period total):** 8,135,928.15

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 6 |   516.20 |   474.86 |   201.65 |     0.92 |   20.6% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   579.13 |   535.32 |   220.34 |     0.92 |   23.2% |
| 01 |   555.34 |   512.56 |   212.76 |     0.92 |   22.2% |
| 02 |   533.02 |   491.02 |   206.22 |     0.92 |   21.3% |
| 03 |   522.16 |   480.65 |   202.54 |     0.92 |   20.9% |
| 04 |   506.81 |   466.16 |   197.38 |     0.92 |   20.3% |
| 05 |   495.53 |   455.80 |   193.22 |     0.92 |   19.8% |
| 06 |   499.97 |   460.02 |   195.13 |     0.92 |   20.0% |
| 07 |   496.75 |   457.67 |   192.44 |     0.92 |   19.9% |
| 08 |   508.29 |   468.44 |   196.55 |     0.92 |   20.3% |
| 09 |   504.03 |   464.19 |   195.77 |     0.92 |   20.2% |
| 10 |   513.61 |   472.70 |   200.17 |     0.92 |   20.5% |
| 11 |   516.12 |   474.78 |   201.57 |     0.92 |   20.6% |
| 12 |   518.86 |   476.58 |   204.38 |     0.92 |   20.8% |
| 13 |   529.64 |   486.48 |   208.68 |     0.92 |   21.2% |
| 14 |   535.66 |   491.69 |   211.79 |     0.92 |   21.4% |
| 15 |   534.41 |   490.83 |   211.02 |     0.92 |   21.4% |
| 16 |   545.42 |   501.02 |   215.18 |     0.92 |   21.8% |
| 17 |   508.97 |   466.53 |   202.86 |     0.92 |   20.4% |
| 18 |   492.53 |   451.11 |   197.02 |     0.92 |   19.7% |
| 19 |   463.82 |   424.49 |   186.06 |     0.92 |   18.6% |
| 20 |   472.89 |   433.77 |   187.59 |     0.92 |   18.9% |
| 21 |   468.16 |   430.38 |   183.89 |     0.92 |   18.7% |
| 22 |   500.46 |   460.99 |   194.47 |     0.92 |   20.0% |
| 23 |   587.31 |   543.39 |   222.63 |     0.93 |   23.5% |

---

# END OF REPORT

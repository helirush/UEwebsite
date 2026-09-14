# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 291,649.9 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $56,871.73 (Cost per period)
- **Consumption Total Cost:** $79.00 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** FSO-1  
**Generated:** 2026-09-10 20:05:22  
**Data Source:** AN55050366-V-1minRES_43200CLP_260601-260630c.csv  

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

- **Transformer:** FSO-1
- **Power Factor:** 0.861
- **Total Energy (Actual):** 291,649.87 kWh (per period), 405.14 kW (per hour)
- **Total Waste (Actual):** 51,436.23 kWh (per period), 71.45 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_FSO-1_AN55050366-1minRES_260601-260630.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_FSO-1_AN55050366-1minRES_260601-260630.md


## UNITY MANAGEMENT FSO-1 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 71.45 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 44.28 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **FSO-1 Utility Cost Offset:** $13.93/hour
- **Annual Offset Savings:** $122055/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 172,563 BTU/hr
- **Total Cooling kW No Longer Needed:** 15.88 kW
- **Cooling Energy Cost Avoided:** $3.10/hour
- **Annual Cooling Savings:** $27133/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 87.34 kW
- **CO2e Emissions Avoided:** 285.60 metric tons/year
- **Monthly CO2e Reduction:** 23.80 metric tons/month
- **Hourly CO2e Reduction:** 0.0326 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $10853/year

### Total FSO-1 Unity Savings

- **Per Hour:** $18.27
- **Per Day:** $438.47
- **Per Month:** $13154.03
- **Per Year:** $160041

### FSO-1 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 940.4 kVAR Max (Avg: 251.0 kVAR/hr ; 180,722 kVAR/mo)
- **Max Harmonic Distortion:** 68.7% Max (range: 7.6% - 68.7%)
- **Max Amperage:** 1,399A Max (range: 228A - 1399A)

---

# FSO-1 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   278.39 |   271.84 |   288.03 |
| Line to Line Voltage (480v) |   482.18 |   470.84 |   498.88 |
| Current (AMPS) |   570.46 |   228.42 |  1399.21 |
| Phase Angle (degrees) |    30.29 |    15.85 |    64.34 |
| Total Harmonic Distortion (PCT) |    22.70 |     7.63 |    68.72 |

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
| THD Phase A (%) | 7.8% | IEEE standard per-phase calculation |
| THD Phase B (%) | 7.7% | IEEE standard per-phase calculation |
| THD Phase C (%) | 7.2% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 22.7% | Field-level stress indicator |
| Max Phase THD | 7.8% | Highest THD among all three phases |
| Min Phase THD | 7.2% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 763.26 kW
  - **Maximum Load:** 1,194.26 kVA
  - **Percentage of Capacity (MAX):** 47.8%
- **Average Load:** 476.60 kVA
  - **Percentage of Capacity (Avg):** 19.1%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 476.60 kVA
- **Average Power Factor (PF):** 0.861

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 476.43 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 482.18 V
- Average Current (Iavg_A): 570.46 A
- Average kW (Psum_kW): 405.14 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.17 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.850
- **Power Factor Difference:** 0.011 (1.3%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (476.60) and measured PF (0.861) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   476.60 |        19.1% | 343,086.10 kVA | 1,382,409.87 TOTAL-HEAT |
| kW |   405.14 |        16.2% | 291,649.87 kWh | 207,253.94 Load-Heat |
| kVAR |   251.00 |        10.0% | 180,688.75 kVARh | - |
| WASTE |    71.45 |         2.9% | 51,436.23 WASTE | 36,551.91 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,382,409.87
- **Load-Heat (BTU/hr):** 207,253.94
- **Field-Heat (BTU/hr):** 36,551.91
- **Load-Heat (BTU, period total):** 149,195,205.55
- **Field-Heat (BTU, period total):** 26,312,503.78

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 6 |   476.60 |   405.14 |   249.16 |     0.85 |   19.1% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   499.09 |   422.06 |   264.84 |     0.85 |   20.0% |
| 01 |   519.04 |   437.71 |   277.68 |     0.84 |   20.8% |
| 02 |   455.31 |   390.46 |   232.05 |     0.86 |   18.2% |
| 03 |   526.53 |   443.64 |   282.32 |     0.84 |   21.1% |
| 04 |   500.33 |   425.18 |   262.14 |     0.85 |   20.0% |
| 05 |   523.62 |   443.62 |   276.95 |     0.85 |   20.9% |
| 06 |   533.94 |   452.24 |   282.74 |     0.85 |   21.4% |
| 07 |   563.20 |   473.74 |   303.03 |     0.84 |   22.5% |
| 08 |   589.89 |   495.81 |   318.23 |     0.84 |   23.6% |
| 09 |   562.38 |   475.43 |   298.97 |     0.85 |   22.5% |
| 10 |   593.56 |   497.08 |   323.01 |     0.84 |   23.7% |
| 11 |   495.73 |   421.39 |   259.09 |     0.85 |   19.8% |
| 12 |   564.81 |   470.78 |   310.51 |     0.83 |   22.6% |
| 13 |   567.74 |   472.65 |   313.18 |     0.83 |   22.7% |
| 14 |   529.84 |   445.45 |   285.17 |     0.84 |   21.2% |
| 15 |   550.46 |   459.89 |   301.26 |     0.84 |   22.0% |
| 16 |   499.61 |   419.82 |   269.18 |     0.84 |   20.0% |
| 17 |   334.58 |   293.83 |   158.55 |     0.88 |   13.4% |
| 18 |   312.75 |   276.46 |   145.40 |     0.88 |   12.5% |
| 19 |   303.41 |   269.18 |   139.38 |     0.89 |   12.1% |
| 20 |   291.67 |   259.29 |   133.07 |     0.89 |   11.7% |
| 21 |   304.61 |   271.24 |   138.16 |     0.89 |   12.2% |
| 22 |   341.49 |   303.04 |   156.32 |     0.89 |   13.7% |
| 23 |   474.59 |   403.37 |   248.54 |     0.85 |   19.0% |

---

# END OF REPORT

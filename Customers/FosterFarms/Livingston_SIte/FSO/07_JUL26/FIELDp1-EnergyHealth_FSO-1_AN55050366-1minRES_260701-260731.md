# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 310,179.5 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $60,485.00 (Cost per period)
- **Consumption Total Cost:** $81.34 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** FSO-1  
**Generated:** 2026-09-10 19:28:39  
**Data Source:** AN55050366-V-1minRES_44640CLP_260701-260731c.csv  

## Time Period

- **Period:** July 01, 2026 thru July 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,617

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

- **Transformer:** FSO-1
- **Power Factor:** 0.862
- **Total Energy (Actual):** 310,179.51 kWh (per period), 417.12 kW (per hour)
- **Total Waste (Actual):** 54,688.62 kWh (per period), 73.54 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_FSO-1_AN55050366-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_FSO-1_AN55050366-1minRES_260701-260731.md


## UNITY MANAGEMENT FSO-1 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 73.54 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 43.70 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **FSO-1 Utility Cost Offset:** $14.34/hour
- **Annual Offset Savings:** $125628/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 157,999 BTU/hr
- **Total Cooling kW No Longer Needed:** 14.08 kW
- **Cooling Energy Cost Avoided:** $2.75/hour
- **Annual Cooling Savings:** $24058/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 87.63 kW
- **CO2e Emissions Avoided:** 286.56 metric tons/year
- **Monthly CO2e Reduction:** 23.88 metric tons/month
- **Hourly CO2e Reduction:** 0.0327 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $10889/year

### Total FSO-1 Unity Savings

- **Per Hour:** $18.33
- **Per Day:** $439.93
- **Per Month:** $13197.94
- **Per Year:** $160575

### FSO-1 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 872.8 kVAR Max (Avg: 258.4 kVAR/hr ; 186,037 kVAR/mo)
- **Max Harmonic Distortion:** 29.9% Max (range: 3.2% - 29.9%)
- **Max Amperage:** 1,375A Max (range: 162A - 1375A)

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
| Line to Neutral Voltage (277v) |   278.33 |   268.69 |   287.77 |
| Line to Line Voltage (480v) |   482.07 |   465.39 |   498.43 |
| Current (AMPS) |   587.59 |   162.33 |  1375.21 |
| Phase Angle (degrees) |    30.24 |    14.30 |    63.64 |
| Total Harmonic Distortion (PCT) |    15.25 |     3.24 |    29.88 |

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
| Unity THD Composite (%) | 15.3% | Field-level stress indicator |
| Max Phase THD | 5.1% | Highest THD among all three phases |
| Min Phase THD | 5.1% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 774.11 kW
  - **Maximum Load:** 1,124.20 kVA
  - **Percentage of Capacity (MAX):** 45.0%
- **Average Load:** 490.67 kVA
  - **Percentage of Capacity (Avg):** 19.6%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 490.67 kVA
- **Average Power Factor (PF):** 0.862

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 490.62 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 482.07 V
- Average Current (Iavg_A): 587.59 A
- Average kW (Psum_kW): 417.12 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.05 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.850
- **Power Factor Difference:** 0.012 (1.4%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (490.67) and measured PF (0.862) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   490.67 |        19.6% | 364,868.13 kVA | 1,423,282.42 TOTAL-HEAT |
| kW |   417.12 |        16.7% | 310,179.51 kWh | 213,330.08 Load-Heat |
| kVAR |   258.38 |        10.3% | 192,139.07 kVARh | - |
| WASTE |    73.54 |         2.9% | 54,688.62 WASTE | 37,612.82 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,423,282.42
- **Load-Heat (BTU/hr):** 213,330.08
- **Field-Heat (BTU/hr):** 37,612.82
- **Load-Heat (BTU, period total):** 158,635,804.08
- **Field-Heat (BTU, period total):** 27,969,522.31

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 |   490.67 |   417.12 |   256.46 |     0.85 |   19.6% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   506.09 |   426.36 |   271.17 |     0.84 |   20.2% |
| 01 |   529.21 |   445.21 |   284.70 |     0.84 |   21.2% |
| 02 |   478.23 |   406.89 |   249.34 |     0.85 |   19.1% |
| 03 |   550.34 |   460.25 |   300.49 |     0.84 |   22.0% |
| 04 |   525.95 |   443.59 |   280.99 |     0.84 |   21.0% |
| 05 |   544.61 |   458.54 |   292.47 |     0.84 |   21.8% |
| 06 |   558.83 |   469.85 |   301.31 |     0.84 |   22.4% |
| 07 |   581.08 |   487.67 |   314.61 |     0.84 |   23.2% |
| 08 |   617.30 |   516.17 |   337.26 |     0.84 |   24.7% |
| 09 |   577.74 |   487.19 |   308.60 |     0.84 |   23.1% |
| 10 |   600.58 |   504.53 |   324.42 |     0.84 |   24.0% |
| 11 |   491.48 |   420.78 |   251.68 |     0.86 |   19.7% |
| 12 |   582.91 |   489.02 |   315.60 |     0.84 |   23.3% |
| 13 |   592.99 |   497.67 |   321.21 |     0.84 |   23.7% |
| 14 |   557.19 |   469.53 |   298.36 |     0.84 |   22.3% |
| 15 |   565.09 |   475.94 |   303.04 |     0.84 |   22.6% |
| 16 |   448.85 |   385.89 |   226.96 |     0.86 |   18.0% |
| 17 |   363.25 |   318.45 |   173.16 |     0.88 |   14.5% |
| 18 |   332.98 |   294.94 |   153.58 |     0.89 |   13.3% |
| 19 |   311.16 |   277.14 |   140.98 |     0.89 |   12.4% |
| 20 |   302.85 |   269.84 |   137.08 |     0.89 |   12.1% |
| 21 |   321.33 |   286.42 |   145.31 |     0.89 |   12.9% |
| 22 |   357.38 |   313.77 |   169.62 |     0.88 |   14.3% |
| 23 |   478.36 |   405.12 |   253.01 |     0.85 |   19.1% |

---

# END OF REPORT

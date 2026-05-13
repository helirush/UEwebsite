# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 326,499.3 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $63,667.36 (Cost per period)
- **Consumption Total Cost:** $88.45 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL1-Proc2  
**Generated:** 2026-05-10 11:12:08  
**Data Source:** AN55050338-V-1minRES_43200CLP_260401-260430c.csv  

## Time Period

- **Period:** April 01, 2026 thru April 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,190

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

- **Transformer:** PL1-Proc2
- **Power Factor:** 0.840
- **Total Energy (Actual):** 326,499.27 kWh (per period), 453.58 kW (per hour)
- **Total Waste (Actual):** 54,050.18 kWh (per period), 75.09 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL1-Proc2_AN55050338-1minRES_260401-260430.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL1-Proc2_AN55050338-1minRES_260401-260430.md


## UNITY MANAGEMENT PL1-Proc2 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 75.09 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL1-Proc2 Utility Cost Offset:** $14.64/hour
- **Annual Offset Savings:** $128264/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 406,616 BTU/hr
- **Total Cooling kW No Longer Needed:** 35.61 kW
- **Cooling Energy Cost Avoided:** $6.94/hour
- **Annual Cooling Savings:** $60822/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 110.69 kW
- **CO2e Emissions Avoided:** 361.98 metric tons/year
- **Monthly CO2e Reduction:** 30.17 metric tons/month
- **Hourly CO2e Reduction:** 0.0413 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $13936/year

### Total PL1-Proc2 Unity Savings

- **Per Hour:** $23.18
- **Per Day:** $556.22
- **Per Month:** $16686.72
- **Per Year:** $203022

### PL1-Proc2 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 836.5 kVAR Max (Avg: 271.6 kVAR/hr ; 195,535 kVAR/mo)
- **Max Harmonic Distortion:** 31.7% Max (range: 3.6% - 31.7%)
- **Max Amperage:** 1,509A Max (range: 75A - 1509A)

---

# PL1-Proc2 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   184.74 |   181.10 |   191.60 |
| Line to Line Voltage (480v) |   319.99 |   313.68 |   331.87 |
| Current (AMPS) |   767.20 |    74.54 |  1509.08 |
| Phase Angle (degrees) |    32.61 |    27.13 |    77.23 |
| Total Harmonic Distortion (PCT) |    14.99 |     3.61 |    31.68 |

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
| THD Phase B (%) | 5.0% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.0% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 15.0% | Field-level stress indicator |
| Max Phase THD | 5.0% | Highest THD among all three phases |
| Min Phase THD | 5.0% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 917.22 kW
  - **Maximum Load:** 1,036.31 kVA
  - **Percentage of Capacity (MAX):** 41.5%
- **Average Load:** 528.66 kVA
  - **Percentage of Capacity (Avg):** 21.1%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 528.66 kVA
- **Average Power Factor (PF):** 0.840

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 425.21 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 319.99 V
- Average Current (Iavg_A): 767.20 A
- Average kW (Psum_kW): 453.58 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 103.46 kVA (19.6%)
- **Calculated PF (kW/kVA from averages):** 1.067
- **Power Factor Difference:** 0.227 (27.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (528.66) and measured PF (0.840) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   528.66 |        21.1% | 380,549.45 kVA | 1,547,666.39 TOTAL-HEAT |
| kW |   453.58 |        18.1% | 326,499.27 kWh | 219,818.07 Load-Heat |
| kVAR |   271.58 |        10.9% | 195,489.41 kVARh | - |
| WASTE |    75.09 |         3.0% | 54,050.18 WASTE | 36,389.69 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,547,666.39
- **Load-Heat (BTU/hr):** 219,818.07
- **Field-Heat (BTU/hr):** 36,389.69
- **Load-Heat (BTU, period total):** 158,232,376.48
- **Field-Heat (BTU, period total):** 26,194,510.05

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 4 |   528.66 |   453.58 |   270.06 |     0.86 |   21.1% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   584.39 |   504.49 |   293.65 |     0.86 |   23.4% |
| 01 |   558.35 |   479.63 |   284.53 |     0.86 |   22.3% |
| 02 |   562.49 |   484.09 |   285.05 |     0.86 |   22.5% |
| 03 |   553.13 |   476.08 |   280.22 |     0.86 |   22.1% |
| 04 |   557.09 |   478.91 |   282.94 |     0.86 |   22.3% |
| 05 |   567.60 |   489.08 |   286.51 |     0.86 |   22.7% |
| 06 |   588.09 |   507.67 |   295.23 |     0.86 |   23.5% |
| 07 |   595.80 |   514.88 |   298.30 |     0.86 |   23.8% |
| 08 |   597.76 |   516.61 |   299.27 |     0.86 |   23.9% |
| 09 |   600.58 |   518.93 |   300.87 |     0.86 |   24.0% |
| 10 |   597.51 |   516.56 |   298.91 |     0.86 |   23.9% |
| 11 |   595.56 |   515.37 |   297.15 |     0.87 |   23.8% |
| 12 |   585.99 |   506.85 |   292.80 |     0.86 |   23.4% |
| 13 |   580.17 |   500.15 |   292.61 |     0.86 |   23.2% |
| 14 |   540.79 |   464.48 |   275.41 |     0.86 |   21.6% |
| 15 |   452.37 |   383.74 |   238.22 |     0.85 |   18.1% |
| 16 |   417.45 |   352.38 |   222.72 |     0.84 |   16.7% |
| 17 |   361.99 |   300.86 |   200.13 |     0.83 |   14.5% |
| 18 |   315.25 |   259.32 |   178.39 |     0.82 |   12.6% |
| 19 |   428.63 |   362.23 |   227.66 |     0.85 |   17.1% |
| 20 |   476.46 |   404.49 |   250.70 |     0.85 |   19.1% |
| 21 |   470.83 |   399.79 |   247.53 |     0.85 |   18.8% |
| 22 |   531.84 |   458.61 |   268.16 |     0.86 |   21.3% |
| 23 |   568.03 |   490.82 |   284.63 |     0.86 |   22.7% |

---

# END OF REPORT

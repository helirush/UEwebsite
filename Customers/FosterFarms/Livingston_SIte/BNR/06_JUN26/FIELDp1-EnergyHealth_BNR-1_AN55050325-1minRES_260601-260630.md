# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 1,007,404.0 kWh (Usage per period)
- **Consumption Cost per unit:** $0.120/kWh (Cost per kWh)
- **Consumption Total Cost:** $120,888.47 (Cost per period)
- **Consumption Total Cost:** $169.40 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** BNR-1  
**Generated:** 2026-07-06 11:08:08  
**Data Source:** AN55050325-V-1minRES_43200CLP_260601-260630c.csv  

## Time Period

- **Period:** June 01, 2026 thru June 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 42,818

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

- **Transformer:** BNR-1
- **Power Factor:** 0.897
- **Total Energy (Actual):** 1,007,403.95 kWh (per period), 1411.65 kW (per hour)
- **Total Waste (Actual):** 115,322.05 kWh (per period), 161.60 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_BNR-1_AN55050325-1minRES_260601-260630.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_BNR-1_AN55050325-1minRES_260601-260630.md


## UNITY MANAGEMENT BNR-1 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 161.60 kW/hr
- **Blended Electricity Rate:** $0.1200/kWh (all-inclusive)
- **BNR-1 Utility Cost Offset:** $19.39/hour
- **Annual Offset Savings:** $169872/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 619,289 BTU/hr
- **Total Cooling kW No Longer Needed:** 54.47 kW
- **Cooling Energy Cost Avoided:** $6.54/hour
- **Annual Cooling Savings:** $57262/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 216.07 kW
- **CO2e Emissions Avoided:** 706.59 metric tons/year
- **Monthly CO2e Reduction:** 58.88 metric tons/month
- **Hourly CO2e Reduction:** 0.0807 metric tons/hour
- **CO2e Value Rate:** $35/metric ton
- **Annual CO2e Value:** $24731/year

### Total BNR-1 Unity Savings

- **Per Hour:** $28.75
- **Per Day:** $690.04
- **Per Month:** $20701.21
- **Per Year:** $251865

### BNR-1 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 724.3 kVAR Max (Avg: 694.5 kVAR/hr ; 500,054 kVAR/mo)
- **Max Harmonic Distortion:** 31.5% Max (range: 3.0% - 31.5%)
- **Max Amperage:** 2,001A Max (range: 1840A - 2001A)

---

# BNR-1 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   273.14 |   266.41 |   282.45 |
| Line to Line Voltage (480v) |   473.10 |   461.44 |   489.21 |
| Current (AMPS) |  1919.51 |  1839.95 |  2001.20 |
| Phase Angle (degrees) |    26.20 |    25.18 |    27.13 |
| Total Harmonic Distortion (PCT) |    17.58 |     3.00 |    31.54 |

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
| THD Phase A (%) | 5.9% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.9% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.9% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 17.6% | Field-level stress indicator |
| Max Phase THD | 5.9% | Highest THD among all three phases |
| Min Phase THD | 5.9% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,466.37 kW
  - **Maximum Load:** 1,629.71 kVA
  - **Percentage of Capacity (MAX):** 65.2%
- **Average Load:** 1,573.25 kVA
  - **Percentage of Capacity (Avg):** 62.9%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,573.25 kVA
- **Average Power Factor (PF):** 0.897

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,572.91 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 473.10 V
- Average Current (Iavg_A): 1919.51 A
- Average kW (Psum_kW): 1411.65 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.34 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.897
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1573.25) and measured PF (0.897) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,573.25 |        62.9% | 1,122,726.01 kVA | 4,816,766.79 TOTAL-HEAT |
| kW | 1,411.65 |        56.5% | 1,007,403.95 kWh | 494,759.58 Load-Heat |
| kVAR |   694.52 |        27.8% | 495,631.88 kVARh | - |
| WASTE |   161.60 |         6.5% | 115,322.05 WASTE | 56,637.35 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 4,816,766.79
- **Load-Heat (BTU/hr):** 494,759.58
- **Field-Heat (BTU/hr):** 56,637.35
- **Load-Heat (BTU, period total):** 353,076,925.27
- **Field-Heat (BTU, period total):** 40,418,301.32

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 6 | 1,573.25 | 1,411.65 |   694.49 |     0.90 |   62.9% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,576.13 | 1,414.95 |   694.31 |     0.90 |   63.0% |
| 01 | 1,575.55 | 1,413.98 |   694.98 |     0.90 |   63.0% |
| 02 | 1,572.46 | 1,411.10 |   693.85 |     0.90 |   62.9% |
| 03 | 1,570.55 | 1,409.71 |   692.31 |     0.90 |   62.8% |
| 04 | 1,570.87 | 1,410.40 |   691.66 |     0.90 |   62.8% |
| 05 | 1,569.15 | 1,409.44 |   689.68 |     0.90 |   62.8% |
| 06 | 1,567.36 | 1,407.23 |   690.13 |     0.90 |   62.7% |
| 07 | 1,565.66 | 1,405.17 |   690.48 |     0.90 |   62.6% |
| 08 | 1,566.51 | 1,405.54 |   691.66 |     0.90 |   62.7% |
| 09 | 1,572.11 | 1,410.35 |   694.54 |     0.90 |   62.9% |
| 10 | 1,573.45 | 1,411.20 |   695.87 |     0.90 |   62.9% |
| 11 | 1,573.64 | 1,411.07 |   696.54 |     0.90 |   62.9% |
| 12 | 1,575.49 | 1,412.86 |   697.11 |     0.90 |   63.0% |
| 13 | 1,577.74 | 1,415.11 |   697.63 |     0.90 |   63.1% |
| 14 | 1,577.99 | 1,415.20 |   698.01 |     0.90 |   63.1% |
| 15 | 1,577.81 | 1,415.35 |   697.31 |     0.90 |   63.1% |
| 16 | 1,576.21 | 1,413.95 |   696.53 |     0.90 |   63.0% |
| 17 | 1,576.01 | 1,413.47 |   697.03 |     0.90 |   63.0% |
| 18 | 1,575.23 | 1,412.27 |   697.73 |     0.90 |   63.0% |
| 19 | 1,571.20 | 1,409.32 |   694.60 |     0.90 |   62.8% |
| 20 | 1,570.22 | 1,408.77 |   693.49 |     0.90 |   62.8% |
| 21 | 1,573.44 | 1,412.38 |   693.43 |     0.90 |   62.9% |
| 22 | 1,575.95 | 1,414.79 |   694.21 |     0.90 |   63.0% |
| 23 | 1,577.29 | 1,416.11 |   694.58 |     0.90 |   63.1% |

---

# END OF REPORT

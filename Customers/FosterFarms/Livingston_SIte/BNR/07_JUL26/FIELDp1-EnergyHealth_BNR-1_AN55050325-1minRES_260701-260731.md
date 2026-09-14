# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 1,024,530.0 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $199,783.35 (Cost per period)
- **Consumption Total Cost:** $272.92 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** BNR-1  
**Generated:** 2026-09-10 19:27:02  
**Data Source:** AN55050325-V-1minRES_44640CLP_260701-260731c.csv  

## Time Period

- **Period:** July 01, 2026 thru July 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,921

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

- **Transformer:** BNR-1
- **Power Factor:** 0.897
- **Total Energy (Actual):** 1,024,529.99 kWh (per period), 1399.60 kW (per hour)
- **Total Waste (Actual):** 118,157.17 kWh (per period), 161.41 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_BNR-1_AN55050325-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_BNR-1_AN55050325-1minRES_260701-260731.md


## UNITY MANAGEMENT BNR-1 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 161.41 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 92.13 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **BNR-1 Utility Cost Offset:** $31.48/hour
- **Annual Offset Savings:** $275726/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 353,099 BTU/hr
- **Total Cooling kW No Longer Needed:** 31.48 kW
- **Cooling Energy Cost Avoided:** $6.14/hour
- **Annual Cooling Savings:** $53769/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 192.89 kW
- **CO2e Emissions Avoided:** 630.78 metric tons/year
- **Monthly CO2e Reduction:** 52.57 metric tons/month
- **Hourly CO2e Reduction:** 0.0720 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $23970/year

### Total BNR-1 Unity Savings

- **Per Hour:** $40.35
- **Per Day:** $968.40
- **Per Month:** $29051.90
- **Per Year:** $353465

### BNR-1 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 724.6 kVAR Max (Avg: 691.3 kVAR/hr ; 497,729 kVAR/mo)
- **Max Harmonic Distortion:** 32.7% Max (range: 3.4% - 32.7%)
- **Max Amperage:** 1,998A Max (range: 1812A - 1998A)

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
| Line to Neutral Voltage (277v) |   273.16 |   263.51 |   282.42 |
| Line to Line Voltage (480v) |   473.12 |   456.42 |   489.16 |
| Current (AMPS) |  1904.84 |  1811.89 |  1998.33 |
| Phase Angle (degrees) |    26.29 |    25.44 |    27.38 |
| Total Harmonic Distortion (PCT) |    17.63 |     3.39 |    32.72 |

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

- **Maximum UtilityDemand:** 1,470.25 kW
  - **Maximum Load:** 1,634.04 kVA
  - **Percentage of Capacity (MAX):** 65.4%
- **Average Load:** 1,561.01 kVA
  - **Percentage of Capacity (Avg):** 62.4%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,561.01 kVA
- **Average Power Factor (PF):** 0.897

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,560.96 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 473.12 V
- Average Current (Iavg_A): 1904.84 A
- Average kW (Psum_kW): 1399.60 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.05 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.897
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1561.01) and measured PF (0.897) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,561.01 |        62.4% | 1,142,687.16 kVA | 4,775,631.42 TOTAL-HEAT |
| kW | 1,399.60 |        56.0% | 1,024,529.99 kWh | 493,814.16 Load-Heat |
| kVAR |   691.29 |        27.7% | 506,035.82 kVARh | - |
| WASTE |   161.41 |         6.5% | 118,157.17 WASTE | 56,950.69 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 4,775,631.42
- **Load-Heat (BTU/hr):** 493,814.16
- **Field-Heat (BTU/hr):** 56,950.69
- **Load-Heat (BTU, period total):** 361,480,197.21
- **Field-Heat (BTU, period total):** 41,688,850.81

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 | 1,561.01 | 1,399.60 |   691.26 |     0.90 |   62.4% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,563.96 | 1,401.91 |   693.25 |     0.90 |   62.6% |
| 01 | 1,564.60 | 1,402.33 |   693.84 |     0.90 |   62.6% |
| 02 | 1,564.34 | 1,401.76 |   694.40 |     0.90 |   62.6% |
| 03 | 1,563.61 | 1,401.09 |   694.10 |     0.90 |   62.5% |
| 04 | 1,564.20 | 1,401.72 |   694.16 |     0.90 |   62.6% |
| 05 | 1,562.75 | 1,401.10 |   692.16 |     0.90 |   62.5% |
| 06 | 1,560.77 | 1,399.04 |   691.86 |     0.90 |   62.4% |
| 07 | 1,560.42 | 1,398.77 |   691.62 |     0.90 |   62.4% |
| 08 | 1,558.12 | 1,396.45 |   691.09 |     0.90 |   62.3% |
| 09 | 1,556.91 | 1,394.95 |   691.40 |     0.90 |   62.3% |
| 10 | 1,554.96 | 1,393.07 |   690.82 |     0.90 |   62.2% |
| 11 | 1,558.36 | 1,396.12 |   692.31 |     0.90 |   62.3% |
| 12 | 1,558.63 | 1,396.86 |   691.42 |     0.90 |   62.3% |
| 13 | 1,561.39 | 1,399.77 |   691.79 |     0.90 |   62.5% |
| 14 | 1,562.72 | 1,401.36 |   691.56 |     0.90 |   62.5% |
| 15 | 1,561.41 | 1,400.48 |   690.38 |     0.90 |   62.5% |
| 16 | 1,560.64 | 1,399.71 |   690.19 |     0.90 |   62.4% |
| 17 | 1,561.23 | 1,400.30 |   690.34 |     0.90 |   62.4% |
| 18 | 1,562.34 | 1,401.45 |   690.52 |     0.90 |   62.5% |
| 19 | 1,560.68 | 1,400.65 |   688.39 |     0.90 |   62.4% |
| 20 | 1,559.41 | 1,400.01 |   686.80 |     0.90 |   62.4% |
| 21 | 1,560.42 | 1,400.38 |   688.33 |     0.90 |   62.4% |
| 22 | 1,561.96 | 1,401.36 |   689.84 |     0.90 |   62.5% |
| 23 | 1,560.37 | 1,399.46 |   690.10 |     0.90 |   62.4% |

---

# END OF REPORT

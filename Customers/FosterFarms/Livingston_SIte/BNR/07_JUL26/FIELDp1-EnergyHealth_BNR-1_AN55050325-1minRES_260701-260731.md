# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 1,040,459.1 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $202,889.53 (Cost per period)
- **Consumption Total Cost:** $272.70 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** BNR-1  
**Generated:** 2026-08-02 19:06:14  
**Data Source:** AN55050325-V-1minRES_44640CLP_260701-260731c.csv  

## Time Period

- **Period:** July 01, 2026 thru July 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,640

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
- **Power Factor:** 0.896
- **Total Energy (Actual):** 1,040,459.12 kWh (per period), 1398.47 kW (per hour)
- **Total Waste (Actual):** 120,016.75 kWh (per period), 161.31 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_BNR-1_AN55050325-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_BNR-1_AN55050325-1minRES_260701-260731.md


## UNITY MANAGEMENT BNR-1 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 161.31 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 92.12 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **BNR-1 Utility Cost Offset:** $31.46/hour
- **Annual Offset Savings:** $275555/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 353,186 BTU/hr
- **Total Cooling kW No Longer Needed:** 31.48 kW
- **Cooling Energy Cost Avoided:** $6.14/hour
- **Annual Cooling Savings:** $53778/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 192.80 kW
- **CO2e Emissions Avoided:** 630.47 metric tons/year
- **Monthly CO2e Reduction:** 52.54 metric tons/month
- **Hourly CO2e Reduction:** 0.0720 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $23958/year

### Total BNR-1 Unity Savings

- **Per Hour:** $40.33
- **Per Day:** $967.92
- **Per Month:** $29037.59
- **Per Year:** $353291

### BNR-1 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 725.5 kVAR Max (Avg: 690.8 kVAR/hr ; 497,375 kVAR/mo)
- **Max Harmonic Distortion:** 32.7% Max (range: 3.4% - 32.7%)
- **Max Amperage:** 2,021A Max (range: 0A - 2021A)

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
| Line to Neutral Voltage (277v) |   273.13 |     0.00 |   282.42 |
| Line to Line Voltage (480v) |   473.07 |     0.00 |   489.16 |
| Current (AMPS) |  1903.28 |     0.00 |  2020.59 |
| Phase Angle (degrees) |    26.30 |    25.31 |    90.00 |
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

- **Maximum UtilityDemand:** 1,486.03 kW
  - **Maximum Load:** 1,650.03 kVA
  - **Percentage of Capacity (MAX):** 66.0%
- **Average Load:** 1,559.78 kVA
  - **Percentage of Capacity (Avg):** 62.4%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,559.78 kVA
- **Average Power Factor (PF):** 0.896

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,559.51 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 473.07 V
- Average Current (Iavg_A): 1903.28 A
- Average kW (Psum_kW): 1398.47 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.27 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.897
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1559.78) and measured PF (0.896) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,559.78 |        62.4% | 1,160,475.88 kVA | 4,771,766.50 TOTAL-HEAT |
| kW | 1,398.47 |        55.9% | 1,040,459.12 kWh | 493,497.49 Load-Heat |
| kVAR |   690.80 |        27.6% | 513,954.35 kVARh | - |
| WASTE |   161.31 |         6.5% | 120,016.75 WASTE | 56,924.84 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 4,771,766.50
- **Load-Heat (BTU/hr):** 493,497.49
- **Field-Heat (BTU/hr):** 56,924.84
- **Load-Heat (BTU, period total):** 367,162,129.61
- **Field-Heat (BTU, period total):** 42,352,079.16

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 | 1,559.78 | 1,398.47 |   690.77 |     0.90 |   62.4% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,563.19 | 1,401.16 |   693.02 |     0.90 |   62.5% |
| 01 | 1,563.31 | 1,401.14 |   693.35 |     0.90 |   62.5% |
| 02 | 1,562.60 | 1,400.14 |   693.76 |     0.90 |   62.5% |
| 03 | 1,560.48 | 1,398.22 |   692.85 |     0.90 |   62.4% |
| 04 | 1,562.01 | 1,399.68 |   693.35 |     0.90 |   62.5% |
| 05 | 1,560.95 | 1,399.42 |   691.49 |     0.90 |   62.4% |
| 06 | 1,558.68 | 1,397.09 |   691.08 |     0.90 |   62.3% |
| 07 | 1,558.51 | 1,397.03 |   690.83 |     0.90 |   62.3% |
| 08 | 1,557.28 | 1,395.67 |   690.79 |     0.90 |   62.3% |
| 09 | 1,555.90 | 1,394.05 |   690.95 |     0.90 |   62.2% |
| 10 | 1,550.08 | 1,388.59 |   688.88 |     0.90 |   62.0% |
| 11 | 1,553.19 | 1,391.42 |   690.15 |     0.90 |   62.1% |
| 12 | 1,554.34 | 1,392.97 |   689.62 |     0.90 |   62.2% |
| 13 | 1,561.59 | 1,400.01 |   691.74 |     0.90 |   62.5% |
| 14 | 1,564.62 | 1,403.22 |   692.08 |     0.90 |   62.6% |
| 15 | 1,562.32 | 1,401.38 |   690.61 |     0.90 |   62.5% |
| 16 | 1,560.48 | 1,399.55 |   690.17 |     0.90 |   62.4% |
| 17 | 1,561.16 | 1,400.23 |   690.32 |     0.90 |   62.4% |
| 18 | 1,562.34 | 1,401.45 |   690.52 |     0.90 |   62.5% |
| 19 | 1,560.68 | 1,400.65 |   688.39 |     0.90 |   62.4% |
| 20 | 1,559.41 | 1,400.01 |   686.80 |     0.90 |   62.4% |
| 21 | 1,559.58 | 1,399.63 |   687.96 |     0.90 |   62.4% |
| 22 | 1,561.90 | 1,401.30 |   689.82 |     0.90 |   62.5% |
| 23 | 1,560.11 | 1,399.20 |   690.02 |     0.90 |   62.4% |

---

# END OF REPORT

# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 910,388.1 kWh (Usage per period)
- **Consumption Cost per unit:** $0.110/kWh (Cost per kWh)
- **Consumption Total Cost:** $100,142.69 (Cost per period)
- **Consumption Total Cost:** $150.88 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** HAD2500  
**Generated:** 2026-09-12 17:51:11  
**Data Source:** AN21061800-V-1minRES_44640CLP_260101-260131c.csv  

## Time Period

- **Period:** January 01, 2026 thru January 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 39,824

- **Dataset Coverage:** Complete month (100.0% of 31-day month)
- **Billing Scale Factor:** 1.000x (no normalization needed)

## Facility Information

- **Facility:** Tyson Foods
- **Location:** Scranton Facility
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** HAD2500
- **Power Factor:** 0.966
- **Total Energy (Actual):** 910,388.09 kWh (per period), 1371.62 kW (per hour)
- **Total Waste (Actual):** 33,685.17 kWh (per period), 50.75 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_HAD2500_AN21061800-1minRES_260101-260131.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_HAD2500_AN21061800-1minRES_260101-260131.md


## UNITY MANAGEMENT HAD2500 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 50.75 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 23.05 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1100/kWh (all-inclusive)
- **HAD2500 Utility Cost Offset:** $5.58/hour
- **Annual Offset Savings:** $48904/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 84,171 BTU/hr
- **Total Cooling kW No Longer Needed:** 7.71 kW
- **Cooling Energy Cost Avoided:** $0.85/hour
- **Annual Cooling Savings:** $7433/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 58.47 kW
- **CO2e Emissions Avoided:** 191.19 metric tons/year
- **Monthly CO2e Reduction:** 15.93 metric tons/month
- **Hourly CO2e Reduction:** 0.0218 metric tons/hour
- **CO2e Value Rate:** $10/metric ton
- **Annual CO2e Value:** $1912/year

### Total HAD2500 Unity Savings

- **Per Hour:** $6.65
- **Per Day:** $159.59
- **Per Month:** $4787.60
- **Per Year:** $58249

### HAD2500 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 815.1 kVAR Max (Avg: 376.6 kVAR/hr ; 271,123 kVAR/mo)
- **Max Harmonic Distortion:** 31.7% Max (range: 3.0% - 31.7%)
- **Max Amperage:** 2,120A Max (range: 981A - 2120A)

---

# HAD2500 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   277.95 |   271.19 |   286.58 |
| Line to Line Voltage (480v) |   481.43 |   469.72 |   496.37 |
| Current (AMPS) |  1707.16 |   980.54 |  2119.84 |
| Phase Angle (degrees) |    14.47 |     1.84 |    28.78 |
| Total Harmonic Distortion (PCT) |    17.02 |     3.00 |    31.75 |

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
| THD Phase A (%) | 5.7% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.7% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.7% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 17.0% | Field-level stress indicator |
| Max Phase THD | 5.7% | Highest THD among all three phases |
| Min Phase THD | 5.7% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,636.86 kW
  - **Maximum Load:** 1,730.09 kVA
  - **Percentage of Capacity (MAX):** 69.2%
- **Average Load:** 1,422.37 kVA
  - **Percentage of Capacity (Avg):** 56.9%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,422.37 kVA
- **Average Power Factor (PF):** 0.966

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,423.53 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 481.43 V
- Average Current (Iavg_A): 1707.16 A
- Average kW (Psum_kW): 1371.62 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 1.16 kVA (0.1%)
- **Calculated PF (kW/kVA from averages):** 0.964
- **Power Factor Difference:** 0.003 (0.3%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1422.37) and measured PF (0.966) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,422.37 |        56.9% | 944,073.26 kVA | 4,680,152.85 TOTAL-HEAT |
| kW | 1,371.62 |        54.9% | 910,388.09 kWh | 166,991.01 Load-Heat |
| kVAR |   376.56 |        15.1% | 249,935.68 kVARh | - |
| WASTE |    50.75 |         2.0% | 33,685.17 WASTE | 6,178.82 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 4,680,152.85
- **Load-Heat (BTU/hr):** 166,991.01
- **Field-Heat (BTU/hr):** 6,178.82
- **Load-Heat (BTU, period total):** 110,837,497.94
- **Field-Heat (BTU, period total):** 4,101,086.13

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 1 | 1,422.37 | 1,371.62 |   366.24 |     0.96 |   56.9% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,438.71 | 1,386.47 |   373.25 |     0.96 |   57.5% |
| 01 | 1,445.47 | 1,392.20 |   378.21 |     0.96 |   57.8% |
| 02 | 1,444.60 | 1,390.94 |   380.54 |     0.96 |   57.8% |
| 03 | 1,444.64 | 1,391.07 |   380.57 |     0.96 |   57.8% |
| 04 | 1,435.71 | 1,383.31 |   373.15 |     0.96 |   57.4% |
| 05 | 1,453.27 | 1,399.25 |   384.64 |     0.96 |   58.1% |
| 06 | 1,406.22 | 1,354.68 |   366.09 |     0.96 |   56.2% |
| 07 | 1,387.60 | 1,339.04 |   354.20 |     0.97 |   55.5% |
| 08 | 1,396.24 | 1,347.47 |   356.18 |     0.97 |   55.8% |
| 09 | 1,389.74 | 1,341.72 |   352.03 |     0.97 |   55.6% |
| 10 | 1,403.80 | 1,356.41 |   352.73 |     0.97 |   56.2% |
| 11 | 1,401.98 | 1,353.39 |   355.93 |     0.97 |   56.1% |
| 12 | 1,381.13 | 1,335.39 |   340.46 |     0.97 |   55.2% |
| 13 | 1,401.70 | 1,353.81 |   352.09 |     0.97 |   56.1% |
| 14 | 1,401.53 | 1,352.78 |   356.75 |     0.97 |   56.1% |
| 15 | 1,395.36 | 1,346.07 |   359.41 |     0.96 |   55.8% |
| 16 | 1,404.94 | 1,355.58 |   360.09 |     0.96 |   56.2% |
| 17 | 1,415.28 | 1,366.03 |   357.35 |     0.97 |   56.6% |
| 18 | 1,425.70 | 1,374.66 |   365.44 |     0.96 |   57.0% |
| 19 | 1,439.51 | 1,386.99 |   373.89 |     0.96 |   57.6% |
| 20 | 1,465.49 | 1,411.81 |   383.33 |     0.96 |   58.6% |
| 21 | 1,463.67 | 1,410.14 |   382.19 |     0.96 |   58.5% |
| 22 | 1,443.90 | 1,391.77 |   373.81 |     0.96 |   57.8% |
| 23 | 1,460.07 | 1,406.28 |   382.23 |     0.96 |   58.4% |

---

# END OF REPORT

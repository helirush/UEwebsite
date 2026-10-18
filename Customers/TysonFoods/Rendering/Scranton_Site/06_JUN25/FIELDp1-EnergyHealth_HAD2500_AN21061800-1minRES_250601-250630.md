# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 885,449.4 kWh (Usage per period)
- **Consumption Cost per unit:** $0.110/kWh (Cost per kWh)
- **Consumption Total Cost:** $97,399.44 (Cost per period)
- **Consumption Total Cost:** $141.14 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** HAD2500  
**Generated:** 2026-09-12 17:53:25  
**Data Source:** AN21061800-V-1minRES_43200CLP_250601-250630c.csv  

## Time Period

- **Period:** June 01, 2025 thru June 30, 2025
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 41,406

- **Dataset Coverage:** Complete month (100.0% of 30-day month)
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
- **Power Factor:** 0.974
- **Total Energy (Actual):** 885,449.45 kWh (per period), 1283.07 kW (per hour)
- **Total Waste (Actual):** 22,688.47 kWh (per period), 32.88 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_HAD2500_AN21061800-1minRES_250601-250630.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_HAD2500_AN21061800-1minRES_250601-250630.md


## UNITY MANAGEMENT HAD2500 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 32.88 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 15.20 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1100/kWh (all-inclusive)
- **HAD2500 Utility Cost Offset:** $3.62/hour
- **Annual Offset Savings:** $31680/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 59,176 BTU/hr
- **Total Cooling kW No Longer Needed:** 5.77 kW
- **Cooling Energy Cost Avoided:** $0.63/hour
- **Annual Cooling Savings:** $5562/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 38.65 kW
- **CO2e Emissions Avoided:** 126.39 metric tons/year
- **Monthly CO2e Reduction:** 10.53 metric tons/month
- **Hourly CO2e Reduction:** 0.0144 metric tons/hour
- **CO2e Value Rate:** $10/metric ton
- **Annual CO2e Value:** $1264/year

### Total HAD2500 Unity Savings

- **Per Hour:** $4.40
- **Per Day:** $105.50
- **Per Month:** $3164.89
- **Per Year:** $38506

### HAD2500 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 933.5 kVAR Max (Avg: 292.3 kVAR/hr ; 210,467 kVAR/mo)
- **Max Harmonic Distortion:** 89.2% Max (range: 0.0% - 89.2%)
- **Max Amperage:** 2,166A Max (range: 482A - 2166A)

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
| Line to Neutral Voltage (277v) |   280.32 |   274.54 |   289.54 |
| Line to Line Voltage (480v) |   485.53 |   475.52 |   501.50 |
| Current (AMPS) |  1567.66 |   482.16 |  2166.09 |
| Phase Angle (degrees) |    11.95 |     1.28 |    53.48 |
| Total Harmonic Distortion (PCT) |    22.58 |     0.00 |    89.24 |

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
| THD Phase A (%) | 7.5% | IEEE standard per-phase calculation |
| THD Phase B (%) | 8.1% | IEEE standard per-phase calculation |
| THD Phase C (%) | 7.0% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 22.6% | Field-level stress indicator |
| Max Phase THD | 8.1% | Highest THD among all three phases |
| Min Phase THD | 7.0% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,657.66 kW
  - **Maximum Load:** 1,790.39 kVA
  - **Percentage of Capacity (MAX):** 71.6%
- **Average Load:** 1,315.95 kVA
  - **Percentage of Capacity (Avg):** 52.6%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,315.95 kVA
- **Average Power Factor (PF):** 0.974

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,318.33 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 485.53 V
- Average Current (Iavg_A): 1567.66 A
- Average kW (Psum_kW): 1283.07 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 2.38 kVA (0.2%)
- **Calculated PF (kW/kVA from averages):** 0.973
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1315.95) and measured PF (0.974) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,315.95 |        52.6% | 908,137.92 kVA | 4,378,031.08 TOTAL-HEAT |
| kW | 1,283.07 |        51.3% | 885,449.45 kWh | 109,378.58 Load-Heat |
| kVAR |   292.32 |        11.7% | 201,726.94 kVARh | - |
| WASTE |    32.88 |         1.3% | 22,688.47 WASTE | 2,802.68 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 4,378,031.08
- **Load-Heat (BTU/hr):** 109,378.58
- **Field-Heat (BTU/hr):** 2,802.68
- **Load-Heat (BTU, period total):** 75,482,160.18
- **Field-Heat (BTU, period total):** 1,934,130.67

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 6 | 1,315.95 | 1,283.07 |   271.44 |     0.98 |   52.6% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,344.94 | 1,311.32 |   282.13 |     0.98 |   53.8% |
| 01 | 1,350.57 | 1,319.69 |   274.37 |     0.98 |   54.0% |
| 02 | 1,341.65 | 1,312.00 |   267.97 |     0.98 |   53.7% |
| 03 | 1,328.42 | 1,296.70 |   270.54 |     0.98 |   53.1% |
| 04 | 1,330.58 | 1,300.88 |   267.10 |     0.98 |   53.2% |
| 05 | 1,312.81 | 1,283.85 |   259.14 |     0.98 |   52.5% |
| 06 | 1,295.04 | 1,263.85 |   257.03 |     0.98 |   51.8% |
| 07 | 1,273.94 | 1,234.27 |   271.58 |     0.97 |   51.0% |
| 08 | 1,275.32 | 1,236.66 |   277.61 |     0.97 |   51.0% |
| 09 | 1,280.99 | 1,248.91 |   266.49 |     0.97 |   51.2% |
| 10 | 1,254.51 | 1,223.63 |   255.67 |     0.98 |   50.2% |
| 11 | 1,243.70 | 1,216.36 |   241.45 |     0.98 |   49.7% |
| 12 | 1,245.91 | 1,218.68 |   238.85 |     0.98 |   49.8% |
| 13 | 1,243.27 | 1,212.34 |   247.36 |     0.98 |   49.7% |
| 14 | 1,261.35 | 1,225.55 |   265.49 |     0.97 |   50.5% |
| 15 | 1,291.48 | 1,258.07 |   264.51 |     0.97 |   51.7% |
| 16 | 1,343.26 | 1,306.10 |   286.03 |     0.97 |   53.7% |
| 17 | 1,363.71 | 1,327.67 |   291.06 |     0.97 |   54.5% |
| 18 | 1,358.62 | 1,324.39 |   289.62 |     0.97 |   54.3% |
| 19 | 1,367.66 | 1,333.47 |   290.24 |     0.98 |   54.7% |
| 20 | 1,368.75 | 1,334.20 |   288.42 |     0.97 |   54.8% |
| 21 | 1,378.16 | 1,345.08 |   284.56 |     0.98 |   55.1% |
| 22 | 1,363.05 | 1,330.05 |   285.72 |     0.98 |   54.5% |
| 23 | 1,367.03 | 1,331.84 |   292.22 |     0.97 |   54.7% |

---

# END OF REPORT

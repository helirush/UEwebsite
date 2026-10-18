# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 790,073.1 kWh (Usage per period)
- **Consumption Cost per unit:** $0.110/kWh (Cost per kWh)
- **Consumption Total Cost:** $86,908.05 (Cost per period)
- **Consumption Total Cost:** $149.30 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** HAD2500  
**Generated:** 2026-09-12 17:54:58  
**Data Source:** AN21061800-V-1minRES_40320CLP_250201-250228c.csv  

## Time Period

- **Period:** February 01, 2025 thru February 28, 2025
- **Number of Days:** 28 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 34,926

- **Dataset Coverage:** Complete month (100.0% of 28-day month)
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
- **Total Energy (Actual):** 790,073.15 kWh (per period), 1357.28 kW (per hour)
- **Total Waste (Actual):** 17,148.42 kWh (per period), 29.46 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_HAD2500_AN21061800-1minRES_250201-250228.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_HAD2500_AN21061800-1minRES_250201-250228.md


## UNITY MANAGEMENT HAD2500 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 29.46 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 14.09 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1100/kWh (all-inclusive)
- **HAD2500 Utility Cost Offset:** $3.24/hour
- **Annual Offset Savings:** $28387/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 57,013 BTU/hr
- **Total Cooling kW No Longer Needed:** 4.99 kW
- **Cooling Energy Cost Avoided:** $0.55/hour
- **Annual Cooling Savings:** $4807/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 34.45 kW
- **CO2e Emissions Avoided:** 112.65 metric tons/year
- **Monthly CO2e Reduction:** 9.39 metric tons/month
- **Hourly CO2e Reduction:** 0.0129 metric tons/hour
- **CO2e Value Rate:** $10/metric ton
- **Annual CO2e Value:** $1127/year

### Total HAD2500 Unity Savings

- **Per Hour:** $3.92
- **Per Day:** $94.03
- **Per Month:** $2820.89
- **Per Year:** $34321

### HAD2500 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 856.9 kVAR Max (Avg: 284.3 kVAR/hr ; 204,710 kVAR/mo)
- **Max Harmonic Distortion:** 89.5% Max (range: 0.0% - 89.5%)
- **Max Amperage:** 1,986A Max (range: 925A - 1986A)

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
| Line to Neutral Voltage (277v) |   281.43 |   274.40 |   290.84 |
| Line to Line Voltage (480v) |   487.45 |   475.27 |   503.75 |
| Current (AMPS) |  1644.22 |   924.65 |  1985.67 |
| Phase Angle (degrees) |     9.71 |     0.00 |    52.39 |
| Total Harmonic Distortion (PCT) |    27.53 |     0.00 |    89.51 |

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
| THD Phase A (%) | 9.1% | IEEE standard per-phase calculation |
| THD Phase B (%) | 10.0% | IEEE standard per-phase calculation |
| THD Phase C (%) | 8.4% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 27.5% | Field-level stress indicator |
| Max Phase THD | 10.0% | Highest THD among all three phases |
| Min Phase THD | 8.4% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,640.74 kW
  - **Maximum Load:** 1,662.90 kVA
  - **Percentage of Capacity (MAX):** 66.5%
- **Average Load:** 1,386.74 kVA
  - **Percentage of Capacity (Avg):** 55.5%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,386.74 kVA
- **Average Power Factor (PF):** 0.974

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,388.21 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 487.45 V
- Average Current (Iavg_A): 1644.22 A
- Average kW (Psum_kW): 1357.28 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 1.47 kVA (0.1%)
- **Calculated PF (kW/kVA from averages):** 0.978
- **Power Factor Difference:** 0.004 (0.4%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1386.74) and measured PF (0.974) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,386.74 |        55.5% | 807,221.57 kVA | 4,631,234.79 TOTAL-HEAT |
| kW | 1,357.28 |        54.3% | 790,073.15 kWh | 98,384.82 Load-Heat |
| kVAR |   284.32 |        11.4% | 165,502.50 kVARh | - |
| WASTE |    29.46 |         1.2% | 17,148.42 WASTE | 2,135.43 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 4,631,234.79
- **Load-Heat (BTU/hr):** 98,384.82
- **Field-Heat (BTU/hr):** 2,135.43
- **Load-Heat (BTU, period total):** 57,269,804.92
- **Field-Heat (BTU, period total):** 1,243,032.44

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 2 | 1,386.74 | 1,357.28 |   211.87 |     0.98 |   55.5% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,392.22 | 1,355.95 |   230.23 |     0.97 |   55.7% |
| 01 | 1,400.40 | 1,361.35 |   229.74 |     0.97 |   56.0% |
| 02 | 1,408.08 | 1,367.58 |   233.79 |     0.97 |   56.3% |
| 03 | 1,427.65 | 1,391.79 |   221.91 |     0.97 |   57.1% |
| 04 | 1,425.90 | 1,406.98 |   194.61 |     0.99 |   57.0% |
| 05 | 1,433.13 | 1,412.92 |   201.55 |     0.99 |   57.3% |
| 06 | 1,418.54 | 1,396.47 |   197.80 |     0.98 |   56.7% |
| 07 | 1,412.15 | 1,386.47 |   208.53 |     0.98 |   56.5% |
| 08 | 1,424.44 | 1,402.14 |   189.54 |     0.98 |   57.0% |
| 09 | 1,410.96 | 1,387.01 |   198.60 |     0.98 |   56.4% |
| 10 | 1,401.87 | 1,378.71 |   195.09 |     0.98 |   56.1% |
| 11 | 1,372.94 | 1,352.30 |   193.76 |     0.98 |   54.9% |
| 12 | 1,344.06 | 1,324.99 |   185.98 |     0.99 |   53.8% |
| 13 | 1,318.51 | 1,289.75 |   209.81 |     0.98 |   52.7% |
| 14 | 1,312.58 | 1,275.84 |   221.45 |     0.97 |   52.5% |
| 15 | 1,326.58 | 1,289.40 |   224.34 |     0.97 |   53.1% |
| 16 | 1,347.64 | 1,315.48 |   215.22 |     0.98 |   53.9% |
| 17 | 1,357.71 | 1,324.99 |   213.04 |     0.98 |   54.3% |
| 18 | 1,366.62 | 1,334.30 |   215.63 |     0.98 |   54.7% |
| 19 | 1,396.64 | 1,364.96 |   223.58 |     0.98 |   55.9% |
| 20 | 1,411.21 | 1,383.01 |   212.30 |     0.98 |   56.4% |
| 21 | 1,404.70 | 1,377.46 |   214.55 |     0.98 |   56.2% |
| 22 | 1,403.00 | 1,372.04 |   219.64 |     0.98 |   56.1% |
| 23 | 1,392.45 | 1,357.50 |   221.17 |     0.97 |   55.7% |

---

# END OF REPORT

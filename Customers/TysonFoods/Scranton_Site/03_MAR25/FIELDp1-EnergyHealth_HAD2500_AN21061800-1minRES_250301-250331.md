# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 879,375.1 kWh (Usage per period)
- **Consumption Cost per unit:** $0.110/kWh (Cost per kWh)
- **Consumption Total Cost:** $96,731.26 (Cost per period)
- **Consumption Total Cost:** $130.25 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** HAD2500  
**Generated:** 2026-09-12 17:55:06  
**Data Source:** AN21061800-V-1minRES_44580CLP_250301-250331c.csv  

## Time Period

- **Period:** March 01, 2025 thru March 31, 2025
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,559

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
- **Power Factor:** 0.965
- **Total Energy (Actual):** 879,375.13 kWh (per period), 1184.10 kW (per hour)
- **Total Waste (Actual):** 22,116.64 kWh (per period), 29.78 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_HAD2500_AN21061800-1minRES_250301-250331.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_HAD2500_AN21061800-1minRES_250301-250331.md


## UNITY MANAGEMENT HAD2500 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 29.78 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 14.14 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1100/kWh (all-inclusive)
- **HAD2500 Utility Cost Offset:** $3.28/hour
- **Annual Offset Savings:** $28697/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 55,190 BTU/hr
- **Total Cooling kW No Longer Needed:** 4.92 kW
- **Cooling Energy Cost Avoided:** $0.54/hour
- **Annual Cooling Savings:** $4737/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 34.70 kW
- **CO2e Emissions Avoided:** 113.46 metric tons/year
- **Monthly CO2e Reduction:** 9.46 metric tons/month
- **Hourly CO2e Reduction:** 0.0130 metric tons/hour
- **CO2e Value Rate:** $10/metric ton
- **Annual CO2e Value:** $1135/year

### Total HAD2500 Unity Savings

- **Per Hour:** $3.95
- **Per Day:** $94.71
- **Per Month:** $2841.20
- **Per Year:** $34568

### HAD2500 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 930.7 kVAR Max (Avg: 267.2 kVAR/hr ; 192,408 kVAR/mo)
- **Max Harmonic Distortion:** 94.0% Max (range: 0.0% - 94.0%)
- **Max Amperage:** 2,121A Max (range: 298A - 2121A)

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
| Line to Neutral Voltage (277v) |   280.45 |   273.86 |   288.75 |
| Line to Line Voltage (480v) |   485.76 |   474.34 |   500.13 |
| Current (AMPS) |  1445.74 |   298.42 |  2121.08 |
| Phase Angle (degrees) |    11.72 |     0.00 |    70.53 |
| Total Harmonic Distortion (PCT) |    22.92 |     0.00 |    93.99 |

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
| THD Phase A (%) | 7.7% | IEEE standard per-phase calculation |
| THD Phase B (%) | 8.4% | IEEE standard per-phase calculation |
| THD Phase C (%) | 6.8% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 22.9% | Field-level stress indicator |
| Max Phase THD | 8.4% | Highest THD among all three phases |
| Min Phase THD | 6.8% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,644.95 kW
  - **Maximum Load:** 1,736.87 kVA
  - **Percentage of Capacity (MAX):** 69.5%
- **Average Load:** 1,213.89 kVA
  - **Percentage of Capacity (Avg):** 48.6%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,213.89 kVA
- **Average Power Factor (PF):** 0.965

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,216.38 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 485.76 V
- Average Current (Iavg_A): 1445.74 A
- Average kW (Psum_kW): 1184.10 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 2.50 kVA (0.2%)
- **Calculated PF (kW/kVA from averages):** 0.973
- **Power Factor Difference:** 0.008 (0.8%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1213.89) and measured PF (0.965) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,213.89 |        48.6% | 901,491.77 kVA | 4,040,332.34 TOTAL-HEAT |
| kW | 1,184.10 |        47.4% | 879,375.13 kWh | 99,123.00 Load-Heat |
| kVAR |   267.23 |        10.7% | 198,461.05 kVARh | - |
| WASTE |    29.78 |         1.2% | 22,116.64 WASTE | 2,492.98 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 4,040,332.34
- **Load-Heat (BTU/hr):** 99,123.00
- **Field-Heat (BTU/hr):** 2,492.98
- **Load-Heat (BTU, period total):** 73,613,698.59
- **Field-Heat (BTU, period total):** 1,851,414.19

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 3 | 1,213.89 | 1,184.10 |   208.16 |     0.98 |   48.6% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,244.55 | 1,211.50 |   217.20 |     0.97 |   49.8% |
| 01 | 1,240.28 | 1,210.78 |   211.03 |     0.98 |   49.6% |
| 02 | 1,241.11 | 1,219.63 |   193.80 |     0.98 |   49.6% |
| 03 | 1,224.87 | 1,199.14 |   200.93 |     0.98 |   49.0% |
| 04 | 1,227.43 | 1,202.47 |   200.16 |     0.98 |   49.1% |
| 05 | 1,218.45 | 1,192.32 |   201.72 |     0.98 |   48.7% |
| 06 | 1,184.05 | 1,152.38 |   211.09 |     0.97 |   47.4% |
| 07 | 1,187.27 | 1,151.18 |   222.67 |     0.97 |   47.5% |
| 08 | 1,150.43 | 1,112.72 |   223.62 |     0.97 |   46.0% |
| 09 | 1,147.20 | 1,108.87 |   215.94 |     0.97 |   45.9% |
| 10 | 1,158.25 | 1,124.26 |   200.83 |     0.97 |   46.3% |
| 11 | 1,164.51 | 1,134.93 |   196.14 |     0.97 |   46.6% |
| 12 | 1,172.32 | 1,143.68 |   205.72 |     0.98 |   46.9% |
| 13 | 1,186.94 | 1,160.93 |   202.64 |     0.98 |   47.5% |
| 14 | 1,179.56 | 1,151.87 |   203.53 |     0.98 |   47.2% |
| 15 | 1,190.59 | 1,164.18 |   203.44 |     0.98 |   47.6% |
| 16 | 1,218.35 | 1,193.70 |   200.82 |     0.98 |   48.7% |
| 17 | 1,266.14 | 1,236.22 |   215.77 |     0.98 |   50.6% |
| 18 | 1,266.07 | 1,237.40 |   209.99 |     0.98 |   50.6% |
| 19 | 1,266.84 | 1,237.78 |   208.89 |     0.98 |   50.7% |
| 20 | 1,261.40 | 1,228.44 |   219.30 |     0.97 |   50.5% |
| 21 | 1,236.77 | 1,203.92 |   213.76 |     0.97 |   49.5% |
| 22 | 1,248.44 | 1,219.54 |   206.12 |     0.98 |   49.9% |
| 23 | 1,252.09 | 1,221.58 |   210.34 |     0.98 |   50.1% |

---

# END OF REPORT

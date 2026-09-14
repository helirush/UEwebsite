# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 114,045.4 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $22,238.84 (Cost per period)
- **Consumption Total Cost:** $29.92 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL1-Proc1  
**Generated:** 2026-09-10 19:30:32  
**Data Source:** AN55050333-V-1minRES_44640CLP_260701-260731c.csv  

## Time Period

- **Period:** July 01, 2026 thru July 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,597

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

- **Transformer:** PL1-Proc1
- **Power Factor:** 0.825
- **Total Energy (Actual):** 114,045.35 kWh (per period), 153.43 kW (per hour)
- **Total Waste (Actual):** 21,740.47 kWh (per period), 29.25 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL1-Proc1_AN55050333-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL1-Proc1_AN55050333-1minRES_260701-260731.md


## UNITY MANAGEMENT PL1-Proc1 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 29.25 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 18.83 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL1-Proc1 Utility Cost Offset:** $5.70/hour
- **Annual Offset Savings:** $49964/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 67,855 BTU/hr
- **Total Cooling kW No Longer Needed:** 6.05 kW
- **Cooling Energy Cost Avoided:** $1.18/hour
- **Annual Cooling Savings:** $10332/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 35.30 kW
- **CO2e Emissions Avoided:** 115.43 metric tons/year
- **Monthly CO2e Reduction:** 9.62 metric tons/month
- **Hourly CO2e Reduction:** 0.0132 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $4386/year

### Total PL1-Proc1 Unity Savings

- **Per Hour:** $7.38
- **Per Day:** $177.21
- **Per Month:** $5316.30
- **Per Year:** $64682

### PL1-Proc1 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 299.7 kVAR Max (Avg: 99.2 kVAR/hr ; 71,390 kVAR/mo)
- **Max Harmonic Distortion:** 29.0% Max (range: 3.1% - 29.0%)
- **Max Amperage:** 439A Max (range: 40A - 439A)

---

# PL1-Proc1 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   278.60 |   268.34 |   290.55 |
| Line to Line Voltage (480v) |   482.55 |   464.78 |   503.25 |
| Current (AMPS) |   219.16 |    39.95 |   438.88 |
| Phase Angle (degrees) |    33.96 |    20.45 |    58.53 |
| Total Harmonic Distortion (PCT) |    14.70 |     3.08 |    28.97 |

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
| THD Phase A (%) | 4.9% | IEEE standard per-phase calculation |
| THD Phase B (%) | 4.9% | IEEE standard per-phase calculation |
| THD Phase C (%) | 4.9% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 14.7% | Field-level stress indicator |
| Max Phase THD | 4.9% | Highest THD among all three phases |
| Min Phase THD | 4.9% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 323.87 kW
  - **Maximum Load:** 361.97 kVA
  - **Percentage of Capacity (MAX):** 14.5%
- **Average Load:** 182.68 kVA
  - **Percentage of Capacity (Avg):** 7.3%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 182.68 kVA
- **Average Power Factor (PF):** 0.825

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 183.17 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 482.55 V
- Average Current (Iavg_A): 219.16 A
- Average kW (Psum_kW): 153.43 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.49 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.838
- **Power Factor Difference:** 0.012 (1.5%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (182.68) and measured PF (0.825) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   182.68 |         7.3% | 135,785.82 kVA | 523,540.52 TOTAL-HEAT |
| kW |   153.43 |         6.1% | 114,045.35 kWh | 83,823.31 Load-Heat |
| kVAR |    99.15 |         4.0% | 73,698.35 kVARh | - |
| WASTE |    29.25 |         1.2% | 21,740.47 WASTE | 15,979.24 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 523,540.52
- **Load-Heat (BTU/hr):** 83,823.31
- **Field-Heat (BTU/hr):** 15,979.24
- **Load-Heat (BTU, period total):** 62,304,467.49
- **Field-Heat (BTU, period total):** 11,877,102.87

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 |   182.68 |   153.43 |    98.11 |     0.84 |    7.3% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   191.31 |   160.04 |   103.86 |     0.84 |    7.7% |
| 01 |   194.29 |   162.20 |   106.09 |     0.83 |    7.8% |
| 02 |   194.96 |   162.82 |   106.34 |     0.84 |    7.8% |
| 03 |   194.37 |   162.44 |   105.87 |     0.84 |    7.8% |
| 04 |   193.14 |   161.60 |   104.83 |     0.84 |    7.7% |
| 05 |   192.09 |   160.77 |   104.17 |     0.84 |    7.7% |
| 06 |   190.62 |   159.57 |   103.26 |     0.84 |    7.6% |
| 07 |   185.38 |   155.66 |    99.65 |     0.84 |    7.4% |
| 08 |   180.73 |   151.09 |    98.21 |     0.84 |    7.2% |
| 09 |   177.59 |   148.67 |    96.15 |     0.84 |    7.1% |
| 10 |   178.98 |   149.31 |    97.70 |     0.83 |    7.2% |
| 11 |   176.90 |   147.91 |    96.09 |     0.84 |    7.1% |
| 12 |   168.55 |   140.52 |    91.98 |     0.83 |    6.7% |
| 13 |   162.36 |   134.70 |    89.46 |     0.83 |    6.5% |
| 14 |   168.27 |   141.87 |    89.47 |     0.84 |    6.7% |
| 15 |   175.61 |   149.42 |    91.27 |     0.85 |    7.0% |
| 16 |   169.19 |   143.85 |    87.74 |     0.85 |    6.8% |
| 17 |   166.17 |   141.64 |    85.80 |     0.85 |    6.6% |
| 18 |   168.66 |   144.54 |    85.98 |     0.86 |    6.7% |
| 19 |   183.51 |   157.01 |    93.96 |     0.86 |    7.3% |
| 20 |   193.49 |   163.10 |   102.97 |     0.84 |    7.7% |
| 21 |   192.99 |   161.48 |   104.68 |     0.84 |    7.7% |
| 22 |   191.69 |   160.21 |   104.28 |     0.84 |    7.7% |
| 23 |   193.53 |   162.03 |   104.85 |     0.84 |    7.7% |

---

# END OF REPORT

# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 415,487.7 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $81,020.09 (Cost per period)
- **Consumption Total Cost:** $112.56 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL1-Proc2  
**Generated:** 2026-10-08 00:53:08  
**Data Source:** AN55050338-V-260930.2359c.csv  

## Time Period

- **Period:** September 01, 2026 thru September 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,186

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
- **Power Factor:** 0.865
- **Total Energy (Actual):** 415,487.66 kWh (per period), 577.25 kW (per hour)
- **Total Waste (Actual):** 63,577.32 kWh (per period), 88.33 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL1-Proc2_AN55050338-1minRES_260901-260930.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL1-Proc2_AN55050338-1minRES_260901-260930.md


## UNITY MANAGEMENT PL1-Proc2 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 88.33 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 61.16 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL1-Proc2 Utility Cost Offset:** $17.22/hour
- **Annual Offset Savings:** $150886/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 332,970 BTU/hr
- **Total Cooling kW No Longer Needed:** 29.13 kW
- **Cooling Energy Cost Avoided:** $5.68/hour
- **Annual Cooling Savings:** $49768/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 117.47 kW
- **CO2e Emissions Avoided:** 384.13 metric tons/year
- **Monthly CO2e Reduction:** 32.01 metric tons/month
- **Hourly CO2e Reduction:** 0.0439 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $14597/year

### Total PL1-Proc2 Unity Savings

- **Per Hour:** $24.57
- **Per Day:** $589.73
- **Per Month:** $17691.89
- **Per Year:** $215251

### PL1-Proc2 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 719.1 kVAR Max (Avg: 331.3 kVAR/hr ; 238,558 kVAR/mo)
- **Max Harmonic Distortion:** 30.6% Max (range: 3.3% - 30.6%)
- **Max Amperage:** 1,461A Max (range: 61A - 1461A)

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
| Line to Neutral Voltage (277v) |   184.24 |   181.42 |   191.69 |
| Line to Line Voltage (480v) |   319.12 |   314.23 |   332.02 |
| Current (AMPS) |   968.30 |    60.96 |  1460.93 |
| Phase Angle (degrees) |    30.10 |    27.75 |    62.42 |
| Total Harmonic Distortion (PCT) |    15.96 |     3.31 |    30.64 |

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
| THD Phase A (%) | 5.3% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.3% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.3% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 16.0% | Field-level stress indicator |
| Max Phase THD | 5.3% | Highest THD among all three phases |
| Min Phase THD | 5.3% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 874.99 kW
  - **Maximum Load:** 997.96 kVA
  - **Percentage of Capacity (MAX):** 39.9%
- **Average Load:** 665.58 kVA
  - **Percentage of Capacity (Avg):** 26.6%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 665.58 kVA
- **Average Power Factor (PF):** 0.865

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 535.20 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 319.12 V
- Average Current (Iavg_A): 968.30 A
- Average kW (Psum_kW): 577.25 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 130.38 kVA (19.6%)
- **Calculated PF (kW/kVA from averages):** 1.079
- **Power Factor Difference:** 0.214 (24.7%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (665.58) and measured PF (0.865) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   665.58 |        26.6% | 479,064.98 kVA | 1,969,670.13 TOTAL-HEAT |
| kW |   577.25 |        23.1% | 415,487.66 kWh | 261,397.41 Load-Heat |
| kVAR |   331.33 |        13.3% | 238,481.15 kVARh | - |
| WASTE |    88.33 |         3.5% | 63,577.32 WASTE | 39,998.65 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,969,670.13
- **Load-Heat (BTU/hr):** 261,397.41
- **Field-Heat (BTU/hr):** 39,998.65
- **Load-Heat (BTU, period total):** 188,145,145.06
- **Field-Heat (BTU, period total):** 28,789,697.17

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 9 |   665.58 |   577.25 |   331.07 |     0.87 |   26.6% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   746.75 |   649.44 |   368.33 |     0.87 |   29.9% |
| 01 |   726.60 |   630.97 |   360.12 |     0.87 |   29.1% |
| 02 |   739.34 |   642.55 |   365.42 |     0.87 |   29.6% |
| 03 |   729.39 |   633.34 |   361.57 |     0.87 |   29.2% |
| 04 |   723.34 |   628.22 |   358.30 |     0.87 |   28.9% |
| 05 |   705.15 |   612.46 |   349.20 |     0.87 |   28.2% |
| 06 |   717.89 |   623.65 |   355.28 |     0.87 |   28.7% |
| 07 |   715.15 |   620.79 |   354.75 |     0.87 |   28.6% |
| 08 |   718.71 |   623.68 |   356.89 |     0.87 |   28.7% |
| 09 |   715.01 |   620.47 |   355.05 |     0.87 |   28.6% |
| 10 |   705.48 |   611.65 |   351.30 |     0.87 |   28.2% |
| 11 |   711.80 |   617.58 |   353.63 |     0.87 |   28.5% |
| 12 |   656.18 |   567.73 |   328.74 |     0.87 |   26.2% |
| 13 |   578.18 |   498.89 |   291.98 |     0.86 |   23.1% |
| 14 |   531.90 |   457.99 |   270.27 |     0.86 |   21.3% |
| 15 |   516.40 |   445.88 |   260.28 |     0.86 |   20.7% |
| 16 |   485.74 |   418.90 |   245.63 |     0.86 |   19.4% |
| 17 |   479.44 |   413.02 |   243.26 |     0.86 |   19.2% |
| 18 |   490.89 |   422.79 |   249.21 |     0.86 |   19.6% |
| 19 |   651.71 |   566.41 |   322.06 |     0.87 |   26.1% |
| 20 |   713.92 |   620.38 |   353.07 |     0.87 |   28.6% |
| 21 |   729.13 |   633.26 |   361.13 |     0.87 |   29.2% |
| 22 |   751.16 |   654.21 |   368.99 |     0.87 |   30.0% |
| 23 |   734.80 |   639.84 |   361.16 |     0.87 |   29.4% |

---

# END OF REPORT

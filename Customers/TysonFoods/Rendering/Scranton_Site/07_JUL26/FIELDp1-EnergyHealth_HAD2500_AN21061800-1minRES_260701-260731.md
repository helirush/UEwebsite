# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 956,084.7 kWh (Usage per period)
- **Consumption Cost per unit:** $0.110/kWh (Cost per kWh)
- **Consumption Total Cost:** $105,169.32 (Cost per period)
- **Consumption Total Cost:** $141.38 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** HAD2500  
**Generated:** 2026-09-12 17:52:05  
**Data Source:** AN21061800-V-1minRES_44640CLP_260701-260731c.csv  

## Time Period

- **Period:** July 01, 2026 thru July 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,634

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
- **Power Factor:** 0.958
- **Total Energy (Actual):** 956,084.75 kWh (per period), 1285.23 kW (per hour)
- **Total Waste (Actual):** 44,955.94 kWh (per period), 60.43 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_HAD2500_AN21061800-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_HAD2500_AN21061800-1minRES_260701-260731.md


## UNITY MANAGEMENT HAD2500 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 60.43 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 28.04 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1100/kWh (all-inclusive)
- **HAD2500 Utility Cost Offset:** $6.65/hour
- **Annual Offset Savings:** $58233/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 102,189 BTU/hr
- **Total Cooling kW No Longer Needed:** 9.92 kW
- **Cooling Energy Cost Avoided:** $1.09/hour
- **Annual Cooling Savings:** $9559/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 70.35 kW
- **CO2e Emissions Avoided:** 230.07 metric tons/year
- **Monthly CO2e Reduction:** 19.17 metric tons/month
- **Hourly CO2e Reduction:** 0.0263 metric tons/hour
- **CO2e Value Rate:** $10/metric ton
- **Annual CO2e Value:** $2301/year

### Total HAD2500 Unity Savings

- **Per Hour:** $8.00
- **Per Day:** $192.03
- **Per Month:** $5761.03
- **Per Year:** $70093

### HAD2500 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 883.1 kVAR Max (Avg: 398.7 kVAR/hr ; 287,092 kVAR/mo)
- **Max Harmonic Distortion:** 31.2% Max (range: 3.0% - 31.2%)
- **Max Amperage:** 2,179A Max (range: 628A - 2179A)

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
| Line to Neutral Voltage (277v) |   277.92 |   272.06 |   287.09 |
| Line to Line Voltage (480v) |   481.37 |   471.23 |   497.26 |
| Current (AMPS) |  1618.23 |   628.12 |  2178.76 |
| Phase Angle (degrees) |    16.17 |     1.62 |    31.16 |
| Total Harmonic Distortion (PCT) |    16.67 |     3.00 |    31.16 |

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
| THD Phase A (%) | 5.6% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.6% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.6% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 16.7% | Field-level stress indicator |
| Max Phase THD | 5.6% | Highest THD among all three phases |
| Min Phase THD | 5.6% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,651.47 kW
  - **Maximum Load:** 1,795.05 kVA
  - **Percentage of Capacity (MAX):** 71.8%
- **Average Load:** 1,345.67 kVA
  - **Percentage of Capacity (Avg):** 53.8%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,345.67 kVA
- **Average Power Factor (PF):** 0.958

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,349.22 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 481.37 V
- Average Current (Iavg_A): 1618.23 A
- Average kW (Psum_kW): 1285.23 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 3.55 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.953
- **Power Factor Difference:** 0.006 (0.6%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1345.67) and measured PF (0.958) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,345.67 |        53.8% | 1,001,040.68 kVA | 4,385,397.12 TOTAL-HEAT |
| kW | 1,285.23 |        51.4% | 956,084.75 kWh | 196,944.67 Load-Heat |
| kVAR |   398.74 |        15.9% | 296,621.65 kVARh | - |
| WASTE |    60.43 |         2.4% | 44,955.94 WASTE | 9,260.51 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 4,385,397.12
- **Load-Heat (BTU/hr):** 196,944.67
- **Field-Heat (BTU/hr):** 9,260.51
- **Load-Heat (BTU, period total):** 146,507,143.69
- **Field-Heat (BTU, period total):** 6,888,893.26

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 | 1,345.67 | 1,285.23 |   390.50 |     0.96 |   53.8% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,369.73 | 1,307.34 |   402.45 |     0.95 |   54.8% |
| 01 | 1,367.87 | 1,305.74 |   401.60 |     0.95 |   54.7% |
| 02 | 1,364.94 | 1,303.26 |   400.06 |     0.95 |   54.6% |
| 03 | 1,360.06 | 1,298.56 |   398.53 |     0.95 |   54.4% |
| 04 | 1,361.79 | 1,300.71 |   398.44 |     0.96 |   54.5% |
| 05 | 1,343.10 | 1,283.01 |   391.41 |     0.96 |   53.7% |
| 06 | 1,301.23 | 1,245.10 |   367.99 |     0.96 |   52.0% |
| 07 | 1,295.85 | 1,243.13 |   354.01 |     0.96 |   51.8% |
| 08 | 1,298.65 | 1,245.41 |   355.82 |     0.96 |   51.9% |
| 09 | 1,292.96 | 1,238.25 |   362.25 |     0.96 |   51.7% |
| 10 | 1,300.30 | 1,244.72 |   364.44 |     0.96 |   52.0% |
| 11 | 1,307.30 | 1,252.19 |   363.85 |     0.96 |   52.3% |
| 12 | 1,312.68 | 1,257.76 |   365.19 |     0.96 |   52.5% |
| 13 | 1,319.32 | 1,262.11 |   375.08 |     0.96 |   52.8% |
| 14 | 1,339.57 | 1,279.86 |   387.19 |     0.96 |   53.6% |
| 15 | 1,386.63 | 1,322.42 |   408.74 |     0.95 |   55.5% |
| 16 | 1,388.43 | 1,322.98 |   413.96 |     0.95 |   55.5% |
| 17 | 1,382.19 | 1,316.01 |   416.83 |     0.95 |   55.3% |
| 18 | 1,367.91 | 1,302.10 |   412.82 |     0.95 |   54.7% |
| 19 | 1,350.72 | 1,287.43 |   400.25 |     0.95 |   54.0% |
| 20 | 1,362.15 | 1,296.66 |   408.28 |     0.95 |   54.5% |
| 21 | 1,382.14 | 1,316.91 |   413.12 |     0.95 |   55.3% |
| 22 | 1,377.55 | 1,313.25 |   409.56 |     0.95 |   55.1% |
| 23 | 1,362.86 | 1,300.61 |   400.21 |     0.95 |   54.5% |

---

# END OF REPORT

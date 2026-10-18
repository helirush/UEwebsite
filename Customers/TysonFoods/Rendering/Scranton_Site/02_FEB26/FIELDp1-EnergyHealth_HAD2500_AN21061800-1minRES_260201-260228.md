# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 700,930.2 kWh (Usage per period)
- **Consumption Cost per unit:** $0.110/kWh (Cost per kWh)
- **Consumption Total Cost:** $77,102.32 (Cost per period)
- **Consumption Total Cost:** $160.05 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** HAD2500  
**Generated:** 2026-09-12 17:51:18  
**Data Source:** AN21061800-V-1minRES_40320CLP_260201-260228c.csv  

## Time Period

- **Period:** February 01, 2026 thru February 28, 2026
- **Number of Days:** 28 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 28,905

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
- **Power Factor:** 0.961
- **Total Energy (Actual):** 700,930.21 kWh (per period), 1454.97 kW (per hour)
- **Total Waste (Actual):** 28,328.69 kWh (per period), 58.80 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_HAD2500_AN21061800-1minRES_260201-260228.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_HAD2500_AN21061800-1minRES_260201-260228.md


## UNITY MANAGEMENT HAD2500 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 58.80 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 28.03 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1100/kWh (all-inclusive)
- **HAD2500 Utility Cost Offset:** $6.47/hour
- **Annual Offset Savings:** $56663/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 106,605 BTU/hr
- **Total Cooling kW No Longer Needed:** 9.75 kW
- **Cooling Energy Cost Avoided:** $1.07/hour
- **Annual Cooling Savings:** $9394/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 68.55 kW
- **CO2e Emissions Avoided:** 224.18 metric tons/year
- **Monthly CO2e Reduction:** 18.68 metric tons/month
- **Hourly CO2e Reduction:** 0.0256 metric tons/hour
- **CO2e Value Rate:** $10/metric ton
- **Annual CO2e Value:** $2242/year

### Total HAD2500 Unity Savings

- **Per Hour:** $7.80
- **Per Day:** $187.12
- **Per Month:** $5613.66
- **Per Year:** $68300

### HAD2500 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 742.7 kVAR Max (Avg: 417.8 kVAR/hr ; 300,830 kVAR/mo)
- **Max Harmonic Distortion:** 31.3% Max (range: 3.0% - 31.3%)
- **Max Amperage:** 2,035A Max (range: 1652A - 2035A)

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
| Line to Neutral Voltage (277v) |   273.72 |   269.97 |   277.87 |
| Line to Line Voltage (480v) |   474.10 |   467.60 |   481.28 |
| Current (AMPS) |  1843.32 |  1652.48 |  2034.92 |
| Phase Angle (degrees) |    15.87 |     8.43 |    25.60 |
| Total Harmonic Distortion (PCT) |    17.36 |     3.00 |    31.35 |

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
| THD Phase A (%) | 5.8% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.8% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.8% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 17.4% | Field-level stress indicator |
| Max Phase THD | 5.8% | Highest THD among all three phases |
| Min Phase THD | 5.8% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,589.04 kW
  - **Maximum Load:** 1,653.69 kVA
  - **Percentage of Capacity (MAX):** 66.1%
- **Average Load:** 1,513.77 kVA
  - **Percentage of Capacity (Avg):** 60.6%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,513.77 kVA
- **Average Power Factor (PF):** 0.961

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,513.68 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 474.10 V
- Average Current (Iavg_A): 1843.32 A
- Average kW (Psum_kW): 1454.97 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.09 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.961
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1513.77) and measured PF (0.961) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,513.77 |        60.6% | 729,258.90 kVA | 4,964,552.98 TOTAL-HEAT |
| kW | 1,454.97 |        58.2% | 700,930.21 kWh | 192,852.33 Load-Heat |
| kVAR |   417.82 |        16.7% | 201,284.33 kVARh | - |
| WASTE |    58.80 |         2.4% | 28,328.69 WASTE | 7,794.29 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 4,964,552.98
- **Load-Heat (BTU/hr):** 192,852.33
- **Field-Heat (BTU/hr):** 7,794.29
- **Load-Heat (BTU, period total):** 92,906,610.87
- **Field-Heat (BTU, period total):** 3,754,899.53

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 2 | 1,513.77 | 1,454.97 |   414.68 |     0.96 |   60.6% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,520.78 | 1,462.42 |   413.43 |     0.96 |   60.8% |
| 01 | 1,529.63 | 1,469.40 |   422.20 |     0.96 |   61.2% |
| 02 | 1,534.05 | 1,472.35 |   428.03 |     0.96 |   61.4% |
| 03 | 1,531.10 | 1,470.36 |   424.23 |     0.96 |   61.2% |
| 04 | 1,535.92 | 1,475.99 |   422.13 |     0.96 |   61.4% |
| 05 | 1,528.65 | 1,468.05 |   422.88 |     0.96 |   61.1% |
| 06 | 1,502.00 | 1,444.09 |   409.16 |     0.96 |   60.1% |
| 07 | 1,507.51 | 1,450.24 |   407.74 |     0.96 |   60.3% |
| 08 | 1,506.27 | 1,448.17 |   411.09 |     0.96 |   60.3% |
| 09 | 1,508.85 | 1,450.80 |   411.42 |     0.96 |   60.4% |
| 10 | 1,510.04 | 1,452.36 |   410.33 |     0.96 |   60.4% |
| 11 | 1,514.85 | 1,455.54 |   416.49 |     0.96 |   60.6% |
| 12 | 1,506.41 | 1,447.31 |   415.03 |     0.96 |   60.3% |
| 13 | 1,504.45 | 1,445.64 |   412.91 |     0.96 |   60.2% |
| 14 | 1,507.67 | 1,449.47 |   411.28 |     0.96 |   60.3% |
| 15 | 1,506.43 | 1,447.22 |   415.32 |     0.96 |   60.3% |
| 16 | 1,499.26 | 1,439.76 |   415.29 |     0.96 |   60.0% |
| 17 | 1,497.13 | 1,438.90 |   410.26 |     0.96 |   59.9% |
| 18 | 1,496.65 | 1,439.01 |   408.17 |     0.96 |   59.9% |
| 19 | 1,502.70 | 1,445.67 |   407.18 |     0.96 |   60.1% |
| 20 | 1,511.69 | 1,454.04 |   410.39 |     0.96 |   60.5% |
| 21 | 1,520.60 | 1,462.94 |   411.84 |     0.96 |   60.8% |
| 22 | 1,525.01 | 1,466.55 |   415.08 |     0.96 |   61.0% |
| 23 | 1,523.17 | 1,462.60 |   422.85 |     0.96 |   60.9% |

---

# END OF REPORT

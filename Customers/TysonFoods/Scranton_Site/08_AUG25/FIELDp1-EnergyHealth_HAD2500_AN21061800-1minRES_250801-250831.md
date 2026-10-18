# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 788,822.1 kWh (Usage per period)
- **Consumption Cost per unit:** $0.110/kWh (Cost per kWh)
- **Consumption Total Cost:** $86,770.43 (Cost per period)
- **Consumption Total Cost:** $163.70 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** HAD2500  
**Generated:** 2026-09-12 17:53:44  
**Data Source:** AN21061800-V-1minRES_44640CLP_250801-250831c.csv  

## Time Period

- **Period:** August 01, 2025 thru August 31, 2025
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 31,803

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
- **Power Factor:** 0.976
- **Total Energy (Actual):** 788,822.07 kWh (per period), 1488.20 kW (per hour)
- **Total Waste (Actual):** 19,636.40 kWh (per period), 37.05 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_HAD2500_AN21061800-1minRES_250801-250831.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_HAD2500_AN21061800-1minRES_250801-250831.md


## UNITY MANAGEMENT HAD2500 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 37.05 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 16.34 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1100/kWh (all-inclusive)
- **HAD2500 Utility Cost Offset:** $4.08/hour
- **Annual Offset Savings:** $35698/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 59,775 BTU/hr
- **Total Cooling kW No Longer Needed:** 5.66 kW
- **Cooling Energy Cost Avoided:** $0.62/hour
- **Annual Cooling Savings:** $5452/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 42.70 kW
- **CO2e Emissions Avoided:** 139.65 metric tons/year
- **Monthly CO2e Reduction:** 11.64 metric tons/month
- **Hourly CO2e Reduction:** 0.0159 metric tons/hour
- **CO2e Value Rate:** $10/metric ton
- **Annual CO2e Value:** $1396/year

### Total HAD2500 Unity Savings

- **Per Hour:** $4.86
- **Per Day:** $116.56
- **Per Month:** $3496.93
- **Per Year:** $42546

### HAD2500 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 911.5 kVAR Max (Avg: 334.1 kVAR/hr ; 240,568 kVAR/mo)
- **Max Harmonic Distortion:** 32.4% Max (range: 3.4% - 32.4%)
- **Max Amperage:** 2,143A Max (range: 1466A - 2143A)

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
| Line to Neutral Voltage (277v) |   279.53 |   275.06 |   285.53 |
| Line to Line Voltage (480v) |   484.17 |   476.42 |   494.55 |
| Current (AMPS) |  1818.92 |  1466.39 |  2142.90 |
| Phase Angle (degrees) |    12.21 |     0.47 |    26.35 |
| Total Harmonic Distortion (PCT) |    17.32 |     3.40 |    32.35 |

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
| Unity THD Composite (%) | 17.3% | Field-level stress indicator |
| Max Phase THD | 5.8% | Highest THD among all three phases |
| Min Phase THD | 5.8% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,653.21 kW
  - **Maximum Load:** 1,776.85 kVA
  - **Percentage of Capacity (MAX):** 71.1%
- **Average Load:** 1,525.25 kVA
  - **Percentage of Capacity (Avg):** 61.0%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,525.25 kVA
- **Average Power Factor (PF):** 0.976

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,525.35 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 484.17 V
- Average Current (Iavg_A): 1818.92 A
- Average kW (Psum_kW): 1488.20 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.10 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.976
- **Power Factor Difference:** 0.001 (0.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1525.25) and measured PF (0.976) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,525.25 |        61.0% | 808,458.47 kVA | 5,077,960.40 TOTAL-HEAT |
| kW | 1,488.20 |        59.5% | 788,822.07 kWh | 123,337.03 Load-Heat |
| kVAR |   334.12 |        13.4% | 177,101.22 kVARh | - |
| WASTE |    37.05 |         1.5% | 19,636.40 WASTE | 3,070.27 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 5,077,960.40
- **Load-Heat (BTU/hr):** 123,337.03
- **Field-Heat (BTU/hr):** 3,070.27
- **Load-Heat (BTU, period total):** 65,374,792.18
- **Field-Heat (BTU, period total):** 1,627,395.67

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 8 | 1,525.25 | 1,488.20 |   326.34 |     0.98 |   61.0% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,542.42 | 1,504.39 |   336.50 |     0.98 |   61.7% |
| 01 | 1,540.65 | 1,503.72 |   329.38 |     0.98 |   61.6% |
| 02 | 1,545.08 | 1,508.82 |   326.04 |     0.98 |   61.8% |
| 03 | 1,523.21 | 1,488.52 |   314.28 |     0.98 |   60.9% |
| 04 | 1,533.53 | 1,497.32 |   322.98 |     0.98 |   61.3% |
| 05 | 1,540.99 | 1,504.15 |   328.46 |     0.98 |   61.6% |
| 06 | 1,515.30 | 1,480.94 |   313.91 |     0.98 |   60.6% |
| 07 | 1,521.74 | 1,487.01 |   315.74 |     0.98 |   60.9% |
| 08 | 1,539.66 | 1,501.15 |   336.87 |     0.97 |   61.6% |
| 09 | 1,526.97 | 1,490.38 |   324.20 |     0.98 |   61.1% |
| 10 | 1,521.80 | 1,485.16 |   323.41 |     0.98 |   60.9% |
| 11 | 1,512.33 | 1,476.42 |   316.84 |     0.98 |   60.5% |
| 12 | 1,490.67 | 1,456.12 |   307.90 |     0.98 |   59.6% |
| 13 | 1,485.62 | 1,451.97 |   300.86 |     0.98 |   59.4% |
| 14 | 1,500.85 | 1,465.66 |   314.79 |     0.98 |   60.0% |
| 15 | 1,491.71 | 1,456.78 |   310.24 |     0.98 |   59.7% |
| 16 | 1,509.62 | 1,473.01 |   321.95 |     0.98 |   60.4% |
| 17 | 1,542.16 | 1,500.02 |   352.71 |     0.97 |   61.7% |
| 18 | 1,525.06 | 1,485.44 |   337.67 |     0.97 |   61.0% |
| 19 | 1,535.94 | 1,495.58 |   342.84 |     0.97 |   61.4% |
| 20 | 1,537.41 | 1,497.94 |   339.72 |     0.97 |   61.5% |
| 21 | 1,537.41 | 1,498.60 |   336.25 |     0.97 |   61.5% |
| 22 | 1,537.80 | 1,500.16 |   331.79 |     0.98 |   61.5% |
| 23 | 1,541.92 | 1,502.62 |   340.59 |     0.97 |   61.7% |

---

# END OF REPORT

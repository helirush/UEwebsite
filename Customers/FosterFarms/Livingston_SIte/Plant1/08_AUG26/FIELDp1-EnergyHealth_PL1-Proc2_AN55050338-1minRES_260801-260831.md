# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 394,411.4 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $76,910.22 (Cost per period)
- **Consumption Total Cost:** $103.52 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL1-Proc2  
**Generated:** 2026-09-12 13:39:22  
**Data Source:** AN55050338-V-1minRES_44640CLP_260801-260831c.csv  

## Time Period

- **Period:** August 01, 2026 thru August 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,577

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

- **Transformer:** PL1-Proc2
- **Power Factor:** 0.860
- **Total Energy (Actual):** 394,411.37 kWh (per period), 530.87 kW (per hour)
- **Total Waste (Actual):** 60,891.97 kWh (per period), 81.96 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL1-Proc2_AN55050338-1minRES_260801-260831.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL1-Proc2_AN55050338-1minRES_260801-260831.md


## UNITY MANAGEMENT PL1-Proc2 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 81.96 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 57.14 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL1-Proc2 Utility Cost Offset:** $15.98/hour
- **Annual Offset Savings:** $140004/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 310,336 BTU/hr
- **Total Cooling kW No Longer Needed:** 27.71 kW
- **Cooling Energy Cost Avoided:** $5.40/hour
- **Annual Cooling Savings:** $47340/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 109.67 kW
- **CO2e Emissions Avoided:** 358.65 metric tons/year
- **Monthly CO2e Reduction:** 29.89 metric tons/month
- **Hourly CO2e Reduction:** 0.0409 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $13629/year

### Total PL1-Proc2 Unity Savings

- **Per Hour:** $22.94
- **Per Day:** $550.61
- **Per Month:** $16518.30
- **Per Year:** $200973

### PL1-Proc2 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 581.8 kVAR Max (Avg: 306.2 kVAR/hr ; 220,440 kVAR/mo)
- **Max Harmonic Distortion:** 34.0% Max (range: 3.0% - 34.0%)
- **Max Amperage:** 1,508A Max (range: 81A - 1508A)

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
| Line to Neutral Voltage (277v) |   184.38 |   181.45 |   192.66 |
| Line to Line Voltage (480v) |   319.35 |   314.27 |   333.69 |
| Current (AMPS) |   890.79 |    80.52 |  1507.85 |
| Phase Angle (degrees) |    30.56 |    26.49 |    57.32 |
| Total Harmonic Distortion (PCT) |    15.52 |     3.00 |    33.97 |

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
| THD Phase A (%) | 5.2% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.2% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.2% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 15.5% | Field-level stress indicator |
| Max Phase THD | 5.2% | Highest THD among all three phases |
| Min Phase THD | 5.2% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 908.04 kW
  - **Maximum Load:** 1,030.17 kVA
  - **Percentage of Capacity (MAX):** 41.2%
- **Average Load:** 612.83 kVA
  - **Percentage of Capacity (Avg):** 24.5%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 612.83 kVA
- **Average Power Factor (PF):** 0.860

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 492.72 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 319.35 V
- Average Current (Iavg_A): 890.79 A
- Average kW (Psum_kW): 530.87 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 120.11 kVA (19.6%)
- **Calculated PF (kW/kVA from averages):** 1.077
- **Power Factor Difference:** 0.217 (25.2%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (612.83) and measured PF (0.860) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   612.83 |        24.5% | 455,303.33 kVA | 1,811,410.71 TOTAL-HEAT |
| kW |   530.87 |        21.2% | 394,411.37 kWh | 242,256.88 Load-Heat |
| kVAR |   306.17 |        12.2% | 227,466.04 kVARh | - |
| WASTE |    81.96 |         3.3% | 60,891.97 WASTE | 37,401.30 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,811,410.71
- **Load-Heat (BTU/hr):** 242,256.88
- **Field-Heat (BTU/hr):** 37,401.30
- **Load-Heat (BTU, period total):** 179,984,745.43
- **Field-Heat (BTU, period total):** 27,787,296.02

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 8 |   612.83 |   530.87 |   305.55 |     0.87 |   24.5% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   680.73 |   592.26 |   334.82 |     0.87 |   27.2% |
| 01 |   665.63 |   578.47 |   328.53 |     0.87 |   26.6% |
| 02 |   689.23 |   599.80 |   338.81 |     0.87 |   27.6% |
| 03 |   688.63 |   598.82 |   339.31 |     0.87 |   27.5% |
| 04 |   699.91 |   607.91 |   345.92 |     0.87 |   28.0% |
| 05 |   691.94 |   601.12 |   341.81 |     0.87 |   27.7% |
| 06 |   678.59 |   590.19 |   334.26 |     0.87 |   27.1% |
| 07 |   668.35 |   580.75 |   330.25 |     0.87 |   26.7% |
| 08 |   659.37 |   573.38 |   325.04 |     0.87 |   26.4% |
| 09 |   652.24 |   566.69 |   322.34 |     0.87 |   26.1% |
| 10 |   623.68 |   540.17 |   311.28 |     0.87 |   24.9% |
| 11 |   619.43 |   536.82 |   308.55 |     0.87 |   24.8% |
| 12 |   567.31 |   489.19 |   286.78 |     0.86 |   22.7% |
| 13 |   545.38 |   468.52 |   278.77 |     0.86 |   21.8% |
| 14 |   515.30 |   442.34 |   263.87 |     0.86 |   20.6% |
| 15 |   490.56 |   420.94 |   251.46 |     0.86 |   19.6% |
| 16 |   439.00 |   376.65 |   225.16 |     0.86 |   17.6% |
| 17 |   434.20 |   372.07 |   223.45 |     0.86 |   17.4% |
| 18 |   419.27 |   358.57 |   216.84 |     0.86 |   16.8% |
| 19 |   607.12 |   526.30 |   302.07 |     0.87 |   24.3% |
| 20 |   626.54 |   541.71 |   314.43 |     0.86 |   25.1% |
| 21 |   666.96 |   578.30 |   331.82 |     0.87 |   26.7% |
| 22 |   680.67 |   592.08 |   335.26 |     0.87 |   27.2% |
| 23 |   696.98 |   607.05 |   341.91 |     0.87 |   27.9% |

---

# END OF REPORT

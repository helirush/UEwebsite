# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 978,065.1 kWh (Usage per period)
- **Consumption Cost per unit:** $0.110/kWh (Cost per kWh)
- **Consumption Total Cost:** $107,587.17 (Cost per period)
- **Consumption Total Cost:** $144.98 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** HAD2500  
**Generated:** 2026-09-12 17:52:57  
**Data Source:** AN21061800-V-1minRES_44640CLP_250101-250131c.csv  

## Time Period

- **Period:** January 01, 2025 thru January 31, 2025
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,524

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
- **Power Factor:** 0.859
- **Total Energy (Actual):** 978,065.14 kWh (per period), 1318.03 kW (per hour)
- **Total Waste (Actual):** 173,129.81 kWh (per period), 233.31 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_HAD2500_AN21061800-1minRES_250101-250131.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_HAD2500_AN21061800-1minRES_250101-250131.md


## UNITY MANAGEMENT HAD2500 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 233.31 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 151.36 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1100/kWh (all-inclusive)
- **HAD2500 Utility Cost Offset:** $25.66/hour
- **Annual Offset Savings:** $224815/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 626,076 BTU/hr
- **Total Cooling kW No Longer Needed:** 58.30 kW
- **Cooling Energy Cost Avoided:** $6.41/hour
- **Annual Cooling Savings:** $56177/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 291.61 kW
- **CO2e Emissions Avoided:** 953.60 metric tons/year
- **Monthly CO2e Reduction:** 79.47 metric tons/month
- **Hourly CO2e Reduction:** 0.1089 metric tons/hour
- **CO2e Value Rate:** $10/metric ton
- **Annual CO2e Value:** $9536/year

### Total HAD2500 Unity Savings

- **Per Hour:** $33.17
- **Per Day:** $795.97
- **Per Month:** $23879.01
- **Per Year:** $290528

### HAD2500 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,588.3 kVAR Max (Avg: 818.2 kVAR/hr ; 589,101 kVAR/mo)
- **Max Harmonic Distortion:** 97.5% Max (range: 0.0% - 97.5%)
- **Max Amperage:** 2,725A Max (range: 652A - 2725A)

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
| Line to Neutral Voltage (277v) |   278.25 |   265.26 |   291.21 |
| Line to Line Voltage (480v) |   481.94 |   459.44 |   504.39 |
| Current (AMPS) |  1863.92 |   652.31 |  2725.42 |
| Phase Angle (degrees) |    26.52 |     0.00 |    48.01 |
| Total Harmonic Distortion (PCT) |    30.30 |     0.00 |    97.54 |

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
| THD Phase A (%) | 10.0% | IEEE standard per-phase calculation |
| THD Phase B (%) | 10.5% | IEEE standard per-phase calculation |
| THD Phase C (%) | 9.8% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 30.3% | Field-level stress indicator |
| Max Phase THD | 10.5% | Highest THD among all three phases |
| Min Phase THD | 9.8% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,698.27 kW
  - **Maximum Load:** 2,212.36 kVA
  - **Percentage of Capacity (MAX):** 88.5%
- **Average Load:** 1,551.34 kVA
  - **Percentage of Capacity (Avg):** 62.1%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,551.34 kVA
- **Average Power Factor (PF):** 0.859

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,555.88 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 481.94 V
- Average Current (Iavg_A): 1863.92 A
- Average kW (Psum_kW): 1318.03 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 4.55 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.847
- **Power Factor Difference:** 0.012 (1.4%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1551.34) and measured PF (0.859) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,551.34 |        62.1% | 1,151,194.96 kVA | 4,497,300.99 TOTAL-HEAT |
| kW | 1,318.03 |        52.7% | 978,065.14 kWh | 676,355.36 Load-Heat |
| kVAR |   818.20 |        32.7% | 607,156.00 kVARh | - |
| WASTE |   233.31 |         9.3% | 173,129.81 WASTE | 119,723.39 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 4,497,300.99
- **Load-Heat (BTU/hr):** 676,355.36
- **Field-Heat (BTU/hr):** 119,723.39
- **Load-Heat (BTU, period total):** 501,900,768.38
- **Field-Heat (BTU, period total):** 88,842,739.12

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 1 | 1,551.34 | 1,318.03 |   691.85 |     0.85 |   62.1% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,573.77 | 1,334.54 |   707.84 |     0.85 |   63.0% |
| 01 | 1,572.31 | 1,334.27 |   705.84 |     0.85 |   62.9% |
| 02 | 1,550.26 | 1,314.60 |   694.86 |     0.85 |   62.0% |
| 03 | 1,548.36 | 1,314.06 |   693.97 |     0.85 |   61.9% |
| 04 | 1,533.11 | 1,302.69 |   683.90 |     0.85 |   61.3% |
| 05 | 1,526.79 | 1,296.47 |   682.41 |     0.85 |   61.1% |
| 06 | 1,514.46 | 1,283.84 |   677.97 |     0.85 |   60.6% |
| 07 | 1,524.88 | 1,290.86 |   686.88 |     0.85 |   61.0% |
| 08 | 1,512.84 | 1,278.42 |   687.16 |     0.85 |   60.5% |
| 09 | 1,497.16 | 1,263.73 |   683.88 |     0.84 |   59.9% |
| 10 | 1,507.01 | 1,271.80 |   692.91 |     0.84 |   60.3% |
| 11 | 1,500.29 | 1,268.25 |   684.01 |     0.85 |   60.0% |
| 12 | 1,501.78 | 1,276.37 |   666.62 |     0.85 |   60.1% |
| 13 | 1,552.25 | 1,321.83 |   676.91 |     0.85 |   62.1% |
| 14 | 1,580.03 | 1,341.88 |   702.52 |     0.85 |   63.2% |
| 15 | 1,573.59 | 1,334.83 |   702.51 |     0.85 |   62.9% |
| 16 | 1,577.03 | 1,339.62 |   706.70 |     0.85 |   63.1% |
| 17 | 1,587.63 | 1,354.78 |   700.65 |     0.85 |   63.5% |
| 18 | 1,583.88 | 1,349.73 |   701.28 |     0.85 |   63.4% |
| 19 | 1,593.32 | 1,356.06 |   711.61 |     0.85 |   63.7% |
| 20 | 1,588.34 | 1,354.10 |   700.40 |     0.85 |   63.5% |
| 21 | 1,601.28 | 1,369.49 |   697.97 |     0.86 |   64.1% |
| 22 | 1,574.86 | 1,347.14 |   684.08 |     0.86 |   63.0% |
| 23 | 1,558.00 | 1,334.48 |   671.30 |     0.86 |   62.3% |

---

# END OF REPORT

# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 299,925.3 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $58,485.44 (Cost per period)
- **Consumption Total Cost:** $78.61 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL1-MShop  
**Generated:** 2026-08-02 22:15:59  
**Data Source:** AN55050287-V-1minRES_44640CLP_260701-260731c.csv  

## Time Period

- **Period:** July 01, 2026 thru July 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,640

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

- **Transformer:** PL1-MShop
- **Power Factor:** 0.868
- **Total Energy (Actual):** 299,925.31 kWh (per period), 403.13 kW (per hour)
- **Total Waste (Actual):** 42,696.73 kWh (per period), 57.39 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL1-MShop_AN55050287-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL1-MShop_AN55050287-1minRES_260701-260731.md


## UNITY MANAGEMENT PL1-MShop SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 57.39 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 33.47 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL1-MShop Utility Cost Offset:** $11.19/hour
- **Annual Offset Savings:** $98030/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 120,530 BTU/hr
- **Total Cooling kW No Longer Needed:** 10.74 kW
- **Cooling Energy Cost Avoided:** $2.10/hour
- **Annual Cooling Savings:** $18353/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 68.13 kW
- **CO2e Emissions Avoided:** 222.80 metric tons/year
- **Monthly CO2e Reduction:** 18.57 metric tons/month
- **Hourly CO2e Reduction:** 0.0254 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $8467/year

### Total PL1-MShop Unity Savings

- **Per Hour:** $14.25
- **Per Day:** $342.05
- **Per Month:** $10261.59
- **Per Year:** $124849

### PL1-MShop Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,442.5 kVAR Max (Avg: 222.6 kVAR/hr ; 160,291 kVAR/mo)
- **Max Harmonic Distortion:** 30.2% Max (range: 3.1% - 30.2%)
- **Max Amperage:** 1,844A Max (range: 0A - 1844A)

---

# PL1-MShop DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   281.77 |     0.00 |   292.37 |
| Line to Line Voltage (480v) |   488.04 |     0.00 |   506.41 |
| Current (AMPS) |   545.65 |     0.00 |  1844.13 |
| Phase Angle (degrees) |    29.52 |    19.95 |    90.00 |
| Total Harmonic Distortion (PCT) |    14.51 |     3.06 |    30.20 |

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
| THD Phase A (%) | 4.8% | IEEE standard per-phase calculation |
| THD Phase B (%) | 4.8% | IEEE standard per-phase calculation |
| THD Phase C (%) | 4.8% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 14.5% | Field-level stress indicator |
| Max Phase THD | 4.8% | Highest THD among all three phases |
| Min Phase THD | 4.8% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 968.17 kW
  - **Maximum Load:** 1,702.76 kVA
  - **Percentage of Capacity (MAX):** 68.1%
- **Average Load:** 460.51 kVA
  - **Percentage of Capacity (Avg):** 18.4%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 460.51 kVA
- **Average Power Factor (PF):** 0.868

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 461.25 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 488.04 V
- Average Current (Iavg_A): 545.65 A
- Average kW (Psum_kW): 403.13 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.73 kVA (0.2%)
- **Calculated PF (kW/kVA from averages):** 0.874
- **Power Factor Difference:** 0.006 (0.7%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (460.51) and measured PF (0.868) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   460.51 |        18.4% | 342,622.04 kVA | 1,375,521.16 TOTAL-HEAT |
| kW |   403.13 |        16.1% | 299,925.31 kWh | 171,414.12 Load-Heat |
| kVAR |   222.63 |         8.9% | 165,634.14 kVARh | - |
| WASTE |    57.39 |         2.3% | 42,696.73 WASTE | 24,402.15 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,375,521.16
- **Load-Heat (BTU/hr):** 171,414.12
- **Field-Heat (BTU/hr):** 24,402.15
- **Load-Heat (BTU, period total):** 127,532,101.87
- **Field-Heat (BTU, period total):** 18,155,198.56

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 |   460.51 |   403.13 |   220.90 |     0.88 |   18.4% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   541.51 |   477.01 |   254.72 |     0.88 |   21.7% |
| 01 |   526.75 |   462.09 |   251.41 |     0.88 |   21.1% |
| 02 |   534.44 |   468.77 |   255.10 |     0.88 |   21.4% |
| 03 |   528.90 |   461.73 |   256.38 |     0.87 |   21.2% |
| 04 |   542.48 |   474.96 |   260.44 |     0.88 |   21.7% |
| 05 |   540.13 |   473.55 |   258.06 |     0.88 |   21.6% |
| 06 |   522.29 |   459.61 |   246.59 |     0.88 |   20.9% |
| 07 |   529.77 |   466.61 |   249.50 |     0.88 |   21.2% |
| 08 |   537.74 |   471.33 |   257.11 |     0.88 |   21.5% |
| 09 |   519.20 |   452.18 |   253.26 |     0.87 |   20.8% |
| 10 |   485.93 |   423.01 |   237.10 |     0.87 |   19.4% |
| 11 |   487.55 |   426.90 |   233.70 |     0.88 |   19.5% |
| 12 |   455.33 |   400.48 |   215.17 |     0.88 |   18.2% |
| 13 |   432.09 |   381.77 |   200.91 |     0.88 |   17.3% |
| 14 |   381.00 |   335.82 |   178.41 |     0.88 |   15.2% |
| 15 |   356.41 |   313.39 |   168.34 |     0.88 |   14.3% |
| 16 |   321.37 |   279.60 |   157.05 |     0.87 |   12.9% |
| 17 |   283.17 |   241.99 |   145.64 |     0.85 |   11.3% |
| 18 |   263.04 |   221.11 |   141.26 |     0.84 |   10.5% |
| 19 |   363.95 |   314.63 |   181.34 |     0.86 |   14.6% |
| 20 |   424.68 |   369.96 |   206.80 |     0.87 |   17.0% |
| 21 |   465.47 |   409.09 |   220.00 |     0.88 |   18.6% |
| 22 |   489.35 |   432.36 |   227.38 |     0.88 |   19.6% |
| 23 |   519.80 |   457.07 |   245.97 |     0.88 |   20.8% |

---

# END OF REPORT

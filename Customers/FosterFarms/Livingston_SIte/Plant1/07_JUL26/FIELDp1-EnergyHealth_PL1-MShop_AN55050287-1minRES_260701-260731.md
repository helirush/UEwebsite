# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 299,910.2 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $58,482.49 (Cost per period)
- **Consumption Total Cost:** $78.70 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL1-MShop  
**Generated:** 2026-09-10 19:30:35  
**Data Source:** AN55050287-V-1minRES_44640CLP_260701-260731c.csv  

## Time Period

- **Period:** July 01, 2026 thru July 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,589

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
- **Power Factor:** 0.869
- **Total Energy (Actual):** 299,910.23 kWh (per period), 403.57 kW (per hour)
- **Total Waste (Actual):** 42,683.43 kWh (per period), 57.44 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL1-MShop_AN55050287-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL1-MShop_AN55050287-1minRES_260701-260731.md


## UNITY MANAGEMENT PL1-MShop SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 57.44 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 33.42 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL1-MShop Utility Cost Offset:** $11.20/hour
- **Annual Offset Savings:** $98112/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 120,349 BTU/hr
- **Total Cooling kW No Longer Needed:** 10.73 kW
- **Cooling Energy Cost Avoided:** $2.09/hour
- **Annual Cooling Savings:** $18325/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 68.16 kW
- **CO2e Emissions Avoided:** 222.91 metric tons/year
- **Monthly CO2e Reduction:** 18.58 metric tons/month
- **Hourly CO2e Reduction:** 0.0254 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $8470/year

### Total PL1-MShop Unity Savings

- **Per Hour:** $14.26
- **Per Day:** $342.21
- **Per Month:** $10266.38
- **Per Year:** $124908

### PL1-MShop Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 476.8 kVAR Max (Avg: 222.8 kVAR/hr ; 160,444 kVAR/mo)
- **Max Harmonic Distortion:** 30.2% Max (range: 3.1% - 30.2%)
- **Max Amperage:** 1,281A Max (range: 108A - 1281A)

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
| Line to Neutral Voltage (277v) |   282.09 |   273.45 |   292.37 |
| Line to Line Voltage (480v) |   488.59 |   473.63 |   506.41 |
| Current (AMPS) |   546.23 |   107.96 |  1280.69 |
| Phase Angle (degrees) |    29.45 |    19.95 |    43.28 |
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
  - **Maximum Load:** 1,075.91 kVA
  - **Percentage of Capacity (MAX):** 43.0%
- **Average Load:** 461.00 kVA
  - **Percentage of Capacity (Avg):** 18.4%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 461.00 kVA
- **Average Power Factor (PF):** 0.869

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 462.26 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 488.59 V
- Average Current (Iavg_A): 546.23 A
- Average kW (Psum_kW): 403.57 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 1.26 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.873
- **Power Factor Difference:** 0.004 (0.5%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (461.00) and measured PF (0.869) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   461.00 |        18.4% | 342,593.66 kVA | 1,377,025.21 TOTAL-HEAT |
| kW |   403.57 |        16.1% | 299,910.23 kWh | 171,562.31 Load-Heat |
| kVAR |   222.84 |         8.9% | 165,602.74 kVARh | - |
| WASTE |    57.44 |         2.3% | 42,683.43 WASTE | 24,416.86 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,377,025.21
- **Load-Heat (BTU/hr):** 171,562.31
- **Field-Heat (BTU/hr):** 24,416.86
- **Load-Heat (BTU, period total):** 127,496,527.38
- **Field-Heat (BTU, period total):** 18,145,392.99

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 |   461.00 |   403.57 |   221.12 |     0.88 |   18.4% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   541.80 |   477.27 |   254.85 |     0.88 |   21.7% |
| 01 |   526.75 |   462.09 |   251.41 |     0.88 |   21.1% |
| 02 |   534.44 |   468.77 |   255.10 |     0.88 |   21.4% |
| 03 |   528.90 |   461.73 |   256.38 |     0.87 |   21.2% |
| 04 |   542.48 |   474.96 |   260.44 |     0.88 |   21.7% |
| 05 |   540.13 |   473.55 |   258.06 |     0.88 |   21.6% |
| 06 |   522.29 |   459.61 |   246.59 |     0.88 |   20.9% |
| 07 |   532.06 |   468.62 |   250.58 |     0.88 |   21.3% |
| 08 |   544.77 |   477.50 |   260.47 |     0.88 |   21.8% |
| 09 |   519.20 |   452.18 |   253.26 |     0.87 |   20.8% |
| 10 |   485.93 |   423.01 |   237.10 |     0.87 |   19.4% |
| 11 |   487.81 |   427.13 |   233.82 |     0.88 |   19.5% |
| 12 |   455.82 |   400.91 |   215.40 |     0.88 |   18.2% |
| 13 |   432.33 |   381.98 |   201.02 |     0.88 |   17.3% |
| 14 |   381.21 |   336.00 |   178.51 |     0.88 |   15.2% |
| 15 |   356.41 |   313.39 |   168.34 |     0.88 |   14.3% |
| 16 |   321.37 |   279.60 |   157.05 |     0.87 |   12.9% |
| 17 |   283.47 |   242.25 |   145.79 |     0.85 |   11.3% |
| 18 |   263.04 |   221.11 |   141.26 |     0.84 |   10.5% |
| 19 |   363.23 |   314.31 |   180.66 |     0.87 |   14.5% |
| 20 |   425.13 |   370.35 |   207.02 |     0.87 |   17.0% |
| 21 |   466.47 |   409.97 |   220.48 |     0.88 |   18.7% |
| 22 |   489.61 |   432.59 |   227.50 |     0.88 |   19.6% |
| 23 |   520.64 |   457.81 |   246.37 |     0.88 |   20.8% |

---

# END OF REPORT

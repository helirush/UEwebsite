# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 540,711.0 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $105,438.65 (Cost per period)
- **Consumption Total Cost:** $177.54 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Rendering-2  
**Generated:** 2026-10-08 00:56:25  
**Data Source:** AN55050284-V-260930.2359c.csv  

## Time Period

- **Period:** September 01, 2026 thru September 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 35,633

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

- **Transformer:** Rendering-2
- **Power Factor:** 0.709
- **Total Energy (Actual):** 540,711.00 kWh (per period), 910.47 kW (per hour)
- **Total Waste (Actual):** 222,202.68 kWh (per period), 374.15 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Rendering-2_AN55050284-1minRES_260901-260930.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Rendering-2_AN55050284-1minRES_260901-260930.md


## UNITY MANAGEMENT Rendering-2 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 374.15 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 289.67 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Rendering-2 Utility Cost Offset:** $72.96/hour
- **Annual Offset Savings:** $639127/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 1,109,791 BTU/hr
- **Total Cooling kW No Longer Needed:** 97.11 kW
- **Cooling Energy Cost Avoided:** $18.94/hour
- **Annual Cooling Savings:** $165878/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 471.26 kW
- **CO2e Emissions Avoided:** 1541.10 metric tons/year
- **Monthly CO2e Reduction:** 128.42 metric tons/month
- **Hourly CO2e Reduction:** 0.1759 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $58562/year

### Total Rendering-2 Unity Savings

- **Per Hour:** $98.58
- **Per Day:** $2365.93
- **Per Month:** $70978.01
- **Per Year:** $863566

### Rendering-2 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,399.4 kVAR Max (Avg: 906.3 kVAR/hr ; 652,503 kVAR/mo)
- **Max Harmonic Distortion:** 30.5% Max (range: 3.4% - 30.5%)
- **Max Amperage:** 2,434A Max (range: 664A - 2434A)

---

# Rendering-2 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   272.40 |   263.08 |   282.48 |
| Line to Line Voltage (480v) |   471.82 |   455.67 |   489.28 |
| Current (AMPS) |  1573.14 |   663.59 |  2434.45 |
| Phase Angle (degrees) |    44.80 |    23.22 |    57.72 |
| Total Harmonic Distortion (PCT) |    16.12 |     3.37 |    30.46 |

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
| THD Phase A (%) | 5.4% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.4% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.4% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 16.1% | Field-level stress indicator |
| Max Phase THD | 5.4% | Highest THD among all three phases |
| Min Phase THD | 5.4% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,322.61 kW
  - **Maximum Load:** 1,835.38 kVA
  - **Percentage of Capacity (MAX):** 73.4%
- **Average Load:** 1,284.62 kVA
  - **Percentage of Capacity (Avg):** 51.4%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,284.62 kVA
- **Average Power Factor (PF):** 0.709

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,285.59 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 471.82 V
- Average Current (Iavg_A): 1573.14 A
- Average kW (Psum_kW): 910.47 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.97 kVA (0.1%)
- **Calculated PF (kW/kVA from averages):** 0.708
- **Power Factor Difference:** 0.001 (0.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1284.62) and measured PF (0.709) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,284.62 |        51.4% | 762,913.68 kVA | 3,106,641.69 TOTAL-HEAT |
| kW |   910.47 |        36.4% | 540,711.00 kWh | 904,825.97 Load-Heat |
| kVAR |   906.25 |        36.3% | 538,208.97 kVARh | - |
| WASTE |   374.15 |        15.0% | 222,202.68 WASTE | 371,834.04 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,106,641.69
- **Load-Heat (BTU/hr):** 904,825.97
- **Field-Heat (BTU/hr):** 371,834.04
- **Load-Heat (BTU, period total):** 537,361,060.81
- **Field-Heat (BTU, period total):** 220,826,037.27

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 9 | 1,284.62 |   910.47 |   904.68 |     0.71 |   51.4% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,210.92 |   852.03 |   858.55 |     0.70 |   48.4% |
| 01 | 1,239.54 |   876.84 |   874.33 |     0.71 |   49.6% |
| 02 | 1,229.16 |   873.39 |   863.53 |     0.71 |   49.2% |
| 03 | 1,197.44 |   849.13 |   842.80 |     0.71 |   47.9% |
| 04 | 1,225.21 |   871.74 |   859.60 |     0.71 |   49.0% |
| 05 | 1,250.25 |   888.16 |   878.77 |     0.71 |   50.0% |
| 06 | 1,277.43 |   905.71 |   899.83 |     0.71 |   51.1% |
| 07 | 1,304.18 |   921.86 |   921.51 |     0.71 |   52.2% |
| 08 | 1,354.16 |   966.61 |   946.85 |     0.71 |   54.2% |
| 09 | 1,372.66 |   970.73 |   969.15 |     0.71 |   54.9% |
| 10 | 1,377.68 |   974.10 |   972.89 |     0.71 |   55.1% |
| 11 | 1,369.18 |   964.69 |   970.34 |     0.70 |   54.8% |
| 12 | 1,334.90 |   933.12 |   953.05 |     0.70 |   53.4% |
| 13 | 1,320.59 |   916.11 |   949.97 |     0.69 |   52.8% |
| 14 | 1,373.03 |   972.19 |   968.52 |     0.71 |   54.9% |
| 15 | 1,373.99 |   980.62 |   961.43 |     0.71 |   55.0% |
| 16 | 1,358.74 |   973.17 |   947.08 |     0.72 |   54.3% |
| 17 | 1,322.15 |   940.96 |   927.51 |     0.71 |   52.9% |
| 18 | 1,196.44 |   842.52 |   848.28 |     0.70 |   47.9% |
| 19 | 1,189.28 |   850.12 |   829.33 |     0.71 |   47.6% |
| 20 | 1,243.41 |   894.10 |   860.93 |     0.72 |   49.7% |
| 21 | 1,256.73 |   892.95 |   882.38 |     0.71 |   50.3% |
| 22 | 1,269.45 |   897.95 |   895.32 |     0.71 |   50.8% |
| 23 | 1,257.25 |   890.88 |   885.37 |     0.71 |   50.3% |

---

# END OF REPORT

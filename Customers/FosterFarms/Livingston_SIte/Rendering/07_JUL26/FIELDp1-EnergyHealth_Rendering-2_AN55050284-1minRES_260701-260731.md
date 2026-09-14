# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 649,503.8 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $126,653.25 (Cost per period)
- **Consumption Total Cost:** $187.85 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Rendering-2  
**Generated:** 2026-09-10 19:33:34  
**Data Source:** AN55050284-V-1minRES_44640CLP_260701-260731c.csv  

## Time Period

- **Period:** July 01, 2026 thru July 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 40,454

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

- **Transformer:** Rendering-2
- **Power Factor:** 0.720
- **Total Energy (Actual):** 649,503.82 kWh (per period), 963.32 kW (per hour)
- **Total Waste (Actual):** 248,803.61 kWh (per period), 369.02 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Rendering-2_AN55050284-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Rendering-2_AN55050284-1minRES_260701-260731.md


## UNITY MANAGEMENT Rendering-2 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 369.02 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 286.27 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Rendering-2 Utility Cost Offset:** $71.96/hour
- **Annual Offset Savings:** $630355/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 1,100,613 BTU/hr
- **Total Cooling kW No Longer Needed:** 98.12 kW
- **Cooling Energy Cost Avoided:** $19.13/hour
- **Annual Cooling Savings:** $167602/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 467.13 kW
- **CO2e Emissions Avoided:** 1527.60 metric tons/year
- **Monthly CO2e Reduction:** 127.30 metric tons/month
- **Hourly CO2e Reduction:** 0.1744 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $58049/year

### Total Rendering-2 Unity Savings

- **Per Hour:** $97.72
- **Per Day:** $2345.22
- **Per Month:** $70356.66
- **Per Year:** $856006

### Rendering-2 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,377.8 kVAR Max (Avg: 920.4 kVAR/hr ; 662,689 kVAR/mo)
- **Max Harmonic Distortion:** 34.1% Max (range: 3.0% - 34.1%)
- **Max Amperage:** 2,498A Max (range: 584A - 2498A)

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
| Line to Neutral Voltage (277v) |   272.17 |   264.45 |   284.13 |
| Line to Line Voltage (480v) |   471.42 |   458.03 |   492.13 |
| Current (AMPS) |  1633.57 |   584.21 |  2498.19 |
| Phase Angle (degrees) |    43.88 |    24.63 |    60.40 |
| Total Harmonic Distortion (PCT) |    16.29 |     3.00 |    34.06 |

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
| Unity THD Composite (%) | 16.3% | Field-level stress indicator |
| Max Phase THD | 5.4% | Highest THD among all three phases |
| Min Phase THD | 5.4% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,346.19 kW
  - **Maximum Load:** 1,848.12 kVA
  - **Percentage of Capacity (MAX):** 73.9%
- **Average Load:** 1,332.34 kVA
  - **Percentage of Capacity (Avg):** 53.3%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,332.34 kVA
- **Average Power Factor (PF):** 0.720

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,333.84 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 471.42 V
- Average Current (Iavg_A): 1633.57 A
- Average kW (Psum_kW): 963.32 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 1.50 kVA (0.1%)
- **Calculated PF (kW/kVA from averages):** 0.722
- **Power Factor Difference:** 0.003 (0.4%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1332.34) and measured PF (0.720) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,332.34 |        53.3% | 898,307.43 kVA | 3,286,991.55 TOTAL-HEAT |
| kW |   963.32 |        38.5% | 649,503.82 kWh | 910,395.85 Load-Heat |
| kVAR |   920.40 |        36.8% | 620,565.08 kVARh | - |
| WASTE |   369.02 |        14.8% | 248,803.61 WASTE | 348,742.78 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,286,991.55
- **Load-Heat (BTU/hr):** 910,395.85
- **Field-Heat (BTU/hr):** 348,742.78
- **Load-Heat (BTU, period total):** 613,819,227.25
- **Field-Heat (BTU, period total):** 235,134,009.72

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 | 1,332.34 |   963.32 |   917.74 |     0.72 |   53.3% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,308.82 |   941.64 |   906.15 |     0.72 |   52.4% |
| 01 | 1,334.88 |   960.55 |   924.57 |     0.72 |   53.4% |
| 02 | 1,342.32 |   974.43 |   921.27 |     0.73 |   53.7% |
| 03 | 1,362.42 |   984.86 |   939.47 |     0.72 |   54.5% |
| 04 | 1,404.39 | 1,012.49 |   971.02 |     0.72 |   56.2% |
| 05 | 1,384.27 | 1,001.23 |   953.34 |     0.72 |   55.4% |
| 06 | 1,384.21 | 1,000.84 |   954.05 |     0.72 |   55.4% |
| 07 | 1,366.11 |   989.78 |   939.28 |     0.72 |   54.6% |
| 08 | 1,377.44 |   998.08 |   946.09 |     0.72 |   55.1% |
| 09 | 1,363.80 |   984.21 |   941.82 |     0.72 |   54.6% |
| 10 | 1,368.93 |   992.64 |   940.31 |     0.73 |   54.8% |
| 11 | 1,359.91 |   981.27 |   938.50 |     0.72 |   54.4% |
| 12 | 1,327.29 |   953.45 |   920.12 |     0.72 |   53.1% |
| 13 | 1,293.86 |   926.27 |   900.25 |     0.72 |   51.8% |
| 14 | 1,327.31 |   962.16 |   911.85 |     0.72 |   53.1% |
| 15 | 1,347.37 |   978.49 |   923.35 |     0.73 |   53.9% |
| 16 | 1,355.50 |   988.79 |   924.40 |     0.73 |   54.2% |
| 17 | 1,309.92 |   954.95 |   893.32 |     0.73 |   52.4% |
| 18 | 1,222.40 |   880.72 |   845.12 |     0.72 |   48.9% |
| 19 | 1,204.90 |   870.59 |   830.56 |     0.72 |   48.2% |
| 20 | 1,307.01 |   953.30 |   891.28 |     0.73 |   52.3% |
| 21 | 1,326.04 |   961.07 |   910.94 |     0.72 |   53.0% |
| 22 | 1,314.86 |   947.59 |   908.69 |     0.72 |   52.6% |
| 23 | 1,322.56 |   949.84 |   917.58 |     0.72 |   52.9% |

---

# END OF REPORT

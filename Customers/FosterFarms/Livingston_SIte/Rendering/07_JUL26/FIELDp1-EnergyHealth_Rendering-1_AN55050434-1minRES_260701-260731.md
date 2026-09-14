# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 619,797.2 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $120,860.46 (Cost per period)
- **Consumption Total Cost:** $183.39 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Rendering-1  
**Generated:** 2026-09-10 19:33:26  
**Data Source:** AN55050434-V-1minRES_44640CLP_260701-260731c.csv  

## Time Period

- **Period:** July 01, 2026 thru July 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 39,543

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

- **Transformer:** Rendering-1
- **Power Factor:** 0.788
- **Total Energy (Actual):** 619,797.24 kWh (per period), 940.44 kW (per hour)
- **Total Waste (Actual):** 165,888.85 kWh (per period), 251.71 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Rendering-1_AN55050434-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Rendering-1_AN55050434-1minRES_260701-260731.md


## UNITY MANAGEMENT Rendering-1 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 251.71 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 181.06 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Rendering-1 Utility Cost Offset:** $49.08/hour
- **Annual Offset Savings:** $429969/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 690,729 BTU/hr
- **Total Cooling kW No Longer Needed:** 61.58 kW
- **Cooling Energy Cost Avoided:** $12.01/hour
- **Annual Cooling Savings:** $105197/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 313.29 kW
- **CO2e Emissions Avoided:** 1024.52 metric tons/year
- **Monthly CO2e Reduction:** 85.38 metric tons/month
- **Hourly CO2e Reduction:** 0.1170 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $38932/year

### Total Rendering-1 Unity Savings

- **Per Hour:** $65.54
- **Per Day:** $1572.87
- **Per Month:** $47186.15
- **Per Year:** $574098

### Rendering-1 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,101.4 kVAR Max (Avg: 732.7 kVAR/hr ; 527,516 kVAR/mo)
- **Max Harmonic Distortion:** 31.4% Max (range: 3.9% - 31.4%)
- **Max Amperage:** 1,907A Max (range: 1012A - 1907A)

---

# Rendering-1 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   272.86 |   264.45 |   284.65 |
| Line to Line Voltage (480v) |   472.60 |   458.05 |   493.02 |
| Current (AMPS) |  1456.83 |  1011.54 |  1907.19 |
| Phase Angle (degrees) |    37.93 |    27.50 |    51.61 |
| Total Harmonic Distortion (PCT) |    16.24 |     3.94 |    31.43 |

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
| Unity THD Composite (%) | 16.2% | Field-level stress indicator |
| Max Phase THD | 5.4% | Highest THD among all three phases |
| Min Phase THD | 5.4% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,237.26 kW
  - **Maximum Load:** 1,529.93 kVA
  - **Percentage of Capacity (MAX):** 61.2%
- **Average Load:** 1,192.15 kVA
  - **Percentage of Capacity (Avg):** 47.7%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,192.15 kVA
- **Average Power Factor (PF):** 0.788

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,192.51 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 472.60 V
- Average Current (Iavg_A): 1456.83 A
- Average kW (Psum_kW): 940.44 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.36 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.789
- **Power Factor Difference:** 0.001 (0.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1192.15) and measured PF (0.788) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,192.15 |        47.7% | 785,686.10 kVA | 3,208,916.18 TOTAL-HEAT |
| kW |   940.44 |        37.6% | 619,797.24 kWh | 677,526.85 Load-Heat |
| kVAR |   732.66 |        29.3% | 482,860.25 kVARh | - |
| WASTE |   251.71 |        10.1% | 165,888.85 WASTE | 181,340.20 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,208,916.18
- **Load-Heat (BTU/hr):** 677,526.85
- **Field-Heat (BTU/hr):** 181,340.20
- **Load-Heat (BTU, period total):** 446,524,072.38
- **Field-Heat (BTU, period total):** 119,512,255.99

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 | 1,192.15 |   940.44 |   731.21 |     0.79 |   47.7% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,231.12 |   978.41 |   746.18 |     0.79 |   49.2% |
| 01 | 1,236.07 |   978.84 |   753.59 |     0.79 |   49.4% |
| 02 | 1,234.31 |   975.56 |   754.86 |     0.79 |   49.4% |
| 03 | 1,237.75 |   978.30 |   756.95 |     0.79 |   49.5% |
| 04 | 1,234.29 |   975.76 |   754.72 |     0.79 |   49.4% |
| 05 | 1,212.50 |   959.02 |   740.67 |     0.79 |   48.5% |
| 06 | 1,213.25 |   959.61 |   741.24 |     0.79 |   48.5% |
| 07 | 1,206.19 |   952.68 |   738.63 |     0.79 |   48.2% |
| 08 | 1,215.43 |   960.11 |   744.09 |     0.79 |   48.6% |
| 09 | 1,212.95 |   956.40 |   744.98 |     0.79 |   48.5% |
| 10 | 1,216.78 |   960.58 |   745.90 |     0.79 |   48.7% |
| 11 | 1,211.38 |   955.32 |   743.74 |     0.79 |   48.5% |
| 12 | 1,205.72 |   946.60 |   745.28 |     0.79 |   48.2% |
| 13 | 1,189.68 |   931.22 |   739.08 |     0.78 |   47.6% |
| 14 | 1,178.61 |   919.06 |   736.66 |     0.78 |   47.1% |
| 15 | 1,171.81 |   913.73 |   732.21 |     0.78 |   46.9% |
| 16 | 1,174.17 |   921.73 |   726.30 |     0.79 |   47.0% |
| 17 | 1,136.83 |   891.96 |   703.20 |     0.78 |   45.5% |
| 18 | 1,109.42 |   864.64 |   693.35 |     0.78 |   44.4% |
| 19 | 1,104.53 |   866.41 |   683.10 |     0.78 |   44.2% |
| 20 | 1,149.75 |   919.37 |   688.43 |     0.80 |   46.0% |
| 21 | 1,157.49 |   925.46 |   693.16 |     0.80 |   46.3% |
| 22 | 1,181.00 |   935.89 |   718.48 |     0.79 |   47.2% |
| 23 | 1,218.44 |   965.36 |   742.25 |     0.79 |   48.7% |

---

# END OF REPORT

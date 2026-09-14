# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 476,560.2 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $92,929.24 (Cost per period)
- **Consumption Total Cost:** $223.16 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Rendering-1  
**Generated:** 2026-09-10 22:49:43  
**Data Source:** AN55050434-V-1minRES_32730CLP_260301-260323c.csv  

## Time Period

- **Period:** March 01, 2026 thru March 23, 2026
- **Number of Days:** 22 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 24,986

- **Dataset Coverage:** Partial month (71.0% of 31-day month)
- **Billing Scale Factor:** 1.409x (normalization applied for monthly comparison)

## Facility Information

- **Facility:** Foster Farms
- **Location:** Livingston HQ Facility
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** Rendering-1
- **Power Factor:** 0.825
- **Total Energy (Actual):** 476,560.19 kWh (22 days), 1144.39 kW (per hour)
- **Total Energy (Monthly Equivalent):** 671,516.63 kWh
- **Total Waste (Actual):** 100,946.45 kWh (22 days), 242.41 kW (per hour)
- **Total Waste (Monthly Equivalent):** 142,242.73 kWh

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Rendering-1_AN55050434-1minRES_260301-260323.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Rendering-1_AN55050434-1minRES_260301-260323.md


## UNITY MANAGEMENT Rendering-1 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 242.41 kW/hr (actual)
- **Heat-Coupled Burden Used in Thermal Model:** 163.18 kW/hr (modeled_non_active_field_burden)
- **Monthly Equivalent Waste:** 341.57 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Rendering-1 Utility Cost Offset (Monthly Equivalent):** $66.61/hour
- **Annual Offset Savings:** $414080/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 629,583 BTU/hr
- **Total Cooling kW No Longer Needed:** 55.17 kW
- **Cooling Energy Cost Avoided:** $10.76/hour
- **Annual Cooling Savings:** $94249/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 297.58 kW
- **CO2e Emissions Avoided:** 973.14 metric tons/year
- **Monthly CO2e Reduction:** 81.10 metric tons/month
- **Hourly CO2e Reduction:** 0.1111 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $36979/year

### Total Rendering-1 Unity Savings

- **Per Hour:** $62.25
- **Per Day:** $1494.00
- **Per Month:** $44819.87
- **Per Year:** $545308

### Rendering-1 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,106.2 kVAR Max (Avg: 783.3 kVAR/hr ; 563,984 kVAR/mo)
- **Max Harmonic Distortion:** 31.3% Max (range: 3.0% - 31.3%)
- **Max Amperage:** 2,201A Max (range: 1320A - 2201A)

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
| Line to Neutral Voltage (277v) |   272.19 |   261.97 |   283.81 |
| Line to Line Voltage (480v) |   471.45 |   453.74 |   491.58 |
| Current (AMPS) |  1698.48 |  1319.98 |  2200.75 |
| Phase Angle (degrees) |    34.41 |    27.25 |    44.27 |
| Total Harmonic Distortion (PCT) |    16.95 |     3.00 |    31.31 |

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
| THD Phase C (%) | 5.7% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 16.9% | Field-level stress indicator |
| Max Phase THD | 5.7% | Highest THD among all three phases |
| Min Phase THD | 5.6% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,374.68 kW
  - **Maximum Load:** 1,647.17 kVA
  - **Percentage of Capacity (MAX):** 65.9%
- **Average Load:** 1,386.79 kVA
  - **Percentage of Capacity (Avg):** 55.5%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,386.79 kVA
- **Average Power Factor (PF):** 0.825

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,386.94 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 471.45 V
- Average Current (Iavg_A): 1698.48 A
- Average kW (Psum_kW): 1144.39 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.15 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.825
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1386.79) and measured PF (0.825) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,386.79 |        55.5% | 577,506.64 kVA | 3,904,805.18 TOTAL-HEAT |
| kW | 1,144.39 |        45.8% | 476,560.19 kWh | 682,548.39 Load-Heat |
| kVAR |   783.31 |        31.3% | 326,196.73 kVARh | - |
| WASTE |   242.41 |         9.7% | 100,946.45 WASTE | 144,579.51 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,904,805.18
- **Load-Heat (BTU/hr):** 682,548.39
- **Field-Heat (BTU/hr):** 144,579.51
- **Load-Heat (BTU, period total):** 284,235,902.89
- **Field-Heat (BTU, period total):** 60,207,727.75

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 3 | 1,386.79 | 1,144.39 |   782.70 |     0.83 |   55.5% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,409.48 | 1,164.95 |   792.94 |     0.83 |   56.4% |
| 01 | 1,416.60 | 1,168.55 |   800.30 |     0.82 |   56.7% |
| 02 | 1,409.08 | 1,162.98 |   795.17 |     0.83 |   56.4% |
| 03 | 1,401.99 | 1,152.24 |   798.22 |     0.82 |   56.1% |
| 04 | 1,408.33 | 1,161.54 |   795.80 |     0.82 |   56.3% |
| 05 | 1,416.31 | 1,168.85 |   799.43 |     0.83 |   56.7% |
| 06 | 1,403.06 | 1,155.32 |   795.58 |     0.82 |   56.1% |
| 07 | 1,382.79 | 1,136.79 |   786.87 |     0.82 |   55.3% |
| 08 | 1,393.62 | 1,145.75 |   792.97 |     0.82 |   55.7% |
| 09 | 1,400.76 | 1,150.27 |   798.86 |     0.82 |   56.0% |
| 10 | 1,398.98 | 1,150.89 |   794.94 |     0.82 |   56.0% |
| 11 | 1,397.19 | 1,148.82 |   794.82 |     0.82 |   55.9% |
| 12 | 1,406.15 | 1,155.95 |   800.34 |     0.82 |   56.2% |
| 13 | 1,396.86 | 1,148.94 |   793.93 |     0.82 |   55.9% |
| 14 | 1,398.22 | 1,147.98 |   797.79 |     0.82 |   55.9% |
| 15 | 1,404.18 | 1,154.88 |   798.14 |     0.82 |   56.2% |
| 16 | 1,396.63 | 1,154.36 |   785.72 |     0.83 |   55.9% |
| 17 | 1,374.35 | 1,138.07 |   770.12 |     0.83 |   55.0% |
| 18 | 1,326.54 | 1,089.70 |   755.90 |     0.82 |   53.1% |
| 19 | 1,332.78 | 1,097.99 |   754.91 |     0.82 |   53.3% |
| 20 | 1,333.69 | 1,110.91 |   736.36 |     0.83 |   53.3% |
| 21 | 1,320.57 | 1,107.39 |   718.50 |     0.84 |   52.8% |
| 22 | 1,352.39 | 1,127.65 |   745.95 |     0.83 |   54.1% |
| 23 | 1,390.74 | 1,152.19 |   778.53 |     0.83 |   55.6% |

---

# END OF REPORT

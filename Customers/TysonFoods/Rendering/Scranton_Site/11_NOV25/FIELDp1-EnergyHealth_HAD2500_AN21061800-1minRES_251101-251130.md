# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 810,754.2 kWh (Usage per period)
- **Consumption Cost per unit:** $0.110/kWh (Cost per kWh)
- **Consumption Total Cost:** $89,182.96 (Cost per period)
- **Consumption Total Cost:** $124.09 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** HAD2500  
**Generated:** 2026-09-12 17:54:08  
**Data Source:** AN21061800-V-1minRES_43260CLP_251101-251130c.csv  

## Time Period

- **Period:** November 01, 2025 thru November 30, 2025
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,122

- **Dataset Coverage:** Complete month (100.0% of 30-day month)
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
- **Power Factor:** 0.975
- **Total Energy (Actual):** 810,754.20 kWh (per period), 1128.08 kW (per hour)
- **Total Waste (Actual):** 19,441.88 kWh (per period), 27.05 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_HAD2500_AN21061800-1minRES_251101-251130.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_HAD2500_AN21061800-1minRES_251101-251130.md


## UNITY MANAGEMENT HAD2500 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 27.05 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 11.87 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1100/kWh (all-inclusive)
- **HAD2500 Utility Cost Offset:** $2.98/hour
- **Annual Offset Savings:** $26067/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 43,174 BTU/hr
- **Total Cooling kW No Longer Needed:** 4.05 kW
- **Cooling Energy Cost Avoided:** $0.45/hour
- **Annual Cooling Savings:** $3906/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 31.11 kW
- **CO2e Emissions Avoided:** 101.72 metric tons/year
- **Monthly CO2e Reduction:** 8.48 metric tons/month
- **Hourly CO2e Reduction:** 0.0116 metric tons/hour
- **CO2e Value Rate:** $10/metric ton
- **Annual CO2e Value:** $1017/year

### Total HAD2500 Unity Savings

- **Per Hour:** $3.54
- **Per Day:** $84.90
- **Per Month:** $2547.14
- **Per Year:** $30990

### HAD2500 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 940.6 kVAR Max (Avg: 248.5 kVAR/hr ; 178,938 kVAR/mo)
- **Max Harmonic Distortion:** 31.7% Max (range: 3.0% - 31.7%)
- **Max Amperage:** 2,059A Max (range: 421A - 2059A)

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
| Line to Neutral Voltage (277v) |   279.86 |   274.92 |   293.59 |
| Line to Line Voltage (480v) |   484.73 |   476.17 |   508.52 |
| Current (AMPS) |  1379.15 |   420.95 |  2058.80 |
| Phase Angle (degrees) |    11.61 |     2.83 |    52.33 |
| Total Harmonic Distortion (PCT) |    16.26 |     3.03 |    31.69 |

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

- **Maximum UtilityDemand:** 1,590.47 kW
  - **Maximum Load:** 1,713.31 kVA
  - **Percentage of Capacity (MAX):** 68.5%
- **Average Load:** 1,155.14 kVA
  - **Percentage of Capacity (Avg):** 46.2%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,155.14 kVA
- **Average Power Factor (PF):** 0.975

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,157.89 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 484.73 V
- Average Current (Iavg_A): 1379.15 A
- Average kW (Psum_kW): 1128.08 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 2.75 kVA (0.2%)
- **Calculated PF (kW/kVA from averages):** 0.974
- **Power Factor Difference:** 0.001 (0.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1155.14) and measured PF (0.975) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,155.14 |        46.2% | 830,196.07 kVA | 3,849,183.87 TOTAL-HEAT |
| kW | 1,128.08 |        45.1% | 810,754.20 kWh | 90,141.79 Load-Heat |
| kVAR |   248.52 |         9.9% | 178,614.54 kVARh | - |
| WASTE |    27.05 |         1.1% | 19,441.88 WASTE | 2,161.60 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,849,183.87
- **Load-Heat (BTU/hr):** 90,141.79
- **Field-Heat (BTU/hr):** 2,161.60
- **Load-Heat (BTU, period total):** 64,784,901.96
- **Field-Heat (BTU, period total):** 1,553,541.21

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 11 | 1,155.14 | 1,128.08 |   232.13 |     0.98 |   46.2% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,190.74 | 1,160.23 |   243.32 |     0.97 |   47.6% |
| 01 | 1,202.91 | 1,173.07 |   244.27 |     0.98 |   48.1% |
| 02 | 1,167.53 | 1,140.60 |   235.74 |     0.98 |   46.7% |
| 03 | 1,176.87 | 1,150.94 |   237.76 |     0.98 |   47.1% |
| 04 | 1,172.15 | 1,148.23 |   227.45 |     0.98 |   46.9% |
| 05 | 1,158.30 | 1,135.40 |   217.31 |     0.98 |   46.3% |
| 06 | 1,124.42 | 1,100.20 |   217.12 |     0.98 |   45.0% |
| 07 | 1,157.85 | 1,129.54 |   237.89 |     0.98 |   46.3% |
| 08 | 1,144.42 | 1,116.09 |   238.90 |     0.98 |   45.8% |
| 09 | 1,153.45 | 1,125.34 |   240.56 |     0.98 |   46.1% |
| 10 | 1,143.05 | 1,115.40 |   238.57 |     0.98 |   45.7% |
| 11 | 1,146.11 | 1,114.13 |   243.10 |     0.97 |   45.8% |
| 12 | 1,121.35 | 1,095.63 |   223.42 |     0.98 |   44.9% |
| 13 | 1,121.63 | 1,095.77 |   218.92 |     0.98 |   44.9% |
| 14 | 1,151.12 | 1,126.62 |   225.17 |     0.98 |   46.0% |
| 15 | 1,129.73 | 1,103.72 |   226.03 |     0.98 |   45.2% |
| 16 | 1,142.88 | 1,116.82 |   228.52 |     0.98 |   45.7% |
| 17 | 1,147.85 | 1,122.58 |   223.46 |     0.98 |   45.9% |
| 18 | 1,153.97 | 1,127.79 |   228.09 |     0.98 |   46.2% |
| 19 | 1,160.78 | 1,133.07 |   234.44 |     0.98 |   46.4% |
| 20 | 1,160.95 | 1,134.05 |   230.37 |     0.98 |   46.4% |
| 21 | 1,167.64 | 1,138.66 |   239.36 |     0.98 |   46.7% |
| 22 | 1,163.64 | 1,134.48 |   238.10 |     0.97 |   46.5% |
| 23 | 1,165.56 | 1,137.26 |   233.66 |     0.98 |   46.6% |

---

# END OF REPORT

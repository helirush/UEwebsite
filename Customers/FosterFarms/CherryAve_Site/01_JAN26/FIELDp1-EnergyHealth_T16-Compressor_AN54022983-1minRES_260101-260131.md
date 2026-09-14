# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 739,404.2 kWh (Usage per period)
- **Consumption Cost per unit:** $0.318/kWh (Cost per kWh)
- **Consumption Total Cost:** $235,264.98 (Cost per period)
- **Consumption Total Cost:** $316.22 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T16 Compressor  
**Generated:** 2026-09-10 23:16:29  
**Data Source:** AN54022983-V-1minRES_44640CLP_260101-260131c.csv  

## Time Period

- **Period:** January 01, 2026 thru January 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,640

- **Dataset Coverage:** Complete month (100.0% of 31-day month)
- **Billing Scale Factor:** 1.000x (no normalization needed)

## Facility Information

- **Facility:** Foster Farms
- **Location:** Cherry Ave Facility
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** T16 Compressor
- **Power Factor:** 0.882
- **Total Energy (Actual):** 739,404.22 kWh (per period), 993.82 kW (per hour)
- **Total Waste (Actual):** 95,187.41 kWh (per period), 127.94 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T16-Compressor_AN54022983-1minRES_260101-260131.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T16-Compressor_AN54022983-1minRES_260101-260131.md


## UNITY MANAGEMENT T16 Compressor SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 127.94 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 73.54 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.3182/kWh (all-inclusive)
- **T16 Compressor Utility Cost Offset:** $40.71/hour
- **Annual Offset Savings:** $356604/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 272,706 BTU/hr
- **Total Cooling kW No Longer Needed:** 23.92 kW
- **Cooling Energy Cost Avoided:** $7.61/hour
- **Annual Cooling Savings:** $66671/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 151.86 kW
- **CO2e Emissions Avoided:** 496.61 metric tons/year
- **Monthly CO2e Reduction:** 41.38 metric tons/month
- **Hourly CO2e Reduction:** 0.0567 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $19119/year

### Total T16 Compressor Unity Savings

- **Per Hour:** $50.50
- **Per Day:** $1212.04
- **Per Month:** $36361.16
- **Per Year:** $442394

### T16 Compressor Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,006.7 kVAR Max (Avg: 520.3 kVAR/hr ; 374,586 kVAR/mo)
- **Max Harmonic Distortion:** 93.5% Max (range: 0.0% - 93.5%)
- **Max Amperage:** 1,988A Max (range: 164A - 1988A)

---

# T16 Compressor DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   274.53 |   264.68 |   290.50 |
| Line to Line Voltage (480v) |   475.51 |   458.43 |   503.15 |
| Current (AMPS) |  1370.71 |   163.57 |  1988.46 |
| Phase Angle (degrees) |    28.05 |    24.82 |    48.26 |
| Total Harmonic Distortion (PCT) |    14.50 |     0.00 |    93.47 |

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
| THD Phase B (%) | 4.9% | IEEE standard per-phase calculation |
| THD Phase C (%) | 4.9% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 14.5% | Field-level stress indicator |
| Max Phase THD | 4.9% | Highest THD among all three phases |
| Min Phase THD | 4.8% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,452.41 kW
  - **Maximum Load:** 1,609.47 kVA
  - **Percentage of Capacity (MAX):** 64.4%
- **Average Load:** 1,121.76 kVA
  - **Percentage of Capacity (Avg):** 44.9%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,121.76 kVA
- **Average Power Factor (PF):** 0.882

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,128.92 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 475.51 V
- Average Current (Iavg_A): 1370.71 A
- Average kW (Psum_kW): 993.82 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 7.16 kVA (0.6%)
- **Calculated PF (kW/kVA from averages):** 0.880
- **Power Factor Difference:** 0.002 (0.2%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1121.76) and measured PF (0.882) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,121.76 |        44.9% | 834,591.63 kVA | 3,391,064.78 TOTAL-HEAT |
| kW |   993.82 |        39.8% | 739,404.22 kWh | 386,760.02 Load-Heat |
| kVAR |   520.26 |        20.8% | 387,071.82 kVARh | - |
| WASTE |   127.94 |         5.1% | 95,187.41 WASTE | 49,789.66 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,391,064.78
- **Load-Heat (BTU/hr):** 386,760.02
- **Field-Heat (BTU/hr):** 49,789.66
- **Load-Heat (BTU, period total):** 287,749,458.41
- **Field-Heat (BTU, period total):** 37,043,508.19

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 1 | 1,121.76 |   993.82 |   519.16 |     0.89 |   44.9% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,226.93 | 1,089.15 |   564.00 |     0.89 |   49.1% |
| 01 | 1,223.95 | 1,087.20 |   561.32 |     0.89 |   49.0% |
| 02 | 1,205.49 | 1,071.56 |   551.30 |     0.89 |   48.2% |
| 03 | 1,223.90 | 1,088.57 |   558.63 |     0.89 |   49.0% |
| 04 | 1,239.35 | 1,102.67 |   564.96 |     0.89 |   49.6% |
| 05 | 1,225.42 | 1,091.42 |   556.53 |     0.89 |   49.0% |
| 06 | 1,233.41 | 1,098.93 |   559.46 |     0.89 |   49.3% |
| 07 | 1,212.70 | 1,079.55 |   551.72 |     0.89 |   48.5% |
| 08 | 1,218.71 | 1,086.03 |   552.32 |     0.89 |   48.7% |
| 09 | 1,196.55 | 1,066.26 |   542.15 |     0.89 |   47.9% |
| 10 | 1,176.91 | 1,048.60 |   533.32 |     0.89 |   47.1% |
| 11 | 1,186.88 | 1,057.76 |   537.27 |     0.89 |   47.5% |
| 12 | 1,170.11 | 1,042.89 |   529.73 |     0.89 |   46.8% |
| 13 | 1,168.94 | 1,041.74 |   529.26 |     0.89 |   46.8% |
| 14 | 1,162.10 | 1,034.09 |   529.22 |     0.89 |   46.5% |
| 15 | 1,120.74 |   993.61 |   517.36 |     0.89 |   44.8% |
| 16 | 1,068.11 |   943.91 |   499.00 |     0.88 |   42.7% |
| 17 | 1,012.62 |   890.12 |   481.78 |     0.88 |   40.5% |
| 18 |   909.59 |   794.51 |   442.13 |     0.87 |   36.4% |
| 19 |   880.35 |   763.38 |   437.68 |     0.87 |   35.2% |
| 20 |   882.95 |   767.19 |   436.68 |     0.87 |   35.3% |
| 21 |   968.43 |   850.70 |   462.07 |     0.88 |   38.7% |
| 22 |   954.36 |   835.66 |   460.40 |     0.88 |   38.2% |
| 23 | 1,053.80 |   926.26 |   501.63 |     0.88 |   42.2% |

---

# END OF REPORT

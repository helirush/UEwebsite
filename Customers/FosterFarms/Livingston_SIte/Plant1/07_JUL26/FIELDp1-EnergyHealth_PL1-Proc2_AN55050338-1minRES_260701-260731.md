# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 379,011.0 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $73,907.15 (Cost per period)
- **Consumption Total Cost:** $99.36 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL1-Proc2  
**Generated:** 2026-09-10 19:30:39  
**Data Source:** AN55050338-V-1minRES_44640CLP_260701-260731c.csv  

## Time Period

- **Period:** July 01, 2026 thru July 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,631

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
- **Power Factor:** 0.862
- **Total Energy (Actual):** 379,011.02 kWh (per period), 509.53 kW (per hour)
- **Total Waste (Actual):** 56,115.22 kWh (per period), 75.44 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL1-Proc2_AN55050338-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL1-Proc2_AN55050338-1minRES_260701-260731.md


## UNITY MANAGEMENT PL1-Proc2 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 75.44 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 52.33 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL1-Proc2 Utility Cost Offset:** $14.71/hour
- **Annual Offset Savings:** $128865/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 283,930 BTU/hr
- **Total Cooling kW No Longer Needed:** 25.31 kW
- **Cooling Energy Cost Avoided:** $4.94/hour
- **Annual Cooling Savings:** $43233/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 100.75 kW
- **CO2e Emissions Avoided:** 329.46 metric tons/year
- **Monthly CO2e Reduction:** 27.46 metric tons/month
- **Hourly CO2e Reduction:** 0.0376 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $12520/year

### Total PL1-Proc2 Unity Savings

- **Per Hour:** $21.08
- **Per Day:** $505.80
- **Per Month:** $15174.02
- **Per Year:** $184617

### PL1-Proc2 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 831.9 kVAR Max (Avg: 287.3 kVAR/hr ; 206,888 kVAR/mo)
- **Max Harmonic Distortion:** 31.4% Max (range: 3.1% - 31.4%)
- **Max Amperage:** 1,509A Max (range: 56A - 1509A)

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
| Line to Neutral Voltage (277v) |   184.51 |   180.62 |   192.57 |
| Line to Line Voltage (480v) |   319.57 |   312.84 |   333.53 |
| Current (AMPS) |   849.56 |    56.33 |  1509.28 |
| Phase Angle (degrees) |    30.30 |    25.31 |    72.66 |
| Total Harmonic Distortion (PCT) |    15.33 |     3.15 |    31.39 |

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
| THD Phase A (%) | 5.1% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.1% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.1% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 15.3% | Field-level stress indicator |
| Max Phase THD | 5.1% | Highest THD among all three phases |
| Min Phase THD | 5.1% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 916.58 kW
  - **Maximum Load:** 1,171.86 kVA
  - **Percentage of Capacity (MAX):** 46.9%
- **Average Load:** 584.97 kVA
  - **Percentage of Capacity (Avg):** 23.4%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 584.97 kVA
- **Average Power Factor (PF):** 0.862

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 470.25 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 319.57 V
- Average Current (Iavg_A): 849.56 A
- Average kW (Psum_kW): 509.53 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 114.72 kVA (19.6%)
- **Calculated PF (kW/kVA from averages):** 1.084
- **Power Factor Difference:** 0.221 (25.6%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (584.97) and measured PF (0.862) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   584.97 |        23.4% | 435,126.24 kVA | 1,738,575.57 TOTAL-HEAT |
| kW |   509.53 |        20.4% | 379,011.02 kWh | 224,212.06 Load-Heat |
| kVAR |   287.35 |        11.5% | 213,741.65 kVARh | - |
| WASTE |    75.44 |         3.0% | 56,115.22 WASTE | 33,196.16 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,738,575.57
- **Load-Heat (BTU/hr):** 224,212.06
- **Field-Heat (BTU/hr):** 33,196.16
- **Load-Heat (BTU, period total):** 166,780,139.59
- **Field-Heat (BTU, period total):** 24,692,960.55

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 |   584.97 |   509.53 |   286.57 |     0.87 |   23.4% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   678.51 |   594.34 |   326.61 |     0.88 |   27.1% |
| 01 |   654.62 |   572.76 |   316.24 |     0.87 |   26.2% |
| 02 |   662.05 |   579.11 |   320.12 |     0.87 |   26.5% |
| 03 |   663.75 |   580.46 |   321.35 |     0.87 |   26.6% |
| 04 |   668.90 |   584.81 |   323.96 |     0.87 |   26.8% |
| 05 |   668.20 |   583.99 |   324.05 |     0.87 |   26.7% |
| 06 |   637.40 |   556.79 |   309.60 |     0.87 |   25.5% |
| 07 |   622.10 |   543.12 |   302.50 |     0.87 |   24.9% |
| 08 |   623.20 |   545.03 |   301.55 |     0.87 |   24.9% |
| 09 |   619.66 |   541.43 |   300.60 |     0.87 |   24.8% |
| 10 |   605.29 |   528.00 |   295.38 |     0.87 |   24.2% |
| 11 |   631.40 |   551.65 |   306.30 |     0.87 |   25.3% |
| 12 |   614.54 |   537.05 |   298.11 |     0.87 |   24.6% |
| 13 |   602.29 |   525.53 |   293.57 |     0.87 |   24.1% |
| 14 |   557.59 |   484.86 |   274.57 |     0.87 |   22.3% |
| 15 |   512.80 |   445.02 |   254.19 |     0.87 |   20.5% |
| 16 |   430.88 |   369.34 |   221.31 |     0.86 |   17.2% |
| 17 |   350.45 |   297.63 |   184.47 |     0.85 |   14.0% |
| 18 |   342.55 |   291.27 |   179.60 |     0.85 |   13.7% |
| 19 |   484.55 |   418.77 |   243.20 |     0.86 |   19.4% |
| 20 |   529.69 |   458.30 |   265.07 |     0.87 |   21.2% |
| 21 |   596.90 |   518.72 |   294.51 |     0.87 |   23.9% |
| 22 |   633.59 |   553.46 |   307.63 |     0.87 |   25.3% |
| 23 |   648.44 |   567.37 |   313.16 |     0.87 |   25.9% |

---

# END OF REPORT

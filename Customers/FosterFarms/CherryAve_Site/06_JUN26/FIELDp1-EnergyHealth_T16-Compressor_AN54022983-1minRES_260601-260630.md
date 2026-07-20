# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 649,406.3 kWh (Usage per period)
- **Consumption Cost per unit:** $0.350/kWh (Cost per kWh)
- **Consumption Total Cost:** $227,292.22 (Cost per period)
- **Consumption Total Cost:** $438.76 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T16 Compressor  
**Generated:** 2026-07-18 11:54:20  
**Data Source:** AN54022983-V-1minRES_43200CLP_260601-260630c.csv  

## Time Period

- **Period:** June 01, 2026 thru June 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 31,082

- **Dataset Coverage:** Complete month (100.0% of 30-day month)
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
- **Power Factor:** 0.891
- **Total Energy (Actual):** 649,406.33 kWh (per period), 1253.60 kW (per hour)
- **Total Waste (Actual):** 79,094.87 kWh (per period), 152.68 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T16-Compressor_AN54022983-1minRES_260601-260630.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T16-Compressor_AN54022983-1minRES_260601-260630.md


## UNITY MANAGEMENT T16 Compressor SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 152.68 kW/hr
- **Blended Electricity Rate:** $0.3500/kWh (all-inclusive)
- **T16 Compressor Utility Cost Offset:** $53.44/hour
- **Annual Offset Savings:** $468126/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 575,042 BTU/hr
- **Total Cooling kW No Longer Needed:** 51.20 kW
- **Cooling Energy Cost Avoided:** $17.92/hour
- **Annual Cooling Savings:** $156989/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 203.89 kW
- **CO2e Emissions Avoided:** 666.74 metric tons/year
- **Monthly CO2e Reduction:** 55.56 metric tons/month
- **Hourly CO2e Reduction:** 0.0761 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $25670/year

### Total T16 Compressor Unity Savings

- **Per Hour:** $74.29
- **Per Day:** $1782.97
- **Per Month:** $53489.15
- **Per Year:** $650785

### T16 Compressor Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,091.8 kVAR Max (Avg: 637.3 kVAR/hr ; 458,838 kVAR/mo)
- **Max Harmonic Distortion:** 22.3% Max (range: 0.0% - 22.3%)
- **Max Amperage:** 2,038A Max (range: 1358A - 2038A)

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
| Line to Neutral Voltage (277v) |   269.79 |   261.14 |   283.89 |
| Line to Line Voltage (480v) |   467.28 |   452.31 |   491.71 |
| Current (AMPS) |  1739.01 |  1357.89 |  2038.15 |
| Phase Angle (degrees) |    26.95 |    24.83 |    40.38 |
| Total Harmonic Distortion (PCT) |     6.74 |     0.00 |    22.26 |

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
| THD Phase A (%) | 2.2% | IEEE standard per-phase calculation |
| THD Phase B (%) | 2.3% | IEEE standard per-phase calculation |
| THD Phase C (%) | 2.2% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 6.7% | Field-level stress indicator |
| Max Phase THD | 2.3% | Highest THD among all three phases |
| Min Phase THD | 2.2% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,417.35 kW
  - **Maximum Load:** 1,599.09 kVA
  - **Percentage of Capacity (MAX):** 64.0%
- **Average Load:** 1,406.28 kVA
  - **Percentage of Capacity (Avg):** 56.3%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,406.28 kVA
- **Average Power Factor (PF):** 0.891

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,407.48 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 467.28 V
- Average Current (Iavg_A): 1739.01 A
- Average kW (Psum_kW): 1253.60 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 1.20 kVA (0.1%)
- **Calculated PF (kW/kVA from averages):** 0.891
- **Power Factor Difference:** 0.001 (0.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1406.28) and measured PF (0.891) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,406.28 |        56.3% | 728,501.20 kVA | 4,277,459.54 TOTAL-HEAT |
| kW | 1,253.60 |        50.1% | 649,406.33 kWh | 464,412.55 Load-Heat |
| kVAR |   637.27 |        25.5% | 330,129.39 kVARh | - |
| WASTE |   152.68 |         6.1% | 79,094.87 WASTE | 56,563.43 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 4,277,459.54
- **Load-Heat (BTU/hr):** 464,412.55
- **Field-Heat (BTU/hr):** 56,563.43
- **Load-Heat (BTU, period total):** 240,581,179.02
- **Field-Heat (BTU, period total):** 29,301,741.59

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 6 | 1,406.28 | 1,253.60 |   636.95 |     0.89 |   56.3% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,472.78 | 1,313.67 |   665.80 |     0.89 |   58.9% |
| 01 | 1,466.84 | 1,308.65 |   662.37 |     0.89 |   58.7% |
| 02 | 1,440.65 | 1,284.91 |   651.47 |     0.89 |   57.6% |
| 03 | 1,445.36 | 1,289.36 |   653.07 |     0.89 |   57.8% |
| 04 | 1,427.05 | 1,272.38 |   646.02 |     0.89 |   57.1% |
| 05 | 1,441.77 | 1,285.65 |   652.45 |     0.89 |   57.7% |
| 06 | 1,445.71 | 1,290.34 |   651.96 |     0.89 |   57.8% |
| 07 | 1,442.81 | 1,287.88 |   650.38 |     0.89 |   57.7% |
| 08 | 1,463.51 | 1,307.79 |   656.87 |     0.89 |   58.5% |
| 09 | 1,453.89 | 1,299.54 |   651.82 |     0.89 |   58.2% |
| 10 | 1,446.78 | 1,294.65 |   645.70 |     0.89 |   57.9% |
| 11 | 1,438.12 | 1,287.03 |   641.56 |     0.89 |   57.5% |
| 12 | 1,436.53 | 1,286.26 |   639.52 |     0.90 |   57.5% |
| 13 | 1,406.27 | 1,260.56 |   623.21 |     0.90 |   56.3% |
| 14 | 1,411.52 | 1,265.83 |   624.39 |     0.90 |   56.5% |
| 15 | 1,370.81 | 1,227.09 |   610.88 |     0.90 |   54.8% |
| 16 | 1,341.37 | 1,194.72 |   609.60 |     0.89 |   53.7% |
| 17 | 1,333.08 | 1,182.68 |   614.90 |     0.89 |   53.3% |
| 18 | 1,300.87 | 1,146.01 |   615.14 |     0.88 |   52.0% |
| 19 | 1,265.24 | 1,109.50 |   607.63 |     0.88 |   50.6% |
| 20 | 1,249.85 | 1,099.75 |   593.33 |     0.88 |   50.0% |
| 21 | 1,374.73 | 1,224.08 |   625.40 |     0.89 |   55.0% |
| 22 | 1,338.48 | 1,188.90 |   614.55 |     0.89 |   53.5% |
| 23 | 1,426.23 | 1,269.92 |   648.92 |     0.89 |   57.0% |

---

# END OF REPORT

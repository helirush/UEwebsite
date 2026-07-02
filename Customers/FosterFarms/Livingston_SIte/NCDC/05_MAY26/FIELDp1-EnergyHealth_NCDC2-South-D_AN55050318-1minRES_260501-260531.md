# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 456,404.0 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $88,998.79 (Cost per period)
- **Consumption Total Cost:** $121.51 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** NCDC2 South D  
**Generated:** 2026-06-18 23:51:22  
**Data Source:** AN55050318-V-1minRES_44640CLP_260501-260531c.csv  

## Time Period

- **Period:** May 01, 2026 thru May 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,947

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

- **Transformer:** NCDC2 South D
- **Power Factor:** 0.930
- **Total Energy (Actual):** 456,404.03 kWh (per period), 623.12 kW (per hour)
- **Total Waste (Actual):** 33,898.33 kWh (per period), 46.28 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_NCDC2-South-D_AN55050318-1minRES_260501-260531.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_NCDC2-South-D_AN55050318-1minRES_260501-260531.md


## UNITY MANAGEMENT NCDC2 South D SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 46.28 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **NCDC2 South D Utility Cost Offset:** $9.02/hour
- **Annual Offset Savings:** $79057/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 167,745 BTU/hr
- **Total Cooling kW No Longer Needed:** 14.68 kW
- **Cooling Energy Cost Avoided:** $2.86/hour
- **Annual Cooling Savings:** $25072/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 60.96 kW
- **CO2e Emissions Avoided:** 199.34 metric tons/year
- **Monthly CO2e Reduction:** 16.61 metric tons/month
- **Hourly CO2e Reduction:** 0.0228 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $7675/year

### Total NCDC2 South D Unity Savings

- **Per Hour:** $12.76
- **Per Day:** $306.31
- **Per Month:** $9189.37
- **Per Year:** $111804

### NCDC2 South D Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 300.5 kVAR Max (Avg: 244.6 kVAR/hr ; 176,097 kVAR/mo)
- **Max Harmonic Distortion:** 31.2% Max (range: 3.3% - 31.2%)
- **Max Amperage:** 1,056A Max (range: 566A - 1056A)

---

# NCDC2 South D DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   277.85 |   268.05 |   287.39 |
| Line to Line Voltage (480v) |   481.25 |   464.28 |   497.78 |
| Current (AMPS) |   802.98 |   566.33 |  1056.43 |
| Phase Angle (degrees) |    21.51 |    17.45 |    26.23 |
| Total Harmonic Distortion (PCT) |    15.71 |     3.29 |    31.24 |

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
| THD Phase A (%) | 5.2% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.2% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.2% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 15.7% | Field-level stress indicator |
| Max Phase THD | 5.2% | Highest THD among all three phases |
| Min Phase THD | 5.2% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 822.84 kW
  - **Maximum Load:** 872.25 kVA
  - **Percentage of Capacity (MAX):** 34.9%
- **Average Load:** 669.40 kVA
  - **Percentage of Capacity (Avg):** 26.8%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 669.40 kVA
- **Average Power Factor (PF):** 0.930

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 669.32 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 481.25 V
- Average Current (Iavg_A): 802.98 A
- Average kW (Psum_kW): 623.12 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.08 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.931
- **Power Factor Difference:** 0.001 (0.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (669.40) and measured PF (0.930) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   669.40 |        26.8% | 490,302.37 kVA | 2,126,172.93 TOTAL-HEAT |
| kW |   623.12 |        24.9% | 456,404.03 kWh | 146,998.52 Load-Heat |
| kVAR |   244.58 |         9.8% | 179,141.76 kVARh | - |
| WASTE |    46.28 |         1.9% | 33,898.33 WASTE | 10,917.97 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,126,172.93
- **Load-Heat (BTU/hr):** 146,998.52
- **Field-Heat (BTU/hr):** 10,917.97
- **Load-Heat (BTU, period total):** 107,669,063.16
- **Field-Heat (BTU, period total):** 7,996,865.96

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 5 |   669.40 |   623.12 |   244.32 |     0.93 |   26.8% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   654.49 |   608.68 |   240.32 |     0.93 |   26.2% |
| 01 |   658.19 |   612.28 |   241.31 |     0.93 |   26.3% |
| 02 |   659.88 |   613.91 |   241.79 |     0.93 |   26.4% |
| 03 |   636.47 |   590.80 |   236.55 |     0.93 |   25.5% |
| 04 |   649.40 |   603.80 |   238.86 |     0.93 |   26.0% |
| 05 |   612.09 |   566.96 |   230.47 |     0.93 |   24.5% |
| 06 |   622.32 |   577.29 |   232.22 |     0.93 |   24.9% |
| 07 |   613.48 |   568.47 |   230.47 |     0.93 |   24.5% |
| 08 |   617.36 |   572.07 |   231.91 |     0.93 |   24.7% |
| 09 |   640.57 |   594.97 |   237.14 |     0.93 |   25.6% |
| 10 |   661.81 |   615.66 |   242.60 |     0.93 |   26.5% |
| 11 |   661.92 |   615.56 |   243.16 |     0.93 |   26.5% |
| 12 |   699.59 |   652.68 |   251.65 |     0.93 |   28.0% |
| 13 |   670.38 |   623.91 |   245.02 |     0.93 |   26.8% |
| 14 |   693.28 |   646.34 |   250.53 |     0.93 |   27.7% |
| 15 |   697.75 |   650.73 |   251.55 |     0.93 |   27.9% |
| 16 |   698.99 |   651.88 |   252.01 |     0.93 |   28.0% |
| 17 |   733.03 |   685.42 |   259.66 |     0.94 |   29.3% |
| 18 |   734.56 |   686.81 |   260.34 |     0.93 |   29.4% |
| 19 |   711.23 |   663.92 |   254.83 |     0.93 |   28.4% |
| 20 |   730.24 |   683.00 |   258.24 |     0.94 |   29.2% |
| 21 |   681.38 |   634.87 |   247.19 |     0.93 |   27.3% |
| 22 |   677.82 |   631.43 |   246.23 |     0.93 |   27.1% |
| 23 |   664.55 |   618.29 |   243.35 |     0.93 |   26.6% |

---

# END OF REPORT

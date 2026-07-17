# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 469,436.3 kWh (Usage per period)
- **Consumption Cost per unit:** $0.120/kWh (Cost per kWh)
- **Consumption Total Cost:** $56,332.35 (Cost per period)
- **Consumption Total Cost:** $78.25 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Deli G  
**Generated:** 2026-07-04 14:56:57  
**Data Source:** AN55050305-V-1minRES_43200CLP_260601-260630c.csv  

## Time Period

- **Period:** June 01, 2026 thru June 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,193

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

- **Transformer:** Deli G
- **Power Factor:** 0.863
- **Total Energy (Actual):** 469,436.25 kWh (per period), 652.10 kW (per hour)
- **Total Waste (Actual):** 54,382.63 kWh (per period), 75.54 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Deli-G_AN55050305-1minRES_260601-260630.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Deli-G_AN55050305-1minRES_260601-260630.md


## UNITY MANAGEMENT Deli G SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 75.54 kW/hr
- **Blended Electricity Rate:** $0.1200/kWh (all-inclusive)
- **Deli G Utility Cost Offset:** $9.07/hour
- **Annual Offset Savings:** $79412/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 271,522 BTU/hr
- **Total Cooling kW No Longer Needed:** 23.88 kW
- **Cooling Energy Cost Avoided:** $2.87/hour
- **Annual Cooling Savings:** $25104/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 99.42 kW
- **CO2e Emissions Avoided:** 325.14 metric tons/year
- **Monthly CO2e Reduction:** 27.09 metric tons/month
- **Hourly CO2e Reduction:** 0.0371 metric tons/hour
- **CO2e Value Rate:** $35/metric ton
- **Annual CO2e Value:** $11380/year

### Total Deli G Unity Savings

- **Per Hour:** $13.23
- **Per Day:** $317.52
- **Per Month:** $9525.61
- **Per Year:** $115895

### Deli G Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,809.5 kVAR Max (Avg: 322.8 kVAR/hr ; 232,451 kVAR/mo)
- **Max Harmonic Distortion:** 33.3% Max (range: 3.0% - 33.3%)
- **Max Amperage:** 2,398A Max (range: 68A - 2398A)

---

# Deli G DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   277.10 |   265.13 |   289.45 |
| Line to Line Voltage (480v) |   479.95 |   459.22 |   501.34 |
| Current (AMPS) |   878.31 |    68.00 |  2398.17 |
| Phase Angle (degrees) |    29.15 |     0.00 |    71.52 |
| Total Harmonic Distortion (PCT) |    14.11 |     3.00 |    33.28 |

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
| THD Phase A (%) | 4.7% | IEEE standard per-phase calculation |
| THD Phase B (%) | 4.7% | IEEE standard per-phase calculation |
| THD Phase C (%) | 4.7% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 14.1% | Field-level stress indicator |
| Max Phase THD | 4.7% | Highest THD among all three phases |
| Min Phase THD | 4.7% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,855.56 kW
  - **Maximum Load:** 2,059.94 kVA
  - **Percentage of Capacity (MAX):** 82.4%
- **Average Load:** 727.64 kVA
  - **Percentage of Capacity (Avg):** 29.1%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 727.64 kVA
- **Average Power Factor (PF):** 0.863

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 730.13 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 479.95 V
- Average Current (Iavg_A): 878.31 A
- Average kW (Psum_kW): 652.10 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 2.49 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.893
- **Power Factor Difference:** 0.031 (3.5%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (727.64) and measured PF (0.863) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   727.64 |        29.1% | 523,818.88 kVA | 2,225,059.36 TOTAL-HEAT |
| kW |   652.10 |        26.1% | 469,436.25 kWh | 231,004.63 Load-Heat |
| kVAR |   322.85 |        12.9% | 232,413.06 kVARh | - |
| WASTE |    75.54 |         3.0% | 54,382.63 WASTE | 26,761.12 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,225,059.36
- **Load-Heat (BTU/hr):** 231,004.63
- **Field-Heat (BTU/hr):** 26,761.12
- **Load-Heat (BTU, period total):** 166,296,384.42
- **Field-Heat (BTU, period total):** 19,264,885.07

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 6 |   727.64 |   652.10 |   307.94 |     0.90 |   29.1% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   482.12 |   413.91 |   235.13 |     0.86 |   19.3% |
| 01 |   284.31 |   221.08 |   177.68 |     0.78 |   11.4% |
| 02 |   266.88 |   203.68 |   171.49 |     0.76 |   10.7% |
| 03 |   277.72 |   210.93 |   178.28 |     0.76 |   11.1% |
| 04 |   283.39 |   219.14 |   176.12 |     0.77 |   11.3% |
| 05 |   330.21 |   255.10 |   206.46 |     0.77 |   13.2% |
| 06 |   937.03 |   829.50 |   419.59 |     0.89 |   37.5% |
| 07 | 1,017.37 |   916.21 |   432.43 |     0.90 |   40.7% |
| 08 | 1,011.41 |   899.37 |   451.28 |     0.89 |   40.5% |
| 09 | 1,004.48 |   910.25 |   416.78 |     0.91 |   40.2% |
| 10 |   954.94 |   859.59 |   406.72 |     0.90 |   38.2% |
| 11 |   847.79 |   762.35 |   359.42 |     0.90 |   33.9% |
| 12 |   960.10 |   880.39 |   374.12 |     0.92 |   38.4% |
| 13 |   900.03 |   804.75 |   392.56 |     0.89 |   36.0% |
| 14 |   938.29 |   859.93 |   366.14 |     0.92 |   37.5% |
| 15 |   742.19 |   652.09 |   342.37 |     0.88 |   29.7% |
| 16 |   840.50 |   780.31 |   301.54 |     0.93 |   33.6% |
| 17 |   835.78 |   768.00 |   317.94 |     0.92 |   33.4% |
| 18 |   806.28 |   743.44 |   300.59 |     0.92 |   32.3% |
| 19 |   796.95 |   736.10 |   294.46 |     0.92 |   31.9% |
| 20 |   697.91 |   636.27 |   273.77 |     0.91 |   27.9% |
| 21 |   795.25 |   742.63 |   273.79 |     0.93 |   31.8% |
| 22 |   709.77 |   653.83 |   263.99 |     0.92 |   28.4% |
| 23 |   742.90 |   691.68 |   258.01 |     0.93 |   29.7% |

---

# END OF REPORT

# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 344,643.8 kWh (Usage per period)
- **Consumption Cost per unit:** $0.175/kWh (Cost per kWh)
- **Consumption Total Cost:** $60,209.26 (Cost per period)
- **Consumption Total Cost:** $81.09 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** NCDC3 North E  
**Generated:** 2026-04-23 14:39:57  
**Data Source:** AN55050395-V-1minRES_44550CLP_260301-260331c.csv  

## Time Period

- **Period:** March 01, 2026 thru March 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,550

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

- **Transformer:** NCDC3 North E
- **Power Factor:** 0.856
- **Total Energy (Actual):** 344,643.75 kWh (per period), 464.17 kW (per hour)
- **Total Waste (Actual):** 57,898.99 kWh (per period), 77.98 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_NCDC3-North-E_AN55050395-1minRES_260301-260331.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_NCDC3-North-E_AN55050395-1minRES_260301-260331.md


## UNITY MANAGEMENT NCDC3 North E SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 77.98 kW/hr
- **Blended Electricity Rate:** $0.1747/kWh (all-inclusive)
- **NCDC3 North E Utility Cost Offset:** $13.62/hour
- **Annual Offset Savings:** $119336/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 282,602 BTU/hr
- **Total Cooling kW No Longer Needed:** 24.76 kW
- **Cooling Energy Cost Avoided:** $4.33/hour
- **Annual Cooling Savings:** $37890/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 102.74 kW
- **CO2e Emissions Avoided:** 335.97 metric tons/year
- **Monthly CO2e Reduction:** 28.00 metric tons/month
- **Hourly CO2e Reduction:** 0.0384 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $12935/year

### Total NCDC3 North E Unity Savings

- **Per Hour:** $19.42
- **Per Day:** $466.19
- **Per Month:** $13985.84
- **Per Year:** $170161

### NCDC3 North E Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 478.2 kVAR Max (Avg: 280.1 kVAR/hr ; 201,691 kVAR/mo)
- **Max Harmonic Distortion:** 30.1% Max (range: 3.0% - 30.1%)
- **Max Amperage:** 991A Max (range: 0A - 991A)

---

# NCDC3 North E DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   277.31 |     0.00 |   287.22 |
| Line to Line Voltage (480v) |   480.32 |     0.00 |   497.49 |
| Current (AMPS) |   651.51 |     0.00 |   991.44 |
| Phase Angle (degrees) |    31.04 |    20.12 |    90.00 |
| Total Harmonic Distortion (PCT) |    15.69 |     3.01 |    30.11 |

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

- **Maximum UtilityDemand:** 753.59 kW
  - **Maximum Load:** 827.18 kVA
  - **Percentage of Capacity (MAX):** 33.1%
- **Average Load:** 542.15 kVA
  - **Percentage of Capacity (Avg):** 21.7%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 542.15 kVA
- **Average Power Factor (PF):** 0.856

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 542.01 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 480.32 V
- Average Current (Iavg_A): 651.51 A
- Average kW (Psum_kW): 464.17 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.13 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.856
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (542.15) and measured PF (0.856) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   542.15 |        21.7% | 402,542.74 kVA | 1,583,802.60 TOTAL-HEAT |
| kW |   464.17 |        18.6% | 344,643.75 kWh | 227,803.30 Load-Heat |
| kVAR |   280.13 |        11.2% | 207,993.61 kVARh | - |
| WASTE |    77.98 |         3.1% | 57,898.99 WASTE | 38,270.19 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,583,802.60
- **Load-Heat (BTU/hr):** 227,803.30
- **Field-Heat (BTU/hr):** 38,270.19
- **Load-Heat (BTU, period total):** 169,143,951.93
- **Field-Heat (BTU, period total):** 28,415,612.69

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 3 |   542.15 |   464.17 |   279.44 |     0.86 |   21.7% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   517.68 |   444.12 |   265.41 |     0.86 |   20.7% |
| 01 |   531.49 |   454.30 |   275.17 |     0.85 |   21.3% |
| 02 |   532.84 |   459.92 |   268.13 |     0.86 |   21.3% |
| 03 |   515.65 |   441.51 |   265.88 |     0.86 |   20.6% |
| 04 |   528.34 |   456.68 |   264.44 |     0.86 |   21.1% |
| 05 |   485.26 |   416.58 |   248.07 |     0.86 |   19.4% |
| 06 |   517.93 |   444.08 |   265.67 |     0.86 |   20.7% |
| 07 |   511.46 |   434.40 |   269.41 |     0.85 |   20.5% |
| 08 |   494.24 |   421.92 |   256.70 |     0.85 |   19.8% |
| 09 |   523.61 |   445.33 |   274.88 |     0.85 |   20.9% |
| 10 |   544.38 |   465.83 |   281.16 |     0.86 |   21.8% |
| 11 |   558.47 |   478.98 |   286.42 |     0.86 |   22.3% |
| 12 |   539.65 |   460.88 |   280.29 |     0.85 |   21.6% |
| 13 |   578.93 |   499.77 |   291.42 |     0.86 |   23.2% |
| 14 |   573.93 |   485.56 |   305.53 |     0.85 |   23.0% |
| 15 |   588.71 |   499.24 |   311.50 |     0.85 |   23.5% |
| 16 |   558.34 |   471.84 |   298.24 |     0.85 |   22.3% |
| 17 |   567.78 |   481.99 |   299.73 |     0.85 |   22.7% |
| 18 |   550.02 |   471.61 |   282.70 |     0.86 |   22.0% |
| 19 |   559.78 |   480.99 |   286.00 |     0.86 |   22.4% |
| 20 |   550.53 |   476.60 |   274.91 |     0.87 |   22.0% |
| 21 |   533.01 |   459.38 |   270.01 |     0.86 |   21.3% |
| 22 |   595.44 |   514.94 |   298.15 |     0.86 |   23.8% |
| 23 |   553.86 |   473.56 |   286.60 |     0.86 |   22.2% |

---

# END OF REPORT

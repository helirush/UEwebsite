# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 199,589.1 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $38,919.88 (Cost per period)
- **Consumption Total Cost:** $54.08 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL1-MShop  
**Generated:** 2026-05-10 11:11:47  
**Data Source:** AN55050287-V-1minRES_43200CLP_260401-260430c.csv  

## Time Period

- **Period:** April 01, 2026 thru April 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,177

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

- **Transformer:** PL1-MShop
- **Power Factor:** 0.868
- **Total Energy (Actual):** 199,589.15 kWh (per period), 277.35 kW (per hour)
- **Total Waste (Actual):** 32,016.35 kWh (per period), 44.49 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL1-MShop_AN55050287-1minRES_260401-260430.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL1-MShop_AN55050287-1minRES_260401-260430.md


## UNITY MANAGEMENT PL1-MShop SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 44.49 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL1-MShop Utility Cost Offset:** $8.68/hour
- **Annual Offset Savings:** $75999/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 159,532 BTU/hr
- **Total Cooling kW No Longer Needed:** 13.97 kW
- **Cooling Energy Cost Avoided:** $2.72/hour
- **Annual Cooling Savings:** $23863/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 58.46 kW
- **CO2e Emissions Avoided:** 191.18 metric tons/year
- **Monthly CO2e Reduction:** 15.93 metric tons/month
- **Hourly CO2e Reduction:** 0.0218 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $7360/year

### Total PL1-MShop Unity Savings

- **Per Hour:** $12.24
- **Per Day:** $293.76
- **Per Month:** $8812.79
- **Per Year:** $107222

### PL1-MShop Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 437.2 kVAR Max (Avg: 163.3 kVAR/hr ; 117,558 kVAR/mo)
- **Max Harmonic Distortion:** 26.9% Max (range: 3.1% - 26.9%)
- **Max Amperage:** 1,062A Max (range: 91A - 1062A)

---

# PL1-MShop DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   282.87 |   272.02 |   295.05 |
| Line to Line Voltage (480v) |   489.94 |   471.15 |   511.05 |
| Current (AMPS) |   380.08 |    91.13 |  1062.18 |
| Phase Angle (degrees) |    29.46 |    16.86 |    43.86 |
| Total Harmonic Distortion (PCT) |    13.73 |     3.13 |    26.91 |

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
| THD Phase A (%) | 4.6% | IEEE standard per-phase calculation |
| THD Phase B (%) | 4.6% | IEEE standard per-phase calculation |
| THD Phase C (%) | 4.6% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 13.7% | Field-level stress indicator |
| Max Phase THD | 4.6% | Highest THD among all three phases |
| Min Phase THD | 4.6% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 794.82 kW
  - **Maximum Load:** 898.39 kVA
  - **Percentage of Capacity (MAX):** 35.9%
- **Average Load:** 321.85 kVA
  - **Percentage of Capacity (Avg):** 12.9%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 321.85 kVA
- **Average Power Factor (PF):** 0.868

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 322.53 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 489.94 V
- Average Current (Iavg_A): 380.08 A
- Average kW (Psum_kW): 277.35 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.69 kVA (0.2%)
- **Calculated PF (kW/kVA from averages):** 0.860
- **Power Factor Difference:** 0.008 (0.9%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (321.85) and measured PF (0.868) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   321.85 |        12.9% | 231,605.50 kVA | 946,374.01 TOTAL-HEAT |
| kW |   277.35 |        11.1% | 199,589.15 kWh | 130,823.49 Load-Heat |
| kVAR |   163.28 |         6.5% | 117,495.86 kVARh | - |
| WASTE |    44.49 |         1.8% | 32,016.35 WASTE | 20,985.56 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 946,374.01
- **Load-Heat (BTU/hr):** 130,823.49
- **Field-Heat (BTU/hr):** 20,985.56
- **Load-Heat (BTU, period total):** 94,142,765.13
- **Field-Heat (BTU, period total):** 15,101,560.14

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 4 |   321.85 |   277.35 |   161.41 |     0.86 |   12.9% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   321.26 |   281.05 |   153.42 |     0.87 |   12.9% |
| 01 |   333.72 |   289.44 |   164.09 |     0.87 |   13.3% |
| 02 |   363.03 |   315.07 |   178.51 |     0.87 |   14.5% |
| 03 |   342.67 |   296.04 |   171.19 |     0.86 |   13.7% |
| 04 |   342.87 |   296.80 |   170.25 |     0.87 |   13.7% |
| 05 |   343.51 |   298.33 |   168.54 |     0.87 |   13.7% |
| 06 |   342.40 |   296.92 |   168.77 |     0.87 |   13.7% |
| 07 |   344.26 |   296.89 |   172.54 |     0.86 |   13.8% |
| 08 |   354.68 |   304.93 |   179.67 |     0.86 |   14.2% |
| 09 |   360.26 |   308.62 |   184.45 |     0.86 |   14.4% |
| 10 |   366.79 |   314.03 |   188.14 |     0.86 |   14.7% |
| 11 |   369.26 |   316.51 |   188.85 |     0.86 |   14.8% |
| 12 |   362.32 |   309.94 |   186.18 |     0.86 |   14.5% |
| 13 |   351.82 |   300.42 |   181.79 |     0.85 |   14.1% |
| 14 |   322.27 |   274.58 |   167.51 |     0.85 |   12.9% |
| 15 |   272.73 |   233.40 |   139.41 |     0.86 |   10.9% |
| 16 |   256.40 |   219.23 |   131.26 |     0.86 |   10.3% |
| 17 |   242.61 |   205.16 |   128.22 |     0.85 |    9.7% |
| 18 |   224.26 |   186.09 |   123.82 |     0.83 |    9.0% |
| 19 |   263.77 |   224.25 |   136.26 |     0.85 |   10.6% |
| 20 |   296.12 |   255.43 |   147.38 |     0.86 |   11.8% |
| 21 |   309.96 |   270.74 |   148.32 |     0.87 |   12.4% |
| 22 |   318.88 |   281.80 |   147.03 |     0.88 |   12.8% |
| 23 |   318.80 |   281.15 |   148.28 |     0.88 |   12.8% |

---

# END OF REPORT

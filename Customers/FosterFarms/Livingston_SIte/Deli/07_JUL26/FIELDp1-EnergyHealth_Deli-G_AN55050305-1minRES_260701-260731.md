# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 580,472.1 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $113,192.07 (Cost per period)
- **Consumption Total Cost:** $152.14 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Deli G  
**Generated:** 2026-08-02 21:23:52  
**Data Source:** AN55050305-V-1minRES_44640CLP_260701-260731c.csv  

## Time Period

- **Period:** July 01, 2026 thru July 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,640

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

- **Transformer:** Deli G
- **Power Factor:** 0.864
- **Total Energy (Actual):** 580,472.14 kWh (per period), 780.20 kW (per hour)
- **Total Waste (Actual):** 67,307.60 kWh (per period), 90.47 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Deli-G_AN55050305-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Deli-G_AN55050305-1minRES_260701-260731.md


## UNITY MANAGEMENT Deli G SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 90.47 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 53.20 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Deli G Utility Cost Offset:** $17.64/hour
- **Annual Offset Savings:** $154536/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 191,407 BTU/hr
- **Total Cooling kW No Longer Needed:** 17.06 kW
- **Cooling Energy Cost Avoided:** $3.33/hour
- **Annual Cooling Savings:** $29145/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 107.53 kW
- **CO2e Emissions Avoided:** 351.64 metric tons/year
- **Monthly CO2e Reduction:** 29.30 metric tons/month
- **Hourly CO2e Reduction:** 0.0401 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $13362/year

### Total Deli G Unity Savings

- **Per Hour:** $22.49
- **Per Day:** $539.84
- **Per Month:** $16195.32
- **Per Year:** $197043

### Deli G Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 2,072.8 kVAR Max (Avg: 386.5 kVAR/hr ; 278,250 kVAR/mo)
- **Max Harmonic Distortion:** 28.4% Max (range: 3.0% - 28.4%)
- **Max Amperage:** 3,322A Max (range: 0A - 3322A)

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
| Line to Neutral Voltage (277v) |   277.52 |     0.00 |   289.65 |
| Line to Line Voltage (480v) |   480.68 |     0.00 |   501.69 |
| Current (AMPS) |  1049.24 |     0.00 |  3322.34 |
| Phase Angle (degrees) |    29.24 |     0.00 |    90.00 |
| Total Harmonic Distortion (PCT) |    14.37 |     3.00 |    28.41 |

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
| THD Phase B (%) | 4.8% | IEEE standard per-phase calculation |
| THD Phase C (%) | 4.8% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 14.4% | Field-level stress indicator |
| Max Phase THD | 4.8% | Highest THD among all three phases |
| Min Phase THD | 4.8% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,976.50 kW
  - **Maximum Load:** 2,428.24 kVA
  - **Percentage of Capacity (MAX):** 97.1%
- **Average Load:** 870.67 kVA
  - **Percentage of Capacity (Avg):** 34.8%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 870.67 kVA
- **Average Power Factor (PF):** 0.864

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 873.56 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 480.68 V
- Average Current (Iavg_A): 1049.24 A
- Average kW (Psum_kW): 780.20 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 2.89 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.893
- **Power Factor Difference:** 0.029 (3.3%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (870.67) and measured PF (0.864) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   870.67 |        34.8% | 647,779.74 kVA | 2,662,168.50 TOTAL-HEAT |
| kW |   780.20 |        31.2% | 580,472.14 kWh | 276,612.80 Load-Heat |
| kVAR |   386.46 |        15.5% | 287,525.10 kVARh | - |
| WASTE |    90.47 |         3.6% | 67,307.60 WASTE | 32,074.14 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,662,168.50
- **Load-Heat (BTU/hr):** 276,612.80
- **Field-Heat (BTU/hr):** 32,074.14
- **Load-Heat (BTU, period total):** 205,799,924.56
- **Field-Heat (BTU, period total):** 23,863,158.49

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 |   870.67 |   780.20 |   373.03 |     0.90 |   34.8% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   695.43 |   604.03 |   333.89 |     0.87 |   27.8% |
| 01 |   379.55 |   301.62 |   229.61 |     0.79 |   15.2% |
| 02 |   313.25 |   239.63 |   200.96 |     0.76 |   12.5% |
| 03 |   311.97 |   239.59 |   197.61 |     0.77 |   12.5% |
| 04 |   317.17 |   243.51 |   199.57 |     0.77 |   12.7% |
| 05 |   366.12 |   287.89 |   223.49 |     0.79 |   14.6% |
| 06 |   955.81 |   844.86 |   431.96 |     0.88 |   38.2% |
| 07 | 1,024.02 |   933.06 |   410.42 |     0.91 |   41.0% |
| 08 | 1,053.22 |   942.75 |   457.75 |     0.90 |   42.1% |
| 09 | 1,053.77 |   959.66 |   427.02 |     0.91 |   42.2% |
| 10 | 1,029.49 |   927.20 |   437.85 |     0.90 |   41.2% |
| 11 |   970.44 |   872.60 |   415.04 |     0.90 |   38.8% |
| 12 | 1,126.77 | 1,032.33 |   443.74 |     0.92 |   45.1% |
| 13 | 1,081.06 |   969.28 |   469.86 |     0.90 |   43.2% |
| 14 | 1,158.49 | 1,057.55 |   465.39 |     0.91 |   46.3% |
| 15 | 1,006.69 |   893.33 |   454.76 |     0.89 |   40.3% |
| 16 | 1,060.75 |   972.74 |   414.22 |     0.92 |   42.4% |
| 17 | 1,056.07 |   963.25 |   423.24 |     0.91 |   42.2% |
| 18 | 1,037.88 |   948.27 |   412.55 |     0.91 |   41.5% |
| 19 | 1,046.26 |   960.47 |   406.07 |     0.92 |   41.9% |
| 20 |   912.48 |   827.39 |   374.26 |     0.91 |   36.5% |
| 21 | 1,037.02 |   958.97 |   386.44 |     0.92 |   41.5% |
| 22 |   937.63 |   856.84 |   370.64 |     0.91 |   37.5% |
| 23 |   964.77 |   888.10 |   366.32 |     0.92 |   38.6% |

---

# END OF REPORT

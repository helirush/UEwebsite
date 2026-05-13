# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 305,351.0 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $59,543.45 (Cost per period)
- **Consumption Total Cost:** $88.06 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** NCDC1 West11c  
**Generated:** 2026-05-08 12:06:45  
**Data Source:** AN55031702-V-1minRES_43200CLP_260401-260430c.csv  

## Time Period

- **Period:** April 01, 2026 thru April 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 40,570

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

- **Transformer:** NCDC1 West11c
- **Power Factor:** 0.851
- **Total Energy (Actual):** 305,351.01 kWh (per period), 451.59 kW (per hour)
- **Total Waste (Actual):** 53,203.42 kWh (per period), 78.68 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_NCDC1-West11c_AN55031702-1minRES_260401-260430.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_NCDC1-West11c_AN55031702-1minRES_260401-260430.md


## UNITY MANAGEMENT NCDC1 West11c SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 78.68 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **NCDC1 West11c Utility Cost Offset:** $15.34/hour
- **Annual Offset Savings:** $134408/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 286,792 BTU/hr
- **Total Cooling kW No Longer Needed:** 25.11 kW
- **Cooling Energy Cost Avoided:** $4.90/hour
- **Annual Cooling Savings:** $42901/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 103.80 kW
- **CO2e Emissions Avoided:** 339.44 metric tons/year
- **Monthly CO2e Reduction:** 28.29 metric tons/month
- **Hourly CO2e Reduction:** 0.0387 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $13068/year

### Total NCDC1 West11c Unity Savings

- **Per Hour:** $21.73
- **Per Day:** $521.58
- **Per Month:** $15647.46
- **Per Year:** $190377

### NCDC1 West11c Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 351.9 kVAR Max (Avg: 278.0 kVAR/hr ; 200,125 kVAR/mo)
- **Max Harmonic Distortion:** 30.4% Max (range: 3.0% - 30.4%)
- **Max Amperage:** 767A Max (range: 507A - 767A)

---

# NCDC1 West11c DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   278.81 |   268.54 |   290.98 |
| Line to Line Voltage (480v) |   482.91 |   465.12 |   504.00 |
| Current (AMPS) |   634.00 |   506.54 |   767.03 |
| Phase Angle (degrees) |    31.64 |    28.60 |    35.71 |
| Total Harmonic Distortion (PCT) |    16.69 |     3.00 |    30.37 |

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
| THD Phase C (%) | 5.6% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 16.7% | Field-level stress indicator |
| Max Phase THD | 5.6% | Highest THD among all three phases |
| Min Phase THD | 5.6% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 542.90 kW
  - **Maximum Load:** 635.33 kVA
  - **Percentage of Capacity (MAX):** 25.4%
- **Average Load:** 530.28 kVA
  - **Percentage of Capacity (Avg):** 21.2%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 530.28 kVA
- **Average Power Factor (PF):** 0.851

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 530.29 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 482.91 V
- Average Current (Iavg_A): 634.00 A
- Average kW (Psum_kW): 451.59 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.02 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.852
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (530.28) and measured PF (0.851) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   530.28 |        21.2% | 358,554.44 kVA | 1,540,893.79 TOTAL-HEAT |
| kW |   451.59 |        18.1% | 305,351.01 kWh | 228,642.62 Load-Heat |
| kVAR |   277.95 |        11.1% | 187,941.59 kVARh | - |
| WASTE |    78.68 |         3.1% | 53,203.42 WASTE | 39,837.99 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,540,893.79
- **Load-Heat (BTU/hr):** 228,642.62
- **Field-Heat (BTU/hr):** 39,837.99
- **Load-Heat (BTU, period total):** 154,600,514.87
- **Field-Heat (BTU, period total):** 26,937,118.98

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 4 |   530.28 |   451.59 |   277.82 |     0.85 |   21.2% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   521.89 |   443.37 |   275.20 |     0.85 |   20.9% |
| 01 |   514.77 |   436.55 |   272.72 |     0.85 |   20.6% |
| 02 |   513.46 |   435.95 |   271.20 |     0.85 |   20.5% |
| 03 |   507.06 |   429.94 |   268.74 |     0.85 |   20.3% |
| 04 |   496.93 |   420.29 |   265.07 |     0.85 |   19.9% |
| 05 |   511.61 |   436.11 |   267.32 |     0.85 |   20.5% |
| 06 |   523.24 |   447.04 |   271.75 |     0.85 |   20.9% |
| 07 |   518.79 |   441.45 |   272.40 |     0.85 |   20.8% |
| 08 |   520.32 |   442.16 |   274.18 |     0.85 |   20.8% |
| 09 |   529.30 |   449.94 |   278.69 |     0.85 |   21.2% |
| 10 |   527.57 |   448.41 |   277.84 |     0.85 |   21.1% |
| 11 |   529.54 |   450.52 |   278.15 |     0.85 |   21.2% |
| 12 |   534.98 |   455.63 |   280.24 |     0.85 |   21.4% |
| 13 |   534.56 |   456.38 |   278.22 |     0.85 |   21.4% |
| 14 |   542.75 |   464.57 |   280.52 |     0.86 |   21.7% |
| 15 |   547.66 |   468.27 |   283.83 |     0.86 |   21.9% |
| 16 |   555.93 |   476.21 |   286.68 |     0.86 |   22.2% |
| 17 |   555.06 |   474.03 |   288.61 |     0.85 |   22.2% |
| 18 |   554.71 |   472.63 |   290.22 |     0.85 |   22.2% |
| 19 |   554.40 |   472.69 |   289.52 |     0.85 |   22.2% |
| 20 |   543.20 |   463.63 |   282.89 |     0.85 |   21.7% |
| 21 |   539.75 |   459.87 |   282.44 |     0.85 |   21.6% |
| 22 |   531.16 |   452.19 |   278.58 |     0.85 |   21.2% |
| 23 |   525.96 |   447.55 |   276.21 |     0.85 |   21.0% |

---

# END OF REPORT

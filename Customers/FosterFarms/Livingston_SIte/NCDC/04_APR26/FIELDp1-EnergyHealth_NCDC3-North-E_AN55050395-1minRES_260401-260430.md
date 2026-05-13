# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 332,178.9 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $64,774.88 (Cost per period)
- **Consumption Total Cost:** $90.63 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** NCDC3 North E  
**Generated:** 2026-05-08 12:06:30  
**Data Source:** AN55050395-V-1minRES_43200CLP_260401-260430c.csv  

## Time Period

- **Period:** April 01, 2026 thru April 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 42,883

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

- **Transformer:** NCDC3 North E
- **Power Factor:** 0.850
- **Total Energy (Actual):** 332,178.88 kWh (per period), 464.77 kW (per hour)
- **Total Waste (Actual):** 58,375.14 kWh (per period), 81.68 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_NCDC3-North-E_AN55050395-1minRES_260401-260430.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_NCDC3-North-E_AN55050395-1minRES_260401-260430.md


## UNITY MANAGEMENT NCDC3 North E SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 81.68 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **NCDC3 North E Utility Cost Offset:** $15.93/hour
- **Annual Offset Savings:** $139519/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 296,524 BTU/hr
- **Total Cooling kW No Longer Needed:** 25.97 kW
- **Cooling Energy Cost Avoided:** $5.06/hour
- **Annual Cooling Savings:** $44354/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 107.64 kW
- **CO2e Emissions Avoided:** 352.01 metric tons/year
- **Monthly CO2e Reduction:** 29.33 metric tons/month
- **Hourly CO2e Reduction:** 0.0402 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $13552/year

### Total NCDC3 North E Unity Savings

- **Per Hour:** $22.54
- **Per Day:** $540.89
- **Per Month:** $16226.73
- **Per Year:** $197425

### NCDC3 North E Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 422.4 kVAR Max (Avg: 287.4 kVAR/hr ; 206,920 kVAR/mo)
- **Max Harmonic Distortion:** 30.2% Max (range: 3.0% - 30.2%)
- **Max Amperage:** 861A Max (range: 471A - 861A)

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
| Line to Neutral Voltage (277v) |   277.44 |   268.02 |   287.36 |
| Line to Line Voltage (480v) |   480.55 |   464.23 |   497.72 |
| Current (AMPS) |   656.40 |   471.50 |   860.59 |
| Phase Angle (degrees) |    31.74 |    23.79 |    40.09 |
| Total Harmonic Distortion (PCT) |    16.00 |     3.00 |    30.21 |

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
| THD Phase A (%) | 5.3% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.3% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.3% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 16.0% | Field-level stress indicator |
| Max Phase THD | 5.3% | Highest THD among all three phases |
| Min Phase THD | 5.3% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 618.89 kW
  - **Maximum Load:** 715.61 kVA
  - **Percentage of Capacity (MAX):** 28.6%
- **Average Load:** 546.45 kVA
  - **Percentage of Capacity (Avg):** 21.9%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 546.45 kVA
- **Average Power Factor (PF):** 0.850

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 546.34 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 480.55 V
- Average Current (Iavg_A): 656.40 A
- Average kW (Psum_kW): 464.77 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.11 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.851
- **Power Factor Difference:** 0.001 (0.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (546.45) and measured PF (0.850) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   546.45 |        21.9% | 390,554.02 kVA | 1,585,861.33 TOTAL-HEAT |
| kW |   464.77 |        18.6% | 332,178.88 kWh | 237,034.74 Load-Heat |
| kVAR |   287.39 |        11.5% | 205,401.15 kVARh | - |
| WASTE |    81.68 |         3.3% | 58,375.14 WASTE | 41,655.07 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,585,861.33
- **Load-Heat (BTU/hr):** 237,034.74
- **Field-Heat (BTU/hr):** 41,655.07
- **Load-Heat (BTU, period total):** 169,412,678.26
- **Field-Heat (BTU, period total):** 29,771,573.53

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 4 |   546.45 |   464.77 |   286.88 |     0.85 |   21.9% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   513.15 |   436.30 |   269.79 |     0.85 |   20.5% |
| 01 |   541.39 |   458.11 |   288.15 |     0.85 |   21.7% |
| 02 |   540.32 |   460.94 |   281.41 |     0.85 |   21.6% |
| 03 |   512.91 |   436.74 |   268.51 |     0.85 |   20.5% |
| 04 |   528.81 |   453.58 |   270.98 |     0.86 |   21.2% |
| 05 |   478.79 |   406.92 |   251.88 |     0.85 |   19.2% |
| 06 |   510.82 |   433.52 |   269.60 |     0.85 |   20.4% |
| 07 |   513.50 |   430.70 |   279.17 |     0.84 |   20.5% |
| 08 |   504.25 |   427.55 |   266.75 |     0.85 |   20.2% |
| 09 |   526.91 |   447.08 |   278.35 |     0.85 |   21.1% |
| 10 |   552.04 |   469.79 |   289.36 |     0.85 |   22.1% |
| 11 |   563.49 |   480.69 |   293.37 |     0.85 |   22.5% |
| 12 |   544.98 |   462.83 |   287.36 |     0.85 |   21.8% |
| 13 |   584.54 |   502.97 |   297.27 |     0.86 |   23.4% |
| 14 |   592.50 |   500.34 |   317.00 |     0.84 |   23.7% |
| 15 |   601.31 |   510.49 |   317.35 |     0.85 |   24.1% |
| 16 |   573.92 |   483.42 |   309.11 |     0.84 |   23.0% |
| 17 |   588.53 |   497.38 |   314.25 |     0.85 |   23.5% |
| 18 |   552.72 |   469.12 |   292.01 |     0.85 |   22.1% |
| 19 |   560.00 |   476.90 |   293.20 |     0.85 |   22.4% |
| 20 |   555.05 |   478.23 |   281.13 |     0.86 |   22.2% |
| 21 |   524.89 |   450.05 |   269.86 |     0.86 |   21.0% |
| 22 |   600.65 |   516.35 |   306.36 |     0.86 |   24.0% |
| 23 |   556.18 |   470.82 |   295.77 |     0.85 |   22.2% |

---

# END OF REPORT

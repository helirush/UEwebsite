# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 333,147.5 kWh (Usage per period)
- **Consumption Cost per unit:** $0.175/kWh (Cost per kWh)
- **Consumption Total Cost:** $58,200.87 (Cost per period)
- **Consumption Total Cost:** $78.39 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** NCDC1 West11c  
**Generated:** 2026-04-23 14:40:38  
**Data Source:** AN55031702-V-1minRES_44550CLP_260301-260331c.csv  

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

- **Transformer:** NCDC1 West11c
- **Power Factor:** 0.850
- **Total Energy (Actual):** 333,147.48 kWh (per period), 448.68 kW (per hour)
- **Total Waste (Actual):** 58,342.98 kWh (per period), 78.58 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_NCDC1-West11c_AN55031702-1minRES_260301-260331.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_NCDC1-West11c_AN55031702-1minRES_260301-260331.md


## UNITY MANAGEMENT NCDC1 West11c SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 78.58 kW/hr
- **Blended Electricity Rate:** $0.1747/kWh (all-inclusive)
- **NCDC1 West11c Utility Cost Offset:** $13.73/hour
- **Annual Offset Savings:** $120251/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 285,594 BTU/hr
- **Total Cooling kW No Longer Needed:** 25.02 kW
- **Cooling Energy Cost Avoided:** $4.37/hour
- **Annual Cooling Savings:** $38291/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 103.60 kW
- **CO2e Emissions Avoided:** 338.78 metric tons/year
- **Monthly CO2e Reduction:** 28.23 metric tons/month
- **Hourly CO2e Reduction:** 0.0387 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $13043/year

### Total NCDC1 West11c Unity Savings

- **Per Hour:** $19.59
- **Per Day:** $470.10
- **Per Month:** $14102.93
- **Per Year:** $171586

### NCDC1 West11c Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 665.6 kVAR Max (Avg: 276.9 kVAR/hr ; 199,384 kVAR/mo)
- **Max Harmonic Distortion:** 31.6% Max (range: 3.4% - 31.6%)
- **Max Amperage:** 990A Max (range: 0A - 990A)

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
| Line to Neutral Voltage (277v) |   278.79 |     0.00 |   289.13 |
| Line to Line Voltage (480v) |   482.88 |     0.00 |   500.78 |
| Current (AMPS) |   630.40 |     0.00 |   990.31 |
| Phase Angle (degrees) |    31.72 |    29.42 |    90.00 |
| Total Harmonic Distortion (PCT) |    16.20 |     3.39 |    31.60 |

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
| THD Phase A (%) | 5.4% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.4% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.4% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 16.2% | Field-level stress indicator |
| Max Phase THD | 5.4% | Highest THD among all three phases |
| Min Phase THD | 5.4% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 640.95 kW
  - **Maximum Load:** 924.03 kVA
  - **Percentage of Capacity (MAX):** 37.0%
- **Average Load:** 527.26 kVA
  - **Percentage of Capacity (Avg):** 21.1%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 527.26 kVA
- **Average Power Factor (PF):** 0.850

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 527.25 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 482.88 V
- Average Current (Iavg_A): 630.40 A
- Average kW (Psum_kW): 448.68 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.01 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.851
- **Power Factor Difference:** 0.001 (0.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (527.26) and measured PF (0.850) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   527.26 |        21.1% | 391,490.46 kVA | 1,530,971.74 TOTAL-HEAT |
| kW |   448.68 |        17.9% | 333,147.48 kWh | 228,157.42 Load-Heat |
| kVAR |   276.92 |        11.1% | 205,615.02 kVARh | - |
| WASTE |    78.58 |         3.1% | 58,342.98 WASTE | 39,956.43 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,530,971.74
- **Load-Heat (BTU/hr):** 228,157.42
- **Field-Heat (BTU/hr):** 39,956.43
- **Load-Heat (BTU, period total):** 169,406,882.33
- **Field-Heat (BTU, period total):** 29,667,648.06

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 3 |   527.26 |   448.68 |   276.78 |     0.85 |   21.1% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   511.49 |   434.88 |   269.17 |     0.85 |   20.5% |
| 01 |   499.63 |   423.20 |   265.45 |     0.85 |   20.0% |
| 02 |   504.77 |   427.32 |   268.59 |     0.85 |   20.2% |
| 03 |   499.72 |   422.17 |   267.26 |     0.84 |   20.0% |
| 04 |   495.72 |   418.21 |   266.00 |     0.84 |   19.8% |
| 05 |   515.20 |   438.59 |   270.14 |     0.85 |   20.6% |
| 06 |   534.31 |   456.63 |   277.30 |     0.85 |   21.4% |
| 07 |   523.65 |   445.56 |   274.98 |     0.85 |   20.9% |
| 08 |   522.09 |   444.27 |   274.11 |     0.85 |   20.9% |
| 09 |   520.80 |   442.88 |   273.91 |     0.85 |   20.8% |
| 10 |   522.12 |   444.14 |   274.40 |     0.85 |   20.9% |
| 11 |   524.22 |   446.11 |   275.19 |     0.85 |   21.0% |
| 12 |   531.00 |   453.02 |   276.87 |     0.85 |   21.2% |
| 13 |   533.72 |   456.10 |   277.05 |     0.85 |   21.3% |
| 14 |   535.45 |   457.94 |   277.35 |     0.86 |   21.4% |
| 15 |   541.31 |   462.13 |   281.75 |     0.85 |   21.7% |
| 16 |   547.94 |   467.13 |   286.27 |     0.85 |   21.9% |
| 17 |   553.14 |   470.49 |   290.70 |     0.85 |   22.1% |
| 18 |   553.54 |   471.22 |   290.31 |     0.85 |   22.1% |
| 19 |   554.88 |   473.11 |   289.81 |     0.85 |   22.2% |
| 20 |   541.08 |   460.96 |   283.23 |     0.85 |   21.6% |
| 21 |   536.55 |   456.97 |   281.07 |     0.85 |   21.5% |
| 22 |   529.24 |   450.50 |   277.67 |     0.85 |   21.2% |
| 23 |   521.85 |   444.12 |   273.94 |     0.85 |   20.9% |

---

# END OF REPORT

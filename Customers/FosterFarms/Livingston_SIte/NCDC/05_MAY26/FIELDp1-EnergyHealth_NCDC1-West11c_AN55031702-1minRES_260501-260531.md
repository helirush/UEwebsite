# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 303,853.3 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $59,251.40 (Cost per period)
- **Consumption Total Cost:** $86.82 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** NCDC1 West11c  
**Generated:** 2026-06-18 23:50:59  
**Data Source:** AN55031702-V-1minRES_44640CLP_260501-260531c.csv  

## Time Period

- **Period:** May 01, 2026 thru May 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 40,946

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
- **Power Factor:** 0.851
- **Total Energy (Actual):** 303,853.31 kWh (per period), 445.25 kW (per hour)
- **Total Waste (Actual):** 53,224.13 kWh (per period), 77.99 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_NCDC1-West11c_AN55031702-1minRES_260501-260531.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_NCDC1-West11c_AN55031702-1minRES_260501-260531.md


## UNITY MANAGEMENT NCDC1 West11c SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 77.99 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **NCDC1 West11c Utility Cost Offset:** $15.21/hour
- **Annual Offset Savings:** $133225/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 284,538 BTU/hr
- **Total Cooling kW No Longer Needed:** 24.90 kW
- **Cooling Energy Cost Avoided:** $4.85/hour
- **Annual Cooling Savings:** $42529/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 102.89 kW
- **CO2e Emissions Avoided:** 336.46 metric tons/year
- **Monthly CO2e Reduction:** 28.04 metric tons/month
- **Hourly CO2e Reduction:** 0.0384 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $12954/year

### Total NCDC1 West11c Unity Savings

- **Per Hour:** $21.54
- **Per Day:** $517.01
- **Per Month:** $15510.28
- **Per Year:** $188708

### NCDC1 West11c Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 337.4 kVAR Max (Avg: 274.8 kVAR/hr ; 197,881 kVAR/mo)
- **Max Harmonic Distortion:** 30.9% Max (range: 3.4% - 30.9%)
- **Max Amperage:** 748A Max (range: 510A - 748A)

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
| Line to Neutral Voltage (277v) |   278.80 |   269.01 |   289.18 |
| Line to Line Voltage (480v) |   482.90 |   465.94 |   500.87 |
| Current (AMPS) |   625.59 |   509.65 |   748.20 |
| Phase Angle (degrees) |    31.71 |    29.19 |    36.20 |
| Total Harmonic Distortion (PCT) |    16.86 |     3.43 |    30.88 |

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
| Unity THD Composite (%) | 16.9% | Field-level stress indicator |
| Max Phase THD | 5.6% | Highest THD among all three phases |
| Min Phase THD | 5.6% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 536.61 kW
  - **Maximum Load:** 620.57 kVA
  - **Percentage of Capacity (MAX):** 24.8%
- **Average Load:** 523.24 kVA
  - **Percentage of Capacity (Avg):** 20.9%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 523.24 kVA
- **Average Power Factor (PF):** 0.851

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 523.25 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 482.90 V
- Average Current (Iavg_A): 625.59 A
- Average kW (Psum_kW): 445.25 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.01 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.851
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (523.24) and measured PF (0.851) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   523.24 |        20.9% | 357,077.44 kVA | 1,519,255.56 TOTAL-HEAT |
| kW |   445.25 |        17.8% | 303,853.31 kWh | 226,452.43 Load-Heat |
| kVAR |   274.83 |        11.0% | 187,556.56 kVARh | - |
| WASTE |    77.99 |         3.1% | 53,224.13 WASTE | 39,666.29 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,519,255.56
- **Load-Heat (BTU/hr):** 226,452.43
- **Field-Heat (BTU/hr):** 39,666.29
- **Load-Heat (BTU, period total):** 154,538,685.37
- **Field-Heat (BTU, period total):** 27,069,597.59

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 5 |   523.24 |   445.25 |   274.72 |     0.85 |   20.9% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   518.16 |   440.13 |   273.36 |     0.85 |   20.7% |
| 01 |   514.83 |   436.90 |   272.27 |     0.85 |   20.6% |
| 02 |   514.76 |   437.25 |   271.56 |     0.85 |   20.6% |
| 03 |   507.95 |   430.87 |   268.92 |     0.85 |   20.3% |
| 04 |   507.26 |   430.50 |   268.19 |     0.85 |   20.3% |
| 05 |   512.86 |   436.75 |   268.72 |     0.85 |   20.5% |
| 06 |   518.45 |   441.29 |   272.00 |     0.85 |   20.7% |
| 07 |   512.14 |   434.98 |   270.22 |     0.85 |   20.5% |
| 08 |   514.95 |   436.96 |   272.39 |     0.85 |   20.6% |
| 09 |   517.39 |   439.16 |   273.47 |     0.85 |   20.7% |
| 10 |   519.58 |   441.67 |   273.58 |     0.85 |   20.8% |
| 11 |   522.21 |   444.67 |   273.72 |     0.85 |   20.9% |
| 12 |   528.00 |   450.30 |   275.60 |     0.85 |   21.1% |
| 13 |   528.95 |   451.50 |   275.46 |     0.85 |   21.2% |
| 14 |   534.20 |   456.71 |   276.98 |     0.85 |   21.4% |
| 15 |   535.55 |   456.88 |   279.24 |     0.85 |   21.4% |
| 16 |   533.96 |   455.55 |   278.44 |     0.85 |   21.4% |
| 17 |   539.76 |   460.29 |   281.82 |     0.85 |   21.6% |
| 18 |   535.97 |   456.49 |   280.76 |     0.85 |   21.4% |
| 19 |   538.98 |   459.05 |   282.29 |     0.85 |   21.6% |
| 20 |   530.00 |   451.48 |   277.47 |     0.85 |   21.2% |
| 21 |   531.39 |   452.68 |   278.21 |     0.85 |   21.3% |
| 22 |   522.85 |   444.57 |   275.10 |     0.85 |   20.9% |
| 23 |   518.27 |   439.94 |   273.86 |     0.85 |   20.7% |

---

# END OF REPORT

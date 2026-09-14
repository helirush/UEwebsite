# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 347,701.3 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $67,801.76 (Cost per period)
- **Consumption Total Cost:** $91.30 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** FSO-3  
**Generated:** 2026-09-10 19:28:47  
**Data Source:** AN55050439-V-1minRES_44640CLP_260701-260731c.csv  

## Time Period

- **Period:** July 01, 2026 thru July 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,560

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

- **Transformer:** FSO-3
- **Power Factor:** 0.918
- **Total Energy (Actual):** 347,701.34 kWh (per period), 468.18 kW (per hour)
- **Total Waste (Actual):** 30,294.66 kWh (per period), 40.79 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_FSO-3_AN55050439-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_FSO-3_AN55050439-1minRES_260701-260731.md


## UNITY MANAGEMENT FSO-3 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 40.79 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 21.16 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **FSO-3 Utility Cost Offset:** $7.95/hour
- **Annual Offset Savings:** $69680/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 76,962 BTU/hr
- **Total Cooling kW No Longer Needed:** 6.86 kW
- **Cooling Energy Cost Avoided:** $1.34/hour
- **Annual Cooling Savings:** $11718/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 47.65 kW
- **CO2e Emissions Avoided:** 155.83 metric tons/year
- **Monthly CO2e Reduction:** 12.99 metric tons/month
- **Hourly CO2e Reduction:** 0.0178 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $5922/year

### Total FSO-3 Unity Savings

- **Per Hour:** $9.97
- **Per Day:** $239.23
- **Per Month:** $7177.01
- **Per Year:** $87320

### FSO-3 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 275.2 kVAR Max (Avg: 199.6 kVAR/hr ; 143,747 kVAR/mo)
- **Max Harmonic Distortion:** 30.7% Max (range: 3.3% - 30.7%)
- **Max Amperage:** 881A Max (range: 264A - 881A)

---

# FSO-3 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   277.81 |   268.59 |   287.25 |
| Line to Line Voltage (480v) |   481.19 |   465.22 |   497.53 |
| Current (AMPS) |   610.82 |   264.24 |   880.59 |
| Phase Angle (degrees) |    23.30 |    20.45 |    31.57 |
| Total Harmonic Distortion (PCT) |    16.29 |     3.34 |    30.73 |

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
| Unity THD Composite (%) | 16.3% | Field-level stress indicator |
| Max Phase THD | 5.4% | Highest THD among all three phases |
| Min Phase THD | 5.4% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 658.54 kW
  - **Maximum Load:** 712.69 kVA
  - **Percentage of Capacity (MAX):** 28.5%
- **Average Load:** 508.97 kVA
  - **Percentage of Capacity (Avg):** 20.4%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 508.97 kVA
- **Average Power Factor (PF):** 0.918

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 509.08 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 481.19 V
- Average Current (Iavg_A): 610.82 A
- Average kW (Psum_kW): 468.18 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.11 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.920
- **Power Factor Difference:** 0.001 (0.2%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (508.97) and measured PF (0.918) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   508.97 |        20.4% | 377,996.00 kVA | 1,597,495.10 TOTAL-HEAT |
| kW |   468.18 |        18.7% | 347,701.34 kWh | 128,031.96 Load-Heat |
| kVAR |   199.65 |         8.0% | 148,272.56 kVARh | - |
| WASTE |    40.79 |         1.6% | 30,294.66 WASTE | 11,155.22 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,597,495.10
- **Load-Heat (BTU/hr):** 128,031.96
- **Field-Heat (BTU/hr):** 11,155.22
- **Load-Heat (BTU, period total):** 95,085,067.65
- **Field-Heat (BTU, period total):** 8,284,608.88

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 |   508.97 |   468.18 |   199.34 |     0.92 |   20.4% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   533.02 |   491.78 |   205.36 |     0.92 |   21.3% |
| 01 |   510.02 |   469.95 |   197.92 |     0.92 |   20.4% |
| 02 |   509.48 |   469.46 |   197.68 |     0.92 |   20.4% |
| 03 |   503.30 |   463.77 |   195.21 |     0.92 |   20.1% |
| 04 |   481.90 |   443.38 |   188.37 |     0.92 |   19.3% |
| 05 |   469.83 |   432.33 |   183.55 |     0.92 |   18.8% |
| 06 |   475.86 |   437.49 |   186.85 |     0.92 |   19.0% |
| 07 |   475.96 |   438.18 |   185.56 |     0.92 |   19.0% |
| 08 |   495.89 |   456.95 |   192.36 |     0.92 |   19.8% |
| 09 |   504.16 |   464.36 |   196.08 |     0.92 |   20.2% |
| 10 |   538.12 |   496.22 |   208.02 |     0.92 |   21.5% |
| 11 |   532.78 |   490.75 |   207.21 |     0.92 |   21.3% |
| 12 |   541.71 |   498.40 |   212.02 |     0.92 |   21.7% |
| 13 |   525.53 |   482.63 |   207.65 |     0.92 |   21.0% |
| 14 |   548.74 |   504.00 |   216.76 |     0.92 |   21.9% |
| 15 |   565.04 |   519.43 |   222.16 |     0.92 |   22.6% |
| 16 |   552.06 |   507.04 |   218.09 |     0.92 |   22.1% |
| 17 |   518.43 |   475.71 |   205.74 |     0.92 |   20.7% |
| 18 |   515.99 |   473.96 |   203.63 |     0.92 |   20.6% |
| 19 |   484.82 |   445.26 |   191.45 |     0.92 |   19.4% |
| 20 |   484.03 |   444.88 |   190.39 |     0.92 |   19.4% |
| 21 |   452.24 |   414.46 |   180.57 |     0.92 |   18.1% |
| 22 |   476.76 |   437.46 |   189.14 |     0.92 |   19.1% |
| 23 |   519.43 |   478.25 |   202.32 |     0.92 |   20.8% |

---

# END OF REPORT

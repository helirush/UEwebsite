# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 264,594.1 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $51,595.86 (Cost per period)
- **Consumption Total Cost:** $69.43 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** FSO-1  
**Generated:** 2026-09-12 13:38:10  
**Data Source:** AN55050366-V-1minRES_44640CLP_260801-260831c.csv  

## Time Period

- **Period:** August 01, 2026 thru August 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,591

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

- **Transformer:** FSO-1
- **Power Factor:** 0.861
- **Total Energy (Actual):** 264,594.14 kWh (per period), 356.03 kW (per hour)
- **Total Waste (Actual):** 47,764.63 kWh (per period), 64.27 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_FSO-1_AN55050366-1minRES_260801-260831.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_FSO-1_AN55050366-1minRES_260801-260831.md


## UNITY MANAGEMENT FSO-1 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 64.27 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 38.27 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **FSO-1 Utility Cost Offset:** $12.53/hour
- **Annual Offset Savings:** $109787/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 138,311 BTU/hr
- **Total Cooling kW No Longer Needed:** 12.35 kW
- **Cooling Energy Cost Avoided:** $2.41/hour
- **Annual Cooling Savings:** $21099/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 76.62 kW
- **CO2e Emissions Avoided:** 250.57 metric tons/year
- **Monthly CO2e Reduction:** 20.88 metric tons/month
- **Hourly CO2e Reduction:** 0.0286 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $9522/year

### Total FSO-1 Unity Savings

- **Per Hour:** $16.03
- **Per Day:** $384.68
- **Per Month:** $11540.29
- **Per Year:** $140407

### FSO-1 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 880.5 kVAR Max (Avg: 223.4 kVAR/hr ; 160,827 kVAR/mo)
- **Max Harmonic Distortion:** 32.2% Max (range: 3.0% - 32.2%)
- **Max Amperage:** 1,302A Max (range: 212A - 1302A)

---

# FSO-1 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   278.49 |   270.75 |   290.68 |
| Line to Line Voltage (480v) |   482.36 |   468.95 |   503.48 |
| Current (AMPS) |   503.23 |   211.77 |  1302.22 |
| Phase Angle (degrees) |    30.34 |    20.93 |    65.61 |
| Total Harmonic Distortion (PCT) |    15.17 |     3.00 |    32.20 |

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
| THD Phase A (%) | 5.1% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.1% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.1% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 15.2% | Field-level stress indicator |
| Max Phase THD | 5.1% | Highest THD among all three phases |
| Min Phase THD | 5.1% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 670.73 kW
  - **Maximum Load:** 1,077.45 kVA
  - **Percentage of Capacity (MAX):** 43.1%
- **Average Load:** 420.30 kVA
  - **Percentage of Capacity (Avg):** 16.8%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 420.30 kVA
- **Average Power Factor (PF):** 0.861

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 420.43 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 482.36 V
- Average Current (Iavg_A): 503.23 A
- Average kW (Psum_kW): 356.03 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.13 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.847
- **Power Factor Difference:** 0.014 (1.6%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (420.30) and measured PF (0.861) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   420.30 |        16.8% | 312,358.78 kVA | 1,214,818.40 TOTAL-HEAT |
| kW |   356.03 |        14.2% | 264,594.14 kWh | 185,765.09 Load-Heat |
| kVAR |   223.37 |         8.9% | 166,005.86 kVARh | - |
| WASTE |    64.27 |         2.6% | 47,764.63 WASTE | 33,534.38 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,214,818.40
- **Load-Heat (BTU/hr):** 185,765.09
- **Field-Heat (BTU/hr):** 33,534.38
- **Load-Heat (BTU, period total):** 138,057,519.11
- **Field-Heat (BTU, period total):** 24,922,195.33

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 8 |   420.30 |   356.03 |   221.39 |     0.85 |   16.8% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   481.98 |   402.26 |   264.04 |     0.83 |   19.3% |
| 01 |   494.84 |   411.35 |   273.99 |     0.83 |   19.8% |
| 02 |   400.12 |   342.92 |   203.40 |     0.86 |   16.0% |
| 03 |   495.04 |   412.19 |   273.17 |     0.83 |   19.8% |
| 04 |   465.39 |   392.70 |   248.30 |     0.84 |   18.6% |
| 05 |   483.92 |   406.80 |   260.59 |     0.84 |   19.4% |
| 06 |   504.84 |   422.82 |   274.81 |     0.84 |   20.2% |
| 07 |   507.16 |   425.44 |   274.64 |     0.84 |   20.3% |
| 08 |   530.15 |   443.48 |   289.29 |     0.84 |   21.2% |
| 09 |   492.96 |   414.99 |   263.76 |     0.84 |   19.7% |
| 10 |   523.47 |   436.94 |   287.03 |     0.83 |   20.9% |
| 11 |   422.69 |   361.81 |   215.72 |     0.86 |   16.9% |
| 12 |   511.85 |   426.14 |   282.02 |     0.83 |   20.5% |
| 13 |   518.27 |   430.02 |   288.04 |     0.83 |   20.7% |
| 14 |   480.21 |   402.60 |   260.25 |     0.84 |   19.2% |
| 15 |   456.21 |   382.27 |   247.14 |     0.84 |   18.2% |
| 16 |   279.19 |   247.29 |   128.62 |     0.89 |   11.2% |
| 17 |   267.77 |   236.24 |   125.06 |     0.88 |   10.7% |
| 18 |   253.75 |   225.29 |   116.16 |     0.89 |   10.2% |
| 19 |   241.79 |   215.38 |   109.54 |     0.89 |    9.7% |
| 20 |   239.87 |   213.91 |   108.19 |     0.89 |    9.6% |
| 21 |   251.27 |   224.80 |   111.79 |     0.89 |   10.1% |
| 22 |   308.66 |   270.24 |   146.79 |     0.88 |   12.3% |
| 23 |   475.02 |   396.15 |   260.42 |     0.83 |   19.0% |

---

# END OF REPORT

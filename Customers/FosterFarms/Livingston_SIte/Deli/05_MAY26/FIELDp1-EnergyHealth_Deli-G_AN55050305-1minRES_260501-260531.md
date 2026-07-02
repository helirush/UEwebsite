# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 459,104.2 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $89,525.31 (Cost per period)
- **Consumption Total Cost:** $120.34 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Deli G  
**Generated:** 2026-06-19 18:06:18  
**Data Source:** AN55050305-V-1minRES_44640CLP_260501-260531c.csv  

## Time Period

- **Period:** May 01, 2026 thru May 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,635

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
- **Power Factor:** 0.860
- **Total Energy (Actual):** 459,104.18 kWh (per period), 617.14 kW (per hour)
- **Total Waste (Actual):** 55,851.18 kWh (per period), 75.08 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Deli-G_AN55050305-1minRES_260501-260531.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Deli-G_AN55050305-1minRES_260501-260531.md


## UNITY MANAGEMENT Deli G SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 75.08 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Deli G Utility Cost Offset:** $14.64/hour
- **Annual Offset Savings:** $128247/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 269,775 BTU/hr
- **Total Cooling kW No Longer Needed:** 23.61 kW
- **Cooling Energy Cost Avoided:** $4.60/hour
- **Annual Cooling Savings:** $40323/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 98.68 kW
- **CO2e Emissions Avoided:** 322.71 metric tons/year
- **Monthly CO2e Reduction:** 26.89 metric tons/month
- **Hourly CO2e Reduction:** 0.0368 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $12263/year

### Total Deli G Unity Savings

- **Per Hour:** $20.64
- **Per Day:** $495.43
- **Per Month:** $14862.94
- **Per Year:** $180832

### Deli G Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,644.1 kVAR Max (Avg: 313.5 kVAR/hr ; 225,744 kVAR/mo)
- **Max Harmonic Distortion:** 28.6% Max (range: 3.0% - 28.6%)
- **Max Amperage:** 2,473A Max (range: 71A - 2473A)

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
| Line to Neutral Voltage (277v) |   277.62 |   265.70 |   288.76 |
| Line to Line Voltage (480v) |   480.85 |   460.20 |   500.14 |
| Current (AMPS) |   834.65 |    71.13 |  2472.69 |
| Phase Angle (degrees) |    29.60 |     0.00 |    69.70 |
| Total Harmonic Distortion (PCT) |    14.13 |     3.00 |    28.61 |

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

- **Maximum UtilityDemand:** 1,747.66 kW
  - **Maximum Load:** 1,975.52 kVA
  - **Percentage of Capacity (MAX):** 79.0%
- **Average Load:** 692.22 kVA
  - **Percentage of Capacity (Avg):** 27.7%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 692.22 kVA
- **Average Power Factor (PF):** 0.860

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 695.14 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 480.85 V
- Average Current (Iavg_A): 834.65 A
- Average kW (Psum_kW): 617.14 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 2.92 kVA (0.4%)
- **Calculated PF (kW/kVA from averages):** 0.888
- **Power Factor Difference:** 0.028 (3.2%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (692.22) and measured PF (0.860) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   692.22 |        27.7% | 514,955.35 kVA | 2,105,785.12 TOTAL-HEAT |
| kW |   617.14 |        24.7% | 459,104.18 kWh | 228,389.85 Load-Heat |
| kVAR |   313.53 |        12.5% | 233,243.16 kVARh | - |
| WASTE |    75.08 |         3.0% | 55,851.18 WASTE | 27,784.20 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,105,785.12
- **Load-Heat (BTU/hr):** 228,389.85
- **Field-Heat (BTU/hr):** 27,784.20
- **Load-Heat (BTU, period total):** 169,903,018.22
- **Field-Heat (BTU, period total):** 20,669,129.26

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 5 |   692.22 |   617.14 |   300.25 |     0.89 |   27.7% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   517.22 |   442.14 |   257.04 |     0.85 |   20.7% |
| 01 |   310.59 |   240.36 |   195.72 |     0.77 |   12.4% |
| 02 |   275.03 |   210.63 |   175.69 |     0.77 |   11.0% |
| 03 |   282.03 |   216.17 |   178.35 |     0.77 |   11.3% |
| 04 |   289.81 |   225.15 |   178.57 |     0.78 |   11.6% |
| 05 |   329.99 |   255.59 |   205.84 |     0.77 |   13.2% |
| 06 |   836.63 |   732.92 |   389.87 |     0.88 |   33.5% |
| 07 |   882.08 |   794.45 |   373.60 |     0.90 |   35.3% |
| 08 |   896.35 |   800.19 |   393.83 |     0.89 |   35.9% |
| 09 |   875.35 |   793.02 |   361.96 |     0.91 |   35.0% |
| 10 |   815.31 |   732.54 |   347.40 |     0.90 |   32.6% |
| 11 |   763.75 |   687.00 |   322.94 |     0.90 |   30.6% |
| 12 |   862.97 |   790.30 |   338.46 |     0.92 |   34.5% |
| 13 |   824.93 |   737.65 |   358.30 |     0.89 |   33.0% |
| 14 |   868.67 |   794.22 |   344.66 |     0.91 |   34.7% |
| 15 |   721.12 |   628.75 |   343.40 |     0.87 |   28.8% |
| 16 |   836.66 |   768.92 |   320.95 |     0.92 |   33.5% |
| 17 |   848.35 |   772.00 |   342.33 |     0.91 |   33.9% |
| 18 |   808.92 |   738.51 |   321.06 |     0.91 |   32.4% |
| 19 |   810.39 |   744.00 |   312.86 |     0.92 |   32.4% |
| 20 |   698.02 |   629.69 |   290.06 |     0.90 |   27.9% |
| 21 |   807.66 |   750.32 |   289.66 |     0.93 |   32.3% |
| 22 |   709.12 |   646.44 |   280.77 |     0.91 |   28.4% |
| 23 |   742.53 |   680.63 |   282.77 |     0.92 |   29.7% |

---

# END OF REPORT

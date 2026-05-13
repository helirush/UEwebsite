# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 530,298.9 kWh (Usage per period)
- **Consumption Cost per unit:** $0.175/kWh (Cost per kWh)
- **Consumption Total Cost:** $92,643.21 (Cost per period)
- **Consumption Total Cost:** $124.77 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** NCDC2 South D  
**Generated:** 2026-04-23 14:40:18  
**Data Source:** AN55050318-V-1minRES_44550CLP_260301-260331c.csv  

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

- **Transformer:** NCDC2 South D
- **Power Factor:** 0.908
- **Total Energy (Actual):** 530,298.87 kWh (per period), 714.21 kW (per hour)
- **Total Waste (Actual):** 53,895.38 kWh (per period), 72.59 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_NCDC2-South-D_AN55050318-1minRES_260301-260331.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_NCDC2-South-D_AN55050318-1minRES_260301-260331.md


## UNITY MANAGEMENT NCDC2 South D SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 72.59 kW/hr
- **Blended Electricity Rate:** $0.1747/kWh (all-inclusive)
- **NCDC2 South D Utility Cost Offset:** $12.68/hour
- **Annual Offset Savings:** $111084/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 262,777 BTU/hr
- **Total Cooling kW No Longer Needed:** 23.02 kW
- **Cooling Energy Cost Avoided:** $4.02/hour
- **Annual Cooling Savings:** $35232/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 95.61 kW
- **CO2e Emissions Avoided:** 312.66 metric tons/year
- **Monthly CO2e Reduction:** 26.05 metric tons/month
- **Hourly CO2e Reduction:** 0.0357 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $12037/year

### Total NCDC2 South D Unity Savings

- **Per Hour:** $18.08
- **Per Day:** $433.85
- **Per Month:** $13015.36
- **Per Year:** $158354

### NCDC2 South D Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,984.7 kVAR Max (Avg: 330.1 kVAR/hr ; 237,657 kVAR/mo)
- **Max Harmonic Distortion:** 28.4% Max (range: 3.2% - 28.4%)
- **Max Amperage:** 2,833A Max (range: 0A - 2833A)

---

# NCDC2 South D DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   277.12 |     0.00 |   287.17 |
| Line to Line Voltage (480v) |   479.98 |     0.00 |   497.40 |
| Current (AMPS) |   946.43 |     0.00 |  2832.93 |
| Phase Angle (degrees) |    24.70 |    15.20 |    90.00 |
| Total Harmonic Distortion (PCT) |    15.47 |     3.15 |    28.37 |

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
| Unity THD Composite (%) | 15.5% | Field-level stress indicator |
| Max Phase THD | 5.2% | Highest THD among all three phases |
| Min Phase THD | 5.2% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,232.54 kW
  - **Maximum Load:** 2,226.70 kVA
  - **Percentage of Capacity (MAX):** 89.1%
- **Average Load:** 786.79 kVA
  - **Percentage of Capacity (Avg):** 31.5%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 786.79 kVA
- **Average Power Factor (PF):** 0.908

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 786.82 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 479.98 V
- Average Current (Iavg_A): 946.43 A
- Average kW (Psum_kW): 714.21 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.02 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.908
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (786.79) and measured PF (0.908) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   786.79 |        31.5% | 584,194.24 kVA | 2,436,976.47 TOTAL-HEAT |
| kW |   714.21 |        28.6% | 530,298.87 kWh | 224,825.51 Load-Heat |
| kVAR |   330.08 |        13.2% | 245,083.72 kVARh | - |
| WASTE |    72.59 |         2.9% | 53,895.38 WASTE | 22,849.48 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,436,976.47
- **Load-Heat (BTU/hr):** 224,825.51
- **Field-Heat (BTU/hr):** 22,849.48
- **Load-Heat (BTU, period total):** 166,932,941.34
- **Field-Heat (BTU, period total):** 16,965,742.56

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 3 |   786.79 |   714.21 |   329.14 |     0.91 |   31.5% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   776.98 |   704.48 |   327.01 |     0.91 |   31.1% |
| 01 |   776.76 |   703.48 |   328.54 |     0.91 |   31.1% |
| 02 |   785.67 |   711.43 |   332.67 |     0.91 |   31.4% |
| 03 |   761.66 |   688.62 |   324.43 |     0.90 |   30.5% |
| 04 |   768.16 |   696.37 |   323.34 |     0.91 |   30.7% |
| 05 |   750.79 |   679.24 |   318.81 |     0.90 |   30.0% |
| 06 |   764.90 |   692.74 |   323.47 |     0.91 |   30.6% |
| 07 |   749.06 |   676.37 |   321.07 |     0.90 |   30.0% |
| 08 |   742.05 |   668.09 |   322.40 |     0.90 |   29.7% |
| 09 |   760.22 |   687.33 |   323.94 |     0.90 |   30.4% |
| 10 |   778.95 |   707.39 |   325.25 |     0.91 |   31.2% |
| 11 |   773.04 |   701.04 |   324.98 |     0.91 |   30.9% |
| 12 |   821.03 |   747.49 |   338.85 |     0.91 |   32.8% |
| 13 |   801.41 |   727.11 |   336.12 |     0.91 |   32.1% |
| 14 |   809.90 |   735.78 |   337.81 |     0.91 |   32.4% |
| 15 |   790.38 |   719.09 |   327.03 |     0.91 |   31.6% |
| 16 |   783.68 |   714.38 |   321.34 |     0.91 |   31.3% |
| 17 |   821.66 |   752.41 |   329.18 |     0.92 |   32.9% |
| 18 |   863.57 |   790.29 |   346.53 |     0.92 |   34.5% |
| 19 |   818.05 |   744.41 |   338.38 |     0.91 |   32.7% |
| 20 |   827.20 |   754.05 |   339.45 |     0.91 |   33.1% |
| 21 |   795.28 |   721.95 |   332.60 |     0.91 |   31.8% |
| 22 |   786.56 |   713.68 |   329.81 |     0.91 |   31.5% |
| 23 |   775.87 |   703.49 |   326.40 |     0.91 |   31.0% |

---

# END OF REPORT

# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 560,920.8 kWh (Usage per period)
- **Consumption Cost per unit:** $0.175/kWh (Cost per kWh)
- **Consumption Total Cost:** $97,992.87 (Cost per period)
- **Consumption Total Cost:** $179.64 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Rendering-1  
**Generated:** 2026-04-25 17:51:38  
**Data Source:** AN55050434-V-1minRES_32730CLP_260301-260323c.csv  

## Time Period

- **Period:** March 01, 2026 thru March 23, 2026
- **Number of Days:** 23 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 32,730

- **Dataset Coverage:** Partial month (74.2% of 31-day month)
- **Billing Scale Factor:** 1.348x (normalization applied for monthly comparison)

## Facility Information

- **Facility:** Foster Farms
- **Location:** Livingston HQ Facility
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** Rendering-1
- **Power Factor:** 0.839
- **Total Energy (Actual):** 560,920.83 kWh (23 days), 1028.27 kW (per hour)
- **Total Energy (Monthly Equivalent):** 756,023.73 kWh
- **Total Waste (Actual):** 112,112.96 kWh (23 days), 205.52 kW (per hour)
- **Total Waste (Monthly Equivalent):** 151,108.77 kWh

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Rendering-1_AN55050434-1minRES_260301-260323.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Rendering-1_AN55050434-1minRES_260301-260323.md


## UNITY MANAGEMENT Rendering-1 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 205.52 kW/hr (actual)
- **Monthly Equivalent Waste:** 277.01 kW/hr
- **Blended Electricity Rate:** $0.1747/kWh (all-inclusive)
- **Rendering-1 Utility Cost Offset (Monthly Equivalent):** $48.39/hour
- **Annual Offset Savings:** $314527/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 781,099 BTU/hr
- **Total Cooling kW No Longer Needed:** 68.45 kW
- **Cooling Energy Cost Avoided:** $11.96/hour
- **Annual Cooling Savings:** $104752/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 273.97 kW
- **CO2e Emissions Avoided:** 895.93 metric tons/year
- **Monthly CO2e Reduction:** 74.66 metric tons/month
- **Hourly CO2e Reduction:** 0.1023 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $34493/year

### Total Rendering-1 Unity Savings

- **Per Hour:** $51.80
- **Per Day:** $1243.21
- **Per Month:** $37296.37
- **Per Year:** $453773

### Rendering-1 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,162.6 kVAR Max (Avg: 681.8 kVAR/hr ; 490,925 kVAR/mo)
- **Max Harmonic Distortion:** 31.3% Max (range: 3.0% - 31.3%)
- **Max Amperage:** 2,281A Max (range: 0A - 2281A)

---

# Rendering-1 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   273.30 |     0.00 |   283.81 |
| Line to Line Voltage (480v) |   473.37 |     0.00 |   491.58 |
| Current (AMPS) |  1507.58 |     0.00 |  2280.80 |
| Phase Angle (degrees) |    32.75 |    22.78 |    90.00 |
| Total Harmonic Distortion (PCT) |    16.44 |     3.00 |    31.31 |

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
| THD Phase A (%) | 5.5% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.5% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.5% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 16.4% | Field-level stress indicator |
| Max Phase THD | 5.5% | Highest THD among all three phases |
| Min Phase THD | 5.5% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,389.14 kW
  - **Maximum Load:** 1,811.43 kVA
  - **Percentage of Capacity (MAX):** 72.5%
- **Average Load:** 1,233.79 kVA
  - **Percentage of Capacity (Avg):** 49.4%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,233.79 kVA
- **Average Power Factor (PF):** 0.839

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,236.06 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 473.37 V
- Average Current (Iavg_A): 1507.58 A
- Average kW (Psum_kW): 1028.27 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 2.27 kVA (0.2%)
- **Calculated PF (kW/kVA from averages):** 0.832
- **Power Factor Difference:** 0.008 (0.9%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1233.79) and measured PF (0.839) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,233.79 |        49.4% | 673,033.79 kVA | 3,508,600.41 TOTAL-HEAT |
| kW | 1,028.27 |        41.1% | 560,920.83 kWh | 584,457.40 Load-Heat |
| kVAR |   681.84 |        27.3% | 371,943.96 kVARh | - |
| WASTE |   205.52 |         8.2% | 112,112.96 WASTE | 116,817.29 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,508,600.41
- **Load-Heat (BTU/hr):** 584,457.40
- **Field-Heat (BTU/hr):** 116,817.29
- **Load-Heat (BTU, period total):** 318,821,512.26
- **Field-Heat (BTU, period total):** 63,723,830.06

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 3 | 1,233.79 | 1,028.27 |   679.14 |     0.83 |   49.4% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,263.81 | 1,053.67 |   695.39 |     0.83 |   50.6% |
| 01 | 1,263.60 | 1,051.79 |   697.79 |     0.83 |   50.5% |
| 02 | 1,280.50 | 1,064.39 |   709.87 |     0.83 |   51.2% |
| 03 | 1,246.92 | 1,035.11 |   692.53 |     0.83 |   49.9% |
| 04 | 1,241.96 | 1,033.74 |   685.72 |     0.83 |   49.7% |
| 05 | 1,243.98 | 1,036.38 |   685.39 |     0.83 |   49.8% |
| 06 | 1,237.73 | 1,029.54 |   684.09 |     0.83 |   49.5% |
| 07 | 1,233.22 | 1,024.81 |   682.97 |     0.83 |   49.3% |
| 08 | 1,242.17 | 1,032.30 |   687.91 |     0.83 |   49.7% |
| 09 | 1,248.67 | 1,035.56 |   694.96 |     0.83 |   49.9% |
| 10 | 1,243.64 | 1,033.18 |   689.69 |     0.83 |   49.7% |
| 11 | 1,221.41 | 1,016.44 |   674.39 |     0.83 |   48.9% |
| 12 | 1,230.54 | 1,024.90 |   677.80 |     0.83 |   49.2% |
| 13 | 1,216.88 | 1,013.84 |   669.62 |     0.83 |   48.7% |
| 14 | 1,220.27 | 1,014.88 |   674.40 |     0.83 |   48.8% |
| 15 | 1,224.43 | 1,019.93 |   674.13 |     0.83 |   49.0% |
| 16 | 1,214.69 | 1,015.49 |   663.78 |     0.84 |   48.6% |
| 17 | 1,197.60 | 1,002.84 |   652.45 |     0.84 |   47.9% |
| 18 | 1,172.69 |   975.67 |   647.94 |     0.83 |   46.9% |
| 19 | 1,173.22 |   978.59 |   644.22 |     0.83 |   46.9% |
| 20 | 1,218.37 | 1,023.97 |   657.25 |     0.84 |   48.7% |
| 21 | 1,227.09 | 1,034.10 |   658.87 |     0.84 |   49.1% |
| 22 | 1,259.28 | 1,055.04 |   685.94 |     0.84 |   50.4% |
| 23 | 1,288.97 | 1,073.79 |   711.29 |     0.83 |   51.6% |

---

# END OF REPORT

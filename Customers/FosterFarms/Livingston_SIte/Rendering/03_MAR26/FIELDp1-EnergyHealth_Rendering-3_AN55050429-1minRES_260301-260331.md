# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 420,299.3 kWh (Usage per period)
- **Consumption Cost per unit:** $0.175/kWh (Cost per kWh)
- **Consumption Total Cost:** $73,426.29 (Cost per period)
- **Consumption Total Cost:** $98.89 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Rendering-3  
**Generated:** 2026-04-25 17:51:31  
**Data Source:** AN55050429-V-1minRES_44550CLP_260301-260331c.csv  

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

- **Transformer:** Rendering-3
- **Power Factor:** 0.771
- **Total Energy (Actual):** 420,299.30 kWh (per period), 566.06 kW (per hour)
- **Total Waste (Actual):** 124,462.96 kWh (per period), 167.63 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Rendering-3_AN55050429-1minRES_260301-260331.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Rendering-3_AN55050429-1minRES_260301-260331.md


## UNITY MANAGEMENT Rendering-3 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 167.63 kW/hr
- **Blended Electricity Rate:** $0.1747/kWh (all-inclusive)
- **Rendering-3 Utility Cost Offset:** $29.28/hour
- **Annual Offset Savings:** $256531/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 620,344 BTU/hr
- **Total Cooling kW No Longer Needed:** 54.35 kW
- **Cooling Energy Cost Avoided:** $9.49/hour
- **Annual Cooling Savings:** $83173/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 221.98 kW
- **CO2e Emissions Avoided:** 725.90 metric tons/year
- **Monthly CO2e Reduction:** 60.49 metric tons/month
- **Hourly CO2e Reduction:** 0.0829 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $27947/year

### Total Rendering-3 Unity Savings

- **Per Hour:** $41.97
- **Per Day:** $1007.27
- **Per Month:** $30217.97
- **Per Year:** $367652

### Rendering-3 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 858.8 kVAR Max (Avg: 466.8 kVAR/hr ; 336,073 kVAR/mo)
- **Max Harmonic Distortion:** 29.9% Max (range: 3.5% - 29.9%)
- **Max Amperage:** 1,377A Max (range: 0A - 1377A)

---

# Rendering-3 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   275.58 |     0.00 |   285.84 |
| Line to Line Voltage (480v) |   477.32 |     0.00 |   495.09 |
| Current (AMPS) |   887.70 |     0.00 |  1377.43 |
| Phase Angle (degrees) |    39.47 |    26.10 |    90.00 |
| Total Harmonic Distortion (PCT) |    16.26 |     3.50 |    29.92 |

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

- **Maximum UtilityDemand:** 802.65 kW
  - **Maximum Load:** 1,135.92 kVA
  - **Percentage of Capacity (MAX):** 45.4%
- **Average Load:** 733.69 kVA
  - **Percentage of Capacity (Avg):** 29.3%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 733.69 kVA
- **Average Power Factor (PF):** 0.771

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 733.90 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 477.32 V
- Average Current (Iavg_A): 887.70 A
- Average kW (Psum_kW): 566.06 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.22 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.771
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (733.69) and measured PF (0.771) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   733.69 |        29.3% | 544,762.26 kVA | 1,931,475.94 TOTAL-HEAT |
| kW |   566.06 |        22.6% | 420,299.30 kWh | 441,288.32 Load-Heat |
| kVAR |   466.77 |        18.7% | 346,575.28 kVARh | - |
| WASTE |   167.63 |         6.7% | 124,462.96 WASTE | 130,678.43 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,931,475.94
- **Load-Heat (BTU/hr):** 441,288.32
- **Field-Heat (BTU/hr):** 130,678.43
- **Load-Heat (BTU, period total):** 327,656,575.15
- **Field-Heat (BTU, period total):** 97,028,733.98

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 3 |   733.69 |   566.06 |   465.58 |     0.77 |   29.3% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   744.35 |   577.20 |   469.02 |     0.78 |   29.8% |
| 01 |   738.58 |   572.44 |   465.31 |     0.78 |   29.5% |
| 02 |   735.80 |   572.70 |   460.33 |     0.78 |   29.4% |
| 03 |   734.58 |   572.81 |   458.32 |     0.78 |   29.4% |
| 04 |   748.03 |   580.96 |   469.55 |     0.78 |   29.9% |
| 05 |   743.80 |   579.65 |   464.38 |     0.78 |   29.8% |
| 06 |   743.45 |   578.63 |   465.83 |     0.78 |   29.7% |
| 07 |   739.09 |   575.40 |   462.74 |     0.78 |   29.6% |
| 08 |   741.57 |   574.73 |   467.45 |     0.78 |   29.7% |
| 09 |   717.81 |   557.52 |   451.40 |     0.78 |   28.7% |
| 10 |   725.23 |   559.77 |   460.17 |     0.77 |   29.0% |
| 11 |   720.16 |   554.93 |   458.04 |     0.77 |   28.8% |
| 12 |   706.46 |   547.38 |   445.68 |     0.77 |   28.3% |
| 13 |   702.63 |   538.88 |   449.53 |     0.77 |   28.1% |
| 14 |   700.28 |   532.45 |   453.72 |     0.76 |   28.0% |
| 15 |   717.75 |   543.71 |   467.30 |     0.76 |   28.7% |
| 16 |   722.29 |   553.95 |   462.41 |     0.77 |   28.9% |
| 17 |   727.36 |   558.11 |   465.14 |     0.77 |   29.1% |
| 18 |   726.08 |   557.41 |   464.35 |     0.77 |   29.0% |
| 19 |   728.30 |   558.30 |   466.86 |     0.77 |   29.1% |
| 20 |   753.14 |   579.49 |   480.42 |     0.77 |   30.1% |
| 21 |   754.02 |   579.89 |   481.06 |     0.77 |   30.2% |
| 22 |   775.66 |   591.65 |   500.71 |     0.76 |   31.0% |
| 23 |   762.59 |   588.04 |   484.41 |     0.77 |   30.5% |

---

# END OF REPORT

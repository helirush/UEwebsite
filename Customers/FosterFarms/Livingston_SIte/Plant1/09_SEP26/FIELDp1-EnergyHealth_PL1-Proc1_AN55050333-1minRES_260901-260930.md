# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 114,134.0 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $22,256.13 (Cost per period)
- **Consumption Total Cost:** $34.10 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL1-Proc1  
**Generated:** 2026-10-08 00:53:13  
**Data Source:** AN55050333-V-260930.2359c.csv  

## Time Period

- **Period:** September 01, 2026 thru September 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 39,159

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

- **Transformer:** PL1-Proc1
- **Power Factor:** 0.857
- **Total Energy (Actual):** 114,134.01 kWh (per period), 174.88 kW (per hour)
- **Total Waste (Actual):** 18,884.47 kWh (per period), 28.94 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL1-Proc1_AN55050333-1minRES_260901-260930.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL1-Proc1_AN55050333-1minRES_260901-260930.md


## UNITY MANAGEMENT PL1-Proc1 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 28.94 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 17.45 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL1-Proc1 Utility Cost Offset:** $5.64/hour
- **Annual Offset Savings:** $49427/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 63,259 BTU/hr
- **Total Cooling kW No Longer Needed:** 5.54 kW
- **Cooling Energy Cost Avoided:** $1.08/hour
- **Annual Cooling Savings:** $9455/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 34.47 kW
- **CO2e Emissions Avoided:** 112.72 metric tons/year
- **Monthly CO2e Reduction:** 9.39 metric tons/month
- **Hourly CO2e Reduction:** 0.0129 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $4283/year

### Total PL1-Proc1 Unity Savings

- **Per Hour:** $7.21
- **Per Day:** $173.06
- **Per Month:** $5191.69
- **Per Year:** $63166

### PL1-Proc1 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 187.3 kVAR Max (Avg: 104.7 kVAR/hr ; 75,368 kVAR/mo)
- **Max Harmonic Distortion:** 31.8% Max (range: 3.0% - 31.8%)
- **Max Amperage:** 381A Max (range: 99A - 381A)

---

# PL1-Proc1 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   278.26 |   268.55 |   285.48 |
| Line to Line Voltage (480v) |   481.96 |   465.14 |   494.47 |
| Current (AMPS) |   244.40 |    99.19 |   381.28 |
| Phase Angle (degrees) |    30.86 |    19.27 |    51.98 |
| Total Harmonic Distortion (PCT) |    15.76 |     3.00 |    31.81 |

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
| THD Phase C (%) | 5.2% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 15.8% | Field-level stress indicator |
| Max Phase THD | 5.3% | Highest THD among all three phases |
| Min Phase THD | 5.2% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 279.24 kW
  - **Maximum Load:** 317.71 kVA
  - **Percentage of Capacity (MAX):** 12.7%
- **Average Load:** 203.81 kVA
  - **Percentage of Capacity (Avg):** 8.2%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 203.81 kVA
- **Average Power Factor (PF):** 0.857

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 204.03 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 481.96 V
- Average Current (Iavg_A): 244.40 A
- Average kW (Psum_kW): 174.88 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.21 kVA (0.1%)
- **Calculated PF (kW/kVA from averages):** 0.857
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (203.81) and measured PF (0.857) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   203.81 |         8.2% | 133,018.48 kVA | 596,707.97 TOTAL-HEAT |
| kW |   174.88 |         7.0% | 114,134.01 kWh | 84,713.88 Load-Heat |
| kVAR |   104.68 |         4.2% | 68,317.96 kVARh | - |
| WASTE |    28.94 |         1.2% | 18,884.47 WASTE | 14,016.65 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 596,707.97
- **Load-Heat (BTU/hr):** 84,713.88
- **Field-Heat (BTU/hr):** 14,016.65
- **Load-Heat (BTU, period total):** 55,288,516.13
- **Field-Heat (BTU, period total):** 9,147,966.86

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 9 |   203.81 |   174.88 |   104.03 |     0.86 |    8.2% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   206.20 |   175.08 |   108.40 |     0.85 |    8.2% |
| 01 |   213.85 |   181.81 |   112.12 |     0.85 |    8.6% |
| 02 |   214.99 |   182.98 |   112.42 |     0.85 |    8.6% |
| 03 |   213.56 |   181.92 |   111.39 |     0.85 |    8.5% |
| 04 |   213.27 |   181.80 |   110.99 |     0.85 |    8.5% |
| 05 |   215.86 |   184.63 |   111.28 |     0.86 |    8.6% |
| 06 |   215.26 |   184.09 |   111.07 |     0.86 |    8.6% |
| 07 |   212.90 |   182.12 |   109.65 |     0.86 |    8.5% |
| 08 |   211.86 |   180.34 |   110.56 |     0.85 |    8.5% |
| 09 |   204.79 |   173.90 |   107.57 |     0.85 |    8.2% |
| 10 |   201.27 |   170.97 |   105.41 |     0.85 |    8.1% |
| 11 |   189.71 |   161.54 |    98.82 |     0.85 |    7.6% |
| 12 |   176.66 |   150.90 |    91.29 |     0.85 |    7.1% |
| 13 |   170.28 |   145.07 |    88.61 |     0.85 |    6.8% |
| 14 |   206.35 |   180.56 |    99.51 |     0.88 |    8.3% |
| 15 |   211.38 |   185.94 |   100.18 |     0.88 |    8.5% |
| 16 |   200.47 |   177.01 |    93.77 |     0.88 |    8.0% |
| 17 |   190.66 |   167.89 |    89.94 |     0.88 |    7.6% |
| 18 |   189.96 |   166.48 |    91.09 |     0.88 |    7.6% |
| 19 |   193.93 |   168.89 |    94.71 |     0.87 |    7.8% |
| 20 |   208.52 |   178.54 |   107.02 |     0.86 |    8.3% |
| 21 |   211.83 |   179.47 |   111.88 |     0.85 |    8.5% |
| 22 |   210.53 |   178.46 |   111.05 |     0.85 |    8.4% |
| 23 |   207.54 |   175.82 |   109.61 |     0.85 |    8.3% |

---

# END OF REPORT

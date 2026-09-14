# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 135,203.1 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $26,364.60 (Cost per period)
- **Consumption Total Cost:** $37.90 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL1-Proc1  
**Generated:** 2026-09-12 13:39:19  
**Data Source:** AN55050333-V-1minRES_44640CLP_260801-260831c.csv  

## Time Period

- **Period:** August 01, 2026 thru August 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 41,737

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

- **Transformer:** PL1-Proc1
- **Power Factor:** 0.867
- **Total Energy (Actual):** 135,203.09 kWh (per period), 194.36 kW (per hour)
- **Total Waste (Actual):** 20,458.24 kWh (per period), 29.41 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL1-Proc1_AN55050333-1minRES_260801-260831.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL1-Proc1_AN55050333-1minRES_260801-260831.md


## UNITY MANAGEMENT PL1-Proc1 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 29.41 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 17.28 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL1-Proc1 Utility Cost Offset:** $5.73/hour
- **Annual Offset Savings:** $50239/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 62,542 BTU/hr
- **Total Cooling kW No Longer Needed:** 5.59 kW
- **Cooling Energy Cost Avoided:** $1.09/hour
- **Annual Cooling Savings:** $9540/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 35.00 kW
- **CO2e Emissions Avoided:** 114.44 metric tons/year
- **Monthly CO2e Reduction:** 9.54 metric tons/month
- **Hourly CO2e Reduction:** 0.0131 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $4349/year

### Total PL1-Proc1 Unity Savings

- **Per Hour:** $7.32
- **Per Day:** $175.69
- **Per Month:** $5270.77
- **Per Year:** $64128

### PL1-Proc1 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 226.8 kVAR Max (Avg: 110.9 kVAR/hr ; 79,844 kVAR/mo)
- **Max Harmonic Distortion:** 29.6% Max (range: 3.0% - 29.6%)
- **Max Amperage:** 430A Max (range: 103A - 430A)

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
| Line to Neutral Voltage (277v) |   278.17 |   271.35 |   284.24 |
| Line to Line Voltage (480v) |   481.80 |   470.00 |   492.32 |
| Current (AMPS) |   268.44 |   103.19 |   429.72 |
| Phase Angle (degrees) |    29.64 |    18.19 |    49.83 |
| Total Harmonic Distortion (PCT) |    15.50 |     3.00 |    29.62 |

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

- **Maximum UtilityDemand:** 312.72 kW
  - **Maximum Load:** 347.90 kVA
  - **Percentage of Capacity (MAX):** 13.9%
- **Average Load:** 223.77 kVA
  - **Percentage of Capacity (Avg):** 9.0%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 223.77 kVA
- **Average Power Factor (PF):** 0.867

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 224.01 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 481.80 V
- Average Current (Iavg_A): 268.44 A
- Average kW (Psum_kW): 194.36 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.24 kVA (0.1%)
- **Calculated PF (kW/kVA from averages):** 0.868
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (223.77) and measured PF (0.867) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   223.77 |         9.0% | 155,661.33 kVA | 663,198.80 TOTAL-HEAT |
| kW |   194.36 |         7.8% | 135,203.09 kWh | 87,162.83 Load-Heat |
| kVAR |   110.89 |         4.4% | 77,139.97 kVARh | - |
| WASTE |    29.41 |         1.2% | 20,458.24 WASTE | 13,189.03 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 663,198.80
- **Load-Heat (BTU/hr):** 87,162.83
- **Field-Heat (BTU/hr):** 13,189.03
- **Load-Heat (BTU, period total):** 60,631,913.92
- **Field-Heat (BTU, period total):** 9,174,511.86

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 8 |   223.77 |   194.36 |   110.15 |     0.87 |    9.0% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   224.18 |   193.36 |   112.77 |     0.86 |    9.0% |
| 01 |   229.97 |   197.82 |   116.60 |     0.86 |    9.2% |
| 02 |   230.80 |   198.64 |   116.82 |     0.86 |    9.2% |
| 03 |   230.38 |   198.29 |   116.62 |     0.86 |    9.2% |
| 04 |   231.48 |   199.90 |   116.09 |     0.86 |    9.3% |
| 05 |   235.00 |   202.83 |   117.99 |     0.86 |    9.4% |
| 06 |   235.30 |   202.95 |   118.30 |     0.86 |    9.4% |
| 07 |   231.46 |   199.81 |   116.08 |     0.86 |    9.3% |
| 08 |   231.20 |   199.14 |   116.77 |     0.86 |    9.2% |
| 09 |   223.53 |   192.90 |   112.17 |     0.86 |    8.9% |
| 10 |   222.92 |   192.54 |   111.62 |     0.86 |    8.9% |
| 11 |   208.72 |   181.33 |   102.56 |     0.87 |    8.3% |
| 12 |   196.48 |   170.45 |    97.00 |     0.87 |    7.9% |
| 13 |   191.77 |   166.00 |    95.35 |     0.87 |    7.7% |
| 14 |   218.61 |   192.60 |   102.91 |     0.88 |    8.7% |
| 15 |   221.20 |   195.17 |   103.72 |     0.88 |    8.8% |
| 16 |   215.89 |   192.04 |    98.30 |     0.89 |    8.6% |
| 17 |   211.29 |   187.95 |    96.18 |     0.89 |    8.5% |
| 18 |   213.20 |   189.67 |    96.99 |     0.89 |    8.5% |
| 19 |   223.51 |   197.20 |   104.50 |     0.88 |    8.9% |
| 20 |   236.37 |   205.56 |   115.68 |     0.87 |    9.5% |
| 21 |   235.62 |   202.82 |   119.23 |     0.86 |    9.4% |
| 22 |   234.09 |   201.06 |   119.26 |     0.86 |    9.4% |
| 23 |   235.40 |   202.40 |   119.59 |     0.86 |    9.4% |

---

# END OF REPORT

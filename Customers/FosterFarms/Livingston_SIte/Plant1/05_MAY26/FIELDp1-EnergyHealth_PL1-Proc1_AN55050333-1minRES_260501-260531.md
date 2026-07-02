# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 115,912.5 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $22,602.94 (Cost per period)
- **Consumption Total Cost:** $30.89 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL1-Proc1  
**Generated:** 2026-06-18 23:48:24  
**Data Source:** AN55050333-V-1minRES_44640CLP_260501-260531c.csv  

## Time Period

- **Period:** May 01, 2026 thru May 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,899

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
- **Power Factor:** 0.849
- **Total Energy (Actual):** 115,912.49 kWh (per period), 158.43 kW (per hour)
- **Total Waste (Actual):** 20,783.37 kWh (per period), 28.41 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL1-Proc1_AN55050333-1minRES_260501-260531.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL1-Proc1_AN55050333-1minRES_260501-260531.md


## UNITY MANAGEMENT PL1-Proc1 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 28.41 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL1-Proc1 Utility Cost Offset:** $5.54/hour
- **Annual Offset Savings:** $48523/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 102,557 BTU/hr
- **Total Cooling kW No Longer Needed:** 8.97 kW
- **Cooling Energy Cost Avoided:** $1.75/hour
- **Annual Cooling Savings:** $15329/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 37.38 kW
- **CO2e Emissions Avoided:** 122.24 metric tons/year
- **Monthly CO2e Reduction:** 10.19 metric tons/month
- **Hourly CO2e Reduction:** 0.0140 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $4706/year

### Total PL1-Proc1 Unity Savings

- **Per Hour:** $7.83
- **Per Day:** $187.83
- **Per Month:** $5634.95
- **Per Year:** $68559

### PL1-Proc1 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 177.8 kVAR Max (Avg: 99.0 kVAR/hr ; 71,304 kVAR/mo)
- **Max Harmonic Distortion:** 28.1% Max (range: 3.4% - 28.1%)
- **Max Amperage:** 354A Max (range: 77A - 354A)

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
| Line to Neutral Voltage (277v) |   278.76 |   266.76 |   291.06 |
| Line to Line Voltage (480v) |   482.82 |   462.04 |   504.13 |
| Current (AMPS) |   223.78 |    76.96 |   353.97 |
| Phase Angle (degrees) |    31.65 |    22.18 |    52.12 |
| Total Harmonic Distortion (PCT) |    15.00 |     3.40 |    28.06 |

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
| THD Phase A (%) | 5.0% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.0% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.0% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 15.0% | Field-level stress indicator |
| Max Phase THD | 5.0% | Highest THD among all three phases |
| Min Phase THD | 5.0% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 259.37 kW
  - **Maximum Load:** 298.20 kVA
  - **Percentage of Capacity (MAX):** 11.9%
- **Average Load:** 186.83 kVA
  - **Percentage of Capacity (Avg):** 7.5%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 186.83 kVA
- **Average Power Factor (PF):** 0.849

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 187.14 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 482.82 V
- Average Current (Iavg_A): 223.78 A
- Average kW (Psum_kW): 158.43 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.31 kVA (0.2%)
- **Calculated PF (kW/kVA from averages):** 0.847
- **Power Factor Difference:** 0.003 (0.3%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (186.83) and measured PF (0.849) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   186.83 |         7.5% | 136,695.86 kVA | 540,572.52 TOTAL-HEAT |
| kW |   158.43 |         6.3% | 115,912.49 kWh | 82,189.17 Load-Heat |
| kVAR |    99.03 |         4.0% | 72,457.25 kVARh | - |
| WASTE |    28.41 |         1.1% | 20,783.37 WASTE | 14,736.70 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 540,572.52
- **Load-Heat (BTU/hr):** 82,189.17
- **Field-Heat (BTU/hr):** 14,736.70
- **Load-Heat (BTU, period total):** 60,133,703.75
- **Field-Heat (BTU, period total):** 10,782,108.46

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 5 |   186.83 |   158.43 |    98.26 |     0.85 |    7.5% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   186.82 |   157.25 |   100.26 |     0.84 |    7.5% |
| 01 |   192.42 |   161.26 |   104.40 |     0.84 |    7.7% |
| 02 |   191.73 |   160.43 |   104.38 |     0.84 |    7.7% |
| 03 |   192.39 |   160.90 |   104.86 |     0.84 |    7.7% |
| 04 |   190.43 |   159.73 |   103.07 |     0.84 |    7.6% |
| 05 |   189.76 |   159.28 |   102.37 |     0.84 |    7.6% |
| 06 |   188.30 |   157.68 |   102.16 |     0.84 |    7.5% |
| 07 |   183.34 |   153.52 |    99.31 |     0.84 |    7.3% |
| 08 |   184.65 |   154.47 |   100.31 |     0.84 |    7.4% |
| 09 |   181.99 |   152.68 |    98.29 |     0.84 |    7.3% |
| 10 |   186.35 |   156.13 |   101.00 |     0.84 |    7.5% |
| 11 |   184.78 |   154.75 |   100.25 |     0.84 |    7.4% |
| 12 |   181.61 |   151.84 |    98.96 |     0.84 |    7.3% |
| 13 |   177.31 |   149.33 |    95.03 |     0.84 |    7.1% |
| 14 |   179.95 |   155.19 |    90.66 |     0.86 |    7.2% |
| 15 |   185.09 |   160.38 |    91.91 |     0.87 |    7.4% |
| 16 |   180.86 |   158.25 |    87.23 |     0.87 |    7.2% |
| 17 |   175.50 |   153.64 |    84.44 |     0.88 |    7.0% |
| 18 |   175.66 |   154.09 |    84.06 |     0.88 |    7.0% |
| 19 |   180.75 |   157.43 |    88.39 |     0.87 |    7.2% |
| 20 |   197.73 |   169.67 |   100.75 |     0.86 |    7.9% |
| 21 |   202.41 |   171.79 |   106.22 |     0.85 |    8.1% |
| 22 |   199.74 |   168.55 |   106.35 |     0.84 |    8.0% |
| 23 |   194.00 |   163.33 |   103.88 |     0.84 |    7.8% |

---

# END OF REPORT

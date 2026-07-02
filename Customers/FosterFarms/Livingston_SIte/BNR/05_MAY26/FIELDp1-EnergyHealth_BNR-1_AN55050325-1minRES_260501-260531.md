# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 954,202.2 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $186,069.43 (Cost per period)
- **Consumption Total Cost:** $261.48 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** BNR-1  
**Generated:** 2026-06-18 23:45:55  
**Data Source:** AN55050325-V-1minRES_44640CLP_260501-260531c.csv  

## Time Period

- **Period:** May 01, 2026 thru May 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 42,696

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

- **Transformer:** BNR-1
- **Power Factor:** 0.898
- **Total Energy (Actual):** 954,202.19 kWh (per period), 1340.92 kW (per hour)
- **Total Waste (Actual):** 108,791.93 kWh (per period), 152.88 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_BNR-1_AN55050325-1minRES_260501-260531.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_BNR-1_AN55050325-1minRES_260501-260531.md


## UNITY MANAGEMENT BNR-1 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 152.88 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **BNR-1 Utility Cost Offset:** $29.81/hour
- **Annual Offset Savings:** $261156/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 579,808 BTU/hr
- **Total Cooling kW No Longer Needed:** 50.73 kW
- **Cooling Energy Cost Avoided:** $9.89/hour
- **Annual Cooling Savings:** $86662/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 203.62 kW
- **CO2e Emissions Avoided:** 665.86 metric tons/year
- **Monthly CO2e Reduction:** 55.49 metric tons/month
- **Hourly CO2e Reduction:** 0.0760 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $25636/year

### Total BNR-1 Unity Savings

- **Per Hour:** $42.63
- **Per Day:** $1023.16
- **Per Month:** $30694.83
- **Per Year:** $373454

### BNR-1 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 723.8 kVAR Max (Avg: 658.3 kVAR/hr ; 473,990 kVAR/mo)
- **Max Harmonic Distortion:** 32.0% Max (range: 4.0% - 32.0%)
- **Max Amperage:** 2,006A Max (range: 1642A - 2006A)

---

# BNR-1 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   273.91 |   263.76 |   283.83 |
| Line to Line Voltage (480v) |   474.43 |   456.85 |   491.61 |
| Current (AMPS) |  1817.33 |  1642.30 |  2006.36 |
| Phase Angle (degrees) |    26.15 |    24.91 |    27.87 |
| Total Harmonic Distortion (PCT) |    17.26 |     4.04 |    31.99 |

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
| THD Phase A (%) | 5.8% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.8% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.7% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 17.3% | Field-level stress indicator |
| Max Phase THD | 5.8% | Highest THD among all three phases |
| Min Phase THD | 5.7% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,469.31 kW
  - **Maximum Load:** 1,632.55 kVA
  - **Percentage of Capacity (MAX):** 65.3%
- **Average Load:** 1,493.81 kVA
  - **Percentage of Capacity (Avg):** 59.8%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,493.81 kVA
- **Average Power Factor (PF):** 0.898

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,493.37 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 474.43 V
- Average Current (Iavg_A): 1817.33 A
- Average kW (Psum_kW): 1340.92 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.44 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.898
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1493.81) and measured PF (0.898) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,493.81 |        59.8% | 1,062,994.12 kVA | 4,575,426.32 TOTAL-HEAT |
| kW | 1,340.92 |        53.6% | 954,202.19 kWh | 468,271.13 Load-Heat |
| kVAR |   658.32 |        26.3% | 468,459.90 kVARh | - |
| WASTE |   152.88 |         6.1% | 108,791.93 WASTE | 53,389.23 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 4,575,426.32
- **Load-Heat (BTU/hr):** 468,271.13
- **Field-Heat (BTU/hr):** 53,389.23
- **Load-Heat (BTU, period total):** 333,221,737.31
- **Field-Heat (BTU, period total):** 37,991,776.05

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 5 | 1,493.81 | 1,340.92 |   658.26 |     0.90 |   59.8% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,494.00 | 1,341.52 |   657.48 |     0.90 |   59.8% |
| 01 | 1,497.09 | 1,343.84 |   659.76 |     0.90 |   59.9% |
| 02 | 1,495.63 | 1,342.15 |   659.89 |     0.90 |   59.8% |
| 03 | 1,492.03 | 1,338.98 |   658.15 |     0.90 |   59.7% |
| 04 | 1,490.82 | 1,338.26 |   656.88 |     0.90 |   59.6% |
| 05 | 1,489.76 | 1,337.60 |   655.80 |     0.90 |   59.6% |
| 06 | 1,488.39 | 1,336.41 |   655.15 |     0.90 |   59.5% |
| 07 | 1,490.23 | 1,337.96 |   656.18 |     0.90 |   59.6% |
| 08 | 1,491.75 | 1,339.56 |   656.36 |     0.90 |   59.7% |
| 09 | 1,486.78 | 1,334.61 |   655.20 |     0.90 |   59.5% |
| 10 | 1,489.93 | 1,336.42 |   658.64 |     0.90 |   59.6% |
| 11 | 1,492.49 | 1,338.72 |   659.75 |     0.90 |   59.7% |
| 12 | 1,491.17 | 1,337.61 |   659.04 |     0.90 |   59.6% |
| 13 | 1,492.31 | 1,338.78 |   659.24 |     0.90 |   59.7% |
| 14 | 1,500.07 | 1,345.83 |   662.50 |     0.90 |   60.0% |
| 15 | 1,497.44 | 1,343.63 |   661.03 |     0.90 |   59.9% |
| 16 | 1,496.75 | 1,343.38 |   659.94 |     0.90 |   59.9% |
| 17 | 1,498.39 | 1,344.99 |   660.39 |     0.90 |   59.9% |
| 18 | 1,498.64 | 1,345.18 |   660.57 |     0.90 |   59.9% |
| 19 | 1,495.64 | 1,342.73 |   658.73 |     0.90 |   59.8% |
| 20 | 1,497.21 | 1,345.37 |   656.92 |     0.90 |   59.9% |
| 21 | 1,496.56 | 1,344.72 |   656.77 |     0.90 |   59.9% |
| 22 | 1,495.75 | 1,343.51 |   657.40 |     0.90 |   59.8% |
| 23 | 1,493.29 | 1,341.15 |   656.61 |     0.90 |   59.7% |

---

# END OF REPORT

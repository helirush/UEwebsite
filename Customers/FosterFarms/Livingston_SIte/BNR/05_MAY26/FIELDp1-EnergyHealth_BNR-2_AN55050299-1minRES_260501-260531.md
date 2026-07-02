# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 11,320.6 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $2,207.51 (Cost per period)
- **Consumption Total Cost:** $3.10 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** BNR-2  
**Generated:** 2026-06-18 23:45:43  
**Data Source:** AN55050299-V-1minRES_44640CLP_260501-260531c.csv  

## Time Period

- **Period:** May 01, 2026 thru May 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 42,752

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

- **Transformer:** BNR-2
- **Power Factor:** 0.965
- **Total Energy (Actual):** 11,320.57 kWh (per period), 15.89 kW (per hour)
- **Total Waste (Actual):** 415.66 kWh (per period), 0.58 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_BNR-2_AN55050299-1minRES_260501-260531.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_BNR-2_AN55050299-1minRES_260501-260531.md


## UNITY MANAGEMENT BNR-2 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 0.58 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **BNR-2 Utility Cost Offset:** $0.11/hour
- **Annual Offset Savings:** $996/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 2,134 BTU/hr
- **Total Cooling kW No Longer Needed:** 0.19 kW
- **Cooling Energy Cost Avoided:** $0.04/hour
- **Annual Cooling Savings:** $319/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 0.77 kW
- **CO2e Emissions Avoided:** 2.52 metric tons/year
- **Monthly CO2e Reduction:** 0.21 metric tons/month
- **Hourly CO2e Reduction:** 0.0003 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $97/year

### Total BNR-2 Unity Savings

- **Per Hour:** $0.16
- **Per Day:** $3.87
- **Per Month:** $116.08
- **Per Year:** $1412

### BNR-2 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 4.9 kVAR Max (Avg: 4.3 kVAR/hr ; 3,128 kVAR/mo)
- **Max Harmonic Distortion:** 34.7% Max (range: 3.8% - 34.7%)
- **Max Amperage:** 22A Max (range: 18A - 22A)

---

# BNR-2 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   279.50 |   269.35 |   289.28 |
| Line to Line Voltage (480v) |   484.11 |   466.53 |   501.06 |
| Current (AMPS) |    19.65 |    17.91 |    21.58 |
| Phase Angle (degrees) |    15.29 |    13.09 |    17.06 |
| Total Harmonic Distortion (PCT) |    17.30 |     3.82 |    34.66 |

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
| THD Phase C (%) | 5.8% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 17.3% | Field-level stress indicator |
| Max Phase THD | 5.8% | Highest THD among all three phases |
| Min Phase THD | 5.8% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 17.34 kW
  - **Maximum Load:** 17.95 kVA
  - **Percentage of Capacity (MAX):** 0.7%
- **Average Load:** 16.47 kVA
  - **Percentage of Capacity (Avg):** 0.7%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 16.47 kVA
- **Average Power Factor (PF):** 0.965

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 16.48 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 484.11 V
- Average Current (Iavg_A): 19.65 A
- Average kW (Psum_kW): 15.89 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.01 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.964
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (16.47) and measured PF (0.965) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |    16.47 |         0.7% | 11,736.23 kVA | 54,211.36 TOTAL-HEAT |
| kW |    15.89 |         0.6% | 11,320.57 kWh | 1,919.98 Load-Heat |
| kVAR |     4.34 |         0.2% | 3,095.76 kVARh | - |
| WASTE |     0.58 |         0.0% | 415.66 WASTE | 70.50 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 54,211.36
- **Load-Heat (BTU/hr):** 1,919.98
- **Field-Heat (BTU/hr):** 70.50
- **Load-Heat (BTU, period total):** 1,368,051.97
- **Field-Heat (BTU, period total):** 50,230.79

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 5 |    16.47 |    15.89 |     4.34 |     0.96 |    0.7% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |    16.50 |    15.90 |     4.40 |     0.96 |    0.7% |
| 01 |    16.54 |    15.94 |     4.41 |     0.96 |    0.7% |
| 02 |    16.53 |    15.93 |     4.41 |     0.96 |    0.7% |
| 03 |    16.50 |    15.91 |     4.39 |     0.96 |    0.7% |
| 04 |    16.49 |    15.90 |     4.37 |     0.96 |    0.7% |
| 05 |    16.46 |    15.88 |     4.36 |     0.96 |    0.7% |
| 06 |    16.42 |    15.83 |     4.34 |     0.96 |    0.7% |
| 07 |    16.44 |    15.86 |     4.32 |     0.96 |    0.7% |
| 08 |    16.46 |    15.89 |     4.29 |     0.97 |    0.7% |
| 09 |    16.40 |    15.84 |     4.25 |     0.97 |    0.7% |
| 10 |    16.43 |    15.87 |     4.27 |     0.97 |    0.7% |
| 11 |    16.46 |    15.90 |     4.26 |     0.97 |    0.7% |
| 12 |    16.45 |    15.89 |     4.25 |     0.97 |    0.7% |
| 13 |    16.45 |    15.89 |     4.25 |     0.97 |    0.7% |
| 14 |    16.52 |    15.95 |     4.28 |     0.97 |    0.7% |
| 15 |    16.48 |    15.91 |     4.29 |     0.97 |    0.7% |
| 16 |    16.47 |    15.89 |     4.31 |     0.96 |    0.7% |
| 17 |    16.48 |    15.89 |     4.36 |     0.96 |    0.7% |
| 18 |    16.47 |    15.87 |     4.41 |     0.96 |    0.7% |
| 19 |    16.45 |    15.85 |     4.42 |     0.96 |    0.7% |
| 20 |    16.49 |    15.89 |     4.40 |     0.96 |    0.7% |
| 21 |    16.49 |    15.89 |     4.40 |     0.96 |    0.7% |
| 22 |    16.48 |    15.88 |     4.40 |     0.96 |    0.7% |
| 23 |    16.48 |    15.88 |     4.39 |     0.96 |    0.7% |

---

# END OF REPORT

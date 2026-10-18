# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 486,029.0 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $94,775.66 (Cost per period)
- **Consumption Total Cost:** $131.65 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Deli F  
**Generated:** 2026-10-08 00:57:19  
**Data Source:** AN55050323-V-260930.2359c.csv  

## Time Period

- **Period:** September 01, 2026 thru September 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,194

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

- **Transformer:** Deli F
- **Power Factor:** 0.866
- **Total Energy (Actual):** 486,029.03 kWh (per period), 675.13 kW (per hour)
- **Total Waste (Actual):** 56,555.64 kWh (per period), 78.56 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Deli-F_AN55050323-1minRES_260901-260930.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Deli-F_AN55050323-1minRES_260901-260930.md


## UNITY MANAGEMENT Deli F SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 78.56 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 46.07 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Deli F Utility Cost Offset:** $15.32/hour
- **Annual Offset Savings:** $134197/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 165,794 BTU/hr
- **Total Cooling kW No Longer Needed:** 14.51 kW
- **Cooling Energy Cost Avoided:** $2.83/hour
- **Annual Cooling Savings:** $24781/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 93.07 kW
- **CO2e Emissions Avoided:** 304.35 metric tons/year
- **Monthly CO2e Reduction:** 25.36 metric tons/month
- **Hourly CO2e Reduction:** 0.0347 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $11565/year

### Total Deli F Unity Savings

- **Per Hour:** $19.47
- **Per Day:** $467.24
- **Per Month:** $14017.22
- **Per Year:** $170543

### Deli F Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,598.1 kVAR Max (Avg: 335.0 kVAR/hr ; 241,226 kVAR/mo)
- **Max Harmonic Distortion:** 28.7% Max (range: 3.0% - 28.7%)
- **Max Amperage:** 2,252A Max (range: 18A - 2252A)

---

# Deli F DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   277.67 |   262.54 |   289.62 |
| Line to Line Voltage (480v) |   480.93 |   454.73 |   501.63 |
| Current (AMPS) |   908.11 |    17.98 |  2252.27 |
| Phase Angle (degrees) |    29.56 |     0.00 |    80.68 |
| Total Harmonic Distortion (PCT) |    14.42 |     3.03 |    28.73 |

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
| THD Phase A (%) | 4.8% | IEEE standard per-phase calculation |
| THD Phase B (%) | 4.8% | IEEE standard per-phase calculation |
| THD Phase C (%) | 4.8% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 14.4% | Field-level stress indicator |
| Max Phase THD | 4.8% | Highest THD among all three phases |
| Min Phase THD | 4.8% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,673.45 kW
  - **Maximum Load:** 1,864.16 kVA
  - **Percentage of Capacity (MAX):** 74.6%
- **Average Load:** 753.69 kVA
  - **Percentage of Capacity (Avg):** 30.1%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 753.69 kVA
- **Average Power Factor (PF):** 0.866

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 756.46 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 480.93 V
- Average Current (Iavg_A): 908.11 A
- Average kW (Psum_kW): 675.13 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 2.76 kVA (0.4%)
- **Calculated PF (kW/kVA from averages):** 0.892
- **Power Factor Difference:** 0.027 (3.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (753.69) and measured PF (0.866) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   753.69 |        30.1% | 542,584.67 kVA | 2,303,653.36 TOTAL-HEAT |
| kW |   675.13 |        27.0% | 486,029.03 kWh | 240,118.46 Load-Heat |
| kVAR |   335.04 |        13.4% | 241,192.68 kVARh | - |
| WASTE |    78.56 |         3.1% | 56,555.64 WASTE | 27,940.83 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,303,653.36
- **Load-Heat (BTU/hr):** 240,118.46
- **Field-Heat (BTU/hr):** 27,940.83
- **Load-Heat (BTU, period total):** 172,861,279.90
- **Field-Heat (BTU, period total):** 20,114,602.61

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 9 |   753.69 |   675.13 |   331.14 |     0.90 |   30.1% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   623.64 |   514.84 |   351.44 |     0.83 |   24.9% |
| 01 |   255.04 |   205.69 |   150.18 |     0.81 |   10.2% |
| 02 |    49.02 |    41.18 |    26.21 |     0.84 |    2.0% |
| 03 |    52.77 |    44.03 |    28.80 |     0.83 |    2.1% |
| 04 |    39.18 |    32.67 |    21.00 |     0.83 |    1.6% |
| 05 |   174.27 |   136.94 |   106.51 |     0.79 |    7.0% |
| 06 |   905.93 |   816.35 |   385.40 |     0.90 |   36.2% |
| 07 |   950.72 |   860.52 |   402.38 |     0.91 |   38.0% |
| 08 |   929.27 |   832.40 |   410.27 |     0.90 |   37.2% |
| 09 |   971.55 |   881.22 |   407.60 |     0.91 |   38.9% |
| 10 |   884.95 |   783.35 |   407.76 |     0.89 |   35.4% |
| 11 |   945.76 |   854.50 |   403.49 |     0.90 |   37.8% |
| 12 |   986.12 |   892.92 |   416.45 |     0.91 |   39.4% |
| 13 |   955.09 |   862.77 |   407.60 |     0.90 |   38.2% |
| 14 |   990.51 |   899.13 |   413.72 |     0.91 |   39.6% |
| 15 |   904.34 |   805.68 |   407.02 |     0.89 |   36.2% |
| 16 |   954.44 |   865.21 |   401.32 |     0.91 |   38.2% |
| 17 |   969.39 |   874.93 |   414.70 |     0.90 |   38.8% |
| 18 |   960.30 |   870.50 |   403.67 |     0.91 |   38.4% |
| 19 |   921.66 |   828.55 |   400.22 |     0.90 |   36.9% |
| 20 |   897.32 |   808.99 |   385.89 |     0.90 |   35.9% |
| 21 |   972.59 |   882.40 |   407.28 |     0.91 |   38.9% |
| 22 |   921.10 |   826.63 |   402.70 |     0.90 |   36.8% |
| 23 |   873.40 |   781.53 |   385.58 |     0.89 |   34.9% |

---

# END OF REPORT

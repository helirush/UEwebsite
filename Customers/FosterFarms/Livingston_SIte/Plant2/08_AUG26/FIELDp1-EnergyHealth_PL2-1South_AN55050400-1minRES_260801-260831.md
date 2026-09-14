# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 602,087.6 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $117,407.09 (Cost per period)
- **Consumption Total Cost:** $157.97 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL2-1South  
**Generated:** 2026-09-12 13:39:42  
**Data Source:** AN55050400-V-1minRES_44640CLP_260801-260831c.csv  

## Time Period

- **Period:** August 01, 2026 thru August 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,594

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

- **Transformer:** PL2-1South
- **Power Factor:** 0.860
- **Total Energy (Actual):** 602,087.62 kWh (per period), 810.09 kW (per hour)
- **Total Waste (Actual):** 97,189.56 kWh (per period), 130.77 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL2-1South_AN55050400-1minRES_260801-260831.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL2-1South_AN55050400-1minRES_260801-260831.md


## UNITY MANAGEMENT PL2-1South SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 130.77 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 77.98 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL2-1South Utility Cost Offset:** $25.50/hour
- **Annual Offset Savings:** $223374/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 281,701 BTU/hr
- **Total Cooling kW No Longer Needed:** 25.16 kW
- **Cooling Energy Cost Avoided:** $4.91/hour
- **Annual Cooling Savings:** $42973/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 155.92 kW
- **CO2e Emissions Avoided:** 509.89 metric tons/year
- **Monthly CO2e Reduction:** 42.49 metric tons/month
- **Hourly CO2e Reduction:** 0.0582 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $19376/year

### Total PL2-1South Unity Savings

- **Per Hour:** $32.62
- **Per Day:** $782.80
- **Per Month:** $23484.07
- **Per Year:** $285723

### PL2-1South Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,524.0 kVAR Max (Avg: 478.5 kVAR/hr ; 344,522 kVAR/mo)
- **Max Harmonic Distortion:** 29.0% Max (range: 3.0% - 29.0%)
- **Max Amperage:** 2,144A Max (range: 271A - 2144A)

---

# PL2-1South DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   279.43 |   267.93 |   290.84 |
| Line to Line Voltage (480v) |   483.98 |   464.06 |   503.75 |
| Current (AMPS) |  1125.24 |   271.49 |  2143.91 |
| Phase Angle (degrees) |    30.58 |    20.77 |    66.30 |
| Total Harmonic Distortion (PCT) |    15.11 |     3.00 |    29.02 |

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
| Unity THD Composite (%) | 15.1% | Field-level stress indicator |
| Max Phase THD | 5.0% | Highest THD among all three phases |
| Min Phase THD | 5.0% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,566.70 kW
  - **Maximum Load:** 1,771.17 kVA
  - **Percentage of Capacity (MAX):** 70.8%
- **Average Load:** 940.86 kVA
  - **Percentage of Capacity (Avg):** 37.6%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 940.86 kVA
- **Average Power Factor (PF):** 0.860

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 943.26 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 483.98 V
- Average Current (Iavg_A): 1125.24 A
- Average kW (Psum_kW): 810.09 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 2.40 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.859
- **Power Factor Difference:** 0.001 (0.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (940.86) and measured PF (0.860) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   940.86 |        37.6% | 699,277.18 kVA | 2,764,150.03 TOTAL-HEAT |
| kW |   810.09 |        32.4% | 602,087.62 kWh | 384,177.46 Load-Heat |
| kVAR |   478.50 |        19.1% | 355,638.96 kVARh | - |
| WASTE |   130.77 |         5.2% | 97,189.56 WASTE | 62,014.29 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,764,150.03
- **Load-Heat (BTU/hr):** 384,177.46
- **Field-Heat (BTU/hr):** 62,014.29
- **Load-Heat (BTU, period total):** 285,533,493.03
- **Field-Heat (BTU, period total):** 46,091,090.62

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 8 |   940.86 |   810.09 |   477.25 |     0.86 |   37.6% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,002.71 |   863.12 |   509.38 |     0.86 |   40.1% |
| 01 |   977.09 |   839.52 |   498.83 |     0.86 |   39.1% |
| 02 |   991.57 |   854.30 |   502.43 |     0.86 |   39.7% |
| 03 |   983.15 |   846.80 |   498.43 |     0.86 |   39.3% |
| 04 |   978.30 |   845.49 |   491.06 |     0.86 |   39.1% |
| 05 |   965.52 |   833.45 |   486.28 |     0.86 |   38.6% |
| 06 |   958.91 |   824.79 |   488.09 |     0.86 |   38.4% |
| 07 |   967.61 |   835.08 |   487.69 |     0.86 |   38.7% |
| 08 |   978.98 |   846.55 |   490.72 |     0.86 |   39.2% |
| 09 |   986.67 |   849.32 |   501.19 |     0.86 |   39.5% |
| 10 |   949.99 |   818.18 |   481.84 |     0.86 |   38.0% |
| 11 |   958.19 |   832.22 |   473.92 |     0.87 |   38.3% |
| 12 |   954.61 |   828.24 |   473.67 |     0.87 |   38.2% |
| 13 |   906.46 |   782.12 |   457.26 |     0.86 |   36.3% |
| 14 |   831.69 |   717.27 |   420.01 |     0.86 |   33.3% |
| 15 |   812.41 |   700.26 |   410.92 |     0.86 |   32.5% |
| 16 |   806.67 |   685.88 |   423.34 |     0.85 |   32.3% |
| 17 |   799.86 |   674.03 |   429.33 |     0.84 |   32.0% |
| 18 |   756.33 |   635.04 |   409.34 |     0.84 |   30.3% |
| 19 |   860.51 |   732.75 |   449.18 |     0.85 |   34.4% |
| 20 |   984.01 |   854.31 |   487.09 |     0.87 |   39.4% |
| 21 | 1,050.36 |   910.77 |   522.31 |     0.87 |   42.0% |
| 22 | 1,059.73 |   915.71 |   532.52 |     0.86 |   42.4% |
| 23 | 1,059.62 |   917.32 |   529.44 |     0.87 |   42.4% |

---

# END OF REPORT

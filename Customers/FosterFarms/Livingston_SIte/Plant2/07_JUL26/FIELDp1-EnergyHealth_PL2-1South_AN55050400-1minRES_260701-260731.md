# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 735,611.4 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $143,444.22 (Cost per period)
- **Consumption Total Cost:** $192.80 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL2-1South  
**Generated:** 2026-08-02 22:16:29  
**Data Source:** AN55050400-V-1minRES_44640CLP_260701-260731c.csv  

## Time Period

- **Period:** July 01, 2026 thru July 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,640

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
- **Power Factor:** 0.862
- **Total Energy (Actual):** 735,611.38 kWh (per period), 988.72 kW (per hour)
- **Total Waste (Actual):** 111,909.76 kWh (per period), 150.42 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL2-1South_AN55050400-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL2-1South_AN55050400-1minRES_260701-260731.md


## UNITY MANAGEMENT PL2-1South SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 150.42 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 89.49 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL2-1South Utility Cost Offset:** $29.33/hour
- **Annual Offset Savings:** $256941/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 324,274 BTU/hr
- **Total Cooling kW No Longer Needed:** 28.91 kW
- **Cooling Energy Cost Avoided:** $5.64/hour
- **Annual Cooling Savings:** $49376/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 179.32 kW
- **CO2e Emissions Avoided:** 586.41 metric tons/year
- **Monthly CO2e Reduction:** 48.87 metric tons/month
- **Hourly CO2e Reduction:** 0.0669 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $22284/year

### Total PL2-1South Unity Savings

- **Per Hour:** $37.51
- **Per Day:** $900.28
- **Per Month:** $27008.28
- **Per Year:** $328601

### PL2-1South Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 2,118.2 kVAR Max (Avg: 565.7 kVAR/hr ; 407,335 kVAR/mo)
- **Max Harmonic Distortion:** 29.6% Max (range: 3.0% - 29.6%)
- **Max Amperage:** 3,232A Max (range: 0A - 3232A)

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
| Line to Neutral Voltage (277v) |   278.49 |     0.00 |   290.63 |
| Line to Line Voltage (480v) |   482.36 |     0.00 |   503.38 |
| Current (AMPS) |  1366.89 |     0.00 |  3231.80 |
| Phase Angle (degrees) |    30.33 |    24.77 |    90.00 |
| Total Harmonic Distortion (PCT) |    15.66 |     3.00 |    29.60 |

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
| Unity THD Composite (%) | 15.7% | Field-level stress indicator |
| Max Phase THD | 5.2% | Highest THD among all three phases |
| Min Phase THD | 5.2% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,626.02 kW
  - **Maximum Load:** 2,520.24 kVA
  - **Percentage of Capacity (MAX):** 100.8%
- **Average Load:** 1,139.14 kVA
  - **Percentage of Capacity (Avg):** 45.6%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,139.14 kVA
- **Average Power Factor (PF):** 0.862

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,142.00 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 482.36 V
- Average Current (Iavg_A): 1366.89 A
- Average kW (Psum_kW): 988.72 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 2.86 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.866
- **Power Factor Difference:** 0.003 (0.4%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1139.14) and measured PF (0.862) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,139.14 |        45.6% | 847,521.14 kVA | 3,373,670.00 TOTAL-HEAT |
| kW |   988.72 |        39.5% | 735,611.38 kWh | 445,471.60 Load-Heat |
| kVAR |   565.74 |        22.6% | 420,913.27 kVARh | - |
| WASTE |   150.42 |         6.0% | 111,909.76 WASTE | 67,770.32 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,373,670.00
- **Load-Heat (BTU/hr):** 445,471.60
- **Field-Heat (BTU/hr):** 67,770.32
- **Load-Heat (BTU, period total):** 331,430,869.04
- **Field-Heat (BTU, period total):** 50,421,118.69

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 | 1,139.14 |   988.72 |   564.14 |     0.87 |   45.6% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,229.82 | 1,067.55 |   608.82 |     0.87 |   49.2% |
| 01 | 1,205.44 | 1,046.89 |   596.40 |     0.87 |   48.2% |
| 02 | 1,210.35 | 1,052.51 |   596.18 |     0.87 |   48.4% |
| 03 | 1,205.25 | 1,048.71 |   592.86 |     0.87 |   48.2% |
| 04 | 1,198.64 | 1,044.33 |   587.02 |     0.87 |   47.9% |
| 05 | 1,185.63 | 1,032.79 |   580.73 |     0.87 |   47.4% |
| 06 | 1,164.97 | 1,013.17 |   573.55 |     0.87 |   46.6% |
| 07 | 1,181.51 | 1,028.91 |   579.61 |     0.87 |   47.3% |
| 08 | 1,204.83 | 1,050.36 |   588.88 |     0.87 |   48.2% |
| 09 | 1,217.89 | 1,059.36 |   599.71 |     0.87 |   48.7% |
| 10 | 1,177.14 | 1,023.83 |   579.79 |     0.87 |   47.1% |
| 11 | 1,189.18 | 1,038.12 |   578.46 |     0.87 |   47.6% |
| 12 | 1,179.83 | 1,030.11 |   573.66 |     0.87 |   47.2% |
| 13 | 1,123.20 |   979.33 |   548.02 |     0.87 |   44.9% |
| 14 | 1,034.59 |   898.46 |   511.56 |     0.87 |   41.4% |
| 15 |   995.75 |   864.97 |   492.13 |     0.87 |   39.8% |
| 16 |   987.63 |   851.80 |   498.63 |     0.86 |   39.5% |
| 17 |   966.95 |   826.50 |   500.52 |     0.85 |   38.7% |
| 18 |   907.72 |   767.62 |   483.09 |     0.85 |   36.3% |
| 19 |   999.43 |   851.38 |   521.50 |     0.85 |   40.0% |
| 20 | 1,175.72 | 1,023.91 |   576.25 |     0.87 |   47.0% |
| 21 | 1,193.53 | 1,038.50 |   586.92 |     0.87 |   47.7% |
| 22 | 1,186.02 | 1,029.96 |   586.71 |     0.87 |   47.4% |
| 23 | 1,218.39 | 1,060.36 |   598.41 |     0.87 |   48.7% |

---

# END OF REPORT

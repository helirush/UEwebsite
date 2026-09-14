# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 735,611.4 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $143,444.22 (Cost per period)
- **Consumption Total Cost:** $192.85 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL2-1South  
**Generated:** 2026-09-10 19:31:23  
**Data Source:** AN55050400-V-1minRES_44640CLP_260701-260731c.csv  

## Time Period

- **Period:** July 01, 2026 thru July 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,629

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
- **Power Factor:** 0.863
- **Total Energy (Actual):** 735,611.38 kWh (per period), 988.97 kW (per hour)
- **Total Waste (Actual):** 111,909.76 kWh (per period), 150.45 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL2-1South_AN55050400-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL2-1South_AN55050400-1minRES_260701-260731.md


## UNITY MANAGEMENT PL2-1South SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 150.45 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 89.47 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL2-1South Utility Cost Offset:** $29.34/hour
- **Annual Offset Savings:** $257005/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 324,195 BTU/hr
- **Total Cooling kW No Longer Needed:** 28.90 kW
- **Cooling Energy Cost Avoided:** $5.64/hour
- **Annual Cooling Savings:** $49364/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 179.35 kW
- **CO2e Emissions Avoided:** 586.51 metric tons/year
- **Monthly CO2e Reduction:** 48.88 metric tons/month
- **Hourly CO2e Reduction:** 0.0670 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $22287/year

### Total PL2-1South Unity Savings

- **Per Hour:** $37.52
- **Per Day:** $900.43
- **Per Month:** $27012.79
- **Per Year:** $328656

### PL2-1South Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 2,118.2 kVAR Max (Avg: 565.9 kVAR/hr ; 407,436 kVAR/mo)
- **Max Harmonic Distortion:** 29.6% Max (range: 3.0% - 29.6%)
- **Max Amperage:** 3,232A Max (range: 508A - 3232A)

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
| Line to Neutral Voltage (277v) |   278.56 |   261.52 |   290.63 |
| Line to Line Voltage (480v) |   482.48 |   452.96 |   503.38 |
| Current (AMPS) |  1367.23 |   507.62 |  3231.80 |
| Phase Angle (degrees) |    30.31 |    24.77 |    67.23 |
| Total Harmonic Distortion (PCT) |    15.67 |     3.00 |    29.60 |

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
- **Average Load:** 1,139.42 kVA
  - **Percentage of Capacity (Avg):** 45.6%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,139.42 kVA
- **Average Power Factor (PF):** 0.863

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,142.56 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 482.48 V
- Average Current (Iavg_A): 1367.23 A
- Average kW (Psum_kW): 988.97 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 3.14 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.866
- **Power Factor Difference:** 0.003 (0.3%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1139.42) and measured PF (0.863) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,139.42 |        45.6% | 847,521.14 kVA | 3,374,501.53 TOTAL-HEAT |
| kW |   988.97 |        39.6% | 735,611.38 kWh | 445,581.40 Load-Heat |
| kVAR |   565.88 |        22.6% | 420,913.27 kVARh | - |
| WASTE |   150.45 |         6.0% | 111,909.76 WASTE | 67,787.02 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,374,501.53
- **Load-Heat (BTU/hr):** 445,581.40
- **Field-Heat (BTU/hr):** 67,787.02
- **Load-Heat (BTU, period total):** 331,430,869.04
- **Field-Heat (BTU, period total):** 50,421,118.69

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 | 1,139.42 |   988.97 |   564.28 |     0.87 |   45.6% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,229.82 | 1,067.55 |   608.82 |     0.87 |   49.2% |
| 01 | 1,206.08 | 1,047.45 |   596.72 |     0.87 |   48.2% |
| 02 | 1,210.35 | 1,052.51 |   596.18 |     0.87 |   48.4% |
| 03 | 1,205.90 | 1,049.28 |   593.18 |     0.87 |   48.2% |
| 04 | 1,198.64 | 1,044.33 |   587.02 |     0.87 |   47.9% |
| 05 | 1,185.63 | 1,032.79 |   580.73 |     0.87 |   47.4% |
| 06 | 1,165.60 | 1,013.72 |   573.86 |     0.87 |   46.6% |
| 07 | 1,182.15 | 1,029.47 |   579.92 |     0.87 |   47.3% |
| 08 | 1,204.83 | 1,050.36 |   588.88 |     0.87 |   48.2% |
| 09 | 1,217.89 | 1,059.36 |   599.71 |     0.87 |   48.7% |
| 10 | 1,177.14 | 1,023.83 |   579.79 |     0.87 |   47.1% |
| 11 | 1,189.82 | 1,038.68 |   578.77 |     0.87 |   47.6% |
| 12 | 1,180.47 | 1,030.66 |   573.97 |     0.87 |   47.2% |
| 13 | 1,123.20 |   979.33 |   548.02 |     0.87 |   44.9% |
| 14 | 1,034.59 |   898.46 |   511.56 |     0.87 |   41.4% |
| 15 |   996.28 |   865.44 |   492.39 |     0.87 |   39.9% |
| 16 |   987.63 |   851.80 |   498.63 |     0.86 |   39.5% |
| 17 |   966.95 |   826.50 |   500.52 |     0.85 |   38.7% |
| 18 |   908.20 |   768.03 |   483.35 |     0.85 |   36.3% |
| 19 |   999.43 |   851.38 |   521.50 |     0.85 |   40.0% |
| 20 | 1,175.72 | 1,023.91 |   576.25 |     0.87 |   47.0% |
| 21 | 1,195.46 | 1,040.18 |   587.87 |     0.87 |   47.8% |
| 22 | 1,186.02 | 1,029.96 |   586.71 |     0.87 |   47.4% |
| 23 | 1,218.39 | 1,060.36 |   598.41 |     0.87 |   48.7% |

---

# END OF REPORT

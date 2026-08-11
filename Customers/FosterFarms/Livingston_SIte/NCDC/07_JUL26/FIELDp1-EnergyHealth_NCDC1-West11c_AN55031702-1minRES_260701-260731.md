# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 339,240.3 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $66,151.85 (Cost per period)
- **Consumption Total Cost:** $88.91 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** NCDC1 West11c  
**Generated:** 2026-08-02 22:15:23  
**Data Source:** AN55031702-V-1minRES_44640CLP_260701-260731c.csv  

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

- **Transformer:** NCDC1 West11c
- **Power Factor:** 0.853
- **Total Energy (Actual):** 339,240.25 kWh (per period), 455.97 kW (per hour)
- **Total Waste (Actual):** 57,804.74 kWh (per period), 77.69 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_NCDC1-West11c_AN55031702-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_NCDC1-West11c_AN55031702-1minRES_260701-260731.md


## UNITY MANAGEMENT NCDC1 West11c SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 77.69 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 47.48 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **NCDC1 West11c Utility Cost Offset:** $15.15/hour
- **Annual Offset Savings:** $132718/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 173,076 BTU/hr
- **Total Cooling kW No Longer Needed:** 15.43 kW
- **Cooling Energy Cost Avoided:** $3.01/hour
- **Annual Cooling Savings:** $26354/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 93.12 kW
- **CO2e Emissions Avoided:** 304.53 metric tons/year
- **Monthly CO2e Reduction:** 25.38 metric tons/month
- **Hourly CO2e Reduction:** 0.0348 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $11572/year

### Total NCDC1 West11c Unity Savings

- **Per Hour:** $19.48
- **Per Day:** $467.52
- **Per Month:** $14025.48
- **Per Year:** $170643

### NCDC1 West11c Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 514.3 kVAR Max (Avg: 277.3 kVAR/hr ; 199,648 kVAR/mo)
- **Max Harmonic Distortion:** 33.9% Max (range: 3.0% - 33.9%)
- **Max Amperage:** 829A Max (range: 0A - 829A)

---

# NCDC1 West11c DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   278.51 |     0.00 |   290.43 |
| Line to Line Voltage (480v) |   482.40 |     0.00 |   503.04 |
| Current (AMPS) |   638.79 |     0.00 |   828.92 |
| Phase Angle (degrees) |    31.40 |    28.48 |    90.00 |
| Total Harmonic Distortion (PCT) |    16.72 |     3.00 |    33.86 |

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
| THD Phase A (%) | 5.6% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.6% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.6% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 16.7% | Field-level stress indicator |
| Max Phase THD | 5.6% | Highest THD among all three phases |
| Min Phase THD | 5.6% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 576.07 kW
  - **Maximum Load:** 753.88 kVA
  - **Percentage of Capacity (MAX):** 30.2%
- **Average Load:** 533.66 kVA
  - **Percentage of Capacity (Avg):** 21.3%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 533.66 kVA
- **Average Power Factor (PF):** 0.853

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 533.73 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 482.40 V
- Average Current (Iavg_A): 638.79 A
- Average kW (Psum_kW): 455.97 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.07 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.854
- **Power Factor Difference:** 0.001 (0.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (533.66) and measured PF (0.853) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   533.66 |        21.3% | 397,045.00 kVA | 1,555,827.85 TOTAL-HEAT |
| kW |   455.97 |        18.2% | 339,240.25 kWh | 226,508.91 Load-Heat |
| kVAR |   277.29 |        11.1% | 206,302.64 kVARh | - |
| WASTE |    77.69 |         3.1% | 57,804.74 WASTE | 38,595.92 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,555,827.85
- **Load-Heat (BTU/hr):** 226,508.91
- **Field-Heat (BTU/hr):** 38,595.92
- **Load-Heat (BTU, period total):** 168,522,629.35
- **Field-Heat (BTU, period total):** 28,715,364.03

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 |   533.66 |   455.97 |   277.16 |     0.85 |   21.3% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   532.36 |   454.22 |   277.62 |     0.85 |   21.3% |
| 01 |   529.56 |   451.39 |   276.88 |     0.85 |   21.2% |
| 02 |   530.96 |   452.42 |   277.86 |     0.85 |   21.2% |
| 03 |   516.71 |   439.99 |   270.84 |     0.85 |   20.7% |
| 04 |   504.37 |   428.53 |   265.91 |     0.85 |   20.2% |
| 05 |   524.39 |   449.43 |   270.07 |     0.86 |   21.0% |
| 06 |   538.79 |   461.37 |   278.15 |     0.86 |   21.6% |
| 07 |   537.02 |   458.72 |   279.12 |     0.85 |   21.5% |
| 08 |   530.76 |   453.13 |   276.27 |     0.85 |   21.2% |
| 09 |   532.91 |   454.90 |   277.49 |     0.85 |   21.3% |
| 10 |   539.05 |   460.43 |   280.24 |     0.85 |   21.6% |
| 11 |   540.22 |   462.27 |   279.40 |     0.86 |   21.6% |
| 12 |   539.84 |   462.19 |   278.77 |     0.86 |   21.6% |
| 13 |   516.45 |   442.65 |   265.86 |     0.86 |   20.7% |
| 14 |   531.44 |   456.25 |   272.37 |     0.86 |   21.3% |
| 15 |   543.27 |   466.68 |   278.00 |     0.86 |   21.7% |
| 16 |   545.33 |   467.87 |   280.00 |     0.86 |   21.8% |
| 17 |   536.35 |   459.05 |   277.24 |     0.86 |   21.5% |
| 18 |   545.87 |   465.86 |   284.36 |     0.85 |   21.8% |
| 19 |   548.55 |   468.23 |   285.59 |     0.85 |   21.9% |
| 20 |   542.77 |   462.12 |   284.47 |     0.85 |   21.7% |
| 21 |   532.54 |   453.87 |   278.42 |     0.85 |   21.3% |
| 22 |   533.91 |   455.13 |   279.03 |     0.85 |   21.4% |
| 23 |   534.47 |   456.51 |   277.91 |     0.85 |   21.4% |

---

# END OF REPORT

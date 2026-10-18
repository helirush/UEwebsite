# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 325,442.7 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $63,461.32 (Cost per period)
- **Consumption Total Cost:** $88.44 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** FSO-3  
**Generated:** 2026-10-13 14:47:42  
**Data Source:** AN55050439-V-1minRES_43200CLP_260901-260930c.csv  

## Time Period

- **Period:** September 01, 2026 thru September 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,056

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

- **Transformer:** FSO-3
- **Power Factor:** 0.903
- **Total Energy (Actual):** 325,442.68 kWh (per period), 453.52 kW (per hour)
- **Total Waste (Actual):** 35,604.37 kWh (per period), 49.62 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_FSO-3_AN55050439-1minRES_260901-260930.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_FSO-3_AN55050439-1minRES_260901-260930.md


## UNITY MANAGEMENT FSO-3 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 49.62 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 26.61 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **FSO-3 Utility Cost Offset:** $9.68/hour
- **Annual Offset Savings:** $84754/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 96,155 BTU/hr
- **Total Cooling kW No Longer Needed:** 8.41 kW
- **Cooling Energy Cost Avoided:** $1.64/hour
- **Annual Cooling Savings:** $14372/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 58.03 kW
- **CO2e Emissions Avoided:** 189.77 metric tons/year
- **Monthly CO2e Reduction:** 15.81 metric tons/month
- **Hourly CO2e Reduction:** 0.0217 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $7211/year

### Total FSO-3 Unity Savings

- **Per Hour:** $12.14
- **Per Day:** $291.33
- **Per Month:** $8740.03
- **Per Year:** $106337

### FSO-3 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 401.7 kVAR Max (Avg: 217.9 kVAR/hr ; 156,862 kVAR/mo)
- **Max Harmonic Distortion:** 31.3% Max (range: 3.4% - 31.3%)
- **Max Amperage:** 1,043A Max (range: 231A - 1043A)

---

# FSO-3 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   277.98 |   268.47 |   288.50 |
| Line to Line Voltage (480v) |   481.47 |   465.00 |   499.69 |
| Current (AMPS) |   603.57 |   230.69 |  1043.30 |
| Phase Angle (degrees) |    25.14 |    20.77 |    45.25 |
| Total Harmonic Distortion (PCT) |    15.19 |     3.38 |    31.34 |

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
| THD Phase A (%) | 5.1% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.1% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.1% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 15.2% | Field-level stress indicator |
| Max Phase THD | 5.1% | Highest THD among all three phases |
| Min Phase THD | 5.1% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 771.32 kW
  - **Maximum Load:** 866.93 kVA
  - **Percentage of Capacity (MAX):** 34.7%
- **Average Load:** 503.13 kVA
  - **Percentage of Capacity (Avg):** 20.1%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 503.13 kVA
- **Average Power Factor (PF):** 0.903

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 503.33 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 481.47 V
- Average Current (Iavg_A): 603.57 A
- Average kW (Psum_kW): 453.52 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.20 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.901
- **Power Factor Difference:** 0.002 (0.2%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (503.13) and measured PF (0.903) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   503.13 |        20.1% | 361,047.05 kVA | 1,547,459.07 TOTAL-HEAT |
| kW |   453.52 |        18.1% | 325,442.68 kWh | 152,601.47 Load-Heat |
| kVAR |   217.86 |         8.7% | 156,339.49 kVARh | - |
| WASTE |    49.62 |         2.0% | 35,604.37 WASTE | 16,695.04 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,547,459.07
- **Load-Heat (BTU/hr):** 152,601.47
- **Field-Heat (BTU/hr):** 16,695.04
- **Load-Heat (BTU, period total):** 109,506,812.52
- **Field-Heat (BTU, period total):** 11,980,362.81

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 9 |   503.13 |   453.52 |   214.88 |     0.90 |   20.1% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   554.35 |   506.29 |   223.94 |     0.91 |   22.2% |
| 01 |   547.52 |   498.55 |   224.14 |     0.91 |   21.9% |
| 02 |   540.89 |   491.75 |   222.97 |     0.91 |   21.6% |
| 03 |   544.57 |   495.12 |   224.46 |     0.91 |   21.8% |
| 04 |   531.66 |   483.07 |   219.68 |     0.91 |   21.3% |
| 05 |   502.96 |   455.92 |   209.79 |     0.91 |   20.1% |
| 06 |   502.26 |   455.27 |   209.68 |     0.91 |   20.1% |
| 07 |   473.15 |   426.83 |   201.51 |     0.90 |   18.9% |
| 08 |   490.31 |   442.87 |   207.37 |     0.90 |   19.6% |
| 09 |   492.41 |   442.45 |   212.45 |     0.90 |   19.7% |
| 10 |   503.61 |   452.35 |   217.46 |     0.90 |   20.1% |
| 11 |   495.76 |   444.17 |   216.37 |     0.90 |   19.8% |
| 12 |   499.45 |   447.96 |   217.56 |     0.90 |   20.0% |
| 13 |   494.77 |   443.22 |   216.49 |     0.90 |   19.8% |
| 14 |   533.99 |   481.60 |   228.74 |     0.90 |   21.4% |
| 15 |   524.01 |   471.36 |   226.40 |     0.90 |   21.0% |
| 16 |   479.59 |   428.39 |   212.79 |     0.89 |   19.2% |
| 17 |   455.84 |   404.11 |   207.56 |     0.89 |   18.2% |
| 18 |   477.19 |   425.35 |   213.49 |     0.89 |   19.1% |
| 19 |   467.14 |   416.12 |   209.15 |     0.89 |   18.7% |
| 20 |   471.22 |   421.96 |   206.94 |     0.90 |   18.8% |
| 21 |   436.87 |   390.54 |   192.73 |     0.89 |   17.5% |
| 22 |   499.34 |   452.09 |   209.15 |     0.91 |   20.0% |
| 23 |   558.78 |   509.63 |   226.68 |     0.91 |   22.4% |

---

# END OF REPORT

# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 270,593.5 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $52,765.73 (Cost per period)
- **Consumption Total Cost:** $73.29 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** FSO-1  
**Generated:** 2026-10-13 14:47:46  
**Data Source:** AN55050366-V-1minRES_43200CLP_260901-260930c.csv  

## Time Period

- **Period:** September 01, 2026 thru September 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,195

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

- **Transformer:** FSO-1
- **Power Factor:** 0.860
- **Total Energy (Actual):** 270,593.50 kWh (per period), 375.87 kW (per hour)
- **Total Waste (Actual):** 48,829.47 kWh (per period), 67.83 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_FSO-1_AN55050366-1minRES_260901-260930.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_FSO-1_AN55050366-1minRES_260901-260930.md


## UNITY MANAGEMENT FSO-1 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 67.83 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 40.51 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **FSO-1 Utility Cost Offset:** $13.23/hour
- **Annual Offset Savings:** $115861/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 146,426 BTU/hr
- **Total Cooling kW No Longer Needed:** 12.81 kW
- **Cooling Energy Cost Avoided:** $2.50/hour
- **Annual Cooling Savings:** $21886/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 80.64 kW
- **CO2e Emissions Avoided:** 263.70 metric tons/year
- **Monthly CO2e Reduction:** 21.98 metric tons/month
- **Hourly CO2e Reduction:** 0.0301 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $10021/year

### Total FSO-1 Unity Savings

- **Per Hour:** $16.87
- **Per Day:** $404.84
- **Per Month:** $12145.31
- **Per Year:** $147768

### FSO-1 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 881.0 kVAR Max (Avg: 235.8 kVAR/hr ; 169,755 kVAR/mo)
- **Max Harmonic Distortion:** 30.4% Max (range: 3.1% - 30.4%)
- **Max Amperage:** 1,277A Max (range: 206A - 1277A)

---

# FSO-1 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   278.80 |   270.32 |   288.74 |
| Line to Line Voltage (480v) |   482.90 |   468.20 |   500.12 |
| Current (AMPS) |   530.37 |   206.22 |  1277.34 |
| Phase Angle (degrees) |    30.47 |    15.42 |    63.83 |
| Total Harmonic Distortion (PCT) |    15.20 |     3.14 |    30.43 |

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

- **Maximum UtilityDemand:** 702.36 kW
  - **Maximum Load:** 1,094.04 kVA
  - **Percentage of Capacity (MAX):** 43.8%
- **Average Load:** 443.69 kVA
  - **Percentage of Capacity (Avg):** 17.7%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 443.69 kVA
- **Average Power Factor (PF):** 0.860

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 443.61 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 482.90 V
- Average Current (Iavg_A): 530.37 A
- Average kW (Psum_kW): 375.87 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.09 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.847
- **Power Factor Difference:** 0.012 (1.4%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (443.69) and measured PF (0.860) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   443.69 |        17.7% | 319,422.97 kVA | 1,282,514.33 TOTAL-HEAT |
| kW |   375.87 |        15.0% | 270,593.50 kWh | 196,055.07 Load-Heat |
| kVAR |   235.77 |         9.4% | 169,735.65 kVARh | - |
| WASTE |    67.83 |         2.7% | 48,829.47 WASTE | 35,378.77 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,282,514.33
- **Load-Heat (BTU/hr):** 196,055.07
- **Field-Heat (BTU/hr):** 35,378.77
- **Load-Heat (BTU, period total):** 141,143,313.97
- **Field-Heat (BTU, period total):** 25,469,765.63

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 9 |   443.69 |   375.87 |   233.76 |     0.85 |   17.7% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   481.81 |   403.13 |   262.03 |     0.84 |   19.3% |
| 01 |   499.64 |   417.64 |   273.17 |     0.84 |   20.0% |
| 02 |   427.28 |   365.54 |   218.61 |     0.86 |   17.1% |
| 03 |   518.20 |   432.78 |   284.11 |     0.84 |   20.7% |
| 04 |   487.85 |   412.91 |   258.15 |     0.85 |   19.5% |
| 05 |   508.60 |   428.87 |   272.18 |     0.84 |   20.3% |
| 06 |   521.52 |   439.04 |   280.31 |     0.84 |   20.9% |
| 07 |   516.85 |   436.85 |   274.49 |     0.85 |   20.7% |
| 08 |   552.62 |   462.94 |   300.75 |     0.84 |   22.1% |
| 09 |   520.14 |   438.39 |   278.16 |     0.84 |   20.8% |
| 10 |   556.56 |   464.91 |   305.17 |     0.84 |   22.3% |
| 11 |   477.79 |   405.45 |   250.96 |     0.85 |   19.1% |
| 12 |   528.78 |   440.04 |   291.78 |     0.83 |   21.2% |
| 13 |   556.85 |   460.39 |   312.23 |     0.83 |   22.3% |
| 14 |   508.17 |   424.82 |   277.34 |     0.84 |   20.3% |
| 15 |   487.33 |   408.19 |   264.30 |     0.84 |   19.5% |
| 16 |   317.86 |   278.60 |   151.13 |     0.88 |   12.7% |
| 17 |   301.53 |   264.20 |   143.60 |     0.88 |   12.1% |
| 18 |   290.20 |   255.11 |   136.88 |     0.88 |   11.6% |
| 19 |   268.97 |   238.48 |   123.56 |     0.89 |   10.8% |
| 20 |   253.90 |   228.50 |   110.25 |     0.90 |   10.2% |
| 21 |   248.99 |   223.66 |   108.98 |     0.90 |   10.0% |
| 22 |   318.95 |   275.87 |   157.18 |     0.86 |   12.8% |
| 23 |   498.32 |   414.56 |   274.89 |     0.83 |   19.9% |

---

# END OF REPORT

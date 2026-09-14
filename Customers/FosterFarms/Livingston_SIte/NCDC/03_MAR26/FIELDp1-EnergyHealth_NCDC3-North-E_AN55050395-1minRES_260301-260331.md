# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 341,951.1 kWh (Usage per period)
- **Consumption Cost per unit:** $0.175/kWh (Cost per kWh)
- **Consumption Total Cost:** $59,738.86 (Cost per period)
- **Consumption Total Cost:** $81.00 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** NCDC3 North E  
**Generated:** 2026-09-10 22:47:45  
**Data Source:** AN55050395-V-1minRES_44550CLP_260301-260331c.csv  

## Time Period

- **Period:** March 01, 2026 thru March 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,252

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

- **Transformer:** NCDC3 North E
- **Power Factor:** 0.856
- **Total Energy (Actual):** 341,951.12 kWh (per period), 463.64 kW (per hour)
- **Total Waste (Actual):** 57,536.32 kWh (per period), 78.01 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_NCDC3-North-E_AN55050395-1minRES_260301-260331.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_NCDC3-North-E_AN55050395-1minRES_260301-260331.md


## UNITY MANAGEMENT NCDC3 North E SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 78.01 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 47.09 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1747/kWh (all-inclusive)
- **NCDC3 North E Utility Cost Offset:** $13.63/hour
- **Annual Offset Savings:** $119387/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 170,666 BTU/hr
- **Total Cooling kW No Longer Needed:** 14.95 kW
- **Cooling Energy Cost Avoided:** $2.61/hour
- **Annual Cooling Savings:** $22882/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 92.96 kW
- **CO2e Emissions Avoided:** 304.01 metric tons/year
- **Monthly CO2e Reduction:** 25.33 metric tons/month
- **Hourly CO2e Reduction:** 0.0347 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $11704/year

### Total NCDC3 North E Unity Savings

- **Per Hour:** $17.58
- **Per Day:** $421.85
- **Per Month:** $12655.37
- **Per Year:** $153974

### NCDC3 North E Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 432.4 kVAR Max (Avg: 280.0 kVAR/hr ; 201,632 kVAR/mo)
- **Max Harmonic Distortion:** 30.1% Max (range: 3.0% - 30.1%)
- **Max Amperage:** 884A Max (range: 420A - 884A)

---

# NCDC3 North E DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   277.36 |   267.92 |   287.22 |
| Line to Line Voltage (480v) |   480.40 |   464.04 |   497.49 |
| Current (AMPS) |   650.91 |   419.91 |   884.04 |
| Phase Angle (degrees) |    31.05 |    20.12 |    40.54 |
| Total Harmonic Distortion (PCT) |    15.68 |     3.01 |    30.11 |

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

- **Maximum UtilityDemand:** 627.59 kW
  - **Maximum Load:** 732.78 kVA
  - **Percentage of Capacity (MAX):** 29.3%
- **Average Load:** 541.65 kVA
  - **Percentage of Capacity (Avg):** 21.7%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 541.65 kVA
- **Average Power Factor (PF):** 0.856

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 541.61 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 480.40 V
- Average Current (Iavg_A): 650.91 A
- Average kW (Psum_kW): 463.64 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.04 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.856
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (541.65) and measured PF (0.856) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   541.65 |        21.7% | 399,487.44 kVA | 1,582,010.92 TOTAL-HEAT |
| kW |   463.64 |        18.5% | 341,951.12 kWh | 227,849.69 Load-Heat |
| kVAR |   280.04 |        11.2% | 206,542.12 kVARh | - |
| WASTE |    78.01 |         3.1% | 57,536.32 WASTE | 38,337.74 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,582,010.92
- **Load-Heat (BTU/hr):** 227,849.69
- **Field-Heat (BTU/hr):** 38,337.74
- **Load-Heat (BTU, period total):** 168,046,738.47
- **Field-Heat (BTU, period total):** 28,275,360.25

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 3 |   541.65 |   463.64 |   279.37 |     0.86 |   21.7% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   517.68 |   444.12 |   265.41 |     0.86 |   20.7% |
| 01 |   531.98 |   454.71 |   275.43 |     0.85 |   21.3% |
| 02 |   534.87 |   461.52 |   269.40 |     0.86 |   21.4% |
| 03 |   515.52 |   441.41 |   265.79 |     0.86 |   20.6% |
| 04 |   527.97 |   456.28 |   264.42 |     0.86 |   21.1% |
| 05 |   486.47 |   417.49 |   248.90 |     0.86 |   19.5% |
| 06 |   517.71 |   443.89 |   265.56 |     0.86 |   20.7% |
| 07 |   511.26 |   434.20 |   269.35 |     0.85 |   20.5% |
| 08 |   495.54 |   422.94 |   257.52 |     0.85 |   19.8% |
| 09 |   523.80 |   445.47 |   275.03 |     0.85 |   21.0% |
| 10 |   544.11 |   465.56 |   281.07 |     0.86 |   21.8% |
| 11 |   557.22 |   477.76 |   286.04 |     0.86 |   22.3% |
| 12 |   539.14 |   460.37 |   280.16 |     0.85 |   21.6% |
| 13 |   570.63 |   491.85 |   288.58 |     0.86 |   22.8% |
| 14 |   572.60 |   484.28 |   305.08 |     0.85 |   22.9% |
| 15 |   586.83 |   497.36 |   310.99 |     0.85 |   23.5% |
| 16 |   558.15 |   471.66 |   298.16 |     0.85 |   22.3% |
| 17 |   567.65 |   481.84 |   299.73 |     0.85 |   22.7% |
| 18 |   549.92 |   471.52 |   282.66 |     0.86 |   22.0% |
| 19 |   559.78 |   480.99 |   286.00 |     0.86 |   22.4% |
| 20 |   552.13 |   477.87 |   275.92 |     0.87 |   22.1% |
| 21 |   533.30 |   459.62 |   270.16 |     0.86 |   21.3% |
| 22 |   593.49 |   513.12 |   297.40 |     0.86 |   23.7% |
| 23 |   553.86 |   473.56 |   286.60 |     0.86 |   22.2% |

---

# END OF REPORT

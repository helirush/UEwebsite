# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 153,387.6 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $29,910.59 (Cost per period)
- **Consumption Total Cost:** $41.71 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** FSO-2  
**Generated:** 2026-09-12 13:38:19  
**Data Source:** AN55050316-V-1minRES_44640CLP_260801-260831c.csv  

## Time Period

- **Period:** August 01, 2026 thru August 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,027

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

- **Transformer:** FSO-2
- **Power Factor:** 0.917
- **Total Energy (Actual):** 153,387.62 kWh (per period), 213.89 kW (per hour)
- **Total Waste (Actual):** 13,892.65 kWh (per period), 19.37 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_FSO-2_AN55050316-1minRES_260801-260831.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_FSO-2_AN55050316-1minRES_260801-260831.md


## UNITY MANAGEMENT FSO-2 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 19.37 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 10.02 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **FSO-2 Utility Cost Offset:** $3.78/hour
- **Annual Offset Savings:** $33093/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 36,233 BTU/hr
- **Total Cooling kW No Longer Needed:** 3.24 kW
- **Cooling Energy Cost Avoided:** $0.63/hour
- **Annual Cooling Savings:** $5528/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 22.61 kW
- **CO2e Emissions Avoided:** 73.93 metric tons/year
- **Monthly CO2e Reduction:** 6.16 metric tons/month
- **Hourly CO2e Reduction:** 0.0084 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $2810/year

### Total FSO-2 Unity Savings

- **Per Hour:** $4.73
- **Per Day:** $113.51
- **Per Month:** $3405.21
- **Per Year:** $41430

### FSO-2 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 180.0 kVAR Max (Avg: 93.1 kVAR/hr ; 67,014 kVAR/mo)
- **Max Harmonic Distortion:** 29.6% Max (range: 3.0% - 29.6%)
- **Max Amperage:** 455A Max (range: 106A - 455A)

---

# FSO-2 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   277.51 |   270.37 |   290.59 |
| Line to Line Voltage (480v) |   480.67 |   468.29 |   503.31 |
| Current (AMPS) |   280.25 |   106.10 |   454.67 |
| Phase Angle (degrees) |    23.41 |    17.06 |    37.81 |
| Total Harmonic Distortion (PCT) |    15.29 |     3.00 |    29.55 |

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
| Unity THD Composite (%) | 15.3% | Field-level stress indicator |
| Max Phase THD | 5.1% | Highest THD among all three phases |
| Min Phase THD | 5.1% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 341.62 kW
  - **Maximum Load:** 370.43 kVA
  - **Percentage of Capacity (MAX):** 14.8%
- **Average Load:** 233.27 kVA
  - **Percentage of Capacity (Avg):** 9.3%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 233.27 kVA
- **Average Power Factor (PF):** 0.917

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 233.32 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 480.67 V
- Average Current (Iavg_A): 280.25 A
- Average kW (Psum_kW): 213.89 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.05 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.917
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (233.27) and measured PF (0.917) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   233.27 |         9.3% | 167,280.26 kVA | 729,839.86 TOTAL-HEAT |
| kW |   213.89 |         8.6% | 153,387.62 kWh | 60,613.29 Load-Heat |
| kVAR |    93.07 |         3.7% | 66,745.22 kVARh | - |
| WASTE |    19.37 |         0.8% | 13,892.65 WASTE | 5,489.88 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 729,839.86
- **Load-Heat (BTU/hr):** 60,613.29
- **Field-Heat (BTU/hr):** 5,489.88
- **Load-Heat (BTU, period total):** 43,466,796.93
- **Field-Heat (BTU, period total):** 3,936,880.93

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 8 |   233.27 |   213.89 |    92.67 |     0.92 |    9.3% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   238.34 |   218.08 |    95.90 |     0.91 |    9.5% |
| 01 |   232.38 |   212.61 |    93.50 |     0.91 |    9.3% |
| 02 |   220.02 |   201.80 |    87.35 |     0.92 |    8.8% |
| 03 |   221.17 |   202.50 |    88.63 |     0.92 |    8.8% |
| 04 |   217.05 |   199.37 |    85.45 |     0.92 |    8.7% |
| 05 |   215.02 |   197.82 |    83.84 |     0.92 |    8.6% |
| 06 |   211.32 |   194.17 |    82.97 |     0.92 |    8.5% |
| 07 |   210.21 |   192.77 |    83.40 |     0.92 |    8.4% |
| 08 |   219.45 |   200.57 |    88.46 |     0.91 |    8.8% |
| 09 |   225.68 |   206.16 |    91.32 |     0.91 |    9.0% |
| 10 |   232.67 |   211.99 |    95.22 |     0.91 |    9.3% |
| 11 |   236.67 |   216.25 |    95.70 |     0.91 |    9.5% |
| 12 |   243.04 |   220.99 |   100.66 |     0.91 |    9.7% |
| 13 |   238.89 |   217.00 |    99.50 |     0.91 |    9.6% |
| 14 |   238.72 |   217.63 |    97.72 |     0.91 |    9.5% |
| 15 |   224.99 |   204.63 |    93.05 |     0.91 |    9.0% |
| 16 |   236.40 |   217.24 |    92.93 |     0.92 |    9.5% |
| 17 |   255.76 |   235.67 |    99.15 |     0.92 |   10.2% |
| 18 |   266.34 |   245.08 |   104.05 |     0.92 |   10.7% |
| 19 |   266.59 |   246.23 |   101.99 |     0.92 |   10.7% |
| 20 |   256.06 |   237.40 |    95.80 |     0.93 |   10.2% |
| 21 |   231.65 |   214.67 |    86.94 |     0.93 |    9.3% |
| 22 |   223.45 |   206.23 |    85.74 |     0.92 |    8.9% |
| 23 |   242.04 |   221.43 |    97.37 |     0.91 |    9.7% |

---

# END OF REPORT

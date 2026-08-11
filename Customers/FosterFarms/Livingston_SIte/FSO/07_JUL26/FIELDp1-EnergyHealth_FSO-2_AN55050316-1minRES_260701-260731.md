# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 172,458.9 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $33,629.49 (Cost per period)
- **Consumption Total Cost:** $45.20 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** FSO-2  
**Generated:** 2026-08-02 21:22:57  
**Data Source:** AN55050316-V-1minRES_44640CLP_260701-260731c.csv  

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

- **Transformer:** FSO-2
- **Power Factor:** 0.912
- **Total Energy (Actual):** 172,458.90 kWh (per period), 231.80 kW (per hour)
- **Total Waste (Actual):** 16,448.45 kWh (per period), 22.11 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_FSO-2_AN55050316-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_FSO-2_AN55050316-1minRES_260701-260731.md


## UNITY MANAGEMENT FSO-2 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 22.11 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 11.58 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **FSO-2 Utility Cost Offset:** $4.31/hour
- **Annual Offset Savings:** $37765/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 41,906 BTU/hr
- **Total Cooling kW No Longer Needed:** 3.74 kW
- **Cooling Energy Cost Avoided:** $0.73/hour
- **Annual Cooling Savings:** $6381/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 25.84 kW
- **CO2e Emissions Avoided:** 84.51 metric tons/year
- **Monthly CO2e Reduction:** 7.04 metric tons/month
- **Hourly CO2e Reduction:** 0.0096 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $3211/year

### Total FSO-2 Unity Savings

- **Per Hour:** $5.41
- **Per Day:** $129.75
- **Per Month:** $3892.39
- **Per Year:** $47357

### FSO-2 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 384.2 kVAR Max (Avg: 103.6 kVAR/hr ; 74,610 kVAR/mo)
- **Max Harmonic Distortion:** 29.7% Max (range: 3.0% - 29.7%)
- **Max Amperage:** 684A Max (range: 0A - 684A)

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
| Line to Neutral Voltage (277v) |   277.04 |     0.00 |   287.17 |
| Line to Line Voltage (480v) |   479.85 |     0.00 |   497.40 |
| Current (AMPS) |   305.42 |     0.00 |   684.06 |
| Phase Angle (degrees) |    24.02 |    15.85 |    90.00 |
| Total Harmonic Distortion (PCT) |    15.25 |     3.00 |    29.73 |

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

- **Maximum UtilityDemand:** 428.94 kW
  - **Maximum Load:** 575.86 kVA
  - **Percentage of Capacity (MAX):** 23.0%
- **Average Load:** 253.91 kVA
  - **Percentage of Capacity (Avg):** 10.2%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 253.91 kVA
- **Average Power Factor (PF):** 0.912

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 253.84 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 479.85 V
- Average Current (Iavg_A): 305.42 A
- Average kW (Psum_kW): 231.80 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.07 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.913
- **Power Factor Difference:** 0.001 (0.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (253.91) and measured PF (0.912) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   253.91 |        10.2% | 188,907.35 kVA | 790,933.16 TOTAL-HEAT |
| kW |   231.80 |         9.3% | 172,458.90 kWh | 68,867.73 Load-Heat |
| kVAR |   103.62 |         4.1% | 77,096.78 kVARh | - |
| WASTE |    22.11 |         0.9% | 16,448.45 WASTE | 6,568.33 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 790,933.16
- **Load-Heat (BTU/hr):** 68,867.73
- **Field-Heat (BTU/hr):** 6,568.33
- **Load-Heat (BTU, period total):** 51,237,593.59
- **Field-Heat (BTU, period total):** 4,886,838.22

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 |   253.91 |   231.80 |   103.20 |     0.91 |   10.2% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   249.30 |   226.71 |   103.27 |     0.91 |   10.0% |
| 01 |   244.00 |   221.64 |   101.61 |     0.91 |    9.8% |
| 02 |   234.11 |   213.81 |    95.03 |     0.91 |    9.4% |
| 03 |   235.98 |   214.60 |    97.83 |     0.91 |    9.4% |
| 04 |   229.82 |   209.53 |    94.06 |     0.91 |    9.2% |
| 05 |   225.52 |   206.05 |    91.28 |     0.91 |    9.0% |
| 06 |   226.67 |   206.83 |    92.38 |     0.91 |    9.1% |
| 07 |   225.57 |   206.49 |    90.46 |     0.92 |    9.0% |
| 08 |   245.14 |   222.23 |   102.99 |     0.91 |    9.8% |
| 09 |   246.85 |   224.38 |   102.52 |     0.91 |    9.9% |
| 10 |   249.26 |   226.69 |   103.23 |     0.91 |   10.0% |
| 11 |   246.27 |   224.43 |   100.96 |     0.91 |    9.9% |
| 12 |   254.31 |   230.97 |   106.00 |     0.91 |   10.2% |
| 13 |   249.36 |   225.76 |   105.40 |     0.91 |   10.0% |
| 14 |   260.40 |   236.14 |   109.27 |     0.91 |   10.4% |
| 15 |   271.06 |   246.06 |   113.31 |     0.91 |   10.8% |
| 16 |   281.82 |   256.68 |   115.98 |     0.91 |   11.3% |
| 17 |   297.51 |   272.60 |   118.82 |     0.92 |   11.9% |
| 18 |   293.69 |   269.84 |   115.66 |     0.92 |   11.7% |
| 19 |   290.29 |   267.26 |   113.02 |     0.92 |   11.6% |
| 20 |   288.15 |   266.38 |   109.66 |     0.92 |   11.5% |
| 21 |   262.09 |   242.31 |    99.57 |     0.92 |   10.5% |
| 22 |   237.86 |   219.09 |    92.36 |     0.92 |    9.5% |
| 23 |   248.77 |   226.70 |   102.02 |     0.91 |   10.0% |

---

# END OF REPORT

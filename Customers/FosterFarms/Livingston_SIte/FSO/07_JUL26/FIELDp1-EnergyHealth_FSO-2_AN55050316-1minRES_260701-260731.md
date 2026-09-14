# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 168,325.8 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $32,823.53 (Cost per period)
- **Consumption Total Cost:** $45.12 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** FSO-2  
**Generated:** 2026-09-10 19:28:43  
**Data Source:** AN55050316-V-1minRES_44640CLP_260701-260731c.csv  

## Time Period

- **Period:** July 01, 2026 thru July 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,645

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
- **Power Factor:** 0.913
- **Total Energy (Actual):** 168,325.78 kWh (per period), 231.40 kW (per hour)
- **Total Waste (Actual):** 16,036.60 kWh (per period), 22.05 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_FSO-2_AN55050316-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_FSO-2_AN55050316-1minRES_260701-260731.md


## UNITY MANAGEMENT FSO-2 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 22.05 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 11.52 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **FSO-2 Utility Cost Offset:** $4.30/hour
- **Annual Offset Savings:** $37659/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 41,638 BTU/hr
- **Total Cooling kW No Longer Needed:** 3.71 kW
- **Cooling Energy Cost Avoided:** $0.72/hour
- **Annual Cooling Savings:** $6338/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 25.76 kW
- **CO2e Emissions Avoided:** 84.23 metric tons/year
- **Monthly CO2e Reduction:** 7.02 metric tons/month
- **Hourly CO2e Reduction:** 0.0096 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $3201/year

### Total FSO-2 Unity Savings

- **Per Hour:** $5.39
- **Per Day:** $129.31
- **Per Month:** $3879.22
- **Per Year:** $47197

### FSO-2 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 236.3 kVAR Max (Avg: 103.4 kVAR/hr ; 74,439 kVAR/mo)
- **Max Harmonic Distortion:** 29.5% Max (range: 3.0% - 29.5%)
- **Max Amperage:** 469A Max (range: 149A - 469A)

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
| Line to Neutral Voltage (277v) |   277.18 |   266.73 |   287.17 |
| Line to Line Voltage (480v) |   480.09 |   461.99 |   497.40 |
| Current (AMPS) |   304.87 |   148.93 |   469.40 |
| Phase Angle (degrees) |    23.96 |    15.85 |    42.95 |
| Total Harmonic Distortion (PCT) |    15.25 |     3.00 |    29.47 |

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

- **Maximum UtilityDemand:** 350.43 kW
  - **Maximum Load:** 385.40 kVA
  - **Percentage of Capacity (MAX):** 15.4%
- **Average Load:** 253.45 kVA
  - **Percentage of Capacity (Avg):** 10.1%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 253.45 kVA
- **Average Power Factor (PF):** 0.913

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 253.51 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 480.09 V
- Average Current (Iavg_A): 304.87 A
- Average kW (Psum_kW): 231.40 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.06 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.913
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (253.45) and measured PF (0.913) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   253.45 |        10.1% | 184,362.38 kVA | 789,576.99 TOTAL-HEAT |
| kW |   231.40 |         9.3% | 168,325.78 kWh | 68,680.67 Load-Heat |
| kVAR |   103.39 |         4.1% | 75,205.85 kVARh | - |
| WASTE |    22.05 |         0.9% | 16,036.60 WASTE | 6,543.29 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 789,576.99
- **Load-Heat (BTU/hr):** 68,680.67
- **Field-Heat (BTU/hr):** 6,543.29
- **Load-Heat (BTU, period total):** 49,959,461.18
- **Field-Heat (BTU, period total):** 4,759,698.38

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 |   253.45 |   231.40 |   102.97 |     0.91 |   10.1% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   247.31 |   224.91 |   102.42 |     0.91 |    9.9% |
| 01 |   241.95 |   219.75 |   100.81 |     0.91 |    9.7% |
| 02 |   232.68 |   212.55 |    94.37 |     0.91 |    9.3% |
| 03 |   233.87 |   212.67 |    96.98 |     0.91 |    9.4% |
| 04 |   228.61 |   208.43 |    93.55 |     0.91 |    9.1% |
| 05 |   225.75 |   206.34 |    91.26 |     0.91 |    9.0% |
| 06 |   226.72 |   206.89 |    92.40 |     0.91 |    9.1% |
| 07 |   226.46 |   207.35 |    90.73 |     0.92 |    9.1% |
| 08 |   244.87 |   222.02 |   102.81 |     0.91 |    9.8% |
| 09 |   246.36 |   223.92 |   102.34 |     0.91 |    9.9% |
| 10 |   249.39 |   226.81 |   103.27 |     0.91 |   10.0% |
| 11 |   246.25 |   224.41 |   100.96 |     0.91 |    9.8% |
| 12 |   254.38 |   231.03 |   106.03 |     0.91 |   10.2% |
| 13 |   251.06 |   227.28 |   106.16 |     0.91 |   10.0% |
| 14 |   261.35 |   236.90 |   109.89 |     0.91 |   10.5% |
| 15 |   271.92 |   246.68 |   114.03 |     0.91 |   10.9% |
| 16 |   285.34 |   259.87 |   117.48 |     0.91 |   11.4% |
| 17 |   292.45 |   267.97 |   116.79 |     0.92 |   11.7% |
| 18 |   295.21 |   271.41 |   115.90 |     0.92 |   11.8% |
| 19 |   291.56 |   268.59 |   113.17 |     0.92 |   11.7% |
| 20 |   287.24 |   265.53 |   109.32 |     0.92 |   11.5% |
| 21 |   263.57 |   243.82 |    99.88 |     0.93 |   10.5% |
| 22 |   239.20 |   220.42 |    92.69 |     0.92 |    9.6% |
| 23 |   246.42 |   224.62 |   100.97 |     0.91 |    9.9% |

---

# END OF REPORT

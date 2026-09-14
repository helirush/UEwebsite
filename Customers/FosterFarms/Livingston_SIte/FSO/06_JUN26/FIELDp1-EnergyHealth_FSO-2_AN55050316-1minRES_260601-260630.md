# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 158,607.2 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $30,928.41 (Cost per period)
- **Consumption Total Cost:** $42.98 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** FSO-2  
**Generated:** 2026-09-10 20:05:19  
**Data Source:** AN55050316-V-1minRES_43200CLP_260601-260630c.csv  

## Time Period

- **Period:** June 01, 2026 thru June 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,176

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

- **Transformer:** FSO-2
- **Power Factor:** 0.916
- **Total Energy (Actual):** 158,607.25 kWh (per period), 220.41 kW (per hour)
- **Total Waste (Actual):** 14,521.14 kWh (per period), 20.18 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_FSO-2_AN55050316-1minRES_260601-260630.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_FSO-2_AN55050316-1minRES_260601-260630.md


## UNITY MANAGEMENT FSO-2 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 20.18 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 10.48 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **FSO-2 Utility Cost Offset:** $3.93/hour
- **Annual Offset Savings:** $34471/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 37,915 BTU/hr
- **Total Cooling kW No Longer Needed:** 3.49 kW
- **Cooling Energy Cost Avoided:** $0.68/hour
- **Annual Cooling Savings:** $5962/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 23.67 kW
- **CO2e Emissions Avoided:** 77.40 metric tons/year
- **Monthly CO2e Reduction:** 6.45 metric tons/month
- **Hourly CO2e Reduction:** 0.0088 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $2941/year

### Total FSO-2 Unity Savings

- **Per Hour:** $4.95
- **Per Day:** $118.83
- **Per Month:** $3564.94
- **Per Year:** $43373

### FSO-2 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 175.1 kVAR Max (Avg: 96.5 kVAR/hr ; 69,444 kVAR/mo)
- **Max Harmonic Distortion:** 29.7% Max (range: 3.3% - 29.7%)
- **Max Amperage:** 497A Max (range: 73A - 497A)

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
| Line to Neutral Voltage (277v) |   277.24 |   270.52 |   287.73 |
| Line to Line Voltage (480v) |   480.19 |   468.56 |   498.37 |
| Current (AMPS) |   289.30 |    72.86 |   497.45 |
| Phase Angle (degrees) |    23.57 |    17.25 |    34.21 |
| Total Harmonic Distortion (PCT) |    15.44 |     3.33 |    29.72 |

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
| Unity THD Composite (%) | 15.4% | Field-level stress indicator |
| Max Phase THD | 5.1% | Highest THD among all three phases |
| Min Phase THD | 5.1% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 377.52 kW
  - **Maximum Load:** 411.02 kVA
  - **Percentage of Capacity (MAX):** 16.4%
- **Average Load:** 240.59 kVA
  - **Percentage of Capacity (Avg):** 9.6%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 240.59 kVA
- **Average Power Factor (PF):** 0.916

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 240.61 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 480.19 V
- Average Current (Iavg_A): 289.30 A
- Average kW (Psum_kW): 220.41 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.03 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.916
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (240.59) and measured PF (0.916) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   240.59 |         9.6% | 173,128.38 kVA | 752,071.22 TOTAL-HEAT |
| kW |   220.41 |         8.8% | 158,607.25 kWh | 63,079.94 Load-Heat |
| kVAR |    96.45 |         3.9% | 69,405.90 kVARh | - |
| WASTE |    20.18 |         0.8% | 14,521.14 WASTE | 5,775.22 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 752,071.22
- **Load-Heat (BTU/hr):** 63,079.94
- **Field-Heat (BTU/hr):** 5,775.22
- **Load-Heat (BTU, period total):** 45,392,327.31
- **Field-Heat (BTU, period total):** 4,155,851.49

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 6 |   240.59 |   220.41 |    96.07 |     0.92 |    9.6% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   244.53 |   223.72 |    98.34 |     0.91 |    9.8% |
| 01 |   242.66 |   221.72 |    98.24 |     0.91 |    9.7% |
| 02 |   236.95 |   218.00 |    92.57 |     0.92 |    9.5% |
| 03 |   239.33 |   219.11 |    95.91 |     0.92 |    9.6% |
| 04 |   229.03 |   210.00 |    91.05 |     0.92 |    9.2% |
| 05 |   219.49 |   201.70 |    86.29 |     0.92 |    8.8% |
| 06 |   220.79 |   202.83 |    87.00 |     0.92 |    8.8% |
| 07 |   219.91 |   202.78 |    84.84 |     0.92 |    8.8% |
| 08 |   230.79 |   210.47 |    94.19 |     0.91 |    9.2% |
| 09 |   226.04 |   205.47 |    93.60 |     0.91 |    9.0% |
| 10 |   234.03 |   213.01 |    96.52 |     0.91 |    9.4% |
| 11 |   237.71 |   217.13 |    96.39 |     0.91 |    9.5% |
| 12 |   239.94 |   218.38 |    99.07 |     0.91 |    9.6% |
| 13 |   248.51 |   226.08 |   102.88 |     0.91 |    9.9% |
| 14 |   250.63 |   227.79 |   104.20 |     0.91 |   10.0% |
| 15 |   244.42 |   221.64 |   102.67 |     0.91 |    9.8% |
| 16 |   235.04 |   213.97 |    97.01 |     0.91 |    9.4% |
| 17 |   264.08 |   242.38 |   104.57 |     0.92 |   10.6% |
| 18 |   278.63 |   256.60 |   108.45 |     0.92 |   11.1% |
| 19 |   263.79 |   242.87 |   102.78 |     0.92 |   10.6% |
| 20 |   261.72 |   241.72 |   100.11 |     0.92 |   10.5% |
| 21 |   247.95 |   230.11 |    92.04 |     0.93 |    9.9% |
| 22 |   222.16 |   206.04 |    82.88 |     0.93 |    8.9% |
| 23 |   235.99 |   216.27 |    94.11 |     0.92 |    9.4% |

---

# END OF REPORT

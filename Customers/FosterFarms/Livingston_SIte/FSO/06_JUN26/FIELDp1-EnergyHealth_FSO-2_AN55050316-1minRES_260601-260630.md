# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 158,657.5 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $30,938.22 (Cost per period)
- **Consumption Total Cost:** $42.97 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** FSO-2  
**Generated:** 2026-07-11 12:28:22  
**Data Source:** AN55050316-V-1minRES_43200CLP_260601-260630c.csv  

## Time Period

- **Period:** June 01, 2026 thru June 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,200

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
- **Total Energy (Actual):** 158,657.53 kWh (per period), 220.36 kW (per hour)
- **Total Waste (Actual):** 14,525.37 kWh (per period), 20.17 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_FSO-2_AN55050316-1minRES_260601-260630.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_FSO-2_AN55050316-1minRES_260601-260630.md


## UNITY MANAGEMENT FSO-2 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 20.17 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **FSO-2 Utility Cost Offset:** $3.93/hour
- **Annual Offset Savings:** $34461/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 73,012 BTU/hr
- **Total Cooling kW No Longer Needed:** 6.72 kW
- **Cooling Energy Cost Avoided:** $1.31/hour
- **Annual Cooling Savings:** $11480/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 26.89 kW
- **CO2e Emissions Avoided:** 87.95 metric tons/year
- **Monthly CO2e Reduction:** 7.33 metric tons/month
- **Hourly CO2e Reduction:** 0.0100 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $3342/year

### Total FSO-2 Unity Savings

- **Per Hour:** $5.63
- **Per Day:** $135.02
- **Per Month:** $4050.70
- **Per Year:** $49283

### FSO-2 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 175.1 kVAR Max (Avg: 96.4 kVAR/hr ; 69,427 kVAR/mo)
- **Max Harmonic Distortion:** 29.7% Max (range: 3.3% - 29.7%)
- **Max Amperage:** 504A Max (range: 0A - 504A)

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
| Line to Neutral Voltage (277v) |   277.18 |     0.00 |   287.73 |
| Line to Line Voltage (480v) |   480.09 |     0.00 |   498.37 |
| Current (AMPS) |   289.23 |     0.00 |   503.98 |
| Phase Angle (degrees) |    23.58 |    17.25 |    90.00 |
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

- **Maximum UtilityDemand:** 382.90 kW
  - **Maximum Load:** 412.01 kVA
  - **Percentage of Capacity (MAX):** 16.5%
- **Average Load:** 240.53 kVA
  - **Percentage of Capacity (Avg):** 9.6%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 240.53 kVA
- **Average Power Factor (PF):** 0.916

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 240.51 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 480.09 V
- Average Current (Iavg_A): 289.23 A
- Average kW (Psum_kW): 220.36 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.02 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.916
- **Power Factor Difference:** 0.000 (0.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (240.53) and measured PF (0.916) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   240.53 |         9.6% | 173,182.90 kVA | 751,891.69 TOTAL-HEAT |
| kW |   220.36 |         8.8% | 158,657.53 kWh | 63,063.43 Load-Heat |
| kVAR |    96.43 |         3.9% | 69,426.98 kVARh | - |
| WASTE |    20.17 |         0.8% | 14,525.37 WASTE | 5,773.57 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 751,891.69
- **Load-Heat (BTU/hr):** 63,063.43
- **Field-Heat (BTU/hr):** 5,773.57
- **Load-Heat (BTU, period total):** 45,405,667.91
- **Field-Heat (BTU, period total):** 4,156,968.03

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 6 |   240.53 |   220.36 |    96.05 |     0.92 |    9.6% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   244.53 |   223.72 |    98.34 |     0.91 |    9.8% |
| 01 |   242.66 |   221.72 |    98.24 |     0.91 |    9.7% |
| 02 |   236.95 |   218.00 |    92.57 |     0.92 |    9.5% |
| 03 |   239.33 |   219.11 |    95.91 |     0.92 |    9.6% |
| 04 |   229.03 |   210.00 |    91.05 |     0.92 |    9.2% |
| 05 |   219.49 |   201.70 |    86.29 |     0.92 |    8.8% |
| 06 |   220.67 |   202.72 |    86.95 |     0.92 |    8.8% |
| 07 |   219.79 |   202.67 |    84.79 |     0.92 |    8.8% |
| 08 |   230.89 |   210.57 |    94.23 |     0.91 |    9.2% |
| 09 |   226.14 |   205.56 |    93.64 |     0.91 |    9.0% |
| 10 |   233.77 |   212.78 |    96.41 |     0.91 |    9.4% |
| 11 |   237.22 |   216.69 |    96.16 |     0.91 |    9.5% |
| 12 |   239.94 |   218.38 |    99.07 |     0.91 |    9.6% |
| 13 |   248.37 |   225.95 |   102.82 |     0.91 |    9.9% |
| 14 |   250.63 |   227.79 |   104.20 |     0.91 |   10.0% |
| 15 |   244.42 |   221.64 |   102.67 |     0.91 |    9.8% |
| 16 |   234.90 |   213.85 |    96.96 |     0.91 |    9.4% |
| 17 |   263.93 |   242.25 |   104.51 |     0.92 |   10.6% |
| 18 |   278.48 |   256.45 |   108.39 |     0.92 |   11.1% |
| 19 |   263.79 |   242.87 |   102.78 |     0.92 |   10.6% |
| 20 |   261.72 |   241.72 |   100.11 |     0.92 |   10.5% |
| 21 |   247.95 |   230.11 |    92.04 |     0.93 |    9.9% |
| 22 |   222.16 |   206.04 |    82.88 |     0.93 |    8.9% |
| 23 |   235.99 |   216.27 |    94.11 |     0.92 |    9.4% |

---

# END OF REPORT

# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 447,338.9 kWh (Usage per period)
- **Consumption Cost per unit:** $0.350/kWh (Cost per kWh)
- **Consumption Total Cost:** $156,568.61 (Cost per period)
- **Consumption Total Cost:** $217.46 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** T10 Air Chiller  
**Generated:** 2026-10-03 12:31:59  
**Data Source:** AN53111387-V-1minRES_43200CLP_260901-260930c.csv  

## Time Period

- **Period:** September 01, 2026 thru September 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,200

- **Dataset Coverage:** Complete month (100.0% of 30-day month)
- **Billing Scale Factor:** 1.000x (no normalization needed)

## Facility Information

- **Facility:** Foster Farms
- **Location:** Cherry Ave Facility
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** T10 Air Chiller
- **Power Factor:** 0.893
- **Total Energy (Actual):** 447,338.88 kWh (per period), 621.30 kW (per hour)
- **Total Waste (Actual):** 61,271.16 kWh (per period), 85.10 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_T10-Air-Chiller_AN53111387-1minRES_260901-260930.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_T10-Air-Chiller_AN53111387-1minRES_260901-260930.md


## UNITY MANAGEMENT T10 Air Chiller SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 85.10 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 51.49 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.3500/kWh (all-inclusive)
- **T10 Air Chiller Utility Cost Offset:** $29.78/hour
- **Annual Offset Savings:** $260913/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 213,186 BTU/hr
- **Total Cooling kW No Longer Needed:** 18.75 kW
- **Cooling Energy Cost Avoided:** $6.56/hour
- **Annual Cooling Savings:** $57490/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 103.85 kW
- **CO2e Emissions Avoided:** 339.61 metric tons/year
- **Monthly CO2e Reduction:** 28.30 metric tons/month
- **Hourly CO2e Reduction:** 0.0388 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $13075/year

### Total T10 Air Chiller Unity Savings

- **Per Hour:** $37.84
- **Per Day:** $908.16
- **Per Month:** $27244.73
- **Per Year:** $331478

### T10 Air Chiller Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 586.4 kVAR Max (Avg: 336.1 kVAR/hr ; 242,017 kVAR/mo)
- **Max Harmonic Distortion:** 31.0% Max (range: 3.0% - 31.0%)
- **Max Amperage:** 1,545A Max (range: 72A - 1545A)

---

# T10 Air Chiller DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   264.70 |   254.03 |   280.76 |
| Line to Line Voltage (480v) |   458.47 |   440.00 |   486.30 |
| Current (AMPS) |   903.58 |    71.95 |  1544.55 |
| Phase Angle (degrees) |    26.49 |    17.35 |    35.81 |
| Total Harmonic Distortion (PCT) |    15.52 |     3.00 |    31.03 |

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
| Unity THD Composite (%) | 15.5% | Field-level stress indicator |
| Max Phase THD | 5.2% | Highest THD among all three phases |
| Min Phase THD | 5.2% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,062.15 kW
  - **Maximum Load:** 1,203.29 kVA
  - **Percentage of Capacity (MAX):** 48.1%
- **Average Load:** 706.40 kVA
  - **Percentage of Capacity (Avg):** 28.3%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 706.40 kVA
- **Average Power Factor (PF):** 0.893

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 717.52 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 458.47 V
- Average Current (Iavg_A): 903.58 A
- Average kW (Psum_kW): 621.30 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 11.12 kVA (1.6%)
- **Calculated PF (kW/kVA from averages):** 0.866
- **Power Factor Difference:** 0.027 (3.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (706.40) and measured PF (0.893) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   706.40 |        28.3% | 508,610.03 kVA | 2,119,977.46 TOTAL-HEAT |
| kW |   621.30 |        24.9% | 447,338.88 kWh | 255,389.12 Load-Heat |
| kVAR |   336.13 |        13.4% | 242,016.72 kVARh | - |
| WASTE |    85.10 |         3.4% | 61,271.16 WASTE | 34,980.16 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,119,977.46
- **Load-Heat (BTU/hr):** 255,389.12
- **Field-Heat (BTU/hr):** 34,980.16
- **Load-Heat (BTU, period total):** 183,880,165.47
- **Field-Heat (BTU, period total):** 25,185,716.54

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 9 |   706.40 |   621.30 |   335.33 |     0.88 |   28.3% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   805.45 |   707.13 |   385.33 |     0.88 |   32.2% |
| 01 |   798.20 |   701.57 |   380.27 |     0.88 |   31.9% |
| 02 |   803.09 |   705.45 |   383.45 |     0.88 |   32.1% |
| 03 |   805.96 |   708.23 |   384.38 |     0.88 |   32.2% |
| 04 |   807.38 |   710.09 |   383.98 |     0.88 |   32.3% |
| 05 |   825.84 |   725.93 |   393.37 |     0.88 |   33.0% |
| 06 |   835.18 |   733.11 |   399.67 |     0.88 |   33.4% |
| 07 |   858.73 |   751.64 |   414.63 |     0.88 |   34.3% |
| 08 |   845.32 |   740.69 |   406.74 |     0.88 |   33.8% |
| 09 |   821.69 |   721.78 |   392.23 |     0.88 |   32.9% |
| 10 |   816.80 |   718.36 |   388.35 |     0.88 |   32.7% |
| 11 |   816.82 |   717.77 |   389.55 |     0.88 |   32.7% |
| 12 |   817.01 |   717.38 |   390.60 |     0.88 |   32.7% |
| 13 |   796.24 |   698.99 |   380.86 |     0.88 |   31.8% |
| 14 |   749.95 |   658.68 |   357.85 |     0.88 |   30.0% |
| 15 |   628.44 |   553.37 |   297.03 |     0.88 |   25.1% |
| 16 |   412.43 |   364.78 |   190.86 |     0.88 |   16.5% |
| 17 |   187.59 |   170.72 |    76.41 |     0.91 |    7.5% |
| 18 |   250.04 |   221.16 |   115.02 |     0.88 |   10.0% |
| 19 |   324.64 |   287.50 |   148.41 |     0.89 |   13.0% |
| 20 |   480.42 |   428.97 |   214.36 |     0.89 |   19.2% |
| 21 |   815.93 |   718.30 |   386.38 |     0.88 |   32.6% |
| 22 |   836.01 |   734.93 |   398.02 |     0.88 |   33.4% |
| 23 |   814.51 |   714.76 |   390.17 |     0.88 |   32.6% |

---

# END OF REPORT

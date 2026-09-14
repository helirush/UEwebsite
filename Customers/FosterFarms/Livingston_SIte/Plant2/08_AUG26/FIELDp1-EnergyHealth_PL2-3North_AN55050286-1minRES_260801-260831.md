# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 122,837.4 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $23,953.29 (Cost per period)
- **Consumption Total Cost:** $32.23 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL2-3North  
**Generated:** 2026-09-12 13:39:46  
**Data Source:** AN55050286-V-1minRES_44640CLP_260801-260831c.csv  

## Time Period

- **Period:** August 01, 2026 thru August 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,597

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

- **Transformer:** PL2-3North
- **Power Factor:** 0.605
- **Total Energy (Actual):** 122,837.38 kWh (per period), 165.26 kW (per hour)
- **Total Waste (Actual):** 72,001.83 kWh (per period), 96.87 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL2-3North_AN55050286-1minRES_260801-260831.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL2-3North_AN55050286-1minRES_260801-260831.md


## UNITY MANAGEMENT PL2-3North SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 96.87 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 72.60 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL2-3North Utility Cost Offset:** $18.89/hour
- **Annual Offset Savings:** $165473/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 261,870 BTU/hr
- **Total Cooling kW No Longer Needed:** 23.39 kW
- **Cooling Energy Cost Avoided:** $4.56/hour
- **Annual Cooling Savings:** $39947/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 120.26 kW
- **CO2e Emissions Avoided:** 393.26 metric tons/year
- **Monthly CO2e Reduction:** 32.77 metric tons/month
- **Hourly CO2e Reduction:** 0.0449 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $14944/year

### Total PL2-3North Unity Savings

- **Per Hour:** $25.16
- **Per Day:** $603.74
- **Per Month:** $18112.14
- **Per Year:** $220364

### PL2-3North Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 422.9 kVAR Max (Avg: 203.5 kVAR/hr ; 146,502 kVAR/mo)
- **Max Harmonic Distortion:** 30.1% Max (range: 3.0% - 30.1%)
- **Max Amperage:** 613A Max (range: 19A - 613A)

---

# PL2-3North DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   281.32 |   269.56 |   293.01 |
| Line to Line Voltage (480v) |   487.26 |   466.89 |   507.50 |
| Current (AMPS) |   311.51 |    18.73 |   613.41 |
| Phase Angle (degrees) |    52.66 |    46.29 |    74.99 |
| Total Harmonic Distortion (PCT) |    14.83 |     3.04 |    30.15 |

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
| THD Phase A (%) | 4.9% | IEEE standard per-phase calculation |
| THD Phase B (%) | 4.9% | IEEE standard per-phase calculation |
| THD Phase C (%) | 4.9% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 14.8% | Field-level stress indicator |
| Max Phase THD | 4.9% | Highest THD among all three phases |
| Min Phase THD | 4.9% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 349.37 kW
  - **Maximum Load:** 507.94 kVA
  - **Percentage of Capacity (MAX):** 20.3%
- **Average Load:** 262.13 kVA
  - **Percentage of Capacity (Avg):** 10.5%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 262.13 kVA
- **Average Power Factor (PF):** 0.605

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 262.90 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 487.26 V
- Average Current (Iavg_A): 311.51 A
- Average kW (Psum_kW): 165.26 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.77 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.629
- **Power Factor Difference:** 0.024 (3.9%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (262.13) and measured PF (0.605) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   262.13 |        10.5% | 194,839.21 kVA | 563,901.49 TOTAL-HEAT |
| kW |   165.26 |         6.6% | 122,837.38 kWh | 208,386.90 Load-Heat |
| kVAR |   203.47 |         8.1% | 151,239.20 kVARh | - |
| WASTE |    96.87 |         3.9% | 72,001.83 WASTE | 122,147.16 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 563,901.49
- **Load-Heat (BTU/hr):** 208,386.90
- **Field-Heat (BTU/hr):** 122,147.16
- **Load-Heat (BTU, period total):** 154,890,506.63
- **Field-Heat (BTU, period total):** 90,789,948.56

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 8 |   262.13 |   165.26 |   202.91 |     0.63 |   10.5% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   286.44 |   184.05 |   219.00 |     0.64 |   11.5% |
| 01 |   282.12 |   180.05 |   216.73 |     0.64 |   11.3% |
| 02 |   282.32 |   180.69 |   216.43 |     0.64 |   11.3% |
| 03 |   279.15 |   177.65 |   214.79 |     0.64 |   11.2% |
| 04 |   280.42 |   178.93 |   215.37 |     0.64 |   11.2% |
| 05 |   272.28 |   172.57 |   210.01 |     0.63 |   10.9% |
| 06 |   269.78 |   171.39 |   207.77 |     0.64 |   10.8% |
| 07 |   269.39 |   171.44 |   207.24 |     0.64 |   10.8% |
| 08 |   271.20 |   173.20 |   208.24 |     0.64 |   10.8% |
| 09 |   272.04 |   173.77 |   208.86 |     0.64 |   10.9% |
| 10 |   269.65 |   171.60 |   207.59 |     0.64 |   10.8% |
| 11 |   275.81 |   177.63 |   210.60 |     0.64 |   11.0% |
| 12 |   273.19 |   174.54 |   209.74 |     0.64 |   10.9% |
| 13 |   270.38 |   172.16 |   208.12 |     0.64 |   10.8% |
| 14 |   251.83 |   156.77 |   196.68 |     0.62 |   10.1% |
| 15 |   236.54 |   144.16 |   187.09 |     0.61 |    9.5% |
| 16 |   217.20 |   128.63 |   174.59 |     0.59 |    8.7% |
| 17 |   210.60 |   122.98 |   170.62 |     0.58 |    8.4% |
| 18 |   195.50 |   113.46 |   158.80 |     0.58 |    7.8% |
| 19 |   204.10 |   122.27 |   162.87 |     0.60 |    8.2% |
| 20 |   236.17 |   147.90 |   183.56 |     0.63 |    9.4% |
| 21 |   283.70 |   182.04 |   217.04 |     0.64 |   11.3% |
| 22 |   298.39 |   192.16 |   227.78 |     0.64 |   11.9% |
| 23 |   302.87 |   196.17 |   230.34 |     0.65 |   12.1% |

---

# END OF REPORT

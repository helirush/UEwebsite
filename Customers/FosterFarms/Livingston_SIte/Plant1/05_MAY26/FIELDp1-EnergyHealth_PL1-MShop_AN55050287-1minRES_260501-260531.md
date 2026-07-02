# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 197,125.6 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $38,439.49 (Cost per period)
- **Consumption Total Cost:** $51.74 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL1-MShop  
**Generated:** 2026-06-18 23:48:15  
**Data Source:** AN55050287-V-1minRES_44640CLP_260501-260531c.csv  

## Time Period

- **Period:** May 01, 2026 thru May 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,574

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

- **Transformer:** PL1-MShop
- **Power Factor:** 0.862
- **Total Energy (Actual):** 197,125.60 kWh (per period), 265.35 kW (per hour)
- **Total Waste (Actual):** 30,095.38 kWh (per period), 40.51 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL1-MShop_AN55050287-1minRES_260501-260531.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL1-MShop_AN55050287-1minRES_260501-260531.md


## UNITY MANAGEMENT PL1-MShop SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 40.51 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL1-MShop Utility Cost Offset:** $7.90/hour
- **Annual Offset Savings:** $69200/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 145,292 BTU/hr
- **Total Cooling kW No Longer Needed:** 12.71 kW
- **Cooling Energy Cost Avoided:** $2.48/hour
- **Annual Cooling Savings:** $21716/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 53.22 kW
- **CO2e Emissions Avoided:** 174.05 metric tons/year
- **Monthly CO2e Reduction:** 14.50 metric tons/month
- **Hourly CO2e Reduction:** 0.0199 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $6701/year

### Total PL1-MShop Unity Savings

- **Per Hour:** $11.14
- **Per Day:** $267.45
- **Per Month:** $8023.38
- **Per Year:** $97618

### PL1-MShop Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 458.7 kVAR Max (Avg: 152.1 kVAR/hr ; 109,525 kVAR/mo)
- **Max Harmonic Distortion:** 29.8% Max (range: 3.0% - 29.8%)
- **Max Amperage:** 1,130A Max (range: 95A - 1130A)

---

# PL1-MShop DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   282.93 |   271.12 |   293.20 |
| Line to Line Voltage (480v) |   490.05 |   469.60 |   507.83 |
| Current (AMPS) |   361.06 |    95.43 |  1130.09 |
| Phase Angle (degrees) |    30.17 |    18.01 |    46.61 |
| Total Harmonic Distortion (PCT) |    13.77 |     3.00 |    29.85 |

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
| THD Phase A (%) | 4.6% | IEEE standard per-phase calculation |
| THD Phase B (%) | 4.6% | IEEE standard per-phase calculation |
| THD Phase C (%) | 4.6% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 13.8% | Field-level stress indicator |
| Max Phase THD | 4.6% | Highest THD among all three phases |
| Min Phase THD | 4.6% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 836.84 kW
  - **Maximum Load:** 951.73 kVA
  - **Percentage of Capacity (MAX):** 38.1%
- **Average Load:** 305.86 kVA
  - **Percentage of Capacity (Avg):** 12.2%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 305.86 kVA
- **Average Power Factor (PF):** 0.862

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 306.46 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 490.05 V
- Average Current (Iavg_A): 361.06 A
- Average kW (Psum_kW): 265.35 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.61 kVA (0.2%)
- **Calculated PF (kW/kVA from averages):** 0.866
- **Power Factor Difference:** 0.004 (0.4%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (305.86) and measured PF (0.862) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   305.86 |        12.2% | 227,220.98 kVA | 905,398.50 TOTAL-HEAT |
| kW |   265.35 |        10.6% | 197,125.60 kWh | 119,919.87 Load-Heat |
| kVAR |   152.12 |         6.1% | 113,008.28 kVARh | - |
| WASTE |    40.51 |         1.6% | 30,095.38 WASTE | 18,308.30 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 905,398.50
- **Load-Heat (BTU/hr):** 119,919.87
- **Field-Heat (BTU/hr):** 18,308.30
- **Load-Heat (BTU, period total):** 89,088,474.15
- **Field-Heat (BTU, period total):** 13,601,233.90

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 5 |   305.86 |   265.35 |   150.74 |     0.87 |   12.2% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   338.26 |   296.62 |   161.17 |     0.88 |   13.5% |
| 01 |   331.56 |   288.40 |   161.80 |     0.87 |   13.3% |
| 02 |   341.83 |   298.92 |   164.03 |     0.87 |   13.7% |
| 03 |   340.79 |   296.30 |   166.78 |     0.87 |   13.6% |
| 04 |   359.78 |   313.38 |   175.18 |     0.87 |   14.4% |
| 05 |   346.65 |   300.65 |   171.11 |     0.87 |   13.9% |
| 06 |   336.12 |   291.63 |   165.96 |     0.87 |   13.4% |
| 07 |   355.05 |   308.11 |   175.29 |     0.87 |   14.2% |
| 08 |   362.22 |   314.69 |   178.35 |     0.87 |   14.5% |
| 09 |   353.83 |   306.81 |   175.52 |     0.87 |   14.2% |
| 10 |   346.83 |   300.41 |   172.63 |     0.87 |   13.9% |
| 11 |   347.52 |   301.81 |   171.36 |     0.87 |   13.9% |
| 12 |   333.17 |   288.05 |   166.32 |     0.86 |   13.3% |
| 13 |   335.08 |   289.32 |   167.86 |     0.86 |   13.4% |
| 14 |   304.24 |   259.40 |   157.81 |     0.85 |   12.2% |
| 15 |   263.94 |   225.49 |   135.43 |     0.85 |   10.6% |
| 16 |   230.78 |   198.00 |   116.70 |     0.86 |    9.2% |
| 17 |   201.45 |   172.80 |   102.16 |     0.86 |    8.1% |
| 18 |   167.42 |   142.26 |    87.32 |     0.85 |    6.7% |
| 19 |   184.99 |   158.38 |    94.46 |     0.86 |    7.4% |
| 20 |   235.67 |   206.23 |   112.51 |     0.88 |    9.4% |
| 21 |   296.60 |   259.23 |   142.64 |     0.87 |   11.9% |
| 22 |   312.36 |   274.76 |   147.20 |     0.88 |   12.5% |
| 23 |   315.56 |   277.64 |   148.70 |     0.88 |   12.6% |

---

# END OF REPORT

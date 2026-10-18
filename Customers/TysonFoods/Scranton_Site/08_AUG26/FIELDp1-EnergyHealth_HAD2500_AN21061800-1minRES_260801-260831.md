# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 885,781.1 kWh (Usage per period)
- **Consumption Cost per unit:** $0.110/kWh (Cost per kWh)
- **Consumption Total Cost:** $97,435.92 (Cost per period)
- **Consumption Total Cost:** $130.96 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** HAD2500  
**Generated:** 2026-09-12 17:52:14  
**Data Source:** AN21061800-V-1minRES_44640CLP_260801-260831c.csv  

## Time Period

- **Period:** August 01, 2026 thru August 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,640

- **Dataset Coverage:** Complete month (100.0% of 31-day month)
- **Billing Scale Factor:** 1.000x (no normalization needed)

## Facility Information

- **Facility:** Tyson Foods
- **Location:** Scranton Facility
- **Analysis Type:** Energy Field Performance Assessment
- **Technology Focus:** Unity Energy Management Solutions

---

## Executive Summary

*Brief overview of key transformer performance metrics and energy consumption.*

- **Transformer:** HAD2500
- **Power Factor:** 0.953
- **Total Energy (Actual):** 885,781.11 kWh (per period), 1190.57 kW (per hour)
- **Total Waste (Actual):** 42,040.88 kWh (per period), 56.51 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_HAD2500_AN21061800-1minRES_260801-260831.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_HAD2500_AN21061800-1minRES_260801-260831.md


## UNITY MANAGEMENT HAD2500 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 56.51 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 26.59 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1100/kWh (all-inclusive)
- **HAD2500 Utility Cost Offset:** $6.22/hour
- **Annual Offset Savings:** $54450/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 96,732 BTU/hr
- **Total Cooling kW No Longer Needed:** 9.12 kW
- **Cooling Energy Cost Avoided:** $1.00/hour
- **Annual Cooling Savings:** $8790/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 65.63 kW
- **CO2e Emissions Avoided:** 214.62 metric tons/year
- **Monthly CO2e Reduction:** 17.88 metric tons/month
- **Hourly CO2e Reduction:** 0.0245 metric tons/hour
- **CO2e Value Rate:** $10/metric ton
- **Annual CO2e Value:** $2146/year

### Total HAD2500 Unity Savings

- **Per Hour:** $7.46
- **Per Day:** $179.14
- **Per Month:** $5374.16
- **Per Year:** $65386

### HAD2500 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 841.2 kVAR Max (Avg: 371.1 kVAR/hr ; 267,219 kVAR/mo)
- **Max Harmonic Distortion:** 32.0% Max (range: 3.0% - 32.0%)
- **Max Amperage:** 2,191A Max (range: 109A - 2191A)

---

# HAD2500 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   278.56 |   272.32 |   287.72 |
| Line to Line Voltage (480v) |   482.47 |   471.68 |   498.35 |
| Current (AMPS) |  1497.29 |   108.57 |  2190.91 |
| Phase Angle (degrees) |    16.50 |     2.04 |    56.55 |
| Total Harmonic Distortion (PCT) |    16.38 |     3.00 |    32.05 |

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
| THD Phase A (%) | 5.5% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.5% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.5% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 16.4% | Field-level stress indicator |
| Max Phase THD | 5.5% | Highest THD among all three phases |
| Min Phase THD | 5.5% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,634.44 kW
  - **Maximum Load:** 1,788.97 kVA
  - **Percentage of Capacity (MAX):** 71.6%
- **Average Load:** 1,247.07 kVA
  - **Percentage of Capacity (Avg):** 49.9%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,247.07 kVA
- **Average Power Factor (PF):** 0.953

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,251.24 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 482.47 V
- Average Current (Iavg_A): 1497.29 A
- Average kW (Psum_kW): 1190.57 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 4.17 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.952
- **Power Factor Difference:** 0.001 (0.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1247.07) and measured PF (0.953) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,247.07 |        49.9% | 927,821.99 kVA | 4,062,380.28 TOTAL-HEAT |
| kW | 1,190.57 |        47.6% | 885,781.11 kWh | 184,071.99 Load-Heat |
| kVAR |   371.14 |        14.8% | 276,125.82 kVARh | - |
| WASTE |    56.51 |         2.3% | 42,040.88 WASTE | 8,736.41 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 4,062,380.28
- **Load-Heat (BTU/hr):** 184,071.99
- **Field-Heat (BTU/hr):** 8,736.41
- **Load-Heat (BTU, period total):** 136,949,558.34
- **Field-Heat (BTU, period total):** 6,499,890.02

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 8 | 1,247.07 | 1,190.57 |   355.71 |     0.95 |   49.9% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,257.11 | 1,198.67 |   369.05 |     0.95 |   50.3% |
| 01 | 1,241.34 | 1,184.46 |   361.84 |     0.95 |   49.7% |
| 02 | 1,240.38 | 1,184.56 |   359.79 |     0.95 |   49.6% |
| 03 | 1,227.09 | 1,173.27 |   349.26 |     0.96 |   49.1% |
| 04 | 1,224.46 | 1,170.98 |   346.45 |     0.96 |   49.0% |
| 05 | 1,217.30 | 1,162.58 |   346.90 |     0.96 |   48.7% |
| 06 | 1,223.35 | 1,166.74 |   348.99 |     0.95 |   48.9% |
| 07 | 1,229.53 | 1,172.90 |   352.25 |     0.95 |   49.2% |
| 08 | 1,223.59 | 1,168.23 |   351.65 |     0.95 |   48.9% |
| 09 | 1,227.72 | 1,170.72 |   352.10 |     0.95 |   49.1% |
| 10 | 1,230.19 | 1,174.07 |   342.97 |     0.95 |   49.2% |
| 11 | 1,230.21 | 1,174.83 |   343.65 |     0.95 |   49.2% |
| 12 | 1,225.98 | 1,171.68 |   338.45 |     0.96 |   49.0% |
| 13 | 1,214.55 | 1,162.42 |   332.84 |     0.96 |   48.6% |
| 14 | 1,223.98 | 1,171.95 |   335.44 |     0.96 |   49.0% |
| 15 | 1,253.84 | 1,201.76 |   339.49 |     0.96 |   50.2% |
| 16 | 1,304.33 | 1,245.31 |   373.80 |     0.95 |   52.2% |
| 17 | 1,294.53 | 1,234.27 |   371.72 |     0.95 |   51.8% |
| 18 | 1,268.25 | 1,207.16 |   366.49 |     0.95 |   50.7% |
| 19 | 1,274.39 | 1,214.66 |   372.30 |     0.95 |   51.0% |
| 20 | 1,282.59 | 1,224.17 |   368.97 |     0.95 |   51.3% |
| 21 | 1,275.77 | 1,216.92 |   368.21 |     0.95 |   51.0% |
| 22 | 1,273.63 | 1,215.15 |   369.83 |     0.95 |   50.9% |
| 23 | 1,265.97 | 1,206.29 |   374.66 |     0.95 |   50.6% |

---

# END OF REPORT

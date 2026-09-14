# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 605,766.0 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $118,124.38 (Cost per period)
- **Consumption Total Cost:** $191.52 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Rendering-1  
**Generated:** 2026-09-12 13:40:23  
**Data Source:** AN55050434-V-1minRES_44640CLP_260801-260831c.csv  

## Time Period

- **Period:** August 01, 2026 thru August 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 37,007

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

- **Transformer:** Rendering-1
- **Power Factor:** 0.804
- **Total Energy (Actual):** 605,766.05 kWh (per period), 982.14 kW (per hour)
- **Total Waste (Actual):** 147,669.11 kWh (per period), 239.42 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Rendering-1_AN55050434-1minRES_260801-260831.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Rendering-1_AN55050434-1minRES_260801-260831.md


## UNITY MANAGEMENT Rendering-1 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 239.42 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 167.16 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Rendering-1 Utility Cost Offset:** $46.69/hour
- **Annual Offset Savings:** $408974/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 638,370 BTU/hr
- **Total Cooling kW No Longer Needed:** 56.99 kW
- **Cooling Energy Cost Avoided:** $11.11/hour
- **Annual Cooling Savings:** $97346/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 296.41 kW
- **CO2e Emissions Avoided:** 969.30 metric tons/year
- **Monthly CO2e Reduction:** 80.77 metric tons/month
- **Hourly CO2e Reduction:** 0.1107 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $36833/year

### Total Rendering-1 Unity Savings

- **Per Hour:** $62.00
- **Per Day:** $1488.09
- **Per Month:** $44642.76
- **Per Year:** $543154

### Rendering-1 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,080.5 kVAR Max (Avg: 726.4 kVAR/hr ; 522,982 kVAR/mo)
- **Max Harmonic Distortion:** 30.5% Max (range: 3.4% - 30.5%)
- **Max Amperage:** 1,858A Max (range: 1073A - 1858A)

---

# Rendering-1 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   272.81 |   263.03 |   283.95 |
| Line to Line Voltage (480v) |   472.52 |   455.59 |   491.82 |
| Current (AMPS) |  1492.94 |  1072.59 |  1857.65 |
| Phase Angle (degrees) |    36.50 |    29.89 |    48.55 |
| Total Harmonic Distortion (PCT) |    16.34 |     3.36 |    30.54 |

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
| THD Phase A (%) | 5.4% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.4% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.4% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 16.3% | Field-level stress indicator |
| Max Phase THD | 5.4% | Highest THD among all three phases |
| Min Phase THD | 5.4% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,229.42 kW
  - **Maximum Load:** 1,497.56 kVA
  - **Percentage of Capacity (MAX):** 59.9%
- **Average Load:** 1,221.56 kVA
  - **Percentage of Capacity (Avg):** 48.9%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,221.56 kVA
- **Average Power Factor (PF):** 0.804

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,221.87 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 472.52 V
- Average Current (Iavg_A): 1492.94 A
- Average kW (Psum_kW): 982.14 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.32 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.804
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1221.56) and measured PF (0.804) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,221.56 |        48.9% | 753,435.16 kVA | 3,351,192.64 TOTAL-HEAT |
| kW |   982.14 |        39.3% | 605,766.05 kWh | 656,815.18 Load-Heat |
| kVAR |   726.36 |        29.1% | 448,008.97 kVARh | - |
| WASTE |   239.42 |         9.6% | 147,669.11 WASTE | 160,113.49 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,351,192.64
- **Load-Heat (BTU/hr):** 656,815.18
- **Field-Heat (BTU/hr):** 160,113.49
- **Load-Heat (BTU, period total):** 405,112,656.44
- **Field-Heat (BTU, period total):** 98,755,332.81

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 8 | 1,221.56 |   982.14 |   725.55 |     0.80 |   48.9% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,251.68 | 1,005.72 |   744.18 |     0.80 |   50.1% |
| 01 | 1,254.50 | 1,008.22 |   745.59 |     0.80 |   50.2% |
| 02 | 1,237.47 |   994.10 |   735.97 |     0.80 |   49.5% |
| 03 | 1,236.61 |   991.09 |   738.73 |     0.80 |   49.5% |
| 04 | 1,242.97 |   996.82 |   741.54 |     0.80 |   49.7% |
| 05 | 1,232.75 |   990.93 |   732.54 |     0.80 |   49.3% |
| 06 | 1,242.08 |   998.83 |   737.31 |     0.80 |   49.7% |
| 07 | 1,242.71 |   997.58 |   740.30 |     0.80 |   49.7% |
| 08 | 1,248.88 | 1,004.42 |   741.36 |     0.80 |   50.0% |
| 09 | 1,260.62 | 1,015.91 |   745.62 |     0.81 |   50.4% |
| 10 | 1,264.28 | 1,017.75 |   749.32 |     0.81 |   50.6% |
| 11 | 1,240.43 |   994.47 |   740.59 |     0.80 |   49.6% |
| 12 | 1,236.61 |   989.03 |   741.41 |     0.80 |   49.5% |
| 13 | 1,214.27 |   964.74 |   736.79 |     0.79 |   48.6% |
| 14 | 1,206.39 |   959.09 |   731.17 |     0.80 |   48.3% |
| 15 | 1,219.15 |   976.64 |   728.94 |     0.80 |   48.8% |
| 16 | 1,204.84 |   970.68 |   713.34 |     0.81 |   48.2% |
| 17 | 1,179.33 |   947.20 |   702.12 |     0.80 |   47.2% |
| 18 | 1,145.55 |   916.13 |   687.23 |     0.80 |   45.8% |
| 19 | 1,151.95 |   929.36 |   679.99 |     0.81 |   46.1% |
| 20 | 1,185.66 |   966.97 |   685.52 |     0.82 |   47.4% |
| 21 | 1,181.08 |   962.42 |   683.93 |     0.81 |   47.2% |
| 22 | 1,201.54 |   972.01 |   705.73 |     0.81 |   48.1% |
| 23 | 1,243.73 | 1,003.65 |   733.89 |     0.81 |   49.7% |

---

# END OF REPORT

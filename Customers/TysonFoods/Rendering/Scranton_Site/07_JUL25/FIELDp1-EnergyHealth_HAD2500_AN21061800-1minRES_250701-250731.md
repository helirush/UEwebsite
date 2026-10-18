# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 940,048.4 kWh (Usage per period)
- **Consumption Cost per unit:** $0.110/kWh (Cost per kWh)
- **Consumption Total Cost:** $103,405.33 (Cost per period)
- **Consumption Total Cost:** $139.01 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** HAD2500  
**Generated:** 2026-09-12 17:53:36  
**Data Source:** AN21061800-V-1minRES_44640CLP_250701-250731c.csv  

## Time Period

- **Period:** July 01, 2025 thru July 31, 2025
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,632

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
- **Power Factor:** 0.979
- **Total Energy (Actual):** 940,048.42 kWh (per period), 1263.73 kW (per hour)
- **Total Waste (Actual):** 20,728.81 kWh (per period), 27.87 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_HAD2500_AN21061800-1minRES_250701-250731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_HAD2500_AN21061800-1minRES_250701-250731.md


## UNITY MANAGEMENT HAD2500 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 27.87 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 12.09 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1100/kWh (all-inclusive)
- **HAD2500 Utility Cost Offset:** $3.07/hour
- **Annual Offset Savings:** $26852/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 44,001 BTU/hr
- **Total Cooling kW No Longer Needed:** 4.26 kW
- **Cooling Energy Cost Avoided:** $0.47/hour
- **Annual Cooling Savings:** $4102/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 32.12 kW
- **CO2e Emissions Avoided:** 105.05 metric tons/year
- **Monthly CO2e Reduction:** 8.75 metric tons/month
- **Hourly CO2e Reduction:** 0.0120 metric tons/hour
- **CO2e Value Rate:** $10/metric ton
- **Annual CO2e Value:** $1050/year

### Total HAD2500 Unity Savings

- **Per Hour:** $3.65
- **Per Day:** $87.68
- **Per Month:** $2630.50
- **Per Year:** $32004

### HAD2500 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,258.3 kVAR Max (Avg: 266.8 kVAR/hr ; 192,130 kVAR/mo)
- **Max Harmonic Distortion:** 31.0% Max (range: 3.3% - 31.0%)
- **Max Amperage:** 2,464A Max (range: 226A - 2464A)

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
| Line to Neutral Voltage (277v) |   280.83 |   272.77 |   290.19 |
| Line to Line Voltage (480v) |   486.41 |   472.46 |   502.62 |
| Current (AMPS) |  1535.95 |   226.19 |  2464.17 |
| Phase Angle (degrees) |    10.82 |     0.57 |    49.48 |
| Total Harmonic Distortion (PCT) |    16.44 |     3.25 |    31.01 |

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

- **Maximum UtilityDemand:** 1,712.53 kW
  - **Maximum Load:** 2,017.37 kVA
  - **Percentage of Capacity (MAX):** 80.7%
- **Average Load:** 1,291.60 kVA
  - **Percentage of Capacity (Avg):** 51.7%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,291.60 kVA
- **Average Power Factor (PF):** 0.979

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,294.03 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 486.41 V
- Average Current (Iavg_A): 1535.95 A
- Average kW (Psum_kW): 1263.73 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 2.43 kVA (0.2%)
- **Calculated PF (kW/kVA from averages):** 0.977
- **Power Factor Difference:** 0.003 (0.3%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1291.60) and measured PF (0.979) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,291.60 |        51.7% | 960,777.23 kVA | 4,312,034.46 TOTAL-HEAT |
| kW | 1,263.73 |        50.5% | 940,048.42 kWh | 93,032.32 Load-Heat |
| kVAR |   266.85 |        10.7% | 198,498.99 kVARh | - |
| WASTE |    27.87 |         1.1% | 20,728.81 WASTE | 2,051.44 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 4,312,034.46
- **Load-Heat (BTU/hr):** 93,032.32
- **Field-Heat (BTU/hr):** 2,051.44
- **Load-Heat (BTU, period total):** 69,203,639.99
- **Field-Heat (BTU, period total):** 1,525,994.73

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 | 1,291.60 | 1,263.73 |   252.42 |     0.98 |   51.7% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,324.96 | 1,297.32 |   258.00 |     0.98 |   53.0% |
| 01 | 1,316.19 | 1,289.25 |   253.85 |     0.98 |   52.6% |
| 02 | 1,292.43 | 1,266.86 |   242.91 |     0.98 |   51.7% |
| 03 | 1,302.32 | 1,276.30 |   245.86 |     0.98 |   52.1% |
| 04 | 1,296.51 | 1,273.25 |   234.07 |     0.98 |   51.9% |
| 05 | 1,270.56 | 1,247.52 |   228.38 |     0.98 |   50.8% |
| 06 | 1,218.20 | 1,195.47 |   217.30 |     0.98 |   48.7% |
| 07 | 1,237.71 | 1,211.76 |   234.21 |     0.98 |   49.5% |
| 08 | 1,251.76 | 1,225.46 |   241.12 |     0.98 |   50.1% |
| 09 | 1,260.14 | 1,230.09 |   256.75 |     0.98 |   50.4% |
| 10 | 1,245.65 | 1,215.21 |   252.11 |     0.98 |   49.8% |
| 11 | 1,261.87 | 1,233.13 |   250.34 |     0.98 |   50.5% |
| 12 | 1,294.79 | 1,266.88 |   251.35 |     0.98 |   51.8% |
| 13 | 1,304.82 | 1,275.56 |   262.15 |     0.98 |   52.2% |
| 14 | 1,315.27 | 1,284.19 |   266.89 |     0.98 |   52.6% |
| 15 | 1,297.71 | 1,268.18 |   256.54 |     0.98 |   51.9% |
| 16 | 1,270.60 | 1,243.76 |   246.12 |     0.98 |   50.8% |
| 17 | 1,257.74 | 1,230.63 |   246.12 |     0.98 |   50.3% |
| 18 | 1,305.15 | 1,276.35 |   259.97 |     0.98 |   52.2% |
| 19 | 1,330.70 | 1,299.22 |   275.86 |     0.98 |   53.2% |
| 20 | 1,338.95 | 1,308.36 |   273.16 |     0.98 |   53.6% |
| 21 | 1,336.81 | 1,307.44 |   266.62 |     0.98 |   53.5% |
| 22 | 1,337.42 | 1,306.36 |   273.45 |     0.98 |   53.5% |
| 23 | 1,330.09 | 1,300.98 |   264.91 |     0.98 |   53.2% |

---

# END OF REPORT

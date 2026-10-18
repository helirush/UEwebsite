# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 860,421.9 kWh (Usage per period)
- **Consumption Cost per unit:** $0.110/kWh (Cost per kWh)
- **Consumption Total Cost:** $94,646.41 (Cost per period)
- **Consumption Total Cost:** $144.80 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** HAD2500  
**Generated:** 2026-09-12 17:54:00  
**Data Source:** AN21061800-V-1minRES_44640CLP_251001-251031c.csv  

## Time Period

- **Period:** October 01, 2025 thru October 31, 2025
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 39,219

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
- **Total Energy (Actual):** 860,421.87 kWh (per period), 1316.33 kW (per hour)
- **Total Waste (Actual):** 19,179.72 kWh (per period), 29.34 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_HAD2500_AN21061800-1minRES_251001-251031.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_HAD2500_AN21061800-1minRES_251001-251031.md


## UNITY MANAGEMENT HAD2500 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 29.34 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 12.79 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1100/kWh (all-inclusive)
- **HAD2500 Utility Cost Offset:** $3.23/hour
- **Annual Offset Savings:** $28274/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 46,667 BTU/hr
- **Total Cooling kW No Longer Needed:** 4.40 kW
- **Cooling Energy Cost Avoided:** $0.48/hour
- **Annual Cooling Savings:** $4238/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 33.74 kW
- **CO2e Emissions Avoided:** 110.34 metric tons/year
- **Monthly CO2e Reduction:** 9.19 metric tons/month
- **Hourly CO2e Reduction:** 0.0126 metric tons/hour
- **CO2e Value Rate:** $10/metric ton
- **Annual CO2e Value:** $1103/year

### Total HAD2500 Unity Savings

- **Per Hour:** $3.84
- **Per Day:** $92.10
- **Per Month:** $2762.95
- **Per Year:** $33616

### HAD2500 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 784.5 kVAR Max (Avg: 279.5 kVAR/hr ; 201,227 kVAR/mo)
- **Max Harmonic Distortion:** 30.7% Max (range: 3.1% - 30.7%)
- **Max Amperage:** 2,109A Max (range: 700A - 2109A)

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
| Line to Neutral Voltage (277v) |   279.09 |   274.50 |   286.62 |
| Line to Line Voltage (480v) |   483.40 |   475.44 |   496.45 |
| Current (AMPS) |  1608.75 |   700.44 |  2108.53 |
| Phase Angle (degrees) |    10.93 |     2.56 |    41.20 |
| Total Harmonic Distortion (PCT) |    16.84 |     3.06 |    30.67 |

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
| THD Phase A (%) | 5.6% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.6% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.6% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 16.8% | Field-level stress indicator |
| Max Phase THD | 5.6% | Highest THD among all three phases |
| Min Phase THD | 5.6% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,628.80 kW
  - **Maximum Load:** 1,751.17 kVA
  - **Percentage of Capacity (MAX):** 70.0%
- **Average Load:** 1,345.68 kVA
  - **Percentage of Capacity (Avg):** 53.8%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,345.68 kVA
- **Average Power Factor (PF):** 0.979

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,346.95 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 483.40 V
- Average Current (Iavg_A): 1608.75 A
- Average kW (Psum_kW): 1316.33 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 1.28 kVA (0.1%)
- **Calculated PF (kW/kVA from averages):** 0.977
- **Power Factor Difference:** 0.001 (0.1%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1345.68) and measured PF (0.979) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,345.68 |        53.8% | 879,601.59 kVA | 4,491,519.33 TOTAL-HEAT |
| kW | 1,316.33 |        52.7% | 860,421.87 kWh | 97,937.61 Load-Heat |
| kVAR |   279.48 |        11.2% | 182,683.23 kVARh | - |
| WASTE |    29.34 |         1.2% | 19,179.72 WASTE | 2,183.13 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 4,491,519.33
- **Load-Heat (BTU/hr):** 97,937.61
- **Field-Heat (BTU/hr):** 2,183.13
- **Load-Heat (BTU, period total):** 64,016,918.83
- **Field-Heat (BTU, period total):** 1,427,005.22

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 10 | 1,345.68 | 1,316.33 |   262.06 |     0.98 |   53.8% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,349.39 | 1,323.50 |   248.03 |     0.98 |   54.0% |
| 01 | 1,357.87 | 1,330.49 |   256.47 |     0.98 |   54.3% |
| 02 | 1,346.03 | 1,318.01 |   259.40 |     0.98 |   53.8% |
| 03 | 1,317.80 | 1,290.94 |   250.08 |     0.98 |   52.7% |
| 04 | 1,336.27 | 1,307.23 |   259.44 |     0.98 |   53.5% |
| 05 | 1,347.58 | 1,316.42 |   265.03 |     0.98 |   53.9% |
| 06 | 1,347.35 | 1,315.72 |   262.78 |     0.98 |   53.9% |
| 07 | 1,359.90 | 1,325.93 |   272.76 |     0.98 |   54.4% |
| 08 | 1,357.47 | 1,326.15 |   266.14 |     0.98 |   54.3% |
| 09 | 1,364.63 | 1,335.49 |   260.70 |     0.98 |   54.6% |
| 10 | 1,340.82 | 1,314.40 |   250.63 |     0.98 |   53.6% |
| 11 | 1,325.76 | 1,297.65 |   258.61 |     0.98 |   53.0% |
| 12 | 1,327.13 | 1,299.71 |   257.58 |     0.98 |   53.1% |
| 13 | 1,353.04 | 1,324.89 |   261.90 |     0.98 |   54.1% |
| 14 | 1,335.80 | 1,307.87 |   258.35 |     0.98 |   53.4% |
| 15 | 1,342.44 | 1,313.26 |   265.06 |     0.98 |   53.7% |
| 16 | 1,337.27 | 1,306.58 |   270.18 |     0.98 |   53.5% |
| 17 | 1,352.93 | 1,318.83 |   283.00 |     0.97 |   54.1% |
| 18 | 1,336.14 | 1,301.90 |   279.26 |     0.97 |   53.4% |
| 19 | 1,338.35 | 1,308.41 |   260.48 |     0.98 |   53.5% |
| 20 | 1,330.99 | 1,300.97 |   260.57 |     0.98 |   53.2% |
| 21 | 1,339.65 | 1,311.75 |   254.91 |     0.98 |   53.6% |
| 22 | 1,388.15 | 1,359.65 |   268.23 |     0.98 |   55.5% |
| 23 | 1,369.57 | 1,342.32 |   259.40 |     0.98 |   54.8% |

---

# END OF REPORT

# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 897,492.9 kWh (Usage per period)
- **Consumption Cost per unit:** $0.110/kWh (Cost per kWh)
- **Consumption Total Cost:** $98,724.22 (Cost per period)
- **Consumption Total Cost:** $139.82 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** HAD2500  
**Generated:** 2026-09-12 17:53:15  
**Data Source:** AN21061800-V-1minRES_44640CLP_250501-250531c.csv  

## Time Period

- **Period:** May 01, 2025 thru May 31, 2025
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 42,366

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
- **Power Factor:** 0.978
- **Total Energy (Actual):** 897,492.94 kWh (per period), 1271.06 kW (per hour)
- **Total Waste (Actual):** 18,168.30 kWh (per period), 25.73 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_HAD2500_AN21061800-1minRES_250501-250531.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_HAD2500_AN21061800-1minRES_250501-250531.md


## UNITY MANAGEMENT HAD2500 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 25.73 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 11.97 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1100/kWh (all-inclusive)
- **HAD2500 Utility Cost Offset:** $2.83/hour
- **Annual Offset Savings:** $24794/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 47,631 BTU/hr
- **Total Cooling kW No Longer Needed:** 4.61 kW
- **Cooling Energy Cost Avoided:** $0.51/hour
- **Annual Cooling Savings:** $4442/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 30.34 kW
- **CO2e Emissions Avoided:** 99.22 metric tons/year
- **Monthly CO2e Reduction:** 8.27 metric tons/month
- **Hourly CO2e Reduction:** 0.0113 metric tons/hour
- **CO2e Value Rate:** $10/metric ton
- **Annual CO2e Value:** $992/year

### Total HAD2500 Unity Savings

- **Per Hour:** $3.45
- **Per Day:** $82.82
- **Per Month:** $2484.54
- **Per Year:** $30229

### HAD2500 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 929.0 kVAR Max (Avg: 257.0 kVAR/hr ; 185,072 kVAR/mo)
- **Max Harmonic Distortion:** 103.9% Max (range: 0.0% - 103.9%)
- **Max Amperage:** 2,192A Max (range: 75A - 2192A)

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
| Line to Neutral Voltage (277v) |   279.81 |   274.27 |   286.85 |
| Line to Line Voltage (480v) |   484.64 |   475.05 |   496.83 |
| Current (AMPS) |  1547.03 |    74.57 |  2191.73 |
| Phase Angle (degrees) |    10.22 |     1.87 |    46.82 |
| Total Harmonic Distortion (PCT) |    25.46 |     0.00 |   103.86 |

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
| THD Phase A (%) | 8.3% | IEEE standard per-phase calculation |
| THD Phase B (%) | 9.3% | IEEE standard per-phase calculation |
| THD Phase C (%) | 7.8% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 25.5% | Field-level stress indicator |
| Max Phase THD | 9.3% | Highest THD among all three phases |
| Min Phase THD | 7.8% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,663.79 kW
  - **Maximum Load:** 1,795.65 kVA
  - **Percentage of Capacity (MAX):** 71.8%
- **Average Load:** 1,296.79 kVA
  - **Percentage of Capacity (Avg):** 51.9%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,296.79 kVA
- **Average Power Factor (PF):** 0.978

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,298.62 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 484.64 V
- Average Current (Iavg_A): 1547.03 A
- Average kW (Psum_kW): 1271.06 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 1.83 kVA (0.1%)
- **Calculated PF (kW/kVA from averages):** 0.979
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1296.79) and measured PF (0.978) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,296.79 |        51.9% | 915,661.23 kVA | 4,337,025.00 TOTAL-HEAT |
| kW | 1,271.06 |        50.8% | 897,492.94 kWh | 86,054.04 Load-Heat |
| kVAR |   257.04 |        10.3% | 181,499.09 kVARh | - |
| WASTE |    25.73 |         1.0% | 18,168.30 WASTE | 1,742.03 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 4,337,025.00
- **Load-Heat (BTU/hr):** 86,054.04
- **Field-Heat (BTU/hr):** 1,742.03
- **Load-Heat (BTU, period total):** 60,762,760.36
- **Field-Heat (BTU, period total):** 1,230,043.98

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 5 | 1,296.79 | 1,271.06 |   227.51 |     0.98 |   51.9% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,326.35 | 1,300.20 |   232.48 |     0.98 |   53.1% |
| 01 | 1,324.87 | 1,297.83 |   237.09 |     0.98 |   53.0% |
| 02 | 1,313.80 | 1,283.71 |   243.99 |     0.98 |   52.6% |
| 03 | 1,291.64 | 1,261.12 |   241.40 |     0.98 |   51.7% |
| 04 | 1,299.55 | 1,266.87 |   251.71 |     0.97 |   52.0% |
| 05 | 1,284.68 | 1,253.05 |   245.52 |     0.98 |   51.4% |
| 06 | 1,270.30 | 1,235.85 |   243.67 |     0.97 |   50.8% |
| 07 | 1,257.29 | 1,230.00 |   231.95 |     0.98 |   50.3% |
| 08 | 1,270.44 | 1,243.93 |   229.54 |     0.98 |   50.8% |
| 09 | 1,280.54 | 1,254.43 |   229.23 |     0.98 |   51.2% |
| 10 | 1,275.31 | 1,247.44 |   234.30 |     0.98 |   51.0% |
| 11 | 1,290.95 | 1,257.21 |   252.96 |     0.97 |   51.6% |
| 12 | 1,271.93 | 1,245.61 |   227.79 |     0.98 |   50.9% |
| 13 | 1,260.60 | 1,240.26 |   205.82 |     0.98 |   50.4% |
| 14 | 1,270.55 | 1,252.24 |   199.07 |     0.99 |   50.8% |
| 15 | 1,248.79 | 1,229.25 |   199.82 |     0.98 |   50.0% |
| 16 | 1,288.26 | 1,266.82 |   212.63 |     0.98 |   51.5% |
| 17 | 1,312.07 | 1,290.97 |   217.30 |     0.98 |   52.5% |
| 18 | 1,320.50 | 1,299.55 |   216.98 |     0.98 |   52.8% |
| 19 | 1,332.10 | 1,310.52 |   219.05 |     0.98 |   53.3% |
| 20 | 1,322.15 | 1,299.30 |   219.67 |     0.98 |   52.9% |
| 21 | 1,328.28 | 1,304.59 |   221.29 |     0.98 |   53.1% |
| 22 | 1,334.86 | 1,311.74 |   219.95 |     0.98 |   53.4% |
| 23 | 1,338.94 | 1,314.08 |   228.63 |     0.98 |   53.6% |

---

# END OF REPORT

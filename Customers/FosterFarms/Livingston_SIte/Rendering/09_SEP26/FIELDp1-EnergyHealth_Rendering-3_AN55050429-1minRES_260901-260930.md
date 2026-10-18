# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 400,580.9 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $78,113.27 (Cost per period)
- **Consumption Total Cost:** $111.74 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Rendering-3  
**Generated:** 2026-10-08 00:56:13  
**Data Source:** AN55050429-V-260930.2359c.csv  

## Time Period

- **Period:** September 01, 2026 thru September 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 41,943

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

- **Transformer:** Rendering-3
- **Power Factor:** 0.757
- **Total Energy (Actual):** 400,580.89 kWh (per period), 573.04 kW (per hour)
- **Total Waste (Actual):** 127,718.20 kWh (per period), 182.70 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Rendering-3_AN55050429-1minRES_260901-260930.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Rendering-3_AN55050429-1minRES_260901-260930.md


## UNITY MANAGEMENT Rendering-3 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 182.70 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 137.36 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Rendering-3 Utility Cost Offset:** $35.63/hour
- **Annual Offset Savings:** $312092/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 509,405 BTU/hr
- **Total Cooling kW No Longer Needed:** 44.57 kW
- **Cooling Energy Cost Avoided:** $8.69/hour
- **Annual Cooling Savings:** $76140/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 227.28 kW
- **CO2e Emissions Avoided:** 743.23 metric tons/year
- **Monthly CO2e Reduction:** 61.94 metric tons/month
- **Hourly CO2e Reduction:** 0.0848 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $28243/year

### Total Rendering-3 Unity Savings

- **Per Hour:** $47.54
- **Per Day:** $1141.03
- **Per Month:** $34230.80
- **Per Year:** $416475

### Rendering-3 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 702.0 kVAR Max (Avg: 492.7 kVAR/hr ; 354,757 kVAR/mo)
- **Max Harmonic Distortion:** 30.2% Max (range: 3.3% - 30.2%)
- **Max Amperage:** 1,186A Max (range: 644A - 1186A)

---

# Rendering-3 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   275.33 |   267.38 |   284.35 |
| Line to Line Voltage (480v) |   476.88 |   463.12 |   492.51 |
| Current (AMPS) |   914.97 |   643.72 |  1186.15 |
| Phase Angle (degrees) |    40.73 |    30.57 |    53.20 |
| Total Harmonic Distortion (PCT) |    16.12 |     3.28 |    30.22 |

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
| Unity THD Composite (%) | 16.1% | Field-level stress indicator |
| Max Phase THD | 5.4% | Highest THD among all three phases |
| Min Phase THD | 5.4% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 753.91 kW
  - **Maximum Load:** 970.06 kVA
  - **Percentage of Capacity (MAX):** 38.8%
- **Average Load:** 755.74 kVA
  - **Percentage of Capacity (Avg):** 30.2%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 755.74 kVA
- **Average Power Factor (PF):** 0.757

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 755.75 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 476.88 V
- Average Current (Iavg_A): 914.97 A
- Average kW (Psum_kW): 573.04 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.01 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.758
- **Power Factor Difference:** 0.001 (0.2%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (755.74) and measured PF (0.757) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   755.74 |        30.2% | 528,299.10 kVA | 1,955,280.59 TOTAL-HEAT |
| kW |   573.04 |        22.9% | 400,580.89 kWh | 472,696.10 Load-Heat |
| kVAR |   492.72 |        19.7% | 344,434.15 kVARh | - |
| WASTE |   182.70 |         7.3% | 127,718.20 WASTE | 150,710.88 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,955,280.59
- **Load-Heat (BTU/hr):** 472,696.10
- **Field-Heat (BTU/hr):** 150,710.88
- **Load-Heat (BTU, period total):** 330,438,211.44
- **Field-Heat (BTU, period total):** 105,354,438.10

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 9 |   755.74 |   573.04 |   491.48 |     0.76 |   30.2% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   750.93 |   576.01 |   480.79 |     0.77 |   30.0% |
| 01 |   765.60 |   591.91 |   484.49 |     0.77 |   30.6% |
| 02 |   762.34 |   590.67 |   480.74 |     0.77 |   30.5% |
| 03 |   758.97 |   588.61 |   477.90 |     0.78 |   30.4% |
| 04 |   771.74 |   596.40 |   488.55 |     0.77 |   30.9% |
| 05 |   782.49 |   594.45 |   507.73 |     0.76 |   31.3% |
| 06 |   791.34 |   595.96 |   519.82 |     0.75 |   31.7% |
| 07 |   763.00 |   582.05 |   492.25 |     0.76 |   30.5% |
| 08 |   779.24 |   589.82 |   508.03 |     0.76 |   31.2% |
| 09 |   756.03 |   574.22 |   490.75 |     0.76 |   30.2% |
| 10 |   767.22 |   576.87 |   504.53 |     0.75 |   30.7% |
| 11 |   749.69 |   565.29 |   491.12 |     0.75 |   30.0% |
| 12 |   748.75 |   560.91 |   494.75 |     0.75 |   29.9% |
| 13 |   727.73 |   544.55 |   481.56 |     0.75 |   29.1% |
| 14 |   744.49 |   554.18 |   496.28 |     0.74 |   29.8% |
| 15 |   742.82 |   560.81 |   485.95 |     0.75 |   29.7% |
| 16 |   739.07 |   551.23 |   491.38 |     0.75 |   29.6% |
| 17 |   715.59 |   535.59 |   473.40 |     0.75 |   28.6% |
| 18 |   732.31 |   547.20 |   485.69 |     0.75 |   29.3% |
| 19 |   745.07 |   555.66 |   495.49 |     0.75 |   29.8% |
| 20 |   761.94 |   576.57 |   497.08 |     0.76 |   30.5% |
| 21 |   754.98 |   577.31 |   485.30 |     0.76 |   30.2% |
| 22 |   763.26 |   582.41 |   492.16 |     0.76 |   30.5% |
| 23 |   767.42 |   588.45 |   491.47 |     0.77 |   30.7% |

---

# END OF REPORT

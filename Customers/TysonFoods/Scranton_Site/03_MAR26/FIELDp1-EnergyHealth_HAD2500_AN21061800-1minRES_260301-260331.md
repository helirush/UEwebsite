# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 888,785.3 kWh (Usage per period)
- **Consumption Cost per unit:** $0.110/kWh (Cost per kWh)
- **Consumption Total Cost:** $97,766.38 (Cost per period)
- **Consumption Total Cost:** $131.64 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** HAD2500  
**Generated:** 2026-09-12 17:51:28  
**Data Source:** AN21061800-V-1minRES_44580CLP_260301-260331c.csv  

## Time Period

- **Period:** March 01, 2026 thru March 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,560

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
- **Power Factor:** 0.962
- **Total Energy (Actual):** 888,785.31 kWh (per period), 1196.75 kW (per hour)
- **Total Waste (Actual):** 36,891.54 kWh (per period), 49.67 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_HAD2500_AN21061800-1minRES_260301-260331.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_HAD2500_AN21061800-1minRES_260301-260331.md


## UNITY MANAGEMENT HAD2500 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 49.67 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 23.17 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1100/kWh (all-inclusive)
- **HAD2500 Utility Cost Offset:** $5.46/hour
- **Annual Offset Savings:** $47866/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 86,242 BTU/hr
- **Total Cooling kW No Longer Needed:** 7.95 kW
- **Cooling Energy Cost Avoided:** $0.88/hour
- **Annual Cooling Savings:** $7665/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 57.63 kW
- **CO2e Emissions Avoided:** 188.46 metric tons/year
- **Monthly CO2e Reduction:** 15.70 metric tons/month
- **Hourly CO2e Reduction:** 0.0215 metric tons/hour
- **CO2e Value Rate:** $10/metric ton
- **Annual CO2e Value:** $1885/year

### Total HAD2500 Unity Savings

- **Per Hour:** $6.55
- **Per Day:** $157.30
- **Per Month:** $4719.14
- **Per Year:** $57416

### HAD2500 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,125.6 kVAR Max (Avg: 348.4 kVAR/hr ; 250,828 kVAR/mo)
- **Max Harmonic Distortion:** 31.4% Max (range: 3.4% - 31.4%)
- **Max Amperage:** 2,216A Max (range: 189A - 2216A)

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
| Line to Neutral Voltage (277v) |   275.12 |   269.62 |   283.81 |
| Line to Line Voltage (480v) |   476.52 |   467.00 |   491.58 |
| Current (AMPS) |  1514.26 |   188.74 |  2216.27 |
| Phase Angle (degrees) |    15.21 |     2.56 |    52.90 |
| Total Harmonic Distortion (PCT) |    16.33 |     3.39 |    31.38 |

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

- **Maximum UtilityDemand:** 1,654.83 kW
  - **Maximum Load:** 1,809.17 kVA
  - **Percentage of Capacity (MAX):** 72.4%
- **Average Load:** 1,246.42 kVA
  - **Percentage of Capacity (Avg):** 49.9%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,246.42 kVA
- **Average Power Factor (PF):** 0.962

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,249.80 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 476.52 V
- Average Current (Iavg_A): 1514.26 A
- Average kW (Psum_kW): 1196.75 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 3.38 kVA (0.3%)
- **Calculated PF (kW/kVA from averages):** 0.958
- **Power Factor Difference:** 0.004 (0.5%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1246.42) and measured PF (0.962) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,246.42 |        49.9% | 925,676.86 kVA | 4,083,476.26 TOTAL-HEAT |
| kW | 1,196.75 |        47.9% | 888,785.31 kWh | 162,741.18 Load-Heat |
| kVAR |   348.37 |        13.9% | 258,724.39 kVARh | - |
| WASTE |    49.67 |         2.0% | 36,891.54 WASTE | 6,755.03 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 4,083,476.26
- **Load-Heat (BTU/hr):** 162,741.18
- **Field-Heat (BTU/hr):** 6,755.03
- **Load-Heat (BTU, period total):** 120,862,448.23
- **Field-Heat (BTU, period total):** 5,016,737.12

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 3 | 1,246.42 | 1,196.75 |   339.35 |     0.96 |   49.9% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,263.97 | 1,212.20 |   351.81 |     0.96 |   50.6% |
| 01 | 1,261.70 | 1,209.99 |   351.08 |     0.96 |   50.5% |
| 02 | 1,266.56 | 1,213.91 |   356.63 |     0.96 |   50.7% |
| 03 | 1,257.89 | 1,203.60 |   361.42 |     0.96 |   50.3% |
| 04 | 1,238.04 | 1,184.00 |   356.77 |     0.96 |   49.5% |
| 05 | 1,220.49 | 1,169.34 |   344.26 |     0.96 |   48.8% |
| 06 | 1,193.75 | 1,145.61 |   327.21 |     0.96 |   47.8% |
| 07 | 1,205.31 | 1,157.20 |   328.80 |     0.96 |   48.2% |
| 08 | 1,195.34 | 1,148.35 |   322.32 |     0.96 |   47.8% |
| 09 | 1,190.78 | 1,143.86 |   321.10 |     0.96 |   47.6% |
| 10 | 1,192.37 | 1,146.80 |   314.45 |     0.96 |   47.7% |
| 11 | 1,182.41 | 1,137.96 |   307.17 |     0.96 |   47.3% |
| 12 | 1,178.63 | 1,133.82 |   307.70 |     0.96 |   47.1% |
| 13 | 1,222.04 | 1,173.52 |   327.88 |     0.96 |   48.9% |
| 14 | 1,250.45 | 1,200.92 |   337.28 |     0.96 |   50.0% |
| 15 | 1,256.00 | 1,208.75 |   331.83 |     0.96 |   50.2% |
| 16 | 1,280.45 | 1,232.74 |   335.44 |     0.96 |   51.2% |
| 17 | 1,285.53 | 1,235.54 |   344.92 |     0.96 |   51.4% |
| 18 | 1,280.62 | 1,230.41 |   343.95 |     0.96 |   51.2% |
| 19 | 1,290.65 | 1,242.02 |   338.94 |     0.96 |   51.6% |
| 20 | 1,304.19 | 1,253.18 |   352.57 |     0.96 |   52.2% |
| 21 | 1,306.73 | 1,254.06 |   360.64 |     0.96 |   52.3% |
| 22 | 1,292.58 | 1,240.16 |   356.86 |     0.96 |   51.7% |
| 23 | 1,298.14 | 1,244.39 |   363.78 |     0.96 |   51.9% |

---

# END OF REPORT

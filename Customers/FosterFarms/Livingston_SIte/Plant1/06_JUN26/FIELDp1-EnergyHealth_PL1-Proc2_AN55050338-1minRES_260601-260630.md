# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 399,989.4 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $77,997.93 (Cost per period)
- **Consumption Total Cost:** $108.36 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** PL1-Proc2  
**Generated:** 2026-09-10 20:06:15  
**Data Source:** AN55050338-V-260630.2359c.csv  

## Time Period

- **Period:** June 01, 2026 thru June 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,189

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

- **Transformer:** PL1-Proc2
- **Power Factor:** 0.861
- **Total Energy (Actual):** 399,989.39 kWh (per period), 555.68 kW (per hour)
- **Total Waste (Actual):** 58,624.49 kWh (per period), 81.44 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_PL1-Proc2_AN55050338-1minRES_260601-260630.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_PL1-Proc2_AN55050338-1minRES_260601-260630.md


## UNITY MANAGEMENT PL1-Proc2 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 81.44 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 56.71 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **PL1-Proc2 Utility Cost Offset:** $15.88/hour
- **Annual Offset Savings:** $139122/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 308,243 BTU/hr
- **Total Cooling kW No Longer Needed:** 27.11 kW
- **Cooling Energy Cost Avoided:** $5.29/hour
- **Annual Cooling Savings:** $46311/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 108.55 kW
- **CO2e Emissions Avoided:** 354.99 metric tons/year
- **Monthly CO2e Reduction:** 29.58 metric tons/month
- **Hourly CO2e Reduction:** 0.0405 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $13490/year

### Total PL1-Proc2 Unity Savings

- **Per Hour:** $22.71
- **Per Day:** $544.99
- **Per Month:** $16349.78
- **Per Year:** $198922

### PL1-Proc2 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 694.9 kVAR Max (Avg: 311.7 kVAR/hr ; 224,412 kVAR/mo)
- **Max Harmonic Distortion:** 33.5% Max (range: 3.0% - 33.5%)
- **Max Amperage:** 1,515A Max (range: 72A - 1515A)

---

# PL1-Proc2 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   184.29 |   180.72 |   192.04 |
| Line to Line Voltage (480v) |   319.21 |   313.01 |   332.62 |
| Current (AMPS) |   927.17 |    71.58 |  1514.60 |
| Phase Angle (degrees) |    30.41 |    26.75 |    72.78 |
| Total Harmonic Distortion (PCT) |    15.66 |     3.00 |    33.49 |

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
| Unity THD Composite (%) | 15.7% | Field-level stress indicator |
| Max Phase THD | 5.2% | Highest THD among all three phases |
| Min Phase THD | 5.2% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 911.25 kW
  - **Maximum Load:** 1,031.12 kVA
  - **Percentage of Capacity (MAX):** 41.2%
- **Average Load:** 637.13 kVA
  - **Percentage of Capacity (Avg):** 25.5%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 637.13 kVA
- **Average Power Factor (PF):** 0.861

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 512.62 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 319.21 V
- Average Current (Iavg_A): 927.17 A
- Average kW (Psum_kW): 555.68 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 124.51 kVA (19.5%)
- **Calculated PF (kW/kVA from averages):** 1.084
- **Power Factor Difference:** 0.223 (25.9%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (637.13) and measured PF (0.861) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   637.13 |        25.5% | 458,613.89 kVA | 1,896,066.98 TOTAL-HEAT |
| kW |   555.68 |        22.2% | 399,989.39 kWh | 242,373.74 Load-Heat |
| kVAR |   311.68 |        12.5% | 224,355.03 kVARh | - |
| WASTE |    81.44 |         3.3% | 58,624.49 WASTE | 35,523.54 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,896,066.98
- **Load-Heat (BTU/hr):** 242,373.74
- **Field-Heat (BTU/hr):** 35,523.54
- **Load-Heat (BTU, period total):** 174,464,657.63
- **Field-Heat (BTU, period total):** 25,570,432.62

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 6 |   637.13 |   555.68 |   310.99 |     0.87 |   25.5% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   687.44 |   602.07 |   331.05 |     0.88 |   27.5% |
| 01 |   674.86 |   590.29 |   326.34 |     0.87 |   27.0% |
| 02 |   684.50 |   598.79 |   331.05 |     0.87 |   27.4% |
| 03 |   680.18 |   594.46 |   329.77 |     0.87 |   27.2% |
| 04 |   680.69 |   594.92 |   330.22 |     0.87 |   27.2% |
| 05 |   679.52 |   593.71 |   329.61 |     0.87 |   27.2% |
| 06 |   678.12 |   592.78 |   328.72 |     0.87 |   27.1% |
| 07 |   667.69 |   583.50 |   323.76 |     0.87 |   26.7% |
| 08 |   676.89 |   592.47 |   326.75 |     0.88 |   27.1% |
| 09 |   685.61 |   600.32 |   330.71 |     0.88 |   27.4% |
| 10 |   678.09 |   593.63 |   327.32 |     0.88 |   27.1% |
| 11 |   695.25 |   609.23 |   334.59 |     0.88 |   27.8% |
| 12 |   693.52 |   608.26 |   332.78 |     0.88 |   27.7% |
| 13 |   678.19 |   595.35 |   324.44 |     0.88 |   27.1% |
| 14 |   651.13 |   569.84 |   314.44 |     0.88 |   26.0% |
| 15 |   613.63 |   535.74 |   298.68 |     0.87 |   24.5% |
| 16 |   556.02 |   481.73 |   277.16 |     0.87 |   22.2% |
| 17 |   455.30 |   389.07 |   236.07 |     0.85 |   18.2% |
| 18 |   446.73 |   381.22 |   232.32 |     0.85 |   17.9% |
| 19 |   539.36 |   465.00 |   272.67 |     0.86 |   21.6% |
| 20 |   620.34 |   538.30 |   307.71 |     0.87 |   24.8% |
| 21 |   588.08 |   509.39 |   293.26 |     0.87 |   23.5% |
| 22 |   604.72 |   525.64 |   298.07 |     0.87 |   24.2% |
| 23 |   675.14 |   590.66 |   326.30 |     0.87 |   27.0% |

---

# END OF REPORT

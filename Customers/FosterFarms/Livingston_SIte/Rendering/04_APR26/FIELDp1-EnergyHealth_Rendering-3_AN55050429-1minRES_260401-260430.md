# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 409,984.6 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $79,947.00 (Cost per period)
- **Consumption Total Cost:** $114.10 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Rendering-3  
**Generated:** 2026-05-09 20:16:24  
**Data Source:** AN55050429-V-1minRES_43200CLP_260401-260430c.csv  

## Time Period

- **Period:** April 01, 2026 thru April 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 42,040

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
- **Power Factor:** 0.769
- **Total Energy (Actual):** 409,984.63 kWh (per period), 585.14 kW (per hour)
- **Total Waste (Actual):** 121,636.34 kWh (per period), 173.60 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Rendering-3_AN55050429-1minRES_260401-260430.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Rendering-3_AN55050429-1minRES_260401-260430.md


## UNITY MANAGEMENT Rendering-3 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Electrical-Energy Waste (calc_kVA - measured_kW):** 173.60 kW/hr
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Rendering-3 Utility Cost Offset:** $33.85/hour
- **Annual Offset Savings:** $296545/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 642,179 BTU/hr
- **Total Cooling kW No Longer Needed:** 56.23 kW
- **Cooling Energy Cost Avoided:** $10.97/hour
- **Annual Cooling Savings:** $96055/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 229.83 kW
- **CO2e Emissions Avoided:** 751.59 metric tons/year
- **Monthly CO2e Reduction:** 62.63 metric tons/month
- **Hourly CO2e Reduction:** 0.0858 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $28936/year

### Total Rendering-3 Unity Savings

- **Per Hour:** $48.12
- **Per Day:** $1154.89
- **Per Month:** $34646.85
- **Per Year:** $421537

### Rendering-3 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 744.4 kVAR Max (Avg: 483.0 kVAR/hr ; 347,766 kVAR/mo)
- **Max Harmonic Distortion:** 30.2% Max (range: 3.0% - 30.2%)
- **Max Amperage:** 1,149A Max (range: 676A - 1149A)

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
| Line to Neutral Voltage (277v) |   275.58 |   266.01 |   285.35 |
| Line to Line Voltage (480v) |   477.32 |   460.74 |   494.25 |
| Current (AMPS) |   917.85 |   676.43 |  1148.78 |
| Phase Angle (degrees) |    39.62 |    32.11 |    57.32 |
| Total Harmonic Distortion (PCT) |    16.18 |     3.00 |    30.23 |

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
| Unity THD Composite (%) | 16.2% | Field-level stress indicator |
| Max Phase THD | 5.4% | Highest THD among all three phases |
| Min Phase THD | 5.4% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 723.40 kW
  - **Maximum Load:** 937.18 kVA
  - **Percentage of Capacity (MAX):** 37.5%
- **Average Load:** 758.74 kVA
  - **Percentage of Capacity (Avg):** 30.3%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 758.74 kVA
- **Average Power Factor (PF):** 0.769

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 758.82 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 477.32 V
- Average Current (Iavg_A): 917.85 A
- Average kW (Psum_kW): 585.14 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.09 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.771
- **Power Factor Difference:** 0.002 (0.2%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (758.74) and measured PF (0.769) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   758.74 |        30.3% | 531,620.98 kVA | 1,996,563.92 TOTAL-HEAT |
| kW |   585.14 |        23.4% | 409,984.63 kWh | 456,819.32 Load-Heat |
| kVAR |   483.01 |        19.3% | 338,427.93 kVARh | - |
| WASTE |   173.60 |         6.9% | 121,636.34 WASTE | 135,531.50 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,996,563.92
- **Load-Heat (BTU/hr):** 456,819.32
- **Field-Heat (BTU/hr):** 135,531.50
- **Load-Heat (BTU, period total):** 320,078,072.49
- **Field-Heat (BTU, period total):** 94,962,404.18

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 4 |   758.74 |   585.14 |   481.73 |     0.77 |   30.3% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   755.77 |   584.55 |   477.86 |     0.77 |   30.2% |
| 01 |   766.47 |   591.34 |   486.27 |     0.77 |   30.7% |
| 02 |   771.45 |   596.32 |   487.99 |     0.77 |   30.9% |
| 03 |   757.03 |   593.22 |   469.07 |     0.78 |   30.3% |
| 04 |   776.08 |   602.91 |   487.20 |     0.78 |   31.0% |
| 05 |   775.44 |   602.68 |   486.50 |     0.78 |   31.0% |
| 06 |   771.23 |   598.33 |   485.20 |     0.78 |   30.8% |
| 07 |   760.62 |   591.37 |   477.07 |     0.78 |   30.4% |
| 08 |   763.40 |   593.00 |   479.55 |     0.78 |   30.5% |
| 09 |   761.63 |   590.37 |   480.36 |     0.78 |   30.5% |
| 10 |   766.02 |   593.22 |   483.85 |     0.77 |   30.6% |
| 11 |   753.57 |   587.30 |   471.15 |     0.78 |   30.1% |
| 12 |   757.58 |   587.61 |   477.09 |     0.78 |   30.3% |
| 13 |   755.41 |   577.19 |   486.21 |     0.76 |   30.2% |
| 14 |   764.74 |   577.29 |   500.71 |     0.75 |   30.6% |
| 15 |   752.31 |   569.98 |   490.20 |     0.76 |   30.1% |
| 16 |   744.98 |   570.58 |   478.04 |     0.77 |   29.8% |
| 17 |   742.03 |   571.55 |   472.14 |     0.77 |   29.7% |
| 18 |   735.70 |   564.96 |   470.49 |     0.77 |   29.4% |
| 19 |   736.94 |   565.03 |   472.24 |     0.77 |   29.5% |
| 20 |   760.29 |   581.25 |   488.46 |     0.76 |   30.4% |
| 21 |   761.05 |   585.07 |   485.02 |     0.77 |   30.4% |
| 22 |   761.57 |   584.20 |   486.53 |     0.77 |   30.5% |
| 23 |   759.62 |   585.94 |   481.81 |     0.77 |   30.4% |

---

# END OF REPORT

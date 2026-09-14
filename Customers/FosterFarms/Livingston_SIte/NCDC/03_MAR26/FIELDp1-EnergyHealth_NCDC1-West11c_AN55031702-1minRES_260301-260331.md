# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 327,878.8 kWh (Usage per period)
- **Consumption Cost per unit:** $0.175/kWh (Cost per kWh)
- **Consumption Total Cost:** $57,280.43 (Cost per period)
- **Consumption Total Cost:** $78.53 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** NCDC1 West11c  
**Generated:** 2026-09-10 22:47:54  
**Data Source:** AN55031702-V-1minRES_44550CLP_260301-260331c.csv  

## Time Period

- **Period:** March 01, 2026 thru March 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,766

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

- **Transformer:** NCDC1 West11c
- **Power Factor:** 0.851
- **Total Energy (Actual):** 327,878.83 kWh (per period), 449.50 kW (per hour)
- **Total Waste (Actual):** 57,314.19 kWh (per period), 78.57 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_NCDC1-West11c_AN55031702-1minRES_260301-260331.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_NCDC1-West11c_AN55031702-1minRES_260301-260331.md


## UNITY MANAGEMENT NCDC1 West11c SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 78.57 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 48.15 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1747/kWh (all-inclusive)
- **NCDC1 West11c Utility Cost Offset:** $13.73/hour
- **Annual Offset Savings:** $120247/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 175,031 BTU/hr
- **Total Cooling kW No Longer Needed:** 15.33 kW
- **Cooling Energy Cost Avoided:** $2.68/hour
- **Annual Cooling Savings:** $23468/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 93.91 kW
- **CO2e Emissions Avoided:** 307.10 metric tons/year
- **Monthly CO2e Reduction:** 25.59 metric tons/month
- **Hourly CO2e Reduction:** 0.0351 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $11823/year

### Total NCDC1 West11c Unity Savings

- **Per Hour:** $17.76
- **Per Day:** $426.13
- **Per Month:** $12783.91
- **Per Year:** $155538

### NCDC1 West11c Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 343.1 kVAR Max (Avg: 277.1 kVAR/hr ; 199,547 kVAR/mo)
- **Max Harmonic Distortion:** 31.6% Max (range: 3.4% - 31.6%)
- **Max Amperage:** 762A Max (range: 502A - 762A)

---

# NCDC1 West11c DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   278.81 |   268.95 |   289.13 |
| Line to Line Voltage (480v) |   482.91 |   465.84 |   500.78 |
| Current (AMPS) |   631.38 |   501.80 |   762.41 |
| Phase Angle (degrees) |    31.69 |    29.42 |    36.00 |
| Total Harmonic Distortion (PCT) |    16.21 |     3.39 |    31.60 |

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

- **Maximum UtilityDemand:** 546.48 kW
  - **Maximum Load:** 634.37 kVA
  - **Percentage of Capacity (MAX):** 25.4%
- **Average Load:** 528.07 kVA
  - **Percentage of Capacity (Avg):** 21.1%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 528.07 kVA
- **Average Power Factor (PF):** 0.851

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 528.10 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 482.91 V
- Average Current (Iavg_A): 631.38 A
- Average kW (Psum_kW): 449.50 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.03 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.851
- **Power Factor Difference:** 0.000 (0.0%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (528.07) and measured PF (0.851) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   528.07 |        21.1% | 385,193.02 kVA | 1,533,751.03 TOTAL-HEAT |
| kW |   449.50 |        18.0% | 327,878.83 kWh | 228,212.08 Load-Heat |
| kVAR |   277.15 |        11.1% | 202,161.16 kVARh | - |
| WASTE |    78.57 |         3.1% | 57,314.19 WASTE | 39,892.15 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,533,751.03
- **Load-Heat (BTU/hr):** 228,212.08
- **Field-Heat (BTU/hr):** 39,892.15
- **Load-Heat (BTU, period total):** 166,465,496.29
- **Field-Heat (BTU, period total):** 29,098,661.99

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 3 |   528.07 |   449.50 |   277.02 |     0.85 |   21.1% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   521.45 |   443.60 |   274.04 |     0.85 |   20.9% |
| 01 |   508.89 |   431.29 |   270.00 |     0.85 |   20.4% |
| 02 |   507.40 |   429.85 |   269.53 |     0.85 |   20.3% |
| 03 |   502.82 |   425.27 |   268.21 |     0.85 |   20.1% |
| 04 |   499.21 |   421.65 |   267.14 |     0.84 |   20.0% |
| 05 |   516.55 |   439.93 |   270.58 |     0.85 |   20.7% |
| 06 |   534.60 |   456.88 |   277.45 |     0.85 |   21.4% |
| 07 |   524.10 |   446.03 |   275.09 |     0.85 |   21.0% |
| 08 |   522.45 |   444.64 |   274.21 |     0.85 |   20.9% |
| 09 |   521.10 |   443.18 |   274.00 |     0.85 |   20.8% |
| 10 |   522.17 |   444.19 |   274.41 |     0.85 |   20.9% |
| 11 |   524.22 |   446.11 |   275.19 |     0.85 |   21.0% |
| 12 |   531.28 |   453.26 |   277.02 |     0.85 |   21.3% |
| 13 |   533.72 |   456.10 |   277.05 |     0.85 |   21.3% |
| 14 |   534.83 |   457.42 |   277.01 |     0.86 |   21.4% |
| 15 |   540.29 |   461.36 |   281.07 |     0.85 |   21.6% |
| 16 |   544.73 |   464.42 |   284.56 |     0.85 |   21.8% |
| 17 |   549.46 |   467.45 |   288.64 |     0.85 |   22.0% |
| 18 |   550.45 |   468.67 |   288.56 |     0.85 |   22.0% |
| 19 |   553.04 |   471.60 |   288.72 |     0.85 |   22.1% |
| 20 |   540.19 |   460.32 |   282.56 |     0.85 |   21.6% |
| 21 |   535.64 |   456.25 |   280.52 |     0.85 |   21.4% |
| 22 |   529.28 |   450.56 |   277.65 |     0.85 |   21.2% |
| 23 |   524.97 |   446.91 |   275.37 |     0.85 |   21.0% |

---

# END OF REPORT

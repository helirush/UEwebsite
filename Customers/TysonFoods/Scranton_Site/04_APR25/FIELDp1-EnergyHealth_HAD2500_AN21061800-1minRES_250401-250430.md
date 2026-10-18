# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 824,321.1 kWh (Usage per period)
- **Consumption Cost per unit:** $0.110/kWh (Cost per kWh)
- **Consumption Total Cost:** $90,675.32 (Cost per period)
- **Consumption Total Cost:** $155.28 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** HAD2500  
**Generated:** 2026-09-12 17:53:05  
**Data Source:** AN21061800-V-1minRES_43200CLP_250401-250430c.csv  

## Time Period

- **Period:** April 01, 2025 thru April 30, 2025
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 35,037

- **Dataset Coverage:** Complete month (100.0% of 30-day month)
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
- **Power Factor:** 0.981
- **Total Energy (Actual):** 824,321.13 kWh (per period), 1411.63 kW (per hour)
- **Total Waste (Actual):** 14,150.02 kWh (per period), 24.23 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_HAD2500_AN21061800-1minRES_250401-250430.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_HAD2500_AN21061800-1minRES_250401-250430.md


## UNITY MANAGEMENT HAD2500 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 24.23 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 11.48 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1100/kWh (all-inclusive)
- **HAD2500 Utility Cost Offset:** $2.67/hour
- **Annual Offset Savings:** $23350/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 47,087 BTU/hr
- **Total Cooling kW No Longer Needed:** 4.49 kW
- **Cooling Energy Cost Avoided:** $0.49/hour
- **Annual Cooling Savings:** $4323/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 28.72 kW
- **CO2e Emissions Avoided:** 93.91 metric tons/year
- **Monthly CO2e Reduction:** 7.83 metric tons/month
- **Hourly CO2e Reduction:** 0.0107 metric tons/hour
- **CO2e Value Rate:** $10/metric ton
- **Annual CO2e Value:** $939/year

### Total HAD2500 Unity Savings

- **Per Hour:** $3.27
- **Per Day:** $78.39
- **Per Month:** $2351.62
- **Per Year:** $28611

### HAD2500 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 729.8 kVAR Max (Avg: 262.7 kVAR/hr ; 189,127 kVAR/mo)
- **Max Harmonic Distortion:** 92.5% Max (range: 0.0% - 92.5%)
- **Max Amperage:** 2,105A Max (range: 889A - 2105A)

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
| Line to Neutral Voltage (277v) |   279.24 |   274.43 |   287.64 |
| Line to Line Voltage (480v) |   483.66 |   475.33 |   498.22 |
| Current (AMPS) |  1714.97 |   888.50 |  2105.15 |
| Phase Angle (degrees) |     9.69 |     0.00 |    43.59 |
| Total Harmonic Distortion (PCT) |    29.22 |     0.00 |    92.53 |

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
| THD Phase A (%) | 9.4% | IEEE standard per-phase calculation |
| THD Phase B (%) | 10.7% | IEEE standard per-phase calculation |
| THD Phase C (%) | 9.1% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 29.2% | Field-level stress indicator |
| Max Phase THD | 10.7% | Highest THD among all three phases |
| Min Phase THD | 9.1% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,625.40 kW
  - **Maximum Load:** 1,738.46 kVA
  - **Percentage of Capacity (MAX):** 69.5%
- **Average Load:** 1,435.86 kVA
  - **Percentage of Capacity (Avg):** 57.4%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,435.86 kVA
- **Average Power Factor (PF):** 0.981

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,436.68 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 483.66 V
- Average Current (Iavg_A): 1714.97 A
- Average kW (Psum_kW): 1411.63 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.82 kVA (0.1%)
- **Calculated PF (kW/kVA from averages):** 0.983
- **Power Factor Difference:** 0.001 (0.2%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1435.86) and measured PF (0.981) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,435.86 |        57.4% | 838,471.15 kVA | 4,816,680.80 TOTAL-HEAT |
| kW | 1,411.63 |        56.5% | 824,321.13 kWh | 81,286.18 Load-Heat |
| kVAR |   262.68 |        10.5% | 153,390.15 kVARh | - |
| WASTE |    24.23 |         1.0% | 14,150.02 WASTE | 1,395.33 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 4,816,680.80
- **Load-Heat (BTU/hr):** 81,286.18
- **Field-Heat (BTU/hr):** 1,395.33
- **Load-Heat (BTU, period total):** 47,467,064.45
- **Field-Heat (BTU, period total):** 814,803.54

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 4 | 1,435.86 | 1,411.63 |   234.52 |     0.98 |   57.4% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,447.32 | 1,424.35 |   232.39 |     0.98 |   57.9% |
| 01 | 1,469.49 | 1,444.70 |   248.09 |     0.98 |   58.8% |
| 02 | 1,482.59 | 1,457.15 |   254.61 |     0.98 |   59.3% |
| 03 | 1,468.95 | 1,444.76 |   245.63 |     0.98 |   58.8% |
| 04 | 1,466.00 | 1,441.77 |   244.64 |     0.98 |   58.6% |
| 05 | 1,446.86 | 1,423.35 |   234.10 |     0.98 |   57.9% |
| 06 | 1,432.87 | 1,407.92 |   230.21 |     0.98 |   57.3% |
| 07 | 1,427.79 | 1,403.33 |   225.89 |     0.98 |   57.1% |
| 08 | 1,426.14 | 1,400.64 |   231.40 |     0.98 |   57.0% |
| 09 | 1,425.11 | 1,406.43 |   221.06 |     0.99 |   57.0% |
| 10 | 1,442.67 | 1,425.34 |   214.98 |     0.99 |   57.7% |
| 11 | 1,433.21 | 1,415.93 |   211.68 |     0.99 |   57.3% |
| 12 | 1,425.71 | 1,410.35 |   199.03 |     0.99 |   57.0% |
| 13 | 1,412.10 | 1,396.37 |   200.24 |     0.99 |   56.5% |
| 14 | 1,399.29 | 1,376.70 |   227.81 |     0.98 |   56.0% |
| 15 | 1,393.02 | 1,363.74 |   246.08 |     0.98 |   55.7% |
| 16 | 1,421.32 | 1,391.73 |   245.19 |     0.98 |   56.9% |
| 17 | 1,446.90 | 1,416.69 |   256.01 |     0.98 |   57.9% |
| 18 | 1,440.08 | 1,411.05 |   251.43 |     0.98 |   57.6% |
| 19 | 1,436.30 | 1,407.48 |   249.92 |     0.98 |   57.5% |
| 20 | 1,423.27 | 1,394.83 |   242.10 |     0.98 |   56.9% |
| 21 | 1,414.01 | 1,385.31 |   239.68 |     0.98 |   56.6% |
| 22 | 1,433.53 | 1,407.94 |   238.83 |     0.98 |   57.3% |
| 23 | 1,447.27 | 1,424.25 |   232.68 |     0.98 |   57.9% |

---

# END OF REPORT

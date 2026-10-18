# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 883,319.7 kWh (Usage per period)
- **Consumption Cost per unit:** $0.110/kWh (Cost per kWh)
- **Consumption Total Cost:** $97,165.17 (Cost per period)
- **Consumption Total Cost:** $130.62 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** HAD2500  
**Generated:** 2026-09-12 17:54:17  
**Data Source:** AN21061800-V-1minRES_44640CLP_251201-251231c.csv  

## Time Period

- **Period:** December 01, 2025 thru December 31, 2025
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,634

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
- **Power Factor:** 0.971
- **Total Energy (Actual):** 883,319.68 kWh (per period), 1187.42 kW (per hour)
- **Total Waste (Actual):** 29,327.37 kWh (per period), 39.42 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_HAD2500_AN21061800-1minRES_251201-251231.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_HAD2500_AN21061800-1minRES_251201-251231.md


## UNITY MANAGEMENT HAD2500 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 39.42 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 17.57 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1100/kWh (all-inclusive)
- **HAD2500 Utility Cost Offset:** $4.34/hour
- **Annual Offset Savings:** $37989/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 63,956 BTU/hr
- **Total Cooling kW No Longer Needed:** 6.01 kW
- **Cooling Energy Cost Avoided:** $0.66/hour
- **Annual Cooling Savings:** $5789/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 45.43 kW
- **CO2e Emissions Avoided:** 148.57 metric tons/year
- **Monthly CO2e Reduction:** 12.38 metric tons/month
- **Hourly CO2e Reduction:** 0.0170 metric tons/hour
- **CO2e Value Rate:** $10/metric ton
- **Annual CO2e Value:** $1486/year

### Total HAD2500 Unity Savings

- **Per Hour:** $5.17
- **Per Day:** $124.01
- **Per Month:** $3720.27
- **Per Year:** $45263

### HAD2500 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 962.1 kVAR Max (Avg: 308.5 kVAR/hr ; 222,128 kVAR/mo)
- **Max Harmonic Distortion:** 32.1% Max (range: 3.2% - 32.1%)
- **Max Amperage:** 2,176A Max (range: 63A - 2176A)

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
| Line to Neutral Voltage (277v) |   279.73 |   273.21 |   287.71 |
| Line to Line Voltage (480v) |   484.50 |   473.22 |   498.33 |
| Current (AMPS) |  1464.72 |    62.58 |  2176.04 |
| Phase Angle (degrees) |    13.15 |     2.60 |    50.39 |
| Total Harmonic Distortion (PCT) |    16.43 |     3.22 |    32.09 |

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

- **Maximum UtilityDemand:** 1,607.39 kW
  - **Maximum Load:** 1,790.70 kVA
  - **Percentage of Capacity (MAX):** 71.6%
- **Average Load:** 1,226.84 kVA
  - **Percentage of Capacity (Avg):** 49.1%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,226.84 kVA
- **Average Power Factor (PF):** 0.971

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,229.17 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 484.50 V
- Average Current (Iavg_A): 1464.72 A
- Average kW (Psum_kW): 1187.42 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 2.33 kVA (0.2%)
- **Calculated PF (kW/kVA from averages):** 0.966
- **Power Factor Difference:** 0.005 (0.5%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1226.84) and measured PF (0.971) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,226.84 |        49.1% | 912,647.05 kVA | 4,051,636.23 TOTAL-HEAT |
| kW | 1,187.42 |        47.5% | 883,319.68 kWh | 130,196.92 Load-Heat |
| kVAR |   308.51 |        12.3% | 229,501.59 kVARh | - |
| WASTE |    39.42 |         1.6% | 29,327.37 WASTE | 4,322.71 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 4,051,636.23
- **Load-Heat (BTU/hr):** 130,196.92
- **Field-Heat (BTU/hr):** 4,322.71
- **Load-Heat (BTU, period total):** 96,853,489.18
- **Field-Heat (BTU, period total):** 3,215,662.68

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 12 | 1,226.84 | 1,187.42 |   296.75 |     0.97 |   49.1% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,263.08 | 1,220.45 |   316.91 |     0.97 |   50.5% |
| 01 | 1,255.25 | 1,212.63 |   315.27 |     0.97 |   50.2% |
| 02 | 1,253.17 | 1,210.38 |   315.04 |     0.97 |   50.1% |
| 03 | 1,238.89 | 1,197.88 |   305.79 |     0.97 |   49.6% |
| 04 | 1,225.38 | 1,185.60 |   300.80 |     0.97 |   49.0% |
| 05 | 1,200.29 | 1,161.19 |   292.75 |     0.97 |   48.0% |
| 06 | 1,171.58 | 1,135.47 |   276.06 |     0.97 |   46.9% |
| 07 | 1,167.10 | 1,130.83 |   276.44 |     0.97 |   46.7% |
| 08 | 1,167.42 | 1,130.57 |   278.54 |     0.97 |   46.7% |
| 09 | 1,156.65 | 1,119.70 |   278.38 |     0.97 |   46.3% |
| 10 | 1,155.84 | 1,118.75 |   278.34 |     0.97 |   46.2% |
| 11 | 1,166.03 | 1,123.87 |   295.99 |     0.96 |   46.6% |
| 12 | 1,169.19 | 1,129.27 |   289.68 |     0.97 |   46.8% |
| 13 | 1,174.13 | 1,136.01 |   282.33 |     0.97 |   47.0% |
| 14 | 1,211.40 | 1,172.70 |   289.39 |     0.97 |   48.5% |
| 15 | 1,229.49 | 1,192.77 |   285.14 |     0.97 |   49.2% |
| 16 | 1,240.61 | 1,204.14 |   285.02 |     0.97 |   49.6% |
| 17 | 1,252.53 | 1,217.10 |   283.36 |     0.97 |   50.1% |
| 18 | 1,283.11 | 1,243.13 |   306.05 |     0.97 |   51.3% |
| 19 | 1,285.25 | 1,244.61 |   308.38 |     0.97 |   51.4% |
| 20 | 1,288.31 | 1,247.37 |   311.03 |     0.97 |   51.5% |
| 21 | 1,293.85 | 1,253.18 |   310.84 |     0.97 |   51.8% |
| 22 | 1,299.19 | 1,256.83 |   319.14 |     0.97 |   52.0% |
| 23 | 1,296.44 | 1,253.56 |   321.30 |     0.97 |   51.9% |

---

# END OF REPORT

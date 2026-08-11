# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 666,797.5 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $130,025.52 (Cost per period)
- **Consumption Total Cost:** $174.77 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Rendering-1  
**Generated:** 2026-08-02 22:17:20  
**Data Source:** AN55050434-V-1minRES_44640CLP_260701-260731c.csv  

## Time Period

- **Period:** July 01, 2026 thru July 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,640

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

- **Transformer:** Rendering-1
- **Power Factor:** 0.794
- **Total Energy (Actual):** 666,797.52 kWh (per period), 896.23 kW (per hour)
- **Total Waste (Actual):** 174,621.91 kWh (per period), 234.71 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Rendering-1_AN55050434-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Rendering-1_AN55050434-1minRES_260701-260731.md


## UNITY MANAGEMENT Rendering-1 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 234.71 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 166.36 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Rendering-1 Utility Cost Offset:** $45.77/hour
- **Annual Offset Savings:** $400926/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 631,659 BTU/hr
- **Total Cooling kW No Longer Needed:** 56.30 kW
- **Cooling Energy Cost Avoided:** $10.98/hour
- **Annual Cooling Savings:** $96180/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 291.01 kW
- **CO2e Emissions Avoided:** 951.66 metric tons/year
- **Monthly CO2e Reduction:** 79.30 metric tons/month
- **Hourly CO2e Reduction:** 0.1086 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $36163/year

### Total Rendering-1 Unity Savings

- **Per Hour:** $60.88
- **Per Day:** $1461.01
- **Per Month:** $43830.36
- **Per Year:** $533269

### Rendering-1 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,226.5 kVAR Max (Avg: 689.8 kVAR/hr ; 496,639 kVAR/mo)
- **Max Harmonic Distortion:** 31.4% Max (range: 3.9% - 31.4%)
- **Max Amperage:** 2,266A Max (range: 0A - 2266A)

---

# Rendering-1 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   273.18 |     0.00 |   286.26 |
| Line to Line Voltage (480v) |   473.16 |     0.00 |   495.82 |
| Current (AMPS) |  1380.72 |     0.00 |  2265.67 |
| Phase Angle (degrees) |    37.26 |    22.78 |    90.00 |
| Total Harmonic Distortion (PCT) |    16.04 |     3.91 |    31.43 |

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
| THD Phase A (%) | 5.3% | IEEE standard per-phase calculation |
| THD Phase B (%) | 5.3% | IEEE standard per-phase calculation |
| THD Phase C (%) | 5.4% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 16.0% | Field-level stress indicator |
| Max Phase THD | 5.4% | Highest THD among all three phases |
| Min Phase THD | 5.3% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,331.70 kW
  - **Maximum Load:** 1,810.45 kVA
  - **Percentage of Capacity (MAX):** 72.4%
- **Average Load:** 1,130.94 kVA
  - **Percentage of Capacity (Avg):** 45.2%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 1,130.94 kVA
- **Average Power Factor (PF):** 0.794

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 1,131.55 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 473.16 V
- Average Current (Iavg_A): 1380.72 A
- Average kW (Psum_kW): 896.23 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.61 kVA (0.1%)
- **Calculated PF (kW/kVA from averages):** 0.792
- **Power Factor Difference:** 0.002 (0.3%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (1130.94) and measured PF (0.794) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA | 1,130.94 |        45.2% | 841,419.42 kVA | 3,058,075.01 TOTAL-HEAT |
| kW |   896.23 |        35.8% | 666,797.52 kWh | 634,650.06 Load-Heat |
| kVAR |   689.78 |        27.6% | 513,193.65 kVARh | - |
| WASTE |   234.71 |         9.4% | 174,621.91 WASTE | 166,203.08 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 3,058,075.01
- **Load-Heat (BTU/hr):** 634,650.06
- **Field-Heat (BTU/hr):** 166,203.08
- **Load-Heat (BTU, period total):** 472,179,646.78
- **Field-Heat (BTU, period total):** 123,655,095.00

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 | 1,130.94 |   896.23 |   687.05 |     0.79 |   45.2% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 | 1,173.79 |   934.78 |   707.59 |     0.80 |   47.0% |
| 01 | 1,170.87 |   929.81 |   709.14 |     0.79 |   46.8% |
| 02 | 1,165.00 |   924.27 |   706.72 |     0.79 |   46.6% |
| 03 | 1,162.40 |   924.67 |   701.64 |     0.80 |   46.5% |
| 04 | 1,158.10 |   922.16 |   697.68 |     0.80 |   46.3% |
| 05 | 1,135.29 |   903.60 |   684.34 |     0.80 |   45.4% |
| 06 | 1,136.84 |   904.50 |   685.81 |     0.80 |   45.5% |
| 07 | 1,121.34 |   889.40 |   680.43 |     0.79 |   44.9% |
| 08 | 1,128.12 |   894.97 |   684.23 |     0.79 |   45.1% |
| 09 | 1,131.95 |   897.44 |   687.25 |     0.79 |   45.3% |
| 10 | 1,138.19 |   903.95 |   689.12 |     0.79 |   45.5% |
| 11 | 1,133.90 |   899.83 |   687.43 |     0.79 |   45.4% |
| 12 | 1,126.21 |   890.12 |   687.06 |     0.79 |   45.0% |
| 13 | 1,116.22 |   880.27 |   683.48 |     0.79 |   44.6% |
| 14 | 1,102.76 |   867.02 |   678.22 |     0.79 |   44.1% |
| 15 | 1,101.78 |   867.38 |   675.40 |     0.79 |   44.1% |
| 16 | 1,105.57 |   875.71 |   671.47 |     0.79 |   44.2% |
| 17 | 1,090.45 |   857.92 |   670.80 |     0.79 |   43.6% |
| 18 | 1,090.04 |   849.43 |   681.30 |     0.78 |   43.6% |
| 19 | 1,098.76 |   861.47 |   680.04 |     0.78 |   44.0% |
| 20 | 1,136.76 |   908.45 |   681.37 |     0.80 |   45.5% |
| 21 | 1,122.02 |   898.65 |   669.18 |     0.80 |   44.9% |
| 22 | 1,134.88 |   902.43 |   685.25 |     0.80 |   45.4% |
| 23 | 1,161.32 |   921.39 |   704.29 |     0.79 |   46.5% |

---

# END OF REPORT

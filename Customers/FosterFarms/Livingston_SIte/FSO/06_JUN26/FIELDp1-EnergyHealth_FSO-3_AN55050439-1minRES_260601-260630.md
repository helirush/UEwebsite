# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 340,036.4 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $66,307.10 (Cost per period)
- **Consumption Total Cost:** $93.90 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** FSO-3  
**Generated:** 2026-09-10 20:05:14  
**Data Source:** AN55050439-V-1minRES_43200CLP_260601-260630c.csv  

## Time Period

- **Period:** June 01, 2026 thru June 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 42,369

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

- **Transformer:** FSO-3
- **Power Factor:** 0.918
- **Total Energy (Actual):** 340,036.42 kWh (per period), 481.54 kW (per hour)
- **Total Waste (Actual):** 29,386.34 kWh (per period), 41.61 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_FSO-3_AN55050439-1minRES_260601-260630.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_FSO-3_AN55050439-1minRES_260601-260630.md


## UNITY MANAGEMENT FSO-3 SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 41.61 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 21.46 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **FSO-3 Utility Cost Offset:** $8.11/hour
- **Annual Offset Savings:** $71087/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 77,689 BTU/hr
- **Total Cooling kW No Longer Needed:** 6.83 kW
- **Cooling Energy Cost Avoided:** $1.33/hour
- **Annual Cooling Savings:** $11670/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 48.45 kW
- **CO2e Emissions Avoided:** 158.43 metric tons/year
- **Monthly CO2e Reduction:** 13.20 metric tons/month
- **Hourly CO2e Reduction:** 0.0181 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $6020/year

### Total FSO-3 Unity Savings

- **Per Hour:** $10.13
- **Per Day:** $243.22
- **Per Month:** $7296.70
- **Per Year:** $88776

### FSO-3 Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 327.2 kVAR Max (Avg: 204.5 kVAR/hr ; 147,222 kVAR/mo)
- **Max Harmonic Distortion:** 28.4% Max (range: 3.3% - 28.4%)
- **Max Amperage:** 1,023A Max (range: 254A - 1023A)

---

# FSO-3 DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   277.77 |   270.89 |   287.35 |
| Line to Line Voltage (480v) |   481.12 |   469.19 |   497.71 |
| Current (AMPS) |   627.80 |   254.02 |  1023.40 |
| Phase Angle (degrees) |    23.23 |    19.95 |    35.90 |
| Total Harmonic Distortion (PCT) |    15.46 |     3.28 |    28.43 |

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
| Unity THD Composite (%) | 15.5% | Field-level stress indicator |
| Max Phase THD | 5.2% | Highest THD among all three phases |
| Min Phase THD | 5.2% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 780.10 kW
  - **Maximum Load:** 844.69 kVA
  - **Percentage of Capacity (MAX):** 33.8%
- **Average Load:** 523.15 kVA
  - **Percentage of Capacity (Avg):** 20.9%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 523.15 kVA
- **Average Power Factor (PF):** 0.918

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 523.15 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 481.12 V
- Average Current (Iavg_A): 627.80 A
- Average kW (Psum_kW): 481.54 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 0.00 kVA (0.0%)
- **Calculated PF (kW/kVA from averages):** 0.920
- **Power Factor Difference:** 0.002 (0.2%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (523.15) and measured PF (0.918) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   523.15 |        20.9% | 369,422.76 kVA | 1,643,068.11 TOTAL-HEAT |
| kW |   481.54 |        19.3% | 340,036.42 kWh | 130,700.55 Load-Heat |
| kVAR |   204.47 |         8.2% | 144,389.78 kVARh | - |
| WASTE |    41.61 |         1.7% | 29,386.34 WASTE | 11,295.29 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 1,643,068.11
- **Load-Heat (BTU/hr):** 130,700.55
- **Field-Heat (BTU/hr):** 11,295.29
- **Load-Heat (BTU, period total):** 92,294,196.67
- **Field-Heat (BTU, period total):** 7,976,171.31

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 6 |   523.15 |   481.54 |   203.92 |     0.92 |   20.9% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   588.12 |   544.05 |   223.16 |     0.93 |   23.5% |
| 01 |   571.81 |   528.49 |   218.02 |     0.92 |   22.9% |
| 02 |   548.35 |   505.84 |   211.12 |     0.92 |   21.9% |
| 03 |   537.10 |   495.10 |   207.32 |     0.92 |   21.5% |
| 04 |   521.23 |   480.11 |   201.99 |     0.92 |   20.8% |
| 05 |   505.74 |   465.67 |   196.46 |     0.92 |   20.2% |
| 06 |   501.22 |   461.22 |   195.53 |     0.92 |   20.0% |
| 07 |   497.02 |   457.93 |   192.55 |     0.92 |   19.9% |
| 08 |   508.29 |   468.44 |   196.55 |     0.92 |   20.3% |
| 09 |   504.03 |   464.19 |   195.77 |     0.92 |   20.2% |
| 10 |   513.61 |   472.70 |   200.17 |     0.92 |   20.5% |
| 11 |   516.12 |   474.78 |   201.57 |     0.92 |   20.6% |
| 12 |   518.86 |   476.58 |   204.38 |     0.92 |   20.8% |
| 13 |   531.08 |   487.86 |   209.15 |     0.92 |   21.2% |
| 14 |   541.93 |   497.71 |   213.85 |     0.92 |   21.7% |
| 15 |   542.23 |   498.30 |   213.54 |     0.92 |   21.7% |
| 16 |   553.97 |   509.18 |   217.94 |     0.92 |   22.2% |
| 17 |   520.82 |   477.87 |   206.84 |     0.92 |   20.8% |
| 18 |   506.17 |   464.17 |   201.61 |     0.92 |   20.2% |
| 19 |   476.81 |   436.97 |   190.39 |     0.92 |   19.1% |
| 20 |   486.20 |   446.51 |   192.07 |     0.92 |   19.4% |
| 21 |   482.79 |   444.03 |   189.29 |     0.92 |   19.3% |
| 22 |   506.32 |   466.46 |   196.61 |     0.92 |   20.3% |
| 23 |   577.86 |   534.64 |   219.06 |     0.93 |   23.1% |

---

# END OF REPORT

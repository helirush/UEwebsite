# BASELINE ELECTRICAL ENERGY USAGE AND COST

**Transformer Baseline :**
- **Consumption Usage:** 500,747.6 kWh (Usage per period)
- **Consumption Cost per unit:** $0.195/kWh (Cost per kWh)
- **Consumption Total Cost:** $97,645.77 (Cost per period)
- **Consumption Total Cost:** $131.24 (Cost per hour)

---

# TRANSFORMER PERFORMANCE ANALYSIS REPORT

**Transformer Name:** Deli F  
**Generated:** 2026-08-02 21:24:10  
**Data Source:** AN55050323-V-1minRES_44640CLP_260701-260731c.csv  

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

- **Transformer:** Deli F
- **Power Factor:** 0.858
- **Total Energy (Actual):** 500,747.56 kWh (per period), 673.05 kW (per hour)
- **Total Waste (Actual):** 61,519.08 kWh (per period), 82.69 kW (per hour)

---

## Additional Analysis

*Detailed thermal and voltage analysis available in dedicated reports:*
- **Heat Health Analysis:** FIELDp3-HeatHealth_Deli-F_AN55050323-1minRES_260701-260731.md
- **Voltage & Current Health:** FIELDp2-VoltAmpHealth_Deli-F_AN55050323-1minRES_260701-260731.md


## UNITY MANAGEMENT Deli F SAVINGS SUMMARY
*(3 Primary Elements - Energy, Cooling, CO2e)*

### Element 1: Reactive Energy Offset Savings

- **Total Non-Active Field Burden (kVA - kW):** 82.69 kW/hr
- **Heat-Coupled Burden Used in Thermal Model:** 49.42 kW/hr (modeled_non_active_field_burden)
- **Blended Electricity Rate:** $0.1950/kWh (all-inclusive)
- **Deli F Utility Cost Offset:** $16.12/hour
- **Annual Offset Savings:** $141246/year

### Element 2: Cooling Elimination Savings

- **Total Heat No Longer Generated:** 178,211 BTU/hr
- **Total Cooling kW No Longer Needed:** 15.89 kW
- **Cooling Energy Cost Avoided:** $3.10/hour
- **Annual Cooling Savings:** $27135/year

### Element 3: CO2e Emissions Reduction Value

- **Total kW Waste Eliminated:** 98.57 kW
- **CO2e Emissions Avoided:** 322.35 metric tons/year
- **Monthly CO2e Reduction:** 26.86 metric tons/month
- **Hourly CO2e Reduction:** 0.0368 metric tons/hour
- **CO2e Value Rate:** $38/metric ton
- **Annual CO2e Value:** $12249/year

### Total Deli F Unity Savings

- **Per Hour:** $20.62
- **Per Day:** $494.88
- **Per Month:** $14846.34
- **Per Year:** $180631

### Deli F Savings Breakdown


### Unity System (MPTS) Installation Considerations

- **Max Reactive Energy:** 1,698.0 kVAR Max (Avg: 343.7 kVAR/hr ; 247,477 kVAR/mo)
- **Max Harmonic Distortion:** 29.1% Max (range: 3.4% - 29.1%)
- **Max Amperage:** 2,658A Max (range: 0A - 2658A)

---

# Deli F DETAILED PERFORMANCE ANALYSIS

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
| Line to Neutral Voltage (277v) |   276.94 |     0.00 |   289.37 |
| Line to Line Voltage (480v) |   479.67 |     0.00 |   501.20 |
| Current (AMPS) |   913.37 |     0.00 |  2657.82 |
| Phase Angle (degrees) |    30.32 |     0.00 |    90.00 |
| Total Harmonic Distortion (PCT) |    14.37 |     3.36 |    29.14 |

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
| THD Phase A (%) | 4.8% | IEEE standard per-phase calculation |
| THD Phase B (%) | 4.8% | IEEE standard per-phase calculation |
| THD Phase C (%) | 4.8% | IEEE standard per-phase calculation |
| Unity THD Composite (%) | 14.4% | Field-level stress indicator |
| Max Phase THD | 4.8% | Highest THD among all three phases |
| Min Phase THD | 4.8% | Lowest THD among all three phases |

### Engineering Commentary

This composite score is useful when assessing transformer health, load imbalance, or predicting heating and harmonic clustering (G1–G8 groups). It's used in our eBehavior overlays and directly informs Unity's Voltage Health Index (VHI).

If IEEE compliance is required, individual THD values remain visible and can be cross-checked per phase.

⚠️ **Note on THD Composite**: Unity's THD Composite is not a scalar addition per IEEE. It is a field-behavior indicator that helps us track total harmonic impact across all three phases — a core component of transformer-level heat modeling.

## Capacity Utilization

- **Maximum UtilityDemand:** 1,691.62 kW
  - **Maximum Load:** 2,189.89 kVA
  - **Percentage of Capacity (MAX):** 87.6%
- **Average Load:** 755.73 kVA
  - **Percentage of Capacity (Avg):** 30.2%

## kVA and Power Factor Analysis (Measured vs Calculated)

### Measured Values (PRIMARY - Used for All Analysis)

- **Average kVA (Ssum_kVA):** 755.73 kVA
- **Average Power Factor (PF):** 0.858

**Source:** Direct meter measurements (instantaneous values averaged over time)

### Calculated Values (VERIFICATION ONLY)

- **Calculated kVA (V×I×√3/1000):** 758.84 kVA

**Calculation Inputs:**
- Average Voltage (VIavg_V): 479.67 V
- Average Current (Iavg_A): 913.37 A
- Average kW (Psum_kW): 673.05 kW

### Differences (Measured vs Calculated)
- **kVA Difference:** 3.11 kVA (0.4%)
- **Calculated PF (kW/kVA from averages):** 0.887
- **Power Factor Difference:** 0.029 (3.4%)

### Why Measured Values Are More Accurate

When voltage and current vary over time (which they always do in real systems):
- **Average(V × I) ≠ Average(V) × Average(I)** due to the non-linear multiplication
- **Time-weighted PF ≠ kW/kVA from averages** due to load variation effects

The meter's instantaneous measurements capture these variations correctly, while
calculations from averaged values systematically underestimate reactive effects.

**Analysis Method:** All heat calculations, thermal burden, and cost analysis use
the measured kVA (755.73) and measured PF (0.858) values.
Calculated values are shown above for verification and engineering transparency.

## Overall Power Metrics (FPC)

| Metric | Average | % of Capacity | Total Energy | HEAT (BTU/hr) |
| ------ | ------- | ------------- | ------------------- | ------------- |
| kVA |   755.73 |        30.2% | 562,266.64 kVA | 2,296,534.65 TOTAL-HEAT |
| kW |   673.05 |        26.9% | 500,747.56 kWh | 251,269.93 Load-Heat |
| kVAR |   343.72 |        13.7% | 255,725.74 kVARh | - |
| WASTE |    82.69 |         3.3% | 61,519.08 WASTE | 30,869.64 Field-Heat |

### Heat Unit Notes

- **TOTAL-HEAT (BTU/hr):** 2,296,534.65
- **Load-Heat (BTU/hr):** 251,269.93
- **Field-Heat (BTU/hr):** 30,869.64
- **Load-Heat (BTU, period total):** 186,944,828.78
- **Field-Heat (BTU, period total):** 22,967,009.48

## Measured Monthly Averages

| Month | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ----- | ------- | ------ | -------- | ------ | ---------- |
| 7 |   755.73 |   673.05 |   338.77 |     0.89 |   30.2% |

## Measured Hourly Averages

| Hour | Avg kVA | Avg kW | Avg kVAR | Avg PF | % Capacity |
| ---- | ------- | ------ | -------- | ------ | ---------- |
| 00 |   616.76 |   504.71 |   353.16 |     0.82 |   24.7% |
| 01 |   296.89 |   238.60 |   175.59 |     0.80 |   11.9% |
| 02 |    76.61 |    61.42 |    44.56 |     0.80 |    3.1% |
| 03 |    67.15 |    54.32 |    38.12 |     0.81 |    2.7% |
| 04 |    44.80 |    36.96 |    24.58 |     0.83 |    1.8% |
| 05 |   186.18 |   144.77 |   115.60 |     0.78 |    7.4% |
| 06 |   958.95 |   860.39 |   417.81 |     0.90 |   38.4% |
| 07 | 1,019.58 |   914.07 |   449.07 |     0.90 |   40.8% |
| 08 | 1,000.96 |   889.17 |   456.30 |     0.89 |   40.0% |
| 09 | 1,019.64 |   913.86 |   449.64 |     0.90 |   40.8% |
| 10 |   888.20 |   771.79 |   435.27 |     0.87 |   35.5% |
| 11 |   980.67 |   880.18 |   430.45 |     0.90 |   39.2% |
| 12 | 1,007.31 |   903.61 |   442.54 |     0.90 |   40.3% |
| 13 |   972.26 |   868.36 |   434.52 |     0.89 |   38.9% |
| 14 | 1,012.57 |   912.96 |   436.15 |     0.90 |   40.5% |
| 15 |   884.53 |   784.29 |   403.65 |     0.89 |   35.4% |
| 16 |   916.60 |   834.19 |   377.20 |     0.91 |   36.7% |
| 17 |   897.80 |   808.89 |   385.18 |     0.90 |   35.9% |
| 18 |   915.57 |   832.35 |   378.76 |     0.91 |   36.6% |
| 19 |   853.15 |   759.40 |   382.87 |     0.89 |   34.1% |
| 20 |   867.43 |   781.35 |   372.94 |     0.90 |   34.7% |
| 21 |   901.92 |   818.80 |   374.87 |     0.91 |   36.1% |
| 22 |   870.23 |   782.43 |   376.54 |     0.90 |   34.8% |
| 23 |   881.86 |   796.27 |   375.17 |     0.90 |   35.3% |

---

# END OF REPORT

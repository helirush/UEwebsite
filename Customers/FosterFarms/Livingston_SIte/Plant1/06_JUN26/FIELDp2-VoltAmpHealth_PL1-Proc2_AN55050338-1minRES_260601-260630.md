# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** PL1-Proc2  
**Generated:** 2026-07-07 04:14:43  
**Data Source:** AN55050338-V-260630.2359c.csv  

## 📊 Analysis Period

- **Period:** June 01, 2026 thru June 30, 2026
- **Number of Days:** 30 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 43,200

## 🔋 Facility Information

- **Transformer Capacity:** 2,500 kVA
- **Nominal Voltage:** 480V (3-Phase)
- **Analysis Type:** Voltage & Current Health + Thermal Burden Assessment
- **Technology Focus:** Unity Energy MPTS Solutions

---

## 📈 Voltage Statistics

<details>
<summary><strong>Basic Voltage Metrics</strong></summary>

- **Total Voltage Readings Analyzed:** 43,200
- **Average Voltage:** 319.1V
- **Minimum Voltage:** 0.0V
- **Maximum Voltage:** 332.6V
- **Standard Deviation:** 4.89V

</details>

### Operating Mean Voltage vs Nominal (480V)

- **Operating Mean:** 319.1V (160.9V, 33.51% below nominal)

*📌 Note: Lower mean voltage for the same kW raises current, increasing BTU/hr and contributing to higher VHI.*

### Voltage Deviation Analysis

| Deviation Band | Readings | Percentage |
| -------------- | -------: | ---------: |
| Below 460V | 43,200 | 100.00% |
| 460–470V | 0 | 0.00% |
| 470–480V | 0 | 0.00% |
| 480–490V | 0 | 0.00% |
| 490–500V | 0 | 0.00% |
| 500V+ | 0 | 0.00% |

**Threshold highlights (cumulative):**
- Below 470V: 43,200 (100.00%)
- Below 460V: 43,200 (100.00%)
- Above 490V: 0 (0.00%)
- Above 500V: 0 (0.00%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 1

### PL1-PROC2 Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 4 | 309.2–309.2V | 1805.9–1805.9A | -2.2 | 1805.9 | 280 | Intermittent | 1 |

### PL1-PROC2 Group Nominal Drop Points

G1: Center at 309.2V, 4 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 8.14
- **Maximum VHI:** 646.37
- **High VHI Events (>5.0):** 31,116

### ⚠️ Critical Voltage Stress Indicators

**Critical voltage groups detected:** 1

*These voltage levels may indicate:*

- Motor starting stress events
- Transformer overloading conditions
- Potential device failure precursors
- Power quality degradation


</details>


---

## 📊 Chart Overlay Data Preparation

<details>
<summary><strong>Prepared Chart Overlay Points</strong></summary>

*The following data points have been prepared for chart overlays:*

Critical voltage drops (below 440V): 43200 events

### Group Annotation Points

G1: Center at 309.2V, 4 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Voltage behavior appears within normal operating parameters during the analysis period.

---

# END OF REPORT

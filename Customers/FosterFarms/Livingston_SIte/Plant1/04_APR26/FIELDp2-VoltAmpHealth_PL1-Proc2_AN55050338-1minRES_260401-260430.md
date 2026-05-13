# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** PL1-Proc2  
**Generated:** 2026-05-10 11:12:10  
**Data Source:** AN55050338-V-1minRES_43200CLP_260401-260430c.csv  

## 📊 Analysis Period

- **Period:** April 01, 2026 thru April 30, 2026
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
- **Average Voltage:** 320.0V
- **Minimum Voltage:** 0.0V
- **Maximum Voltage:** 331.9V
- **Standard Deviation:** 3.76V

</details>

### Operating Mean Voltage vs Nominal (480V)

- **Operating Mean:** 320.0V (160.0V, 33.34% below nominal)

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
| G1 | 12 | 307.6–309.6V | 879.4–1272.6A | -0.4 | 1077.1 | 170 | Intermittent | 3 |

### PL1-PROC2 Group Nominal Drop Points

G1: Center at 308.6V, 12 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 6.87
- **Maximum VHI:** 646.73
- **High VHI Events (>5.0):** 26,659

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

G1: Center at 308.6V, 12 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Voltage behavior appears within normal operating parameters during the analysis period.

---

# END OF REPORT

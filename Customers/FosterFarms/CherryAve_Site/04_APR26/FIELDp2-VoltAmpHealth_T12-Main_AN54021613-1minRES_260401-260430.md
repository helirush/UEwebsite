# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** T12 Main  
**Generated:** 2026-05-08 17:40:44  
**Data Source:** AN54021613-V-1minRES_43200CLP_260401-260430c.csv  

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
- **Average Voltage:** 464.8V
- **Minimum Voltage:** 0.0V
- **Maximum Voltage:** 495.1V
- **Standard Deviation:** 17.51V

</details>

### Operating Mean Voltage vs Nominal (480V)

- **Operating Mean:** 464.8V (15.2V, 3.17% below nominal)

*📌 Note: Lower mean voltage for the same kW raises current, increasing BTU/hr and contributing to higher VHI.*

### Voltage Deviation Analysis

| Deviation Band | Readings | Percentage |
| -------------- | -------: | ---------: |
| Below 460V | 20,474 | 47.39% |
| 460–470V | 8,875 | 20.54% |
| 470–480V | 7,099 | 16.43% |
| 480–490V | 6,028 | 13.95% |
| 490–500V | 724 | 1.68% |
| 500V+ | 0 | 0.00% |

**Threshold highlights (cumulative):**
- Below 470V: 29,349 (67.94%)
- Below 460V: 20,474 (47.39%)
- Above 490V: 724 (1.68%)
- Above 500V: 0 (0.00%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 3

### T12 MAIN Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 55019 | 445.9–460.8V | 1004.9–2972.7A | 10.1 | 1993.1 | 310 | Critical Duty | 26 |
| G2 | 3 | 441.5–443.5V | 1802.5–2089.1A | 14.5 | 1962.2 | 260 | Intermittent | 3 |
| G3 | 2 | 434.9–436.1V | 1976.8–2119.5A | 21.1 | 2048.2 | 270 | Intermittent | 2 |

### T12 MAIN Group Nominal Drop Points

G1: Center at 453.4V, 55019 occurrences
G2: Center at 442.5V, 3 occurrences
G3: Center at 435.5V, 2 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 22.96
- **Maximum VHI:** 960.00
- **High VHI Events (>5.0):** 31,881


</details>


---

## 📊 Chart Overlay Data Preparation

<details>
<summary><strong>Prepared Chart Overlay Points</strong></summary>

*The following data points have been prepared for chart overlays:*

Critical voltage drops (below 440V): 37 events

### Group Annotation Points

G1: Center at 453.4V, 55019 occurrences
G2: Center at 442.5V, 3 occurrences
G3: Center at 435.5V, 2 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Multiple voltage drop groups detected - consider load balancing analysis and power quality assessment.

---

# END OF REPORT

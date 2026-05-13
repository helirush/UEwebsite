# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** T15 Fillet  
**Generated:** 2026-05-08 17:40:17  
**Data Source:** AN53110845-V-1minRES_43200CLP_260401-260430c.csv  

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
- **Average Voltage:** 477.7V
- **Minimum Voltage:** 0.0V
- **Maximum Voltage:** 503.9V
- **Standard Deviation:** 15.52V

</details>

### Operating Mean Voltage vs Nominal (480V)

- **Operating Mean:** 477.7V (2.3V, 0.48% below nominal)

*📌 Note: Lower mean voltage for the same kW raises current, increasing BTU/hr and contributing to higher VHI.*

### Voltage Deviation Analysis

| Deviation Band | Readings | Percentage |
| -------------- | -------: | ---------: |
| Below 460V | 67 | 0.16% |
| 460–470V | 10,125 | 23.44% |
| 470–480V | 17,427 | 40.34% |
| 480–490V | 8,639 | 20.00% |
| 490–500V | 6,332 | 14.66% |
| 500V+ | 610 | 1.41% |

**Threshold highlights (cumulative):**
- Below 470V: 10,192 (23.59%)
- Below 460V: 67 (0.16%)
- Above 490V: 6,942 (16.07%)
- Above 500V: 610 (1.41%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 14

### T15 FILLET Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 52831 | 461.6–476.4V | 343.9–2045.5A | 9.9 | 1481.5 | 190 | Critical Duty | 26 |
| G2 | 9 | 414.6–417.7V | 1327.3–1582.9A | 56.9 | 1511.5 | 160 | Intermittent | 7 |
| G3 | 7 | 419.8–424.2V | 596.4–1568.6A | 51.7 | 956.6 | 100 | Intermittent | 4 |
| G4 | 6 | 438.9–445.6V | 181.0–1473.7A | 32.6 | 668.5 | 70 | Intermittent | 6 |
| G5 | 4 | 408.1–409.9V | 1145.8–1693.9A | 63.4 | 1495.3 | 150 | Intermittent | 3 |
| G6 | 3 | 433.0–433.5V | 761.7–1653.4A | 38.5 | 1266.9 | 140 | Intermittent | 3 |
| G7 | 2 | 396.8–397.1V | 1327.6–1489.3A | 74.7 | 1408.4 | 150 | Intermittent | 2 |
| G8 | 2 | 426.4–427.8V | 742.0–1120.8A | 45.1 | 931.4 | 100 | Intermittent | 2 |
| G9 | 2 | 436.0–436.0V | 229.2–312.2A | 35.5 | 270.7 | 30 | Intermittent | 2 |
| G10 | 1 | 402.7–402.7V | 1449.0–1449.0A | 68.7 | 1449.0 | 150 | Intermittent | 1 |
| G11 | 1 | 430.4–430.4V | 1398.5–1398.5A | 41.1 | 1398.5 | 150 | Intermittent | 1 |
| G12 | 1 | 448.7–448.7V | 1486.8–1486.8A | 22.8 | 1486.8 | 190 | Intermittent | 1 |
| G13 | 1 | 451.8–451.8V | 330.6–330.6A | 19.7 | 330.6 | 40 | Intermittent | 1 |
| G14 | 1 | 455.9–455.9V | 1740.6–1740.6A | 15.5 | 1740.6 | 230 | Intermittent | 1 |

### T15 FILLET Group Nominal Drop Points

G1: Center at 469.0V, 52831 occurrences
G2: Center at 416.1V, 9 occurrences
G3: Center at 422.0V, 7 occurrences
G4: Center at 442.2V, 6 occurrences
G5: Center at 409.0V, 4 occurrences
G6: Center at 433.2V, 3 occurrences
G7: Center at 397.0V, 2 occurrences
G8: Center at 427.1V, 2 occurrences
G9: Center at 436.0V, 2 occurrences
G10: Center at 402.7V, 1 occurrences
G11: Center at 430.4V, 1 occurrences
G12: Center at 448.7V, 1 occurrences
G13: Center at 451.8V, 1 occurrences
G14: Center at 455.9V, 1 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 23.31
- **Maximum VHI:** 992.59
- **High VHI Events (>5.0):** 39,426

### ⚠️ Critical Voltage Stress Indicators

**Critical voltage groups detected:** 5

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

Critical voltage drops (below 440V): 59 events

### Group Annotation Points

G1: Center at 469.0V, 52831 occurrences
G2: Center at 416.1V, 9 occurrences
G3: Center at 422.0V, 7 occurrences
G4: Center at 442.2V, 6 occurrences
G5: Center at 409.0V, 4 occurrences
G6: Center at 433.2V, 3 occurrences
G7: Center at 396.9V, 2 occurrences
G8: Center at 427.1V, 2 occurrences
G9: Center at 436.0V, 2 occurrences
G10: Center at 402.7V, 1 occurrences
G11: Center at 430.4V, 1 occurrences
G12: Center at 448.7V, 1 occurrences
G13: Center at 451.8V, 1 occurrences
G14: Center at 455.9V, 1 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Multiple voltage drop groups detected - consider load balancing analysis and power quality assessment.

---

# END OF REPORT

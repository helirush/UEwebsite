# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** T15 Fillet  
**Generated:** 2026-03-14 12:39:36  
**Data Source:** AN53110845-V-1minRES_40320CLP_260201-260228c.csv  

## 📊 Analysis Period

- **Period:** February 01, 2026 thru February 28, 2026
- **Number of Days:** 28 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 40,320

## 🔋 Facility Information

- **Transformer Capacity:** 2,500 kVA
- **Nominal Voltage:** 480V (3-Phase)
- **Analysis Type:** Voltage & Current Health + Thermal Burden Assessment
- **Technology Focus:** Unity Energy MPTS Solutions

---

## 📈 Voltage Statistics

<details>
<summary><strong>Basic Voltage Metrics</strong></summary>

- **Total Voltage Readings Analyzed:** 40,320
- **Average Voltage:** 488.8V
- **Minimum Voltage:** 390.5V
- **Maximum Voltage:** 346360.2V
- **Standard Deviation:** 1722.55V

</details>

### Operating Mean Voltage vs Nominal (480V)

- **Operating Mean:** 488.8V (8.8V, 1.84% above nominal)

*📌 Note: Lower mean voltage for the same kW raises current, increasing BTU/hr and contributing to higher VHI.*

### Voltage Deviation Analysis

| Deviation Band | Readings | Percentage |
| -------------- | -------: | ---------: |
| Below 460V | 17 | 0.04% |
| 460–470V | 3,608 | 8.95% |
| 470–480V | 19,647 | 48.73% |
| 480–490V | 8,715 | 21.61% |
| 490–500V | 7,293 | 18.09% |
| 500V+ | 1,040 | 2.58% |

**Threshold highlights (cumulative):**
- Below 470V: 3,625 (8.99%)
- Below 460V: 17 (0.04%)
- Above 490V: 8,333 (20.67%)
- Above 500V: 1,040 (2.58%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 11

### T15 FILLET Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 50015 | 464.0–477.4V | 367.6–2290.2A | 8.4 | 1644.4 | 260 | Critical Duty | 24 |
| G2 | 5 | 416.0–418.1V | 1188.6–1682.8A | 56.4 | 1461.1 | 150 | Intermittent | 5 |
| G3 | 3 | 438.7–441.7V | 299.0–322.4A | 33.7 | 307.8 | 30 | Intermittent | 3 |
| G4 | 2 | 432.0–432.6V | 1287.7–1291.2A | 40.4 | 1289.4 | 140 | Intermittent | 2 |
| G5 | 1 | 390.5–390.5V | 1528.5–1528.5A | 81.9 | 1528.5 | 160 | Intermittent | 1 |
| G6 | 1 | 395.5–395.5V | 1398.8–1398.8A | 76.9 | 1398.8 | 140 | Intermittent | 1 |
| G7 | 1 | 408.7–408.7V | 1353.9–1353.9A | 63.8 | 1353.9 | 140 | Intermittent | 1 |
| G8 | 1 | 423.7–423.7V | 1423.0–1423.0A | 48.7 | 1423.0 | 150 | Intermittent | 1 |
| G9 | 1 | 436.4–436.4V | 280.7–280.7A | 36.0 | 280.7 | 30 | Intermittent | 1 |
| G10 | 1 | 449.3–449.3V | 349.6–349.6A | 23.2 | 349.6 | 30 | Intermittent | 1 |
| G11 | 1 | 458.1–458.1V | 1583.4–1583.4A | 14.4 | 1583.4 | 210 | Intermittent | 1 |

### T15 FILLET Group Nominal Drop Points

G1: Center at 470.7V, 50015 occurrences
G2: Center at 417.1V, 5 occurrences
G3: Center at 440.2V, 3 occurrences
G4: Center at 432.3V, 2 occurrences
G5: Center at 390.5V, 1 occurrences
G6: Center at 395.5V, 1 occurrences
G7: Center at 408.7V, 1 occurrences
G8: Center at 423.7V, 1 occurrences
G9: Center at 436.4V, 1 occurrences
G10: Center at 449.3V, 1 occurrences
G11: Center at 458.1V, 1 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 21.14
- **Maximum VHI:** 213.54
- **High VHI Events (>5.0):** 36,817

### ⚠️ Critical Voltage Stress Indicators

**Critical voltage groups detected:** 4

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

Critical voltage drops (below 440V): 14 events

### Group Annotation Points

G1: Center at 470.7V, 50015 occurrences
G2: Center at 417.0V, 5 occurrences
G3: Center at 440.2V, 3 occurrences
G4: Center at 432.3V, 2 occurrences
G5: Center at 390.5V, 1 occurrences
G6: Center at 395.5V, 1 occurrences
G7: Center at 408.7V, 1 occurrences
G8: Center at 423.7V, 1 occurrences
G9: Center at 436.4V, 1 occurrences
G10: Center at 449.3V, 1 occurrences
G11: Center at 458.1V, 1 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Multiple voltage drop groups detected - consider load balancing analysis and power quality assessment.

---

# END OF REPORT

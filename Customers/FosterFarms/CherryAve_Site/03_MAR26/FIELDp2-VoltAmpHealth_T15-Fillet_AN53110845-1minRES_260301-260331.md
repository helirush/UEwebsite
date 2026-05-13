# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** T15 Fillet  
**Generated:** 2026-04-17 11:16:03  
**Data Source:** AN53110845-V-1minRES_44580CLP_260301-260331c.csv  

## 📊 Analysis Period

- **Period:** March 01, 2026 thru March 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,580

## 🔋 Facility Information

- **Transformer Capacity:** 2,500 kVA
- **Nominal Voltage:** 480V (3-Phase)
- **Analysis Type:** Voltage & Current Health + Thermal Burden Assessment
- **Technology Focus:** Unity Energy MPTS Solutions

---

## 📈 Voltage Statistics

<details>
<summary><strong>Basic Voltage Metrics</strong></summary>

- **Total Voltage Readings Analyzed:** 44,580
- **Average Voltage:** 479.5V
- **Minimum Voltage:** 395.7V
- **Maximum Voltage:** 502.7V
- **Standard Deviation:** 9.85V

</details>

### Operating Mean Voltage vs Nominal (480V)

- **Operating Mean:** 479.5V (0.5V, 0.10% below nominal)

*📌 Note: Lower mean voltage for the same kW raises current, increasing BTU/hr and contributing to higher VHI.*

### Voltage Deviation Analysis

| Deviation Band | Readings | Percentage |
| -------------- | -------: | ---------: |
| Below 460V | 29 | 0.07% |
| 460–470V | 7,653 | 17.17% |
| 470–480V | 18,014 | 40.41% |
| 480–490V | 10,106 | 22.67% |
| 490–500V | 8,188 | 18.37% |
| 500V+ | 590 | 1.32% |

**Threshold highlights (cumulative):**
- Below 470V: 7,682 (17.23%)
- Below 460V: 29 (0.07%)
- Above 490V: 8,778 (19.69%)
- Above 500V: 590 (1.32%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 10

### T15 FILLET Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 48533 | 461.4–477.5V | 521.7–2243.4A | 11.1 | 1539.7 | 200 | Critical Duty | 26 |
| G2 | 15 | 414.1–417.8V | 1244.2–1681.5A | 58.4 | 1446.6 | 150 | Intermittent | 11 |
| G3 | 5 | 436.8–440.8V | 197.7–1531.7A | 35.7 | 749.0 | 80 | Intermittent | 5 |
| G4 | 2 | 410.9–411.3V | 1298.5–1517.5A | 61.6 | 1408.0 | 150 | Intermittent | 2 |
| G5 | 2 | 433.3–434.4V | 285.0–1510.7A | 39.2 | 897.8 | 100 | Intermittent | 2 |
| G6 | 1 | 395.7–395.7V | 1308.0–1308.0A | 76.8 | 1308.0 | 130 | Intermittent | 1 |
| G7 | 1 | 408.0–408.0V | 1546.7–1546.7A | 64.5 | 1546.7 | 160 | Intermittent | 1 |
| G8 | 1 | 428.9–428.9V | 1616.8–1616.8A | 43.7 | 1616.8 | 180 | Intermittent | 1 |
| G9 | 1 | 443.3–443.3V | 255.1–255.1A | 29.3 | 255.1 | 20 | Intermittent | 1 |
| G10 | 1 | 445.7–445.7V | 1551.4–1551.4A | 26.8 | 1551.4 | 170 | Intermittent | 1 |

### T15 FILLET Group Nominal Drop Points

G1: Center at 469.4V, 48533 occurrences
G2: Center at 416.0V, 15 occurrences
G3: Center at 438.8V, 5 occurrences
G4: Center at 411.1V, 2 occurrences
G5: Center at 433.9V, 2 occurrences
G6: Center at 395.7V, 1 occurrences
G7: Center at 408.0V, 1 occurrences
G8: Center at 428.9V, 1 occurrences
G9: Center at 443.3V, 1 occurrences
G10: Center at 445.7V, 1 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 22.61
- **Maximum VHI:** 203.30
- **High VHI Events (>5.0):** 41,052

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

Critical voltage drops (below 440V): 25 events

### Group Annotation Points

G1: Center at 469.5V, 48533 occurrences
G2: Center at 415.9V, 15 occurrences
G3: Center at 438.8V, 5 occurrences
G4: Center at 411.1V, 2 occurrences
G5: Center at 433.9V, 2 occurrences
G6: Center at 395.7V, 1 occurrences
G7: Center at 408.0V, 1 occurrences
G8: Center at 428.9V, 1 occurrences
G9: Center at 443.3V, 1 occurrences
G10: Center at 445.7V, 1 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Multiple voltage drop groups detected - consider load balancing analysis and power quality assessment.

---

# END OF REPORT

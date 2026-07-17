# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** T15 Fillet  
**Generated:** 2026-07-10 12:10:57  
**Data Source:** AN53110845-V-1minRES_44640CLP_260501-260531c.csv  

## 📊 Analysis Period

- **Period:** May 01, 2026 thru May 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,640

## 🔋 Facility Information

- **Transformer Capacity:** 2,500 kVA
- **Nominal Voltage:** 480V (3-Phase)
- **Analysis Type:** Voltage & Current Health + Thermal Burden Assessment
- **Technology Focus:** Unity Energy MPTS Solutions

---

## 📈 Voltage Statistics

<details>
<summary><strong>Basic Voltage Metrics</strong></summary>

- **Total Voltage Readings Analyzed:** 44,640
- **Average Voltage:** 478.7V
- **Minimum Voltage:** 406.0V
- **Maximum Voltage:** 504.8V
- **Standard Deviation:** 10.87V

</details>

### Operating Mean Voltage vs Nominal (480V)

- **Operating Mean:** 478.7V (1.3V, 0.27% below nominal)

*📌 Note: Lower mean voltage for the same kW raises current, increasing BTU/hr and contributing to higher VHI.*

### Voltage Deviation Analysis

| Deviation Band | Readings | Percentage |
| -------------- | -------: | ---------: |
| Below 460V | 65 | 0.15% |
| 460–470V | 12,679 | 28.40% |
| 470–480V | 13,228 | 29.63% |
| 480–490V | 10,147 | 22.73% |
| 490–500V | 7,190 | 16.11% |
| 500V+ | 1,331 | 2.98% |

**Threshold highlights (cumulative):**
- Below 470V: 12,744 (28.55%)
- Below 460V: 65 (0.15%)
- Above 490V: 8,521 (19.09%)
- Above 500V: 1,331 (2.98%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 7

### T15 FILLET Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 39675 | 455.6–478.7V | 513.4–1960.7A | 18.1 | 1326.6 | 170 | Critical Duty | 25 |
| G2 | 10 | 413.7–418.3V | 1232.6–1627.6A | 59.9 | 1454.6 | 150 | Intermittent | 9 |
| G3 | 6 | 435.2–439.1V | 269.0–1624.8A | 38.5 | 544.9 | 60 | Intermittent | 6 |
| G4 | 3 | 423.3–424.2V | 1182.1–1418.8A | 50.4 | 1292.0 | 130 | Intermittent | 3 |
| G5 | 1 | 406.0–406.0V | 1433.8–1433.8A | 67.7 | 1433.8 | 150 | Intermittent | 1 |
| G6 | 1 | 430.9–430.9V | 535.8–535.8A | 42.8 | 535.8 | 60 | Intermittent | 1 |
| G7 | 1 | 446.8–446.8V | 215.6–215.6A | 26.9 | 215.6 | 20 | Intermittent | 1 |

### T15 FILLET Group Nominal Drop Points

G1: Center at 467.1V, 39675 occurrences
G2: Center at 416.0V, 10 occurrences
G3: Center at 437.1V, 6 occurrences
G4: Center at 423.8V, 3 occurrences
G5: Center at 406.0V, 1 occurrences
G6: Center at 430.9V, 1 occurrences
G7: Center at 446.8V, 1 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 26.01
- **Maximum VHI:** 185.29
- **High VHI Events (>5.0):** 41,320

### ⚠️ Critical Voltage Stress Indicators

**Critical voltage groups detected:** 2

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

Critical voltage drops (below 440V): 21 events

### Group Annotation Points

G1: Center at 467.1V, 39675 occurrences
G2: Center at 416.0V, 10 occurrences
G3: Center at 437.2V, 6 occurrences
G4: Center at 423.7V, 3 occurrences
G5: Center at 406.0V, 1 occurrences
G6: Center at 430.9V, 1 occurrences
G7: Center at 446.8V, 1 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Multiple voltage drop groups detected - consider load balancing analysis and power quality assessment.

---

# END OF REPORT

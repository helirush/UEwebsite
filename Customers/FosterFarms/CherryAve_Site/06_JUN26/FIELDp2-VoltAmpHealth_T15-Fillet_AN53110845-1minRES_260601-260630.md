# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** T15 Fillet  
**Generated:** 2026-07-18 11:54:01  
**Data Source:** AN53110845-V-1minRES_43200CLP_260601-260630c.csv  

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
- **Average Voltage:** 480.0V
- **Minimum Voltage:** 480.0V
- **Maximum Voltage:** 480.0V
- **Standard Deviation:** 0.00V

</details>

### Operating Mean Voltage vs Nominal (480V)

- **Operating Mean:** 480.0V (0.0V, 0.00% at nominal)

*📌 Note: Lower mean voltage for the same kW raises current, increasing BTU/hr and contributing to higher VHI.*

### Voltage Deviation Analysis

| Deviation Band | Readings | Percentage |
| -------------- | -------: | ---------: |
| Below 460V | 33 | 0.08% |
| 460–470V | 13,926 | 32.24% |
| 470–480V | 12,365 | 28.62% |
| 480–490V | 8,053 | 18.64% |
| 490–500V | 7,627 | 17.66% |
| 500V+ | 1,196 | 2.77% |

**Threshold highlights (cumulative):**
- Below 470V: 13,959 (32.31%)
- Below 460V: 33 (0.08%)
- Above 490V: 8,823 (20.42%)
- Above 500V: 1,196 (2.77%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 10

### T15 FILLET Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 39363 | 457.2–477.6V | 499.0–1903.7A | 15.5 | 1396.5 | 180 | Critical Duty | 26 |
| G2 | 10 | 412.6–416.1V | 1139.9–1513.6A | 60.1 | 1376.7 | 140 | Intermittent | 10 |
| G3 | 3 | 405.0–408.2V | 1219.0–1356.9A | 67.7 | 1285.8 | 130 | Intermittent | 3 |
| G4 | 3 | 425.0–427.2V | 302.7–1272.0A | 47.6 | 906.4 | 100 | Intermittent | 3 |
| G5 | 3 | 434.5–435.1V | 256.3–1554.9A | 38.1 | 909.0 | 100 | Intermittent | 3 |
| G6 | 1 | 420.0–420.0V | 1515.0–1515.0A | 52.7 | 1515.0 | 160 | Intermittent | 1 |
| G7 | 1 | 422.6–422.6V | 1391.3–1391.3A | 50.0 | 1391.3 | 140 | Intermittent | 1 |
| G8 | 1 | 437.4–437.4V | 247.2–247.2A | 35.3 | 247.2 | 20 | Intermittent | 1 |
| G9 | 1 | 440.6–440.6V | 524.6–524.6A | 32.1 | 524.6 | 50 | Intermittent | 1 |
| G10 | 1 | 446.9–446.9V | 1578.9–1578.9A | 25.7 | 1578.9 | 180 | Intermittent | 1 |

### T15 FILLET Group Nominal Drop Points

G1: Center at 467.4V, 39363 occurrences
G2: Center at 414.4V, 10 occurrences
G3: Center at 406.6V, 3 occurrences
G4: Center at 426.1V, 3 occurrences
G5: Center at 434.8V, 3 occurrences
G6: Center at 420.0V, 1 occurrences
G7: Center at 422.6V, 1 occurrences
G8: Center at 437.4V, 1 occurrences
G9: Center at 440.6V, 1 occurrences
G10: Center at 446.9V, 1 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 24.94
- **Maximum VHI:** 995.05
- **High VHI Events (>5.0):** 40,009

### ⚠️ Critical Voltage Stress Indicators

**Critical voltage groups detected:** 3

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

Critical voltage drops (below 440V): 28 events

### Group Annotation Points

G1: Center at 467.4V, 39363 occurrences
G2: Center at 414.4V, 10 occurrences
G3: Center at 406.6V, 3 occurrences
G4: Center at 426.1V, 3 occurrences
G5: Center at 434.8V, 3 occurrences
G6: Center at 420.0V, 1 occurrences
G7: Center at 422.6V, 1 occurrences
G8: Center at 437.4V, 1 occurrences
G9: Center at 440.6V, 1 occurrences
G10: Center at 446.9V, 1 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Multiple voltage drop groups detected - consider load balancing analysis and power quality assessment.

---

# END OF REPORT

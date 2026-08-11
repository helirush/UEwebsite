# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** T15 Fillet  
**Generated:** 2026-08-04 12:54:44  
**Data Source:** AN53110845-V-1minRES_44640CLP_260701-260731c.csv  

## 📊 Analysis Period

- **Period:** July 01, 2026 thru July 31, 2026
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
| Below 460V | 39 | 0.09% |
| 460–470V | 11,684 | 26.17% |
| 470–480V | 13,570 | 30.40% |
| 480–490V | 7,963 | 17.84% |
| 490–500V | 10,400 | 23.30% |
| 500V+ | 984 | 2.20% |

**Threshold highlights (cumulative):**
- Below 470V: 11,723 (26.26%)
- Below 460V: 39 (0.09%)
- Above 490V: 11,384 (25.50%)
- Above 500V: 984 (2.20%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 7

### T15 FILLET Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 40432 | 461.0–477.9V | 504.7–1944.0A | 12.0 | 1407.2 | 180 | Critical Duty | 27 |
| G2 | 16 | 412.1–418.9V | 648.9–1630.0A | 60.8 | 1325.2 | 140 | Intermittent | 13 |
| G3 | 13 | 427.5–437.3V | 252.3–1420.7A | 45.4 | 647.4 | 70 | Intermittent | 12 |
| G4 | 4 | 439.7–441.6V | 307.0–603.5A | 33.2 | 514.4 | 50 | Intermittent | 3 |
| G5 | 2 | 407.1–408.6V | 1275.8–1452.4A | 65.8 | 1364.1 | 140 | Intermittent | 2 |
| G6 | 2 | 422.0–422.5V | 1439.4–1502.0A | 50.9 | 1470.7 | 150 | Intermittent | 2 |
| G7 | 2 | 451.3–451.4V | 571.1–648.1A | 21.6 | 609.6 | 80 | Intermittent | 2 |

### T15 FILLET Group Nominal Drop Points

G1: Center at 469.4V, 40432 occurrences
G2: Center at 415.5V, 16 occurrences
G3: Center at 432.4V, 13 occurrences
G4: Center at 440.6V, 4 occurrences
G5: Center at 407.9V, 2 occurrences
G6: Center at 422.2V, 2 occurrences
G7: Center at 451.4V, 2 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 23.42
- **Maximum VHI:** 181.47
- **High VHI Events (>5.0):** 40,645

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

Critical voltage drops (below 440V): 34 events

### Group Annotation Points

G1: Center at 469.4V, 40432 occurrences
G2: Center at 415.5V, 16 occurrences
G3: Center at 432.4V, 13 occurrences
G4: Center at 440.7V, 4 occurrences
G5: Center at 407.8V, 2 occurrences
G6: Center at 422.2V, 2 occurrences
G7: Center at 451.4V, 2 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Multiple voltage drop groups detected - consider load balancing analysis and power quality assessment.

---

# END OF REPORT

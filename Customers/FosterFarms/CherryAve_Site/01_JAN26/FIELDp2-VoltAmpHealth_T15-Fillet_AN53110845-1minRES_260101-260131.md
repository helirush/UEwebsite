# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** T15 Fillet  
**Generated:** 2026-09-10 23:16:47  
**Data Source:** AN53110845-V-1minRES_44640CLP_260101-260131c.csv  

## 📊 Analysis Period

- **Period:** January 01, 2026 thru January 31, 2026
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
| Below 460V | 18 | 0.04% |
| 460–470V | 4,050 | 9.07% |
| 470–480V | 21,615 | 48.42% |
| 480–490V | 11,362 | 25.45% |
| 490–500V | 7,445 | 16.68% |
| 500V+ | 150 | 0.34% |

**Threshold highlights (cumulative):**
- Below 470V: 4,068 (9.11%)
- Below 460V: 18 (0.04%)
- Above 490V: 7,595 (17.01%)
- Above 500V: 150 (0.34%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 9

### T15 FILLET Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 60580 | 463.9–475.4V | 481.3–2287.7A | 6.6 | 1618.9 | 250 | Critical Duty | 24 |
| G2 | 4 | 415.8–417.6V | 1032.1–1422.4A | 54.7 | 1268.2 | 130 | Intermittent | 4 |
| G3 | 3 | 408.9–410.7V | 1205.8–1350.8A | 61.6 | 1264.2 | 130 | Intermittent | 3 |
| G4 | 3 | 419.8–420.7V | 580.1–1903.5A | 50.6 | 1444.9 | 150 | Intermittent | 3 |
| G5 | 3 | 423.1–424.5V | 21.9–452.1A | 47.3 | 266.0 | 30 | Intermittent | 3 |
| G6 | 2 | 440.5–440.8V | 320.0–863.5A | 29.9 | 591.7 | 60 | Intermittent | 2 |
| G7 | 1 | 401.2–401.2V | 1570.4–1570.4A | 69.3 | 1570.4 | 160 | Intermittent | 1 |
| G8 | 1 | 432.7–432.7V | 1684.4–1684.4A | 37.8 | 1684.4 | 190 | Intermittent | 1 |
| G9 | 1 | 445.5–445.5V | 1622.5–1622.5A | 25.0 | 1622.5 | 180 | Intermittent | 1 |

### T15 FILLET Group Nominal Drop Points

G1: Center at 469.6V, 60580 occurrences
G2: Center at 416.7V, 4 occurrences
G3: Center at 409.8V, 3 occurrences
G4: Center at 420.2V, 3 occurrences
G5: Center at 423.8V, 3 occurrences
G6: Center at 440.6V, 2 occurrences
G7: Center at 401.2V, 1 occurrences
G8: Center at 432.7V, 1 occurrences
G9: Center at 445.5V, 1 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 19.18
- **Maximum VHI:** 188.08
- **High VHI Events (>5.0):** 39,846

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

Critical voltage drops (below 440V): 15 events

### Group Annotation Points

G1: Center at 469.6V, 60580 occurrences
G2: Center at 416.7V, 4 occurrences
G3: Center at 409.8V, 3 occurrences
G4: Center at 420.3V, 3 occurrences
G5: Center at 423.8V, 3 occurrences
G6: Center at 440.6V, 2 occurrences
G7: Center at 401.2V, 1 occurrences
G8: Center at 432.7V, 1 occurrences
G9: Center at 445.5V, 1 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Multiple voltage drop groups detected - consider load balancing analysis and power quality assessment.

---

# END OF REPORT

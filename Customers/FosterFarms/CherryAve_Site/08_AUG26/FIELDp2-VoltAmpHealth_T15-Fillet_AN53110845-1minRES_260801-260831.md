# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** T15 Fillet  
**Generated:** 2026-09-10 23:18:11  
**Data Source:** AN53110845-V-1minRES_44640CLP_260801-260831c.csv  

## 📊 Analysis Period

- **Period:** August 01, 2026 thru August 31, 2026
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
| Below 460V | 47 | 0.11% |
| 460–470V | 12,479 | 27.95% |
| 470–480V | 12,651 | 28.34% |
| 480–490V | 8,205 | 18.38% |
| 490–500V | 9,331 | 20.90% |
| 500V+ | 1,927 | 4.32% |

**Threshold highlights (cumulative):**
- Below 470V: 12,526 (28.06%)
- Below 460V: 47 (0.11%)
- Above 490V: 11,258 (25.22%)
- Above 500V: 1,927 (4.32%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 7

### T15 FILLET Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 40188 | 459.0–479.5V | 234.3–1892.0A | 15.6 | 1354.7 | 180 | Critical Duty | 29 |
| G2 | 28 | 434.5–451.0V | 220.0–1655.1A | 40.0 | 690.8 | 70 | Intermittent | 16 |
| G3 | 12 | 411.3–415.2V | 631.4–1513.7A | 63.2 | 1271.4 | 130 | Intermittent | 11 |
| G4 | 2 | 422.7–424.6V | 985.0–1458.0A | 51.8 | 1221.5 | 130 | Intermittent | 2 |
| G5 | 1 | 406.3–406.3V | 1205.1–1205.1A | 68.2 | 1205.1 | 120 | Intermittent | 1 |
| G6 | 1 | 428.9–428.9V | 1564.1–1564.1A | 45.7 | 1564.1 | 170 | Intermittent | 1 |
| G7 | 1 | 431.0–431.0V | 1143.1–1143.1A | 43.5 | 1143.1 | 130 | Intermittent | 1 |

### T15 FILLET Group Nominal Drop Points

G1: Center at 469.2V, 40188 occurrences
G2: Center at 442.8V, 28 occurrences
G3: Center at 413.2V, 12 occurrences
G4: Center at 423.6V, 2 occurrences
G5: Center at 406.3V, 1 occurrences
G6: Center at 428.9V, 1 occurrences
G7: Center at 431.0V, 1 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 26.08
- **Maximum VHI:** 186.32
- **High VHI Events (>5.0):** 41,122

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

Critical voltage drops (below 440V): 28 events

### Group Annotation Points

G1: Center at 469.2V, 40188 occurrences
G2: Center at 442.8V, 28 occurrences
G3: Center at 413.3V, 12 occurrences
G4: Center at 423.6V, 2 occurrences
G5: Center at 406.3V, 1 occurrences
G6: Center at 428.9V, 1 occurrences
G7: Center at 431.0V, 1 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Multiple voltage drop groups detected - consider load balancing analysis and power quality assessment.

---

# END OF REPORT

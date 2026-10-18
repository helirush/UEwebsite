# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** T15 Fillet  
**Generated:** 2026-10-03 12:32:12  
**Data Source:** AN53110845-V-1minRES_43200CLP_260901-260930c.csv  

## 📊 Analysis Period

- **Period:** September 01, 2026 thru September 30, 2026
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
| Below 460V | 35 | 0.08% |
| 460–470V | 11,578 | 26.80% |
| 470–480V | 14,495 | 33.55% |
| 480–490V | 8,109 | 18.77% |
| 490–500V | 7,154 | 16.56% |
| 500V+ | 1,829 | 4.23% |

**Threshold highlights (cumulative):**
- Below 470V: 11,613 (26.88%)
- Below 460V: 35 (0.08%)
- Above 490V: 8,983 (20.79%)
- Above 500V: 1,829 (4.23%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 10

### T15 FILLET Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 40594 | 460.8–479.3V | 288.2–1952.3A | 13.6 | 1336.0 | 170 | Critical Duty | 27 |
| G2 | 13 | 412.7–416.4V | 1064.7–1507.4A | 61.6 | 1338.2 | 140 | Intermittent | 11 |
| G3 | 7 | 436.9–441.3V | 201.1–805.0A | 37.4 | 350.0 | 40 | Intermittent | 6 |
| G4 | 2 | 406.2–407.1V | 1187.9–1370.4A | 68.1 | 1279.2 | 130 | Intermittent | 2 |
| G5 | 2 | 431.0–432.1V | 253.8–1266.1A | 43.4 | 760.0 | 80 | Intermittent | 2 |
| G6 | 2 | 446.8–447.9V | 279.9–290.8A | 27.5 | 285.4 | 30 | Intermittent | 2 |
| G7 | 1 | 419.5–419.5V | 719.3–719.3A | 54.8 | 719.3 | 70 | Intermittent | 1 |
| G8 | 1 | 428.7–428.7V | 405.2–405.2A | 45.6 | 405.2 | 40 | Intermittent | 1 |
| G9 | 1 | 452.0–452.0V | 1289.4–1289.4A | 22.3 | 1289.4 | 170 | Intermittent | 1 |
| G10 | 1 | 457.6–457.6V | 793.1–793.1A | 16.7 | 793.1 | 100 | Intermittent | 1 |

### T15 FILLET Group Nominal Drop Points

G1: Center at 470.1V, 40594 occurrences
G2: Center at 414.5V, 13 occurrences
G3: Center at 439.1V, 7 occurrences
G4: Center at 406.6V, 2 occurrences
G5: Center at 431.6V, 2 occurrences
G6: Center at 447.4V, 2 occurrences
G7: Center at 419.5V, 1 occurrences
G8: Center at 428.7V, 1 occurrences
G9: Center at 452.0V, 1 occurrences
G10: Center at 457.6V, 1 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 26.45
- **Maximum VHI:** 998.58
- **High VHI Events (>5.0):** 39,974

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

G1: Center at 470.0V, 40594 occurrences
G2: Center at 414.5V, 13 occurrences
G3: Center at 439.1V, 7 occurrences
G4: Center at 406.7V, 2 occurrences
G5: Center at 431.5V, 2 occurrences
G6: Center at 447.4V, 2 occurrences
G7: Center at 419.5V, 1 occurrences
G8: Center at 428.7V, 1 occurrences
G9: Center at 452.0V, 1 occurrences
G10: Center at 457.6V, 1 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Multiple voltage drop groups detected - consider load balancing analysis and power quality assessment.

---

# END OF REPORT

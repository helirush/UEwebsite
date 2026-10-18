# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** T12 Main  
**Generated:** 2026-10-03 12:31:54  
**Data Source:** AN54021613-V-1minRES_43200CLP_260901-260930c.csv  

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
| Below 460V | 20,023 | 46.35% |
| 460–470V | 8,358 | 19.35% |
| 470–480V | 6,128 | 14.19% |
| 480–490V | 6,801 | 15.74% |
| 490–500V | 1,890 | 4.38% |
| 500V+ | 0 | 0.00% |

**Threshold highlights (cumulative):**
- Below 470V: 28,381 (65.70%)
- Below 460V: 20,023 (46.35%)
- Above 490V: 1,890 (4.38%)
- Above 500V: 0 (0.00%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 4

### T12 MAIN Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 46550 | 445.1–460.8V | 1157.3–2520.0A | 10.9 | 1981.4 | 310 | Critical Duty | 25 |
| G2 | 1 | 434.3–434.3V | 2076.8–2076.8A | 21.7 | 2076.8 | 270 | Intermittent | 1 |
| G3 | 1 | 438.1–438.1V | 1590.2–1590.2A | 17.9 | 1590.2 | 210 | Intermittent | 1 |
| G4 | 1 | 441.4–441.4V | 2146.8–2146.8A | 14.6 | 2146.8 | 280 | Intermittent | 1 |

### T12 MAIN Group Nominal Drop Points

G1: Center at 453.0V, 46550 occurrences
G2: Center at 434.3V, 1 occurrences
G3: Center at 438.1V, 1 occurrences
G4: Center at 441.4V, 1 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 21.78
- **Maximum VHI:** 91.42
- **High VHI Events (>5.0):** 31,280


</details>


---

## 📊 Chart Overlay Data Preparation

<details>
<summary><strong>Prepared Chart Overlay Points</strong></summary>

*The following data points have been prepared for chart overlays:*

Critical voltage drops (below 440V): 2 events

### Group Annotation Points

G1: Center at 453.0V, 46550 occurrences
G2: Center at 434.3V, 1 occurrences
G3: Center at 438.1V, 1 occurrences
G4: Center at 441.4V, 1 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Multiple voltage drop groups detected - consider load balancing analysis and power quality assessment.

---

# END OF REPORT

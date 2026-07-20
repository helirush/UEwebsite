# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** T12 Main  
**Generated:** 2026-07-18 11:54:17  
**Data Source:** AN54021613-V-1minRES_43200CLP_260601-260630c.csv  

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
| Below 460V | 20,360 | 47.13% |
| 460–470V | 7,754 | 17.95% |
| 470–480V | 7,332 | 16.97% |
| 480–490V | 6,779 | 15.69% |
| 490–500V | 975 | 2.26% |
| 500V+ | 0 | 0.00% |

**Threshold highlights (cumulative):**
- Below 470V: 28,114 (65.08%)
- Below 460V: 20,360 (47.13%)
- Above 490V: 974 (2.25%)
- Above 500V: 0 (0.00%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 2

### T12 MAIN Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 39070 | 440.4–460.8V | 1331.7–2583.4A | 15.6 | 2011.9 | 320 | Critical Duty | 26 |
| G2 | 1 | 435.8–435.8V | 2085.6–2085.6A | 20.2 | 2085.6 | 270 | Intermittent | 1 |

### T12 MAIN Group Nominal Drop Points

G1: Center at 450.6V, 39070 occurrences
G2: Center at 435.8V, 1 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 22.77
- **Maximum VHI:** 960.00
- **High VHI Events (>5.0):** 30,708


</details>


---

## 📊 Chart Overlay Data Preparation

<details>
<summary><strong>Prepared Chart Overlay Points</strong></summary>

*The following data points have been prepared for chart overlays:*

Critical voltage drops (below 440V): 19 events

### Group Annotation Points

G1: Center at 450.6V, 39070 occurrences
G2: Center at 435.8V, 1 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Voltage behavior appears within normal operating parameters during the analysis period.

---

# END OF REPORT

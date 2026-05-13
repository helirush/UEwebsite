# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** T16 Compressor  
**Generated:** 2026-05-08 17:41:36  
**Data Source:** AN54022983-V-1minRES_43200CLP_260401-260430c.csv  

## 📊 Analysis Period

- **Period:** April 01, 2026 thru April 30, 2026
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
- **Average Voltage:** 473.3V
- **Minimum Voltage:** 0.0V
- **Maximum Voltage:** 504.2V
- **Standard Deviation:** 16.23V

</details>

### Operating Mean Voltage vs Nominal (480V)

- **Operating Mean:** 473.3V (6.7V, 1.39% below nominal)

*📌 Note: Lower mean voltage for the same kW raises current, increasing BTU/hr and contributing to higher VHI.*

### Voltage Deviation Analysis

| Deviation Band | Readings | Percentage |
| -------------- | -------: | ---------: |
| Below 460V | 1,228 | 2.84% |
| 460–470V | 22,314 | 51.65% |
| 470–480V | 7,521 | 17.41% |
| 480–490V | 6,837 | 15.83% |
| 490–500V | 4,665 | 10.80% |
| 500V+ | 635 | 1.47% |

**Threshold highlights (cumulative):**
- Below 470V: 23,542 (54.50%)
- Below 460V: 1,228 (2.84%)
- Above 490V: 5,300 (12.27%)
- Above 500V: 635 (1.47%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 1

### T16 COMPRESSOR Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 40809 | 455.7–475.3V | 874.5–1959.6A | 14.6 | 1664.0 | 220 | Critical Duty | 27 |

### T16 COMPRESSOR Group Nominal Drop Points

G1: Center at 465.5V, 40809 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 28.27
- **Maximum VHI:** 990.21
- **High VHI Events (>5.0):** 39,805


</details>


---

## 📊 Chart Overlay Data Preparation

<details>
<summary><strong>Prepared Chart Overlay Points</strong></summary>

*The following data points have been prepared for chart overlays:*

Critical voltage drops (below 440V): 26 events

### Group Annotation Points

G1: Center at 465.5V, 40809 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Voltage behavior appears within normal operating parameters during the analysis period.

---

# END OF REPORT

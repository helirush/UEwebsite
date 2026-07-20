# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** T16 Compressor  
**Generated:** 2026-07-18 11:54:23  
**Data Source:** AN54022983-V-1minRES_43200CLP_260601-260630c.csv  

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
| Below 460V | 2,635 | 6.10% |
| 460–470V | 19,851 | 45.95% |
| 470–480V | 7,197 | 16.66% |
| 480–490V | 6,943 | 16.07% |
| 490–500V | 5,391 | 12.48% |
| 500V+ | 1,183 | 2.74% |

**Threshold highlights (cumulative):**
- Below 470V: 22,486 (52.05%)
- Below 460V: 2,635 (6.10%)
- Above 490V: 6,574 (15.22%)
- Above 500V: 1,183 (2.74%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 1

### T16 COMPRESSOR Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 36936 | 452.3–477.5V | 811.9–2191.5A | 20.2 | 1709.3 | 220 | Critical Duty | 27 |

### T16 COMPRESSOR Group Nominal Drop Points

G1: Center at 464.9V, 36936 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 31.41
- **Maximum VHI:** 994.77
- **High VHI Events (>5.0):** 40,186


</details>


---

## 📊 Chart Overlay Data Preparation

<details>
<summary><strong>Prepared Chart Overlay Points</strong></summary>

*The following data points have been prepared for chart overlays:*

Critical voltage drops (below 440V): 6 events

### Group Annotation Points

G1: Center at 464.9V, 36936 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Voltage behavior appears within normal operating parameters during the analysis period.

---

# END OF REPORT

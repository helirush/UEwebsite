# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** Rendering-3  
**Generated:** 2026-05-09 20:16:27  
**Data Source:** AN55050429-V-1minRES_43200CLP_260401-260430c.csv  

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
- **Average Voltage:** 477.3V
- **Minimum Voltage:** 0.0V
- **Maximum Voltage:** 494.2V
- **Standard Deviation:** 4.92V

</details>

### Operating Mean Voltage vs Nominal (480V)

- **Operating Mean:** 477.3V (2.7V, 0.56% below nominal)

*📌 Note: Lower mean voltage for the same kW raises current, increasing BTU/hr and contributing to higher VHI.*

### Voltage Deviation Analysis

| Deviation Band | Readings | Percentage |
| -------------- | -------: | ---------: |
| Below 460V | 4 | 0.01% |
| 460–470V | 10 | 0.02% |
| 470–480V | 40,708 | 94.23% |
| 480–490V | 2,474 | 5.73% |
| 490–500V | 4 | 0.01% |
| 500V+ | 0 | 0.00% |

**Threshold highlights (cumulative):**
- Below 470V: 14 (0.03%)
- Below 460V: 4 (0.01%)
- Above 490V: 4 (0.01%)
- Above 500V: 0 (0.00%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 1

### RENDERING-3 Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 4 | 460.7–460.7V | 1052.5–1052.5A | -4.7 | 1052.5 | 160 | Intermittent | 1 |

### RENDERING-3 Group Nominal Drop Points

G1: Center at 460.7V, 4 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 2.75
- **Maximum VHI:** 960.00
- **High VHI Events (>5.0):** 4,233


</details>


---

## 📊 Chart Overlay Data Preparation

<details>
<summary><strong>Prepared Chart Overlay Points</strong></summary>

*The following data points have been prepared for chart overlays:*

Critical voltage drops (below 440V): 4 events

### Group Annotation Points

G1: Center at 460.7V, 4 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Voltage behavior appears within normal operating parameters during the analysis period.

---

# END OF REPORT

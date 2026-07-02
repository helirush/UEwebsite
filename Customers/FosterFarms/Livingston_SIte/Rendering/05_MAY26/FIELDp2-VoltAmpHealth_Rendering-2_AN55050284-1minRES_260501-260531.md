# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** Rendering-2  
**Generated:** 2026-06-18 16:10:19  
**Data Source:** AN55050284-V-1minRES_44640CLP_260501-260531c.csv  

## 📊 Analysis Period

- **Period:** May 01, 2026 thru May 31, 2026
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
- **Average Voltage:** 472.9V
- **Minimum Voltage:** 0.0V
- **Maximum Voltage:** 490.2V
- **Standard Deviation:** 8.17V

</details>

### Operating Mean Voltage vs Nominal (480V)

- **Operating Mean:** 472.9V (7.1V, 1.48% below nominal)

*📌 Note: Lower mean voltage for the same kW raises current, increasing BTU/hr and contributing to higher VHI.*

### Voltage Deviation Analysis

| Deviation Band | Readings | Percentage |
| -------------- | -------: | ---------: |
| Below 460V | 17 | 0.04% |
| 460–470V | 15,002 | 33.61% |
| 470–480V | 22,886 | 51.27% |
| 480–490V | 6,734 | 15.09% |
| 490–500V | 1 | 0.00% |
| 500V+ | 0 | 0.00% |

**Threshold highlights (cumulative):**
- Below 470V: 15,019 (33.64%)
- Below 460V: 17 (0.04%)
- Above 490V: 1 (0.00%)
- Above 500V: 0 (0.00%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 2

### RENDERING-2 Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 41 | 453.7–460.6V | 1179.8–2087.6A | 2.3 | 1747.1 | 270 | Intermittent | 11 |
| G2 | 1 | 451.1–451.1V | 2105.5–2105.5A | 4.9 | 2105.5 | 280 | Intermittent | 1 |

### RENDERING-2 Group Nominal Drop Points

G1: Center at 457.1V, 41 occurrences
G2: Center at 451.1V, 1 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 8.63
- **Maximum VHI:** 960.00
- **High VHI Events (>5.0):** 32,775


</details>


---

## 📊 Chart Overlay Data Preparation

<details>
<summary><strong>Prepared Chart Overlay Points</strong></summary>

*The following data points have been prepared for chart overlays:*

Critical voltage drops (below 440V): 8 events

### Group Annotation Points

G1: Center at 457.1V, 41 occurrences
G2: Center at 451.1V, 1 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Voltage behavior appears within normal operating parameters during the analysis period.

---

# END OF REPORT

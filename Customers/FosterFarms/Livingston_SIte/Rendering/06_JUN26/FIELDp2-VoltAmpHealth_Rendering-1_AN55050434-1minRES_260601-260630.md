# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** Rendering-1  
**Generated:** 2026-07-06 12:41:59  
**Data Source:** AN55050434-V-1minRES_43200CLP_260601-260630c.csv  

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
- **Average Voltage:** 473.3V
- **Minimum Voltage:** 0.0V
- **Maximum Voltage:** 490.5V
- **Standard Deviation:** 4.08V

</details>

### Operating Mean Voltage vs Nominal (480V)

- **Operating Mean:** 473.3V (6.7V, 1.40% below nominal)

*📌 Note: Lower mean voltage for the same kW raises current, increasing BTU/hr and contributing to higher VHI.*

### Voltage Deviation Analysis

| Deviation Band | Readings | Percentage |
| -------------- | -------: | ---------: |
| Below 460V | 9 | 0.02% |
| 460–470V | 4,317 | 9.99% |
| 470–480V | 35,136 | 81.33% |
| 480–490V | 3,736 | 8.65% |
| 490–500V | 2 | 0.00% |
| 500V+ | 0 | 0.00% |

**Threshold highlights (cumulative):**
- Below 470V: 4,326 (10.01%)
- Below 460V: 9 (0.02%)
- Above 490V: 2 (0.00%)
- Above 500V: 0 (0.00%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 2

### RENDERING-1 Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 40 | 457.5–460.7V | 1299.3–2157.5A | -1.5 | 1547.5 | 240 | Intermittent | 8 |
| G2 | 1 | 454.7–454.7V | 1428.6–1428.6A | 1.3 | 1428.6 | 190 | Intermittent | 1 |

### RENDERING-1 Group Nominal Drop Points

G1: Center at 459.1V, 40 occurrences
G2: Center at 454.7V, 1 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 7.17
- **Maximum VHI:** 960.00
- **High VHI Events (>5.0):** 34,585


</details>


---

## 📊 Chart Overlay Data Preparation

<details>
<summary><strong>Prepared Chart Overlay Points</strong></summary>

*The following data points have been prepared for chart overlays:*

Critical voltage drops (below 440V): 1 events

### Group Annotation Points

G1: Center at 459.1V, 40 occurrences
G2: Center at 454.7V, 1 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Voltage behavior appears within normal operating parameters during the analysis period.

---

# END OF REPORT

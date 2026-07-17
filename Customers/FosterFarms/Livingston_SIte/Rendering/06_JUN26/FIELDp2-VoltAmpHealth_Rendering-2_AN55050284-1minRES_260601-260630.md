# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** Rendering-2  
**Generated:** 2026-07-06 12:41:47  
**Data Source:** AN55050284-V-1minRES_43200CLP_260601-260630c.csv  

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
- **Average Voltage:** 471.8V
- **Minimum Voltage:** 0.0V
- **Maximum Voltage:** 491.5V
- **Standard Deviation:** 8.82V

</details>

### Operating Mean Voltage vs Nominal (480V)

- **Operating Mean:** 471.8V (8.2V, 1.71% below nominal)

*📌 Note: Lower mean voltage for the same kW raises current, increasing BTU/hr and contributing to higher VHI.*

### Voltage Deviation Analysis

| Deviation Band | Readings | Percentage |
| -------------- | -------: | ---------: |
| Below 460V | 21 | 0.05% |
| 460–470V | 19,801 | 45.84% |
| 470–480V | 18,196 | 42.12% |
| 480–490V | 5,181 | 11.99% |
| 490–500V | 1 | 0.00% |
| 500V+ | 0 | 0.00% |

**Threshold highlights (cumulative):**
- Below 470V: 19,822 (45.88%)
- Below 460V: 21 (0.05%)
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
| G1 | 46 | 454.2–460.7V | 1418.3–2416.2A | 1.8 | 1895.0 | 300 | Intermittent | 10 |
| G2 | 1 | 450.4–450.4V | 2017.9–2017.9A | 5.6 | 2017.9 | 260 | Intermittent | 1 |

### RENDERING-2 Group Nominal Drop Points

G1: Center at 457.4V, 46 occurrences
G2: Center at 450.4V, 1 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 10.10
- **Maximum VHI:** 960.00
- **High VHI Events (>5.0):** 34,925


</details>


---

## 📊 Chart Overlay Data Preparation

<details>
<summary><strong>Prepared Chart Overlay Points</strong></summary>

*The following data points have been prepared for chart overlays:*

Critical voltage drops (below 440V): 10 events

### Group Annotation Points

G1: Center at 457.4V, 46 occurrences
G2: Center at 450.4V, 1 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Voltage behavior appears within normal operating parameters during the analysis period.

---

# END OF REPORT

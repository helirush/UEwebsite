# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** PL2-3North  
**Generated:** 2026-07-07 05:23:39  
**Data Source:** AN55050286-V-260630.2359c.csv  

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
- **Average Voltage:** 488.4V
- **Minimum Voltage:** 0.0V
- **Maximum Voltage:** 507.2V
- **Standard Deviation:** 5.29V

</details>

### Operating Mean Voltage vs Nominal (480V)

- **Operating Mean:** 488.4V (8.4V, 1.75% above nominal)

*📌 Note: Lower mean voltage for the same kW raises current, increasing BTU/hr and contributing to higher VHI.*

### Voltage Deviation Analysis

| Deviation Band | Readings | Percentage |
| -------------- | -------: | ---------: |
| Below 460V | 7 | 0.02% |
| 460–470V | 1 | 0.00% |
| 470–480V | 14 | 0.03% |
| 480–490V | 32,219 | 74.58% |
| 490–500V | 10,953 | 25.35% |
| 500V+ | 6 | 0.01% |

**Threshold highlights (cumulative):**
- Below 470V: 8 (0.02%)
- Below 460V: 7 (0.02%)
- Above 490V: 10,951 (25.35%)
- Above 500V: 6 (0.01%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 3

### PL2-3NORTH Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 8 | 459.7–460.7V | 1176.6–1235.5A | -3.7 | 1206.0 | 190 | Intermittent | 2 |
| G2 | 1 | 449.2–449.2V | 1569.5–1569.5A | 6.8 | 1569.5 | 200 | Intermittent | 1 |
| G3 | 1 | 452.7–452.7V | 1329.0–1329.0A | 3.3 | 1329.0 | 170 | Intermittent | 1 |

### PL2-3NORTH Group Nominal Drop Points

G1: Center at 460.2V, 8 occurrences
G2: Center at 449.2V, 1 occurrences
G3: Center at 452.7V, 1 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 0.09
- **Maximum VHI:** 960.00
- **High VHI Events (>5.0):** 15


</details>


---

## 📊 Chart Overlay Data Preparation

<details>
<summary><strong>Prepared Chart Overlay Points</strong></summary>

*The following data points have been prepared for chart overlays:*

Critical voltage drops (below 440V): 4 events

### Group Annotation Points

G1: Center at 460.2V, 8 occurrences
G2: Center at 449.2V, 1 occurrences
G3: Center at 452.7V, 1 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Multiple voltage drop groups detected - consider load balancing analysis and power quality assessment.

---

# END OF REPORT

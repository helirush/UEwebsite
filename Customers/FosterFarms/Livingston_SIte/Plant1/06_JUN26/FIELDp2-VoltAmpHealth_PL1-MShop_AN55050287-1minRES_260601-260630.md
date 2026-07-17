# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** PL1-MShop  
**Generated:** 2026-07-07 04:15:02  
**Data Source:** AN55050287-V-260630.2359c.csv  

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
- **Average Voltage:** 489.1V
- **Minimum Voltage:** 0.0V
- **Maximum Voltage:** 509.0V
- **Standard Deviation:** 4.07V

</details>

### Operating Mean Voltage vs Nominal (480V)

- **Operating Mean:** 489.1V (9.1V, 1.89% above nominal)

*📌 Note: Lower mean voltage for the same kW raises current, increasing BTU/hr and contributing to higher VHI.*

### Voltage Deviation Analysis

| Deviation Band | Readings | Percentage |
| -------------- | -------: | ---------: |
| Below 460V | 4 | 0.01% |
| 460–470V | 0 | 0.00% |
| 470–480V | 12 | 0.03% |
| 480–490V | 27,807 | 64.37% |
| 490–500V | 15,368 | 35.57% |
| 500V+ | 9 | 0.02% |

**Threshold highlights (cumulative):**
- Below 470V: 4 (0.01%)
- Below 460V: 4 (0.01%)
- Above 490V: 15,369 (35.58%)
- Above 500V: 9 (0.02%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 2

### PL1-MSHOP Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 1 | 447.2–447.2V | 3227.2–3227.2A | 8.8 | 3227.2 | 430 | Intermittent | 1 |
| G2 | 1 | 452.1–452.1V | 2976.9–2976.9A | 3.9 | 2976.9 | 390 | Intermittent | 1 |

### PL1-MSHOP Group Nominal Drop Points

G1: Center at 447.2V, 1 occurrences
G2: Center at 452.1V, 1 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 0.05
- **Maximum VHI:** 960.00
- **High VHI Events (>5.0):** 6


</details>


---

## 📊 Chart Overlay Data Preparation

<details>
<summary><strong>Prepared Chart Overlay Points</strong></summary>

*The following data points have been prepared for chart overlays:*

Critical voltage drops (below 440V): 2 events

### Group Annotation Points

G1: Center at 447.2V, 1 occurrences
G2: Center at 452.1V, 1 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Voltage behavior appears within normal operating parameters during the analysis period.

---

# END OF REPORT

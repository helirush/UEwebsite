# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** Deli F  
**Generated:** 2026-04-19 22:04:11  
**Data Source:** AN55050323-V-1minRES_44550CLP_260301-260331c.csv  

## 📊 Analysis Period

- **Period:** March 01, 2026 thru March 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,550

## 🔋 Facility Information

- **Transformer Capacity:** 2,500 kVA
- **Nominal Voltage:** 480V (3-Phase)
- **Analysis Type:** Voltage & Current Health + Thermal Burden Assessment
- **Technology Focus:** Unity Energy MPTS Solutions

---

## 📈 Voltage Statistics

<details>
<summary><strong>Basic Voltage Metrics</strong></summary>

- **Total Voltage Readings Analyzed:** 44,550
- **Average Voltage:** 480.8V
- **Minimum Voltage:** 0.0V
- **Maximum Voltage:** 500.4V
- **Standard Deviation:** 14.68V

</details>

### Operating Mean Voltage vs Nominal (480V)

- **Operating Mean:** 480.8V (0.8V, 0.17% above nominal)

*📌 Note: Lower mean voltage for the same kW raises current, increasing BTU/hr and contributing to higher VHI.*

### Voltage Deviation Analysis

| Deviation Band | Readings | Percentage |
| -------------- | -------: | ---------: |
| Below 460V | 44 | 0.10% |
| 460–470V | 37 | 0.08% |
| 470–480V | 14,068 | 31.58% |
| 480–490V | 30,392 | 68.22% |
| 490–500V | 8 | 0.02% |
| 500V+ | 1 | 0.00% |

**Threshold highlights (cumulative):**
- Below 470V: 81 (0.18%)
- Below 460V: 44 (0.10%)
- Above 490V: 9 (0.02%)
- Above 500V: 1 (0.00%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 2

### DELI F Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 4 | 456.4–456.4V | 1247.5–1247.5A | -0.4 | 1247.5 | 190 | Intermittent | 1 |
| G2 | 3 | 450.7–452.5V | 1366.3–1784.7A | 5.3 | 1555.3 | 200 | Intermittent | 3 |

### DELI F Group Nominal Drop Points

G1: Center at 456.4V, 4 occurrences
G2: Center at 451.6V, 3 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 1.48
- **Maximum VHI:** 960.00
- **High VHI Events (>5.0):** 705


</details>


---

## 📊 Chart Overlay Data Preparation

<details>
<summary><strong>Prepared Chart Overlay Points</strong></summary>

*The following data points have been prepared for chart overlays:*

Critical voltage drops (below 440V): 40 events

### Group Annotation Points

G1: Center at 456.4V, 4 occurrences
G2: Center at 451.6V, 3 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Voltage behavior appears within normal operating parameters during the analysis period.

---

# END OF REPORT

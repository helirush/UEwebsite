# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** PL2-1South  
**Generated:** 2026-07-07 05:23:55  
**Data Source:** AN55050400-V-260630.2359c.csv  

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
- **Average Voltage:** 482.3V
- **Minimum Voltage:** 0.0V
- **Maximum Voltage:** 500.5V
- **Standard Deviation:** 9.04V

</details>

### Operating Mean Voltage vs Nominal (480V)

- **Operating Mean:** 482.3V (2.3V, 0.48% above nominal)

*📌 Note: Lower mean voltage for the same kW raises current, increasing BTU/hr and contributing to higher VHI.*

### Voltage Deviation Analysis

| Deviation Band | Readings | Percentage |
| -------------- | -------: | ---------: |
| Below 460V | 14 | 0.03% |
| 460–470V | 11 | 0.03% |
| 470–480V | 15,872 | 36.74% |
| 480–490V | 26,151 | 60.53% |
| 490–500V | 1,151 | 2.66% |
| 500V+ | 1 | 0.00% |

**Threshold highlights (cumulative):**
- Below 470V: 25 (0.06%)
- Below 460V: 14 (0.03%)
- Above 490V: 1,151 (2.66%)
- Above 500V: 1 (0.00%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 2

### PL2-1SOUTH Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 4 | 460.5–460.5V | 2534.3–2534.3A | -4.5 | 2534.3 | 400 | Intermittent | 1 |
| G2 | 2 | 453.6–454.2V | 3134.7–3163.0A | 2.4 | 3148.8 | 410 | Intermittent | 1 |

### PL2-1SOUTH Group Nominal Drop Points

G1: Center at 460.5V, 4 occurrences
G2: Center at 453.9V, 2 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 0.92
- **Maximum VHI:** 960.00
- **High VHI Events (>5.0):** 158


</details>


---

## 📊 Chart Overlay Data Preparation

<details>
<summary><strong>Prepared Chart Overlay Points</strong></summary>

*The following data points have been prepared for chart overlays:*

Critical voltage drops (below 440V): 12 events

### Group Annotation Points

G1: Center at 460.5V, 4 occurrences
G2: Center at 453.9V, 2 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Voltage behavior appears within normal operating parameters during the analysis period.

---

# END OF REPORT

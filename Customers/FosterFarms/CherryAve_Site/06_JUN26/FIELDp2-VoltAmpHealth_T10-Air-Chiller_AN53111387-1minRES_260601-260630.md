# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** T10 Air Chiller  
**Generated:** 2026-07-18 11:54:07  
**Data Source:** AN53111387-V-1minRES_43200CLP_260601-260630c.csv  

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
| Below 460V | 27,194 | 62.95% |
| 460–470V | 5,330 | 12.34% |
| 470–480V | 8,832 | 20.44% |
| 480–490V | 1,842 | 4.26% |
| 490–500V | 2 | 0.00% |
| 500V+ | 0 | 0.00% |

**Threshold highlights (cumulative):**
- Below 470V: 32,524 (75.29%)
- Below 460V: 27,194 (62.95%)
- Above 490V: 2 (0.00%)
- Above 500V: 0 (0.00%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 1

### T10 AIR CHILLER Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 34618 | 433.9–460.8V | 438.7–2151.5A | 22.1 | 1507.5 | 200 | Critical Duty | 27 |

### T10 AIR CHILLER Group Nominal Drop Points

G1: Center at 447.4V, 34618 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 34.43
- **Maximum VHI:** 960.00
- **High VHI Events (>5.0):** 38,702


</details>


---

## 📊 Chart Overlay Data Preparation

<details>
<summary><strong>Prepared Chart Overlay Points</strong></summary>

*The following data points have been prepared for chart overlays:*

Critical voltage drops (below 440V): 637 events

### Group Annotation Points

G1: Center at 447.4V, 34618 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Voltage behavior appears within normal operating parameters during the analysis period.

---

# END OF REPORT

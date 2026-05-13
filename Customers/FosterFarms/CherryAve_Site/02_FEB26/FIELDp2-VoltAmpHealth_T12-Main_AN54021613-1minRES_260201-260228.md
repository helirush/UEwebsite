# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** T12 Main  
**Generated:** 2026-03-14 12:39:47  
**Data Source:** AN54021613-V-1minRES_40320CLP_260201-260228c.csv  

## 📊 Analysis Period

- **Period:** February 01, 2026 thru February 28, 2026
- **Number of Days:** 28 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 40,320

## 🔋 Facility Information

- **Transformer Capacity:** 2,500 kVA
- **Nominal Voltage:** 480V (3-Phase)
- **Analysis Type:** Voltage & Current Health + Thermal Burden Assessment
- **Technology Focus:** Unity Energy MPTS Solutions

---

## 📈 Voltage Statistics

<details>
<summary><strong>Basic Voltage Metrics</strong></summary>

- **Total Voltage Readings Analyzed:** 40,320
- **Average Voltage:** 467.9V
- **Minimum Voltage:** 438.8V
- **Maximum Voltage:** 494.2V
- **Standard Deviation:** 10.91V

</details>

### Operating Mean Voltage vs Nominal (480V)

- **Operating Mean:** 467.9V (12.1V, 2.53% below nominal)

*📌 Note: Lower mean voltage for the same kW raises current, increasing BTU/hr and contributing to higher VHI.*

### Voltage Deviation Analysis

| Deviation Band | Readings | Percentage |
| -------------- | -------: | ---------: |
| Below 460V | 13,247 | 32.85% |
| 460–470V | 12,074 | 29.95% |
| 470–480V | 6,875 | 17.05% |
| 480–490V | 7,117 | 17.65% |
| 490–500V | 1,007 | 2.50% |
| 500V+ | 0 | 0.00% |

**Threshold highlights (cumulative):**
- Below 470V: 25,321 (62.80%)
- Below 460V: 13,247 (32.85%)
- Above 490V: 1,007 (2.50%)
- Above 500V: 0 (0.00%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 2

### T12 MAIN Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 49485 | 445.8–460.8V | 1125.3–2356.6A | 10.2 | 1942.6 | 310 | Critical Duty | 24 |
| G2 | 1 | 438.8–438.8V | 2005.7–2005.7A | 17.2 | 2005.7 | 260 | Intermittent | 1 |

### T12 MAIN Group Nominal Drop Points

G1: Center at 453.3V, 49485 occurrences
G2: Center at 438.8V, 1 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 18.14
- **Maximum VHI:** 82.45
- **High VHI Events (>5.0):** 28,312


</details>


---

## 📊 Chart Overlay Data Preparation

<details>
<summary><strong>Prepared Chart Overlay Points</strong></summary>

*The following data points have been prepared for chart overlays:*

Critical voltage drops (below 440V): 1 events

### Group Annotation Points

G1: Center at 453.3V, 49485 occurrences
G2: Center at 438.8V, 1 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Voltage behavior appears within normal operating parameters during the analysis period.

---

# END OF REPORT

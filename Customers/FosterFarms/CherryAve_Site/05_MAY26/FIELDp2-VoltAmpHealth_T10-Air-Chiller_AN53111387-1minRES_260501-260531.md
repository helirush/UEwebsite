# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** T10 Air Chiller  
**Generated:** 2026-07-10 12:10:41  
**Data Source:** AN53111387-V-1minRES_44640CLP_260501-260531c.csv  

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
- **Average Voltage:** 457.4V
- **Minimum Voltage:** 432.1V
- **Maximum Voltage:** 486.1V
- **Standard Deviation:** 13.41V

</details>

### Operating Mean Voltage vs Nominal (480V)

- **Operating Mean:** 457.4V (22.6V, 4.70% below nominal)

*📌 Note: Lower mean voltage for the same kW raises current, increasing BTU/hr and contributing to higher VHI.*

### Voltage Deviation Analysis

| Deviation Band | Readings | Percentage |
| -------------- | -------: | ---------: |
| Below 460V | 25,998 | 58.24% |
| 460–470V | 7,176 | 16.08% |
| 470–480V | 8,962 | 20.08% |
| 480–490V | 2,504 | 5.61% |
| 490–500V | 0 | 0.00% |
| 500V+ | 0 | 0.00% |

**Threshold highlights (cumulative):**
- Below 470V: 33,174 (74.31%)
- Below 460V: 25,998 (58.24%)
- Above 490V: 0 (0.00%)
- Above 500V: 0 (0.00%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 1

### T10 AIR CHILLER Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 34265 | 432.1–460.8V | 174.1–2126.3A | 23.9 | 1482.5 | 190 | Critical Duty | 26 |

### T10 AIR CHILLER Group Nominal Drop Points

G1: Center at 446.5V, 34265 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 33.61
- **Maximum VHI:** 95.71
- **High VHI Events (>5.0):** 39,338


</details>


---

## 📊 Chart Overlay Data Preparation

<details>
<summary><strong>Prepared Chart Overlay Points</strong></summary>

*The following data points have been prepared for chart overlays:*

Critical voltage drops (below 440V): 1693 events

### Group Annotation Points

G1: Center at 446.5V, 34265 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Voltage behavior appears within normal operating parameters during the analysis period.

---

# END OF REPORT

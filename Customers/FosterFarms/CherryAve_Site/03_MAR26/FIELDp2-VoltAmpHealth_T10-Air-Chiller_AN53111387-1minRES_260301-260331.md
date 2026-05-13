# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** T10 Air Chiller  
**Generated:** 2026-04-17 11:16:18  
**Data Source:** AN53111387-V-1minRES_44580CLP_260301-260331c.csv  

## 📊 Analysis Period

- **Period:** March 01, 2026 thru March 31, 2026
- **Number of Days:** 31 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 44,580

## 🔋 Facility Information

- **Transformer Capacity:** 2,500 kVA
- **Nominal Voltage:** 480V (3-Phase)
- **Analysis Type:** Voltage & Current Health + Thermal Burden Assessment
- **Technology Focus:** Unity Energy MPTS Solutions

---

## 📈 Voltage Statistics

<details>
<summary><strong>Basic Voltage Metrics</strong></summary>

- **Total Voltage Readings Analyzed:** 44,580
- **Average Voltage:** 458.7V
- **Minimum Voltage:** 436.7V
- **Maximum Voltage:** 483.8V
- **Standard Deviation:** 11.87V

</details>

### Operating Mean Voltage vs Nominal (480V)

- **Operating Mean:** 458.7V (21.3V, 4.43% below nominal)

*📌 Note: Lower mean voltage for the same kW raises current, increasing BTU/hr and contributing to higher VHI.*

### Voltage Deviation Analysis

| Deviation Band | Readings | Percentage |
| -------------- | -------: | ---------: |
| Below 460V | 26,577 | 59.62% |
| 460–470V | 6,569 | 14.74% |
| 470–480V | 9,814 | 22.01% |
| 480–490V | 1,620 | 3.63% |
| 490–500V | 0 | 0.00% |
| 500V+ | 0 | 0.00% |

**Threshold highlights (cumulative):**
- Below 470V: 33,146 (74.35%)
- Below 460V: 26,577 (59.62%)
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
| G1 | 35119 | 436.7–460.8V | 171.5–2090.5A | 19.3 | 1436.4 | 190 | Critical Duty | 27 |

### T10 AIR CHILLER Group Nominal Drop Points

G1: Center at 448.8V, 35119 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 30.88
- **Maximum VHI:** 86.69
- **High VHI Events (>5.0):** 39,083


</details>


---

## 📊 Chart Overlay Data Preparation

<details>
<summary><strong>Prepared Chart Overlay Points</strong></summary>

*The following data points have been prepared for chart overlays:*

Critical voltage drops (below 440V): 89 events

### Group Annotation Points

G1: Center at 448.7V, 35119 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Voltage behavior appears within normal operating parameters during the analysis period.

---

# END OF REPORT

# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** T10 Air Chiller  
**Generated:** 2026-05-08 17:41:11  
**Data Source:** AN53111387-V-1minRES_43200CLP_260401-260430c.csv  

## 📊 Analysis Period

- **Period:** April 01, 2026 thru April 30, 2026
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
- **Average Voltage:** 457.0V
- **Minimum Voltage:** 0.0V
- **Maximum Voltage:** 485.4V
- **Standard Deviation:** 16.95V

</details>

### Operating Mean Voltage vs Nominal (480V)

- **Operating Mean:** 457.0V (23.0V, 4.78% below nominal)

*📌 Note: Lower mean voltage for the same kW raises current, increasing BTU/hr and contributing to higher VHI.*

### Voltage Deviation Analysis

| Deviation Band | Readings | Percentage |
| -------------- | -------: | ---------: |
| Below 460V | 27,480 | 63.61% |
| 460–470V | 6,377 | 14.76% |
| 470–480V | 8,066 | 18.67% |
| 480–490V | 1,277 | 2.96% |
| 490–500V | 0 | 0.00% |
| 500V+ | 0 | 0.00% |

**Threshold highlights (cumulative):**
- Below 470V: 33,857 (78.37%)
- Below 460V: 27,480 (63.61%)
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
| G1 | 33542 | 438.9–460.8V | 156.3–2014.3A | 17.1 | 1338.1 | 170 | Critical Duty | 27 |

### T10 AIR CHILLER Group Nominal Drop Points

G1: Center at 449.9V, 33542 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 33.63
- **Maximum VHI:** 960.00
- **High VHI Events (>5.0):** 38,808


</details>


---

## 📊 Chart Overlay Data Preparation

<details>
<summary><strong>Prepared Chart Overlay Points</strong></summary>

*The following data points have been prepared for chart overlays:*

Critical voltage drops (below 440V): 54 events

### Group Annotation Points

G1: Center at 449.8V, 33542 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Voltage behavior appears within normal operating parameters during the analysis period.

---

# END OF REPORT

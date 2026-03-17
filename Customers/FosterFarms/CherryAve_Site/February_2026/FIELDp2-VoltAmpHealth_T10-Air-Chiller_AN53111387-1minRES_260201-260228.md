# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** T10 Air Chiller  
**Generated:** 2026-03-14 12:40:07  
**Data Source:** AN53111387-V-1minRES_40320CLP_260201-260228c.csv  

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
- **Average Voltage:** 459.8V
- **Minimum Voltage:** 440.2V
- **Maximum Voltage:** 485.3V
- **Standard Deviation:** 11.24V

</details>

### Operating Mean Voltage vs Nominal (480V)

- **Operating Mean:** 459.8V (20.2V, 4.21% below nominal)

*📌 Note: Lower mean voltage for the same kW raises current, increasing BTU/hr and contributing to higher VHI.*

### Voltage Deviation Analysis

| Deviation Band | Readings | Percentage |
| -------------- | -------: | ---------: |
| Below 460V | 23,906 | 59.29% |
| 460–470V | 5,899 | 14.63% |
| 470–480V | 8,700 | 21.58% |
| 480–490V | 1,815 | 4.50% |
| 490–500V | 0 | 0.00% |
| 500V+ | 0 | 0.00% |

**Threshold highlights (cumulative):**
- Below 470V: 29,805 (73.92%)
- Below 460V: 23,906 (59.29%)
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
| G1 | 33570 | 440.2–460.8V | 161.9–2075.9A | 15.8 | 1338.3 | 170 | Critical Duty | 26 |

### T10 AIR CHILLER Group Nominal Drop Points

G1: Center at 450.5V, 33570 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 29.32
- **Maximum VHI:** 59.64
- **High VHI Events (>5.0):** 34,822


</details>


---

## 📊 Chart Overlay Data Preparation

<details>
<summary><strong>Prepared Chart Overlay Points</strong></summary>

*The following data points have been prepared for chart overlays:*


### Group Annotation Points

G1: Center at 450.5V, 33570 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Voltage behavior appears within normal operating parameters during the analysis period.

---

# END OF REPORT

# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** T16 Compressor  
**Generated:** 2026-04-17 11:16:37  
**Data Source:** AN54022983-V-1minRES_44580CLP_260301-260331c.csv  

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
- **Average Voltage:** 475.0V
- **Minimum Voltage:** 455.9V
- **Maximum Voltage:** 501.7V
- **Standard Deviation:** 11.09V

</details>

### Operating Mean Voltage vs Nominal (480V)

- **Operating Mean:** 475.0V (5.0V, 1.05% below nominal)

*📌 Note: Lower mean voltage for the same kW raises current, increasing BTU/hr and contributing to higher VHI.*

### Voltage Deviation Analysis

| Deviation Band | Readings | Percentage |
| -------------- | -------: | ---------: |
| Below 460V | 461 | 1.03% |
| 460–470V | 20,395 | 45.75% |
| 470–480V | 9,447 | 21.19% |
| 480–490V | 7,557 | 16.95% |
| 490–500V | 6,613 | 14.83% |
| 500V+ | 107 | 0.24% |

**Threshold highlights (cumulative):**
- Below 470V: 20,856 (46.78%)
- Below 460V: 461 (1.03%)
- Above 490V: 6,720 (15.07%)
- Above 500V: 107 (0.24%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 1

### T16 COMPRESSOR Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 43379 | 455.9–475.3V | 1177.4–2183.3A | 14.5 | 1708.0 | 220 | Critical Duty | 27 |

### T16 COMPRESSOR Group Nominal Drop Points

G1: Center at 465.6V, 43379 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 25.82
- **Maximum VHI:** 58.90
- **High VHI Events (>5.0):** 40,328


</details>


---

## 📊 Chart Overlay Data Preparation

<details>
<summary><strong>Prepared Chart Overlay Points</strong></summary>

*The following data points have been prepared for chart overlays:*


### Group Annotation Points

G1: Center at 465.6V, 43379 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Voltage behavior appears within normal operating parameters during the analysis period.

---

# END OF REPORT

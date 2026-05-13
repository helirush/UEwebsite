# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** T12 Main  
**Generated:** 2026-04-17 11:17:02  
**Data Source:** AN54021613-V-1minRES_44580CLP_260301-260331c.csv  

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
- **Average Voltage:** 466.8V
- **Minimum Voltage:** 441.9V
- **Maximum Voltage:** 494.0V
- **Standard Deviation:** 11.37V

</details>

### Operating Mean Voltage vs Nominal (480V)

- **Operating Mean:** 466.8V (13.2V, 2.76% below nominal)

*📌 Note: Lower mean voltage for the same kW raises current, increasing BTU/hr and contributing to higher VHI.*

### Voltage Deviation Analysis

| Deviation Band | Readings | Percentage |
| -------------- | -------: | ---------: |
| Below 460V | 17,863 | 40.07% |
| 460–470V | 10,491 | 23.53% |
| 470–480V | 8,008 | 17.96% |
| 480–490V | 7,699 | 17.27% |
| 490–500V | 519 | 1.16% |
| 500V+ | 0 | 0.00% |

**Threshold highlights (cumulative):**
- Below 470V: 28,354 (63.60%)
- Below 460V: 17,863 (40.07%)
- Above 490V: 518 (1.16%)
- Above 500V: 0 (0.00%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 2

### T12 MAIN Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 52183 | 446.2–460.8V | 1316.5–2639.6A | 9.8 | 2005.3 | 320 | Critical Duty | 25 |
| G2 | 3 | 441.9–443.6V | 1848.0–2081.0A | 14.1 | 1979.7 | 260 | Intermittent | 3 |

### T12 MAIN Group Nominal Drop Points

G1: Center at 453.5V, 52183 occurrences
G2: Center at 442.8V, 3 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 19.85
- **Maximum VHI:** 57.19
- **High VHI Events (>5.0):** 31,078


</details>


---

## 📊 Chart Overlay Data Preparation

<details>
<summary><strong>Prepared Chart Overlay Points</strong></summary>

*The following data points have been prepared for chart overlays:*


### Group Annotation Points

G1: Center at 453.5V, 52183 occurrences
G2: Center at 442.7V, 3 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Voltage behavior appears within normal operating parameters during the analysis period.

---

# END OF REPORT

# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** Rendering-2  
**Generated:** 2026-04-25 17:51:27  
**Data Source:** AN55050284-V-1minRES_32730CLP_260301-260323c.csv  

## 📊 Analysis Period

- **Period:** March 01, 2026 thru March 23, 2026
- **Number of Days:** 23 Days
- **Data Resolution:** 1-minute
- **Total Data Points:** 32,730

## 🔋 Facility Information

- **Transformer Capacity:** 2,500 kVA
- **Nominal Voltage:** 480V (3-Phase)
- **Analysis Type:** Voltage & Current Health + Thermal Burden Assessment
- **Technology Focus:** Unity Energy MPTS Solutions

---

## 📈 Voltage Statistics

<details>
<summary><strong>Basic Voltage Metrics</strong></summary>

- **Total Voltage Readings Analyzed:** 32,730
- **Average Voltage:** 472.3V
- **Minimum Voltage:** 0.0V
- **Maximum Voltage:** 490.9V
- **Standard Deviation:** 8.47V

</details>

### Operating Mean Voltage vs Nominal (480V)

- **Operating Mean:** 472.3V (7.7V, 1.60% below nominal)

*📌 Note: Lower mean voltage for the same kW raises current, increasing BTU/hr and contributing to higher VHI.*

### Voltage Deviation Analysis

| Deviation Band | Readings | Percentage |
| -------------- | -------: | ---------: |
| Below 460V | 15 | 0.05% |
| 460–470V | 15,765 | 48.17% |
| 470–480V | 10,229 | 31.25% |
| 480–490V | 6,720 | 20.53% |
| 490–500V | 1 | 0.00% |
| 500V+ | 0 | 0.00% |

**Threshold highlights (cumulative):**
- Below 470V: 15,780 (48.21%)
- Below 460V: 15 (0.05%)
- Above 490V: 1 (0.00%)
- Above 500V: 0 (0.00%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 2

### RENDERING-2 Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 32 | 459.4–460.7V | 1887.4–2417.9A | -3.4 | 2187.1 | 340 | Intermittent | 6 |
| G2 | 7 | 451.1–455.6V | 1625.2–2018.9A | 4.9 | 1885.4 | 250 | Intermittent | 7 |

### RENDERING-2 Group Nominal Drop Points

G1: Center at 460.0V, 32 occurrences
G2: Center at 453.4V, 7 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 9.86
- **Maximum VHI:** 960.00
- **High VHI Events (>5.0):** 24,681


</details>


---

## 📊 Chart Overlay Data Preparation

<details>
<summary><strong>Prepared Chart Overlay Points</strong></summary>

*The following data points have been prepared for chart overlays:*

Critical voltage drops (below 440V): 5 events

### Group Annotation Points

G1: Center at 460.0V, 32 occurrences
G2: Center at 453.3V, 7 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Voltage behavior appears within normal operating parameters during the analysis period.

---

# END OF REPORT

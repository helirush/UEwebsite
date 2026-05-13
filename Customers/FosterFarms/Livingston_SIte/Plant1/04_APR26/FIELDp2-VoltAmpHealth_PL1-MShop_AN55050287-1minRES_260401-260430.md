# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** PL1-MShop  
**Generated:** 2026-05-10 11:11:50  
**Data Source:** AN55050287-V-1minRES_43200CLP_260401-260430c.csv  

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
- **Average Voltage:** 489.7V
- **Minimum Voltage:** 0.0V
- **Maximum Voltage:** 511.0V
- **Standard Deviation:** 10.79V

</details>

### Operating Mean Voltage vs Nominal (480V)

- **Operating Mean:** 489.7V (9.7V, 2.02% above nominal)

*📌 Note: Lower mean voltage for the same kW raises current, increasing BTU/hr and contributing to higher VHI.*

### Voltage Deviation Analysis

| Deviation Band | Readings | Percentage |
| -------------- | -------: | ---------: |
| Below 460V | 21 | 0.05% |
| 460–470V | 1 | 0.00% |
| 470–480V | 12 | 0.03% |
| 480–490V | 21,354 | 49.43% |
| 490–500V | 21,801 | 50.47% |
| 500V+ | 11 | 0.03% |

**Threshold highlights (cumulative):**
- Below 470V: 22 (0.05%)
- Below 460V: 21 (0.05%)
- Above 490V: 21,809 (50.48%)
- Above 500V: 11 (0.03%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 1

### PL1-MSHOP Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 1 | 444.1–444.1V | 3520.8–3520.8A | 11.9 | 3520.8 | 460 | Intermittent | 1 |

### PL1-MSHOP Group Nominal Drop Points

G1: Center at 444.1V, 1 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 0.45
- **Maximum VHI:** 960.00
- **High VHI Events (>5.0):** 28


</details>


---

## 📊 Chart Overlay Data Preparation

<details>
<summary><strong>Prepared Chart Overlay Points</strong></summary>

*The following data points have been prepared for chart overlays:*

Critical voltage drops (below 440V): 20 events

### Group Annotation Points

G1: Center at 444.1V, 1 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Voltage behavior appears within normal operating parameters during the analysis period.

---

# END OF REPORT

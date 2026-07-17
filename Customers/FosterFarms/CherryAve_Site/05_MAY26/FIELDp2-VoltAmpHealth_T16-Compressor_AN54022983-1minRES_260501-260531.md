# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** T16 Compressor  
**Generated:** 2026-07-10 12:10:35  
**Data Source:** AN54022983-V-1minRES_44640CLP_260501-260531c.csv  

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
- **Average Voltage:** 474.8V
- **Minimum Voltage:** 450.8V
- **Maximum Voltage:** 504.8V
- **Standard Deviation:** 12.62V

</details>

### Operating Mean Voltage vs Nominal (480V)

- **Operating Mean:** 474.8V (5.2V, 1.09% below nominal)

*📌 Note: Lower mean voltage for the same kW raises current, increasing BTU/hr and contributing to higher VHI.*

### Voltage Deviation Analysis

| Deviation Band | Readings | Percentage |
| -------------- | -------: | ---------: |
| Below 460V | 3,032 | 6.79% |
| 460–470V | 18,498 | 41.44% |
| 470–480V | 7,494 | 16.79% |
| 480–490V | 8,342 | 18.69% |
| 490–500V | 6,220 | 13.93% |
| 500V+ | 1,054 | 2.36% |

**Threshold highlights (cumulative):**
- Below 470V: 21,530 (48.23%)
- Below 460V: 3,032 (6.79%)
- Above 490V: 7,274 (16.29%)
- Above 500V: 1,054 (2.36%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 1

### T16 COMPRESSOR Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 38605 | 450.8–478.0V | 663.7–1958.2A | 22.2 | 1571.9 | 200 | Critical Duty | 27 |

### T16 COMPRESSOR Group Nominal Drop Points

G1: Center at 464.4V, 38605 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 30.90
- **Maximum VHI:** 70.58
- **High VHI Events (>5.0):** 41,213


</details>


---

## 📊 Chart Overlay Data Preparation

<details>
<summary><strong>Prepared Chart Overlay Points</strong></summary>

*The following data points have been prepared for chart overlays:*


### Group Annotation Points

G1: Center at 464.4V, 38605 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Voltage behavior appears within normal operating parameters during the analysis period.

---

# END OF REPORT

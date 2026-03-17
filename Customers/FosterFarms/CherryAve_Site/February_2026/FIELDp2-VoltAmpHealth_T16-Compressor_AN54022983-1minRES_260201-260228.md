# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** T16 Compressor  
**Generated:** 2026-03-14 12:39:57  
**Data Source:** AN54022983-V-1minRES_40320CLP_260201-260228c.csv  

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
- **Average Voltage:** 476.7V
- **Minimum Voltage:** 458.2V
- **Maximum Voltage:** 503.9V
- **Standard Deviation:** 10.97V

</details>

### Operating Mean Voltage vs Nominal (480V)

- **Operating Mean:** 476.7V (3.3V, 0.69% below nominal)

*📌 Note: Lower mean voltage for the same kW raises current, increasing BTU/hr and contributing to higher VHI.*

### Voltage Deviation Analysis

| Deviation Band | Readings | Percentage |
| -------------- | -------: | ---------: |
| Below 460V | 24 | 0.06% |
| 460–470V | 15,545 | 38.55% |
| 470–480V | 10,942 | 27.14% |
| 480–490V | 6,712 | 16.65% |
| 490–500V | 6,146 | 15.24% |
| 500V+ | 951 | 2.36% |

**Threshold highlights (cumulative):**
- Below 470V: 15,569 (38.61%)
- Below 460V: 24 (0.06%)
- Above 490V: 7,097 (17.60%)
- Above 500V: 951 (2.36%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 1

### T16 COMPRESSOR Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 39522 | 458.2–477.3V | 781.4–2010.2A | 14.1 | 1542.4 | 200 | Critical Duty | 26 |

### T16 COMPRESSOR Group Nominal Drop Points

G1: Center at 467.8V, 39522 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 26.06
- **Maximum VHI:** 58.51
- **High VHI Events (>5.0):** 36,934


</details>


---

## 📊 Chart Overlay Data Preparation

<details>
<summary><strong>Prepared Chart Overlay Points</strong></summary>

*The following data points have been prepared for chart overlays:*


### Group Annotation Points

G1: Center at 467.7V, 39522 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Voltage behavior appears within normal operating parameters during the analysis period.

---

# END OF REPORT

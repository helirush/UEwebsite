# VOLTAGE & CURRENT HEALTH ANALYSIS

*Electromagnetic Field Analysis: Voltage (E-field), Current (H-field), and Thermal Burden*

**Transformer:** T16 Compressor  
**Generated:** 2026-09-10 23:18:24  
**Data Source:** AN54022983-V-1minRES_44640CLP_260801-260831c.csv  

## 📊 Analysis Period

- **Period:** August 01, 2026 thru August 31, 2026
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
- **Average Voltage:** 480.0V
- **Minimum Voltage:** 480.0V
- **Maximum Voltage:** 480.0V
- **Standard Deviation:** 0.00V

</details>

### Operating Mean Voltage vs Nominal (480V)

- **Operating Mean:** 480.0V (0.0V, 0.00% at nominal)

*📌 Note: Lower mean voltage for the same kW raises current, increasing BTU/hr and contributing to higher VHI.*

### Voltage Deviation Analysis

| Deviation Band | Readings | Percentage |
| -------------- | -------: | ---------: |
| Below 460V | 2,688 | 6.02% |
| 460–470V | 18,021 | 40.37% |
| 470–480V | 8,483 | 19.00% |
| 480–490V | 6,291 | 14.09% |
| 490–500V | 7,754 | 17.37% |
| 500V+ | 1,403 | 3.14% |

**Threshold highlights (cumulative):**
- Below 470V: 20,709 (46.39%)
- Below 460V: 2,688 (6.02%)
- Above 490V: 9,157 (20.51%)
- Above 500V: 1,403 (3.14%)


---

## ⚡ Voltage Drop Group Detection

<details>
<summary><strong>Group Detection Analysis</strong></summary>

**Voltage Drop Groups Detected:** 3

### T16 COMPRESSOR Group Index

| Group ID | Drop Count | Voltage Range | Amp Range | ΔV | Est. Stall Amps | Estimated HP | Motor Behavior Classification | Days |
| -------- | ---------: | ------------- | --------: | ------: | ---------: | ----------: | --------------------------- | ---: |
| G1 | 40391 | 454.5–478.4V | 358.8–2179.1A | 18.9 | 1663.3 | 220 | Critical Duty | 29 |
| G2 | 5 | 450.3–452.5V | 1975.0–2189.2A | 23.1 | 2120.3 | 280 | Intermittent | 4 |
| G3 | 1 | 447.4–447.4V | 2192.5–2192.5A | 26.0 | 2192.5 | 250 | Intermittent | 1 |

### T16 COMPRESSOR Group Nominal Drop Points

G1: Center at 466.4V, 40391 occurrences
G2: Center at 451.4V, 5 occurrences
G3: Center at 447.4V, 1 occurrences

</details>


---

## 🔍 Device Inference and Stress Analysis

<details>
<summary><strong>VHI Analysis & Device Stress Indicators</strong></summary>

### Voltage Heat Index (VHI) Analysis

- **Average VHI:** 30.19
- **Maximum VHI:** 76.39
- **High VHI Events (>5.0):** 40,608


</details>


---

## 📊 Chart Overlay Data Preparation

<details>
<summary><strong>Prepared Chart Overlay Points</strong></summary>

*The following data points have been prepared for chart overlays:*


### Group Annotation Points

G1: Center at 466.5V, 40391 occurrences
G2: Center at 451.4V, 5 occurrences
G3: Center at 447.4V, 1 occurrences

</details>


---

## 💡 Voltage Behavior Recommendations

• Multiple voltage drop groups detected - consider load balancing analysis and power quality assessment.

---

# END OF REPORT

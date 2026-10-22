# Speech Analyzer — Tech Retail Voice Intelligence Dashboard

[![Platform](https://img.shields.io/badge/Platform-Web%20Application-blue.svg)](https://ahmedellansary.github.io/speech-analyzer/)
[![License](https://img.shields.io/badge/License-Enterprise-red.svg)](#)
[![Status](https://img.shields.io/badge/Build-Production%20Ready-success.svg)](#)

An enterprise-grade Speech & Voice Analytics Intelligence Dashboard tailored for **Retail Tech & Electronics Chains** (Laptops, Smartphones, Home Appliances, TVs, and Smart Devices). 

It empowers regional directors, store managers, and auditing teams to monitor **Quality Supervision** (Staff Conduct, Escalations, Customer Experience, Cleanliness, Policy Compliance) and **Sales Supervision** (Commercial volume, Laptops, Installments, Warranty, Financing, Delivery).

---

## 🌟 Key Features

1. **Dual Operational Layers:**
   - **Quality (7 Sub-Categories):** Incident and compliance monitoring (`Staff Conduct & Attitude`, `Escalations & Complaints`, `Customer Experience`, `Store Cleanliness & Display`, `Supervisor Intervention`, `Policy Compliance`, `Speed of Service`).
   - **Sales (8 Sub-Categories):** Commercial volume & retail metrics (`Laptops & Computers`, `Smartphones & Tablets`, `Home Appliances & TVs`, `Accessories & Audio`, `Smart Home & Gaming`, `Installments & Financing`, `Warranty & Protection`, `Delivery & Pickup`).

2. **Executive Overview & Trends:**
   - Real-time Ratio Donut (Quality vs Sales volume).
   - Dynamic Month-over-Month (MoM) performance comparisons with granular timefilters (`All-Time`, `Last 7 Days`, `Last 30 Days`, `Last 90 Days`).
   - Year-to-Date Performance Pillar Trends with automated Peak and Low detection.

3. **Regional & Geospatial Intelligence:**
   - Interactive SVG Egypt Regional Operations map with 4 distinct regional layers (`Greater Cairo`, `Alex & North Coast`, `Delta`, `Upper Egypt`).
   - Sliced regional breakdown bars with instant cross-filtering across all metrics on the dashboard.

4. **Retail Tech Keyword Dictionary (15 Sub-Categories):**
   - High-performance modal taxonomy explorer supporting dual-language (Arabic & English) search.
   - Dynamic addition and removal of keywords with instant propagation to detection engines.

5. **Audio & Dialogue Spotter:**
   - Built-in customer interaction audio simulator with real-time keyword spotting chips and sub-category categorization.

6. **Enterprise Reporting & Data Export:**
   - High-fidelity **PowerPoint (PPTX)** deck generator with branded visual slides.
   - Filter-aware **Excel / CSV** export compliant with retail store management structures (`Transaction ID`, `Detected Keyword`, `Sub-Category`, `Category`, `Date & Time`, `Store Manager`, `Agent Name`, `Agent ID`, `Store`, `Region`, `Camera ID`).

---

## 🛠️ Technology Stack

- **Core:** Pure Vanilla JavaScript (ES6+), Semantic HTML5, CSS3 Glassmorphism Architecture.
- **Charts:** Chart.js (UMD enterprise bundle).
- **Presentation Engine:** PptxGenJS (Client-side presentation builder).
- **Data Export:** SheetJS (xlsx.full.min.js) for robust spreadsheet generation.
- **Typography:** Plus Jakarta Sans & Outfit (Google Fonts).

---

## 🚀 Live Cloud Deployment

Experience the live interactive dashboard directly via GitHub Pages:
**[https://ahmedellansary.github.io/speech-analyzer/](https://ahmedellansary.github.io/speech-analyzer/)**

---

## 📦 Directory Structure

```text
├── index.html           # Main executive dashboard interface
├── styles.css           # Design system tokens, layouts, and dark/light themes
├── app.js               # Application logic, data pipeline, and chart controllers
├── chart.umd.min.js     # Standalone Chart.js library
├── pptxgen.bundle.js    # Standalone PowerPoint generation library
├── xlsx.full.min.js     # Standalone SheetJS spreadsheet library
├── sample_data.csv      # Sample retail supervision dataset
└── README.md            # Technical documentation
```

---

*Authored and deployed for Retail Tech Supervision & Performance Quality Auditing.*

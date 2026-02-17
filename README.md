# Integrated Perception Documentation Site

A premium, high-performance documentation portal for the **YOLOv8 & InsightFace Hybrid Perception System**. This site provides a comprehensive technical guide on real-time person tracking, face biometric identification, and the underlying architectural "Glue" logic.

## 🚀 Quick Start (Documentation Site)

This portal is built with **React** and **Vite**. Follow these steps to run the documentation on your local machine:

### 1. Prerequisites
- **Node.js**: Version 18.0 or higher
- **npm**: Version 9.0 or higher

### 2. Installation
Clone the repository and install the frontend dependencies:

```bash
# Navigate to the project directory
cd Documentation_Demo

# Install dependencies
npm install
```

### 3. Development
Start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```
The site will be available at `http://localhost:5174/`.

```bash
ngrok http 5174
```

### 4. Build for Production
Generate a highly optimized production bundle:

```bash
npm run build
```

---

## 🛠️ Perception Engine Requirements (Python)

If you intend to deploy the actual perception engine (the code described in the documentation), ensure your environment follows the requirements listed in `requirements.txt`.

### Key Components:
- **YOLOv8**: Real-time object detection and tracking.
- **InsightFace**: Advanced face analysis (SCRFD + ArcFace).
- **Hardward Acceleration**: Support for NVIDIA CUDA/cuDNN via ONNX Runtime GPU.

---

## 🎨 Design Features
- **Premium Dark UI**: Glassmorphism-inspired design with harmonious color palettes.
- **Technical Schematics**: Custom-built SVG visualizations for complex algorithmic flows.
- **Responsive Layout**: Content-aware sidebar and adaptive navigation for all devices.

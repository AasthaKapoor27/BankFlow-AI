# BankFlow AI 🚀
**SBI AI Hackathon @ GFF 2026 Submission**

BankFlow AI is an agentic AI platform that acquires, onboards, and retains banking customers — autonomously. Built entirely on free, open-source infrastructure to ensure no customer data leaves Indian infrastructure (critical for RBI compliance).

---

## 🎯 The Vision

Banks sit on goldmines of data, but act on it too slowly. BankFlow AI replaces manual follow-ups and generic marketing with three autonomous pillars:

1. **AcquireBot**: Wakes up instantly on new leads, scores them, and sends hyper-personalised outreach within 60 seconds.
2. **AdoptBot**: Scans existing customers daily for feature gaps (like idle funds or no UPI) and nudges them to activate.
3. **EngageBot**: Detects life events in real-time (e.g., pension credited) and routes the perfect offer via WhatsApp, In-App Push, or an AI Voice Call in regional languages.

## ⚙️ How It Works (The Stack)

- **Orchestration**: `n8n` (Self-hostable, visual workflow engine)
- **Database / Events**: `Supabase` (PostgreSQL + Realtime Webhooks)
- **LLM Engine**: `Groq` + `Llama 3.3 70B` (Blazing fast, open-source weights)
- **Regional Voice**: `Sarvam AI` (TTS/STT in 10 Indian languages)
- **Delivery**: `Twilio` (WhatsApp & Voice) + `Firebase FCM` (Push)
- **Dashboard UI**: `Next.js 15` + `Tailwind CSS`

---

## 💻 Running Locally (For Panelists & Judges)

This repository contains the interactive operator dashboard and pitch website. It is not currently deployed to the public web. To view it on your local machine, follow these simple steps:

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/AasthaKapoor27/BankFlow-AI.git
   cd BankFlow-AI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **View the application**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## 🏗️ Project Structure

- `components/` - Contains all modular UI sections (Hero, Problem, Architecture, Dashboard, etc.)
- `app/` - Next.js App Router layout and global CSS (featuring our custom neon design system)
- `public/` - Static assets

---

**Built by [Aastha Kapoor](https://github.com/AasthaKapoor27)**  
*B.Tech CSE · Manipal University Jaipur*

# BankFlow AI 🚀
[![Live Demo](https://img.shields.io/badge/Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://bankflow-ai.onrender.com/)
BankFlow AI is an **agentic AI platform** that acquires, onboards, and retains banking customers — completely autonomously. Built entirely on free, open-source infrastructure to ensure no customer data leaves Indian infrastructure (critical for RBI compliance).
</div>
---
## 🎯 The Vision
Banks sit on goldmines of data, but act on it too slowly. BankFlow AI replaces manual follow-ups and generic marketing with three autonomous pillars:
- 🧑‍💼 **AcquireBot**: Wakes up instantly on new leads, scores them, and sends hyper-personalised outreach within 60 seconds.
- 📲 **AdoptBot**: Scans existing customers daily for feature gaps (like idle funds or no UPI) and nudges them to activate.
- 🔔 **EngageBot**: Detects life events in real-time (e.g., pension credited) and routes the perfect offer via WhatsApp, In-App Push, or an AI Voice Call in regional languages.
> **Pillar 03 Focus**: Our core submission revolves around **Digital Engagement (EngageBot)** — an intelligent layer that listens to every transaction and acts in the customer's own language and channel dynamically.
---
## ⚙️ How It Works (The Stack)
BankFlow AI leverages a powerful, modular stack combining high-performance LLMs with local routing and real-time triggers:
- **Orchestration**: `n8n` (Self-hostable, visual workflow engine)
- **Database / Events**: `Supabase` (PostgreSQL + Realtime Webhooks)
- **LLM Engine**: `Groq` + `Llama 3.3 70B` (Blazing fast, open-source weights)
- **Regional Voice**: `Sarvam AI` (TTS/STT in 10 Indian languages)
- **Delivery**: `Twilio` (WhatsApp & Voice) + `Firebase FCM` (Push)
- **Dashboard UI**: `Next.js 15` + `Tailwind CSS`
---
## 💻 Running Locally (For Panelists & Judges)
While you can view the live demo using the badge at the top, you can also spin up the interactive operator dashboard and pitch website locally:
### Prerequisites
- [Node.js](https://nodejs.org/en/) (v18 or higher recommended)
- `npm` or `pnpm`
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
- `public/` - Static assets for imagery and icons.
---
<div align="center">
  <p>Built with 💡 by <strong><a href="https://github.com/AasthaKapoor27">Aastha Kapoor</a></strong></p>
  <p><em>B.Tech CSE · Manipal University Jaipur</em></p>
</div>

   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## 🏗️ Project Structure

- `components/` - Contains all modular UI sections (Hero, Problem, Architecture, Dashboard, etc.)
- `app/` - Next.js App Router layout and global CSS (featuring our custom neon design system)
- `public/` - Static assets

---

**Built by [Aastha Kapoor](https://github.com/AasthaKapoor27)**  
*B.Tech CSE · Manipal University Jaipur*

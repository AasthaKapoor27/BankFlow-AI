"use client";

/* ═══════════════════════════════════════════════════════════════════
   SHARED COLOURS
═══════════════════════════════════════════════════════════════════ */
const Y = "#FFE600"; // AcquireBot yellow
const G = "#00FF88"; // AdoptBot green
const O = "#FF6B00"; // EngageBot orange

/* ═══════════════════════════════════════════════════════════════════
   PRIMITIVE SUB-COMPONENTS
═══════════════════════════════════════════════════════════════════ */

/** Dashed vertical arrow pointing down */
function DownArrow({ color }: { color: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "2px 0" }}>
      <div
        style={{
          width: 2,
          height: 26,
          background: `repeating-linear-gradient(to bottom,${color} 0,${color} 4px,transparent 4px,transparent 9px)`,
          opacity: 0.55,
        }}
      />
      <svg width="10" height="7" viewBox="0 0 10 7">
        <path d="M5 7L0 0h10z" fill={color} opacity="0.7" />
      </svg>
    </div>
  );
}

/** Regular step / mini-agent box */
function FlowBox({
  agentCode, name, sub, techNote, color, special,
}: {
  agentCode?: string;
  name: string;
  sub?: string;
  techNote?: string;
  color: string;
  special?: boolean;
}) {
  return (
    <div
      style={{
        background: "#080808",
        border: `1px solid ${special ? "#FF2D2D" : color + "99"}`,
        borderRadius: 8,
        padding: "13px 16px",
        boxShadow: special
          ? "0 0 28px rgba(255,45,45,0.35), 0 0 8px rgba(255,107,0,0.3)"
          : undefined,
      }}
    >
      {agentCode && (
        <div
          style={{
            fontSize: "0.6375rem",
            fontWeight: 800,
            color,
            fontFamily: "'Space Grotesk', sans-serif",
            letterSpacing: "0.09em",
            textTransform: "uppercase",
            marginBottom: 4,
          }}
        >
          {agentCode}
        </div>
      )}
      <div
        style={{
          fontSize: "0.875rem",
          fontWeight: 700,
          color: agentCode ? "#fff" : color,
          fontFamily: "'Space Grotesk', sans-serif",
          lineHeight: 1.35,
          marginBottom: sub ? 8 : 0,
        }}
      >
        {name}
      </div>
      {sub && (
        <div
          style={{
            fontSize: "0.8rem",
            color: "#888",
            lineHeight: 1.75,
            whiteSpace: "pre-line",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {sub}
        </div>
      )}
      {techNote && (
        <div
          style={{
            fontSize: "0.73rem",
            color: "#444",
            marginTop: 8,
            fontStyle: "italic",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {techNote}
        </div>
      )}
    </div>
  );
}

/** Diamond-shaped router node (SVG polygon) */
function DiamondRouter({ label, color }: { label: string; color: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ position: "relative", width: 270, height: 66, flexShrink: 0 }}>
        <svg
          width="270"
          height="66"
          viewBox="0 0 270 66"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <polygon points="135,2 268,33 135,64 2,33" fill={color} />
        </svg>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 58px",
          }}
        >
          <span
            style={{
              fontSize: "0.68rem",
              fontWeight: 800,
              color: "#000",
              textAlign: "center",
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "0.01em",
              lineHeight: 1.3,
            }}
          >
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}

/** Final outcomes box — filled with agent colour */
function FilledBox({ text, sub, color }: { text: string; sub: string; color: string }) {
  return (
    <div
      style={{
        background: color,
        borderRadius: 8,
        padding: "14px 18px",
        boxShadow: `0 0 32px ${color}55`,
      }}
    >
      <div
        style={{
          fontSize: "0.9375rem",
          fontWeight: 800,
          color: "#000",
          fontFamily: "'Space Grotesk', sans-serif",
          marginBottom: 4,
        }}
      >
        {text}
      </div>
      <div style={{ color: "#00000075", fontSize: "0.8rem" }}>{sub}</div>
    </div>
  );
}

/** Dashed SVG lines spreading from centre to three branch points */
function SpreadArrows({ color }: { color: string }) {
  return (
    <svg
      width="100%"
      height="44"
      viewBox="0 0 100 44"
      preserveAspectRatio="none"
      style={{ display: "block" }}
    >
      <line x1="50" y1="2" x2="16.5" y2="42" stroke={color} strokeWidth="1.2" strokeDasharray="3,3" opacity="0.5" />
      <line x1="50" y1="2" x2="50"   y2="42" stroke={color} strokeWidth="1.2" strokeDasharray="3,3" opacity="0.5" />
      <line x1="50" y1="2" x2="83.5" y2="42" stroke={color} strokeWidth="1.2" strokeDasharray="3,3" opacity="0.5" />
    </svg>
  );
}

/** Dashed SVG lines converging from three branch points back to centre */
function MergeArrows({ color }: { color: string }) {
  return (
    <svg
      width="100%"
      height="44"
      viewBox="0 0 100 44"
      preserveAspectRatio="none"
      style={{ display: "block" }}
    >
      <line x1="16.5" y1="2" x2="50" y2="42" stroke={color} strokeWidth="1.2" strokeDasharray="3,3" opacity="0.5" />
      <line x1="50"   y1="2" x2="50" y2="42" stroke={color} strokeWidth="1.2" strokeDasharray="3,3" opacity="0.5" />
      <line x1="83.5" y1="2" x2="50" y2="42" stroke={color} strokeWidth="1.2" strokeDasharray="3,3" opacity="0.5" />
    </svg>
  );
}

/** Small coloured pill badge above each branch column */
function BranchLabel({ text, color }: { text: string; color: string }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 8 }}>
      <span
        style={{
          display: "inline-block",
          padding: "3px 12px",
          borderRadius: 100,
          background: `${color}18`,
          border: `1px solid ${color}77`,
          color,
          fontSize: "0.68rem",
          fontWeight: 800,
          fontFamily: "'Space Grotesk', sans-serif",
          letterSpacing: "0.09em",
          textTransform: "uppercase",
        }}
      >
        {text}
      </span>
    </div>
  );
}

/** Tinted callout box with left accent border and plain-English text */
function CalloutBox({
  text, bg, borderColor,
}: {
  text: string;
  bg: string;
  borderColor: string;
}) {
  return (
    <div
      style={{
        background: bg,
        borderLeft: `3px solid ${borderColor}`,
        borderRadius: "0 8px 8px 0",
        padding: "18px 22px",
        marginTop: 24,
      }}
    >
      <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
        <span style={{ fontSize: "1.2rem", flexShrink: 0, marginTop: 2 }}>💬</span>
        <p
          style={{
            color: "#aaa",
            fontSize: "0.875rem",
            lineHeight: 1.8,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

/** Coloured pill at the top of each workflow */
function WorkflowPill({ label, color, star }: { label: string; color: string; star?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
      <span
        style={{
          display: "inline-block",
          padding: "5px 18px",
          borderRadius: 100,
          background: `${color}14`,
          border: `1px solid ${color}`,
          color,
          fontSize: "0.7rem",
          fontWeight: 800,
          fontFamily: "'Space Grotesk', sans-serif",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
      {star && <span style={{ fontSize: "1rem" }}>⭐</span>}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   WORKFLOW 1 — ACQUIREBOT
═══════════════════════════════════════════════════════════════════ */
function AcquireWorkflow() {
  return (
    <div>
      <WorkflowPill label="WORKFLOW 1 — AcquireBot (Pillar 01)" color={Y} />

      <FlowBox
        name="⚡ Supabase Webhook Trigger"
        sub="event_type = new_lead"
        color={Y}
      />
      <DownArrow color={Y} />

      <FlowBox
        agentCode="MINI AGENT 1A"
        name="Lead Qualifier"
        sub="Reads lead profile · scores by age, income, product interest, source · tags HOT / WARM / COLD"
        techNote="n8n Code node (JS scoring) → Set node"
        color={Y}
      />
      <DownArrow color={Y} />

      <DiamondRouter label="Switch node — Lead tier router" color={Y} />
      <SpreadArrows color={Y} />

      {/* Three branches */}
      <div className="branch-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        <div>
          <BranchLabel text="HOT" color={Y} />
          <FlowBox
            agentCode="MINI AGENT 1B"
            name="Instant Outreach Agent"
            sub={"Groq → personalised message referencing exact product explored\nTwilio WhatsApp → within 60 seconds"}
            color={Y}
          />
        </div>
        <div>
          <BranchLabel text="WARM" color={Y} />
          <FlowBox
            agentCode="MINI AGENT 1C"
            name="Nurture Sequence Agent"
            sub={"Groq → 3-touch drip sequence\nDay 1 / Day 4 / Day 10 messages\nn8n Wait node → WhatsApp / Email"}
            color={Y}
          />
        </div>
        <div>
          <BranchLabel text="COLD" color={Y} />
          <FlowBox
            agentCode="MINI AGENT 1D"
            name="Re-engagement Agent"
            sub={"Tagged cold in Supabase\nn8n Schedule → ping after 30 days\nGroq → seasonal offer message"}
            color={Y}
          />
        </div>
      </div>

      <MergeArrows color={Y} />

      <FlowBox
        agentCode="MINI AGENT 1E"
        name="Reply Handler"
        sub={"Twilio webhook catches reply → Groq detects intent → interested: send KYC link · question: answer it · not now: schedule follow-up 7 days"}
        color={Y}
      />
      <DownArrow color={Y} />

      <FilledBox
        text="📊 Supabase outcomes log → Dashboard"
        sub="contacted · replied · converted · dropped"
        color={Y}
      />

      <CalloutBox
        text="In plain English: When Priya fills a home loan form at 11 PM, AcquireBot wakes up instantly, scores her as HOT, and sends a personalised WhatsApp referencing her ₹45L inquiry — all within 60 seconds. No human involved."
        bg="#1A1500"
        borderColor={Y}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   WORKFLOW 2 — ADOPTBOT
═══════════════════════════════════════════════════════════════════ */
function AdoptWorkflow() {
  return (
    <div>
      <WorkflowPill label="WORKFLOW 2 — AdoptBot (Pillar 02)" color={G} />

      <FlowBox
        name="⏰ n8n Schedule Trigger"
        sub="runs every morning 9 AM · scans all customers"
        color={G}
      />
      <DownArrow color={G} />

      <FlowBox
        agentCode="MINI AGENT 2A"
        name="Feature Gap Scanner"
        sub={"Supabase query: balance > ₹50K AND no investment AND app active AND last nudge > 30 days\nSplitInBatches: one customer at a time"}
        color={G}
      />
      <DownArrow color={G} />

      <DiamondRouter label="Switch node — Gap type router" color={G} />
      <SpreadArrows color={G} />

      {/* Three branches */}
      <div className="branch-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        <div>
          <BranchLabel text="No UPI" color={G} />
          <FlowBox
            agentCode="MINI AGENT 2B"
            name="UPI Activation Agent"
            sub={"Groq → micro-demo message\n'Link UPI in 30 seconds'\nDeep link → UPI setup"}
            color={G}
          />
        </div>
        <div>
          <BranchLabel text="No Investment" color={G} />
          <FlowBox
            agentCode="MINI AGENT 2C"
            name="Investment Nudge Agent"
            sub={"Groq → SIP/FD comparison\nwith personalised rupee numbers\nDeep link → Investment portal"}
            color={G}
          />
        </div>
        <div>
          <BranchLabel text="No Insurance" color={G} />
          <FlowBox
            agentCode="MINI AGENT 2D"
            name="Insurance Awareness Agent"
            sub={"Groq → risk story relevant\nto age and life stage\nDeep link → Insurance portal"}
            color={G}
          />
        </div>
      </div>

      <MergeArrows color={G} />

      <FlowBox
        agentCode="MINI AGENT 2E"
        name="Follow-up Agent"
        sub={"No response in 48hrs → n8n Wait node fires → Groq generates social proof nudge\nAfter 3 touches → DO_NOT_DISTURB for 30 days in Supabase"}
        color={G}
      />
      <DownArrow color={G} />

      <FilledBox
        text="📊 Supabase outcomes log → Dashboard"
        sub="nudged · clicked · adopted · ignored"
        color={G}
      />

      <CalloutBox
        text="In plain English: Every morning AdoptBot silently scans every customer. It finds Ankit — ₹1.2L sitting idle, never touched investments. Sends him a WhatsApp with exact rupee numbers and one tap to start a SIP inside the app. If he ignores it, the agent waits 48 hours and tries again."
        bg="#001A0D"
        borderColor={G}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   WORKFLOW 3 — ENGAGEBOT
═══════════════════════════════════════════════════════════════════ */
function EngageWorkflow() {
  return (
    <div>
      <WorkflowPill label="WORKFLOW 3 — EngageBot (Pillar 03)" color={O} star />

      <FlowBox
        name="⚡ Supabase Webhook Trigger"
        sub={"event_type IN\n(life_event, transaction)"}
        color={O}
      />
      <DownArrow color={O} />

      <FlowBox
        agentCode="MINI AGENT 3A"
        name="Life Event Classifier"
        sub={"Groq reads raw transaction data → classifies into: salary_hike / emi_cleared / large_purchase / new_city / pension_credited\nReturns structured JSON:\n{event: 'pension_credited', opportunity: 'fixed_deposit', urgency: 'high'}"}
        color={O}
      />
      <DownArrow color={O} />

      <FlowBox
        agentCode="MINI AGENT 3B"
        name="Channel Router"
        sub={"Age 55+ AND no app → VOICE CALL\nWhatsApp active → WHATSAPP MESSAGE\nYoung AND app active → IN-APP PUSH\nThis one node is the financial inclusion story"}
        color={O}
      />
      <DownArrow color={O} />

      <DiamondRouter label="Switch node — channel delivery" color={O} />
      <SpreadArrows color={O} />

      {/* Three branches */}
      <div className="branch-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        {/* VOICE — the star branch */}
        <div>
          <BranchLabel text="VOICE" color={O} />
          <FlowBox
            agentCode="MINI AGENT 3C ⭐"
            name="AI Voice Call Agent"
            sub={"1. Groq generates script in customer's language\n2. Sarvam AI TTS converts to natural voice audio\n3. Twilio places real phone call\n4. Captures keypress: 1 = YES · 2 = NO"}
            color={O}
            special
          />
        </div>
        <div>
          <BranchLabel text="WHATSAPP" color={O} />
          <FlowBox
            agentCode="MINI AGENT 3D"
            name="WhatsApp Message Agent"
            sub={"Groq generates message with personalised numbers\nSarvam translates to Hindi if needed\nTwilio sends + deep link to app"}
            color={O}
          />
        </div>
        <div>
          <BranchLabel text="IN-APP" color={O} />
          <FlowBox
            agentCode="MINI AGENT 3E"
            name="In-App Push Agent"
            sub={"Groq generates 60-char push notification copy\nFirebase FCM delivers to mobile app\nDeep link opens exact feature on tap"}
            color={O}
          />
        </div>
      </div>

      <MergeArrows color={O} />

      <FlowBox
        agentCode="MINI AGENT 3F"
        name="Response Intelligence Agent"
        sub={"Twilio/FCM callback → Groq reads response intent:\nINTERESTED → send product link\nOBJECTION → Groq handles counter\nQUESTION → Groq answers\nSILENT 24hrs → softer re-trigger"}
        color={O}
      />
      <DownArrow color={O} />

      <FilledBox
        text="📊 Supabase outcomes log → Dashboard"
        sub="called · answered · pressed 1 · converted"
        color={O}
      />

      <CalloutBox
        text="In plain English: Ramesh's pension hits his account at 9:01 AM. EngageBot notices instantly. It knows Ramesh is 62, doesn't use WhatsApp, and prefers Hindi. So instead of a text he'll never see — it calls him. In Hindi. An AI voice that sounds natural tells him about an FD that would earn him ₹7,000 more per year. He presses 1. He's marked as interested. A human advisor follows up. The whole thing took 4 seconds."
        bg="#1A0800"
        borderColor={O}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SUMMARY BAR — full-width, yellow-bordered
═══════════════════════════════════════════════════════════════════ */
function SummaryBar() {
  const stats = [
    { value: "3 workflows",         color: Y },
    { value: "14 mini-agents",      color: "#fff" },
    { value: "3 delivery channels", color: "#fff" },
    { value: "1 AI calling system", color: O },
    { value: "₹0 API cost",         color: G },
  ];

  return (
    <div
      style={{
        marginTop: 80,
        borderTop: `1px solid ${Y}`,
        borderBottom: `1px solid ${Y}`,
        background: "#000",
        padding: "32px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "16px 40px",
          marginBottom: 16,
        }}
      >
        {stats.map((s, i) => (
          <span
            key={i}
            className="font-display"
            style={{
              fontSize: "1rem",
              fontWeight: 800,
              color: s.color,
              textShadow: s.color !== "#fff" ? `0 0 12px ${s.color}60` : "none",
              letterSpacing: "-0.01em",
            }}
          >
            {s.value}
          </span>
        ))}
      </div>
      <p
        style={{
          textAlign: "center",
          color: "#333",
          fontSize: "0.8125rem",
          fontFamily: "'Inter', sans-serif",
          letterSpacing: "0.04em",
        }}
      >
        Groq · Sarvam AI · n8n · Supabase · Twilio · Firebase · FastAPI · Next.js
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN SECTION EXPORT
═══════════════════════════════════════════════════════════════════ */
export default function Architecture() {
  return (
    <section id="how-it-works" style={{ background: "#050505", paddingTop: 100, paddingBottom: 0 }}>
      <div className="wrap">

        {/* Eyebrow */}
        <p
          style={{
            textAlign: "center",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: Y,
            fontFamily: "'Space Grotesk', sans-serif",
            marginBottom: 24,
          }}
        >
          THE FULL PICTURE
        </p>

        {/* Heading */}
        <h2
          className="font-display"
          style={{
            textAlign: "center",
            fontSize: "clamp(1.875rem, 4vw, 2.5rem)",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.22,
            letterSpacing: "-0.025em",
            marginBottom: 20,
          }}
        >
          Three workflows. Fourteen agents.
          <br />
          One complete banking system.
        </h2>

        {/* Subheading */}
        <p
          style={{
            textAlign: "center",
            fontSize: "1rem",
            color: "#666",
            lineHeight: 1.75,
            maxWidth: 600,
            margin: "0 auto 72px",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Each pillar runs as a completely separate n8n workflow. Inside each
          workflow, mini-agents handle one specific job — so every step is
          traceable, debuggable, and explainable to a bank's compliance team.
        </p>

        {/* Three workflow diagrams */}
        <div style={{ display: "flex", flexDirection: "column", gap: 72 }}>
          <AcquireWorkflow />
          <AdoptWorkflow />
          <EngageWorkflow />
        </div>
      </div>

      {/* Full-width summary bar sits outside .wrap */}
      <SummaryBar />

      {/* Responsive: stack branch columns on mobile */}
      <style>{`
        @media (max-width: 640px) {
          .branch-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

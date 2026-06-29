"use client";

type InnerBox = { text: string; color: string };

interface Layer {
  num: number;
  label: string;
  borderColor: string;
  glowColor: string | null;
  bigText?: string;
  subText?: string;
  chips?: string[];
  innerBoxes?: InnerBox[];
  note?: string;
  noteItalic?: boolean;
}

const LAYERS: Layer[] = [
  {
    num: 1,
    label: "DATA SOURCES",
    borderColor: "#444",
    glowColor: null,
    chips: ["Core Banking", "CRM System", "App Behaviour", "FastAPI Simulator"],
    note: "In production: Kafka streams from CBS. In prototype: FastAPI fires mock events.",
    noteItalic: true,
  },
  {
    num: 2,
    label: "EVENT STORE + REAL-TIME TRIGGER",
    borderColor: "#00B4FF",
    glowColor: "#00B4FF",
    bigText: "Supabase",
    subText: "PostgreSQL + Realtime webhooks",
    chips: ["customers table", "events table", "outcomes table"],
    note: "The moment a transaction lands, Supabase fires a webhook to n8n. Not in 5 minutes. Instantly.",
  },
  {
    num: 3,
    label: "AGENTIC ORCHESTRATION",
    borderColor: "#9B59B6",
    glowColor: "#9B59B6",
    bigText: "n8n",
    innerBoxes: [
      { text: "AcquireBot · 5 mini-agents", color: "#FFE600" },
      { text: "AdoptBot · 4 mini-agents",   color: "#00FF88" },
      { text: "EngageBot · 6 mini-agents",  color: "#FF6B00" },
    ],
    note: "Each agent is a separate n8n workflow with its own trigger, routing logic, and LLM calls.",
  },
  {
    num: 4,
    label: "AI ENGINE",
    borderColor: "#FFE600",
    glowColor: "#FFE600",
    innerBoxes: [
      { text: "Groq · Llama 3.3 70B · message generation",                color: "#FFE600" },
      { text: "Sarvam AI · TTS + STT · Hindi & 9 other Indian languages",  color: "#FF6B00" },
      { text: "Mistral · fallback for structured outputs",                   color: "#9B59B6" },
    ],
    note: "All free. All open-source. No data sent to proprietary foreign servers.",
  },
  {
    num: 5,
    label: "DELIVERY CHANNELS",
    borderColor: "#FF6B00",
    glowColor: "#FF6B00",
    chips: [
      "WhatsApp via Twilio",
      "AI Voice Call via Twilio + Sarvam",
      "Email via SendGrid",
      "In-App Push via Firebase FCM",
    ],
  },
  {
    num: 6,
    label: "OPERATOR DASHBOARD",
    borderColor: "#00FF88",
    glowColor: "#00FF88",
    bigText: "Next.js + Tailwind",
    subText: "Deployed on Vercel · Real-time via Supabase subscriptions",
  },
];

function DownArrow() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: 0, borderLeft: "1.5px dashed rgba(255,255,255,0.3)", height: 28 }} />
      <svg width="12" height="8" viewBox="0 0 12 8" style={{ display: "block" }}>
        <path d="M6 8L0 0h12z" fill="rgba(255,255,255,0.4)" />
      </svg>
    </div>
  );
}

function LayerCard({ layer }: { layer: Layer }) {
  const glow = layer.glowColor
    ? `0 0 28px ${layer.glowColor}28, 0 0 1px ${layer.glowColor}60`
    : "none";

  return (
    <div
      style={{
        background: "#0A0A0A",
        border: `1px solid ${layer.borderColor}`,
        borderRadius: 10,
        padding: "20px 22px",
        boxShadow: glow,
        transition: "box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        if (layer.glowColor)
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            `0 0 48px ${layer.glowColor}44, 0 0 1px ${layer.glowColor}`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = glow;
      }}
    >
      <p style={{
        fontSize: "0.6375rem", fontWeight: 700, letterSpacing: "0.13em",
        textTransform: "uppercase", color: layer.glowColor ?? "#555",
        fontFamily: "'Space Grotesk', sans-serif", marginBottom: 12,
      }}>
        Layer {layer.num} — {layer.label}
      </p>

      {layer.bigText && (
        <p className="font-display" style={{
          fontSize: "1.625rem", fontWeight: 800, color: "#fff",
          letterSpacing: "-0.02em", marginBottom: layer.subText ? 4 : 14, lineHeight: 1,
        }}>
          {layer.bigText}
        </p>
      )}

      {layer.subText && (
        <p style={{ color: "#555", fontSize: "0.8125rem", marginBottom: 14 }}>
          {layer.subText}
        </p>
      )}

      {layer.chips && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: layer.note ? 14 : 0 }}>
          {layer.chips.map((chip) => (
            <span key={chip} style={{
              padding: "4px 12px", borderRadius: 4,
              border: `1px solid ${layer.borderColor}55`,
              background: `${layer.borderColor}0C`,
              color: layer.glowColor ?? "#888",
              fontSize: "0.75rem", fontWeight: 600,
              fontFamily: "'Space Grotesk', sans-serif",
            }}>
              {chip}
            </span>
          ))}
        </div>
      )}

      {layer.innerBoxes && (
        <div className="inner-boxes" style={{
          display: "grid",
          gridTemplateColumns: `repeat(${layer.innerBoxes.length}, 1fr)`,
          gap: 10,
          marginBottom: layer.note ? 14 : 0,
        }}>
          {layer.innerBoxes.map((box) => (
            <div key={box.text} style={{
              padding: "10px 12px", borderRadius: 6,
              border: `1px solid ${box.color}44`,
              background: `${box.color}09`,
              color: box.color, fontSize: "0.7875rem",
              fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif",
              lineHeight: 1.45,
            }}>
              {box.text}
            </div>
          ))}
        </div>
      )}

      {layer.note && (
        <p style={{
          color: "#555", fontSize: "0.8rem", lineHeight: 1.65,
          fontStyle: layer.noteItalic ? "italic" : "normal",
        }}>
          {layer.note}
        </p>
      )}
    </div>
  );
}

export default function ArchitectureLayers() {
  return (
    <section id="architecture" style={{ background: "#050505", padding: "100px 0 96px" }}>
      <div className="wrap">

        <p style={{
          textAlign: "center", fontSize: "0.75rem", fontWeight: 700,
          letterSpacing: "0.16em", textTransform: "uppercase",
          color: "var(--yellow)", fontFamily: "'Space Grotesk', sans-serif", marginBottom: 24,
        }}>
          UNDER THE HOOD
        </p>

        <h2 className="font-display" style={{
          textAlign: "center", fontSize: "clamp(1.875rem, 4vw, 2.5rem)",
          fontWeight: 800, color: "#fff", lineHeight: 1.22,
          letterSpacing: "-0.025em", marginBottom: 56,
        }}>
          6 layers. Fully automated.
          <br />Zero paid APIs.
        </h2>

        <div style={{ maxWidth: 820, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 72px", gap: 0, alignItems: "stretch" }} className="arch-grid">

          {/* Layers column */}
          <div>
            {LAYERS.map((layer, i) => (
              <div key={layer.num}>
                <LayerCard layer={layer} />
                {i < LAYERS.length - 1 && <DownArrow />}
              </div>
            ))}
          </div>

          {/* Feedback arrow column */}
          <div className="feedback-col" style={{
            display: "flex", flexDirection: "column", alignItems: "center",
            paddingTop: "64px", paddingBottom: "30px", position: "relative",
          }}>
            <svg width="12" height="8" viewBox="0 0 12 8">
              <path d="M6 0L0 8h12z" fill="rgba(255,255,255,0.45)" />
            </svg>
            <div style={{ flex: 1, borderLeft: "2px dashed rgba(255,255,255,0.2)", margin: "6px 0" }} />
            <span style={{
              writingMode: "vertical-rl", transform: "rotate(180deg)",
              fontSize: "0.6875rem", color: "#444",
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600,
              letterSpacing: "0.06em", textTransform: "uppercase", textAlign: "center", lineHeight: 1.4,
            }}>
              outcomes feed back · continuous improvement
            </span>
            <div style={{ marginTop: 8, width: 8, height: 8, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.25)" }} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) { .inner-boxes { grid-template-columns: 1fr !important; } }
        @media (max-width: 640px) { .arch-grid { grid-template-columns: 1fr !important; } .feedback-col { display: none !important; } }
      `}</style>
    </section>
  );
}

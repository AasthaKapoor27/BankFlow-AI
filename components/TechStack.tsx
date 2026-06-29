"use client";

const rows = [
  {
    component: "Orchestration",
    tool: "n8n",
    detail: "Agentic workflow engine — visual, self-hostable",
    highlight: false,
  },
  {
    component: "Database",
    tool: "Supabase",
    detail: "PostgreSQL + Realtime webhooks + Row-Level Security",
    highlight: false,
  },
  {
    component: "LLM Engine",
    tool: "Groq · Llama 3.3 70B",
    detail: "Free tier · <1s inference · open-source weights",
    highlight: false,
  },
  {
    component: "Regional Voice",
    tool: "Sarvam AI",
    detail: "TTS + STT · 10 Indian languages · natural speech",
    highlight: false,
  },
  {
    component: "Delivery",
    tool: "Twilio",
    detail: "WhatsApp Business API + Voice calls",
    highlight: false,
  },
  {
    component: "Event Simulator",
    tool: "FastAPI",
    detail: "Python REST API · mocks core banking events for prototype",
    highlight: false,
  },
  {
    component: "Dashboard",
    tool: "Next.js + Tailwind",
    detail: "Deployed on Vercel · real-time via Supabase subscriptions",
    highlight: false,
  },
  {
    component: "Total API Cost",
    tool: "₹0",
    detail: "All open-source or free-tier — by design",
    highlight: true,
  },
];

export default function TechStack() {
  return (
    <section
      id="stack"
      style={{ background: "var(--black)", padding: "100px 0 96px" }}
    >
      <div className="wrap">

        {/* Eyebrow */}
        <p
          style={{
            textAlign: "center",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--yellow)",
            fontFamily: "'Space Grotesk', sans-serif",
            marginBottom: 24,
          }}
        >
          THE STACK
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
            marginBottom: 56,
          }}
        >
          Built entirely on free,
          <br />
          open-source infrastructure.
        </h2>

        {/* Table */}
        <div
          style={{
            maxWidth: 780,
            margin: "0 auto 56px",
            border: "1px solid #FFE600",
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          {/* Header row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.2fr 1.5fr",
              padding: "12px 22px",
              background: "#0D0D0D",
              borderBottom: "1px solid rgba(255,230,0,0.2)",
            }}
            className="stack-row"
          >
            {["Component", "Tool", "Detail"].map((h) => (
              <span
                key={h}
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#555",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {h}
              </span>
            ))}
          </div>

          {/* Data rows */}
          {rows.map((row, i) => (
            <div
              key={row.component}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.2fr 1.5fr",
                padding: "15px 22px",
                background: row.highlight
                  ? "rgba(255,230,0,0.05)"
                  : i % 2 === 0
                  ? "#0D0D0D"
                  : "#000000",
                borderBottom:
                  i < rows.length - 1
                    ? "1px solid rgba(255,255,255,0.05)"
                    : "none",
                alignItems: "center",
                transition: "background 0.15s",
                cursor: "default",
              }}
              className="stack-row"
              onMouseEnter={(e) => {
                if (!row.highlight)
                  (e.currentTarget as HTMLDivElement).style.background =
                    "#111";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  row.highlight
                    ? "rgba(255,230,0,0.05)"
                    : i % 2 === 0
                    ? "#0D0D0D"
                    : "#000000";
              }}
            >
              {/* Component */}
              <span
                style={{
                  color: "#888",
                  fontSize: "0.875rem",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {row.component}
              </span>

              {/* Tool */}
              <span
                className="font-display"
                style={{
                  fontWeight: row.highlight ? 900 : 700,
                  fontSize: row.highlight ? "1.625rem" : "0.9375rem",
                  color: row.highlight ? "#FFE600" : "#fff",
                  textShadow: row.highlight
                    ? "0 0 20px rgba(255,230,0,0.6)"
                    : "none",
                  lineHeight: 1,
                }}
              >
                {row.tool}
              </span>

              {/* Detail */}
              <span
                style={{
                  color: "#444",
                  fontSize: "0.8125rem",
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: 1.5,
                }}
              >
                {row.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <p
          className="font-display"
          style={{
            textAlign: "center",
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.6,
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          This isn't a cost-cutting compromise.
          <br />
          Open-source models mean no customer data leaves Indian
          infrastructure —{" "}
          <span style={{ color: "var(--yellow)" }}>
            critical for RBI compliance.
          </span>
        </p>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stack-row {
            grid-template-columns: 1fr 1fr !important;
          }
          .stack-row > span:last-child {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}

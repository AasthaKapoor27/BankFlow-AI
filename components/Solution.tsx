"use client";

/* ── Data ──────────────────────────────────────────────────────────── */
const agents = [
  {
    id: "engagebot",
    pillar: "PILLAR 03",
    name: "EngageBot",
    tagline: "Listens to every transaction. Acts on every opportunity.",
    accent: "var(--orange)",
    accentRaw: "#FF6B00",
    glowRgba: "rgba(255,107,0,0.18)",

    laymanIcon: "🔔",
    laymanTitle: "What it does in plain English",
    laymanText:
      "When Sunil's last car EMI clears, EngageBot notices within seconds. It understands this means ₹14,000/month just freed up in his life. It sends him a WhatsApp: 'Congratulations on clearing your loan! That ₹14,000 could become ₹32L in 10 years as a SIP. Want to start one?' For older customers like Ramesh who don't use WhatsApp, it makes an actual phone call — in Hindi — using an AI voice that sounds natural. Ramesh hears it, presses 1, and is marked as interested for a human advisor to follow up.",

    techIcon: "⚙️",
    techTitle: "How it's built",
    techBullets: [
      "Supabase Realtime webhook: fires on every new transaction event",
      "Mini Agent 3A — Life Event Classifier: Groq reads raw transaction and returns structured JSON: {event: 'emi_cleared', opportunity: 'sip', urgency: 'high'}",
      "Mini Agent 3B — Channel Router: age ≥ 55 + no app usage = voice call in Hindi; WhatsApp active = WhatsApp message; app active + young = in-app push",
      "Voice path: Groq generates Hindi script → Sarvam AI TTS converts to natural speech → Twilio places real phone call → keypress captured (1=YES, 2=NO)",
      "WhatsApp path: Groq generates message with personalised numbers → Twilio sends",
      "All outcomes logged to Supabase → visible on dashboard instantly",
    ],

    channels: ["AI Voice Call 🎙️", "WhatsApp", "Hindi/Regional", "In-App Push"],
  },
  {
    id: "acquirebot",
    pillar: "PILLAR 01",
    name: "AcquireBot",
    tagline: "Finds leads. Qualifies them. Closes them. While you sleep.",
    accent: "var(--yellow)",
    accentRaw: "#FFE600",
    glowRgba: "rgba(255,230,0,0.18)",

    laymanIcon: "🧑‍💼",
    laymanTitle: "What it does in plain English",
    laymanText:
      "When Karan fills that loan form at 11 PM, AcquireBot wakes up instantly. It reads his profile, decides he's a hot lead, and sends him a personalised WhatsApp message within 60 seconds — referencing exactly the ₹45L loan he explored. If he replies, the AI continues the conversation, answers his questions, and books a callback. If he goes silent, it follows up on day 4 and day 10 automatically.",

    techIcon: "⚙️",
    techTitle: "How it's built",
    techBullets: [
      "Supabase webhook fires the moment a new lead row is inserted",
      "n8n Code node scores lead: income bracket + product interest + source = HOT/WARM/COLD tag",
      "Groq (Llama 3.3 70B) generates personalised message referencing exact product explored",
      "Twilio sends WhatsApp within 60 seconds",
      "n8n Wait node handles 3-touch nurture: Day 1 → Day 4 → Day 10",
      "Reply webhook triggers Groq intent detection: interested / question / not now",
    ],

    channels: ["WhatsApp", "Email", "Auto follow-up"],
  },
  {
    id: "adoptbot",
    pillar: "PILLAR 02",
    name: "AdoptBot",
    tagline: "Finds the gap. Fills it. Every morning.",
    accent: "var(--green)",
    accentRaw: "#00FF88",
    glowRgba: "rgba(0,255,136,0.18)",

    laymanIcon: "📲",
    laymanTitle: "What it does in plain English",
    laymanText:
      "Every morning at 9 AM, AdoptBot silently scans every customer. It finds Priya — ₹80,000 idle, never used investments. It sends her a message that says: 'Your money is earning 3.5%. One tap could make it 12%.' It includes a direct link that opens the banking app on the exact investment screen. No login. No searching. One tap. If she ignores it, the agent waits 48 hours and tries a different angle. After 3 attempts it gives her 30 days of silence before trying again.",

    techIcon: "⚙️",
    techTitle: "How it's built",
    techBullets: [
      "n8n Schedule trigger: runs 9 AM daily",
      "Supabase SELECT query: balance > ₹50K AND has_investment = false AND last_nudge > 30 days",
      "SplitInBatches node: processes customers one by one to avoid API rate limits",
      "Three specialist sub-agents: UPI Agent, Investment Agent, Insurance Agent — each with a different Groq prompt and app deep link",
      "n8n Wait node: 48hr follow-up with social proof message",
      "After 3 touches: sets DO_NOT_DISTURB flag in Supabase for 30 days",
    ],

    channels: ["WhatsApp", "App Deep Link", "In-App Push"],
  },
];

/* ── Component ─────────────────────────────────────────────────────── */
export default function Solution() {
  return (
    <section
      id="agents"
      style={{ background: "#050505", padding: "100px 0 96px" }}
    >
      <div className="wrap">

        {/* ── Eyebrow ──────────────────────────────────────────────── */}
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
          HOW BANKFLOW AI FIXES THIS
        </p>

        {/* ── Heading ──────────────────────────────────────────────── */}
        <h2
          className="font-display"
          style={{
            textAlign: "center",
            fontSize: "clamp(1.875rem, 4vw, 2.5rem)",
            fontWeight: 800,
            color: "var(--white)",
            lineHeight: 1.22,
            letterSpacing: "-0.025em",
            marginBottom: 20,
          }}
        >
          One platform. Three agents.
          <br />
          Every customer covered.
        </h2>

        {/* ── Subheading ───────────────────────────────────────────── */}
        <p
          style={{
            textAlign: "center",
            fontSize: "1rem",
            color: "var(--grey)",
            lineHeight: 1.75,
            maxWidth: 600,
            margin: "0 auto 72px",
          }}
        >
          BankFlow AI runs three autonomous AI agents simultaneously — each
          solving one pillar of the problem. No humans in the loop. No delays.
          No missed opportunities.
        </p>

        {/* ── Agent cards ──────────────────────────────────────────── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {agents.map((agent) => (
            <div
              key={agent.id}
              id={agent.id}
              style={{
                position: "relative",
                background: "var(--black)",
                border: `1px solid ${agent.accentRaw}`,
                borderRadius: 14,
                overflow: "hidden",
                transition: "box-shadow 0.22s ease, transform 0.22s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = `0 0 48px ${agent.glowRgba}, 0 12px 40px rgba(0,0,0,0.55)`;
                el.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Left accent bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 4,
                  height: "100%",
                  background: agent.accent,
                  boxShadow: `0 0 14px ${agent.accentRaw}`,
                  borderRadius: "14px 0 0 14px",
                }}
              />

              {/* Card body */}
              <div style={{ padding: "36px 36px 36px 48px" }}>

                {/* ── Top row: badge + name + tagline ─── */}
                <div style={{ marginBottom: 32 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      flexWrap: "wrap",
                      marginBottom: 12,
                    }}
                  >
                    {/* Pillar badge */}
                    <span
                      style={{
                        display: "inline-block",
                        padding: "4px 14px",
                        borderRadius: 100,
                        background: `${agent.accentRaw}18`,
                        border: `1px solid ${agent.accentRaw}60`,
                        color: agent.accent,
                        fontSize: "0.7rem",
                        fontWeight: 800,
                        letterSpacing: "0.1em",
                        fontFamily: "'Space Grotesk', sans-serif",
                        textTransform: "uppercase",
                      }}
                    >
                      {agent.pillar}
                    </span>

                    {/* Agent name */}
                    <h3
                      className="font-display"
                      style={{
                        fontSize: "1.75rem",
                        fontWeight: 800,
                        color: "var(--white)",
                        letterSpacing: "-0.02em",
                        lineHeight: 1,
                      }}
                    >
                      {agent.name}
                    </h3>
                  </div>

                  {/* Tagline */}
                  <p
                    className="font-display"
                    style={{
                      fontSize: "1.0625rem",
                      fontWeight: 600,
                      color: agent.accent,
                      lineHeight: 1.45,
                      textShadow: `0 0 16px ${agent.accentRaw}60`,
                    }}
                  >
                    {agent.tagline}
                  </p>
                </div>

                {/* ── Two-column grid: layman + technical ─── */}
                <div className="agent-cols" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>

                  {/* Layman explanation box */}
                  <div
                    style={{
                      background: "#141414",
                      borderRadius: 10,
                      padding: "24px 24px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        marginBottom: 16,
                      }}
                    >
                      <span style={{ fontSize: "1.25rem" }}>{agent.laymanIcon}</span>
                      <span
                        className="font-display"
                        style={{
                          fontSize: "0.8125rem",
                          fontWeight: 700,
                          color: "var(--white)",
                          letterSpacing: "0.01em",
                        }}
                      >
                        {agent.laymanTitle}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--white)",
                        lineHeight: 1.8,
                      }}
                    >
                      {agent.laymanText}
                    </p>
                  </div>

                  {/* Technical breakdown box */}
                  <div
                    style={{
                      background: "var(--black)",
                      border: `1px solid ${agent.accentRaw}44`,
                      borderRadius: 10,
                      padding: "24px 24px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        marginBottom: 16,
                      }}
                    >
                      <span style={{ fontSize: "1.25rem" }}>{agent.techIcon}</span>
                      <span
                        className="font-display"
                        style={{
                          fontSize: "0.8125rem",
                          fontWeight: 700,
                          color: agent.accent,
                          letterSpacing: "0.01em",
                        }}
                      >
                        {agent.techTitle}
                      </span>
                    </div>

                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                      {agent.techBullets.map((bullet, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            gap: 10,
                            alignItems: "flex-start",
                          }}
                        >
                          {/* Bullet dot */}
                          <span
                            style={{
                              flexShrink: 0,
                              marginTop: 7,
                              width: 5,
                              height: 5,
                              borderRadius: "50%",
                              background: agent.accent,
                              boxShadow: `0 0 6px ${agent.accentRaw}`,
                              display: "inline-block",
                            }}
                          />
                          <span
                            style={{
                              fontSize: "0.8125rem",
                              color: "var(--grey)",
                              lineHeight: 1.7,
                              fontFamily: "'Inter', sans-serif",
                            }}
                          >
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* ── Channel tags ─────────────────────── */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                    marginTop: 24,
                    paddingTop: 24,
                    borderTop: `1px solid ${agent.accentRaw}20`,
                  }}
                >
                  {agent.channels.map((ch) => (
                    <span
                      key={ch}
                      style={{
                        display: "inline-block",
                        padding: "5px 14px",
                        borderRadius: 100,
                        background: `${agent.accentRaw}10`,
                        border: `1px solid ${agent.accentRaw}40`,
                        color: agent.accent,
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        fontFamily: "'Space Grotesk', sans-serif",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {ch}
                    </span>
                  ))}
                </div>

              </div>{/* end card body */}
            </div>
          ))}
        </div>
      </div>

      {/* Responsive: stack columns on mobile */}
      <style>{`
        @media (max-width: 800px) {
          .agent-cols {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          #agents [style*="padding: 36px 36px 36px 48px"] {
            padding: 28px 20px 28px 28px !important;
          }
        }
      `}</style>
    </section>
  );
}

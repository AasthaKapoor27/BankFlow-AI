"use client";

const cards = [
  {
    emoji: "🔔",
    heading: "Ramesh's pension is credited",
    body: "A 62-year-old retired teacher in Varanasi receives his monthly pension at 9:01 AM. The bank sees this transaction. Does nothing. Ramesh manually moves the money to another bank for a Fixed Deposit.",
    impact: "A massive deposit opportunity lost forever.",
    accent: "var(--orange)",
    glowRgba: "rgba(255, 107, 0, 0.18)",
    glowSoft: "rgba(255, 107, 0, 0.07)",
  },
  {
    emoji: "🚗",
    heading: "Sunil's last EMI clears",
    body: "A 45-year-old customer finally pays off his 5-year car loan. ₹14,000/month just freed up in his life. The bank sees this transaction. Does nothing. He starts spending the extra cash instead of investing it.",
    impact: "A lifetime SIP opportunity ignored.",
    accent: "var(--green)",
    glowRgba: "rgba(0, 255, 136, 0.18)",
    glowSoft: "rgba(0, 255, 136, 0.07)",
  },
  {
    emoji: "💰",
    heading: "Meera's salary just went up",
    body: "A 31-year-old software engineer in Bangalore gets a salary hike. ₹15,000 more lands in her account every month starting this cycle. The bank sees it. Does nothing. She keeps the extra money in her regular savings account earning 3.5%, never moving it anywhere better.",
    impact: "A higher-income customer, ready to invest more — and nobody said a word.",
    accent: "var(--yellow)",
    glowRgba: "rgba(255, 230, 0, 0.18)",
    glowSoft: "rgba(255, 230, 0, 0.07)",
  }
];

export default function Problem() {
  return (
    <section
      id="problem"
      style={{
        background: "var(--black)",
        padding: "100px 0 80px",
      }}
    >
      <div className="wrap">

        {/* ── Eyebrow label ─────────────────────────────────────────── */}
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
          WHY THIS EXISTS
        </p>

        {/* ── Section heading ────────────────────────────────────────── */}
        <h2
          className="font-display"
          style={{
            textAlign: "center",
            fontSize: "clamp(1.875rem, 4.5vw, 3rem)",
            fontWeight: 800,
            color: "var(--white)",
            lineHeight: 1.2,
            letterSpacing: "-0.025em",
            marginBottom: 72,
            maxWidth: 780,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Banks are sitting on goldmines of data.
          <br />
          And doing nothing with it.
        </h2>

        {/* ── Single scenario card ──────────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            maxWidth: 1100,
            margin: "0 auto",
            gap: 24,
          }}
          className="problem-grid"
        >
          {cards.map((card) => (
            <div
              key={card.heading}
              style={{
                background: "var(--black)",
                border: `1px solid ${card.accent}`,
                borderRadius: 12,
                padding: "36px 28px 32px",
                display: "flex",
                flexDirection: "column",
                gap: 0,
                transition: "box-shadow 0.2s ease, transform 0.2s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = `0 0 40px ${card.glowRgba}, 0 8px 32px rgba(0,0,0,0.5)`;
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Emoji */}
              <div
                style={{
                  fontSize: "2.75rem",
                  lineHeight: 1,
                  marginBottom: 28,
                  filter: "drop-shadow(0 0 12px rgba(255,255,255,0.15))",
                }}
              >
                {card.emoji}
              </div>

              {/* Scenario heading */}
              <h3
                className="font-display"
                style={{
                  fontSize: "1.1875rem",
                  fontWeight: 700,
                  color: "var(--white)",
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                  marginBottom: 16,
                }}
              >
                {card.heading}
              </h3>

              {/* Layman body text */}
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--white)",
                  lineHeight: 1.8,
                  flexGrow: 1,
                  marginBottom: 28,
                }}
              >
                {card.body}
              </p>

              {/* Impact line */}
              <div
                style={{
                  paddingTop: 20,
                  borderTop: `1px solid ${card.accent}30`,
                }}
              >
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: card.accent,
                    fontVariant: "small-caps",
                    fontFamily: "'Space Grotesk', sans-serif",
                    letterSpacing: "0.04em",
                    textShadow: `0 0 12px ${card.accent}80`,
                    lineHeight: 1.5,
                  }}
                >
                  {card.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

const cards = [
  {
    emoji: "📋",
    heading: "Ramesh fills a loan form",
    body: "A 62-year-old retired teacher in Varanasi fills a home loan inquiry online at 11 PM. By morning, no one has called him. By afternoon, he applies at another bank.",
    impact: "₹45L loan lost. Because no one followed up.",
    accent: "var(--yellow)",
    glowRgba: "rgba(255, 230, 0, 0.18)",
    glowSoft: "rgba(255, 230, 0, 0.07)",
  },
  {
    emoji: "📱",
    heading: "Priya downloads the banking app",
    body: "A 28-year-old professional in Mumbai downloads the mobile banking app. Uses it once to check her balance. Never comes back. She has ₹80,000 sitting idle earning 3.5% interest.",
    impact: "Zero cross-sell. Because no one nudged her.",
    accent: "var(--green)",
    glowRgba: "rgba(0, 255, 136, 0.18)",
    glowSoft: "rgba(0, 255, 136, 0.07)",
  },
  {
    emoji: "💰",
    heading: "Ankit pays off his car loan",
    body: "A 34-year-old in Pune pays his last car EMI. ₹14,000/month suddenly frees up. The bank sees this transaction. Does nothing. Ankit spends it.",
    impact: "A SIP opportunity missed forever.",
    accent: "var(--orange)",
    glowRgba: "rgba(255, 107, 0, 0.18)",
    glowSoft: "rgba(255, 107, 0, 0.07)",
  },
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

        {/* ── Three scenario cards ──────────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
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

        {/* ── Closing statement ─────────────────────────────────────── */}
        <p
          className="font-display"
          style={{
            textAlign: "center",
            marginTop: 72,
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "var(--white)",
            lineHeight: 1.5,
            maxWidth: 740,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          These aren't edge cases.
          <br />
          This is happening to millions of banking customers every single day.
        </p>
      </div>

      {/* Responsive grid: stack on mobile */}
      <style>{`
        @media (max-width: 860px) {
          .problem-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

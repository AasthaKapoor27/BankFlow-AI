"use client";

const remainingCards = [
  {
    emoji: "📋",
    heading: "Ankit fills a loan form",
    body: "A 34-year-old in Pune fills a home loan inquiry online at 11 PM. By morning, no one has called him. By afternoon, he applies at another bank.",
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
  }
];

export default function SupportingAgents() {
  return (
    <section id="supporting-agents" style={{ background: "var(--black)", padding: "40px 0 100px" }}>
      <div className="wrap">
        
        {/* Bridging Sentence 1 */}
        <p
          className="font-display"
          style={{
            textAlign: "center",
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "var(--white)",
            lineHeight: 1.6,
            maxWidth: 700,
            margin: "0 auto 64px",
          }}
        >
          That 4-second moment is EngageBot in action — but EngageBot doesn't work alone. It's part of a complete customer lifecycle system.
        </p>

        {/* Introduction Text */}
        <p
          style={{
            textAlign: "center",
            fontSize: "1rem",
            color: "var(--grey)",
            lineHeight: 1.75,
            maxWidth: 800,
            margin: "0 auto 48px",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <strong style={{ color: "var(--white)" }}>EngageBot is the core innovation this submission is filed under (Pillar 03: Digital Engagement)</strong> — but it works as part of an integrated 3-agent system. Here's how the other two agents support it.
        </p>

        {/* Remaining Problem Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            maxWidth: 860,
            margin: "0 auto 80px",
          }}
          className="problem-grid-2"
        >
          {remainingCards.map((card) => (
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

        {/* Bridging Sentence to Architecture */}
        <p
          className="font-display"
          style={{
            textAlign: "center",
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "var(--white)",
            lineHeight: 1.6,
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          Here's exactly how that system is built, end to end.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .problem-grid-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

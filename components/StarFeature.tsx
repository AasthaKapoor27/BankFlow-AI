"use client";

export default function StarFeature() {
  return (
    <section id="star-feature" style={{ background: "var(--black)", padding: "40px 0 100px" }}>
      <div className="wrap">
        <div
          style={{
            maxWidth: 780,
            margin: "0 auto",
            background: "#0A0500",
            border: "1px solid var(--orange)",
            borderRadius: 16,
            padding: "48px 56px",
            boxShadow: "0 0 60px rgba(255,107,0,0.15), 0 12px 40px rgba(0,0,0,0.5)",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Accent glow behind content */}
          <div
            style={{
              position: "absolute",
              top: "-50px",
              right: "-50px",
              width: 200,
              height: 200,
              background: "radial-gradient(circle, rgba(255,107,0,0.2) 0%, transparent 70%)",
              zIndex: 0
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{ fontSize: "1.5rem" }}>⭐</span>
              <span
                style={{
                  display: "inline-block",
                  padding: "4px 14px",
                  borderRadius: 100,
                  background: "rgba(255, 107, 0, 0.15)",
                  border: "1px solid var(--orange)",
                  color: "var(--orange)",
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  fontFamily: "'Space Grotesk', sans-serif",
                  textTransform: "uppercase",
                }}
              >
                STAR FEATURE
              </span>
            </div>

            <h3
              className="font-display"
              style={{
                fontSize: "2rem",
                fontWeight: 800,
                color: "var(--white)",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                marginBottom: 24,
              }}
            >
              AI Voice Call Agent
            </h3>

            <p style={{ color: "#ddd", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: 32, fontFamily: "'Inter', sans-serif" }}>
              EngageBot routes every customer through the channel that actually reaches them — voice, WhatsApp, or in-app push — based on real behavior, not guesswork. For customers like Ramesh, who don't use banking apps, that means an actual phone call:
            </p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
              {[
                "Groq generates a script in the customer's native language dynamically.",
                "Sarvam AI TTS converts the text to incredibly natural, regional speech.",
                "Twilio places a real phone call to the customer instantly.",
                "The system captures real-time keypresses (e.g., 1 for YES, 2 for NO) to log intent."
              ].map((bullet, i) => (
                <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span
                    style={{
                      flexShrink: 0,
                      marginTop: 8,
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--orange)",
                      boxShadow: "0 0 8px var(--orange)",
                    }}
                  />
                  <span style={{ fontSize: "0.95rem", color: "var(--grey)", lineHeight: 1.6, fontFamily: "'Inter', sans-serif" }}>
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

            <div style={{ background: "rgba(255,255,255,0.05)", padding: "12px 16px", borderRadius: 8, display: "inline-block" }}>
              <p style={{ fontSize: "0.75rem", color: "#888", fontStyle: "italic", margin: 0, fontFamily: "'Inter', sans-serif" }}>
                * Voice outreach requires explicit customer opt-in at onboarding, with SMS/WhatsApp fallback for non-consented users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "var(--black)",
        overflow: "hidden",
        padding: "120px 24px 80px",
      }}
    >
      {/* Deep purple radial glow behind headline */}
      <div className="hero-glow" />

      {/* Subtle scanline texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, rgba(0,0,0,0.07) 2px, rgba(0,0,0,0.07) 4px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: 900, width: "100%" }}>

        {/* Hackathon badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 40,
            padding: "6px 16px",
            border: "1px solid rgba(255,230,0,0.3)",
            borderRadius: 100,
            background: "rgba(255,230,0,0.04)",
          }}
        >
          <span className="blink" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--yellow)", display: "inline-block" }} />
          <span
            style={{
              fontSize: "0.6875rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--yellow)",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            SBI AI Hackathon · Ideathon · GFF 2026
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(3rem, 10vw, 4.5rem)",
            fontWeight: 800,
            color: "var(--white)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: 12,
          }}
        >
          BankFlow AI
        </h1>

        {/* Tagline in neon yellow */}
        <h2
          className="font-display text-glow-yellow"
          style={{
            fontSize: "clamp(1.5rem, 5vw, 3rem)",
            fontWeight: 700,
            color: "var(--yellow)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            marginBottom: 40,
          }}
        >
          Banks. Automated. Intelligently.
        </h2>

        {/* One-sentence description */}
        <p
          style={{
            fontSize: "1.125rem",
            color: "var(--white)",
            lineHeight: 1.7,
            maxWidth: 700,
            margin: "0 auto 48px",
            fontWeight: 400,
          }}
        >
          An agentic AI platform that{" "}
          <span style={{ color: "var(--yellow)", fontWeight: 600 }}>finds customers</span>,{" "}
          <span style={{ color: "var(--green)", fontWeight: 600 }}>onboards them digitally</span>, and{" "}
          <span style={{ color: "var(--orange)", fontWeight: 600 }}>keeps them engaged</span>{" "}
          — without a single human doing the work.
        </p>

        {/* Stat pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
            marginBottom: 32,
          }}
        >
          {/* Yellow pill */}
          <div
            className="pill"
            style={{ border: "1px solid var(--yellow)", color: "var(--yellow)", boxShadow: "0 0 16px rgba(255,230,0,0.2)" }}
          >
            <span style={{ fontSize: "1rem" }}>◈</span>
            3 AI Agents
          </div>

          {/* Green pill */}
          <div
            className="pill"
            style={{ border: "1px solid var(--green)", color: "var(--green)", boxShadow: "0 0 16px rgba(0,255,136,0.2)" }}
          >
            <span style={{ fontSize: "1rem" }}>◈</span>
            14 Mini-Agents
          </div>

          {/* Blue pill */}
          <div
            className="pill"
            style={{ border: "1px solid var(--blue)", color: "var(--blue)", boxShadow: "0 0 16px rgba(0,180,255,0.2)" }}
          >
            <span>₹</span>
            ₹0 API Cost
          </div>
        </div>

        {/* Small attribution line */}
        <p
          style={{
            fontSize: "0.8125rem",
            color: "var(--grey)",
            letterSpacing: "0.04em",
          }}
        >
          Built for SBI · Powered by open-source AI · Zero vendor lock-in
        </p>

        {/* CTA row */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 48, flexWrap: "wrap" }}>
          <a
            href="#problem"
            style={{
              padding: "13px 32px",
              borderRadius: 8,
              background: "var(--yellow)",
              color: "var(--black)",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "0.9375rem",
              textDecoration: "none",
              boxShadow: "0 0 32px var(--yellow-glow)",
              letterSpacing: "0.02em",
            }}
          >
            See the Idea →
          </a>
          <a
            href="#agents"
            style={{
              padding: "13px 32px",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.15)",
              color: "var(--white)",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "0.9375rem",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Meet the Agents
          </a>
        </div>
      </div>

      {/* Scroll arrow */}
      <div
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          opacity: 0.5,
        }}
      >
        <span style={{ fontSize: "0.6875rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--grey)", fontFamily: "'Space Grotesk', sans-serif" }}>scroll</span>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <path d="M8 0v18M1 12l7 7 7-7" stroke="var(--yellow)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}

"use client";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#000000",
        borderTop: "1px solid #FFE600",
      }}
    >
      {/* Main footer row */}
      <div
        className="wrap"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          alignItems: "center",
          gap: 24,
          padding: "36px 24px",
        }}
      >
        {/* Left */}
        <div>
          <p
            className="font-display"
            style={{
              fontWeight: 800,
              fontSize: "1rem",
              color: "#fff",
              marginBottom: 4,
              letterSpacing: "-0.01em",
            }}
          >
            BankFlow <span style={{ color: "#FFE600" }}>AI</span>
          </p>
          <p
            style={{
              fontSize: "0.8125rem",
              color: "#444",
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1.5,
            }}
          >
            SBI AI Hackathon @ GFF 2026
          </p>
        </div>

        {/* Centre */}
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontSize: "0.8125rem",
              color: "#666",
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1.7,
            }}
          >
            Built solo by{" "}
            <span
              style={{
                color: "#fff",
                fontWeight: 600,
              }}
            >
              Aastha Kapoor
            </span>
            <br />
            B.Tech CSE · Manipal University Jaipur
          </p>
        </div>

        {/* Right */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <a
            href="https://github.com/AasthaKapoor27/BankFlow-AI.git"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "9px 20px",
              border: "1px solid #FFE600",
              borderRadius: 7,
              color: "#FFE600",
              fontSize: "0.875rem",
              fontWeight: 700,
              textDecoration: "none",
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "0.03em",
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#FFE600";
              el.style.color = "#000";
              el.style.boxShadow = "0 0 20px rgba(255,230,0,0.35)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "transparent";
              el.style.color = "#FFE600";
              el.style.boxShadow = "none";
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub ↗
          </a>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          background: "rgba(255,255,255,0.06)",
          margin: "0 24px",
        }}
      />

      {/* Bottom attribution */}
      <div
        className="wrap"
        style={{ padding: "16px 24px", textAlign: "center" }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            color: "#333",
            fontFamily: "'Inter', sans-serif",
            letterSpacing: "0.02em",
          }}
        >
          Powered by Groq · Sarvam AI · n8n · Supabase · Twilio · Next.js
        </p>
      </div>
    </footer>
  );
}

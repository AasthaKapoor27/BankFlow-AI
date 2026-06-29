"use client";

export default function Walkthrough() {
  return (
    <section id="walkthrough" style={{ background: "#050505", padding: "40px 0 80px" }}>
      <div className="wrap">
        <div
          style={{
            maxWidth: 600,
            margin: "0 auto",
            background: "#1A0800",
            borderLeft: "3px solid var(--orange)",
            borderRadius: "0 8px 8px 0",
            padding: "24px 28px",
            boxShadow: "0 8px 32px rgba(255, 107, 0, 0.08)",
          }}
        >
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <span style={{ fontSize: "1.5rem", flexShrink: 0, marginTop: 2 }}>💬</span>
            <p
              style={{
                color: "#ddd",
                fontSize: "1rem",
                lineHeight: 1.8,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              In plain English: Ramesh's pension hits his account at 9:01 AM. EngageBot notices instantly. It knows Ramesh is 62, doesn't use WhatsApp, and prefers Hindi. So instead of a text he'll never see — it calls him. In Hindi. An AI voice that sounds natural tells him about an FD that would earn him ₹7,000 more per year. He presses 1. He's marked as interested. A human advisor follows up. <strong>The whole thing took 4 seconds.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

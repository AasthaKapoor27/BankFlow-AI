"use client";
import { useState, useEffect, useCallback, useRef } from "react";

/* ─────────────────────────────────────────────────────────────────────
   FEED DATA — exact entries from spec, rotated by setInterval
───────────────────────────────────────────────────────────────────── */
const FEED_POOL = [
  {
    id: 0,
    dot: "orange",
    main: "EngageBot → Ramesh Kumar → AI voice call in Hindi · Varanasi",
    sub: "Pension credited · pressed 1 = interested · 9:01 AM",
    badgeText: "answered",
    badgeColor: "green",
  },
  {
    id: 1,
    dot: "yellow",
    main: "AcquireBot → Karan Mehta → WhatsApp sent · replied YES · Pune",
    sub: "Home loan ₹45L · replied in 4 mins · 9:03 AM",
    badgeText: "converted",
    badgeColor: "green",
  },
  {
    id: 2,
    dot: "green",
    main: "AdoptBot → Priya Sharma → SIP nudge · deep link tapped · Mumbai",
    sub: "No investment · ₹80,000 idle · 9:15 AM",
    badgeText: "SIP started",
    badgeColor: "green",
  },
  {
    id: 3,
    dot: "orange",
    main: "EngageBot → Sunita Rao → WhatsApp in Telugu · Hyderabad",
    sub: "EMI cleared · awaiting reply · 9:22 AM",
    badgeText: "awaiting",
    badgeColor: "yellow",
  },
  {
    id: 4,
    dot: "yellow",
    main: "AcquireBot → Vikram Nair → Nurture Day 4 sent · Kochi",
    sub: "Credit card lead · warm tier · 9:30 AM",
    badgeText: "in progress",
    badgeColor: "grey",
  },
  {
    id: 5,
    dot: "red",
    main: "EngageBot → Mohan Das → Voice call answered · Bhopal",
    sub: "EMI cleared · pressed 1 · 9:44 AM",
    badgeText: "interested",
    badgeColor: "green",
  },
];

/* ─────────────────────────────────────────────────────────────────────
   COLOUR HELPERS
───────────────────────────────────────────────────────────────────── */
const DOT: Record<string, string> = {
  yellow: "#FFE600",
  green:  "#00FF88",
  orange: "#FF6B00",
  red:    "#FF2D2D",
  blue:   "#00B4FF",
};

const BADGE: Record<string, { bg: string; color: string }> = {
  green:  { bg: "rgba(0,255,136,0.12)",  color: "#00FF88" },
  yellow: { bg: "rgba(255,230,0,0.12)",  color: "#FFE600" },
  red:    { bg: "rgba(255,45,45,0.12)",  color: "#FF2D2D" },
  grey:   { bg: "rgba(255,255,255,0.07)", color: "#888888" },
  orange: { bg: "rgba(255,107,0,0.12)",  color: "#FF6B00" },
};

/* ─────────────────────────────────────────────────────────────────────
   SHARED SMALL COMPONENTS
───────────────────────────────────────────────────────────────────── */
function MetricCard({
  value, label, sub, glowColor,
}: { value: string; label: string; sub: string; glowColor: string }) {
  return (
    <div
      style={{
        background: "#0D0D0D",
        border: `1px solid ${glowColor}33`,
        borderRadius: 10,
        padding: "22px 20px",
        boxShadow: `0 0 20px ${glowColor}18`,
        transition: "box-shadow 0.2s",
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 36px ${glowColor}40`; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 20px ${glowColor}18`; }}
    >
      <div
        className="font-display mono"
        style={{
          fontSize: "2.5rem",
          fontWeight: 900,
          color: glowColor,
          lineHeight: 1,
          marginBottom: 6,
          textShadow: `0 0 16px ${glowColor}80`,
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#fff", marginBottom: 4 }}>
        {label}
      </div>
      <div style={{ fontSize: "0.75rem", color: "#555" }}>{sub}</div>
    </div>
  );
}

function HBar({
  label, value, max, color,
}: { label: string; value: number; max: number; color: string }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontSize: "0.8125rem", color: "#888" }}>{label}</span>
        <span
          className="font-display"
          style={{ fontSize: "0.8125rem", fontWeight: 700, color }}
        >
          {value}
        </span>
      </div>
      <div
        style={{
          height: 8,
          borderRadius: 4,
          background: "rgba(255,255,255,0.05)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${(value / max) * 100}%`,
            height: "100%",
            borderRadius: 4,
            background: color,
            boxShadow: `0 0 8px ${color}80`,
            transition: "width 1s cubic-bezier(.4,0,.2,1)",
          }}
        />
      </div>
    </div>
  );
}

function CustomerRow({
  name, detail, badgeText, badgeColor,
}: { name: string; detail: string; badgeText: string; badgeColor: string }) {
  const b = BADGE[badgeColor] || BADGE.grey;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 14px",
        borderRadius: 8,
        background: "#0A0A0A",
        border: "1px solid rgba(255,255,255,0.06)",
        marginBottom: 8,
        gap: 12,
        flexWrap: "wrap",
      }}
    >
      <div>
        <div style={{ fontWeight: 600, fontSize: "0.875rem", marginBottom: 3 }}>{name}</div>
        <div style={{ color: "#555", fontSize: "0.75rem" }}>{detail}</div>
      </div>
      <span
        style={{
          padding: "3px 12px",
          borderRadius: 100,
          fontSize: "0.7rem",
          fontWeight: 700,
          fontFamily: "'Space Grotesk', sans-serif",
          letterSpacing: "0.04em",
          background: b.bg,
          color: b.color,
          flexShrink: 0,
        }}
      >
        {badgeText}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   OVERVIEW TAB
───────────────────────────────────────────────────────────────────── */
function OverviewTab() {
  // Pinned item (Ramesh)
  const pinnedItem = { ...FEED_POOL[0], uid: "pinned" };
  // The rotating pool (everything except Ramesh)
  const rotatingPool = FEED_POOL.slice(1);
  
  // Feed state — starts with the 5 rotating entries
  const [feed, setFeed] = useState(
    rotatingPool.map((e, i) => ({ ...e, uid: i }))
  );
  const poolIdx = useRef(5);

  const addEntry = useCallback(() => {
    const next = rotatingPool[poolIdx.current % rotatingPool.length];
    poolIdx.current += 1;
    setFeed((prev) =>
      [{ ...next, uid: Date.now() }, ...prev].slice(0, 5)
    );
  }, []);

  useEffect(() => {
    const t = setInterval(addEntry, 3000);
    return () => clearInterval(t);
  }, [addEntry]);

  // Combine pinned item with the rotating feed
  const displayFeed = [pinnedItem, ...feed];

  return (
    <>
      {/* Metric cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 14,
          marginBottom: 32,
        }}
      >
        <MetricCard value="247"  label="Total actions today"  sub="across all 3 agents"      glowColor="#FFE600" />
        <MetricCard value="38"   label="Conversions"           sub="15.4% conversion rate"    glowColor="#00FF88" />
        <MetricCard value="12"   label="Voice calls placed"    sub="8 answered · 4 missed"    glowColor="#FF2D2D" />
        <MetricCard value="₹0"   label="API Cost Today"        sub="all free tier"             glowColor="#00B4FF" />
      </div>
      <div style={{ textAlign: "center", marginTop: 12, marginBottom: 32 }}>
        <p style={{ fontSize: "0.75rem", color: "#888", fontStyle: "italic", fontFamily: "'Inter', sans-serif", margin: 0 }}>
          * Illustrative data — demonstrates dashboard behavior at scale
        </p>
      </div>

      {/* Feed heading */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            className="blink"
            style={{ width: 8, height: 8, borderRadius: "50%", background: "#00FF88", display: "inline-block", flexShrink: 0 }}
          />
          <span
            style={{
              fontSize: "0.6875rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontVariant: "small-caps",
              color: "#fff",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Live Agent Feed
          </span>
        </div>
      </div>

      {/* Feed entries */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {displayFeed.map((entry, i) => {
          const b = BADGE[entry.badgeColor] || BADGE.grey;
          return (
            <div
              key={entry.uid}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                padding: "12px 14px",
                borderRadius: 8,
                background: "#0A0A0A",
                border: "1px solid rgba(255,255,255,0.06)",
                animation: i === 0 ? "feedSlideIn 0.35s ease-out" : "none",
                transition: "opacity 0.4s",
              }}
            >
              {/* Dot */}
              <span
                style={{
                  flexShrink: 0,
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  background: DOT[entry.dot],
                  boxShadow: `0 0 8px ${DOT[entry.dot]}`,
                  marginTop: 6,
                  display: "inline-block",
                }}
              />

              {/* Text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: "#fff",
                    lineHeight: 1.5,
                    marginBottom: 3,
                    wordBreak: "break-word",
                  }}
                >
                  {entry.main}
                </div>
                <div style={{ fontSize: "0.75rem", color: "#555", lineHeight: 1.5 }}>
                  {entry.sub}
                </div>
              </div>

              {/* Badge */}
              <span
                style={{
                  flexShrink: 0,
                  padding: "3px 10px",
                  borderRadius: 100,
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: "0.04em",
                  background: b.bg,
                  color: b.color,
                  whiteSpace: "nowrap",
                }}
              >
                {entry.badgeText}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   ACQUIREBOT TAB
───────────────────────────────────────────────────────────────────── */
function AcquireTab() {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
          gap: 14,
          marginBottom: 28,
        }}
      >
        <MetricCard value="34" label="New Leads"  sub="today"              glowColor="#FFE600" />
        <MetricCard value="11" label="Hot"         sub="ready to convert"  glowColor="#FF2D2D" />
        <MetricCard value="29" label="Contacted"   sub="WhatsApp / email"  glowColor="#FF6B00" />
        <MetricCard value="8"  label="Converted"   sub="23.5% of hot"      glowColor="#00FF88" />
      </div>

      {/* Funnel */}
      <div
        style={{
          background: "#0A0A0A",
          border: "1px solid rgba(255,230,0,0.15)",
          borderRadius: 10,
          padding: "20px 22px",
          marginBottom: 24,
        }}
      >
        <p
          style={{
            fontSize: "0.6875rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#555",
            fontFamily: "'Space Grotesk', sans-serif",
            marginBottom: 18,
          }}
        >
          Conversion Funnel
        </p>
        <HBar label="Leads in"   value={34} max={34} color="#FFE600" />
        <HBar label="Contacted"  value={29} max={34} color="#FFB300" />
        <HBar label="Replied"    value={16} max={34} color="#FF8800" />
        <HBar label="Converted"  value={8}  max={34} color="#00FF88" />
      </div>

      {/* Customer list */}
      <p
        style={{
          fontSize: "0.6875rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#555",
          fontFamily: "'Space Grotesk', sans-serif",
          marginBottom: 12,
        }}
      >
        Recent Leads
      </p>
      <CustomerRow name="Priya Sharma"  detail="Home loan · Mumbai"         badgeText="converted"       badgeColor="green"  />
      <CustomerRow name="Vikram Nair"   detail="Credit card · Kochi"         badgeText="nurture d4"      badgeColor="yellow" />
      <CustomerRow name="Meera Tiwari"  detail="FD inquiry · Jaipur"         badgeText="hot · awaiting"  badgeColor="red"    />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   ADOPTBOT TAB
───────────────────────────────────────────────────────────────────── */
function AdoptTab() {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
          gap: 14,
          marginBottom: 28,
        }}
      >
        <MetricCard value="1,240" label="Scanned"  sub="customers today"   glowColor="#00FF88" />
        <MetricCard value="183"   label="Gaps"      sub="found"             glowColor="#FF6B00" />
        <MetricCard value="183"   label="Nudged"    sub="messages sent"     glowColor="#FFE600" />
        <MetricCard value="22"    label="Adopted"   sub="12% success rate"  glowColor="#00FF88" />
      </div>

      {/* Gap breakdown */}
      <div
        style={{
          background: "#0A0A0A",
          border: "1px solid rgba(0,255,136,0.15)",
          borderRadius: 10,
          padding: "20px 22px",
          marginBottom: 24,
        }}
      >
        <p
          style={{
            fontSize: "0.6875rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#555",
            fontFamily: "'Space Grotesk', sans-serif",
            marginBottom: 18,
          }}
        >
          Gap Breakdown
        </p>
        <HBar label="No investment"  value={89} max={183} color="#00FF88" />
        <HBar label="No UPI"         value={59} max={183} color="#FFE600" />
        <HBar label="No insurance"   value={35} max={183} color="#FF6B00" />
      </div>

      {/* Recent nudges */}
      <p
        style={{
          fontSize: "0.6875rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#555",
          fontFamily: "'Space Grotesk', sans-serif",
          marginBottom: 12,
        }}
      >
        Recent Nudges
      </p>
      <CustomerRow name="Karan Mehta"   detail="No investment · ₹1.2L idle"    badgeText="SIP started" badgeColor="green"  />
      <CustomerRow name="Kavya Pillai"  detail="No UPI · Chennai"               badgeText="link sent"   badgeColor="yellow" />
      <CustomerRow name="Rahul Sinha"   detail="No insurance · 3 dependants"    badgeText="follow-up d2" badgeColor="grey"  />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   ENGAGEBOT TAB
───────────────────────────────────────────────────────────────────── */
function EngageTab() {
  const calls = [
    {
      name: "Ramesh Kumar · Varanasi",
      badge: "answered · pressed 1",
      badgeColor: "green",
      detail: "Pension credited → FD suggestion · Hindi · 9:01 AM",
      script: "नमस्ते रमेश जी, आपकी पेंशन आ गई है...",
    },
    {
      name: "Geeta Devi · Lucknow",
      badge: "no answer",
      badgeColor: "red",
      detail: "Salary hike → SIP suggestion · Hindi · retry at 2 PM",
      script: null,
    },
    {
      name: "Mohan Das · Bhopal",
      badge: "answered · pressed 1",
      badgeColor: "green",
      detail: "EMI cleared → investment offer · Hindi · 9:44 AM",
      script: null,
    },
  ];

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
          gap: 14,
          marginBottom: 28,
        }}
      >
        <MetricCard value="30" label="Events"       sub="detected today"    glowColor="#FF6B00" />
        <MetricCard value="12" label="Voice Calls"  sub="placed via Twilio" glowColor="#FF2D2D" />
        <MetricCard value="15" label="WhatsApp"     sub="messages sent"     glowColor="#00FF88" />
        <MetricCard value="3"  label="In-App"       sub="push notifications" glowColor="#00B4FF" />
      </div>

      <p
        style={{
          fontSize: "0.6875rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#555",
          fontFamily: "'Space Grotesk', sans-serif",
          marginBottom: 14,
        }}
      >
        AI Voice Call Log — Sarvam TTS
      </p>

      {calls.map((c) => {
        const b = BADGE[c.badgeColor] || BADGE.grey;
        return (
          <div
            key={c.name}
            style={{
              background: "#0A0A0A",
              border: "1px solid rgba(255,255,255,0.06)",
              borderLeft: "3px solid #FF6B00",
              borderRadius: 8,
              padding: "16px 18px",
              marginBottom: 10,
              boxShadow: "0 0 16px rgba(255,107,0,0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                marginBottom: c.detail || c.script ? 10 : 0,
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: "1rem" }}>📞</span>
                <span style={{ fontWeight: 700, fontSize: "0.875rem" }}>{c.name}</span>
              </div>
              <span
                style={{
                  padding: "3px 12px",
                  borderRadius: 100,
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: "0.04em",
                  background: b.bg,
                  color: b.color,
                  flexShrink: 0,
                }}
              >
                {c.badge}
              </span>
            </div>

            {c.detail && (
              <p style={{ color: "#555", fontSize: "0.8rem", marginBottom: c.script ? 8 : 0, lineHeight: 1.5 }}>
                {c.detail}
              </p>
            )}
            {c.script && (
              <p style={{ color: "#666", fontSize: "0.8125rem", fontStyle: "italic", lineHeight: 1.6 }}>
                {c.script}
              </p>
            )}
          </div>
        );
      })}
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   TABS CONFIG
───────────────────────────────────────────────────────────────────── */
const TABS = [
  { key: "overview",   label: "Overview",   color: "#FFE600", textColor: "#000" },
  { key: "acquirebot", label: "AcquireBot", color: "#FFE600", textColor: "#000" },
  { key: "adoptbot",   label: "AdoptBot",   color: "#00FF88", textColor: "#000" },
  { key: "engagebot",  label: "EngageBot",  color: "#FF6B00", textColor: "#000" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

/* ─────────────────────────────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────────────────────────────── */
export default function Dashboard() {
  const [active, setActive] = useState<TabKey>("overview");

  return (
    <section
      id="dashboard"
      style={{ background: "var(--black)", padding: "100px 0 96px" }}
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
          WHAT THE BANK SEES
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
          A live command centre for
          <br />
          every AI action.
        </h2>

        {/* ── Subheading ───────────────────────────────────────────── */}
        <p
          style={{
            textAlign: "center",
            fontSize: "1rem",
            color: "var(--grey)",
            lineHeight: 1.75,
            maxWidth: 580,
            margin: "0 auto 56px",
          }}
        >
          This is the operator dashboard — a real-time view of everything
          BankFlow AI is doing across all three agents, all customers, all
          channels.
        </p>

        {/* ── Dashboard shell ───────────────────────────────────────── */}
        <div
          style={{
            background: "#000",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 16,
            overflow: "hidden",
            boxShadow:
              "0 0 60px rgba(255,230,0,0.05), 0 32px 80px rgba(0,0,0,0.7)",
          }}
        >
          {/* Titlebar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "13px 20px",
              background: "#0A0A0A",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#FF2D2D", display: "inline-block" }} />
              <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#FFE600", display: "inline-block" }} />
              <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#00FF88", display: "inline-block" }} />
              <span
                style={{
                  marginLeft: 12,
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "#444",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                BankFlow AI — Operator Dashboard
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span
                className="blink"
                style={{ width: 7, height: 7, borderRadius: "50%", background: "#00FF88", display: "inline-block" }}
              />
              <span
                style={{
                  color: "#00FF88",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: "0.08em",
                }}
              >
                LIVE
              </span>
            </div>
          </div>

          {/* Tab row */}
          <div
            style={{
              display: "flex",
              gap: 6,
              padding: "12px 16px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              flexWrap: "wrap",
            }}
          >
            {TABS.map((tab) => {
              const isActive = active === tab.key;
              return (
                <button
                  key={tab.key}
                  id={`dashboard-tab-${tab.key}`}
                  onClick={() => setActive(tab.key)}
                  style={{
                    padding: "8px 18px",
                    borderRadius: 6,
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                    transition: "all 0.15s ease",
                    background: isActive ? tab.color : "#1A1A1A",
                    color: isActive ? tab.textColor : "#888",
                    boxShadow: isActive ? `0 0 16px ${tab.color}50` : "none",
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab panel */}
          <div style={{ padding: "24px 24px 28px" }}>
            {active === "overview"   && <OverviewTab />}
            {active === "acquirebot" && <AcquireTab />}
            {active === "adoptbot"   && <AdoptTab />}
            {active === "engagebot"  && <EngageTab />}
          </div>
        </div>
      </div>

      {/* Feed slide-in keyframe */}
      <style>{`
        @keyframes feedSlideIn {
          from { opacity: 0; transform: translateY(-14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

"use client";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [solutionOpen, setSolutionOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSolutionOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownOptions = [
    { href: "#architecture", title: "Architecture", sub: "System design" },
    { href: "#how-it-works", title: "How It Works", sub: "Agent workflows" },
    { href: "#agents", title: "The Agents", sub: "What each agent does" },
  ];

  const handleDropdownItemClick = () => {
    setSolutionOpen(false);
    setOpen(false); // Close mobile menu too if open
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, 
        left: 0, 
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(0,0,0,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div className="main-container" style={{ padding: "0 48px", margin: "0 auto", maxWidth: 1280 }}>
        {/* We use a flex container inside to align items. The outer container handles the max-width and padding via class, but we inline it here since it's position fixed. Wait, I'll just use inline styles to enforce it. */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 0" }}>
          {/* Logo */}
          <a href="#hero" style={{ textDecoration: "none" }}>
            <span className="font-display" style={{ fontSize: "1.125rem", fontWeight: 800, letterSpacing: "-0.01em" }}>
              BankFlow <span style={{ color: "var(--yellow)" }}>AI</span>
            </span>
          </a>

          {/* Desktop links */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }} className="hidden-mobile">
            <a href="#problem" className="nav-link">Problem</a>
            
            {/* Dropdown Container */}
            <div 
              style={{ position: "relative" }} 
              ref={dropdownRef}
              onMouseEnter={() => setSolutionOpen(true)}
              onMouseLeave={() => setSolutionOpen(false)}
            >
              <button 
                className="nav-link"
                onClick={() => setSolutionOpen(!solutionOpen)}
                style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}
              >
                Solution ▾
              </button>

              {/* Desktop Dropdown Menu */}
              {solutionOpen && (
                <div style={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  marginTop: 8,
                  background: "#000000",
                  border: "1px solid #FFE600",
                  borderTop: "3px solid #FFE600",
                  borderRadius: 4,
                  width: 220,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden"
                }}>
                  {dropdownOptions.map((opt) => (
                    <a
                      key={opt.href}
                      href={opt.href}
                      onClick={handleDropdownItemClick}
                      className="dropdown-item"
                      style={{
                        padding: "12px 16px",
                        textDecoration: "none",
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                        display: "flex",
                        flexDirection: "column",
                        gap: 2
                      }}
                    >
                      <span style={{ fontSize: "14px", fontWeight: 600, fontFamily: "'Inter', sans-serif" }} className="dd-title">{opt.title}</span>
                      <span style={{ fontSize: "11px", color: "#666", fontFamily: "'Inter', sans-serif" }}>{opt.sub}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#dashboard" className="nav-link">Dashboard</a>
            <a href="#stack" className="nav-link">Stack</a>
          </div>

          {/* CTA */}
          <a
            href="#agents"
            className="hidden-mobile"
            style={{
              padding: "8px 20px",
              borderRadius: 6,
              fontSize: "0.8125rem",
              fontWeight: 700,
              background: "var(--yellow)",
              color: "var(--black)",
              textDecoration: "none",
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "0.02em",
              boxShadow: "0 0 16px var(--yellow-glow)",
              transition: "box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px var(--yellow-glow)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 0 16px var(--yellow-glow)")}
          >
            See the Agents →
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--white)", padding: 4 }}
            className="show-mobile"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 18L18 6M6 6l12 12"/> : <path d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "rgba(0,0,0,0.98)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "8px 0 16px" }}>
          <a href="#problem" onClick={() => setOpen(false)} className="mobile-nav-link">Problem</a>
          
          {/* Mobile Accordion for Solution */}
          <div style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            <button 
              onClick={() => setSolutionOpen(!solutionOpen)}
              style={{ 
                width: "100%", 
                textAlign: "left", 
                background: "none", 
                border: "none", 
                padding: "12px 24px", 
                color: "var(--grey)", 
                fontSize: "0.9rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              Solution <span>{solutionOpen ? "▴" : "▾"}</span>
            </button>
            {solutionOpen && (
              <div style={{ background: "#050505", padding: "8px 0" }}>
                {dropdownOptions.map((opt) => (
                  <a
                    key={opt.href}
                    href={opt.href}
                    onClick={handleDropdownItemClick}
                    style={{
                      display: "block",
                      padding: "10px 24px 10px 40px",
                      textDecoration: "none",
                    }}
                  >
                    <div style={{ color: "#fff", fontSize: "14px", fontWeight: 500 }}>{opt.title}</div>
                    <div style={{ color: "#666", fontSize: "11px" }}>{opt.sub}</div>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#dashboard" onClick={() => setOpen(false)} className="mobile-nav-link">Dashboard</a>
          <a href="#stack" onClick={() => setOpen(false)} className="mobile-nav-link">Stack</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } }
        @media (min-width: 769px) { .show-mobile { display: none !important; } }
        
        @media (max-width: 768px) {
          nav .main-container { padding: 0 20px !important; }
        }

        .nav-link {
          padding: 7px 14px;
          border-radius: 6px;
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--grey);
          text-decoration: none;
          transition: color 0.15s;
          font-family: 'Inter', sans-serif;
        }
        .nav-link:hover { color: var(--white); }
        
        .dropdown-item {
          color: #fff;
          transition: all 0.15s;
        }
        .dropdown-item:hover {
          background: #000;
        }
        .dropdown-item:hover .dd-title {
          color: var(--yellow);
        }
        .dropdown-item:last-child {
          border-bottom: none !important;
        }

        .mobile-nav-link {
          display: block;
          padding: 12px 24px;
          color: var(--grey);
          text-decoration: none;
          font-size: 0.9rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
      `}</style>
    </nav>
  );
}

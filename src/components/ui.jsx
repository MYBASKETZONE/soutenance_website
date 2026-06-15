import React, { useState, useEffect, useRef } from "react";

/* ============================================================
   Icons
   ============================================================ */
export const Icon = {
  Search: (p) => (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      {...p}
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.2-3.2" strokeLinecap="round" />
    </svg>
  ),
  Bag: (p) => (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      {...p}
    >
      <path d="M6 8h12l-1 12H7L6 8Z" strokeLinejoin="round" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
    </svg>
  ),
  User: (p) => (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      {...p}
    >
      <circle cx="12" cy="8" r="3.4" />
      <path d="M5 20c0-3.6 3.1-5.5 7-5.5s7 1.9 7 5.5" strokeLinecap="round" />
    </svg>
  ),
  Arrow: (p) => (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...p}
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Plus: (p) => (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...p}
    >
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  ),
  Minus: (p) => (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...p}
    >
      <path d="M5 12h14" strokeLinecap="round" />
    </svg>
  ),
  Close: (p) => (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...p}
    >
      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  ),
  Check: (p) => (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      {...p}
    >
      <path
        d="M5 12.5 10 17l9-10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Whatsapp: (p) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...p}>
      <path d="M17.5 14.4c-.3-.15-1.7-.84-2-.94-.26-.1-.45-.15-.64.15-.2.3-.74.93-.9 1.12-.17.2-.34.22-.63.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.45.13-.6.13-.13.3-.34.44-.5.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49l-.55-.01c-.2 0-.5.07-.76.37-.26.3-1 .98-1 2.38s1.02 2.76 1.17 2.95c.15.2 2.02 3.08 4.9 4.32.68.3 1.22.47 1.63.6.69.22 1.31.19 1.8.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.2-.55-.34Z" />
      <path d="M12 2a10 10 0 0 0-8.6 15.07L2 22l5.05-1.32A10 10 0 1 0 12 2Zm0 18.2a8.18 8.18 0 0 1-4.18-1.14l-.3-.18-3 .78.8-2.92-.2-.3A8.2 8.2 0 1 1 12 20.2Z" />
    </svg>
  ),
  Star: (p) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...p}>
      <path d="M12 2c.4 6 2 7.6 8 8-6 .4-7.6 2-8 8-.4-6-2-7.6-8-8 6-.4 7.6-2 8-8Z" />
    </svg>
  ),
  Spark: (p) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" {...p}>
      <path d="M12 0c.6 8.7 3.3 11.4 12 12-8.7.6-11.4 3.3-12 12-.6-8.7-3.3-11.4-12-12C8.7 11.4 11.4 8.7 12 0Z" />
    </svg>
  ),
};

/* ============================================================
   Reveal on scroll
   ============================================================ */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal], .clip-up");
    const reveal = (el) => el.classList.add("is-in");
    if (!("IntersectionObserver" in window)) {
      els.forEach(reveal);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    // Failsafe: if IO never fires (background iframe, print, capture), reveal anyway.
    const safety = setTimeout(() => els.forEach(reveal), 1600);
    return () => {
      io.disconnect();
      clearTimeout(safety);
    };
  });
}

/* ============================================================
   Magnetic button wrapper
   ============================================================ */
export function Magnetic({
  children,
  strength = 0.3,
  className = "",
  ...rest
}) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * strength;
    const y = (e.clientY - r.top - r.height / 2) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return (
    <span
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{
        display: "inline-flex",
        transition: "transform 0.5s var(--ease)",
      }}
      {...rest}
    >
      {children}
    </span>
  );
}

/* ============================================================
   Countdown to deadline (17 June 2026, 23:59 local)
   ============================================================ */
export const DEADLINE = new Date("2026-06-18T23:59:59");

export function useCountdown(target = DEADLINE) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    return { d, h, m, s, done: diff === 0 };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

export const pad = (n) => String(n).padStart(2, "0");

/* Big countdown block */
export function CountdownGrid({ light }) {
  const { d, h, m, s } = useCountdown();
  const items = [
    [d, "Jours"],
    [h, "Heures"],
    [m, "Minutes"],
    [s, "Secondes"],
  ];
  return (
    <div className="cd-grid">
      {items.map(([v, label], i) => (
        <React.Fragment key={label}>
          <div className="cd-cell">
            <div
              className="cd-num"
              style={{ color: light ? "var(--paper)" : "var(--ink)" }}
            >
              {pad(v)}
            </div>
            <div
              className="cd-label"
              style={{
                color: light ? "rgba(244,242,239,.55)" : "var(--muted)",
              }}
            >
              {label}
            </div>
          </div>
          {i < 3 && (
            <div className="cd-colon" style={{ color: "var(--signal)" }}>
              :
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

/* Small inline countdown chip */
export function CountdownChip() {
  const { d, h, m, s } = useCountdown();
  return (
    <span className="cd-chip">
      <span className="dot" />
      <span>Clôture dans</span>
      <b>
        {d}j {pad(h)}:{pad(m)}:{pad(s)}
      </b>
    </span>
  );
}

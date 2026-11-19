import { type CSSProperties, type ReactNode, useEffect, useMemo, useState } from "react";

const LAUNCH_AT = new Date("2026-11-19T11:00:00+05:30").getTime();
const BLAST_DURATION_MS = 2200;
const FLOWERS = ["🌸", "🌼", "🌺", "🌷", "💮"] as const;

type Phase = "countdown" | "blast" | "open";

type Countdown = {
  hours: string;
  minutes: string;
  seconds: string;
};

function remainingParts(now: number): Countdown {
  const remaining = Math.max(0, LAUNCH_AT - now);
  const totalSeconds = Math.floor(remaining / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return {
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

function FlowerRain() {
  return (
    <div className="site-flower-rain" aria-hidden="true">
      {Array.from({ length: 22 }).map((_, index) => (
        <span
          key={index}
          className="site-falling-flower"
          style={{
            "--flower-left": `${(index * 37) % 101}%`,
            "--flower-delay": `${-((index * 1.37) % 12)}s`,
            "--flower-duration": `${8 + (index % 7) * 0.9}s`,
            "--flower-drift": `${-55 + (index % 11) * 11}px`,
            "--flower-size": `${18 + (index % 5) * 4}px`,
            "--flower-spin": `${220 + (index % 6) * 55}deg`,
          } as CSSProperties}
        >
          {FLOWERS[index % FLOWERS.length]}
        </span>
      ))}
    </div>
  );
}

export function LaunchGate({ children }: { children: ReactNode }) {
  const initialNow = Date.now();
  const [phase, setPhase] = useState<Phase>(initialNow < LAUNCH_AT ? "countdown" : "open");
  const [now, setNow] = useState(initialNow);
  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    if (phase !== "countdown") return;

    const tick = () => {
      const current = Date.now();
      setNow(current);
      if (current >= LAUNCH_AT) {
        setPhase("blast");
      }
    };

    tick();
    const timer = window.setInterval(tick, 250);
    return () => window.clearInterval(timer);
  }, [phase]);

  useEffect(() => {
    if (phase !== "blast") return;
    const timer = window.setTimeout(() => setPhase("open"), BLAST_DURATION_MS);
    return () => window.clearTimeout(timer);
  }, [phase]);

  const countdown = useMemo(() => remainingParts(now), [now]);

  if (phase === "open") {
    return (
      <>
        {children}
        <FlowerRain />
      </>
    );
  }

  return (
    <div className={`launch-gate ${phase === "blast" ? "launch-gate-blast" : ""}`}>
      <div className="launch-grid" aria-hidden="true" />
      <div className="launch-glow launch-glow-one" aria-hidden="true" />
      <div className="launch-glow launch-glow-two" aria-hidden="true" />

      <div className="launch-content" aria-live="polite">
        <div className="launch-logo-wrap">
          <img src={`${base}images/surya-logo.png`} alt="Surya Survey Solutions" className="launch-logo" />
        </div>
        <p className="launch-eyebrow">SURYA SURVEY SOLUTIONS</p>
        <h1 className="launch-title">Precision is about to begin.</h1>
        <p className="launch-subtitle">Official website launch · 19 November 2026 · 11:00 AM IST</p>

        {phase === "countdown" ? (
          <div className="launch-clock" aria-label={`${countdown.hours} hours, ${countdown.minutes} minutes, ${countdown.seconds} seconds remaining`}>
            <div className="launch-time-unit"><strong>{countdown.hours}</strong><span>Hours</span></div>
            <span className="launch-colon" aria-hidden="true">:</span>
            <div className="launch-time-unit"><strong>{countdown.minutes}</strong><span>Minutes</span></div>
            <span className="launch-colon" aria-hidden="true">:</span>
            <div className="launch-time-unit"><strong>{countdown.seconds}</strong><span>Seconds</span></div>
          </div>
        ) : (
          <div className="launch-now">WE ARE LIVE</div>
        )}

        <p className="launch-note">The website will open automatically when the countdown reaches zero.</p>
      </div>

      {phase === "blast" && (
        <div className="launch-flower-burst" aria-hidden="true">
          <div className="launch-flower-flash" />
          <div className="launch-flower-ring launch-flower-ring-a" />
          <div className="launch-flower-ring launch-flower-ring-b" />
          {Array.from({ length: 52 }).map((_, index) => (
            <span
              key={index}
              className="launch-flower-particle"
              style={{
                "--particle-angle": `${(360 / 52) * index}deg`,
                "--particle-distance": `${190 + (index % 8) * 34}px`,
                "--particle-delay": `${(index % 9) * 22}ms`,
                "--particle-size": `${19 + (index % 5) * 5}px`,
                "--particle-spin": `${180 + (index % 7) * 80}deg`,
              } as CSSProperties}
            >
              {FLOWERS[index % FLOWERS.length]}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

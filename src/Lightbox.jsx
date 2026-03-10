import { useEffect, useRef, useState } from "react";
import { lb } from "./birthdayStyles";

// ─── Floating hearts inside lightbox ─────────────────────────────────────────
const LightboxHearts = () => {
  const [lh, setLh] = useState([]);
  useEffect(() => {
    const iv = setInterval(() => {
      setLh(p => [...p.slice(-25), {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        emoji: ["❤️","💕","🎂","✨","🥳","💖"][Math.floor(Math.random() * 6)],
        size: Math.random() * 14 + 14,
        dur: Math.random() * 2 + 2,
      }]);
    }, 400);
    return () => clearInterval(iv);
  }, []);
  return (
    <>
      {lh.map(h => (
        <div key={h.id} style={{
          position: "fixed", bottom: 0, left: `${h.left}%`,
          fontSize: h.size, pointerEvents: "none", zIndex: 1000,
          animation: `lbHeart ${h.dur}s ease-out forwards`,
        }}>{h.emoji}</div>
      ))}
    </>
  );
};

// ─── Lightbox ─────────────────────────────────────────────────────────────────
export default function Lightbox({ memory, onClose, onPrev, onNext, total, index, bgAudioRef }) {
  const photoAudioRef = useRef(null);

  // On mount: pause bg music, start photo song
  useEffect(() => {
    const audioBg = bgAudioRef.current;
    const audio = photoAudioRef.current;
    if (audioBg) audioBg.pause();
    if (audio) {
      audio.src = memory.song;
      audio.volume = 0.7;
      audio.loop = true;
      audio.play().catch(() => {});
    }
    return () => {
      if (audio) { audio.pause(); audio.src = ""; }
      if (audioBg) { audioBg.volume = 0.5; audioBg.play().catch(() => {}); }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // When navigating to a different photo, swap the song
  useEffect(() => {
    const audio = photoAudioRef.current;
    if (audio) {
      audio.pause();
      audio.src = memory.song;
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }
  }, [memory.song]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = e => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNext, onPrev]);

  return (
    <div style={lb.overlay} onClick={onClose}>
      <audio ref={photoAudioRef} loop preload="auto" />
      <LightboxHearts />

      {/* Colour glow matching photo */}
      <div style={{
        ...lb.bgGlow,
        background: `radial-gradient(ellipse 70% 70% at 50% 50%, ${memory.color.replace("0.3","0.4")} 0%, transparent 70%)`,
      }} />

      <div style={lb.card} onClick={e => e.stopPropagation()}>
        <button style={lb.closeBtn} onClick={onClose}>✕</button>
        <button style={lb.arrowL} onClick={e => { e.stopPropagation(); onPrev(); }}>‹</button>
        <button style={lb.arrowR} onClick={e => { e.stopPropagation(); onNext(); }}>›</button>

        <div style={lb.photoWrap}>
          <div style={{ ...lb.photoGlow, background: `radial-gradient(circle, ${memory.color} 0%, transparent 70%)` }} />
          <img src={memory.src} alt={memory.caption} style={lb.photo} />
          <div style={lb.vignette} />
        </div>

        <div style={lb.nowPlaying}>
          <span style={lb.musicDot} />
          <span style={lb.nowPlayingTxt}>🎵 Playing Song {index + 1}</span>
        </div>

        <div style={lb.captionArea}>
          <div style={lb.captionHeart}>🎂</div>
          <h3 style={lb.captionTitle}>{memory.caption}</h3>
          <p style={lb.captionNote}>{memory.note}</p>
          <div style={lb.dotsRow}>
            {Array.from({ length: total }).map((_, i) => (
              <div key={i} style={{
                ...lb.dot,
                background: i === index ? "#ff6bbd" : "rgba(255,255,255,0.2)",
                transform: i === index ? "scale(1.5)" : "scale(1)",
                boxShadow: i === index ? "0 0 8px rgba(255,107,189,0.8)" : "none",
              }} />
            ))}
          </div>
        </div>
      </div>

      <p style={lb.hint}>ESC to close · ← → to navigate</p>
    </div>
  );
}

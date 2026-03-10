import { useEffect, useRef, useState } from "react";

import Lightbox      from "./Lightbox";
import Polaroid      from "./Polaroid";
import BirthdayWish  from "./BirthdayWish";
import BirthdayLetter from "./BirthdayLetter";
import { st, strip, tl, globalStyles } from "./birthdayStyles";
import {
  pages, memories, timeline, letterLines,
  starField, shootingStars, floatingOrbs, confettiBits,
} from "./birthdayData";

export default function LeelaBirthday() {
  const audioRef     = useRef(null);
  const [currentPage, setCurrentPage]   = useState(0);
  const [pageVisible, setPageVisible]   = useState(true);
  const [transitioning, setTransitioning] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [mousePos, setMousePos]         = useState({ x: 50, y: 50 });
  const [confetti, setConfetti]         = useState(true);

  // ── Start bg music on first interaction ──────────────────────────────────
  useEffect(() => {
    const start = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.5;
        audioRef.current.play().catch(() => {});
      }
      document.removeEventListener("click",      start);
      document.removeEventListener("touchstart", start);
    };
    document.addEventListener("click",      start);
    document.addEventListener("touchstart", start);
    return () => {
      document.removeEventListener("click",      start);
      document.removeEventListener("touchstart", start);
    };
  }, []);

  // ── Cursor glow ───────────────────────────────────────────────────────────
  useEffect(() => {
    const move = e => setMousePos({
      x: (e.clientX / window.innerWidth)  * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // ── Lock scroll when lightbox open ────────────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  // ── Stop confetti after 8 s ───────────────────────────────────────────────
  useEffect(() => {
    const t = setTimeout(() => setConfetti(false), 8000);
    return () => clearTimeout(t);
  }, []);

  // ── Page transition ───────────────────────────────────────────────────────
  const navigate = idx => {
    if (idx === currentPage || transitioning) return;
    setTransitioning(true);
    setPageVisible(false);
    setTimeout(() => {
      setCurrentPage(idx);
      setPageVisible(true);
      setTransitioning(false);
    }, 500);
  };

  return (
    <div style={st.root}>

      {/* ── Background music (song1 as default ambient track) ─────────────── */}
      {/* Replace /music/birthday_bg.mp3 with whichever song you want as bg   */}
<audio ref={audioRef} loop preload="auto">
  <source src="/music/birthday_bg.mp3" type="audio/mp3" />
</audio>

      {/* ── Cursor glow ─────────────────────────────────────────────────── */}
      <div style={{ ...st.cursorGlow, left:`${mousePos.x}%`, top:`${mousePos.y}%` }} />

      {/* ── Sky layers ──────────────────────────────────────────────────── */}
      <div style={st.skyBase} />
      <div style={st.skyMid}  />
      <div style={st.skyHorizon} />
      <div style={st.nebula1} />
      <div style={st.nebula2} />
      <div style={st.nebula3} />
      <div style={st.nebula4} />

      {/* ── Floating colour orbs ────────────────────────────────────────── */}
      {floatingOrbs.map(orb => (
        <div key={orb.id} style={{
          position:"fixed", width:orb.size, height:orb.size,
          top:`${orb.top}%`, left:`${orb.left}%`, borderRadius:"50%",
          background:`radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
          filter:"blur(30px)",
          animation:`orbFloat ${orb.duration}s ease-in-out ${orb.delay}s infinite`,
          zIndex:0, pointerEvents:"none",
        }} />
      ))}

      {/* ── Stars ───────────────────────────────────────────────────────── */}
      {starField.map(s => (
        <div key={s.id} style={{
          position:"fixed", borderRadius:"50%",
          background: s.bright ? "white" : "rgba(255,255,255,0.9)",
          width:s.size, height:s.size,
          top:`${s.top}%`, left:`${s.left}%`, opacity:s.opacity,
          animation: s.bright
            ? `twinkleBright ${s.duration}s ease-in-out ${s.delay}s infinite`
            : `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          zIndex:1,
          boxShadow: s.bright
            ? "0 0 4px white, 0 0 8px rgba(255,200,240,0.8)"
            : "0 0 2px rgba(255,255,255,0.4)",
        }} />
      ))}

      {/* ── Shooting stars ──────────────────────────────────────────────── */}
      {shootingStars.map(s => (
        <div key={s.id} style={{
          position:"fixed", height:2, width:3,
          top:`${s.top}%`, left:`${s.left}%`,
          background:"linear-gradient(90deg, white, rgba(255,220,255,0.9), transparent)",
          borderRadius:4,
          animation:`shootStar ${s.duration}s linear ${s.delay}s infinite`,
          zIndex:2, opacity:0,
        }} />
      ))}

      {/* ── Birthday confetti rain (first 8 s) ──────────────────────────── */}
      {confetti && confettiBits.map(c => (
        <div key={c.id} style={{
          position:"fixed", top:"-40px", left:`${c.left}%`,
          fontSize:c.size, pointerEvents:"none", zIndex:3,
          animation:`confettiFall ${c.duration}s linear ${c.delay}s forwards`,
        }}>{c.emoji}</div>
      ))}

      {/* ── Lightbox ────────────────────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <Lightbox
          memory={memories[lightboxIndex]}
          index={lightboxIndex}
          total={memories.length}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex(i => (i - 1 + memories.length) % memories.length)}
          onNext={() => setLightboxIndex(i => (i + 1) % memories.length)}
          bgAudioRef={audioRef}
        />
      )}

      {/* ── Navigation ──────────────────────────────────────────────────── */}
      <nav style={st.nav}>
        <div style={st.navLogo}>
          <span style={st.navLogoEmoji}>🎂</span>
          <span style={st.navLogoText}>For My Leela</span>
        </div>
        <div style={st.navLinks}>
          {pages.map((p, i) => (
            <button key={p} onClick={() => navigate(i)}
              style={{ ...st.navBtn, ...(currentPage === i ? st.navBtnActive : {}) }}>
              {currentPage === i && <span style={st.navDot} />}
              {p}
            </button>
          ))}
        </div>
      </nav>

      {/* ── Pages ───────────────────────────────────────────────────────── */}
      <main style={{
        ...st.main,
        opacity:   pageVisible ? 1 : 0,
        transform: pageVisible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.97)",
        transition:"opacity 0.5s ease, transform 0.5s ease",
      }}>

        {/* ── PAGE 0 — HOME ─────────────────────────────────────────────── */}
        {currentPage === 0 && (
          <div style={st.page}>
            <div style={st.glowCircle} />
            <div style={st.glowCircle2} />

            <div style={st.birthdayBadge}>🎉 IT'S BIRTHDAY TIME 🎉</div>

            <p style={st.eyebrow}>
              <span style={st.eyebrowLine} />
              ✨ From Potti, with all the hate love ✨
              <span style={st.eyebrowLine} />
            </p>

            <h1 style={st.heroTitle}>
              Happy Birthday,<br />
              <span style={st.nameGlow}>Leela 🎂</span>
            </h1>

            <p style={st.subHero}>My best friend. My person. My Favorite Enemy.</p>

            {/* The iconic "I Hate You" box */}
            <div style={st.hateSpeech}>
              <div style={st.hateBox}>
                <span style={st.hateWord}>I Hate You</span>
                <span style={st.hateEquals}>=</span>
                <span style={st.loveWord}>I Love You × ∞</span>
              </div>
              <p style={st.hateNote}>— Potti's dictionary, page 1 of 1 😌</p>
            </div>

            <div style={st.quotePara}>
              <span style={st.word1}>11 years of you in my life —</span><br />
              <span style={st.word2}>and somehow I'm still not tired of your face.</span><br />
              <span style={st.word3}>That says everything. Happy Birthday, idiot. 💕</span>
            </div>

            <button style={st.primaryBtn} onClick={() => navigate(1)}>
              <span style={st.btnGlow} />See Our Memories →
            </button>

            <div style={st.scrollHint}>∞ &nbsp; Two Leelas. One crazy story. &nbsp; ∞</div>

            <div style={st.floatEmoji1}>🎈</div>
            <div style={st.floatEmoji2}>🌟</div>
            <div style={st.floatEmoji3}>💕</div>
            <div style={st.floatEmoji4}>🎊</div>
          </div>
        )}

        {/* ── PAGE 1 — OUR MEMORIES ─────────────────────────────────────── */}
        {currentPage === 1 && (
          <div style={st.page}>
            <p style={st.eyebrow}>
              <span style={st.eyebrowLine} />📸 Our Moments<span style={st.eyebrowLine} />
            </p>
            <h2 style={st.pageTitle}>Only Thing I can't buy is my favorite memories</h2>
            <p style={st.gallerySubtitle}>
              Each one is a whole universe. 🌙<br />
              <span style={st.galleryHint}>Click any moment — it has its own voice 🎵</span>
            </p>

            {/* Polaroid gallery — 8 photos */}
            <div style={{
              display:"flex", flexWrap:"wrap", justifyContent:"center",
              gap:28, padding:"20px 10px 30px", width:"100%", maxWidth:980,
            }}>
              {memories.map((m, i) => (
                <Polaroid key={m.id} memory={m} index={i} onClick={setLightboxIndex} />
              ))}
            </div>

            {/* Auto-scrolling filmstrip */}
            <div style={strip.wrap}>
              <p style={strip.label}>📽️ Our Filmstrip</p>
              <div style={strip.track}>
                {[...memories, ...memories].map((m, i) => (
                  <div key={i} style={strip.thumb}
                    onClick={() => setLightboxIndex(i % memories.length)}>
                    <img src={m.src} alt={m.caption} style={strip.img} />
                    <div style={strip.thumbOverlay} />
                  </div>
                ))}
              </div>
            </div>

            <button style={st.primaryBtn} onClick={() => navigate(2)}>
              <span style={st.btnGlow} />A Letter For You →
            </button>
          </div>
        )}

        {/* ── PAGE 2 — A LETTER FOR YOU ─────────────────────────────────── */}
        {currentPage === 2 && (
          <div style={st.page}>
            <p style={st.eyebrow}>
              <span style={st.eyebrowLine} />💌 Just For You<span style={st.eyebrowLine} />
            </p>
            <h2 style={st.pageTitle}>From my Heart 🌙</h2>

            <BirthdayLetter bgAudioRef={audioRef} letterLines={letterLines} />

            <button style={{ ...st.primaryBtn, marginTop:32 }} onClick={() => navigate(3)}>
              <span style={st.btnGlow} />Make a Wish 🎂 →
            </button>
          </div>
        )}

        {/* ── PAGE 3 — MAKE A WISH ──────────────────────────────────────── */}
        {currentPage === 3 && (
          <div style={st.page}>
            <p style={st.eyebrow}>
              <span style={st.eyebrowLine} />🎂 Birthday Magic<span style={st.eyebrowLine} />
            </p>
            <h2 style={st.pageTitle}>It's Your Moment, Leela ✨</h2>
            <BirthdayWish />
          </div>
        )}

      </main>

      {/* ── Page indicator dots ──────────────────────────────────────────── */}
      <div style={st.dots}>
        {pages.map((_, i) => (
          <div key={i} onClick={() => navigate(i)} style={{
            ...st.dot,
            background: currentPage === i
              ? "linear-gradient(135deg,#ff4dbd,#ff85cc)"
              : "rgba(255,255,255,0.2)",
            transform:  currentPage === i ? "scale(1.5)" : "scale(1)",
            boxShadow:  currentPage === i ? "0 0 14px rgba(255,77,189,0.8)" : "none",
          }} />
        ))}
      </div>

      <style>{globalStyles}</style>
    </div>
  );
}

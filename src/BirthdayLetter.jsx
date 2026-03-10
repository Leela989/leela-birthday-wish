import { useEffect, useRef, useState } from "react";

// ─── BirthdayLetter — Page 3 ──────────────────────────────────────────────────
// A quiet, intimate letter that reveals itself line by line.
// Soft music plays. Floating petals drift. Each word lands slowly.

export default function BirthdayLetter({ bgAudioRef, letterLines }) {
  const letterAudioRef = useRef(null);
  const [visibleLines, setVisibleLines]   = useState([]);
  const [envelopeOpen, setEnvelopeOpen]   = useState(false);
  const [letterReady, setLetterReady]     = useState(false);
  const [petals, setPetals]               = useState([]);

  // Envelope → letter sequence
  useEffect(() => {
    const t1 = setTimeout(() => setEnvelopeOpen(true), 600);
    const t2 = setTimeout(() => setLetterReady(true), 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Stagger each line in after letterReady
  useEffect(() => {
    if (!letterReady) return;
    letterLines.forEach((line, i) => {
      setTimeout(() => setVisibleLines(prev => [...prev, i]), line.delay * 1000);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [letterReady]);

  // Floating petals
  useEffect(() => {
    if (!letterReady) return;
    const iv = setInterval(() => {
      setPetals(p => [...p.slice(-20), {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        emoji: ["🌸","💕","✨","🌷","💖","🥀"][Math.floor(Math.random() * 6)],
        size: Math.random() * 12 + 10,
        dur:  Math.random() * 7 + 6,
        delay: Math.random() * 2,
      }]);
    }, 900);
    return () => clearInterval(iv);
  }, [letterReady]);

  // Audio: pause bg, play letter song (song1 reused softly)
  useEffect(() => {
    const audioBg  = bgAudioRef.current;
    const audioLet = letterAudioRef.current;
    if (audioBg) audioBg.pause();
    if (audioLet) {
      audioLet.volume = 0.35;
      audioLet.loop   = true;
      audioLet.play().catch(() => {});
    }
    return () => {
      if (audioLet) { audioLet.pause(); audioLet.currentTime = 0; }
      if (audioBg)  { audioBg.volume = 0.5; audioBg.play().catch(() => {}); }
    };
  }, [bgAudioRef]);

  // Line style map
  const getStyle = (type) => {
    const base = {
      transition: "opacity 1.4s ease, transform 1.4s ease",
      textAlign: "center", width: "100%",
    };
    const map = {
      salutation: { ...base, fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(28px,5vw,42px)", fontStyle:"italic", fontWeight:700, color:"#ffccd5", letterSpacing:2, marginBottom:10, textShadow:"0 0 28px rgba(255,140,180,0.5)" },
      opening:    { ...base, fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(15px,2.4vw,20px)", fontStyle:"italic", color:"rgba(255,220,235,0.78)", lineHeight:1.9, marginBottom:3 },
      emphasis:   { ...base, fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(16px,2.8vw,22px)", fontStyle:"italic", fontWeight:700, color:"#ffb3d4", lineHeight:1.8, marginBottom:6, textShadow:"0 0 18px rgba(255,100,160,0.45)" },
      body:       { ...base, fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(14px,2.2vw,19px)", fontStyle:"italic", color:"rgba(255,215,228,0.75)", lineHeight:2, marginBottom:3 },
      big:        { ...base, fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(22px,4vw,34px)", fontStyle:"italic", fontWeight:700, color:"#fff", lineHeight:1.6, marginBottom:4, textShadow:"0 0 30px rgba(255,120,180,0.6), 0 2px 20px rgba(0,0,0,0.8)" },
      deep:       { ...base, fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(20px,3.8vw,32px)", fontStyle:"italic", fontWeight:600, color:"#ffccd5", lineHeight:1.7, marginBottom:6, textShadow:"0 0 24px rgba(255,130,170,0.5)" },
      closing:    { ...base, fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(18px,3.2vw,28px)", fontStyle:"italic", fontWeight:600, color:"#ffccd5", marginTop:16, marginBottom:4, textShadow:"0 0 24px rgba(255,130,170,0.5)", lineHeight:1.6 },
      signature:  { ...base, fontFamily:"'Caveat',cursive", fontSize:"clamp(22px,4vw,34px)", color:"#ff8fab", marginTop:10, textShadow:"0 0 18px rgba(255,100,140,0.6)", letterSpacing:1 },
      from:       { ...base, fontFamily:"'Caveat',cursive", fontSize:"clamp(18px,3vw,26px)", color:"rgba(255,160,200,0.65)", letterSpacing:2, marginTop:6 },
    };
    return map[type] || base;
  };

  const groupStarts = new Set([0, 4, 8, 14, 17]);

  return (
    <div style={ls.root}>
      {/* Letter song — uses song1 at low volume as a soft backdrop */}


      {/* Floating petals */}
      {petals.map(p => (
        <div key={p.id} style={{
          position:"fixed", bottom:-20, left:`${p.left}%`,
          fontSize:p.size, pointerEvents:"none", zIndex:2,
          animation:`petalRise ${p.dur}s ease-out ${p.delay}s forwards`,
          filter:"drop-shadow(0 0 5px rgba(255,130,170,0.4))",
        }}>{p.emoji}</div>
      ))}

      {/* Now playing pill */}
      {letterReady && (
        <div style={ls.nowPlaying}>
          <span style={ls.musicDot} />
          <span style={ls.nowPlayingTxt}>🎵 Playing softly for you</span>
        </div>
      )}

      {/* ── Envelope animation ───────────────────────────────────────────── */}
      {!letterReady && (
        <div style={ls.envWrap}>
          <div style={{ ...ls.envelope, opacity: envelopeOpen ? 0 : 1, transform: envelopeOpen ? "scale(1.1) translateY(-10px)" : "scale(1)", transition:"all 1.2s ease" }}>
            <div style={ls.envBody}>
              <div style={ls.envFlap} />
              <div style={ls.envLines}>
                <div style={ls.envLine} /><div style={ls.envLine} /><div style={ls.envLine} />
              </div>
              <div style={ls.envSeal}>💌</div>
            </div>
          </div>
          <p style={ls.envHint}>Opening your letter...</p>
        </div>
      )}

      {/* ── The Letter ───────────────────────────────────────────────────── */}
      {letterReady && (
        <div style={ls.letterWrap}>

          {/* Decorative top rule */}
          <div style={ls.rule}>
            <div style={ls.ruleLine} />
            <span style={ls.ruleHeart}>💌</span>
            <div style={ls.ruleLine} />
          </div>

          {/* Lines */}
          <div style={ls.lines}>
            {letterLines.map((line, i) => {
              const show = visibleLines.includes(i);
              return (
                <div key={i}>
                  {groupStarts.has(i) && i !== 0 && <div style={ls.spacer} />}
                  <div style={{
                    ...getStyle(line.style),
                    opacity:   show ? 1 : 0,
                    transform: show ? "translateY(0)" : "translateY(16px)",
                  }}>
                    {line.text}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer ornament — appears after last line */}
          {visibleLines.length >= letterLines.length && (
            <div style={ls.footer}>
              {["💕","🌸","💕","🌸","💕"].map((e, i) => (
                <span key={i} style={{
                  fontSize:14, display:"inline-block",
                  animation:`ornBounce 1.6s ease ${i*0.14}s infinite alternate`,
                  filter:"drop-shadow(0 0 4px rgba(255,100,150,0.5))",
                }}>{e}</span>
              ))}
            </div>
          )}
        </div>
      )}

      <style>{`
        @keyframes petalRise {
          0%   { transform:translateY(0) scale(0.5) rotate(-10deg); opacity:0.8; }
          60%  { opacity:0.9; }
          100% { transform:translateY(-110vh) scale(1.1) rotate(15deg); opacity:0; }
        }
        @keyframes ornBounce {
          from { transform:scale(1) rotate(-5deg); }
          to   { transform:scale(1.3) rotate(5deg); }
        }
        @keyframes envPulse {
          0%,100% { box-shadow:0 0 40px rgba(255,100,150,0.3); }
          50%     { box-shadow:0 0 70px rgba(255,100,150,0.6); }
        }
        @keyframes blink {
          0%,100% { opacity:1; } 50% { opacity:0.3; }
        }
        @keyframes dotPulse {
          0%,100% { box-shadow:0 0 6px rgba(255,107,189,0.6); }
          50%     { box-shadow:0 0 12px rgba(255,107,189,1); }
        }
      `}</style>
    </div>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const ls = {
  root: {
    minHeight:"100vh", width:"100%",
    display:"flex", flexDirection:"column", alignItems:"center",
    justifyContent:"flex-start", position:"relative",
    fontFamily:"'Cormorant Garamond',serif", paddingBottom:80,
  },
  nowPlaying: {
    position:"fixed", top:76, right:24,
    display:"flex", alignItems:"center", gap:8,
    background:"rgba(255,50,120,0.08)", border:"1px solid rgba(255,100,150,0.2)",
    padding:"6px 16px", borderRadius:50, backdropFilter:"blur(10px)", zIndex:100,
  },
  musicDot: {
    width:7, height:7, borderRadius:"50%", background:"#ff6bbd",
    flexShrink:0, animation:"dotPulse 1.4s ease-in-out infinite",
  },
  nowPlayingTxt: {
    fontFamily:"'Cormorant Garamond',serif", fontSize:12,
    color:"rgba(255,160,200,0.7)", fontStyle:"italic", letterSpacing:1,
  },

  // Envelope
  envWrap: {
    position:"fixed", inset:0, display:"flex", flexDirection:"column",
    alignItems:"center", justifyContent:"center", zIndex:50,
  },
  envelope: { width:220, height:160, animation:"envPulse 2s ease-in-out infinite" },
  envBody: {
    width:"100%", height:"100%",
    background:"linear-gradient(145deg, rgba(35,8,28,0.96), rgba(18,4,18,0.98))",
    border:"1px solid rgba(255,100,150,0.3)", borderRadius:8,
    position:"relative", display:"flex", alignItems:"center", justifyContent:"center",
    boxShadow:"0 0 50px rgba(255,60,130,0.25)",
  },
  envFlap: {
    position:"absolute", top:0, left:0, right:0, height:"50%",
    background:"linear-gradient(to bottom, rgba(255,80,140,0.07), transparent)",
    borderBottom:"1px solid rgba(255,100,150,0.12)", borderRadius:"8px 8px 0 0",
  },
  envLines: { display:"flex", flexDirection:"column", gap:8, width:"55%" },
  envLine:  { height:1, background:"rgba(255,150,190,0.18)", borderRadius:2 },
  envSeal: {
    position:"absolute", fontSize:36,
    filter:"drop-shadow(0 0 12px rgba(255,100,150,0.8))",
    animation:"ornBounce 2s ease-in-out infinite alternate",
  },
  envHint: {
    marginTop:24, fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic",
    fontSize:14, color:"rgba(255,150,190,0.5)", letterSpacing:2,
    animation:"blink 2s ease-in-out infinite",
  },

  // Letter
  letterWrap: {
    position:"relative", zIndex:10,
    width:"100%", maxWidth:660,
    padding:"40px 32px 60px",
    display:"flex", flexDirection:"column", alignItems:"center",
  },
  rule: {
    display:"flex", alignItems:"center", gap:14,
    width:"100%", marginBottom:32,
  },
  ruleLine: {
    flex:1, height:1,
    background:"linear-gradient(90deg, transparent, rgba(255,107,150,0.35), transparent)",
  },
  ruleHeart: {
    fontSize:26,
    filter:"drop-shadow(0 0 10px rgba(255,100,150,0.7))",
    animation:"ornBounce 2.5s ease infinite alternate", display:"inline-block",
  },
  lines: {
    display:"flex", flexDirection:"column",
    alignItems:"center", width:"100%", gap:2,
  },
  spacer: { height:22 },
  footer: {
    marginTop:44, display:"flex", gap:10,
    justifyContent:"center", alignItems:"center",
  },
};

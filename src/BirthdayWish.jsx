import { useEffect, useState } from "react";

// ─── Stage 1: Cinematic cake with 11 candles ──────────────────────────────────
// ─── Stage 2: Glowing wish form with corner accents ───────────────────────────
// ─── Stage 3: Full-screen celebration — rising emojis, orbiting sparkles ──────

export default function BirthdayWish() {
  const [stage, setStage]             = useState("cake");
  const [candlesLit, setCandlesLit]   = useState(true);
  const [blowing, setBlowing]         = useState(false);
  const [wishText, setWishText]       = useState("");
  const [risingItems, setRisingItems] = useState([]);
  const [sparkles, setSparkles]       = useState([]);
  const [showAmbient, setShowAmbient] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowAmbient(true), 400);
    return () => clearTimeout(t);
  }, []);

  // Rising items on final stage
  useEffect(() => {
    if (stage !== "final") return;
    const iv = setInterval(() => {
      setRisingItems(p => [...p.slice(-60), {
        id: Date.now() + Math.random(),
        left:  Math.random() * 100,
        emoji: ["🎂","🎉","💖","✨","🥳","🎊","💕","🌟","🎈","🌸"][Math.floor(Math.random() * 10)],
        size:  Math.random() * 20 + 16,
        dur:   Math.random() * 3 + 2.5,
        delay: Math.random() * 0.5,
        drift: (Math.random() - 0.5) * 80,
      }]);
    }, 180);
    return () => clearInterval(iv);
  }, [stage]);

  // Orbiting sparkles on final stage
  useEffect(() => {
    if (stage !== "final") return;
    setSparkles(Array.from({ length: 10 }, (_, i) => ({
      id: i,
      angle: (i / 10) * 360,
      dist:  110 + Math.random() * 50,
      size:  Math.random() * 10 + 8,
      dur:   Math.random() * 2 + 1.5,
      delay: Math.random() * 1.5,
    })));
  }, [stage]);

  const blowCandles = () => {
    setBlowing(true);
    setTimeout(() => setCandlesLit(false), 300);
    setTimeout(() => setStage("wish"), 1800);
  };

  // 11 candles — one per year
  const candles = [
    { color:"#ff6bbd" }, { color:"#ffd080" }, { color:"#a0f0ed" },
    { color:"#ffb347" }, { color:"#c3b1e1" }, { color:"#ff8fab" },
    { color:"#80ffdb" }, { color:"#ffccd5" }, { color:"#b8f0c0" },
    { color:"#ffd6a5" }, { color:"#ff9de2" },
  ];

  // ─────────────────────────────────────────────────────────────────────────
  // STAGE 1 — THE CAKE
  // ─────────────────────────────────────────────────────────────────────────
  if (stage === "cake") return (
    <div style={w.root}>
      <div style={{ ...w.ambient, opacity: showAmbient ? 1 : 0 }} />

      <p style={w.eyebrow}>✨ make a wish ✨</p>
      <h3 style={w.cakeTitle}>Close your eyes, Leela</h3>
      <p style={w.cakeSub}>26 candles. 16 years. One wish. 🌙</p>

      <div style={w.cakeScene}>
        {/* Candles */}
        <div style={w.candlesRow}>
          {candles.map((c, i) => (
            <div key={i} style={{ display:"flex", flexDirection:"column", alignItems:"center" }}>
              <div style={{
                fontSize:10, marginBottom:-2, lineHeight:1,
                opacity: candlesLit ? 1 : 0,
                transition:`opacity ${0.05 + i*0.07}s ease`,
                filter:`drop-shadow(0 0 6px ${c.color}) drop-shadow(0 0 10px rgba(255,200,80,0.8))`,
                animation: candlesLit ? `flameFlicker ${0.6+i*0.12}s ease-in-out infinite alternate` : "none",
              }}>🔥</div>
              <div style={{
                width:7, height:20+Math.floor(i%3)*6,
                background:`linear-gradient(to bottom, ${c.color}, ${c.color}99)`,
                borderRadius:"3px 3px 1px 1px",
                boxShadow: candlesLit ? `0 0 8px ${c.color}88` : "none",
                transition:"box-shadow 0.4s ease",
              }} />
              <div style={{ width:5, height:4, background:c.color+"55", borderRadius:"0 0 4px 4px", marginTop:-1 }} />
            </div>
          ))}
        </div>

        {/* Top tier */}
        <div style={w.tier1}>
          <div style={w.tier1Inner}>
            <span style={w.tier1Txt}>Happy Birthday</span>
            <div style={{ display:"flex", gap:4 }}>
              {["🌸","✨","🌸","✨","🌸"].map((e,i)=>(
                <span key={i} style={{ fontSize:10, animation:`dotBounce ${0.8+i*0.14}s ease-in-out infinite alternate` }}>{e}</span>
              ))}
            </div>
          </div>
          <div style={w.dripsRow}>
            {Array.from({length:8}).map((_,i)=>(
              <div key={i} style={{ ...w.drip, height:8+i%3*4, background:"linear-gradient(to bottom, rgba(255,230,245,0.9), rgba(255,200,230,0.5))" }} />
            ))}
          </div>
        </div>

        {/* Middle tier */}
        <div style={w.tier2}>
          <div style={w.tier2Inner}>
            <span style={w.tier2Name}>Leela 💕</span>
            <span style={w.tier2Sub}>26 glorious years</span>
          </div>
          <div style={w.dripsRow}>
            {Array.from({length:10}).map((_,i)=>(
              <div key={i} style={{ ...w.drip, height:10+i%3*5, background:"linear-gradient(to bottom, rgba(255,240,220,0.85), rgba(255,200,160,0.45))" }} />
            ))}
          </div>
        </div>

        {/* Base tier */}
        <div style={w.tier3}>
          <span style={w.tier3Txt}>🎂 God bless you 🎂</span>
        </div>

        {/* Plate shadow */}
        <div style={w.plate} />
      </div>

      {/* Blow button */}
      {!blowing ? (
        <button style={w.blowBtn} onClick={blowCandles}>
          <span style={w.btnShimmer} />
          <span style={{ fontSize:22, animation:"blowIconAnim 0.8s ease-in-out infinite" }}>💨</span>
          <span>Blow the Candles</span>
        </button>
      ) : (
        <div style={w.blowingWrap}>
          <span style={{ fontSize:32, animation:"blowIconAnim 0.4s ease-in-out infinite" }}>💨💨💨</span>
          <span style={w.blowingLabel}>blowing...</span>
        </div>
      )}

      <style>{`
        @keyframes flameFlicker { from{transform:scaleY(1) rotate(-3deg)} to{transform:scaleY(1.25) rotate(3deg)} }
        @keyframes dotBounce    { from{transform:translateY(0)} to{transform:translateY(-4px)} }
        @keyframes blowIconAnim { 0%,100%{transform:scale(1)} 50%{transform:scale(1.3) translateX(5px)} }
        @keyframes ambientGlow  { 0%,100%{opacity:0.5;transform:scale(1)} 50%{opacity:0.9;transform:scale(1.08)} }
        @keyframes cakeFloat    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes dripIn       { from{height:0;opacity:0} to{opacity:1} }
      `}</style>
    </div>
  );

  // ─────────────────────────────────────────────────────────────────────────
  // STAGE 2 — WISH FORM
  // ─────────────────────────────────────────────────────────────────────────
  if (stage === "wish") return (
    <div style={w.root}>
      <div style={w.wishStage}>

        <div style={w.starWrap}>
          <div style={w.starGlow} />
          <span style={{ fontSize:80, position:"relative", zIndex:1, display:"block",
            filter:"drop-shadow(0 0 24px rgba(255,180,50,0.9))",
            animation:"starBounce 1.2s ease-in-out infinite alternate" }}>🌠</span>
        </div>

        <h3 style={w.wishTitle}>The candles heard you 🕯️</h3>
        <p style={w.wishSub}>
          Your wish is already flying towards the stars.<br/>
          <span style={{ color:"rgba(255,160,200,0.55)", fontSize:13 }}>Write it down so the universe doesn't forget 😌</span>
        </p>

        <div style={w.taWrap}>
          <div style={w.taGlow} />
          <textarea style={w.ta} placeholder="My birthday wish is..."
            value={wishText} onChange={e=>setWishText(e.target.value)} rows={4} autoFocus />
          {/* Corner accents */}
          <div style={{...w.corner, top:6,    left:6,    borderTop:"2px solid rgba(255,120,180,0.55)",   borderLeft:"2px solid rgba(255,120,180,0.55)"  }} />
          <div style={{...w.corner, top:6,    right:6,   borderTop:"2px solid rgba(255,120,180,0.55)",   borderRight:"2px solid rgba(255,120,180,0.55)" }} />
          <div style={{...w.corner, bottom:6, left:6,    borderBottom:"2px solid rgba(255,120,180,0.55)",borderLeft:"2px solid rgba(255,120,180,0.55)"  }} />
          <div style={{...w.corner, bottom:6, right:6,   borderBottom:"2px solid rgba(255,120,180,0.55)",borderRight:"2px solid rgba(255,120,180,0.55)" }} />
        </div>

        <p style={w.charHint}>
          {wishText.length===0 ? "✨ the stars are listening..." : `✨ ${wishText.length} words of magic`}
        </p>

        <button style={{...w.submitBtn, opacity: wishText.trim()?1:0.45}} onClick={()=>{ if(wishText.trim()) setStage("final"); }}>
          <span style={w.btnShimmer} />
          🌟 Send to the Stars
        </button>
      </div>

      <style>{`
        @keyframes starBounce   { from{transform:translateY(0) rotate(-5deg) scale(1)} to{transform:translateY(-14px) rotate(5deg) scale(1.06)} }
        @keyframes taGlowAnim   { 0%,100%{opacity:0.35} 50%{opacity:0.75} }
        @keyframes shimmerSlide { 0%{background-position:-300% center} 100%{background-position:300% center} }
      `}</style>
    </div>
  );

  // ─────────────────────────────────────────────────────────────────────────
  // STAGE 3 — FINAL CELEBRATION
  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div style={w.root}>

      {/* Rising emoji flood */}
      {risingItems.map(h => (
        <div key={h.id} style={{
          position:"fixed", bottom:-10, left:`${h.left}%`,
          fontSize:h.size, pointerEvents:"none", zIndex:20,
          animation:`riseUp ${h.dur}s ease-out ${h.delay}s forwards`,
        }}>{h.emoji}</div>
      ))}

      <div style={w.finalStage}>
        {/* Pulsing rings */}
        <div style={w.ringWrap}>
          <div style={{...w.ring, animation:"ringOut 2s ease-out infinite"}} />
          <div style={{...w.ring, animation:"ringOut 2s ease-out 0.65s infinite"}} />
          <div style={{...w.ring, animation:"ringOut 2s ease-out 1.3s infinite"}} />
          <span style={w.finalCakeEmoji}>🎂</span>
        </div>

        <p style={w.finalHeading}>Happy Birthday</p>
        <h1 style={w.finalName}>Leela 💕</h1>

        {/* Wish card with orbiting sparkles */}
        <div style={w.wishCardWrap}>
          <p style={w.wishCardLabel}>✨ your wish ✨</p>
          <div style={w.wishCard}>
            {sparkles.map(s => (
              <span key={s.id} style={{
                position:"absolute", top:"50%", left:"50%",
                fontSize:s.size, pointerEvents:"none",
                transform:`rotate(${s.angle}deg) translateX(${s.dist}px)`,
                animation:`sparkOrbit ${s.dur}s ease-in-out ${s.delay}s infinite alternate`,
                filter:"drop-shadow(0 0 4px rgba(255,200,80,0.8))",
              }}>✨</span>
            ))}
            <p style={w.wishCardTxt}>"{wishText}"</p>
          </div>
        </div>

        <p style={w.finalNote}>
          The universe heard every word, Leela. 🌙<br/>
          <span style={{color:"#ffb3d4", fontStyle:"italic"}}>It's already working on it. 💕</span>
        </p>

        {/* Bouncing emoji row */}
        <div style={w.emojiRow}>
          {["🎂","🎉","💖","🌟","✨","🥳","🎊","💕","🎈","🌸"].map((e,i)=>(
            <span key={i} style={{
              fontSize:22+(i%3)*4, display:"inline-block",
              animation:`emojiBounce ${0.5+i*0.09}s ease-in-out infinite alternate`,
              animationDelay:`${i*0.07}s`,
              filter:`drop-shadow(0 0 5px rgba(255,150,200,0.55))`,
            }}>{e}</span>
          ))}
        </div>

        {/* Signature */}
        <div style={w.signature}>
          <span style={w.sigLine1}>I hate you, Leela.</span>
          <span style={w.sigLine2}>— Potti 🌙</span>
        </div>
      </div>

      <style>{`
        @keyframes riseUp      { 0%{transform:translateY(0) scale(0.5) rotate(-10deg);opacity:1} 80%{opacity:0.8} 100%{transform:translateY(-110vh) scale(1.1) rotate(20deg);opacity:0} }
        @keyframes ringOut     { 0%{transform:scale(1);opacity:0.55} 100%{transform:scale(2.4);opacity:0} }
        @keyframes emojiBounce { from{transform:translateY(0) rotate(-4deg) scale(1)} to{transform:translateY(-13px) rotate(4deg) scale(1.12)} }
        @keyframes sparkOrbit  { from{opacity:0.4;transform:rotate(var(--a,0deg)) translateX(110px) scale(0.8)} to{opacity:1;transform:rotate(calc(var(--a,0deg)+30deg)) translateX(135px) scale(1.2)} }
        @keyframes finalIn     { from{opacity:0;transform:translateY(28px) scale(0.92)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes cardIn      { from{opacity:0;transform:scale(0.85) translateY(18px)} to{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes nameShimmer { 0%{background-position:-300% center} 100%{background-position:300% center} }
      `}</style>
    </div>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const w = {
  root: {
    width:"100%", maxWidth:600,
    display:"flex", flexDirection:"column", alignItems:"center",
    gap:0, paddingBottom:40, position:"relative",
  },

  // Cake stage
  ambient: {
    position:"absolute", top:"5%", left:"50%", transform:"translateX(-50%)",
    width:520, height:420, borderRadius:"50%", pointerEvents:"none", zIndex:0,
    background:"radial-gradient(ellipse, rgba(255,80,180,0.14) 0%, rgba(255,160,60,0.07) 45%, transparent 70%)",
    filter:"blur(40px)", transition:"opacity 1s ease",
    animation:"ambientGlow 4s ease-in-out infinite",
  },
  eyebrow: {
    color:"rgba(255,180,210,0.55)", fontSize:11, letterSpacing:5,
    textTransform:"uppercase", marginBottom:10, fontFamily:"'Outfit',sans-serif",
    position:"relative", zIndex:1,
  },
  cakeTitle: {
    fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(24px,5vw,38px)",
    color:"#fff", fontStyle:"italic", fontWeight:700, marginBottom:6,
    textShadow:"0 0 28px rgba(255,120,180,0.5)",
    position:"relative", zIndex:1,
    animation:"finalIn 0.7s ease forwards",
  },
  cakeSub: {
    fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic",
    color:"rgba(255,200,220,0.65)", fontSize:15, marginBottom:28,
    position:"relative", zIndex:1,
  },
  cakeScene: {
    display:"flex", flexDirection:"column", alignItems:"center",
    position:"relative", zIndex:1, animation:"cakeFloat 3s ease-in-out infinite",
    marginBottom:30,
  },
  candlesRow: {
    display:"flex", gap:6, justifyContent:"center", alignItems:"flex-end",
    paddingBottom:2,
  },
  tier1: {
    width:230, position:"relative",
    background:"linear-gradient(135deg,rgba(255,80,180,0.38),rgba(220,60,160,0.42),rgba(255,100,200,0.32))",
    border:"1px solid rgba(255,120,200,0.38)", borderBottom:"none",
    borderRadius:"12px 12px 0 0",
    boxShadow:"0 -4px 20px rgba(255,80,180,0.18), inset 0 1px 0 rgba(255,200,230,0.18)",
    backdropFilter:"blur(10px)",
  },
  tier1Inner: { padding:"13px 12px 5px", display:"flex", flexDirection:"column", alignItems:"center", gap:4 },
  tier1Txt: {
    fontFamily:"'Caveat',cursive", fontSize:15, color:"#ffccd5",
    letterSpacing:1, textShadow:"0 0 10px rgba(255,150,200,0.5)",
  },
  tier2: {
    width:290, position:"relative",
    background:"linear-gradient(135deg,rgba(255,140,60,0.3),rgba(255,80,150,0.34),rgba(200,80,255,0.24))",
    border:"1px solid rgba(255,160,100,0.32)", borderBottom:"none",
    boxShadow:"0 0 18px rgba(255,120,80,0.12), inset 0 1px 0 rgba(255,220,200,0.12)",
    backdropFilter:"blur(10px)",
  },
  tier2Inner: { padding:"13px 12px 5px", display:"flex", flexDirection:"column", alignItems:"center", gap:3 },
  tier2Name: {
    fontFamily:"'Cormorant Garamond',serif", fontSize:22,
    fontStyle:"italic", fontWeight:700, color:"#ffd080",
    textShadow:"0 0 16px rgba(255,200,80,0.6)",
  },
  tier2Sub: {
    fontFamily:"'Caveat',cursive", fontSize:12,
    color:"rgba(255,220,200,0.6)", letterSpacing:1,
  },
  tier3: {
    width:350,
    background:"linear-gradient(135deg,rgba(140,30,100,0.52),rgba(100,20,80,0.56),rgba(160,40,120,0.46))",
    border:"1px solid rgba(200,80,160,0.28)", borderRadius:"0 0 4px 4px",
    padding:"15px 12px 12px", textAlign:"center",
    boxShadow:"0 8px 28px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,180,220,0.08)",
    backdropFilter:"blur(10px)",
  },
  tier3Txt: { fontFamily:"'Caveat',cursive", fontSize:13, color:"rgba(255,200,230,0.55)", letterSpacing:1 },
  dripsRow: { display:"flex", justifyContent:"space-around", marginTop:-2 },
  drip: { width:15, borderRadius:"0 0 8px 8px", animation:"dripIn 0.8s ease forwards" },
  plate: {
    width:390, height:10, marginTop:4,
    background:"radial-gradient(ellipse, rgba(0,0,0,0.45) 0%, transparent 70%)",
    filter:"blur(4px)",
  },
  blowBtn: {
    position:"relative",
    background:"linear-gradient(135deg,#ff2d99,#ff6bbd,#ffb347)",
    color:"#fff", border:"none", padding:"16px 44px", borderRadius:50,
    fontSize:16, cursor:"pointer", fontFamily:"'Outfit',sans-serif",
    fontWeight:700, letterSpacing:1.5,
    boxShadow:"0 8px 40px rgba(255,45,153,0.55)",
    overflow:"hidden", display:"flex", alignItems:"center", gap:10,
    animation:"pulse 2s ease-in-out infinite",
    textShadow:"0 1px 4px rgba(0,0,0,0.3)",
  },
  btnShimmer: {
    position:"absolute", inset:0, borderRadius:50,
    background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent)",
    animation:"shimmerSlide 2s linear infinite",
  },
  blowingWrap: { display:"flex", flexDirection:"column", alignItems:"center", gap:8 },
  blowingLabel: {
    fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic",
    fontSize:16, color:"rgba(255,200,220,0.55)", letterSpacing:2,
  },

  // Wish stage
  wishStage: {
    display:"flex", flexDirection:"column", alignItems:"center",
    gap:16, width:"100%", animation:"finalIn 0.7s ease forwards",
  },
  starWrap: {
    position:"relative", width:120, height:120,
    display:"flex", alignItems:"center", justifyContent:"center",
  },
  starGlow: {
    position:"absolute", inset:"-35%", borderRadius:"50%",
    background:"radial-gradient(circle,rgba(255,180,50,0.28) 0%,transparent 70%)",
    filter:"blur(18px)", animation:"ambientGlow 2.5s ease-in-out infinite",
  },
  wishTitle: {
    fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(21px,4.5vw,34px)",
    color:"#ffccd5", fontStyle:"italic", fontWeight:700,
    textShadow:"0 0 22px rgba(255,150,200,0.5)", textAlign:"center",
  },
  wishSub: {
    fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic",
    fontSize:16, color:"rgba(255,210,230,0.72)",
    textAlign:"center", lineHeight:1.9, maxWidth:440,
  },
  taWrap: { position:"relative", width:"100%", maxWidth:480 },
  taGlow: {
    position:"absolute", inset:-2, borderRadius:20,
    background:"linear-gradient(135deg,rgba(255,80,180,0.28),rgba(200,80,255,0.26),rgba(255,180,60,0.18))",
    filter:"blur(8px)", animation:"taGlowAnim 2.2s ease-in-out infinite", zIndex:0,
  },
  ta: {
    position:"relative", zIndex:1, width:"100%", padding:"18px 20px",
    background:"rgba(6,1,14,0.88)", border:"1px solid rgba(255,120,180,0.28)",
    borderRadius:18, color:"#ffccd5", fontFamily:"'Caveat',cursive",
    fontSize:18, lineHeight:1.8, resize:"none", outline:"none",
    backdropFilter:"blur(14px)",
    boxShadow:"inset 0 2px 12px rgba(0,0,0,0.4)",
  },
  corner: { position:"absolute", width:8, height:8, borderRadius:2, zIndex:2 },
  charHint: {
    fontFamily:"'Caveat',cursive", fontSize:13,
    color:"rgba(255,160,200,0.45)", letterSpacing:1, marginTop:-6,
  },
  submitBtn: {
    position:"relative",
    background:"linear-gradient(135deg,#ff2d99,#ff6bbd,#ffd080)",
    backgroundSize:"200% auto",
    color:"#fff", border:"none", padding:"15px 44px", borderRadius:50,
    fontSize:15, cursor:"pointer", fontFamily:"'Outfit',sans-serif",
    fontWeight:700, letterSpacing:1.5,
    boxShadow:"0 8px 36px rgba(255,45,153,0.5)", overflow:"hidden",
    display:"flex", alignItems:"center", gap:8,
    textShadow:"0 1px 4px rgba(0,0,0,0.3)",
    transition:"opacity 0.3s ease",
    animation:"shimmerSlide 3s linear infinite",
  },

  // Final stage
  finalStage: {
    display:"flex", flexDirection:"column", alignItems:"center",
    gap:18, width:"100%", paddingTop:6,
    animation:"finalIn 0.8s ease forwards",
  },
  ringWrap: {
    position:"relative", width:150, height:150,
    display:"flex", alignItems:"center", justifyContent:"center",
  },
  ring: {
    position:"absolute", inset:0, borderRadius:"50%",
    border:"2px solid rgba(255,107,189,0.45)",
  },
  finalCakeEmoji: {
    fontSize:80, position:"relative", zIndex:1,
    filter:"drop-shadow(0 0 20px rgba(255,150,180,0.9)) drop-shadow(0 0 50px rgba(255,80,150,0.5))",
    animation:"cakeFloat 2s ease-in-out infinite",
    display:"inline-block",
  },
  finalHeading: {
    fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(18px,4vw,30px)",
    color:"rgba(255,220,235,0.8)", fontStyle:"italic", fontWeight:400,
    letterSpacing:3, textAlign:"center",
    textShadow:"0 0 20px rgba(255,120,180,0.35)",
  },
  finalName: {
    fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(40px,9vw,72px)",
    fontStyle:"italic", fontWeight:700, lineHeight:1, marginTop:-8,
    background:"linear-gradient(90deg,#ff6bbd,#ffb3d9,#ffd080,#ffb3d9,#ff6bbd)",
    backgroundSize:"300% auto",
    WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
    animation:"nameShimmer 4s linear infinite",
    filter:"drop-shadow(0 0 12px rgba(255,107,189,0.6))",
  },
  wishCardWrap: {
    display:"flex", flexDirection:"column", alignItems:"center", gap:6,
    width:"100%", maxWidth:480, position:"relative",
  },
  wishCardLabel: {
    fontFamily:"'Outfit',sans-serif", fontSize:10,
    color:"rgba(255,200,80,0.55)", letterSpacing:4, textTransform:"uppercase",
  },
  wishCard: {
    position:"relative",
    background:"linear-gradient(135deg,rgba(255,80,180,0.11),rgba(180,60,255,0.09))",
    border:"1px solid rgba(255,120,200,0.22)",
    borderRadius:24, padding:"22px 26px", textAlign:"center",
    backdropFilter:"blur(12px)", overflow:"visible",
    boxShadow:"0 0 40px rgba(255,80,150,0.09), inset 0 1px 0 rgba(255,200,230,0.07)",
    animation:"cardIn 0.8s ease 0.3s both",
  },
  wishCardTxt: {
    fontFamily:"'Caveat',cursive", fontSize:"clamp(16px,3vw,21px)",
    color:"#ffccd5", lineHeight:1.7, fontStyle:"italic",
    textShadow:"0 0 10px rgba(255,150,200,0.28)",
  },
  finalNote: {
    fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic",
    fontSize:"clamp(14px,2.5vw,17px)", color:"rgba(255,210,230,0.68)",
    textAlign:"center", lineHeight:2,
  },
  emojiRow: {
    display:"flex", gap:5, flexWrap:"wrap",
    justifyContent:"center", maxWidth:380,
  },
  signature: {
    display:"flex", flexDirection:"column", alignItems:"center", gap:4,
    marginTop:6, padding:"14px 32px",
    background:"rgba(255,100,180,0.06)",
    border:"1px solid rgba(255,100,180,0.14)",
    borderRadius:50, backdropFilter:"blur(8px)",
  },
  sigLine1: {
    fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(17px,3.5vw,26px)",
    fontStyle:"italic", fontWeight:700, color:"#ffb3d4",
    textShadow:"0 0 14px rgba(255,100,160,0.5)", letterSpacing:1,
  },
  sigLine2: {
    fontFamily:"'Caveat',cursive", fontSize:"clamp(15px,3vw,21px)",
    color:"rgba(255,160,200,0.6)", letterSpacing:2,
  },
};
// ─── Main page styles ─────────────────────────────────────────────────────────
export const st = {
  root: { minHeight:"100vh", width:"100%", background:"#010006", display:"flex", flexDirection:"column", alignItems:"center", position:"relative", overflow:"hidden", fontFamily:"'Outfit',sans-serif" },
  cursorGlow: { position:"fixed", width:320, height:320, borderRadius:"50%", background:"radial-gradient(circle, rgba(255,80,180,0.09) 0%, transparent 70%)", transform:"translate(-50%,-50%)", pointerEvents:"none", zIndex:5, transition:"left 0.3s ease, top 0.3s ease", animation:"cursorGlowAnim 3s ease-in-out infinite" },
  skyBase: { position:"fixed", inset:0, background:"radial-gradient(ellipse 160% 100% at 50% -10%, #0d0018 0%, #05000e 40%, #010008 70%, #000005 100%)", zIndex:0 },
  skyMid: { position:"fixed", inset:0, background:"radial-gradient(ellipse 100% 60% at 50% 110%, #180010 0%, #080005 40%, transparent 70%)", zIndex:0 },
  skyHorizon: { position:"fixed", bottom:0, left:0, right:0, height:"30%", background:"linear-gradient(to top, rgba(40,5,25,0.4) 0%, transparent 100%)", zIndex:0 },
  nebula1: { position:"fixed", top:"-5%", left:"-5%", width:800, height:550, borderRadius:"50%", background:"radial-gradient(ellipse, rgba(180,20,120,0.2) 0%, rgba(100,10,80,0.08) 50%, transparent 70%)", filter:"blur(60px)", animation:"nebulaDrift 25s ease-in-out infinite", zIndex:0, pointerEvents:"none" },
  nebula2: { position:"fixed", top:"20%", right:"-10%", width:700, height:500, borderRadius:"50%", background:"radial-gradient(ellipse, rgba(255,120,40,0.12) 0%, rgba(180,60,20,0.06) 50%, transparent 70%)", filter:"blur(70px)", animation:"nebulaDrift 30s ease-in-out infinite reverse", zIndex:0, pointerEvents:"none" },
  nebula3: { position:"fixed", bottom:"0%", left:"10%", width:900, height:400, borderRadius:"50%", background:"radial-gradient(ellipse, rgba(100,20,180,0.15) 0%, rgba(60,10,120,0.07) 50%, transparent 70%)", filter:"blur(80px)", animation:"nebulaDrift 38s ease-in-out infinite", zIndex:0, pointerEvents:"none" },
  nebula4: { position:"fixed", top:"50%", left:"30%", width:600, height:600, borderRadius:"50%", background:"radial-gradient(ellipse, rgba(255,80,150,0.08) 0%, transparent 70%)", filter:"blur(90px)", animation:"nebulaDrift 20s ease-in-out infinite reverse", zIndex:0, pointerEvents:"none" },
  nav: { width:"100%", maxWidth:960, display:"flex", justifyContent:"space-between", alignItems:"center", padding:"20px 28px", zIndex:100, flexWrap:"wrap", gap:12, borderBottom:"1px solid rgba(255,120,180,0.07)", backdropFilter:"blur(10px)", background:"rgba(0,0,0,0.1)" },
  navLogo: { display:"flex", alignItems:"center", gap:8 },
  navLogoEmoji: { fontSize:20, filter:"drop-shadow(0 0 8px rgba(255,100,180,0.8))", animation:"floatIcon 3s ease-in-out infinite" },
  navLogoText: { color:"#ffccd5", fontFamily:"'Cormorant Garamond',serif", fontSize:20, fontWeight:600, letterSpacing:2, textShadow:"0 0 16px rgba(255,180,220,0.6)" },
  navLinks: { display:"flex", gap:6, flexWrap:"wrap" },
  navBtn: { background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", color:"rgba(255,200,225,0.55)", padding:"7px 14px", borderRadius:50, cursor:"pointer", fontSize:11, fontFamily:"'Outfit',sans-serif", fontWeight:400, letterSpacing:0.5, transition:"all 0.25s", backdropFilter:"blur(8px)", display:"flex", alignItems:"center", gap:5 },
  navBtnActive: { background:"rgba(255,60,160,0.15)", border:"1px solid rgba(255,60,160,0.4)", color:"#ffffff", boxShadow:"0 0 20px rgba(255,60,160,0.25)", textShadow:"0 0 8px rgba(255,180,220,0.5)" },
  navDot: { width:5, height:5, borderRadius:"50%", background:"#ff6bbd", boxShadow:"0 0 6px rgba(255,107,189,0.8)", flexShrink:0 },
  main: { flex:1, width:"100%", maxWidth:920, padding:"24px 28px 100px", zIndex:10, display:"flex", justifyContent:"center", alignItems:"flex-start" },
  page: { width:"100%", textAlign:"center", display:"flex", flexDirection:"column", alignItems:"center", paddingTop:24, position:"relative" },
  glowCircle: { position:"absolute", width:700, height:700, borderRadius:"50%", background:"radial-gradient(circle, rgba(255,60,160,0.08) 0%, rgba(180,20,100,0.04) 50%, transparent 70%)", pointerEvents:"none", animation:"glowPulse 6s ease-in-out infinite", zIndex:-1, top:"-100px" },
  glowCircle2: { position:"absolute", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle, rgba(255,140,40,0.06) 0%, transparent 70%)", pointerEvents:"none", animation:"glowPulse 8s ease-in-out infinite reverse", zIndex:-1, top:"50px", left:"-50px" },
  birthdayBadge: { background:"linear-gradient(135deg, rgba(255,60,160,0.2), rgba(255,160,60,0.2))", border:"1px solid rgba(255,100,160,0.3)", borderRadius:50, padding:"8px 22px", color:"#ffccd5", fontSize:12, letterSpacing:3, fontFamily:"'Outfit',sans-serif", fontWeight:500, marginBottom:20, backdropFilter:"blur(8px)", boxShadow:"0 0 20px rgba(255,80,160,0.15)", animation:"badgePop 2s ease-in-out infinite" },
  eyebrow: { color:"#ff8fcc", fontSize:11, letterSpacing:5, textTransform:"uppercase", marginBottom:16, fontWeight:500, textShadow:"0 0 16px rgba(255,143,204,0.8)", display:"flex", alignItems:"center", gap:10, animation:"fadeInUp 0.6s ease forwards" },
  eyebrowLine: { display:"inline-block", width:40, height:1, background:"linear-gradient(90deg, transparent, rgba(255,143,204,0.6))", animation:"lineExpand 0.8s ease forwards" },
  heroTitle: { fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(36px,8vw,72px)", color:"#fff", lineHeight:1.15, marginBottom:8, textShadow:"0 2px 30px rgba(0,0,0,0.9)", animation:"fadeInUp 0.7s ease 0.1s forwards", opacity:0, animationFillMode:"forwards" },
  subHero: { fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(16px,3.5vw,26px)", color:"rgba(255,204,225,0.85)", fontStyle:"italic", marginBottom:24, textShadow:"0 0 20px rgba(255,180,220,0.4)", animation:"fadeInUp 0.7s ease 0.2s forwards", opacity:0, animationFillMode:"forwards" },
  nameGlow: { background:"linear-gradient(90deg,#ff6bbd,#ffb3d9,#ffd080,#ffb3d9,#ff6bbd)", backgroundSize:"300% auto", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", animation:"shimmer 4s linear infinite", fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", filter:"drop-shadow(0 0 12px rgba(255,107,189,0.7))" },
  hateSpeech: { marginBottom:28, animation:"fadeInUp 0.7s ease 0.25s forwards", opacity:0, animationFillMode:"forwards" },
  hateBox: { display:"flex", alignItems:"center", justifyContent:"center", gap:14, flexWrap:"wrap", padding:"14px 28px", background:"rgba(255,80,150,0.08)", border:"1px solid rgba(255,80,150,0.2)", borderRadius:60, backdropFilter:"blur(10px)", boxShadow:"0 0 30px rgba(255,80,150,0.1)" },
  hateWord: { fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontWeight:700, fontSize:"clamp(18px,3.5vw,28px)", color:"#ff6bbd", animation:"hatePulse 3s ease-in-out infinite" },
  hateEquals: { fontSize:20, color:"rgba(255,200,220,0.5)", fontWeight:300 },
  loveWord: { fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontWeight:700, fontSize:"clamp(18px,3.5vw,28px)", color:"#ffd080", textShadow:"0 0 20px rgba(255,210,80,0.6)" },
  hateNote: { fontFamily:"'Caveat',cursive", fontSize:14, color:"rgba(255,180,210,0.5)", marginTop:8, letterSpacing:1 },
  quotePara: { lineHeight:2.4, maxWidth:560, marginBottom:32, animation:"fadeInUp 0.7s ease 0.3s forwards", opacity:0, animationFillMode:"forwards" },
  word1: { display:"inline", fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontWeight:600, fontSize:"clamp(15px,2.8vw,21px)", animation:"colorWord1 5s ease-in-out infinite", color:"#ff9de2" },
  word2: { display:"inline", fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontWeight:600, fontSize:"clamp(15px,2.8vw,21px)", animation:"colorWord2 5s ease-in-out 1.6s infinite", color:"#a8edea" },
  word3: { display:"inline", fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontWeight:600, fontSize:"clamp(15px,2.8vw,21px)", animation:"colorWord3 5s ease-in-out 3.2s infinite", color:"#c3b1e1" },
  primaryBtn: { position:"relative", background:"linear-gradient(135deg,#ff2d99,#ff6bbd,#ff99d0)", color:"#fff", border:"none", padding:"14px 32px", borderRadius:50, fontSize:14, cursor:"pointer", fontFamily:"'Outfit',sans-serif", fontWeight:600, letterSpacing:1, marginTop:8, boxShadow:"0 6px 30px rgba(255,45,153,0.45)", transition:"transform 0.2s", overflow:"hidden", textShadow:"0 1px 4px rgba(0,0,0,0.3)", animation:"fadeInUp 0.7s ease 0.4s forwards", opacity:0, animationFillMode:"forwards" },
  btnGlow: { position:"absolute", inset:0, background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)", animation:"shimmer 2s linear infinite", borderRadius:50 },
  scrollHint: { color:"rgba(255,180,210,0.3)", fontSize:11, marginTop:28, letterSpacing:3, animation:"fadeInUp 0.7s ease 0.5s forwards", opacity:0, animationFillMode:"forwards" },
  floatEmoji1: { position:"absolute", top:"12%", left:"3%", fontSize:26, animation:"floatIcon 4s ease-in-out infinite", opacity:0.45, pointerEvents:"none", filter:"drop-shadow(0 0 8px rgba(255,100,180,0.6))" },
  floatEmoji2: { position:"absolute", top:"28%", right:"4%", fontSize:22, animation:"floatIcon 5s ease-in-out 1s infinite", opacity:0.35, pointerEvents:"none", filter:"drop-shadow(0 0 6px rgba(255,200,80,0.6))" },
  floatEmoji3: { position:"absolute", bottom:"18%", left:"5%", fontSize:20, animation:"floatIcon 6s ease-in-out 2s infinite", opacity:0.35, pointerEvents:"none" },
  floatEmoji4: { position:"absolute", bottom:"25%", right:"3%", fontSize:24, animation:"floatIcon 4.5s ease-in-out 0.5s infinite", opacity:0.3, pointerEvents:"none" },
  pageTitle: { fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(26px,5.5vw,48px)", color:"#fff", marginBottom:10, lineHeight:1.2, textShadow:"0 2px 20px rgba(0,0,0,0.9)", animation:"fadeInUp 0.6s ease 0.1s forwards", opacity:0, animationFillMode:"forwards" },
  gallerySubtitle: { color:"rgba(255,210,230,0.7)", fontSize:15, lineHeight:1.8, marginBottom:24, animation:"fadeInUp 0.6s ease 0.2s forwards", opacity:0, animationFillMode:"forwards" },
  galleryHint: { color:"rgba(255,140,200,0.6)", fontSize:13, fontStyle:"italic" },
  timelineSub: { fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", color:"rgba(255,200,220,0.65)", fontSize:16, marginBottom:32, animation:"fadeInUp 0.6s ease 0.2s forwards", opacity:0, animationFillMode:"forwards" },
  dots: { position:"fixed", bottom:28, display:"flex", gap:10, zIndex:100 },
  dot: { width:9, height:9, borderRadius:"50%", cursor:"pointer", transition:"all 0.35s" },
};

// ─── Polaroid styles ──────────────────────────────────────────────────────────
export const pol = {
  gallery: { display:"flex", flexWrap:"wrap", justifyContent:"center", gap:28, padding:"20px 10px 30px", width:"100%", maxWidth:900 },
  wrap: { background:"#fdf5ee", borderRadius:4, padding:"12px 12px 52px", cursor:"pointer", transition:"transform 0.35s cubic-bezier(0.34,1.2,0.64,1), box-shadow 0.35s ease", position:"relative", width:185, flexShrink:0, animation:"polaroidIn 0.6s ease forwards", opacity:0, animationFillMode:"forwards" },
  tape: { position:"absolute", top:-10, left:"50%", transform:"translateX(-50%)", width:50, height:20, borderRadius:3, opacity:0.6, zIndex:2 },
  photoBox: { width:"100%", aspectRatio:"1", overflow:"hidden", position:"relative", borderRadius:2, background:"#e0d0c0" },
  img: { width:"100%", height:"100%", objectFit:"cover", display:"block", transition:"transform 0.4s ease" },
  overlay: { position:"absolute", inset:0, background:"linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.25))", borderRadius:2 },
  viewOverlay: { position:"absolute", inset:0, background:"rgba(0,0,0,0.55)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:6, transition:"opacity 0.3s ease", borderRadius:2 },
  viewTxt: { color:"white", fontSize:11, fontFamily:"'Outfit',sans-serif", fontWeight:500, letterSpacing:1 },
  bottom: { position:"absolute", bottom:0, left:0, right:0, padding:"10px 10px 12px", textAlign:"center", background:"#fdf5ee", borderRadius:"0 0 4px 4px" },
  caption: { fontFamily:"'Caveat',cursive", fontSize:13, color:"#4a2a3a", marginBottom:3, lineHeight:1.3 },
  hearts: { fontSize:10, letterSpacing:3, opacity:0.7 },
};

// ─── Strip styles ─────────────────────────────────────────────────────────────
export const strip = {
  wrap: { width:"100%", maxWidth:700, marginBottom:32, overflow:"hidden" },
  label: { color:"rgba(255,180,210,0.5)", fontSize:11, letterSpacing:3, textTransform:"uppercase", marginBottom:10, textAlign:"center" },
  track: { display:"flex", gap:10, animation:"slideStrip 18s linear infinite", width:"max-content" },
  thumb: { width:70, height:70, borderRadius:8, overflow:"hidden", flexShrink:0, cursor:"pointer", border:"1px solid rgba(255,120,180,0.25)", position:"relative" },
  img: { width:"100%", height:"100%", objectFit:"cover" },
  thumbOverlay: { position:"absolute", inset:0, background:"rgba(0,0,0,0.3)" },
};

// ─── Lightbox styles ──────────────────────────────────────────────────────────
export const lb = {
  overlay: { position:"fixed", inset:0, background:"rgba(0,0,0,0.92)", backdropFilter:"blur(16px)", zIndex:999, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:20, cursor:"pointer" },
  bgGlow: { position:"fixed", inset:0, pointerEvents:"none", zIndex:0 },
  card: { position:"relative", background:"rgba(12,5,20,0.96)", border:"1px solid rgba(255,120,200,0.15)", borderRadius:20, overflow:"hidden", maxWidth:480, width:"100%", boxShadow:"0 40px 80px rgba(0,0,0,0.8)", animation:"lbFadeIn 0.4s cubic-bezier(0.34,1.2,0.64,1) forwards", zIndex:1, cursor:"default" },
  closeBtn: { position:"absolute", top:14, right:14, background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.15)", color:"rgba(255,200,215,0.8)", width:34, height:34, borderRadius:"50%", fontSize:14, cursor:"pointer", zIndex:10, display:"flex", alignItems:"center", justifyContent:"center", backdropFilter:"blur(8px)" },
  arrowL: { position:"absolute", left:14, top:"42%", background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.15)", color:"white", width:38, height:38, borderRadius:"50%", fontSize:22, cursor:"pointer", zIndex:10, display:"flex", alignItems:"center", justifyContent:"center" },
  arrowR: { position:"absolute", right:14, top:"42%", background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.15)", color:"white", width:38, height:38, borderRadius:"50%", fontSize:22, cursor:"pointer", zIndex:10, display:"flex", alignItems:"center", justifyContent:"center" },
  photoWrap: { position:"relative", width:"100%", aspectRatio:"4/3", overflow:"hidden" },
  photoGlow: { position:"absolute", inset:"-20%", zIndex:0, pointerEvents:"none", filter:"blur(40px)" },
  photo: { width:"100%", height:"100%", objectFit:"cover", display:"block", position:"relative", zIndex:1 },
  vignette: { position:"absolute", inset:0, background:"radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.7) 100%)", zIndex:3, pointerEvents:"none" },
  nowPlaying: { display:"flex", alignItems:"center", justifyContent:"center", gap:8, padding:"8px 0 0", background:"rgba(12,5,20,0.96)" },
  musicDot: { width:7, height:7, borderRadius:"50%", background:"#ff6bbd", boxShadow:"0 0 8px rgba(255,107,189,0.8)", animation:"pulse 1.2s ease-in-out infinite", flexShrink:0 },
  nowPlayingTxt: { fontFamily:"'Outfit',sans-serif", fontSize:11, color:"rgba(255,180,220,0.6)", letterSpacing:2, textTransform:"uppercase" },
  captionArea: { padding:"14px 24px 24px", textAlign:"center" },
  captionHeart: { fontSize:20, marginBottom:8, animation:"heartBeat 1.5s ease infinite", display:"inline-block" },
  captionTitle: { fontFamily:"'Cormorant Garamond',serif", fontSize:22, color:"#ffccd5", marginBottom:8, fontWeight:600, textShadow:"0 0 16px rgba(255,180,200,0.5)" },
  captionNote: { fontFamily:"'Caveat',cursive", fontSize:16, color:"rgba(255,210,225,0.75)", marginBottom:16, lineHeight:1.5, fontStyle:"italic" },
  dotsRow: { display:"flex", gap:8, justifyContent:"center" },
  dot: { width:8, height:8, borderRadius:"50%", transition:"all 0.3s" },
  hint: { color:"rgba(255,180,200,0.3)", fontSize:11, letterSpacing:2, marginTop:18, zIndex:1, textAlign:"center" },
};

// ─── Timeline styles ──────────────────────────────────────────────────────────
export const tl = {
  wrap: { width:"100%", maxWidth:680, marginBottom:36 },
  item: { display:"flex", alignItems:"flex-start", gap:16, marginBottom:8, animation:"tlFadeIn 0.5s ease forwards", opacity:0, animationFillMode:"forwards" },
  yearBadge: { minWidth:64, padding:"5px 10px", borderRadius:20, border:"1px solid", fontSize:11, fontFamily:"'Outfit',sans-serif", letterSpacing:1, color:"rgba(255,220,200,0.8)", textAlign:"center", flexShrink:0, marginTop:14, backdropFilter:"blur(8px)" },
  dotCol: { display:"flex", flexDirection:"column", alignItems:"center", flexShrink:0, marginTop:8 },
  dot: { width:46, height:46, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0 },
  line: { width:2, flex:1, minHeight:24, background:"linear-gradient(to bottom, rgba(255,120,180,0.3), transparent)", marginTop:4 },
  card: { background:"rgba(255,255,255,0.03)", border:"1px solid", borderRadius:16, padding:"14px 18px", flex:1, backdropFilter:"blur(12px)", marginBottom:16, boxShadow:"0 4px 24px rgba(0,0,0,0.4)" },
  cardTitle: { fontFamily:"'Cormorant Garamond',serif", fontSize:17, marginBottom:6, fontWeight:600 },
  cardText: { fontFamily:"'Cormorant Garamond',serif", color:"rgba(255,218,228,0.72)", fontSize:14, lineHeight:1.8, fontStyle:"italic" },
  funnyTag: { display:"inline-block", marginTop:8, fontSize:11, color:"rgba(255,200,100,0.7)", fontFamily:"'Outfit',sans-serif", letterSpacing:1 },
  declaration: { width:"100%", maxWidth:600, background:"rgba(255,100,180,0.07)", border:"1px solid rgba(255,100,180,0.2)", borderRadius:24, padding:"32px 28px", textAlign:"center", marginBottom:36, backdropFilter:"blur(12px)", boxShadow:"0 0 40px rgba(255,80,150,0.1)" },
  declareEmoji: { fontSize:40, marginBottom:12, animation:"heartBeat 2s infinite", display:"inline-block", filter:"drop-shadow(0 0 10px rgba(255,100,160,0.7))" },
  declareTitle: { fontFamily:"'Cormorant Garamond',serif", fontSize:22, color:"#ffccd5", marginBottom:14, fontWeight:600, textShadow:"0 0 16px rgba(255,150,200,0.5)" },
  declareText: { fontFamily:"'Cormorant Garamond',serif", fontSize:17, color:"rgba(255,218,228,0.82)", lineHeight:2, fontStyle:"italic" },
  declareBold: { color:"#ffb3d4", fontWeight:700, display:"block", marginTop:8 },
  declareSig: { fontFamily:"'Caveat',cursive", fontSize:22, color:"#ff8fab", marginTop:16, textShadow:"0 0 12px rgba(255,100,140,0.5)" },
};

// ─── Wish page styles ─────────────────────────────────────────────────────────
export const wish = {
  wrap: { width:"100%", maxWidth:560, display:"flex", flexDirection:"column", alignItems:"center", gap:20, paddingBottom:20 },
  cakeWrap: { display:"flex", flexDirection:"column", alignItems:"center", marginBottom:8 },
  candlesRow: { display:"flex", gap:20, justifyContent:"center", marginBottom:6 },
  cakeTier1: { width:260, padding:"16px 20px", background:"linear-gradient(135deg, rgba(255,100,180,0.25), rgba(200,80,255,0.2))", border:"1px solid rgba(255,120,200,0.3)", borderRadius:"16px 16px 0 0", backdropFilter:"blur(10px)", textAlign:"center" },
  cakeTier2: { width:320, padding:"14px 20px", background:"linear-gradient(135deg, rgba(255,140,60,0.2), rgba(255,80,180,0.2))", border:"1px solid rgba(255,160,100,0.3)", borderBottom:"none", backdropFilter:"blur(10px)", textAlign:"center" },
  cakePlate: { width:360, height:12, background:"linear-gradient(90deg, rgba(255,200,100,0.3), rgba(255,120,180,0.4), rgba(255,200,100,0.3))", borderRadius:"0 0 20px 20px", border:"1px solid rgba(255,180,100,0.2)" },
  cakeDecor: { fontFamily:"'Caveat',cursive", fontSize:16, color:"#ffccd5", textShadow:"0 0 10px rgba(255,150,200,0.5)", letterSpacing:1 },
  cakeDecor2: { fontFamily:"'Cormorant Garamond',serif", fontSize:22, fontWeight:700, fontStyle:"italic", color:"#ffd080", textShadow:"0 0 12px rgba(255,200,80,0.6)" },
  prompt: { fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:17, color:"rgba(255,210,230,0.8)", textAlign:"center", lineHeight:1.7, maxWidth:400 },
  blowBtn: { position:"relative", background:"linear-gradient(135deg,#ff3399,#ff80cc,#ffb347)", color:"#fff", border:"none", padding:"14px 36px", borderRadius:50, fontSize:16, cursor:"pointer", fontFamily:"'Outfit',sans-serif", fontWeight:600, letterSpacing:1, boxShadow:"0 6px 30px rgba(255,50,150,0.5)", overflow:"hidden", animation:"pulse 2s infinite" },
  blowBtnGlow: { position:"absolute", inset:0, background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)", animation:"shimmer 2s linear infinite", borderRadius:50 },
  wishForm: { display:"flex", flexDirection:"column", alignItems:"center", gap:16, width:"100%", maxWidth:460, animation:"fadeInUp 0.6s ease forwards" },
  wishTitle: { fontFamily:"'Cormorant Garamond',serif", fontSize:28, color:"#ffccd5", fontStyle:"italic", textShadow:"0 0 20px rgba(255,150,200,0.5)" },
  wishSub: { fontFamily:"'Cormorant Garamond',serif", fontSize:16, color:"rgba(255,210,230,0.75)", textAlign:"center", lineHeight:1.8, fontStyle:"italic" },
  textarea: { width:"100%", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,120,180,0.25)", borderRadius:16, padding:"14px 18px", color:"#ffccd5", fontFamily:"'Caveat',cursive", fontSize:17, lineHeight:1.7, backdropFilter:"blur(8px)", boxShadow:"inset 0 2px 8px rgba(0,0,0,0.3)", resize:"none", outline:"none" },
  submitBtn: { position:"relative", background:"linear-gradient(135deg,#ff3399,#ff85cc)", color:"#fff", border:"none", padding:"13px 32px", borderRadius:50, fontSize:15, cursor:"pointer", fontFamily:"'Outfit',sans-serif", fontWeight:600, boxShadow:"0 6px 24px rgba(255,50,150,0.4)", letterSpacing:1 },
  finalWrap: { display:"flex", flexDirection:"column", alignItems:"center", gap:18, animation:"fadeInUp 0.6s ease forwards" },
  finalTitle: { fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(28px,6vw,48px)", color:"#fff", textShadow:"0 0 30px rgba(255,120,180,0.5)", fontStyle:"italic" },
  wishBubble: { background:"rgba(255,100,180,0.1)", border:"1px solid rgba(255,100,180,0.25)", borderRadius:20, padding:"16px 24px", maxWidth:400, backdropFilter:"blur(10px)" },
  wishBubbleTxt: { fontFamily:"'Caveat',cursive", fontSize:18, color:"#ffccd5", textAlign:"center", lineHeight:1.7, fontStyle:"italic" },
  finalNote: { fontFamily:"'Cormorant Garamond',serif", fontSize:16, color:"rgba(255,210,230,0.75)", textAlign:"center", lineHeight:1.9, fontStyle:"italic" },
  finalEmojis: { display:"flex", gap:4, flexWrap:"wrap", justifyContent:"center" },
};

// ─── All CSS keyframes ────────────────────────────────────────────────────────
export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600&family=Caveat:wght@400;600;700&display=swap');
  * { box-sizing:border-box; margin:0; padding:0; }

  @keyframes twinkle { 0%,100%{opacity:0.1;transform:scale(0.7)} 50%{opacity:0.9;transform:scale(1.4)} }
  @keyframes twinkleBright { 0%,100%{opacity:0.5;transform:scale(1)} 50%{opacity:1;transform:scale(2);box-shadow:0 0 8px white,0 0 16px rgba(255,200,240,0.7)} }
  @keyframes shootStar { 0%{transform:translateX(0) translateY(0) rotate(-30deg);opacity:0;width:3px} 8%{opacity:1} 75%{opacity:0.9;width:180px} 100%{transform:translateX(400px) translateY(220px) rotate(-30deg);opacity:0;width:220px} }
  @keyframes confettiFall { 0%{transform:translateY(-20px) rotate(0deg);opacity:0} 8%{opacity:1} 92%{opacity:0.8} 100%{transform:translateY(110vh) rotate(720deg);opacity:0} }
  @keyframes orbFloat { 0%,100%{transform:translate(0,0) scale(1);opacity:0.6} 33%{transform:translate(40px,-30px) scale(1.15);opacity:1} 66%{transform:translate(-20px,35px) scale(0.88);opacity:0.5} }
  @keyframes shimmer { 0%{background-position:-300% center} 100%{background-position:300% center} }
  @keyframes nebulaDrift { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(30px,-20px) scale(1.06)} 66%{transform:translate(-15px,25px) scale(0.95)} }
  @keyframes fadeInUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
  @keyframes floatIcon { 0%,100%{transform:translateY(0) rotate(-5deg)} 50%{transform:translateY(-14px) rotate(5deg)} }
  @keyframes glowPulse { 0%,100%{opacity:0.3;transform:scale(1)} 50%{opacity:0.7;transform:scale(1.1)} }
  @keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.12)} }
  @keyframes bounceIcon { from{transform:translateY(0) rotate(-3deg)} to{transform:translateY(-14px) rotate(3deg)} }
  @keyframes lineExpand { from{width:0;opacity:0} to{width:40px;opacity:1} }
  @keyframes slideStrip { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
  @keyframes lbFadeIn { from{opacity:0;transform:scale(0.88) translateY(30px)} to{opacity:1;transform:scale(1) translateY(0)} }
  @keyframes polaroidIn { from{opacity:0;transform:translateY(40px) scale(0.85)} to{opacity:1} }
  @keyframes lbHeart { 0%{transform:translateY(0) scale(0.4);opacity:1} 100%{transform:translateY(-100vh) scale(0.9);opacity:0} }
  @keyframes heartBeat { 0%,100%{transform:scale(1)} 30%{transform:scale(1.3)} 60%{transform:scale(1.1)} }
  @keyframes badgePop { 0%,100%{transform:scale(1)} 50%{transform:scale(1.05)} }
  @keyframes hatePulse { 0%,100%{text-shadow:0 0 20px rgba(255,80,150,0.6)} 50%{text-shadow:0 0 40px rgba(255,80,150,1),0 0 80px rgba(255,80,150,0.5)} }
  @keyframes colorWord1 { 0%{color:#ff9de2;text-shadow:0 0 14px rgba(255,157,226,0.9)} 33%{color:#ffd080;text-shadow:0 0 14px rgba(255,208,128,0.9)} 66%{color:#a0f0ed;text-shadow:0 0 14px rgba(160,240,237,0.9)} 100%{color:#ff9de2} }
  @keyframes colorWord2 { 0%{color:#a8edea;text-shadow:0 0 14px rgba(168,237,234,0.9)} 33%{color:#ff9de2;text-shadow:0 0 14px rgba(255,157,226,0.9)} 66%{color:#ffd080;text-shadow:0 0 14px rgba(255,208,128,0.9)} 100%{color:#a8edea} }
  @keyframes colorWord3 { 0%{color:#c3b1e1;text-shadow:0 0 16px rgba(195,177,225,1)} 33%{color:#ffccd5;text-shadow:0 0 16px rgba(255,204,213,1)} 66%{color:#ffd080;text-shadow:0 0 16px rgba(255,208,128,1)} 100%{color:#c3b1e1} }
  @keyframes candleFlicker { from{transform:scaleY(1) rotate(-2deg)} to{transform:scaleY(1.15) rotate(2deg)} }
  @keyframes ringPulse { 0%,100%{transform:scale(1);opacity:0.5} 50%{transform:scale(1.8);opacity:0} }
  @keyframes cursorGlowAnim { 0%,100%{opacity:0.4} 50%{opacity:0.7} }
  @keyframes tlFadeIn { from{opacity:0;transform:translateX(-20px)} to{opacity:1;transform:translateX(0)} }

  button{cursor:pointer;} button:hover{filter:brightness(1.15);}
  ::-webkit-scrollbar{width:4px} ::-webkit-scrollbar-track{background:transparent} ::-webkit-scrollbar-thumb{background:rgba(255,107,189,0.3);border-radius:4px}
`;

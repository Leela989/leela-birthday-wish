import { useState } from "react";
import { pol } from "./birthdayStyles";

export default function Polaroid({ memory, index, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => onClick(index)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...pol.wrap,
        transform: hovered
          ? "rotate(0deg) scale(1.07) translateY(-12px)"
          : `rotate(${memory.rotate}) scale(1)`,
        boxShadow: hovered
          ? `0 30px 60px rgba(0,0,0,0.7), 0 0 50px ${memory.color}`
          : "0 14px 40px rgba(0,0,0,0.6)",
        zIndex: hovered ? 10 : index,
        animationDelay: `${index * 0.12}s`,
      }}
    >
      {/* Tape strip */}
      <div style={{ ...pol.tape, background: memory.color.replace("0.3","0.55") }} />

      {/* Photo */}
      <div style={pol.photoBox}>
        <img src={memory.src} alt={memory.caption} style={pol.img} />
        <div style={pol.overlay} />
        <div style={{ ...pol.viewOverlay, opacity: hovered ? 1 : 0 }}>
          <span style={{ fontSize: 26 }}>🎵</span>
          <span style={pol.viewTxt}>Play Memory</span>
        </div>
      </div>

      {/* Caption */}
      <div style={pol.bottom}>
        <p style={pol.caption}>{memory.caption}</p>
        <div style={{ ...pol.hearts, color: memory.color.replace("0.3","0.9") }}>♥ ♥ ♥</div>
      </div>
    </div>
  );
}

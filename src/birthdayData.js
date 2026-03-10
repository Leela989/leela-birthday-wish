// ─── Memory photos ─────────────────────────────────────────────────────────────
import photo1 from "../src/images/photo1.jpg";
import photo13 from "../src/images/photo13.jpg";
import photo14 from "../src/images/photo14.jpg";
import photo10 from "../src/images/photo10.jpg";
import photo5 from "../src/images/photo5.jpg";
import photo6 from "../src/images/photo6.jpg";
import photo11 from "../src/images/photo11.png";
import photo8 from "../src/images/photo8.jpg";

export const pages = ["Home 🎂", "Our Memories 📸", "A Letter For You 💌", "Make a Wish ✨"];

export const memories = [
  { id: 5, src: photo5, caption: "This one 🥺💖",               note: "Happiest Birthday Fromm Ammaaa💖",   rotate: "-3deg", color: "rgba(80,220,180,0.3)",  song: "/music/song92.mp3" },
  { id: 8, src: photo8, caption: "11 years and counting 🎂",    note: "You are my favorite enemy",  rotate: "4deg",  color: "rgba(255,80,120,0.3)",  song: "/music/song99.mp3" },
  { id: 1, src: photo13, caption: "Us being us 🥺",             note: "Infinite fun and Infinite Love.",                   rotate: "-4deg", color: "rgba(255,100,180,0.3)", song: "/music/song101.mp3" },
  { id: 7, src: photo14, caption: "My People 💕",                note: "You make everything feel like home.",           rotate: "-5deg", color: "rgba(180,120,255,0.3)", song: "/music/song102.mp3" },
  { id: 2, src: photo10, caption: "Our favourite chaos 😭",       note: "We all Grew up together",        rotate: "3deg",  color: "rgba(200,100,255,0.3)", song: "/music/song103.mp3" },
  { id: 3, src: photo6, caption: "Literally iconic 💅",         note: "Best Memories all time",       rotate: "-2deg", color: "rgba(100,180,255,0.3)", song: "/music/song104.mp3" },
  { id: 4, src: photo1, caption: "Best day ever 🌸",            note: "Every memory with you is my favourite.",        rotate: "5deg",  color: "rgba(255,200,80,0.3)",  song: "/music/song97.mp3" },
  { id: 6, src: photo11, caption: "Us forever 🌙",               note: "All we have is One story. Infinite love.",         rotate: "2deg",  color: "rgba(255,140,100,0.3)", song: "/music/song98.mp3" },
];



// ─── Letter lines for Page 3 ──────────────────────────────────────────────────
export const letterLines = [
  { text: "Leela,",                                                                              delay: 0,    style: "salutation" },
  { text: "Happiest Birthday",                                           delay: 0.7,  style: "big"    },
  { text: "Wishing you to celebrate 100 birthdays",                                         delay: 1.2,  style: "big"    },
  { text: "With your Loved ones.",                                 delay: 1.8,  style: "big"   },
  { text: "We laughed, cried, enjoyed together",                                  delay: 3.0,  style: "big"       },
  { text: "Every moment has its own special place",                                        delay: 3.5,  style: "big"       },
  { text: "You are not that much beautiful like you think",                                                                    delay: 4.8,  style: "big"        },
  { text: "Looks average but that's okay, I wont consider beauty in friendship😂😂😂...",                                                     delay: 5.3,  style: "big"        },
  { text: "You are so Lucky",                                                                      delay: 10.0, style: "big"       },
  { text: "for having me in your life.",                                                delay: 10.5, style: "big"       },
  { text: "I pray the God to continue your luck till the end😂😂😂",                                             delay: 11.0, style: "big"   },
  { text: "Happy Birthday, my Leela. 🎂",                                                      delay: 12.2, style: "closing"    },
  { text: "I hate you.",                                                                        delay: 13.0, style: "signature"  },
  { text: "— Potti 🌙",                                                                        delay: 13.8, style: "from"       },
];

// ─── Background data ──────────────────────────────────────────────────────────
export const starField = Array.from({ length: 180 }, (_, i) => ({
  id: i, top: Math.random() * 100, left: Math.random() * 100,
  size: Math.random() * 3 + 0.5, delay: Math.random() * 8,
  duration: Math.random() * 5 + 2, opacity: Math.random() * 0.8 + 0.2,
  bright: Math.random() > 0.85,
}));

export const shootingStars = Array.from({ length: 8 }, (_, i) => ({
  id: i, top: Math.random() * 55, left: Math.random() * 65,
  delay: i * 4 + Math.random() * 6, duration: Math.random() * 1.2 + 0.8,
}));

export const floatingOrbs = Array.from({ length: 6 }, (_, i) => ({
  id: i, size: Math.random() * 200 + 80, top: Math.random() * 100, left: Math.random() * 100,
  delay: Math.random() * 10, duration: Math.random() * 20 + 15,
  color: ["rgba(255,80,180,0.07)","rgba(180,60,255,0.07)","rgba(255,180,60,0.05)",
          "rgba(60,180,255,0.05)","rgba(255,100,100,0.05)","rgba(80,255,180,0.04)"][i],
}));

export const confettiBits = Array.from({ length: 22 }, (_, i) => ({
  id: i, left: Math.random() * 100, delay: Math.random() * 6, duration: Math.random() * 6 + 5,
  emoji: ["🎉","🎊","✨","🎈","💕","🌟","🎂","🥳","💖","⭐"][Math.floor(Math.random() * 10)],
  size: Math.random() * 10 + 14,
}));

import { motion } from "framer-motion";
import { useMemo } from "react";
import CountdownTimer from "./CountdownTimer";
import MultiLanguageTitle from "./MultiLanguageTitle";
import { Calendar, MapPin, Users, GraduationCap, Trophy } from "lucide-react";

/* ================= FLOATING SYMBOLS ================= */

const FLOATING_SYMBOLS = ["{ }", "< />", "⚛", "</>", "0 1", "λ", "∞"];

/* ================= CINEMATIC BACKGROUND ================= */

const CinematicBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background-secondary" />

      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle at center, hsl(var(--primary) / 0.35), transparent 70%)",
        }}
      />

      <motion.div
        className="absolute inset-0"
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "linear-gradient(120deg, transparent 40%, hsl(var(--primary) / 0.15) 50%, transparent 60%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 50%, rgba(0,0,0,0.75) 100%)",
        }}
      />
    </div>
  );
};

/* ================= SMALL PARTICLES ================= */

const SmallParticles = () => {

  const particles = useMemo(() => {

    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 6 + Math.random() * 6,
      delay: Math.random() * 5,
    }));

  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">

      {particles.map((p) => (

        <motion.div
          key={p.id}
          className="absolute w-[2px] h-[2px] rounded-full bg-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0], y: [-20, -120] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            boxShadow: "0 0 8px hsl(var(--primary) / 0.9)",
          }}
        />

      ))}

    </div>
  );
};

/* ================= FLOATING CODE SYMBOLS ================= */

const CodingParticles = () => {

  const items = useMemo(() => {

    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      symbol:
        FLOATING_SYMBOLS[
          Math.floor(Math.random() * FLOATING_SYMBOLS.length)
        ],
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 10 + Math.random() * 6,
      delay: Math.random() * 6,
    }));

  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">

      {items.map((item) => (

        <motion.div
          key={item.id}
          className="absolute font-mono text-[clamp(10px,2vw,18px)] select-none"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [-30, -160],
            rotate: [0, 360],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            color: "hsl(var(--primary))",
            textShadow: "0 0 10px hsl(var(--primary) / 0.8)",
          }}
        >
          {item.symbol}
        </motion.div>

      ))}

    </div>
  );
};

/* ================= HERO SECTION ================= */

const HeroSection = () => {
  return (

    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[clamp(80px,12vw,140px)]"
    >

      <CinematicBackground />
      <SmallParticles />
      <CodingParticles />

      {/* CONTENT */}

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-[clamp(16px,5vw,32px)] text-center">

        {/* TITLE */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <MultiLanguageTitle
            className="text-[clamp(28px,8vw,90px)] font-black tracking-tight mb-[clamp(20px,5vw,32px)]"
          />
        </motion.div>

        {/* SUBTITLE */}

        <motion.div
          className="mb-[clamp(20px,5vw,48px)] space-y-[clamp(10px,3vw,20px)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >

          <h2
            className="font-semibold uppercase tracking-[0.2em]"
            style={{
              fontSize: "clamp(10px,3vw,20px)",
              textShadow: "0 0 12px hsl(var(--primary) / 0.4)",
            }}
          >
            A National Level 24-Hour Hackathon
          </h2>

          <div className="flex flex-col items-center space-y-2">

            <span className="text-[clamp(9px,2vw,12px)] uppercase tracking-[0.4em] text-muted-foreground">
              Organized by
            </span>

            <h3 className="text-[clamp(12px,3vw,18px)] font-semibold tracking-[0.15em]">
              D.Y.Patil School of Engineering & Management
            </h3>

            <motion.div
              className="h-[2px] bg-primary/50"
              initial={{ width: 0 }}
              animate={{ width: "160px" }}
              transition={{ delay: 0.8, duration: 1 }}
            />

          </div>

        </motion.div>

        {/* INFO CHIPS */}

        <motion.div
          className="flex flex-wrap justify-center gap-[clamp(6px,2vw,12px)] mb-[clamp(20px,5vw,48px)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >

          {[
            { icon: Calendar, text: "April 24, 2026" },
            { icon: MapPin, text: "D.Y.Patil Campus" },
            { icon: Users, text: "Teams of 2–4" },
            { icon: GraduationCap, text: "Open to All Students" },
            { icon: Trophy, text: "₹50,000 Prize Pool" },
          ].map(({ icon: Icon, text }) => (

            <div
              key={text}
              className="flex items-center gap-2 px-[clamp(8px,2vw,16px)] py-[clamp(6px,1.5vw,10px)] bg-white/10 backdrop-blur-md rounded-lg text-[clamp(10px,2.5vw,14px)]"
            >
              <Icon size={14} className="text-primary" />
              <span>{text}</span>
            </div>

          ))}

        </motion.div>

        {/* COUNTDOWN */}

        <motion.div
          className="mb-[clamp(20px,5vw,48px)] scale-[0.9] sm:scale-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <CountdownTimer />
        </motion.div>

        {/* BUTTONS */}

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-[clamp(10px,2vw,16px)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >

          <a href="https://unstop.com/hackathons/hackoutsav-d-y-patil-school-of-engineering-and-management-dypsem-kolhapur-1653004" className="glow-button px-[clamp(16px,4vw,24px)] py-3 text-sm">
            Register Now
          </a>

          <a href="#domains" className="glow-button-secondary px-[clamp(16px,4vw,24px)] py-3 text-sm">
            Explore Domains
          </a>

          <a href="#journey" className="glow-button-secondary px-[clamp(16px,4vw,24px)] py-3 text-sm">
            View Journey
          </a>

        </motion.div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-secondary to-transparent" />

    </section>
  );
};

export default HeroSection;
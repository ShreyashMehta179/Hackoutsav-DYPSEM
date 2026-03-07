import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LANGUAGES = [
  "ಹ್ಯಾಕೌಟ್ಸವ್ 2026",   // Kannada
  "హ్యాకౌట్సవ్ 2026",   // Telugu
  "હેકઆઉટ્સવ 2026",    // Gujarati
  "हैकआउत्सव 2026",    // Hindi
  "ஹாக்அவுட்ஸவ் 2026",  // Tamil
  "हॅकआउट्सव 2026",    // Marathi
  "ഹാക്കൗട്സവ് 2026",  // Malayalam
  "HACKOUTSAV 2026",   // English
];

export default function MultiLanguageTitle({
  className,
}: {
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGlitch(true);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % LANGUAGES.length);
        setGlitch(false);
      }, 200);
    }, 2500);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="relative flex justify-center items-center">

      <AnimatePresence mode="wait">
        <motion.h1
          key={LANGUAGES[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={className}
        >
          {LANGUAGES[index]}
        </motion.h1>
      </AnimatePresence>

      {/* Digital Horizontal Glitch */}
      {glitch && (
        <motion.div
          className={`${className} absolute pointer-events-none`}
          initial={{ x: -8 }}
          animate={{ x: 8 }}
          transition={{
            duration: 0.08,
            repeat: 4,
            repeatType: "reverse",
          }}
          style={{
            opacity: 0.8,
            mixBlendMode: "screen",
          }}
        >
          {LANGUAGES[index]}
        </motion.div>
      )}

    </div>
  );
}
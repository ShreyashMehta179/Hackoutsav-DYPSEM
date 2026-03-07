import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const InteractiveHeroText = ({ text, className }: { text: string; className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [letterOffsets, setLetterOffsets] = useState<{ x: number; y: number; glow: number }[]>(
    text.split("").map(() => ({ x: 0, y: 0, glow: 0 }))
  );
  const isMobile = useIsMobile();

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isMobile || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const spans = containerRef.current.querySelectorAll<HTMLSpanElement>("[data-letter]");

    const newOffsets = Array.from(spans).map((span) => {
      const sr = span.getBoundingClientRect();
      const cx = sr.left + sr.width / 2;
      const cy = sr.top + sr.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 200;

      if (dist < maxDist) {
        const factor = (1 - dist / maxDist) * 4;
        return {
          x: (dx / dist) * factor * -1,
          y: (dy / dist) * factor * -1,
          glow: 1 - dist / maxDist,
        };
      }
      return { x: 0, y: 0, glow: 0 };
    });

    setLetterOffsets(newOffsets);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove, isMobile]);

  return (
    <div ref={containerRef} className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          data-letter
          className="inline-block"
          animate={{
            x: letterOffsets[i]?.x || 0,
            y: letterOffsets[i]?.y || 0,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          style={{
            textShadow: letterOffsets[i]?.glow
              ? `0 0 ${20 + letterOffsets[i].glow * 30}px hsl(var(--primary) / ${0.5 + letterOffsets[i].glow * 0.5})`
              : undefined,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

export default InteractiveHeroText;

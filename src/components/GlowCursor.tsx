import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const GlowCursor = () => {
  const isMobile = useIsMobile();
  const outerRef = useRef({ x: 0, y: 0 });
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [outerPos, setOuterPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (isMobile) return;

    let targetX = -100, targetY = -100;

    const handleMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const smoothOuter = () => {
      outerRef.current.x += (targetX - outerRef.current.x) * 0.12;
      outerRef.current.y += (targetY - outerRef.current.y) * 0.12;
      setOuterPos({ x: outerRef.current.x, y: outerRef.current.y });
      rafRef.current = requestAnimationFrame(smoothOuter);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [role='button'], .glass-card-hover, .glass-card");
      setHovering(!!interactive);
    };

    const handleLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseleave", handleLeave);
    rafRef.current = requestAnimationFrame(smoothOuter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile, visible]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full border mix-blend-screen"
        style={{
          borderColor: hovering ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.4)",
          boxShadow: hovering
            ? "0 0 20px hsl(var(--primary) / 0.4), 0 0 40px hsl(var(--primary) / 0.2)"
            : "0 0 10px hsl(var(--primary) / 0.15)",
          width: hovering ? 50 : 30,
          height: hovering ? 50 : 30,
          left: outerPos.x - (hovering ? 25 : 15),
          top: outerPos.y - (hovering ? 25 : 15),
          opacity: visible ? 1 : 0,
          transition: "width 0.3s, height 0.3s, border-color 0.3s, box-shadow 0.3s, opacity 0.3s",
        }}
      />
      {/* Inner dot */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          width: 5,
          height: 5,
          left: pos.x - 2.5,
          top: pos.y - 2.5,
          backgroundColor: "hsl(var(--primary))",
          boxShadow: "0 0 8px hsl(var(--primary) / 0.8)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />
    </>
  );
};

export default GlowCursor;

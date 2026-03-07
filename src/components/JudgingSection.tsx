import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const criteria = [
  { label: "Innovation", value: 30, color: "#00FFFF" },
  { label: "Technical Depth", value: 20, color: "#8B5CF6" },
  { label: "Impact", value: 20, color: "#F97316" },
  { label: "Feasibility", value: 15, color: "#22D3EE" },
  { label: "Presentation", value: 15, color: "#3B82F6" },
];

const tooltips: Record<string, string> = {
  Innovation: "Originality and creativity of the solution",
  "Technical Depth": "Code quality, architecture, and complexity",
  Impact: "Potential real-world impact and scalability",
  Feasibility: "Practicality of implementation",
  Presentation: "Clarity of pitch and demo quality",
};

type CircularBarProps = {
  label: string;
  value: number;
  color: string;
  delay: number;
  inView: boolean;
};

const CircularBar = ({
  label,
  value,
  color,
  delay,
  inView,
}: CircularBarProps) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  const progress = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(progress, value, {
      duration: 2,
      delay,
      ease: "easeOut",
      onUpdate: (v) => {
        setDisplay(Math.round(v));
      },
    });

    return () => controls.stop();
  }, [inView, delay, progress, value]);

  const strokeDashoffset =
    circumference - (display / 100) * circumference;

  return (
    <motion.div
      className="glass-card-hover p-5 flex flex-col items-center text-center relative group rounded-xl"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay }}
    >
      <div className="relative w-24 h-24 mb-4">

        <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">

          {/* Background ring */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="6"
          />

          {/* Animated progress ring */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{
              filter: `drop-shadow(0px 0px 6px ${color})`,
              transition: "stroke-dashoffset 0.2s linear",
            }}
          />

        </svg>

        {/* Percentage Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-heading text-lg font-bold text-foreground">
            {display}%
          </span>
        </div>
      </div>

      {/* Label */}
      <span className="font-heading text-sm font-semibold text-foreground tracking-wide">
        {label}
      </span>

      {/* Tooltip */}
      <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="glass-card px-3 py-2 text-xs text-muted-foreground rounded-lg whitespace-nowrap">
          {tooltips[label]}
        </div>
      </div>
    </motion.div>
  );
};

const JudgingSection = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const total = criteria.reduce((sum, c) => sum + c.value, 0);

  return (
    <section
      id="judging"
      className="bg-background-secondary py-24 px-4"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Judging <span className="neon-text">Criteria</span>
          </h2>

          <p className="text-muted-foreground text-lg mt-4">
            Projects are evaluated across five key dimensions.
          </p>

          {/* Total Indicator */}
          <p className="text-primary font-semibold mt-2">
            Total Evaluation Weight: {total}%
          </p>
        </motion.div>

        {/* Circular Progress Bars */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {criteria.map((c, i) => (
            <CircularBar
              key={c.label}
              label={c.label}
              value={c.value}
              color={c.color}
              delay={0.3 + i * 0.2}
              inView={inView}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default JudgingSection;
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Code, Mic } from "lucide-react";

const rounds = [
  {
    icon: FileText,
    round: "Round 1",
    title: "Online Idea Submission",
    date: "12 Mar 2026 – 01 Apr 2026",
    items: [
      "Select your domain",
      "Submit 250-word abstract",
      "Upload PPT presentation",
      "Upload 2-minute video pitch",
      "Shortlisting by panel",
    ],
    color: "primary" as const,
  },
  {
    icon: Code,
    round: "Round 2",
    title: "24-Hour Hackathon",
    date: "24 Apr 2026 – 25 Apr 2026",
    items: [
      "Problem statement reveal",
      "Intense coding sprint",
      "Mentor checkpoint reviews",
      "GitHub submission",
      "WiFi, Power & Food provided",
    ],
    color: "secondary" as const,
  },
  {
    icon: Mic,
    round: "Round 3",
    title: "Grand Finale",
    items: [
      "7-minute pitch presentation",
      "3-minute Q&A with judges",
      "Live product demo",
      "Winners announced on stage",
    ],
    color: "accent" as const,
  },
];

const colorMap = {
  primary: {
    text: "neon-text",
    bg: "bg-primary/10",
    border: "border-primary/30",
  },
  secondary: {
    text: "neon-text-blue",
    bg: "bg-secondary/10",
    border: "border-secondary/30",
  },
  accent: {
    text: "neon-text-orange",
    bg: "bg-accent/10",
    border: "border-accent/30",
  },
};

const TimelineSection = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="journey"
      className="bg-background-secondary py-20 px-4"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-3xl md:text-4xl font-bold">
            The <span className="neon-text">Hackathon</span> Journey
          </h2>

          <p className="section-subtitle mt-3 text-muted-foreground text-sm md:text-base">
            Three rounds, one epic experience.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">

          {/* Vertical Line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px]"
            style={{
              background:
                "linear-gradient(to bottom, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)))",
              boxShadow:
                "0 0 8px hsl(var(--primary)/0.5), 0 0 20px hsl(var(--primary)/0.3)",
            }}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {rounds.map((round, i) => {
            const colors = colorMap[round.color];
            const Icon = round.icon;

            return (
              <motion.div
                key={round.round}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.25 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-10 mb-16 ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >

                {/* Timeline Dot */}
                <motion.div
                  className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${colors.bg} border-2 ${colors.border} z-10`}
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(0,0,0,0)",
                      "0 0 12px rgba(255,255,255,0.6)",
                      "0 0 0px rgba(0,0,0,0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                />

                {/* Card */}
                <div className="ml-10 md:ml-0 md:w-[45%]">
                  <div className="glass-card-hover p-6 rounded-xl">

                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center`}
                      >
                        <Icon size={20} className={colors.text} />
                      </div>

                      <div>
                        <span
                          className={`text-xs tracking-widest uppercase font-semibold ${colors.text}`}
                        >
                          {round.round}
                        </span>

                        <h3 className="font-semibold text-foreground text-sm md:text-base">
                          {round.title}
                        </h3>

                        {/* Date */}
                        {round.date && (
                          <p className="text-xs text-muted-foreground mt-1">
                            {round.date}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Items */}
                    <ul className="space-y-2">
                      {round.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span
                            className={`mt-[6px] w-1.5 h-1.5 rounded-full ${colors.bg}`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Users,
  Code,
  Palette,
  Brain,
  Mic,
  Lightbulb,
  Trophy,
} from "lucide-react";

/* ROLE CARDS */

const skills = [
  { icon: Code, label: "Developer" },
  { icon: Palette, label: "Designer" },
  { icon: Brain, label: "AI Specialist" },
  { icon: Mic, label: "Presenter" },
];

/* TEAM REQUIREMENTS */

const rules = [
  "2–4 members per team",
  "Cross-college teams allowed",
  "One team leader is mandatory",
  "All members must be currently enrolled students",
];

/* TEAM FORMATION TIPS */

const tips = [
  "Choose teammates with complementary skills",
  "Clearly divide roles before the hackathon",
  "Pick a real-world problem to solve",
  "Communicate effectively during development",
];

/* WINNING TEAM QUALITIES */

const winning = [
  "Strong problem statement",
  "Functional prototype or MVP",
  "Clear demo and presentation",
  "Good teamwork and time management",
];

const TeamSection = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className="bg-background-secondary py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-3xl md:text-4xl font-bold">
            Build Your <span className="neon-text">Team</span>
          </h2>

          <p className="section-subtitle mt-3 text-sm md:text-base text-muted-foreground">
            Form your dream squad. Cross-college teams welcome!
          </p>
        </motion.div>

        {/* THREE BLOCKS */}

        <div className="grid md:grid-cols-3 gap-8 mb-16">

          {/* TEAM REQUIREMENTS */}

          <motion.div
            className="p-7 rounded-xl border border-primary/20 
            bg-background backdrop-blur-sm shadow-md hover:border-primary/40 transition"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <Users size={22} className="text-primary" />
              <h3 className="font-bold text-foreground text-base">
                Team Requirements
              </h3>
            </div>

            <ul className="space-y-3 text-sm text-muted-foreground">
              {rules.map((rule) => (
                <li key={rule} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  {rule}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* TEAM FORMATION TIPS */}

          <motion.div
            className="p-7 rounded-xl border border-primary/20 
            bg-background backdrop-blur-sm shadow-md hover:border-primary/40 transition"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <Lightbulb size={22} className="text-primary" />
              <h3 className="font-bold text-foreground text-base">
                Team Formation Tips
              </h3>
            </div>

            <ul className="space-y-3 text-sm text-muted-foreground">
              {tips.map((tip) => (
                <li key={tip} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  {tip}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* WINNING TEAM QUALITIES */}

          <motion.div
            className="p-7 rounded-xl border border-primary/20 
            bg-background backdrop-blur-sm shadow-md hover:border-primary/40 transition"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <Trophy size={22} className="text-primary" />
              <h3 className="font-bold text-foreground text-base">
                Winning Team Qualities
              </h3>
            </div>

            <ul className="space-y-3 text-sm text-muted-foreground">
              {winning.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* SUGGESTED ROLES */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xs text-muted-foreground text-center mb-8 tracking-widest uppercase">
            Suggested Roles
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">

            {skills.map((skill, i) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.label}
                  className="aspect-square border border-primary/20 
                  hover:border-primary/40 rounded-xl 
                  flex flex-col items-center justify-center 
                  text-center shadow-md backdrop-blur-sm
                  transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{
                    y: -6,
                    scale: 1.05,
                    boxShadow: "0 0 18px rgba(0,255,255,0.25)",
                  }}
                >
                  <Icon size={26} className="text-primary mb-3" />

                  <span className="text-sm font-medium text-foreground">
                    {skill.label}
                  </span>
                </motion.div>
              );
            })}

          </div>
        </motion.div>

        {/* REGISTER BUTTON */}

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#contact"
            className="glow-button px-6 py-3 text-sm"
          >
            Register Your Team
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default TeamSection;
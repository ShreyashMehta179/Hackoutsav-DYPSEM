import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  HeartPulse,
  Leaf,
  Tractor,
  Lightbulb,
  GraduationCap,
  Cpu,
} from "lucide-react";

/* ================= INSPIRATION AREAS ================= */

const areas = [
  {
    icon: Lightbulb,
    name: "Open Innovation",
    desc: "Build any innovative solution that solves real-world problems across any domain.",
    skills: ["Creativity", "Problem Solving", "Any Tech Stack"],
  },
  {
    icon: Brain,
    name: "AI & Smart Systems",
    desc: "Use artificial intelligence, machine learning, or automation to build impactful solutions.",
    skills: ["Python", "Machine Learning", "Automation"],
  },
  {
    icon: Leaf,
    name: "Sustainability",
    desc: "Create solutions addressing climate change, renewable energy, and sustainable living.",
    skills: ["IoT", "Data Analysis", "Web Development"],
  },
  {
    icon: HeartPulse,
    name: "Healthcare & Wellness",
    desc: "Build technology solutions that improve healthcare accessibility and wellbeing.",
    skills: ["Mobile Apps", "AI", "IoT"],
  },
  {
    icon: Tractor,
    name: "Agriculture & Rural Tech",
    desc: "Innovate solutions to support farmers, agriculture supply chains, and rural development.",
    skills: ["IoT", "Sensors", "Mobile Apps"],
  },
  {
    icon: GraduationCap,
    name: "Education & Learning",
    desc: "Develop tools that improve learning experiences, digital education, and accessibility.",
    skills: ["Web Apps", "AI Tools", "Mobile Development"],
  },
  {
    icon: Cpu,
    name: "Smart Devices & IoT",
    desc: "Create smart connected systems using embedded devices and automation.",
    skills: ["ESP32", "Sensors", "Embedded Systems"],
  },
];

/* ================= COMPONENT ================= */

const DomainsSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section id="domains">
      <div className="section-container" ref={ref}>
        
        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Innovation <span className="neon-text-blue">Inspiration Areas</span>
          </h2>

          <p className="section-subtitle">
            This is an Open Innovation Hackathon. Participants can submit any
            problem statement. The areas below are only for inspiration.
          </p>
        </motion.div>

        {/* OPEN INNOVATION MESSAGE */}

        <div className="glass-card text-center mb-12 px-6 py-4 text-sm text-muted-foreground">
          🚀 <span className="text-primary font-semibold">Open Innovation Hackathon</span> — 
          Teams can bring their own problem statements and innovative ideas.
          These areas are only examples to spark inspiration.
        </div>

        {/* GRID */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => {
            const Icon = area.icon;

            return (
              <motion.div
                key={area.name}
                className="glass-card-hover p-6 group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Icon size={24} className="text-secondary" />
                </div>

                <h3 className="font-heading text-base font-bold text-foreground mb-2">
                  {area.name}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {area.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] px-2 py-1 rounded bg-muted text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* FOOTER */}

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="glass-card inline-block px-6 py-3 text-sm text-muted-foreground">
            💡 Bring your own problem statement and build an innovative solution!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DomainsSection;
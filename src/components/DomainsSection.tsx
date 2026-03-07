import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import {
  Brain,
  Shield,
  Banknote,
  HeartPulse,
  Leaf,
  Tractor,
  Factory,
  Lightbulb,
  Blocks,
  GraduationCap,
  Cpu,
  Glasses,
} from "lucide-react";

/* ================= DOMAIN DATA ================= */

const domains = [
  {
    icon: Brain,
    name: "AI & ML",
    desc: "Build intelligent systems using machine learning, NLP, and computer vision.",
    skills: ["Python", "TensorFlow", "Data Science"],
    difficulty: "Advanced",
  },
  {
    icon: Shield,
    name: "Cybersecurity",
    desc: "Develop solutions for digital safety, threat detection, and secure systems.",
    skills: ["Networking", "Cryptography", "Ethical Hacking"],
    difficulty: "Advanced",
  },
  {
    icon: Banknote,
    name: "FinTech",
    desc: "Innovate in financial technology — payments, banking, and blockchain.",
    skills: ["APIs", "Blockchain", "UI/UX"],
    difficulty: "Intermediate",
  },
  {
    icon: HeartPulse,
    name: "HealthTech",
    desc: "Create solutions for healthcare accessibility, diagnostics, and wellness.",
    skills: ["IoT", "ML", "Mobile Dev"],
    difficulty: "Intermediate",
  },
  {
    icon: Leaf,
    name: "Sustainability",
    desc: "Tackle climate change, renewable energy, and sustainable living challenges.",
    skills: ["Data Analysis", "IoT", "Web Dev"],
    difficulty: "Beginner-Friendly",
  },
  {
    icon: Tractor,
    name: "AgriTech",
    desc: "Transform agriculture with technology — smart farming, supply chain, and more.",
    skills: ["IoT", "ML", "Mobile Dev"],
    difficulty: "Intermediate",
  },
  {
    icon: Factory,
    name: "Smart Industry",
    desc: "Build Industry 4.0 solutions — automation, digital twins, and smart manufacturing.",
    skills: ["IoT", "Cloud", "AI"],
    difficulty: "Advanced",
  },

  /* NEW DOMAIN */

  {
    icon: Lightbulb,
    name: "Open Innovation",
    desc: "Build any innovative solution that solves real-world problems across domains.",
    skills: ["Creativity", "Problem Solving", "Any Tech Stack"],
    difficulty: "Beginner-Friendly",
  },

  {
    icon: Blocks,
    name: "Web3 & Blockchain",
    desc: "Create decentralized applications, smart contracts, and blockchain-based platforms.",
    skills: ["Solidity", "Ethereum", "Smart Contracts"],
    difficulty: "Advanced",
  },

  {
    icon: GraduationCap,
    name: "EdTech",
    desc: "Develop technology solutions to improve learning, education accessibility, and digital classrooms.",
    skills: ["React", "Mobile Apps", "AI Tools"],
    difficulty: "Beginner-Friendly",
  },

  /* NEW DOMAIN */

  {
    icon: Cpu,
    name: "IoT & Robotics",
    desc: "Build smart connected devices, robots, and embedded systems for real-world automation.",
    skills: ["ESP32", "Sensors", "Embedded C"],
    difficulty: "Intermediate",
  },

  {
    icon: Glasses,
    name: "AR/VR & Metaverse",
    desc: "Create immersive augmented and virtual reality experiences and metaverse platforms.",
    skills: ["Unity", "3D Design", "XR"],
    difficulty: "Advanced",
  },
];

/* ================= DIFFICULTY COLORS ================= */

const difficultyColors: Record<string, string> = {
  Advanced: "bg-accent/10 text-accent border-accent/30",
  Intermediate: "bg-secondary/10 text-secondary border-secondary/30",
  "Beginner-Friendly": "bg-primary/10 text-primary border-primary/30",
};

/* ================= COMPONENT ================= */

const DomainsSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [filter, setFilter] = useState("All");

  const filteredDomains = useMemo(() => {
    if (filter === "All") return domains;
    return domains.filter((d) => d.difficulty === filter);
  }, [filter]);

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
            Hackathon <span className="neon-text-blue">Domains</span>
          </h2>

          <p className="section-subtitle">
            Choose your battlefield. Each domain presents unique challenges.
          </p>
        </motion.div>

        {/* FILTER BUTTONS */}

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["All", "Beginner-Friendly", "Intermediate", "Advanced"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-xs tracking-wider uppercase transition-all duration-300 ${
                filter === f
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "glass-card text-muted-foreground hover:text-primary hover:border-primary/40"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* DOMAIN GRID */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDomains.map((domain, i) => {
            const Icon = domain.icon;

            return (
              <motion.div
                key={domain.name}
                layout
                className="glass-card-hover p-6 group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Icon size={24} className="text-secondary" />
                  </div>

                  <span
                    className={`text-[10px] px-2 py-1 rounded-full border ${
                      difficultyColors[domain.difficulty]
                    }`}
                  >
                    {domain.difficulty}
                  </span>
                </div>

                <h3 className="font-heading text-base font-bold text-foreground mb-2">
                  {domain.name}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {domain.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {domain.skills.map((skill) => (
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
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="glass-card inline-block px-6 py-3 text-sm text-muted-foreground">
            ⚡ Final problem statements will be revealed on event day.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DomainsSection;
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

const themes = [
  {
    title: "Innovation as Celebration",
    desc: "At HackoUtsav, every breakthrough is celebrated. We believe the best ideas emerge when creativity flows freely in an atmosphere of excitement and joy.",
  },
  {
    title: "Diversity of Domains",
    desc: "From AI & ML to Sustainability, from FinTech to AgriTech — our hackathon spans domains that reflect the breadth of modern technological challenges.",
  },
  {
    title: "Cultural + Technical Blend",
    desc: "The carnival spirit infuses energy into technical rigor. Expect not just code, but experiences that blend culture, art, and technology.",
  },
  {
    title: "Collaborative Ecosystem",
    desc: "Industry mentors, peer collaboration, and cross-disciplinary teams create an ecosystem where the whole is greater than the sum of its parts.",
  },
];

const ThemeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="theme" className="relative overflow-hidden py-20 px-4">
      <div ref={ref} className="max-w-6xl mx-auto">

        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">

            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="text-accent" size={24} />
            </motion.div>

            <h2 className="section-title text-3xl md:text-4xl font-bold mb-0">
              The Spirit of{" "}
              <span className="neon-text-orange">
                Innovarnival
              </span>
            </h2>

            <motion.div
              animate={{ rotate: [0, -15, 15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="text-accent" size={24} />
            </motion.div>

          </div>

          <p className="section-subtitle text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
            Where innovation becomes a celebration and every idea finds its stage.
          </p>
        </motion.div>

        {/* Theme Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {themes.map((item, i) => (
            <motion.div
              key={item.title}
              className="glass-card-hover p-6 md:p-8 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <h3 className="font-heading text-accent text-sm md:text-base font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Bottom Divider Only */}
      <div className="gradient-divider mt-20" />
    </section>
  );
};

export default ThemeSection;
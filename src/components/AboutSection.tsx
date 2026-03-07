import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Globe, Trophy, Handshake } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "24-Hour Sprint",
    desc: "An intense coding marathon where creativity meets rapid innovation.",
  },
  {
    icon: Globe,
    title: "National Participation",
    desc: "Students from across India collaborating and competing together.",
  },
  {
    icon: Trophy,
    title: "₹50,000+ Prize Pool",
    desc: "Exciting rewards including cash prizes, internships, and swag kits.",
  },
  {
    icon: Handshake,
    title: "Industry Mentorship",
    desc: "Get guidance and feedback from experienced industry professionals.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="about"
      className="bg-background-secondary py-20 px-4 sm:px-6 lg:px-8"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.div
          className="text-center mb-14 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold leading-tight">
            About <span className="neon-text">HackoUtsav</span> 2026
          </h2>

          <p className="text-muted-foreground text-lg mt-4 leading-relaxed">
            Where innovation meets celebration in a 24-hour coding carnival.
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          className="max-w-2xl md:max-w-3xl mx-auto text-center text-base sm:text-lg text-foreground/80 leading-relaxed space-y-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            <span className="font-semibold">HackoutSAV 2026</span> is a premier
            national-level hackathon that brings together the brightest minds
            in technology for an exhilarating{" "}
            <span className="font-semibold">
              24-hour sprint of creativity, problem-solving, and innovation.
            </span>
          </p>

          <p>
            What makes HackoutSAV truly unique is the fusion of{" "}
            <span className="font-semibold">
              technical excellence with carnival energy
            </span>{" "}
            — an experience we proudly call{" "}
            <span className="neon-text font-semibold">Innovarnival</span>.
            It’s not just a competition; it’s a celebration of ideas that shape
            the future.
          </p>

          <p>
            Participants gain valuable{" "}
            <span className="font-semibold">real-world experience</span>,
            connect with{" "}
            <span className="font-semibold">industry mentors</span>,
            earn{" "}
            <span className="font-semibold">certifications</span>, and compete
            for an exciting{" "}
            <span className="font-semibold">prize pool of 50,000</span>.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, i) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                className="glass-card-hover p-7 rounded-xl flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                  <Icon size={30} className="text-primary" />
                </div>

                {/* Feature Title */}
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[240px]">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
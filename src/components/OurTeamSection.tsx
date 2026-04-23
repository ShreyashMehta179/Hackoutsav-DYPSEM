import { motion } from "framer-motion";
import { useMemo } from "react";

/* ================= DATA ================= */

const organizers = [
  {
    role: "Director",
    name: "Dr. Ajit Patil",
    dept: "Director, D. Y. Patil School of Engineering & Management"
  },
  {
    role: "Registrar",
    name: "Ashwin Desai",
    dept: "Registrar, D. Y. Patil School of Engineering & Management"
  },
  {
    role: "Faculty Coordinator",
    name: "Dr.Vinayak Pujari",
    dept: "Faculty Member, D. Y. Patil School of Engineering & Management"
  }
];

const judges = [
  {
    role: "Industry Judge",
    name: "Dr. Rituraj Patil",
    dept: "Director of TMT ISG at Zensar"
  },
  {
    role: "Industry Judge",
    name: "Vishal Ranadive",
    dept: "Manager – Walstar Technologies Pvt. Ltd."
  },
  {
    role: "Industry Judge",
    name: "Shailesh Hari Dinde",
    dept: "QA Automation Lead, Aiotlogy Service Pvt. Ltd., Bengaluru"
  },
  {
    role: "Industry Judge",
    name: "Ritesh Bakare",
    dept: "Software Engineer @ Zensar Technologies"
  },
  
];

/* ================= PARTICLES ================= */

const SparkleBackground = () => {
  const sparkles = useMemo(() => {
    if (typeof window === "undefined") return [];

    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 2
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((item) => (
        <motion.div
          key={item.id}
          className="absolute w-[2px] h-[2px] rounded-full bg-primary"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.4, 0.5]
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay
          }}
        />
      ))}
    </div>
  );
};

/* ================= CARD ================= */

const MemberCard = ({
  role,
  name,
  dept
}: {
  role: string;
  name: string;
  dept: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="
        h-full
        min-h-[320px]
        rounded-3xl
        border
        border-primary/20
        bg-background/60
        backdrop-blur-xl
        p-7
        flex
        flex-col
      "
    >
      {/* ROLE */}
      <div
        className="
          inline-flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          w-fit
          border
          border-primary/20
          bg-primary/5
          text-primary
          text-[10px]
          uppercase
          tracking-[0.28em]
        "
        style={{ fontFamily: "Orbitron, sans-serif" }}
      >
        <span className="w-2 h-2 rounded-full bg-primary" />
        {role}
      </div>

      {/* CONTENT */}
      <div className="flex-1 flex flex-col justify-center">
        <h3
          className="text-white text-2xl md:text-3xl font-semibold mt-6 leading-tight"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          {name}
        </h3>

        <p
          className="
            mt-5
            text-sm
            md:text-base
            text-muted-foreground
            leading-7
            border-l-2
            border-primary/30
            pl-4
          "
          style={{ fontFamily: "Rajdhani, sans-serif" }}
        >
          {dept}
        </p>
      </div>

      {/* LINE */}
      <motion.div
        className="h-[2px] rounded-full mt-6 bg-primary"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      />
    </motion.div>
  );
};

/* ================= SECTION TITLE ================= */

const SectionTitle = ({
  title,
  borderColor
}: {
  title: string;
  borderColor: string;
}) => {
  return (
    <div className="text-center mb-16">
      <h2
        className="text-4xl md:text-6xl font-bold tracking-[0.08em]"
        style={{
          fontFamily: "Orbitron, sans-serif",
          color: borderColor
        }}
      >
        {title}
      </h2>

      <div
        className="w-40 h-[3px] mx-auto mt-6 rounded-full"
        style={{ backgroundColor: borderColor }}
      />
    </div>
  );
};

/* ================= MAIN ================= */

const OurTeamSection = () => {
  return (
    <section
      id="judges"
      className="relative py-32 overflow-hidden bg-background"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background-secondary" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, hsl(var(--primary) / 0.08), transparent 60%)"
          }}
        />

        <SparkleBackground />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-6">
        
        {/* ORGANIZERS */}
        <div className="mb-28 border border-primary/20 rounded-3xl p-8 md:p-12 bg-background/40 backdrop-blur-xl">
          <SectionTitle
            title="ORGANIZERS"
            borderColor="hsl(var(--primary))"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 auto-rows-fr">
            {organizers.map((member) => (
              <MemberCard
                key={member.name}
                role={member.role}
                name={member.name}
                dept={member.dept}
              />
            ))}
          </div>
        </div>

        {/* JUDGES */}
        <div className="border border-blue-400/20 rounded-3xl p-8 md:p-12 bg-background/40 backdrop-blur-xl">
          <SectionTitle
            title="JUDGES"
            borderColor="#60a5fa"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 auto-rows-fr">
            {judges.map((member) => (
              <MemberCard
                key={member.name}
                role={member.role}
                name={member.name}
                dept={member.dept}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurTeamSection;
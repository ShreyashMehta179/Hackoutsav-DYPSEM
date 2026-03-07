import { motion } from "framer-motion";
import { useMemo } from "react";

/* ================= TEAM DATA ================= */

const teamMembers = [
  {
    role: "Web Designer & UI/UX Developer",
    name: "Shreyash Mehta",
    dept: "Primary developer of the official hackathon website handling architecture, UI/UX design and implementation."
  },
  {
    role: "Web Designer & Frontend Developer",
    name: "Shweta Patil",
    dept: "Developed responsive frontend UI and structured the official hackathon website."
  },
  {
    role: "Content Editor & Media Coordinator",
    name: "Parth Chavan",
    dept: "Managed documentation, event communication and media content."
  },
  {
    role: "Event Operations Coordinator",
    name: "Rupesh Patil",
    dept: "Handled operational workflow and execution planning."
  },
  {
    role: "Event Operations Coordinator",
    name: "Shreyash Desai",
    dept: "Supported event logistics and hackathon operations."
  },
  {
    role: "Technical Support Team",
    name: "Aditya Nikam",
    dept: "Provided technical assistance during hackathon operations."
  },
  {
    role: "Innovation Screening Team",
    name: "Prajval Injar",
    dept: "Assisted in idea review and innovation screening."
  },
  {
    role: "Technical Operations Volunteer",
    name: "Shrivardhan Bhosale",
    dept: "Helped manage hackathon technical setup."
  },
  {
    role: "Design & Media Team",
    name: "Megha Chavan",
    dept: "Supported promotional visuals and event media."
  },
  {
    role: "Participant Support Team",
    name: "Sanjivani Patil",
    dept: "Handled participant coordination and support."
  },
  {
    role: "Documentation Team",
    name: "Shruti Powar",
    dept: "Managed communication and documentation."
  },
  {
    role: "Event Logistics Team",
    name: "Prathamesh Mane",
    dept: "Supported volunteer management and logistics."
  },

  /* ===== NEW MEMBERS ADDED ===== */

  {
    role: "Hackathon Coordination Team",
    name: "Arya Nigvekar",
    dept: "Assisted in coordinating hackathon activities and participant support."
  },
  {
    role: "Hackathon Coordination Team",
    name: "Manasi Shinde",
    dept: "Supported hackathon coordination and event execution."
  }
];

/* ================= BACKGROUND PARTICLES ================= */

const BackgroundParticles = () => {
  const particles = useMemo(() => {
    if (typeof window === "undefined") return [];
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      duration: 8 + Math.random() * 6,
      delay: Math.random() * 5
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-[2px] h-[2px] bg-cyan-300 rounded-full"
          initial={{ x: p.x, y: p.y, opacity: 0 }}
          animate={{
            y: [p.y, p.y - 120],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay
          }}
          style={{
            boxShadow: "0 0 6px rgba(0,255,224,0.4)"
          }}
        />
      ))}
    </div>
  );
};

/* ================= TEAM SECTION ================= */

const OurTeamSection = () => {
  return (
    <section id="team" className="relative py-32 bg-[#051418] overflow-hidden">

      {/* Animated Background */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Radial Glow Pulse */}

        <motion.div
          className="absolute inset-0"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.35, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity
          }}
          style={{
            background:
              "radial-gradient(circle at center, rgba(0,255,224,0.15), transparent 70%)"
          }}
        />

        {/* Floating Particles */}

        <BackgroundParticles />

      </div>

      <div className="relative max-w-[1400px] mx-auto px-6">

        {/* TITLE */}

        <div className="text-center mb-24">

          <h2
            className="text-5xl md:text-6xl font-bold tracking-[0.35em]"
            style={{
              fontFamily: "Orbitron, sans-serif",
              background: "linear-gradient(90deg,#00e6d6,#32e3ff)",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
          >
            OUR TEAM
          </h2>

          <p className="text-gray-400 mt-5 text-sm max-w-xl mx-auto">
            Meet the passionate individuals powering our mission.
            Together we redefine collaboration and innovation.
          </p>

          <div className="w-40 h-[2px] bg-cyan-400/60 mx-auto mt-6" />

        </div>

        {/* TEAM GRID */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {teamMembers.map((member) => (

            <div
              key={member.name}
              className="
              relative
              rounded-2xl
              p-[1px]
              bg-gradient-to-r
              from-cyan-400/30
              to-teal-300/30
              "
            >

              {/* CARD */}

              <div
                className="
                h-full
                w-full
                rounded-2xl
                p-8
                bg-gradient-to-br
                from-[#0c2a2e]
                via-[#0a353a]
                to-[#05191c]
                backdrop-blur-lg
                flex
                flex-col
                justify-between
                "
              >

                {/* ROLE */}

                <div
                  className="
                  inline-flex
                  items-center
                  gap-2
                  text-[11px]
                  tracking-[0.25em]
                  px-4
                  py-1
                  rounded-full
                  border
                  border-cyan-400/30
                  text-cyan-300
                  w-fit
                  "
                  style={{
                    fontFamily: "Orbitron, sans-serif"
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  {member.role}
                </div>

                {/* NAME */}

                <h3
                  className="text-xl font-semibold mt-5 text-white"
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    letterSpacing: "0.08em",
                    textShadow: "0 0 6px rgba(0,255,224,0.35)"
                  }}
                >
                  {member.name}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                  text-sm
                  text-gray-300
                  mt-4
                  border-l-2
                  border-cyan-400/30
                  pl-4
                  leading-relaxed
                  "
                  style={{
                    fontFamily: "Rajdhani, sans-serif",
                    letterSpacing: "0.04em"
                  }}
                >
                  {member.dept}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default OurTeamSection;
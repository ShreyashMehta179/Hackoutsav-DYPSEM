import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Award, Gift } from "lucide-react";

const prizes = [
  {
    icon: Trophy,
    place: "1st Place",
    amount: "₹25,000",
    color: "neon-text-orange",
    winner: true,
  },
  {
    icon: Medal,
    place: "2nd Place",
    amount: "₹15,000",
    color: "neon-text-blue",
    winner: false,
  },
  {
    icon: Award,
    place: "3rd Place",
    amount: "₹10,000",
    color: "text-primary",
    winner: false,
  },
];

const benefits = [
  { icon: Gift, text: "Certificates for All Participants" },
  { icon: Gift, text: "Internship Opportunities" },
  { icon: Gift, text: "Exclusive Swag Kits" },
];

const PrizesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="prizes"
      className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6"
    >
      <div ref={ref} className="max-w-7xl mx-auto w-full">

        {/* Title */}

        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-2xl sm:text-3xl md:text-5xl font-bold">
            Prize <span className="neon-text-orange">Pool</span>
          </h2>

          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-xs sm:text-sm md:text-base">
            Compete with innovators, solve real problems, and win exciting
            rewards along with recognition and opportunities.
          </p>
        </motion.div>

        {/* Total Prize */}

        <motion.div
          className="text-center mb-14 sm:mb-20"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <span className="text-4xl sm:text-6xl md:text-8xl font-heading font-black neon-text-orange">
            ₹50,000
          </span>

          <p className="text-muted-foreground mt-2 text-xs sm:text-sm md:text-base">
            Total Prize Pool
          </p>
        </motion.div>

        {/* Prize Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto mb-14 sm:mb-16">

          {prizes.map((prize, i) => {
            const Icon = prize.icon;

            return (
              <motion.div
                key={prize.place}
                className={`relative glass-card-hover p-6 sm:p-8 md:p-10 text-center rounded-xl
                ${prize.winner ? "border border-orange-400/40 sm:scale-105" : ""}`}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
                whileHover={{ y: -8, scale: 1.05 }}
              >

                {prize.winner && (
                  <motion.div
                    className="absolute inset-0 rounded-xl border border-orange-400"
                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Icon
                    size={36}
                    className={`mx-auto mb-4 sm:mb-5 ${prize.color}`}
                  />
                </motion.div>

                <h3 className="font-heading text-[10px] sm:text-xs text-muted-foreground tracking-widest uppercase mb-2">
                  {prize.place}
                </h3>

                <p
                  className={`font-heading text-2xl sm:text-3xl md:text-4xl font-bold ${prize.color}`}
                >
                  {prize.amount}
                </p>

                <p className="text-[10px] sm:text-xs text-muted-foreground mt-2">
                  Cash Prize for Winning Team
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Benefits */}

        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          {benefits.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="glass-card flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 text-xs sm:text-sm text-muted-foreground rounded-lg"
            >
              <Icon size={16} className="text-primary" />
              {text}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default PrizesSection;
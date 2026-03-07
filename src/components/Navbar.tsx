import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MoreHorizontal } from "lucide-react";

/* MAIN LINKS */
const mainLinks = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Domains", href: "#domains" },
  { label: "Judging", href: "#judging" },
  { label: "Contact", href: "#contact" },
];

/* MORE MENU LINKS */
const moreLinks = [
  { label: "Theme", href: "#theme" },
  { label: "Our Team", href: "#team" },
  { label: "Prizes", href: "#prizes" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      lg:border-b lg:border-border/60
      ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-xl"
          : "bg-transparent"
      }`}
    >

      {/* Animated Border Line */}
      <motion.div
        className="hidden lg:block absolute bottom-0 left-0 h-[2px] w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, #00e6d6, #32e3ff, transparent)"
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 0%"]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-[1600px] mx-auto flex items-center justify-between h-[70px] md:h-[90px] px-[clamp(16px,4vw,80px)]">

        {/* LOGO */}
        <div className="flex items-center gap-3">

          <img
            src="/images/dypsem-logo.png"
            alt="logo"
            className="h-[clamp(34px,4vw,56px)]"
          />

          <div className="flex flex-col leading-none">

            <span
              style={{
                fontFamily: "Orbitron",
                fontSize: "clamp(14px,1.6vw,24px)",
                letterSpacing: "0.2em",
                color: "hsl(var(--primary))",
                textShadow: "0 0 15px hsl(var(--primary)/0.5)"
              }}
            >
              HACKOUTSAV
            </span>

            <span
              style={{
                fontFamily: "Orbitron",
                fontSize: "clamp(8px,0.8vw,12px)",
                letterSpacing: "0.5em",
                color: "hsl(var(--primary))",
                opacity: 0.8
              }}
            >
              2026
            </span>

          </div>

        </div>

        {/* NAVIGATION */}
        <div
          className="hidden lg:flex items-center"
          style={{
            gap: "clamp(22px,2vw,42px)",
            fontFamily: "Orbitron"
          }}
        >

          {mainLinks.map((link) => (

            <a
              key={link.href}
              href={link.href}
              className="text-foreground/80 hover:text-primary transition-colors whitespace-nowrap px-2"
              style={{
                fontSize: "clamp(12px,0.9vw,16px)",
                letterSpacing: "0.15em",
                fontWeight: 600
              }}
            >
              {link.label.toUpperCase()}
            </a>

          ))}

          {/* MORE MENU */}
          <div className="relative">

            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="text-foreground/80 hover:text-primary px-2"
            >
              <MoreHorizontal size={22} />
            </button>

            <AnimatePresence>

              {moreOpen && (

                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute right-0 mt-4 w-44 bg-background border border-border rounded-lg shadow-lg p-3 flex flex-col gap-3"
                >

                  {moreLinks.map((link) => (

                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMoreOpen(false)}
                      className="text-sm text-foreground/80 hover:text-primary"
                    >
                      {link.label}
                    </a>

                  ))}

                </motion.div>

              )}

            </AnimatePresence>

          </div>

        </div>

        {/* REGISTER BUTTON */}
        <div className="hidden lg:flex">

          <a
            href="https://unstop.com/hackathons/hackoutsav-d-y-patil-school-of-engineering-and-management-dypsem-kolhapur-1653004"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button rounded-full"
            style={{
              padding: "clamp(6px,0.6vw,10px) clamp(18px,1.6vw,28px)",
              fontSize: "clamp(12px,0.9vw,14px)",
              fontFamily: "Orbitron"
            }}
          >
            REGISTER
          </a>

        </div>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {mobileOpen && (

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border"
          >

            <div
              className="flex flex-col gap-6 p-6 text-center"
              style={{ fontFamily: "Orbitron" }}
            >

              {[...mainLinks, ...moreLinks].map((link) => (

                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[clamp(14px,4vw,18px)] text-foreground/80 hover:text-primary tracking-widest"
                >
                  {link.label.toUpperCase()}
                </a>

              ))}

              <a
                href="https://unstop.com/hackathons/hackoutsav-d-y-patil-school-of-engineering-and-management-dypsem-kolhapur-1653004"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button text-center py-3 mt-4"
                onClick={() => setMobileOpen(false)}
              >
                REGISTER
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.nav>

  );
};

export default Navbar;
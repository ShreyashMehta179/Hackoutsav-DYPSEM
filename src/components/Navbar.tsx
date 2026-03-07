import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Theme", href: "#theme" },
  { label: "Journey", href: "#journey" },
  { label: "Domains", href: "#domains" },
  { label: "Our Team", href: "#team" },
  { label: "Prizes", href: "#prizes" },
  { label: "Judging", href: "#judging" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-xl"
          : "bg-transparent"
      }`}
    >

      {/* NAVBAR CONTAINER */}
      <div className="w-full h-[70px] md:h-[90px] flex items-center justify-between px-[clamp(12px,4vw,20px)] sm:px-6 md:px-12 lg:px-20">

        {/* LOGO */}
        <div className="flex items-center gap-3 flex-shrink-0">

          <img
            src="/images/dypsem-logo.png"
            alt="DYPSEM Logo"
            className="h-[clamp(34px,6vw,48px)] md:h-14 w-auto object-contain"
          />

          <div className="flex flex-col leading-none">

            <span
              className="font-extrabold tracking-[0.2em]"
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontSize: "clamp(14px,3.5vw,22px)",
                color: "hsl(var(--primary))",
                textShadow: "0 0 15px hsl(var(--primary) / 0.5)",
              }}
            >
              HACKOUTSAV
            </span>

            <span
              className="tracking-[0.5em] mt-1"
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontSize: "clamp(8px,2vw,12px)",
                color: "hsl(var(--primary))",
                opacity: 0.8,
              }}
            >
              2026
            </span>

          </div>

        </div>

        {/* DESKTOP NAVIGATION (UNCHANGED) */}
        <div className="hidden lg:flex flex-1 justify-center">

          <div
            className="flex items-center gap-6 xl:gap-10"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >

            {navLinks.map((link) => (

              <a
                key={link.href}
                href={link.href}
                className="
                relative
                text-sm xl:text-base
                font-semibold
                tracking-[0.15em]
                text-foreground/80
                hover:text-primary
                transition-colors
                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:w-0
                after:bg-primary
                after:transition-all
                hover:after:w-full
                "
              >
                {link.label.toUpperCase()}
              </a>

            ))}

          </div>

        </div>

        {/* REGISTER BUTTON (UNCHANGED) */}
        <div className="hidden xl:flex flex-shrink-0">

          <a
            href="https://unstop.com/hackathons/hackoutsav-d-y-patil-school-of-engineering-and-management-dypsem-kolhapur-1653004"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button text-sm px-6 py-2 rounded-full tracking-[0.2em] font-bold"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            REGISTER
          </a>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-foreground"
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
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border"
          >

            <div
              className="flex flex-col gap-6 p-6 text-center"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >

              {navLinks.map((link) => (

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
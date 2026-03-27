import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MapPin, Mail, Phone, Instagram, ArrowUp, Linkedin, Globe } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div ref={ref} className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-3xl md:text-4xl font-bold">
            Get In <span className="neon-text">Touch</span>
          </h2>

          <p className="section-subtitle mt-3 text-muted-foreground text-sm md:text-base">
            Have questions? Reach out to us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* LEFT SIDE */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >

            {/* Location */}
            <a
              href="https://www.google.com/maps?rlz=1C1JJTC_enIN1101IN1101&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KR0dJeDjAcE7MUnsA9KAppXl&daddr=D+Y+Patil+School+of+Engineering+and+Management+Line+Bazar,+Kasaba+Bawada,+Kolhapur,+Maharashtra+416006"
              target="_blank"
              className="glass-card-hover p-6 flex items-start gap-4 rounded-xl"
            >
              <MapPin size={20} className="text-primary mt-1" />

              <div>
                <h3 className="text-xs font-bold text-foreground mb-1">
                  Location
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  D.Y.Patil School of Engineering & Management,
                  Kolhapur, Maharashtra
                </p>
              </div>
            </a>

            {/* Email */}
            <div className="glass-card-hover p-6 flex items-start gap-4 rounded-xl">
              <Mail size={20} className="text-primary mt-1" />

              <div>
                <h3 className="text-xs font-bold text-foreground mb-1">
                  Email
                </h3>

                <p className="text-sm text-muted-foreground">
                  hackthon.sem@dypgroup.edu.in
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="glass-card-hover p-6 flex items-start gap-4 rounded-xl">
              <Phone size={20} className="text-primary mt-1" />

              <div>
                <h3 className="text-xs font-bold text-foreground mb-1">
                  Phone
                </h3>

                <p className="text-sm text-muted-foreground">
                  +91 8668704041
                </p>
              </div>
            </div>

            {/* Connect With Us */}
            <div className="glass-card-hover p-6 rounded-xl">
              <h3 className="text-xs font-bold text-foreground mb-3">
                Connect With Us
              </h3>

              <div className="flex gap-4 flex-wrap">

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/hackoutsav_dypsem?igsh=b2g2MXBnOHh1dHl4&utm_source=qr"
                  target="_blank"
                  className="p-3 bg-pink-500/20 text-pink-400 rounded-lg hover:bg-pink-500/30 transition hover:scale-110"
                >
                  <Instagram size={22} />
                </a>

                {/* Phone / WhatsApp */}
                <a
                  href="https://chat.whatsapp.com/K1wdODvb8gTKkm3UnDGWlw?mode=gi_t"
                  className="p-3 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition hover:scale-110"
                >
                  <Phone size={22} />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/d-y-patil-school-of-engineering-and-management-kolhapur/posts/?feedView=all"
                  target="_blank"
                  className="p-3 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition hover:scale-110"
                >
                  <Linkedin size={22} />
                </a>

                {/* Google / Website */}
                <a
                  href="https://sem.dypatilunikop.org/"
                  target="_blank"
                  className="p-3 bg-yellow-500/20 text-yellow-400 rounded-lg hover:bg-yellow-500/30 transition hover:scale-110"
                >
                  <Globe size={22} />
                </a>

              </div>
            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >

            {/* Google Map */}
            <div className="glass-card-hover p-3 rounded-xl overflow-hidden">
              <iframe
                title="College Location"
                src="https://maps.google.com/maps?q=D.Y.Patil%20School%20of%20Engineering%20and%20Management%20Kolhapur&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-64 rounded-lg border-0"
                loading="lazy"
              ></iframe>
            </div>

            {/* College Logo */}
            <div className="glass-card-hover p-6 flex items-center justify-center rounded-xl min-h-[170px]">
              <img
                src="/college-logo.png"
                alt="College Logo"
                className="max-h-[110px] object-contain"
              />
            </div>

          </motion.div>

        </div>
      </div>

      {/* Scroll To Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <ArrowUp size={20} />
        </button>
      )}

    </section>
  );
};

export default ContactSection;
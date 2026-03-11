const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-background py-10 px-4">
      <div className="max-w-[1200px] mx-auto">

        {/* Top Footer */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left">

          {/* Logo + College */}
          <div>
            <h3 className="font-heading font-bold text-lg neon-text tracking-wider">
              HACKOUTSAV 2026
            </h3>

            <p className="text-xs text-muted-foreground mt-1">
              D.Y.Patil School of Engineering & Management
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-muted-foreground">

            <a
              href="#about"
              className="hover:text-primary transition-colors"
            >
              About
            </a>

            <a
              href="#domains"
              className="hover:text-primary transition-colors"
            >
              Domains
            </a>

            <a
              href="#prizes"
              className="hover:text-primary transition-colors"
            >
              Prizes
            </a>

            <a
              href="#faq"
              className="hover:text-primary transition-colors"
            >
              FAQ
            </a>

            <a
              href="#contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </a>

          </nav>
        </div>

        {/* Divider */}
        <div className="gradient-divider mt-8 mb-6" />

        {/* Copyright */}
        <p className="text-center text-xs text-muted-foreground">
          © 2026 HackOutsav. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Who can participate in HackUtsav 2026?",
    a: "Any currently enrolled student from any college in India can participate. There are no branch or year restrictions.",
  },
  {
    q: "What is the team size?",
    a: "Each team must consist of 2–4 members. One member must be designated as the team leader.",
  },
  {
    q: "Can teams be from different colleges?",
    a: "Yes. Cross-college teams are welcome and encouraged to collaborate.",
  },
  {
    q: "What should we bring to the hackathon?",
    a: "Participants should bring laptops, chargers, and any hardware required for their project. WiFi, power outlets, and meals will be provided.",
  },
  {
    q: "How will projects be judged?",
    a: "Projects will be evaluated based on Innovation, Technical Depth, Impact, Feasibility, and Presentation.",
  },
  {
    q: "Will mentors be available?",
    a: "Yes. Industry mentors will guide teams throughout the hackathon and help during designated checkpoints.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="bg-background-secondary py-28 px-4">
      <div ref={ref} className="max-w-5xl mx-auto">

        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-wide">
            Frequently Asked{" "}
            <span className="neon-text-blue">Questions</span>
          </h2>

          <p className="text-muted-foreground text-lg mt-4">
            Everything you need to know before joining HackUtsav.
          </p>
        </motion.div>

        {/* FAQ */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <Accordion type="single" collapsible className="space-y-5">

            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${index}`}
                className="glass-card-hover border-none px-8 rounded-xl"
              >
                <AccordionTrigger
                  className="font-heading text-lg md:text-xl font-semibold text-foreground hover:text-secondary hover:no-underline py-6 text-left"
                >
                  {faq.q}
                </AccordionTrigger>

                <AccordionContent
                  className="text-muted-foreground text-base md:text-lg leading-relaxed pb-6"
                >
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}

          </Accordion>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQSection;
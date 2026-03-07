import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const rules = [
  {
    title: "Participation Rules",
    content:
      "All team members must be currently enrolled students. Teams must have 2–4 members with one designated leader. Cross-college teams are allowed. Each participant can only be part of one team.",
  },
  {
    title: "Submission Format",
    content:
      "Round 1: Submit a 250-word abstract and PPT via the portal. Round 2: All code must be pushed to a GitHub repository by the deadline. Final demo must be a working prototype.",
  },
  {
    title: "Code of Conduct",
    content:
      "Participants must maintain professionalism and respect. Harassment, discrimination, or unethical behavior will result in immediate disqualification. Collaboration and sportsmanship are expected.",
  },
  {
    title: "Disqualification Criteria",
    content:
      "Pre-built projects, plagiarism, or use of proprietary code without permission will lead to disqualification. All projects must be built during the hackathon window.",
  },
  {
    title: "AI Usage Policy",
    content:
      "AI tools (like ChatGPT, Copilot) can be used as development aids, but the core logic and innovation must be original. Judges will evaluate understanding during Q&A. Full AI-generated projects without comprehension will be disqualified.",
  },
];

const RulesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section>
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Rules & <span className="neon-text-orange">Regulations</span>
          </h2>
          <p className="section-subtitle">Please read carefully before participating.</p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {rules.map((rule, i) => (
              <AccordionItem key={i} value={`rule-${i}`} className="glass-card-hover border-none px-6">
                <AccordionTrigger className="font-heading text-sm font-bold text-foreground hover:text-primary hover:no-underline py-5">
                  {rule.title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm pb-5 leading-relaxed">
                  {rule.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default RulesSection;

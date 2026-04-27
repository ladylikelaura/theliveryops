"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import OrangeUnderline from "@/components/OrangeUnderline";

const questions = [
  {
    q: "We already use Circuit / Track-POD / Onfleet — does this replace it?",
    a: "No — and that's the point. Those tools manage your deliveries. We connect them to everything else: your invoicing, your customer comms, your driver pay, your reporting. We're the layer between your tools that those tools don't provide.",
  },
  {
    q: "We're a small operation — 3 vans. Is this overkill?",
    a: "It's actually the opposite. A 3-van company where the owner is doing 6 jobs is exactly who this is built for. The smaller you are, the more every hour you spend on admin hurts. One automation that saves 2 hours a day gives a small team their evenings back.",
  },
  {
    q: "What if our workflow is different from other courier companies?",
    a: "We start with an audit, not a template. We map exactly how your operation runs before we build anything. Every automation is configured around your specific process — not a generic courier workflow we copied from somewhere else.",
  },
  {
    q: "What does the monthly retainer actually cover?",
    a: "Uptime monitoring. Fixes when something breaks. Updates when your workflow changes. And proactive suggestions when we spot a new money leak. You're not buying software — you're buying an ongoing ops partner who stays on top of your automation.",
  },
  {
    q: "How quickly can we actually see a result?",
    a: "Day 3. That's when the first automation goes live. It won't be everything — but it will be the one thing that's costing you the most time or money right now. Most clients see the first measurable result within 72 hours of the audit.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-32 lg:py-40 px-6 lg:px-10 bg-surface">
      <div className="max-w-3xl mx-auto">
        <div className="mb-14">
          <p className="text-[12px] font-medium tracking-[0.12em] uppercase text-muted mb-4">
            Common questions
          </p>
          <h2 className="font-display font-semibold text-[clamp(28px,4vw,44px)] leading-[1.05] tracking-[-0.02em] text-foreground">
            Questions we get <OrangeUnderline>every time.</OrangeUnderline>
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-surface">
          {questions.map((item, i) => (
            <motion.div
              key={i}
              className={`py-5 px-4 -mx-4 rounded-[6px] transition-colors duration-300 ${open === i ? "bg-background" : "hover:bg-background/60"}`}
              layout
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 text-left group"
                aria-expanded={open === i}
              >
                <span className={`font-display font-semibold text-[15px] leading-[1.4] tracking-[-0.01em] transition-colors duration-200 ${open === i ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={`flex-shrink-0 mt-0.5 transition-colors duration-200 ${open === i ? "text-primary" : "text-muted group-hover:text-primary"}`}
                >
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0, y: -4 }}
                    animate={{ height: "auto", opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -4 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 pb-1 pl-3 border-l-2 border-primary/40 mt-1">
                      <p className="text-[14px] text-muted leading-[1.75]">
                        {item.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

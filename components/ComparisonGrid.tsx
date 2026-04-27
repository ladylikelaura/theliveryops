"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OrangeUnderline from "@/components/OrangeUnderline";

gsap.registerPlugin(ScrollTrigger);

const rows = [
  {
    problem: "Customer tracking queries",
    today: "Dispatcher answers 30–40 WhatsApp messages per day",
    withUs: "Bot handles every query instantly. Dispatcher does real work.",
  },
  {
    problem: "Monthly client invoicing",
    today: "Compiled manually, sent late, disputed, chased by phone",
    withUs: "Generated on delivery completion, sent on the 1st, reminders automated",
  },
  {
    problem: "Driver pay calculation",
    today: "Friday afternoon manual count, errors, disputes",
    withUs: "Calculated automatically every Friday at 5pm, payslip sent to driver",
  },
  {
    problem: "Failed delivery cost",
    today: "Company absorbs £10–15 per failed drop, no recharge",
    withUs: "Re-delivery fee raised automatically. Customer pre-alerted to prevent it.",
  },
  {
    problem: "Proof of delivery",
    today: "WhatsApp photos buried in chat, lost in disputes",
    withUs: "Timestamped, filed by order ID, sent to customer on delivery",
  },
  {
    problem: "Business visibility",
    today: "Owner checks spreadsheet manually or just guesses",
    withUs: "Weekly summary auto-delivered: revenue, on-time rate, driver performance",
  },
];

export default function ComparisonGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowsRef = useRef<HTMLDivElement[]>([]);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.from(headingRef.current.children, {
          y: 24,
          opacity: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 70%" },
        });
      }

      rowsRef.current.forEach((row) => {
        if (!row) return;
        const cols = row.querySelectorAll("[data-col]");
        gsap.from(cols, {
          y: 24,
          opacity: 0,
          stagger: 0.07,
          duration: 0.55,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 72%" },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 lg:py-40 px-6 lg:px-10 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="mb-16">
          <p className="text-[12px] font-medium tracking-[0.12em] uppercase text-muted mb-4">
            The cost of doing nothing
          </p>
          <h2 className="font-display font-semibold text-[clamp(28px,4vw,44px)] leading-[1.05] tracking-[-0.02em] text-foreground max-w-2xl">
            What changes when <OrangeUnderline>ops run themselves.</OrangeUnderline>
          </h2>
        </div>

        {/* Column headers */}
        <div className="grid grid-cols-[1fr_1fr_1fr] gap-4 mb-4 pb-3 border-b border-surface">
          <div className="text-[12px] font-semibold tracking-[0.08em] uppercase text-muted">Problem</div>
          <div className="text-[12px] font-semibold tracking-[0.08em] uppercase text-muted">Today</div>
          <div className="text-[12px] font-semibold tracking-[0.08em] uppercase text-primary flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            With Theliverops
          </div>
        </div>

        {/* Rows */}
        {rows.map((row, i) => (
          <div
            key={i}
            ref={(el) => { if (el) rowsRef.current[i] = el; }}
            className="grid grid-cols-[1fr_1fr_1fr] gap-4 py-5 border-b border-surface last:border-0 hover:bg-surface/40 transition-colors duration-200 -mx-4 px-4 rounded-[6px] group"
          >
            <div data-col="true" className="pr-4 flex items-start">
              <span className="inline-block px-3 py-1.5 rounded-full bg-surface text-[12px] font-medium text-foreground/70 border border-surface group-hover:border-primary/20 transition-colors duration-200">
                {row.problem}
              </span>
            </div>
            <div data-col="true" className="text-[13px] text-muted leading-[1.6] pr-4">
              {row.today}
            </div>
            <div data-col="true" className="text-[13px] text-primary leading-[1.6] font-semibold">
              {row.withUs}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

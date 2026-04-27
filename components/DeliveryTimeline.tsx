"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    day: "DAY 1.",
    title: "Free Ops Audit",
    desc: "We map your workflow, spot your 3 biggest money leaks.",
  },
  {
    day: "DAY 2–3.",
    title: "First Automation Live",
    desc: "Your top pain point automated and tested.",
  },
  {
    day: "DAY 4–10.",
    title: "Daily Improvements",
    desc: "We build, you review, we refine. Live feedback loop.",
  },
  {
    day: "DAY 14.",
    title: "Fully Running",
    desc: "Your ops are automated. Your dispatcher has their day back.",
  },
];

export default function DeliveryTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<SVGLineElement>(null);
  const milestonesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate SVG connecting line left-to-right
      if (lineRef.current) {
        const length = lineRef.current.getTotalLength
          ? lineRef.current.getTotalLength()
          : 1000;
        gsap.set(lineRef.current, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
        gsap.to(lineRef.current, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 1,
          },
        });
      }

      // Stagger milestone cards
      milestonesRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.from(el, {
          y: 36,
          opacity: 0,
          scale: 0.97,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 72%" },
          delay: i * 0.1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-32 lg:py-40 px-6 lg:px-10 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-[12px] font-medium tracking-[0.12em] uppercase text-muted mb-4">
            Your 2-week delivery
          </p>
          <h2 className="font-display font-semibold text-[clamp(28px,4vw,44px)] leading-[1.05] tracking-[-0.02em] text-foreground">
            Automated in 14 days. Guaranteed.
          </h2>
        </div>

        {/* SVG connecting line */}
        <div className="relative mb-0 hidden lg:block" style={{ height: "4px" }}>
          <svg
            className="absolute top-1/2 left-0 w-full overflow-visible"
            height="4"
            viewBox="0 0 1000 4"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line
              ref={lineRef}
              x1="0"
              y1="2"
              x2="1000"
              y2="2"
              stroke="#F59E0B"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Milestone cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-0 lg:-mt-4">
          {milestones.map((m, i) => (
            <div
              key={i}
              ref={(el) => { if (el) milestonesRef.current[i] = el; }}
              className="pt-10 pb-8 flex flex-col gap-2 border-t-2 border-primary hover:border-primary/60 hover:-translate-y-1 hover:shadow-sm transition-all duration-300 cursor-default"
            >
              <span className="font-display font-semibold text-[clamp(28px,3.5vw,48px)] leading-[0.95] tracking-[-0.03em] text-foreground">
                {m.day}
              </span>
              <h3 className="font-display font-semibold text-[16px] tracking-[-0.01em] text-foreground mt-2">
                {m.title}
              </h3>
              <p className="text-[13px] text-muted leading-[1.65]">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

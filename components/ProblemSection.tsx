"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OrangeUnderline from "@/components/OrangeUnderline";

gsap.registerPlugin(ScrollTrigger);

const pills = [
  "40 daily WhatsApp queries",
  "Invoices sent late or wrong",
  "Lost POD photos",
  "Failed deliveries uncharged",
  "Driver pay disputed weekly",
  "No-show quotes losing jobs",
  "Zero repeat booking nudges",
  "Owner can't see the numbers",
];

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const leadRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([leadRef.current, headingRef.current], {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
      });

      if (pillsRef.current) {
        const pills = pillsRef.current.querySelectorAll("[data-pill]");
        gsap.from(pills, {
          y: 20,
          opacity: 0,
          scale: 0.93,
          stagger: 0.06,
          duration: 0.55,
          ease: "power3.out",
          scrollTrigger: { trigger: pillsRef.current, start: "top 68%" },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="what-we-fix"
      className="py-32 lg:py-40 px-6 lg:px-10 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <p
          ref={leadRef}
          className="text-[14px] text-muted leading-[1.65] mb-6 max-w-xl italic"
        >
          "We've mapped the manual workflow of 50+ courier companies. The same 8
          problems come up every time."
        </p>

        <h2
          ref={headingRef}
          className="font-display font-semibold text-[clamp(28px,4vw,44px)] leading-[1.05] tracking-[-0.02em] text-foreground max-w-2xl mb-16"
        >
          Every pound your team earns, something{" "}
          <OrangeUnderline>leaks it right back out:</OrangeUnderline>
        </h2>

        <div
          ref={pillsRef}
          className="flex flex-wrap gap-3"
        >
          {pills.map((pill, i) => (
            <div
              key={i}
              data-pill="true"
              className="px-5 py-3 rounded-full border border-surface bg-surface text-[13px] font-medium text-foreground/70 hover:border-primary/30 hover:bg-background hover:shadow-md hover:-translate-y-1 hover:scale-[1.03] hover:text-foreground transition-all duration-200 cursor-default"
            >
              {pill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

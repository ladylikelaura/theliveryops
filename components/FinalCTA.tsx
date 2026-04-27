"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        const split = new SplitText(headingRef.current, { type: "words" });
        gsap.from(split.words, {
          y: 60,
          opacity: 0,
          stagger: 0.07,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 65%" },
        });
      }

      gsap.from([subRef.current, ctaRef.current], {
        y: 24,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: subRef.current, start: "top 68%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="audit"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32 flex flex-col items-center text-center">
        <h2
          ref={headingRef}
          className="font-display font-semibold text-[clamp(36px,6vw,80px)] leading-[0.95] tracking-[-0.025em] text-foreground max-w-4xl"
        >
          Ready to Stop Running Your Business on WhatsApp?
        </h2>

        <p
          ref={subRef}
          className="mt-8 max-w-xl text-[15px] text-muted leading-[1.7] italic"
        >
          Book a free 30-minute ops audit. We'll map your workflow, find your 3
          biggest leaks, and show you exactly what we'd automate first — no
          obligation, no pitch deck.
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-col items-center gap-3">
          <div className="relative">
            {/* Glow ring */}
            <span className="absolute inset-0 rounded-[7px] bg-foreground/20 blur-md scale-110 animate-pulse" />
            <a
              href="mailto:hello@theliverops.com?subject=Free Ops Audit Request"
              className="relative inline-flex flex-col items-center px-8 py-4 bg-foreground text-background rounded-[5px] hover:bg-foreground/85 hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] active:translate-y-0 transition-all duration-200 overflow-hidden group"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none" />
              <span className="text-[16px] font-semibold leading-snug">
                Book My Free Audit
              </span>
              <span className="text-[12px] text-background/60 leading-snug mt-0.5">
                30 minutes. We find your money leaks.
              </span>
            </a>
          </div>
          <p className="text-[12px] text-muted italic">No obligation. No pitch deck.</p>
        </div>
      </div>

      {/* Full-bleed landscape illustration */}
      <div className="w-full">
        <div className="w-full h-[480px] lg:h-[620px] overflow-hidden relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/gemini_latest.png"
            alt="stylised warehouse and logistics landscape"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center top" }}
          />
          {/* Blend sky into page background at top */}
          <div
            className="absolute inset-x-0 top-0 pointer-events-none"
            style={{
              height: "22%",
              background: "linear-gradient(to bottom, #F8FAFC 0%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

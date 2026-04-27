"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import OrangeUnderline from "@/components/OrangeUnderline";
import ScrollStopVideo from "@/components/ScrollStopVideo";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (h1Ref.current) {
        const split = new SplitText(h1Ref.current, { type: "words" });
        gsap.from(split.words, {
          y: 50,
          opacity: 0,
          stagger: 0.06,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.4,
        });
      }

      gsap.from([eyebrowRef.current, bodyRef.current, ctaRef.current], {
        y: 24,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.9,
      });

      gsap.from(trapRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen bg-background overflow-hidden"
    >
      {/* Illustration — top-right, natural size, fades out */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none select-none overflow-hidden"
        style={{ zIndex: 0 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/roaddd.png"
          alt=""
          aria-hidden="true"
          style={{ width: "100%", height: "auto", display: "block", maxHeight: "50vh", objectFit: "cover", objectPosition: "center top" }}
        />
        {/* Fade bottom — multi-stop for smooth dissolve */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{ height: "70%", background: "linear-gradient(to bottom, transparent 0%, rgba(248,250,252,0.15) 20%, rgba(248,250,252,0.45) 45%, rgba(248,250,252,0.78) 68%, #F8FAFC 100%)" }} />
        {/* Left edge fade */}
        <div className="absolute inset-y-0 left-0 pointer-events-none"
          style={{ width: "12%", background: "linear-gradient(to right, #F8FAFC 0%, rgba(248,250,252,0.5) 60%, transparent 100%)" }} />
        {/* Right edge fade */}
        <div className="absolute inset-y-0 right-0 pointer-events-none"
          style={{ width: "6%", background: "linear-gradient(to left, #F8FAFC 0%, rgba(248,250,252,0.3) 70%, transparent 100%)" }} />
      </div>

      <div className="pt-28 pb-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col gap-8">

          {/* Row 1 — H1 headline */}
          <h1
            ref={h1Ref}
            className="font-display font-semibold text-[clamp(42px,6vw,80px)] leading-[0.96] tracking-[-0.025em] text-foreground max-w-4xl"
          >
            Your Ops Automated and{" "}
            <OrangeUnderline>Running Themselves.</OrangeUnderline>
          </h1>

          {/* Row 2 — Video + copy/CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-[62fr_38fr] gap-8 lg:gap-10 items-center">

            {/* Left — Canvas animation (wide) */}
            <div className="relative">
              <ScrollStopVideo />
            </div>

            {/* Right — Eyebrow + copy + CTA */}
            <div className="flex flex-col gap-5">
              <p
                ref={eyebrowRef}
                className="flex items-center gap-2 text-[13px] italic text-primary leading-[1.5]"
              >
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                AI-powered ops automation for 1–20 van courier companies —
              </p>
              <p className="font-display font-semibold text-[18px] leading-[1.1] tracking-[-0.02em]">
                <OrangeUnderline>Live in your business in 2 weeks.</OrangeUnderline>
              </p>

              <div ref={bodyRef} className="flex flex-col gap-3">
                <p className="text-[14px] text-muted leading-[1.65]">
                  We connect your tools, automate your admin, and handle customer
                  comms, invoicing, and driver pay — so your team can focus on
                  deliveries.
                </p>
                <p className="text-[14px] text-muted leading-[1.65]">
                  No new software to learn. No months-long build. Just results.
                </p>
              </div>

              <div ref={ctaRef} className="flex items-center gap-4">
                <a
                  href="#audit"
                  className="relative inline-flex flex-col items-start px-5 py-3.5 bg-foreground text-background rounded-[5px] hover:bg-foreground/85 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 transition-all duration-200 overflow-hidden group"
                >
                  {/* shimmer sweep */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none" />
                  <span className="text-[14px] font-semibold leading-snug">
                    Get My Free Ops Audit
                  </span>
                  <span className="text-[11px] text-background/60 leading-snug mt-0.5">
                    30 minutes. See what we'd automate first.
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Full-bleed blue trapezoid */}
        <div
          ref={trapRef}
          className="relative mt-12 w-full overflow-hidden"
          style={{ height: "120px" }}
          aria-hidden="true"
        >
          <div
            className="absolute inset-x-0 bottom-0"
            style={{
              background: "#2563EB",
              height: "140px",
              clipPath: "polygon(0 40%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

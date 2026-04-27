"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OrangeUnderline from "@/components/OrangeUnderline";

gsap.registerPlugin(ScrollTrigger);

const tiers = [
  {
    time: "Week 1",
    title: "First automation live.",
    desc: "Tracking bot, invoice trigger, or driver pay — whichever hurts most.",
  },
  {
    time: "Month 1",
    title: "Full ops core connected.",
    desc: "Customer comms, billing, POD filing, and weekly reporting all running.",
  },
  {
    time: "Quarter 1",
    title: "Revenue gaps closed.",
    desc: "Failed delivery recovery, surge pricing, re-booking sequences in place.",
  },
  {
    time: "Year 1",
    title: "Ops intelligence layer.",
    desc: "Owner has real-time visibility on every driver, zone, and profit margin — from their phone.",
  },
];

export default function Roadmap() {
  const sectionRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const tiersRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (barRef.current) {
        gsap.set(barRef.current, { scaleY: 0, transformOrigin: "top center" });
        gsap.to(barRef.current, {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 1,
          },
        });
      }

      tiersRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.from(el, {
          x: 32,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 70%" },
          delay: i * 0.08,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="py-16 lg:py-24">
          <p className="text-[12px] font-medium tracking-[0.12em] uppercase text-muted mb-4">
            What the first year looks like
          </p>
          <h2 className="font-display font-semibold text-[clamp(28px,4vw,44px)] leading-[1.05] tracking-[-0.02em] text-foreground max-w-xl">
            From one automation to{" "}
            <OrangeUnderline>full ops intelligence.</OrangeUnderline>
          </h2>
        </div>
      </div>

      {/* Two-column: left scrolls, right sticks — image hidden on mobile */}
      <div className="flex items-start max-w-[100vw]">

        {/* Left — progress bar + tiers */}
        <div className="w-full lg:w-1/2 px-6 lg:px-10 pb-20 lg:pb-32">
          <div className="max-w-2xl lg:ml-auto flex gap-8 lg:gap-10">
            {/* Progress bar */}
            <div className="relative flex-shrink-0 w-[3px] bg-surface rounded-full self-stretch">
              <div
                ref={barRef}
                className="absolute top-0 left-0 w-full bg-primary rounded-full"
                style={{ height: "100%" }}
              />
            </div>

            {/* Tiers */}
            <div className="flex flex-col gap-12 flex-1">
              {tiers.map((tier, i) => (
                <div
                  key={i}
                  ref={(el) => { if (el) tiersRef.current[i] = el; }}
                  className="flex flex-col gap-2 pb-12 border-b border-surface last:border-0"
                >
                  <span className="font-display font-semibold text-[clamp(32px,4.5vw,60px)] leading-[0.95] tracking-[-0.03em] text-foreground">
                    {tier.time}
                  </span>
                  <h3 className="font-display font-semibold text-[18px] tracking-[-0.01em] text-foreground mt-2">
                    {tier.title}
                  </h3>
                  <p className="text-[14px] text-muted leading-[1.65]">
                    {tier.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — sticky image, desktop only */}
        <div className="hidden lg:block w-1/2 sticky top-0 h-screen overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/roadmap-right.png"
            alt="logistics operations illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

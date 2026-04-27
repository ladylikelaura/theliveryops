"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OrangeUnderline from "@/components/OrangeUnderline";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    counter: "1/5",
    pill: "Customer Comms",
    video: "/videos/comms.mp4",
    heading: <>No more answering 'Where's my parcel?' — <OrangeUnderline>ever again.</OrangeUnderline></>,
    features: [
      { label: "AI status bot", desc: "Customer texts order number, gets a human-sounding reply in seconds" },
      { label: "Pre-delivery alerts", desc: "1 hour before arrival, customer gets a heads-up automatically" },
    ],
  },
  {
    counter: "2/5",
    pill: "Billing & Invoicing",
    video: "/videos/invoice.mp4",
    heading: <>Invoice goes out <OrangeUnderline>the moment</OrangeUnderline> the job is done.</>,
    features: [
      { label: "Auto-invoice generation", desc: "Pulls order data, fills template, sends to client. Zero admin." },
      { label: "Payment chase sequences", desc: "Day 7, 14, 21 reminders sent automatically without you touching anything" },
    ],
  },
  {
    counter: "3/5",
    pill: "Driver Management",
    video: "/videos/driverspaymgt.mp4",
    heading: <>Friday pay runs that take <OrangeUnderline>zero minutes.</OrangeUnderline></>,
    features: [
      { label: "Automated pay calculator", desc: "Deliveries counted, rate applied, payslip sent every Friday at 5pm" },
      { label: "Receipt scanning", desc: "Driver photos a fuel receipt. Claude reads it. Xero logs it. Done." },
    ],
  },
  {
    counter: "4/5",
    pill: "Failed Deliveries",
    video: "/videos/faileddelivery.mp4",
    heading: <>Turn every failed drop into <OrangeUnderline>recovered revenue.</OrangeUnderline></>,
    features: [
      { label: "Pre-delivery confirmation", desc: "1hr before drop: \"Can you confirm you'll be in?\" Failures drop 40%" },
      { label: "Re-delivery fee automation", desc: "Nobody home? Re-delivery invoice raised automatically. No more absorbing the cost." },
    ],
  },
  {
    counter: "5/5",
    pill: "Business Intelligence",
    video: "/videos/monday-morning-operations.mp4",
    heading: <>Monday morning. Owner <OrangeUnderline>already knows</OrangeUnderline> the numbers.</>,
    features: [
      { label: "Weekly ops summary", desc: "Revenue, on-time rate, best driver, busiest zone. Sent every Monday 8am." },
      { label: "Route profitability view", desc: "See which zones actually make money after fuel. Know where to grow." },
    ],
  },
];

function CardInner({ card }: { card: typeof cards[0] }) {
  return (
    <div className="w-full border border-surface/60 rounded-[12px] bg-background p-7 lg:p-9 flex flex-col gap-5 shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-medium text-muted tabular-nums">{card.counter}</span>
        <span className="px-3 py-1 rounded-full bg-surface text-[12px] font-medium text-foreground/70 border border-surface">{card.pill}</span>
      </div>

      <h2 className="font-display font-semibold text-[clamp(18px,2.2vw,26px)] leading-[1.1] tracking-[-0.02em] text-foreground">
        {card.heading}
      </h2>

      <div className="w-full aspect-video rounded-[8px] overflow-hidden relative bg-surface">
        {card.video ? (
          <video src={card.video} autoPlay muted loop playsInline className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #F5D4B8 0%, #F8F6F1 50%, #F5E6C8 100%)" }}>
            <span className="text-[11px] font-medium text-muted/50">Video coming soon</span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 pt-2 border-t border-surface">
        {card.features.map((feat, j) => (
          <div key={j} className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-[7px] flex-shrink-0" />
            <div>
              <span className="text-[13px] font-semibold text-foreground">{feat.label}</span>
              <span className="text-[13px] text-muted ml-2">— {feat.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HorizontalCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const mobileCardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024;

    const ctx = gsap.context(() => {
      if (isDesktop) {
        const track = trackRef.current;
        const inner = innerRef.current;
        if (!track || !inner) return;

        const getTotal = () => inner.scrollWidth - track.offsetWidth;

        gsap.to(inner, {
          x: () => -getTotal(),
          ease: "none",
          scrollTrigger: {
            trigger: track,
            pin: true,
            scrub: 1.4,
            start: "top top",
            end: () => `+=${getTotal()}`,
            invalidateOnRefresh: true,
          },
        });
      } else {
        // Mobile: creative clip-path curtain reveal, alternating sides
        mobileCardRefs.current.forEach((card, i) => {
          if (!card) return;
          const dir = i % 2 === 0 ? -1 : 1;
          gsap.fromTo(
            card,
            {
              clipPath: "inset(60% 0% 0% 0% round 14px)",
              y: 40,
              x: dir * 14,
              opacity: 0,
              scale: 0.95,
              rotate: dir * 0.5,
            },
            {
              clipPath: "inset(0% 0% 0% 0% round 14px)",
              y: 0,
              x: 0,
              opacity: 1,
              scale: 1,
              rotate: 0,
              duration: 0.9,
              ease: "expo.out",
              scrollTrigger: { trigger: card, start: "top 88%" },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-surface">
      {/* Section label */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-8">
        <p className="text-[12px] font-medium tracking-[0.12em] uppercase text-muted">
          What we automate
        </p>
        <h2 className="mt-3 font-display font-semibold text-[clamp(28px,4vw,44px)] leading-[1.05] tracking-[-0.02em] text-foreground">
          Five systems. Fully automated.
        </h2>
      </div>

      {/* Desktop: pinned horizontal scroll — width is max-content so no trailing gap */}
      <div ref={trackRef} className="hidden lg:block overflow-hidden h-screen">
        <div
          ref={innerRef}
          className="flex h-full items-center gap-6 pl-10 pr-32 will-change-transform"
          style={{ width: "max-content" }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[74vw] max-w-[660px] h-full flex items-center py-12"
            >
              <CardInner card={card} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical stack with creative clip-path reveals */}
      <div className="lg:hidden px-5 pb-20 flex flex-col gap-5">
        {cards.map((card, i) => (
          <div
            key={i}
            ref={(el) => { if (el) mobileCardRefs.current[i] = el; }}
          >
            <CardInner card={card} />
          </div>
        ))}
      </div>
    </section>
  );
}

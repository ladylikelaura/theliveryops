"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OrangeUnderline from "@/components/OrangeUnderline";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    index: 0,
    title: "WhatsApp Bot That Knows Your Orders",
    sub: "Your customers text. The bot replies with real data.",
    body: "Connects directly to your order sheet. Every status query answered in seconds, 24 hours a day, with no human involved.",
    image: "/images/customer-comms-mockup.png",
    imageAlt: "Customer comms dashboard showing live WhatsApp conversation with auto-reply bot",
  },
  {
    index: 1,
    title: "Auto-Invoicing That Never Forgets",
    sub: "Delivery confirmed → invoice sent. Automatically.",
    body: "Pulls the job details, fills your template, emails it to the client. If they don't pay, it chases them at day 7, 14, and 21 — politely but persistently.",
    image: "/images/billing-invoicing-mockup.png",
    imageAlt: "Billing and invoicing dashboard showing auto-generated invoice after delivery",
  },
  {
    index: 2,
    title: "Driver Pay That Runs Itself",
    sub: "Every Friday at 5pm. No spreadsheets.",
    body: "Counts completed jobs per driver, applies their rate card, deducts any advances, and sends a payslip to their phone. Done before you've left the depot.",
    image: "/images/driver-pay-mockup.png",
    imageAlt: "Driver pay dashboard showing weekly pay summary and automated payslips",
  },
  {
    index: 3,
    title: "Receipt Scanning, Hands-Free",
    sub: "Photo the receipt. Claude reads it. Xero logs it.",
    body: "Driver snaps a fuel receipt on WhatsApp. Our AI extracts the amount, vendor, and date, then files it directly to your accounting software. No paper, no delay, no VAT receipts lost in a glove box.",
    image: "/images/expense-scanning-mockup.png",
    imageAlt: "Expense scanning dashboard showing receipt auto-logged to Xero",
  },
  {
    index: 4,
    title: "Monday Morning Ops Summary",
    sub: "You wake up already knowing the numbers.",
    body: "Every Monday at 8am: total deliveries, revenue, on-time rate, best-performing driver, busiest zone, and failed delivery cost. One message. Everything you need to start the week sharp.",
    image: "/images/ops-intelligence-mockup.png",
    imageAlt: "Ops intelligence dashboard showing weekly operations summary report",
  },
  {
    index: 5,
    title: "Failed Delivery Recovery, Automated",
    sub: "Every failed drop automatically re-billed and rebooked.",
    body: "Pre-delivery alerts reduce failures before they happen. When a delivery does fail, a re-delivery fee is raised automatically and the customer is rebooked — no manual chasing required.",
    image: "/images/failed-delivery-recovery-mockup.png",
    imageAlt: "Failed delivery recovery dashboard showing pre-delivery alert and auto-raised re-delivery invoice",
  },
];


export default function StickyFeatures() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      triggerRefs.current.forEach((el, i) => {
        if (!el) return;
        ScrollTrigger.create({
          trigger: el,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-background py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16">
          <p className="text-[12px] font-medium tracking-[0.12em] uppercase text-muted mb-4">
            What we build
          </p>
          <h2 className="font-display font-semibold text-[clamp(28px,4vw,44px)] leading-[1.05] tracking-[-0.02em] text-foreground max-w-xl">
            Six automations. <OrangeUnderline>One connected ops layer.</OrangeUnderline>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — sticky text */}
          <div className="relative">
            <div className="lg:sticky lg:top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex flex-col gap-4"
                >
                  <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-primary">
                    {String(active + 1).padStart(2, "0")} / {String(features.length).padStart(2, "0")}
                  </span>
                  <h3 className="font-display font-semibold text-[clamp(22px,2.8vw,32px)] leading-[1.1] tracking-[-0.02em] text-foreground">
                    {features[active].title}
                  </h3>
                  <p className="text-[14px] font-medium text-foreground/70">
                    {features[active].sub}
                  </p>
                  <p className="text-[14px] text-muted leading-[1.7]">
                    {features[active].body}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Progress dots */}
              <div className="flex gap-2 mt-10">
                {features.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active ? "w-6 bg-primary" : "w-1.5 bg-surface"
                    }`}
                    aria-label={`Go to feature ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right — scroll triggers + illustration panels */}
          <div className="flex flex-col gap-12">
            {features.map((feat, i) => (
              <div
                key={i}
                ref={(el) => { if (el) triggerRefs.current[i] = el; }}
                className="min-h-[380px]"
              >
                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.96, y: 8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96, y: 8 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="w-full rounded-[12px] overflow-hidden relative border border-surface shadow-lg shadow-primary/[0.06]"
                    >
                      {feat.video ? (
                        <video
                          src={feat.video}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-auto object-cover"
                        />
                      ) : (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={feat.image}
                          alt={feat.imageAlt}
                          className="w-full h-auto object-cover"
                        />
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
                {active !== i && (
                  <div
                    className="w-full h-[280px] rounded-[12px] border border-surface cursor-pointer hover:border-primary/25 hover:shadow-md hover:-translate-y-0.5 hover:bg-surface/40 transition-all duration-250 flex items-center justify-center"
                    onClick={() => setActive(i)}
                  >
                    <span className="text-[13px] font-medium text-muted/60 hover:text-muted transition-colors duration-200">{feat.title}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

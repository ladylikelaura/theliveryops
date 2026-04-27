"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OrangeUnderline from "@/components/OrangeUnderline";

gsap.registerPlugin(ScrollTrigger);

const rows = [
  { label: "Time to first result", saas: "Weeks of setup", agency: "Months of build", us: "Live in 2 weeks" },
  { label: "Fits your specific workflow", saas: "Maybe 70%", agency: "Yes, but costly", us: "Yes — built around your ops" },
  { label: "AI communication layer", saas: "Templated only", agency: "You spec it", us: "Claude-powered, natural language" },
  { label: "Connects your existing tools", saas: "Limited integrations", agency: "Custom everything", us: "n8n bridges what you already have" },
  { label: "Ongoing improvement", saas: "You configure it", agency: "Retainer or fixed scope", us: "Monthly maintenance included" },
  { label: "Cost", saas: "£50–500/mo SaaS fees", agency: "£5,000–20,000+", us: "£500–2,000 build + from £300/mo" },
  { label: "Who understands logistics", saas: "Product team doesn't", agency: "You explain it to them", us: "We already know the workflow" },
  { label: "What happens when something breaks", saas: "Support ticket", agency: "Billable hours", us: "We fix it — that's the retainer" },
  { label: "Risk", saas: "Change nothing, keep losing money", agency: "High upfront cost", us: "Low: start with one automation" },
];

export default function FeatureTable() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowsRef = useRef<HTMLTableRowElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      rowsRef.current.forEach((row, i) => {
        if (!row) return;
        gsap.from(row, {
          y: 18,
          opacity: 0,
          duration: 0.55,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 70%" },
          delay: i * 0.035,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="pricing" className="py-32 lg:py-40 px-6 lg:px-10 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block px-3 py-1.5 rounded-full bg-background border border-surface/80 text-[11px] font-semibold tracking-[0.08em] uppercase text-muted mb-5">
            The Theliverops Difference
          </span>
          <h2 className="font-display font-semibold text-[clamp(28px,4vw,44px)] leading-[1.05] tracking-[-0.02em] text-foreground max-w-2xl mb-4">
            Why Theliverops works where{" "}
            <OrangeUnderline>software alone doesn't.</OrangeUnderline>
          </h2>
          <p className="text-[14px] text-muted leading-[1.65] max-w-xl">
            The tools exist. They're just not connected, configured, or talking to
            each other. That's what we fix.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-[5px] border border-surface/80">
          <table className="w-full text-left border-collapse bg-background">
            <thead>
              <tr className="border-b border-surface">
                <th className="px-5 py-4 text-[12px] font-semibold tracking-[0.06em] uppercase text-muted w-[30%]" />
                <th className="px-5 py-4 text-[12px] font-semibold tracking-[0.06em] uppercase text-muted">
                  Generic SaaS tools
                </th>
                <th className="px-5 py-4 text-[12px] font-semibold tracking-[0.06em] uppercase text-muted">
                  Custom dev agency
                </th>
                <th className="px-5 py-4 text-[12px] font-semibold tracking-[0.06em] uppercase text-primary bg-primary/[0.04] border-b border-primary/20">
                  Theliverops ✓
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  ref={(el) => { if (el) rowsRef.current[i] = el; }}
                  className="border-b border-surface last:border-0 hover:bg-surface/60 transition-colors duration-200 group"
                >
                  <td className="px-5 py-4 text-[13px] font-medium text-foreground leading-[1.5]">
                    {row.label}
                  </td>
                  <td className="px-5 py-4 text-[13px] text-muted leading-[1.5]">
                    {row.saas}
                  </td>
                  <td className="px-5 py-4 text-[13px] text-muted leading-[1.5]">
                    {row.agency}
                  </td>
                  <td className="px-5 py-4 text-[13px] font-semibold text-primary leading-[1.5] bg-primary/[0.04] group-hover:bg-primary/[0.07] transition-colors duration-200">
                    {row.us}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

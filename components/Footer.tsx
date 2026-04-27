"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const footerLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "What We Fix", href: "#what-we-fix" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(footerRef.current, {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: footerRef.current, start: "top 90%" },
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-background border-t border-surface">
      {/* Main footer row */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left — wordmark */}
        <div className="flex items-center gap-2.5 group cursor-default">
          <span className="w-5 h-5 rounded-full bg-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
          <span className="font-display font-semibold text-[16px] tracking-[-0.02em] text-foreground group-hover:text-primary transition-colors duration-200">
            Theliverops
          </span>
        </div>

        {/* Center — tagline */}
        <p className="text-[13px] italic text-muted text-center leading-[1.6]">
          Automating the Courier Ops No One Should Be Doing Manually.
        </p>

        {/* Right — social + email */}
        <div className="flex items-center justify-end gap-5">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground hover:scale-110 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground hover:scale-110 transition-all duration-200"
            aria-label="X / Twitter"
          >
            <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="mailto:hello@theliverops.com"
            className="text-[13px] font-medium text-muted hover:text-primary transition-colors duration-200"
          >
            hello@theliverops.com
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-muted">
            © 2025 Theliverops. All rights reserved.
          </p>
          <nav className="flex gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[12px] text-muted hover:text-foreground hover:translate-y-[-1px] transition-all duration-200 inline-block"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

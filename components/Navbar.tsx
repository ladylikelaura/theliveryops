"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "What We Fix", href: "#what-we-fix" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -60,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
      delay: 0.2,
    });
  }, []);

  return (
    <header
      ref={navRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-surface shadow-sm"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a href="/" className="flex items-center gap-2.5 group">
          <span
            className="w-6 h-6 rounded-full bg-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
            aria-hidden="true"
          />
          <span
            className={cn(
              "font-display font-semibold text-[17px] tracking-[-0.02em] transition-colors duration-500",
              scrolled ? "text-foreground" : "text-white drop-shadow-sm"
            )}
          >
            Theliverops
          </span>
        </a>

        {/* Center links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "relative text-[14px] font-medium transition-colors duration-500 group",
                  scrolled
                    ? "text-foreground/70 hover:text-foreground"
                    : "text-white/85 hover:text-white drop-shadow-sm"
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute bottom-[-2px] left-0 h-[1px] w-0 group-hover:w-full transition-all duration-200 ease-out",
                  scrolled ? "bg-foreground" : "bg-white"
                )} />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#audit"
          className={cn(
            "hidden md:inline-flex items-center px-5 py-2.5 text-[13px] font-medium rounded-[5px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.97] active:translate-y-0",
            scrolled
              ? "bg-foreground text-background hover:bg-foreground/85 hover:shadow-foreground/20"
              : "bg-white/15 text-white border border-white/40 hover:bg-white/25 backdrop-blur-sm"
          )}
        >
          Book a Free Audit
        </a>

        {/* Mobile menu toggle */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Open menu">
          <span className={cn("block w-5 h-[1.5px] transition-colors duration-500", scrolled ? "bg-foreground" : "bg-white")} />
          <span className={cn("block w-5 h-[1.5px] transition-colors duration-500", scrolled ? "bg-foreground" : "bg-white")} />
          <span className={cn("block w-3 h-[1.5px] transition-colors duration-500", scrolled ? "bg-foreground" : "bg-white")} />
        </button>
      </nav>
    </header>
  );
}

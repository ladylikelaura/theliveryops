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
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/98 backdrop-blur-md border-b border-surface shadow-sm"
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
                scrolled ? "text-foreground" : "text-white"
              )}
              style={!scrolled ? { textShadow: "0 1px 6px rgba(0,0,0,0.5)" } : undefined}
            >
              Theliverops
            </span>
          </a>

          {/* Center links — desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative text-[14px] font-semibold transition-colors duration-300 group",
                    scrolled
                      ? "text-foreground hover:text-primary"
                      : "text-white hover:text-white/80"
                  )}
                  style={!scrolled ? { textShadow: "0 1px 5px rgba(0,0,0,0.5)" } : undefined}
                >
                  {link.label}
                  <span className={cn(
                    "absolute bottom-[-2px] left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-200 ease-out",
                    scrolled ? "bg-primary" : "bg-white"
                  )} />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA — desktop */}
          <a
            href="#audit"
            className={cn(
              "hidden md:inline-flex items-center px-5 py-2.5 text-[13px] font-semibold rounded-[5px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.97] active:translate-y-0",
              scrolled
                ? "bg-foreground text-background hover:bg-foreground/85 hover:shadow-foreground/20"
                : "bg-white/20 text-white border border-white/50 hover:bg-white/30 backdrop-blur-sm"
            )}
            style={!scrolled ? { textShadow: "0 1px 3px rgba(0,0,0,0.3)" } : undefined}
          >
            Book a Free Audit
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] p-2 w-10 h-10"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={cn(
              "block w-5 h-[1.5px] rounded-full transition-all duration-300 origin-center",
              menuOpen ? "rotate-45 translate-y-[3.5px] bg-foreground" : scrolled ? "bg-foreground" : "bg-white"
            )} />
            <span className={cn(
              "block w-5 h-[1.5px] rounded-full transition-all duration-300",
              menuOpen ? "opacity-0 bg-foreground" : scrolled ? "bg-foreground" : "bg-white"
            )} />
            <span className={cn(
              "block h-[1.5px] rounded-full transition-all duration-300 origin-center",
              menuOpen ? "w-5 -rotate-45 -translate-y-[3.5px] bg-foreground" : `w-3 ${scrolled ? "bg-foreground" : "bg-white"}`
            )} />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-background transition-all duration-300 ease-in-out md:hidden",
          menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <div className="flex flex-col px-6 pt-24 pb-10 h-full overflow-y-auto">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display font-semibold text-[26px] tracking-[-0.02em] text-foreground hover:text-primary py-4 border-b border-surface transition-colors duration-200"
              style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#audit"
            onClick={() => setMenuOpen(false)}
            className="mt-8 inline-flex items-center justify-center px-6 py-4 bg-foreground text-background text-[15px] font-semibold rounded-[5px] hover:bg-foreground/85 transition-colors duration-200"
          >
            Book a Free Audit
          </a>
        </div>
      </div>
    </>
  );
}

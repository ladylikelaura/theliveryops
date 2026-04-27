"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);


const lines = [
  { text: "Meet Theliverops.", size: "text-[clamp(36px,5vw,64px)]" },
  { text: "Your Ops Running Itself,", size: "text-[clamp(44px,6.5vw,80px)]" },
  { text: "From Day One.", size: "text-[clamp(36px,5vw,64px)]" },
];

export default function MeetSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const linesRef = useRef<HTMLDivElement[]>([]);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      linesRef.current.forEach((el, i) => {
        if (!el) return;
        const split = new SplitText(el, { type: "words" });
        gsap.from(split.words, {
          y: 50,
          opacity: 0,
          stagger: 0.06,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 65%",
          },
          delay: i * 0.08,
        });
      });

      // Gentle float loop on illustration
      if (imgRef.current) {
        gsap.from(imgRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: imgRef.current, start: "top 70%" },
        });
        gsap.to(imgRef.current, {
          y: -12,
          duration: 3.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 0.9,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative min-h-screen flex flex-col justify-center px-6 lg:px-10 py-32 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #F8F6F1 0%, #F5E6C8 55%, #F8F0E3 100%)",
      }}
    >
      {/* Painterly gradient background placeholder */}
      {/* BACKGROUND: soft painterly warm gradient, cream to pale amber, visible texture, impressionist quality */}

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <div>
            <div className="flex flex-col gap-2 lg:gap-4">
              {lines.map((line, i) => (
                <div
                  key={i}
                  ref={(el) => { if (el) linesRef.current[i] = el; }}
                  className={`font-display font-semibold leading-[0.95] tracking-[-0.025em] text-foreground ${line.size}`}
                >
                  {line.text}
                </div>
              ))}
            </div>
            <p className="mt-10 max-w-md text-[15px] text-muted leading-[1.65]">
              Built for owner-operators of 1–20 van courier companies who are done
              running their business on WhatsApp threads and spreadsheet guesswork.
            </p>
          </div>

          {/* Right — logistics illustration */}
          <div className="flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={imgRef}
              src="/images/gemini2.png"
              alt="3D logistics illustration — delivery trucks, cargo, freight operations"
              className="w-full max-w-lg will-change-transform"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

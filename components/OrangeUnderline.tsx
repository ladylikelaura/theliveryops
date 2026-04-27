"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface OrangeUnderlineProps {
  children: React.ReactNode;
  className?: string;
}

export default function OrangeUnderline({ children, className }: OrangeUnderlineProps) {
  const lineRef = useRef<SVGPathElement>(null);
  const wrapperRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    const length = line.getTotalLength();
    gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });

    const trigger = ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top 88%",
      onEnter: () => {
        gsap.to(line, {
          strokeDashoffset: 0,
          duration: 0.45,
          ease: "power2.out",
        });
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <span ref={wrapperRef} className={cn("relative inline-block", className)}>
      {children}
      <svg
        className="absolute left-0 bottom-[-4px] w-full overflow-visible pointer-events-none"
        height="6"
        viewBox="0 0 100 6"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          ref={lineRef}
          d="M0,3 Q25,0.5 50,3 Q75,5.5 100,3"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

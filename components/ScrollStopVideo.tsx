"use client";

import { useRef, useEffect, useState } from "react";

const TOTAL_FRAMES = 80;
const FPS = 10;
const TAGLINE_HOLD_MS = 2800;
const frameSrc = (i: number) =>
  `/frames/hero2/frame_${String(i).padStart(4, "0")}.jpg`;

export default function ScrollStopVideo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const frameIndexRef = useRef(0);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef(0);
  const [loadProgress, setLoadProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [showTagline, setShowTagline] = useState(false);

  const removeBackground = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ) => {
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const brightness =
        0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
      if (brightness > 230) {
        data[i + 3] = 0;
      } else if (brightness > 200) {
        data[i + 3] = Math.round(255 * (1 - (brightness - 200) / 30));
      }
    }
    ctx.putImageData(imageData, 0, 0);
  };

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const frame = framesRef.current[index];
    if (!canvas || !frame?.complete || !frame.naturalWidth) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    if (w === 0 || h === 0) return;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, w, h);
    const scale = Math.min(w / frame.naturalWidth, h / frame.naturalHeight);
    const fw = frame.naturalWidth * scale;
    const fh = frame.naturalHeight * scale;
    ctx.drawImage(frame, (w - fw) / 2, (h - fh) / 2, fw, fh);
    removeBackground(ctx, w * dpr, h * dpr);
  };

  // Preload frames
  useEffect(() => {
    const frames: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    let loadedCount = 0;
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const idx = i - 1;
      img.onload = img.onerror = () => {
        loadedCount++;
        setLoadProgress(loadedCount / TOTAL_FRAMES);
        if (loadedCount === TOTAL_FRAMES) {
          framesRef.current = frames;
          setReady(true);
        }
      };
      img.src = frameSrc(i);
      frames[idx] = img;
    }
  }, []);

  // Animation loop — plays through, shows tagline, then loops back
  useEffect(() => {
    if (!ready) return;

    frameIndexRef.current = 0;
    lastTimeRef.current = 0;
    drawFrame(0);

    const interval = 1000 / FPS;
    let taglineTimer: ReturnType<typeof setTimeout> | null = null;

    const loop = (timestamp: number) => {
      if (timestamp - lastTimeRef.current >= interval) {
        lastTimeRef.current = timestamp;
        const idx = frameIndexRef.current;
        drawFrame(idx);

        if (idx >= TOTAL_FRAMES - 1) {
          // Show tagline, then restart
          setShowTagline(true);
          taglineTimer = setTimeout(() => {
            setShowTagline(false);
            frameIndexRef.current = 0;
            lastTimeRef.current = 0;
            rafRef.current = requestAnimationFrame(loop);
          }, TAGLINE_HOLD_MS);
          return;
        }

        frameIndexRef.current = idx + 1;
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      if (taglineTimer) clearTimeout(taglineTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  // Redraw on resize
  useEffect(() => {
    if (!ready) return;
    const onResize = () => drawFrame(frameIndexRef.current);
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  return (
    <div className="w-full aspect-video relative overflow-hidden">
      {/* Loading indicator */}
      {!ready && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="w-1/2 h-[2px] bg-surface rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-150"
              style={{ width: `${Math.round(loadProgress * 100)}%` }}
            />
          </div>
          <span className="text-[10px] font-medium tracking-widest uppercase text-muted">
            {Math.round(loadProgress * 100)}%
          </span>
        </div>
      )}

      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          opacity: ready && !showTagline ? 1 : 0,
          transition: "opacity 0.6s ease",
          display: "block",
        }}
      />

      {/* Tagline revealed after animation */}
      <div
        className="absolute inset-0 flex items-center justify-center px-4"
        style={{
          opacity: showTagline ? 1 : 0,
          transition: "opacity 0.8s ease",
          pointerEvents: "none",
        }}
      >
        <p
          className="font-display font-semibold text-center text-foreground leading-[1.15] tracking-[-0.02em]"
          style={{ fontSize: "clamp(14px, 1.6vw, 22px)" }}
        >
          we don't change what you do —{" "}
          <span className="text-primary">
            we reveal what's already there and make it usable.
          </span>
        </p>
      </div>

      {/* Bottom white blur to cover watermark */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: "28%",
          background:
            "linear-gradient(to top, #F8FAFC 30%, rgba(248,250,252,0.6) 70%, transparent 100%)",
        }}
      />
    </div>
  );
}

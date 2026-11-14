import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3 } from "lucide-react";
import ScaledSlide from "./ScaledSlide";
import { slides as defaultSlides, SlideData } from "./slideData";
import PdfExport from "./PdfExport";
import { Button } from "@/components/ui/button";

interface PresentationProps {
  slides?: SlideData[];
}

export default function Presentation({ slides = defaultSlides }: PresentationProps) {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showGrid, setShowGrid] = useState(false);

  const goTo = useCallback((index: number) => {
    setCurrent(Math.max(0, Math.min(slides.length - 1, index)));
    setShowGrid(false);
  }, [slides.length]);


  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      if (e.key === "Escape" && showGrid) { setShowGrid(false); return; }
      if (e.key === "f" || e.key === "F5") { e.preventDefault(); toggleFullscreen(); }
      if (e.key === "g") setShowGrid((v) => !v);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev, toggleFullscreen, showGrid]);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  // Touch swipe navigation (iPad / touch screens)
  const touchStart = useRef<{ x: number; y: number; t: number } | null>(null);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length !== 1) { touchStart.current = null; return; }
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY, t: Date.now() };
  }, []);

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    // Ignore swipes starting on interactive/scrollable embeds
    const target = e.target as HTMLElement | null;
    if (target?.closest("iframe, video, a, button, [data-no-swipe]")) return;

    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    const elapsed = Date.now() - start.t;
    if (elapsed > 800) return;
    if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    if (dx < 0) next();
    else prev();
  }, [next, prev]);

  const SlideComponent = slides[current].component;

  if (showGrid) {
    return (
      <div className="fixed inset-0 bg-background z-50 overflow-auto p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-foreground font-heading text-2xl font-semibold">All Slides</h2>
          <button onClick={() => setShowGrid(false)} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            ← Back to presentation
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all hover:scale-105 ${
                i === current ? "border-primary shadow-lg shadow-primary/20" : "border-border hover:border-muted-foreground"
              }`}
            >
              <div className="relative w-full h-full">
                <ScaledSlide>{<slide.component />}</ScaledSlide>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm px-2 py-1">
                <span className="text-xs text-muted-foreground">{i + 1}. {slide.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-background select-none">
      {/* Main slide area */}
      <div
        className="absolute inset-0 touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div key={current} className="relative w-full h-full slide-enter">
          <ScaledSlide>
            <SlideComponent />
          </ScaledSlide>
        </div>
      </div>

      {/* Controls */}
      <nav
        aria-label="Presentation navigation"
        className="absolute bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 shadow-lg backdrop-blur-md"
      >
        <div className="flex h-16 items-center justify-between px-3 sm:px-6">
          {/* Left: slide counter - fixed width for true centering */}
          <div className="flex w-16 items-center sm:w-24">
            <span className="font-body text-sm font-semibold text-foreground">
              {current + 1} / {slides.length}
            </span>
          </div>

          {/* Center: navigation */}
          <div className="flex min-w-0 items-center gap-2">
            <Button
              type="button"
              variant="secondary"
              size="icon"
              onClick={prev}
              disabled={current === 0}
              aria-label="Previous slide"
              className="h-11 w-11 shrink-0 rounded-full border border-border text-foreground shadow-md hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            {/* Progress dots */}
            <div className="hidden items-center gap-1.5 px-2 sm:flex">
              {slides.map((_, i) => (
                <Button
                  key={i}
                  type="button"
                  variant="ghost"
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-5 min-w-0 rounded-full p-0 transition-all ${
                    i === current
                      ? "w-7 bg-primary hover:bg-primary/90"
                      : "w-3 bg-muted-foreground/60 hover:bg-foreground"
                  }`}
                />
              ))}
            </div>

            <Button
              type="button"
              variant="secondary"
              size="icon"
              onClick={next}
              disabled={current === slides.length - 1}
              aria-label="Next slide"
              className="h-11 w-11 shrink-0 rounded-full border border-border text-foreground shadow-md hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Right: grid + fullscreen */}
          <div className="flex w-16 items-center justify-end gap-1 sm:w-24 sm:gap-2">
            <Button
              type="button"
              variant="secondary"
              size="icon"
              onClick={() => setShowGrid(true)}
              aria-label="View all slides"
              className="h-10 w-10 text-foreground"
            >
              <Grid3X3 className="h-5 w-5" />
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="icon"
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              className="hidden h-10 w-10 text-foreground sm:inline-flex"
            >
              {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}

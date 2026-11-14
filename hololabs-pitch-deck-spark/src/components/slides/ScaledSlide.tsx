import { useRef, useEffect, useState, ReactNode } from "react";

interface ScaledSlideProps {
  children: ReactNode;
  className?: string;
}

export default function ScaledSlide({ children, className = "" }: ScaledSlideProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;
      const parent = containerRef.current.parentElement;
      if (!parent) return;
      const scaleX = parent.clientWidth / 1920;
      const scaleY = parent.clientHeight / 1080;
      setScale(Math.min(scaleX, scaleY));
    };
    updateScale();
    const observer = new ResizeObserver(updateScale);
    if (containerRef.current?.parentElement) {
      observer.observe(containerRef.current.parentElement);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute w-[1920px] h-[1080px] left-1/2 top-1/2 origin-center overflow-hidden ${className}`}
      style={{
        marginLeft: -960,
        marginTop: -540,
        transform: `scale(${scale})`,
      }}
    >
      {children}
    </div>
  );
}

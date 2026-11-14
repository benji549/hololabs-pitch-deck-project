import { ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  className?: string;
  backgroundImage?: string;
  overlay?: "dark" | "left" | "bottom" | "none";
}

export default function SlideLayout({
  children,
  className = "",
  backgroundImage,
  overlay = "dark",
}: SlideLayoutProps) {
  const overlayClasses = {
    dark: "bg-slide-dark/70",
    left: "slide-gradient-left",
    bottom: "slide-gradient-bottom",
    none: "",
  };

  return (
    <div className={`slide-content relative w-full h-full bg-slide-dark overflow-hidden ${className}`}>
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 object-cover"
          style={{ width: "100%", height: "100%", top: 0, left: 0, right: 0, bottom: 0 }}
        />
      )}
      {backgroundImage && overlay !== "none" && (
        <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
      )}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}

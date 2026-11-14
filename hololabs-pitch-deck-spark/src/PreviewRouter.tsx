import { useEffect, useState, type ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";

/**
 * Only used for private preview builds (VITE_PREVIEW=true), where the site runs
 * inside a frame that cannot use normal page addresses like /services.
 * Switches decks with #atrium / #services instead and shows a small deck switcher.
 * The published site uses the normal router in App.tsx.
 */
const DECKS = [
  { hash: "#atrium", path: "/", label: "Atrium deck" },
  { hash: "#services", path: "/services", label: "Services deck" },
];

const pathFromHash = (hash: string) => DECKS.find((d) => d.hash === hash)?.path ?? "/";

export default function PreviewRouter({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(() => pathFromHash(window.location.hash));

  useEffect(() => {
    const onHashChange = () => setPath(pathFromHash(window.location.hash));
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <>
      <MemoryRouter key={path} initialEntries={[path]}>
        {children}
      </MemoryRouter>
      <nav className="fixed bottom-[18px] left-[90px] z-50 flex gap-1 rounded-full border border-white/10 bg-black/70 p-1 text-sm backdrop-blur">
        {DECKS.map((d) => (
          <a
            key={d.hash}
            href={d.hash}
            className={`rounded-full px-3 py-1.5 transition-colors ${
              d.path === path ? "bg-primary text-primary-foreground" : "text-white/70 hover:text-white"
            }`}
          >
            {d.label}
          </a>
        ))}
      </nav>
    </>
  );
}

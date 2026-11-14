export type Source = string | { label: string; url: string };

interface SourceNoteProps {
  sources: Source[];
  inline?: boolean;
}

export default function SourceNote({ sources, inline = false }: SourceNoteProps) {
  return (
    <div className={inline ? "mt-10 max-w-[1250px] animate-fade-up" : "absolute bottom-[70px] left-0 right-0 px-24 z-20"}>
      <p className="text-muted-foreground/70 text-body text-base tracking-wide">
        Sources:{" "}
        {sources.map((s, i) => (
          <span key={typeof s === "string" ? s : s.url}>
            {typeof s === "string" ? (
              s
            ) : (
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {s.label}
              </a>
            )}
            {i < sources.length - 1 && <span className="mx-1">·</span>}
          </span>
        ))}
      </p>
    </div>
  );
}

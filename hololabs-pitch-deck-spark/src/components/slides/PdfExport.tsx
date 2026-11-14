import { Download } from "lucide-react";

interface PdfExportProps {
  href?: string;
  fileName?: string;
  label?: string;
}

export default function PdfExport({
  href = `${import.meta.env.BASE_URL}HololabsServices2026.pdf`,
  fileName = "HololabsServices2026.pdf",
  label = "Download Hololabs Services PDF",
}: PdfExportProps) {
  return (
    <a
      href={href}
      download={fileName}
      className="flex items-center gap-4 px-8 py-4 rounded-2xl bg-primary text-primary-foreground text-2xl font-medium hover:bg-primary/90 transition-colors"
    >
      <Download className="w-7 h-7" />
      <span>{label}</span>
    </a>
  );
}

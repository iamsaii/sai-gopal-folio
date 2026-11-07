import type { SelectedWork } from "@/data/work";

type WorkDiagramProps = {
  variant: SelectedWork["diagram"];
};

const diagramClassName = "mt-5 h-9 w-full max-w-[260px] text-muted-foreground/40";

const WorkDiagram = ({ variant }: WorkDiagramProps) => {
  if (variant === "pipeline") {
    return (
      <svg
        viewBox="0 0 260 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        aria-hidden="true"
        className={diagramClassName}
      >
        <rect x="0.5" y="10.5" width="48" height="15" rx="2" />
        <path d="M49 18h24" strokeDasharray="2 3" />
        <rect x="74.5" y="10.5" width="48" height="15" rx="2" />
        <path d="M123 18h24" strokeDasharray="2 3" />
        <rect x="148.5" y="10.5" width="48" height="15" rx="2" />
        <path d="M197 18h18" strokeDasharray="2 3" />
        <circle cx="219" cy="18" r="2.5" fill="currentColor" stroke="none" className="text-warm" />
        <path d="M224 18h18" strokeDasharray="2 3" />
      </svg>
    );
  }

  if (variant === "batches") {
    return (
      <svg
        viewBox="0 0 260 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        aria-hidden="true"
        className={diagramClassName}
      >
        <rect x="0.5" y="12.5" width="9" height="11" rx="2" />
        <rect x="14.5" y="12.5" width="9" height="11" rx="2" />
        <rect x="28.5" y="12.5" width="9" height="11" rx="2" />
        <path d="M39 18h22" strokeDasharray="2 3" />
        <rect x="63.5" y="7.5" width="12" height="21" rx="2" />
        <rect x="80.5" y="7.5" width="12" height="21" rx="2" />
        <rect x="97.5" y="7.5" width="12" height="21" rx="2" />
        <path d="M111 18h22" strokeDasharray="2 3" />
        <rect x="135.5" y="4.5" width="16" height="27" rx="2" />
        <rect x="156.5" y="4.5" width="16" height="27" rx="2" />
        <rect x="177.5" y="4.5" width="16" height="27" rx="2" />
        <path d="M195 18h18" strokeDasharray="2 3" />
        <circle cx="217" cy="18" r="2.5" fill="currentColor" stroke="none" className="text-warm" />
        <path d="M222 18h18" strokeDasharray="2 3" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 260 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
      className={diagramClassName}
    >
      <rect x="0.5" y="10.5" width="48" height="15" rx="2" />
      <path d="M49 18h20" />
      <path d="M69 6v24" />
      <path d="M69 6h20" />
      <path d="M69 18h20" />
      <path d="M69 30h20" />
      <rect x="89.5" y="1.5" width="42" height="9" rx="2" />
      <rect x="89.5" y="13.5" width="42" height="9" rx="2" />
      <rect x="89.5" y="25.5" width="42" height="9" rx="2" />
      <path d="M132 18h18" strokeDasharray="2 3" />
      <circle cx="154" cy="18" r="2.5" fill="currentColor" stroke="none" className="text-warm" />
      <path d="M159 18h18" strokeDasharray="2 3" />
    </svg>
  );
};

export default WorkDiagram;

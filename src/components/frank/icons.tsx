import type { SVGProps } from "react";
type P = SVGProps<SVGSVGElement>;
const base = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export const FrankIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 8h14v10a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z" />
    <path d="M5 8l1-4h12l1 4M7 4l1 2 2-2 2 2 2-2 2 2 1-2" />
    <path d="M3 14h2M19 14h2" /><circle cx="9" cy="12" r="1" /><circle cx="15" cy="12" r="1" />
    <path d="M9 17h6M10 16v2M12 16v2M14 16v2" />
  </svg>
);
export const SkullIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3a8 8 0 0 0-5 14v3h10v-3a8 8 0 0 0-5-14z" />
    <circle cx="9" cy="11" r="1.6" /><circle cx="15" cy="11" r="1.6" /><path d="M12 13.5l-1 2h2zM10 20v-2M14 20v-2" />
  </svg>
);
export const WebIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
    <path d="M12 6l4 2 2 4-2 4-4 2-4-2-2-4 2-4z" /><path d="M12 9.5l2 1 1 1.5-1 1.5-2 1-2-1-1-1.5 1-1.5z" />
  </svg>
);
export const PumpkinIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 7c-5 0-8 3-8 7s3 7 8 7 8-3 8-7-3-7-8-7z" /><path d="M12 7c-2 2-2 12 0 14M12 7c2 2 2 12 0 14" />
    <path d="M12 7V4l2-1" /><path d="M8 13l1.5-1.5L11 13M13 13l1.5-1.5L16 13M9 17l1.5-1 1.5 1 1.5-1 1.5 1" />
  </svg>
);
export const BatIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 9l-1-2-1 2c-3-2-6-2-8 0 2 0 3 1 3 3 1-1 3-1 4 1 1-1 2-1 3 1 1-2 2-2 3-1 1-2 3-2 4-1 0-2 1-3 3-3-2-2-5-2-8 0l-1-2z" />
  </svg>
);
export const GhostIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 21V11a7 7 0 0 1 14 0v10l-2.5-2-2.3 2-2.2-2-2.2 2-2.3-2z" /><circle cx="9.5" cy="11" r="1" /><circle cx="14.5" cy="11" r="1" /><ellipse cx="12" cy="15" rx="1.2" ry="1.6" />
  </svg>
);
export const CauldronIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 10h18M5 10c-1 6 2 10 7 10s8-4 7-10" /><path d="M7 20l-1 2M17 20l1 2" />
    <circle cx="9" cy="6" r="1.5" /><circle cx="14" cy="4" r="1" /><circle cx="15" cy="8" r="1.2" />
  </svg>
);
export const HandIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M7 21v-4l-3-4a1.5 1.5 0 0 1 2.4-1.8L8 13V5a1.5 1.5 0 0 1 3 0v6V4a1.5 1.5 0 0 1 3 0v7V5a1.5 1.5 0 0 1 3 0v7-4a1.5 1.5 0 0 1 3 0v6c0 4-2 7-5 7z" />
    <path d="M6 21h10" />
  </svg>
);
export const CoffinIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M9 2h6l3 6-2 14H8L6 8z" /><path d="M12 7v8M9.5 10h5" />
  </svg>
);

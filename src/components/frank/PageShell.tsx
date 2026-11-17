import type { ReactNode } from "react";
export function PageShell({ title, subtitle, children }: { title: string; subtitle: string; children?: ReactNode }) {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-display text-5xl text-primary text-glow">{title}</h1>
        <p className="mt-2 text-muted-foreground">{subtitle}</p>
      </header>
      {children ?? (
        <div className="rounded-lg border border-dashed border-border bg-card/60 p-12 text-center text-muted-foreground">
          Esta parte do monstro ainda está sendo costurada… 🧵
        </div>
      )}
    </div>
  );
}

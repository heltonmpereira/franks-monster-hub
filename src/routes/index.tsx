import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/frank/PageShell";
import { navItems } from "@/components/frank/nav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Laboratório — Frank" },
      { name: "description", content: "Visão geral do Frank, o sistema que costura vários outros." },
      { property: "og:title", content: "Laboratório — Frank" },
      { property: "og:description", content: "Visão geral do Frank, o sistema que costura vários outros." },
    ],
  }),
  component: Index,
});

const stats = [
  { label: "Sistemas costurados", value: "13" },
  { label: "Componentes no caldeirão", value: "66" },
  { label: "Eventos da noite", value: "666" },
];

function Index() {
  return (
    <PageShell title="Laboratório" subtitle="Está vivo! Bem-vindo ao painel do Frank.">
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg border border-border bg-card p-6 shadow-toxic">
            <p className="text-sm text-muted-foreground">{s.label}</p>
            <p className="mt-2 font-display text-5xl text-accent">{s.value}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {navItems.slice(1).map((i) => (
          <Link key={i.url} to={i.url} className="group rounded-lg border border-border bg-card/70 p-5 transition hover:border-primary">
            <i.icon className="h-10 w-10 text-primary transition-transform group-hover:-rotate-12" />
            <p className="mt-3 font-medium">{i.title}</p>
            <p className="text-sm text-muted-foreground">{i.hint}</p>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/frank/PageShell";

export const Route = createFileRoute("/arquivo")({
  head: () => ({
    meta: [
      { title: "Cemitério — Frank" },
      { name: "description", content: "Itens arquivados descansando em paz no painel Frank." },
      { property: "og:title", content: "Cemitério — Frank" },
      { property: "og:description", content: "Itens arquivados descansando em paz no painel Frank." },
    ],
  }),
  component: () => <PageShell title="Cemitério" subtitle="Itens arquivados descansando em paz" />,
});

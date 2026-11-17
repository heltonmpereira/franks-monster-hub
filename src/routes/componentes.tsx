import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/frank/PageShell";

export const Route = createFileRoute("/componentes")({
  head: () => ({
    meta: [
      { title: "Componentes — Frank" },
      { name: "description", content: "Tudo que ferve no caldeirão no painel Frank." },
      { property: "og:title", content: "Componentes — Frank" },
      { property: "og:description", content: "Tudo que ferve no caldeirão no painel Frank." },
    ],
  }),
  component: () => <PageShell title="Componentes" subtitle="Tudo que ferve no caldeirão" />,
});

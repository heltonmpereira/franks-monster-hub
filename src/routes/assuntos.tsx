import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/frank/PageShell";

export const Route = createFileRoute("/assuntos")({
  head: () => ({
    meta: [
      { title: "Assuntos — Frank" },
      { name: "description", content: "Os temas costurados no monstro no painel Frank." },
      { property: "og:title", content: "Assuntos — Frank" },
      { property: "og:description", content: "Os temas costurados no monstro no painel Frank." },
    ],
  }),
  component: () => <PageShell title="Assuntos" subtitle="Os temas costurados no monstro" />,
});

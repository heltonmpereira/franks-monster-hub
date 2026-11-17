import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/frank/PageShell";

export const Route = createFileRoute("/usuarios")({
  head: () => ({
    meta: [
      { title: "Família — Frank" },
      { name: "description", content: "Os membros desta família assustadora no painel Frank." },
      { property: "og:title", content: "Família — Frank" },
      { property: "og:description", content: "Os membros desta família assustadora no painel Frank." },
    ],
  }),
  component: () => <PageShell title="Família" subtitle="Os membros desta família assustadora" />,
});

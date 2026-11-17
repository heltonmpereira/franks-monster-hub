import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/frank/PageShell";

export const Route = createFileRoute("/integracoes")({
  head: () => ({
    meta: [
      { title: "Integrações — Frank" },
      { name: "description", content: "A teia que conecta o Frank a outros sistemas no painel Frank." },
      { property: "og:title", content: "Integrações — Frank" },
      { property: "og:description", content: "A teia que conecta o Frank a outros sistemas no painel Frank." },
    ],
  }),
  component: () => <PageShell title="Integrações" subtitle="A teia que conecta o Frank a outros sistemas" />,
});

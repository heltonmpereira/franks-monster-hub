import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/frank/PageShell";

export const Route = createFileRoute("/configuracoes")({
  head: () => ({
    meta: [
      { title: "Mãozinha — Frank" },
      { name: "description", content: "Configurações do sistema no painel Frank." },
      { property: "og:title", content: "Mãozinha — Frank" },
      { property: "og:description", content: "Configurações do sistema no painel Frank." },
    ],
  }),
  component: () => <PageShell title="Mãozinha" subtitle="Configurações do sistema" />,
});

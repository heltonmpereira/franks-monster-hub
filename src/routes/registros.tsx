import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/frank/PageShell";

export const Route = createFileRoute("/registros")({
  head: () => ({
    meta: [
      { title: "Registros — Frank" },
      { name: "description", content: "Logs e eventos vindos do além no painel Frank." },
      { property: "og:title", content: "Registros — Frank" },
      { property: "og:description", content: "Logs e eventos vindos do além no painel Frank." },
    ],
  }),
  component: () => <PageShell title="Registros" subtitle="Logs e eventos vindos do além" />,
});

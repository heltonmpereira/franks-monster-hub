import { FrankIcon, WebIcon, CauldronIcon, PumpkinIcon, GhostIcon, SkullIcon, HandIcon, CoffinIcon } from "./icons";
export const navItems = [
  { title: "Laboratório", url: "/", icon: FrankIcon, hint: "Visão geral" },
  { title: "Integrações", url: "/integracoes", icon: WebIcon, hint: "Teia de sistemas" },
  { title: "Componentes", url: "/componentes", icon: CauldronIcon, hint: "O caldeirão" },
  { title: "Assuntos", url: "/assuntos", icon: PumpkinIcon, hint: "Temas e tópicos" },
  { title: "Família", url: "/usuarios", icon: GhostIcon, hint: "Usuários" },
  { title: "Registros", url: "/registros", icon: SkullIcon, hint: "Logs e eventos" },
  { title: "Cemitério", url: "/arquivo", icon: CoffinIcon, hint: "Arquivados" },
  { title: "Mãozinha", url: "/configuracoes", icon: HandIcon, hint: "Configurações" },
] as const;

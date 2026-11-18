import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronsLeft, ChevronsRight, Monitor, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "./nav";
import { BatIcon } from "./icons";
import { cn } from "@/lib/utils";

export function FrankSidebar({ collapsed, onToggle, open, onClose }: { collapsed: boolean; onToggle: () => void; open: boolean; onClose: () => void }) {
  const [mode, setMode] = useState<"auto" | "light" | "dark">("auto");
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("frank-theme");
    if (saved === "light" || saved === "dark" || saved === "auto") setMode(saved);
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready) return;
    localStorage.setItem("frank-theme", mode);
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = () => document.documentElement.classList.toggle("dark", mode === "dark" || (mode === "auto" && mq.matches));
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [mode, ready]);
  const next = { auto: "light", light: "dark", dark: "auto" } as const;
  const label = { auto: "Tema automático", light: "Tema claro", dark: "Tema escuro" }[mode];
  const path = useRouterState({ select: (r) => r.location.pathname });
  return (
    <aside className={cn(
      "fixed inset-y-0 left-0 z-50 flex w-64 shrink-0 bg-sidebar transition-[width,transform] duration-300 md:static md:z-auto md:translate-x-0",
      // O arame farpado sobressai ~10px para fora da caixa do aside (para atravessar
      // a fronteira no desktop), então o fechamento empurra 100% da largura + essa sobra.
      open ? "translate-x-0" : "-translate-x-[calc(100%+0.75rem)]",
      collapsed ? "md:w-20" : "md:w-64",
    )}>
      <div className="flex h-screen w-full flex-col bg-sidebar text-sidebar-foreground cobweb-corner sticky top-0">
        <div className="flex items-center gap-3 px-5 py-6">
          <BatIcon className="h-8 w-8 shrink-0 text-accent animate-flap" />
          {!collapsed && <span className="font-display text-4xl text-primary text-glow">Frank</span>}
          <button onClick={onClose} aria-label="Fechar menu"
            className="ml-auto rounded-md p-1.5 text-muted-foreground hover:text-primary md:hidden">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="-mr-2.5 flex-1 space-y-1 pl-3">
          {navItems.map((item) => {
            const active = path === item.url;
            return (
              <Link key={item.url} to={item.url} title={item.title}
                className={cn("group flex items-center gap-3 rounded-l-md px-3 py-2.5 transition-colors",
                  active ? "bg-sidebar-accent text-primary shadow-toxic" : "text-sidebar-foreground/75 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground")}>
                <item.icon className="h-6 w-6 shrink-0 transition-transform group-hover:-rotate-12 group-hover:scale-110" />
                {!collapsed && (
                  <span className="flex flex-col leading-tight">
                    <span className="font-medium">{item.title}</span>
                    <span className="text-xs text-muted-foreground">{item.hint}</span>
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
        <button onClick={() => setMode((m) => next[m])} aria-label={`${label} (clique para alternar)`} title={label}
          className="mx-3 flex items-center justify-center gap-2 rounded-md border border-sidebar-border py-2 text-sm text-muted-foreground hover:text-primary">
          {mode === "auto" ? <Monitor className="h-4 w-4" /> : mode === "light" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          {!collapsed && label}
        </button>
        <button onClick={onToggle} aria-label="Recolher menu"
          className="m-3 hidden items-center justify-center gap-2 rounded-md border border-sidebar-border py-2 text-sm text-muted-foreground hover:text-primary md:flex">
          {collapsed ? <ChevronsRight className="h-4 w-4" /> : <><ChevronsLeft className="h-4 w-4" /> Recolher</>}
        </button>
      </div>
      <div aria-hidden className="barbed-wire sticky top-0 -mr-2.5 h-screen w-5 shrink-0" />
    </aside>
  );
}

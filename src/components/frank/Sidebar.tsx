import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronsLeft, ChevronsRight, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "./nav";
import { BatIcon } from "./icons";
import { cn } from "@/lib/utils";

export function FrankSidebar({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  const [dark, setDark] = useState(true);
  useEffect(() => { setDark(localStorage.getItem("frank-theme") !== "light"); }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("frank-theme", dark ? "dark" : "light");
  }, [dark]);
  const path = useRouterState({ select: (r) => r.location.pathname });
  return (
    <aside className={cn("relative flex shrink-0 bg-sidebar transition-[width] duration-300", collapsed ? "w-20" : "w-64")}>
      <div className="flex h-screen w-full flex-col bg-sidebar text-sidebar-foreground cobweb-corner sticky top-0">
        <div className="flex items-center gap-3 px-5 py-6">
          <BatIcon className="h-8 w-8 shrink-0 text-accent animate-flap" />
          {!collapsed && <span className="font-display text-4xl text-primary text-glow">Frank</span>}
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
        <button onClick={() => setDark((d) => !d)} aria-label="Alternar tema"
          className="mx-3 flex items-center justify-center gap-2 rounded-md border border-sidebar-border py-2 text-sm text-muted-foreground hover:text-primary">
          {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          {!collapsed && (dark ? "Tema claro" : "Tema escuro")}
        </button>
        <button onClick={onToggle} aria-label="Recolher menu"
          className="m-3 flex items-center justify-center gap-2 rounded-md border border-sidebar-border py-2 text-sm text-muted-foreground hover:text-primary">
          {collapsed ? <ChevronsRight className="h-4 w-4" /> : <><ChevronsLeft className="h-4 w-4" /> Recolher</>}
        </button>
      </div>
      <div aria-hidden className="barbed-wire sticky top-0 -mr-2.5 h-screen w-5 shrink-0" />
    </aside>
  );
}

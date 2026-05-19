'use client';

import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";
import { useRouter, usePathname } from 'next/navigation';

import { useState } from "react";

interface HeaderProps {
  onHomeClick?: () => void;
}

const navItems = [
  { path: "/", label: "about" },
  { path: "/research", label: "research" },
  { path: "/projects", label: "projects" },
  { path: "/blogs", label: "blogs" },
  { path: "/tools", label: "tools" },
];

export const Header = (_props: HeaderProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-transparent">
        <div className="relative h-12 flex items-center px-3 sm:px-4">
          {/* Centered desktop nav */}
          <nav
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-0.5 rounded-full bg-muted/30 border border-border/60 p-1 shadow-sm backdrop-blur-sm"
            role="navigation"
            aria-label="Primary"
          >
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <button
                  key={item.path}
                  onClick={() => router.push(item.path)}
                  aria-current={active ? "page" : undefined}
                  className={`
                    relative px-3.5 py-1 rounded-full font-mono text-[11px] uppercase tracking-[0.12em]
                    transition-all duration-300 ease-out
                    ${active
                      ? "text-background bg-foreground shadow-[0_1px_2px_rgba(0,0,0,0.08)]"
                      : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                    }
                  `}
                >
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile: brand on left to balance the bar */}
          <div className="md:hidden flex-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
            {navItems.find((n) => isActive(n.path))?.label ?? "menu"}
          </div>

          {/* Right side — absolute on desktop so nav stays truly centered */}
          <div className="ml-auto flex items-center gap-1 md:absolute md:right-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full hover:bg-foreground/5 text-muted-foreground transition-colors duration-200"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden sticky top-[48px] z-40 bg-background/95 backdrop-blur-md transition-[max-height,opacity] duration-300 ease-out ${
          mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="px-2 py-2 flex flex-col gap-1 font-mono">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <button
                key={item.path}
                onClick={() => {
                  router.push(item.path);
                  setMobileMenuOpen(false);
                }}
                aria-current={active ? "page" : undefined}
                className={`
                  w-full text-left px-3 py-2 rounded-full text-[12px] uppercase tracking-[0.12em]
                  transition-colors duration-200
                  ${active
                    ? "text-background bg-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                  }
                `}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
};

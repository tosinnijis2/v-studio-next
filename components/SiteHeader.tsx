"use client";

import { useState } from "react";

const navItems = [
  ["Services", "#services"],
  ["Work", "#work"],
  ["Process", "#process"],
  ["About", "#about"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="V Studio home" onClick={closeMenu}>
        V<span>/</span>STUDIO
      </a>

      <button
        className="menu-btn"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>

      <nav id="site-nav" className={`nav${open ? " open" : ""}`} aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a key={href} href={href} onClick={closeMenu}>
            {label}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={closeMenu}>
          Start a project
        </a>
      </nav>
    </header>
  );
}

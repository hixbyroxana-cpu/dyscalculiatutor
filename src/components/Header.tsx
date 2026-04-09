import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Why Long-Term", href: "#why" },
    { label: "Programmes", href: "#services" },
    { label: "Why Not Cramming", href: "#why-not-cramming" },
    { label: "What is Dyscalculia?", href: "#what-is-dyscalculia" },
    { label: "Stories", href: "#testimonials" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <nav className="container flex items-center justify-between py-4" aria-label="Main navigation">
        <a href="#" className="font-heading text-xl font-semibold text-primary">
          dyscalculia<span className="text-accent">.help</span>
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Book a Strategy Call
            </a>
          </li>
        </ul>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-card px-6 pb-6 animate-fade-in">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-base font-medium text-foreground" onClick={() => setMenuOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center w-full px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold"
              >
                Book a Strategy Call
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

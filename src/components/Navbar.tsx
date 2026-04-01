import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FlagButton = ({
  src,
  alt,
  label,
  active,
  onClick,
}: {
  src: string;
  alt: string;
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    aria-label={label}
    title={label}
    className={`w-7 h-5 rounded-sm overflow-hidden transition-all duration-200 flex-shrink-0 ${
      active
        ? "ring-2 ring-tellus-green ring-offset-1"
        : "opacity-50 hover:opacity-80"
    }`}
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      width={28}
      height={20}
    />
  </button>
);

const navLinks = [
  { pt: "Sobre Nós", en: "About Us", href: "#sobre" },
  { pt: "Missão", en: "Mission", href: "#missao" },
  { pt: "Áreas", en: "Areas", href: "#areas" },
  { pt: "Projetos", en: "Projects", href: "#projetos" },
  { pt: "Colaborar", en: "Collaborate", href: "#colaborar" },
  { pt: "Contacto", en: "Contact", href: "#contacto" },
];

export const Navbar = () => {
  const { t, lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.25, rootMargin: "-80px 0px -45% 0px" },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full h-16 bg-background border-b border-tellus-divider flex items-center justify-between px-5 md:px-8 lg:px-20 transition-shadow duration-300 ${
          scrolled ? "shadow-[0_2px_12px_rgba(45,134,83,0.08)]" : ""
        }`}
      >
        <a href="#" className="flex-shrink-0">
          <img
            src="/logo_plus_tellus_plus_ecocentic.png"
            alt="Tellus Ecocentric"
            className="w-32 h-auto"
          />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link-animated font-body text-sm font-medium transition-colors ${
                  isActive
                    ? "text-tellus-green"
                    : "text-tellus-body hover:text-tellus-green"
                }`}
              >
                {t(link.pt, link.en)}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5">
            <FlagButton
              src="https://flagcdn.com/pt.svg"
              alt="Portugal flag"
              label="Português"
              active={lang === "pt"}
              onClick={() => lang !== "pt" && toggleLang()}
            />
            <FlagButton
              src="https://flagcdn.com/gb.svg"
              alt="United Kingdom flag"
              label="English"
              active={lang === "en"}
              onClick={() => lang !== "en" && toggleLang()}
            />
          </div>
          <a
            href="#junta-te"
            className="hidden sm:inline-flex items-center h-[38px] px-5 bg-tellus-green text-primary-foreground font-body text-sm font-semibold rounded-md hover:bg-tellus-green-dark transition-colors"
          >
            {t("Junta-te", "Join Us")}
          </a>
          <button
            className="lg:hidden p-2 text-tellus-body"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[100]"
          onClick={() => setMobileOpen(false)}
        >
          <div className="absolute inset-0 bg-tellus-charcoal/20" />
          <div
            className="absolute right-0 top-0 h-full w-[300px] bg-background shadow-xl animate-slide-in-right"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-5 right-5 text-tellus-body"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col gap-6 pt-20 px-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-display text-[28px] text-tellus-charcoal hover:text-tellus-green transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {t(link.pt, link.en)}
                </a>
              ))}
              <a
                href="#junta-te"
                className="mt-4 inline-flex items-center justify-center h-12 px-7 bg-tellus-green text-primary-foreground font-body text-sm font-semibold rounded-md hover:bg-tellus-green-dark transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {t("Junta-te", "Join Us")}
              </a>
              <div className="flex items-center gap-2 mt-2">
                <FlagButton
                  src="https://flagcdn.com/pt.svg"
                  alt="Portugal flag"
                  label="Português"
                  active={lang === "pt"}
                  onClick={() => {
                    if (lang !== "pt") toggleLang();
                    setMobileOpen(false);
                  }}
                />
                <FlagButton
                  src="https://flagcdn.com/gb.svg"
                  alt="United Kingdom flag"
                  label="English"
                  active={lang === "en"}
                  onClick={() => {
                    if (lang !== "en") toggleLang();
                    setMobileOpen(false);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

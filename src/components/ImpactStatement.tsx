import { useLanguage } from "@/contexts/LanguageContext";

export const ImpactStatement = () => {
  const { lang } = useLanguage();

  return (
    <section className="relative noise-texture bg-white flex items-center justify-center py-20 lg:py-0 lg:h-[420px]">
      <div className="text-center px-6 max-w-[900px] mx-auto scroll-reveal">
        {/* Decorative top rule */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="h-px w-16 bg-tellus-green" />
          <span className="font-display italic text-5xl text-tellus-green leading-none select-none">
            "
          </span>
          <span className="h-px w-16 bg-tellus-green" />
        </div>
        <blockquote className="font-display italic text-4xl lg:text-[64px] text-tellus-charcoal leading-[1.1]">
          {lang === "pt" ? (
            <>
              Um futuro justo e resiliente depende da{" "}
              <span className="text-tellus-green">harmonia</span> entre
              sociedade e natureza.
            </>
          ) : (
            <>
              A just and resilient future depends on the{" "}
              <span className="text-tellus-green">harmony</span> between society
              and nature.
            </>
          )}
        </blockquote>
        <p className="font-body text-[13px] text-tellus-muted uppercase tracking-[0.1em] mt-8">
          — TELLUS ECOCENTRIC LAB
        </p>
      </div>
    </section>
  );
};

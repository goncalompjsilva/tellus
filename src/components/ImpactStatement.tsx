import { useLanguage } from "@/contexts/LanguageContext";

export const ImpactStatement = () => {
  const { t } = useLanguage();

  return (
    <section className="relative noise-texture bg-tellus-green flex items-center justify-center py-20 lg:py-0 lg:h-[350px]">
      <div className="text-center px-6 max-w-[900px] mx-auto scroll-reveal">
        <blockquote className="font-display italic text-4xl lg:text-[64px] text-primary-foreground leading-[1.1]">
          {t(
            '"Um futuro justo e resiliente depende da harmonia entre sociedade e natureza."',
            '"A just and resilient future depends on the harmony between society and nature."',
          )}
        </blockquote>
        <p className="font-body text-[13px] text-primary-foreground/70 uppercase tracking-[0.1em] mt-6">
          — TELLUS ECOCENTRIC LAB · {t("MISSÃO", "MISSION")}
        </p>
      </div>
    </section>
  );
};

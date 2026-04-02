import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/contexts/LanguageContext";

export const CollaborateSection = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const tags = [
    { pt: "Entidades públicas", en: "Public entities" },
    {
      pt: "Organizações da sociedade civil",
      en: "Civil society organizations",
    },
    { pt: "Universidades e investigação", en: "Universities and research" },
    { pt: "Empresas sustentáveis", en: "Sustainable businesses" },
    { pt: "Redes internacionais", en: "International networks" },
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    setError(false);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      );
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="colaborar"
      className="relative noise-texture bg-background py-20 lg:py-[100px]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left — 60% */}
          <div className="lg:w-[60%] scroll-reveal">
            <span className="eyebrow">{t("COLABORAR", "COLLABORATE")}</span>
            <h2 className="font-display text-3xl lg:text-[48px] font-medium mt-3 leading-tight">
              {t(
                "Trabalhar em rede para amplificar o impacte",
                "Networking to amplify impact",
              )}
            </h2>
            <p className="font-body text-[17px] leading-[1.75] text-tellus-body mt-6">
              {t(
                "Disponibilizamo-nos a colaborar com entidades que partilham o compromisso com a sustentabilidade, o ambiente e o bem-estar social. Juntos, podemos gerar impacte real e mensurável.",
                "We are available to collaborate with entities that share the commitment to sustainability, the environment and social well-being. Together, we can generate real and measurable impact.",
              )}
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {tags.map((tag) => (
                <span
                  key={tag.pt}
                  className="bg-tellus-off-white border border-tellus-divider font-body text-[13px] text-tellus-body px-3.5 py-1.5 rounded"
                >
                  {t(tag.pt, tag.en)}
                </span>
              ))}
            </div>
          </div>

          {/* Right — 40% form */}
          <div
            className="lg:w-[40%] scroll-reveal"
            style={{ transitionDelay: "150ms" }}
          >
            <div className="border border-tellus-divider rounded-lg p-8 lg:p-12 bg-tellus-green/10">
              {submitted ? (
                <div className="text-center py-8">
                  <p className="font-display text-2xl text-tellus-green">
                    {t("Obrigado!", "Thank you!")}
                  </p>
                  <p className="font-body text-sm text-tellus-muted mt-2">
                    {t(
                      "Entraremos em contacto brevemente.",
                      "We'll be in touch shortly.",
                    )}
                  </p>{" "}
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="collab-name"
                      className="font-body text-xs text-tellus-muted block mb-1"
                    >
                      {t("Nome", "Name")}
                    </label>
                    <input
                      id="collab-name"
                      name="name"
                      type="text"
                      required
                      className="input-underline"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="collab-org"
                      className="font-body text-xs text-tellus-muted block mb-1"
                    >
                      {t("Organização", "Organization")}
                    </label>
                    <input
                      id="collab-org"
                      name="organization"
                      type="text"
                      className="input-underline"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="collab-email"
                      className="font-body text-xs text-tellus-muted block mb-1"
                    >
                      Email
                    </label>
                    <input
                      id="collab-email"
                      name="email"
                      type="email"
                      required
                      className="input-underline"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="collab-message"
                      className="font-body text-xs text-tellus-muted block mb-1"
                    >
                      {t("Mensagem", "Message")}
                    </label>
                    <textarea
                      id="collab-message"
                      name="message"
                      required
                      rows={3}
                      className="input-underline resize-none"
                    />
                  </div>
                  {error && (
                    <p className="font-body text-xs text-red-500 text-center">
                      {t(
                        "Ocorreu um erro. Tente novamente.",
                        "Something went wrong. Please try again.",
                      )}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full h-12 bg-tellus-green text-primary-foreground font-body text-sm font-semibold rounded-md hover:bg-tellus-green-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? t("A enviar…", "Sending…") : t("Enviar", "Send")}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

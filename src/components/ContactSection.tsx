import { useLanguage } from '@/contexts/LanguageContext';

const PortugalMap = () => (
  <svg viewBox="0 0 300 500" className="w-full max-w-[300px] mx-auto" aria-label="Map of Portugal">
    <path
      d="M150 20 C120 40 80 80 70 120 C60 160 65 200 75 240 C80 260 85 280 90 300 C95 320 100 340 110 360 C120 380 130 400 140 420 C145 430 150 440 155 450 C160 440 165 430 170 420 C180 400 190 380 195 360 C200 340 205 320 210 300 C215 280 220 260 225 240 C235 200 240 160 230 120 C220 80 180 40 150 20Z"
      fill="hsl(148, 38%, 92%)"
      stroke="hsl(148, 51%, 35%)"
      strokeWidth="1.5"
    />
    {/* Lisbon pin */}
    <g transform="translate(135, 310)">
      <path d="M10 0 C4.5 0 0 4.5 0 10 C0 17 10 28 10 28 C10 28 20 17 20 10 C20 4.5 15.5 0 10 0Z" fill="hsl(16, 66%, 47%)" />
      <circle cx="10" cy="10" r="4" fill="hsl(0, 0%, 100%)" />
    </g>
    <text x="160" y="322" fontFamily="'DM Sans', sans-serif" fontSize="11" fill="hsl(220, 9%, 46%)">Lisboa</text>
  </svg>
);

export const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contacto" className="relative noise-texture bg-background py-20 lg:py-[100px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left — 40% */}
          <div className="lg:w-[40%] scroll-reveal">
            <h2 className="font-display text-3xl lg:text-[40px] font-medium">
              {t('Fala connosco', 'Talk to us')}
            </h2>
            <p className="font-body text-[17px] leading-[1.75] text-tellus-body mt-4">
              {t(
                'Estamos disponíveis para colaborar, responder a questões e receber novas ideias.',
                'We are available to collaborate, answer questions and receive new ideas.'
              )}
            </p>
            <a href="mailto:contacto@tellus.pt" className="block font-body text-lg text-tellus-green mt-6 nav-link-animated inline-block hover:text-tellus-green-light transition-colors">
              contacto@tellus.pt
            </a>
            <p className="font-body text-[15px] text-tellus-muted mt-3">Portugal</p>
            <div className="flex gap-4 mt-4">
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="text-tellus-muted hover:text-tellus-green transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="text-tellus-muted hover:text-tellus-green transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="text-tellus-muted hover:text-tellus-green transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right — 60% map */}
          <div className="lg:w-[60%] flex items-center justify-center scroll-reveal" style={{ transitionDelay: '150ms' }}>
            <PortugalMap />
          </div>
        </div>
      </div>
    </section>
  );
};

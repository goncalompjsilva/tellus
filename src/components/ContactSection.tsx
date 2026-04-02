import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { useLanguage } from "@/contexts/LanguageContext";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

const PortugalMap = () => (
  <div className="w-full max-w-[260px] mx-auto" aria-label="Map of Portugal">
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [8.0, -39.5, 0],
        scale: 4700,
      }}
      width={260}
      height={440}
    >
      <Geographies geography={GEO_URL}>
        {({ geographies }) =>
          geographies
            .filter((geo) => geo.id === "620")
            .map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="hsl(148, 38%, 92%)"
                stroke="hsl(148, 51%, 35%)"
                strokeWidth={1.5}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
        }
      </Geographies>
      <Marker coordinates={[-9.2, 38.87]}>
        <path
          d="M0-14 C-3.5-14 -6-11.5 -6-8 C-6-3 0 4 0 4 C0 4 6-3 6-8 C6-11.5 3.5-14 0-14Z"
          fill="hsl(16, 66%, 47%)"
        />
        <circle cy="-8" r="2.5" fill="white" />
        <text
          textAnchor="middle"
          y={25}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15,
            fill: "hsl(220, 9%, 46%)",
          }}
        >
          Lisboa
        </text>
      </Marker>
    </ComposableMap>
  </div>
);

export const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="contacto"
      className="relative noise-texture bg-background py-20 lg:py-[100px]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left — 40% */}
          <div className="lg:w-[40%] scroll-reveal">
            <h2 className="font-display text-3xl lg:text-[40px] font-medium">
              {t("Fala connosco", "Talk to us")}
            </h2>
            <p className="font-body text-[17px] leading-[1.75] text-tellus-body mt-4">
              {t(
                "Estamos disponíveis para colaborar, responder a questões e receber novas ideias.",
                "We are available to collaborate, answer questions and receive new ideas.",
              )}
            </p>
            <a
              href="mailto:contact@tellusecocentriclab.com"
              className="font-body text-lg text-tellus-green mt-6 nav-link-animated inline-block hover:text-tellus-green-light transition-colors"
            >
              contact@tellusecocentriclab.com
            </a>
            <p className="font-body text-[15px] text-tellus-muted mt-3">
              Portugal
            </p>
          </div>

          {/* Right — 60% map */}
          <div
            className="lg:w-[60%] flex items-center justify-center scroll-reveal"
            style={{ transitionDelay: "150ms" }}
          >
            <PortugalMap />
          </div>
        </div>
      </div>
    </section>
  );
};

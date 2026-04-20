
import React, { useEffect, useRef, useState } from "react";
import { Eye, Tag, Zap, MapPin, PenTool } from "lucide-react";

export interface Feature {
  title: string;
  blurb: string;
  meta: string;
  icon: React.ElementType;
  animation?: string;
}

interface BentoItemProps {
  feature: Feature;
  span: string;
  index: number;
  isVisible: boolean;
}

const BentoItem: React.FC<BentoItemProps> = ({ feature, span = "", index = 0, isVisible = false }) => {
  const { icon: Icon, animation, title, blurb, meta } = feature;
  // Use a monochrome-compatible gradient
  const gradientFill = "radial-gradient(ellipse 60% 120% at 12% 0%, rgba(var(--foreground-rgb),0.1), transparent 72%)"; // Adapted roughly
  const animationDelay = `${Math.max(index * 0.12, 0)}s`;

  // Default animations matching the prompt
  const defaultAnimation = "bento2-float 6s ease-in-out infinite";
  const finalAnimation = animation || defaultAnimation;

  return (
    <article
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/50 p-6 shadow-lg transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl motion-safe:opacity-0 ${
        isVisible ? "motion-safe:animate-[bento2-card_0.8s_ease-out_forwards]" : ""
      } ${span}`}
      style={{ animationDelay }}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-background/5 transition-colors duration-500" />
        <div
          className="absolute inset-0 opacity-40 transition-opacity duration-500 bg-gradient-to-br from-foreground/5 to-transparent"
        />
      </div>
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background/10">
          <Icon
            className="h-6 w-6 text-foreground"
            strokeWidth={1.5}
            style={{ animation: finalAnimation }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <header className="flex items-start gap-3 flex-wrap">
            <h3 className="text-base font-semibold uppercase tracking-wide text-foreground">
              {title}
            </h3>
            {meta && (
              <span className="ml-auto whitespace-nowrap rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {meta}
              </span>
            )}
          </header>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {blurb}
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div
          className="absolute inset-0 rounded-2xl border border-foreground/10 transition-colors duration-500"
          style={{
            maskImage:
              "radial-gradient(220px_220px_at_var(--x,50%)_var(--y,50%), black, transparent)",
            WebkitMaskImage:
              "radial-gradient(220px_220px_at_var(--x,50%)_var(--y,50%), black, transparent)",
          }}
        />
      </div>
    </article>
  );
};

interface BentoGridProps {
  title: string;
  subtitle: string;
  tagline?: string;
  features: Feature[];
  spans?: string[];
  footerText?: string;
  className?: string;
}

function BentoGrid({ 
  title, 
  subtitle, 
  tagline = "Capabilities", 
  features, 
  spans, 
  footerText = "Precision in every pixel.",
  className 
}: BentoGridProps) {
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const id = "bento2-animations";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.innerHTML = `
      @keyframes bento2-float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6%); }
      }
      @keyframes bento2-intro {
        0% { opacity: 0; transform: translate3d(0, 28px, 0); }
        100% { opacity: 1; transform: translate3d(0, 0, 0); }
      }
      @keyframes bento2-card {
        0% { opacity: 0; transform: translate3d(0, 18px, 0) scale(0.96); }
        100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
      }
    `;
    document.head.appendChild(style);
  }, []);

  useEffect(() => {
    if (!sectionRef.current || typeof window === "undefined") return;

    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const defaultSpans = [
    "md:col-span-4 md:row-span-2",
    "md:col-span-2 md:row-span-1",
    "md:col-span-2 md:row-span-1",
    "md:col-span-3 md:row-span-1",
    "md:col-span-3 md:row-span-1",
  ];

  const currentSpans = spans || defaultSpans;

  return (
    <div className={`relative w-full bg-background text-foreground ${className || ''}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 -z-30 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 [--aurora-base:var(--background)] [--aurora-accent:rgba(59,130,246,0.15)]"
          style={{
            background:
              "radial-gradient(ellipse 55% 100% at 12% 0%, var(--aurora-accent), transparent 65%), radial-gradient(ellipse 40% 80% at 88% 0%, rgba(148,163,184,0.1), transparent 70%), var(--background)",
          }}
        />
        <div
          className="absolute inset-0 [--grid-color:rgba(128,128,128,0.1)]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--grid-color) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 0",
            opacity: 0.5,
          }}
        />
      </div>

      <section
        ref={sectionRef}
        className={`relative mx-auto max-w-6xl px-6 py-20 motion-safe:opacity-0 ${
          sectionVisible ? "motion-safe:animate-[bento2-intro_0.9s_ease-out_forwards]" : ""
        }`}
      >
        <header className="mb-10 flex flex-col gap-6 border-b border-border pb-6 transition-colors duration-500 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
              {tagline}
            </span>
            <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">
              {title}
            </h2>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <p className="max-w-sm text-sm text-muted-foreground md:text-base">
              {subtitle}
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-3 md:auto-rows-[minmax(120px,auto)] md:grid-cols-6">
          {features.map((feature, index) => (
            <BentoItem
              key={feature.title}
              span={currentSpans[index] || "md:col-span-3 md:row-span-1"}
              feature={feature}
              index={index}
              isVisible={sectionVisible}
            />
          ))}
        </div>

        <footer className="mt-16 border-t border-border pt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {footerText}
        </footer>
      </section>
    </div>
  );
}

export default BentoGrid;

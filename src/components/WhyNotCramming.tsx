import { AlertTriangle, TrendingUp, Layers } from "lucide-react";

const points = [
  {
    icon: AlertTriangle,
    title: "Cramming Creates Fragile Knowledge",
    description:
      "When a student with dyscalculia memorises a method for a test, that knowledge sits on shaky ground. Without genuine understanding of why a method works, it collapses under pressure or when the context changes.",
  },
  {
    icon: Layers,
    title: "Maths is Cumulative — Gaps Compound",
    description:
      "Every mathematical concept builds on the last. A student who doesn't truly understand place value will struggle with multiplication, which means fractions become impossible, which means algebra feels like a foreign language. Short-term fixes ignore this chain entirely.",
  },
  {
    icon: TrendingUp,
    title: "Multi-Sensory Learning Takes Time",
    description:
      "As a PGCE and qualified specialist, I use evidence-based, multi-sensory approaches — concrete manipulatives, visual models, and structured reasoning. These methods rewire how a student relates to numbers, but that rewiring requires consistent, sustained practice over months.",
  },
];

const WhyNotCramming = () => {
  return (
    <section id="why-not-cramming" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Why Short-Term Cramming Doesn't Work for Dyscalculia
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Parents often ask: "Can we just get them through the exam?" I understand
              the impulse — but here's why that approach does more harm than good.
            </p>
          </div>

          <div className="space-y-6">
            {points.map((point) => (
              <article
                key={point.title}
                className="bg-card rounded-2xl p-8 shadow-card flex gap-6 items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-peach-light flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-6 h-6 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 bg-sage-light rounded-2xl p-8 text-center">
            <p className="text-foreground text-lg font-medium leading-relaxed">
              "The goal isn't to pass the next test — it's to build a student who
              genuinely understands numbers, for life. That's what long-term
              specialist support achieves."
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center mt-6 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Inquire About Long-Term Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNotCramming;

import { Route, Compass, Users } from "lucide-react";

const services = [
  {
    icon: Route,
    title: "The Foundation Programme",
    subtitle: "Primary through Key Stage 3",
    description:
      "A structured, long-term programme designed to build rock-solid number sense from the earliest stages. Using multi-sensory, concrete methods, we work together over months to develop the deep conceptual understanding that dyscalculic learners need.",
    features: ["Individualised learning roadmap", "Multi-sensory methods", "Termly progress reviews", "Ongoing parent updates"],
  },
  {
    icon: Compass,
    title: "Ongoing Specialist Support",
    subtitle: "Key Stage 3 through GCSE",
    description:
      "Sustained support that grows with your child. As concepts become more complex, I ensure every new idea is anchored to a firm foundation — no rushing, no gaps, just steady and meaningful progress.",
    features: ["Cumulative skill-building", "GCSE preparation pathway", "Exam confidence strategies", "Flexible long-term scheduling"],
  },
  {
    icon: Users,
    title: "Family Partnership Sessions",
    subtitle: "Supporting the whole journey",
    description:
      "Long-term success requires a team. These sessions equip parents and carers with practical strategies, activity ideas, and the understanding needed to support your child's mathematical development at every stage.",
    features: ["Developmental milestone guidance", "Home strategy toolkit", "School advocacy support", "Ongoing email consultation"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Programmes Designed for Lasting Change
          </h2>
          <p className="text-muted-foreground text-lg">
            These aren't one-off lessons — they're carefully structured journeys
            built to develop confidence and competence over time.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-sage-light flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                {service.title}
              </h3>
              <p className="text-sm font-medium text-accent mb-4">{service.subtitle}</p>
              <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
              <ul className="space-y-2" aria-label={`${service.title} features`}>
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

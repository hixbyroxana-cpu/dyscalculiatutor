import { Monitor, ClipboardList, Users } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "1-to-1 Online Tutoring",
    description:
      "Tailored sessions delivered online, using interactive tools and multi-sensory approaches designed specifically for dyscalculic learners.",
    features: ["Flexible scheduling", "Interactive whiteboard", "Progress tracking"],
  },
  {
    icon: ClipboardList,
    title: "Diagnostic Assessment Support",
    description:
      "Guidance through the assessment process to help identify dyscalculia and understand your child's unique learning profile.",
    features: ["Detailed learning profile", "Actionable recommendations", "School liaison support"],
  },
  {
    icon: Users,
    title: "Parental Strategy Sessions",
    description:
      "Practical workshops to equip parents with strategies and activities to support maths learning at home with confidence.",
    features: ["Home activity ideas", "Anxiety management tips", "Ongoing email support"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            How I Can Help
          </h2>
          <p className="text-muted-foreground text-lg">
            Every service is built around patience, understanding, and proven methods
            for neurodiverse learners.
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
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
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

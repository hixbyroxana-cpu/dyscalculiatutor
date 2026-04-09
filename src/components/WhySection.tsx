import { Heart, Brain, Sparkles } from "lucide-react";

const painPoints = [
  {
    icon: Heart,
    title: "Beyond Memorisation",
    description:
      "Rote learning and trick-based methods fail dyscalculic learners. I focus on building genuine number sense — deep conceptual understanding that lasts a lifetime, not just until the next test.",
    bg: "bg-peach-light",
  },
  {
    icon: Brain,
    title: "A Journey, Not a Quick Fix",
    description:
      "Dyscalculia is a neurological difference that requires sustained, specialist support. My programmes are designed around months and years of cumulative progress — because real understanding can't be rushed.",
    bg: "bg-sage-light",
  },
  {
    icon: Sparkles,
    title: "Filling Gaps Permanently",
    description:
      "Short-term cramming leaves fragile foundations. I work systematically to identify and permanently fill every gap in your child's mathematical understanding, building confidence from the ground up.",
    bg: "bg-lavender-light",
  },
];

const WhySection = () => {
  return (
    <section id="why" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Why Deep Understanding Beats Exam Prep
          </h2>
          <p className="text-muted-foreground text-lg">
            Most tutoring focuses on passing the next test. My approach is different —
            I build the sustainable mathematical foundations your child needs for life.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((item) => (
            <article
              key={item.title}
              className={`${item.bg} rounded-2xl p-8 transition-all duration-300 hover:shadow-hover hover:-translate-y-1`}
            >
              <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center mb-5 shadow-soft">
                <item.icon className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;

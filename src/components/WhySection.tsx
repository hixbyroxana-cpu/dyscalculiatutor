import { Heart, Brain, Sparkles } from "lucide-react";

const painPoints = [
  {
    icon: Heart,
    title: "Maths Anxiety is Real",
    description:
      "Many children with dyscalculia develop deep anxiety around numbers. I create a calm, judgement-free space where mistakes are welcome and learning feels safe.",
    bg: "bg-peach-light",
  },
  {
    icon: Brain,
    title: "It's Not About Trying Harder",
    description:
      "Dyscalculia isn't laziness — it's a neurological difference. My sessions use multi-sensory, concrete methods designed specifically for how your child's brain works.",
    bg: "bg-sage-light",
  },
  {
    icon: Sparkles,
    title: "Small Steps, Big Progress",
    description:
      "From telling the time to understanding fractions, I break concepts down into manageable, confidence-building steps that stick.",
    bg: "bg-lavender-light",
  },
];

const WhySection = () => {
  return (
    <section id="why" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Why Specialist Support Matters
          </h2>
          <p className="text-muted-foreground text-lg">
            If your child struggles with basic arithmetic, loses track of steps, or feels
            overwhelmed by numbers — you're not alone, and there is a way forward.
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

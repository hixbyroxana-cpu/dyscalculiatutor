import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "We started working together when my daughter was in Year 3. She's now in Year 6 and genuinely understands maths — not just tricks to get through a test. That long-term commitment changed everything.",
    author: "Parent of Year 6 student",
    bg: "bg-peach-light",
  },
  {
    quote:
      "After years of short-term tutors who came and went, finding someone who understood this was a journey — not a quick fix — was exactly what our son needed.",
    author: "Parent of Year 8 student",
    bg: "bg-sage-light",
  },
  {
    quote:
      "The family sessions helped us understand that progress looks different for a dyscalculic learner. We stopped panicking about tests and started celebrating real understanding.",
    author: "Parent of Year 5 student",
    bg: "bg-lavender-light",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Stories of Long-Term Progress
          </h2>
          <p className="text-muted-foreground text-lg">
            Real change takes time. Here's what families say about choosing the
            long-term path.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className={`${t.bg} rounded-2xl p-8 flex flex-col justify-between`}
            >
              <div className="flex gap-1 mb-4" aria-label="5 star rating">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
              <p className="text-foreground text-lg italic leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <footer className="text-sm font-medium text-muted-foreground">
                — {t.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

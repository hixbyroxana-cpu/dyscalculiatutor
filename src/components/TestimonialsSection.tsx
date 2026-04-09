import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "For the first time, my daughter actually says she enjoys maths. The patience and understanding she receives in every session has been life-changing.",
    author: "Parent of Year 5 student",
    bg: "bg-peach-light",
  },
  {
    quote:
      "We finally understand our son's struggles. The strategies we learned have transformed homework time from tears to teamwork.",
    author: "Parent of Year 3 student",
    bg: "bg-sage-light",
  },
  {
    quote:
      "Professional, kind, and incredibly knowledgeable. My confidence with numbers has grown more in 3 months than in years of school.",
    author: "Adult learner",
    bg: "bg-lavender-light",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from families who have experienced the difference specialist support can make.
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

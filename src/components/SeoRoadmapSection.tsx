import { Link } from "react-router-dom";

const pages = [
  {
    title: "Dyscalculia Tutor",
    href: "/dyscalculia-tutor",
    description: "A core service page for parents searching for specialist dyscalculia tutoring."
  },
  {
    title: "Online Dyscalculia Tutoring",
    href: "/online-dyscalculia-tutoring",
    description: "A location-flexible landing page for UK families looking for online support."
  },
  {
    title: "Calculator Support",
    href: "/calculator-support",
    description: "A differentiated page around calculator-based support and maths confidence."
  }
];

const SeoRoadmapSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background border-t border-border">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-accent">Popular starting points</p>
          <h2 className="mt-3 font-heading text-2xl sm:text-3xl font-bold text-foreground">
            Explore focused support paths
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            These pages help families quickly find the kind of support that fits their child best, while also giving the site clearer SEO structure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pages.map((page) => (
            <article key={page.href} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="font-heading text-xl font-semibold text-foreground">{page.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{page.description}</p>
              <Link to={page.href} className="mt-5 inline-flex text-primary font-semibold hover:text-accent transition-colors">
                Visit page →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeoRoadmapSection;

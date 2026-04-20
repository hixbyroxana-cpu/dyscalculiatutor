import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { landingPages } from "@/content/landingPages";

const LandingPage = () => {
  const { slug } = useParams();
  const page = landingPages.find((entry) => entry.slug === slug);

  if (!page) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-20">
          <div className="max-w-2xl rounded-3xl border border-border bg-card p-8 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Page not found</p>
            <h1 className="mt-4 font-heading text-3xl font-bold text-foreground">This page does not exist yet</h1>
            <Link to="/" className="mt-6 inline-flex text-primary font-semibold hover:text-accent transition-colors">
              ← Back home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-sage-light py-16 md:py-24 border-b border-border">
          <div className="container max-w-4xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent">{page.eyebrow}</p>
            <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">{page.title}</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{page.intro}</p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container max-w-4xl grid gap-8">
            {page.sections.map((section) => (
              <section key={section.heading} className="rounded-3xl border border-border bg-card p-8 shadow-card">
                <h2 className="font-heading text-2xl font-semibold text-foreground">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                  {section.body.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            <section className="rounded-3xl bg-primary p-8 text-primary-foreground shadow-hover">
              <h2 className="font-heading text-2xl font-semibold">{page.ctaTitle}</h2>
              <p className="mt-4 text-primary-foreground/85 leading-relaxed">{page.ctaBody}</p>
              <a
                href="/#contact"
                className="mt-6 inline-flex items-center rounded-xl bg-accent px-6 py-3 font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
              >
                Book a Strategy Call
              </a>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;

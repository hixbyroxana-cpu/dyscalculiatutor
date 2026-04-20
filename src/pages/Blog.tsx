import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/content/blogPosts";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-sage-light py-16 md:py-24 border-b border-border">
          <div className="container max-w-5xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent">Blog</p>
            <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Practical guidance for dyscalculia support, maths confidence, and long-term progress
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
              This is where I share articles for parents and students who want clearer guidance, calmer support,
              and better foundations in maths.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container max-w-5xl grid gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="rounded-3xl border border-border bg-card p-8 shadow-card">
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span>{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-4 font-heading text-2xl font-semibold text-foreground">
                  <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">{post.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.keywords.map((keyword) => (
                    <span key={keyword} className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                      {keyword}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <Link to={`/blog/${post.slug}`} className="text-primary font-semibold hover:text-accent transition-colors">
                    Read article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;

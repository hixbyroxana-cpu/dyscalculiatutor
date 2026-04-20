import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/content/blogPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-20">
          <div className="max-w-2xl rounded-3xl border border-border bg-card p-8 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Blog</p>
            <h1 className="mt-4 font-heading text-3xl font-bold text-foreground">Article not found</h1>
            <p className="mt-4 text-muted-foreground">That blog post does not exist yet.</p>
            <Link to="/blog" className="mt-6 inline-flex text-primary font-semibold hover:text-accent transition-colors">
              ← Back to blog
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
        <article className="container max-w-3xl py-16 md:py-20">
          <Link to="/blog" className="text-sm font-semibold text-primary hover:text-accent transition-colors">
            ← Back to blog
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span>{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">{post.title}</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{post.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.keywords.map((keyword) => (
              <span key={keyword} className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                {keyword}
              </span>
            ))}
          </div>

          <div className="prose prose-lg mt-10 max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;

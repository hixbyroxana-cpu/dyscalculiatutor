import { useState } from "react";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground text-lg">
              Ready to take the first step? Send me a message and I'll be in touch
              within 24 hours to arrange your free consultation.
            </p>
          </div>

          {submitted ? (
            <div className="bg-sage-light rounded-2xl p-10 text-center animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Send className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Thank You!
              </h3>
              <p className="text-muted-foreground">
                Your message has been received. I'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 md:p-10 shadow-card space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    maxLength={100}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                    placeholder="e.g. Sarah"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    maxLength={255}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                    placeholder="sarah@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="child-age" className="block text-sm font-medium text-foreground mb-2">
                  Child's Age / Year Group <span className="text-muted-foreground">(optional)</span>
                </label>
                <input
                  type="text"
                  id="child-age"
                  name="child-age"
                  maxLength={50}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                  placeholder="e.g. Year 4 / Age 9"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  How Can I Help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={1000}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors resize-y"
                  placeholder="Tell me a little about your child's experience with maths..."
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                <Send className="w-5 h-5" aria-hidden="true" />
                Send Message
              </button>
              <p className="text-sm text-muted-foreground">
                Your information is kept strictly confidential and will never be shared.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

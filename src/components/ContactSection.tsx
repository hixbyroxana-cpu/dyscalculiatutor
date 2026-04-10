import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const SCHOOL_YEARS = [
  "Reception",
  "Year 1",
  "Year 2",
  "Year 3",
  "Year 4",
  "Year 5",
  "Year 6",
  "Year 7",
  "Year 8",
  "Year 9",
  "Year 10",
  "Year 11 (GCSE)",
  "Year 12",
  "Year 13",
];

const DIAGNOSTIC_OPTIONS = [
  "Has a formal diagnosis",
  "Suspected dyscalculia",
  "Just looking for general maths confidence",
];

const GOAL_OPTIONS = [
  "Long-term foundational support",
  "GCSE preparation",
  "Anxiety reduction",
];

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [goals, setGoals] = useState<string[]>([]);

  const toggleGoal = (goal: string) => {
    setGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("Goals", goals.join(", ") || "None selected");
    formData.append("_subject", "New Enquiry from Dyscalculia Help Website");
    formData.append("_template", "table");
    formData.append("_captcha", "false");

    try {
      await fetch("https://formsubmit.co/ajax/roxana.scurtu@yahoo.com", {
        method: "POST",
        body: formData,
      });
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again or email directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Apply for a Student Slot
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              My specialist practice is currently 80% full. Once the final slots are allocated, I will move to a strictly waitlist-only basis for the remainder of the term. Priority is given to long-term foundational applications.
            </p>
            <div className="bg-accent/50 border-2 border-accent rounded-xl p-5 text-left">
              <p className="text-foreground text-sm leading-relaxed">
                <strong>I specialise exclusively in long-term intervention for Dyscalculia and Maths Anxiety.</strong>{" "}
                I do not offer short-term "exam cramming" or one-off homework help.
              </p>
            </div>
          </div>

          {submitted ? (
            <div className="bg-sage-light rounded-2xl p-10 text-center animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                Thank You!
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                As I am currently teaching, I review all enquiries in the
                mornings. I will email you shortly with a link to book our
                30-minute discovery session.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 md:p-10 shadow-card space-y-6"
            >
              {/* Parent Name & Email */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="Parent Name"
                    required
                    maxLength={100}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                    placeholder="e.g. Sarah"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="Email"
                    required
                    maxLength={255}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                    placeholder="sarah@example.com"
                  />
                </div>
              </div>

              {/* School Year Dropdown */}
              <div>
                <label
                  htmlFor="school-year"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Student's Current School Year
                </label>
                <select
                  id="school-year"
                  name="School Year"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select school year…
                  </option>
                  {SCHOOL_YEARS.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Main Challenge */}
              <div>
                <label
                  htmlFor="challenge"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  The Main Challenge
                </label>
                <input
                  type="text"
                  id="challenge"
                  name="Main Challenge"
                  required
                  maxLength={300}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                  placeholder="What is the biggest struggle in maths right now?"
                />
              </div>

              {/* Diagnostic Background */}
              <div>
                <label
                  htmlFor="diagnostic"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Diagnostic Background
                </label>
                <select
                  id="diagnostic"
                  name="Diagnostic Background"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an option…
                  </option>
                  {DIAGNOSTIC_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Goals Checkboxes */}
              <div>
                <span className="block text-sm font-medium text-foreground mb-3">
                  Goals
                </span>
                <div className="space-y-3">
                  {GOAL_OPTIONS.map((goal) => (
                    <label
                      key={goal}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                          goals.includes(goal)
                            ? "bg-primary border-primary"
                            : "border-input bg-background group-hover:border-primary/50"
                        }`}
                        onClick={() => toggleGoal(goal)}
                      >
                        {goals.includes(goal) && (
                          <svg
                            className="w-3 h-3 text-primary-foreground"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                      <span
                        className="text-foreground text-sm"
                        onClick={() => toggleGoal(goal)}
                      >
                        {goal}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                <Send className="w-5 h-5" aria-hidden="true" />
                {sending ? "Sending…" : "Submit Application"}
              </button>
              <p className="text-sm text-muted-foreground">
                Your information is kept strictly confidential and will never be
                shared.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

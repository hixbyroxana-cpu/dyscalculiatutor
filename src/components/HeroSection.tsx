import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-sage-light py-16 md:py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Mastering Maths with Confidence:{" "}
              <span className="text-primary">Specialist Dyscalculia Tutoring</span>{" "}
              by a QTS Qualified Teacher
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Personalised, patient, and evidence-based support to help your child
              build genuine confidence with numbers — at their own pace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-accent text-accent-foreground font-semibold text-lg shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-0.5"
              >
                Book a Free Consultation
              </a>
              <a
                href="#what-is-dyscalculia"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Learn About Dyscalculia
              </a>
            </div>
          </div>
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-card shadow-hover">
                <img
                  src={profilePhoto}
                  alt="Specialist dyscalculia tutor - QTS qualified mathematics teacher"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-card rounded-xl px-4 py-2 shadow-card border border-border">
                <span className="text-sm font-semibold text-primary">PGCE & QTS Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

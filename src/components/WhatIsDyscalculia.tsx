const signs = [
  "Difficulty understanding number relationships and place value",
  "Struggling to tell the time or manage money",
  "Trouble remembering basic arithmetic facts",
  "Relying heavily on finger counting beyond early years",
  "Confusion with mathematical symbols (+, −, ×, ÷)",
  "Difficulty estimating quantities or distances",
  "Anxiety or avoidance around maths tasks",
  "Problems following multi-step calculations",
];

const WhatIsDyscalculia = () => {
  return (
    <section id="what-is-dyscalculia" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">
            What is Dyscalculia?
          </h2>
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dyscalculia is a specific learning difference that affects a person's ability
              to understand and work with numbers. It's sometimes called "number blindness"
              and is estimated to affect <strong className="text-foreground">5–7% of the population</strong> —
              that's roughly 1 in every 20 people.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Like dyslexia affects reading, dyscalculia affects how the brain processes
              numerical information. It's not about intelligence — many people with dyscalculia
              are highly capable in other areas.
            </p>
            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Common Signs of Dyscalculia
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3" role="list">
                {signs.map((sign) => (
                  <li
                    key={sign}
                    className="flex items-start gap-3 bg-sage-light rounded-lg px-4 py-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                    <span className="text-foreground text-base">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-muted-foreground">
              If several of these resonate with your child's experience,{" "}
              <a href="#contact" className="text-primary font-medium underline underline-offset-4 hover:text-accent transition-colors">
                get in touch for a free consultation
              </a>{" "}
              to discuss how I can help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsDyscalculia;

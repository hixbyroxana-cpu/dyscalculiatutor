export type LandingPage = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  ctaTitle: string;
  ctaBody: string;
};

export const landingPages: LandingPage[] = [
  {
    slug: "dyscalculia-tutor",
    eyebrow: "Specialist support",
    title: "Dyscalculia Tutor for Long-Term Maths Confidence",
    description:
      "Specialist dyscalculia tutoring for children and teenagers who need calmer, structured support and long-term progress in maths.",
    intro:
      "If your child is bright, capable, and trying hard but still struggling with number sense, arithmetic, or maths confidence, specialist dyscalculia tutoring can make a real difference. The goal is not to rush through worksheets. It is to rebuild understanding properly so maths starts to feel possible again.",
    sections: [
      {
        heading: "What a dyscalculia tutor does differently",
        body: [
          "A general maths tutor may focus on the next topic or the next test. A dyscalculia tutor has to work more carefully. That means looking for foundational gaps, understanding where the confusion really starts, and teaching in a way that reduces overload instead of adding more pressure.",
          "Students with dyscalculia often need visual explanation, slower sequencing, repetition with meaning, and a much more deliberate build-up of concepts. The right support can improve both understanding and confidence over time."
        ]
      },
      {
        heading: "Who this support is for",
        body: [
          "This kind of tutoring is especially useful for children and teenagers who freeze in maths lessons, struggle to retain number facts, find times tables unusually hard, or feel overwhelmed by calculations even when they understand the idea in theory.",
          "It can also help families who want a calmer, more specialist alternative to generic tutoring that does not address the underlying learning profile."
        ]
      },
      {
        heading: "What parents usually want most",
        body: [
          "Most parents are not only looking for higher marks. They want less panic, more independence, and a child who no longer feels defeated every time maths appears. That is why specialist support should focus on both attainment and emotional safety."
        ]
      }
    ],
    ctaTitle: "Looking for a dyscalculia tutor?",
    ctaBody:
      "Book a strategy call to talk through your child’s current difficulties, what support they have already tried, and what a more specialist long-term plan could look like."
  },
  {
    slug: "online-dyscalculia-tutoring",
    eyebrow: "Online tutoring",
    title: "Online Dyscalculia Tutoring for UK Families",
    description:
      "Online dyscalculia tutoring for students who need specialist support, calmer teaching, and flexible sessions that fit around family life.",
    intro:
      "Online dyscalculia tutoring can work extremely well when it is structured carefully. For many families, it offers access to specialist help that may not be available locally, while still providing consistent one-to-one support tailored to the child’s pace and needs.",
    sections: [
      {
        heading: "Why online support can still be highly effective",
        body: [
          "Children do not need a loud or highly stimulating lesson to make progress. In fact, many learners with dyscalculia benefit from a calmer one-to-one environment where they can think, ask questions, and work without feeling compared to the rest of a class.",
          "With the right teaching approach, online sessions can still include visual models, structured explanation, guided practice, and ongoing review."
        ]
      },
      {
        heading: "A better fit for busy families",
        body: [
          "Online tutoring removes travel, makes scheduling easier, and can give families access to specialist dyscalculia help across the UK. That matters when the right support is more important than finding the nearest available tutor."
        ]
      },
      {
        heading: "What makes the biggest difference",
        body: [
          "The real difference is not the video platform. It is whether the teaching is genuinely specialist, paced well, and built around the student’s learning profile. Long-term consistency is usually far more important than flashy tools."
        ]
      }
    ],
    ctaTitle: "Need online dyscalculia tutoring?",
    ctaBody:
      "Book a strategy call to explore whether online specialist support would suit your child and what kind of teaching approach would help most."
  },
  {
    slug: "calculator-support",
    eyebrow: "Calculator confidence",
    title: "Calculator Support for Students With Dyscalculia and Maths Anxiety",
    description:
      "Specialist calculator support for students who need help using calculators confidently and accurately as part of a stronger maths strategy.",
    intro:
      "For some students, calculators are a lifeline. They can reduce overload, support independence, and make higher-level maths more accessible. But that only works when calculator use is taught properly. Many learners need explicit support with entering expressions, interpreting answers, and knowing when a result is reasonable.",
    sections: [
      {
        heading: "Why calculator teaching matters",
        body: [
          "A student can understand the method but still lose track in the arithmetic. In those situations, calculator support is not about avoiding learning. It is about removing one barrier so the learner can actually engage with the maths in front of them.",
          "That is especially important for students with dyscalculia or significant maths anxiety."
        ]
      },
      {
        heading: "What students need to learn",
        body: [
          "Good calculator support includes understanding the order of operations, entering brackets correctly, checking estimates first, spotting obviously wrong answers, and using the calculator as part of a bigger thinking process rather than relying on it blindly."
        ]
      },
      {
        heading: "Why this can improve confidence quickly",
        body: [
          "When students stop getting derailed by every small numerical slip, they often become much calmer and more willing to engage. That creates better conditions for learning and lets specialist teaching focus on deeper understanding instead of constant firefighting."
        ]
      }
    ],
    ctaTitle: "Want calmer calculator support?",
    ctaBody:
      "Book a strategy call to talk about how calculator-focused support could reduce anxiety and help your child engage with maths more independently."
  }
];

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  keywords: string[];
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-dyscalculia",
    title: "What Is Dyscalculia? Signs, Support, and What Parents Need to Know",
    description:
      "A clear parent-friendly guide to dyscalculia, common signs, and the kinds of support that help children build confidence with maths.",
    date: "2026-04-20",
    readTime: "6 min read",
    keywords: ["what is dyscalculia", "signs of dyscalculia", "dyscalculia help"],
    content: [
      "Dyscalculia is a specific difficulty with understanding numbers and mathematical concepts. It is not the same as simply being bad at maths, and it is not caused by laziness. Children with dyscalculia often struggle to build secure number sense, remember basic facts, estimate quantities, or feel confident with calculations that other pupils seem to pick up more naturally.",
      "For parents, one of the hardest parts is watching a child work very hard and still feel confused. A pupil may be bright, articulate, creative, and capable in many other subjects, yet freeze when faced with times tables, place value, or mental arithmetic. Over time that can damage confidence as much as attainment.",
      "Some common signs include difficulty recognising number patterns, losing track when counting, confusion with number bonds, weak recall of basic facts, trouble telling the time, and anxiety around maths lessons or homework. These signs can look different from one learner to another, which is why careful support matters.",
      "The most effective help is usually calm, structured, and long term. Rather than cramming for a test, pupils need to rebuild their understanding step by step. That means using visual methods, patient explanation, repetition with meaning, and teaching that matches the child rather than forcing them through the standard classroom pace.",
      "With the right support, children with dyscalculia can make meaningful progress and feel far more capable. The goal is not only better marks, but a healthier relationship with maths, more independence, and less panic when number-based tasks come up in school or daily life."
    ]
  },
  {
    slug: "calculator-skills-for-dyscalculia-support",
    title: "Why Calculator Skills Can Be a Strength for Students With Dyscalculia",
    description:
      "How calculator-focused teaching can reduce anxiety, support independence, and help students with dyscalculia access higher-level maths more confidently.",
    date: "2026-04-20",
    readTime: "5 min read",
    keywords: ["calculator support", "dyscalculia tutor", "maths confidence"],
    content: [
      "For many students with dyscalculia, calculators are not a shortcut. They are an access tool. When used properly, a calculator can reduce cognitive overload and let a learner focus on process, reasoning, and decision-making instead of getting stuck at every small calculation.",
      "A student who struggles to hold number facts in mind may understand the method perfectly well, but still lose confidence because the arithmetic keeps derailing them. Teaching calculator fluency can remove that barrier. It can also help a child feel more capable in lessons where they would otherwise shut down.",
      "Calculator support is especially valuable when it is taught explicitly. Students need to know how to enter expressions correctly, interpret answers, estimate first, spot obvious mistakes, and use the tool as part of a maths strategy rather than as a panic button.",
      "This is one reason a specialist approach matters. Support should not be about throwing technology at a problem. It should be about helping a learner understand what the calculator is doing, when it is useful, and how it supports wider mathematical confidence.",
      "When calculator skills are integrated thoughtfully, students often become calmer, more independent, and more willing to engage. That creates space to strengthen real understanding over time instead of constantly fighting anxiety at the surface level."
    ]
  }
];

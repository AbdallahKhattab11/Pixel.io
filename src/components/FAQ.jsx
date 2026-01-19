import { LuChevronDown } from "react-icons/lu";

const FAQ = () => {
  const faqs = [
    {
      question: "What services does your agency provide?",
      answer:
        "We offer end-to-end digital services including brand strategy, UI/UX design, web and app development and growth-focused marketing solutions.",
    },
    {
      question: "Do you work with startups or only large companies?",
      answer:
        "We work with startups, growing businesses and established brands. Our process is flexible and tailored to match your goals and scale.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary by scope, but most projects take between 2–6 weeks. We provide a clear timeline after the discovery phase.",
    },
    {
      question: "Do you offer ongoing support after launch?",
      answer:
        "Yes. We offer maintenance, optimization and growth support packages to ensure your product continues to perform and evolve.",
    },
  ];

  return (
    <section id="faq" className="py-20 2xl:py-32">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
            Frequently asked questions
          </h2>
          <p className="max-w-md mx-auto text-gray-400 text-sm">
            Everything you need to know about working with our agency. If you
            have more questions, feel free to reach out.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white/2 border border-white/5 rounded-2xl select-none transition-all duration-300 open:bg-white/5 open:border-white/10"
            >
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                <h4 className="font-medium text-white group-open:text-indigo-400 transition-colors">
                  {faq.question}
                </h4>
                <div className="text-gray-400 group-open:rotate-180 transition-transform duration-300">
                  <LuChevronDown size={20} />
                </div>
              </summary>
              <div className="px-5 pb-5 text-gray-100 text-sm leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

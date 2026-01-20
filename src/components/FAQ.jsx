/* eslint-disable no-unused-vars */
import { LuChevronDown } from "react-icons/lu";
import Title from "./ui/Title";
import { motion } from "framer-motion";

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
        <Title
          title="FAQ"
          heading="Frequently asked questions"
          description="Everything you need to know about working with our agency. If you have more questions, feel free to reach out."
        />

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.details
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 70,
                mass: 1,
                delay: 0.1 + index * 0.1,
              }}
              key={index}
              className="group bg-white/2 border border-white/5 rounded-2xl select-none open:bg-white/5 open:border-white/10"
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
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

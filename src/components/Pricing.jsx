/* eslint-disable no-unused-vars */
import { LuCheck } from "react-icons/lu";
import { motion } from "framer-motion";
import Title from "./ui/Title";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$499",
      period: "/ One-time",
      description: "Best for early-stage startups.",
      features: [
        "Project discovery & planning",
        "UI/UX design",
        "Basic website development",
        "1 revision round",
        "Email support",
      ],
      isPopular: false,
    },
    {
      name: "Growth",
      price: "$1,499",
      period: "/ Monthly",
      description: "Growing teams and businesses.",
      features: [
        "Everything in Starter",
        "Advanced UI/UX design",
        "Custom development",
        "Performance optimization",
        "Priority support",
      ],
      isPopular: true,
    },
    {
      name: "Scale",
      price: "$3,999",
      period: "/ Custom",
      description: "For brands ready to scale fast.",
      features: [
        "Everything in Growth",
        "Dedicated project manager",
        "Ongoing optimization",
        "Marketing & growth support",
        "Chat + Email support",
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white/3 border-t border-white/6">
      <div className="container">
        {/* Header */}
        <Title
          title="Pricing"
          heading="Simple, transparent pricing"
          description="Flexible agency packages designed to fit startups, growing teams and established brands."
        />

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.5 } }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 70,
                mass: 1,
                delay: 0.1 + index * 0.1,
              }}
              key={index}
              className={`relative p-8 rounded-2xl border 
                ${
                  plan.isPopular
                    ? "bg-indigo-600/10 border-indigo-500/50 shadow-[0_0_30px_-10px_rgba(79,70,229,0.3)]"
                    : "bg-white/2 border-white/10 hover:border-white/20"
                }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                  Most popular
                </span>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-gray-400 font-medium">
                    {plan.period}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-start gap-3 text-sm text-gray-300"
                  >
                    <LuCheck
                      className="w-5 h-5 text-indigo-400 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button
                aria-label={`Get started with ${plan.name} plan`}
                className={`w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all active:scale-95
                  ${
                    plan.isPopular
                      ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20"
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                  }`}
              >
                Get started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

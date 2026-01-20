/* eslint-disable no-unused-vars */
import { LuArrowRight } from "react-icons/lu";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="py-20 2xl:pb-32 px-4">
      <div className=" mx-auto max-w-3xl">
        {/* Card Container */}
        <div className="rounded-3xl bg-linear-to-b from-violet-900/20 to-violet-900/5 border border-violet-500/20 p-12 md:p-16 text-center relative overflow-hidden">
          {/* Grainy Texture Overlay */}
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20"></div>

          {/* Content */}
          <div className="relative z-10">
            <motion.h2
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 70,
                mass: 1,
              }}
              className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
            >
              Ready to grow your brand?
            </motion.h2>

            <motion.p
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 70,
                mass: 1,
                delay: 0.2,
              }}
              className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Partner with our agency to design, build and scale digital
              products that deliver real business results.
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 70,
                mass: 1,
                delay: 0.3,
              }}
              className=""
            >
              <button
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-white font-medium transition-all hover:bg-white/10 hover:border-white/40 active:scale-95"
              >
                Start your project
                <LuArrowRight className="text-xl transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

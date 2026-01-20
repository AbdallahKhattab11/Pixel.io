/* eslint-disable no-unused-vars */
import { LuUpload } from "react-icons/lu";
import { IoFlashOutline, IoVideocamOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import Title from "./ui/Title";

const Services = () => {
  return (
    <section id="services" className="py-20 2xl:py-32">
      <div className="container">
        <Title
          title="Services"
          heading="Everything your brand needs to grow"
          description="From strategy to execution, we help businesses build strong digital products and meaningful customer experiences."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{
              y: -5,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: "easeInOut",
            }}
            className="rounded-2xl p-6 bg-white/3 border border-white/6 hover:border-white/15"
          >
            <div className="w-12 h-12 rounded-lg bg-violet-900/20 flex items-center justify-center mb-4">
              <LuUpload className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Discovery &amp; Planning
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We understand your goals, audience and challenges to craft a
              clear, actionable strategy.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{
              y: -4,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="rounded-2xl p-6 bg-white/3 border border-white/6 hover:border-white/15"
          >
            <div className="w-12 h-12 rounded-lg bg-violet-900/20 flex items-center justify-center mb-4">
              <IoFlashOutline className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Design &amp; Development
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              High-quality design and scalable development focused on
              performance and usability.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{
              y: -4,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="rounded-2xl p-6 bg-white/3 border border-white/6 hover:border-white/15"
          >
            <div className="w-12 h-12 rounded-lg bg-violet-900/20 flex items-center justify-center mb-4">
              <IoVideocamOutline className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Launch &amp; Growth</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We launch, optimize and continuously improve to drive measurable
              business growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;

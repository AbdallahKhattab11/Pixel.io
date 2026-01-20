/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const Title = ({ title, heading, description }) => {
  return (
    <div className="text-center mb-16">
      <motion.p
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 70,
          mass: 1,
        }}
        className="text-sm font-medium text-violet-400 uppercase tracking-wide mb-3"
      >
        {title}
      </motion.p>
      <motion.h2
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 70,
          mass: 1,
          delay: 0.1,
        }}
        className="text-2xl md:text-4xl text-white font-semibold"
      >
        {heading}
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
        className="max-w-md mx-auto text-sm text-gray-400 my-3"
      >
        {description}
      </motion.p>
    </div>
  );
};

export default Title;

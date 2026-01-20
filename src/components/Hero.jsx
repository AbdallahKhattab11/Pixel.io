/* eslint-disable no-unused-vars */
import founder_1 from "../assets/images/brand-founder-1.jpg";
import founder_2 from "../assets/images/brand-founder-2.jpg";
import founder_3 from "../assets/images/brand-founder-3.jpg";
import hero_img from "../assets/images/hero-img.avif";
import thumbnail_1 from "../assets/images/project-thumbnail-1.jpg";
import thumbnail_2 from "../assets/images/project-thumbnail-2.jpg";
import thumbnail_3 from "../assets/images/project-thumbnail-3.jpg";

import { FaArrowRight, FaCheck } from "react-icons/fa6";
import { IoPlayOutline } from "react-icons/io5";
import { IoFlashOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="w-full min-h-screen h-full">
      <div className="container flex items-center justify-center  pt-32 md:pt-26">
        <div className=" grid grid-cols-1 md:grid-cols-2 items-center gap-10 ">
          {/* Left Content */}
          <div className="text-left max-w-lg">
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 70,
                mass: 1,
              }}
              className="inline-flex items-center gap-3 pl-3 pr-4 py-1.5 rounded-full bg-white/10 mb-6 justify-start"
            >
              <div className="founders flex items-center -space-x-2">
                <img
                  src={founder_1}
                  alt=""
                  className="size-6 rounded-full border border-black/50"
                />
                <img
                  src={founder_2}
                  alt=""
                  className="size-6 rounded-full border border-black/50"
                />
                <img
                  src={founder_3}
                  alt=""
                  className="size-6 rounded-full border border-black/50"
                />
              </div>
              <span className="text-xs text-gray-200/90">
                Trusted by brands & founders worldwide
              </span>
            </motion.div>
            <motion.h1
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
              className="text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-xl"
            >
              We design &amp; build <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-300 to-indigo-400">
                high-impact digital experiences
              </span>
            </motion.h1>
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
              className="text-gray-300 max-w-lg mb-8"
            >
              A creative digital agency helping startups and businesses grow
              through thoughtful design, scalable development and
              performance-driven strategy.
            </motion.p>
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
              className="inline-flex items-center gap-4 mb-8"
            >
              <button className="inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium bg-linear-to-br from-indigo-500 to-indigo-600 hover:opacity-90 active:scale-95 transition-all max-sm:w-full py-3 px-7">
                Start your project
                <FaArrowRight aria-hidden="true" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-full text-sm font-medium border border-white/10 bg-white/3 hover:bg-white/6 backdrop-blur-sm active:scale-95 transition max-sm:w-full max-sm:justify-center py-3 px-5">
                <IoPlayOutline className="size-4" aria-hidden="true" />
                View our work
              </button>
            </motion.div>
            <motion.div
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
              className="flex sm:inline-flex overflow-hidden items-center max-sm:justify-center text-sm text-gray-200 bg-white/10 rounded"
            >
              <div className="flex items-center gap-2 p-2 px-3 sm:px-6.5 hover:bg-white/3 transition-colors">
                <IoFlashOutline
                  className="size-4 text-cyan-500"
                  aria-hidden="true"
                />
                <div>
                  <div>Strategy-led execution</div>
                  <div className="text-xs text-gray-400">
                    Focused on growth &amp; results
                  </div>
                </div>
              </div>
              <div className="hidden sm:block h-6 w-px bg-white/6"></div>
              <div className="flex items-center gap-2 p-2 px-3 sm:px-6.5 hover:bg-white/3 transition-colors">
                <FaCheck className="size-4 text-cyan-500" aria-hidden="true" />
                <div>
                  <div>Full-service delivery</div>
                  <div className="text-xs text-gray-400">
                    Design, dev &amp; marketing
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 70,
              mass: 1,
              delay: 0.5,
            }}
            className="max-w-lg"
          >
            <div className="relative aspect-16/10 bg-gray-900 overflow-hidden rounded-3xl">
              <img
                src={hero_img}
                alt="Dashboard preview showing analytics and performance metrics"
                className="w-full h-full object-cover object-center"
                fetchPriority="high"
              />
              <div className="absolute right-4 bottom-4">
                <button
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/6 backdrop-blur-sm hover:bg-white/10 transition focus:outline-none"
                  aria-label="Watch case study video"
                >
                  <IoPlayOutline className="text-xl" aria-hidden="true" />
                  <span className="text-xs">See case study</span>
                </button>
              </div>
            </div>
            {/* Project Thumbnails */}
            <div className="mt-4 flex gap-3 items-center justify-start">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                  delay: 0.1,
                }}
                className="w-14 h-10 rounded-lg overflow-hidden border border-white/6"
              >
                <img
                  alt=""
                  className="w-full h-full object-cover"
                  src={thumbnail_1}
                />
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                  delay: 0.2,
                }}
                className="w-14 h-10 rounded-lg overflow-hidden border border-white/6"
              >
                <img
                  alt=""
                  className="w-full h-full object-cover"
                  src={thumbnail_2}
                />
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                  delay: 0.3,
                }}
                className="w-14 h-10 rounded-lg overflow-hidden border border-white/6"
              >
                <img
                  alt=""
                  className="w-full h-full object-cover"
                  src={thumbnail_3}
                />
              </motion.div>
              <motion.div
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
                className="text-sm text-gray-400 ml-2 flex items-center gap-2"
              >
                <div className="relative flex h-3.5 w-3.5 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping duration-300"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-green-600"></span>
                </div>
                20+ completed projects
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

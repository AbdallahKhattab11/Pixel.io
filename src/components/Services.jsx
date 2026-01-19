import { LuUpload } from "react-icons/lu";
import { IoFlashOutline, IoVideocamOutline } from "react-icons/io5";
const Services = () => {
  return (
    <section id="services" className="py-20 2xl:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-violet-400 uppercase tracking-wide mb-3">
            Services
          </p>
          <h2 className="text-2xl md:text-4xl text-white font-semibold">
            Everything your brand needs to grow
          </h2>
          <p className="max-w-md mx-auto text-sm text-gray-400 my-3">
            From strategy to execution, we help businesses build strong digital
            products and meaningful customer experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-6 bg-white/3 border border-white/6 transition duration-300 hover:border-white/15 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-violet-900/20 flex items-center justify-center mb-4">
              <LuUpload className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Discovery &amp; Planning
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We understand your goals, audience and challenges to craft a
              clear, actionable strategy.
            </p>
          </div>
          <div className="rounded-2xl p-6 bg-white/3 border border-white/6 transition duration-300 hover:border-white/15 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-violet-900/20 flex items-center justify-center mb-4">
              <IoFlashOutline className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Design &amp; Development
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              High-quality design and scalable development focused on
              performance and usability.
            </p>
          </div>
          <div className="rounded-2xl p-6 bg-white/3 border border-white/6 transition duration-300 hover:border-white/15 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-violet-900/20 flex items-center justify-center mb-4">
              <IoVideocamOutline className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Launch &amp; Growth</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We launch, optimize and continuously improve to drive measurable
              business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

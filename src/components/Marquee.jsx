const Marquee = () => {
  const data = [
    "Startups",
    "Scale-ups",
    "Founders",
    "Global teams",
    "Creative brands",
    "Startups",
    "Scale-ups",
    "Founders",
    "Global teams",
    "Creative brands",
  ];
  return (
    <section className="border-y border-white/6 bg-white/1 max-md:mt-10">
      <div className="w-full px-2 flex gap-14 items-center overflow-hidden">
        <div className="w-full py-6 flex justify-center items-center gap-14 text-nowrap animate-marquee">
          {/* First Copy */}
          {[...data, ...data].map((item, index) => (
            <span
              key={index}
              className="mx-6 text-sm md:text-base font-semibold text-gray-400 hover:text-gray-300 tracking-wide transition-colors"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;

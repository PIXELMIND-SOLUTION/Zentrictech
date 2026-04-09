import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Briefcase, Smile } from "lucide-react";

const results = [
  {
    icon: TrendingUp,
    value: "200%",
    label: "Increase in Website Traffic",
  },
  {
    icon: BarChart3,
    value: "5X",
    label: "ROI on Paid Campaigns",
  },
  {
    icon: Briefcase,
    value: "100+",
    label: "Projects Delivered",
  },
  {
    icon: Smile,
    value: "50+",
    label: "Happy Clients",
  },
];

const Results = () => {
  return (
    <section id="results" className="py-20 md:py-28 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">
              We Deliver{" "}
            </span>
            <span className="bg-[#004787] bg-clip-text text-transparent">
              Real Business Growth
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            As a trusted digital marketing agency, we focus on measurable
            results — not just promises.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {results.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Glow */}
              <div className="absolute -inset-2 bg-[#004787] opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition duration-500"></div>

              {/* Card */}
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-8 text-center shadow-md group-hover:shadow-xl transition-all duration-500">

                {/* Icon */}
                <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 rounded-xl bg-[#004787] flex items-center justify-center text-white group-hover:scale-110 transition">
                  <item.icon size={22} />
                </div>

                {/* Value */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.value}
                </h3>

                {/* Label */}
                <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm leading-snug">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Results;
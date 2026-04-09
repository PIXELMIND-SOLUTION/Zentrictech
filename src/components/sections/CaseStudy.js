import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Award } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "3X",
    label: "Increase in Leads",
  },
  {
    icon: DollarSign,
    value: "70%",
    label: "Lower Cost per Acquisition",
  },
  {
    icon: Award,
    value: "Top",
    label: "Google Rankings",
  },
];

const CaseStudy = () => {
  return (
    <section id="casestudy" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

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
              Success{" "}
            </span>
            <span className="bg-[#004787] bg-clip-text text-transparent">
              Story
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Real results from our digital marketing strategies that helped a
            local business grow rapidly.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow */}
          <div className="absolute -inset-2 bg-[#004787] opacity-20 blur-2xl rounded-3xl"></div>

          <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-3xl p-8 md:p-12 shadow-xl">

            {/* Story Text */}
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-10 text-center max-w-3xl mx-auto">
              A local business partnered with our{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                digital marketing services team
              </span>{" "}
              and achieved outstanding growth through data-driven strategies and
              continuous optimization.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#004787] flex items-center justify-center text-white shadow-md group-hover:scale-110 transition">
                    <item.icon size={24} />
                  </div>

                  {/* Value */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.value}
                  </h3>

                  {/* Label */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;
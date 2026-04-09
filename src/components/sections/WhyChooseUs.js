import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  "Data-Driven Digital Marketing Strategies",
  "Experienced SEO Services Company",
  "Custom Solutions (Not Templates)",
  "Transparent Reporting",
  "Dedicated Support Team",
];

const WhyChooseUs = () => {
  return (
    <section id="whychooseus" className="py-20 md:py-28 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            <span className="text-gray-900 dark:text-white">
              Why We Are the{" "}
            </span>
            <span className="bg-[#004787] bg-clip-text text-transparent">
              Right Partner
            </span>
            <span className="text-gray-900 dark:text-white">
              {" "}for Your Business
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            We combine strategy, technology, and creativity to deliver
            measurable business growth.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left - Points */}
          <div className="space-y-6">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 group"
              >
                {/* Icon */}
                <div className="min-w-[40px] h-10 w-10 flex items-center justify-center rounded-full bg-[#004787] text-white shadow-md group-hover:scale-110 transition">
                  <CheckCircle size={20} />
                </div>

                {/* Text */}
                <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg font-medium">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right - Highlight Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -inset-2 bg-[#004787] opacity-20 blur-2xl rounded-3xl"></div>

            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-3xl p-8 md:p-10 shadow-xl">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Whether you need a{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  web development company
                </span>{" "}
                or a full-scale{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  digital marketing agency
                </span>
                , we’ve got you covered.
              </p>

              {/* CTA Accent */}
              <div className="mt-6 h-1 w-16 bg-[#004787] rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
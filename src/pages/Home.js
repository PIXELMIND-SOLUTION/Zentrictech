import React, { useEffect, useRef, useState } from "react";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Process from "../components/sections/Process";
import Portfolio from "../components/sections/Portfolio";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import CaseStudy from "../components/sections/CaseStudy";
import Results from "../components/sections/Results";
import { Helmet } from "react-helmet-async";

/* ================= Navigator Config ================= */
const sections = [
  { id: "hero", label: "Home" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "results", label: "Results" },
  { id: "whychooseus", label: "Why Choose Us" },
  { id: "casestudy", label: "Case Study" },
  { id: "portfolio", label: "Portfolio" },
  { id: "testimonials", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

const Home = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const observerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    return () => observerRef.current.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Helmet>
        <title>Digital Marketing Agency in Hyderabad | Zyntricstech Solutions</title>

        <meta
          name="description"
          content="Zyntricstech Solutions is a results-driven digital marketing agency in Hyderabad offering SEO, PPC, social media marketing, and lead generation services."
        />

        <meta
          name="keywords"
          content="digital marketing agency Hyderabad, SEO services, PPC ads, social media marketing, lead generation company"
        />

        <meta property="og:title" content="Digital Marketing Agency | Zyntricstech Solutions" />
        <meta property="og:description" content="Grow your business with expert SEO, PPC, and social media marketing services." />
        <meta property="og:url" content="https://www.zyntricstech.com/" />
        <meta property="og:image" content="https://www.zyntricstech.com/preview.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Marketing Agency | Zyntricstech Solutions" />
        <meta name="twitter:description" content="Top digital marketing services to grow your business online." />

        <link rel="canonical" href="https://www.zyntricstech.com/" />
        <meta name="robots" content="index, follow" />
      </Helmet>


      <div className="relative">
        {/* ===== Navigator ===== */}
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className="group flex items-center gap-3"
              >
                {/* Dot */}
                <span
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${isActive
                    ? "bg-[#004787] scale-125 shadow-lg shadow-[#004787]/50"
                    : "bg-gray-400 dark:bg-gray-600"
                    }`}
                />

                {/* Label */}
                <span
                  className={`text-sm font-medium transition-all duration-300 ${isActive
                    ? "opacity-100 translate-x-0 text-[#004787]"
                    : "opacity-0 -translate-x-2 text-gray-500 group-hover:opacity-80"
                    }`}
                >
                  {section.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* ===== Sections ===== */}
        <section id="hero">
          <Hero />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="process">
          <Process />
        </section>

        <section id="results" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
          <Results />
        </section>

        <section id="whychooseus">
          <WhyChooseUs />
        </section>

        <section id="casestudy">
          <CaseStudy />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default Home;
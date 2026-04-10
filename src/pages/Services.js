import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Search, Share2, Target, Code2, Smartphone, BarChart3,
  CheckCircle, TrendingUp, Users, Award, Zap, ArrowRight,
  Shield, Calendar, Sparkles, Globe, Rocket, Brain, Monitor,
  BarChart, Cpu, MessageSquare, Filter, ExternalLink,
  ShoppingBag, Home, Heart, GraduationCap, Store,
  Star, Quote, ChevronRight, MousePointer2, PieChart
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredService, setHoveredService] = useState(null);

  const allServices = [
    {
      id: 1,
      icon: Search,
      title: 'SEO Services',
      category: 'seo',
      description:
        'Improve your website rankings and get organic traffic that converts into leads and sales.',
      features: [
        'On-Page SEO',
        'Off-Page SEO',
        'Technical SEO',
        'Keyword Research',
        'Local SEO',
        'SEO Reporting',
      ],
      results: ['+300% Organic Traffic', '+150% Keyword Rankings', '-40% Bounce Rate'],
      color: 'from-[#004787] to-[#004787]',
      duration: '3–6 Months',
      price: 'Starting at ₹15,000/month',
      popular: true,
    },
    {
      id: 2,
      icon: Globe,
      title: 'Digital Marketing',
      category: 'digital',
      description:
        'Complete digital marketing solutions including SEO, social media, and paid advertising.',
      features: [
        'SEO & Content',
        'Social Media Ads',
        'Google Ads',
        'Email Campaigns',
        'Analytics Setup',
        'Monthly Reports',
      ],
      results: ['+200% Leads', '3× Revenue Growth', '+85% Brand Reach'],
      color: 'from-[#004787] to-[#004787]',
      duration: 'Ongoing',
      price: 'Starting at ₹20,000/month',
      popular: true,
    },
    {
      id: 3,
      icon: Code2,
      title: 'Web Development',
      category: 'web',
      description:
        'We build fast, responsive, and conversion-focused websites tailored to your business.',
      features: [
        'Custom Design',
        'Mobile Responsive',
        'CMS Integration',
        'Landing Pages',
        'Speed Optimization',
        'On-Site SEO',
      ],
      results: ['+70% Conversion Rate', '-60% Load Time', '100 PageSpeed Score'],
      color: 'from-[#004787] to-[#004787]',
      duration: '4–8 Weeks',
      price: 'Starting at ₹25,000',
      popular: false,
    },
    {
      id: 4,
      icon: Smartphone,
      title: 'Mobile App Development',
      category: 'app',
      description:
        'Build scalable Android & iOS apps to grow your business digitally.',
      features: [
        'Android & iOS',
        'UI/UX Design',
        'API Integration',
        'Push Notifications',
        'App Store Launch',
        'Post-Launch Support',
      ],
      results: ['50K+ Downloads', '4.8★ Avg Rating', '-30% Support Tickets'],
      color: 'from-[#004787] to-[#004787]',
      duration: '8–16 Weeks',
      price: 'Starting at ₹60,000',
      popular: false,
    },
    {
      id: 5,
      icon: Target,
      title: 'Performance Marketing',
      category: 'ads',
      description:
        'Run high-converting Google Ads and Meta Ads campaigns focused on ROI.',
      features: [
        'Google Search Ads',
        'Meta / Instagram Ads',
        'Retargeting',
        'A/B Ad Testing',
        'Landing Page CRO',
        'ROI Reporting',
      ],
      results: ['+240% Conversions', '-55% Cost per Lead', '450% ROI'],
      color: 'from-[#004787] to-[#06f4c4]',
      duration: '1–3 Months',
      price: 'Starting at ₹18,000/month + ad spend',
      popular: true,
    },
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: allServices.length },
    { id: 'seo', name: 'SEO', icon: Search, count: allServices.filter(s => s.category === 'seo').length },
    { id: 'digital', name: 'Digital Marketing', icon: BarChart3, count: allServices.filter(s => s.category === 'digital').length },
    { id: 'web', name: 'Web Dev', icon: Code2, count: allServices.filter(s => s.category === 'web').length },
    { id: 'app', name: 'App Dev', icon: Smartphone, count: allServices.filter(s => s.category === 'app').length },
    { id: 'ads', name: 'Performance Ads', icon: Target, count: allServices.filter(s => s.category === 'ads').length },
  ];

  const filteredServices =
    activeTab === 'all' ? allServices : allServices.filter(s => s.category === activeTab);

  const benefits = [
    { icon: TrendingUp, title: 'More Website Traffic', desc: 'SEO & ads that consistently drive high-intent visitors to your site.' },
    { icon: Users, title: 'More Leads & Sales', desc: 'Campaigns built to convert visitors into paying customers.' },
    { icon: MousePointer2, title: 'Better Conversion Rates', desc: 'Landing pages and funnels optimised for maximum action.' },
    { icon: PieChart, title: 'Higher ROI', desc: 'Every rupee tracked — we focus on what delivers measurable returns.' },
  ];

  const industries = [
    { icon: Home, name: 'Real Estate' },
    { icon: Heart, name: 'Healthcare' },
    { icon: ShoppingBag, name: 'E-commerce' },
    { icon: GraduationCap, name: 'Education' },
    { icon: Store, name: 'Local Businesses' },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'PropNest Realty, Hyderabad',
      text: 'Best web development company in Hyderabad. Their SEO and marketing helped us grow leads by 3× within just 4 months. Highly professional team.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      company: 'MedCare Clinics',
      text: 'Highly recommended digital marketing agency for real results. Our Google Ads ROI improved dramatically. The team is transparent, prompt, and results-driven.',
      rating: 5,
    },
    {
      name: 'Anil Reddy',
      company: 'ShopEase E-commerce',
      text: 'They rebuilt our website and launched performance ads — our revenue doubled in two quarters. Worth every rupee invested.',
      rating: 5,
    },
  ];

  return (
    <>

      <Helmet>
        <title>Digital Marketing Services | SEO, PPC & Social Media</title>

        <meta
          name="description"
          content="Explore our digital marketing services including SEO, Google Ads, social media marketing, and performance marketing to boost your business growth."
        />

        <meta
          name="keywords"
          content="SEO services, PPC advertising, Google Ads, social media marketing, digital marketing services"
        />

        <meta property="og:title" content="Digital Marketing Services | Zyntricstech Solutions" />
        <meta property="og:description" content="Comprehensive SEO, PPC, and social media marketing services." />
        <meta property="og:url" content="https://www.zyntricstech.com/services" />
        <meta property="og:image" content="https://www.zyntricstech.com/services.jpg" />

        <link rel="canonical" href="https://www.zyntricstech.com/services" />
        <meta name="robots" content="index, follow" />
      </Helmet>


      <div className="pt-2 min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">

        {/* ─── HERO ──────────────────────────────────────── */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#004787]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#004787]/10 rounded-full blur-3xl" />
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `linear-gradient(to right, #004787 1px, transparent 1px),
                               linear-gradient(to bottom, #004787 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }} />
          </div>

          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left: Text */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 text-left"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#004787]/10 to-[#004787]/10 dark:from-[#004787]/20 dark:to-[#004787]/20 text-[#004787] mb-6">
                  <Sparkles size={16} />
                  <span className="text-sm font-medium">Results-Driven Agency</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  <span className="block text-gray-900 dark:text-white">Digital Marketing</span>
                  <span className="block bg-gradient-to-r from-[#004787] via-[#004787] to-[#004787] bg-clip-text text-transparent">
                    Services That Drive
                  </span>
                  <span className="block text-gray-900 dark:text-white">Real Results</span>
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl mb-10">
                  From SEO to paid ads, we help businesses grow traffic, leads, and revenue — with strategies built for measurable growth.
                </p>

                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 py-4 bg-[#004787] text-white font-semibold rounded-2xl shadow-xl flex items-center gap-2"
                  >
                    <CheckCircle size={18} />
                    Get Free Audit
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-semibold rounded-2xl shadow-lg flex items-center gap-2"
                  >
                    <MessageSquare size={18} />
                    Talk to Expert
                  </motion.button>
                </div>
              </motion.div>

              {/* Right: Stats Dashboard */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 grid grid-cols-2 gap-4"
              >
                {[
                  { icon: Rocket, value: '98%', label: 'Client Success Rate', color: 'from-[#004787] to-[#004787]' },
                  { icon: TrendingUp, value: '450%', label: 'Average ROI Delivered', color: 'from-[#004787] to-[#004787]' },
                  { icon: Users, value: '250+', label: 'Happy Clients', color: 'from-[#004787] to-[#004787]' },
                  { icon: Award, value: '10+', label: 'Industry Awards', color: 'from-[#004787] to-[#004787]' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg text-center"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-3`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── SERVICES ──────────────────────────────────── */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter Header */}
            <div className="mb-12 pt-6 pb-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-[#004787]/10 to-[#004787]/10 rounded-lg">
                    <Filter size={20} className="text-[#004787]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Services</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Filter by category</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {filteredServices.length} of {allServices.length} services
                </span>
              </motion.div>

              {/* Category Chips */}
              <div className="overflow-x-auto pb-2">
                <div className="flex gap-2 min-w-max">
                  {categories.map(category => {
                    const Icon = category.icon;
                    const isActive = activeTab === category.id;
                    return (
                      <motion.button
                        key={category.id}
                        onClick={() => setActiveTab(category.id)}
                        className={`group relative px-4 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 flex-shrink-0 ${isActive
                          ? 'bg-[#004787] text-white shadow-lg'
                          : 'text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:text-[#004787]'
                          }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-[#004787] text-white rounded-xl z-10 shadow-lg"
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                          />
                        )}
                        <Icon size={16} />
                        <span>{category.name}</span>
                        <span className={`px-2 py-0.5 text-xs rounded-full ${isActive ? 'bg-white/20' : 'bg-gray-300 dark:bg-gray-700'}`}>
                          {category.count}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="wait">
                {filteredServices.map(service => (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -10 }}
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                    className="relative group"
                  >
                    {service.popular && (
                      <div className="absolute -top-3 -right-3 z-10">
                        <div className="px-3 py-1.5 bg-gradient-to-r from-yellow-500 to-amber-500 text-white text-xs font-bold rounded-full shadow-lg">
                          Popular
                        </div>
                      </div>
                    )}

                    <div className="relative h-full overflow-hidden rounded-3xl border border-[#004787]/20">
                      <div className={`absolute inset-0 p-1 bg-gradient-to-r ${service.color} rounded-3xl`}>
                        <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-3xl" />
                      </div>

                      <div className="relative p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl h-full flex flex-col">
                        <div className="flex items-start justify-between mb-6">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg`}
                          >
                            <service.icon className="h-7 w-7 text-white" />
                          </motion.div>
                          <div className="text-right">
                            <div className="text-xs text-gray-500 dark:text-gray-400">Duration</div>
                            <div className="text-sm font-semibold text-gray-900 dark:text-white">{service.duration}</div>
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{service.description}</p>

                        <div className="mb-6 flex flex-wrap gap-2">
                          {service.features.slice(0, 3).map((f, idx) => (
                            <span key={idx} className="px-3 py-1.5 bg-gray-50 dark:bg-gray-700 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300">
                              {f}
                            </span>
                          ))}
                        </div>

                        <div className="mb-6">
                          <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Typical Results</div>
                          <div className="grid grid-cols-3 gap-2">
                            {service.results.map((r, idx) => (
                              <div key={idx} className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <div className="text-xs font-bold text-gray-900 dark:text-white">{r}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                          {/* <div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Starting at</div>
                            <div className="text-base font-bold bg-[#004787] bg-clip-text text-transparent">
                              {service.price}
                            </div>
                          </div> */}
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-5 py-3 bg-gradient-to-r from-gray-900 to-black dark:from-white dark:to-gray-100 text-white dark:text-gray-900 font-semibold rounded-xl shadow-lg flex items-center gap-2 text-sm"
                          >
                            Learn More
                            <ArrowRight size={15} />
                          </motion.button>
                        </div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredService === service.id ? 1 : 0 }}
                        className="absolute inset-0 bg-gradient-to-t from-[#004787]/10 via-transparent to-transparent pointer-events-none rounded-3xl"
                      />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ─── BENEFITS ──────────────────────────────────── */}
        <section className="py-24 bg-white dark:bg-gray-800">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#004787]/10 to-[#004787]/10 text-[#004787] mb-4">
                <CheckCircle size={16} />
                <span className="text-sm font-medium">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                What You Get With Our Services
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Everything we do is designed around one goal — growing your business with measurable impact.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="p-8 rounded-3xl bg-gradient-to-b from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 shadow-lg text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#004787] flex items-center justify-center mx-auto mb-5 shadow-lg">
                    <b.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{b.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PROCESS ───────────────────────────────────── */}
        <section className="py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#004787]/10 to-[#004787]/10 text-[#004787] mb-4">
                <Brain size={16} />
                <span className="text-sm font-medium">Our Methodology</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gray-900 dark:text-white">How Our Digital Marketing </span>
                <span className="bg-[#004787] bg-clip-text text-transparent">Services Work</span>
              </h2>
            </motion.div>

            <div className="relative max-w-6xl mx-auto">
              <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#004787] via-[#004787] to-[#004787]" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { step: 1, title: 'Strategy', desc: 'We analyze your business, competitors, and audience to build a winning plan.', icon: Search, color: 'from-[#004787] to-[#004787]' },
                  { step: 2, title: 'Execution', desc: 'We implement SEO, ads, and marketing campaigns with precision and speed.', icon: Zap, color: 'from-[#004787] to-[#004787]' },
                  { step: 3, title: 'Optimization', desc: 'We continuously test, tweak, and improve to maximise performance.', icon: TrendingUp, color: 'from-[#004787] to-[#004787]' },
                  { step: 4, title: 'Reporting', desc: 'We provide clear, jargon-free reports with actionable insights every month.', icon: BarChart3, color: 'from-[#004787] to-[#004787]' },
                ].map((p, i) => (
                  <motion.div
                    key={p.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative"
                  >
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-xl z-10">
                      <span className="text-lg font-bold bg-[#004787] bg-clip-text text-transparent">{p.step}</span>
                    </div>
                    <div className="pt-10">
                      <div className="p-8 rounded-3xl bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-2xl">
                        <div className={`w-16 h-16 bg-gradient-to-r ${p.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                          <p.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white text-center">{p.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-center text-sm">{p.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── INDUSTRIES ────────────────────────────────── */}
        <section className="py-24 bg-white dark:bg-gray-800">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#004787]/10 to-[#004787]/10 text-[#004787] mb-4">
                <Globe size={16} />
                <span className="text-sm font-medium">Our Expertise</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Industries We Serve</h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-6">
              {industries.map((ind, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.08, y: -4 }}
                  className="flex flex-col items-center gap-3 px-10 py-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-3xl shadow-lg min-w-[140px]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#004787] flex items-center justify-center shadow-md">
                    <ind.icon className="h-7 w-7 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white text-center">{ind.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIALS ──────────────────────────────── */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#004787]/10 to-[#004787]/10 text-[#004787] mb-4">
                <Star size={16} />
                <span className="text-sm font-medium">Client Reviews</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">What Our Clients Say</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="relative p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700"
                >
                  <Quote className="h-8 w-8 text-[#004787]/30 mb-4" />
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="w-10 h-10 rounded-full bg-[#004787] flex items-center justify-center text-white font-bold">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">{t.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{t.company}</div>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {[...Array(t.rating)].map((_, s) => (
                        <Star key={s} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ─────────────────────────────────── */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#004787] via-[#004787] to-[#004787]" />
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                animate={{ y: [0, -30, 0], x: [0, Math.sin(i) * 20, 0] }}
                transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              />
            ))}
          </div>

          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Grow Your Business?
                </h2>
                <p className="text-xl text-white/90 mb-12">
                  Let's create a strategy that brings you more leads and sales. Your free audit is just one click away.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-white text-[#004787] font-bold rounded-2xl shadow-2xl flex items-center gap-3 justify-center"
                  >
                    <CheckCircle size={20} />
                    Get Free Audit
                  </motion.button>
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center gap-3 justify-center"
                    >
                      <MessageSquare size={20} />
                      Contact Us
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
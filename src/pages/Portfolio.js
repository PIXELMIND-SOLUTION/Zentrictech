import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Filter, TrendingUp, Users, DollarSign, Calendar,
  Target, BarChart, ArrowRight, Sparkles, Zap, ChevronRight,
  Search, Share2, Mail, Globe, Rocket, MessageSquare,
  Home, Heart, ShoppingBag, GraduationCap, Store,
  Star, Quote, CheckCircle, Code2, Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCase, setHoveredCase] = useState(null);

  const caseStudies = [
    {
      id: 1,
      title: 'Real Estate Lead Generation',
      category: 'SEO',
      categoryId: 'seo',
      client: 'PropNest Realty',
      industry: 'Real Estate',
      duration: '6 Months',
      challenge: 'Low organic visibility and poor lead quality from the website, resulting in high dependency on paid portals.',
      solution: 'Full technical SEO overhaul, local SEO optimization, and content strategy targeting high-intent buyers.',
      results: [
        { icon: TrendingUp, label: 'Traffic Growth', value: '+300%' },
        { icon: Users, label: 'Leads Generated', value: '1,200+' },
        { icon: DollarSign, label: 'ROI', value: '5X' },
        { icon: BarChart, label: 'Keyword Rankings', value: 'Top 3' },
      ],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200',
      color: 'from-[#004787] to-[#004787]',
      tags: ['Real Estate', 'Local SEO', 'Organic'],
      featured: true,
      keyResult: '+300% Traffic Growth',
    },
    {
      id: 2,
      title: 'E-commerce Revenue Scale-Up',
      category: 'Performance Marketing',
      categoryId: 'ads',
      client: 'ShopEase Online',
      industry: 'E-commerce',
      duration: '4 Months',
      challenge: 'High ad spend with low ROAS and poor conversion rates on Google and Meta campaigns.',
      solution: 'Restructured Google Shopping + Meta Ads with advanced audience segmentation and landing page CRO.',
      results: [
        { icon: TrendingUp, label: 'Revenue Growth', value: '+250%' },
        { icon: DollarSign, label: 'ROAS', value: '6.4X' },
        { icon: Target, label: 'Cost per Lead', value: '-55%' },
        { icon: Users, label: 'New Customers', value: '3,500+' },
      ],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200',
      color: 'from-[#004787] to-[#004787]',
      tags: ['E-commerce', 'Google Ads', 'Meta Ads'],
      featured: true,
      keyResult: '6.4X ROAS Achieved',
    },
    {
      id: 3,
      title: 'Healthcare Clinic Digital Presence',
      category: 'Digital Marketing',
      categoryId: 'digital',
      client: 'MedCare Clinics',
      industry: 'Healthcare',
      duration: '5 Months',
      challenge: 'Zero online visibility and patients not finding the clinic through local searches.',
      solution: 'Google My Business optimization, local SEO, targeted Meta Ads, and patient review strategy.',
      results: [
        { icon: TrendingUp, label: 'Online Appointments', value: '+180%' },
        { icon: Users, label: 'New Patients/month', value: '120+' },
        { icon: Star, label: 'Google Rating', value: '4.9★' },
        { icon: BarChart, label: 'Local Visibility', value: '+400%' },
      ],
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200',
      color: 'from-[#004787] to-[#004787]',
      tags: ['Healthcare', 'Local SEO', 'Social Ads'],
      featured: false,
      keyResult: '+180% Online Appointments',
    },
    {
      id: 4,
      title: 'Education Institute Website & Leads',
      category: 'Web Development',
      categoryId: 'web',
      client: 'BrightFuture Academy',
      industry: 'Education',
      duration: '8 Weeks',
      challenge: 'Outdated website with no lead capture system, resulting in zero online admissions.',
      solution: 'Custom conversion-focused website with integrated CRM, WhatsApp lead capture, and SEO-ready structure.',
      results: [
        { icon: TrendingUp, label: 'Admission Inquiries', value: '3X Growth' },
        { icon: DollarSign, label: 'Cost per Inquiry', value: '-60%' },
        { icon: Target, label: 'PageSpeed Score', value: '98/100' },
        { icon: Users, label: 'Leads / Month', value: '200+' },
      ],
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200',
      color: 'from-[#004787] to-[#004787]',
      tags: ['Education', 'Web Dev', 'Lead Gen'],
      featured: false,
      keyResult: '3X Admission Inquiries',
    },
    {
      id: 5,
      title: 'Local Restaurant Social Growth',
      category: 'Digital Marketing',
      categoryId: 'digital',
      client: 'Spice Route Restaurant',
      industry: 'Food & Beverage',
      duration: '3 Months',
      challenge: 'No social media presence and completely reliant on offline walk-ins.',
      solution: 'Instagram & Facebook content strategy, influencer collaborations, and targeted local ads.',
      results: [
        { icon: TrendingUp, label: 'Social Engagement', value: '+500%' },
        { icon: Users, label: 'Followers Gained', value: '12K+' },
        { icon: DollarSign, label: 'Footfall Increase', value: '+70%' },
        { icon: Share2, label: 'Brand Mentions', value: '+280%' },
      ],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200',
      color: 'from-[#004787] to-[#06f4c4]',
      tags: ['Local Business', 'Social Media', 'Influencer'],
      featured: true,
      keyResult: '+500% Social Engagement',
    },
    {
      id: 6,
      title: 'B2B SaaS Lead Pipeline',
      category: 'Performance Marketing',
      categoryId: 'ads',
      client: 'CloudOps Software',
      industry: 'SaaS / Tech',
      duration: '7 Months',
      challenge: 'High cost-per-lead from LinkedIn Ads and poor-quality MQLs entering the sales pipeline.',
      solution: 'Restructured LinkedIn campaigns with intent-based targeting, retargeting sequences, and lead scoring.',
      results: [
        { icon: TrendingUp, label: 'MQL Quality', value: '+85%' },
        { icon: DollarSign, label: 'Cost per MQL', value: '-50%' },
        { icon: Users, label: 'SQLs / Month', value: '80+' },
        { icon: BarChart, label: 'Pipeline Value', value: '+200%' },
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200',
      color: 'from-[#004787] to-[#0684c4]',
      tags: ['B2B', 'LinkedIn Ads', 'SaaS'],
      featured: false,
      keyResult: '-50% Cost per Lead',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: caseStudies.length },
    { id: 'seo', name: 'SEO', count: caseStudies.filter(c => c.categoryId === 'seo').length },
    { id: 'digital', name: 'Digital Marketing', count: caseStudies.filter(c => c.categoryId === 'digital').length },
    { id: 'web', name: 'Web Development', count: caseStudies.filter(c => c.categoryId === 'web').length },
    { id: 'ads', name: 'Performance Ads', count: caseStudies.filter(c => c.categoryId === 'ads').length },
    { id: 'featured', name: 'Featured', count: caseStudies.filter(c => c.featured).length },
  ];

  const filteredCases =
    activeFilter === 'all' ? caseStudies
      : activeFilter === 'featured' ? caseStudies.filter(c => c.featured)
        : caseStudies.filter(c => c.categoryId === activeFilter);

  const industries = [
    { icon: Home, name: 'Real Estate' },
    { icon: ShoppingBag, name: 'E-commerce' },
    { icon: Heart, name: 'Healthcare' },
    { icon: GraduationCap, name: 'Education' },
    { icon: Store, name: 'Local Businesses' },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'PropNest Realty, Hyderabad',
      text: 'Their digital marketing strategy helped us scale our business quickly. We went from near-zero online leads to 1,200+ quality inquiries in just 6 months.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      company: 'MedCare Clinics',
      text: 'Highly professional team delivering real results. Our clinic\'s online appointments tripled and Google rating improved dramatically. Best investment we made.',
      rating: 5,
    },
    {
      name: 'Anil Reddy',
      company: 'ShopEase Online',
      text: 'Our ROAS jumped to 6.4X within 4 months. The team is data-driven, transparent, and truly focused on ROI — not vanity metrics.',
      rating: 5,
    },
  ];

  return (
    <>

      <Helmet>
        <title>Digital Marketing Case Studies | Zyntricstech Solutions</title>

        <meta
          name="description"
          content="View our digital marketing case studies showcasing SEO rankings, lead generation success, and ROI-driven campaigns."
        />

        <meta
          name="keywords"
          content="SEO case studies, digital marketing results, PPC success stories, marketing portfolio"
        />

        <meta property="og:title" content="Marketing Case Studies | Zyntricstech Solutions" />
        <meta property="og:description" content="Real results from SEO, PPC, and marketing campaigns." />
        <meta property="og:url" content="https://www.zyntricstech.com/portfolio" />
        <meta property="og:image" content="https://www.zyntricstech.com/portfolio.jpg" />

        <link rel="canonical" href="https://www.zyntricstech.com/portfolio" />
        <meta name="robots" content="index, follow" />
      </Helmet>


      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24">

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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-5xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#004787]/10 to-[#004787]/10 dark:from-[#004787]/20 dark:to-[#004787]/20 text-[#004787] mb-6">
                <Sparkles size={16} />
                <span className="text-sm font-medium">Proven Results</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
                <span className="block text-gray-900 dark:text-white mb-4">Our Work That</span>
                <span className="block bg-gradient-to-r from-[#004787] via-[#004787] to-[#004787] bg-clip-text text-transparent">
                  Drives Real Results
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12">
                Explore how we've helped businesses grow through digital marketing, SEO, and high-converting websites — with measurable ROI.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                {[
                  { icon: TrendingUp, value: '200%+', label: 'Avg. Traffic Growth' },
                  { icon: DollarSign, value: '5X ROI', label: 'On Campaigns' },
                  { icon: Target, value: '100+', label: 'Projects Delivered' },
                  { icon: Users, value: '50+', label: 'Happy Clients' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg"
                  >
                    <stat.icon className="h-8 w-8 text-[#004787] mx-auto mb-3" />
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#004787] text-white font-semibold rounded-2xl shadow-xl"
                >
                  <Search size={18} />
                  View Case Studies
                  <ArrowRight size={18} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-semibold rounded-2xl shadow-lg"
                >
                  <CheckCircle size={18} />
                  Get Free Audit
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── CASE STUDIES ──────────────────────────────── */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
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
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Case Studies</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Filter by service category</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {filteredCases.length} of {caseStudies.length} projects
                </span>
              </motion.div>

              {/* Category Filter */}
              <div className="overflow-x-auto pb-2">
                <div className="flex gap-2 min-w-max">
                  {categories.map(category => {
                    const isActive = activeFilter === category.id;
                    return (
                      <motion.button
                        key={category.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveFilter(category.id)}
                        className={`group relative px-4 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 flex-shrink-0 ${isActive
                            ? 'text-white shadow-lg'
                            : 'text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:text-[#004787]'
                          }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-[#004787] rounded-xl z-[-1]"
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                          />
                        )}
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

            {/* Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              <AnimatePresence mode="wait">
                {filteredCases.map(study => (
                  <motion.div
                    key={study.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -10 }}
                    onMouseEnter={() => setHoveredCase(study.id)}
                    onMouseLeave={() => setHoveredCase(null)}
                    className="relative group"
                  >
                    {study.featured && (
                      <div className="absolute -top-3 -left-3 z-10">
                        <div className="px-3 py-1.5 bg-gradient-to-r from-yellow-500 to-amber-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                          <Zap size={10} />
                          Featured
                        </div>
                      </div>
                    )}

                    <div className="relative h-full overflow-hidden rounded-3xl border border-[#004787]/20">
                      <div className={`absolute inset-0 p-1 bg-gradient-to-r ${study.color} rounded-3xl`}>
                        <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-3xl" />
                      </div>

                      <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl h-full flex flex-col">
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden rounded-t-3xl">
                          <img
                            src={study.image}
                            alt={study.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                          {/* Key Result Badge */}
                          <div className="absolute top-4 right-4">
                            <div className="px-3 py-1.5 bg-[#004787] text-white text-xs font-bold rounded-full shadow-lg">
                              {study.keyResult}
                            </div>
                          </div>

                          <div className="absolute bottom-4 left-4">
                            <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-xs font-semibold rounded-full text-gray-800 dark:text-white">
                              {study.category}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-grow">
                          <div className="mb-4">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{study.title}</h3>
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{study.client}</span>
                              <div className="flex items-center gap-1 text-sm text-gray-500">
                                <Calendar size={13} />
                                <span>{study.duration}</span>
                              </div>
                            </div>
                          </div>

                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-5 line-clamp-2">
                            <span className="font-semibold text-gray-800 dark:text-gray-200">Challenge: </span>
                            {study.challenge}
                          </p>

                          {/* Results Grid */}
                          <div className="mb-5">
                            <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Key Results</div>
                            <div className="grid grid-cols-2 gap-2">
                              {study.results.slice(0, 4).map((r, idx) => (
                                <div key={idx} className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded-xl">
                                  <div className="flex items-center justify-center gap-1 mb-1">
                                    <r.icon size={13} className="text-[#004787]" />
                                    <div className="text-sm font-bold text-gray-900 dark:text-white">{r.value}</div>
                                  </div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400">{r.label}</div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5">
                            {study.tags.map((tag, idx) => (
                              <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-600 dark:text-gray-300">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="p-6 pt-0 mt-auto">
                          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">Industry</div>
                              <div className="text-sm font-semibold text-gray-900 dark:text-white">{study.industry}</div>
                            </div>
                            <Link to={`/portfolio/${study.id}`}>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-5 py-2.5 bg-gradient-to-r from-gray-900 to-black dark:from-white dark:to-gray-100 text-white dark:text-gray-900 font-semibold rounded-xl shadow-lg flex items-center gap-2 text-sm"
                              >
                                View Case Study
                                <ChevronRight size={15} />
                              </motion.button>
                            </Link>
                          </div>
                        </div>

                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredCase === study.id ? 1 : 0 }}
                          className="absolute inset-0 bg-gradient-to-t from-[#004787]/10 via-transparent to-transparent pointer-events-none rounded-3xl"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredCases.length === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
                <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search size={40} className="text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">No Projects Found</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Try selecting a different category or view all projects.</p>
                <button
                  onClick={() => setActiveFilter('all')}
                  className="px-6 py-3 bg-[#004787] text-white font-semibold rounded-xl"
                >
                  View All Projects
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* ─── RESULTS SUMMARY ───────────────────────────── */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#004787]/10 to-[#004787]/10 text-[#004787] mb-4">
                <BarChart size={16} />
                <span className="text-sm font-medium">Our Track Record</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Our Portfolio <span className="bg-[#004787] bg-clip-text text-transparent">Results</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Measurable impact across all client projects — from traffic to revenue.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: '200%+', label: 'Average Traffic Growth', color: 'from-[#004787] to-[#004787]', icon: TrendingUp },
                { value: '5X ROI', label: 'On Ad Campaigns', color: 'from-[#004787] to-[#004787]', icon: DollarSign },
                { value: '100+', label: 'Projects Delivered', color: 'from-[#004787] to-[#004787]', icon: Rocket },
                { value: '50+', label: 'Happy Clients', color: 'from-[#004787] to-[#004787]', icon: Users },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-xl rounded-3xl transition-opacity`} />
                  <div className="relative p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 text-center">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Industries We've Worked With</h2>
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
                  className="p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700"
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
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                animate={{ y: [0, -40, 0], x: [0, Math.sin(i) * 30, 0] }}
                transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              />
            ))}
          </div>

          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                  <Rocket size={16} className="text-white" />
                  <span className="text-sm font-medium text-white">Ready to Start?</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Want Results Like These?
                </h2>
                <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                  Let's build a strategy that drives real growth for your business — starting with a free audit.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-white text-[#004787] font-bold rounded-2xl shadow-2xl flex items-center justify-center gap-3"
                  >
                    <CheckCircle size={20} />
                    Get Free Audit
                  </motion.button>
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                    >
                      <MessageSquare size={20} />
                      Start Your Project
                    </motion.button>
                  </Link>
                </div>

                <div className="flex flex-wrap justify-center gap-10 mt-16">
                  {[
                    { value: '24/7', label: 'Dedicated Support' },
                    { value: '30-Day', label: 'Results Guarantee' },
                    { value: 'Free', label: 'Strategy Session' },
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                      <div className="text-sm text-white/80">{item.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PortfolioPage;
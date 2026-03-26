import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// ── Animated counter ──────────────────────────────────────────────────────────
function Counter({ target, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const raw = useMotionValue(0);
  const smooth = useSpring(raw, { stiffness: 60, damping: 18 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) raw.set(parseInt(target));
  }, [inView, raw, target]);

  useEffect(() => smooth.on('change', v => setDisplay(Math.round(v))), [smooth]);

  return <span ref={ref}>{display}{suffix}</span>;
}

// ── Section badge ─────────────────────────────────────────────────────────────
function Badge({ children }) {
  return (
    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-teal-50 text-teal-700 border border-teal-100 mb-4">
      {children}
    </span>
  );
}

// ── Icon Components ───────────────────────────────────────────────────────────
const Icons = {
  target: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  ),
  eye: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
    </svg>
  ),
  zap: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  chart: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  shield: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  users: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  code: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  smartphone: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  search: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  megaphone: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M3 11l19-9-9 19-2-8-8-2z" />
    </svg>
  ),
  trendingUp: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  check: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  star: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  arrowRight: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  quote: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 opacity-20">
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  ),
};

// ══════════════════════════════════════════════════════════════════════════════
export default function AboutPage() {

  const team = [
    { name: 'Ravi Kumar', role: 'CEO & Founder', initials: 'RK', color: '#0D9488', expertise: 'Digital Strategy' },
    { name: 'Priya Sharma', role: 'Head of SEO', initials: 'PS', color: '#0891B2', expertise: 'SEO & Analytics' },
    { name: 'Arjun Mehta', role: 'Web Dev Lead', initials: 'AM', color: '#0F766E', expertise: 'Full-Stack Dev' },
    { name: 'Sneha Rao', role: 'Marketing Director', initials: 'SR', color: '#06B6D4', expertise: 'Performance Mktg' },
    { name: 'Kiran Reddy', role: 'Mobile Dev Lead', initials: 'KR', color: '#0E7490', expertise: 'React Native / Flutter' },
    { name: 'Divya Nair', role: 'Content Strategist', initials: 'DN', color: '#115E59', expertise: 'Content & Copywriting' },
  ];

  const services = [
    { icon: Icons.search, label: 'SEO Services', desc: 'Rank higher, get found faster with proven on-page & off-page SEO.' },
    { icon: Icons.megaphone, label: 'Digital Marketing', desc: 'Social, email & content strategies that convert audiences into customers.' },
    { icon: Icons.code, label: 'Web Development', desc: 'Fast, scalable websites built for performance and conversions.' },
    { icon: Icons.smartphone, label: 'Mobile App Dev', desc: 'Native & cross-platform apps that delight users on every device.' },
    { icon: Icons.trendingUp, label: 'Performance Marketing', desc: 'ROI-focused paid ads across Google, Meta and beyond.' },
  ];

  const differentiators = [
    { icon: Icons.chart, label: 'Data-Driven Strategies', desc: 'Every decision is backed by analytics, not guesswork.' },
    { icon: Icons.trendingUp, label: 'ROI-Focused Approach', desc: 'We measure success by revenue impact, not vanity metrics.' },
    { icon: Icons.zap, label: 'Customised Solutions', desc: 'No cookie-cutter plans — built for your goals and industry.' },
    { icon: Icons.shield, label: 'Transparent Communication', desc: 'Real-time reporting. No hidden fees. Just honest updates.' },
    { icon: Icons.users, label: 'Experienced Team', desc: 'Senior specialists with 5+ years of hands-on domain expertise.' },
  ];

  const stats = [
    { value: 100, suffix: '+', label: 'Projects Completed' },
    { value: 50, suffix: '+', label: 'Happy Clients' },
    { value: 5, suffix: '+', label: 'Years Experience' },
    { value: 200, suffix: '%', label: 'Avg Growth Delivered' },
  ];

  const testimonials = [
    { text: 'PixelMind Solutions doubled our organic traffic in just 4 months. Their SEO team is genuinely exceptional.', name: 'Anand Verma', company: 'TechStart Hyderabad' },
    { text: 'The website they built for us is fast, beautiful and ranks well. Professional team with excellent delivery.', name: 'Meera Krishnan', company: 'RetailPlus' },
    { text: 'Their performance marketing campaigns delivered a 3x ROAS. Best digital agency we have worked with.', name: 'Suresh Patil', company: 'EcomGrow' },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
  };

  return (
    <>

      <Helmet>
        <title>About Digital Marketing Agency | PixelMind Solutions</title>

        <meta
          name="description"
          content="PixelMind Solutions is a trusted digital marketing agency helping businesses grow with SEO, PPC, and social media strategies."
        />

        <meta
          name="keywords"
          content="digital marketing company, SEO agency Hyderabad, marketing experts"
        />

        <meta property="og:title" content="About PixelMind Solutions" />
        <meta property="og:description" content="Meet our digital marketing experts and growth strategies." />
        <meta property="og:url" content="https://www.pixelmindsolutions.in/about" />
        <meta property="og:image" content="https://www.pixelmindsolutions.in/about.jpg" />

        <link rel="canonical" href="https://www.pixelmindsolutions.in/about" />
        <meta name="robots" content="index, follow" />
      </Helmet>


      <div className="font-sans bg-white text-gray-900 overflow-x-hidden">
        {/* ── 1. HERO ── */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden before:absolute before:inset-0 before:bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.04\'/%3E%3C/svg%3E')] before:pointer-events-none"
          style={{ background: 'linear-gradient(135deg, #F0FDFA 0%, #ECFEFF 60%, #F0FDFA 100%)' }}>
          {/* Background blobs */}
          <div className="absolute -top-[10%] -right-[5%] w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(13,148,136,0.15)_0%,transparent_70%)]" />
          <div className="absolute -bottom-[10%] -left-[5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.12)_0%,transparent_70%)]" />

          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                <Badge>About Us</Badge>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
                  Your Growth,<br />
                  <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent italic">Our Mission.</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-lg">
                  We are a results-driven <strong>digital marketing agency</strong> and <strong>web development company in Hyderabad</strong> — helping businesses grow online with data-backed strategies and innovative technology.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-gradient-to-r from-teal-600 to-cyan-500 text-white px-8 py-3.5 rounded-xl font-semibold text-sm inline-flex items-center gap-2 hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200">
                    Get Free Consultation <Icons.arrowRight />
                  </button>
                  <button className="bg-transparent text-teal-600 px-8 py-3.5 rounded-xl font-semibold text-sm inline-flex items-center gap-2 border-2 border-teal-600 hover:bg-teal-50 hover:-translate-y-0.5 transition-all duration-200">
                    View Our Work
                  </button>
                </div>
              </motion.div>

              {/* Illustration / abstract graphic */}
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:flex items-center justify-center">
                <div className="w-[480px] h-[480px] relative">
                  {/* Layered circles */}
                  {[380, 300, 220, 140].map((s, i) => (
                    <div key={i} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                      style={{
                        width: s, height: s,
                        border: `${2 - i * 0.3}px solid`,
                        borderColor: i % 2 === 0 ? 'rgba(79,70,229,0.2)' : 'rgba(8,145,178,0.2)',
                        animation: `spin ${12 + i * 4}s linear infinite ${i % 2 ? 'reverse' : ''}`,
                      }} />
                  ))}
                  {/* Center card */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-7 text-center w-[220px] shadow-[0_24px_64px_rgba(79,70,229,0.15)]">
                    <div className="text-5xl font-extrabold bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">5+</div>
                    <div className="text-xs text-gray-500 font-medium mt-1">Years of Excellence</div>
                    <div className="flex justify-center gap-1 mt-3">
                      {[...Array(5)].map((_, i) => <span key={i} className="text-amber-400"><Icons.star /></span>)}
                    </div>
                  </div>
                  {/* Floating stat chips */}
                  {[
                    { label: '100+ Projects', top: '10%', left: '60%', bg: '#0D9488' },
                    { label: '50+ Clients', top: '75%', left: '55%', bg: '#06B6D4' },
                    { label: 'SEO Experts', top: '20%', left: '-5%', bg: '#0F766E' },
                  ].map((chip, i) => (
                    <motion.div key={i}
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
                      className="absolute text-white text-xs font-bold py-2 px-4 rounded-full whitespace-nowrap shadow-lg"
                      style={{ top: chip.top, left: chip.left, background: chip.bg }}>
                      {chip.label}
                    </motion.div>
                  ))}
                </div>
                <style>{`@keyframes spin { to { transform: translate(-50%,-50%) rotate(360deg); } }`}</style>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 2. WHO WE ARE ── */}
        <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image / graphic */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="rounded-3xl bg-gradient-to-br from-teal-50 to-cyan-50 p-10 relative min-h-[360px] flex flex-col justify-center gap-4">
                {[
                  { label: 'Organic Traffic', pct: 87, color: '#0D9488' },
                  { label: 'Conversion Rate', pct: 72, color: '#06B6D4' },
                  { label: 'Client Retention', pct: 94, color: '#0F766E' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1.5 text-sm font-semibold text-gray-700">
                      <span>{item.label}</span><span>{item.pct}%</span>
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${item.pct}%` }} transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: 'easeOut' }} viewport={{ once: true }}
                        className="h-full rounded-full" style={{ background: item.color }} />
                    </div>
                  </div>
                ))}
                <p className="text-xs text-gray-500 mt-2 text-center">Average results across client campaigns</p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <Badge>Who We Are</Badge>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">
                A Full-Service <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Digital Partner</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We are a full-service <strong>digital marketing agency and web development company in Hyderabad</strong>, focused on helping businesses grow with data-driven strategies and innovative solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team specialises in <strong>SEO services</strong>, digital marketing, website development, and performance marketing to deliver measurable results that directly impact your bottom line.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── 3. MISSION & VISION ── */}
        <section className="bg-gradient-to-br from-gray-50 to-teal-50/40 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
              <Badge>Our Purpose</Badge>
              <h2 className="font-serif text-4xl md:text-5xl">Mission &amp; Vision</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Icons.target, label: 'Our Mission', color: '#0D9488', bg: '#F0FDFA',
                  text: 'To help businesses grow online by delivering high-performance digital marketing and technology solutions that drive real, measurable results.'
                },
                {
                  icon: Icons.eye, label: 'Our Vision', color: '#0891B2', bg: '#ECFEFF',
                  text: 'To become a leading digital marketing agency known for innovation, transparency, and measurable success — helping clients across every industry thrive.'
                },
              ].map((card, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                  className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: card.bg, color: card.color }}>
                    <card.icon />
                  </div>
                  <h3 className="font-serif text-2xl mb-4">{card.label}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. WHAT MAKES US DIFFERENT ── */}
        <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <Badge>Why Choose Us</Badge>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">What Makes Us <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Different</span></h2>
            <p className="text-gray-500 max-w-xl mx-auto">We don't just run campaigns — we build digital engines that keep delivering.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5">
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                    <d.icon />
                  </div>
                  <h3 className="font-bold text-lg">{d.label}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
            {/* Filler CTA card */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={5}
              className="bg-gradient-to-r from-teal-600 to-cyan-500 rounded-2xl p-8 flex flex-col justify-between">
              <p className="text-white/85 text-base leading-relaxed mb-6">
                Ready to experience the PixelMind difference for your business?
              </p>
              <button className="bg-white text-teal-600 border-none py-3 px-6 rounded-xl font-bold text-sm cursor-pointer flex items-center gap-2 w-fit hover:opacity-90 transition-all">
                Start Today <Icons.arrowRight />
              </button>
            </motion.div>
          </div>
        </section>

        {/* ── 5. SERVICES / EXPERTISE ── */}
        <section className="bg-slate-900 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
              <span className="inline-block py-1.5 px-5 rounded-full text-xs font-bold tracking-wider uppercase bg-teal-800/30 text-teal-300 mb-4">Our Expertise</span>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">What We <span className="text-teal-300">Do Best</span></h2>
              <p className="text-slate-400 max-w-md mx-auto">End-to-end digital services that work together to grow your business online.</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 cursor-pointer hover:bg-white/10 transition-all duration-300 hover:-translate-y-1.5">
                  <div className="w-12 h-12 rounded-xl bg-teal-700/30 text-teal-300 flex items-center justify-center mb-5">
                    <s.icon />
                  </div>
                  <h3 className="font-bold text-slate-100 text-lg mb-2.5">{s.label}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
              {/* CTA card */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={5}
                className="bg-gradient-to-br from-teal-700/40 to-cyan-600/30 border border-teal-300/30 rounded-2xl p-8 flex flex-col justify-center items-center text-center">
                <p className="text-slate-200 text-sm mb-5">Need a custom solution?</p>
                <button className="bg-gradient-to-r from-teal-600 to-cyan-500 text-white border-none py-3 px-7 rounded-xl font-bold text-sm cursor-pointer flex items-center gap-2 hover:opacity-90 transition-all">
                  Explore All Services <Icons.arrowRight />
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 6. TEAM ── */}
        <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <Badge>Leadership Team</Badge>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Meet Our <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Team</span></h2>
            <p className="text-gray-500 max-w-lg mx-auto">Passionate specialists committed to delivering exceptional results for every client.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="bg-white border border-gray-200 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-extrabold text-white mx-auto mb-5 shadow-lg"
                  style={{ background: member.color, boxShadow: `0 8px 24px ${member.color}44` }}>
                  {member.initials}
                </div>
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="font-semibold text-sm mb-2" style={{ color: member.color }}>{member.role}</p>
                <span className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold py-1 px-3.5 rounded-full">{member.expertise}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── 7. STATS ── */}
        <section className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-cyan-500 py-24">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.04\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Our Achievements</h2>
              <p className="text-white/75 max-w-md mx-auto">Numbers that tell the story of our commitment to excellence.</p>
            </motion.div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl py-8 px-4 border border-white/20">
                  <div className="font-serif text-5xl font-bold text-white leading-none">
                    <Counter target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-white/80 text-sm font-medium mt-2.5">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. TESTIMONIALS ── */}
        <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <Badge>Client Love</Badge>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">What Our Clients <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Say</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="bg-white border border-gray-200 rounded-3xl p-8 relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5">
                <div className="absolute top-6 right-6 text-teal-600"><Icons.quote /></div>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => <span key={j} className="text-amber-400"><Icons.star /></span>)}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── 9. FINAL CTA ── */}
        <section className="bg-slate-900 py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="inline-block py-1.5 px-5 rounded-full text-xs font-bold tracking-wider uppercase bg-teal-800/30 text-teal-300 mb-5">Ready to Grow?</span>
              <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
                Let's Grow Your<br />
                <span className="text-teal-300">Business Together</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-md mx-auto">
                Partner with PixelMind Solutions to build strategies that drive traffic, qualified leads, and real revenue growth.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button className="bg-gradient-to-r from-teal-600 to-cyan-500 text-white px-9 py-4 rounded-xl font-semibold text-base inline-flex items-center gap-2 hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200">
                  Get Free Consultation <Icons.arrowRight />
                </button>
                <button className="bg-white/10 text-white border border-white/20 px-9 py-4 rounded-xl font-semibold text-base cursor-pointer hover:bg-white/20 transition-all duration-200">
                  Contact Us
                </button>
              </div>
              {/* Trust row */}
              <div className="flex justify-center gap-10 mt-14 flex-wrap">
                {['Free Consultation', 'No Hidden Fees', 'Dedicated Manager'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                    <span className="text-emerald-400 shrink-0"><Icons.check /></span>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
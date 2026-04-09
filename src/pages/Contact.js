import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// ── SVG Icons ─────────────────────────────────────────────────────────────────
const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.43 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 5.55 5.55l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16v.92z" />
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);
const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
const MinusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const SparklesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M12 3l1.09 3.26L16 7.27l-2.91.91L12 12l-1.09-3.82L8 7.27l2.91-.91z" />
    <path d="M19 13l.55 1.64L21 15.5l-1.45.36L19 17.5l-.55-1.64L17 15.5l1.45-.36z" />
  </svg>
);

// ── Shared fade-up variants ───────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ── Section badge ─────────────────────────────────────────────────────────────
function SectionBadge({ children }) {
  return (
    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#004787] text-white border border-[#004787] mb-4">
      {children}
    </span>
  );
}

// ── Form field wrapper ────────────────────────────────────────────────────────
function Field({ label, required, children }) {
  return (
    <div>
      <label className="block text-sm font-bold text-gray-700 mb-2 tracking-wide">
        {label}{required && <span className="text-[#004787] ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  'w-full px-4 py-3 rounded-xl border-2 border-teal-100 bg-gray-50 text-gray-900 text-sm outline-none transition-all duration-200 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 placeholder-gray-400';

// ══════════════════════════════════════════════════════════════════════════════
export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };

  const contactCards = [
    { Icon: MapPinIcon, label: 'Our Office', value: 'Hitech City, Hyderabad, Telangana — 500081', sub: 'India', iconBg: 'bg-[#004787]', iconColor: 'text-[#fff]', href: 'https://maps.google.com' },
    { Icon: PhoneIcon, label: 'Call Us', value: '+91 98765 43210', sub: 'Mon–Sat, 9am–7pm IST', iconBg: 'bg-[#004787]', iconColor: 'text-[#fff]', href: 'tel:+919876543210' },
    { Icon: MailIcon, label: 'Email Us', value: 'info@zentricstech.com', sub: 'Reply within 24 hrs', iconBg: 'bg-[#004787]', iconColor: 'text-[#fff]', href: 'mailto:info@zentricstech.com' },
    { Icon: WhatsAppIcon, label: 'WhatsApp', value: '+91 98765 43210', sub: 'Chat instantly', iconBg: 'bg-[#004787]', iconColor: 'text-[#fff]', href: 'https://wa.me/919876543210' },
  ];

  const faqs = [
    { q: 'How soon can we start working together?', a: 'We onboard new clients within 24–48 hours. Our team schedules a kick-off call, assigns a dedicated manager, and begins strategy development immediately.' },
    { q: 'Do you provide a free consultation?', a: 'Yes! We offer a free 30-minute strategy session where we analyse your digital presence, identify growth opportunities, and recommend the best approach for your goals.' },
    { q: 'What industries do you work with?', a: 'We work across 15+ industries — e-commerce, real estate, healthcare, education, SaaS, retail, restaurants, and professional services. Strategies are tailored to your industry.' },
    { q: 'How do you measure and report results?', a: 'You receive monthly performance reports with clear KPIs — traffic, rankings, leads, conversions, and ROI — plus access to a live dashboard anytime.' },
  ];

  const testimonials = [
    { text: 'PixelMind doubled our organic leads in 3 months. Genuinely the best digital marketing agency in Hyderabad.', name: 'Arun Kapoor', co: 'FinEdge Solutions' },
    { text: 'Professional team, transparent reporting, and real results. Highly recommend for any growing business.', name: 'Kavitha Reddy', co: 'StyleNest Fashion' },
    { text: 'Our website conversions went up 180% after their redesign and SEO work. Outstanding execution!', name: 'Suresh Babu', co: 'TechVault Systems' },
  ];

  const stats = [['50+', 'Happy Clients'], ['100+', 'Projects Done'], ['5+', 'Years in Business'], ['200%', 'Avg. ROI Growth']];

  return (
    <>

      <Helmet>
        <title>About Digital Marketing Agency | Zentricstech Solutions</title>

        <meta
          name="description"
          content="Zentricstech Solutions is a trusted digital marketing agency helping businesses grow with SEO, PPC, and social media strategies."
        />

        <meta
          name="keywords"
          content="digital marketing company, SEO agency Hyderabad, marketing experts"
        />

        <meta property="og:title" content="About Zentricstech Solutions" />
        <meta property="og:description" content="Meet our digital marketing experts and growth strategies." />
        <meta property="og:url" content="https://www.zentricstech.com/about" />
        <meta property="og:image" content="https://www.zentricstech.com/about.jpg" />

        <link rel="canonical" href="https://www.zentricstech.com/about" />
        <meta name="robots" content="index, follow" />
      </Helmet>


      <div className="bg-white text-gray-900 overflow-x-hidden">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-cyan-50 to-gray-50 py-24 lg:py-32">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-teal-400/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Text */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004787] border border-[#004787] text-white text-xs font-bold tracking-widest uppercase mb-6">
                  <SparklesIcon /> Free Consultation Available
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
                  Get In Touch<br />
                  <span className="bg-[#004787] bg-clip-text text-transparent">With Us</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                  Let's discuss how we can help grow your business with digital marketing and web solutions. Looking for a{' '}
                  <strong className="text-[#004787]">digital marketing agency in Hyderabad</strong>? Contact us today.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#004787] text-white font-bold text-sm shadow-lg shadow-teal-500/25 hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200">
                    Get Free Consultation <ArrowRightIcon />
                  </button>
                  <a href="tel:+919876543210"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-[#004787] text-[#004787] font-bold text-sm hover:bg-[#004787] hover:text-white hover:-translate-y-0.5 transition-all duration-200">
                    <PhoneIcon /> Call Now
                  </a>
                </div>
              </motion.div>

              {/* Hero card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:flex justify-center items-center"
              >
                <div className="relative w-80 h-80">
                  {[0, 1, 2].map(i => (
                    <div key={i} className="absolute inset-0 rounded-full border border-teal-400/25 animate-ping"
                      style={{ animationDuration: `${2.5 + i}s`, animationDelay: `${i * 0.6}s` }} />
                  ))}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-teal-500/15 text-center w-52 border border-teal-100">
                      <div className="w-14 h-14 rounded-2xl bg-[#004787] flex items-center justify-center mx-auto mb-4 text-white">
                        <MailIcon />
                      </div>
                      <p className="text-xs font-semibold text-gray-500 mb-1">We reply within</p>
                      <p className="text-3xl font-extrabold text-[#004787]">24hrs</p>
                      <div className="flex justify-center gap-1 mt-3">
                        {[...Array(5)].map((_, j) => <span key={j} className="text-amber-400"><StarIcon /></span>)}
                      </div>
                    </div>
                  </div>
                  {[
                    { label: '📍 Hyderabad', cls: 'top-4 right-0' },
                    { label: '💬 WhatsApp', cls: 'bottom-8 right-4' },
                    { label: '🆓 Free Audit', cls: 'top-16 -left-8' },
                  ].map((chip, i) => (
                    <motion.div key={i}
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
                      className={`absolute ${chip.cls} bg-white text-teal-800 text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-teal-100 whitespace-nowrap`}>
                      {chip.label}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── 2. CONTACT INFO CARDS ────────────────────────────────────────── */}
        <section className="py-20 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <SectionBadge>Contact Information</SectionBadge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Reach Us <span className="bg-[#004787] bg-clip-text text-transparent">Anytime</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map(({ Icon, label, value, sub, iconBg, iconColor, href }, i) => (
              <motion.a key={i} href={href} target="_blank" rel="noopener noreferrer"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="block p-7 bg-white border-2 border-gray-100 rounded-2xl no-underline group hover:-translate-y-1.5 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300">
                <div className={`w-14 h-14 ${iconBg} ${iconColor} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon />
                </div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{label}</p>
                <p className="font-bold text-gray-900 text-sm mb-1 break-words">{value}</p>
                <p className="text-xs text-gray-500">{sub}</p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* ── 3. CONTACT FORM ──────────────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Left copy */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="pt-4">
                <SectionBadge>Send A Message</SectionBadge>
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                  Let's Start a{' '}
                  <span className="bg-[#004787] bg-clip-text text-transparent">Conversation</span>
                </h2>
                <p className="text-base text-gray-600 leading-relaxed mb-8">
                  Fill in the form and our team will get back to you with a{' '}
                  <strong className="text-gray-800">personalised strategy</strong> tailored to your business goals.
                </p>
                <ul className="space-y-4 mb-10">
                  {['Free 30-min strategy session', 'No obligation or hidden fees', 'Dedicated account manager', 'Results in 30 days or we work free'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-[#004787] text-white flex items-center justify-center flex-shrink-0"><CheckIcon /></span>
                      <span className="text-sm font-medium text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-white rounded-2xl p-5 border border-teal-100 shadow-sm">
                  <p className="text-xs text-gray-500 mb-1">⚡ Looking for a</p>
                  <p className="font-bold text-teal-700 text-sm">digital marketing agency in Hyderabad?</p>
                  <p className="text-xs text-gray-500 mt-1">Contact us today — we're right here!</p>
                </div>
              </motion.div>

              {/* Right form */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl shadow-teal-500/10 border border-teal-100">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 rounded-full bg-[#004787] flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">✓</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-6">Thank you for reaching out. We'll get back to you within 24 hours with a personalised plan.</p>
                      <button onClick={() => setSubmitted(false)}
                        className="px-6 py-2.5 rounded-xl bg-[#004787] text-white text-sm font-bold hover:opacity-90 transition-opacity">
                        Send Another
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <Field label="Your Name" required>
                        <input name="name" value={form.name} onChange={handleChange} required placeholder="Ravi Kumar" className={inputCls} />
                      </Field>
                      <div className="grid grid-cols-2 gap-4">
                        <Field label="Phone Number" required>
                          <input name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 98765 43210" className={inputCls} />
                        </Field>
                        <Field label="Email Address" required>
                          <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@company.com" className={inputCls} />
                        </Field>
                      </div>
                      <Field label="Service Required">
                        <select name="service" value={form.service} onChange={handleChange} className={inputCls}>
                          <option value="">Select a service…</option>
                          <option>SEO Services</option>
                          <option>Digital Marketing</option>
                          <option>Web Development</option>
                          <option>App Development</option>
                          <option>Performance Marketing</option>
                          <option>Content Marketing</option>
                          <option>Custom Strategy</option>
                        </select>
                      </Field>
                      <Field label="Message">
                        <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                          placeholder="Tell us about your project and goals…" className={`${inputCls} resize-none`} />
                      </Field>
                      <button type="submit"
                        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#004787] text-white font-bold text-base shadow-lg shadow-teal-500/25 hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200">
                        <SendIcon /> Get Free Consultation
                      </button>
                      <p className="flex items-center justify-center gap-2 text-xs text-gray-500 text-center">
                        <ClockIcon />
                        We will get back to you within <strong className="text-[#004787]">24 hours</strong>.
                      </p>
                    </form>
                  )}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── 4. GOOGLE MAP ────────────────────────────────────────────────── */}
        <section>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center py-16 px-6">
            <SectionBadge>Find Us</SectionBadge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Visit Our <span className="bg-[#004787] bg-clip-text text-transparent">Hyderabad Office</span>
            </h2>
            <p className="text-gray-500 text-sm">Hitech City, Hyderabad — the heart of India's IT capital</p>
          </motion.div>
          <div className="relative overflow-hidden h-96 lg:h-[460px]">
            <iframe
              title="Zentricstech Solutions Office"
              width="100%" height="100%"
              className="border-0 block w-full h-full"
              loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.55686048698!2d78.39158967412615!3d17.480911500106153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc3f9ee6211d7041%3A0x57e8ab2675c2f578!2szentricstech%20PVT.LTD%20-%20Software%20Company%20in%20Hyderabad!5e0!3m2!1sen!2sin!4v1774515986832!5m2!1sen!2sin"
            />
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-xl border border-teal-100 whitespace-nowrap">
              <span className="text-[#004787]"><MapPinIcon /></span>
              <span className="font-bold text-sm text-gray-900">Hitech City, Hyderabad — 500081</span>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                className="ml-2 px-4 py-1.5 rounded-full bg-[#004787] text-white text-xs font-bold hover:opacity-90 transition-opacity no-underline">
                Get Directions
              </a>
            </div>
          </div>
        </section>

        {/* ── 5. FAQ ───────────────────────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
              <SectionBadge>FAQ</SectionBadge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Common <span className="bg-[#004787] bg-clip-text text-transparent">Questions</span>
              </h2>
            </motion.div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                  className={`rounded-2xl border-2 overflow-hidden transition-colors duration-200 ${openFaq === i ? 'border-teal-400 bg-teal-50' : 'border-gray-100 bg-white'}`}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-5 text-left flex items-center gap-4 focus:outline-none">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${openFaq === i ? 'bg-[#004787] text-white' : 'bg-teal-50 text-[#004787]'}`}>
                      {openFaq === i ? <MinusIcon /> : <PlusIcon />}
                    </span>
                    <span className={`font-bold text-base transition-colors duration-200 ${openFaq === i ? 'text-[#004787]' : 'text-gray-900'}`}>
                      {faq.q}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                        <p className="px-6 pb-5 pl-[4.5rem] text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. TRUST ELEMENTS ────────────────────────────────────────────── */}
        <section className="bg-[#f8fafc] py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
              <SectionBadge>Client Love</SectionBadge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                What Our Clients <span className="bg-[#004787] bg-clip-text text-transparent">Say</span>
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {testimonials.map((t, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                  className="bg-white rounded-2xl p-8 border-2 border-teal-100 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => <span key={j} className="text-amber-400"><StarIcon /></span>)}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#004787] text-white flex items-center justify-center text-base font-extrabold flex-shrink-0">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                      <p className="text-gray-500 text-xs">{t.co}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats bar */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}
              className="bg-white rounded-2xl border-2 border-teal-100 px-10 py-8 flex flex-wrap justify-center gap-10 shadow-sm">
              {stats.map(([v, l], i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl font-extrabold bg-[#004787] bg-clip-text text-transparent leading-none mb-1">{v}</p>
                  <p className="text-xs font-medium text-gray-500">{l}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 7. FINAL CTA ─────────────────────────────────────────────────── */}
        <section className="relative bg-slate-900 py-24 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[600px] rounded-full bg-teal-500/10 blur-3xl" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#004787] text-[#fff] border border-teal-500/30 mb-6">
                Ready to Grow?
              </span>
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-5 leading-tight">
                Ready to Grow<br />
                <span className="text-[#004787]">Your Business?</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto mb-10">
                Let's create a strategy that drives real results for your business. No fluff, no guesswork — just measurable growth.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-12">
                <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#fff] text-[#004787] font-bold text-base shadow-lg shadow-teal-500/30 hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200">
                  Get Free Audit <ArrowRightIcon />
                </button>
                <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/20 text-white font-bold text-base hover:border-teal-400 hover:bg-white/5 transition-all duration-200">
                  Contact Us
                </button>
              </div>
              <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/10">
                {['No contracts required', 'Free consultation', '24/7 support'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                    <span className="text-teal-400"><CheckIcon /></span>
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
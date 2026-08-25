import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck, Code, Zap, ArrowRight, Layout, Check, CheckCircle2,
  MessageSquare, Phone, Globe, Server, Star, Sparkles, AlertCircle,
  Loader2, Plus, Minus, ArrowUpRight, Gift
} from 'lucide-react';

export const WebDevelopment = () => {
  // Lead Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    websiteType: 'Business Website',
    timeline: 'Immediately',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // FAQs Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Form Submit Handler
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill out your Name and WhatsApp/Phone Number.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Format details into requirements for the backend API
    const formattedRequirements = `
[Website Offer ₹14,999 Lead]
Business Name: ${formData.businessName || 'Not specified'}
Website Type: ${formData.websiteType}
Timeline: ${formData.timeline}
Custom Requirements/Notes: ${formData.notes || 'None'}
    `.trim();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email || 'no-email@programmingprophet.com');
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('requirements', formattedRequirements);

      const response = await fetch('https://server.programmingprophet.site/api/contact', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Clear form
        setFormData({
          name: '',
          email: '',
          phone: '',
          businessName: '',
          websiteType: 'Business Website',
          timeline: 'Immediately',
          notes: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // WhatsApp click handler
  const handleWhatsAppChat = () => {
    const message = encodeURIComponent(
      `Hi ProgrammingProphet, I saw your ₹14,999 website offer. I want to build a website for my business.`
    );
    window.open(`https://wa.me/917039167905?text=${message}`, '_blank');
  };

  // Custom data arrays
  const features = [
    { title: "Professional Design", desc: "Sleek, bespoke layout tailored to your brand identity." },
    { title: "100% Mobile Responsive", desc: "Flawless performance on mobile, tablet, and desktop." },
    { title: "High-Speed Hosting (1 Year)", desc: "Lightning fast loading speeds on secure servers." },
    { title: "Domain Name (1 Year)", desc: "Your custom address online (.com or .in included)." },
    { title: "SSL Security Certificate", desc: "Encrypts data, keeps users safe, and builds search trust." },
    { title: "WhatsApp Integration", desc: "One-click chat button to let visitors text you directly." },
    { title: "Business Email Setup", desc: "Professional communication using your domain name." },
    { title: "SEO-Optimized Structure", desc: "Built with clean code tags for better Google ranking." },
    { title: "Google Maps & Contact Forms", desc: "Make it easy for local clients to find and query you." },
    { title: "30 Days Free Support", desc: "Post-launch maintenance and support to ensure success." },
  ];

  const targetMarkets = [
    { title: "Startups & Agencies", desc: "Build authority and pitch to investors with a high-end corporate web presence." },
    { title: "Local Businesses", desc: "Be visible on Google when customers search for services in your area." },
    { title: "Retail & Small Shops", desc: "Showcase products online, receive order enquiries directly on WhatsApp." },
    { title: "Service Providers", desc: "For contractors, interior designers, gyms, salons, and workshops." },
    { title: "Consultants & CA", desc: "Share case studies, credentials, and book consulting calls effortlessly." },
  ];

  const steps = [
    { num: "01", title: "Share Your Goals", desc: "Submit our lead form or text us on WhatsApp to discuss your business website needs." },
    { num: "02", title: "Strategic Planning", desc: "We recommend pages, outline content layout, and map out call-to-actions." },
    { num: "03", title: "Design & Build", desc: "Our design team crafts a custom, responsive website using clean coding standards." },
    { num: "04", title: "Client Feedback", desc: "Review the demo, request tweaks, and approve the final layout and content." },
    { num: "05", title: "Launch & Support", desc: "We map your domain, deploy hosting, secure SSL, and support you for 30 days free." },
  ];

  const projects = [
    {
      title: "PCKeyZone - E-Commerce Platform",
      client: "SRaaz Enterprises",
      industry: "E-Commerce / Retail",
      tech: ["Next.js", "TailwindCSS", "Node.js", "MongoDB", "Payment Gateways"],
      image: "/projects/PC-Key-Zone.png",
      desc: "A secure, modern web storefront built to support frictionless software key sales, with responsive search filters and rapid load speeds.",
    },
    {
      title: "Swayam Siddhi College Website",
      client: "SSCMR College",
      industry: "Education / Institute",
      tech: ["Next.js", "TailwindCSS", "TypeScript", "Node.js", "NGINX"],
      image: "/projects/SSCMR_College.png",
      desc: "A premium, accessible portal serving thousands of students and faculty, featuring dynamic news feeds, course guides, and enquiry forms.",
    }
  ];

  const testimonials = [
    {
      name: "PCKeyZone",
      role: "E-Commerce Platform",
      text: "Developing a modern, user-friendly website for PCKeyZone that looks impressive & has significantly improved our online presence and customer engagement.",
      image: "/testimonials/PCKeyZone.png"
    },
    {
      name: "SSCMR College",
      role: "Educational Institution",
      text: "The team at ProgrammingProphet built a professional and responsive website for SSCMR College that truly reflects our academic excellence and values.",
      image: "/testimonials/SSCMR-College.png"
    },
    {
      name: "WeMurz Services",
      role: "IT Service & Consulting",
      text: "ProgrammingProphet created a fast, clean, and easy-to-manage website for WeMurz Services that has helped us reach and support more clients online.",
      image: "/testimonials/wemore-logo.png"
    },
  ];

  const faqData = [
    {
      q: "What is included in the ₹14,999 website offer?",
      a: "You get a complete, professional, responsive website (5-7 pages), 1-year free domain name (.com or .in), 1-year high-speed hosting, free SSL security certificate, WhatsApp chat integration, a custom contact/enquiry form, and 1 professional business email."
    },
    {
      q: "Are there any hidden charges?",
      a: "Absolutely none. The ₹14,999 pricing covers everything listed for the first year. There are no monthly fees."
    },
    {
      q: "What is the renewal pricing after 1 year?",
      a: "The renewal cost for domain + hosting is approximately ₹3,500 - ₹4,500 per year (subject to standard registrar prices). You are not tied into any expensive software lock-ins."
    },
    {
      q: "How long does it take to launch the website?",
      a: "Typically, it takes 7 to 10 working days once we receive all your business content, logo, text, and images."
    },
    // {
    //   q: "Can I update the website content myself?",
    //   a: "Yes, we design the site with standard modular components, and we will provide a brief walkthrough so you or your team can edit text, change pricing, and add services easily."
    // },
    {
      q: "Can I upgrade to an E-commerce website later?",
      a: "Absolutely. You can start with our Starter package to establish your online presence and upgrade to a full e-commerce storefront or add custom features as your business grows."
    },
    {
      q: "Who owns the domain and website files?",
      a: "You own 100% of the domain and files. We will transfer full credentials or set them up in your name so you retain full control."
    },
    {
      q: "What if I don't have a logo or professional photos?",
      a: "Don't worry! We can design a basic professional text logo and source premium, royalty-free stock images matching your industry to build a premium look."
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-blue-600/30 overflow-x-hidden relative">

      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/10 blur-[130px]  pointer-events-none z-0" />
      <div className="absolute top-[1200px] right-0 w-[500px] h-[500px] bg-[#1d4ed8]/5 blur-[120px]  pointer-events-none z-0" />
      <div className="absolute bottom-[800px] left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px]  pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-xs uppercase tracking-wider ">
              <Sparkles size={14} className="animate-pulse" /> Limited Time Independence Offer
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-heading">
              Professional Business Website for Just <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">₹14,999</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl">
              Establish a premium online identity. Get a modern, mobile-friendly, Google-optimized website designed to showcase your services and generate incoming customer leads.
            </p>

            {/* Offer Callouts */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 bg-slate-900/60 border border-slate-800/80 px-4 py-3 ">
                <Globe className="text-blue-400 w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-semibold text-slate-200">1-Year Domain Name Included</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/60 border border-slate-800/80 px-4 py-3 ">
                <Server className="text-blue-400 w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-semibold text-slate-200">1-Year Cloud Hosting Included</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/60 border border-slate-800/80 px-4 py-3 ">
                <ShieldCheck className="text-blue-400 w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-semibold text-slate-200">Free SSL Security Setup</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/60 border border-slate-800/80 px-4 py-3 ">
                <MessageSquare className="text-blue-400 w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-semibold text-slate-200">WhatsApp Chat Integration</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* <a
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] group  text-center"
              >
                Get My Website
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a> */}
              <button
                onClick={handleWhatsAppChat}
                className="inline-flex items-center justify-center gap-2 bg-[#128c7e]/15 border border-[#128c7e]/30 hover:bg-[#128c7e]/25 text-[#25d366] font-bold px-8 py-4 transition-all duration-300  text-center"
              >
                <Phone className="w-5 h-5 fill-current" />
                WhatsApp an Expert
              </button>
            </div>

            {/* Small note */}
            <p className="text-xs text-slate-500 font-medium">
              * Perfect for: Local Businesses • Startups • Retail Shops • Contractors • Consultants
            </p>
          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Visual representation card */}
            <div className="relative w-full max-w-[420px] bg-[#0a0f1c]/90 border border-slate-800/80  p-6 shadow-2xl backdrop-blur-md">
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-xs font-bold px-3 py-1.5  shadow-lg flex items-center gap-1.5 uppercase rounded">
                <Gift size={18} className=" text-slate-950" /> Free Domain & Hosting
              </div>

              <div className="space-y-4">
                <div className="border-b border-slate-800/80 pb-4">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Gyanti Enterprises Presents</span>
                  <h3 className="text-xl font-bold text-white mt-1">Website Starter</h3>
                  <p className="text-sm text-slate-400 mt-1">Complete digital launching package.</p>
                </div>

                <div className="space-y-3 py-2">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-300">5-7 Dynamic Pages (Home, About, Services, Contact, etc.)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-300">Google Map & Contact Forms integration</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-300">1 Professional Business Email setup</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-300">Fast & Modern React framework build</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-300">30 Days Post-Launch Maintenance Support</span>
                  </div>
                </div>

                <div className="bg-[#0f172a]  p-4 border border-slate-800 text-center">
                  <div className="text-slate-400 text-xs font-semibold uppercase">Pricing Package</div>
                  <div className="text-3xl font-extrabold text-white mt-1">₹14,999</div>
                  <div className="text-[11px] text-slate-500 mt-1">First year complete. Standard annual renewals.</div>
                </div>

                <a
                  href="#get-started"
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4  transition-colors"
                >
                  Book My Website Now
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Feature Icons Row */}
      <section className="py-8 bg-[#0a0f1c]/80 border-y border-slate-800/60 z-10 relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              { label: "Modern Layouts", icon: <Layout size={20} className="text-blue-500" /> },
              { label: "Mobile Responsive", icon: <Code size={20} className="text-blue-500" /> },
              { label: "Google Optimized", icon: <Sparkles size={20} className="text-blue-500" /> },
              { label: "Fast Loading Pages", icon: <Zap size={20} className="text-blue-500" /> },
              { label: "Secure & Reliable", icon: <ShieldCheck size={20} className="text-blue-500" /> },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center gap-2 p-3">
                <div className="w-10 h-10 bg-slate-950/80 border border-slate-800 flex items-center justify-center ">
                  {item.icon}
                </div>
                <span className="text-xs md:text-sm font-semibold text-slate-300">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Detail Grid */}
      <section className="py-20 max-w-[1400px] mx-auto px-6 lg:px-12 z-10 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white font-heading">
            What You Get in Our ₹14,999 Website Package
          </h2>
          <p className="text-slate-400 mt-4 leading-relaxed">
            Everything you need to introduce your brand, reach target customers online, and kickstart commercial sales. No hidden setup costs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#0a0f1c]/50 border border-slate-800/80  hover:border-blue-500/30 transition-all duration-300 flex items-start gap-4 group"
            >
              <div className="w-9 h-9 bg-slate-900 border border-slate-800  flex items-center justify-center text-blue-500 group-hover:border-blue-500 group-hover:text-blue-400 flex-shrink-0 transition-colors">
                <Check size={18} />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1.5">{feat.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-20 bg-[#0a0f1c]/40 border-y border-slate-800/50 z-10 relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white font-heading leading-tight">
                Designed to Match Your Specific Industry
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Whether you run a local workshop, a coaching hub, or supply products to other companies, a professional website gives your clients confidence that you are reliable.
              </p>
              <p className="text-slate-400 leading-relaxed">
                We design and layout content targeted to your unique target audience, steering them cleanly toward placing enquiries.
              </p>
              <div className="pt-2">
                <a
                  href="#get-started"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3  transition-colors"
                >
                  Start My Design
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {targetMarkets.map((market, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#0a0f1c]/80 border border-slate-800/60 hover:border-slate-800  transition-colors flex items-start gap-4"
                >
                  <div className="text-blue-400 mt-1 flex-shrink-0">
                    <CheckCircle2 size={18} className="fill-blue-500/10 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-md font-bold text-white mb-1">{market.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{market.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Before vs After Section */}
      <section className="py-20 max-w-[1400px] mx-auto px-6 lg:px-12 z-10 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white font-heading">
            Focus on Business Outcomes
          </h2>
          <p className="text-slate-400 mt-4 leading-relaxed">
            A website shouldn't just exist. It must serve as an active partner that attracts users, answers inquiries, and schedules calls.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Without website */}
          <div className="p-8 bg-[#0a0f1c]/30 border border-red-500/15  space-y-5">
            <h3 className="text-xl font-bold text-red-400 flex items-center gap-2 border-b border-slate-800 pb-3">
              <span>Without a Professional Website</span>
            </h3>
            <ul className="space-y-3.5">
              {[
                "Prospects search Google and can't easily find your brand.",
                "Sharing generic social media profiles makes your business look casual.",
                "Explaining pricing and capabilities over phone calls wastes manual hours.",
                "Missed phone calls mean immediate lost enquiries to local competitors.",
                "Outdated or slow-loading websites drive modern mobile users away."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-400">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* With ProgrammingProphet */}
          <div className="p-8 bg-[#0a0f1c]/90 border border-emerald-500/20  space-y-5 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-2xl " />
            <h3 className="text-xl font-bold text-emerald-400 flex items-center gap-2 border-b border-slate-800 pb-3">
              <span>With a ProgrammingProphet Website</span>
            </h3>
            <ul className="space-y-3.5">
              {[
                "Appear on Google Search results for relevant services in your area.",
                "Build confidence and establish a strong, premium online reputation.",
                "Showcase testimonials, real client works, and details in one portal.",
                "Automatic form captures and WhatsApp triggers run 24/7.",
                "Lightning fast performance keeps visitors engaged and converting."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-[#0a0f1c]/30 border-y border-slate-800/50 z-10 relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-heading">
              Our Step-by-Step Launch Process
            </h2>
            <p className="text-slate-400 mt-4">
              We make the development lifecycle simple and transparent, getting your business live on Google without complex tech jargon.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="p-6 bg-[#0a0f1c]/90 border border-slate-800  relative space-y-3 flex flex-col h-full hover:border-blue-500/20 transition-all">
                <div className="text-4xl font-black text-blue-500/20 select-none absolute top-4 right-4 leading-none">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-white pr-6">{step.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed flex-grow">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Development Projects Showcase */}
      <section className="py-20 max-w-[1400px] mx-auto px-6 lg:px-12 z-10 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white font-heading">
            Web Solutions We Have Built
          </h2>
          <p className="text-slate-400 mt-4 leading-relaxed">
            Take a look at real-world projects we've engineered. We apply the same level of attention to design, speed, and mobile usability to every site we build.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-[#0a0f1c]/80 border border-slate-800  overflow-hidden shadow-2xl flex flex-col h-full hover:border-slate-800 transition-all group"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-slate-900 border-b border-slate-800">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to abstract mock background if images fail to load
                    (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 to-transparent pointer-events-none" />
              </div>

              {/* Project Metadata */}
              <div className="p-6 space-y-4 flex flex-col flex-grow">
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wide">
                    <span>{proj.industry}</span>
                    <span>Client: {proj.client}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1 group-hover:text-blue-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                    {proj.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="text-[11px] font-semibold bg-slate-900 border border-slate-800/80 px-2 py-0.5 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#0a0f1c]/40 border-y border-slate-800/50 z-10 relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-heading">
              Client Success Stories
            </h2>
            <p className="text-slate-400 mt-4">
              Here is what business owners and institutional leaders say about partnering with ProgrammingProphet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#0a0f1c]/90 border border-slate-800/80  space-y-4 flex flex-col justify-between hover:border-slate-800 transition-all"
              >
                <div className="space-y-3">
                  {/* Rating */}
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed italic">
                    "{t.text}"
                  </p>
                </div>

                {/* Profile info */}
                <div className="flex items-center gap-3 pt-3 border-t border-slate-900">
                  <div className="w-8 h-8  overflow-hidden bg-slate-800 border border-slate-700 flex-shrink-0 flex items-center justify-center font-bold text-xs text-blue-400">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages Section */}
      <section className="py-20 max-w-[1400px] mx-auto px-6 lg:px-12 z-10 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white font-heading">
            Transparent Pricing Plans
          </h2>
          <p className="text-slate-400 mt-4 leading-relaxed">
            Select the launch package that fits your business scale. All packages are built with clean code, secure SSL, and responsive mobile architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">

          {/* Plan 1: Starter */}
          <div className="bg-[#0a0f1c]/90 border border-slate-800  p-6 relative flex flex-col justify-between h-full hover:border-slate-800 transition-all">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider bg-blue-500/10 px-2 py-0.5 ">Promo Offer</span>
                <h3 className="text-xl font-bold text-white mt-2">Starter Website</h3>
                <p className="text-xs text-slate-400 mt-1">Perfect for basic online business visibility.</p>
              </div>

              <div className="border-y border-slate-800 py-4">
                <div className="text-3xl font-extrabold text-white">₹14,999</div>
                <div className="text-[11px] text-slate-500 mt-0.5">First year cost (Includes Domain + Hosting)</div>
              </div>

              <ul className="space-y-2.5">
                {[
                  "5 to 7 responsive pages",
                  "1 Year Free Domain (.com/.in)",
                  "1 Year High-Speed Web Hosting",
                  "Free SSL Security Certificate",
                  "WhatsApp Enquiry button",
                  "1 Business Email Setup",
                  "Google Maps integration",
                  "30 Days Post-Launch Support",
                  "No Hidden Charges"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <Check size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <a
                href="#get-started"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5  transition-colors text-sm"
              >
                Choose Starter
              </a>
            </div>
          </div>

          {/* Plan 2: Business (Recommended) */}
          <div className="bg-[#0a0f1c]/95 border-2 border-blue-500  p-6 relative flex flex-col justify-between h-full shadow-2xl scale-102">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1  uppercase tracking-wider">
              Most Popular
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider bg-blue-500/10 px-2 py-0.5 ">Advanced Growth</span>
                <h3 className="text-xl font-bold text-white mt-2">Professional Business</h3>
                <p className="text-xs text-slate-400 mt-1">Best for established brands seeking leads.</p>
              </div>

              <div className="border-y border-slate-800 py-4">
                <div className="text-3xl font-extrabold text-white">₹24,999 - ₹34,999</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Flexible scope tailored to requirements.</div>
              </div>

              <ul className="space-y-2.5">
                {[
                  "10 to 15 responsive pages",
                  "Everything in Starter included",
                  "Custom Bespoke UI/UX Design",
                  "Advanced On-page SEO setup",
                  "Multiple Lead Capture Forms",
                  "Social media feeds integration",
                  "Premium Speed Optimization",
                  "60 Days Post-Launch Support",
                  "Domain & Hosting Transfer"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-200">
                    <Check size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <a
                href="#get-started"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5  transition-colors text-sm"
              >
                Choose Professional
              </a>
            </div>
          </div>

          {/* Plan 3: Custom E-Commerce */}
          <div className="bg-[#0a0f1c]/90 border border-slate-800  p-6 relative flex flex-col justify-between h-full hover:border-slate-800 transition-all">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider bg-blue-500/10 px-2 py-0.5 ">Storefront</span>
                <h3 className="text-xl font-bold text-white mt-2">Growth E-Commerce</h3>
                <p className="text-xs text-slate-400 mt-1">For retailers who want to sell products online.</p>
              </div>

              <div className="border-y border-slate-800 py-4">
                <div className="text-3xl font-extrabold text-white">₹49,999+</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Custom scoping based on catalog size.</div>
              </div>

              <ul className="space-y-2.5">
                {[
                  "Unlimited product catalog structure",
                  "Shopping Cart & Checkout module",
                  "Razorpay / Stripe Payments setup",
                  "Admin Dashboard for order management",
                  "Customer account registrations",
                  "Stock inventory alert systems",
                  "Automated Email PDF invoices",
                  "90 Days Dedicated Tech Support",
                  "Full control & admin guides"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <Check size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <a
                href="#get-started"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white font-bold py-2.5  transition-colors text-sm"
              >
                Choose E-Commerce
              </a>
            </div>
          </div>

        </div>

        {/* Small Disclaimer */}
        <p className="text-center text-xs text-slate-500 mt-8 max-w-md mx-auto">
          * Final pricing packages may vary based on exact functional specifications, API requirements, and content volumes.
        </p>
      </section>

      {/* Qualification Lead Form Section */}
      <section id="get-started" className="py-20 bg-[#0a0f1c]/80 border-y border-slate-800/60 z-10 relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Form Intro Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 text-blue-400 text-xs font-bold uppercase tracking-wider bg-blue-500/10 px-3 py-1 ">
                <Gift size={12} /> Claim Promo Package
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white font-heading">
                Let's Launch Your Website
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Tell us about your business, the type of website you need, and your target timeline. Our team will contact you within 24 hours to recommend the perfect structure.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8  bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-sm font-semibold text-slate-300">No obligation initial consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8  bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-sm font-semibold text-slate-300">Detailed proposal & live examples list</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8  bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-sm font-semibold text-slate-300">Direct phone/WhatsApp followups</span>
                </div>
              </div>
            </div>

            {/* Actual Form Panel */}
            <div className="lg:col-span-7 bg-[#030712] border border-slate-800/80  p-8 shadow-2xl relative">
              <AnimatePresence mode="wait">
                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10 space-y-6"
                  >
                    <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400  flex items-center justify-center mx-auto">
                      <CheckCircle2 size={36} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                      <p className="text-slate-400 text-sm max-w-md mx-auto">
                        Your inquiry has been successfully recorded. Our Business Development Executive will review your specs and contact you within 24 hours.
                      </p>
                    </div>
                    <div className="pt-4 border-t border-slate-900">
                      <p className="text-xs text-slate-500 mb-3 font-semibold">Want to speed up the process?</p>
                      <button
                        onClick={handleWhatsAppChat}
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-bold px-6 py-3  transition-colors"
                      >
                        <MessageSquare className="w-5 h-5 fill-current" />
                        Chat on WhatsApp Now
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-400 uppercase">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Amit Kumar"
                          className="w-full bg-[#0a0f1c] border border-slate-800 focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/30 text-white  px-4 py-2.5 text-sm outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-400 uppercase">Business Name</label>
                        <input
                          type="text"
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          placeholder="e.g. Kumar & Sons Retail"
                          className="w-full bg-[#0a0f1c] border border-slate-800 focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/30 text-white  px-4 py-2.5 text-sm outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-400 uppercase">WhatsApp / Phone *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 7039167905"
                          className="w-full bg-[#0a0f1c] border border-slate-800 focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/30 text-white  px-4 py-2.5 text-sm outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-400 uppercase">Email Address</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. amit@gmail.com"
                          className="w-full bg-[#0a0f1c] border border-slate-800 focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/30 text-white  px-4 py-2.5 text-sm outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-400 uppercase">Website Category</label>
                        <select
                          value={formData.websiteType}
                          onChange={(e) => setFormData({ ...formData, websiteType: e.target.value })}
                          className="w-full bg-[#0a0f1c] border border-slate-800 focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/30 text-white  px-4 py-2.5 text-sm outline-none transition-all"
                        >
                          <option>Business Website</option>
                          <option>E-commerce Storefront</option>
                          <option>Professional Portfolio</option>
                          <option>Consulting / Booking Website</option>
                          <option>Retail Shop Catalog</option>
                          <option>Not Sure / Other</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-400 uppercase">Required Timeline</label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full bg-[#0a0f1c] border border-slate-800 focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/30 text-white  px-4 py-2.5 text-sm outline-none transition-all"
                        >
                          <option>Immediately</option>
                          <option>Within 1 Month</option>
                          <option>Within 2-3 Months</option>
                          <option>Just Planning / Custom</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-400 uppercase">Specific Requirements / Notes</label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Tell us a little bit about what your company does and any specific pages/features you'd like..."
                        className="w-full bg-[#0a0f1c] border border-slate-800 focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/30 text-white  px-4 py-2 text-sm outline-none resize-none transition-all"
                      />
                    </div>

                    {submitStatus === 'error' && (
                      <div className="flex items-center gap-2 text-red-400 text-xs font-medium bg-red-500/5 border border-red-500/10 p-2.5 ">
                        <AlertCircle size={14} />
                        <span>Form submission error. Please try again or click the WhatsApp button directly.</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white font-bold py-3 px-4  transition-colors"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" /> Submitting Request...
                        </>
                      ) : (
                        <>
                          Start My Website Project <ArrowUpRight size={16} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="py-20 max-w-[1400px] mx-auto px-6 lg:px-12 z-10 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 mt-4">
            Answers to common objections and concerns about our pricing, renewals, and features.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#0a0f1c]/70 border border-slate-800/80  overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left text-white font-bold hover:bg-slate-900/50 transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-blue-500 flex-shrink-0">
                  {openFaq === idx ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="p-5 pt-0 text-sm text-slate-400 leading-relaxed border-t border-slate-900 bg-slate-950/20">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Technology Stack Info (SEO-friendly, at bottom) */}
      <section className="py-16 bg-[#030712] border-t border-slate-800/50 text-slate-400 z-10 relative">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Our Engineering Stack</h3>
            <h2 className="text-2xl font-bold text-white font-heading">Advanced Scalable Web Technologies</h2>
            <p className="text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Although we package our offers for local business outcomes, under the hood we leverage modern software practices. We build with React and NextJS framework layers, optimize CSS scripts, implement clean git workflows, and deploy through secure, high-uptime cloud pipelines.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs font-semibold text-slate-500">
            <span>REACT DEVELOPMENT</span>
            <span>•</span>
            <span>NEXTJS STRUCTURES</span>
            <span>•</span>
            <span>TAILWIND STYLING</span>
            <span>•</span>
            <span>NODEJS BACKENDS</span>
            <span>•</span>
            <span>DOCKER CONTAINERS</span>
            <span>•</span>
            <span>MONGODB & SQL DATA</span>
            <span>•</span>
            <span>AWS SECURE HOSTING</span>
          </div>
        </div>
      </section>

      {/* Sticky Mobile WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50 lg:hidden">
        <button
          onClick={handleWhatsAppChat}
          className="w-14 h-14 bg-[#25D366] text-slate-950  flex items-center justify-center shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:bg-[#20ba5a] active:scale-95 transition-all"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-7 h-7 fill-current" />
        </button>
      </div>

    </div>
  );
};

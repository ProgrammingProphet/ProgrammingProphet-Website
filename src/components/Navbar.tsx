import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
const NAV_LINKS: { name: string; href: string; hasDropdown?: boolean; openInNewTab?: boolean }[] = [
  // { name: 'Tech Stack', href: '/#tech-stack', hasDropdown: true },
  { name: 'Home', href: '/#home', hasDropdown: false },
  { name: 'Services', href: '/#services', hasDropdown: false },
  // { name: 'Industries', href: '#', hasDropdown: true },
  // { name: 'Insights', href: '#', hasDropdown: true },
  { name: 'Projects', href: '/#projects', hasDropdown: false },
  { name: 'Testimonials', href: '/#testimonials', hasDropdown: false },

  { name: 'About us', href: '/about/', },

  // { name: 'Careers', href: '/careers', openInNewTab: true },
];

const TECH_STACK_DATA = {
  'Front-end': [
    { title: 'Front-end Development', desc: 'Helping you with complex front-end tasks' },
    { title: 'Angular', desc: 'Building scalable, enterprise-grade web applications' },
    { title: 'React / Next.js', desc: 'Powering dynamic and robust front-end solutions' },
    { title: 'Vue', desc: 'Building reactive and user-friendly applications' },
  ],
  'Back-end': [
    { title: 'Back-end Development', desc: 'Building secure and robust server-side architectures' },
    { title: 'Node.js', desc: 'High-performance, event-driven backend systems' },
    { title: 'Python', desc: 'Scalable data processing and backend services' },
    { title: 'Java', desc: 'Enterprise-grade backend applications' },
  ],
  'Cloud Engineering': [
    { title: 'AWS / Azure / GCP', desc: 'Multi Cloud Services' },
    { title: 'Cloud Architecture / Deployment', desc: 'Helping you with complex cloud architecture and deployment tasks' },
    { title: 'Cloud Cost Optimization', desc: 'Reduce your cloud cost by using optimized cloud solutions' },
    { title: 'Cloud Solutions', desc: 'Custom cloud solutions for your business' },

  ]
};

// {
//   title: 'Cloud Engineering',
//   subServices: ['AWS / Azure / GCP', 'Cloud Architecture / Deployment ', "Cost Optimization", 'Cloud Solutions',],
//   icon: Cloud,
//   stats: '$2M+ Cloud Costs Saved',
//   color: 'from-cyan-500 to-blue-400',
//   textColor: 'text-cyan-400',
//   bgIcon: 'text-cyan-500'
// }



export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeTechCategory, setActiveTechCategory] = useState<keyof typeof TECH_STACK_DATA>('Front-end');

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const wasMobileMenuOpen = isMobileMenuOpen;
    setIsMobileMenuOpen(false);

    if (href.startsWith('/#')) {
      const currentPath = window.location.pathname;
      if (currentPath === '/' || currentPath === '/index.html' || currentPath === '') {
        e.preventDefault();
        const targetId = href.replace('/#', '');
        const element = document.getElementById(targetId);
        if (element) {
          const offset = window.innerWidth >= 1024 ? 80 : 64;
          const top = element.getBoundingClientRect().top + window.scrollY - offset;
          if (wasMobileMenuOpen) {
            setTimeout(() => {
              window.scrollTo({ top, behavior: 'smooth' });
            }, 100);
          } else {
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }
      } else {
        // Let it do a full page navigation to the home page with the hash
      }
    } else if (href.startsWith('/')) {
      // For MPA routes, let the browser navigate normally
    }
  };

  useEffect(() => {
    // Scroll to hash on initial load if it exists
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          const offset = window.innerWidth >= 1024 ? 80 : 64;
          const top = element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-white ${isScrolled ? 'shadow-md border-b border-gray-200' : 'border-b border-gray-100'}`}>
      <div className="mx-auto lg:max-w-[1400px] px-4 lg:px-8">
        <div className="flex items-center justify-between lg:h-[80px] h-[64px]">

          {/* Logo (Left) */}
          <a
            href="/"
            className="flex items-center group cursor-pointer shrink-0"
            onClick={(e) => {
              const currentPath = window.location.pathname;
              if (currentPath === '/' || currentPath === '/index.html' || currentPath === '') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <img src="/logo-light.png" alt="ProgrammingProphet Logo" className="h-11 lg:h-12 w-auto object-contain mix-blend-multiply" />

            <div className="flex ">
              <span className="text-xl font-bold text-slate-900 tracking-tight leading-tight">Programming</span><span className="text-xl font-bold text-blue-600 tracking-tight leading-tight">Prophet</span>
            </div>
          </a>

          {/* Desktop Links (Center) */}
          <div className="hidden lg:flex items-center justify-center flex-1 ml-4 h-full relative" onMouseLeave={() => setActiveMenu(null)}>
            <div className="flex items-center gap-6 xl:gap-8 h-full">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.name}
                  // ${activeMenu === link.name ? 'border-b-4 border-blue-600' : ''}
                  className={`h-full flex items-center `}
                  onMouseEnter={() => setActiveMenu(link.name)}
                >
                  <a
                    href={link.href}
                    target={link.openInNewTab ? "_blank" : undefined}
                    rel={link.openInNewTab ? "noopener noreferrer" : undefined}
                    onClick={(e) => link.openInNewTab ? null : handleNavClick(e, link.href)}
                    className={`text-base font-semibold transition-colors flex items-center gap-1 ${activeMenu === link.name ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600 '}`}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown size={14} className={`mt-[2px] transition-transform ${activeMenu === link.name ? 'rotate-180 text-blue-600' : 'opacity-70'}`} />
                    )}
                  </a>
                </div>
              ))}
            </div>

            {/* Mega Menu Dropdown */}
            <AnimatePresence>
              {activeMenu === 'Tech Stack' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-[80px] left-1/2 -translate-x-1/2 w-screen max-w-[1410px] bg-white shadow-2xl border-t border-gray-200 flex z-50  overflow-hidden"
                >
                  {/* Left Sidebar */}

                  <div className="w-[280px] bg-gray-50 flex flex-col py-6">
                    {(Object.keys(TECH_STACK_DATA) as Array<keyof typeof TECH_STACK_DATA>).map((category) => (
                      <button
                        key={category}
                        onMouseEnter={() => setActiveTechCategory(category)}
                        // shadow-[inset_4px_0_0_0_#2563eb]
                        className={`flex items-center  justify-between px-8 py-4 text-left font-semibold transition-colors ${activeTechCategory === category
                          ? 'text-blue-600 bg-gray-100 '
                          : 'text-slate-700 hover:bg-gray-100 hover:text-blue-600'
                          }`}
                      >
                        {category}
                        <ChevronDown size={14} className="-rotate-90 opacity-50" />
                      </button>
                    ))}
                  </div>

                  {/* Right Content */}
                  <div className="flex-1 p-10 bg-white">
                    <div className="grid grid-cols-3 gap-x-8 gap-y-10">
                      {TECH_STACK_DATA[activeTechCategory].map((item, idx) => (
                        <div key={idx} className="flex flex-col gap-2 group cursor-pointer">
                          <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop Actions (Right) */}
          <div className="hidden lg:flex items-center gap-4 ml-auto">
            {/* <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-slate-600 hover:bg-gray-50 transition-colors">
              <Search size={18} />
            </button> */}

            <a href="/website-offer/" className="text-blue-600 font-semibold px-4 py-2.5 text-[14px] transition-colors flex items-center gap-2 hover:bg-blue-50 border border-blue-200">
              ₹14,999 Website Offer
            </a>
            <a href="/contact/" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5  text-[14px] transition-colors flex items-center gap-2">
              Contact us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center  lg:hidden ml-auto">
            <button
              aria-label="Toggle Mobile Menu"
              className="p-2  text-slate-900 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 border-b border-gray-200 bg-white shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="flex flex-col p-6 gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.openInNewTab ? "_blank" : undefined}
                  rel={link.openInNewTab ? "noopener noreferrer" : undefined}
                  onClick={(e) => {
                    if (link.openInNewTab) {
                      setIsMobileMenuOpen(false);
                    } else {
                      handleNavClick(e, link.href);
                    }
                  }}
                  className="text-lg font-semibold text-slate-700 hover:text-blue-600 transition-colors flex items-center justify-between"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={18} className="opacity-70" />}
                </a>
              ))}
              <div className="h-[1px] bg-gray-100 my-2"></div>
              <a href="/website-offer/" onClick={() => setIsMobileMenuOpen(false)} className="text-blue-600 font-semibold px-6 py-3 text-center transition-colors w-full flex items-center justify-center gap-2 border border-blue-200">
                ₹14,999 Website Offer
              </a>
              <a href="/contact/" onClick={() => setIsMobileMenuOpen(false)} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3  text-center transition-colors w-full flex items-center justify-center gap-2">
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

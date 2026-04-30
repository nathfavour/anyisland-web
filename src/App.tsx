import { 
  Monitor, 
  Smartphone, 
  Glasses, 
  Lock, 
  Share2, 
  Cpu, 
  Terminal, 
  ChevronRight, 
  Globe, 
  Github, 
  Twitter, 
  Disc,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 5 L95 38 L78 92 L22 92 L5 38 L50 5Z" fill="#22C55E" />
    <path d="M50 35 L75 78 L25 78 Z" fill="#000000" />
  </svg>
);

const IconButton = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <button className={`hover:text-primary-green transition-colors cursor-pointer ${className}`}>
    {children}
  </button>
);

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <Logo className="w-10 h-10 transition-transform duration-500 group-hover:rotate-12" />
          <span className="text-xl font-display font-extrabold tracking-tighter uppercase">Anyisland</span>
        </div>
        
        <div className="hidden md:flex space-x-10 text-sm font-medium text-gray-400">
          <a href="#features" className="hover:text-primary-green transition-colors">Features</a>
          <a href="#platforms" className="hover:text-primary-green transition-colors">Ecosystem</a>
          <a href="#developers" className="hover:text-primary-green transition-colors">Developers</a>
        </div>

        <button className="bg-primary-green text-black px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]">
          Launch App
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-primary-green/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-deep-ash border border-white/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full animate-pulse bg-primary-green" />
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Proving Digital Sovereignty</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-8xl font-display font-extrabold leading-[1.1] tracking-tight mb-8 text-gradient"
        >
          The Universal App Store <br />
          <span className="text-primary-green">Owned By You.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed"
        >
          A decentralized ecosystem built for every screen. Android, Linux, or Smart Glasses—experience software without intermediaries, censorship, or gatekeepers.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <button className="bg-primary-green text-black px-10 py-5 rounded-2xl font-bold text-lg hover:brightness-110 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all flex items-center group">
            Start Exploring
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="bg-deep-ash border border-white/10 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/5 transition-all">
            Read Whitepaper
          </button>
        </motion.div>

        {/* Floating cards visual */}
        <div className="relative w-full max-w-5xl mx-auto h-[450px] md:h-[600px] mt-20">
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-full md:w-5/6 max-w-3xl aspect-[16/10] bg-[#0A0A0A] rounded-3xl border border-white/10 green-glow overflow-hidden z-20 shadow-2xl"
          >
            {/* Window Header */}
            <div className="w-full h-10 bg-black/60 border-b border-white/5 flex items-center px-4 space-x-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
              <div className="flex-1 flex justify-center">
                <div className="h-4 w-32 bg-white/5 rounded-full" />
              </div>
            </div>

            {/* App Store Mock Content */}
            <div className="p-4 md:p-8 h-full">
              <div className="grid grid-cols-12 gap-6 h-full">
                {/* Sidebar */}
                <div className="hidden md:block col-span-3 space-y-4">
                  <div className="h-4 w-full bg-white/10 rounded-lg" />
                  <div className="h-4 w-3/4 bg-white/5 rounded-lg" />
                  <div className="h-4 w-5/6 bg-white/5 rounded-lg" />
                  <div className="pt-8 h-4 w-1/2 bg-white/10 rounded-lg" />
                  <div className="h-4 w-full bg-white/5 rounded-lg" />
                </div>
                
                {/* Main Content */}
                <div className="col-span-12 md:col-span-9 space-y-6">
                  <div className="flex items-center justify-between mb-8">
                     <div className="h-8 w-40 bg-white/10 rounded-xl" />
                     <div className="h-8 w-8 bg-primary-green/20 rounded-lg border border-primary-green/20" />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                      <div key={i} className="aspect-square bg-white/5 border border-white/5 rounded-2xl flex flex-col p-4 justify-between">
                         <div className="w-8 h-8 rounded-lg bg-white/10" />
                         <div className="space-y-2">
                            <div className="h-2 w-full bg-white/10 rounded" />
                            <div className="h-2 w-2/3 bg-white/5 rounded" />
                         </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Device indicators */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center space-x-8 z-30 bg-black/40 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-2xl hidden md:flex font-mono text-[10px] tracking-widest text-gray-500 uppercase">
             <div className="flex items-center space-x-2">
                <Smartphone className="w-3 h-3 text-primary-green" />
                <span>Mobile</span>
             </div>
             <div className="w-1 h-1 rounded-full bg-white/20" />
             <div className="flex items-center space-x-2">
                <Monitor className="w-3 h-3 text-primary-green" />
                <span>Desktop</span>
             </div>
             <div className="w-1 h-1 rounded-full bg-white/20" />
             <div className="flex items-center space-x-2 text-white">
                <Glasses className="w-3 h-3 text-primary-green" />
                <span>Bionic Glasses</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PlatformsSet = () => {
  const platforms = [
    { name: 'Android', icon: Smartphone, color: 'text-green-400' },
    { name: 'iOS', icon: Smartphone, color: 'text-blue-400' },
    { name: 'Windows', icon: Monitor, color: 'text-sky-400' },
    { name: 'macOS', icon: Monitor, color: 'text-gray-200' },
    { name: 'Linux', icon: Terminal, color: 'text-yellow-400' },
    { name: 'Smart Glasses', icon: Glasses, color: 'text-primary-green' }
  ];

  return (
    <section id="platforms" className="py-24 bg-deep-ash/20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-primary-green uppercase tracking-[0.3em] mb-4">Universal Compatibility</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold">Six Platforms. <br className="md:hidden" /> One Network.</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {platforms.map((platform, idx) => (
            <motion.div 
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, borderColor: 'rgba(34, 197, 94, 0.4)' }}
              className="group bg-deep-ash/50 border border-white/5 p-8 rounded-3xl text-center transition-all cursor-default"
            >
              <platform.icon className={`w-8 h-8 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 ${platform.color}`} />
              <p className="font-semibold text-gray-300 group-hover:text-white transition-colors">{platform.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group p-10 rounded-[32px] bg-deep-ash border border-white/5 hover:border-primary-green/20 hover:bg-black/40 transition-all duration-300"
  >
    <div className="w-14 h-14 rounded-2xl bg-primary-green/5 flex items-center justify-center mb-8 border border-primary-green/10 group-hover:bg-primary-green/10 transition-colors">
      <Icon className="w-7 h-7 text-primary-green" />
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
      {description}
    </p>
  </motion.div>
);

const Features = () => (
  <section id="features" className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-end mb-24">
        <div>
          <h2 className="text-xs font-bold text-primary-green uppercase tracking-[0.3em] mb-4">Infrastructure</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold">Decentralization <br /> Built for Mass Adoption.</h3>
        </div>
        <p className="text-gray-400 text-lg max-w-md">
          Anyisland removes the middleman, ensuring your apps are always available, private, and censorship-resistant.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={Lock}
          title="Zero Censorship"
          description="Distributed storage nodes ensure that apps can never be de-platformed. Your software remains your choice, forever."
          delay={0.1}
        />
        <FeatureCard 
          icon={Share2}
          title="P2P Distribution"
          description="Downloads leverage peer-to-peer protocols, providing unmatched speed and redundancy across global edge nodes."
          delay={0.2}
        />
        <FeatureCard 
          icon={ShieldCheck}
          title="Protocol Security"
          description="Automated security audits are enforced at the smart-contract level. Trust code, not corporations."
          delay={0.3}
        />
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto relative overflow-hidden bg-primary-green rounded-[48px] p-12 md:p-24 text-center">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-black/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-white/10 blur-[80px] rounded-full pointer-events-none" />

      <h2 className="text-black text-4xl md:text-7xl font-display font-extrabold mb-8 tracking-tighter">
        Join the <br className="md:hidden" /> Sovereign Web.
      </h2>
      <p className="text-black/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
        Over 500,000 developers and users are already reclaiming their digital freedom on Anyisland.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <button className="bg-black text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 active:scale-95 transition-transform">
          Download Installer
        </button>
        <button className="bg-white text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 active:scale-95 transition-transform flex items-center">
          For Developers
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 border-t border-white/5 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-3 mb-6">
            <Logo className="w-8 h-8" />
            <span className="text-xl font-display font-extrabold tracking-tighter uppercase">Anyisland</span>
          </div>
          <p className="text-gray-500 max-w-xs leading-relaxed">
            The world's first universal, decentralized app marketplace for the next generation of computing.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-300">Protocol</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><a href="#" className="hover:text-primary-green transition">Governance</a></li>
            <li><a href="#" className="hover:text-primary-green transition">Security Rules</a></li>
            <li><a href="#" className="hover:text-primary-green transition">Whitepaper</a></li>
            <li><a href="#" className="hover:text-primary-green transition">Tokenomics</a></li>
          </ul>
        </div>

        <div>
           <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-300">Connect</h4>
           <div className="flex space-x-4">
              <IconButton><Github className="w-5 h-5" /></IconButton>
              <IconButton><Twitter className="w-5 h-5" /></IconButton>
              <IconButton><Disc className="w-5 h-5" /></IconButton>
              <IconButton><Globe className="w-5 h-5" /></IconButton>
           </div>
        </div>
      </div>

      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600 text-[10px] uppercase tracking-widest font-bold">
        <p>© 2024 Anyisland Network. No Rights Reserved. It's yours.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-primary-green transition">Privacy</a>
          <a href="#" className="hover:text-primary-green transition">Terms</a>
          <a href="#" className="hover:text-primary-green transition">Status</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <PlatformsSet />
      <Features />
      
      {/* Mid-section detail */}
      <section className="py-20 flex justify-center">
         <div className="flex items-center space-x-4">
            <div className="w-12 h-px bg-white/10" />
            <Layers className="w-6 h-6 text-primary-green opacity-30" />
            <div className="w-12 h-px bg-white/10" />
         </div>
      </section>

      <FeaturesSectionExtended />
      <CTASection />
      <Footer />
    </div>
  );
}

const FeaturesSectionExtended = () => (
  <section className="py-24 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="bg-deep-ash rounded-[40px] border border-white/5 p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <div className="w-16 h-16 rounded-2xl bg-primary-green/5 flex items-center justify-center mb-8 border border-primary-green/10">
            <Cpu className="w-8 h-8 text-primary-green" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Optimized for Next-Gen Hardware</h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            From smart glasses to neural links, Anyisland's runtime is built for the post-mobile era. Efficient, lightweight, and truly universal.
          </p>
          <ul className="space-y-4">
            {[
              "0.5ms Execution Latency",
              "Sub-50MB Runtime Footprint",
              "Native ARM & x86 support",
              "Real-time Spatial OS Integration"
            ].map(item => (
              <li key={item} className="flex items-center text-sm font-semibold text-gray-300">
                <ChevronRight className="w-4 h-4 text-primary-green mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-1/2 relative">
           <div className="absolute inset-0 bg-primary-green/10 blur-3xl rounded-full" />
           <div className="relative bg-black/40 border border-white/5 p-8 rounded-3xl backdrop-blur-3xl">
              <pre className="text-xs md:text-sm font-mono text-primary-green/80 overflow-hidden">
                <code>{`// Initializing Anyisland Runtime
import { Runtime } from "@anyisland/core";

const island = new Runtime({
  decentralized: true,
  p2p: "edge-optimized",
  security: "smart-audit"
});

await island.deploy("my-universal-app");
// Deployment successful on all 6 nodes.`}</code>
              </pre>
           </div>
        </div>
      </div>
    </div>
  </section>
);

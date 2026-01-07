import { GlitchHero } from './components/GlitchHero';
import { ProductShowcase } from './components/ProductShowcase';
import { SystemFooter } from './components/SystemFooter';
import { AlertOctagon, ShoppingBag, Menu } from 'lucide-react';
import { Button } from './components/ui/button';
import { ExplodingButton } from './components/ExplodingButton';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-red-600 selection:text-white overflow-x-hidden">
      {/* Brutalist Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b-2 border-white flex justify-between items-center px-4 md:px-8 h-16">
        <div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
          <AlertOctagon className="text-red-600" />
          <span>Tril$oft</span>
        </div>
        
        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#AVAILABLE_ASSETS" className="hover:text-red-500 hover:underline decoration-2 underline-offset-4 transition-all">
            [ SHOP ]
          </a>
          <a href="#ABOUT" className="hover:text-red-500 hover:underline decoration-2 underline-offset-4 transition-all">
            [ ABOUT ]
          </a>

        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hover:bg-white hover:text-black rounded-none">
            <ShoppingBag />
            <span className="sr-only">Cart</span>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden hover:bg-white hover:text-black rounded-none">
            <Menu />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        <GlitchHero />
        
        <div className="border-b-4 border-white bg-red-600 text-white overflow-hidden py-2 whitespace-nowrap">
          <div className="animate-marquee inline-block">
            <span className="mx-4 text-lg font-bold">WARNING: HIGH LEVELS OF IRONY DETECTED // OPTIMIZED FOR FAILURE // CELEBRATE THE CRASH // </span>
            <span className="mx-4 text-lg font-bold">WARNING: HIGH LEVELS OF IRONY DETECTED // OPTIMIZED FOR FAILURE // CELEBRATE THE CRASH // </span>
            <span className="mx-4 text-lg font-bold">WARNING: HIGH LEVELS OF IRONY DETECTED // OPTIMIZED FOR FAILURE // CELEBRATE THE CRASH // </span>
            <span className="mx-4 text-lg font-bold">WARNING: HIGH LEVELS OF IRONY DETECTED // OPTIMIZED FOR FAILURE // CELEBRATE THE CRASH // </span>
          </div>
        </div>

        <ProductShowcase />

        {/* Philosophy Section */}
        <section id="ABOUT" className="bg-white text-black py-20 px-6 border-b-4 border-black">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl md:text-7xl font-bold uppercase leading-none tracking-tighter">
              It's Not a Bug,<br/>It's a Feature.
            </h2>
            <p className="text-lg md:text-xl font-mono max-w-2xl mx-auto leading-relaxed border-l-4 border-black pl-6 text-left">
              We pay tribute to the confident hallucinations, the spectacular logic breaks, and the beautiful mess of artificial intelligence trying its best. Wear the glitch.
            </p>
            <div className="pt-8">
              <ExplodingButton className="bg-black text-white hover:bg-red-600 hover:scale-105 transition-all rounded-none text-xl px-8 py-6 font-bold border-4 border-transparent hover:border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none translate-x-0 hover:translate-x-2 hover:translate-y-2">
                JOIN THE BETA_TEST
              </ExplodingButton>
            </div>
          </div>
        </section>
      </main>

      <SystemFooter />

      {/* Global CSS for Marquee and Blink */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .blink-animation {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </div>
  );
}

export default App;

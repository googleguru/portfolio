
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToResearch = () => {
    document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#f8f9fa] -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-background/0 -z-10"></div>
      
      <div className="content-container grid md:grid-cols-5 gap-8 items-center py-16">
        <div className="md:col-span-3 space-y-6 animate-fade-in">
          <div className="flex items-center space-x-3">
            <div className="h-px w-8 bg-primary/30"></div>
            <span className="text-sm uppercase tracking-wider text-primary/70 font-medium">
              Assistant Professor
            </span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-balance">
            Dr. Pavithra Guru R
          </h1>
          
          <h2 className="font-serif text-xl sm:text-2xl text-primary/80 italic">
            Department of Computing Technology
          </h2>
          
          <p className="text-lg text-primary/80 max-w-xl leading-relaxed">
            A highly dedicated professional with extensive knowledge in teaching ML, DL, and algorithms, exploring the intersection of artificial intelligence and VLSI design to create innovative technological solutions.
          </p>
          
          <div className="pt-4 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center px-6 py-3 rounded border border-primary/90 bg-primary text-white transition-colors hover:bg-primary/90">
              Contact Me
            </a>
            <a href="#publications" className="inline-flex items-center px-6 py-3 rounded border border-primary/20 bg-transparent text-primary hover:bg-primary/5 transition-colors">
              View Publications
            </a>
          </div>
        </div>
        
        <div className="md:col-span-2 animate-fade-in animation-delay-200">
          <div className="relative aspect-[3/4] rounded-lg shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
            <img
              src="/lovable-uploads/81c93b1f-361d-42b7-9035-39c5210f51bc.png"
              alt="Dr. Pavithra Guru R"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToResearch}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center border border-primary/20 text-primary/60 hover:text-primary hover:border-primary/50 transition-colors"
        aria-label="Scroll to research section"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;

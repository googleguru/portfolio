
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="content-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-serif text-xl">Dr. Pavithra Guru R</h3>
            <p className="text-white/70 mt-1">Assistant Professor</p>
          </div>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="h-px w-full bg-white/20 my-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} Dr. Pavithra Guru R. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Department of Computing Technology, SRM Institute of Science Technology</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

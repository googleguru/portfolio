
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    // Get all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    // Add click event listener to each anchor link
    anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the target section
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetSection = document.querySelector(targetId);
        if (!targetSection) return;
        
        // Scroll to the target section with smooth behavior
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
    
    return () => {
      // Clean up event listeners
      anchorLinks.forEach(link => {
        link.removeEventListener('click', function() {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Research />
        <Publications />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

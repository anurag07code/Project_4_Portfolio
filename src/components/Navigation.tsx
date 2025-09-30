import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" }
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };
  
  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-lg shadow-card' 
            : 'bg-transparent'
        }`}
      >
        <div className="container px-4">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => scrollToSection('#home')}
              className="text-xl font-bold text-gradient"
            >
              AS
            </button>
            
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.href)}
                  className="transition-smooth hover:text-primary"
                >
                  {item.label}
                </Button>
              ))}
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </nav>
      
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="absolute inset-0 bg-background/95 backdrop-blur-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative h-full flex flex-col items-center justify-center gap-4 animate-fade-in">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                size="lg"
                onClick={() => scrollToSection(item.href)}
                className="text-lg transition-smooth hover:text-primary"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;

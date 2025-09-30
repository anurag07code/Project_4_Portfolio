import { Button } from "@/components/ui/button";
import { Mail, FileText, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-10 dark:opacity-20" />
      
      <div className="container px-4 relative z-10 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full overflow-hidden ring-2 ring-primary/30 shadow-lg">
            <img
              src={`${import.meta.env.BASE_URL}picture/pic(530-680).jpg`}
              alt="Profile"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium tracking-wider uppercase text-muted-foreground">
              AI Researcher & Physics Graduate
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Anurag S S
            </h1>
            <div className="text-xl md:text-2xl text-gradient font-semibold">
              Bridging Physics & Machine Learning
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            M.Tech student in AI with a passion for connecting quantum mechanics, 
            statistical physics, and deep learning to build smarter AI systems.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="shadow-glow transition-smooth hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="transition-smooth hover:scale-105"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FileText className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-4 pt-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

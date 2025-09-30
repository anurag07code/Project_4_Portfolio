import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 gradient-subtle">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or research ideas. 
              Feel free to reach out!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 shadow-card transition-smooth hover:shadow-glow hover:scale-[1.02] animate-slide-in">
              <a 
                href="mailto:anurag.cs24@duk.ac.in" 
                className="flex items-start gap-4 group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary transition-smooth">
                  <Mail className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-smooth" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-primary transition-smooth">
                    anurag.cs24@duk.ac.in
                  </p>
                </div>
              </a>
            </Card>
            
            <Card className="p-6 shadow-card transition-smooth hover:shadow-glow hover:scale-[1.02] animate-slide-in">
              <a 
                href="tel:+918592869903" 
                className="flex items-start gap-4 group"
              >
                <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent transition-smooth">
                  <Phone className="h-6 w-6 text-accent group-hover:text-accent-foreground transition-smooth" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-accent transition-smooth">
                    +91 8592869903
                  </p>
                </div>
              </a>
            </Card>
            
            <Card className="p-6 shadow-card transition-smooth hover:shadow-glow hover:scale-[1.02] animate-slide-in md:col-span-2">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-sm text-muted-foreground">
                    Thiruvananthapuram, Kerala, India
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="text-center space-y-6 pt-8">
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="transition-smooth hover:scale-105"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="transition-smooth hover:scale-105"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { Card } from "@/components/ui/card";
import { Brain, Atom, Code } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 gradient-subtle">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-slide-in">
              <p className="text-lg leading-relaxed text-muted-foreground">
                After completing my B.Sc and M.Sc in Physics, I shifted my focus to 
                Artificial Intelligence and am now pursuing an M.Tech in AI at Kerala 
                University of Digital Sciences, Innovation and Technology.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm especially interested in connecting physics with machine learning—like 
                applying differential equations and ideas from statistical mechanics to 
                improve AI models. My goal is to build smarter and more reliable AI systems 
                by combining insights from both fields.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">9.2</div>
                  <div className="text-sm text-muted-foreground">CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">3271</div>
                  <div className="text-sm text-muted-foreground">GATE AIR</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">4+</div>
                  <div className="text-sm text-muted-foreground">Languages</div>
                </div>
              </div>
            </div>
            
            <div className="grid gap-4 animate-fade-in">
              <Card className="p-6 shadow-card transition-smooth hover:shadow-glow hover:scale-105 border-l-4 border-l-primary">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Artificial Intelligence</h3>
                    <p className="text-sm text-muted-foreground">
                      Deep Learning, Reinforcement Learning, NLP, Computer Vision, and Generative AI
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 shadow-card transition-smooth hover:shadow-glow hover:scale-105 border-l-4 border-l-accent">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Atom className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Quantum Computing</h3>
                    <p className="text-sm text-muted-foreground">
                      Quantum Algorithms, Quantum Machine Learning, and applications in AI
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 shadow-card transition-smooth hover:shadow-glow hover:scale-105 border-l-4 border-l-primary">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Full-Stack Development</h3>
                    <p className="text-sm text-muted-foreground">
                      Next.js, Flask, Django, and modern web technologies
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

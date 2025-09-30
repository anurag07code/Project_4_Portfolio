import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Brain, Database, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "C++", "LaTeX"]
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      "PyTorch", "TensorFlow", "Machine Learning", "Deep Learning",
      "Reinforcement Learning", "NLP", "LLM", "Generative AI",
      "Computer Vision", "Image Classification", "Object Detection",
      "Segmentation", "OCR", "ANN", "CNN", "RNN"
    ]
  },
  {
    title: "Quantum Computing",
    icon: Cpu,
    skills: ["Quantum Algorithms", "Quantum Machine Learning", "PennyLane", "Qiskit"]
  },
  {
    title: "Web Development & Databases",
    icon: Database,
    skills: ["Flask", "Django", "Next.js", "Supabase", "MySQL", "PostgreSQL"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 gradient-subtle">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 shadow-card transition-smooth hover:shadow-glow hover:scale-[1.02] animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary" 
                          className="text-xs transition-smooth hover:bg-primary hover:text-primary-foreground"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
          
          <Card className="p-6 shadow-card animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <Brain className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Languages</h3>
                <p className="text-muted-foreground">
                  English • Hindi • Malayalam • Tamil
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;

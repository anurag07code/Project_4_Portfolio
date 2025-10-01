import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 gradient-subtle">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>
          
          <Card className="p-8 shadow-card transition-smooth hover:shadow-glow animate-slide-in border-l-4 border-l-primary">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <img src="/picture/Logo_of_University_of_Kerala.png" alt="University of Kerala" className="h-10 w-10 object-contain" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold">Researcher (Master's Thesis Work)</h3>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Department of Physics, University of Kerala
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      December 2022 – September 2023
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 pl-16">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground leading-relaxed">
                    Conducted research on atmospheric ozone layers as part of M.Sc. thesis work
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground leading-relaxed">
                    Analyzed vertical ozone distribution using ozonesonde data and developed statistical models
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground leading-relaxed">
                    Presented findings at the 60th Indian Geophysical Union Annual Convention (IGU 2023)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground leading-relaxed">
                    Conducted literature reviews to support atmospheric research and model development
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground leading-relaxed">
                    Assisted in data collection and analysis using tools like Python, Origin, and statistical software
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-card transition-smooth hover:shadow-glow animate-slide-in border-l-4 border-l-primary/70" style={{ animationDelay: "0.05s" }}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <img src="/picture/tcs logo.jpg" alt="TCS" className="h-10 w-10 object-contain" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold">AI Engineer Intern</h3>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Trivandrum, Kerala, India · Hybrid
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Sep 2025 – Present
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Tata Consultancy Services · Internship</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-card transition-smooth hover:shadow-glow animate-slide-in border-l-4 border-l-accent" style={{ animationDelay: "0.1s" }}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <img src="/picture/mozilla logo.png" alt="Mozilla" className="h-10 w-10 object-contain" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold">Student Ambassador</h3>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      —
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Aug 2025 – Present
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Mozilla · Part-time</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;

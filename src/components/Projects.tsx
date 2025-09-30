import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Lightbulb, FileText, Atom } from "lucide-react";

const projects = [
  {
    title: "Smart Street Light Complaint Registration Portal",
    description: "A multi-portal web application developed as part of the DACE initiative to streamline public issue reporting and resolution for smart street lighting infrastructure.",
    icon: Lightbulb,
    iconColor: "text-accent",
    highlights: [
      "Built full-stack web app with three role-based portals: User, Vendor, and Admin",
      "Implemented seamless flow across all portals to track complaints and updates in real time",
      "Used Supabase for authentication, real-time database operations, and role-based access control",
      "Deployed and hosted the application using Vercel with CI/CD support"
    ],
    technologies: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel"]
  },
  {
    title: "PDF Parsing Web Application",
    description: "A web-based tool designed to extract readable text from both standard and scanned PDFs using a combination of text and image parsing techniques.",
    icon: FileText,
    iconColor: "text-primary",
    highlights: [
      "Developed Flask-based web application for text extraction from PDFs",
      "Integrated Apache Tika for native text extraction",
      "Implemented Tesseract OCR for handling scanned documents",
      "Created intuitive interface for seamless document processing"
    ],
    technologies: ["Flask", "Apache Tika", "Tesseract OCR", "Python"]
  },
  {
    title: "Image Processing Using Quanvolutional Neural Networks",
    description: "Investigated the application of quantum-inspired convolution layers in image classification, demonstrating better efficiency compared to classical CNNs.",
    icon: Atom,
    iconColor: "text-accent",
    highlights: [
      "Implemented quantum-inspired neural networks for image recognition tasks",
      "Compared performance with traditional convolutional neural networks",
      "Achieved better F1 scores with quantum convolution layers",
      "Developed as term paper project in Quantum Computation course"
    ],
    technologies: ["Python", "TensorFlow", "PennyLane", "Qiskit"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-1 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 shadow-card transition-smooth hover:shadow-glow hover:scale-[1.02] animate-slide-in border-l-4 border-l-primary"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className={`h-8 w-8 ${project.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 pl-16">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 pl-16">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

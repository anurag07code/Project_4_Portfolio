import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "M.Tech in Computer Science & Engineering",
    specialization: "Artificial Intelligence",
    institution: "Kerala University of Digital Sciences, Innovation and Technology",
    period: "2024 - 2026 (Pursuing)",
    grade: "CGPA: 9.2 (Semester 1)",
    current: true
  },
  {
    degree: "M.Sc in Physics",
    institution: "University of Kerala",
    period: "2021 - 2023",
    grade: "83%",
    current: false
  },
  {
    degree: "B.Sc in Physics",
    institution: "University of Kerala",
    period: "2018 - 2021",
    grade: "CGPA: 8.89/10.0",
    current: false
  },
  {
    degree: "Plus Two (Biology Science) — 93.3%",
    institution: "GHSS Kilimanoor, Thiruvananthapuram, Kerala, India",
    period: "2016 - 2018",
    grade: "Directorate of Higher Secondary Education (DHSE)",
    current: false
  },
  {
    degree: "SSLC — 95%",
    institution: "GHSS Kilimanoor, Thiruvananthapuram, Kerala, India",
    period: "2015 - 2016",
    grade: "Kerala Board of Public Examinations (KBPE)",
    current: false
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>
          
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <Card 
                key={index} 
                className={`p-6 shadow-card transition-smooth hover:shadow-glow hover:scale-[1.02] animate-slide-in ${
                  edu.current ? 'border-l-4 border-l-primary bg-primary/5' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`p-3 rounded-lg ${edu.current ? 'bg-primary/10' : 'bg-muted'}`}>
                      <GraduationCap className={`h-6 w-6 ${edu.current ? 'text-primary' : 'text-muted-foreground'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div>
                          <h3 className="font-semibold text-lg">{edu.degree}</h3>
                          {edu.specialization && (
                            <p className="text-sm text-primary font-medium">{edu.specialization}</p>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </div>
                      </div>
                      <p className="text-muted-foreground mt-2">{edu.institution}</p>
                      <p className="text-sm font-medium text-primary mt-2">{edu.grade}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

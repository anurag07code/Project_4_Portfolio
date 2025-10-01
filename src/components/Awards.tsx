import { Card } from "@/components/ui/card";
import { Trophy, Award, Presentation } from "lucide-react";

const achievements = [
  {
    title: "Young Innovators Program (YIP) 7.0 – K-DISC",
    date: "June 2025",
    icon: () => null,
    description: "Preliminary Round Winner: Selected for the ideation stage for the proposal CareerMap Kerala: A Smart Career Pathway Explorer for Technical Students, which introduced a gamified mobile/web platform that maps students' skills, interests, and qualifications to career paths."
  },
  {
    title: "Graduate Aptitude Test in Engineering (GATE)",
    date: "February 2024",
    icon: () => null,
    description: "Qualified GATE 2024 in Physics with an All India Rank (AIR) of 3271, eligible for M.Tech admissions in premier Indian institutes."
  },
  {
    title: "60th Indian Geophysical Union Annual Convention",
    date: "November 22-24, 2023",
    icon: () => null,
    description: "Presented oral presentation titled: 'Study of Vertical Distribution of Ozone Using Ozonesonde' at CUSAT, Kochi. Conference theme: Advances in Geosciences with Special Reference to Coastal Hazards."
  }
];

const Awards = () => {
  return (
    <section id="awards" className="py-20">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">Awards & Achievements</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>
          
          <div className="space-y-6">
            {achievements.map((achievement, index) => {
              return (
                <Card 
                  key={index} 
                  className="p-6 shadow-card transition-smooth hover:shadow-glow hover:scale-[1.02] animate-slide-in border-l-4 border-l-accent"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/10">
                      {index === 0 && (
                        <img src="/picture/YIP logo.png" alt="YIP" className="h-10 w-10 object-contain" />
                      )}
                      {index === 1 && (
                        <img src="/picture/Gate logo.webp" alt="GATE" className="h-10 w-10 object-contain" />
                      )}
                      {index === 2 && (
                        <img src="/picture/IGU logo.jpeg" alt="IGU" className="h-10 w-10 object-contain" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-lg">{achievement.title}</h3>
                        <span className="text-sm text-muted-foreground">{achievement.date}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
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

export default Awards;

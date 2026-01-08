
import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import ScrollReveal from '@/components/ScrollReveal';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, University, BookOpen } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  performance: string;
  description: string[];
  icon: 'graduation-cap' | 'university' | 'book-open';
  color: string;
}

const EducationSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const education: Education[] = [
    {
      id: 1,
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'N.K.Orchid College of Engg. & Tech.',
      location: 'Solapur, Maharashtra',
      period: '2022 - 2026',
      performance: 'GPA: 7.80/10.0',
      description: [
        'Specialized in core Computer Science topics such as data analytics, databases, and software engineering',
        'Engaged in projects and coursework focusing on system design and development',
        'Actively involved in tech-related workshops and events',
      ],
      icon: 'graduation-cap',
      color: '#8B5CF6',
    },
    {
      id: 2,
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Walchand College of Arts and Science',
      location: 'Solapur, Maharashtra',
      period: '2020 - 2022',
      performance: 'Percentage: 60%',
      description: [
        'Specialized in Science stream with focus on Mathematics and Physics',
        'Gained a solid foundation in analytical and problem-solving skills'
      ],
      icon: 'university',
      color: '#6E59A5',
    },    
    {
      id: 3,
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Indian Model School',
      location: 'Akkalkot, Maharashtra',
      period: '2019 - 2020',
      performance: 'Percentage: 90%',
      description: [
        'Focused on core subjects including Mathematics, Science, and English',
      ],
      icon: 'book-open',
      color: '#9b87f5',
    },    
  ];

  const getIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case 'graduation-cap':
        return <GraduationCap size={24} className={`text-[${color}]`} />;
      case 'university':
        return <University size={24} className={`text-[${color}]`} />;
      case 'book-open':
        return <BookOpen size={24} className={`text-[${color}]`} />;
      default:
        return <GraduationCap size={24} className={`text-[${color}]`} />;
    }
  };

  return (
    <section id="education" className="bg-background section-padding relative overflow-hidden">
      <div className="container-wide">
        <ScrollReveal>
          <SectionHeading
            title="Education"
            subtitle="Academic journey and achievements"
          />
        </ScrollReveal>

        <div className="relative">
          <ScrollArea className="w-full pb-8">
            <div className="flex space-x-6 px-4 pb-4 min-w-max">
              {education.map((edu, index) => (
                <ScrollReveal
                  key={edu.id}
                  animation="fade-in-right"
                  delay={index * 200}
                  className="w-[350px] shrink-0"
                >
                  <Card
                    className={cn(
                      "border border-border hover:border-primary/50 h-[400px] transition-all duration-500 ease-in-out overflow-hidden",
                      activeCard === edu.id ? "shadow-lg shadow-primary/20" : ""
                    )}
                    style={{
                      transformStyle: 'preserve-3d',
                      perspective: '1000px'
                    }}
                    onMouseEnter={() => setActiveCard(edu.id)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    <CardHeader className="relative p-6 bg-gradient-to-br from-muted/30 to-muted/10 border-b border-border">
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-muted/70 flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                        {getIcon(edu.icon, edu.color)}
                      </div>
                      <h3 className="text-xl font-semibold font-heading mb-1 pr-12 text-card-foreground">{edu.degree}</h3>
                      <p className="text-secondary text-sm">{edu.institution}, {edu.location}</p>
                      <div className="flex items-center justify-between mt-3">
                        <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary text-xs">
                          {edu.period}
                        </Badge>
                        <p className="font-medium text-primary text-sm">{edu.performance}</p>
                      </div>
                    </CardHeader>
                    <CardContent className={cn(
                      "p-6 transform transition-all duration-500 ease-in-out",
                      activeCard === edu.id ? "translate-y-0 opacity-100" : "translate-y-4 opacity-80"
                    )}>
                      <ul className="list-disc pl-5 space-y-2 text-secondary text-sm">
                        {edu.description.map((item, idx) => (
                          <li key={idx} className="text-card-foreground">{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </ScrollArea>

          {/* Scroll indicators */}
          <div className="hidden md:flex justify-center mt-6 space-x-2">
            <span className="text-secondary text-sm">Scroll horizontally</span>
            <div className="flex items-center space-x-1">
              <span className="w-8 h-[2px] bg-border rounded animate-pulse"></span>
              <span className="w-4 h-[2px] bg-border rounded animate-pulse" style={{ animationDelay: "0.2s" }}></span>
              <span className="w-2 h-[2px] bg-border rounded animate-pulse" style={{ animationDelay: "0.4s" }}></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

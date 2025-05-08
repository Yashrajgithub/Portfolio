
import { useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import SectionHeading from '@/components/SectionHeading';
import ScrollReveal from '@/components/ScrollReveal';

interface Technology {
  name: string;
  icon: string;
  category: string;
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

const TechStackSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const technologies: Technology[] = [
    // Frontend
    { name: 'HTML5', icon: '🌐', category: 'frontend', proficiency: 'expert' },
    { name: 'CSS3', icon: '🎨', category: 'frontend', proficiency: 'expert' },
    { name: 'JavaScript', icon: '📜', category: 'frontend', proficiency: 'expert' },
    { name: 'TypeScript', icon: '🔷', category: 'frontend', proficiency: 'advanced' },
    { name: 'React', icon: '⚛️', category: 'frontend', proficiency: 'expert' },
    { name: 'TailwindCSS', icon: '🌊', category: 'frontend', proficiency: 'advanced' },
    
    // Backend
    { name: 'Node.js', icon: '🟢', category: 'backend', proficiency: 'advanced' },
    { name: 'Express', icon: '🚂', category: 'backend', proficiency: 'advanced' },
    { name: 'Flask', icon: '🧪', category: 'backend', proficiency: 'beginner' },
    { name: 'PHP', icon: '🐘', category: 'backend', proficiency: 'intermediate' },
    
    // Database
    { name: 'MongoDB', icon: '🍃', category: 'database', proficiency: 'advanced' },
    { name: 'MySQL', icon: '🐬', category: 'database', proficiency: 'advanced' },
    { name: 'PostgreSQL', icon: '🐘', category: 'database', proficiency: 'intermediate' },
    { name: 'Firebase', icon: '🔥', category: 'database', proficiency: 'advanced' },
    
    // DevOps
    { name: 'Git', icon: '📝', category: 'devops', proficiency: 'advanced' },
    { name: 'Docker', icon: '🐳', category: 'devops', proficiency: 'beginner' },
    { name: 'Google Cloud', icon: '☁️', category: 'devops', proficiency: 'advanced' },
    { name: 'CI/CD', icon: '🔄', category: 'devops', proficiency: 'intermediate' },
    { name: 'Linux', icon: '🐧', category: 'devops', proficiency: 'advanced' },
    
    // Tools
    { name: 'Figma', icon: '🎨', category: 'tools', proficiency: 'advanced' },
    { name: 'Adobe XD', icon: '✒️', category: 'tools', proficiency: 'intermediate' },
    { name: 'VS Code', icon: '📝', category: 'tools', proficiency: 'expert' },
    { name: 'Postman', icon: '📮', category: 'tools', proficiency: 'advanced' },
  ];
  
  const filteredTechnologies = activeCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
    { id: 'devops', name: 'DevOps' },
    { id: 'tools', name: 'Tools' },
  ];
  
  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'beginner':
        return 'bg-blue-500';
      case 'intermediate':
        return 'bg-green-500';
      case 'advanced':
        return 'bg-yellow-500';
      case 'expert':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section id="techstack" className="section-padding">
      <div className="container-wide">
        <ScrollReveal>
          <SectionHeading
            title="Tech Stack"
            subtitle="Technologies I work with"
          />
        </ScrollReveal>
        
        <ScrollReveal animation="fade-in-up" delay={100}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-muted hover:bg-muted/80 text-secondary hover:text-foreground'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {filteredTechnologies.map((tech, index) => (
            <ScrollReveal
              key={tech.name}
              animation="fade-in-up"
              delay={100 + index * 30}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="card-hover bg-card rounded-lg p-4 flex flex-col items-center justify-center text-center h-32 relative">
                      <div className={`absolute top-2 right-2 h-3 w-3 rounded-full ${getProficiencyColor(tech.proficiency)}`}></div>
                      <div className="text-4xl mb-2">{tech.icon}</div>
                      <h3 className="font-medium text-sm">{tech.name}</h3>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <div className="text-center">
                      <p className="font-medium">{tech.name}</p>
                      <p className="text-xs capitalize">{tech.proficiency}</p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </ScrollReveal>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-8 bg-card rounded-lg p-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-blue-500"></span>
              <span className="text-sm">Beginner</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
              <span className="text-sm">Intermediate</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
              <span className="text-sm">Advanced</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500"></span>
              <span className="text-sm">Expert</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;

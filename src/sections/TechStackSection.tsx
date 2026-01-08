import { useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import SectionHeading from '@/components/SectionHeading';
import ScrollReveal from '@/components/ScrollReveal';

interface Technology {
  name: string;
  icon: string;
  category:
    | 'programming'
    | 'web'
    | 'database'
    | 'data'
    | 'cloud'
    | 'other';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

const TechStackSection = () => {
  const [activeCategory, setActiveCategory] = useState<
    | 'all'
    | 'programming'
    | 'web'
    | 'database'
    | 'data'
    | 'cloud'
    | 'other'
  >('all');

  const technologies: Technology[] = [
    // Programming Languages
    { name: 'Python', icon: '🐍', category: 'programming', proficiency: 'advanced' },
    { name: 'Java', icon: '☕', category: 'programming', proficiency: 'intermediate' },
    { name: 'C', icon: '💻', category: 'programming', proficiency: 'intermediate' },

    // Web Technologies
    { name: 'HTML5', icon: '🌐', category: 'web', proficiency: 'expert' },
    { name: 'CSS3', icon: '🎨', category: 'web', proficiency: 'expert' },
    { name: 'JavaScript', icon: '📜', category: 'web', proficiency: 'advanced' },
    { name: 'MERN Stack', icon: '⚛️', category: 'web', proficiency: 'advanced' },

    // Databases
    { name: 'MySQL', icon: '🐬', category: 'database', proficiency: 'advanced' },
    { name: 'MongoDB', icon: '🍃', category: 'database', proficiency: 'advanced' },

    // Data & Analysis Tools
    { name: 'Excel', icon: '📊', category: 'data', proficiency: 'advanced' },
    { name: 'Power BI', icon: '📈', category: 'data', proficiency: 'advanced' },
    { name: 'Tableau', icon: '📉', category: 'data', proficiency: 'advanced' },
    { name: 'Power Query', icon: '🔍', category: 'data', proficiency: 'intermediate' },

    // Cloud
    { name: 'Google Cloud Platform (GCP)', icon: '☁️', category: 'cloud', proficiency: 'intermediate' },
    { name: 'AWS', icon: '🌩️', category: 'cloud', proficiency: 'beginner' },

    // Others
    { name: 'Git', icon: '📝', category: 'other', proficiency: 'advanced' },
    { name: 'Linux', icon: '🐧', category: 'other', proficiency: 'advanced' },
    { name: 'Windows', icon: '🪟', category: 'other', proficiency: 'expert' },
  ];

  const filteredTechnologies =
    activeCategory === 'all'
      ? technologies
      : technologies.filter(tech => tech.category === activeCategory);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'programming', name: 'Programming Languages' },
    { id: 'web', name: 'Web Technologies' },
    { id: 'database', name: 'Databases' },
    { id: 'data', name: 'Data & Analysis Tools' },
    { id: 'cloud', name: 'Cloud' },
    { id: 'other', name: 'Others' },
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
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as any)}
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
                      <div
                        className={`absolute top-2 right-2 h-3 w-3 rounded-full ${getProficiencyColor(
                          tech.proficiency
                        )}`}
                      />
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
              <span className="h-3 w-3 rounded-full bg-blue-500" />
              <span className="text-sm">Beginner</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-green-500" />
              <span className="text-sm">Intermediate</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="text-sm">Advanced</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="text-sm">Expert</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;

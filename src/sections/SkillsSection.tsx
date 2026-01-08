import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import ScrollReveal from '@/components/ScrollReveal';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category:
    | 'programming'
    | 'web'
    | 'database'
    | 'data'
    | 'cloud'
    | 'other';
}

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<
    | 'all'
    | 'programming'
    | 'web'
    | 'database'
    | 'data'
    | 'cloud'
    | 'other'
  >('all');

  const skills: Skill[] = [
    // Programming Languages
    { name: 'Python', level: 88, category: 'programming' },
    { name: 'Java', level: 80, category: 'programming' },
    { name: 'C', level: 75, category: 'programming' },

    // Web Technologies
    { name: 'HTML', level: 90, category: 'web' },
    { name: 'CSS', level: 90, category: 'web' },
    { name: 'JavaScript', level: 85, category: 'web' },
    { name: 'MERN Stack', level: 80, category: 'web' },

    // Databases
    { name: 'MySQL', level: 90, category: 'database' },
    { name: 'MongoDB', level: 85, category: 'database' },

    // Data & Analysis Tools
    { name: 'Excel', level: 88, category: 'data' },
    { name: 'Power BI', level: 85, category: 'data' },
    { name: 'Tableau', level: 82, category: 'data' },
    { name: 'Power Query', level: 80, category: 'data' },

    // Cloud
    { name: 'Google Cloud Platform (GCP)', level: 75, category: 'cloud' },
    { name: 'AWS', level: 70, category: 'cloud' },

    // Others
    { name: 'Git', level: 85, category: 'other' },
    { name: 'Linux', level: 80, category: 'other' },
    { name: 'Windows', level: 95, category: 'other' },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter(skill => skill.category === activeCategory);

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'programming', name: 'Programming Languages' },
    { id: 'web', name: 'Web Technologies' },
    { id: 'database', name: 'Databases' },
    { id: 'data', name: 'Data & Analysis Tools' },
    { id: 'cloud', name: 'Cloud' },
    { id: 'other', name: 'Others' },
  ];

  return (
    <section id="skills" className="section-padding theme-transition">
      <div className="container-wide">
        <ScrollReveal>
          <SectionHeading
            title="My Skills"
            subtitle="What I'm good at"
          />
        </ScrollReveal>

        <ScrollReveal animation="fade-in-up" delay={100}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as any)}
                className={`px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-muted hover:bg-muted/80 text-foreground hover:text-foreground'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredSkills.map((skill, index) => (
            <ScrollReveal
              key={skill.name}
              animation="fade-in-up"
              delay={100 + index * 50}
              className="card-hover bg-card rounded-lg p-6 shadow-md hover-glow overflow-hidden"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-card-foreground hover-scale">
                  {skill.name}
                </h3>
                <span className="text-primary font-medium">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{
                    width: `${skill.level}%`,
                    transition: 'width 1s ease-out',
                  }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

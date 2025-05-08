
import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import ScrollReveal from '@/components/ScrollReveal';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'os' | 'other';
}

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'design' | 'os' | 'other'>('all');
  
  const skills: Skill[] = [
    { name: 'HTML & CSS', level: 95, category: 'frontend' },
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'React', level: 85, category: 'frontend' },
    { name: 'TypeScript', level: 70, category: 'frontend' },
    { name: 'Next.js', level: 80, category: 'frontend' },
    { name: 'Tailwind CSS', level: 82, category: 'frontend' },
    { name: 'Node.js', level: 80, category: 'backend' },
    { name: 'Express', level: 80, category: 'backend' },
    { name: 'MongoDB', level: 84, category: 'backend' },
    { name: 'MySQL', level: 90, category: 'backend' },
    { name: 'Firebase', level: 80, category: 'backend' },
    { name: 'UI/UX Design', level: 80, category: 'design' },
    { name: 'Figma', level: 88, category: 'design' },
    { name: 'Adobe XD', level: 68, category: 'design' },
    { name: 'Windows', level: 95, category: 'os' },
    { name: 'Linux', level: 81, category: 'os' },
    { name: 'Git', level: 85, category: 'other' },
    { name: 'Docker', level: 70, category: 'other' },
    { name: 'CI/CD', level: 65, category: 'other' },
    { name: 'Postman', level: 80, category: 'other' }
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'design', name: 'Design' },
    { id: 'os', name: 'OS' },
    { id: 'other', name: 'Other' },
  ];

  // Animation variants for skill bars
  const progressAnimation = (value: number) => ({
    initial: { width: 0 },
    animate: { 
      width: `${value}%`,
      transition: { duration: 1, ease: "easeOut", delay: 0.3 }
    }
  });

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
            {categories.map((category) => (
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
                <h3 className="font-medium text-card-foreground hover-scale">{skill.name}</h3>
                <span className="text-primary font-medium">{skill.level}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary rounded-full" 
                  style={{
                    width: `${skill.level}%`,
                    transition: 'width 1s ease-out'
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

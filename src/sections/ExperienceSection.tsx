import SectionHeading from '@/components/SectionHeading';
import ScrollReveal from '@/components/ScrollReveal';
import { Badge } from '@/components/ui/badge';

interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  type: 'work' | 'internship' | 'education';
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      role: 'Frontend Developer Intern',
      company: 'AICTE - Edunet Foundation',
      location: 'Remote',
      period: 'Mar – Apr 2025',
      description: [
        'Developed a Real-Time Collaboration Tool using MERN + Socket.IO for seamless team communication.',
        'Integrated real-time messaging and user interaction features.',
        'Improved collaborative workflows and performance across teams.',
        'Utilized best practices for developing scalable real-time web applications.',
      ],
      skills: ['MERN Stack', 'Socket.IO', 'Real-Time Communication', 'JavaScript', 'Node.js'],
      type: 'internship',
    },
    {
      id: 2,
      role: 'Power Bi Intern',
      company: 'AICTE - Edunet Foundation',
      location: 'Remote',
      period: 'May 2025',
      description: [
        'Developed a Power BI dashboard to analyze and visualize energy consumption trends.',
        'Used data modeling and visualizations to identify key insights and areas for energy optimization.',
        'Created interactive reports with Power BI to assist stakeholders in decision-making.',
        'Collaborated with the team to integrate real-time data for dynamic analysis.',
      ],
      skills: ['Power BI', 'Data Visualization', 'Data Analysis', 'DAX', 'Power Query'],
      type: 'internship',
    },
    {
      id: 3,
      role: 'Microsoft AINSI Intern',
      company: 'AINSI Edunet World',
      location: 'Online',
      period: 'Apr 2025',
      description: [
        'Gained hands-on experience in AI through training and projects.',
        'Worked on AI & Machine Learning algorithms, cloud integration with Azure services.',
        'Developed skills in Generative AI, NLP, Computer Vision, and sustainability.',
        'Earned credentials and badges from Microsoft to enhance employability.',
      ],
      skills: ['AI', 'Machine Learning', 'Generative AI', 'NLP', 'Azure AI'],
      type: 'internship',
    },
    {
      id: 4,
      role: 'Training Intern',
      company: 'Zensar Technologies',
      location: 'Online',
      period: '1 Month',
      description: [
        'Completed technical training in Java, Python, and MySQL.',
        'Worked on backend development and database integration tasks.',
        'Built foundational skills in server-side technologies.',
        'Engaged in hands-on projects to apply learned concepts in real-world scenarios.',
      ],
      skills: ['Java', 'Python', 'MySQL', 'Backend Development'],
      type: 'internship',
    },
    {
      id: 5,
      role: 'Campus Internship',
      company: 'Eminence',
      location: 'College',
      period: '1 Week',
      description: [
        'Enhanced communication and teamwork skills through real-world simulations.',
        'Bridged the gap between academic knowledge and practical workplace skills.',
        'Participated in leadership and decision-making workshops.',
        'Developed the ability to collaborate effectively in a corporate environment.',
      ],
      skills: ['Communication', 'Teamwork', 'Leadership', 'Soft Skills'],
      type: 'internship',
    },
  ];  

  return (
    <section id="experience" className="bg-muted/20 section-padding">
      <div className="container-wide">
        <ScrollReveal>
          <SectionHeading
            title="Internships & Trainings"
            subtitle="My journey through internships and skill development"
          />
        </ScrollReveal>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-px"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className="mb-12 relative">
              <ScrollReveal
                animation={index % 2 === 0 ? 'fade-in-right' : 'fade-in-left'}
                delay={index * 100}
              >
                <div
                  className={`flex flex-col ${index % 2 === 0
                    ? 'md:flex-row'
                    : 'md:flex-row-reverse'
                    }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-primary shadow-lg shadow-primary/20 transform -translate-x-1/2 flex items-center justify-center text-white">
                    {exp.type === 'work' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase">
                        <rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                    ) : exp.type === 'internship' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award">
                        <circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" /></svg>
                    )}
                  </div>

                  <div
                    className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0
                      ? 'md:mr-8'
                      : 'md:ml-8'
                      }`}
                  >
                    <div className="bg-card rounded-lg p-6 shadow-lg card-hover border border-border">
                      <div className="flex flex-wrap justify-between items-center mb-4">
                        <div>
                          <h3 className="font-heading text-xl font-semibold">{exp.role}</h3>
                          <p className="text-secondary">{exp.company} | {exp.location}</p>
                        </div>
                        <Badge variant="outline" className="mt-2 md:mt-0 border-primary/40 text-primary font-medium">
                          {exp.period}
                        </Badge>
                      </div>

                      <ul className="list-disc pl-5 mb-4 space-y-2">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="text-secondary text-sm">{item}</li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-muted/60 text-secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

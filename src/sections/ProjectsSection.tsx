import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import SectionHeading from '@/components/SectionHeading';
import ScrollReveal from '@/components/ScrollReveal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
}

const INITIAL_VISIBLE_PROJECTS = 6;

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Collabify: Instant Collaboration',
      description: 'A real-time platform for seamless team communication and collaboration.',
      longDescription:
        'A robust real-time collaboration platform built with React, Node.js, and Socket.IO. Features include instant messaging, video calls, document sharing, real-time notifications, and team management.',
      image: './Real_time_collab.png',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'WebRTC'],
      demoUrl: 'https://realtime-collab-tool.vercel.app/',
      codeUrl: 'https://github.com/Yashrajgithub/Realtime-Collab-Tool',
    },
    {
      id: 2,
      title: 'Secure Chat App',
      description: 'A real-time secure messaging application with end-to-end encryption.',
      longDescription:
        'A secure messaging app built using Node.js, Express, MongoDB, and Socket.IO with AES-256 encryption.',
      image: './Chatify app.png',
      tags: ['Node.js', 'Express', 'MongoDB', 'Socket.io', 'AES-256'],
      demoUrl: 'https://github.com/Yashrajgithub/',
      codeUrl: 'https://github.com/Yashrajgithub/',
    },
    {
  id: 3,
  title: 'Energy Consumption Analysis',
  description: 'Data analytics project analyzing energy usage patterns and efficiency trends.',
  longDescription:
    'This project focuses on analyzing large-scale energy consumption data to identify usage patterns, peak demand hours, and efficiency opportunities. Using tools like Power BI, Excel, and Power Query, interactive dashboards were built to visualize trends, compare renewable vs non-renewable sources, and generate insights for sustainability and cost optimization.',
  image: './Dashboard1.png',
  tags: ['Power BI', 'Excel', 'Data Analytics', 'Visualization'],
  demoUrl: 'https://github.com/Yashrajgithub/Energy-Consumption-Analysis-Using-Power-Bi',
  codeUrl: 'https://github.com/Yashrajgithub/Energy-Consumption-Analysis-Using-Power-Bi',
},
    {
  id: 4,
  title: 'Sales Performance Dashboard',
  description: 'Interactive dashboard for analyzing sales trends and business performance.',
  longDescription:
    'A data-driven dashboard designed to analyze sales performance across regions, products, and time periods. The project uses Excel, Power BI, and Tableau to clean, transform, and visualize sales data, enabling stakeholders to track KPIs, identify high-performing segments, and make informed business decisions.',
  image: './Dashboard2.png',
  tags: ['Power BI', 'Tableau', 'Excel', 'Data Analytics'],
  demoUrl: 'https://github.com/Yashrajgithub/Sales-Performance-Dashboard-Using-PowerBI',
  codeUrl: 'https://github.com/Yashrajgithub/Sales-Performance-Dashboard-Using-PowerBI',
},
    {
  id: 5,
  title: 'HomeMatch AI',
  description: 'AI-powered property recommendation system for personalized home matching.',
  longDescription:
    'HomeMatch AI is an intelligent recommendation system that suggests properties based on user preferences, budget, location, and lifestyle factors. The system uses machine learning techniques to analyze user behavior and property data, delivering personalized housing recommendations. It improves decision-making for buyers and renters by combining data analytics, AI models, and user-centric insights.',
  image: './Homematch.png',
  tags: ['Python', 'AI', 'Machine Learning', 'Data Analytics'],
  demoUrl: 'https://homematch-ai.vercel.app/',
  codeUrl: 'https://github.com/Yashrajgithub/Homematch-AI',
},
    {
      id: 6,
      title: 'MathLang Compiler',
      description: 'AI-powered web app that converts natural language math into JavaScript code.',
      longDescription:
        'An AI-powered application that translates natural language mathematical expressions into executable JavaScript code.',
      image: './Mathlang_Compiler.png',
      tags: ['React', 'Natural Language Processing'],
      demoUrl: 'https://math-lang-compiler.vercel.app/',
      codeUrl: 'https://github.com/Yashrajgithub/MathLang-Compiler',
    },
    {
      id: 7,
      title: 'Live Call Emotion AI',
      description: 'Real-time emotion recognition system for video calls.',
      longDescription:
        'Emotion recognition system using OpenCV, Dlib, and deep learning to analyze facial expressions in real time.',
      image: './EmotionRecog.png',
      tags: ['OpenCV', 'Dlib'],
      demoUrl: 'https://tinyurl.com/mr2ftj8p',
      codeUrl: 'https://github.com/Yashrajgithub/Emotion-Recognization-and-Analysis',
    },
    {
      id: 8,
      title: 'Crop Prediction',
      description: 'AI-driven model to predict optimal crops.',
      longDescription:
        'Machine learning-based system that predicts suitable crops using soil and weather data.',
      image: './CropPredict.png',
      tags: ['Python', 'AI', 'Machine Learning'],
      demoUrl: 'https://tinyurl.com/49wvthkh',
      codeUrl: 'https://github.com/Yashrajgithub/Crop-Recommendation',
    },
    {
      id: 9,
      title: 'Crop Disease Detection',
      description: 'Deep learning system to detect crop diseases from images.',
      longDescription:
        'An AI-powered system that identifies plant diseases using image classification.',
      image: './Crop_Disease_Prediction.png',
      tags: ['Python', 'Deep Learning'],
      demoUrl: 'https://tinyurl.com/9m5jzb3c',
      codeUrl: 'https://github.com/Yashrajgithub/Crop-Disease-Identification-Model',
    }
  ];

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, INITIAL_VISIBLE_PROJECTS);

  return (
    <section id="projects" className="bg-muted/20 section-padding">
      <div className="container-wide">
        <ScrollReveal>
          <SectionHeading
            title="My Projects"
            subtitle="Check out some of my recent work"
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              animation="fade-in-up"
              delay={100 + index * 50}
            >
              <div
                className="card-hover overflow-hidden rounded-lg bg-card shadow-lg cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium">View Details</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-secondary mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map(tag => (
                      <Badge key={tag} variant="outline" className="border-primary/40 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full">
                    View Project
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {projects.length > INITIAL_VISIBLE_PROJECTS && (
          <div className="flex justify-center mt-12">
            <Button
              onClick={() => setShowAll(prev => !prev)}
              variant="outline"
              className="button-outline"
            >
              {showAll ? 'Show Less' : 'See More Projects'}
            </Button>
          </div>
        )}

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          {selectedProject && (
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedProject.tags.map(tag => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </DialogDescription>
              </DialogHeader>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="rounded-md"
              />

              <p className="text-secondary">{selectedProject.longDescription}</p>

              <div className="flex gap-4 pt-4">
                <a href={selectedProject.demoUrl} target="_blank">
                  <Button>Live Demo</Button>
                </a>
                <a href={selectedProject.codeUrl} target="_blank">
                  <Button variant="outline">View Code</Button>
                </a>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default ProjectsSection;

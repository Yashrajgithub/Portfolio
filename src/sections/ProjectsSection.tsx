
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
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

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Collabify: Instant Collaboration',
      description: 'A real-time platform for seamless team communication and collaboration.',
      longDescription: 'A robust real-time collaboration platform built with React, Node.js, and Socket.IO. Features include instant messaging, video calls, document sharing, real-time notifications, and team management. The app is fully responsive, ensuring smooth communication and collaboration on any device.',
      image: './Real_time_collab.png',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'WebRTC'],
      demoUrl: 'https://realtime-collab-tool.vercel.app/',
      codeUrl: 'https://github.com/Yashrajgithub/Realtime-Collab-Tool',
    },
    {
      id: 2,
      title: 'Secure Chat App',
      description: 'A real-time secure messaging application with end-to-end encryption.',
      longDescription: 'A secure messaging app built using Node.js, Express, MongoDB, and Socket.IO. The app ensures real-time communication with encrypted messages using AES-256 and offers features like group chats, message delivery status, and user authentication. It incorporates WebSocket-based real-time updates and Cryptr for encryption to maintain privacy.',
      image: './Chatify app.png',
      tags: ['Node.js', 'Express', 'MongoDB', 'Socket.io', 'AES-256'],
      demoUrl: 'https://github.com/Yashrajgithub/',
      codeUrl: 'https://github.com/Yashrajgithub/'
    },
    {
      id: 3,
      title: 'MathLang Compiler',
      description: 'AI-powered web app that converts natural language math expressions into JavaScript code.',
      longDescription: 'MathLang Compiler is an AI-powered web application that translates natural language mathematical expressions into executable JavaScript code. Built with React, TypeScript, and Vite, it enables seamless code generation and execution from plain English inputs. The app showcases the power of language processing in computational logic, transforming plain English math into executable code.',
      image: './Mathlang_Compiler.png',
      tags: ['React', 'Natural Language Processing',],
      demoUrl: 'https://math-lang-compiler.vercel.app/',
      codeUrl: 'https://github.com/Yashrajgithub/MathLang-Compiler'
    },
    {
      id: 4,
      title: 'Live Call Emotion AI',
      description: 'Real-time emotion recognition system for video calls using facial expression analysis.',
      longDescription: 'A real-time emotion recognition system built with OpenCV, Dlib, and TensorFlow for facial expression analysis. The app detects emotions such as happiness, sadness, surprise, and anger during video calls, providing real-time feedback. It uses deep learning models to identify emotions from facial landmarks and integrates with video calling platforms for seamless user interaction.',
      image: './EmotionRecog.png',
      tags: ['OpenCV', 'Dlib'],
      demoUrl: 'https://tinyurl.com/mr2ftj8p',
      codeUrl: 'https://github.com/Yashrajgithub/Emotion-Recognization-and-Analysis'
    },    
    {
      id: 5,
      title: 'Crop Prediction',
      description: 'AI-driven model to predict optimal crops based on soil and weather conditions.',
      longDescription: 'Crop Prediction is an AI-driven web application that uses machine learning algorithms to predict the most suitable crops for a given region based on soil type, weather conditions, and historical data. Built with Python, TensorFlow, and Flask, the model provides real-time crop suggestions to farmers, improving yield prediction and resource management.',
      image: './CropPredict.png',
      tags: ['Python', 'AI', 'Machine Learning'],
      demoUrl: 'https://tinyurl.com/49wvthkh',
      codeUrl: 'https://github.com/Yashrajgithub/Crop-Recommendation'
    },    
    {
      id: 6,
      title: 'Crop Disease Detection',
      description: 'AI-based system that detects crop diseases from leaf images using deep learning.',
      longDescription: 'Crop Disease Detection is an AI-powered web application that leverages deep learning to identify plant diseases through image analysis. Built with Python, TensorFlow, and OpenCV, it enables farmers to upload leaf images and get instant diagnosis along with treatment suggestions. The system improves early disease detection, reduces crop loss, and promotes precision agriculture.',
      image: './Crop_Disease_Prediction.png',
      tags: ['Python', 'Deep Learning'],
      demoUrl: 'https://tinyurl.com/9m5jzb3c',
      codeUrl: 'https://github.com/Yashrajgithub/Crop-Disease-Identification-Model'
    },    
  ];
  
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className="bg-muted/20 section-padding">
      <div className="container-wide">
        <ScrollReveal>
          <SectionHeading
            title="My Projects"
            subtitle="Check out some of my recent work"
          />
        </ScrollReveal>
        
        <ScrollReveal animation="fade-in-up" delay={100}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md transition-all ${
                filter === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-card hover:bg-card/80 text-secondary hover:text-foreground'
              }`}
            >
              All Projects
            </button>
            
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-md transition-all ${
                  filter === tag
                    ? 'bg-primary text-white'
                    : 'bg-card hover:bg-card/80 text-secondary hover:text-foreground'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              animation="fade-in-up"
              delay={100 + index * 50}
            >
              <div 
                className="card-hover overflow-hidden rounded-lg bg-card shadow-lg"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden h-48 cursor-pointer group">
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
                  <h3 className="font-heading text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-secondary mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="border-primary/40 text-primary">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="border-primary/40 text-primary">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <Button 
                    variant="outline"
                    className="w-full button-outline"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    View Project
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
          {selectedProject && (
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-heading">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-secondary mt-2">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-primary/40 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4">
                <div className="rounded-md overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Project Overview</h4>
                  <p className="text-secondary">{selectedProject.longDescription}</p>
                </div>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="button-primary">Live Demo</Button>
                  </a>
                  <a href={selectedProject.codeUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="button-outline">View Code</Button>
                  </a>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default ProjectsSection;

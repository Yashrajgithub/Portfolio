import { Button } from '@/components/ui/button';
import ParticlesBackground from '@/components/ParticlesBackground';
import { Download } from 'lucide-react';

const HeroSection = () => {
  // Function to handle resume download
  const handleDownloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/Resume.pdf'; // This assumes you have a resume.pdf file in your public folder
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden"
    >
      <ParticlesBackground />

      <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start animate-fade-in-up">
          <p className="text-primary font-medium mb-4">Hi, my name is</p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-foreground">Yashraj</span>
          </h1>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-secondary">
            I build creative solutions with code.
          </h2>
          <p className="text-lg mb-8 text-secondary max-w-xl">
            I'm a dedicated software engineer, passionate about creating impactful and user-centric solutions.
            Currently, I focus on developing AI-driven applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects">
              <Button className="button-primary">View My Work</Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="button-outline">Contact Me</Button>
            </a>
            <Button
              variant="ghost"
              className="border border-primary/30 text-primary hover:bg-primary/10 hover:text-primary transition-colors duration-300 flex items-center gap-2"
              onClick={handleDownloadResume}
            >
              <Download size={18} />
              Download Resume
            </Button>
          </div>
        </div>

        <div className="relative lg:flex items-center justify-center hidden">
          <div className="rounded-full overflow-hidden h-80 w-80 border-4 border-primary/20 shadow-xl shadow-primary/20 animate-float">
            <img
              src="./profile.jpg"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute top-0 left-0 h-full w-full rounded-full bg-primary/10 animate-pulse blur-xl"></div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-primary" aria-label="Scroll to About section">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down">
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

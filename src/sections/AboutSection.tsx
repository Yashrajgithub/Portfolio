
import SectionHeading from '@/components/SectionHeading';
import ScrollReveal from '@/components/ScrollReveal';

const AboutSection = () => {
  return (
    <section id="about" className="bg-muted/20 section-padding">
      <div className="container-wide">
        <ScrollReveal>
          <SectionHeading
            title="About Me"
            subtitle="Get to know me better"
          />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal animation="fade-in-right" delay={100}>
            <div className="relative">
              <div className="rounded-lg overflow-hidden border-4 border-primary/20">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="About Me"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 h-4/5 w-4/5 border-4 border-primary rounded-lg -z-10"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-left" delay={200}>
            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-semibold">
                A passionate Software Developer & AI Explorer
              </h3>

              <p className="text-secondary">
                I'm a full-stack developer passionate about building intelligent,
                scalable, and user-driven AI applications. I'm always exploring new
                technologies to solve real-world problems.
              </p>
              <p className="text-secondary">
                I explore technology with a focus on AI and intuitive digital experiences, 
                building solutions across AI, data, and web development.
              </p>

              <p className="text-secondary">
                When I’m not working on tech projects, you’ll find me discovering new
                destinations, experiencing different cultures, and immersing myself in
                unique travel adventures.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Name:</h4>
                  <p className="text-secondary">Yashraj Kalshetti</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Email:</h4>
                  <p className="text-secondary">yashrajk1603@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Phone:</h4>
                  <p className="text-secondary">+91-7558756511</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">From:</h4>
                  <p className="text-secondary">Solapur, Maharashtra</p>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="#contact"
                  className="button-primary inline-block"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

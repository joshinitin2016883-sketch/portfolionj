import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <div className="text-accent justify-center items-center text-center  font-medium mb-4 tracking-wide uppercase text-sm">
              Welcome to my portfolio
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-center mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="text-gradient">Nitin Joshi</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4 text-center font-medium">
              Computer Science Engineer | Machine Learning Enthusiast | Aspiring Software Engineer
            </p>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
              Passionate about problem-solving with a strong academic foundation in Computer Science.
              Experienced in Machine Learning, Deep Learning, and Web Development.
              Eager to contribute to innovative engineering solutions that make a real impact.
            </p>

            <div className="flex flex-wrap gap-4 lg:justify-center mb-8 ">
              <Button variant="hero" size="xl" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-center">
              <a
                href="mailto:nitinjoshi@example.com"
                className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image
          <div className="flex-shrink-0 animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-hover">
                <img
                  src={profilePhoto}
                  alt="Nitin Joshi - Professional Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div> */}

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

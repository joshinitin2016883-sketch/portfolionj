import { Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-lg font-bold">
            Nitin<span className="text-accent">.</span>
          </div>

          <p className="text-sm text-primary-foreground/70 flex items-center gap-1">
            © {currentYear} Nitin Joshi. Made with{' '}
            <Heart className="w-4 h-4 text-accent fill-current" /> All rights reserved.
          </p>

          <nav className="flex gap-6">
            <a
              href="#home"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Fraud Card Detection',
    description:
      'A comprehensive machine learning project focused on detecting fraudulent credit card transactions. Implemented data cleaning, preprocessing pipelines, and compared multiple ML models to achieve optimal fraud detection accuracy.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Machine Learning'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
  },
  {
    title: 'Stock Price Prediction',
    description:
      'Built a predictive model to forecast stock market trends using historical price data. Applied time series analysis and deep learning techniques to identify patterns and make accurate price predictions.',
    technologies: ['Python', 'TensorFlow', 'LSTM', 'Deep Learning', 'Data Analysis'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
  },
  {
    title: 'Online Vegetable Store',
    description:
      'A responsive web application for an online vegetable marketplace. Designed and developed the complete front-end with intuitive UI/UX, product catalog, and shopping cart functionality.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Web Development'],
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-3 tracking-wide uppercase text-sm">
            My Work
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:border-accent/30 hover:shadow-card transition-all duration-300 hover-lift"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="accent" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

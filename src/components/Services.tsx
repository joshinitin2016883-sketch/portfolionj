import { LineChart, Brain, Database, AlertCircle } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Machine Learning Solutions',
    description:
      'Development of ML models for academic projects and prototypes, including classification, regression, and clustering algorithms.',
  },
  {
    icon: LineChart,
    title: 'Data Analysis & Prediction',
    description:
      'Building predictive models using historical datasets to forecast trends and make data-driven decisions for project use cases.',
  },
  {
    icon: Database,
    title: 'Data Preprocessing',
    description:
      'Comprehensive data cleaning, transformation, and feature engineering services along with model comparison and evaluation.',
  },
];

export const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-3 tracking-wide uppercase text-sm">
            What I Offer
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Services
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-xl border border-border hover:border-accent/30 hover:shadow-card transition-all duration-300 hover-lift text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="max-w-2xl mx-auto">
          <div className="flex items-start gap-4 p-5 bg-accent/5 border border-accent/20 rounded-xl">
            <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground">
              <strong className="text-foreground">Note:</strong> These services are currently offered 
              at an academic and project level. I'm building my expertise and ready to take on 
              challenging projects that help me grow professionally.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

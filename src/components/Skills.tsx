import { Brain, Code2, Database, Wrench, Users } from 'lucide-react';

const skillCategories = [
  {
    title: 'Core Skills',
    icon: Brain,
    skills: [
      { name: 'Machine Learning', level: 85 },
      { name: 'Deep Learning', level: 80 },
      { name: 'Data Analysis', level: 82 },
    ],
  },
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'C++', level: 85 },
      { name: 'Java', level: 75 },
    ],
  },
  {
    title: 'Web Technologies',
    icon: Database,
    skills: [
      { name: 'HTML/CSS', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'React', level: 75 },
    ],
  },
  {
    title: 'Tools & Concepts',
    icon: Wrench,
    skills: [
      { name: 'Data Structures', level: 88 },
      { name: 'Git & Version Control', level: 82 },
      { name: 'VS Code', level: 90 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    skills: [
      { name: 'Teamwork', level: 90 },
      { name: 'Problem Solving', level: 92 },
      { name: 'Communication', level: 85 },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-3 tracking-wide uppercase text-sm">
            What I Know
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Skills & Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:border-accent/30 hover:shadow-card transition-all duration-300 hover-lift"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

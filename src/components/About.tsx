import { GraduationCap, Award, BookOpen } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'Graphic Era University, Dehradun',
    year: '2024',
    score: 'CGPA: 8.43',
    icon: GraduationCap,
  },
  {
    degree: 'GATE 2025 Qualified',
    institution: 'Graduate Aptitude Test in Engineering',
    year: '2025',
    score: 'Score: 529',
    icon: Award,
  },
  {
    degree: 'Class XII (CBSE)',
    institution: 'Senior Secondary Education',
    year: '',
    score: '82.60%',
    icon: BookOpen,
  },
  {
    degree: 'Class X (CBSE)',
    institution: 'Secondary Education',
    year: '',
    score: '86.6%',
    icon: BookOpen,
  },
];

export const About = () => {
  return (
    <section id="about" className="section-padding bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-3 tracking-wide uppercase text-sm">
            Get To Know Me
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-semibold text-foreground">
              A Passionate Engineer Ready to Innovate
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Computer Science Engineering graduate with a deep passion for leveraging technology 
                to solve complex problems. My journey in tech has been driven by curiosity and a 
                commitment to continuous learning.
              </p>
              <p>
                With a strong foundation in <strong className="text-foreground">Machine Learning</strong> and{' '}
                <strong className="text-foreground">Deep Learning</strong>, I've developed the ability 
                to analyze data, build predictive models, and extract meaningful insights. My experience 
                spans across academic projects that have honed my practical skills.
              </p>
              <p>
                I thrive in collaborative environments and believe in the power of teamwork to achieve 
                exceptional results. I'm adaptable, quick to learn new technologies, and always eager 
                to take on challenges that push my boundaries.
              </p>
              <p>
                Currently, I'm seeking opportunities where I can contribute my skills in data-driven 
                problem-solving while growing as a software engineer in an innovative organization.
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-8">
              Education & Achievements
            </h3>
            <div className="space-y-4">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="group p-5 bg-card rounded-xl border border-border hover:border-accent/30 hover:shadow-card transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <item.icon className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{item.degree}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{item.institution}</p>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="font-medium text-accent">{item.score}</span>
                        {item.year && (
                          <span className="text-muted-foreground">• {item.year}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

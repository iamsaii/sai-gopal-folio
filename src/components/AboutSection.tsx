import { Code, Cloud, Database, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Expert in JavaScript, TypeScript, Java with modern frameworks like Node.js, Vue.js, Angular',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'AWS certified with experience in microservices, CI/CD automation, and scalable architecture',
    },
    {
      icon: Database,
      title: 'Database & Performance',
      description: 'SQL optimization, NoSQL databases, and high-performance system design',
    },
    {
      icon: Zap,
      title: 'Innovation & Results',
      description: 'Proven track record of scaling platforms to 10,000+ users and improving performance by 80%',
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate Full Stack Engineer with 5+ years of experience building cloud-native, 
              microservices applications. I thrive on solving complex technical challenges and 
              delivering scalable solutions that drive business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="skill-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <highlight.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Key Achievements</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">80%</div>
                  <div className="text-muted-foreground">Faster Release Cycles</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">10,000+</div>
                  <div className="text-muted-foreground">Users Scaled</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">98%</div>
                  <div className="text-muted-foreground">SMS Delivery Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
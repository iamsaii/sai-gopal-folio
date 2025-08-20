import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['JavaScript', 'TypeScript', 'Java', 'SQL', 'HTML', 'CSS', 'Python'],
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['Node.js', 'Vue.js', 'Next.js', 'Angular', 'Play Framework', 'Android SDK'],
    },
    {
      title: 'Cloud Platforms',
      skills: ['AWS (EC2, S3)', 'Docker', 'Jenkins', 'GitHub Actions'],
    },
    {
      title: 'Architecture & APIs',
      skills: ['Microservices', 'REST API Development', 'Domain-Driven Design (DDD)', 'System Design'],
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'Relational Databases (RDBMS)'],
    },
    {
      title: 'Tools',
      skills: ['VS Code', 'IntelliJ IDE', 'Git', 'Postman (API Testing)', 'Jira', 'Android Studio'],
    },
    {
      title: 'Methodologies',
      skills: ['Agile/Scrum', 'Domain Driven Design (DDD)', 'Test Automation', 'Driven Testing'],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="skill-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-primary flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-3" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-gradient-to-r from-primary/10 to-secondary/10 text-foreground hover:from-primary/20 hover:to-secondary/20 transition-smooth cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-full px-8 py-4">
              <span className="text-muted-foreground">Always learning:</span>
              <div className="flex gap-2">
                <Badge className="bg-gradient-to-r from-accent to-primary text-white">
                  Machine Learning
                </Badge>
                <Badge className="bg-gradient-to-r from-primary to-secondary text-white">
                  Kubernetes
                </Badge>
                <Badge className="bg-gradient-to-r from-secondary to-accent text-white">
                  GraphQL
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
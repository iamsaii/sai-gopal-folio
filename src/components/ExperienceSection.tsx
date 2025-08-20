import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Fourth Rev Edu PVT LTD',
      location: 'Hyderabad, IN',
      period: 'Sep 2023 - Present',
      achievements: [
        'Led end-to-end migration from a Java monolith to a microservices-based architecture (Node.js, Vue.js, Next.js, REST APIs), improving processing scalability and enabling faster feature releases.',
        'Designed and implemented CI/CD pipelines using GitHub Actions, automating build, test, and deployment workflows to reduce release cycles by 80%, improving code maintainability.',
        'Developed scalable backend services and REST APIs for high-volume SMS and WhatsApp campaigns, processing 10,000+ concurrent user requests with a 98% delivery success rate, boosting customer engagement.',
        'Applied Domain Driven Design (DDD) principles to refactor legacy code, reducing technical debt by 35%, improving code maintainability, and decreasing onboarding time for new developers.',
        'Collaborated with cross-functional teams to deliver high-quality releases within tight deadlines, ensuring unit testing to ensure code quality.'
      ],
      technologies: ['Node.js', 'Vue.js', 'Next.js', 'Microservices', 'GitHub Actions', 'REST APIs', 'Domain Driven Design']
    },
    {
      title: 'Software Engineer',
      company: 'Fourth Rev Edu PVT LTD',
      location: 'Hyderabad, IN',
      period: 'Aug 2020 - Sep 2023',
      achievements: [
        'Maintained Java and Play Framework modules in a monolithic architecture, achieving 99% uptime and resolving production issues by 90%.',
        'Delivered Android Java features and optimized Angular front-end, boosting engagement by 25% and reducing load times by 30%.',
        'Optimized SQL queries and redesigned database schema, reducing query execution time by 20% and improving performance for mission-critical, high-traffic transactions.'
      ],
      technologies: ['Java', 'Play Framework', 'Android', 'Angular', 'SQL', 'Database Optimization']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Building scalable solutions and leading technical transformations
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="timeline-line" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-12">
                  {/* Timeline dot */}
                  <div className="timeline-dot" />
                  
                  <Card className="skill-card animate-slide-in-left" style={{ animationDelay: `${index * 0.2}s` }}>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl font-bold text-foreground mb-2">
                            {exp.title}
                          </CardTitle>
                          <div className="text-lg font-semibold text-primary mb-2">
                            {exp.company}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-muted-foreground mb-1">
                            <Calendar className="w-4 h-4 mr-2" />
                            {exp.period}
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-2" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 text-foreground"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
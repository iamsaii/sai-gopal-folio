import { ExternalLink, Github, Brain, Database, Server } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Brain Tumor Detection using Artificial Neural Networks',
      description: 'Developed a Machine Learning-based ANN model in Python using TensorFlow and OpenCV for classification and segmentation of brain tumors from MRI scans, achieving 92% accuracy.',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Machine Learning', 'Neural Networks', 'Medical Imaging'],
      period: 'Aug 2019 - Feb 2020',
      icon: Brain,
      type: 'Machine Learning',
      links: {
        github: 'https://github.com/saigopalp/brain-tumor-detection',
        demo: '#'
      }
    },
    {
      title: 'Scalable Microservices Architecture',
      description: 'Led the design and implementation of a microservices-based platform processing 10,000+ concurrent users with 98% uptime. Built with Node.js, REST APIs, and deployed on AWS.',
      technologies: ['Node.js', 'Microservices', 'REST APIs', 'AWS', 'Docker', 'CI/CD'],
      period: '2023 - Present',
      icon: Server,
      type: 'Full Stack',
      links: {
        github: '#',
        demo: '#'
      }
    },
    {
      title: 'High-Performance Database Optimization',
      description: 'Redesigned database schema and optimized SQL queries, reducing execution time by 20% for mission-critical transactions handling high-traffic loads.',
      technologies: ['SQL', 'Database Design', 'Performance Tuning', 'MySQL', 'Query Optimization'],
      period: '2021 - 2022',
      icon: Database,
      type: 'Backend',
      links: {
        github: '#',
        demo: '#'
      }
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing innovative solutions and technical excellence across various domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="skill-card animate-scale-in h-full flex flex-col"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="outline" className="bg-gradient-to-r from-primary/10 to-secondary/10">
                      {project.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground mb-2">
                    {project.title}
                  </CardTitle>
                  <div className="text-sm text-muted-foreground mb-4">
                    {project.period}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-gradient-to-r from-primary/5 to-secondary/5 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.links.github, '_blank')}
                      className="flex-1 hover:bg-primary hover:text-primary-foreground"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => window.open(project.links.demo, '_blank')}
                      className="flex-1 bg-gradient-to-r from-primary to-secondary hover:shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 gradient-text">More Projects Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                I'm constantly working on new projects and exploring emerging technologies. 
                Check back soon for updates or connect with me to discuss potential collaborations.
              </p>
              <Button
                variant="outline"
                onClick={() => window.open('https://github.com/saigopalp', '_blank')}
                className="btn-outline-hero"
              >
                <Github className="w-5 h-5 mr-2" />
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const EducationSection = () => {
  const education = {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Electronics and Communication Engineering',
    institution: 'Koneru Lakshmaiah Education Foundation',
    period: '2016 - 2020',
    location: 'Vaddeswaram, India',
    highlights: [
      'Strong foundation in programming fundamentals and system design',
      'Developed problem-solving skills through engineering coursework',
      'Completed senior project on Brain Tumor Detection using Machine Learning',
      'Active participation in technical workshops and coding competitions'
    ],
    relevantCourses: [
      'Data Structures & Algorithms',
      'Computer Networks',
      'Database Management Systems',
      'Software Engineering',
      'Operating Systems',
      'Digital Signal Processing'
    ]
  };

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Education</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Academic foundation that shaped my technical journey
            </p>
          </div>

          <Card className="skill-card animate-fade-in shadow-hero">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-foreground mb-1">
                      {education.degree}
                    </CardTitle>
                    <div className="text-lg font-semibold text-primary">
                      {education.field}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end text-muted-foreground mb-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    {education.period}
                  </div>
                  <div className="flex items-center justify-end text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    {education.location}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-8">
                <h3 className="text-xl font-semibold gradient-text mb-4">
                  {education.institution}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive engineering education with focus on electronics, communication systems, 
                  and computer science fundamentals. This program provided the technical foundation that 
                  enabled my transition into software development and system architecture.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-primary" />
                    Key Highlights
                  </h4>
                  <ul className="space-y-3">
                    {education.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {education.relevantCourses.map((course, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 text-foreground"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-xl">
                <h4 className="text-lg font-semibold gradient-text mb-3">
                  Academic to Industry Transition
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  The analytical thinking and problem-solving skills developed during my engineering studies 
                  proved invaluable in software development. The rigorous curriculum in mathematics, algorithms, 
                  and system design directly contributed to my success in building scalable applications and 
                  architecting complex systems.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
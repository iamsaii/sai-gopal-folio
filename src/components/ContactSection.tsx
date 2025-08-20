import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'saigopal009@gmail.com',
      href: 'mailto:saigopal009@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+(91) 9032745802',
      href: 'tel:+919032745802'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/saigopalp',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/saigopalp',
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:saigopal009@gmail.com',
      color: 'from-red-500 to-red-600'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's connect and discuss how we can work together on your next project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold gradient-text mb-6">
                  Let's Start a Conversation
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  or simply connecting with fellow developers. Whether you have a project in mind, 
                  need technical consultation, or want to explore collaboration possibilities, 
                  I'd love to hear from you.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index}
                    className="skill-card animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mr-4">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">{info.label}</div>
                          <a 
                            href={info.href}
                            className="text-foreground font-medium hover:text-primary transition-smooth"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      onClick={() => window.open(social.href, '_blank')}
                      className="flex-1 hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      <social.icon className="w-5 h-5 mr-2" />
                      {social.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="skill-card animate-slide-in-right">
              <CardHeader>
                <CardTitle className="text-xl font-bold gradient-text">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Your Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="transition-smooth focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className="transition-smooth focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Subject *
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Discussion / Collaboration Opportunity"
                      required
                      className="transition-smooth focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, requirements, or just say hello..."
                      rows={5}
                      required
                      className="transition-smooth focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full btn-hero text-lg py-6"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import { Heart, ArrowUp, Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:saigopal009@gmail.com',
      label: 'Email'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/saigopalp',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/saigopalp',
      label: 'GitHub'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="mb-4">
                <h3 className="text-2xl font-bold gradient-text mb-2">
                  Sai Gopal Panchakarla
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Full Stack Engineer passionate about building scalable, 
                  cloud-native applications. Always excited to take on new 
                  challenges and create innovative solutions.
                </p>
              </div>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(social.href, '_blank')}
                    className="hover:bg-primary hover:text-primary-foreground transition-smooth"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-smooth text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Get in Touch
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <p>📧 saigopal009@gmail.com</p>
                <p>📱 +(91) 9032745802</p>
                <p>📍 Hyderabad, India</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-center md:text-left">
              <p className="flex items-center justify-center md:justify-start gap-2">
                © {currentYear} Sai Gopal Panchakarla. Made with 
                <Heart className="w-4 h-4 text-red-500 fill-current" /> 
                and lots of coffee ☕
              </p>
            </div>

            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { useState, useEffect } from 'react';
import { Menu, X, FileDown, Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md shadow-professional'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-bold text-xl gradient-text">
            Sai Gopal
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.name}
              </button>
            ))}
            <div className="flex items-center space-x-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => window.open('mailto:saigopal009@gmail.com')}
                className="hover:bg-primary hover:text-primary-foreground"
              >
                <Mail className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => window.open('https://linkedin.com/in/saigopalp', '_blank')}
                className="hover:bg-primary hover:text-primary-foreground"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.name}
              </button>
            ))}
            <div className="flex space-x-2 pt-3 border-t">
              <Button
                size="sm"
                variant="outline"
                onClick={() => window.open('mailto:saigopal009@gmail.com')}
                className="flex-1"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => window.open('https://linkedin.com/in/saigopalp', '_blank')}
                className="flex-1"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
import { Download, ExternalLink, Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const handleDownloadResume = () => {
    // Create a downloadable resume link - placeholder for now
    const link = document.createElement('a');
    link.href = '/lovable-uploads/20be97fb-8a52-453a-bc05-cfe87a36cbc6.png'; // Resume image
    link.download = 'Sai_Gopal_Panchakarla_Resume.png';
    link.click();
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80" />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Sai Gopal</span>
              <br />
              <span className="text-foreground">Panchakarla</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
              Full Stack Engineer | 5+ years experience
            </h2>
          </div>

          {/* Tagline */}
          <div className="animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Building scalable cloud-native applications with microservices & AWS. 
              Specialized in JavaScript, TypeScript, Java, and modern frameworks.
            </p>
          </div>

          {/* Location */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-muted-foreground mb-12 flex items-center justify-center gap-2">
              <span>📍</span> Hyderabad, India
            </p>
          </div>

          {/* Action buttons */}
          <div className="animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                onClick={handleDownloadResume}
                className="btn-hero min-w-[200px]"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline-hero min-w-[200px]"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
            </div>

            {/* Social links */}
            <div className="flex justify-center space-x-6">
              <Button
                variant="ghost"
                size="lg"
                onClick={() => window.open('https://linkedin.com/in/saigopalp', '_blank')}
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <Linkedin className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => window.open('mailto:saigopal009@gmail.com')}
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <Mail className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => window.open('https://github.com/saigopalp', '_blank')}
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <Github className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
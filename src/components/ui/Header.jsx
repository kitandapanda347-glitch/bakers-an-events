import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Image from '../AppImage';
import Button from './Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navigationItems = [
    { label: 'Home', path: '#home', icon: 'Home' },
    { label: 'Services', path: '#services', icon: 'Briefcase' },
    { label: 'About', path: '#about', icon: 'Users' },
    { label: 'Gallery', path: '#gallery', icon: 'Image' },
    { label: 'Contact', path: '#contact', icon: 'MessageCircle' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleSectionChange = () => {
      const sections = navigationItems?.map(item => item?.path?.substring(1));
      const currentSection = sections?.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element?.getBoundingClientRect();
          return rect?.top <= 100 && rect?.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionChange);
    };
  }, []);

  const handleNavClick = (path) => {
    const element = document.querySelector(path);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your bakery and event planning services. Can we discuss my upcoming celebration?");
    window.open(`https://wa.me/254728758344?text=${message}`, '_blank');
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-card border-b border-border' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden">
                <Image
                  src="/assets/images/Gemini_Generated_Image_oq4cetoq4cetoq4c.png"
                  alt="Kahaki Bakers & Events Logo"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="font-playfair font-bold text-lg lg:text-xl text-foreground">
                  Kahaki Bakers
                </h1>
                <span className="font-dancing text-sm text-primary hidden sm:block">
                  & Events
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems?.map((item) => (
                <button
                  key={item?.label}
                  onClick={() => handleNavClick(item?.path)}
                  className={`font-source font-medium text-sm transition-colors duration-200 hover:text-primary ${
                    activeSection === item?.path?.substring(1)
                      ? 'text-primary' :'text-foreground'
                  }`}
                >
                  {item?.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handleWhatsAppClick}
                iconName="MessageCircle"
                iconPosition="left"
                className="font-montserrat"
              >
                Get Quote
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={handleWhatsAppClick}
                iconName="Phone"
                iconPosition="left"
                className="font-montserrat btn-shadow"
              >
                Start Planning
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-foreground hover:text-primary transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <Icon 
                name={isMobileMenuOpen ? "X" : "Menu"} 
                size={24} 
              />
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-16 right-0 w-64 h-full bg-background shadow-elegant border-l border-border">
            <div className="p-6 space-y-6">
              {/* Mobile Navigation */}
              <nav className="space-y-4">
                {navigationItems?.map((item) => (
                  <button
                    key={item?.label}
                    onClick={() => handleNavClick(item?.path)}
                    className={`flex items-center space-x-3 w-full p-3 rounded-lg text-left transition-colors duration-200 ${
                      activeSection === item?.path?.substring(1)
                        ? 'bg-muted text-primary' :'text-foreground hover:bg-muted hover:text-primary'
                    }`}
                  >
                    <Icon name={item?.icon} size={20} />
                    <span className="font-source font-medium">{item?.label}</span>
                  </button>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="space-y-3 pt-6 border-t border-border">
                <Button
                  variant="outline"
                  fullWidth
                  onClick={handleWhatsAppClick}
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="font-montserrat"
                >
                  Get Quote
                </Button>
                <Button
                  variant="default"
                  fullWidth
                  onClick={handleWhatsAppClick}
                  iconName="Phone"
                  iconPosition="left"
                  className="font-montserrat btn-shadow"
                >
                  Start Planning
                </Button>
              </div>

              {/* Contact Info */}
              <div className="pt-6 border-t border-border">
                <p className="font-source text-sm text-muted-foreground mb-2">
                  Ready to create magic?
                </p>
                <p className="font-dancing text-lg text-primary">
                  Let's make your celebration unforgettable!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
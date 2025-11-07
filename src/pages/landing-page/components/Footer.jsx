import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    { label: 'Wedding Cakes', href: '#services' },
    { label: 'Birthday Parties', href: '#services' },
    { label: 'Corporate Events', href: '#services' },
    { label: 'Event Planning', href: '#services' },
    { label: 'Custom Desserts', href: '#services' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', url: 'https://facebook.com/kahakibakers' },
    { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com/kahakibakers' },
    { name: 'TikTok', icon: 'Music', url: 'https://tiktok.com/@kahakibakers' }
  ];

  const handleLinkClick = (href) => {
    if (href?.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I found you through your website and I'm interested in your services. Can we chat about my upcoming celebration?");
    window.open(`https://wa.me/254728758344?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-12">
          {/* Brand Section */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
                <Image
                  src="/assets/images/Gemini_Generated_Image_oq4cetoq4cetoq4c.png"
                  alt="Kahaki Bakers & Events Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-playfair font-bold text-lg sm:text-xl text-white">
                  Kahaki Bakers
                </h3>
                <span className="font-dancing text-xs sm:text-sm text-primary">
                  & Events
                </span>
              </div>
            </div>
            
            <p className="hidden sm:block font-source text-sm text-white/80 mb-4 sm:mb-6 leading-relaxed">
              Custom cakes & event planning under one roof.
            </p>

            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={16} className="text-primary flex-shrink-0" />
                <span className="font-source text-sm text-white/80">
                  123 Baker Street, Sweet City, SC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={16} className="text-primary flex-shrink-0" />
                <span className="font-source text-sm text-white/80">
                  +254 728 758 344
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} className="text-primary flex-shrink-0" />
                <span className="font-source text-sm text-white/80">
                  hello@kahakibakers.com
                </span>
              </div>
            </div>

            <Button
              variant="default"
              size="sm"
              onClick={handleWhatsAppClick}
              iconName="MessageCircle"
              iconPosition="left"
              className="font-montserrat btn-shadow text-sm w-full sm:w-auto"
            >
              Chat with Us
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-bold text-sm sm:text-base lg:text-lg text-white mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              {quickLinks?.map((link) => (
                <li key={link?.label}>
                  <button
                    onClick={() => handleLinkClick(link?.href)}
                    className="font-source text-xs sm:text-sm text-white/80 hover:text-primary transition-colors duration-200 text-left"
                  >
                    {link?.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair font-bold text-sm sm:text-base lg:text-lg text-white mb-3 sm:mb-4">
              Our Services
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              {services?.map((service) => (
                <li key={service?.label}>
                  <button
                    onClick={() => handleLinkClick(service?.href)}
                    className="font-source text-xs sm:text-sm text-white/80 hover:text-primary transition-colors duration-200 text-left"
                  >
                    {service?.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-playfair font-bold text-sm sm:text-base lg:text-lg text-white mb-3 sm:mb-4">
              Stay Connected
            </h4>
            
            <p className="hidden sm:block font-source text-sm text-white/80 mb-4">
              Follow us on social media.
            </p>

            <div className="flex space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              {socialLinks?.map((social) => (
                <button
                  key={social?.name}
                  onClick={() => handleLinkClick(social?.url)}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label={`Follow us on ${social?.name}`}
                >
                  <Icon name={social?.icon} size={16} className="text-white sm:w-[18px] sm:h-[18px]" />
                </button>
              ))}
            </div>

            <div className="hidden sm:block bg-white/5 rounded-lg p-3 sm:p-4">
              <h5 className="font-playfair font-semibold text-sm text-white mb-2">
                Business Hours
              </h5>
              <div className="space-y-1 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="font-source text-white/80">Mon - Fri:</span>
                  <span className="font-source text-white">9AM - 7PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-source text-white/80">Saturday:</span>
                  <span className="font-source text-white">10AM - 6PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-source text-white/80">Sunday:</span>
                  <span className="font-source text-white">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter Section */}
      <div className="hidden sm:block border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="text-center">
            <h4 className="font-playfair font-bold text-xl text-white mb-4">
              Get Sweet Inspiration
            </h4>
            <p className="font-source text-white/80 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for cake design ideas, event planning tips, and exclusive offers for your celebrations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <div className="flex-1 w-full">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <Button
                variant="default"
                iconName="Send"
                iconPosition="right"
                className="font-montserrat btn-shadow whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="font-source text-white/60 text-xs sm:text-sm">
                © {currentYear} Kahaki Bakers & Events. All rights reserved.
              </p>
            </div>
            
            <div className="hidden sm:flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <button className="font-source text-xs sm:text-sm text-white/60 hover:text-primary transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="font-source text-xs sm:text-sm text-white/60 hover:text-primary transition-colors duration-200">
                Terms of Service
              </button>
              <button className="font-source text-xs sm:text-sm text-white/60 hover:text-primary transition-colors duration-200">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Contact us on WhatsApp"
        >
          <Icon name="MessageCircle" size={20} color="white" className="sm:w-6 sm:h-6" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
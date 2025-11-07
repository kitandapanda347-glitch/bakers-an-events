import React from 'react';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your bakery and event planning services. Can we discuss my upcoming celebration?");
    window.open(`https://wa.me/254728758344?text=${message}`, '_blank');
  };

  const handleViewGallery = () => {
    const galleryElement = document.getElementById('gallery');
    if (galleryElement) {
      galleryElement?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/herosection.jfif"
          alt="Elegant three-tier white wedding cake with gold accents and fresh flowers on marble table at luxury event venue"
          className="w-full h-full object-cover"
          loading="eager" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16 py-20 sm:py-24">
        <div className="w-full max-w-5xl">
          {/* Main Headline */}
          <div className="mb-6 sm:mb-8 space-y-2 sm:space-y-3">
            <h1 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              Your Special Moments
            </h1>
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-6xl text-accent leading-tight">
              Made Memorable
            </h2>
          </div>

          {/* Subheadline */}
          <p className="font-source text-base sm:text-lg lg:text-xl text-white/90 mb-10 sm:mb-12 max-w-2xl leading-relaxed">
            Custom Cakes & Event Planning
          </p>
        </div>
      </div>

      {/* CTA Buttons at Bottom */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-4xl px-6">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <Button
            variant="default"
            size="lg"
            onClick={handleWhatsAppClick}
            iconName="MessageCircle"
            iconPosition="left"
            className="font-montserrat btn-shadow text-base sm:text-lg px-8 py-4 w-full sm:w-auto">
            Start Planning
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={handleViewGallery}
            iconName="Image"
            iconPosition="left"
            className="font-montserrat border-white text-white hover:bg-white/10 text-base sm:text-lg px-8 py-4 w-full sm:w-auto">
            View Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
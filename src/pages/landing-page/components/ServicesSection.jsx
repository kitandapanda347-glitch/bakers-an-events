import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const bakeryCategories = [
  { name: "Wedding Cakes", description: "Multi-tier masterpieces for your special day" },
  { name: "Birthday Cakes", description: "Custom designs for all ages and themes" },
  { name: "Corporate Cakes", description: "Professional desserts for business events" }];


  const eventServices = [
  { step: "Consultation", description: "Understanding your vision and requirements" },
  { step: "Planning", description: "Detailed coordination and vendor management" },
  { step: "Execution", description: "Flawless event delivery on your special day" }];


  const handleWhatsAppClick = (service) => {
    const message = encodeURIComponent(`Hi! I'm interested in your ${service} services. Can we discuss my requirements?`);
    window.open(`https://wa.me/254728758344?text=${message}`, '_blank');
  };

  return (
    <section id="services" className="py-2 sm:py-8 lg:py-12 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-2 sm:mb-4 lg:mb-6">
          <h2 className="font-playfair font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-1 sm:mb-2">
            Services
          </h2>
          <p className="lg:hidden font-source text-xs text-muted-foreground mt-1 flex items-center justify-center gap-1">
            <span>←</span> Swipe <span>→</span>
          </p>
        </div>

        {/* Services Cards */}
        <div className="flex lg:grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory scrollbar-hide pb-4 lg:pb-0 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
          {/* Bakery Services Card */}
          <div
            className="group relative bg-card rounded-xl overflow-hidden card-shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-auto snap-start"
            onMouseEnter={() => setHoveredService('bakery')}
            onMouseLeave={() => setHoveredService(null)}>

            <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
              <Image
                src="/assets/images/ArtisanalBakery.jpg"
                alt="Kahaki Bakers - Custom artisanal cakes and desserts crafted with premium ingredients"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute top-3 right-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Cake" size={20} color="white" className="sm:w-6 sm:h-6" />
                </div>
              </div>
            </div>

            <div className="p-2 sm:p-3 md:p-4">
              <h3 className="font-playfair font-bold text-base sm:text-lg lg:text-xl text-foreground mb-2">
                Cakes
              </h3>

              {/* Rotating Categories */}
              <div className="space-y-2 mb-5">
                {bakeryCategories?.map((category, index) =>
                <div
                  key={category?.name}
                  className={`p-2.5 sm:p-3 rounded-lg border transition-all duration-300 ${
                  hoveredService === 'bakery' ? 'border-primary bg-primary/5 transform translate-x-2' : 'border-border bg-muted/30'}`
                  }
                  style={{ transitionDelay: `${index * 100}ms` }}>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-source font-semibold text-sm sm:text-base text-foreground">{category?.name}</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">{category?.description}</p>
                      </div>
                      <Icon name="ChevronRight" size={14} className="text-primary sm:w-4 sm:h-4" />
                    </div>
                  </div>
                )}
              </div>

              <Button
                variant="default"
                fullWidth
                onClick={() => handleWhatsAppClick('bakery')}
                iconName="MessageCircle"
                iconPosition="left"
                className="font-montserrat btn-shadow">

                Order Custom Cake
              </Button>
            </div>
          </div>

          {/* Event Planning Card */}
          <div
            className="group relative bg-card rounded-xl overflow-hidden card-shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-auto snap-start"
            onMouseEnter={() => setHoveredService('events')}
            onMouseLeave={() => setHoveredService(null)}>

            <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
              <Image
                src="/assets/images/event.jpg"
                alt="Kahaki Bakers and Events - Professional event planning and coordination services"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute top-3 right-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Icon name="Calendar" size={20} color="white" className="sm:w-6 sm:h-6" />
                </div>
              </div>
            </div>

            <div className="p-2 sm:p-3 md:p-4">
              <h3 className="font-playfair font-bold text-base sm:text-lg lg:text-xl text-foreground mb-2">
                Events
              </h3>

              {/* Service Timeline */}
              <div className="space-y-2 mb-5">
                {eventServices?.map((service, index) =>
                <div
                  key={service?.step}
                  className={`p-2.5 sm:p-3 rounded-lg border transition-all duration-300 ${
                  hoveredService === 'events' ? 'border-secondary bg-secondary/5 transform translate-x-2' : 'border-border bg-muted/30'}`
                  }
                  style={{ transitionDelay: `${index * 100}ms` }}>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-source font-semibold text-sm sm:text-base text-foreground">{service?.step}</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">{service?.description}</p>
                      </div>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                        <span className="text-xs sm:text-sm font-bold text-secondary">{index + 1}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Button
                variant="secondary"
                fullWidth
                onClick={() => handleWhatsAppClick('event planning')}
                iconName="MessageCircle"
                iconPosition="left"
                className="font-montserrat btn-shadow">

                Plan Your Event
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="lg:hidden flex justify-center gap-2 mt-6">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
        </div>

        {/* Combined Service CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 lg:p-12">
            <h3 className="font-playfair font-bold text-2xl lg:text-3xl text-foreground mb-4">
              Need Both Services?
            </h3>
            <p className="font-source text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the complete package! Let us handle both your custom cake creation and full event coordination for a seamless, stress-free celebration.
            </p>
            <Button
              variant="default"
              size="lg"
              onClick={() => handleWhatsAppClick('complete event package')}
              iconName="Star"
              iconPosition="left"
              className="font-montserrat btn-shadow">

              Get Complete Package Quote
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export default ServicesSection;
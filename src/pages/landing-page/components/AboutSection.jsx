import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AboutSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'd love to learn more about your story and how you can help with my event. Can we chat?");
    window.open(`https://wa.me/254728758344?text=${message}`, '_blank');
  };

  const highlights = [
  {
    icon: "Sparkles",
    title: "Fresh & Innovative",
    description: "Bringing creative ideas and modern approaches to every celebration"
  },
  {
    icon: "Users",
    title: "Growing Community",
    description: "Building trust one satisfied customer at a time"
  },
  {
    icon: "Heart",
    title: "Personalized Service",
    description: "Every event is uniquely tailored to you"
  },
  {
    icon: "CheckCircle",
    title: "Quality Guaranteed",
    description: "Premium ingredients and flawless execution"
  }];


  return (
    <section id="about" className="py-2 sm:py-8 lg:py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 p-2 sm:p-4">
            <div className="mb-2 sm:mb-4">
              <h2 className="font-playfair font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-2 sm:mb-3">
                About Us
              </h2>
            </div>

            <div className="hidden sm:block space-y-2 mb-3 sm:mb-4">
              <p className="font-source text-sm text-muted-foreground">
                Custom cakes and event planning from Naivasha. Making celebrations unforgettable.
              </p>
            </div>

            {/* Experience Highlights */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
              {highlights?.map((highlight, index) =>
              <div key={highlight?.title} className="flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 bg-surface rounded-lg">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name={highlight?.icon} size={16} className="text-primary sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="font-source font-semibold text-sm sm:text-base text-foreground mb-1">{highlight?.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{highlight?.description}</p>
                  </div>
                </div>
              )}
            </div>

            <Button
              variant="default"
              size="lg"
              onClick={handleWhatsAppClick}
              iconName="MessageCircle"
              iconPosition="left"
              className="font-montserrat btn-shadow">

              Share Your Vision With Us
            </Button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden card-shadow">
                <Image
                  src="/assets/images/pexels-werner-pfennig-6949886.jpg"
                  alt="Kahaki Bakers and Events team, passionate about creating memorable celebrations in Naivasha"
                  className="w-full h-96 lg:h-[500px] object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-4 left-4 sm:-bottom-6 sm:-left-6 bg-card rounded-xl p-4 sm:p-6 card-shadow border border-border max-w-[140px] sm:max-w-none">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-playfair font-bold text-primary mb-1">1500+</div>
                  <div className="text-xs sm:text-sm font-source text-muted-foreground">Celebrations Created</div>
                </div>
              </div>

              {/* Floating Achievement Badge */}
              <div className="absolute top-4 right-4 sm:-top-4 sm:-right-4 bg-accent rounded-full p-3 sm:p-4 card-shadow">
                <div className="text-center">
                  <Icon name="Star" size={20} className="text-white mx-auto mb-1" />
                  <div className="text-[10px] sm:text-xs font-source font-semibold text-white whitespace-nowrap">Award Winner</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="hidden sm:block absolute top-1/4 -left-8 w-16 h-16 bg-primary/10 rounded-full blur-xl"></div>
              <div className="hidden sm:block absolute bottom-1/4 -right-8 w-20 h-20 bg-secondary/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16 lg:mt-24">
          <div className="text-center mb-12">
          <h2 className="font-playfair font-bold text-4xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            What Sets Us Apart
          </h2>
            <p className="font-source text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence goes beyond just great cakes and beautiful events
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center p-4 sm:p-6 bg-surface rounded-xl">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Icon name="Sparkles" size={20} className="text-primary sm:w-7 sm:h-7" />
              </div>
              <h4 className="font-playfair font-bold text-base sm:text-lg lg:text-xl text-foreground mb-2 sm:mb-3">Creative Excellence</h4>
              <p className="font-source text-xs sm:text-sm lg:text-base text-muted-foreground">
                Every cake is a work of art, every event a masterpiece of coordination and style.
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-surface rounded-xl">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Icon name="Clock" size={20} className="text-secondary sm:w-7 sm:h-7" />
              </div>
              <h4 className="font-playfair font-bold text-base sm:text-lg lg:text-xl text-foreground mb-2 sm:mb-3">Timely Delivery</h4>
              <p className="font-source text-xs sm:text-sm lg:text-base text-muted-foreground">
                Punctual service and seamless execution ensure your event runs perfectly on schedule.
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-surface rounded-xl">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Icon name="Shield" size={20} className="text-accent sm:w-7 sm:h-7" />
              </div>
              <h4 className="font-playfair font-bold text-base sm:text-lg lg:text-xl text-foreground mb-2 sm:mb-3">Trust & Reliability</h4>
              <p className="font-source text-xs sm:text-sm lg:text-base text-muted-foreground">
                Your special day is safe in our hands with comprehensive planning and backup solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default AboutSection;
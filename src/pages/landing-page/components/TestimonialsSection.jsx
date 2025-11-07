import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
  {
    id: 1,
    name: "Wanjiku & Brian Mwangi",
    event: "Wedding - 200 Guests",
    rating: 5,
    image: "https://images.unsplash.com/photo-1706742896651-7690576730f2",
    imageAlt: "Happy bride and groom in wedding attire smiling at camera with bouquet and boutonniere",
    review: `Kahaki Bakers made our wedding absolutely perfect! Asante sana for everything! The three-tier cake was not only stunning but tasted incredible. Their event planning team coordinated everything flawlessly - from the venue setup to the timeline. Our guests are still talking about how beautiful everything was. Truly, kazi nzuri sana! We couldn't have asked for better service!`,
    result: "Perfect wedding cake for 200 guests with flawless coordination"
  },
  {
    id: 2,
    name: "Achieng Otieno",
    event: "Daughter\'s 5th Birthday",
    rating: 5,
    image: "https://images.unsplash.com/photo-1679514878852-2cd80f479076",
    imageAlt: "Smiling mother with long dark hair wearing casual blue shirt",
    review: `My daughter wanted a princess castle cake, and Kahaki Bakers exceeded all expectations! Mungu wangu, the attention to detail was amazing - from the edible towers to the sparkly decorations. The party planning service helped coordinate the entire celebration, and my little princess felt like true royalty. Worth every penny!`,
    result: "Magical princess party that made dreams come true"
  },
  {
    id: 3,
    name: "James Kipchoge",
    event: "Corporate Product Launch",
    rating: 5,
    image: "https://images.unsplash.com/photo-1659323593305-ad05297db6a2",
    imageAlt: "Professional businessman in navy suit and tie smiling confidently",
    review: `We needed a professional yet memorable corporate event, and Kahaki Bakers delivered beyond our expectations. The branded desserts were a huge hit with our clients, and their event coordination ensured everything ran smoothly. Hongera to the team! Their professionalism and attention to detail made our product launch a complete success.`,
    result: "Flawless corporate event coordination with impressive results"
  },
  {
    id: 4,
    name: "Grace & Peter Kamau",
    event: "25th Anniversary Celebration",
    rating: 5,
    image: "https://images.unsplash.com/photo-1670826415277-60d0827bec06",
    imageAlt: "Middle-aged couple in formal attire smiling warmly, woman in elegant dress and man in dark suit",
    review: `For our silver anniversary, we wanted something special but intimate. Kahaki Bakers created a beautiful two-tier cake that perfectly captured our journey together - ni nzuri kabisa! Their planning team organized a lovely garden party for our family and close friends. The personal touch and care they showed made our celebration truly memorable.`,
    result: "Intimate anniversary celebration with personalized touches"
  },
  {
    id: 5,
    name: "Njeri Muthoni",
    event: "Baby Shower",
    rating: 5,
    image: "https://images.unsplash.com/photo-1567891390705-941c03c256ce",
    imageAlt: "Expectant mother in soft pink maternity dress smiling gently",
    review: `The team at Kahaki Bakers made my baby shower absolutely perfect! Asante sana! The gender reveal cake was such a fun surprise, and all the decorations were beautifully coordinated in soft pastels. Their planning service took all the stress away, allowing me to just enjoy celebrating with my loved ones. Napenda sana! Highly recommend!`,
    result: "Stress-free baby shower with perfect gender reveal moment"
  },
  {
    id: 6,
    name: "Samuel Omondi",
    event: "Retirement Party",
    rating: 5,
    image: "https://images.unsplash.com/photo-1714974528889-d51109fb6ae9",
    imageAlt: "Distinguished older gentleman with gray hair in business casual attire smiling warmly",
    review: `After 40 years in the company, I wanted my retirement party to be special. Kahaki Bakers created a cake that told the story of my career - walikuwa wazuri sana! Their event team organized everything perfectly. The attention to detail and personal service made it a celebration I'll never forget. Mungu awabariki! Thank you for making my transition into retirement so memorable!`,
    result: "Memorable retirement celebration honoring 40-year career"
  }];


  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I read your amazing testimonials and would love to create a similar experience for my event. Can we discuss?");
    window.open(`https://wa.me/254728758344?text=${message}`, '_blank');
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) =>
    <Icon
      key={index}
      name="Star"
      size={16}
      className={index < rating ? "text-accent fill-current" : "text-gray-300"} />

    );
  };

  return (
    <section className="py-2 sm:py-8 lg:py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-2 sm:mb-3">
          <h2 className="font-playfair font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-1 sm:mb-2">
            Reviews
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}>

            {testimonials?.map((testimonial) =>
            <div key={testimonial?.id} className="w-full flex-shrink-0 px-2 sm:px-4">
                <div className="bg-card rounded-lg sm:rounded-xl p-3 sm:p-5 lg:p-8 card-shadow max-w-4xl mx-auto">
                  <div className="grid lg:grid-cols-3 gap-5 sm:gap-8 items-center">
                    {/* Client Image */}
                    <div className="lg:col-span-1 text-center">
                      <div className="relative inline-block">
                        <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 card-shadow flex items-center justify-center">
                          <Icon name="User" size={40} className="text-primary/60 sm:w-16 sm:h-16" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center">
                          <Icon name="Quote" size={16} color="white" className="sm:w-5 sm:h-5" />
                        </div>
                      </div>
                      
                      <div className="mt-4 sm:mt-6">
                        <h3 className="font-playfair font-bold text-lg sm:text-xl text-foreground mb-1 sm:mb-2">
                          {testimonial?.name}
                        </h3>
                        <p className="font-source text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                          {testimonial?.event}
                        </p>
                        <div className="flex justify-center space-x-1 mb-4">
                          {renderStars(testimonial?.rating)}
                        </div>
                        <div className="bg-primary/10 rounded-lg p-2 sm:p-3">
                          <p className="font-source text-xs sm:text-sm text-primary font-medium">
                            {testimonial?.result}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Review Content */}
                    <div className="lg:col-span-2">
                      <div className="relative">
                        <Icon
                        name="Quote"
                        size={32}
                        className="text-primary/20 absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12" />

                        <blockquote className="font-source text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed italic relative z-10">
                          "{testimonial?.review}"
                        </blockquote>
                      </div>
                      
                      <div className="mt-5 sm:mt-8 pt-4 sm:pt-6 border-t border-border">
                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex space-x-1">
                              {renderStars(testimonial?.rating)}
                            </div>
                            <span className="font-source text-xs sm:text-sm text-muted-foreground">
                              Verified Client
                            </span>
                          </div>
                          <Button
                          variant="outline"
                          size="sm"
                          onClick={handleWhatsAppClick}
                          iconName="MessageCircle"
                          iconPosition="left"
                          className="font-montserrat">

                            Get Similar Results
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 bg-card rounded-full card-shadow flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200"
            aria-label="Previous testimonial">

            <Icon name="ChevronLeft" size={18} className="sm:w-6 sm:h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 bg-card rounded-full card-shadow flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200"
            aria-label="Next testimonial">

            <Icon name="ChevronRight" size={18} className="sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 sm:space-x-3 mt-6 sm:mt-8">
          {testimonials?.map((_, index) =>
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
            index === currentSlide ?
            'bg-primary scale-125' : 'bg-muted-foreground/30 hover:bg-primary/50'}`
            }
            aria-label={`Go to testimonial ${index + 1}`} />

          )}
        </div>

        {/* Stats Section */}
        <div className="mt-6 sm:mt-8 lg:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-primary mb-1 sm:mb-2">98%</div>
            <div className="font-source text-xs sm:text-sm lg:text-base text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-primary mb-1 sm:mb-2">4.9</div>
            <div className="font-source text-xs sm:text-sm lg:text-base text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-primary mb-1 sm:mb-2">500+</div>
            <div className="font-source text-xs sm:text-sm lg:text-base text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-primary mb-1 sm:mb-2">100%</div>
            <div className="font-source text-xs sm:text-sm lg:text-base text-muted-foreground">Repeat Referrals</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-10 sm:mt-12 lg:mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl sm:rounded-2xl p-5 sm:p-8 lg:p-12">
            <h3 className="font-playfair font-bold text-xl sm:text-2xl lg:text-3xl text-foreground mb-3 sm:mb-4">
              Join Our Happy Clients
            </h3>
            <p className="font-source text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let us create an unforgettable experience for your special celebration. Your satisfaction is our guarantee.
            </p>
            <Button
              variant="default"
              size="lg"
              onClick={handleWhatsAppClick}
              iconName="MessageCircle"
              iconPosition="left"
              className="font-montserrat btn-shadow">

              Start Your Success Story
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;
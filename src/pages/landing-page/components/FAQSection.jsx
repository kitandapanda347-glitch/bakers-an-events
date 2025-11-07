import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "How far in advance should I book your services?",
      answer: `For weddings and large events, we recommend booking 2-4 months in advance to ensure availability and proper planning time. For birthday parties and smaller celebrations, 2-3 weeks is usually sufficient. As a growing company in Naivasha, we're building our client base and often have flexible availability - contact us to discuss your event date and we'll work hard to accommodate your needs.`
    },
    {
      question: "How do I get a quote for my event?",
      answer: `Every celebration is unique, and we believe in providing personalized quotes that fit your vision and budget. Simply reach out via WhatsApp, phone, or our contact form with details about your event - date, guest count, cake style, and any specific requirements. We'll schedule a free consultation where we can discuss your needs in detail and provide a tailored quote. As a young company, we're committed to offering competitive rates while maintaining excellent quality.`
    },
    {
      question: "Do you accommodate dietary restrictions and allergies?",
      answer: `Absolutely! We specialize in creating delicious alternatives for various dietary needs including gluten-free, dairy-free, vegan, and allergen-friendly options. We take allergies very seriously and maintain strict protocols in our bakery. Please inform us of any dietary restrictions during your initial consultation so we can plan accordingly and ensure everyone can enjoy the celebration safely.`
    },
    {
      question: "What areas around Naivasha do you serve?",
      answer: `We're based in Naivasha and proudly serve the entire Naivasha area and surrounding regions including Nakuru, Narok, and other neighboring towns. For cake delivery, we can reach most locations within the Rift Valley region. Destination events at venues around Lake Naivasha are our specialty! We're happy to discuss your specific location during consultation - as a local business, we're passionate about serving our community.`
    },
    {
      question: "Can I see examples of your work before booking?",
      answer: `Of course! We encourage all potential clients to view our portfolio. You can browse our gallery on this website to see recent cakes and events, follow our social media accounts for daily updates, or better yet - schedule an in-person consultation at our Naivasha location to see our work and taste our creations. As a new but ambitious company, we're constantly updating our portfolio with fresh, creative designs.`
    },
    {
      question: "What makes Kahaki Bakers different from other bakeries in Naivasha?",
      answer: `As a young, passionate startup founded by an ambitious youth from Naivasha, we bring fresh, innovative ideas to every celebration. We combine traditional baking craftsmanship with modern design trends and comprehensive event planning services - all under one roof. Our personalized approach means you're not just another client; we're invested in making your event truly special. We're building our reputation one satisfied customer at a time, and your celebration matters to us.`
    },
    {
      question: "What payment methods do you accept?",
      answer: `We accept multiple payment methods for your convenience including M-PESA (our most popular option), bank transfer, cash, and mobile money services. We require a deposit to secure your date, with the balance typically due closer to the event date. We're flexible and understand different budget needs, so we can discuss payment arrangements during your consultation that work best for you.`
    },
    {
      question: "Can you work with my existing vendors and venues?",
      answer: `Absolutely! We love collaborating with other professional vendors to create seamless celebrations. We regularly work with photographers, florists, decorators, venues around Lake Naivasha, and other service providers across the region. If you already have vendors booked, we'll coordinate with them to ensure everything flows perfectly. We're also building a network of trusted local partners and can recommend reliable vendors if you need additional services.`
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I have some questions about your services that weren't covered in the FAQ. Can we chat?");
    window.open(`https://wa.me/254728758344?text=${message}`, '_blank');
  };

  return (
    <section className="py-2 sm:py-8 lg:py-12 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-1 sm:mb-2">
          <h2 className="font-playfair font-bold text-lg sm:text-xl lg:text-2xl text-foreground mb-1">
            FAQ
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-1 sm:space-y-2 mb-2 sm:mb-3">
          {faqs?.map((faq, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg sm:rounded-xl card-shadow overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-left flex items-center justify-between hover:bg-muted/30 transition-colors duration-200"
                aria-expanded={openFAQ === index}
              >
                <h3 className="font-playfair font-semibold text-xs sm:text-sm lg:text-base text-foreground pr-2 sm:pr-3">
                  {faq?.question}
                </h3>
                <div className={`flex-shrink-0 transition-transform duration-300 ${
                  openFAQ === index ? 'rotate-180' : 'rotate-0'
                }`}>
                  <Icon name="ChevronDown" size={16} className="text-primary sm:w-5 sm:h-5" />
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-3 pb-2 sm:px-4 sm:pb-3">
                  <div className="border-t border-border pt-2 sm:pt-3">
                    <p className="font-source text-[10px] sm:text-xs leading-tight sm:leading-relaxed text-muted-foreground">
                      {faq?.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="hidden sm:block bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Icon name="HelpCircle" size={24} className="text-primary sm:w-7 sm:h-7" />
            </div>
            
            <h3 className="font-playfair font-bold text-lg sm:text-xl lg:text-2xl text-foreground mb-2 sm:mb-3">
              Questions?
            </h3>
            
            <p className="font-source text-xs sm:text-sm lg:text-base text-muted-foreground mb-4 sm:mb-6">
              We're here to help!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="default"
                size="sm"
                onClick={handleWhatsAppClick}
                iconName="MessageCircle"
                iconPosition="left"
                className="font-montserrat btn-shadow text-sm"
              >
                Ask Us
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const contactElement = document.getElementById('contact');
                  if (contactElement) {
                    contactElement?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                iconName="Phone"
                iconPosition="left"
                className="font-montserrat text-sm"
              >
                Call Us
              </Button>
            </div>

            <div className="mt-4 sm:mt-6 pt-4 sm:pt-5 border-t border-border/50">
              <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
                <div>
                  <div className="font-playfair font-bold text-sm sm:text-base text-primary">5 min</div>
                  <div className="font-source text-xs text-muted-foreground">Response</div>
                </div>
                <div>
                  <div className="font-playfair font-bold text-sm sm:text-base text-primary">Free</div>
                  <div className="font-source text-xs text-muted-foreground">Consultation</div>
                </div>
                <div>
                  <div className="font-playfair font-bold text-sm sm:text-base text-primary">24/7</div>
                  <div className="font-source text-xs text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Options */}
        <div className="hidden sm:grid mt-8 sm:mt-10 grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
          <button
            onClick={handleWhatsAppClick}
            className="bg-card hover:bg-muted/50 rounded-lg p-3 sm:p-4 card-shadow hover:shadow-lg transition-all duration-200 group text-center"
          >
            <Icon name="MessageCircle" size={20} className="text-green-500 mx-auto mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-200 sm:w-6 sm:h-6" />
            <div className="font-source font-medium text-xs sm:text-sm text-foreground">WhatsApp</div>
          </button>

          <button
            onClick={() => window.open('tel:+254728758344', '_self')}
            className="bg-card hover:bg-muted/50 rounded-lg p-3 sm:p-4 card-shadow hover:shadow-lg transition-all duration-200 group text-center"
          >
            <Icon name="Phone" size={20} className="text-blue-500 mx-auto mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-200 sm:w-6 sm:h-6" />
            <div className="font-source font-medium text-xs sm:text-sm text-foreground">Call</div>
          </button>

          <button
            onClick={() => window.open('mailto:hello@kahakibakers.com', '_self')}
            className="bg-card hover:bg-muted/50 rounded-lg p-3 sm:p-4 card-shadow hover:shadow-lg transition-all duration-200 group text-center"
          >
            <Icon name="Mail" size={20} className="text-purple-500 mx-auto mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-200 sm:w-6 sm:h-6" />
            <div className="font-source font-medium text-xs sm:text-sm text-foreground">Email</div>
          </button>

          <button
            onClick={() => {
              const contactElement = document.getElementById('contact');
              if (contactElement) {
                contactElement?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-card hover:bg-muted/50 rounded-lg p-3 sm:p-4 card-shadow hover:shadow-lg transition-all duration-200 group text-center"
          >
            <Icon name="Calendar" size={20} className="text-orange-500 mx-auto mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-200 sm:w-6 sm:h-6" />
            <div className="font-source font-medium text-xs sm:text-sm text-foreground">Visit</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
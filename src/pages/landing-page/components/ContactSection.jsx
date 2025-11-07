import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactSection = () => {
  const [isOnline, setIsOnline] = useState(true);

  const contactMethods = [
    {
      icon: "Phone",
      title: "Call Us",
      value: "+254 728 758 344",
      description: "Mon-Sat: 9AM-7PM",
      action: () => window.open('tel:+254728758344', '_self')
    },
    {
      icon: "Mail",
      title: "Email Us",
      value: "hello@kahakibakers.com",
      description: "We reply immediately",
      action: () => window.open('mailto:hello@kahakibakers.com', '_self')
    },
    {
      icon: "MapPin",
      title: "Visit Us",
      value: "123 Baker Street, Sweet City, SC 12345",
      description: "By appointment only",
      action: () => window.open('https://maps.google.com/?q=123+Baker+Street+Sweet+City+SC', '_blank')
    }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: "Facebook",
      followers: "12.5K",
      url: "https://facebook.com/kahakibakers",
      color: "text-blue-600"
    },
    {
      name: "Instagram",
      icon: "Instagram",
      followers: "18.2K",
      url: "https://instagram.com/kahakibakers",
      color: "text-pink-600"
    },
    {
      name: "TikTok",
      icon: "Music",
      followers: "8.7K",
      url: "https://tiktok.com/@kahakibakers",
      color: "text-gray-800"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'd like to discuss my upcoming event and get a quote for your services. When would be a good time to chat?");
    window.open(`https://wa.me/254728758344?text=${message}`, '_blank');
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-2 sm:py-8 lg:py-12 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-2 sm:mb-3">
          <h2 className="font-playfair font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-1 sm:mb-2">
            Contact
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* WhatsApp Priority Contact */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-2xl p-6 lg:p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Icon name="MessageCircle" size={24} color="white" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-xl text-foreground">WhatsApp Business</h3>
                    <p className="font-source text-sm text-muted-foreground">Fastest response time</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                  <span className="font-source text-sm text-muted-foreground">
                    {isOnline ? 'Online now' : 'Offline'}
                  </span>
                </div>
              </div>
              
              <p className="font-source text-muted-foreground mb-6">
                Get instant responses to your questions about cakes, events, pricing, and availability. Our team typically responds within 5 minutes during business hours.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/50 rounded-lg p-3">
                  <div className="text-sm font-source text-muted-foreground">Average Response</div>
                  <div className="text-lg font-playfair font-semibold text-foreground">5 minutes</div>
                </div>
                <div className="bg-white/50 rounded-lg p-3">
                  <div className="text-sm font-source text-muted-foreground">Available</div>
                  <div className="text-lg font-playfair font-semibold text-foreground">Mon-Sat 9AM-7PM</div>
                </div>
              </div>

              <Button
                variant="default"
                fullWidth
                size="lg"
                onClick={handleWhatsAppClick}
                iconName="MessageCircle"
                iconPosition="left"
                className="font-montserrat btn-shadow bg-green-500 hover:bg-green-600 border-green-500 hover:border-green-600"
              >
                Start WhatsApp Conversation
              </Button>
            </div>

            {/* Other Contact Methods */}
            <div className="space-y-4">
              <h3 className="font-playfair font-bold text-xl text-foreground mb-6">Other Ways to Reach Us</h3>
              {contactMethods?.map((method, index) => (
                <div 
                  key={method?.title}
                  className="bg-card rounded-xl p-6 card-shadow hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  onClick={method?.action}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                      <Icon name={method?.icon} size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-source font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                        {method?.title}
                      </h4>
                      <p className="font-source text-muted-foreground">{method?.value}</p>
                      <p className="font-source text-sm text-muted-foreground">{method?.description}</p>
                    </div>
                    <Icon name="ExternalLink" size={16} className="text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="font-playfair font-bold text-xl text-foreground mb-4 flex items-center">
                <Icon name="Clock" size={24} className="text-primary mr-3" />
                Business Hours
              </h3>
              <div className="space-y-3">
                {businessHours?.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                    <span className="font-source text-muted-foreground">{schedule?.day}</span>
                    <span className="font-source font-medium text-foreground">{schedule?.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-8">
            {/* Social Media */}
            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="font-playfair font-bold text-xl text-foreground mb-6">Follow Our Journey</h3>
              <p className="font-source text-muted-foreground mb-6">
                Get inspired by our latest creations, behind-the-scenes content, and client celebrations on social media.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks?.map((social) => (
                  <button
                    key={social?.name}
                    onClick={() => handleSocialClick(social?.url)}
                    className="bg-surface hover:bg-muted/50 rounded-lg p-4 transition-all duration-200 group text-left"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Icon name={social?.icon} size={24} className={`${social?.color} group-hover:scale-110 transition-transform duration-200`} />
                      <Icon name="ExternalLink" size={14} className="text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                    </div>
                    <div className="font-source font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                      {social?.name}
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-source text-sm text-muted-foreground text-center">
                  Tag us in your celebrations! We love sharing our clients' special moments.
                </p>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <Icon name="AlertCircle" size={20} color="white" />
                </div>
                <h3 className="font-playfair font-bold text-lg text-foreground">Last-Minute Events?</h3>
              </div>
              <p className="font-source text-muted-foreground mb-4">
                Need something urgently? We understand that special occasions sometimes come up unexpectedly. Contact us immediately for rush orders and emergency planning.
              </p>
              <Button
                variant="outline"
                onClick={handleWhatsAppClick}
                iconName="Zap"
                iconPosition="left"
                className="font-montserrat border-orange-300 text-orange-600 hover:bg-orange-50"
              >
                Emergency Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
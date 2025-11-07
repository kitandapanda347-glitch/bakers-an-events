import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustSignalsSection = () => {
  const certifications = [
  {
    icon: "Shield",
    title: "Health Department A+ Rating",
    description: "Certified food safety and hygiene standards"
  },
  {
    icon: "Award",
    title: "Best Local Bakery 2023",
    description: "Sweet City Business Awards winner"
  },
  {
    icon: "CheckCircle",
    title: "Licensed & Insured",
    description: "Full liability coverage for all events"
  },
  {
    icon: "Users",
    title: "Professional Event Planners",
    description: "Certified by International Association"
  }];


  const corporateClients = [
  {
    name: "Safaricom Ltd",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Safaricom_Logo.png",
    logoAlt: "Safaricom telecommunications company logo"
  },
  {
    name: "Lake Naivasha Resort",
    logo: "https://www.lakenaivasharesortskenya.com/images/logo.png",
    logoAlt: "Lake Naivasha Resort hotel logo with lakeside theme"
  },
  {
    name: "Naivasha Hospital",
    logo: "/assets/images/no_image.png",
    logoAlt: "Naivasha Hospital medical center logo"
  },
  {
    name: "St. Mary's School Naivasha",
    logo: "/assets/images/no_image.png",
    logoAlt: "St. Mary's School Naivasha educational institution logo"
  },
  {
    name: "Equity Bank Kenya",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Equity_Bank_logo.svg/1200px-Equity_Bank_logo.svg.png",
    logoAlt: "Equity Bank Kenya financial institution logo"
  },
  {
    name: "Kenya Flower Council",
    logo: "https://www.kenyaflowercouncil.org/wp-content/uploads/2019/09/KFC-Logo.png",
    logoAlt: "Kenya Flower Council logo"
  }];


  const achievements = [
  {
    number: "15+",
    label: "Years Experience",
    icon: "Calendar"
  },
  {
    number: "500+",
    label: "Events Completed",
    icon: "PartyPopper"
  },
  {
    number: "1000+",
    label: "Custom Cakes",
    icon: "Cake"
  },
  {
    number: "98%",
    label: "Client Satisfaction",
    icon: "Heart"
  }];



  return (
    <section className="py-2 sm:py-8 lg:py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Certifications */}
        <div className="mb-2 sm:mb-3 lg:mb-4">
          <div className="text-center mb-2 sm:mb-3">
            <h2 className="font-playfair font-bold text-xl sm:text-2xl lg:text-3xl text-foreground mb-1 sm:mb-2">
              Trust
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {certifications?.map((cert, index) =>
            <div key={index} className="text-center p-3 sm:p-5 lg:p-6 bg-surface rounded-lg sm:rounded-xl card-shadow hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Icon name={cert?.icon} size={20} className="text-primary sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                </div>
                <h3 className="font-playfair font-semibold text-sm sm:text-base lg:text-lg text-foreground mb-1 sm:mb-2">
                  {cert?.title}
                </h3>
                <p className="font-source text-xs sm:text-sm text-muted-foreground">
                  {cert?.description}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Achievements Stats */}
        <div className="mb-2 sm:mb-3 lg:mb-4">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl sm:rounded-2xl p-5 sm:p-8 lg:p-12">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="font-playfair font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-2 sm:mb-4">
                Our Track Record
              </h3>
              <p className="font-source text-sm sm:text-base text-muted-foreground">
                Excellence and client satisfaction
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {achievements?.map((achievement, index) =>
              <div key={index} className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Icon name={achievement?.icon} size={18} className="text-primary sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-primary mb-1 sm:mb-2">
                    {achievement?.number}
                  </div>
                  <div className="font-source text-xs sm:text-sm lg:text-base text-muted-foreground">
                    {achievement?.label}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quality Guarantees */}
        <div className="bg-gradient-to-r from-success/10 to-primary/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
          <div className="text-center mb-5 sm:mb-6">
            <h3 className="font-playfair font-bold text-xl sm:text-2xl lg:text-3xl text-foreground mb-2 sm:mb-3">
              Our Guarantees
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            <div className="text-center p-3 sm:p-4 lg:p-6 bg-white/50 rounded-lg sm:rounded-xl">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <Icon name="CheckCircle2" size={20} className="text-success sm:w-6 sm:h-6" />
              </div>
              <h4 className="font-playfair font-semibold text-sm sm:text-base text-foreground mb-1 sm:mb-2">
                Satisfaction
              </h4>
              <p className="font-source text-xs sm:text-sm text-muted-foreground">
                100% guaranteed
              </p>
            </div>

            <div className="text-center p-3 sm:p-4 lg:p-6 bg-white/50 rounded-lg sm:rounded-xl">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <Icon name="Clock" size={20} className="text-primary sm:w-6 sm:h-6" />
              </div>
              <h4 className="font-playfair font-semibold text-sm sm:text-base text-foreground mb-1 sm:mb-2">
                On-Time
              </h4>
              <p className="font-source text-xs sm:text-sm text-muted-foreground">
                Always punctual
              </p>
            </div>

            <div className="text-center p-3 sm:p-4 lg:p-6 bg-white/50 rounded-lg sm:rounded-xl col-span-2 md:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <Icon name="Shield" size={20} className="text-secondary sm:w-6 sm:h-6" />
              </div>
              <h4 className="font-playfair font-semibold text-sm sm:text-base text-foreground mb-1 sm:mb-2">
                Quality
              </h4>
              <p className="font-source text-xs sm:text-sm text-muted-foreground">
                Premium always
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TrustSignalsSection;
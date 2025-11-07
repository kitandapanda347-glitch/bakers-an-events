import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const filters = [
  { id: 'all', label: 'All Creations', icon: 'Grid3X3' },
  { id: 'bakery', label: 'Bakery Creations', icon: 'Cake' },
  { id: 'wedding', label: 'Wedding Events', icon: 'Heart' },
  { id: 'corporate', label: 'Corporate Functions', icon: 'Briefcase' },
  { id: 'birthday', label: 'Birthday Celebrations', icon: 'Gift' }];

  const galleryItems = [
  {
    id: 1,
    category: 'wedding',
    image: "/assets/images/Elegant Wedding Cake.jfif",
    alt: 'Three-tier white wedding cake with cascading sugar flowers and gold ribbon details on crystal cake stand',
    title: 'Elegant Wedding Cake',
    description: 'Three-tier masterpiece with sugar flowers'
  },
  {
    id: 2,
    category: 'birthday',
    image: "/assets/images/raindowcake.jfif",
    alt: 'Colorful rainbow birthday cake with multiple layers, buttercream frosting, and sparkler candles',
    title: 'Rainbow Birthday Cake',
    description: 'Vibrant celebration for a special day'
  },
  {
    id: 3,
    category: 'corporate',
    image: "/assets/images/cooperate-event-setup.jfif",
    alt: 'Professional corporate event setup with elegant dessert table featuring tiered stands and branded cupcakes',
    title: 'Corporate Event Setup',
    description: 'Professional dessert presentation'
  },
  {
    id: 4,
    category: 'wedding',
    image: "/assets/images/Garden Wedding Reception.jfif",
    alt: 'Outdoor wedding reception with round tables, white linens, centerpieces, and string lights at golden hour',
    title: 'Garden Wedding Reception',
    description: 'Romantic outdoor celebration setup'
  },
  {
    id: 5,
    category: 'bakery',
    image: "/assets/images/Artisanal Cupcakes.jfif",
    alt: 'Assorted artisanal cupcakes with various frosting flavors and decorative toppings on wooden display board',
    title: 'Artisanal Cupcakes',
    description: 'Handcrafted individual treats'
  },
  {
    id: 6,
    category: 'birthday',
    image: "/assets/images/superhero.jfif",
    alt: 'Superhero themed birthday party setup with blue and red decorations, cape-wearing children, and themed cake',
    title: 'Superhero Birthday Party',
    description: 'Themed celebration for young heroes'
  },
  {
    id: 7,
    category: 'corporate',
    image: "/assets/images/galadinner.jfif",
    alt: 'Modern corporate gala dinner with round tables, ambient lighting, and professional stage setup',
    title: 'Corporate Gala Dinner',
    description: 'Sophisticated business event'
  },
  {
    id: 8,
    category: 'bakery',
    image: "/assets/images/Chocolate Elegance Cake.jfif",
    alt: 'Elegant chocolate wedding cake with dark ganache, gold leaf accents, and fresh berries on marble pedestal',
    title: 'Chocolate Elegance Cake',
    description: 'Rich chocolate creation with gold accents'
  },
  {
    id: 9,
    category: 'wedding',
    image: "/assets/images/Wedding Cake Cutting.crdownload",
    alt: 'Bride and groom cutting multi-tier white wedding cake with floral decorations at reception venue',
    title: 'Wedding Cake Cutting',
    description: 'Perfect moment captured'
  },
  {
    id: 10,
    category: 'birthday',
    image: "/assets/images/princess.jfif",
    alt: 'Princess themed birthday party with pink decorations, tiara-wearing birthday girl, and castle cake',
    title: 'Princess Birthday Party',
    description: 'Magical celebration fit for royalty'
  },
  {
    id: 11,
    category: 'corporate',
    image: "/assets/images/product-lounch.jfif",
    alt: 'Corporate product launch event with modern stage, branded backdrop, and professional lighting setup',
    title: 'Product Launch Event',
    description: 'Professional brand celebration'
  },
  {
    id: 12,
    category: 'bakery',
    image: "/assets/images/French Macarons.jfif",
    alt: 'Assorted French macarons in pastel colors arranged on white marble surface with gold accents',
    title: 'French Macarons',
    description: 'Delicate French confections'
  }];


  const filteredItems = activeFilter === 'all' ?
  galleryItems :
  galleryItems?.filter((item) => item?.category === activeFilter);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 200);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  const handleFilterChange = (filterId) => {
    setIsLoading(true);
    setActiveFilter(filterId);
  };

  const openLightbox = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I saw your gallery and I'm impressed! Can we discuss creating something similar for my event?");
    window.open(`https://wa.me/254728758344?text=${message}`, '_blank');
  };

  return (
    <section id="gallery" className="py-2 sm:py-8 lg:py-12 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-2 sm:mb-3">
          <h2 className="font-playfair font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-1 sm:mb-2">
            Gallery
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-2 sm:mb-3">
          {filters?.map((filter) =>
          <Button
            key={filter?.id}
            variant={activeFilter === filter?.id ? "default" : "outline"}
            size="sm"
            onClick={() => handleFilterChange(filter?.id)}
            iconName={filter?.icon}
            iconPosition="left"
            className="font-montserrat transition-all duration-300">

              {filter?.label}
            </Button>
          )}
        </div>

        {/* Gallery Grid */}
        <div className="relative">
          {isLoading &&
          <div className="absolute inset-0 bg-surface/80 backdrop-blur-sm z-10 flex items-center justify-center">
              <div className="flex items-center space-x-3">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                <span className="font-source text-muted-foreground">Loading gallery...</span>
              </div>
            </div>
          }

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
            {filteredItems?.map((item, index) =>
            <div
              key={item?.id}
              className="group relative bg-card rounded-xl overflow-hidden card-shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openLightbox(item)}
              style={{
                animationDelay: `${index * 100}ms`,
                opacity: isLoading ? 0 : 1,
                transform: isLoading ? 'translateY(20px)' : 'translateY(0)',
                transition: 'all 0.5s ease-out'
              }}>

                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <Image
                  src={item?.image}
                  alt={item?.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white p-4">
                      <Icon name="ZoomIn" size={32} className="mx-auto mb-2" />
                      <p className="font-source text-sm">Click to view</p>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-primary/90 text-white text-xs font-source font-medium rounded-full">
                      {filters?.find((f) => f?.id === item?.category)?.label || 'Gallery'}
                    </span>
                  </div>
                </div>

                <div className="p-2 sm:p-3 lg:p-4">
                  <h3 className="font-playfair font-semibold text-sm sm:text-base lg:text-lg text-foreground mb-1 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                    {item?.title}
                  </h3>
                  <p className="font-source text-xs sm:text-sm text-muted-foreground line-clamp-1 sm:line-clamp-2">
                    {item?.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-10 sm:mt-12 lg:mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl sm:rounded-2xl p-5 sm:p-8 lg:p-12">
            <h3 className="font-playfair font-bold text-xl sm:text-2xl lg:text-3xl text-foreground mb-3 sm:mb-4">
              Create Your Masterpiece
            </h3>
            <p className="font-source text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life with our expertise in both custom cakes and event planning.
            </p>
            <Button
              variant="default"
              size="lg"
              onClick={handleWhatsAppClick}
              iconName="MessageCircle"
              iconPosition="left"
              className="font-montserrat btn-shadow">

              Start Your Project
            </Button>
          </div>
        </div>
      </div>
      {/* Lightbox Modal */}
      {selectedImage &&
      <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-4xl my-8">
            <button
            onClick={closeLightbox}
            className="absolute -top-10 sm:-top-12 right-0 text-white hover:text-primary transition-colors duration-200 z-10 w-10 h-10 flex items-center justify-center"
            aria-label="Close lightbox">

              <Icon name="X" size={28} />
            </button>
            
            <div className="bg-card rounded-xl overflow-hidden card-shadow">
              <div className="relative">
                <Image
                src={selectedImage?.image}
                alt={selectedImage?.alt}
                className="w-full max-h-[50vh] sm:max-h-96 object-contain" />

              </div>
              <div className="p-4 sm:p-6">
                <h3 className="font-playfair font-bold text-lg sm:text-xl text-foreground mb-2">
                  {selectedImage?.title}
                </h3>
                <p className="font-source text-sm sm:text-base text-muted-foreground mb-4">
                  {selectedImage?.description}
                </p>
                <Button
                variant="default"
                fullWidth
                onClick={handleWhatsAppClick}
                iconName="MessageCircle"
                iconPosition="left"
                className="font-montserrat">

                  Create Something Similar
                </Button>
              </div>
            </div>
          </div>
        </div>
      }
    </section>);

};

export default GallerySection;
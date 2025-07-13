import Image from 'next/image';

const ImageGallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
      alt: "Restoran İç Mekan",
      size: "medium" // 1x1
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
      alt: "Lezzetli Yemekler",
      size: "medium" // 1x1
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
      alt: "Şef Mutfakta",
      size: "medium" // 1x1
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop",
      alt: "Restoran Dış Görünüm",
      size: "medium" // 1x1
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
      alt: "Salata",
      size: "medium" // 1x1
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop",
      alt: "Restoran Masaları",
      size: "medium" // 1x1
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop",
      alt: "Tatlı",
      size: "medium" // 1x1
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop",
      alt: "Kahve",
      size: "medium" // 1x1
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
      alt: "Yemek Hazırlığı",
      size: "medium" // 1x1
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
      alt: "Restoran Atmosferi",
      size: "medium" // 1x1
    }
  ];



  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Galeri
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Restoranımızın atmosferi ve lezzetli yemeklerimizden kareler
          </p>
        </div>

        {/* Image Grid - Responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 sm:gap-2">
          {galleryImages.slice(0, 8).map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden cursor-pointer aspect-square rounded-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <p className="text-xs sm:text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button for Mobile */}
        <div className="text-center mt-6 sm:mt-8 lg:hidden">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold transition-colors">
            Daha Fazla Göster
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
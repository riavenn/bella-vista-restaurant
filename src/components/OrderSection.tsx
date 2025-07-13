'use client';
import React from 'react';
import Image from 'next/image';

interface OrderOption {
  id: string;
  name: string;
  description: string;
  icon: string;
  bgColor: string;
  textColor: string;
  hoverColor: string;
  link?: string;
  phone?: string;
}

const OrderSection = () => {
  const orderOptions: OrderOption[] = [
    {
      id: 'phone',
      name: 'Telefonla Sipariş',
      description: 'Hızlı ve kolay telefon siparişi için bizi arayın',
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      bgColor: 'bg-yellow-600',
      textColor: 'text-white',
      hoverColor: 'hover:bg-yellow-700',
      phone: '+90 (212) 555 0123'
    },
    {
      id: 'yemeksepeti',
      name: 'Yemeksepeti',
      description: 'Türkiye\'nin en büyük yemek sipariş platformu',
      icon: 'yemeksepeti',
      bgColor: 'bg-yellow-600',
      textColor: 'text-white',
      hoverColor: 'hover:bg-yellow-700',
      link: 'https://www.yemeksepeti.com'
    },
    {
      id: 'getir',
      name: 'Getir Yemek',
      description: 'Hızlı teslimat ile lezzetli yemekler',
      icon: 'getir',
      bgColor: 'bg-yellow-600',
      textColor: 'text-white',
      hoverColor: 'hover:bg-yellow-700',
      link: 'https://getir.com/yemek/?gad_campaignid=12546993994'
    },
    {
      id: 'migros',
      name: 'Migros Yemek',
      description: 'Kaliteli yemekler, güvenilir teslimat',
      icon: 'migros',
      bgColor: 'bg-yellow-600',
      textColor: 'text-white',
      hoverColor: 'hover:bg-yellow-700',
      link: 'https://www.migros.com.tr/yemek'
    },
    {
      id: 'trendyol',
      name: 'Trendyol Yemek',
      description: 'Avantajlı fiyatlarla hızlı teslimat',
      icon: 'trendyol',
      bgColor: 'bg-yellow-600',
      textColor: 'text-white',
      hoverColor: 'hover:bg-yellow-700',
      link: 'https://www.trendyolyemek.com'
    }
  ];

  const handleOrderClick = (option: OrderOption) => {
    if (option.phone) {
      window.open(`tel:${option.phone}`, '_self');
    } else if (option.link) {
      window.open(option.link, '_blank');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, option: OrderOption) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleOrderClick(option);
    }
  };

  const renderIcon = (iconType: string) => {
    if (iconType === 'yemeksepeti') {
      return (
        <div className="w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center">
          <Image
            src="https://kurumsal.yemeksepeti.com/wp-content/uploads/2023/11/Yemeksepeti-2.jpg"
            alt="Yemeksepeti Logo"
            width={64}
            height={64}
            className="w-full h-full object-contain"
          />
        </div>
      );
    }
    if (iconType === 'getir') {
      return (
        <div className="w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center">
          <Image
            src="https://logowik.com/content/uploads/images/getir3303.jpg"
            alt="Getir Yemek Logo"
            width={64}
            height={64}
            className="w-full h-full object-contain"
          />
        </div>
      );
    }
    if (iconType === 'migros') {
      return (
        <div className="w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center">
          <Image
            src="https://images.seeklogo.com/logo-png/45/1/migros-yemek-logo-png_seeklogo-454008.png"
            alt="Migros Yemek Logo"
            width={64}
            height={64}
            className="w-full h-full object-contain"
          />
        </div>
      );
    }
    if (iconType === 'trendyol') {
      return (
        <div className="w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center">
          <Image
            src="https://images.seeklogo.com/logo-png/43/1/trendyol-yemek-logo-png_seeklogo-431558.png"
            alt="Trendyol Yemek Logo"
            width={64}
            height={64}
            className="w-full h-full object-contain"
          />
        </div>
      );
    }
    // Default phone icon with background
    return (
      <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={iconType}
          />
        </svg>
      </div>
    );
  };

  return (
    <section id="order-section" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-4 sm:mb-6">
            Sipariş Ver
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            Lezzetli yemeklerimizi telefon veya favori uygulamanız üzerinden kolayca sipariş edebilirsiniz
          </p>
        </div>

        {/* Order Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {orderOptions.map((option) => (
            <div
              key={option.id}
              onClick={() => handleOrderClick(option)}
              onKeyDown={(e) => handleKeyDown(e, option)}
              tabIndex={0}
              role="button"
              aria-label={`${option.name} ile sipariş ver`}
              className={`
                ${option.bgColor} ${option.textColor} ${option.hoverColor}
                rounded-xl p-4 sm:p-6 cursor-pointer transition-all duration-300
                transform hover:scale-105 hover:shadow-xl
                focus:outline-none focus:ring-4 focus:ring-yellow-400/50
                group flex flex-col justify-center items-center min-h-[200px] sm:min-h-[220px]
              `}
            >
              {/* Icon */}
              <div className="flex justify-center mb-3 sm:mb-4">
                {renderIcon(option.icon)}
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-yellow-200 transition-colors duration-300">
                  {option.name}
                </h3>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                  {option.description}
                </p>
                {option.phone && (
                  <p className="text-xs sm:text-sm font-semibold mt-2 text-yellow-200">
                    {option.phone}
                  </p>
                )}
              </div>

              {/* Hover Effect Arrow */}
              <div className="flex justify-center mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
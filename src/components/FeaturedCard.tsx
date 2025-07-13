import { MenuItem } from '../data/menuData';

interface FeaturedCardProps {
  item: MenuItem;
}

const FeaturedCard = ({ item }: FeaturedCardProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-xl overflow-visible hover:shadow-2xl transition-all duration-300 transform group border border-white/10 hover:border-yellow-500/30 relative flex flex-col h-full">
      {/* Favorite Badge */}
      <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2 z-30">
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 whitespace-nowrap">
          <svg className="w-3 h-3 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span className="hidden sm:inline">HAFTANIN FAVORİ ÜRÜNÜ</span>
          <span className="sm:hidden">FAVORİ</span>
        </div>
      </div>

      {/* Image Container */}
      <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden rounded-t-2xl mt-2 sm:mt-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-300" />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Hover Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <p className="text-white text-center px-2 sm:px-4 font-semibold text-xs sm:text-sm leading-tight drop-shadow-lg">
            {item.hoverText}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 lg:p-5 flex-1 flex flex-col">
        <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 line-clamp-1">{item.name}</h3>
        <p className="text-gray-400 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed line-clamp-3 flex-1">{item.description}</p>

        <div className="flex items-center gap-2 sm:gap-3 mt-auto">
          <button className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold py-2 sm:py-3 px-3 sm:px-4 rounded-xl transition-all duration-200 cursor-pointer text-xs sm:text-sm shadow-lg hover:shadow-xl">
            Sepete Ekle
          </button>
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-bold text-xs sm:text-sm shadow-lg min-w-16 sm:min-w-20 text-center">
            ₺{item.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
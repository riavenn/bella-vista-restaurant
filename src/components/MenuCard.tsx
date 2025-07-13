import { MenuItem } from '../data/menuData';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard = ({ item }: MenuCardProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform group border border-white/10 hover:border-yellow-500/30 h-full flex flex-col">
      {/* Image Container */}
      <div className="relative h-32 sm:h-36 md:h-40 overflow-hidden">
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
      <div className="p-3 sm:p-4 flex-1 flex flex-col">
        <h3 className="text-sm sm:text-base font-bold text-white mb-2 line-clamp-1">{item.name}</h3>
        <p className="text-gray-400 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed line-clamp-3 flex-1">{item.description}</p>

        <div className="flex items-center gap-2 mt-auto">
          <button className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold py-2 px-2 sm:px-3 rounded-xl transition-all duration-200 cursor-pointer text-xs shadow-lg hover:shadow-xl">
            Sepete Ekle
          </button>
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-2 sm:px-3 py-2 rounded-xl font-bold text-xs shadow-lg min-w-12 sm:min-w-16 text-center">
            ₺{item.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
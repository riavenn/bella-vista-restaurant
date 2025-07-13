'use client';
import { featuredItems } from '../data/menuData';
import FeaturedCard from './FeaturedCard';

const FeaturedSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black/90 to-black/95 text-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
            Bu Haftanın Favorileri
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Müşterilerimizin en çok tercih ettiği lezzetler
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Featured Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredItems.map((item) => (
            <FeaturedCard key={item.id} item={item} />
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-yellow-500/20 rounded-full opacity-50"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-yellow-500/20 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-5 w-2 h-2 bg-yellow-500/40 rounded-full"></div>
        <div className="absolute top-1/3 right-5 w-3 h-3 bg-yellow-500/30 rounded-full"></div>
      </div>
    </section>
  );
};

export default FeaturedSection;
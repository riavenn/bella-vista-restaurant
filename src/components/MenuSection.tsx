'use client';
import { useState } from 'react';
import { menuData, categories } from '../data/menuData';
import MenuCard from './MenuCard';

const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8; // 2 satır x 4 sütun = 8 item

  const getFilteredItems = () => {
    if (selectedCategory === 'Tümü') {
      return Object.values(menuData).flat();
    }
    return menuData[selectedCategory as keyof typeof menuData] || [];
  };

  const filteredItems = getFilteredItems();
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section id="menu" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black/90 text-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-4 sm:mb-6">
            Menümüz
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            Taze malzemelerle hazırlanan özel lezzetlerimizi keşfedin
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 lg:mb-12 px-2 sm:px-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${selectedCategory === category
                ? 'bg-yellow-500 text-black shadow-lg'
                : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
            >
              {category === 'Tümü' ? 'Tümü' :
                category === 'hamburger' ? 'Hamburger' :
                  category === 'pizza' ? 'Pizza' :
                    category === 'breakfast' ? 'Kahvaltılık' :
                      category === 'drinks' ? 'İçecekler' : category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12">
          {currentItems.length > 0 ? (
            currentItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))
          ) : (
            <div className="col-span-full text-center py-8 sm:py-12">
              <p className="text-gray-300 text-base sm:text-lg">Bu kategoride henüz ürün bulunmuyor.</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${currentPage === 1
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
            >
              Önceki
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${currentPage === page
                  ? 'bg-yellow-500 text-black shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                  }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${currentPage === totalPages
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
            >
              Sonraki
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
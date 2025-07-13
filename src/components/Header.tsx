'use client';

const Header = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative z-10 flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8">
      <div className="text-center text-white max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-shadow-lg">
          Bella Vista
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-yellow-400 font-semibold">
          Lezzet & Zarafet Buluşması
        </p>
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
          En seçkin malzemelerle hazırlanan özel tariflerimizle,
          gastronomi deneyiminizi bir üst seviyeye taşıyoruz.
          Kaliteli hizmet, zarif atmosfer ve unutulmaz lezzetler!
        </p>
        <button
          onClick={scrollToMenu}
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
          tabIndex={0}
          aria-label="Menüye göz at"
        >
          Menüye Göz At
        </button>
      </div>
    </header>
  );
};

export default Header;
const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black/90 text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Sol Taraf - Metin İçeriği */}
          <div className="space-y-6 lg:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-yellow-400">Restoranımıza Hoşgeldiniz</h2>
              {/* Çizgi */}
              <div className="w-16 sm:w-20 lg:w-24 h-1 bg-yellow-400 mb-4 lg:mb-6"></div>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                2010 yılından beri gastronomi sektöründe hizmet veren Bella Vista, 
                seçkin malzemeler ve zarif servis anlayışıyla müşterilerine 
                en iyi deneyimi sunmayı hedefliyor. Taze malzemelerle hazırlanan 
                özel tariflerimiz, kaliteli hizmet anlayışımız ve zarif atmosferimizle 
                sizlere unutulmaz bir gastronomi deneyimi yaşatıyoruz.
              </p>
            </div>
          </div>

          {/* Sağ Taraf - Video */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative">
              <div className="w-full h-48 sm:h-64 lg:h-80 rounded-lg shadow-2xl overflow-hidden border border-yellow-500/30">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Restoran Tanıtım Videosu"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-yellow-500/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
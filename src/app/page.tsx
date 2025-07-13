import Navbar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/About';
import MenuSection from '../components/MenuSection';
import FeaturedSection from '../components/FeaturedSection';
import ImageGallery from '../components/ImageGallery';
import OrderSection from '../components/OrderSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main 
      className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop')"
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Header />
        <About />
        <MenuSection />
        <FeaturedSection />
        <ImageGallery />
        <OrderSection />
        <Footer />
      </div>
    </main>
  );
}

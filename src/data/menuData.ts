export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  hoverText: string;
}

export const menuData: Record<string, MenuItem[]> = {
  hamburger: [
    {
      id: 1,
      name: "Klasik Burger",
      description:
        "180gr sulu dana köftesi, taze marul, domates, soğan, özel burger sosu ve yumuşacık hamburger ekmeği ile hazırlanan klasik lezzet",
      price: 45,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
      hoverText: "El yapımı köfte ile hazırlanan lezzetli burger",
    },
    {
      id: 2,
      name: "Cheese Burger",
      description:
        "180gr sulu köfte, erimiş cheddar peyniri, taze marul, domates, turşu ve özel sos ile zenginleştirilmiş burger deneyimi",
      price: 50,
      image:
        "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      hoverText: "Erimiş cheddar peyniri ile zenginleştirilmiş burger",
    },
    {
      id: 3,
      name: "BBQ Burger",
      description:
        "180gr köfte, özel BBQ sos, çıtır soğan halkası, marul, domates ve karamelize soğan ile hazırlanan nefis burger",
      price: 55,
      image:
        "https://images.unsplash.com/photo-1709403736483-25974cac365d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      hoverText: "Özel BBQ sosu ile marine edilmiş lezzetli burger",
    },
  ],
  pizza: [
    {
      id: 4,
      name: "Margherita Pizza",
      description:
        "İnce hamur üzerine özel domates sosu, taze mozzarella peyniri, fesleğen yaprakları ve zeytinyağı ile İtalyan usulü hazırlanan klasik pizza",
      price: 60,
      image:
        "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop",
      hoverText: "İtalyan usulü klasik margherita pizza",
    },
    {
      id: 5,
      name: "Pepperoni Pizza",
      description:
        "Çıtır hamur, zengin domates sosu, bol mozzarella peyniri ve baharatlı pepperoni dilimleri ile hazırlanan lezzetli pizza",
      price: 70,
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop",
      hoverText: "Baharatlı pepperoni ile lezzetlendirilmiş pizza",
    },
    {
      id: 6,
      name: "Karışık Pizza",
      description:
        "Özel hamur, domates sosu, mozzarella peyniri, sucuk, taze mantar, renkli biber ve soğan ile zengin malzemeli pizza",
      price: 75,
      image:
        "https://images.unsplash.com/photo-1700760934249-93efbb574d23?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      hoverText: "Zengin malzemelerle hazırlanan özel pizza",
    },
  ],
  breakfast: [
    {
      id: 7,
      name: "Serpme Kahvaltı",
      description:
        "Çeşitli peynirler, yeşil ve siyah zeytin, ev yapımı reçeller, doğal bal, tereyağı, simit, börek ve taze sebzeler ile zengin kahvaltı tabağı",
      price: 40,
      image:
        "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop",
      hoverText: "Geleneksel Türk kahvaltısı",
    },
    {
      id: 8,
      name: "Omlet",
      description:
        "3 adet taze yumurta, beyaz peynir, domates, yeşil biber ve maydanoz ile hazırlanan yumuşacık omlet",
      price: 25,
      image:
        "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop",
      hoverText: "Taze sebzelerle hazırlanan omlet",
    },
    {
      id: 9,
      name: "Menemen",
      description:
        "Taze yumurta, olgun domates, sivri biber, soğan ve baharatlar ile geleneksel usulde pişirilen nefis menemen",
      price: 30,
      image:
        "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&h=300&fit=crop",
      hoverText: "Geleneksel Türk menemen",
    },
  ],
  drinks: [
    {
      id: 10,
      name: "Çay",
      description:
        "Doğu Karadeniz'in en kaliteli çay yapraklarından demlenmiş, geleneksel ince belli bardakta servis edilen sıcak Türk çayı",
      price: 5,
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop",
      hoverText: "Geleneksel Türk çayı",
    },
    {
      id: 11,
      name: "Kahve",
      description:
        "Özenle seçilmiş kahve çekirdekleri, geleneksel yöntemlerle hazırlanan köpüklü Türk kahvesi, lokum eşliğinde",
      price: 15,
      image:
        "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=300&fit=crop",
      hoverText: "Özel harmanlanmış Türk kahvesi",
    },
    {
      id: 12,
      name: "Ayran",
      description:
        "Taze yoğurt, su ve tuz ile ev yapımı usulde hazırlanan, serinletici ve besleyici geleneksel Türk içeceği",
      price: 8,
      image:
        "https://images.unsplash.com/photo-1517448931760-9bf4414148c5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      hoverText: "Ev yapımı taze ayran",
    },
  ],
};

export const categories = ["Tümü", "hamburger", "pizza", "breakfast", "drinks"];

// Bu haftanın en popüler ürünleri
export const featuredItems: MenuItem[] = [
  {
    id: 2,
    name: "Cheese Burger",
    description:
      "180gr sulu köfte, erimiş cheddar peyniri, taze marul, domates, turşu ve özel sos ile zenginleştirilmiş burger deneyimi",
    price: 50,
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverText: "Erimiş cheddar peyniri ile zenginleştirilmiş burger",
  },
  {
    id: 5,
    name: "Pepperoni Pizza",
    description:
      "Çıtır hamur, zengin domates sosu, bol mozzarella peyniri ve baharatlı pepperoni dilimleri ile hazırlanan lezzetli pizza",
    price: 70,
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop",
    hoverText: "Baharatlı pepperoni ile lezzetlendirilmiş pizza",
  },
  {
    id: 7,
    name: "Serpme Kahvaltı",
    description:
      "Çeşitli peynirler, yeşil ve siyah zeytin, ev yapımı reçeller, doğal bal, tereyağı, simit, börek ve taze sebzeler ile zengin kahvaltı tabağı",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop",
    hoverText: "Geleneksel Türk kahvaltısı",
  },
];

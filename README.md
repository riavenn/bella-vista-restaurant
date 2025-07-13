# Bella Vista Fast Food Restaurant

Modern ve responsive bir fast food restaurant web sitesi. Next.js, TypeScript ve TailwindCSS kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **Modern UI/UX**: TailwindCSS ile şık ve kullanıcı dostu arayüz
- **Menü Sistemi**: Kategorilere ayrılmış menü ve sayfalama
- **Sipariş Sistemi**: Telefon ve popüler uygulamalar üzerinden sipariş
- **Galeri**: Resim galerisi ve öne çıkan ürünler
- **İletişim**: Footer'da iletişim bilgileri ve sosyal medya linkleri
- **Accessibility**: Erişilebilirlik standartlarına uygun

## 🛠️ Teknolojiler

- **Next.js 15.3.5** - React framework
- **TypeScript** - Type safety
- **TailwindCSS 4** - Utility-first CSS framework
- **React 19** - UI library

## 📦 Kurulum

1. Projeyi klonlayın:
```bash
git clone <repository-url>
cd fast-food-restaurant
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Environment variables dosyasını oluşturun:
```bash
cp .env.example .env.local
```

4. Development server'ı başlatın:
```bash
npm run dev
```

5. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## 🏗️ Build ve Deploy

### Production Build
```bash
npm run build
npm start
```

### Vercel'e Deploy
1. [Vercel](https://vercel.com) hesabınıza giriş yapın
2. Projeyi import edin
3. Environment variables'ları ayarlayın
4. Deploy edin

### Netlify'a Deploy
1. [Netlify](https://netlify.com) hesabınıza giriş yapın
2. Projeyi drag & drop ile yükleyin veya Git'ten import edin
3. Build command: `npm run build`
4. Publish directory: `.next`

## 📁 Proje Yapısı

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Ana sayfa
├── components/         # React bileşenleri
│   ├── About.tsx
│   ├── FeaturedCard.tsx
│   ├── FeaturedSection.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── ImageGallery.tsx
│   ├── MenuCard.tsx
│   ├── MenuSection.tsx
│   ├── Navbar.tsx
│   └── OrderSection.tsx
└── data/               # Veri dosyaları
    └── menuData.ts
```

## 🎨 Özelleştirme

- **Renkler**: `src/app/globals.css` dosyasından ana renkleri değiştirebilirsiniz
- **Menü**: `src/data/menuData.ts` dosyasından menü öğelerini düzenleyebilirsiniz
- **İletişim**: `src/components/Footer.tsx` dosyasından iletişim bilgilerini güncelleyebilirsiniz

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "İstanbul Evden Eve Nakliyat | Güvenilir Taşıma Firması",
  description: "Sigortalı, asansörlü ve uzman marangozlu taşımacılık hizmetiyle İstanbul'un 39 ilçesinde ve tüm Türkiye'de sıfır riskle taşının.",
};

const ShieldIcon = () => (
  <svg className="w-12 h-12 text-blue-950 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const CraneIcon = () => (
  <svg className="w-12 h-12 text-blue-950 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const BoxIcon = () => (
  <svg className="w-12 h-12 text-blue-950 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

export default function Home() {
  const avrupaYakasi = [
    { id: "arnavutkoy", name: "Arnavutköy" }, { id: "avcilar", name: "Avcılar" },
    { id: "bagcilar", name: "Bağcılar" }, { id: "bahcelievler", name: "Bahçelievler" },
    { id: "bakirkoy", name: "Bakırköy" }, { id: "basaksehir", name: "Başakşehir" },
    { id: "bayrampasa", name: "Bayrampaşa" }, { id: "besiktas", name: "Beşiktaş" },
    { id: "beylikduzu", name: "Beylikdüzü" }, { id: "beyoglu", name: "Beyoğlu" },
    { id: "buyukcekmece", name: "Büyükçekmece" }, { id: "catalca", name: "Çatalca" },
    { id: "esenler", name: "Esenler" }, { id: "esenyurt", name: "Esenyurt" },
    { id: "eyupsultan", name: "Eyüpsultan" }, { id: "fatih", name: "Fatih" },
    { id: "gaziosmanpasa", name: "Gaziosmanpaşa" }, { id: "gungoren", name: "Güngören" },
    { id: "kagithane", name: "Kâğıthane" }, { id: "kucukcekmece", name: "Küçükçekmece" },
    { id: "sariyer", name: "Sarıyer" }, { id: "silivri", name: "Silivri" },
    { id: "sultangazi", name: "Sultangazi" }, { id: "sisli", name: "Şişli" },
    { id: "zeytinburnu", name: "Zeytinburnu" }
  ];

  const anadoluYakasi = [
    { id: "adalar", name: "Adalar" }, { id: "atasehir", name: "Ataşehir" },
    { id: "beykoz", name: "Beykoz" }, { id: "cekmekoy", name: "Çekmeköy" },
    { id: "kadikoy", name: "Kadıköy" }, { id: "kartal", name: "Kartal" },
    { id: "maltepe", name: "Maltepe" }, { id: "pendik", name: "Pendik" },
    { id: "sancaktepe", name: "Sancaktepe" }, { id: "sultanbeyli", name: "Sultanbeyli" },
    { id: "sile", name: "Şile" }, { id: "tuzla", name: "Tuzla" },
    { id: "umraniye", name: "Ümraniye" }, { id: "uskudar", name: "Üsküdar" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      <section className="relative bg-blue-950 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none z-0">
          <Image 
            src="/images/banners/hero-main.webp"
            alt="İstanbul Evden Eve Nakliyat"
            fill
            priority 
            quality={70} 
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-blue-950/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">
            İstanbul'un En Güvenilir <br className="hidden md:block" />
            <span className="text-orange-500">Evden Eve Nakliyat</span> Firması
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Sigortalı, asansörlü ve uzman marangozlu taşımacılık hizmetiyle eşyalarınız yeni evinize sıfır riskle taşınsın.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+905322830628" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-full font-black text-xl transition-all shadow-2xl transform hover:scale-105 flex items-center justify-center gap-2">
              0532 283 06 28
            </a>
            <Link href="/hizmetler/sehirler-arasi-tasima" className="bg-white hover:bg-gray-50 text-blue-950 px-10 py-5 rounded-full font-bold text-xl transition-all shadow-lg flex items-center justify-center border border-gray-100">
              Şehirler Arası Taşıma
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:mt-[-100px] relative z-20">
            
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center transform transition-transform hover:-translate-y-2">
              <ShieldIcon />
              <h3 className="text-xl font-black text-blue-950 mb-3">%100 Sigorta Güvencesi</h3>
              <p className="text-gray-600 leading-relaxed text-sm font-medium">Tüm emtialarınız ve eşyalarınız yol boyunca oluşabilecek risklere karşı tam kapsamlı nakliyat sigortası ile koruma altındadır.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center transform transition-transform hover:-translate-y-2">
              <CraneIcon />
              <h3 className="text-xl font-black text-blue-950 mb-3">Modüler Asansörlü Nakliyat</h3>
              <p className="text-gray-600 leading-relaxed text-sm font-medium">Yüksek katlı binalarda deformasyonları sıfırlayan mobil hidrolik dış cephe asansör sistemleri.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center transform transition-transform hover:-translate-y-2">
              <BoxIcon />
              <h3 className="text-xl font-black text-blue-950 mb-3">Endüstriyel Özel Ambalaj</h3>
              <p className="text-gray-600 leading-relaxed text-sm font-medium">Kırılgan ve hassas yükleriniz için darbe sönümleyici, 5 katmanlı kraft havalı patpat ve ambalaj çözümleri.</p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-blue-950 mb-6">İstanbul'un 39 İlçesinde Kesintisiz Hizmet</h2>
            <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto font-medium">
              Bulunduğunuz ilçeyi seçerek size özel lojistik detaylarına, bölgesel operasyon planına ve anında fiyat teklifine ulaşın.
            </p>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div>
                <h3 className="text-2xl font-black text-blue-950">Avrupa Yakası İlçeleri</h3>
                <p className="text-gray-500 font-medium text-sm mt-1">Merkezi ve genişleyen operasyon alanlarıyla 25 stratejik bölge</p>
              </div>
              <div className="flex-grow h-px bg-gray-200 hidden md:block"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {avrupaYakasi.map((ilce) => (
                <Link 
                  key={ilce.id} 
                  href={`/istanbul/${ilce.id}`}
                  className="group relative h-32 md:h-40 rounded-2xl overflow-hidden shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-blue-950 group-hover:bg-orange-500 transition-colors duration-300 z-0"></div>
                  
                  <Image 
                    src={`/images/ilceler/${ilce.id}.webp`}
                    alt={`${ilce.name} Nakliyat`}
                    fill
                    quality={50}
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover opacity-30 group-hover:opacity-10 transition-opacity duration-300 z-0"
                  />

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
                    <span className="text-white font-black text-sm md:text-base tracking-wide uppercase group-hover:scale-105 transition-transform">
                      {ilce.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-8">
              <div>
                <h3 className="text-2xl font-black text-blue-950">Anadolu Yakası İlçeleri</h3>
                <p className="text-gray-500 font-medium text-sm mt-1">Boğaz hattı ve geniş yerleşim komplekslerini kapsayan 14 bölge</p>
              </div>
              <div className="flex-grow h-px bg-gray-200 hidden md:block"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {anadoluYakasi.map((ilce) => (
                <Link 
                  key={ilce.id} 
                  href={`/istanbul/${ilce.id}`}
                  className="group relative h-32 md:h-40 rounded-2xl overflow-hidden shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gray-900 group-hover:bg-blue-950 transition-colors duration-300 z-0"></div>
                  
                  <Image 
                    src={`/images/ilceler/${ilce.id}.webp`}
                    alt={`${ilce.name} Nakliyat`}
                    fill
                    quality={50}
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover opacity-30 group-hover:opacity-10 transition-opacity duration-300 z-0"
                  />

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
                    <span className="text-white font-black text-sm md:text-base tracking-wide uppercase group-hover:scale-105 transition-transform">
                      {ilce.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-orange-500 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Türkiye'nin Nakliyat Lideriyle Tanışın</h2>
          <p className="mb-10 text-orange-100 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            İstanbul'u ilçe ilçe planlıyor, Türkiye'nin her noktasına mühendislik hassasiyetinde kurumsal lojistik taşıyoruz.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="/araclar/hacim-hesaplama" className="bg-blue-950 text-white hover:bg-gray-900 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl text-center">
               Hacim Hesapla
             </Link>
             <a href="tel:+905322830628" className="bg-white text-orange-600 hover:bg-gray-50 px-10 py-4 rounded-full font-black text-lg transition-all shadow-xl text-center">
               Hemen Arayın
             </a>
          </div>
        </div>
      </section>
      
    </div>
  );
}
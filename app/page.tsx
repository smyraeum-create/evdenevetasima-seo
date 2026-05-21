import Link from "next/link";

export default function Home() {
  const avrupaYakasi = [
    { id: "arnavutkoy", name: "Arnavutköy" },
    { id: "avcilar", name: "Avcılar" },
    { id: "bagcilar", name: "Bağcılar" },
    { id: "bahcelievler", name: "Bahçelievler" },
    { id: "bakirkoy", name: "Bakırköy" },
    { id: "basaksehir", name: "Başakşehir" },
    { id: "bayrampasa", name: "Bayrampaşa" },
    { id: "besiktas", name: "Beşiktaş" },
    { id: "beylikduzu", name: "Beylikdüzü" },
    { id: "beyoglu", name: "Beyoğlu" },
    { id: "buyukcekmece", name: "Büyükçekmece" },
    { id: "catalca", name: "Çatalca" },
    { id: "esenler", name: "Esenler" },
    { id: "esenyurt", name: "Esenyurt", special: "En Kalabalık" },
    { id: "eyupsultan", name: "Eyüpsultan" },
    { id: "fatih", name: "Fatih" },
    { id: "gaziosmanpasa", name: "Gaziosmanpaşa" },
    { id: "gungoren", name: "Güngören" },
    { id: "kagithane", name: "Kâğıthane" },
    { id: "kucukcekmece", name: "Küçükçekmece" },
    { id: "sariyer", name: "Sarıyer" },
    { id: "silivri", name: "Silivri" },
    { id: "sultangazi", name: "Sultangazi" },
    { id: "sisli", name: "Şişli" },
    { id: "zeytinburnu", name: "Zeytinburnu" }
  ];

  const anadoluYakasi = [
    { id: "adalar", name: "Adalar" },
    { id: "atasehir", name: "Ataşehir" },
    { id: "beykoz", name: "Beykoz" },
    { id: "cekmekoy", name: "Çekmeköy" },
    { id: "kadikoy", name: "Kadıköy" },
    { id: "kartal", name: "Kartal" },
    { id: "maltepe", name: "Maltepe" },
    { id: "pendik", name: "Pendik" },
    { id: "sancaktepe", name: "Sancaktepe" },
    { id: "sultanbeyli", name: "Sultanbeyli" },
    { id: "sile", name: "Şile" },
    { id: "tuzla", name: "Tuzla" },
    { id: "umraniye", name: "Ümraniye" },
    { id: "uskudar", name: "Üsküdar" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      <section className="relative bg-blue-950 text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?q=80&w=2000')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-blue-950/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">
            İstanbul'un En Güvenilir <br className="hidden md:block" />
            <span className="text-orange-500">Evden Eve Nakliyat</span> Firması
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Sigortalı, asansörlü ve uzman marangozlu taşımacılık hizmetiyle eşyalarınız yeni evinize sıfır riskle taşınsın.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+905322830628" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-full font-black text-xl transition-all shadow-2xl transform hover:scale-105 flex items-center justify-center gap-2">
              0532 283 0628
            </a>
            <Link href="/hizmetler/sehirler-arasi-tasima" className="bg-white hover:bg-gray-50 text-blue-950 px-10 py-5 rounded-full font-bold text-xl transition-all shadow-lg flex items-center justify-center">
              Şehirler Arası Taşıma
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:mt-[-100px] relative z-20">
            {[
              { icon: "🛡️", title: "%100 Sigorta", text: "Tüm eşyalarınız nakliyat sigortası ile tam güvence altındadır." },
              { icon: "🏗️", title: "Asansörlü Nakliyat", text: "25. kata kadar ulaşabilen modüler asansör sistemleri." },
              { icon: "📦", title: "Özel Ambalaj", text: "Darbe emici malzemelerle profesyonel paketleme çözümleri." }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 text-center transform transition-all hover:-translate-y-2">
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-black text-blue-950 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-blue-950 mb-6">İstanbul'un 39 İlçesinde Kesintisiz Hizmet</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto font-medium">
              Bulunduğunuz ilçeyi seçerek size özel nakliye detaylarına ve anında fiyat teklifine ulaşın.
            </p>
          </div>

          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div>
                <h3 className="text-2xl font-black text-blue-950">Avrupa Yakası İlçeleri</h3>
                <p className="text-gray-500 font-medium text-sm">Merkezi ve genişleyen alanlarıyla 25 ilçe</p>
              </div>
              <div className="flex-grow h-px bg-gray-100 hidden md:block"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {avrupaYakasi.map((ilce) => (
                <Link 
                  key={ilce.id} 
                  href={`/istanbul/${ilce.id}`}
                  className="group relative h-32 md:h-40 rounded-2xl overflow-hidden shadow-sm transition-all hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-blue-950 group-hover:bg-orange-500 transition-colors duration-500"></div>
                  <div className="absolute inset-0 opacity-40 group-hover:opacity-20 transition-opacity bg-[url('https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=400')] bg-cover bg-center"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
                    <span className="text-white font-black text-sm md:text-base tracking-wide uppercase group-hover:scale-110 transition-transform">
                      {ilce.name}
                    </span>
                    {ilce.special && (
                      <span className="mt-2 px-2 py-0.5 bg-orange-500 text-white text-[10px] font-black rounded-md uppercase">
                        {ilce.special}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-10">
              <div>
                <h3 className="text-2xl font-black text-blue-950">Anadolu Yakası İlçeleri</h3>
                <p className="text-gray-500 font-medium text-sm">Boğaz hattı ve geniş yerleşim bölgelerini kapsayan 14 ilçe</p>
              </div>
              <div className="flex-grow h-px bg-gray-100 hidden md:block"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {anadoluYakasi.map((ilce) => (
                <Link 
                  key={ilce.id} 
                  href={`/istanbul/${ilce.id}`}
                  className="group relative h-32 md:h-40 rounded-2xl overflow-hidden shadow-sm transition-all hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gray-800 group-hover:bg-blue-950 transition-colors duration-500"></div>
                  <div className="absolute inset-0 opacity-40 group-hover:opacity-20 transition-opacity bg-[url('https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=400')] bg-cover bg-center"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
                    <span className="text-white font-black text-sm md:text-base tracking-wide uppercase group-hover:scale-110 transition-transform">
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
          <h2 className="text-4xl font-black mb-6">Türkiye'nin Nakliyat Lideriyle Tanışın</h2>
          <p className="mb-10 text-orange-50 text-xl max-w-2xl mx-auto font-medium">İstanbul'u parçalarcasına çalışıyor, Türkiye'nin her noktasına liderlik taşıyoruz.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Link href="/araclar/hacim-hesaplama" className="bg-blue-950 text-white hover:bg-black px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl">
               Hacim Hesapla
             </Link>
             <a href="tel:+905322830628" className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-4 rounded-full font-black text-lg transition-all shadow-xl">
               Hemen Ara
             </a>
          </div>
        </div>
      </section>
      
    </div>
  );
}
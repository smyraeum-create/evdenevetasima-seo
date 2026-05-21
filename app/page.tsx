import Link from "next/link";

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
      
      <section className="relative bg-blue-950 text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-blue-900 to-black"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            İstanbul'un En Güvenilir <br className="hidden md:block" />
            <span className="text-orange-500">Evden Eve Nakliyat</span> Firması
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Sigortalı, asansörlü ve uzman marangozlu taşımacılık hizmetiyle eşyalarınız yeni evinize sıfır riskle taşınsın.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+905322830628"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-black text-lg transition-all shadow-lg transform hover:scale-105"
            >
              Hemen Fiyat Al: 0532 283 0628
            </a>
            <Link
              href="/hizmetler/sehirler-arasi-tasima"
              className="bg-white hover:bg-gray-50 text-blue-950 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg"
            >
              Şehirler Arası Taşıma
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:mt-[-100px] relative z-20">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">%100 Sigorta Güvencesi</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Taşıma sürecinin başından sonuna kadar tüm eşyalarınız tam kapsamlı nakliyat sigortası ile koruma altındadır.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center">
              <div className="text-5xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">Asansörlü Taşımacılık</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                25. kata kadar ulaşabilen modüler dış cephe asansörlerimizle eşyalarınız merdiven yüzü görmeden güvenle taşınır.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center">
              <div className="text-5xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">Özel Ambalajlama</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Hijyenik, darbe emici balonlu naylonlar ve streç filmler ile eşyalarınız çizilmelere karşı sıfır riskle paketlenir.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-blue-950 mb-4">Profesyonel Nakliyat Hizmetlerimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">İhtiyacınıza en uygun taşıma çözümünü seçin, gerisini uzman ekibimize bırakın.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/hizmetler/evden-eve-nakliyat" className="group block bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all border border-gray-100">
              <div className="p-6">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-lg font-bold text-blue-950 mb-2 group-hover:text-orange-500 transition-colors">Evden Eve Nakliyat</h3>
                <p className="text-sm text-gray-600">Anahtar teslim, marangozlu ve sigortalı ev taşıma hizmeti.</p>
              </div>
            </Link>
            
            <Link href="/hizmetler/sehirler-arasi-tasima" className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border-l-4 border-orange-500">
              <div className="p-6">
                <div className="text-4xl mb-4">🛣️</div>
                <h3 className="text-lg font-bold text-blue-950 mb-2 group-hover:text-orange-500 transition-colors">Şehirler Arası Taşıma</h3>
                <p className="text-sm text-gray-600">Türkiye'nin 81 iline güvenilir ve hızlı nakliyat çözümleri.</p>
              </div>
            </Link>

            <Link href="/hizmetler/ofis-tasima" className="group block bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all border border-gray-100">
              <div className="p-6">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-lg font-bold text-blue-950 mb-2 group-hover:text-orange-500 transition-colors">Ofis Taşıma</h3>
                <p className="text-sm text-gray-600">İş yeriniz için kesintisiz ve kurumsal taşımacılık.</p>
              </div>
            </Link>

            <Link href="/hizmetler/parca-esya-tasima" className="group block bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all border border-gray-100">
              <div className="p-6">
                <div className="text-4xl mb-4">🛋️</div>
                <h3 className="text-lg font-bold text-blue-950 mb-2 group-hover:text-orange-500 transition-colors">Parça Eşya Taşıma</h3>
                <p className="text-sm text-gray-600">Az miktardaki eşyalarınız için ekonomik taşıma seçenekleri.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-blue-950 mb-4">İstanbul'un 39 İlçesinde Kesintisiz Hizmet</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Bulunduğunuz ilçeyi seçerek size özel nakliye detaylarına ve anında fiyat teklifine ulaşın.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-blue-950 mb-2 flex items-center gap-2">
                <span className="text-2xl">🇪🇺</span> Avrupa Yakası İlçeleri
              </h3>
              <p className="text-sm text-gray-500 mb-6 border-b pb-4">
                Avrupa Yakası'nda merkezi ve genişleyen alanlarıyla 25 ilçe bulunmaktadır:
              </p>
              <div className="flex flex-wrap gap-2">
                {avrupaYakasi.map((ilce) => (
                  <Link 
                    key={ilce.id} 
                    href={`/istanbul/${ilce.id}`}
                    className="inline-block bg-gray-50 border border-gray-200 py-2 px-4 rounded-full text-sm font-semibold text-gray-700 hover:bg-blue-950 hover:text-white hover:border-blue-950 transition-all shadow-sm"
                  >
                    {ilce.id === "esenyurt" ? (
                      <span className="flex items-center gap-1">
                        {ilce.name} <span className="text-[10px] bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider">En Kalabalık</span>
                      </span>
                    ) : (
                      ilce.name
                    )}
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-blue-950 mb-2 flex items-center gap-2">
                <span className="text-2xl">🕌</span> Anadolu Yakası İlçeleri
              </h3>
              <p className="text-sm text-gray-500 mb-6 border-b pb-4">
                Anadolu Yakası, boğaz hattı ve geniş yerleşim bölgelerini kapsayan 14 ilçeden meydana gelmektedir:
              </p>
              <div className="flex flex-wrap gap-2">
                {anadoluYakasi.map((ilce) => (
                  <Link 
                    key={ilce.id} 
                    href={`/istanbul/${ilce.id}`}
                    className="inline-block bg-gray-50 border border-gray-200 py-2 px-4 rounded-full text-sm font-semibold text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all shadow-sm"
                  >
                    {ilce.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

         </div>
      </section>

      <section className="bg-orange-500 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-6">Taşınma Maliyetinizi Hemen Öğrenin</h2>
          <p className="mb-8 text-orange-100 max-w-2xl mx-auto">Eşya hacminizi hesaplayıp size en uygun aracı ve net fiyatı dakikalar içinde belirleyelim.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="/araclar/hacim-hesaplama" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-colors">
               Hacim Hesaplama Aracı
             </Link>
             <Link href="/nakliyat-sozlesmesi" className="bg-orange-600 text-white hover:bg-orange-700 border border-orange-400 px-8 py-3 rounded-full font-bold transition-colors">
               Örnek Sözleşmeyi İncele
             </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}
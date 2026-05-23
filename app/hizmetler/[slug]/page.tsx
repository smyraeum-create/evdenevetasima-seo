import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageBanner from "../../components/PageBanner";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

// ARTIK ÇOK DAHA ZENGİN BİR VERİ YAPISI KULLANIYORUZ
const serviceData: Record<string, any> = {
  "evden-eve-nakliyat": {
    title: "Evden Eve Nakliyat",
    desc: "Anahtar teslim, sigortalı ve profesyonel ev taşıma çözümleriyle yeni evinize huzurla taşının.",
    icon: "🏠",
    bgImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000",
    intro: "Evinizi taşımak stresli bir süreç olmak zorunda değil. Uzman kadromuz, modern araç filomuz ve yenilikçi taşıma sistemlerimizle eşyalarınızı sıfır riskle yeni adresinize ulaştırıyoruz.",
    process: [
      { title: "Ücretsiz Ekspertiz", desc: "Eşyalarınızın hacmi ve taşıma planı için ücretsiz keşif yapıyoruz." },
      { title: "Profesyonel Paketleme", desc: "Avrupa standartlarında, darbe emici özel ambalajlama materyalleri kullanıyoruz." },
      { title: "Güvenli Transfer", desc: "Çelik kasalı araçlarımızla sarsıntısız ve sigortalı taşıma sağlıyoruz." },
      { title: "Montaj ve Kurulum", desc: "Yeni evinizde mobilya ve beyaz eşyalarınızı kullanıma hazır kuruyoruz." }
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600",
      "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=600",
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=600"
    ]
  },
  "ofis-tasima": {
    title: "Ofis Taşıma",
    desc: "İş yeriniz için kesintisiz, gizlilik odaklı ve kurumsal taşımacılık hizmeti.",
    icon: "🏢",
    bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000",
    intro: "İş akışınızın kesintiye uğramaması bizim için en önemli kriterdir. Dosyalarınızdan, hassas teknolojik cihazlarınıza kadar tüm ofis envanterinizi sistematik bir şekilde etiketleyip taşıyoruz.",
    process: [
      { title: "Sistematik Etiketleme", desc: "Her departmanın eşyaları kendi içinde numaralandırılır ve karışıklık önlenir." },
      { title: "IT ve Arşiv Taşıma", desc: "Sunucular, bilgisayarlar ve önemli arşiv dosyaları özel şifreli kasalarda taşınır." },
      { title: "Asansörlü Nakliyat", desc: "Plaza ve iş merkezleri için yük asansörleri veya dış cephe asansörleri kurulur." },
      { title: "Hızlı Kurulum", desc: "Mesai saatleri dışında (gece veya hafta sonu) operasyon tamamlanıp ofis anahtar teslim edilir." }
    ],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600",
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=600",
      "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=600"
    ]
  },
  // Not: Diğer hizmetler (sehirler-arasi, parca-esya vb.) aynı zengin yapıda buraya eklenecek.
  // Sistemi denemek için şimdilik fallback (varsayılan) bir yapı kuruyorum.
};

// Diğer hizmetler için varsayılan zengin yapı oluşturucu
const getServiceData = (slug: string) => {
  if (serviceData[slug]) return serviceData[slug];
  
  // Eğer özel veri girilmemişse, boş kalmaması için genel ama zengin bir şablon döndür
  const baseServices: Record<string, {title: string, icon: string}> = {
    "sehirler-arasi-tasima": { title: "Şehirler Arası Taşıma", icon: "🛣️" },
    "parca-esya-tasima": { title: "Parça Eşya Taşıma", icon: "🛋️" },
    "arac-nakliyati": { title: "Araç Nakliyatı / Çekici", icon: "🚗" },
    "esya-depolama": { title: "Eşya Depolama", icon: "📦" },
    "montaj-ve-demontaj": { title: "Montaj ve Demontaj", icon: "🪛" }
  };

  if(!baseServices[slug]) return null;

  return {
    title: baseServices[slug].title,
    desc: `${baseServices[slug].title} ihtiyaçlarınız için profesyonel, güvenilir ve sigortalı çözümler.`,
    icon: baseServices[slug].icon,
    bgImage: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2000",
    intro: `Evden Eve Taşıma güvencesiyle ${baseServices[slug].title} hizmetimizde en yüksek standartları hedefliyoruz. Uzman ekibimiz sürecin her aşamasını sizin için planlar.`,
    process: [
      { title: "Detaylı Planlama", desc: "Taşıma operasyonunuz en ince ayrıntısına kadar planlanır." },
      { title: "Güvenli İşlem", desc: "Sıfır risk prensibiyle eşyalarınız güvence altına alınır." },
      { title: "Zamanında Teslimat", desc: "Söz verdiğimiz gün ve saatte operasyon tamamlanır." }
    ],
    images: [
      "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=600",
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=600",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600"
    ]
  };
};

export async function generateStaticParams() {
  const allSlugs = ["evden-eve-nakliyat", "sehirler-arasi-tasima", "ofis-tasima", "parca-esya-tasima", "arac-nakliyati", "esya-depolama", "montaj-ve-demontaj"];
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const resolvedParams = await params;
  const service = getServiceData(resolvedParams.slug);
  
  return {
    title: service ? `${service.title} | Profesyonel Hizmet` : "Hizmet Bulunamadı",
    description: service ? service.desc : "Aradığınız hizmet sayfamız bulunmamaktadır.",
  };
}

export default async function ServicePage({ params }: RouteParams) {
  const resolvedParams = await params;
  const service = getServiceData(resolvedParams.slug);

  if (!service) notFound();

  // Dinamik İç Linkleme (Diğer Hizmetler)
  const allServices = [
    { name: "Evden Eve Nakliyat", url: "evden-eve-nakliyat" },
    { name: "Şehirler Arası Taşıma", url: "sehirler-arasi-tasima" },
    { name: "Ofis Taşıma", url: "ofis-tasima" },
    { name: "Eşya Depolama", url: "esya-depolama" }
  ].filter(s => s.url !== resolvedParams.slug);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PageBanner 
        category="Hizmetlerimiz"
        title={service.title}
        description={service.desc}
        bgImage={service.bgImage}
      />

      <main className="flex-grow w-full py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Sol Kısım: Zengin İçerik */}
          <div className="lg:col-span-2 space-y-12">
            
            <section className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">{service.icon}</div>
                <h2 className="text-3xl font-black text-blue-950">Operasyon Kapsamı</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg font-medium">
                {service.intro}
              </p>
            </section>

            {/* Galeri Alanı (SEO İçin Mükemmel) */}
            <section>
              <h3 className="text-2xl font-black text-blue-950 mb-6">Uygulama Görselleri</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {service.images.map((img: string, i: number) => (
                  <div key={i} className="relative h-48 rounded-2xl overflow-hidden shadow-md group">
                    <div className="absolute inset-0 bg-blue-950 opacity-0 group-hover:opacity-20 transition-opacity z-10"></div>
                    <img src={img} alt={`${service.title} Detay ${i+1}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </section>

            {/* Adım Adım Süreç */}
            <section className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-black text-blue-950 mb-8 border-b border-gray-100 pb-4">Nasıl Çalışıyoruz?</h3>
              <div className="space-y-8">
                {service.process.map((step: any, i: number) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center font-black flex-shrink-0 text-xl">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-600 font-medium">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sağ Kısım: Sidebar (Form ve İç Linkleme) */}
          <div className="space-y-8">
            <div className="bg-blue-950 text-white p-8 rounded-3xl shadow-xl border-b-4 border-orange-500 sticky top-24">
              <h3 className="text-xl font-black mb-4">Hızlı Fiyat Al</h3>
              <p className="text-sm text-blue-200 mb-6 font-medium leading-relaxed">
                {service.title} operasyonunuz için ücretsiz ekspertiz ve fiyat teklifi isteyin.
              </p>
              <a href="tel:+905322830628" className="block text-center bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-xl transition-all shadow-lg uppercase tracking-wider text-sm mb-4">
                Hemen Arayın
              </a>
              <Link href="/iletisim" className="block text-center bg-transparent border border-blue-400 hover:bg-blue-900 text-white font-black py-4 rounded-xl transition-all uppercase tracking-wider text-sm">
                Detaylı Form Gönder
              </Link>
            </div>

            {/* İÇ LİNKLEME AĞI (SEO'NUN KALBİ) */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-lg font-black text-blue-950 mb-6 border-b pb-2">Diğer Hizmetlerimiz</h3>
              <ul className="space-y-3">
                {allServices.map((s, i) => (
                  <li key={i}>
                    <Link href={`/hizmetler/${s.url}`} className="flex items-center gap-2 text-gray-600 hover:text-orange-500 font-medium transition-colors">
                      <span className="text-orange-500">▹</span> {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
import { Metadata } from "next";
import { notFound } from "next/navigation";

// TypeScript için parametre tip tanımlaması
interface RouteParams {
  params: Promise<{ slug: string }>;
}

// Tüm dinamik hizmetlerin veritabanı şeması
const serviceData: Record<string, { title: string; desc: string; icon: string; content: string }> = {
  "evden-eve-nakliyat": {
    title: "Evden Eve Nakliyat",
    desc: "Anahtar teslim, sigortalı ve profesyonel ev taşıma çözümleri.",
    icon: "🏠",
    content: "Eşyalarınızın güvenliği bizim önceliğimizdir. Marangozlu, ambalajlı ve asansörlü sistemlerimizle evinizi bir günden kısa sürede yeni adresine taşıyoruz."
  },
  "sehirler-arasi-tasima": {
    title: "Şehirler Arası Taşıma",
    desc: "Türkiye'nin 81 iline güvenilir ve hızlı nakliyat hizmeti.",
    icon: "🛣️",
    content: "İstanbul merkezli filomuzla Türkiye'nin her noktasına eşyalarınızı sigortalı ve kapalı kasa araçlarımızla güvenle ulaştırıyoruz."
  },
  "ofis-tasima": {
    title: "Ofis Taşıma",
    desc: "İş yeriniz için kesintisiz ve kurumsal taşımacılık hizmeti.",
    icon: "🏢",
    content: "Dosyalarınızdan teknolojik cihazlarınıza kadar tüm ofis envanterinizi sistematik bir şekilde etiketleyip, yeni ofisinize kuruyoruz."
  },
  "parca-esya-tasima": {
    title: "Parça Eşya Taşıma",
    desc: "Az miktardaki eşyalarınız için ekonomik ve hızlı nakliye.",
    icon: "🛋️",
    content: "Tek parça veya az sayıdaki eşyalarınızı diğer müşterilerimizle aynı güzergahta birleştirerek maliyeti düşürüyor, hızımızı artırıyoruz."
  },
  "arac-nakliyati": {
    title: "Araç Nakliyatı / Çekici",
    desc: "Şehirler arası profesyonel araç ve oto taşımacılık çözümleri.",
    icon: "🚗",
    content: "Binek araç, SUV veya ticari araçlarınızı, özel çoklu veya tekli çekici filomuzla, sıfır kilometre güvencesiyle ve sigortalı olarak taşıyoruz."
  },
  "esya-depolama": {
    title: "Eşya Depolama",
    desc: "7/24 güvenlikli, klimalı ve kişiye özel oda depolama alanları.",
    icon: "📦",
    content: "Ev veya ofis eşyalarınızı, nemden ve tozdan uzak, tamamen size ait kilitli odalarda, 7/24 kamera takibiyle güvenle depoluyoruz."
  },
  "montaj-ve-demontaj": {
    title: "Montaj ve Demontaj",
    desc: "Uzman marangozlarımızla mobilya ve beyaz eşya kurulum hizmeti.",
    icon: "🪛",
    content: "Gardırop, mutfak üniteleri ve beyaz eşyalarınız taşınma öncesinde hassasça sökülür, yeni evinizde tam istediğiniz yerlere montajlanır."
  }
};

// 1. Google ve Next.js için statik sayfaları önceden oluşturma fonksiyonu
export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

// 2. Dinamik SEO Meta Etiketleri Üreticisi
export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const resolvedParams = await params;
  const service = serviceData[resolvedParams.slug];
  
  return {
    title: service ? `${service.title} | Profesyonel Nakliyat` : "Hizmet Bulunamadı",
    description: service ? service.desc : "Aradığınız hizmet sayfamız bulunmamaktadır.",
  };
}

// 3. ANA SAYFA BİLEŞENİ (EXPORT DEFAULT)
export default async function ServicePage({ params }: RouteParams) {
  const resolvedParams = await params;
  const service = serviceData[resolvedParams.slug];

  // Eğer url'deki slug veritabanımızda yoksa direkt 404 sayfasına fırlat
  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* Üst Banner / Hero Alanı */}
      <div className="bg-blue-950 py-20 text-white border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">{service.icon}</div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">{service.title}</h1>
          <p className="mt-4 text-blue-200 text-lg max-w-2xl mx-auto font-medium">{service.desc}</p>
        </div>
      </div>

      {/* İçerik Kartı */}
      <div className="max-w-4xl mx-auto px-4 mt-16">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-black text-blue-950 mb-6">Hizmet Detayları ve Operasyon Kapsamı</h2>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-8">{service.content}</p>
          
          <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
            <h3 className="font-bold text-orange-950 mb-3 text-lg">Neden Bu Hizmeti Bizden Almalısınız?</h3>
            <ul className="text-sm md:text-base text-orange-800 space-y-2 font-medium">
              <li>✓ Tam kapsamlı taşımacılık ve emtia sigortası</li>
              <li>✓ Alanında uzman, tamamı kadrolu profesyonel personel</li>
              <li>✓ Ücretsiz ekspertiz ve sözleşmeli sabit fiyat garantisi</li>
            </ul>
          </div>
          
          <div className="mt-10">
            <a 
              href="tel:+905322830628" 
              className="block text-center bg-orange-500 text-white font-black py-4 rounded-xl text-xl shadow-lg hover:bg-orange-600 transition-all transform hover:-translate-y-1"
            >
              Hemen Fiyat Teklifi Alın
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
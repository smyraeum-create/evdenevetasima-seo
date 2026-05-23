import { Metadata } from "next";
import { notFound } from "next/navigation";
import PageBanner from "../../components/PageBanner";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

const serviceData: Record<string, { title: string; desc: string; icon: string; content: string; bgImage: string }> = {
  "evden-eve-nakliyat": {
    title: "Evden Eve Nakliyat",
    desc: "Anahtar teslim, sigortalı ve profesyonel ev taşıma çözümleri.",
    icon: "🏠",
    content: "Eşyalarınızın güvenliği bizim önceliğimizdir. Marangozlu, ambalajlı ve asansörlü sistemlerimizle evinizi bir günden kısa sürede yeni adresine taşıyoruz.",
    bgImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000"
  },
  "sehirler-arasi-tasima": {
    title: "Şehirler Arası Taşıma",
    desc: "Türkiye'nin 81 iline güvenilir ve hızlı nakliyat hizmeti.",
    icon: "🛣️",
    content: "İstanbul merkezli filomuzla Türkiye'nin her noktasına eşyalarınızı sigortalı ve kapalı kasa araçlarımızla güvenle ulaştırıyoruz.",
    bgImage: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2000"
  },
  "ofis-tasima": {
    title: "Ofis Taşıma",
    desc: "İş yeriniz için kesintisiz ve kurumsal taşımacılık hizmeti.",
    icon: "🏢",
    content: "Dosyalarınızdan teknolojik cihazlarınıza kadar tüm ofis envanterinizi sistematik bir şekilde etiketleyip, yeni ofisinize kuruyoruz.",
    bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000"
  },
  "parca-esya-tasima": {
    title: "Parça Eşya Taşıma",
    desc: "Az miktardaki eşyalarınız için ekonomik ve hızlı nakliye.",
    icon: "🛋️",
    content: "Tek parça veya az sayıdaki eşyalarınızı diğer müşterilerimizle aynı güzergahta birleştirerek maliyeti düşürüyor, hızımızı artırıyoruz.",
    bgImage: "https://images.unsplash.com/photo-1586528116311-ad8ed7c83a7f?q=80&w=2000"
  },
  "arac-nakliyati": {
    title: "Araç Nakliyatı / Çekici",
    desc: "Şehirler arası profesyonel araç ve oto taşımacılık çözümleri.",
    icon: "🚗",
    content: "Binek araç, SUV veya ticari araçlarınızı, özel çoklu veya tekli çekici filomuzla, sıfır kilometre güvencesiyle ve sigortalı olarak taşıyoruz.",
    bgImage: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000"
  },
  "esya-depolama": {
    title: "Eşya Depolama",
    desc: "7/24 güvenlikli, klimalı ve kişiye özel oda depolama alanları.",
    icon: "📦",
    content: "Ev veya ofis eşyalarınızı, nemden ve tozdan uzak, tamamen size ait kilitli odalarda, 7/24 kamera takibiyle güvenle depoluyoruz.",
    bgImage: "https://images.unsplash.com/photo-1586528116311-ad8ed7c83a7f?q=80&w=2000"
  },
  "montaj-ve-demontaj": {
    title: "Montaj ve Demontaj",
    desc: "Uzman marangozlarımızla mobilya ve beyaz eşya kurulum hizmeti.",
    icon: "🪛",
    content: "Gardırop, mutfak üniteleri ve beyaz eşyalarınız taşınma öncesinde hassasça sökülür, yeni evinizde tam istediğiniz yerlere montajlanır.",
    bgImage: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=2000"
  }
};

export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const resolvedParams = await params;
  const service = serviceData[resolvedParams.slug];
  
  return {
    title: service ? `${service.title} | Profesyonel Nakliyat` : "Hizmet Bulunamadı",
    description: service ? service.desc : "Aradığınız hizmet sayfamız bulunmamaktadır.",
  };
}

export default async function ServicePage({ params }: RouteParams) {
  const resolvedParams = await params;
  const service = serviceData[resolvedParams.slug];

  if (!service) notFound();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PageBanner 
        category="Hizmetlerimiz"
        title={service.title}
        description={service.desc}
        bgImage={service.bgImage}
      />

      <main className="flex-grow max-w-4xl mx-auto px-4 py-16 w-full">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
          <div className="text-6xl mb-6 text-center">{service.icon}</div>
          <h2 className="text-2xl md:text-3xl font-black text-blue-950 mb-6 text-center border-b pb-4">
            Operasyon Kapsamı ve Detaylar
          </h2>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-8 text-center">
            {service.content}
          </p>
          
          <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 mb-10">
            <h3 className="font-bold text-orange-950 mb-3 text-lg">Neden Bizi Seçmelisiniz?</h3>
            <ul className="text-sm md:text-base text-orange-800 space-y-2 font-medium">
              <li>✓ Tam kapsamlı taşımacılık ve emtia sigortası</li>
              <li>✓ Alanında uzman, tamamı kadrolu profesyonel personel</li>
              <li>✓ Ücretsiz ekspertiz ve sözleşmeli sabit fiyat garantisi</li>
            </ul>
          </div>
          
          <a 
            href="tel:+905322830628" 
            className="block text-center bg-orange-500 text-white font-black py-4 rounded-xl text-xl shadow-lg hover:bg-orange-600 transition-all transform hover:-translate-y-1 uppercase tracking-wider"
          >
            Hemen Fiyat Teklifi Alın
          </a>
        </div>
      </main>
    </div>
  );
}
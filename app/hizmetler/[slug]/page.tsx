import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

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
  }
};

export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceData[slug];
  return {
    title: service ? `${service.title} | Profesyonel Nakliyat` : "Hizmet Bulunamadı",
    description: service?.desc
  };
}

export default async function ServicePage({ params }: RouteParams) {
  const { slug } = await params;
  const service = serviceData[slug];

  if (!service) notFound();

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-blue-950 py-20 text-white border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">{service.icon}</div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">{service.title}</h1>
          <p className="mt-4 text-blue-200 text-lg max-w-2xl mx-auto">{service.desc}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-16">
        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-black text-blue-950 mb-6">Hizmet Detayları</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">{service.content}</p>
          <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
            <h3 className="font-bold text-orange-950 mb-2">Neden Bu Hizmeti Bizden Almalısınız?</h3>
            <ul className="text-sm text-orange-800 space-y-2">
              <li>• Tam kapsamlı nakliyat sigortası</li>
              <li>• Alanında uzman, kadrolu personel</li>
              <li>• Ücretsiz ekspertiz ve sabit fiyat garantisi</li>
            </ul>
          </div>
          <div className="mt-10">
            <a href="tel:+905322830628" className="block text-center bg-orange-500 text-white font-black py-4 rounded-xl text-xl shadow-lg hover:bg-orange-600 transition-all">
              Hemen Fiyat Alın
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
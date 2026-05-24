import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import PageBanner from "../../components/PageBanner";

const hizmetData: Record<string, { baslik: string; kisaOzet: string; detay: string; icon: React.ReactNode; avantajlar: string[] }> = {
  "evden-eve-nakliyat": {
    baslik: "Evden Eve Nakliyat",
    kisaOzet: "Eşyalarınızı sıfır risk prensibiyle, endüstriyel ambalajlarla yeni evinize taşıyoruz.",
    detay: "Standart bir taşımacılığın ötesinde, evden eve nakliyat sürecini baştan sona bir proje gibi yönetiyoruz. Kırılgan eşyalarınız için 5 katmanlı balonlu naylonlar kullanıyor, mobilyalarınızı uzman marangozlarımızla söküp yeni evinizde milimetrik olarak tekrar kuruyoruz.",
    avantajlar: ["Uzman Marangoz Desteği", "5 Katmanlı Kraft Ambalaj", "Kişiye Özel Operasyon Planı", "Çiziksiz Taşıma Garantisi"],
    icon: <svg className="w-10 h-10 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
  },
  "asansorlu-nakliyat": {
    baslik: "Asansörlü Nakliyat",
    kisaOzet: "Yüksek katlı binalarda deformasyonları sıfırlayan hidrolik asansör sistemleri.",
    detay: "Dar merdiven boşlukları ve yüksek katlar artık sorun değil. 25. kata kadar ulaşabilen Alman menşeli mobil hidrolik asansörlerimiz sayesinde eşyalarınız bina içine girmeden, balkon veya pencereden doğrudan araca yüklenir. Bu sistem hem taşıma süresini yarı yarıya kısaltır hem de eşyaların duvarlara çarpma riskini %100 ortadan kaldırır.",
    avantajlar: ["Bina İçi Hasar Riski Yok", "%50 Daha Hızlı Operasyon", "25. Kata Kadar Ulaşım", "Çevreye Rahatsızlık Vermeden Taşıma"],
    icon: <svg className="w-10 h-10 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
  },
  "sehirler-arasi-tasima": {
    baslik: "Şehirler Arası Taşıma",
    kisaOzet: "Türkiye'nin 81 iline kapalı çelik kasa araçlarla VIP lojistik hizmeti.",
    detay: "Uzun yolculuklar özel donanım gerektirir. Şehirler arası transferlerde süspansiyon sistemi güçlendirilmiş, içi özel sunta kaplı çelik kasa araçlar kullanıyoruz. Eşyalarınız araca sabitlenerek yol boyunca oluşabilecek sarsıntılara karşı tam korumaya alınır. 81 ile sigortalı ve zamanında teslimat garantisi veriyoruz.",
    avantajlar: ["Çelik Kasa Lojistik Araçları", "Yol Sigortası Koruması", "Sarsıntı Önleyici Süspansiyon", "Zamanında Teslimat Garantisi"],
    icon: <svg className="w-10 h-10 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
  },
  "ofis-tasima": {
    baslik: "Kurumsal Ofis Taşıma",
    kisaOzet: "İş akışınızı kesintiye uğratmadan, gece ve hafta sonu operasyonlu ofis taşıma.",
    detay: "Ofis taşıma bir hız ve güvenlik operasyonudur. Evraklarınız, IT donanımlarınız (sunucular, bilgisayarlar) ve ofis mobilyalarınız departman bazlı kodlanarak paketlenir. Yeni ofisinizde her şey kendi yerinde ve çalışır vaziyette size teslim edilir. Mesai kaybı yaşamamanız için operasyonları gece veya hafta sonu tamamlıyoruz.",
    avantajlar: ["IT ve Sunucu Taşımacılığı", "Departman Bazlı Kodlama", "Mesai Dışı Operasyon Seçeneği", "Arşiv Taşıma Güvenliği"],
    icon: <svg className="w-10 h-10 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  }
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slugId = resolvedParams.slug.toLowerCase();
  const data = hizmetData[slugId];

  if (!data) {
    return { title: "Hizmetlerimiz | İstanbul Evden Eve Nakliyat" };
  }

  return {
    title: `${data.baslik} Hizmeti | Uzman Nakliyat Çözümleri`,
    description: data.kisaOzet,
    keywords: [data.baslik.toLowerCase(), "istanbul nakliyat", "güvenilir taşıma", "profesyonel nakliye"],
  };
}

export default async function HizmetDetayPage({ params }: Props) {
  const resolvedParams = await params;
  const slugId = resolvedParams.slug.toLowerCase();
  const data = hizmetData[slugId];

  if (!data) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-black text-blue-950">Hizmet Bulunamadı</h1>
          <p className="text-gray-600">Aradığınız lojistik operasyonu detaylarına şu an ulaşılamıyor.</p>
          <Link href="/hizmetler" className="inline-block mt-4 text-orange-600 font-bold hover:underline">Tüm Hizmetlerimize Dön</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <PageBanner 
        category="Lojistik Çözümlerimiz"
        title={data.baslik}
        description={data.kisaOzet}
        bgImage="/images/banners/hizmetler.webp" 
      />

      <main className="flex-grow py-16 md:py-24 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-10">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 border border-orange-100 shadow-inner">
                {data.icon}
              </div>
              <h2 className="text-3xl font-black text-blue-950 mb-6">{data.baslik} Operasyonu Nasıl Yürütülür?</h2>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                {data.detay}
              </p>
            </div>

            <div className="bg-blue-950 p-8 md:p-12 rounded-3xl shadow-xl text-white">
              <h3 className="text-2xl font-black mb-8">Bu Hizmetin Size Sağladığı Avantajlar</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.avantajlar.map((avantaj, index) => (
                  <div key={index} className="flex items-center gap-4 bg-blue-900/50 p-4 rounded-xl border border-blue-800">
                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="font-bold tracking-wide">{avantaj}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 sticky top-24">
              <h3 className="text-2xl font-black text-blue-950 mb-4 text-center">Hemen Operasyon Planlayalım</h3>
              <p className="text-gray-500 mb-8 font-medium text-sm text-center">
                {data.baslik} hizmetimiz için uzman eksperimizden anında maliyet analizi alın.
              </p>
              
              <a href="tel:+905322830628" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black text-lg py-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 mb-4 flex items-center justify-center gap-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                0532 283 06 28
              </a>
              
              <Link href="/iletisim" className="w-full bg-blue-50 hover:bg-blue-100 text-blue-950 font-bold text-lg py-4 rounded-xl transition-all flex items-center justify-center border border-blue-100">
                Dijital Ekspertiz Formu
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import PageBanner from "../../components/PageBanner"; // 🚀 DÜZELTME: Sadece 2 kat (../../) yukarı çıkıyoruz!

const ilceData: Record<string, { ad: string; yakasi: string; odakKelime: string; aciklama: string }> = {
  atasehir: {
    ad: "Ataşehir",
    yakasi: "Anadolu Yakası",
    odakKelime: "Ataşehir asansörlü nakliyat ve lüks site taşımacılığı",
    aciklama: "Ataşehir'in yüksek katlı sitelerine özel modüler asansör sistemlerimizle, eşyalarınızı çiziksiz ve %100 sigortalı taşıyoruz."
  },
  kadikoy: {
    ad: "Kadıköy",
    yakasi: "Anadolu Yakası",
    odakKelime: "Kadıköy evden eve taşıma ve dar sokak lojistiği",
    aciklama: "Kadıköy'ün hareketli sokaklarına uygun modern araç filomuzla, hızlı, sessiz ve profesyonel evden eve nakliyat hizmeti."
  },
  sisli: {
    ad: "Şişli",
    yakasi: "Avrupa Yakası",
    odakKelime: "Şişli kurumsal ofis taşıma ve ev nakliyatı",
    aciklama: "Şişli bölgesindeki ofisleriniz ve evleriniz için iş akışınızı durdurmayan, hafta sonu ve gece operasyonlu profesyonel taşıma."
  },
  besiktas: {
    ad: "Beşiktaş",
    yakasi: "Avrupa Yakası",
    odakKelime: "Beşiktaş VIP eşya taşıma ve villa nakliyatı",
    aciklama: "Beşiktaş'ın tarihi dokusuna uygun, antika ve değerli eşyalarınıza özel endüstriyel ambalajlama ve VIP taşıma hizmeti."
  }
};

export function generateMetadata({ params }: { params: { ilce: string } }): Metadata {
  const ilceId = params.ilce.toLowerCase();
  
  const data = ilceData[ilceId] || { 
    ad: ilceId.charAt(0).toUpperCase() + ilceId.slice(1), 
    yakasi: "İstanbul", 
    odakKelime: "evden eve nakliyat", 
    aciklama: "Profesyonel sigortalı nakliyat hizmetleri." 
  };

  return {
    title: `${data.ad} Evden Eve Nakliyat | Sigortalı ve Asansörlü Taşıma`,
    description: `${data.ad} evden eve nakliyat hizmeti. ${data.aciklama} En uygun fiyatlar ve ücretsiz ekspertiz için hemen arayın.`,
    keywords: [`${data.ad} nakliyat`, `${data.ad} evden eve taşıma`, `${data.ad} asansörlü nakliyat`, "istanbul nakliyat"],
  };
}

export default function IlceNakliyatPage({ params }: { params: { ilce: string } }) {
  const ilceId = params.ilce.toLowerCase();
  
  const data = ilceData[ilceId] || { 
    ad: ilceId.charAt(0).toUpperCase() + ilceId.slice(1), 
    yakasi: "İstanbul", 
    odakKelime: "bölgesine özel evden eve nakliyat", 
    aciklama: "Bu bölgeye özel tasarlanmış profesyonel araç filomuz ve uzman kadromuzla, sıfır hata prensibiyle hizmet veriyoruz." 
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      <PageBanner 
        category={`${data.yakasi} Nakliyat Operasyonları`}
        title={`${data.ad} Evden Eve Nakliyat`}
        description={data.aciklama}
        bgImage={`/images/ilceler/${ilceId}.webp`} 
      />

      <main className="flex-grow py-16 md:py-24 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
              <h2 className="text-3xl font-black text-blue-950 mb-6">{data.ad} Lojistik Üssümüz</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
                {data.ad} bölgesindeki taşınma ihtiyaçlarınız için sadece bir kamyon ve ekip göndermiyor, süreci başından sonuna kadar bir mühendislik projesi gibi yönetiyoruz. <strong>{data.odakKelime}</strong> konusunda edindiğimiz tecrübe ile eşyalarınızı sıfır hasar garantisiyle yeni adresinize ulaştırıyoruz.
              </p>
              
              <h3 className="text-2xl font-bold text-blue-950 mb-4 mt-10">Neden {data.ad} Bölgesinde Bizi Seçmelisiniz?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 font-medium"><strong>Bölgeye Özel Araç Filosu:</strong> {data.ad} sokaklarının fiziki şartlarına (dar sokaklar, yokuşlar vb.) uygun farklı boyutlarda kapalı kasa araçlarımız mevcuttur.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 font-medium"><strong>Modüler Asansör Kurulumu:</strong> Bina içi taşımanın zor olduğu yüksek katlı binalarda dış cephe asansörümüzü hızlıca kuruyoruz.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 font-medium"><strong>Ücretsiz Ekspertiz:</strong> Taşıma günü sürpriz yaşamamanız için uzmanımız eşyalarınızı önceden ücretsiz inceler ve net maliyet çıkarır.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-950 p-8 rounded-3xl shadow-xl text-white text-center">
              <h3 className="text-2xl font-black mb-4">{data.ad} İçin Anında Fiyat Alın</h3>
              <p className="text-blue-100 mb-8 font-medium text-sm">Operasyon yöneticimizle hemen görüşün, taşınma planınızı birlikte yapalım.</p>
              <a href="tel:+905322830628" className="block w-full bg-orange-600 hover:bg-orange-700 text-white font-black text-lg py-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 mb-4">
                0532 283 06 28
              </a>
              <Link href="/iletisim" className="block w-full bg-white hover:bg-gray-100 text-blue-950 font-bold text-lg py-4 rounded-xl transition-all shadow-lg border border-gray-100">
                Yazılı Teklif İste
              </Link>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100">
               <h4 className="font-black text-blue-950 mb-2 flex items-center gap-2">
                 <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></span>
                 Bölgesel Avantaj
               </h4>
               <p className="text-sm text-gray-700 font-medium leading-relaxed">
                 {data.ad} çıkışlı veya varışlı tüm operasyonlarda hafta içi taşınmalara özel <strong>%10 indirim</strong> fırsatından yararlanabilirsiniz.
               </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
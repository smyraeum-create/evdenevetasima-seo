import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hakkımızda | Evden Eve Taşıma ve Nakliyat Lideri",
  description: "Türkiye'nin en güvenilir nakliyat firması olarak yılların tecrübesi, geniş araç filomuz ve uzman kadromuzla eşyalarınızı sıfır riskle taşıyoruz.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      <section className="relative bg-blue-950 text-white py-20">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000')] bg-cover bg-center"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="bg-orange-500 text-white text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 inline-block">
            Kurumsal Vizyonumuz
          </span>
          <h1 className="text-4xl md:text-5xl font-black mt-4 tracking-tight">
            Türkiye'nin Nakliyat Lideri
          </h1>
          <p className="mt-6 text-blue-200 text-lg max-w-3xl mx-auto leading-relaxed">
            Sadece eşya değil, güven taşıyoruz. Kurulduğumuz ilk günden bu yana müşteri memnuniyetini ve inovasyonu sektör standartlarının ötesine taşıdık.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-black text-blue-950 mb-4">Biz Kimiz?</h2>
              <div className="w-20 h-1.5 bg-orange-500 rounded-full mb-6"></div>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Sektördeki klasik ve köhne taşımacılık anlayışını yıkmak, yerine tamamen şeffaf, teknolojik ve profesyonel bir sistem inşa etmek amacıyla yola çıktık. İstanbul merkezli operasyon ağımızı bugün Türkiye'nin 81 iline yaymanın gururunu yaşıyoruz.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Bünyemizde bulunan tamamı çelik kasalı modern nakliye araçlarımız, yüksek katlara ulaşabilen modüler asansör sistemlerimiz ve kadrolu uzman marangozlarımız ile taşınma sürecini sizin için bir stres olmaktan çıkarıp, keyifli bir deneyime dönüştürüyoruz.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-blue-950 mb-4">Kalite Politikamız</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="text-orange-500 font-bold">✓</span> %100 Müşteri Memnuniyeti Garantisi
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-orange-500 font-bold">✓</span> Koşulsuz Tam Kapsamlı Nakliyat Sigortası
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-orange-500 font-bold">✓</span> Şeffaf Fiyatlandırma (Sürpriz Maliyet Yok)
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-orange-500 font-bold">✓</span> Kadrolu ve Alanında Uzman Personel
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center transform transition-transform hover:-translate-y-2">
              <div className="text-5xl font-black text-orange-500 mb-2">15+</div>
              <div className="text-blue-950 font-bold">Yıllık Tecrübe</div>
              <p className="text-xs text-gray-500 mt-2">Sektörde kesintisiz hizmet</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center transform transition-transform hover:-translate-y-2 translate-y-8">
              <div className="text-5xl font-black text-orange-500 mb-2">30+</div>
              <div className="text-blue-950 font-bold">Özel Araç</div>
              <p className="text-xs text-gray-500 mt-2">Geniş ve modern filo</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center transform transition-transform hover:-translate-y-2">
              <div className="text-5xl font-black text-orange-500 mb-2">12K+</div>
              <div className="text-blue-950 font-bold">Mutlu Müşteri</div>
              <p className="text-xs text-gray-500 mt-2">Başarıyla tamamlanan operasyon</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center transform transition-transform hover:-translate-y-2 translate-y-8">
              <div className="text-5xl font-black text-orange-500 mb-2">%100</div>
              <div className="text-blue-950 font-bold">Sigorta</div>
              <p className="text-xs text-gray-500 mt-2">Sıfır risk ile taşımacılık</p>
            </div>
          </div>
          
        </div>
      </section>

      <section className="bg-orange-500 py-16 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-6">Bizimle Güvenle Taşınmaya Hazır Mısınız?</h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto text-lg">Profesyonel ekibimizden hemen detaylı bilgi ve ücretsiz ekspertiz randevusu alın.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+905322830628" className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-4 rounded-full font-black text-lg transition-all shadow-xl">
              Hemen Arayın
            </a>
            <Link href="/iletisim" className="bg-blue-950 text-white hover:bg-black px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl">
              İletişim Formu
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "İletişim | Evden Eve Nakliyat Fiyat Al",
  description: "Evden eve nakliyat fiyatları ve taşıma detayları için bize 7/24 ulaşabilirsiniz. Profesyonel ekibimizden hemen ücretsiz ekspertiz talep edin.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-blue-950 text-white py-16 md:py-24 border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Bizimle İletişime Geçin
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Taşınma planınızı ertelemeyin. 7/24 kesintisiz destek hattımız ve uzman ekspertiz ekibimizle bir telefon kadar yakınınızdayız.
          </p>
        </div>
      </section>

      {/* İletişim Grid */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Sol Kolon: İletişim Bilgileri ve Harita */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-black text-blue-950 mb-6">Merkez Ofisimiz</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Adres</h3>
                    <p className="text-gray-600 mt-1 leading-relaxed text-sm">
                      Küçükbakkalköy Mh. Kayışdağı Cd. Ali Ay Sk.<br />
                      No: 3/1 Orkide Apt. Ataşehir / İSTANBUL
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Telefon</h3>
                    <a href="tel:+905322830628" className="text-orange-600 hover:text-orange-700 font-bold mt-1 block transition-colors">
                      0532 283 0628
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">E-Posta</h3>
                    <a href="mailto:info@evdenevetasima.org" className="text-gray-600 hover:text-orange-600 mt-1 block transition-colors text-sm">
                      info@evdenevetasima.org
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.652136009831!2d29.1084!3d40.9789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU4JzQ0LjAiTiAyOcKwMDYnMzAuMiJF!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Ofis Konumu"
              ></iframe>
            </div>
          </div>

          {/* Sağ Kolon: İletişim Formu */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-black text-blue-950 mb-2">Hızlı Fiyat Teklifi Alın</h2>
            <p className="text-sm text-gray-500 mb-8">Eşyalarınızın nereden nereye taşınacağını yazın, sizi hemen arayıp fiyat verelim.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="ad" className="block text-sm font-bold text-gray-700 mb-2">Adınız Soyadınız</label>
                  <input type="text" id="ad" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" placeholder="Ahmet Yılmaz" />
                </div>
                <div>
                  <label htmlFor="telefon" className="block text-sm font-bold text-gray-700 mb-2">Telefon Numaranız</label>
                  <input type="tel" id="telefon" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" placeholder="0532 XXX XX XX" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nereden" className="block text-sm font-bold text-gray-700 mb-2">Nereden Taşınacak?</label>
                  <input type="text" id="nereden" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" placeholder="Örn: Kadıköy, İstanbul" />
                </div>
                <div>
                  <label htmlFor="nereye" className="block text-sm font-bold text-gray-700 mb-2">Nereye Taşınacak?</label>
                  <input type="text" id="nereye" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" placeholder="Örn: Çankaya, Ankara" />
                </div>
              </div>

              <div>
                <label htmlFor="mesaj" className="block text-sm font-bold text-gray-700 mb-2">Taşınma Detayları (Opsiyonel)</label>
                <textarea id="mesaj" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all resize-none" placeholder="Oda sayısı, kaçıncı kat, asansör var mı? vb. detayları yazabilirsiniz."></textarea>
              </div>

              <button type="button" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black text-lg py-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                Fiyat Teklifi İste
              </button>
              
              <p className="text-xs text-center text-gray-400 mt-4">
                Formu göndererek <Link href="/cerez-politikasi" className="underline hover:text-gray-600">Gizlilik Politikamızı</Link> kabul etmiş olursunuz.
              </p>
            </form>
          </div>
          
        </div>
      </section>
      
    </div>
  );
}
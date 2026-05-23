import { Metadata } from "next";
import Link from "next/link";
import PageBanner from "../components/PageBanner";

export const metadata: Metadata = {
  title: "İletişim | Evden Eve Nakliyat Fiyat Al",
  description: "Evden eve nakliyat fiyatları ve taşıma detayları için bize 7/24 ulaşabilirsiniz. Profesyonel ekibimizden hemen ücretsiz ekspertiz talep edin.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      <PageBanner 
        category="Hızlı Erişim"
        title="Bizimle İletişime Geçin"
        description="Taşınma planınızı ertelemeyin. 7/24 kesintisiz destek hattımız ve uzman ekspertiz ekibimizle bir telefon kadar yakınınızdayız."
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000" 
      />

      <main className="flex-grow py-16 md:py-20 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-black text-blue-950 mb-6">Merkez Ofisimiz</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Adres</h3>
                    <p className="text-gray-600 mt-1 leading-relaxed text-sm font-medium">
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
                    <a href="tel:+905322830628" className="text-orange-600 hover:text-orange-700 font-black mt-1 block transition-colors text-lg">
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
                    <a href="mailto:info@evdenevetasima.org" className="text-gray-600 hover:text-orange-600 mt-1 block transition-colors text-sm font-medium">
                      info@evdenevetasima.org
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-80 bg-gray-200 rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <iframe 
                src="https://maps.google.com/maps?q=Ata%C5%9Fehir%2C%20%C4%B0stanbul&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Ofis Konumu"
              ></iframe>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-black text-blue-950 mb-2">Hızlı Fiyat Teklifi Alın</h2>
            <p className="text-sm text-gray-500 mb-8 font-medium">Eşyalarınızın nereden nereye taşınacağını yazın, sizi hemen arayıp fiyat verelim.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="ad" className="block text-sm font-bold text-gray-700 mb-2">Adınız Soyadınız</label>
                  <input type="text" id="ad" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all bg-gray-50" placeholder="Ahmet Yılmaz" />
                </div>
                <div>
                  <label htmlFor="telefon" className="block text-sm font-bold text-gray-700 mb-2">Telefon Numaranız</label>
                  <input type="tel" id="telefon" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all bg-gray-50" placeholder="0532 XXX XX XX" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nereden" className="block text-sm font-bold text-gray-700 mb-2">Nereden Taşınacak?</label>
                  <input type="text" id="nereden" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all bg-gray-50" placeholder="Örn: Kadıköy, İstanbul" />
                </div>
                <div>
                  <label htmlFor="nereye" className="block text-sm font-bold text-gray-700 mb-2">Nereye Taşınacak?</label>
                  <input type="text" id="nereye" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all bg-gray-50" placeholder="Örn: Çankaya, Ankara" />
                </div>
              </div>

              <div>
                <label htmlFor="mesaj" className="block text-sm font-bold text-gray-700 mb-2">Taşınma Detayları (Opsiyonel)</label>
                <textarea id="mesaj" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all resize-none bg-gray-50" placeholder="Oda sayısı, kaçıncı kat, asansör var mı? vb. detayları yazabilirsiniz."></textarea>
              </div>

              <button type="button" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black text-lg py-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 uppercase tracking-wider">
                Fiyat Teklifi İste
              </button>
              
              <p className="text-xs text-center text-gray-400 mt-4 font-medium">
                Formu göndererek <Link href="/cerez-politikasi" className="underline hover:text-gray-600">Gizlilik Politikamızı</Link> kabul etmiş olursunuz.
              </p>
            </form>
          </div>
          
        </div>
      </main>
      
    </div>
  );
}
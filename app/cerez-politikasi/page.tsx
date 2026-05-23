import { Metadata } from "next";
import Link from "next/link";
import PageBanner from "../components/PageBanner";

export const metadata: Metadata = {
  title: "Çerez Politikası | Evden Eve Taşıma",
  description: "Web sitemizde kullanılan çerezler, kullanım amaçları ve veri gizliliği politikalarımız hakkında detaylı bilgilendirme metni.",
};

export default function CookiePolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      <PageBanner 
        category="Gizlilik ve Güvenlik"
        title="Çerez Aydınlatma Metni"
        description="Kişisel verilerinizin güvenliği ve dijital mahremiyetiniz bizim için her şeyden önemlidir."
        bgImage="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000" 
      />

      <main className="flex-grow max-w-4xl mx-auto px-4 py-12 w-full">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          
          <div className="bg-gray-900 text-white p-6 text-center text-xs md:text-sm font-bold tracking-wider uppercase">
            KVKK Uyarınca Çerez (Cookie) Kullanımı Bilgilendirme Metni
          </div>

          <div className="p-8 md:p-12 space-y-10 text-gray-600 font-medium leading-relaxed">
            
            <section>
              <p>
                <strong>Evden Eve Taşıma ve Nakliye</strong> olarak, web sitemizi ziyaretleriniz sırasında deneyiminizi geliştirmek, sitemizin verimli çalışmasını sağlamak ve sizlere daha iyi bir nakliye hizmeti sunabilmek amacıyla çerezler (cookies) kullanmaktayız. İşbu Çerez Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, web sitemizde kullanılan çerezlerin türleri, kullanım amaçları ve bu çerezleri nasıl yönetebileceğiniz konusunda sizleri bilgilendirmek amacıyla hazırlanmıştır.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-black text-blue-950 border-b pb-2">1. Çerez (Cookie) Nedir?</h2>
              <p>
                Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza (bilgisayar, cep telefonu, tablet vb.) depolanan küçük metin dosyalarıdır. Çerezler, web sitesinin daha kullanıcı dostu bir deneyim sunmasına ve siteye tekrar giriş yaptığınızda (örneğin hizmet bölgesi aramalarınızı hatırlayarak) sizi tanımasına yardımcı olur.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-black text-blue-950 border-b pb-2">2. Kullanılan Çerez Türleri ve Amaçları</h2>
              <p>Web sitemizde kullanım amacına göre aşağıdaki çerez türleri kullanılmaktadır:</p>
              <div className="space-y-4 mt-4 text-sm">
                <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-blue-900">
                  <strong className="text-gray-900 block mb-1">Zorunlu (Temel) Çerezler:</strong> 
                  Web sitemizin düzgün şekilde çalışması ve güvenliğin (SSL vb.) sağlanması için kesinlikle gerekli olan çerezlerdir. Bu çerezlerin kullanımı onayınıza tabi değildir; devre dışı bırakılmaları halinde sitenin bazı bölümleri çalışmayabilir.
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-orange-500">
                  <strong className="text-gray-900 block mb-1">Performans ve Analitik Çerezleri:</strong> 
                  Hangi ilçe sayfalarımızın daha çok ziyaret edildiğini analiz etmek ve site performansını ölçerek sizlere daha hızlı bir arayüz sunmak amacıyla kullanılır.
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-blue-900">
                  <strong className="text-gray-900 block mb-1">İşlevsel Çerezler:</strong> 
                  Web sitesini tekrar ziyaret ettiğinizde dil tercihleri veya son aradığınız nakliye bölgeleri gibi seçimlerinizi hatırlayarak size kişiselleştirilmiş bir deneyim sunmak için kullanılır.
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-black text-blue-950 border-b pb-2">3. Çerezlerin Yönetimi ve Reddedilmesi</h2>
              <p>
                Tarayıcınızın ayarlarını değiştirerek çerezlere ilişkin tercihlerinizi kişiselleştirme imkanına sahipsiniz. Çerezleri tamamen engelleyebilir veya bir çerez yerleştirildiğinde uyarı alabilirsiniz. Sık kullanılan tarayıcılarda çerez yönetimini aşağıdaki yollardan yapılandırabilirsiniz:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-sm text-gray-500">
                <li>Google Chrome: Ayarlar &gt; Gizlilik ve Güvenlik &gt; Çerezler</li>
                <li>Mozilla Firefox: Seçenekler &gt; Gizlilik ve Güvenlik &gt; Çerezler</li>
                <li>Apple Safari: Tercihler &gt; Gizlilik &gt; Çerezleri Engelle</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-black text-blue-950 border-b pb-2">4. Haklarınız ve İletişim</h2>
              <p>
                KVKK'nın 11. maddesi uyarınca haklarınıza ilişkin taleplerinizi, sitemizde yer alan telefon numarası veya e-posta adresi üzerinden firmamıza iletebilirsiniz. 
                Daha fazla bilgi için <Link href="/" className="text-orange-500 font-bold hover:underline">Ana Sayfaya</Link> dönebilir veya bizimle iletişime geçebilirsiniz.
              </p>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
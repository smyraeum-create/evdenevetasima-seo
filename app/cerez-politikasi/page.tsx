import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Çerez Politikası | Evden Eve Taşıma",
  description: "Web sitemizde kullanılan çerezler, kullanım amaçları ve veri gizliliği politikalarımız hakkında detaylı bilgilendirme metni.",
};

export default function CerezPolitikasiPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      <div className="bg-blue-950 py-16 text-center text-white border-b-4 border-orange-500">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Çerez Aydınlatma Metni</h1>
          <p className="mt-4 text-blue-200 text-lg">Kişisel verilerinizin güvenliği bizim için önemlidir.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          
          <div className="prose max-w-none text-gray-700 space-y-6 leading-relaxed">
            <p>
              <strong>Evden Eve Taşıma ve Nakliye</strong> olarak, web sitemizi ziyaretleriniz sırasında deneyiminizi geliştirmek, sitemizin verimli çalışmasını sağlamak ve sizlere daha iyi bir nakliye hizmeti sunabilmek amacıyla çerezler (cookies) kullanmaktayız. İşbu Çerez Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, web sitemizde kullanılan çerezlerin türleri, kullanım amaçları ve bu çerezleri nasıl yönetebileceğiniz konusunda sizleri bilgilendirmek amacıyla hazırlanmıştır.
            </p>

            <h2 className="text-xl font-bold text-blue-950 border-b pb-2 mt-8">1. Çerez (Cookie) Nedir?</h2>
            <p>
              Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza (bilgisayar, cep telefonu, tablet vb.) depolanan küçük metin dosyalarıdır. Çerezler, web sitesinin daha kullanıcı dostu bir deneyim sunmasına ve siteye tekrar giriş yaptığınızda (örneğin hizmet bölgesi aramalarınızı hatırlayarak) sizi tanımasına yardımcı olur.
            </p>

            <h2 className="text-xl font-bold text-blue-950 border-b pb-2 mt-8">2. Kullanılan Çerez Türleri ve Amaçları</h2>
            <p>Web sitemizde kullanım amacına göre aşağıdaki çerez türleri kullanılmaktadır:</p>
            
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-gray-900">Zorunlu (Temel) Çerezler:</strong> Web sitemizin düzgün şekilde çalışması ve güvenliğin (SSL vb.) sağlanması için kesinlikle gerekli olan çerezlerdir. Bu çerezlerin kullanımı onayınıza tabi değildir; devre dışı bırakılmaları halinde sitenin bazı bölümleri çalışmayabilir.
              </li>
              <li>
                <strong className="text-gray-900">Performans ve Analitik Çerezleri:</strong> Hangi ilçe sayfalarımızın daha çok ziyaret edildiğini analiz etmek ve site performansını ölçerek sizlere daha hızlı bir arayüz sunmak amacıyla kullanılır.
              </li>
              <li>
                <strong className="text-gray-900">İşlevsel Çerezler:</strong> Web sitesini tekrar ziyaret ettiğinizde dil tercihleri veya son aradığınız nakliye bölgeleri gibi seçimlerinizi hatırlayarak size kişiselleştirilmiş bir deneyim sunmak için kullanılır.
              </li>
            </ul>

            <h2 className="text-xl font-bold text-blue-950 border-b pb-2 mt-8">3. Çerezlerin Yönetimi ve Reddedilmesi</h2>
            <p>
              Tarayıcınızın ayarlarını değiştirerek çerezlere ilişkin tercihlerinizi kişiselleştirme imkanına sahipsiniz. Çerezleri tamamen engelleyebilir veya bir çerez yerleştirildiğinde uyarı alabilirsiniz. Sık kullanılan tarayıcılarda çerez yönetimini aşağıdaki yollardan yapılandırabilirsiniz:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Google Chrome: Ayarlar &gt; Gizlilik ve Güvenlik &gt; Çerezler</li>
              <li>Mozilla Firefox: Seçenekler &gt; Gizlilik ve Güvenlik &gt; Çerezler</li>
              <li>Apple Safari: Tercihler &gt; Gizlilik &gt; Çerezleri Engelle</li>
            </ul>

            <h2 className="text-xl font-bold text-blue-950 border-b pb-2 mt-8">4. Haklarınız ve İletişim</h2>
            <p>
              KVKK&apos;nın 11. maddesi uyarınca haklarınıza ilişkin taleplerinizi, sitemizde yer alan telefon numarası veya e-posta adresi üzerinden firmamıza iletebilirsiniz. 
              Daha fazla bilgi için <Link href="/" className="text-orange-500 font-bold hover:underline">Ana Sayfaya</Link> dönebilir veya bizimle iletişime geçebilirsiniz.
            </p>

          </div>
          
        </div>
      </div>
    </div>
  );
}
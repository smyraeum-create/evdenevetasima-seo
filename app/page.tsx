import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      
      <section className="w-full bg-blue-950 text-white py-32 px-4 text-center relative overflow-hidden flex items-center justify-center min-h-[500px]">
        <Image
          src="/heroes/main-hero.webp"
          alt="Profesyonel Evden Eve Nakliyat Hizmeti"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover absolute inset-0 z-0"
        />
        <div className="absolute inset-0 z-0 bg-blue-950/80 bg-gradient-to-b from-blue-950/90 to-blue-950/70"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            Yeni Evinize <span className="text-orange-400">Güvenle</span> Taşının
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            Eşyalarınızı kendi eşyamız gibi koruyoruz. Asansörlü, sigortalı ve profesyonel uzman kadromuzla İstanbul'un her sokağındayız.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+905555555555" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all shadow-lg transform hover:-translate-y-1">
              Ücretsiz Ekspertiz İste
            </a>
            <Link href="/istanbul/kadikoy" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-950 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all">
              Hizmet Bölgelerimizi Gör
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 w-full max-w-7xl mx-auto bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">Neden Bizi Seçmelisiniz?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Nakliye sürecini sizin için sıfır stresli bir deneyime dönüştürmek için en son teknolojiyi ve uzman kadroyu kullanıyoruz.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all text-center group">
            <div className="w-16 h-16 mx-auto mb-6 text-orange-500 bg-orange-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Özel Ambalajlama</h3>
            <p className="text-gray-600 leading-relaxed">Avrupa standartlarında hava kabarcıklı naylonlar ve özel koruma varilleriyle eşyalarınız çizilmelere karşı %100 korumaya alınır.</p>
          </div>
          
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all text-center group">
            <div className="w-16 h-16 mx-auto mb-6 text-orange-500 bg-orange-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Asansörlü Taşımacılık</h3>
            <p className="text-gray-600 leading-relaxed">Yüksek katlı binalarda eşyalarınızın merdiven boşluklarında hasar görmemesi için son teknoloji dış cephe asansör sistemleri kuruyoruz.</p>
          </div>
          
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all text-center group">
            <div className="w-16 h-16 mx-auto mb-6 text-orange-500 bg-orange-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Tam Kapsamlı Sigorta</h3>
            <p className="text-gray-600 leading-relaxed">Taşınma süreci boyunca tüm eşyalarınız olası kazalara karşı anında ekspertiz güvencesiyle A'dan Z'ye sigortalanır.</p>
          </div>

        </div>
      </section>

      <section className="w-full bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">İstanbul Evden Eve Nakliyat Firması</h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed text-justify md:text-center">
            Yılların getirdiği tecrübe ile İstanbul'un her iki yakasında da kesintisiz evden eve taşıma hizmeti veriyoruz. Amacımız sadece eşyalarınızı bir adresten diğerine götürmek değil, bu yorucu süreci sizin için bir keyfe dönüştürmektir. Şehir içi ve şehirler arası nakliyatta geniş araç filomuzla 7/24 hizmetinizdeyiz.
          </p>
          <div className="inline-flex items-center gap-2 text-orange-600 font-bold text-lg bg-orange-50 px-6 py-2.5 rounded-full">
            <span>✓</span> %100 Müşteri Memnuniyeti Garantisi
          </div>
        </div>
      </section>
      
    </div>
  );
}
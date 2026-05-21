import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      
      <section className="w-full bg-blue-900 text-white py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            Yeni Evinize <span className="text-orange-400">Güvenle</span> Taşının
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-blue-100 font-light max-w-3xl mx-auto leading-relaxed">
            Eşyalarınızı kendi eşyamız gibi koruyoruz. Asansörlü, sigortalı ve profesyonel uzman kadromuzla İstanbul'un her sokağındayız.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+905555555555" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all shadow-lg transform hover:-translate-y-1">
              Ücretsiz Ekspertiz İste
            </a>
            <Link href="/istanbul/kadikoy" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all">
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
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all text-center group cursor-default">
            <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">📦</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Özel Ambalajlama</h3>
            <p className="text-gray-600 leading-relaxed">Avrupa standartlarında hava kabarcıklı naylonlar ve özel koruma varilleriyle eşyalarınız çizilmelere karşı %100 korumaya alınır.</p>
          </div>
          
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all text-center group cursor-default">
            <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">🏗️</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Asansörlü Taşımacılık</h3>
            <p className="text-gray-600 leading-relaxed">Yüksek katlı binalarda eşyalarınızın merdiven boşluklarında hasar görmemesi için son teknoloji dış cephe asansör sistemleri kuruyoruz.</p>
          </div>
          
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all text-center group cursor-default">
            <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">🛡️</div>
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
          <div className="inline-flex items-center gap-2 text-orange-500 font-bold text-xl bg-orange-50 px-6 py-3 rounded-full">
            <span>⭐</span> %100 Müşteri Memnuniyeti
          </div>
        </div>
      </section>
      
    </div>
  );
}
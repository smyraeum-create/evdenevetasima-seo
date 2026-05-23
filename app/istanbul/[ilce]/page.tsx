import { Metadata } from "next";
import { notFound } from "next/navigation";
import PageBanner from "../../components/PageBanner";

interface RouteParams {
  params: Promise<{ ilce: string }>;
}

const districtNames: Record<string, string> = {
  arnavutkoy: "Arnavutköy", avcilar: "Avcılar", bagcilar: "Bağcılar",
  bahcelievler: "Bahçelievler", bakirkoy: "Bakırköy", basaksehir: "Başakşehir",
  bayrampasa: "Bayrampaşa", besiktas: "Beşiktaş", beylikduzu: "Beylikdüzü",
  beyoglu: "Beyoğlu", buyukcekmece: "Büyükçekmece", catalca: "Çatalca",
  esenler: "Esenler", esenyurt: "Esenyurt", eyupsultan: "Eyüpsultan",
  fatih: "Fatih", gaziosmanpasa: "Gaziosmanpaşa", gungoren: "Güngören",
  kagithane: "Kâğıthane", kucukcekmece: "Küçükçekmece", sariyer: "Sarıyer",
  silivri: "Silivri", sultangazi: "Sultangazi", sisli: "Şişli", zeytinburnu: "Zeytinburnu",
  adalar: "Adalar", atasehir: "Ataşehir", beykoz: "Beykoz", cekmekoy: "Çekmeköy",
  kadikoy: "Kadıköy", kartal: "Kartal", maltepe: "Maltepe", pendik: "Pendik",
  sancaktepe: "Sancaktepe", sultanbeyli: "Sultanbeyli", sile: "Şile",
  tuzla: "Tuzla", umraniye: "Ümraniye", uskudar: "Üsküdar"
};

export async function generateStaticParams() {
  return Object.keys(districtNames).map((ilce) => ({
    ilce: ilce,
  }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { ilce } = await params;
  const currentIlce = districtNames[ilce];

  if (!currentIlce) {
    return {
      title: "Sayfa Bulunamadı",
    };
  }

  return {
    title: `${currentIlce} Evden Eve Nakliyat | Profesyonel Taşıma`,
    description: `${currentIlce} bölgesinde sigortalı, asansörlü ve marangozlu evden eve nakliyat hizmetleri. Güvenilir taşımacılık için hemen ücretsiz fiyat teklifi alın.`,
  };
}

export default async function DistrictPage({ params }: RouteParams) {
  const { ilce } = await params;
  const currentIlce = districtNames[ilce];

  if (!currentIlce) {
    notFound();
  }

  const faqs = [
    {
      q: `${currentIlce} evden eve nakliyat fiyatları ne kadar?`,
      a: `${currentIlce} nakliye fiyatları taşınacak eşyaların hacmi, oda sayısı, bulunulan katlar ve asansör kurulum durumuna göre değişiklik göstermektedir. Net fiyat için lütfen bizi arayın.`,
    },
    {
      q: `${currentIlce} bölgesinde asansörlü nakliyat var mı?`,
      a: "Evet, tüm yüksek katlı binalarda eşyalarınızın zarar görmemesi amacıyla modüler asansörlü taşımacılık sistemlerimizi devreye alıyoruz.",
    },
    {
      q: "Eşyalar taşıma sırasında sigortalanıyor mu?",
      a: "Kesinlikle. Taşıma sürecinin başından sonuna kadar tüm eşyalarınız oluşabilecek hasarlara karşı tam kapsamlı nakliyat sigortası ile güvence altına alınır.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PageBanner 
        category="İstanbul Bölge Servisi"
        title={`${currentIlce} Evden Eve Nakliyat`}
        description={`${currentIlce} ilçesinde profesyonel, sigortalı ve anahtar teslim nakliye çözümleri.`}
        bgImage="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=2000"
      />

      <main className="flex-grow max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 w-full">
        <div className="lg:col-span-2 space-y-12">
          <section className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-black text-blue-950 mb-6">
              {currentIlce}'de Güvenilir ve Sigortalı Taşımacılık
            </h2>
            <div className="text-gray-600 space-y-4 leading-relaxed font-medium">
              <p>
                <strong>Evden Eve Taşıma</strong> olarak, {currentIlce} sınırları içerisindeki tüm taşınma ihtiyaçlarınızda uzman kadromuz ve modern araç filomuzla hizmetinizdeyiz. Ev, ofis veya parça eşyalarınızı eski adresinizden titizlikle sökerek yeni adresinizde kurulum dahil olacak şekilde teslim ediyoruz.
              </p>
              <p>
                Sektör lideri vizyonumuzla, taşıma operasyonunun her aşamasında %100 müşteri memnuniyeti hedefliyoruz. Mobilyalarınız marangozlarımız tarafından demonte edilir, kalın ambalaj malzemeleriyle sarılır ve sıfır riskle taşınır.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 text-center transform transition-transform hover:-translate-y-1">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-bold text-blue-950 mb-2">Tam Sigorta</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">Taşıma esnasında tüm eşyalarınız maddi güvence altındadır.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 text-center transform transition-transform hover:-translate-y-1">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="font-bold text-blue-950 mb-2">Asansörlü Taşıma</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">Yüksek katlara modüler dış cephe asansörleri ile hızlı transfer.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 text-center transform transition-transform hover:-translate-y-1">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="font-bold text-blue-950 mb-2">Özel Paketleme</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">Hijyenik, darbe emici birinci sınıf ambalajlama materyalleri.</p>
            </div>
          </section>

          <section className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-black text-blue-950 mb-8">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <h3 className="font-bold text-blue-950 text-base flex items-start gap-3">
                    <span className="text-orange-500 font-black">S.</span> {faq.q}
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 pl-7 leading-relaxed font-medium">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="relative">
          <div className="bg-blue-950 text-white p-8 rounded-3xl shadow-xl border-b-4 border-orange-500 sticky top-8">
            <h3 className="text-2xl font-black mb-4">Hızlı Teklif Formu</h3>
            <p className="text-sm text-blue-200 mb-8 leading-relaxed font-medium">
              {currentIlce} nakliyat ekibimizden hemen ücretsiz fiyat teklifi almak ve taşınma gününüzü ayırtmak için bizimle iletişime geçin.
            </p>
            <div className="space-y-4">
              <a
                href="tel:+905322830628"
                className="block text-center bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-xl transition-all shadow-lg uppercase tracking-wider text-sm"
              >
                Hemen Arayın
              </a>
              <a
                href="https://wa.me/905322830628"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[#25D366] hover:bg-[#20ba56] text-white font-black py-4 rounded-xl transition-all shadow-lg uppercase tracking-wider text-sm"
              >
                WhatsApp ile Yazış
              </a>
            </div>
            <div className="border-t border-blue-900 mt-8 pt-6 text-xs text-center text-blue-300 font-bold uppercase tracking-widest">
              7/24 Kesintisiz Hizmet
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
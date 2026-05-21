import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

interface RouteParams {
  params: Promise<{ ilce: string }>;
}

const districtNames: Record<string, string> = {
  arnavutkoy: "Arnavutköy",
  avcilar: "Avcılar",
  bagcilar: "Bağcılar",
  bahcelievler: "Bahçelievler",
  bakirkoy: "Bakırköy",
  basaksehir: "Başakşehir",
  bayrampasa: "Bayrampaşa",
  besiktas: "Beşiktaş",
  beylikduzu: "Beylikdüzü",
  beyoglu: "Beyoğlu",
  buyukcekmece: "Büyükçekmece",
  catalca: "Çatalca",
  esenler: "Esenler",
  esenyurt: "Esenyurt",
  eyupsultan: "Eyüpsultan",
  fatih: "Fatih",
  gaziosmanpasa: "Gaziosmanpaşa",
  gungoren: "Güngören",
  kagithane: "Kâğıthane",
  kucukcekmece: "Küçükçekmece",
  sariyer: "Sarıyer",
  silivri: "Silivri",
  sultangazi: "Sultangazi",
  sisli: "Şişli",
  zeytinburnu: "Zeytinburnu",
  adalar: "Adalar",
  atasehir: "Ataşehir",
  beykoz: "Beykoz",
  cekmekoy: "Çekmeköy",
  kadikoy: "Kadıköy",
  kartal: "Kartal",
  maltepe: "Maltepe",
  pendik: "Pendik",
  sancaktepe: "Sancaktepe",
  sultanbeyli: "Sultanbeyli",
  sile: "Şile",
  tuzla: "Tuzla",
  umraniye: "Ümraniye",
  uskudar: "Üsküdar"
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
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-blue-950 py-20 text-white border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="bg-orange-500 text-white text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full">
            İstanbul Bölge Servisi
          </span>
          <h1 className="text-3xl md:text-5xl font-black mt-4 tracking-tight">
            {currentIlce} Evden Eve Nakliyat
          </h1>
          <p className="mt-4 text-blue-200 text-lg max-w-2xl mx-auto">
            {currentIlce} ilçesinde profesyonel, sigortalı ve anahtar teslim nakliye çözümleri.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+905322830628"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-black text-lg transition-all shadow-lg transform hover:scale-105"
            >
              Hemen Fiyat Al: 0532 283 0628
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <section className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-extrabold text-blue-950 mb-6">
              {currentIlce}&apos;de Güvenilir ve Sigortalı Taşımacılık
            </h2>
            <div className="prose max-w-none text-gray-600 space-y-4 leading-relaxed">
              <p>
                <strong>Evden Eve Taşıma</strong> olarak, {currentIlce} sınırları içerisindeki tüm taşınma ihtiyaçlarınızda uzman kadromuz ve modern araç filomuzla hizmetinizdeyiz. Ev, ofis veya parça eşyalarınızı eski adresinizden titizlikle sökerek yeni adresinizde kurulum dahil olacak şekilde teslim ediyoruz.
              </p>
              <p>
                Sektör lideri vizyonumuzla, taşıma operasyonunun her aşamasında %100 müşteri memnuniyeti hedefliyoruz. Mobilyalarınız marangozlarımız tarafından demonte edilir, kalın ambalaj malzemeleriyle sarılır ve sıfır riskle taşınır.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-bold text-blue-950 mb-2">Tam Sigorta</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Taşıma esnasında tüm eşyalarınız maddi güvence altındadır.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-3xl mb-3">🏗️</div>
              <h3 className="font-bold text-blue-950 mb-2">Asansörlü Taşıma</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Yüksek katlara modüler dış cephe asansörleri ile hızlı transfer.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="font-bold text-blue-950 mb-2">Özel Paketleme</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Hijyenik, darbe emici birinci sınıf ambalajlama materyalleri.</p>
            </div>
          </section>

          <section className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-extrabold text-blue-950 mb-6">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <h3 className="font-bold text-blue-950 text-base flex items-start gap-2">
                    <span className="text-orange-500">Q.</span> {faq.q}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 pl-6 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-950 text-white p-8 rounded-2xl shadow-sm border border-blue-900 sticky top-24">
            <h3 className="text-xl font-bold mb-4">Hızlı Teklif Formu</h3>
            <p className="text-xs text-blue-200 mb-6 leading-relaxed">
              {currentIlce} nakliyat ekibimizden hemen ücretsiz fiyat teklifi almak ve taşınma gününüzü ayırtmak için bizimle iletişime geçin.
            </p>
            <div className="space-y-4">
              <a
                href="tel:+905322830628"
                className="block text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-all"
              >
                Hemen Ara
              </a>
              <a
                href="https://wa.me/905322830628"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[#25D366] hover:bg-[#20ba56] text-white font-bold py-3 rounded-xl transition-all"
              >
                WhatsApp ile Yazış
              </a>
            </div>
            <div className="border-t border-blue-900 mt-6 pt-6 text-xs text-center text-blue-300">
              7/24 Kesintisiz Hizmet Hattı
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
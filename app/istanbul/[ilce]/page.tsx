import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
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

const TechIcon = () => (
  <svg className="w-8 h-8 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-12 h-12 text-blue-950 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const CraneIcon = () => (
  <svg className="w-12 h-12 text-blue-950 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const BoxIcon = () => (
  <svg className="w-12 h-12 text-blue-950 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export async function generateStaticParams() {
  return Object.keys(districtNames).map((ilce) => ({
    ilce: ilce,
  }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { ilce } = await params;
  const currentIlce = districtNames[ilce];

  if (!currentIlce) {
    return { title: "Bölge Bulunamadı" };
  }

  return {
    title: `${currentIlce} Evden Eve Nakliyat | Lojistik ve Taşıma Operasyonları`,
    description: `${currentIlce} bölgesinin mimari ve trafik dinamiklerine uygun araç filomuzla sigortalı, asansörlü ve profesyonel ev/ofis taşıma hizmetleri.`,
  };
}

export default async function DistrictPage({ params }: RouteParams) {
  const { ilce } = await params;
  const currentIlce = districtNames[ilce];

  if (!currentIlce) notFound();

  const allEntries = Object.entries(districtNames);
  const currentIndex = allEntries.findIndex(([key]) => key === ilce);
  
  const otherDistricts = [];
  for (let i = 1; i <= 6; i++) {
    const targetIndex = (currentIndex + i) % allEntries.length;
    otherDistricts.push({
      slug: allEntries[targetIndex][0],
      name: allEntries[targetIndex][1]
    });
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PageBanner 
        category="Bölgesel Lojistik Üssü"
        title={`${currentIlce} Evden Eve Nakliyat`}
        description={`${currentIlce} bölgesi için özel olarak planlanmış araç filomuz, mobil asansör sistemlerimiz ve kadrolu uzman ekiplerimizle sıfır riskli taşımacılık.`}
        bgImage={`/images/ilceler/${ilce}.webp`}
      />

      <main className="flex-grow max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 w-full">
        
        <div className="lg:col-span-2 space-y-12">
          
          <section className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <div className="flex items-center gap-5 mb-8 border-b border-gray-100 pb-6">
              <div className="bg-orange-50 p-4 rounded-2xl">
                <TechIcon />
              </div>
              <h2 className="text-3xl font-black text-blue-950 tracking-tight">{currentIlce} Operasyon Dinamikleri</h2>
            </div>
            
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg font-medium">
              <p>
                İstanbul&apos;un en kritik lojistik noktalarından biri olan <strong>{currentIlce}</strong> bölgesinde, standart nakliye kalıplarını tamamen yıkıyoruz. Bu bölgenin kendine has dar sokak mimarisi, yoğun trafik saatleri ve yeni nesil yüksek katlı site kuralları, sıradan bir taşımacılık anlayışıyla aşılamaz. Biz, operasyonlarimizi tam olarak bu dinamiklere göre mühendislik hassasiyetiyle planlıyoruz.
              </p>
              <p>
                Gerek sahil şeridindeki yalı/villa tipi yapılar, gerekse iç kesimlerdeki yüksek katlı rezidanslar için filomuzda farklı dingil mesafelerine sahip <strong>özel çelik kasalı araçlar</strong> ve 25. kata kadar ulaşabilen <strong>modüler dış cephe asansörleri</strong> hazır bekletilmektedir. Eşyalarınızın {currentIlce} sınırları içindeki veya dışındaki transferi, 3 katmanlı endüstriyel ambalajlama ve sarsıntı önleyici sistemlerimizle %100 güvence altına alınır.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center transform transition-transform hover:-translate-y-1">
              <ShieldIcon />
              <h3 className="font-bold text-blue-950 mb-2">Tam Sigorta Güvencesi</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">Taşıma esnasında tüm finansal ve fiziksel envanteriniz tam kapsamlı emtia poliçesiyle maddi koruma altındadır.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center transform transition-transform hover:-translate-y-1">
              <CraneIcon />
              <h3 className="font-bold text-blue-950 mb-2">Modüler Asansör</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">Yüksek katlı mimari yapılara özel, dış cepheye kurulan mobil hidrolik asansör sistemleri ile hızlı transfer.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center transform transition-transform hover:-translate-y-1">
              <BoxIcon />
              <h3 className="font-bold text-blue-950 mb-2">Endüstriyel Ambalaj</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">Toz, nem ve mukavemete karşı dayanıklı, 5 katmanlı kraft havalı naylonlar ve şok emici özel materyaller.</p>
            </div>
          </section>

          <section className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-black text-blue-950 mb-8 border-b border-gray-100 pb-4">Bölgesel İş Akış Şeması</h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
              {[
                { title: "Dijital Analiz", desc: `${currentIlce} bölgesindeki adresiniz için eşya hacmi, asansör açısı ve araç park uygunluğu analiz edilir.` },
                { title: "İzole Paketleme", desc: "Tüm eşyalarınız toz, nem ve darbeye karşı 5 katmanlı kraft malzemelerle kaplanarak taşımaya hazır hale getirilir." },
                { title: "Sarsıntısız Lojistik", desc: "Araç içi sabitleme sistemleriyle (lashing) donatılmış araçlarımızla eşyalarınız yeni rotasına doğru güvenle yola çıkar." },
                { title: "Anahtar Teslim Kurulum", desc: "Varış noktasında tüm mobilya ve beyaz eşyalarınız, marangoz ve tesisat ustalarımızca eksiksiz kurularak teslim edilir." }
              ].map((step, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-orange-500 text-white font-black shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
                    {i + 1}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm transition-all hover:shadow-md">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600 font-medium text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-black text-blue-950 mb-8">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              {[
                {
                  q: `${currentIlce} bölgesi için fiyatlandırma nasıl yapılıyor?`,
                  a: "Fiyatlarımız; eşyanızın hacmine (m³), taşınacak binaların kat durumuna ve asansör kurulum ihtiyacına göre şeffaf bir şekilde hesaplanır. Sürpriz maliyetler çıkarılmaz."
                },
                {
                  q: "Taşınma sırasında eşyalarım sigortalı mı?",
                  a: "Operasyon süresince (paketlemeden, varış adresindeki kuruluma kadar) tüm eşyalarınız geniş kapsamlı emtia sigortası ile resmi güvence altına alınır."
                },
                {
                  q: `${currentIlce} dışına şehirler arası hizmetiniz var mı?`,
                  a: `Kesinlikle. ${currentIlce} çıkışlı olmak şartıyla, Türkiye'nin 81 iline doğrudan, aktarmasız ve çelik kasa araçlarla şehirler arası lojistik hizmeti sağlıyoruz.`
                }
              ].map((faq, index) => (
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

        <div className="space-y-8">
          
          <div className="bg-blue-950 text-white p-8 rounded-3xl shadow-xl border-b-4 border-orange-500 sticky top-24">
            <h3 className="text-xl font-black mb-4">Ücretsiz Dijital Ekspertiz</h3>
            <p className="text-sm text-blue-200 mb-8 leading-relaxed font-medium">
              {currentIlce} bölgesindeki operasyon sorumlumuzdan hemen güncel maliyet analizi ve araç planlaması talep edin.
            </p>
            <div className="space-y-4">
              <a href="tel:+905322830628" className="block text-center bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-xl transition-all shadow-lg uppercase tracking-wider text-sm">
                0532 283 06 28
              </a>
              <Link href="/araclar/esya-listesi" className="block text-center bg-transparent border border-blue-800 hover:bg-blue-900 text-white font-black py-4 rounded-xl transition-all uppercase tracking-wider text-sm">
                Eşya Listesi Gönder
              </Link>
            </div>
            <div className="border-t border-blue-900 mt-8 pt-6 text-xs text-center text-blue-300 font-bold uppercase tracking-widest">
              Kurumsal Lojistik Ağı
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-lg font-black text-blue-950 mb-6 border-b pb-2">Diğer Bölge Ofislerimiz</h3>
            <ul className="space-y-3">
              {otherDistricts.map((d, i) => (
                <li key={i}>
                  <Link href={`/istanbul/${d.slug}`} className="flex items-center gap-3 p-2 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-orange-500 font-medium transition-colors border border-transparent hover:border-gray-100 text-sm group">
                    <MapPinIcon />
                    <span className="group-hover:translate-x-1 transition-transform">{d.name} Nakliyat</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
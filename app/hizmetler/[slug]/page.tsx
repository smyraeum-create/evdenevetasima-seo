import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageBanner from "../../components/PageBanner";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

const serviceData: Record<string, any> = {
  "evden-eve-nakliyat": {
    title: "Evden Eve Nakliyat",
    desc: "Avrupa standartlarında ambalajlama, modüler asansör sistemleri ve sıfır risk politikası ile anahtar teslim ev taşıma operasyonları.",
    bgImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000",
    intro: "Geleneksel ve yıpratıcı taşınma yöntemlerini tamamen geride bırakıyoruz. Operasyon sürecimiz; eşyalarınızın yapısal analizinin yapılmasıyla başlar. Özel kraft kağıtlı balonlu naylonlar, mobilya battaniyeleri ve şok emici köşelikler ile her bir envanteriniz endüstriyel standartlarda koruma altına alınır. Merdiven boşluklarındaki çarpma risklerini ortadan kaldıran dış cephe asansörlerimiz ve çelik kasalı araçlarımızla, evinizi değil, huzurunuzu yeni adresinize taşıyoruz.",
    technicalDetails: [
      { label: "Ambalaj Tipi", value: "3 Katmanlı Kraft Havalı Patpat & Endüstriyel Streç" },
      { label: "Araç Filosu", value: "Çelik Kasa, İçi Mobilya Kaplı, Süspansiyonlu Kamyonlar" },
      { label: "Personel", value: "Bordrolu Uzman Kadro & Sertifikalı Marangoz" },
      { label: "Sigorta", value: "Geniş Kapsamlı Taşıma Sigortası (Tam Güvence)" }
    ],
    process: [
      { title: "Dijital Ekspertiz ve Planlama", desc: "Taşınma öncesi eşya hacminiz hesaplanır, gerekli araç boyutu, ambalaj sarfiyatı ve asansör kurulum açısı projelendirilir." },
      { title: "İzole Paketleme Standartları", desc: "Hijyen kuralları çerçevesinde oturma gruplarınız ve yataklarınız tek kullanımlık naylonlarla kaplandıktan sonra şok emici kılıflara alınır." },
      { title: "Sarsıntısız Transfer", desc: "Araç içi sabitleme (bağlama) sistemleriyle donatılmış çelik kasalı filomuz, eşyalarınızın yolda sürtünmesini ve darbe almasını engeller." },
      { title: "Montaj ve Anahtar Teslim", desc: "Yeni adresinizde mobilyalarınızın gönye ayarları yapılarak kurulur, beyaz eşyalarınızın tesisat bağlantıları tamamlanır." }
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600",
      "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=600",
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=600"
    ]
  },
  "ofis-tasima": {
    title: "Kurumsal Ofis ve Plaza Taşımacılığı",
    desc: "İş sürekliliğinizi aksatmayan, IT altyapısı ve arşiv güvenliği odaklı, departman bazlı kurumsal lojistik hizmetleri.",
    bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000",
    intro: "Kurumsal taşımacılıkta zaman, nakittir. İş akışınızın saniyeler bile kesintiye uğramaması için ofis taşımacılığını bir lojistik mühendisliği disipliniyle yönetiyoruz. Ağ sunucuları (Server), hassas elektronik cihazlar ve KVKK kapsamında korunması gereken arşiv dosyalarınız, özel şifreli kasalar ve barkod sistemleriyle departman departman ayrıştırılır. Hafta sonu veya gece vardiyasında gerçekleşen operasyonlarımızla, pazartesi sabahı ofisiniz yeni adresinde tam kapasite çalışmaya hazır olur.",
    technicalDetails: [
      { label: "Operasyon Saati", value: "7/24 Kesintisiz (Mesai Dışı Seçeneği)" },
      { label: "IT Güvenliği", value: "Anti-statik Ambalajlama & Özel Şifreli Kabinler" },
      { label: "Arşivleme", value: "Departman Bazlı Barkodlu Renk Kodlaması" },
      { label: "Bina İzni", value: "Plaza ve AVM'ler İçin Resmi İzinli Operasyon" }
    ],
    process: [
      { title: "Envanter ve Renk Kodlaması", desc: "Her departman ve personele ait masa, klasör ve donanımlar özel renk kodlarıyla etiketlenerek taşıma listesine işlenir." },
      { title: "Teknolojik Altyapı Transferi", desc: "Sistem odası, sunucular ve UPS cihazları anti-statik malzemelerle paketlenir, özel havalı süspansiyonlu araçlarla taşınır." },
      { title: "Çelik Kasa ve Arşiv Nakliyesi", desc: "Ağır çelik kasalarınız ve gizli arşivleriniz, hidrolik liftli araçlar ve paletli sistemlerle güvenle aktarılır." },
      { title: "Kurulum ve Test Aşaması", desc: "Yeni ofiste her eşya koduna uygun odaya bırakılır, modüler ofis mobilyalarının kurumları hassasiyetle tamamlanır." }
    ],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600",
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=600",
      "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=600"
    ]
  },
  "arac-nakliyati": {
    title: "Otomobil ve Araç Lojistiği",
    desc: "Sıfır km, lüks veya arızalı araçlarınız için kapalı kasa ve VIP çekici filosuyla tam sigortalı otomobil transferi.",
    bgImage: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2000",
    intro: "Otomobil lojistiği sıradan bir çekici hizmetinden çok daha fazlasıdır. İster kilometre yapmasını istemediğiniz sıfır kilometre bir araç, ister fuar için taşınan lüks bir spor otomobil olsun; operasyonlarımız sıfır hata toleransıyla yürütülür. Hidrolik düşer kalkar rampalarımız sayesinde düşük şaseli araçlar alt takımlarına zarar gelmeden yüklenir. Çoklu (Tır) veya tekli VIP kapalı taşıyıcılarımızla aracınız dış etkenlerden tamamen izole bir şekilde varış noktasına ulaştırılır.",
    technicalDetails: [
      { label: "Yükleme Sistemi", value: "Düşük Şasi Uyumlu Hidrolik Kayar Rampa" },
      { label: "Sabitleme Tipi", value: "Uluslararası Lashing (Janttan ve Lastikten Gergi)" },
      { label: "Taşıma Modeli", value: "Tekli VIP Kapalı Çekici veya Açık Çoklu Taşıyıcı" },
      { label: "Güvence", value: "CMR ve Genişletilmiş Kasko Sigortası" }
    ],
    process: [
      { title: "Hasar Tespiti ve Raporlama", desc: "Aracınız teslim alınırken 360 derece fotoğraflanır, çizik/hasar formu tutanakla kayıt altına alınarak operasyon başlatılır." },
      { title: "Profesyonel Yükleme", desc: "Eğimi minimize edilmiş rampalarla araca yüklenen otomobil, lastiklerinden sekiz nokta bağlantısıyla (lashing) şasiye sabitlenir." },
      { title: "Kapalı Kasa Güvenliği", desc: "VIP taşımalarda, araç yoldaki taş sekmesi, yağmur, dolu ve dış müdahalelere karşı tamamen kapalı kasada izole edilir." },
      { title: "Adrese Teslim", desc: "Varış noktasında tekrar hasar kontrolü yapılır, araç alıcısına ıslak imzalı tutanak ve kilometre teyidi ile teslim edilir." }
    ],
    images: [
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=600",
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=600",
      "https://images.unsplash.com/photo-1586528116311-ad8ed7c83a7f?q=80&w=600"
    ]
  },
  "sehirler-arasi-tasima": {
    title: "Şehirler Arası Nakliyat",
    desc: "Türkiye'nin 81 iline, aktarmasız direkt rotalama, çift şoför güvenliği ve çelik kasa araçlarla uzun yol taşımacılığı.",
    bgImage: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2000",
    intro: "Yüzlerce kilometrelik otoyollar, değişken hava şartları ve coğrafi koşullar, eşya güvenliği için ciddi bir mühendislik gerektirir. Şehirler arası transferlerde, eşyalarınız şehir içi taşımaya kıyasla üç kat daha fazla izolasyon materyali ile ambalajlanır. Araçlarımız aktarma terminallerinde bekleme yapmaz, deponuzdan yüklenen eşya doğrudan yeni şehrinize doğru yola çıkar. Çift şoförlü modern filomuz, teslimat süresini minimize ederken yolculuk güvenliğini maksimuma çıkarır.",
    technicalDetails: [
      { label: "Rota Tipi", value: "Aktarmasız Direkt (Point-to-Point) Teslimat" },
      { label: "Araç Altyapısı", value: "Havalı Süspansiyon, Çelik Kasa, GPS Takip Sistemi" },
      { label: "Güvenlik", value: "Çift Şoför ve Otoyol Hız Sınırı Limitörü" },
      { label: "Teslimat Süresi", value: "Mesafeye Göre 24 - 48 Saat İçi Anahtar Teslim" }
    ],
    process: [
      { title: "Uzun Yol İzolasyonu", desc: "Sarsıntıya karşı eşyalar özel ahşap sandıklara veya çift oluklu güçlendirilmiş endüstriyel kolilere yerleştirilir." },
      { title: "Ağırlık Merkezli Yükleme", desc: "Kamyon kasasına dizilim yapılırken frenleme anındaki basınç hesaplanır; ağır eşyalar tabana, hassaslar üst bölmelere kilitlenir." },
      { title: "Kesintisiz Rota", desc: "Araç kapakları çıkış noktasında kilitlenir ve mühürlenir. Yeni adresinize ulaşana kadar kargo kapağı kesinlikle açılmaz." },
      { title: "Yerel Ekiplerle Kurulum", desc: "Varış noktasında, o ilde bulunan kadrolu yerel ekiplerimiz veya araçla birlikte gelen ustalarımız tarafından kurulum gerçekleştirilir." }
    ],
    images: [
      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=600",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600",
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=600"
    ]
  },
  "parca-esya-tasima": {
    title: "Parsiyel (Parça) Eşya Taşımacılığı",
    desc: "Aynı güzergahtaki yüklerin tek bir araçta birleştirilmesiyle maliyetleri düşüren ekonomik, barkodlu ve güvenli taşıma.",
    bgImage: "https://images.unsplash.com/photo-1586528116311-ad8ed7c83a7f?q=80&w=2000",
    intro: "Birkaç koli, bir öğrenci evi eşyası veya yeni alınan tek parça bir mobilya için devasa nakliye bütçeleri ayırmanıza gerek yok. Parsiyel (Parça) eşya taşımacılığı, modern lojistiğin en çevreci ve ekonomik çözümüdür. Sizinle aynı rotayı paylaşan diğer müşterilerimizin yükleriyle aracı bölümlendiriyor, lojistik maliyetlerini paylaştırıyoruz. Kesinlikle eşya karışma riski yoktur; zira her bir parça dijital barkod sistemimizle size zimmetlenir.",
    technicalDetails: [
      { label: "Lojistik Modeli", value: "Parsiyel (Paylaşımlı) Rota Optimizasyonu" },
      { label: "Kayıt Sistemi", value: "QR/Barkod Etiketleme ve Dijital Zimmet" },
      { label: "Araç Bölmeleri", value: "MDF Seperatörlerle Ayrılmış Kasa İçi Odalar" },
      { label: "Fiyatlandırma", value: "Sadece Kaplanan Hacim (m³) Üzerinden Ücretlendirme" }
    ],
    process: [
      { title: "Hacim Ölçümü ve Fiyatlandırma", desc: "Sadece göndermek istediğiniz parça sayısına ve araçta kaplayacağı hacme göre adil bir ücret belirlenir." },
      { title: "Etiketleme ve Yükleme", desc: "Eşyalarınız teslim alınırken adınız, iletişim bilgileriniz ve varış noktanızın yer aldığı özel endüstriyel etiketlerle işaretlenir." },
      { title: "Seperatörlü İzolasyon", desc: "Araç kasası içinde eşyalarınız fiziki ahşap veya sunta panellerle (seperatör) diğer yüklerden net bir çizgiyle ayrılır." },
      { title: "Kapıdan Kapıya Teslim", desc: "Kargo mantığından farklı olarak eşyalarınız apartman girişine bırakılmaz, daire içine çıkarılarak kurulumu yapılır." }
    ],
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8ed7c83a7f?q=80&w=600",
      "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=600",
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=600"
    ]
  },
  "esya-depolama": {
    title: "Akıllı Eşya Depolama Sistemleri",
    desc: "7/24 güvenlik kameraları, iklimlendirme sistemleri ve kişiye özel şifreli kilitli ahşap odalarda uzun veya kısa dönem muhafaza.",
    bgImage: "https://images.unsplash.com/photo-1586528116311-ad8ed7c83a7f?q=80&w=2000",
    intro: "Yurtdışı seyahatleri, ev tadilatları veya alan darlığı nedeniyle geçici olarak saklanması gereken eşyalarınız için en güvenli liman depolarımızdır. Standart bir merdiven altı deponun aksine; tesislerimiz nem, rutubet ve haşere riskine karşı ozon teknolojisiyle iklimlendirilir ve düzenli periyotlarla ilaçlanır. Size özel tahsis edilen kilitli ahşap modüller sayesinde, anahtar sadece sizde kalır.",
    technicalDetails: [
      { label: "Depo Ünitesi", value: "Kişiye Özel Kilitli (+Poliüretan Kaplı) Ahşap Odalar" },
      { label: "Güvenlik", value: "7/24 Kapalı Devre CCTV ve Gece Bekçisi" },
      { label: "İklimlendirme", value: "Endüstriyel Nem Alıcılar & Rutubet Kontrolü" },
      { label: "Erişim Durumu", value: "Randevu Sistemi ile Eşya Ekleme/Çıkarma İmkanı" }
    ],
    process: [
      { title: "Uzun Süreli İzolasyon", desc: "Depolanacak eşyalar tozlanma ve nem riskine karşı vakumlu poşetler ve 5 katmanlı naylonlarla izole edilerek adresten alınır." },
      { title: "Paletli Yerleşim", desc: "Depo zemininde nem oluşma ihtimaline karşı eşyalarınız ahşap Euro paletler üzerine dizilerek zeminle teması kesilir." },
      { title: "Barkodlu Envanter", desc: "Depoya giren her koli tek tek kayıt altına alınır ve size bir dijital envanter listesi kopyası verilir." },
      { title: "Geri Teslimat", desc: "Eşyalarınıza ihtiyaç duyduğunuzda ekiplerimize haber vermeniz halinde, deponuzdaki eşyalar yeni adresinize transfer edilip kurulur." }
    ],
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8ed7c83a7f?q=80&w=600",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600",
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=600"
    ]
  },
  "montaj-ve-demontaj": {
    title: "Uzman Montaj ve Kurulum Hizmetleri",
    desc: "Modüler mobilyalar, ankastre setler ve beyaz eşyalar için sertifikalı marangoz ve teknik personel desteği.",
    bgImage: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=2000",
    intro: "Nakliye sektöründeki en büyük hasarlar taşıma sırasında değil, bilinçsiz yapılan söküm ve kurulum (demontaj-montaj) işlemleri sırasında meydana gelir. Eşyalarınızın yiv ve menteşe yataklarının yalama olmaması, sunta ve MDF plakaların patlamaması için operasyonlarımız sadece profesyonel marangozlar tarafından yürütülür. Yeni evinizde hiçbir ek ustaya ihtiyaç duymadan yaşam alanınız anında kullanıma hazır hale getirilir.",
    technicalDetails: [
      { label: "Personel Niteliği", value: "Sertifikalı Marangoz ve Tesisat Ustaları" },
      { label: "Kullanılan Ekipman", value: "Şarjlı Torklu Vidalama, Lazer Gönye Sistemleri" },
      { label: "Kapsam Alanı", value: "Raylı Dolaplar, Yatak Odası Takımları, Beyaz Eşya" },
      { label: "Bağlantı Parçaları", value: "Eksik/Yıpranmış Vidalar İçin Yedek Parça Desteği" }
    ],
    process: [
      { title: "Kataloglandırma ve Söküm", desc: "Özellikle özel tasarım veya sürgülü raylı dolaplar sökülmeden önce menteşe yönlerine kadar işaretlenip numaralandırılır." },
      { title: "Bağlantı Parçası Güvenliği", desc: "Sökülen vidalar, kilit sistemleri ve ray bağlantıları akıllı kilitli poşetlere konularak doğrudan ilgili mobilyanın gövdesine bantlanır." },
      { title: "Tesisat ve Altyapı", desc: "Sadece ahşap mobilyalarınız değil; bulaşık makinesi, çamaşır makinesi ve buzdolabı gibi cihazların hortum ve gider bağlantıları da sökülür." },
      { title: "Milimetrik Kurulum", desc: "Yeni evde zemin eğimi hesaplanarak mobilyalarınızın lazer terazisi ile dengesi (gönye) alınır, kapakların simetrik kapanması sağlanır." }
    ],
    images: [
      "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=600",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600",
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=600"
    ]
  }
};

const TechIcon = () => (
  <svg className="w-8 h-8 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

export async function generateStaticParams() {
  const allSlugs = Object.keys(serviceData);
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const resolvedParams = await params;
  const service = serviceData[resolvedParams.slug];
  
  return {
    title: service ? `${service.title} | Profesyonel Nakliyat Lojistiği` : "Hizmet Bulunamadı",
    description: service ? service.desc : "Aradığınız hizmet sayfamız bulunmamaktadır.",
  };
}

export default async function ServicePage({ params }: RouteParams) {
  const resolvedParams = await params;
  const service = serviceData[resolvedParams.slug];

  if (!service) notFound();

  const allServices = [
    { name: "Evden Eve Nakliyat", url: "evden-eve-nakliyat" },
    { name: "Şehirler Arası Taşıma", url: "sehirler-arasi-tasima" },
    { name: "Kurumsal Ofis Taşıma", url: "ofis-tasima" },
    { name: "Parsiyel / Parça Yük", url: "parca-esya-tasima" },
    { name: "Otomobil & Araç Lojistiği", url: "arac-nakliyati" },
    { name: "Akıllı Eşya Depolama", url: "esya-depolama" },
    { name: "Montaj & Demontaj", url: "montaj-ve-demontaj" }
  ].filter(s => s.url !== resolvedParams.slug);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PageBanner 
        category="Kurumsal Hizmet Standartları"
        title={service.title}
        description={service.desc}
        bgImage={service.bgImage}
      />

      <main className="flex-grow w-full py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            
            <section className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-5 mb-8 border-b border-gray-100 pb-6">
                <div className="bg-orange-50 p-4 rounded-2xl">
                  <TechIcon />
                </div>
                <h2 className="text-3xl font-black text-blue-950 tracking-tight">Operasyon Mühendisliği</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg font-medium">
                {service.intro}
              </p>
            </section>

            <section className="bg-blue-950 p-8 md:p-12 rounded-3xl shadow-xl border-l-8 border-orange-500 text-white">
              <h3 className="text-2xl font-black mb-6">Teknik Donanım ve Kapsam</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.technicalDetails.map((tech: any, i: number) => (
                  <div key={i} className="bg-blue-900/50 p-5 rounded-2xl border border-blue-800">
                    <span className="block text-orange-400 text-xs font-black uppercase tracking-widest mb-1">{tech.label}</span>
                    <span className="block text-blue-50 font-semibold">{tech.value}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-black text-blue-950 mb-6">Saha Operasyonundan Kareler</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {service.images.map((img: string, i: number) => (
                  <div key={i} className="relative h-56 rounded-2xl overflow-hidden shadow-md group">
                    <div className="absolute inset-0 bg-blue-950 opacity-0 group-hover:opacity-20 transition-opacity z-10"></div>
                    <img src={img} alt={`${service.title} Operasyon ${i+1}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-black text-blue-950 mb-8 border-b border-gray-100 pb-4">Standart İş Akış Süreci</h3>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                {service.process.map((step: any, i: number) => (
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

          </div>

          <div className="space-y-8">
            <div className="bg-blue-950 text-white p-8 rounded-3xl shadow-xl border-b-4 border-orange-500 sticky top-24">
              <h3 className="text-xl font-black mb-4">Lojistik Planlama Departmanı</h3>
              <p className="text-sm text-blue-200 mb-6 font-medium leading-relaxed">
                Bu operasyon için araç filomuzun müsaitlik durumunu sorgulayın ve anında maliyet analizi talep edin.
              </p>
              <a href="tel:+905322830628" className="block text-center bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-xl transition-all shadow-lg uppercase tracking-wider text-sm mb-4">
                0532 283 06 28
              </a>
              <Link href="/iletisim" className="block text-center bg-transparent border border-blue-800 hover:bg-blue-900 text-white font-black py-4 rounded-xl transition-all uppercase tracking-wider text-sm">
                Dijital Ekspertiz Formu
              </Link>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-lg font-black text-blue-950 mb-6 border-b pb-2">Kurumsal Lojistik Ağı</h3>
              <ul className="space-y-3">
                {allServices.map((s, i) => (
                  <li key={i}>
                    <Link href={`/hizmetler/${s.url}`} className="flex items-center gap-3 p-2 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-orange-500 font-medium transition-colors border border-transparent hover:border-gray-100">
                      <span className="text-orange-500">▹</span> {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
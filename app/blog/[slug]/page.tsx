import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageBanner from "../../components/PageBanner";

interface BlogPost {
  title: string;
  desc: string;
  category: string;
  date: string;
  readTime: string;
  bgImage: string;
  content: string;
}

const blogContentData: Record<string, BlogPost> = {
  "tasinma-rehberi": {
    title: "Ev Taşırken Dikkat Edilmesi Gereken 10 Altın Kural",
    desc: "Taşınma stresini sıfıra indirmek ve eşyalarınızın güvenliğini sağlamak için profesyonel ekibimizin hazırladığı altın değerindeki 10 ipucu.",
    category: "Rehber",
    date: "12 Mayıs 2026",
    readTime: "4 Dk",
    bgImage: "/images/blog/banners/tasinma-rehberi-banner.webp", 
    content: `
      <p>Ev taşımak, doğru planlanmadığında hayatın en stresli dönemlerinden birine dönüşebilir. Ancak lojistik süreçlerini bir mühendislik planı gibi adım adım yönetmek, bu süreci tamamen sorunsuz atlatmanızı sağlar. İşte uzman operasyon ekibimizin hazırladığı 10 altın kural:</p>
      
      <h2>1. Planlamaya En Az 3 Hafta Önce Başlayın</h2>
      <p>Son güne bırakılan taşınma operasyonlarında ambalajlama hataları ve eşya hasarları kaçınılmazdır. Taşınma tarihiniz netleşir netleşmez bir takvim oluşturun ve her güne belirli bir odanın elenmesi veya kolilenmesi görevini yazın.</p>
      
      <h2>2. Dijital Ekspertiz Hizmetinden Yararlanın</h2>
      <p>Fiyat teklifi alırken firmanın eşyalarınızı görmesini veya detaylı bir dijital ekspertiz formu doldurmanızı talep edin. Bu, taşınma günü doğru boyutta araç (kamyon/kamyonet) ve yeterli miktarda ambalaj malzemesi gelmesini garantiler.</p>
      
      <h2>3. Eşyalarınızı Kategorize Ederek Eleyiniz</h2>
      <p>Kullanmadığınız, eskiyen veya yeni evinize uymayacak eşyaları taşımak lojistik maliyetinizi gereksiz yere artırır. Taşınmadan önce gardırop ve depo alanlarınızı eleyerek hafifleyin.</p>
      
      <h2>4. Kırılacak Eşyalar İçin Özel Bölüm Oluşturun</h2>
      <p>Mutfak malzemeleri ve porselenler taşınırken sıradan gazeteler yerine çift katmanlı kraft balonlu naylonlarla sarılmalıdır. Koli içindeki boşluklar ise ambalaj kağıtlarıyla sıkıştırılarak eşyaların sarsılması engellenmelidir.</p>
      
      <h2>5. Önemli Evrak ve Değerli Eşyaları Yanınıza Alın</h2>
      <p>Tapu, pasaport, altın, takı, laptop ve nakit para gibi envanterleri kesinlikle nakliye kamyonuna vermeyin. Bu tarz kıymetli eşyalar için kendinize özel bir sırt çantası hazırlayıp operasyon günü yanınızda bulundurun.</p>
    `
  },
  "nakliyat-sigortasi": {
    title: "Nakliyat Sigortası Nedir? Hangi Durumları Kapsar?",
    desc: "Evden eve nakliyat sürecinde eşyalarınızı güvence altına alan nakliyat sigortasının kapsamı, şartları ve muafiyet durumları hakkında her şey.",
    category: "Mevzuat",
    date: "05 Mayıs 2026",
    readTime: "3 Dk",
    bgImage: "/images/blog/banners/nakliyat-sigortasi-banner.webp", 
    content: `
      <p>Profesyonel nakliyat lojistiğinde sıfır risk politikası esastır. Ne kadar uzman bir kadroyla çalışırsanız çalışın, otoyol trafiğinde veya mücbir sebeplerde eşyalarınızın güvencede olması gerekir. İşte nakliyat sigortası hakkında bilmeniz gereken yasal detaylar:</p>
      
      <h2>Nakliyat Sigortası Neleri Kapsar?</h2>
      <p>Geniş kapsamlı emtia taşıma sigortası; nakliye aracının seyir halindeyken yapacağı kaza, devrilme, yanma, hırsızlık veya doğal afet gibi durumlarda eşyalarınızın maddi değerini tamamen koruma altına alır.</p>
      
      <h2>Sözleşmesiz Sigorta Geçersizdir</h2>
      <p>Bir nakliyat firmasının size 'Eşyalarınız sigortalı' demesi yasal olarak bir şey ifade etmez. Taşınma öncesinde adınıza düzenlenmiş resmi sigorta poliçesini ve maddelerini mutlaka talep edin.</p>
      
      <h2>Kişisel Paketleme Muafiyetleri</h2>
      <p>Unutulmamalıdır ki, müşteri tarafından yasal standartlara uygun olmayan şekilde kolilenen ve içi görünmeyen kutularda meydana gelen iç hasarlar sigorta kapsamı dışında kalabilir. Bu yüzden paketleme operasyonunu da uzman marangoz ve ambalaj ekibine bırakmak en güvenli yoldur.</p>
    `
  },
  "esya-paketleme-tuyolari": {
    title: "Kırılacak Eşyalar İçin Profesyonel Paketleme Tüyoları",
    desc: "Mutfak eşyalarınızın, cam ürünlerinizin ve elektronik cihazlarınızın taşıma esnasında hasar görmemesi için uzman ambalajlama teknikleri.",
    category: "İpuçları",
    date: "28 Nisan 2026",
    readTime: "5 Dk",
    bgImage: "/images/blog/banners/esya-paketleme-banner.webp", 
    content: `
      <p>Ev taşırken en çok hasar gören ve kırılan eşyalar mutfak envanterleri ve hassas elektronik cihazlardır. Doğru ambalajlama mühendisliği ile bu riski sıfıra indirmek mümkündür. İşte holding standartlarında paketleme yöntemleri:</p>
      
      <h2>Cam ve Porselenler İçin Katmanlı Koruma</h2>
      <p>Tabak ve bardaklar doğrudan koliye dizilmemelidir. Her bir parça önce beyaz ambalaj kağıdı ile sarılmalı, ardından 3 katmanlı kraft balonlu patpata sarılarak koliye dikey şekilde yerleştirilmelidir. Yatay dizilimler baskı anında kırılma riskini artırır.</p>
      
      <h2>Elektronik Cihazların Statik Güvenliği</h2>
      <p>Televizyon (LED/OLED) ekranları, monitörler ve ses sistemleri taşınırken statik elektrik oluşturmayan anti-statik havalı ambalajlar kullanılmalıdır. Ekran yüzeyleri kalın sert mukavva köşeliklerle kilitlenmeli ve çelik kasalı araçta özel sabitleme ipleriyle (lashing) duvara bağlanmalıdır.</p>
    `
  },
  "asansorlu-nakliyat-uygunluk": {
    title: "Asansörlü Nakliyat Hangi Binalar İçin Uygundur?",
    desc: "Dış cephe asansör kurulumu için gereken açı, sokağın durumu, balkon yapısı ve kaçıncı kata kadar hizmet verilebildiğine dair teknik detaylar.",
    category: "Teknoloji",
    date: "20 Nisan 2026",
    readTime: "4 Dk",
    bgImage: "/images/blog/banners/asansorlu-nakliyat-banner.webp", 
    content: `
      <p>Modüler dış cephe asansörleri, yüksek katlı binalarda taşınma süresini %50 kısaltan muazzam bir teknolojidir. Ancak bu sistemin kurulabilmesi için binanın ve çevrenin belirli fiziksel kriterleri karşılaması gerekir.</p>
      
      <h2>1. Sokak ve Cephe Genişliği</h2>
      <p>Asansör aracının (mobil vinç) hidrolik ayaklarını açarak zemine tam dengeli oturabilmesi için bina önünde en az 4-5 metrelik boş bir alan bulunmalıdır. Dar sokaklar, yoğun araç parklanmaları vincin yanaşmasını engelleyebilir.</p>
      
      <h2>2. Engel Oluşturan Ağaç ve Elektrik Telleri</h2>
      <p>Asansör raylarının balkona veya pencereye uzanacağı hat üzerinde yüksek gerilim hatları, sokak lambaları veya kalın ağaç dalları bulunmamalıdır. Operasyon öncesi uzman ekibimiz lazer ölçüm cihazlarıyla bu hattın temizliğini kontrol eder.</p>
      
      <h2>3. Kat Sınırı ve Kaldırma Gücü</h2>
      <p>Modern hidrolik mobil asansörlerimiz 25. kata kadar (yaklaşık 75 metre yüksekliğe) pürüzsüzce ulaşabilir ve tek seferde 400 kg ağırlığındaki devasa mobilyaları, buzdolaplarını güvenle transfer edebilir.</p>
    `
  },
  "sehirler-arasi-nakliyat-fiyatlari": {
    title: "Şehirler Arası Nakliyat Fiyatları Neye Göre Belirlenir?",
    desc: "Uzun yol taşımacılığında maliyetleri etkileyen kilometre, eşya hacmi, araç boyutu ve otoyol ücretleri gibi temel parametrelerin şeffaf analizi.",
    category: "Maliyet",
    date: "15 Nisan 2026",
    readTime: "6 Dk",
    bgImage: "/images/blog/banners/sehirler-arasi-banner.webp", 
    content: `
      <p>Şehirler arası taşımacılık bütçesi hesaplanırken merdiven altı firmaların aksine, kurumsal şirketler belirli matematiksel ve lojistik formüller kullanırlar. Fiyatı belirleyen ana faktörler şunlardır:</p>
      
      <h2>Net Kilometre ve Yakıt Maliyeti</h2>
      <p>İki şehir arasındaki mesafe, harcanacak motorin miktarını ve köprü/ototoyol (KGM/YİD) geçiş ücretlerini doğrudan belirler. Rota optimizasyon yazılımlarımızla en güvenli ve en kısa otoyol rotası hesaplanır.</p>
      
      <h2>Eşya Hacmi (Metreküp - m³)</h2>
      <p>Eşyalarınızın araçta kaplayacağı alan, operasyona çıkacak kamyonun boyutunu belirler. Büyük boy bir kırkayak kamyon ile orta boy bir 10 teker kamyonun amortisman ve otoyol tarifeleri farklıdır. Bu yüzden sitemizdeki Hacim Hesaplama Aracı doğru fiyat için çok kritiktir.</p>
      
      <h2>Personel ve Çift Şoför Prosedürü</h2>
      <p>Ulaştırma Bakanlığı mevzuatlarına göre belirli bir kilometrenin üzerindeki uzun yollarda sürüş güvenliği için çift şoför görevlendirilir. Ayrıca eşyaların sökülmesi ve ambalajlanması için görev alacak bordrolu personel sayısı maliyete yansır.</p>
    `
  },
  "sorunsuz-ofis-tasima": {
    title: "Sorunsuz Ofis Taşıma: İş Sürekliliğini Korumanın Yolları",
    desc: "Şirketinizin veri altyapısı, sunucuları (Server) ve gizli arşivleri taşınırken hiçbir iş kaybı yaşamamanız için uyguladığımız lojistik mühendisliği.",
    category: "Kurumsal",
    date: "02 Nisan 2026",
    readTime: "5 Dk",
    bgImage: "/images/blog/banners/ofis-tasima-banner.webp", 
    content: `
      <p>Kurumsal şirket ve ofis lojistiği, ev taşıma mantığından tamamen farklı bir uzmanlık gerektirir. Burada en büyük risk eşyaların kırılması değil, şirketin operasyonel olarak durması ve ciro kaybı yaşamasıdır.</p>
      
      <h2>Hafta Sonu ve Gece Vardiyası Planlaması</h2>
      <p>Şirketinizin mesai kaybı yaşamaması için taşınma operasyonunu Cuma akşamı 18:00'da başlatıyor, Cumartesi ve Pazar gecesi dahil çift vardiya çalışarak Pazartesi sabahı saat 08:00'da tüm departmanları çalışmaya hazır teslim ediyoruz.</p>
      
      <h2>Server (Sunucu) ve IT Altyapı Güvenliği</h2>
      <p>Sistem odasındaki ağ cihazları, sunucular ve bilgisayarlar sökülmeden önce statik elektriği engelleyen anti-statik balonlu malzemelerle korunur. Havalı süspansiyona sahip VIP araçlarımızla sarsıntısız şekilde taşınarak yeni lokasyonda hemen aktif edilir.</p>
    `
  }
};

export async function generateStaticParams() {
  return Object.keys(blogContentData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata(props: any): Promise<Metadata> {
  const resolvedParams = await props.params;
  const post = blogContentData[resolvedParams?.slug];
  
  if (!post) {
    return { title: "Yazı Bulunamadı | Evden Eve Taşıma" };
  }

  return {
    title: `${post.title} | Taşınma Rehberi`,
    description: post.desc,
  };
}

export default async function BlogPostDetailPage(props: any) {
  const resolvedParams = await props.params;
  const slug = resolvedParams?.slug;
  const post = blogContentData[slug];

  if (!post) {
    notFound();
  }

  const otherPosts = [
    { name: "Ev Taşırken 10 Altın Kural", url: "tasinma-rehberi" },
    { name: "Nakliyat Sigortası Kapsamı", url: "nakliyat-sigortasi" },
    { name: "Kırılacak Eşya Paketleme", url: "esya-paketleme-tuyolari" },
    { name: "Asansör Kurulum Şartları", url: "asansorlu-nakliyat-uygunluk" },
    { name: "Uzun Yol Fiyat Analizi", url: "sehirler-arasi-nakliyat-fiyatlari" },
    { name: "Kurumsal Ofis Taşıma", url: "sorunsuz-ofis-tasima" }
  ].filter(p => p.url !== slug);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PageBanner 
        category={`Blog / ${post.category}`}
        title={post.title}
        description={post.desc}
        bgImage={post.bgImage}
      />

      <main className="flex-grow w-full py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2">
            <article className="bg-white p-8 md:p-14 rounded-3xl shadow-xl border border-gray-100">
              
              <div className="flex items-center gap-6 text-xs font-bold text-gray-400 border-b border-gray-100 pb-6 mb-8 uppercase tracking-widest">
                <div className="flex items-center gap-1">📅 {post.date}</div>
                <div className="flex items-center gap-1">⏱️ {post.readTime} OKUMA</div>
                <div className="text-orange-500"># {post.category}</div>
              </div>

              <div 
                className="prose prose-blue max-w-none text-gray-700 leading-relaxed font-medium space-y-6 blog-content-styles"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

            </article>
          </div>

          <div className="space-y-8">
            
            <div className="bg-blue-950 text-white p-8 rounded-3xl shadow-xl border-b-4 border-orange-500 sticky top-24">
              <h3 className="text-xl font-black mb-4">Ücretsiz Dijital Ekspertiz</h3>
              <p className="text-sm text-blue-200 mb-6 font-medium leading-relaxed">
                Makalemizi okudunuz, aklınızdaki soruları yanıtladıysak hemen profesyonel taşıma planınızı ve adil fiyat teklifinizi oluşturun.
              </p>
              <a href="tel:+905322830628" className="block text-center bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-xl transition-all shadow-lg uppercase tracking-wider text-sm mb-4">
                0532 283 06 28
              </a>
              <Link href="/iletisim" className="block text-center bg-transparent border border-blue-800 hover:bg-blue-900 text-white font-black py-4 rounded-xl transition-all uppercase tracking-wider text-sm">
                Fiyat Teklifi Al
              </Link>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-lg font-black text-blue-950 mb-6 border-b pb-2">Popüler Rehberler</h3>
              <ul className="space-y-3">
                {otherPosts.map((p, i) => (
                  <li key={i}>
                    <Link href={`/blog/${p.url}`} className="flex items-center gap-2 p-2 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-orange-500 font-bold transition-all group text-sm">
                      <span className="text-orange-500 group-hover:translate-x-1 transition-transform">▸</span>
                      <span className="group-hover:translate-x-1 transition-transform">{p.name}</span>
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
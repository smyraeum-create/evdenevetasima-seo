import { Metadata } from "next";
import Link from "next/link";
import PageBanner from "../components/PageBanner";

export const metadata: Metadata = {
  title: "Nakliyat Blogu ve Taşınma Rehberi | Evden Eve Taşıma",
  description: "Ev taşırken dikkat edilmesi gerekenler, nakliyat sigortası, asansörlü taşıma og ofis lojistiği hakkında en güncel uzman bilgileri.",
};

export const blogPosts = [
  { 
    slug: "tasinma-rehberi", 
    title: "Ev Taşırken Dikkat Edilmesi Gereken 10 Altın Kural",
    excerpt: "Taşınma stresini sıfıra indirmek ve eşyalarınızın güvenliğini sağlamak için profesyonel ekibimizin hazırladığı altın değerindeki 10 ipucu.",
    date: "12 Mayıs 2026",
    readTime: "4 Dk",
    category: "Rehber",
    image: "/images/blog/tasinma-rehberi.webp"
  },
  { 
    slug: "nakliyat-sigortasi", 
    title: "Nakliyat Sigortası Nedir? Hangi Durumları Kapsar?",
    excerpt: "Evden eve nakliyat sürecinde eşyalarınızı güvence altına alan nakliyat sigortasının kapsamı, şartları ve muafiyet durumları hakkında her şey.",
    date: "05 Mayıs 2026",
    readTime: "3 Dk",
    category: "Mevzuat",
    image: "/images/blog/nakliyat-sigortasi.webp"
  },
  { 
    slug: "esya-paketleme-tuyolari", 
    title: "Kırılacak Eşyalar İçin Profesyonel Paketleme Tüyoları",
    excerpt: "Mutfak eşyalarınızın, cam ürünlerinizin ve elektronik cihazlarınızın taşıma esnasında hasar görmemesi için uzman ambalajlama teknikleri.",
    date: "28 Nisan 2026",
    readTime: "5 Dk",
    category: "İpuçları",
    image: "/images/blog/esya-paketleme.webp"
  },
  { 
    slug: "asansorlu-nakliyat-uygunluk", 
    title: "Asansörlü Nakliyat Hangi Binalar İçin Uygundur?",
    excerpt: "Dış cephe asansör kurulumu için gereken açı, sokağın durumu, balkon yapısı ve kaçıncı kata kadar hizmet verilebildiğine dair teknik detaylar.",
    date: "20 Nisan 2026",
    readTime: "4 Dk",
    category: "Teknoloji",
    image: "/images/blog/asansorlu-sartlar.webp"
  },
  { 
    slug: "sehirler-arasi-nakliyat-fiyatlari", 
    title: "Şehirler Arası Nakliyat Fiyatları Neye Göre Belirlenir?",
    excerpt: "Uzun yol taşımacılığında maliyetleri etkileyen kilometre, eşya hacmi, araç boyutu ve otoyol ücretleri gibi temel parametrelerin şeffaf analizi.",
    date: "15 Nisan 2026",
    readTime: "6 Dk",
    category: "Maliyet",
    image: "/images/blog/fiyat-analizi.webp"
  },
  { 
    slug: "sorunsuz-ofis-tasima", 
    title: "Sorunsuz Ofis Taşıma: İş Sürekliliğini Korumanın Yolları",
    excerpt: "Şirketinizin veri altyapısı, sunucuları (Server) ve gizli arşivleri taşınırken hiçbir iş kaybı yaşamamanız için uyguladığımız lojistik mühendisliği.",
    date: "02 Nisan 2026",
    readTime: "5 Dk",
    category: "Kurumsal",
    image: "/images/blog/ofis-stratejisi.webp"
  }
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      <PageBanner 
        category="Bilgi Bankası"
        title="Nakliyat Rehberi ve Blog"
        description="Sektörel gelişmeler, profesyonel taşınma tüyoları ve eşya güvenliğiniz için uzman ekibimizin hazırladığı rehber içerikler."
        bgImage="/images/banners/blog.webp" 
      />

      <main className="flex-grow max-w-7xl mx-auto px-4 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, i) => (
            <article key={i} className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col group transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
              
              <Link href={`/blog/${post.slug}`} className="relative h-60 w-full overflow-hidden block">
                <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out bg-gray-200"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-orange-500 text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                    {post.category}
                  </span>
                </div>
              </Link>
              
              <div className="p-8 flex flex-col flex-grow relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-400 font-bold flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.readTime} Okuma
                  </span>
                </div>
                
                <h2 className="text-xl font-black text-blue-950 mb-4 line-clamp-2 group-hover:text-orange-500 transition-colors leading-tight">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                
                <p className="text-sm text-gray-500 font-medium leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                  <span className="text-xs text-gray-400 font-bold">{post.date}</span>
                  <Link href={`/blog/${post.slug}`} className="text-blue-950 font-black text-sm uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 group-hover:text-orange-500 transition-all">
                    Devamını Oku <span className="text-lg leading-none">→</span>
                  </Link>
                </div>
              </div>
              
            </article>
          ))}
        </div>

        <div className="mt-24 bg-blue-950 p-10 md:p-14 rounded-[2.5rem] shadow-2xl text-center border-b-4 border-orange-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6">Taşınmaya Hazır Mısınız?</h3>
            <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              Blog yazılarımızla teorik bilgileri aldınız. Şimdi bu bilgileri pratiğe dökme ve kusursuz bir taşınma deneyimi yaşama vakti.
            </p>
            <Link href="/iletisim" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-black py-5 px-12 rounded-xl transition-all shadow-xl uppercase tracking-widest text-sm transform hover:-translate-y-1">
              Ücretsiz Ekspertiz Talep Et
            </Link>
          </div>
        </div>
      </main>
      
    </div>
  );
}
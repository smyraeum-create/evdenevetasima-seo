import { Metadata } from "next";
import Link from "next/link";
import PageBanner from "../components/PageBanner";

export const metadata: Metadata = {
  title: "Nakliyat Blogu ve Taşınma Rehberi | Evden Eve Taşıma",
  description: "Ev taşırken dikkat edilmesi gerekenler, nakliyat sigortası, paketleme tüyoları ve lojistik sektörü hakkında en güncel bilgiler.",
};

export default function BlogPage() {
  const posts = [
    { 
      slug: "tasinma-rehberi", 
      title: "Ev Taşırken Dikkat Edilmesi Gereken 10 Altın Kural",
      excerpt: "Taşınma stresini sıfıra indirmek ve eşyalarınızın güvenliğini sağlamak için profesyonel ekibimizin hazırladığı altın değerindeki 10 ipucu.",
      date: "12 Mayıs 2026",
      readTime: "4 Dk",
      category: "Rehber"
    },
    { 
      slug: "nakliyat-sigortasi", 
      title: "Nakliyat Sigortası Nedir? Hangi Durumları Kapsar?",
      excerpt: "Evden eve nakliyat sürecinde eşyalarınızı güvence altına alan nakliyat sigortasının kapsamı, şartları ve muafiyet durumları hakkında her şey.",
      date: "05 Mayıs 2026",
      readTime: "3 Dk",
      category: "Mevzuat"
    },
    { 
      slug: "esya-paketleme-tuyolari", 
      title: "Kırılacak Eşyalar İçin Profesyonel Paketleme Tüyoları",
      excerpt: "Mutfak eşyalarınızın, cam ürünlerinizin ve elektronik cihazlarınızın taşıma esnasında hasar görmemesi için uzman ambalajlama teknikleri.",
      date: "28 Nisan 2026",
      readTime: "5 Dk",
      category: "İpuçları"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      <PageBanner 
        category="Bilgi Bankası"
        title="Nakliyat Rehberi ve Blog"
        description="Sektörel gelişmeler, profesyonel taşınma tüyoları ve eşya güvenliğiniz için uzman ekibimizin hazırladığı rehber içerikler."
        bgImage="https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=2000" 
      />

      <main className="flex-grow max-w-5xl mx-auto px-4 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article key={i} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-orange-100 text-orange-600 text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400 font-bold flex items-center gap-1">
                    ⏱️ {post.readTime}
                  </span>
                </div>
                
                <h2 className="text-xl font-black text-blue-950 mb-4 line-clamp-2 group-hover:text-orange-500 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-sm text-gray-500 font-medium leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                  <span className="text-xs text-gray-400 font-bold">{post.date}</span>
                  <Link href={`/blog/${post.slug}`} className="text-orange-500 font-black text-sm uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                    Devamını Oku <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>
              
            </article>
          ))}
        </div>

        <div className="mt-16 bg-blue-950 p-8 md:p-12 rounded-3xl shadow-xl text-center border-b-4 border-orange-500">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Taşınmaya Hazır Mısınız?</h3>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
            Blog yazılarımızla teorik bilgileri aldınız. Şimdi bu bilgileri pratiğe dökme ve kusursuz bir taşınma deneyimi yaşama vakti.
          </p>
          <a href="tel:+905322830628" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-black py-4 px-10 rounded-xl transition-all shadow-lg uppercase tracking-wider text-sm transform hover:scale-105">
            Ücretsiz Ekspertiz Talep Et
          </a>
        </div>
      </main>
      
    </div>
  );
}
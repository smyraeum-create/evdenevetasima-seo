import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evden Eve Taşıma ve Nakliye | Profesyonel Hizmet",
  description: "Türkiye'nin her yerine güvenilir, sigortalı ve asansörlü evden eve nakliye hizmetleri. Profesyonel eşya taşıma için hemen fiyat alın.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-gray-50 text-gray-900 flex flex-col min-h-screen`}>
        
        <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl md:text-3xl font-extrabold tracking-tight hover:text-blue-200 transition-colors flex items-center gap-2">
              <span className="text-3xl">🚚</span> 
              <span>EvdenEve<span className="text-orange-400">Taşıma</span></span>
            </Link>
            
            <nav className="hidden md:flex gap-8 font-medium text-lg items-center">
              <Link href="/" className="hover:text-orange-400 transition-colors">Ana Sayfa</Link>
              <Link href="/istanbul/kadikoy" className="hover:text-orange-400 transition-colors">Hizmet Bölgeleri</Link>
              
              <a href="tel:+905555555555" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md transform hover:scale-105">
                📞 Hemen Ara
              </a>
            </nav>
          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Evden Eve Taşıma</h3>
              <p className="text-sm leading-relaxed text-gray-400">
                Türkiye'nin dört bir yanına sigortalı, asansörlü ve profesyonel nakliyat çözümleri sunuyoruz. Eşyalarınız bizimle her zaman güvende.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Hızlı Bağlantılar</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-orange-400 transition-colors">Ana Sayfa</Link></li>
                <li><Link href="/istanbul/kadikoy" className="hover:text-orange-400 transition-colors">Kadıköy Nakliyat</Link></li>
                <li><Link href="/istanbul/besiktas" className="hover:text-orange-400 transition-colors">Beşiktaş Nakliyat</Link></li>
                <li><Link href="/istanbul/sisli" className="hover:text-orange-400 transition-colors">Şişli Nakliyat</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">İletişim</h3>
              <div className="space-y-3 text-sm">
                <p className="flex items-center gap-2"><span>📍</span> İstanbul, Türkiye</p>
                <p className="flex items-center gap-2"><span>📞</span> +90 (555) 555 55 55</p>
                <p className="flex items-center gap-2"><span>✉️</span> info@evdenevetasima.org</p>
              </div>
            </div>
          </div>
          <div className="text-center text-sm border-t border-gray-800 mt-10 pt-6 text-gray-500">
            © 2026 Evden Eve Taşıma ve Nakliye. Tüm hakları saklıdır.
          </div>
        </footer>

      </body>
    </html>
  );
}
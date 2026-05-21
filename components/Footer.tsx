import Link from "next/link";

export default function Footer() {
  return (
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
          <div className="space-y-4 text-sm">
            <p className="flex items-start gap-2 leading-relaxed">
              <span className="mt-0.5">📍</span> 
              <span>Küçükbakkalköy Mh. Kayışdağı Cd. Ali Ay Sk.<br />No: 3/1 Orkide Apt. Ataşehir - İSTANBUL</span>
            </p>
            <p className="flex items-center gap-2">
              <span>📞</span> 
              <a href="tel:+905322830628" className="hover:text-white transition-colors">
                0532 283 0628
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span>✉️</span> 
              <a href="mailto:info@evdenevetasima.org" className="hover:text-white transition-colors">
                info@evdenevetasima.org
              </a>
            </p>
          </div>
        </div>
        
      </div>
      
      <div className="text-center text-sm border-t border-gray-800 mt-10 pt-6 text-gray-500">
        © 2026 Evden Eve Taşıma ve Nakliye. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
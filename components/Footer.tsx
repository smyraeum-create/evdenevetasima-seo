import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div className="lg:pr-4">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="bg-white rounded-full p-1.5 transition-transform group-hover:scale-105">
                <Image 
                  src="/brand/logo.svg" 
                  alt="Evden Eve Taşıma Logosu" 
                  width={48} 
                  height={48} 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="text-lg md:text-xl font-bold text-white tracking-wider uppercase group-hover:text-orange-400 transition-colors">
                Evden Eve Taşıma
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              İstanbul'dan Türkiye'nin dört bir yanına sigortalı, asansörlü ve profesyonel nakliyat çözümleri sunuyoruz. Eşyalarınız uzman kadromuzla her zaman güvende.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b border-gray-700 pb-2 inline-block">Kurumsal</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/hakkimizda" className="hover:text-orange-400 transition-colors flex items-center gap-2"><span className="text-orange-500 text-xs">▸</span> Hakkımızda</Link></li>
              <li><Link href="/iletisim" className="hover:text-orange-400 transition-colors flex items-center gap-2"><span className="text-orange-500 text-xs">▸</span> İletişim</Link></li>
              <li><Link href="/nakliyat-sozlesmesi" className="hover:text-orange-400 transition-colors flex items-center gap-2"><span className="text-orange-500 text-xs">▸</span> Nakliyat Sözleşmesi</Link></li>
              <li><Link href="/blog" className="hover:text-orange-400 transition-colors flex items-center gap-2"><span className="text-orange-500 text-xs">▸</span> Nakliyat Blogu</Link></li>
              <li><Link href="/cerez-politikasi" className="hover:text-orange-400 transition-colors flex items-center gap-2"><span className="text-orange-500 text-xs">▸</span> Çerez Politikası</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b border-gray-700 pb-2 inline-block">Hizmetlerimiz</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/hizmetler/evden-eve-nakliyat" className="hover:text-orange-400 transition-colors flex items-center gap-2"><span className="text-orange-500 text-xs">▸</span> Evden Eve Nakliyat</Link></li>
              <li><Link href="/hizmetler/sehirler-arasi-tasima" className="hover:text-orange-400 transition-colors flex items-center gap-2"><span className="text-orange-500 text-xs">▸</span> Şehirler Arası Taşıma</Link></li>
              <li><Link href="/hizmetler/ofis-tasima" className="hover:text-orange-400 transition-colors flex items-center gap-2"><span className="text-orange-500 text-xs">▸</span> Ofis Taşıma</Link></li>
              <li><Link href="/hizmetler/parca-esya-tasima" className="hover:text-orange-400 transition-colors flex items-center gap-2"><span className="text-orange-500 text-xs">▸</span> Parça Eşya Taşıma</Link></li>
              <li><Link href="/araclar/hacim-hesaplama" className="text-orange-400 hover:text-white font-bold transition-colors flex items-center gap-2"><span className="text-white text-xs">▸</span> Hacim Hesaplama Aracı</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b border-gray-700 pb-2 inline-block">İletişim</h3>
            <div className="space-y-4 text-sm">
              <p className="flex items-start gap-3 leading-relaxed">
                <span className="text-orange-500 mt-0.5 text-lg">📍</span>
                <span>Küçükbakkalköy Mh. Kayışdağı Cd. Ali Ay Sk.<br/>No: 3/1 Orkide Apt. Ataşehir - İSTANBUL</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-orange-500 text-lg">📞</span>
                <a href="tel:+905322830628" className="hover:text-white transition-colors font-bold text-base tracking-wide">0532 283 0628</a>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-orange-500 text-lg">✉️</span>
                <a href="mailto:info@evdenevetasima.org" className="hover:text-white transition-colors">info@evdenevetasima.org</a>
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-black py-5 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {currentYear} Evden Eve Taşıma ve Nakliye. Tüm Hakları Saklıdır.</p>
          <p className="mt-3 md:mt-0 flex items-center gap-1 font-medium italic">
            Designed & Coded by 
            <a 
              href="https://wa.me/905322830628" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-orange-500 font-black tracking-[0.2em] hover:text-white transition-colors ml-1 uppercase not-italic"
            >
              VOLKAN
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
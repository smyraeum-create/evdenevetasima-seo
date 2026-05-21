import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white text-blue-950 shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-48 h-12 flex items-center">
            <Image
              src="/brand/logo.svg"
              alt="Evden Eve Taşıma Logosu"
              fill
              sizes="(max-width: 768px) 150px, 192px"
              className="object-contain"
              priority
            />
          </div>
        </Link>
        
        <nav className="hidden md:flex gap-8 font-semibold text-lg items-center">
          <Link href="/" className="hover:text-orange-500 transition-colors">Ana Sayfa</Link>
          <Link href="/istanbul/kadikoy" className="hover:text-orange-500 transition-colors">Hizmet Bölgeleri</Link>
          
          <a href="tel:+905555555555" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md transform hover:scale-105 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            Hmen Ara
          </a>
        </nav>
      </div>
    </header>
  );
}
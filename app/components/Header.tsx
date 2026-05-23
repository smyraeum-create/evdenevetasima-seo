"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="bg-white text-blue-950 shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <Link href="/" className="flex items-center gap-3 group z-50">
          <div className="relative w-48 h-12 flex items-center">
            <Image
              src="/brand/logo.svg"
              alt="Evden Eve Taşıma"
              fill
              sizes="(max-width: 768px) 150px, 192px"
              className="object-contain"
              priority
            />
          </div>
        </Link>
        
        <button 
          className="md:hidden p-2 text-blue-950 hover:text-orange-500 transition-colors z-50"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Menüyü Aç/Kapat"
        >
          {isMobileOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <nav className="hidden md:flex gap-8 font-semibold text-base items-center">
          <Link href="/" className="hover:text-orange-500 transition-colors">
            Ana Sayfa
          </Link>
          
          <div className="relative group/menu">
            <button className="hover:text-orange-500 transition-colors flex items-center gap-1 py-2">
              Kurumsal
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 bg-white shadow-xl rounded-xl border border-gray-100 py-3 w-56 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-200 z-50">
              <Link href="/hakkimizda" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-500 transition-colors">
                Hakkımızda
              </Link>
              <Link href="/nakliyat-sozlesmesi" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-500 transition-colors">
                Nakliyat Sözleşmesi
              </Link>
            </div>
          </div>

          <div className="relative group/menu">
            <button className="hover:text-orange-500 transition-colors flex items-center gap-1 py-2">
              Hizmetlerimiz
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 bg-white shadow-xl rounded-xl border border-gray-100 py-3 w-64 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-200 z-50">
              <Link href="/hizmetler/evden-eve-nakliyat" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-500 transition-colors font-bold text-gray-900">
                Evden Eve Nakliyat
              </Link>
              <Link href="/hizmetler/sehirler-arasi-tasima" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-500 transition-colors font-bold text-orange-600">
                Şehirler Arası Taşıma
              </Link>
              <Link href="/hizmetler/ofis-tasima" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-500 transition-colors">
                Ofis Taşıma
              </Link>
              <Link href="/hizmetler/parca-esya-tasima" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-500 transition-colors">
                Parça Eşya Taşıma
              </Link>
              <Link href="/hizmetler/arac-nakliyati" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-500 transition-colors">
                Araç Nakliyatı
              </Link>
              <Link href="/hizmetler/esya-depolama" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-500 transition-colors">
                Eşya Depolama
              </Link>
              <Link href="/hizmetler/montaj-ve-demontaj" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-500 transition-colors">
                Montaj ve Demontaj
              </Link>
            </div>
          </div>

          <div className="relative group/menu">
            <button className="hover:text-orange-500 transition-colors flex items-center gap-1 py-2">
              Araçlar
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 bg-white shadow-xl rounded-xl border border-gray-100 py-3 w-56 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-200 z-50">
              <Link href="/araclar/hacim-hesaplama" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-500 transition-colors">
                Hacim Hesaplama
              </Link>
              <Link href="/araclar/mesafe-hesaplama" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-500 transition-colors">
                İller Arası Mesafe
              </Link>
              <Link href="/araclar/esya-listesi" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-500 transition-colors">
                Eşya Listesi Formu
              </Link>
            </div>
          </div>

          <Link href="/blog" className="hover:text-orange-500 transition-colors">
            Blog
          </Link>

          <Link href="/iletisim" className="hover:text-orange-500 transition-colors font-bold text-gray-900">
            İletişim
          </Link>
          
          <a href="tel:+905322830628" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md transform hover:scale-105 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Hemen Ara
          </a>
        </nav>
      </div>

      <div className={`md:hidden absolute w-full bg-white border-t border-gray-100 shadow-2xl transition-all duration-300 ease-in-out ${isMobileOpen ? 'max-h-[85vh] opacity-100 visible overflow-y-auto' : 'max-h-0 opacity-0 invisible overflow-hidden'}`}>
        <div className="px-4 py-6 space-y-6">
          <Link href="/" onClick={() => setIsMobileOpen(false)} className="block text-lg font-bold text-blue-950 hover:text-orange-500">
            Ana Sayfa
          </Link>

          <div>
            <div className="text-sm font-black text-orange-500 uppercase tracking-wider mb-3">Kurumsal</div>
            <div className="pl-4 border-l-2 border-gray-100 space-y-3">
              <Link href="/hakkimizda" onClick={() => setIsMobileOpen(false)} className="block font-semibold text-gray-700 hover:text-orange-500">Hakkımızda</Link>
              <Link href="/nakliyat-sozlesmesi" onClick={() => setIsMobileOpen(false)} className="block font-semibold text-gray-700 hover:text-orange-500">Nakliyat Sözleşmesi</Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-black text-orange-500 uppercase tracking-wider mb-3">Hizmetlerimiz</div>
            <div className="pl-4 border-l-2 border-gray-100 space-y-3">
              <Link href="/hizmetler/evden-eve-nakliyat" onClick={() => setIsMobileOpen(false)} className="block font-semibold text-gray-700 hover:text-orange-500">Evden Eve Nakliyat</Link>
              <Link href="/hizmetler/sehirler-arasi-tasima" onClick={() => setIsMobileOpen(false)} className="block font-semibold text-gray-700 hover:text-orange-500">Şehirler Arası Taşıma</Link>
              <Link href="/hizmetler/ofis-tasima" onClick={() => setIsMobileOpen(false)} className="block font-semibold text-gray-700 hover:text-orange-500">Ofis Taşıma</Link>
              <Link href="/hizmetler/parca-esya-tasima" onClick={() => setIsMobileOpen(false)} className="block font-semibold text-gray-700 hover:text-orange-500">Parça Eşya Taşıma</Link>
              <Link href="/hizmetler/arac-nakliyati" onClick={() => setIsMobileOpen(false)} className="block font-semibold text-gray-700 hover:text-orange-500">Araç Nakliyatı</Link>
              <Link href="/hizmetler/esya-depolama" onClick={() => setIsMobileOpen(false)} className="block font-semibold text-gray-700 hover:text-orange-500">Eşya Depolama</Link>
              <Link href="/hizmetler/montaj-ve-demontaj" onClick={() => setIsMobileOpen(false)} className="block font-semibold text-gray-700 hover:text-orange-500">Montaj ve Demontaj</Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-black text-orange-500 uppercase tracking-wider mb-3">Araçlar</div>
            <div className="pl-4 border-l-2 border-gray-100 space-y-3">
              <Link href="/araclar/hacim-hesaplama" onClick={() => setIsMobileOpen(false)} className="block font-semibold text-gray-700 hover:text-orange-500">Hacim Hesaplama</Link>
              <Link href="/araclar/mesafe-hesaplama" onClick={() => setIsMobileOpen(false)} className="block font-semibold text-gray-700 hover:text-orange-500">İller Arası Mesafe</Link>
              <Link href="/araclar/esya-listesi" onClick={() => setIsMobileOpen(false)} className="block font-semibold text-gray-700 hover:text-orange-500">Eşya Listesi Formu</Link>
            </div>
          </div>

          <Link href="/blog" onClick={() => setIsMobileOpen(false)} className="block text-lg font-bold text-blue-950 hover:text-orange-500">
            Blog
          </Link>

          <Link href="/iletisim" onClick={() => setIsMobileOpen(false)} className="block text-lg font-bold text-blue-950 hover:text-orange-500">
            İletişim
          </Link>

          <div className="pt-4 pb-2">
            <a href="tel:+905322830628" className="w-full bg-orange-500 text-white py-4 rounded-xl font-black text-lg flex items-center justify-center gap-2 shadow-md">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0532 283 0628
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
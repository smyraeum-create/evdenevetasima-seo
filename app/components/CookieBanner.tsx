"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-950 border-t-4 border-orange-600 text-white px-4 py-4 z-[60] shadow-[0_-10px_40px_rgba(0,0,0,0.3)] animate-in slide-in-from-bottom-full duration-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-blue-200 text-center md:text-left leading-relaxed flex items-center gap-3">
          <span className="text-2xl hidden sm:block">🍪</span>
          <p>
            Size daha iyi bir deneyim sunabilmek ve site trafiğini analiz etmek için çerezler kullanılmaktadır. Sitemizi kullanarak çerez kullanımını kabul etmiş sayılırsınız. Detaylar için{" "}
            <Link href="/cerez-politikasi" className="text-orange-400 hover:text-white font-bold underline transition-colors">
              Çerez Politikamızı
            </Link>{" "}
            inceleyebilirsiniz.
          </p>
        </div>
        <button 
          onClick={acceptCookies}
          className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl text-sm font-black uppercase tracking-wider transition-all shadow-lg transform hover:-translate-y-1 whitespace-nowrap shrink-0"
        >
          Kabul Et
        </button>
      </div>
    </div>
  );
}
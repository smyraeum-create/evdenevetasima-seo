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
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t-2 border-orange-500 text-white px-4 py-4 z-[60] shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-300 text-center sm:text-left leading-relaxed">
          Sitemizde size daha iyi bir hizmet sunabilmek ve site trafiğini analiz etmek için çerezler (cookies) kullanılmaktadır. Sitemizi kullanarak çerez kullanımını kabul etmiş sayılırsınız. Detaylı bilgi için{" "}
          <Link href="/cerez-politikasi" className="text-orange-400 hover:text-white font-bold underline transition-colors">
            Çerez Politikamızı
          </Link>{" "}
          inceleyebilirsiniz.
        </div>
        <button 
          onClick={acceptCookies}
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2.5 rounded-lg text-sm font-bold transition-all shadow-md transform hover:scale-105 whitespace-nowrap shrink-0"
        >
          Kabul Et
        </button>
      </div>
    </div>
  );
}
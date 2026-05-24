import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import PageBanner from "../components/PageBanner";

export const metadata: Metadata = {
  title: "İstanbul İlçeleri | Bölgesel Nakliyat Operasyonları",
  description: "Avrupa ve Anadolu yakasındaki tüm İstanbul ilçelerinde özel ekiplerimizle evden eve asansörlü nakliyat hizmeti sunuyoruz.",
};

const avrupaYakasi = [
  "Arnavutköy",
  "Avcılar",
  "Bağcılar",
  "Bahçelievler",
  "Bakırköy",
  "Başakşehir",
  "Bayrampaşa",
  "Beşiktaş",
  "Beylikdüzü",
  "Beyoğlu",
  "Büyükçekmece",
  "Çatalca",
  "Esenler",
  "Esenyurt",
  "Eyüpsultan",
  "Fatih",
  "Gaziosmanpaşa",
  "Güngören",
  "Kâğıthane",
  "Küçükçekmece",
  "Sarıyer",
  "Silivri",
  "Sultangazi",
  "Şişli",
  "Zeytinburnu"
];

const anadoluYakasi = [
  "Adalar",
  "Ataşehir",
  "Beykoz",
  "Çekmeköy",
  "Kadıköy",
  "Kartal",
  "Maltepe",
  "Pendik",
  "Sancaktepe",
  "Sultanbeyli",
  "Şile",
  "Tuzla",
  "Ümraniye",
  "Üsküdar"
];

const slugify = (text: string) => {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[çÇ]/g, 'c')
    .replace(/[ğĞ]/g, 'g')
    .replace(/[ıİ]/g, 'i')
    .replace(/[öÖ]/g, 'o')
    .replace(/[şŞ]/g, 's')
    .replace(/[üÜ]/g, 'u')
    .replace(/[âÂ]/g, 'a')
    .replace(/[îÎ]/g, 'i')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export default function IstanbulPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <PageBanner 
        category="Bölgesel Lojistik Ağı"
        title="İstanbul Operasyon Bölgeleri"
        description="İstanbul'un 39 ilçesinde, dar sokaklara, yokuşlara ve yüksek binalara özel araç filomuzla kesintisiz hizmet veriyoruz."
        bgImage="/images/banners/istanbul.webp"
      />

      <main className="flex-grow py-16 md:py-24 max-w-7xl mx-auto px-4 w-full">
        
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-black text-blue-950">Avrupa Yakası İlçeleri</h2>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {avrupaYakasi.map((ilce, index) => (
              <Link 
                key={index} 
                href={`/istanbul/${slugify(ilce)}`} 
                className="bg-white hover:bg-orange-600 text-blue-950 hover:text-white p-4 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center font-bold border border-gray-100 transform hover:-translate-y-1"
              >
                {ilce}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-black text-blue-950">Anadolu Yakası İlçeleri</h2>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {anadoluYakasi.map((ilce, index) => (
              <Link 
                key={index} 
                href={`/istanbul/${slugify(ilce)}`} 
                className="bg-white hover:bg-orange-600 text-blue-950 hover:text-white p-4 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center font-bold border border-gray-100 transform hover:-translate-y-1"
              >
                {ilce}
              </Link>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
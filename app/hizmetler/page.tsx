"use client";

import React from "react";
import Link from "next/link";
import PageBanner from "../components/PageBanner";

const HomeIcon = () => (
  <svg className="w-10 h-10 text-orange-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
);
const OfficeIcon = () => (
  <svg className="w-10 h-10 text-orange-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
);
const TruckIcon = () => (
  <svg className="w-10 h-10 text-orange-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l3 5v6H8m12-11V7H4v14h4m12-11H8v11h12z" /></svg>
);
const CarIcon = () => (
  <svg className="w-10 h-10 text-orange-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
);
const BoxIcon = () => (
  <svg className="w-10 h-10 text-orange-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
);
const WarehouseIcon = () => (
  <svg className="w-10 h-10 text-orange-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
);
const ToolsIcon = () => (
  <svg className="w-10 h-10 text-orange-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);

const ElevatorIcon = () => (
  <svg className="w-10 h-10 text-orange-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7l4-4m0 0l4 4m-4-4v18M4 21h16" />
  </svg>
);

const servicesList = [
  { slug: "evden-eve-nakliyat", title: "Evden Eve Nakliyat", desc: "Avrupa standartlarında ambalajlama ve sıfır risk politikası ile anahtar teslim ev taşıma operasyonları.", icon: <HomeIcon /> },
  { slug: "sehirler-arasi-tasima", title: "Şehirler Arası Nakliyat", desc: "Türkiye'nin 81 iline aktarmasız direkt rotalama ve çelik kasa araçlarla uzun yol taşımacılığı.", icon: <TruckIcon /> },
  { slug: "ofis-tasima", title: "Kurumsal Ofis Taşıma", desc: "İş sürekliliğinizi aksatmayan, IT altyapısı ve arşiv güvenliği odaklı kurumsal lojistik.", icon: <OfficeIcon /> },
  { slug: "parca-esya-tasima", title: "Parsiyel (Parça) Eşya", desc: "Aynı güzergahtaki yüklerin birleştirilmesiyle maliyetleri düşüren ekonomik ve barkodlu taşıma.", icon: <BoxIcon /> },
  { slug: "arac-nakliyati", title: "Otomobil & Araç Lojistiği", desc: "Sıfır km veya arızalı araçlarınız için kapalı kasa ve VIP çekici filosuyla tam sigortalı transfer.", icon: <CarIcon /> },
  { slug: "esya-depolama", title: "Akıllı Eşya Depolama", desc: "7/24 güvenlik kameralı ve iklimlendirmeli, kişiye özel şifreli ahşap odalarda muhafaza.", icon: <WarehouseIcon /> },
  { slug: "montaj-ve-demontaj", title: "Montaj & Demontaj", desc: "Modüler mobilyalar ve ankastre setler için sertifikalı marangoz ve teknik personel desteği.", icon: <ToolsIcon /> },
  { slug: "asansorlu-nakliyat", title: "Asansörlü Nakliyat", desc: "25. kata kadar ulaşabilen hidrolik dış cephe asansörlerimizle sıfır riskli, hızlı ve hasarsız taşıma operasyonu.", icon: <ElevatorIcon /> }
];

export default function ServicesIndexPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PageBanner 
        category="Kurumsal Çözümler"
        title="Operasyon ve Lojistik Hizmetlerimiz"
        description="Bireysel taşınmalardan devasa kurumsal lojistik operasyonlarına kadar, her ihtiyaca özel mühendislik hassasiyetinde çözümler üretiyoruz."
        bgImage="/images/banners/hizmetler.webp"
      />

      <main className="flex-grow max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-blue-950 mb-6">İhtiyacınıza Uygun Hizmeti Seçin</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
            Alanında uzman kadromuz ve modern araç filomuzla, lojistiğin her dalında sektör standartlarını yeniden belirliyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <Link 
              key={index} 
              href={`/hizmetler/${service.slug}`}
              className="group bg-white p-8 rounded-3xl shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full"
            >
              <div className="bg-orange-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-blue-950 mb-4 group-hover:text-orange-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 font-medium leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>
              <div className="mt-auto flex items-center text-sm font-bold text-blue-950 group-hover:text-orange-500 transition-colors uppercase tracking-wider">
                Detayları İncele
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <section className="bg-blue-950 py-20 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Özel Bir Projeniz mi Var?</h2>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto font-medium">
            Standart hizmetlerimizin dışında, fabrikanıza veya şirketinize özel karmaşık lojistik operasyonları için proje departmanımızla iletişime geçin.
          </p>
          <a href="tel:+905322830628" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-black text-lg transition-all shadow-xl">
            Proje Danışmanıyla Görüş
          </a>
        </div>
      </section>
    </div>
  );
}
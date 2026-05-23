"use client";

import { useState } from "react";
import PageBanner from "../../components/PageBanner";

type Category = 
  | "Salon & Oturma Odası" 
  | "Yatak Odası" 
  | "Beyaz Eşya" 
  | "Çalışma Odası" 
  | "Mutfak & Banyo" 
  | "Antre & Hol" 
  | "Kutu, Koli & Hurçlar";

interface Item {
  name: string;
  m3: number;
  count: number;
  category: Category;
}

export default function CalculatorPage() {
  const [items, setItems] = useState<Item[]>([
    { name: "Üçlü Koltuk", m3: 1.5, count: 0, category: "Salon & Oturma Odası" },
    { name: "İkili Koltuk", m3: 1.1, count: 0, category: "Salon & Oturma Odası" },
    { name: "Tekli Koltuk / Berjer", m3: 0.6, count: 0, category: "Salon & Oturma Odası" },
    { name: "L Koltuk / Köşe Takımı", m3: 2.5, count: 0, category: "Salon & Oturma Odası" },
    { name: "TV Ünitesi (Alt Modül)", m3: 0.8, count: 0, category: "Salon & Oturma Odası" },
    { name: "Gümüşlük / Vitrin", m3: 1.2, count: 0, category: "Salon & Oturma Odası" },
    { name: "Konsol", m3: 1.0, count: 0, category: "Salon & Oturma Odası" },
    { name: "Yemek Masası", m3: 1.0, count: 0, category: "Salon & Oturma Odası" },
    { name: "Yemek Sandalyesi", m3: 0.2, count: 0, category: "Salon & Oturma Odası" },
    { name: "Orta Sehpa", m3: 0.3, count: 0, category: "Salon & Oturma Odası" },
    { name: "Büyük Halı (6m²)", m3: 0.2, count: 0, category: "Salon & Oturma Odası" },

    { name: "Çift Kişilik Yatak (Baza+Başlık)", m3: 2.0, count: 0, category: "Yatak Odası" },
    { name: "Tek Kişilik Yatak (Baza+Başlık)", m3: 1.2, count: 0, category: "Yatak Odası" },
    { name: "Gardırop (Sürgülü/Büyük)", m3: 3.5, count: 0, category: "Yatak Odası" },
    { name: "Gardırop (3 Kapılı)", m3: 2.0, count: 0, category: "Yatak Odası" },
    { name: "Şifonyer", m3: 0.5, count: 0, category: "Yatak Odası" },
    { name: "Komodin", m3: 0.2, count: 0, category: "Yatak Odası" },
    { name: "Makyaj Masası", m3: 0.6, count: 0, category: "Yatak Odası" },
    { name: "Bebek Beşiği", m3: 0.8, count: 0, category: "Yatak Odası" },

    { name: "Buzdolabı (Standart)", m3: 1.2, count: 0, category: "Beyaz Eşya" },
    { name: "Buzdolabı (Gardırop Tipi)", m3: 2.0, count: 0, category: "Beyaz Eşya" },
    { name: "Çamaşır Makinesi", m3: 0.5, count: 0, category: "Beyaz Eşya" },
    { name: "Bulaşık Makinesi", m3: 0.5, count: 0, category: "Beyaz Eşya" },
    { name: "Fırın / Solo Ocak", m3: 0.4, count: 0, category: "Beyaz Eşya" },
    { name: "Kurutma Makinesi", m3: 0.5, count: 0, category: "Beyaz Eşya" },
    { name: "Derin Dondurucu", m3: 0.6, count: 0, category: "Beyaz Eşya" },

    { name: "Çalışma Masası", m3: 0.6, count: 0, category: "Çalışma Odası" },
    { name: "Ofis Sandalyesi", m3: 0.3, count: 0, category: "Çalışma Odası" },
    { name: "Kitaplık", m3: 0.8, count: 0, category: "Çalışma Odası" },
    { name: "Evrak Dolabı", m3: 1.0, count: 0, category: "Çalışma Odası" },

    { name: "Mutfak Masası", m3: 0.5, count: 0, category: "Mutfak & Banyo" },
    { name: "Mutfak Sandalyesi / Tabure", m3: 0.1, count: 0, category: "Mutfak & Banyo" },
    { name: "Su Sebili", m3: 0.3, count: 0, category: "Mutfak & Banyo" },
    { name: "Banyo Dolabı (Boy)", m3: 0.5, count: 0, category: "Mutfak & Banyo" },

    { name: "Portmanto / Vestiyer", m3: 1.5, count: 0, category: "Antre & Hol" },
    { name: "Ayakkabılık", m3: 0.4, count: 0, category: "Antre & Hol" },
    { name: "Dresuar", m3: 0.4, count: 0, category: "Antre & Hol" },

    { name: "Standart Karton Koli", m3: 0.1, count: 0, category: "Kutu, Koli & Hurçlar" },
    { name: "Büyük Boy Koli", m3: 0.15, count: 0, category: "Kutu, Koli & Hurçlar" },
    { name: "Kıyafet Hurcu / Çuval", m3: 0.1, count: 0, category: "Kutu, Koli & Hurçlar" },
    { name: "Askılı Elbise Kolisi", m3: 0.3, count: 0, category: "Kutu, Koli & Hurçlar" },
  ]);

  const totalM3 = items.reduce((acc, curr) => acc + (curr.m3 * curr.count), 0);

  const updateCount = (index: number, val: number) => {
    const newItems = [...items];
    newItems[index].count = Math.max(0, newItems[index].count + val);
    setItems(newItems);
  };

  const renderCategory = (categoryName: Category) => {
    const categoryItems = items.map((item, index) => ({ ...item, originalIndex: index }))
                               .filter(item => item.category === categoryName);

    if (categoryItems.length === 0) return null;

    return (
      <div className="mb-10" key={categoryName}>
        <h3 className="text-xl font-black text-blue-950 mb-6 border-b-2 border-gray-100 pb-3 flex items-center gap-2">
          <span className="text-orange-500">::</span> {categoryName}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categoryItems.map((item) => (
            <div key={item.originalIndex} className="flex justify-between items-center p-4 bg-gray-50 hover:bg-white hover:shadow-md transition-all rounded-2xl border border-gray-100">
              <div className="pr-4">
                <span className="font-bold text-gray-800 block text-sm">{item.name}</span>
                <span className="text-xs text-orange-500 font-bold">{item.m3} m³</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-1 rounded-xl border border-gray-200 shadow-sm shrink-0">
                <button type="button" onClick={() => updateCount(item.originalIndex, -1)} className="w-8 h-8 flex items-center justify-center text-gray-400 font-black hover:text-white hover:bg-orange-500 rounded-lg transition-colors">-</button>
                <span className="w-6 text-center font-black text-blue-950">{item.count}</span>
                <button type="button" onClick={() => updateCount(item.originalIndex, 1)} className="w-8 h-8 flex items-center justify-center text-gray-400 font-black hover:text-white hover:bg-orange-500 rounded-lg transition-colors">+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <PageBanner 
        category="Fiyat & Planlama"
        title="Hacim Hesaplama Aracı"
        description="Eşyalarınızın miktarını girerek ne kadarlık bir nakliye aracına ihtiyacınız olduğunu anında öğrenin."
        bgImage="/images/banners/hacim.webp" 
      />

      <main className="flex-grow max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-black text-blue-950 mb-8">Eşya Envanterini Seçin</h2>
            {renderCategory("Salon & Oturma Odası")}
            {renderCategory("Yatak Odası")}
            {renderCategory("Beyaz Eşya")}
            {renderCategory("Çalışma Odası")}
            {renderCategory("Mutfak & Banyo")}
            {renderCategory("Antre & Hol")}
            {renderCategory("Kutu, Koli & Hurçlar")}
          </div>

          <div className="relative">
            <div className="sticky top-24 bg-blue-950 p-8 rounded-3xl shadow-2xl text-center text-white border-b-4 border-orange-500">
              <div className="text-sm uppercase font-bold text-blue-300 mb-2 tracking-widest">Toplam Eşya Hacmi</div>
              <div className="text-6xl font-black text-orange-500 mb-6">{totalM3.toFixed(1)} <span className="text-2xl text-white">m³</span></div>
              
              <div className="bg-blue-900/50 p-5 rounded-2xl border border-blue-800 text-sm font-medium mb-8">
                Sistem Tarafından Önerilen Araç:<br/>
                <strong className="text-xl text-white mt-2 block">
                  {totalM3 === 0 ? "Eşya Seçilmedi" : 
                   totalM3 <= 14 ? "Küçük Boy Kamyonet (Panelvan)" : 
                   totalM3 <= 28 ? "Orta Boy Kamyon (10 Teker)" : 
                   totalM3 <= 45 ? "Büyük Boy Kamyon (Kırkayak)" : 
                   "Tır / Çoklu Kamyon Filosu"}
                </strong>
                <span className="block text-blue-300 text-xs mt-3 opacity-80">*Yukarıdaki hesaplama standart istifleme yöntemlerine göre yapılmıştır.</span>
              </div>

              <a 
                href="tel:+905322830628" 
                className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-5 rounded-xl transition-all shadow-lg uppercase text-sm tracking-wider"
              >
                Bu Hacim İçin Fiyat Al
              </a>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
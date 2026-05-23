"use client";

import { useState } from "react";
import PageBanner from "../../components/PageBanner";

type Category = "Salon" | "Yatak Odası" | "Beyaz Eşya";

interface Item {
  name: string;
  m3: number;
  count: number;
  category: Category;
}

export default function CalculatorPage() {
  const [items, setItems] = useState<Item[]>([
    { name: "Üçlü Koltuk", m3: 1.5, count: 0, category: "Salon" },
    { name: "Tekli Koltuk / Berjer", m3: 0.8, count: 0, category: "Salon" },
    { name: "TV Ünitesi", m3: 1.2, count: 0, category: "Salon" },
    { name: "Yemek Masası", m3: 1.5, count: 0, category: "Salon" },
    { name: "Çift Kişilik Yatak (Baza+Başlık)", m3: 2.5, count: 0, category: "Yatak Odası" },
    { name: "Gardırop (3+ Kapılı)", m3: 3.0, count: 0, category: "Yatak Odası" },
    { name: "Şifonyer / Komodin", m3: 0.5, count: 0, category: "Yatak Odası" },
    { name: "Buzdolabı", m3: 1.5, count: 0, category: "Beyaz Eşya" },
    { name: "Çamaşır / Bulaşık Makinesi", m3: 0.8, count: 0, category: "Beyaz Eşya" },
  ]);

  const totalM3 = items.reduce((acc, curr) => acc + (curr.m3 * curr.count), 0);

  const updateCount = (index: number, val: number) => {
    const newItems = [...items];
    newItems[index].count = Math.max(0, newItems[index].count + val);
    setItems(newItems);
  };

  const renderCategory = (categoryName: Category) => (
    <div className="mb-8" key={categoryName}>
      <h3 className="text-lg font-black text-blue-950 mb-4 border-b border-gray-200 pb-2">{categoryName}</h3>
      <div className="space-y-3">
        {items.map((item, index) => item.category === categoryName && (
          <div key={index} className="flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors rounded-xl border border-gray-200">
            <div>
              <span className="font-bold text-gray-800 block">{item.name}</span>
              <span className="text-xs text-gray-500">{item.m3} m³ / Adet</span>
            </div>
            <div className="flex items-center gap-4 bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
              <button type="button" onClick={() => updateCount(index, -1)} className="w-8 h-8 text-gray-600 font-black hover:text-orange-500">-</button>
              <span className="w-4 text-center font-black text-blue-950">{item.count}</span>
              <button type="button" onClick={() => updateCount(index, 1)} className="w-8 h-8 text-gray-600 font-black hover:text-orange-500">+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <PageBanner 
        category="Fiyat & Planlama"
        title="Hacim Hesaplama Aracı"
        description="Eşyalarınızın miktarını girerek ne kadarlık bir nakliye aracına ihtiyacınız olduğunu anında öğrenin."
        bgImage="https://images.unsplash.com/photo-1586528116311-ad8ed7c83a7f?q=80&w=2000" 
      />

      <main className="flex-grow max-w-5xl mx-auto px-4 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-black text-blue-950 mb-6">Eşyalarınızı Seçin</h2>
            {renderCategory("Salon")}
            {renderCategory("Yatak Odası")}
            {renderCategory("Beyaz Eşya")}
          </div>

          <div className="relative">
            <div className="sticky top-8 bg-blue-950 p-8 rounded-3xl shadow-xl text-center text-white border-b-4 border-orange-500">
              <div className="text-sm uppercase font-bold text-blue-300 mb-2">Toplam Eşya Hacmi</div>
              <div className="text-6xl font-black text-orange-500 mb-4">{totalM3.toFixed(1)} <span className="text-2xl text-white">m³</span></div>
              
              <div className="bg-blue-900/50 p-4 rounded-xl border border-blue-800 text-sm font-medium mb-6">
                Önerilen Araç Boyutu:<br/>
                <strong className="text-lg text-white mt-1 block">
                  {totalM3 === 0 ? "Eşya Seçilmedi" : totalM3 < 15 ? "Küçük Boy Kamyonet" : totalM3 < 30 ? "Orta Boy Kamyon" : "Büyük Boy Kamyon"}
                </strong>
              </div>

              <a 
                href="tel:+905322830628" 
                className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-xl transition-all shadow-lg uppercase text-sm tracking-wider"
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
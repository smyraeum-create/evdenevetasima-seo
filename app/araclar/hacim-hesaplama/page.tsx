"use client";
import { useState } from "react";

export default function CalculatorPage() {
  const [items, setItems] = useState<{ name: string; m3: number; count: number }[]>([
    { name: "Yatak Odası Takımı", m3: 6, count: 0 },
    { name: "Oturma Grubu", m3: 5, count: 0 },
    { name: "Buzdolabı", m3: 1.5, count: 0 },
    { name: "Çamaşır Makinesi", m3: 0.8, count: 0 },
    { name: "Yemek Masası", m3: 2, count: 0 },
  ]);

  const totalM3 = items.reduce((acc, curr) => acc + curr.m3 * curr.count, 0);

  const updateCount = (index: number, val: number) => {
    const newItems = [...items];
    newItems[index].count = Math.max(0, newItems[index].count + val);
    setItems(newItems);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
        <h1 className="text-3xl font-black text-blue-950 mb-2">Hacim Hesaplama</h1>
        <p className="text-gray-500 mb-8">Eşyalarınızı seçin, ihtiyacınız olan araç kapasitesini görün.</p>
        
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
              <span className="font-bold text-gray-700">{item.name}</span>
              <div className="flex items-center gap-4">
                <button onClick={() => updateCount(index, -1)} className="w-8 h-8 bg-white border rounded-full font-bold shadow-sm">-</button>
                <span className="w-6 text-center font-black">{item.count}</span>
                <button onClick={() => updateCount(index, 1)} className="w-8 h-8 bg-orange-500 text-white rounded-full font-bold shadow-sm">+</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-8 bg-blue-950 rounded-2xl text-white text-center">
          <div className="text-sm uppercase font-bold text-blue-300 mb-2">Tahmini Toplam Hacim</div>
          <div className="text-5xl font-black text-orange-500">{totalM3.toFixed(1)} m³</div>
          <p className="mt-4 text-xs text-blue-200">Bu hacim için yaklaşık olarak <strong>{totalM3 > 15 ? 'Büyük Boy' : 'Orta Boy'}</strong> nakliye aracı gereklidir.</p>
        </div>
      </div>
    </div>
  );
}
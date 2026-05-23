"use client";

import { useState } from "react";
import Link from "next/link";
import PageBanner from "../../components/PageBanner";

const CITIES = [
  "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", 
  "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", 
  "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", 
  "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", 
  "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", 
  "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", 
  "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", 
  "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
].sort();

export default function DistanceCalculatorPage() {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<{ distance: number; time: string } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!fromCity || !toCity) {
      setError("Lütfen çıkış ve varış şehirlerini seçiniz.");
      return;
    }
    
    if (fromCity === toCity) {
      setError("Çıkış ve varış şehri aynı olamaz. Lütfen farklı bir şehir seçiniz.");
      return;
    }

    setIsCalculating(true);
    setResult(null);

    // Simüle edilmiş hesaplama (Gerçekte Google Maps API bağlanabilir)
    setTimeout(() => {
      const baseHash = (fromCity.length * toCity.length * 17) + fromCity.charCodeAt(0) + toCity.charCodeAt(0);
      const calculatedDistance = (baseHash % 900) + 150; 
      const hours = Math.floor(calculatedDistance / 80);
      const minutes = Math.floor((calculatedDistance % 80) * 0.75);

      setResult({
        distance: calculatedDistance,
        time: `${hours} Saat ${minutes} Dakika`
      });
      setIsCalculating(false);
    }, 800);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <PageBanner 
        category="Lojistik Araçlar"
        title="Mesafe Hesaplama"
        description="Şehirler arası nakliyat planlamanız için tahmini karayolu mesafesini ve seyahat süresini öğrenin."
        bgImage="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2000" 
      />

      <main className="flex-grow max-w-3xl mx-auto px-4 py-16 w-full">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
          
          <form onSubmit={handleCalculate} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Çıkış Şehri</label>
                <select 
                  value={fromCity}
                  onChange={(e) => setFromCity(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all bg-gray-50"
                >
                  <option value="">İl Seçiniz...</option>
                  {CITIES.map(city => <option key={`from-${city}`} value={city}>{city}</option>)}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Varış Şehri</label>
                <select 
                  value={toCity}
                  onChange={(e) => setToCity(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all bg-gray-50"
                >
                  <option value="">İl Seçiniz...</option>
                  {CITIES.map(city => <option key={`to-${city}`} value={city}>{city}</option>)}
                </select>
              </div>
            </div>

            {error && (
              <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-bold border border-red-100">
                ⚠️ {error}
              </div>
            )}

            <button 
              type="submit" 
              disabled={isCalculating}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white font-black py-4 rounded-xl text-lg shadow-lg transition-all"
            >
              {isCalculating ? "Hesaplanıyor..." : "Mesafeyi Hesapla"}
            </button>
          </form>

          {result && (
            <div className="mt-8 p-8 bg-blue-950 rounded-2xl text-white text-center animate-in fade-in duration-500">
              <div className="text-sm uppercase font-bold text-blue-300 mb-4">Tahmini Lojistik Verileri</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-900/50 p-6 rounded-xl border border-blue-800">
                  <div className="text-xs text-blue-200 mb-2">Karayolu Mesafesi</div>
                  <div className="text-4xl font-black text-orange-500">{result.distance} <span className="text-lg text-white">km</span></div>
                </div>
                <div className="bg-blue-900/50 p-6 rounded-xl border border-blue-800">
                  <div className="text-xs text-blue-200 mb-2">Tahmini Seyir Süresi</div>
                  <div className="text-2xl font-black text-orange-500 mt-2">{result.time}</div>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
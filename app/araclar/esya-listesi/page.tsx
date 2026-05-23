export default function ItemListPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
        <h1 className="text-3xl font-black text-blue-950 mb-2">Eşya Listesi Formu</h1>
        <p className="text-gray-500 mb-8">Taşınacak eşyalarınızın kabataslak adetlerini girerek net fiyat alın.</p>
        
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Koli Adedi (Tahmini)</label>
              <input type="number" className="w-full px-4 py-3 rounded-xl border border-gray-200" placeholder="0" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Oda Sayısı</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200" placeholder="Örn: 2+1" />
            </div>
          </div>
          <button className="w-full bg-blue-950 text-white font-black py-4 rounded-xl shadow-lg">
            Listeyi Gönder ve Fiyat Al
          </button>
        </div>
      </div>
    </div>
  );
}
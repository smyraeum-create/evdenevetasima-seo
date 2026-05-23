export default function DistancePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
        <h1 className="text-3xl font-black text-blue-950 mb-2">İller Arası Mesafe Hesaplama</h1>
        <p className="text-gray-500 mb-8">Nereden nereye taşınacağınızı seçerek kilometreyi öğrenin.</p>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Nereden (Çıkış İli)</label>
            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none" placeholder="Örn: İstanbul" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Nereye (Varış İli)</label>
            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none" placeholder="Örn: İzmir" />
          </div>
          <button className="w-full bg-orange-500 text-white font-black py-4 rounded-xl shadow-lg mt-4">
            Mesafeyi Hesapla
          </button>
        </div>
      </div>
    </div>
  );
}
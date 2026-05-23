"use client";

import { useState } from "react";
import PageBanner from "../../components/PageBanner";
import Link from "next/link";

export default function ItemListPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    nereden: "",
    nereye: "",
    odaSayisi: "",
    koltukTakimi: 0,
    yatakOdasi: 0,
    beyazEsya: 0,
    koliAdedi: 0,
    adSoyad: "",
    telefon: ""
  });

  const updateForm = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const increment = (field: keyof typeof formData) => {
    setFormData(prev => ({ ...prev, [field]: (prev[field] as number) + 1 }));
  };

  const decrement = (field: keyof typeof formData) => {
    setFormData(prev => ({ ...prev, [field]: Math.max(0, (prev[field] as number) - 1) }));
  };

  const handleNext = () => setStep(prev => Math.min(prev + 1, 3));
  const handlePrev = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PageBanner 
        category="Fiyat & Planlama"
        title="Detaylı Eşya Listesi"
        description="Eşyalarınızın detaylarını adım adım girerek size en uygun araç planlamasını ve net fiyat garantisini anında alın."
        bgImage="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2000"
      />

      <main className="flex-grow max-w-4xl mx-auto px-4 py-16 w-full">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
          
          {isSuccess ? (
            <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
              <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-black text-blue-950 mb-4">Talebiniz Alındı!</h2>
              <p className="text-gray-600 mb-8 font-medium max-w-md mx-auto">
                Eşya listeniz uzman ekspertiz ekibimize ulaştı. Planlama yapılarak en kısa sürede <strong>{formData.telefon}</strong> numaralı hattan size dönüş yapılacaktır.
              </p>
              <Link href="/" className="inline-block bg-blue-950 hover:bg-gray-900 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg uppercase tracking-wider text-sm">
                Ana Sayfaya Dön
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-12 relative px-4">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1.5 bg-gray-100 rounded-full z-0"></div>
                <div 
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-1.5 bg-orange-500 rounded-full z-0 transition-all duration-500 ease-in-out" 
                  style={{ width: step === 1 ? '15%' : step === 2 ? '50%' : '100%' }}
                ></div>
                
                <div className="flex justify-between relative z-10">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm transition-colors duration-300 shadow-sm ${step >= 1 ? 'bg-orange-500 text-white ring-4 ring-orange-100' : 'bg-white text-gray-400 border-2 border-gray-200'}`}>1</div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm transition-colors duration-300 shadow-sm ${step >= 2 ? 'bg-orange-500 text-white ring-4 ring-orange-100' : 'bg-white text-gray-400 border-2 border-gray-200'}`}>2</div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm transition-colors duration-300 shadow-sm ${step >= 3 ? 'bg-orange-500 text-white ring-4 ring-orange-100' : 'bg-white text-gray-400 border-2 border-gray-200'}`}>3</div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in duration-300">
                
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-black text-blue-950 mb-6">Taşınma Rotası ve Ev Tipi</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Nereden Taşınacak?</label>
                        <input type="text" value={formData.nereden} onChange={(e) => updateForm('nereden', e.target.value)} required className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all bg-gray-50" placeholder="İl, İlçe veya Mahalle" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Nereye Taşınacak?</label>
                        <input type="text" value={formData.nereye} onChange={(e) => updateForm('nereye', e.target.value)} required className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all bg-gray-50" placeholder="İl, İlçe veya Mahalle" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Mevcut Evin Oda Sayısı</label>
                      <select value={formData.odaSayisi} onChange={(e) => updateForm('odaSayisi', e.target.value)} required className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all bg-gray-50 text-gray-800">
                        <option value="">Seçiniz...</option>
                        <option value="1+0 / 1+1 (Stüdyo)">1+0 / 1+1 (Stüdyo)</option>
                        <option value="2+1 (Standart)">2+1 (Standart)</option>
                        <option value="3+1 (Geniş)">3+1 (Geniş)</option>
                        <option value="4+1 ve Üzeri (Dubleks/Villa)">4+1 ve Üzeri (Dubleks/Villa)</option>
                      </select>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-black text-blue-950 mb-6">Demirbaş Eşya Detayları</h2>
                    <p className="text-sm text-gray-500 font-medium mb-6">Aracın hacmini belirleyebilmemiz için temel büyük eşyalarınızın tahmini adetlerini belirtiniz.</p>
                    
                    <div className="space-y-4">
                      {[
                        { id: 'koltukTakimi', label: 'Koltuk Takımı / Kanepe' },
                        { id: 'yatakOdasi', label: 'Yatak Odası Takımı (Gardırop + Yatak)' },
                        { id: 'beyazEsya', label: 'Beyaz Eşya (Buzdolabı, Çamaşır Makinesi vb.)' },
                        { id: 'koliAdedi', label: 'Tahmini Koli ve Çuval Sayısı' }
                      ].map((item) => (
                        <div key={item.id} className="flex justify-between items-center p-5 bg-gray-50 rounded-xl border border-gray-200">
                          <span className="font-bold text-gray-800 text-sm md:text-base">{item.label}</span>
                          <div className="flex items-center gap-4 bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
                            <button type="button" onClick={() => decrement(item.id as keyof typeof formData)} className="w-8 h-8 flex items-center justify-center text-gray-600 font-black hover:text-orange-500 transition-colors">-</button>
                            <span className="w-6 text-center font-black text-blue-950">{formData[item.id as keyof typeof formData]}</span>
                            <button type="button" onClick={() => increment(item.id as keyof typeof formData)} className="w-8 h-8 flex items-center justify-center text-gray-600 font-black hover:text-orange-500 transition-colors">+</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-black text-blue-950 mb-6">İletişim ve Onay</h2>
                    <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 mb-6">
                      <p className="text-sm text-orange-800 font-bold">Listelediğiniz eşyaların nakliye planlaması için sizi arayacağız.</p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Adınız Soyadınız</label>
                        <input type="text" value={formData.adSoyad} onChange={(e) => updateForm('adSoyad', e.target.value)} required className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all bg-gray-50" placeholder="Örn: Ahmet Yılmaz" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Telefon Numaranız</label>
                        <input type="tel" value={formData.telefon} onChange={(e) => updateForm('telefon', e.target.value)} required className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all bg-gray-50" placeholder="0532 XXX XX XX" />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-4 pt-8 border-t border-gray-100 mt-10">
                  {step > 1 && (
                    <button type="button" onClick={handlePrev} className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-black rounded-xl transition-all uppercase tracking-wider text-sm w-1/3">
                      Geri
                    </button>
                  )}
                  
                  {step < 3 ? (
                    <button type="button" onClick={handleNext} disabled={step === 1 && (!formData.nereden || !formData.nereye || !formData.odaSayisi)} className="flex-1 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-black py-4 rounded-xl shadow-lg transition-all uppercase tracking-wider text-sm">
                      Sonraki Adım
                    </button>
                  ) : (
                    <button type="submit" disabled={isSubmitting || !formData.adSoyad || !formData.telefon} className="flex-1 bg-blue-950 hover:bg-black disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-black py-4 rounded-xl shadow-xl transition-all uppercase tracking-wider text-sm flex justify-center items-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Gönderiliyor...
                        </>
                      ) : (
                        "Formu Gönder ve Fiyat Al"
                      )}
                    </button>
                  )}
                </div>

              </form>
            </>
          )}

        </div>
      </main>
    </div>
  );
}
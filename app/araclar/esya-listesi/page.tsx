"use client";

import { useState } from "react";
import PageBanner from "../../components/PageBanner";
import Link from "next/link";

export default function ItemListPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form Veri Modeli - Tüm hizmetleri kapsayacak şekilde genişletildi
  const [formData, setFormData] = useState({
    hizmetTuru: "",
    nereden: "",
    nereye: "",
    odaSayisi: "",
    esyaDetayi: "", // Yeni: Müşterinin serbestçe eşya veya proje detaylarını yazabileceği alan
    adSoyad: "",
    telefon: "",
    eposta: ""
  });

  const updateForm = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => setStep(prev => Math.min(prev + 1, 3));
  const handlePrev = () => setStep(prev => Math.max(prev - 1, 1));

  // FORMU MAİLE GÖNDERME FONKSİYONU (EmailJS, Formspree vb. buraya entegre edilecek)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // BURASI BACKEND/MAİL SERVİSİ İÇİN HAZIRLANMIŞTIR
      // Örnek: await fetch('/api/send-email', { method: 'POST', body: JSON.stringify(formData) })
      // Şimdilik sistemin çalıştığını simüle ediyoruz:
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (error) {
      console.error("Form gönderim hatası:", error);
      setIsSubmitting(false);
      alert("Bir hata oluştu, lütfen doğrudan telefonla iletişime geçin.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PageBanner 
        category="Fiyat & Planlama"
        title="Dijital Ekspertiz Formu"
        description="Nakliye veya lojistik ihtiyaçlarınızı detaylandırın, operasyon departmanımız size en uygun araç ve maliyet planını anında sunsun."
        bgImage="/images/banners/hacim.webp"
      />

      <main className="flex-grow max-w-4xl mx-auto px-4 py-16 w-full">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
          
          {isSuccess ? (
            <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
              <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-black text-blue-950 mb-4">Talebiniz Operasyon Merkezine İletildi!</h2>
              <p className="text-gray-600 mb-8 font-medium max-w-md mx-auto leading-relaxed">
                Formunuz sistemimize düştü. Planlama ekibimiz detayları inceleyip en geç <strong className="text-blue-950">24 saat içinde</strong> belirttiğiniz <strong>{formData.telefon}</strong> numaralı hattan size resmi bir teklif sunacaktır.
              </p>
              <Link href="/" className="inline-block bg-blue-950 hover:bg-orange-500 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg uppercase tracking-wider text-sm">
                Ana Sayfaya Dön
              </Link>
            </div>
          ) : (
            <>
              {/* Progress Bar (İlerleme Çubuğu) */}
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
                
                {/* ADIM 1: Hizmet Türü ve Rota */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-black text-blue-950 mb-6 border-b pb-4">Hizmet Türü ve Lojistik Rotası</h2>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Talep Ettiğiniz Hizmet</label>
                      <select value={formData.hizmetTuru} onChange={(e) => updateForm('hizmetTuru', e.target.value)} required className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all bg-gray-50 text-gray-800 font-medium cursor-pointer">
                        <option value="">Lütfen Bir Hizmet Seçiniz...</option>
                        <option value="Evden Eve Nakliyat">Evden Eve Nakliyat</option>
                        <option value="Şehirler Arası Nakliyat">Şehirler Arası Nakliyat</option>
                        <option value="Kurumsal Ofis/Plaza Taşıma">Kurumsal Ofis/Plaza Taşıma</option>
                        <option value="Otomobil ve Araç Lojistiği">Otomobil ve Araç Lojistiği</option>
                        <option value="Parsiyel (Parça) Eşya Taşıma">Parsiyel (Parça) Eşya Taşıma</option>
                        <option value="Akıllı Eşya Depolama">Akıllı Eşya Depolama</option>
                        <option value="Sadece Montaj/Demontaj Desteği">Sadece Montaj/Demontaj Desteği</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Nereden Alınacak?</label>
                        <input type="text" value={formData.nereden} onChange={(e) => updateForm('nereden', e.target.value)} required className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all bg-gray-50" placeholder="İl, İlçe veya Mahalle" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Nereye Teslim Edilecek?</label>
                        <input type="text" value={formData.nereye} onChange={(e) => updateForm('nereye', e.target.value)} required className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all bg-gray-50" placeholder="İl, İlçe veya Depo" />
                      </div>
                    </div>
                  </div>
                )}

                {/* ADIM 2: Hacim ve Eşya Detayları */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-black text-blue-950 mb-6 border-b pb-4">Operasyon Hacmi ve Detaylar</h2>
                    
                    {/* Sadece evden eve ise oda sayısı sor, ofis veya araçsa sorma */}
                    {(formData.hizmetTuru === "Evden Eve Nakliyat" || formData.hizmetTuru === "Şehirler Arası Nakliyat") && (
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Mevcut Evin Oda Sayısı</label>
                        <select value={formData.odaSayisi} onChange={(e) => updateForm('odaSayisi', e.target.value)} className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all bg-gray-50 text-gray-800">
                          <option value="">Seçiniz...</option>
                          <option value="1+0 / 1+1 (Stüdyo)">1+0 / 1+1 (Stüdyo)</option>
                          <option value="2+1 (Standart)">2+1 (Standart)</option>
                          <option value="3+1 (Geniş)">3+1 (Geniş)</option>
                          <option value="4+1 ve Üzeri (Dubleks/Villa)">4+1 ve Üzeri (Dubleks/Villa)</option>
                        </select>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Eşya veya Proje Detayları</label>
                      <p className="text-xs text-gray-500 mb-3 font-medium">Büyük eşyalarınızı, asansör durumunu veya varsa özel taleplerinizi detaylıca yazınız. (Örn: 2 adet çelik kasa var, 5. kat asansör yok vb.)</p>
                      <textarea 
                        value={formData.esyaDetayi} 
                        onChange={(e) => updateForm('esyaDetayi', e.target.value)} 
                        rows={5} 
                        required 
                        className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all resize-none bg-gray-50" 
                        placeholder="Taşınacak eşyaların listesi ve bina fiziksel durumları..."
                      ></textarea>
                    </div>
                  </div>
                )}

                {/* ADIM 3: İletişim, Onay ve Captcha */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-black text-blue-950 mb-6 border-b pb-4">İletişim ve Güvenlik Doğrulaması</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Adınız Soyadınız / Firma Ünvanı</label>
                        <input type="text" value={formData.adSoyad} onChange={(e) => updateForm('adSoyad', e.target.value)} required className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all bg-gray-50" placeholder="Örn: Ahmet Yılmaz" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">E-Posta Adresi (Opsiyonel)</label>
                        <input type="email" value={formData.eposta} onChange={(e) => updateForm('eposta', e.target.value)} className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all bg-gray-50" placeholder="ornek@firma.com" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Telefon Numaranız</label>
                      <input type="tel" value={formData.telefon} onChange={(e) => updateForm('telefon', e.target.value)} required className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all bg-gray-50" placeholder="0532 XXX XX XX" />
                    </div>

                    {/* MÜHÜRLÜ CAPTCHA ARAYÜZÜ */}
                    <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-xl max-w-xs shadow-inner mt-4">
                      <div className="flex items-center gap-3 pl-2">
                        <input type="checkbox" id="captcha" required className="w-6 h-6 text-orange-500 rounded border-gray-300 focus:ring-orange-500 cursor-pointer" />
                        <label htmlFor="captcha" className="text-sm font-bold text-gray-700 cursor-pointer">Ben robot değilim</label>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-8 opacity-80" />
                        <span className="text-[9px] text-gray-500 mt-1 font-medium">reCAPTCHA</span>
                      </div>
                    </div>

                  </div>
                )}

                {/* NAVİGASYON BUTONLARI */}
                <div className="flex gap-4 pt-8 border-t border-gray-100 mt-10">
                  {step > 1 && (
                    <button type="button" onClick={handlePrev} className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-black rounded-xl transition-all uppercase tracking-wider text-sm w-1/3">
                      Geri
                    </button>
                  )}
                  
                  {step < 3 ? (
                    <button type="button" onClick={handleNext} disabled={step === 1 && (!formData.hizmetTuru || !formData.nereden || !formData.nereye)} className="flex-1 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-black py-4 rounded-xl shadow-lg transition-all uppercase tracking-wider text-sm">
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
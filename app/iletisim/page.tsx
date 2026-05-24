"use client";

import { useState } from "react";
import Link from "next/link";
import PageBanner from "../components/PageBanner";

const MapPinIcon = () => (
  <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const InfoCircleIcon = () => (
  <svg className="w-5 h-5 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    hizmetTuru: "İletişim Sayfası Hızlı Form",
    adSoyad: "",
    telefon: "",
    nereden: "",
    nereye: "",
    esyaDetayi: "",
    eposta: "Belirtilmedi",
    odaSayisi: "Belirtilmedi"
  });

  const updateForm = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/iletisim', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Sunucu hatası");
      }
      
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_gonderimi', {
          'event_category': 'iletisim',
          'event_label': 'İletişim Formu',
          'value': 1
        });
        console.log("Analytics: Form gönderimi kaydedildi.");
      }
      
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        hizmetTuru: "İletişim Sayfası Hızlı Form",
        adSoyad: "",
        telefon: "",
        nereden: "",
        nereye: "",
        esyaDetayi: "",
        eposta: "Belirtilmedi",
        odaSayisi: "Belirtilmedi"
      });
      
      setTimeout(() => setIsSuccess(false), 5000);
      
    } catch (error) {
      console.error("Form gönderim hatası:", error);
      setIsSubmitting(false);
      alert("Sistemsel bir hata oluştu, lütfen doğrudan telefonla bize ulaşın.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      <PageBanner 
        category="Hızlı Erişim"
        title="Bizimle İletişime Geçin"
        description="Taşınma planınızı ertelemeyin. Uzman ekspertiz ekibimizle ve güçlü operasyon ağımızla bir telefon kadar yakınınızdayız."
        bgImage="/images/banners/iletisim.webp" 
      />

      <main className="flex-grow py-16 md:py-20 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="space-y-8">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-black text-blue-950 mb-8 border-b border-gray-100 pb-4">Merkez Operasyon Ofisi</h2>
              
              <div className="space-y-8">
                
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-orange-100">
                    <MapPinIcon />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Adres</h3>
                    <p className="text-gray-600 mt-1 leading-relaxed text-sm font-medium">
                      Küçükbakkalköy Mh. Kayışdağı Cd. Ali Ay Sk.<br />
                      No: 3/1 Orkide Apt. Ataşehir / İSTANBUL
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-orange-100">
                    <PhoneIcon />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Telefon</h3>
                    <a href="tel:+905322830628" className="text-orange-600 hover:text-orange-700 font-black mt-1 block transition-colors text-xl">
                      0532 283 06 28
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-orange-100">
                    <MailIcon />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">E-Posta</h3>
                    <a href="mailto:info@evdenevetasima.org" className="text-gray-600 hover:text-orange-600 mt-1 block transition-colors text-sm font-medium">
                      info@evdenevetasima.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 bg-gray-50 p-5 rounded-2xl border border-gray-200">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    <ClockIcon />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Çalışma Saatleri</h3>
                    <p className="text-blue-950 font-black text-lg mt-1">08:00 - 19:00</p>
                    <p className="text-xs text-gray-600 mt-3 font-medium leading-relaxed bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                      <strong className="text-orange-600 font-black block mb-1">Mesai Dışı Destek:</strong>
                      Çalışma saatleri dışındaki zamanlarda <strong className="text-green-600 font-bold">WhatsApp</strong> üzerinden ulaştığınızda, ilk müsait müşteri temsilcimiz operasyon planlaması için size anında dönüş sağlayacaktır.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="w-full h-80 bg-gray-200 rounded-3xl overflow-hidden shadow-xl border border-gray-100 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">Harita Yükleniyor...</div>
              
              <iframe 
                src="https://maps.google.com/maps?q=40.979508,29.107948&z=16&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'relative', zIndex: 10 }} 
                allowFullScreen={false} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ataşehir Merkez Ofis Konumu"
              ></iframe>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col relative overflow-hidden">
            
            {isSuccess && (
              <div className="absolute inset-0 z-50 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-300">
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4 shadow-inner">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-blue-950 mb-2">Talebiniz İletildi!</h3>
                <p className="text-gray-600 font-medium">Müşteri temsilcimiz en kısa sürede sizi arayacaktır.</p>
              </div>
            )}

            <h2 className="text-2xl font-black text-blue-950 mb-2">Hızlı Fiyat Teklifi Alın</h2>
            <p className="text-sm text-gray-500 mb-8 font-medium">Eşyalarınızın nereden nereye taşınacağını yazın, sizi hemen arayıp güncel maliyet analizi sunalım.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="ad" className="block text-sm font-bold text-gray-700 mb-2">Adınız Soyadınız</label>
                  <input type="text" id="ad" value={formData.adSoyad} onChange={(e) => updateForm('adSoyad', e.target.value)} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-600 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Ahmet Yılmaz" />
                </div>
                <div>
                  <label htmlFor="telefon" className="block text-sm font-bold text-gray-700 mb-2">Telefon Numaranız</label>
                  <input type="tel" id="telefon" value={formData.telefon} onChange={(e) => updateForm('telefon', e.target.value)} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-600 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="0532 XXX XX XX" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nereden" className="block text-sm font-bold text-gray-700 mb-2">Nereden Taşınacak?</label>
                  <input type="text" id="nereden" value={formData.nereden} onChange={(e) => updateForm('nereden', e.target.value)} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-600 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Örn: Kadıköy, İstanbul" />
                </div>
                <div>
                  <label htmlFor="nereye" className="block text-sm font-bold text-gray-700 mb-2">Nereye Taşınacak?</label>
                  <input type="text" id="nereye" value={formData.nereye} onChange={(e) => updateForm('nereye', e.target.value)} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-600 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Örn: Çankaya, Ankara" />
                </div>
              </div>

              <div>
                <label htmlFor="mesaj" className="block text-sm font-bold text-gray-700 mb-2">Taşınma Detayları (Opsiyonel)</label>
                <textarea id="mesaj" value={formData.esyaDetayi} onChange={(e) => updateForm('esyaDetayi', e.target.value)} rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-600 outline-none transition-all resize-none bg-gray-50 focus:bg-white" placeholder="Oda sayısı, kaçıncı kat, asansör var mı? vb. detayları yazabilirsiniz."></textarea>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-950 p-4 rounded-r-xl mt-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5"><InfoCircleIcon /></div>
                  <p className="text-sm text-blue-900 font-medium leading-relaxed">
                    <strong className="font-black block mb-1">24 Saat İçinde Resmi Teklif</strong>
                    Dijital ekspertiz formunuz operasyon merkezimize ulaştığında, detaylı maliyet analizi yapılarak <strong className="font-bold">en geç 24 saat içerisinde</strong> resmi fiyat teklifimiz tarafınıza sunulacaktır.
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-6">
                <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-xl mb-6 max-w-xs shadow-inner">
                  <div className="flex items-center gap-3 pl-2">
                    <input type="checkbox" id="captcha" required className="w-6 h-6 text-orange-600 rounded border-gray-300 focus:ring-orange-600 cursor-pointer" />
                    <label htmlFor="captcha" className="text-sm font-bold text-gray-700 cursor-pointer">Ben robot değilim</label>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-8 opacity-80" />
                    <span className="text-[9px] text-gray-500 mt-1 font-medium">reCAPTCHA</span>
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting || !formData.adSoyad || !formData.telefon} className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-black text-lg py-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 uppercase tracking-wider flex justify-center items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Gönderiliyor...
                    </>
                  ) : (
                    "Fiyat Teklifi İste"
                  )}
                </button>
                
                <p className="text-xs text-center text-gray-400 mt-4 font-medium">
                  Formu göndererek <Link href="/cerez-politikasi" className="underline hover:text-gray-600">Gizlilik Politikamızı</Link> kabul etmiş olursunuz.
                </p>
              </div>

            </form>
          </div>
          
        </div>
      </main>
      
    </div>
  );
}
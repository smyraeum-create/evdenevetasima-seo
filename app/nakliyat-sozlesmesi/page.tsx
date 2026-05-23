import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resmi Nakliyat Sözleşmesi ve Taşıma Esasları | Evden Eve Taşıma",
  description: "Evden eve nakliyat hizmetlerimizde geçerli olan resmi taşıma sözleşmesi, sigorta şartları, ek hizmetler ve yasal yükümlülükler maddeleri.",
};

export default function ContractPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        
        {/* Sözleşme Üst Bilgi Bandı */}
        <div className="bg-blue-950 text-white p-8 md:p-12 text-center border-b-4 border-orange-500">
          <span className="text-orange-400 text-xs font-black uppercase tracking-widest bg-blue-900/50 px-4 py-1.5 rounded-full inline-block mb-3">
            Hukuki ve Resmi Mevzuat
          </span>
          <h1 className="text-2xl md:text-4xl font-black tracking-tight uppercase">
            Evden Eve Nakliyat Sözleşmesi
          </h1>
          <p className="text-blue-200 text-sm mt-2 font-medium">
            Taşıma ve Hizmet Esasları Standart Sözleşme Metni
          </p>
        </div>

        <div className="p-6 md:p-12 space-y-10">
          
          {/* 1. Taraflar Kısmı */}
          <section className="space-y-4">
            <h2 className="text-xl font-black text-blue-950 border-b pb-2 flex items-center gap-2">
              <span className="text-orange-500">1.</span> TARAFLAR
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 space-y-2">
                <h3 className="font-bold text-gray-900 uppercase tracking-wide text-xs text-orange-600">Müşteri (Hizmet Alan)</h3>
                <p className="text-gray-400 italic">Adı Soyadı / Unvanı: [ ... ]</p>
                <p className="text-gray-400 italic">T.C. Kimlik / Vergi No: [ ... ]</p>
                <p className="text-gray-400 italic">Telefon / E-posta: [ ... ]</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 space-y-2">
                <h3 className="font-bold text-gray-900 uppercase tracking-wide text-xs text-blue-600">Yüklenici (Hizmet Veren)</h3>
                <p className="text-gray-700 font-semibold">Firma Adı / Unvanı: Evden Eve Taşıma</p>
                <p className="text-gray-400 italic">Vergi Dairesi / No: [ ... ]</p>
                <p className="text-gray-400 italic">Telefon / E-posta: info@evdenevetasima.org</p>
              </div>
            </div>
          </section>

          {/* 2. Taşıma Bilgileri */}
          <section className="space-y-4">
            <h2 className="text-xl font-black text-blue-950 border-b pb-2 flex items-center gap-2">
              <span className="text-orange-500">2.</span> TAŞIMA BİLGİLERİ VE DETAYLARI
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <span className="block font-bold text-gray-900 mb-1">Yükleme Adresi (Çıkış):</span>
                <span className="text-gray-400 italic">[ Adres detayları ... ]</span>
                <span className="block mt-2 text-xs font-semibold text-gray-500">Kat / Asansör Durumu: [ ... ]</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <span className="block font-bold text-gray-900 mb-1">Teslim Adresi (Varış):</span>
                <span className="text-gray-400 italic">[ Adres detayları ... ]</span>
                <span className="block mt-2 text-xs font-semibold text-gray-500">Kat / Asansör Durumu: [ ... ]</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col justify-center">
                <span className="block font-bold text-gray-900 mb-1">Taşıma Zamanı:</span>
                <span className="text-gray-400 italic">Tarih: ... / ... / 202...</span>
                <span className="text-gray-400 italic">Saat: ... : ...</span>
              </div>
            </div>
          </section>

          {/* 3. Ücret ve Ödeme Şartları */}
          <section className="space-y-4">
            <h2 className="text-xl font-black text-blue-950 border-b pb-2 flex items-center gap-2">
              <span className="text-orange-500">3.</span> ÜCRET VE ÖDEME ŞARTLARI
            </h2>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-sm space-y-4 text-gray-600">
              <div className="flex flex-col md:flex-row md:justify-between border-b pb-3 gap-2">
                <div>
                  <span className="font-bold text-gray-900 block">Toplam Sözleşme Bedeli:</span>
                  <span className="text-gray-400 italic">[ ...... ] TL (Yazıyla: [ ...... ] TL)</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900 block">KDV Durumu:</span>
                  <span className="text-gray-500">[ ] Dahil / [ ] Hariç</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div>
                  <span className="font-bold text-gray-900 block mb-1">Ödeme Planı:</span>
                  <p className="text-xs text-gray-500">[ ] Kaparo (İş Öncesi): ...... TL</p>
                  <p className="text-xs text-gray-500">[ ] İş Bitimi (Kalan Ödeme): ...... TL</p>
                </div>
                <div>
                  <span className="font-bold text-gray-900 block mb-1">Ödeme Yöntemi:</span>
                  <p className="text-xs text-gray-500">[ ] Nakit / [ ] Banka Havalesi - EFT</p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Verilecek Ek Hizmetler */}
          <section className="space-y-4">
            <h2 className="text-xl font-black text-blue-950 border-b pb-2 flex items-center gap-2">
              <span className="text-orange-500">4.</span> VERİLECEK EK HİZMETLER
            </h2>
            <p className="text-xs text-gray-500 mb-2">Yüklenici tarafından taahhüt edilen ek hizmetlerin listesi:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
              {[
                "Mobilyaların De-montaj ve Montaj İşlemleri",
                "Beyaz Eşyaların Sökülmesi ve Bağlanması",
                "Anahtar Teslim Toplama (Kırılacaklar/Giysiler dâhil)",
                "Sadece Kaba Eşyaların Paketlenmesi",
                "Ambalaj Malzemesi Tedariği (Koli, Patpat naylon vb.)",
                "Harici Dış Cephe Asansör Kurulum Hizmeti"
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="w-4 h-4 border-2 border-gray-300 rounded flex-shrink-0"></span>
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Sözleşme Şartları */}
          <section className="space-y-4">
            <h2 className="text-xl font-black text-blue-950 border-b pb-2 flex items-center gap-2">
              <span className="text-orange-500">5.</span> SÖZLEŞME ŞARTLARI VE YÜKÜMLÜLÜKLER
            </h2>
            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-orange-500">
                <p className="font-bold text-blue-950 mb-1">1. Paketleme ve Hazırlık:</p>
                <p>Müşteri tarafından paketleneceği taahhüt edilen eşyaların, taşıma saatine kadar nakliyeye uygun ve sağlam bir şekilde kolilenmiş olması gerekir. Yüklenici, kendisinin paketlemediği kolilerin içinden çıkan hasarlardan sorumlu tutulamaz.</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-blue-900">
                <p className="font-bold text-blue-950 mb-1">2. Eşya Güvencesi ve Hasar Sorumluluğu:</p>
                <p>Taşıma esnasında Yüklenici personelinin kusuru, ihmali veya kazalar neticesinde eşyalarda meydana gelebilecek kırılma, yırtılma veya hasarlar Yüklenici tarafından tazmin edilecektir. Ancak elektronik/mekanik cihazların içsel arızaları (fiziki darbe izi bulunmayan durumlarda) bu sorumluluğun dışındadır.</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-orange-500">
                <p className="font-bold text-blue-950 mb-1">3. Değerli Eşya Muafiyeti:</p>
                <p>Nakit para, altın, döviz, mücevher, hisse senedi, tapu gibi kıymetli evrak ve ziynet eşyaları ile her türlü mikro-elektronik cihaz (telefon, laptop vb.) Müşteri'nin kendisi tarafından taşınacaktır. Bu tür eşyaların kaybından Yüklenici sorumlu değildir.</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-blue-900">
                <p className="font-bold text-blue-950 mb-1">4. Mücbir Sebepler ve İptal:</p>
                <p>Yoğun hava muhalefeti, resmi makamlarca getirilen yasaklar veya mücbir sebepler dışında; taraflardan biri taşınma gününden en az 48 saat önce haber vermeksizin sözleşmeyi tek taraflı feshederse, karşı tarafın uğradığı doğrudan zararı tazmin etmekle mükelleftir.</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-orange-500">
                <p className="font-bold text-blue-950 mb-1">5. Adres ve Çevre Koşulları:</p>
                <p>Müşteri, taşıma yapılacak her iki adreste de araç park yerinin uygunluğunu, site içi giriş izinlerini ve varsa asansör kullanım izinlerini önceden organize etmekle yükümlüdür.</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-blue-900">
                <p className="font-bold text-blue-950 mb-1">6. Uyuşmazlıkların Çözümü:</p>
                <p>Bu sözleşmeden doğabilecek her türlü ihtilafın çözümünde yerel Tüketici Hakem Heyetleri ile Mahkemeleri ve İcra Daireleri yetkilidir.</p>
              </div>
            </div>
          </section>

          {/* İmzalar Bandı */}
          <div className="border-t pt-8 text-center text-xs text-gray-400 italic">
            * İşbu sözleşme metni bilgilendirme amaçlı olup, tarafların serbest iradeleriyle 2 (iki) nüsha olarak tanzim edilerek asıl taşınma gününde resmiyet kazanır.
          </div>

        </div>
      </div>
    </div>
  );
}
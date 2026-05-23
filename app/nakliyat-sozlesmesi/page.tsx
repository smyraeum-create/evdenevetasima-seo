import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nakliyat Sözleşmesi | Evden Eve Taşıma",
  description: "Evden eve nakliyat hizmetlerimiz için geçerli olan standart taşıma sözleşmesi ve sigorta koşulları örneği.",
};

export default function ContractPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-black text-blue-950 mb-8 border-b pb-4">Evden Eve Nakliyat Sözleşmesi Örneği</h1>
        <div className="prose prose-blue max-w-none text-gray-600 space-y-6 text-sm">
          
          <section>
            <h2 className="font-bold text-blue-950 text-lg uppercase">1. Taraflar</h2>
            <p>İşbu sözleşme, hizmeti sunan <strong>Evden Eve Taşıma</strong> (Yüklenici) ile hizmeti alan müşteri (İşveren) arasında imzalanmıştır.</p>
          </section>
          
          <section>
            <h2 className="font-bold text-blue-950 text-lg uppercase">2. Hizmet Kapsamı</h2>
            <p>Yüklenici, İşveren'e ait eşyaların belirtilen adresten alınarak hedef adrese; ambalajlı, sigortalı ve (varsa) asansörlü olarak taşınmasını taahhüt eder.</p>
          </section>
          
          <section>
            <h2 className="font-bold text-blue-950 text-lg uppercase">3. Sigorta ve Sorumluluk</h2>
            <p>Taşıma esnasında oluşabilecek kaza ve hasarlara karşı eşyalar tam kapsamlı nakliyat sigortası altındadır. Ancak doğal aşınmalar ve müşteri tarafından paketlenen kolilerdeki kırılmalar kapsam dışıdır.</p>
          </section>
          
          <div className="mt-10 p-6 bg-blue-50 rounded-xl text-blue-900 italic font-medium">
            * Not: Bu bir örnektir. Gerçek taşınma işlemlerinde ıslak imzalı resmi sözleşme nüshası tarafınıza sunulur.
          </div>
          
        </div>
      </div>
    </div>
  );
}
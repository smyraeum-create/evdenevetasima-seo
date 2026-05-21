export default function IlceSayfasi({ params }: { params: { ilce: string } }) {
  // URL'deki ilçe adını alıp baş harfini büyütüyoruz
  const ilceAdi = params.ilce.charAt(0).toUpperCase() + params.ilce.slice(1);

  return (
    <main className="min-h-screen p-10 bg-gray-50 text-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          {ilceAdi} Evden Eve Taşıma
        </h1>
        <p className="text-lg mb-6">
          İstanbul <strong>{ilceAdi}</strong> bölgesinde profesyonel eşya ambalajlama, güvenli taşıma ve sigortalı nakliyat hizmeti veriyoruz. 
        </p>
      </div>
    </main>
  );
}
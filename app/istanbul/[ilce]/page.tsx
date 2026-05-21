import { Metadata } from 'next';

type Props = {
  params: Promise<{ ilce: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const ilceAdi = resolvedParams.ilce.charAt(0).toUpperCase() + resolvedParams.ilce.slice(1);
  
  return {
    title: `${ilceAdi} Evden Eve Taşıma ve Nakliye | Sigortalı Hizmet`,
    description: `İstanbul ${ilceAdi} evden eve taşıma ve evden eve nakliye hizmetleri. Profesyonel eşya ambalajlama ve asansörlü güvenli taşımacılık ile hizmetinizdeyiz.`,
  };
}

export default async function IlceSayfasi({ params }: Props) {
  const resolvedParams = await params;
  const ilceAdi = resolvedParams.ilce.charAt(0).toUpperCase() + resolvedParams.ilce.slice(1);

  return (
    <main className="min-h-screen p-10 bg-gray-50 text-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          {ilceAdi} Evden Eve Taşıma ve Nakliye
        </h1>
        
        <h2 className="text-xl font-semibold mb-6 text-gray-700">
          {ilceAdi} bölgesinde asansörlü, sigortalı ve profesyonel eşya taşımacılığı
        </h2>
        
        <p className="text-lg mb-6">
          İstanbul <strong>{ilceAdi}</strong> için kurduğumuz özel araç filomuz ve uzman kadromuzla, eşyalarınızı en ufak bir hasar riski olmadan taşıyoruz. Kusursuz eşya ambalajlama tekniklerimiz sayesinde evden eve taşıma sürecinizi stresten uzak, hızlı ve güvenli bir şekilde tamamlıyoruz.
        </p>

        <p className="text-lg mb-6">
          Sadece standart bir taşıma değil, tam kapsamlı evden eve nakliye hizmeti sunuyoruz. Yüksek katlı binalar için kurduğumuz modüler asansör sistemlerimizle {ilceAdi} sokaklarında en zorlu koşullarda bile kusursuz operasyon yürütüyoruz.
        </p>
      </div>
    </main>
  );
}
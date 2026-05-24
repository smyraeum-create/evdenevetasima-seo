import { MetadataRoute } from 'next';

const baseUrl = 'https://evdenevetasima.org';

const avrupaYakasi = [
  "Arnavutköy", "Avcılar", "Bağcılar", "Bahçelievler", "Bakırköy", "Başakşehir", "Bayrampaşa", "Beşiktaş", "Beylikdüzü", "Beyoğlu", "Büyükçekmece", "Çatalca", "Esenler", "Esenyurt", "Eyüpsultan", "Fatih", "Gaziosmanpaşa", "Güngören", "Kâğıthane", "Küçükçekmece", "Sarıyer", "Silivri", "Sultangazi", "Şişli", "Zeytinburnu"
];
const anadoluYakasi = [
  "Adalar", "Ataşehir", "Beykoz", "Çekmeköy", "Kadıköy", "Kartal", "Maltepe", "Pendik", "Sancaktepe", "Sultanbeyli", "Şile", "Tuzla", "Ümraniye", "Üsküdar"
];
const tumIlceler = [...avrupaYakasi, ...anadoluYakasi];

const hizmetler = [
  "evden-eve-nakliyat", "asansorlu-nakliyat", "sehirler-arasi-tasima", "ofis-tasima", "parca-esya-tasima", "arac-nakliyati", "esya-depolama", "montaj-ve-demontaj"
];
const bloglar = [
  "tasinma-rehberi", "nakliyat-sigortasi", "esya-paketleme-tuyolari", "asansorlu-nakliyat-uygunluk", "sehirler-arasi-nakliyat-fiyatlari", "sorunsuz-ofis-tasima"
];

const slugify = (text: string) => {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[çÇ]/g, 'c')
    .replace(/[ğĞ]/g, 'g')
    .replace(/[ıİ]/g, 'i')
    .replace(/[öÖ]/g, 'o')
    .replace(/[şŞ]/g, 's')
    .replace(/[üÜ]/g, 'u')
    .replace(/[âÂ]/g, 'a')
    .replace(/[îÎ]/g, 'i')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/hakkimizda',
    '/hizmetler',
    '/istanbul',
    '/blog',
    '/iletisim',
    '/araclar/hacim-hesaplama',
    '/nakliyat-sozlesmesi'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const ilceRoutes = tumIlceler.map((ilce) => ({
    url: `${baseUrl}/istanbul/${slugify(ilce)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const hizmetRoutes = hizmetler.map((hizmet) => ({
    url: `${baseUrl}/hizmetler/${hizmet}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const blogRoutes = bloglar.map((blog) => ({
    url: `${baseUrl}/blog/${blog}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...hizmetRoutes, ...ilceRoutes, ...blogRoutes];
}
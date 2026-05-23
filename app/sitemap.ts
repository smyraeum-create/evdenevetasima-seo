import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://evdenevetasima.org';

  const staticRoutes = [
    '',
    '/hakkimizda',
    '/iletisim',
    '/nakliyat-sozlesmesi',
    '/blog',
    '/cerez-politikasi',
    '/araclar/hacim-hesaplama',
    '/araclar/mesafe-hesaplama',
    '/araclar/esya-listesi'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const services = [
    'evden-eve-nakliyat',
    'sehirler-arasi-tasima',
    'ofis-tasima',
    'parca-esya-tasima',
    'arac-nakliyati',
    'esya-depolama',
    'montaj-ve-demontaj'
  ].map((service) => ({
    url: `${baseUrl}/hizmetler/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const districts = [
    'arnavutkoy', 'avcilar', 'bagcilar', 'bahcelievler', 'bakirkoy', 'basaksehir',
    'bayrampasa', 'besiktas', 'beylikduzu', 'beyoglu', 'buyukcekmece', 'catalca',
    'esenler', 'esenyurt', 'eyupsultan', 'fatih', 'gaziosmanpasa', 'gungoren',
    'kagithane', 'kucukcekmece', 'sariyer', 'silivri', 'sultangazi', 'sisli',
    'zeytinburnu', 'adalar', 'atasehir', 'beykoz', 'cekmekoy', 'kadikoy',
    'kartal', 'maltepe', 'pendik', 'sancaktepe', 'sultanbeyli', 'sile',
    'tuzla', 'umraniye', 'uskudar'
  ].map((district) => ({
    url: `${baseUrl}/istanbul/${district}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...services, ...districts];
}
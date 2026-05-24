import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import CookieBanner from "./components/CookieBanner";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Evden Eve Taşıma",
    default: "İstanbul Evden Eve Nakliyat | Profesyonel Lojistik ve Taşıma",
  },
  description: "Türkiye'nin 81 iline sigortalı, asansörlü ve uzman marangozlu evden eve nakliye hizmetleri. Profesyonel eşya taşıma için hemen ücretsiz ekspertiz alın.",
  keywords: ["evden eve nakliyat", "istanbul nakliyat", "şehirler arası taşıma", "asansörlü nakliyat", "ofis taşıma", "sigortalı taşımacılık"],
  openGraph: {
    title: "İstanbul Evden Eve Nakliyat | Lider Taşıma Firması",
    description: "Sigortalı, asansörlü ve marangozlu taşımacılık hizmetiyle eşyalarınız yeni evinize sıfır riskle taşınsın.",
    url: "https://evdenevetasima.org",
    siteName: "Evden Eve Taşıma",
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-gray-50 text-gray-900 flex flex-col min-h-screen antialiased`}>
        
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-0CY6EDY93B" 
          strategy="lazyOnload" 
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0CY6EDY93B');
          `}
        </Script>

        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
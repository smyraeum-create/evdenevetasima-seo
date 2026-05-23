interface PageBannerProps {
  title: string;
  description: string;
  category: string;
  bgImage: string;
}

export default function PageBanner({ title, description, category, bgImage }: PageBannerProps) {
  return (
    <section className="relative bg-blue-950 text-white py-16 md:py-24 border-b-4 border-orange-500 overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${bgImage}')` }}
        ></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <span className="bg-orange-500 text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 inline-block shadow-sm">
          {category}
        </span>
        <h1 className="text-3xl md:text-5xl font-black mt-2 tracking-tight uppercase">
          {title}
        </h1>
        <p className="mt-4 text-blue-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </section>
  );
}
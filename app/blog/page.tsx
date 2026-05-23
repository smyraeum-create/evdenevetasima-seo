import Link from "next/link";

export default function BlogPage() {
  const posts = [
    { slug: "tasinma-rehberi", title: "Ev Taşırken Dikkat Edilmesi Gereken 10 Altın Kural" },
    { slug: "nakliyat-sigortasi", title: "Nakliyat Sigortası Nedir? Neleri Kapsar?" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-blue-950 mb-8">Nakliyat Rehberi ve Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-blue-950 mb-4">{post.title}</h2>
              <Link href={`/blog/${post.slug}`} className="text-orange-500 font-bold hover:underline">
                Devamını Oku →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
import PageTitle from '@/components/PageTitle';
import BlogCard from '@/components/BlogCard';

const blogPosts = [
  {
    title: "SAP EWM ile Depo Yönetiminde Verimlilik",
    excerpt: "Modern depo yönetiminde SAP EWM'nin sunduğu avantajlar ve implementasyon sürecinde dikkat edilmesi gereken noktalar.",
    date: "15 Mart 2024",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2940&auto=format&fit=crop",
    slug: "sap-ewm-depo-yonetimi-verimlilik"
  },
  {
    title: "Endüstri 4.0 ve SAP Çözümleri",
    excerpt: "Endüstri 4.0 dönüşümünde SAP çözümlerinin rolü ve işletmelere sağladığı rekabet avantajları.",
    date: "10 Mart 2024",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop",
    slug: "endustri-4-0-sap-cozumleri"
  },
  {
    title: "Tedarik Zinciri Optimizasyonu",
    excerpt: "SAP sistemleri ile tedarik zinciri süreçlerinin optimize edilmesi ve maliyetlerin düşürülmesi stratejileri.",
    date: "5 Mart 2024",
    imageUrl: "https://images.unsplash.com/photo-1494961104209-3c223057bd26?q=80&w=2942&auto=format&fit=crop",
    slug: "tedarik-zinciri-optimizasyonu"
  },
  {
    title: "SAP S/4HANA Migrasyonu",
    excerpt: "SAP S/4HANA'ya geçiş sürecinde başarı faktörleri ve işletmelerin alması gereken hazırlık adımları.",
    date: "1 Mart 2024",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop",
    slug: "sap-s4hana-migrasyonu"
  },
  {
    title: "Depo Otomasyonunda Yeni Trendler",
    excerpt: "Depo yönetiminde otomasyon teknolojilerinin kullanımı ve SAP EWM entegrasyonu örnekleri.",
    date: "25 Şubat 2024",
    imageUrl: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?q=80&w=2940&auto=format&fit=crop",
    slug: "depo-otomasyonu-trendler"
  },
  {
    title: "SAP Fiori Kullanıcı Deneyimi",
    excerpt: "SAP Fiori ile geliştirilmiş kullanıcı deneyimi ve mobil çözümlerin iş süreçlerine etkisi.",
    date: "20 Şubat 2024",
    imageUrl: "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2940&auto=format&fit=crop",
    slug: "sap-fiori-kullanici-deneyimi"
  }
];

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <PageTitle>Blog</PageTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            imageUrl={post.imageUrl}
            slug={post.slug}
          />
        ))}
      </div>
    </main>
  );
} 
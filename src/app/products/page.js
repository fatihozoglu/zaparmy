import PageTitle from '@/components/PageTitle';
import ProductItem from '@/components/ProductItem';

const products = [
  {
    title: "SenkronARM",
    description: (
      <>
        <p className="mb-4">
            SenkronARM ile EWM ve ERP arasında kuyruk sorunları ile ilgilenmenize artık gerek yok. Geliştirmiş olduğumuz bu çözümümüz, alınan teslimat ile mal girişlerinde karşılaşılabilecek herhangi bir ERP hatasını EWM önyüzünde önceden sizlere sunacaktır. Bu sayede ay sonunda, dönem kapanışlarında veya herhangi bir "t" anında kuyruk yönetimi ile vakit kaybetmenize gerek kalmayacak.
        </p>
        {/* <ul className="list-disc pl-5 mb-4">
          <li>Gelişmiş depo yönetimi ve kontrol</li>
          <li>Optimize edilmiş depo süreçleri</li>
          <li>Gerçek zamanlı envanter izleme</li>
          <li>Otomatik depo operasyonları</li>
          <li>Entegre kalite yönetimi</li>
        </ul> */}
      </>
    ),
    imageUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2935&auto=format&fit=crop"
  },
  {
    title: "BestARM",
    description: (
      <>
        <p className="mb-4">
            Avantajı ve dezavantajı ile, doğrusuyla, yanlışıyla EWM test yaparak öğrenilir ancak tecrübe etmeden kurgulanamaz. Biz BestARM çözümümüz ile 10 farklı ana senaryomuzdan seçeceğiniz 6 senaryoru bir ay içinde hazırlayıp canlıya alıyoruz. Tecürübelerimize dayanarak hazırlamış olduğumuz BC setlerimiz ile SAP standartlarına uyarak süreçlerinizi sistem üzerinde modelliyoruz.   
        </p>
        {/* <ul className="list-disc pl-5 mb-4">
          <li>S/4HANA ile tam entegrasyon</li>
          <li>Basitleştirilmiş IT altyapısı</li>
          <li>Gelişmiş analitik yetenekler</li>
          <li>Hızlı implementasyon</li>
          <li>Düşük toplam sahip olma maliyeti</li>
        </ul> */}
      </>
    ),
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2940&auto=format&fit=crop"
  }
];

export default function ProductsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <PageTitle>Ürünler</PageTitle>
      
      <div className="space-y-8">
        {products.map((product, index) => (
          <ProductItem
            key={index}
            title={product.title}
            description={product.description}
            imageUrl={product.imageUrl}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </main>
  );
} 
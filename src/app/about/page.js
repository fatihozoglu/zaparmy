import PageTitle from '@/components/PageTitle';
import PageSubtitle from '@/components/PageSubtitle';
import PersonCard from '@/components/PersonCard';

const teamMembers = [
  {
    name: "Levent Çağlar",
    title: "SAP EWM Solution Architect | Co-Founder",
    description: "15+ years of experience in SAP implementations across multiple industries. Expert in SAP S/4HANA transformations.",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQGg2AqoW4FKNg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1665513722627?e=1741219200&v=beta&t=7UyT-TL7u-qhPlJ_sJCCUyKSvU-1WGnK7Uv2oL89FAw"
  },
  {
    name: "Mert Akan",
    title: "SAP EWM Expert | Co-Founder",
    description: "Specialized in SAP ABAP development and technical architecture. Leading complex integration projects.",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQGF4lgeIl9xVA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1662059928533?e=1741219200&v=beta&t=5hKN5l_1J1BAzBcyMQV0X-nEMoHx1tPGJhT0EPmjBkc"
  },
  {
    name: "Oltan Terzi",
    title: "SAP ABAP Developer",
    description: "Expert in SAP FI/CO modules with deep knowledge of financial processes and regulatory requirements.",
    imageUrl: "https://media.licdn.com/dms/image/v2/C4D03AQEC7bMqfUJ7Pg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1571689590064?e=1741219200&v=beta&t=hOBHaYy07Wemt3qqvPkzSMTiHvmdgcOf2OyxxPf9lds"
  },
  {
    name: "Hidanur Başak Göntürk",
    title: "Senior EWM Consultant",
    description: "PMP certified with extensive experience in managing large-scale SAP implementations.",
    imageUrl: "https://media.licdn.com/dms/image/v2/C4D03AQFLHfqq6FNugA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1590005966803?e=1741219200&v=beta&t=_DvexdLl5sDQDuYwxJ2y7pW5iInNQ2UJPUevrRwZKRs"
  },
  {
    name: "Senem Gündoğdu Çağlar",
    title: "SAP Senior MM Consultant",
    description: "Specialized in Sales and Distribution processes with focus on customer experience optimization.",
    imageUrl: "https://media.licdn.com/dms/image/v2/C5603AQGWvBjQWqP9MA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1532961668504?e=1741219200&v=beta&t=0_hVMWBff94xdk3IVGL1Usu5J6wcbYqoQGuhbxMupEI"
  },
  {
    name: "Kaan Alperen Özen",
    title: "Senior SAP MM Consultant",
    description: "Expert in Materials Management and procurement processes. Specialized in supply chain optimization.",
    imageUrl: "https://media.licdn.com/dms/image/v2/C4D03AQEPgkpajJjU6g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1595858148267?e=1741219200&v=beta&t=x--z7o_36apH2IwAkEeMjPQ_om_Bh9mCjzUgM8eMAo8"
  }
];

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <PageTitle>Hakkımızda</PageTitle>
      
      <div className="mb-12">
        <PageSubtitle>Biz Kimiz?</PageSubtitle>
        <p className="text-gray-600 mb-6">
            Daha iyi bir gelecek inşa etmek için çığır açan fikirler üreten, enerjisi yüksek, tecrübeli ve yetenekli, girişimci mühendislerden oluşan bir ekibiz. Ölçeği ne olursa olsun şirketlere sunduğumuz akıllı çözümlerle ve benzersiz hizmetlerimizle gurur duyuyoruz. ZAPARMY olarak, doğru anlayış ve teknoloji avantajının şirketleri başarılı bir geleceğe yönelteceğine inanıyoruz. SAP ekosistemi içerisinde Procure to Pay (P2P), Internal Logistics (IL) ve Order to Cash (O2C) alanlarında lojistik hizmetler sunan şirketimiz, öğrenmek-öğretmek ve gelişmek-geliştirmek amacıyla sizlerle birlikte olmaya can atıyor.
        </p>
      </div>

      <div className="mb-12">
        <PageSubtitle>Ekibimiz</PageSubtitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <PersonCard
              key={index}
              name={member.name}
              title={member.title}
              description={member.description}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>
    </main>
  );
} 